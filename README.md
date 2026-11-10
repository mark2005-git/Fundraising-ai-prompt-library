# Fundraising AI Prompt Library

An independent prototype exploring how structured, reusable AI workflows can support fundraising teams—especially colleagues who do not work in technical roles.

> **Project status:** Early-stage design and documentation. This is an independent portfolio project, not an official UNICEF product, partnership, or endorsed system.

## Why this project?

Fundraising teams may use generative AI for tasks such as campaign drafting, donor communications, and audience research. Unstructured prompts can produce inconsistent outputs, omit important context, or overlook privacy and review requirements.

This project explores a more disciplined approach: treating prompts as reusable workflow specifications with clear purposes, required inputs, constraints, output formats, and review steps.

## Initial use cases

The first prototype will focus on three illustrative fundraising workflows:

1. **Acquisition** — draft and adapt campaign messages for a clearly described audience.
2. **Stewardship** — prepare donor appreciation and engagement communications.
3. **Retention** — develop thoughtful re-engagement communication for lapsed or at-risk donor segments.

These are prototype scenarios, not UNICEF-approved workflows. Examples will use fictional or synthetic information only.

## Design principles

- **Usable by non-technical staff:** plain-language guidance and clearly labelled inputs.
- **Structured:** each prompt has a purpose, context, variables, constraints, and expected output.
- **Reusable:** templates can be reviewed, versioned, tested, and adapted.
- **Responsible:** privacy-conscious inputs, bias awareness, transparency, and human review.
- **Evidence-led:** document assumptions, test cases, limitations, and changes rather than making unsupported performance claims.

## Planned prompt specification

Each workflow template will document:

| Field | Purpose |
|---|---|
| Name and version | Identify and track the template |
| Intended task | Explain when it should be used |
| Required inputs | Define information the user must supply |
| Prompt instructions | Specify the task and context |
| Constraints | Set boundaries and prohibited assumptions |
| Output format | Make the result predictable and reviewable |
| Review checklist | Help a human check the output before use |
| Test cases | Record expected behaviour and observed results |

## Responsible-use boundaries

- Never enter real donor personal data, payment information, credentials, or confidential records into demonstration prompts.
- Use fictional or synthetic examples during development.
- Treat generated content as a draft, not an automatically approved communication.
- Require an appropriate human reviewer to check accuracy, tone, accessibility, bias, and organisational policy before real-world use.
- Do not use the prototype to make donor eligibility, vulnerability, or other consequential decisions.

See [Responsible AI and safeguards](docs/responsible-ai.md).

## Repository structure

```text
.
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── lib/
│       ├── templates.ts
│       ├── promptEngine.ts
│       ├── promptEngine.test.ts
│       └── README.md
├── docs/
│   ├── architecture.md
│   ├── prompt-template-spec.md
│   └── responsible-ai.md
├── prompts/
│   ├── acquisition.md
│   ├── stewardship.md
│   └── retention.md
├── index.html
├── package.json
└── vite.config.ts
```

## Run the prototype locally

Requirements: Node.js 20 or later and npm.

```bash
git clone https://github.com/mark2005-git/Fundraising-ai-prompt-library.git
cd Fundraising-ai-prompt-library
npm install
npm run dev
```

Open the local URL printed by Vite in your browser. The current dashboard is a client-side prototype; it does not connect to an AI model or send form data to a server.

To create a production build:

```bash
npm run build
```

To run the unit tests after installing dependencies:

```bash
npm test
```

## Development roadmap

- [x] Establish project purpose, boundaries, and initial use cases.
- [x] Document the proposed architecture and responsible-use principles.
- [x] Define a consistent prompt-template schema.
- [x] Draft acquisition, stewardship, and retention templates.
- [x] Add a prompt assembly engine with input validation and unit tests.
- [x] Build the initial React + TypeScript dashboard for the three workflows.
- [ ] Add dynamic workflow forms, inline validation, prompt preview, and copy action.
- [ ] Run automated tests, test usability, document limitations, and prepare a demonstration.

## Intended audience

This project is designed as a learning and portfolio prototype for exploring responsible AI workflow design in fundraising contexts. It may be useful as a discussion starter for teams considering how to make AI assistance more consistent and accessible.

## Disclaimer

This repository is independently developed. It is not affiliated with, commissioned by, or endorsed by UNICEF. References to fundraising use cases are illustrative and do not represent UNICEF internal processes or policies.

## Contributing and feedback

Suggestions on prompt structure, usability, evaluation, and responsible AI are welcome. Any future real-world adaptation should be reviewed against the relevant organisation's policies, data-protection requirements, and approval processes.
