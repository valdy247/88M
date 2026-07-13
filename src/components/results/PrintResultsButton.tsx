'use client';

import { Printer } from 'lucide-react';
import { loadExamSession } from '../../lib/storage/exam-storage';

export function PrintResultsButton() {
  const handleExport = async () => {
    const session = loadExamSession();
    if (!session) {
      alert('No completed or active exam session found.');
      return;
    }

    // collect missed or unanswered questions
    const missed = session.questions.filter((q) => {
      const answer = session.answers[q.id];
      return !answer || answer !== q.correctAnswer;
    });

    if (missed.length === 0) {
      alert('No missed questions to export.');
      return;
    }

    // build printable container
    const container = document.createElement('div');
    container.style.padding = '24px';
    container.style.fontFamily = 'Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial';
    container.innerHTML = `
      <h1 style="font-size:20px; margin-bottom:8px;">Red Book Trainer — Missed Questions</h1>
      <p style="font-size:12px; color:#666; margin-bottom:18px;">Exported: ${new Date().toLocaleString()}</p>
      ${missed
        .map((q, i) => {
          const user = session.answers[q.id] ?? 'Unanswered';
          const correct = q.correctAnswer;
          const optionText = (id: string) => {
            const opt = q.options.find((o) => o.id === id);
            return opt ? opt.text : '';
          };
          return `
            <div style="margin-bottom:18px;">
              <div style="font-weight:600;">${i + 1}. ${q.question}</div>
              <div style="margin-top:6px;">
                <div><strong>Your answer:</strong> ${user === 'Unanswered' ? 'Unanswered' : user + ' — ' + optionText(user)}</div>
                <div><strong>Correct answer:</strong> ${correct} — ${optionText(correct)}</div>
              </div>
              <div style="margin-top:8px; font-size:12px; color:#444;"><em>${q.explanation}</em></div>
            </div>
          `;
        })
        .join('')}
    `;

    document.body.appendChild(container);

    try {
      // dynamically import html2pdf to generate and auto-download PDF
      const mod = await import('html2pdf.js');
      const html2pdf = (mod as any).default ?? (mod as any);
      const filename = `red-book-missed-${new Date().toISOString().slice(0,10)}.pdf`;
      await html2pdf()
        .set({
          margin: 10,
          filename,
          html2canvas: { scale: 2 },
          jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        })
        .from(container)
        .save();
    } catch (err) {
      // fallback to print if html2pdf not available
      console.error(err);
      window.print();
    } finally {
      container.remove();
    }
  };

  return (
    <button
      type="button"
      onClick={handleExport}
      className="inline-flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500"
    >
      <Printer className="h-4 w-4" />
      Export Missed as PDF
    </button>
  );
}
