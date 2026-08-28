**MCA DIGITAL PLATFORM TRANSFORMATION**

**PHASE 3 — PRODUCT DEFINITION & EXECUTION BASELINE**

Future Product • Experience • Service Design • Validation  
28 August 2026  
**Status: Working baseline for Phase 3**

# 1\. Purpose

Phase 3 converts the Phase 2 future-state architecture into a coherent future MCA product model and experience. It is the bridge between system architecture and detailed prototyping/engineering.

The objective is not to redesign pages one by one. It is to define how users understand, enter, perform, track and complete regulatory work on the future platform. Phase 3 inherits Phase 2 architectural invariants; any foundational change must be explicitly recorded.

# 2\. North Star

The future MCA platform should behave as a digital regulatory operating platform: a user states an intent, establishes identity/context/authority, understands requirements, completes work, sees processing, receives an outcome, and understands the next obligation.

Move conceptually from PAGE → MENU → FORM → SUBMIT toward INTENT → CONTEXT → REQUIREMENTS → ACTION → ASSISTANCE → PROCESSING → OUTCOME → NEXT OBLIGATION.

# 3\. Scope

- Future product model and product architecture.
- Future information architecture and navigation.
- Personas, contexts and primary journeys.
- Intent-first service discovery and initiation.
- Entity-centric workspace and contextual account experience.
- Role, authority and delegation experience.
- Service blueprints and end-to-end service patterns.
- Form/data-entry, requirements, documents, validation, payment and signature experiences.
- Transaction, case, registry and obligation experiences.
- Search, public registry, notifications, accessibility and trust patterns.
- Representative prototypes and design-system direction.
- Product-level validation of the Phase 2 architecture.

# 4\. Explicit Non-Scope

- Production frontend/backend implementation.
- Full recreation of every MCA screen or pixel-perfect legacy reproduction.
- Complete migration implementation or final infrastructure decisions.
- Locking specific technology vendors/frameworks without separate approval.
- Inventing undocumented MCA internal SOPs.
- Treating inferred current-state behaviour as verified fact.
- Building every form before the product model is validated.

# 5\. Phase 2 Invariants Inherited

| **Invariant**                   | **Phase 3 constraint**                                                                             |
| ------------------------------- | -------------------------------------------------------------------------------------------------- |
| Intent over form                | Users can start from an outcome; form numbers remain expert discovery aids.                        |
| Entity context everywhere       | Active entity and acting capacity are clear at consequential points.                               |
| Identity ≠ authority            | Who the user is and what they may do are distinct.                                                 |
| Services are compositions       | Experience orchestrates reusable capabilities.                                                     |
| Forms are interfaces            | Forms emerge from service requirements.                                                            |
| Transaction ≠ filing ≠ case     | Different concepts/lifecycles remain distinct.                                                     |
| Orthogonal state                | Underlying payment, signature, processing, case and registry states need not be one state machine. |
| Regulatory traceability         | Requirements and legal basis remain explainable and version-aware.                                 |
| Obligations are first-class     | The product helps users understand what is due and why.                                            |
| Registry ≠ transaction platform | Public information and private processing are deliberately related but distinct.                   |

# 6\. What Phase 3 May Change

- Navigation labels and information architecture.
- Entry points and discovery.
- Page composition and interaction patterns.
- Persona prioritisation and journey sequencing.
- Workspace composition.
- User-facing service terminology.
- Prototype interaction patterns and explanation mechanisms.

Phase 3 must not silently overturn foundational architecture. A genuine contradiction requires an explicit Architecture Decision Record.

# 7\. Primary Product Actors

| **Actor**                              | **Primary need**                     | **Design emphasis**                                       |
| -------------------------------------- | ------------------------------------ | --------------------------------------------------------- |
| Public user / researcher               | Reliable public information          | Search, profiles, provenance, accessibility               |
| First-time founder                     | Guided unfamiliar regulatory process | Intent, eligibility, requirements, progressive disclosure |
| Director / officer                     | Manage entity and obligations        | Entity context, workspace, actions, compliance            |
| LLP partner                            | Manage LLP matters                   | Role/entity context                                       |
| Compliance team / staff                | Efficient recurring work             | Queues, bulk visibility, delegation                       |
| CA / CS / professional                 | Represent multiple entities          | Multi-entity workspace, authority, reuse                  |
| Delegate                               | Execute authorised work              | Scoped permissions and delegation                         |
| MCA officer                            | Review/process/decide cases          | Case workbench, evidence, decisions, auditability         |
| Adjudication / enforcement participant | Respond to/manage regulatory case    | Notice, evidence, deadlines, hearings, orders             |

# 8\. Product Context Model

PERSON → ACCOUNT → IDENTITY → ACTING ROLE/CAPACITY → AUTHORITY → ENTITY → INTENT → SERVICE → TRANSACTION/CASE

- Multiple entity relationships per person.
- Professionals can operate across entities without losing authority context.
- Active entity/capacity persists through consequential tasks.
- Authority restrictions and delegation are understandable.
- Users can switch entity context without losing work.
- Verified information is reused where appropriate.

# 9\. Future Information Architecture Direction

Do not reproduce the current MCA navigation as the default. Derive IA from user intent, entity context and service domains.

| **Experience layer** | **Purpose**                   | **Examples**                                         |
| -------------------- | ----------------------------- | ---------------------------------------------------- |
| Start / Do           | Begin an outcome              | Start company, change director, file, close          |
| Manage               | Manage entities/relationships | Entities, directors, partners, charges               |
| Comply               | Understand obligations        | Due items, deadlines, notices                        |
| Track                | Understand persistent state   | Transactions, cases, payments, decisions             |
| Search               | Find information              | Entities, filings, documents, services, regulation   |
| Learn                | Understand requirements       | Acts, rules, guidance                                |
| Workspace            | Operate across work           | Tasks, entities, drafts, obligations, authorisations |
| Help                 | Resolve problems              | Guidance, support, complaints                        |

These labels are hypotheses, not locked IA. Validate them against journeys and discovery behaviour.

# 10\. Priority Journeys

| **Priority** | **Journey**                  | **Architecture/product test**                                               |
| ------------ | ---------------------------- | --------------------------------------------------------------------------- |
| P0           | Start a company              | Intent, identity, entity, documents, signature, payment, workflow, registry |
| P0           | Complete annual compliance   | Recurring obligation, prefill, reuse, deadlines, documents, status          |
| P0           | Change director / partner    | Event-based relationship and registry lifecycle                             |
| P0           | Obtain public document       | Search, public registry, entitlement and payment boundary                   |
| P0           | Respond to compliance notice | Notice, case, deadline, evidence, authority                                 |
| P1           | Charge lifecycle             | Persistent registry object lifecycle                                        |
| P1           | Company closure              | Preconditions, obligations, evidence, terminal state                        |
| P1           | Professional manages clients | Multi-entity workspace and delegation                                       |
| P1           | Complaint / grievance        | Case lifecycle distinct from filing                                         |
| P1           | Investor / researcher        | Public search, provenance and cross-record navigation                       |

# 11\. Standard Journey Pattern

ENTRY → INTENT → CONTEXT → ELIGIBILITY → REQUIREMENTS → PREPARATION → ACTION → VALIDATION → SUBMISSION → PROCESSING → STATUS → OUTCOME → RECORD → NOTIFICATION → NEXT ACTION

Not every journey contains every stage. The pattern exposes omissions; it does not force uniformity.

# 12\. Service Blueprint Standard

- User goal and success condition.
- User actions and visible system behaviour.
- Data captured/reused.
- Documents required/generated.
- Rules evaluated.
- Payment/signature events.
- Back-office/officer activities.
- Workflow/case transitions.
- Registry effects.
- Notifications and deadlines.
- Exceptions, recovery and resubmission.
- Audit events and next obligations.

# 13\. Workspace Requirements

- Active entity and acting role.
- Immediate tasks and due items.
- Drafts/incomplete work.
- Transaction/case status with next actions.
- Notices and deadlines.
- Compliance obligations.
- Relevant documents/certificates.
- Authorisations/delegations.
- Activity/history.
- Professional multi-entity workflows.
- Persistent transaction discoverability.

# 14\. Trust & Explainability

- Explain why information is requested.
- Show legal/regulatory basis where useful.
- Explain eligibility and ineligibility.
- Make errors actionable.
- Distinguish automated processing from human review.
- Explain what happens next.
- Use meaningful user-facing status.
- Show deadlines and consequences.
- Make notices, decisions and documents discoverable.
- Distinguish authoritative records from drafts.

# 15\. Validation Strategy

| **Layer**     | **Question**                                               | **Evidence**                |
| ------------- | ---------------------------------------------------------- | --------------------------- |
| Concept model | Do users understand intent, entity, role and authority?    | Interviews/task tests       |
| IA            | Can users find capabilities without form-number knowledge? | Tree/prototype tests        |
| Journey       | Can users complete core tasks?                             | Task usability tests        |
| Service model | Is the platform coherent without forced uniformity?        | Cross-service comparison    |
| Workspace     | Can users understand what needs attention?                 | Scenario testing            |
| Trust         | Do users understand requirements/status?                   | Comprehension tests         |
| Architecture  | Does product model map to Phase 2?                         | Architecture review         |
| Accessibility | Can core tasks be completed accessibly?                    | Accessibility audit/testing |

# 16\. Evidence Discipline

| **Label**           | **Meaning**                                                         |
| ------------------- | ------------------------------------------------------------------- |
| CURRENT VERIFIED    | Supported by reliable current evidence.                             |
| CURRENT INFERRED    | Reconstructed; not confirmed implementation detail.                 |
| FUTURE PROPOSED     | New product/system behaviour proposed here.                         |
| UNKNOWN             | Insufficient evidence.                                              |
| VALIDATION REQUIRED | Must be checked before implementation/legal/operational commitment. |

Phase 1 evidence limitations remain active. Phase 3 is future-state design, not proof of current MCA implementation.

# 17\. Phase 3 Workstreams

| **Workstream**      | **Outputs**                                                            |
| ------------------- | ---------------------------------------------------------------------- |
| Product model       | Taxonomy, capabilities, service patterns, terminology                  |
| IA & navigation     | Sitemap, global/contextual navigation, search                          |
| Personas & contexts | Actor models, jobs, authority scenarios                                |
| Journey design      | P0 journeys and exceptions                                             |
| Service blueprints  | Frontstage/backstage service models                                    |
| Workspace           | Entity/task/compliance/transaction model                               |
| Interaction model   | Requirements, forms, documents, validation, payment, signature, status |
| Design system       | Reusable patterns, accessibility, content principles                   |
| Prototype           | Representative clickable flows                                         |
| Validation          | Research plan, findings, revisions                                     |
| Evidence recovery   | P0 current-state validation in parallel                                |

# 18\. Required Deliverables

- phase-3-product-definition.md
- product-model.md
- personas-and-contexts.md
- future-information-architecture.md
- navigation-model.md
- service-discovery-model.md
- priority-user-journeys.md
- service-blueprints.md
- workspace-product-model.md
- interaction-model.md
- form-experience-model.md
- status-and-notification-model.md
- compliance-experience.md
- search-experience.md
- public-registry-experience.md
- design-system-direction.md
- prototype-plan.md
- validation-plan.md
- validation-findings.md
- phase-3-decisions.md
- phase-3-open-questions.md
- phase-3-exit-assessment.md

Recommended repository location: /docs/product/phase-3/

# 19\. Phase 3 Gates

| **Gate**               | **Required condition**                                                        |
| ---------------------- | ----------------------------------------------------------------------------- |
| Product model          | Capabilities/service taxonomy coherent and mapped to Phase 2.                 |
| IA                     | Priority services discoverable through intent/entity/context.                 |
| Journeys               | P0 journeys include happy path, exceptions, status and recovery.              |
| Blueprints             | P0 journeys expose user-facing and operational behaviour.                     |
| Workspace              | Entity-centric operating model is coherent.                                   |
| Interaction model      | Reusable patterns exist for core transaction capabilities.                    |
| Prototype              | Representative flows are testable end-to-end.                                 |
| Validation             | Major assumptions tested or explicitly accepted.                              |
| Architecture alignment | No silent Phase 2 contradiction.                                              |
| Exit                   | Product model stable enough for detailed prototyping/implementation planning. |

# 20\. Decision Rights

- Product/UX may evolve within Phase 2 boundaries.
- Architecture changes require explicit decision records.
- Legal interpretations require evidence.
- Current-state claims require evidence classification.
- Technology selection is not a core Phase 3 output unless needed for feasibility validation.
- Conflicting evidence must be surfaced, not silently reconciled.

# 21\. Success Criteria

- The future MCA product can be explained without its page hierarchy.
- Users can begin from intent and establish entity/authority context.
- Priority services share a coherent platform model without forced uniformity.
- Users understand requirements, reasons, status and next actions.
- Forms remain subordinate to services and regulatory requirements.
- Transactions, cases, registry records and obligations remain distinct.
- Professionals can work across entities safely.
- Public information does not improperly expose private transactional concepts.
- Product model maps cleanly to Phase 2 architecture.
- Major assumptions are validated or explicitly unresolved.
- Representative prototypes can be built without inventing the product model during implementation.

# 22\. Engineering Readiness Gate

Production engineering should not begin until Phase 3 has a stable answer to:

- What is the future MCA product?
- Who is it for?
- What is the canonical context model?
- How are services discovered?
- What is the canonical service experience?
- How are authority/delegation represented?
- How do requirements become actionable?
- How do forms/documents/payment/signature fit into services?
- How are processing and outcomes communicated?
- How does the workspace operate?
- How does continuous compliance work?
- How does public registry access work?
- Which interaction patterns are reusable?
- Which assumptions remain unresolved?
- Which representative journeys prove the model?

# 23\. Phase 3 Operating Rule

Do not optimize the legacy website. Do not reproduce its information architecture merely because it exists. Do not design isolated screens before understanding the service journey. Do not create generic abstractions merely because they are reusable. Build the simplest coherent product model that remains faithful to regulatory, operational and architectural realities.

# 24\. Phase 2 → Phase 3 → Engineering Handoff

PHASE 2  
Architecture → Domains → Entities → Services → Rules → Workflows  
<br/>PHASE 3  
Product Model → IA → Personas/Contexts → Journeys → Service Blueprints → Interaction Model → Design System → Representative Prototypes → Validation  
<br/>LATER  
Detailed Engineering Architecture → Implementation → Migration → Production

P0 current-state evidence recovery continues in parallel. It informs compatibility and migration decisions but must not force the future product to inherit the legacy portal structure.

# 25\. Exit Decision

Target: GO TO DETAILED PROTOTYPING / IMPLEMENTATION PLANNING.

Grant this decision only after the Phase 3 gates are satisfied. If a gate fails, document the exact unresolved product or architectural issue rather than proceeding by assumption.

# Appendix — Source Inputs

- Phase 1 Current-State Audit / WOM research and Discovery Brief.
- Phase 2 Future-State Architecture report.
- MCA Regulatory Framework and Digital Rules Research.
- MCA Service → Form → Process Matrix.
- MCA User / Role / Authority Model.
- MCA Future-State Architecture Principles.
- MCA Phase 2 Architecture Baseline & Stress-Test Package.