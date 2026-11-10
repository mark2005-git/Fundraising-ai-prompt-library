# Proposed System Architecture

## 1. Overview

The prototype is a small prompt-workflow library. Its primary job is to help a user select a task, provide the minimum appropriate context, and produce a well-structured prompt that can be reviewed before being used with an AI model.

The first version should remain deliberately simple. It should demonstrate workflow design and responsible use before introducing accounts, databases, model integrations, or automation.

## 2. User journey

1. The user opens the library.
2. The user selects a workflow: acquisition, stewardship, or retention.
3. The interface explains the workflow's purpose, limitations, and required inputs.
4. The user supplies fictional or non-sensitive context.
5. The system validates required fields and assembles the prompt from a reviewed template.
6. The user inspects and copies the generated prompt.
7. The user reviews any AI output separately before considering its use.

## 3. Logical components

| Component | Responsibility |
|---|---|
| Workflow catalogue | Lists available workflows and their intended use |
| Template definitions | Stores instructions, variables, constraints, and output format |
| Input form | Collects only the information needed for a selected workflow |
| Input validation | Checks required fields and basic input boundaries |
| Prompt assembler | Inserts supplied values into the approved template structure |
| Review guidance | Displays human-review checks and responsible-use reminders |
| Test fixtures | Provides fictional scenarios for repeatable evaluation |

## 4. Suggested template lifecycle

Draft → Review → Test → Approve for prototype use → Version → Retire

A template should not be described as approved for organisational deployment merely because it passes prototype tests. Any real deployment would require the relevant organisation's own review and approval.

## 5. Initial technical direction

Start with a lightweight web interface and structured template files. Keep prompt content separate from presentation logic so templates can be reviewed and tested independently.

A possible implementation path is:

- Frontend: React with TypeScript.
- Template data: JSON or TypeScript objects with a documented schema.
- Validation: explicit required-field and length checks.
- Testing: unit tests for input validation and prompt assembly, plus human review of generated examples.
- Version control: Git and GitHub.

These are proposed choices, not existing implemented features. The stack can be adjusted after the first template schema is defined.

## 6. Out of scope for the initial prototype

- Connecting to real donor-management systems.
- Uploading or processing real donor records.
- Sending donor communications.
- Automated donor scoring, profiling, or eligibility decisions.
- Claiming compliance with any organisation's internal policies.
- Autonomous publication or deployment of generated content.

## 7. Quality criteria

The prototype should be assessed on:

- Clarity: can a non-technical user understand when to use a workflow?
- Completeness: are required inputs and constraints explicit?
- Predictability: does the same test input produce a prompt with the expected structure?
- Safety: are sensitive-data warnings and human-review steps visible?
- Maintainability: can a template be changed and versioned without rewriting the interface?
