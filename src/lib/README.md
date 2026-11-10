# Prompt assembly engine

This module is the first functional core of the independent fundraising prompt-library prototype.

## Files

- `templates.ts` contains the structured Acquisition, Stewardship, and Retention workflow definitions.
- `promptEngine.ts` validates form values and assembles a complete prompt.
- `promptEngine.test.ts` contains unit tests written for Vitest.

## Basic usage

```ts
import { assemblePrompt } from "./promptEngine";
import { getTemplate } from "./templates";

const template = getTemplate("acquisition");

const result = assemblePrompt(template, {
  campaign_goal: "Support access to learning materials.",
  audience: "People interested in supporting children's education.",
  channel: "Email",
  tone: "Warm and appreciative",
  key_message: "Learning materials help create supportive learning environments.",
  call_to_action: "Learn more about the campaign.",
  length: "Short (50–100 words)",
});

console.log(result.prompt);
```

The returned prompt can be shown in a preview and copied into an AI tool selected by the user. This module does not call an AI model or send information to a server.

## Safety and scope

- Use fictional or non-sensitive demonstration information only.
- Never enter donor names, contact details, payment information, or confidential records.
- Generated text is an unapproved draft and requires human review.
- Template constraints reduce risk but cannot guarantee the output of an external AI model.
- This is an independent portfolio prototype, not an official UNICEF system or endorsed product.

## Testing

The tests use Vitest. Once the application package is configured, install Vitest and run the test script configured in `package.json`.
