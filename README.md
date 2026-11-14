# GivingPrompt — Fundraising AI Prompt Library

**An independent, browser-based prototype for helping fundraising teams build structured, reusable AI prompts for communication workflows.**

GivingPrompt explores how guided prompt engineering can make generative AI easier to use more consistently and responsibly in fundraising contexts, particularly for people who may not have a technical background.

> **Project status:** Working front-end prototype. The application provides three guided fundraising workflows, context-specific forms, input validation, structured prompt assembly, a live prompt preview, and a copy action. Users can write a custom tone and optionally provide a communication objective. The automated unit tests and production build have been run successfully, and the three workflows have been manually tested.

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

### 3. Customize tone and communication objective

The tone field accepts free text rather than limiting users to a fixed list of styles. This allows combinations such as **"persuasive but respectful"**, **"empathetic and reassuring"**, or another tone that suits the communication.

Users can also provide an optional **communication objective** describing what the message should help the reader understand, feel, or do. For example, the objective might be to build trust, explain why a campaign matters, encourage informed action without pressure, or invite a previous supporter to reconnect. When supplied, the objective is included in the assembled prompt; leaving it blank is valid.

### 4. Validate inputs

The prompt engine checks required fields, maximum field lengths, valid selection values, and the combined input-length limit. Validation feedback is displayed in the interface so users can correct missing or invalid information.

### 5. Assemble and update a structured prompt

The application combines the selected workflow template with the context supplied by the user. The resulting prompt includes the task instructions, supplied context, tone, communication objective when provided, constraints, expected output format, and human-review requirements. When users change their inputs, the assembled prompt reflects those changes.

### 6. Preview and copy

Users can inspect the assembled prompt in the browser and copy it for use in a separate AI tool. The copy action is initiated by the user.

## How it works

1. Select Donor Acquisition, Donor Stewardship, or Donor Retention.
2. Complete the workflow-specific form using appropriate, non-sensitive context.
3. Enter a tone and, if useful, a communication objective.
4. Review validation feedback and correct any missing or invalid inputs.
5. Generate and inspect the assembled prompt.
6. Copy the prompt into a separate AI tool if desired.
7. Review any AI-generated draft for accuracy, fairness, tone, and suitability before real-world use.

**Important:** GivingPrompt assembles prompts; it does not currently connect to an AI model, generate the final fundraising message, or send communications.

## Technology

- **React** for the user interface.
- **TypeScript** for typed workflow definitions and application logic.
- **Vite** for local development and production builds.
- **Lucide React** for interface icons.
- **Vitest** for unit tests of prompt-engine logic.
- **Browser Clipboard API** for the user-initiated copy action.

The workflow templates are kept separate from the interface, allowing prompt content and constraints to be reviewed and updated without rewriting the dashboard.

## Testing and verification

The current prototype has undergone the following checks:

- Automated unit tests for prompt assembly and input validation.
- Production build using `npm run build`.
- Manual testing of the Donor Acquisition, Donor Stewardship, and Donor Retention workflows.
- Manual checks of prompt preview updates and the copy action.
- Manual checks that custom tone wording is included in the assembled prompt.
- Manual checks that the optional communication objective is included when supplied and can be left blank.

These checks demonstrate the current prototype's functionality; they do not constitute a formal security, accessibility, usability, or production-readiness audit.

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

- Expand workflow testing with contradictory, boundary, and unsafe-input scenarios.
- Conduct a focused accessibility and usability review.
- Expand synthetic evaluation scenarios and document prompt-quality findings.
- Review the prompt templates with fundraising practitioners and revise them based on feedback.
- Evaluate prompt quality with a separate AI provider only after defining appropriate privacy, security, evaluation, and human-review controls.

## Project ownership and disclaimer

GivingPrompt is an independently developed learning and portfolio project exploring responsible AI workflow design for fundraising communication. It is not affiliated with, commissioned by, or endorsed by UNICEF.

Feedback on usability, prompt structure, evaluation, and responsible AI is welcome.
