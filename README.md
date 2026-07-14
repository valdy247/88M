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

## Future Platform Roadmap (Not Implemented Yet)

The current public practice tests must remain available without an account. Future authenticated features should be introduced in phases so the application can keep growing without coupling content, analytics, and authorization.

### Phase 1: Accounts and data foundation

- Use Supabase Auth and Postgres with server-side session checks and Row Level Security.
- Register first name, last name, rank, and class number. Class number must never be a CAC ID, DoD ID, SSN, or another sensitive government identifier.
- Use email and password by default, or class number and password only after the recovery and uniqueness rules are defined.
- Add `student` and `admin` roles. Administrative authorization must be verified by the server and must not rely on a shared password embedded in the application.
- Suggested tables: `profiles`, `user_roles`, `exam_attempts`, `exam_answers`, `category_progress`, and `activity_events`.
- Migrate a signed-in user's eligible local exam history into their account without removing anonymous access.

### Phase 2: Student profile and progress

- Mobile-first profile with visual cards instead of long text.
- Show average score, best score, completed tests, recent activity, study streak, strong categories, and focus areas.
- Add personalized actions such as `Practice missed questions` and `Practice weak areas`.
- Keep regular and BIG ASS TEST attempts distinguishable in analytics.

### Phase 3: Administration

- Add an `Are you an admin?` entry in the home menu that leads to secure authentication.
- Show registered users, active users, completed tests, average score, pass rate, averages by test type, and the categories most often missed.
- Add mobile-friendly search and compact user summaries, with optional CSV export.
- Protect individual student data with server-side authorization and least-privilege database policies.

### Phase 4: Authenticated learning content

- Add a Cadences section whose database-managed cards link to approved YouTube videos.
- Add a Soldier Essentials section for the U.S. National Anthem, Soldier's Creed, Army Song, and Transportation Corps Song, including approved video links and expandable lyrics when publication rights permit.
- Add a filterable gallery for course-relevant vehicles and other approved 88M material.
- Store content records in `cadences`, `resource_links`, and `gallery_items`, with `user_favorites` available for future personalization.
- Only use official, owned, public-domain, or otherwise authorized text, images, and video links. Do not publish sensitive locations, documents, identifiers, or operational details.

### Inputs required before implementation

- Supabase project URL and publishable key configured through environment variables and Vercel.
- Final login choice and recovery policy.
- Definition and validation rules for class number.
- Identity of the first administrator.
- Approved rank list, privacy text, and account-deletion contact.
- Approved YouTube links, lyrics or official sources, and gallery images with usage permission.

### Future-friendly enhancements

- Flashcards, glossary, question bookmarks, question-of-the-day, and configurable study plans.
- Source/version metadata for every question and a workflow for reporting outdated content.
- PWA/offline support, accessibility controls, instructor announcements, class groups, backups, and an administrative audit log.

## Question Bank Review Standard

The bank is an independent study aid, not a reproduction of a controlled or official Red Book examination. Publicly available references do not provide a verified official Red Book question bank. Questions should therefore test practical recognition and judgment at a moderate level, avoid trick wording, use plausible distractors, and defer to current authorized course material and instructor guidance.

Public reference areas used for review include:

- U.S. Army Transportation Corps 88M career information: https://transportation.army.mil/enlisted/cmf88m.html
- ATP 4-11, Army Motor Transport Operations: https://rdl.train.army.mil/catalog-ws/view/100.ATSC/8D6DF8FA-FCD5-4A6F-BEE4-B15D10BE1BF5-1373892396033/atp4_11.pdf
- U.S. Army Combat Readiness Center ground-guiding guidance: https://safety.army.mil/ON-DUTY/Government-Motor-Vehicle/Ground-Guiding/1000
- TC 3-21.60, Visual Signals, as linked by the Army safety guidance.

Before publishing question changes, review every prompt, answer, distractor, explanation, difficulty label, category, and source topic; then run validation, tests, and the production build.
