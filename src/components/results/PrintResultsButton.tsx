'use client';

import { Printer } from 'lucide-react';
import { loadExamSession } from '../../lib/storage/exam-storage';

function splitText(doc: any, text: string, maxWidth: number) {
  return doc.splitTextToSize(text, maxWidth);
}

export function PrintResultsButton() {
  const handleExport = async () => {
    const session = loadExamSession();
    if (!session) {
      alert('No completed or active exam session found.');
      return;
    }

    const missed = session.questions.filter((q) => {
      const answer = session.answers[q.id];
      return !answer || answer !== q.correctAnswer;
    });

    if (missed.length === 0) {
      alert('No missed questions to export.');
      return;
    }

    try {
      const { jsPDF } = await import('jspdf');
      const doc = new jsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait' });
      const margin = 14;
      const pageWidth = 210 - margin * 2;
      let y = 18;

      doc.setFontSize(18);
      doc.text('Red Book Trainer — Missed Questions', margin, y);
      y += 10;
      doc.setFontSize(10);
      doc.text(`Exported: ${new Date().toLocaleString()}`, margin, y);
      y += 12;

      missed.forEach((q, index) => {
        const userAnswer = session.answers[q.id] ?? 'Unanswered';
        const correctAnswer = q.correctAnswer;
        const userText = userAnswer === 'Unanswered' ? 'Unanswered' : `${userAnswer} — ${q.options.find((option) => option.id === userAnswer)?.text ?? ''}`;
        const correctText = `${correctAnswer} — ${q.options.find((option) => option.id === correctAnswer)?.text ?? ''}`;

        doc.setFontSize(12);
        const questionLines = splitText(doc, `${index + 1}. ${q.question}`, pageWidth);
        doc.text(questionLines, margin, y);
        y += questionLines.length * 6;

        doc.setFontSize(10);
        const answerLines = splitText(doc, `Your answer: ${userText}`, pageWidth);
        doc.text(answerLines, margin, y);
        y += answerLines.length * 5.5;

        const correctLines = splitText(doc, `Correct answer: ${correctText}`, pageWidth);
        doc.text(correctLines, margin, y);
        y += correctLines.length * 5.5;

        const explanationLines = splitText(doc, `Explanation: ${q.explanation}`, pageWidth);
        doc.setFontSize(9);
        doc.text(explanationLines, margin, y);
        y += explanationLines.length * 5.5;
        y += 8;

        if (y > 270 && index !== missed.length - 1) {
          doc.addPage();
          y = 18;
        }
      });

      const filename = `red-book-missed-${new Date().toISOString().slice(0, 10)}.pdf`;
      doc.save(filename);
    } catch (error) {
      console.error('PDF export failed', error);
      alert('No se pudo generar el PDF en este dispositivo. Intenta desde un navegador de escritorio o usa la función de imprimir.');
    }
  };

  return (
    <button
      type="button"
      onClick={handleExport}
      className="inline-flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500"
      aria-label="Export missed questions as PDF"
    >
      <Printer className="h-4 w-4" />
      Export Missed as PDF
    </button>
  );
}
