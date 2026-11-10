# Prompt Template Specification

## Purpose

This specification defines a consistent structure for every prompt workflow in the Fundraising AI Prompt Library. The goal is to make templates understandable, testable, reusable, and reviewable.

## Required fields

| Field | Requirement | Description |
|---|---|---|
| id | Required | Stable machine-readable identifier |
| title | Required | Human-readable workflow name |
| version | Required | Template version, starting at 1.0.0 |
| status | Required | draft, reviewed, or retired |
| purpose | Required | What the workflow helps the user do |
| intended_user | Required | The role or audience the workflow is designed for |
| use_when | Required | Situations where the template is appropriate |
| do_not_use_when | Required | Situations outside the template's scope |
| inputs | Required | Variables, descriptions, and whether each is required |
| instructions | Required | The actual model instructions |
| constraints | Required | Boundaries and prohibited assumptions |
| output_format | Required | Expected structure of the model response |
| human_review | Required | Checks a person must complete |
| test_cases | Required | Synthetic scenarios used to evaluate the template |

## Variable rules

- Use descriptive variable names such as `campaign_goal`, `audience_summary`, and `approved_facts`.
- State whether each input is required or optional.
- Explain what information belongs in each field.
- Do not request personal donor records or confidential information.
- If a required input is missing, the prompt should ask for clarification rather than inventing it.

## Prompt construction order

1. Role and task.
2. User-provided context.
3. Intended audience and objective.
4. Required output.
5. Constraints and safety boundaries.
6. Missing-information behaviour.
7. Human-review reminder.

## Output expectations

Each generated result should clearly separate:
- Draft content.
- Assumptions or missing information.
- Facts that require verification.
- Human-review checklist.

The template must not imply that generated text is approved for publication or sending.

## Versioning

Use semantic versioning:
- MAJOR: incompatible changes to inputs or output structure.
- MINOR: new optional capability or field.
- PATCH: wording clarification or correction that does not change the contract.

Record material changes in a changelog within each template file.

## Evaluation

A template is ready for prototype review when:
- All required fields are documented.
- Missing information is handled explicitly.
- It does not encourage invented facts or manipulative messaging.
- It uses synthetic test data only.
- The output is structured and reviewable.
- Human-review requirements are visible.
