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
├── README.md
├── docs/
│   ├── architecture.md
│   └── responsible-ai.md
└── prompts/
    └── README.md
```

## Development roadmap

- [x] Establish project purpose, boundaries, and initial use cases.
- [x] Document the proposed architecture and responsible-use principles.
- [ ] Define a consistent prompt-template schema.
- [ ] Draft acquisition, stewardship, and retention templates.
- [ ] Create fictional test cases and an evaluation checklist.
- [ ] Build a simple interface for selecting and filling templates.
- [ ] Test usability, document limitations, and prepare a demonstration.

## Intended audience

This project is designed as a learning and portfolio prototype for exploring responsible AI workflow design in fundraising contexts. It may be useful as a discussion starter for teams considering how to make AI assistance more consistent and accessible.

## Disclaimer

This repository is independently developed. It is not affiliated with, commissioned by, or endorsed by UNICEF. References to fundraising use cases are illustrative and do not represent UNICEF internal processes or policies.

## Contributing and feedback

Suggestions on prompt structure, usability, evaluation, and responsible AI are welcome. Any future real-world adaptation should be reviewed against the relevant organisation's policies, data-protection requirements, and approval processes.
