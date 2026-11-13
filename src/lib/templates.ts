/**
 * Structured, versioned prompt definitions for the fundraising prompt library.
 * These are independent demonstration templates, not official UNICEF materials.
 */

export type WorkflowId = "acquisition" | "stewardship" | "retention";
export type InputType = "text" | "textarea" | "select";

export interface PromptField {
  name: string;
  label: string;
  description: string;
  required: boolean;
  maxLength: number;
  type: InputType;
  placeholder?: string;
  options?: string[];
}

export interface PromptTemplate {
  id: string;
  title: string;
  version: string;
  purpose: string;
  intendedUser: string;
  useWhen: string;
  doNotUseWhen: string[];
  fields: PromptField[];
  instructions: string[];
  constraints: string[];
  outputFormat: string[];
  humanReview: string[];
}

const sharedFields: PromptField[] = [
  {
    name: "audience",
    label: "Intended audience",
    description: "Describe the audience in broad, non-identifying terms. Do not enter donor names or personal records.",
    required: true,
    maxLength: 500,
    type: "textarea",
    placeholder: "Example: People interested in supporting children's education",
  },
  {
    name: "channel",
    label: "Communication channel",
    description: "Where will this message appear?",
    required: true,
    maxLength: 100,
    type: "select",
    options: ["Email", "SMS", "Social media", "Website", "Printed letter", "Other"],
  },
  {
    name: "tone",
    label: "Tone and communication style",
    description: "Describe the tone you want. You can combine styles or use your own wording. Examples: warm and appreciative, persuasive but respectful, empathetic and reassuring, or confident but professional.",
    required: true,
    maxLength: 150,
    type: "text",
    placeholder: "e.g. Persuasive but respectful, hopeful and encouraging",
  },
  {
    name: "key_message",
    label: "Key message",
    description: "What should the reader understand? Use verified, non-confidential information.",
    required: true,
    maxLength: 1200,
    type: "textarea",
    placeholder: "Enter the main message you want to communicate.",
  },
  {
    name: "call_to_action",
    label: "Call to action",
    description: "What, if anything, should the reader do next?",
    required: true,
    maxLength: 500,
    type: "textarea",
    placeholder: "Example: Learn more about the campaign.",
  },
  {
    name: "length",
    label: "Desired length",
    description: "Select an approximate length.",
    required: true,
    maxLength: 50,
    type: "select",
    options: ["Short (50–100 words)", "Medium (100–200 words)", "Long (200–300 words)"],
  },
];

export const PROMPT_TEMPLATES: PromptTemplate[] = [
  {
    id: "fundraising.acquisition.message-draft",
    title: "Donor acquisition message",
    version: "1.0.0",
    purpose: "Draft a respectful first-contact fundraising message for a broad audience.",
    intendedUser: "Fundraising or communications staff",
    useWhen: "Preparing an initial campaign message for a general audience.",
    doNotUseWhen: [
      "The message requires personal donor profiling or sensitive personal data.",
      "The campaign facts, claims, or figures have not been verified.",
      "The message would make unsupported promises or use pressure tactics.",
    ],
    fields: [
      { name: "campaign_goal", label: "Campaign goal", description: "State the campaign's purpose in plain language.", required: true, maxLength: 700, type: "textarea", placeholder: "What is this campaign trying to achieve?" },
      ...sharedFields,
    ],
    instructions: [
      "Draft an introductory fundraising message using only the supplied information.",
      "Explain the campaign goal clearly and connect it to the key message.",
      "Make the call to action clear without pressuring the reader.",
      "Use accessible language suitable for the selected channel.",
    ],
    constraints: [
      "Do not invent statistics, impact figures, endorsements, deadlines, or programme details.",
      "Do not imply that a contribution guarantees a specific outcome.",
      "Do not use guilt, fear, shame, urgency, or manipulative emotional pressure.",
      "Do not invent personal details or pretend the organisation knows the recipient.",
    ],
    outputFormat: ["A concise subject or heading when appropriate to the channel.", "The message body.", "A separate list titled 'Facts to verify' for any factual claims that need human confirmation."],
    humanReview: ["Verify every factual claim and campaign detail.", "Check that the tone is respectful and the call to action is accurate.", "Confirm the message complies with organisational and channel guidelines."],
  },
  {
    id: "fundraising.stewardship.thank-you-draft",
    title: "Donor appreciation message",
    version: "1.0.0",
    purpose: "Draft a sincere thank-you message that recognises support without exaggerating impact.",
    intendedUser: "Fundraising or donor-care staff",
    useWhen: "Preparing a general appreciation message after support has been received.",
    doNotUseWhen: [
      "The contribution or donor details have not been confirmed.",
      "The message requires confidential donor information.",
      "Specific impact claims have not been verified.",
    ],
    fields: [
      { name: "support_context", label: "Support context", description: "Describe the support in general terms without entering identifying details.", required: true, maxLength: 700, type: "textarea", placeholder: "Example: Support for a community learning initiative." },
      ...sharedFields,
    ],
    instructions: [
      "Write a sincere expression of appreciation based only on the supplied context.",
      "Explain why support matters using careful, non-specific language unless verified facts are provided.",
      "Keep the message focused on gratitude rather than making another ask.",
    ],
    constraints: [
      "Do not invent the amount, date, frequency, or method of a contribution.",
      "Do not claim that a specific person or community benefited unless verified information is supplied.",
      "Do not invent a donor relationship, history, preference, or personal detail.",
      "Do not exaggerate results or imply guaranteed impact.",
    ],
    outputFormat: ["A suitable greeting that does not invent a recipient name.", "The appreciation message.", "A short sign-off placeholder such as '[Team / Organisation]'."],
    humanReview: ["Confirm the support context and any impact statement.", "Check that no personal details or contribution facts have been invented.", "Confirm the message is appropriate for the recipient and channel."],
  },
  {
    id: "fundraising.retention.reengagement-draft",
    title: "Donor re-engagement message",
    version: "1.0.0",
    purpose: "Draft a considerate message inviting a previous supporter to reconnect.",
    intendedUser: "Fundraising or donor-care staff",
    useWhen: "Preparing a general re-engagement communication for a broad supporter group.",
    doNotUseWhen: [
      "The reason for a person's non-engagement is unknown but the draft would speculate about it.",
      "The message relies on donor scoring, profiling, or sensitive personal data.",
      "The proposed contact is not permitted by the organisation's communication preferences or applicable rules.",
    ],
    fields: [
      { name: "engagement_context", label: "Engagement context", description: "Describe the general context without identifying individuals or guessing why someone stopped engaging.", required: true, maxLength: 700, type: "textarea", placeholder: "Example: A general update for people who previously supported the campaign." },
      ...sharedFields,
    ],
    instructions: [
      "Draft a respectful invitation to reconnect, using the supplied context only.",
      "Acknowledge previous support without assuming why the reader has not engaged recently.",
      "Offer a clear, optional next step and respect the reader's choice.",
    ],
    constraints: [
      "Do not infer or state why a person has not donated or engaged.",
      "Do not use guilt, shame, threats, artificial urgency, or pressure.",
      "Do not invent previous contribution details or personal history.",
      "Do not rank, score, or profile donors.",
    ],
    outputFormat: ["A suitable subject or heading when appropriate.", "The re-engagement message.", "A clear, optional call to action."],
    humanReview: ["Check that the message does not assume a reason for non-engagement.", "Verify all references to previous support.", "Confirm contact preferences and communication permissions before use."],
  },
];

export function getTemplate(workflowId: WorkflowId): PromptTemplate {
  const template = PROMPT_TEMPLATES.find((item) => item.id.split(".")[1] === workflowId);
  if (!template) throw new Error(`Unknown workflow: ${workflowId}`);
  return template;
}
