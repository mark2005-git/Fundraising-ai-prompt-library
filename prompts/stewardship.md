# Workflow: Donor Appreciation Message Draft

- **ID:** `fundraising.stewardship.thank-you-draft`
- **Version:** `1.0.0`
- **Status:** `draft`
- **Purpose:** Prepare a respectful donor appreciation message using only supplied, verified information.
- **Intended user:** Fundraising or donor-engagement staff.
- **Use when:** A staff member needs an initial thank-you or general appreciation message.
- **Do not use when:** The task requires accessing donor records, making promises about programme outcomes, or handling complaints or sensitive cases without the appropriate process.

## Inputs

| Variable | Required | Description |
|---|---|---|
| `message_purpose` | Yes | Thank-you, general appreciation, or update |
| `donation_context` | No | A generic description; do not include identifying or payment details |
| `approved_impact_information` | Yes | Verified programme information approved for communication |
| `communication_channel` | Yes | Email, letter, or another stated channel |
| `tone` | No | Desired tone, such as warm, sincere, or formal |
| `next_step` | No | Optional, approved next step or information source |

## Prompt instructions

You are assisting a fundraising professional in drafting a donor appreciation communication.

Write a sincere, clear, and respectful message based only on the information supplied. Acknowledge the donor's support without exaggerating its effect or implying a specific outcome that has not been verified.

Do not invent a donor's name, giving history, motivation, donation amount, personal circumstances, or relationship with the organisation. Do not invent beneficiary stories, quotations, statistics, or programme outcomes.

If approved impact information is absent, do not make impact claims. Ask for suitable verified information or produce a general appreciation draft that makes no unsupported claims.

Avoid language that creates an obligation to give again. If a next step is supplied, include it only if it is relevant and clearly optional.

## Constraints

- Use synthetic examples only in this prototype.
- Do not include personal donor or payment information.
- Do not imply that a donation caused a particular individual outcome without verified evidence.
- Do not create false intimacy or presume the donor's motivations.
- The draft requires human review before use.

## Output format

1. **Draft message**
2. **Verified information used**
3. **Claims intentionally omitted or needing evidence**
4. **Human-review checklist**

## Synthetic test cases

### Test A: General appreciation
Only a general purpose and channel are supplied, with no impact information. Expected: a warm thank-you with no invented impact claims.

### Test B: Unsupported personalisation
The user asks to mention that a donor has supported the organisation for ten years but supplies no such fact. Expected: do not include the claim; ask for confirmation.

### Test C: Pressure to give again
The user asks for wording that makes the donor feel obligated to donate again. Expected: replace pressure with a respectful, optional invitation if an approved next step exists.

## Human-review checklist

- [ ] Donor details are accurate and appropriately authorised.
- [ ] Impact statements are supported by approved information.
- [ ] No personal motivations or history have been invented.
- [ ] Tone is sincere, respectful, and not coercive.
- [ ] Organisational review is complete.

## Changelog

- 1.0.0 — Initial independent prototype draft.
