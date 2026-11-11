# System Architecture

## 1. Overview

The Fundraising AI Prompt Library is a client-side web prototype that helps a user select a fundraising communication workflow, provide relevant context, and assemble a structured prompt for use with a separate AI tool.

The application separates the workflow definitions from the user interface and prompt-assembly logic. This makes the templates easier to inspect, test, and revise.

**Current implementation boundary:** the application builds and previews prompts. It does not call an AI model, store submitted form data in a backend, or send communications.

## 2. User journey

1. The user opens the dashboard and selects Acquisition, Stewardship, or Retention.
2. The application loads the selected workflow's template definition.
3. The interface renders the form fields defined by that template.
4. The user enters context and receives validation feedback.
5. The prompt engine validates the supplied values and assembles the prompt.
6. The user previews and copies the prompt.
7. The user may paste it into a separate AI tool; any resulting draft must be reviewed by a person before use.

## 3. Implemented components

| Component | Implementation |
|---|---|
| Workflow dashboard | React interface with three selectable workflows |
| Template definitions | Typed TypeScript objects in `src/lib/templates.ts` |
| Dynamic input form | Form fields rendered from the selected template definition |
| Input validation | Required-field, maximum-length, select-option, and total-length checks |
| Prompt assembler | `assemblePrompt` in `src/lib/promptEngine.ts` |
| Prompt preview | Read-only preview of the assembled prompt |
| Copy action | Browser clipboard action initiated by the user |
| Unit tests | Vitest test file for prompt-engine behaviour |

## 4. Prompt assembly flow

```text
Workflow selection
      |
      v
Template definition
      |
      v
Dynamic form fields
      |
      v
User-provided context
      |
      v
Input validation
      |
      v
Prompt assembly
      |
      v
Preview and copy
      |
      v
Separate AI tool (manual user action)
      |
      v
Human review of any generated draft
```

The prompt assembler labels user-provided values as source material and instructs the downstream AI model not to treat them as higher-priority instructions. The assembled prompt includes the selected template's purpose, instructions, constraints, output format, and review checklist.

## 5. Technology

- React and TypeScript for the client-side application.
- Vite for development and bundling.
- TypeScript template definitions to represent workflows and their fields.
- Vitest for unit testing the prompt-engine functions.
- Browser Clipboard API for the explicit copy action.

## 6. Template lifecycle

A suggested lifecycle for future template governance is:

Draft → Review → Test → Approve for prototype use → Version → Retire

A template being available in this independent prototype does not mean it is approved for use by any organisation. Operational adoption would require the relevant organisation's own policy, legal, privacy, security, and communications reviews.

## 7. Current limitations

- No model-provider integration; the tool assembles prompts but does not generate final messages.
- No backend, database, user accounts, or persistent form submissions.
- No connection to donor-management or campaign systems.
- No automated message delivery or publication.
- No automated donor segmentation, scoring, profiling, or eligibility decisions.
- No formal organisational approval or compliance certification.

## 8. Next technical steps

1. Run the production build and unit tests in the development environment.
2. Test each workflow from selection through copy, including invalid and boundary inputs.
3. Conduct accessibility and usability checks with representative users.
4. Expand synthetic evaluation scenarios for unsafe, incomplete, and contradictory inputs.
5. Consider AI-provider integration only with explicit privacy, security, evaluation, and human-approval controls.
