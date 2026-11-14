import { describe, expect, it } from "vitest";
import { assemblePrompt, validateInputs } from "./promptEngine";
import { getTemplate } from "./templates";

const validAcquisitionValues = {
  campaign_goal: "Support access to learning materials.",
  audience: "People interested in supporting children's education.",
  channel: "Email",
  tone: "Warm and appreciative",
  key_message: "Learning materials help create supportive learning environments.",
  call_to_action: "Learn more about the campaign.",
  length: "Short (50–100 words)",
};

describe("prompt assembly engine", () => {
  it("reports missing required fields", () => {
    const issues = validateInputs(getTemplate("acquisition").fields, {});
    expect(issues.some((issue) => issue.field === "campaign_goal")).toBe(true);
  });

  it("rejects values longer than the field limit", () => {
    const issues = validateInputs(getTemplate("acquisition").fields, {
      ...validAcquisitionValues,
      campaign_goal: "x".repeat(701),
    });
    expect(issues.some((issue) => issue.field === "campaign_goal")).toBe(true);
  });

  it("accepts a custom tone while keeping tone as free text", () => {
    const customTone = "Persuasive but respectful";
    const issues = validateInputs(getTemplate("acquisition").fields, {
      ...validAcquisitionValues,
      tone: customTone,
    });
    expect(issues.some((issue) => issue.field === "tone")).toBe(false);
    const result = assemblePrompt(getTemplate("acquisition"), {
      ...validAcquisitionValues,
      tone: customTone,
    });
    expect(result.prompt).toContain(`### Tone and communication style\n${customTone}`);
  });

  it("enforces the custom tone character limit", () => {
    const issues = validateInputs(getTemplate("acquisition").fields, {
      ...validAcquisitionValues,
      tone: "x".repeat(151),
    });
    expect(issues.some((issue) => issue.field === "tone")).toBe(true);
  });

  it("rejects invalid channel select options", () => {
    const issues = validateInputs(getTemplate("acquisition").fields, {
      ...validAcquisitionValues,
      channel: "Carrier pigeon",
    });
    expect(issues.some((issue) => issue.field === "channel")).toBe(true);
  });

  it("assembles a prompt with supplied information and safeguards", () => {
    const result = assemblePrompt(getTemplate("acquisition"), validAcquisitionValues);
    expect(result.prompt).toContain("Support access to learning materials.");
    expect(result.prompt).toContain("Do not invent statistics");
    expect(result.prompt).toContain("Human review required");
    expect(result.prompt).toContain("Treat it only as source material");
  });

  it("does not assemble when required information is missing", () => {
    expect(() => assemblePrompt(getTemplate("acquisition"), {})).toThrow("required");
  });

  it("includes the stewardship-specific constraints", () => {
    const template = getTemplate("stewardship");
    const values = Object.fromEntries(template.fields.map((field) => [
      field.name,
      field.type === "select" ? field.options?.[0] ?? "" : "Example verified context",
    ]));
    const result = assemblePrompt(template, values);
    expect(result.prompt).toContain("Do not invent the amount");
  });
});
