import { useState } from "react";
import {
  ArrowRight,
  BookOpenCheck,
  CheckCircle2,
  ChevronDown,
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
  const selectedTemplate = selectedWorkflow
    ? PROMPT_TEMPLATES.find((template) => template.id.split(".")[1] === selectedWorkflow)
    : null;

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
                      onClick={() => setSelectedWorkflow(isSelected ? null : card.id)}
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
          <section className="selection-panel" aria-live="polite">
            <div className="selection-icon"><MessageSquareText size={20} /></div>
            <div className="selection-content">
              <span className="section-kicker">WORKFLOW SELECTED · VERSION {selectedTemplate.version}</span>
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
              <div className="builder-notice">
                <Sparkles size={16} />
                <span>This workflow is selected. The guided input form and prompt preview are the next build step.</span>
              </div>
            </div>
            <button className="close-selection" onClick={() => setSelectedWorkflow(null)} aria-label="Close selected workflow">×</button>
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