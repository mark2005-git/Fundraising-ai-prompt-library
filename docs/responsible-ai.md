# Responsible AI and Safeguards

## Purpose

This document describes safeguards for an independent fundraising AI prompt-library prototype. It is a development baseline, not a legal assessment, organisational policy, or claim of compliance with UNICEF requirements.

## 1. Data minimisation and privacy

- Use fictional or synthetic donor names, histories, contact details, and campaign examples.
- Do not place real donor personal data, payment information, credentials, confidential correspondence, or other sensitive records into sample prompts.
- Ask only for information needed to demonstrate the workflow.
- If a future deployment requires personal data, stop and obtain the appropriate privacy, security, legal, and organisational review before processing it.

## 2. Human oversight

Generated text must be treated as a draft. A qualified human reviewer should check:

- Factual accuracy and unsupported claims.
- Respectful, non-manipulative language.
- Cultural context, accessibility, and translation quality.
- Whether the content is appropriate for the intended audience.
- Consistency with the organisation's approved messaging and policies.

The prototype must not send or publish communications automatically.

## 3. Bias, dignity, and non-manipulation

- Avoid stereotypes or assumptions about people based on age, location, income, identity, or other characteristics.
- Do not invent personal circumstances or infer vulnerability from limited information.
- Do not use guilt, fear, deception, or fabricated urgency to pressure donors.
- Prefer clear, respectful language that preserves the recipient's ability to make an informed choice.

## 4. Accuracy and transparency

- Instruct the model to distinguish supplied facts from suggestions.
- Require it to flag missing information rather than invent details.
- Do not fabricate impact statistics, beneficiary stories, quotes, endorsements, or programme outcomes.
- Where facts need verification, identify them for a human reviewer.

## 5. Security and access

The initial prototype should not collect accounts or connect to external donor systems. If those capabilities are considered later, they require a separate security design, access-control model, threat assessment, and data-retention plan.

## 6. Testing

Use synthetic scenarios that include:

- Missing required information.
- Contradictory campaign details.
- Requests to invent impact figures or beneficiary stories.
- Potentially manipulative language.
- Demographic assumptions and stereotypes.
- Attempts to include personal or confidential data.

Record whether the template flags the issue, asks for clarification, or produces a safe alternative. Do not claim a safeguard is effective until it has been tested and documented.

## 7. Limitations

Prompt instructions cannot guarantee that an AI model will behave correctly. Model outputs may be inaccurate, biased, incomplete, or inconsistent. Safeguards reduce risk but do not replace trained human judgement, organisational policy, privacy controls, or formal approval.
