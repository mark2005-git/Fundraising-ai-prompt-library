# Fundraising AI Prompt Library

**An independent, browser-based prototype for building structured, reusable AI prompts for fundraising communication workflows.**

The Fundraising AI Prompt Library explores how prompt engineering can make generative AI easier to use consistently and responsibly in fundraising contexts -particularly for staff who may not have a technical background.

> **Project status:** Working front-end prototype. The application currently supports three guided workflows, dynamic input forms, basic validation, structured prompt assembly, prompt preview, and copying. It does not currently connect to an AI model or generate the final fundraising message itself.

This is an independent portfolio project. It is not an official UNICEF product, commissioned project, partnership, or endorsed system. The scenarios are illustrative and do not describe UNICEF's internal processes or policies.

## The problem it explores

People often interact with generative AI by writing one-off prompts. In a professional fundraising context, those prompts can omit important context, produce inconsistent instructions, or fail to make limitations and review requirements explicit. Non-technical users may also find it difficult to know what information to provide or how to structure a useful prompt.

This project explores a practical alternative: guide the user through a defined task, collect relevant context through a form, and assemble that information into a structured prompt with explicit instructions, constraints, output expectations, and human-review reminders.

## What the prototype can do

### 1. Select a fundraising workflow

The dashboard presents three workflow templates:

- **Donor acquisition:** prepare an introductory campaign message for a broad audience.
- **Donor stewardship:** prepare an appreciation message that recognises support without inventing donor or impact details.
- **Donor retention:** prepare a considerate re-engagement message that respects the recipient's choice.

### 2. Collect context through guided forms

Each workflow loads its own fields from the template definitions. Fields include plain-language descriptions, examples or placeholders, required-field indicators, character limits, and appropriate text, long-text, or selection controls.

### 3. Validate user input

The prompt engine checks required fields, maximum field lengths, valid selection values, and the combined input-length limit. Validation feedback is displayed in the interface.

### 4. Assemble a structured prompt

The prompt assembly engine combines the selected template with the user's supplied context. It keeps supplied content clearly distinguished from system instructions and includes the workflow's constraints, output format, and human-review requirements.

### 5. Preview and copy the prompt

Users can inspect the assembled prompt in the browser and copy it for use in a separate AI tool. This prototype does not send the prompt to an AI provider.

## How it works

1. Select Acquisition, Stewardship, or Retention.
2. Complete the workflow-specific form using appropriate, non-sensitive context.
3. Review validation feedback and correct any missing or invalid inputs.
4. Assemble the prompt.
5. Inspect and copy the generated prompt.
6. If using it with an AI model, review the resulting draft for accuracy, fairness, tone, and suitability before any real-world use.

## Technology

- **React** for the user interface.
- **TypeScript** for typed workflow definitions and application logic.
- **Vite** for local development and production builds.
- **Lucide React** for interface icons.
- **Vitest** for unit tests of prompt-engine logic.

The workflow templates are kept separate from the interface, allowing prompt content and constraints to be reviewed and updated without rewriting the dashboard.

## Responsible-use design

The prototype includes safeguards at the prompt-design level:

- Requests broad, non-identifying context rather than donor records.
- Treats form entries as source material, not instructions that can override the template.
- Directs the model not to invent missing facts, statistics, impact claims, or personal details.
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

- Test the full user journey for all three workflows.
- Run the automated test suite and production build, and resolve any issues found.
- Improve usability and accessibility based on feedback.
- Expand synthetic test cases, including missing, contradictory, and unsafe input.
- Evaluate prompt quality with a separate AI provider only after defining appropriate controls and review procedures.
- Consider persistence or additional integrations only after privacy and security requirements are established.

## Project ownership and disclaimer

This is an independently developed learning and portfolio project exploring responsible AI workflow design for fundraising communication.

Feedback on usability, prompt structure, evaluation, and responsible AI is welcome.
