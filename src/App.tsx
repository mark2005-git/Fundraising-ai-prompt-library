import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  BookOpenCheck,
  CheckCircle2,
  Clipboard,
  AlertCircle,
  CircleHelp,
  FileText,
  HeartHandshake,
  LayoutDashboard,
  LockKeyhole,
  Mail,
  MessageSquareText,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { PROMPT_TEMPLATES, type WorkflowId } from "./lib/templates";
import { assemblePrompt, validateInputs, type PromptValues } from "./lib/promptEngine";

const workflowCards = [
  {
    id: "acquisition" as WorkflowId,
    number: "01",
    title: "Donor acquisition",
    subtitle: "Start meaningful conversations",
    description: "Create clear, respectful campaign messages that introduce a cause and invite people to learn more.",
    icon: Users,
    tint: "mint",
    tag: "Campaign messaging",
    outcome: "First-contact campaign drafts",
  },
  {
    id: "stewardship" as WorkflowId,
    number: "02",
    title: "Donor stewardship",
    subtitle: "Make appreciation thoughtful",
    description: "Prepare sincere thank-you and appreciation messages without inventing donor details or impact claims.",
    icon: HeartHandshake,
    tint: "peach",
    tag: "Appreciation",
    outcome: "Thank-you message drafts",
  },
  {
    id: "retention" as WorkflowId,
    number: "03",
    title: "Donor retention",
    subtitle: "Keep the relationship open",
    description: "Draft considerate re-engagement messages that respect each supporter’s choice and communication preferences.",
    icon: Mail,
    tint: "lavender",
    tag: "Re-engagement",
    outcome: "Re-engagement drafts",
  },
];

function App() {
  const [selectedWorkflow, setSelectedWorkflow] = useState<WorkflowId | null>(null);
  const [values, setValues] = useState<PromptValues>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);
  const [assembledPrompt, setAssembledPrompt] = useState("");
  const [copyStatus, setCopyStatus] = useState("");
  const selectedTemplate = selectedWorkflow
    ? PROMPT_TEMPLATES.find((template) => template.id.split(".")[1] === selectedWorkflow)
    : null;
  const validationIssues = selectedTemplate ? validateInputs(selectedTemplate.fields, values) : [];
  const visibleIssues = validationIssues.filter((issue) => issue.field === "_form" || touched[issue.field] || submitted);
  const issueFor = (fieldName: string) => visibleIssues.find((issue) => issue.field === fieldName)?.message;

  const chooseWorkflow = (workflowId: WorkflowId | null) => {
    setSelectedWorkflow(workflowId);
    setValues({});
    setTouched({});
    setSubmitted(false);
    setAssembledPrompt("");
    setCopyStatus("");
  };

  const updateField = (name: string, value: string) => {
    setValues((current) => ({ ...current, [name]: value }));
    setTouched((current) => ({ ...current, [name]: true }));
    setAssembledPrompt("");
    setCopyStatus("");
  };

  const handleAssemble = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    if (!selectedTemplate || validationIssues.length > 0) return;
    try {
      setAssembledPrompt(assemblePrompt(selectedTemplate, values).prompt);
      setCopyStatus("");
    } catch {
      setAssembledPrompt("");
    }
  };

  const handleCopy = async () => {
    if (!assembledPrompt) return;
    try {
      await navigator.clipboard.writeText(assembledPrompt);
      setCopyStatus("Prompt copied to clipboard.");
    } catch {
      setCopyStatus("Copy was blocked by your browser. Select the prompt text and copy it manually.");
    }
  };

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <a className="brand" href="#" aria-label="Prompt Library home">
          <span className="brand-mark"><Sparkles size={19} /></span>
          <span className="brand-copy">
            <strong>Prompt Library</strong>
            <small>FUNDRAISING WORKSPACE</small>
          </span>
        </a>

        <div className="side-label">WORKSPACE</div>
        <nav className="side-nav" aria-label="Main navigation">
          <a className="nav-item active" href="#workflows">
            <LayoutDashboard size={17} />
            <span>Overview</span>
          </a>
          <a className="nav-item" href="#workflows">
            <BookOpenCheck size={17} />
            <span>Workflows</span>
            <span className="nav-count">3</span>
          </a>
          <a className="nav-item" href="#how-it-works">
            <FileText size={17} />
            <span>How it works</span>
          </a>
        </nav>

        <div className="sidebar-bottom">
          <div className="help-card">
            <span className="help-icon"><CircleHelp size={17} /></span>
            <strong>Need a hand?</strong>
            <p>Each workflow includes guidance to help you prepare a useful first draft.</p>
            <a href="#how-it-works">Explore the guide <ArrowRight size={13} /></a>
          </div>
          <div className="sidebar-foot">
            <span className="status-dot" />
            Independent prototype
          </div>
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <div className="breadcrumb">Workspace <span>/</span> Overview</div>
          <div className="topbar-right">
            <span className="prototype-label"><span className="status-dot" /> Prototype mode</span>
            <button className="avatar" aria-label="Demo workspace">FP</button>
          </div>
        </header>

        <section className="welcome-section">
          <div className="eyebrow"><span className="eyebrow-line" /> A MORE STRUCTURED WAY TO WORK WITH AI</div>
          <h1>Good work starts<br />with a <em>better prompt.</em></h1>
          <p className="welcome-copy">
            Choose a fundraising workflow to get started. Each one guides you through the right context,
            instructions and safeguards—so you can focus on the message, not the prompt mechanics.
          </p>
          <div className="welcome-meta">
            <span><CheckCircle2 size={15} /> Guided templates</span>
            <span><ShieldCheck size={15} /> Human review built in</span>
            <span><LockKeyhole size={15} /> No donor data needed</span>
          </div>
        </section>

        <section className="workflow-section" id="workflows">
          <div className="section-heading">
            <div>
              <div className="section-kicker">YOUR WORKFLOWS</div>
              <h2>What would you like to work on?</h2>
              <p>Start with one of the three available fundraising workflows.</p>
            </div>
            <div className="template-count"><strong>03</strong><span>AVAILABLE<br />TEMPLATES</span></div>
          </div>

          <div className="workflow-grid">
            {workflowCards.map((card) => {
              const Icon = card.icon;
              const isSelected = selectedWorkflow === card.id;
              return (
                <article className={`workflow-card ${isSelected ? "selected" : ""}`} key={card.id}>
                  <div className="card-topline">
                    <span className="card-number">{card.number} <span>/ 03</span></span>
                    <span className={`workflow-icon ${card.tint}`}><Icon size={20} strokeWidth={1.8} /></span>
                  </div>
                  <span className="workflow-tag">{card.tag}</span>
                  <h3>{card.title}</h3>
                  <h4>{card.subtitle}</h4>
                  <p>{card.description}</p>
                  <div className="card-footer">
                    <span className="outcome-label">{card.outcome}</span>
                    <button
                      className={`open-workflow ${isSelected ? "is-selected" : ""}`}
                      onClick={() => chooseWorkflow(isSelected ? null : card.id)}
                      aria-expanded={isSelected}
                    >
                      {isSelected ? "Selected" : "Explore workflow"}
                      {isSelected ? <CheckCircle2 size={16} /> : <ArrowRight size={16} />}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {selectedTemplate && (
          <section className="selection-panel builder-panel" aria-live="polite">
            <div className="selection-icon"><MessageSquareText size={20} /></div>
            <div className="selection-content builder-content">
              <span className="section-kicker">WORKFLOW BUILDER · VERSION {selectedTemplate.version}</span>
              <h3>{selectedTemplate.title}</h3>
              <p>{selectedTemplate.purpose}</p>
              <div className="selection-detail">
                <strong>Use when</strong>
                <span>{selectedTemplate.useWhen}</span>
              </div>
              <div className="selection-detail">
                <strong>Not for</strong>
                <span>{selectedTemplate.doNotUseWhen[0]}</span>
              </div>

              <div className="form-intro">
                <div>
                  <span className="section-kicker">STEP 02 · ADD YOUR CONTEXT</span>
                  <h4>Tell us what this message needs to do.</h4>
                  <p>Use broad, verified information only. Do not enter donor names, contact details, or confidential records.</p>
                </div>
                <span className="required-note">* Required fields</span>
              </div>

              <form className="workflow-form" onSubmit={handleAssemble} noValidate>
                <div className="dynamic-fields">
                  {selectedTemplate.fields.map((field) => {
                    const error = issueFor(field.name);
                    const value = values[field.name] ?? "";
                    return (
                      <div className={`form-field ${field.type === "textarea" ? "field-wide" : ""}`} key={field.name}>
                        <label htmlFor={field.name}>
                          {field.label}{field.required && <span className="required-mark"> *</span>}
                        </label>
                        <p className="field-description">{field.description}</p>
                        {field.type === "textarea" ? (
                          <textarea
                            id={field.name}
                            value={value}
                            placeholder={field.placeholder}
                            maxLength={field.maxLength}
                            aria-invalid={Boolean(error)}
                            aria-describedby={error ? `${field.name}-error` : undefined}
                            onChange={(event) => updateField(field.name, event.target.value)}
                            onBlur={() => setTouched((current) => ({ ...current, [field.name]: true }))}
                            rows={3}
                          />
                        ) : field.type === "select" ? (
                          <select
                            id={field.name}
                            value={value}
                            aria-invalid={Boolean(error)}
                            aria-describedby={error ? `${field.name}-error` : undefined}
                            onChange={(event) => updateField(field.name, event.target.value)}
                            onBlur={() => setTouched((current) => ({ ...current, [field.name]: true }))}
                          >
                            <option value="">Choose an option</option>
                            {field.options?.map((option) => <option value={option} key={option}>{option}</option>)}
                          </select>
                        ) : (
                          <input
                            id={field.name}
                            type="text"
                            value={value}
                            placeholder={field.placeholder}
                            maxLength={field.maxLength}
                            aria-invalid={Boolean(error)}
                            aria-describedby={error ? `${field.name}-error` : undefined}
                            onChange={(event) => updateField(field.name, event.target.value)}
                            onBlur={() => setTouched((current) => ({ ...current, [field.name]: true }))}
                          />
                        )}
                        <div className="field-meta">
                          {error ? <span className="field-error" id={`${field.name}-error`}><AlertCircle size={12} />{error}</span> : <span />}
                          {field.type !== "select" && <span className="character-count">{value.length}/{field.maxLength}</span>}
                        </div>
                      </div>
                    );
                  })}
                </div>
                {visibleIssues.some((issue) => issue.field === "_form") && (
                  <p className="form-error"><AlertCircle size={14} />{issueFor("_form")}</p>
                )}
                <div className="form-actions">
                  <span>Inputs are used only to assemble this prompt in your browser.</span>
                  <button className="assemble-button" type="submit">
                    Assemble prompt <ArrowRight size={15} />
                  </button>
                </div>
              </form>

              {assembledPrompt && (
                <div className="prompt-preview">
                  <div className="preview-heading">
                    <div>
                      <span className="section-kicker">STEP 03 · PROMPT ASSEMBLED</span>
                      <h4>Your structured prompt is ready.</h4>
                    </div>
                    <button className="copy-button" type="button" onClick={handleCopy}><Clipboard size={14} /> Copy prompt</button>
                  </div>
                  <textarea className="prompt-output" value={assembledPrompt} readOnly rows={14} aria-label="Assembled prompt preview" />
                  <div className="preview-foot">
                    <span><ShieldCheck size={14} /> Review the prompt and generated draft before use.</span>
                    {copyStatus && <span className="copy-status">{copyStatus}</span>}
                  </div>
                </div>
              )}
            </div>
            <button className="close-selection" onClick={() => chooseWorkflow(null)} aria-label="Close selected workflow">×</button>
          </section>
        )}

        <section className="how-section" id="how-it-works">
          <div className="how-heading">
            <div className="section-kicker">SIMPLE BY DESIGN</div>
            <h2>From context to a usable draft.</h2>
          </div>
          <div className="steps-grid">
            <div className="step-item">
              <span className="step-icon"><LayoutDashboard size={18} /></span>
              <span className="step-index">STEP 01</span>
              <strong>Choose a workflow</strong>
              <p>Start with the fundraising task you need help with.</p>
            </div>
            <div className="step-item">
              <span className="step-icon"><FileText size={18} /></span>
              <span className="step-index">STEP 02</span>
              <strong>Add your context</strong>
              <p>Answer simple questions with clear guidance.</p>
            </div>
            <div className="step-item">
              <span className="step-icon"><Sparkles size={18} /></span>
              <span className="step-index">STEP 03</span>
              <strong>Assemble your prompt</strong>
              <p>The engine combines your inputs with structured instructions.</p>
            </div>
            <div className="step-item">
              <span className="step-icon"><ShieldCheck size={18} /></span>
              <span className="step-index">STEP 04</span>
              <strong>Review before use</strong>
              <p>Copy your prompt and review any AI-generated draft carefully.</p>
            </div>
          </div>
        </section>

        <footer className="app-footer">
          <span>Independent portfolio prototype · Not affiliated with or endorsed by UNICEF.</span>
          <a href="https://github.com/mark2005-git/Fundraising-ai-prompt-library" target="_blank" rel="noreferrer">View project repository <ArrowRight size={13} /></a>
        </footer>
      </main>
    </div>
  );
}

export default App;