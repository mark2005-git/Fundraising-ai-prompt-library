# GivingPrompt — Fundraising AI Prompt Library

**An independent, browser-based prototype for helping fundraising teams build structured, reusable AI prompts for communication workflows.**

GivingPrompt explores how guided prompt engineering can make generative AI easier to use more consistently and responsibly in fundraising contexts, particularly for people who may not have a technical background.

> **Project status:** Working front-end prototype. The application provides three guided fundraising workflows, context-specific forms, input validation, structured prompt assembly, a prompt preview, and a copy action. The core browser workflow has been manually exercised: users can generate a prompt, change their inputs and see the prompt update, copy the result, and receive warnings when required information is missing. Automated tests and a production build are still part of the remaining verification work.

This is an independent portfolio project. It is not an official UNICEF product, commissioned project, partnership, or endorsed system. The scenarios are illustrative and do not describe UNICEF's internal processes or policies.

## The problem it explores

People often interact with generative AI by writing one-off prompts. In a professional fundraising context, those prompts can omit important context, produce inconsistent instructions, or fail to make limitations and review requirements explicit. Non-technical users may also find it difficult to know what information to provide or how to structure a useful prompt.

GivingPrompt explores a practical alternative: guide the user through a defined task, collect relevant context through a form, and assemble that information into a structured prompt with explicit instructions, constraints, output expectations, and human-review reminders.

## What the prototype can do

### 1. Choose a fundraising workflow

The application provides three workflow templates:

- **Donor acquisition:** prepare an introductory campaign message for a broad audience.
- **Donor stewardship:** prepare an appreciation message that recognises support without inventing donor or impact details.
- **Donor retention:** prepare a considerate re-engagement message that respects the recipient's choice.

### 2. Add campaign context

Each workflow presents its own guided form based on its template definition. Users provide the information relevant to that task through fields with descriptions, examples or placeholders, required-field indicators, character limits, and appropriate text, long-text, or selection controls.

### 3. Validate inputs

The prompt engine checks required fields, maximum field lengths, valid selection values, and the combined input-length limit. Validation feedback is displayed in the interface so users can correct missing or invalid information.

### 4. Assemble and update a structured prompt

The application combines the selected workflow template with the context supplied by the user. The resulting prompt includes the task instructions, supplied context, constraints, expected output format, and human-review requirements. When users change their inputs, the assembled prompt reflects those changes.

### 5. Preview and copy

Users can inspect the assembled prompt in the browser and copy it for use in a separate AI tool. The copy action is initiated by the user.

## How it works

1. Select Donor Acquisition, Donor Stewardship, or Donor Retention.
2. Complete the workflow-specific form using appropriate, non-sensitive context.
3. Review validation feedback and correct any missing or invalid inputs.
4. Generate and inspect the assembled prompt.
5. Copy the prompt into a separate AI tool if desired.
6. Review any AI-generated draft for accuracy, fairness, tone, and suitability before real-world use.

**Important:** GivingPrompt assembles prompts; it does not currently connect to an AI model, generate the final fundraising message, or send communications.

## Technology

- **React** for the user interface.
- **TypeScript** for typed workflow definitions and application logic.
- **Vite** for local development and production builds.
- **Lucide React** for interface icons.
- **Vitest** for unit tests of prompt-engine logic.
- **Browser Clipboard API** for the user-initiated copy action.

The workflow templates are kept separate from the interface, allowing prompt content and constraints to be reviewed and updated without rewriting the dashboard.

## Responsible-use design

The prototype includes safeguards at the prompt-design level:

- Requests broad, non-identifying context rather than donor records.
- Treats form entries as source material, not instructions that can override the template.
- Directs the downstream model not to invent missing facts, statistics, impact claims, or personal details.
- Avoids guilt, fear, shame, fabricated urgency, and manipulative messaging.
- Makes human review an explicit part of the assembled prompt.

These are design measures, not guarantees. Prompt instructions cannot ensure that an AI model will always behave correctly.

**Use synthetic or non-sensitive information only.** Do not enter real donor names, contact details, payment information, confidential correspondence, or other personal records.

See [Responsible AI and safeguards](docs/responsible-ai.md).

## Run locally

Requirements: Node.js 20 or later and npm.

```bash
git clone https://github.com/mark2005-git/Fundraising-ai-prompt-library.git
cd Fundraising-ai-prompt-library
npm install
npm run dev
```

Open the local URL printed by Vite in your browser.

Create a production build:

```bash
npm run build
```

Run the unit tests:

```bash
npm test
```

## Repository structure

```text
.
├── src/
│   ├── App.tsx                 # Dashboard, workflow forms, preview and copy
│   ├── main.tsx                # React application entry point
│   ├── index.css               # Interface styling
│   └── lib/
│       ├── templates.ts        # Typed workflow and field definitions
│       ├── promptEngine.ts     # Validation and prompt assembly
│       └── promptEngine.test.ts
├── docs/
│   ├── architecture.md
│   ├── prompt-template-spec.md
│   └── responsible-ai.md
├── prompts/
│   ├── acquisition.md
│   ├── stewardship.md
│   └── retention.md
├── package.json
└── vite.config.ts
```

## Current scope and limitations

The current application is a client-side prompt-building prototype. It does not include:

- Direct integration with an AI model or AI provider.
- User accounts, authentication, or role-based access.
- A backend database or persistent storage for submitted form data.
- Donor-management system integrations.
- Automated sending or publishing of communications.
- Automated donor scoring, profiling, or consequential decisions.
- Organisational approval or certification.

The prompt templates and interface are illustrative and require further testing and review before any operational use.

## Next development steps

- Run the automated unit tests and production build, and resolve any issues found.
- Complete workflow-by-workflow testing, including missing, contradictory, boundary, and unsafe inputs.
- Review dependency security audit findings and apply safe updates where appropriate.
- Improve usability and accessibility based on feedback.
- Expand synthetic evaluation scenarios and document test results.
- Evaluate prompt quality with a separate AI provider only after defining appropriate privacy, security, evaluation, and human-review controls.

## Project ownership and disclaimer

GivingPrompt is an independently developed learning and portfolio project exploring responsible AI workflow design for fundraising communication. It is not affiliated with, commissioned by, or endorsed by UNICEF.

Feedback on usability, prompt structure, evaluation, and responsible AI is welcome.
