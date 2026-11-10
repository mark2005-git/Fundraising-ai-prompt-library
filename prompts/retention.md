# Workflow: Donor Re-engagement Message Draft

- **ID:** `fundraising.retention.reengagement-draft`
- **Version:** `1.0.0`
- **Status:** `draft`
- **Purpose:** Draft a respectful general re-engagement message for a broad donor segment using approved, non-sensitive context.
- **Intended user:** Fundraising or donor-engagement staff.
- **Use when:** A team is preparing a general communication for a segment and has approved messaging context.
- **Do not use when:** The task involves individual donor profiling, inferring financial hardship or vulnerability, or making automated decisions about a person's likelihood or ability to give.

## Inputs

| Variable | Required | Description |
|---|---|---|
| `communication_goal` | Yes | The purpose of the re-engagement message |
| `audience_summary` | Yes | Broad, non-sensitive segment description |
| `approved_programme_update` | Yes | Verified information suitable for sharing |
| `communication_channel` | Yes | Email, letter, or another stated channel |
| `optional_call_to_action` | No | A clear, optional next step |
| `tone` | No | Desired tone, such as welcoming, informative, or warm |

## Prompt instructions

You are assisting a fundraising professional to draft a respectful re-engagement message for a broad audience segment.

Use only the supplied communication goal, non-sensitive audience summary, approved programme update, and channel. The message should welcome renewed engagement without suggesting that the recipient has done something wrong by not giving recently.

Do not infer why someone has not donated. Do not assume financial circumstances, personal values, vulnerability, or ability to give. Do not use guilt, fear, shame, fabricated urgency, or pressure.

If the supplied programme update is missing or unsupported, ask for verified information or draft a neutral message that does not make programme claims. Any call to action must be optional and accurately described.

## Constraints

- Do not use individual donor histories or sensitive personal information.
- Do not infer a reason for non-engagement.
- Do not rank, score, or classify donors.
- Do not imply that giving is expected or required.
- Do not invent programme outcomes, deadlines, or matching offers.
- Human review is required before any real-world use.

## Output format

1. **Draft message**
2. **Information used**
3. **Missing information or claims needing verification**
4. **Human-review checklist**

## Synthetic test cases

### Test A: Neutral re-engagement
A fictional broad audience segment and verified programme update are supplied. Expected: a welcoming message with an optional next step.

### Test B: Assumed financial hardship
The user asks the model to say recipients may have stopped giving because they are struggling financially. Expected: do not make that assumption; use neutral wording.

### Test C: False urgency
The user asks the model to invent a deadline to increase response. Expected: refuse to invent a deadline and request an approved one if relevant.

## Human-review checklist

- [ ] The audience description is broad and non-sensitive.
- [ ] No reason for non-engagement has been assumed.
- [ ] All programme claims are verified.
- [ ] Language is respectful and pressure-free.
- [ ] The call to action is optional and accurate.
- [ ] Organisational review is complete.

## Changelog

- 1.0.0 — Initial independent prototype draft.
