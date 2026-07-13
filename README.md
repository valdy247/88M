# Red Book Trainer

Red Book Trainer is an unofficial 88M practice testing platform built with Next.js, TypeScript, and Tailwind CSS. It simulates a mobile-first study exam with 25 randomized questions, a 40-minute timer, answer review, and copy/print-ready results.

## Disclaimer

This application is an unofficial independent study tool. Not affiliated with, sponsored by, or endorsed by the U.S. Army or the Department of Defense. Always verify information using your current authorized training materials and instructor guidance.

## Requirements

- Node.js 18 or later
- npm

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Open the app at `http://localhost:3000`.

## Validation

Use the question validation command to check the question bank during development:

```bash
npm run validate:questions
```

## Testing

```bash
npm test
```

## Production Build

```bash
npm run build
```

## Vercel Deployment

This app is compatible with Vercel. Deploy by pushing the repository to a Git provider and connecting it to Vercel. Ensure the build command is `npm run build` and the output directory is the default `.next`.

## Question Schema

The application uses a strict question schema in `src/types/question.ts`:

- `id`: unique question identifier
- `category`: one of the supported 11 study categories
- `difficulty`: `easy`, `medium`, or `hard`
- `question`: the prompt text
- `options`: exactly four answer options A–D
- `correctAnswer`: the id of the correct option
- `explanation`: short justification for the correct answer
- `sourceTopic`: the study topic or reference area

## Balanced Exam Selection

Exam generation uses a balanced blueprint with category quotas so each exam includes an approximate selection across the 11 topics. If a category has fewer available questions, the generator fills remaining slots from the pool without duplicates.

## Adding or Editing Questions

1. Add or edit questions in `src/data/questions/*.ts`.
2. Ensure each question has a unique `id` and exactly four options.
3. Run `npm run validate:questions` to verify the bank.
4. Use the question schema in `src/types/question.ts` as a reference.

## Notes

- The timer uses `startedAt` and `endsAt` to remain accurate after refresh.
- The app saves exam progress in `localStorage` for resume capability.
- Results are reviewable and copy/print-ready, but this is a practice benchmark only.
