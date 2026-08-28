# MCA Future-State Architecture Principles

**Purpose:** Guardrails for the Phase 2 architecture and future website/platform design of the Ministry of Corporate Affairs (MCA) digital ecosystem.

**Status:** Target-state architecture principles. These are design recommendations for the revamp, not claims about MCA's current internal architecture.

---

## 1. Purpose and Scope

Phase 1 established a fragmented current-state picture: services, forms, actors, workflows, regulatory obligations, public-registry functions, and transaction journeys are distributed across a large digital ecosystem. The Service → Form → Process Matrix and User / Role / Authority Model provide the bridge from that discovery into architecture.

This document answers a different question:

> **What should the future MCA platform be designed around?**

These principles exist to prevent Phase 2 implementation from becoming a visual or technical recreation of the current website.

The target is not a better collection of forms. It is a **user-centric regulatory service platform** in which legal obligations, entities, identity, data, documents, rules, transactions, workflows and registry outcomes work as a coherent system.

---

# 2. Target-State North Star

The future MCA platform should allow a user to move from:

**INTENT**

↓  

**RELEVANT ENTITY / PERSON**

↓

**APPLICABLE OBLIGATION / SERVICE**

↓

**GUIDED DATA + DOCUMENT COLLECTION**

↓

**VALIDATION + SIGNING + PAYMENT**

↓

**TRANSACTION / CASE WORKFLOW**

↓

**REGISTRY / REGULATORY OUTCOME**

↓

**WHAT HAPPENS NEXT**

The user should not need to understand MCA's internal organisational structure, legacy navigation, form taxonomy, or backend boundaries merely to accomplish a legitimate regulatory task.

At the same time, the system must preserve legal precision, statutory authority, auditability, and traceability.

---

# 3. Principle 1 — Intent Over Form

## Rule

**Users should begin with what they want to accomplish, not with a form number.**

A form is an implementation/legal submission artifact. It should not be the primary mental model presented to most users.

Examples:

- “Start a company”
- “Change my registered office”
- “Appoint a director”
- “File my annual compliance”
- “Register a charge”
- “Close the company”
- “Check what my company needs to do next”

The platform should resolve the relevant service, eligibility, form(s), data, documents, rules and workflow behind the intent.

## Architectural implication

Introduce a service-intent layer:

**User Intent → Service Definition → Legal Context → Required Form(s) → Workflow**

One user intent may produce:

- one form;
- multiple forms;
- a form plus supporting documents;
- a case;
- a registry update;
- or no filing at all.

Therefore:

> **Form ≠ Service.**

## UX implication

Form numbers should remain searchable and visible where useful, but they should not be the only or dominant entry point.

## Kiro guardrail

Do not build the architecture as:

`Form page → form fields → submit`

Build it as:

`Intent → service orchestration → form/data surfaces → outcome`

## Acceptance test

A first-time user who knows the legal/business event but does not know the form number should still be able to reach the correct service.

---

# 4. Principle 2 — Entity Context Everywhere

## Rule

**The platform should know what entity, person, relationship or regulatory context the user is acting within.**

A user is rarely just “a user.”

The same person may act as:

- director of Company A;
- professional for Company B;
- partner of LLP C;
- authorised representative for Company D.

The User / Role / Authority Model therefore separates:

**Identity → Role → Authority → Entity Relationship → Delegation → Transaction Authority**

Authentication alone is not sufficient.

## Architectural implication

Entity context should be a first-class application state.

Candidate context:

`User + Active Role + Entity + Authority + Transaction`

The platform should support explicit entity switching where a user legitimately has multiple associations.

## UX implication

The interface should make active context visible:

> **Acting for: [Entity]**  
> **Capacity: [Role]**

Avoid situations where a user can unknowingly prepare or submit something for the wrong entity.

## Kiro guardrail

Do not infer entity authority merely because an account is logged in.

## Acceptance test

A multi-entity professional can clearly determine:

1. which entity is active;
2. what role they are acting in;
3. what they are authorised to do;
4. which transaction they are modifying.

---

# 5. Principle 3 — Ask Once

## Rule

**Verified information should be reused rather than repeatedly requested.**

The same entity/person information should not be re-entered across every service if the platform already has authoritative data and the user is entitled to reuse it.

## Architectural implication

Create canonical domain data rather than form-specific copies.

Candidate reusable objects include:

- Person
- Company
- LLP
- Director / Partner relationship
- Registered office
- Capital
- Charge
- Filing
- Document
- Obligation
- Transaction

Forms should consume and update canonical data according to the applicable legal rules.

## UX implication

Use:

- prefill;
- confirmation;
- “no change” acknowledgement;
- targeted update flows;
- explainable corrections.

Do not make users repeatedly type information already held by MCA.

## Kiro guardrail

Never create a new independent data model simply because a new form needs the same field.

## Acceptance test

If the same verified entity data is required by multiple services, the architecture has one authoritative source or an explicitly defined source hierarchy.

---

# 6. Principle 4 — Regulation as Structured Data

## Rule

**Where appropriate, legal and regulatory requirements should be represented as structured, versioned rules rather than buried inside page logic.**

This does not mean reducing law to simplistic code.

It means making machine-relevant aspects explicit where possible:

- applicability;
- eligibility;
- required fields;
- required documents;
- signing authority;
- deadlines;
- fees;
- validation;
- routing;
- outcomes.

The Regulatory Framework Pack uses the traceability chain:

**Legal Provision**

↓

**Business / Legal Event**

↓

**Obligation**

↓

**Eligible Entity**

↓

**Required Data**

↓

**Required Document**

↓

**Form / Service**

↓

**Validation**

↓

**Fee**

↓

**Workflow**

↓

**Outcome**

## Architectural implication

Use a versioned regulatory/rules layer with:

- source provision;
- rule identifier;
- effective date;
- expiry/supersession;
- conditions;
- affected service/entity;
- machine-actionable expression where appropriate.

## Kiro guardrail

Do not hard-code regulatory logic independently inside dozens of UI components.

## Acceptance test

A change in an applicable rule can be traced from its legal source to the affected service, validation, workflow and user-facing explanation.

---

# 7. Principle 5 — Services Are Compositions

## Rule

A service should compose reusable platform capabilities:

```text
Identity
+
Entity
+
Data
+
Documents
+
Rules
+
Forms
+
Payment
+
Workflow
+
Outcome
```

A service is therefore an orchestration of capabilities, not a standalone application.

## Architectural implication

The platform should identify common primitives first and service-specific logic second.

Candidate common primitives:

- identity;
- entity/registry;
- authority;
- canonical data;
- documents;
- signatures;
- rules;
- fees;
- payments;
- workflow;
- notifications;
- cases;
- audit/provenance.

Then add service-specific legal logic.

## Kiro guardrail

Do not create 70 independent mini-products because MCA has 70+ forms.

The correct question is:

> **Which capabilities are reused across these services, and where does service-specific legal logic begin?**

## Acceptance test

Two services requiring the same identity, document, payment or workflow capability should not require two unrelated implementations.

---

# 8. Principle 6 — Compliance Is Continuous

## Rule

**The platform should understand what an entity needs to do next.**

The user should not have to discover obligations by independently browsing forms.

The future experience should move toward:

> **“Here is your entity. Here is its current status. Here is what is due, why it is due, when it is due, and what to do next.”**

## Architectural implication

Treat obligations as first-class objects.

Candidate obligation attributes:

- entity;
- obligation type;
- legal basis;
- trigger;
- applicability;
- due date;
- status;
- completed transaction;
- next action;
- rule version.

## UX implication

Provide an entity compliance workspace/dashboard that answers:

- What is complete?
- What is due?
- What is overdue?
- What changed?
- What requires my action?
- What requires another actor?
- What happens next?

## Kiro guardrail

Do not make “Forms & Downloads” the user's primary compliance management system.

## Acceptance test

Given an entity and authorised user, the system can produce a meaningful next-action view without requiring the user to manually inspect the entire service catalogue.

---

# 9. Principle 7 — Transaction State Is Persistent

## Rule

**A transaction should have durable, discoverable state and history.**

A user should never have to rediscover:

- whether something was submitted;
- whether payment succeeded;
- whether review is pending;
- whether a query was raised;
- what response was submitted;
- what the final outcome was.

## Architectural implication

Separate but connect:

**Transaction State**

**Payment State**

**Workflow State**

**Registry State**

They are related but not identical.

Candidate transaction lifecycle:

```text
DRAFT
→ VALIDATING
→ SIGNING
→ PAYMENT
→ SUBMITTED
→ PROCESSING
→ AUTOMATED / ASSISTED / HUMAN REVIEW
→ QUERY / RESUBMISSION
→ DECISION
→ REGISTRY UPDATE
→ COMPLETED
```

Exact MCA state names and transitions remain subject to validation.

## UX implication

Every consequential transaction should have a persistent status/timeline.

## Kiro guardrail

Do not rely on users retaining SRNs, screenshots, emails or browser history as the primary transaction memory.

## Acceptance test

A user returning weeks later can locate an application and understand its current and historical state.

---

# 10. Principle 8 — Human Intervention Is Explicit

## Rule

The platform must distinguish:

```text
AUTOMATED
ASSISTED
HUMAN REVIEW
DECISION
```

Users should not be left wondering whether an application is:

- automatically processed;
- awaiting validation;
- queued for an officer;
- under human review;
- awaiting user action;
- or awaiting a formal decision.

## Architectural implication

Workflow states and routing decisions should be explicit.

Human intervention should be represented as a first-class workflow state/activity rather than an invisible backend event.

## UX implication

Use plain-language status explanations:

> “Your filing passed automated validation and is awaiting officer review.”

rather than:

> “Processing.”

## Kiro guardrail

Do not fake automation where the process is actually human-controlled.

Do not hide human review merely to make the interface appear “fully digital.”

## Acceptance test

For every non-terminal transaction state, the system can explain:

1. where it is;
2. who/what is responsible;
3. what happens next;
4. whether the user needs to act.

---

# 11. Principle 9 — Public Registry ≠ Transactional System

## Rule

**The public registry and the transactional platform are related but architecturally distinct.**

Public-facing functions may include:

- master data;
- public documents;
- corporate records;
- reports;
- registry searches.

Transactional functions include:

- filings;
- applications;
- payments;
- queries;
- cases;
- regulatory decisions.

## Architectural implication

Separate:

**Registry / authoritative record**

from

**Transactional / workflow system**

while maintaining explicit relationships between them.

A filing may update the registry.

A public document may originate from a registry record.

But the two should not become one undifferentiated system.

## UX implication

Users should understand whether they are:

- researching an existing record;
- changing an entity record;
- submitting a transaction;
- responding to a regulatory case.

## Kiro guardrail

Do not reproduce a single giant “portal database” concept simply because the current website exposes everything through one portal.

## Acceptance test

The architecture can evolve transactional workflows without compromising the conceptual integrity of the public registry.

---

# 12. Principle 10 — Don't Optimize Legacy Architecture

## Rule

**The future system should not be constrained by the current website's information architecture, URL structure, form taxonomy or presumed backend boundaries.**

Phase 1 is a description of the current-state discovery problem. It is not a blueprint for the future system.

The current structure should be treated as:

**evidence → understand → abstract → improve**

not:

**copy → restyle → rebuild**

## Architectural implication

Derive the future architecture from:

- user intent;
- legal events;
- obligations;
- entities;
- reusable capabilities;
- workflow;
- outcomes.

Do not derive it from:

- existing menus;
- legacy page hierarchy;
- URL hierarchy;
- form numbering;
- current screen sequence.

## Kiro guardrail

Do not reproduce legacy architecture merely because it is familiar.

If the current website has an awkward structure, the answer is not automatically to preserve it behind a modern UI.

## Acceptance test

Every major target-state architectural component has a user, legal, operational or platform rationale independent of the current website's page structure.

---

# 13. Cross-Cutting Architectural Invariants

The ten principles above should be reinforced by the following invariants.

## 13.1 Identity ≠ Authorisation

Authentication establishes identity.

Authorisation evaluates:

**who + role + entity + authority + delegation + action + object + legal/business conditions**

---

## 13.2 Canonical Data

There should be identifiable authoritative sources for core objects.

Duplicated representations must have explicit ownership and synchronisation rules.

---

## 13.3 Versioned Regulation

Rules must be traceable to their source and effective period.

Historical transactions should remain interpretable under the rules applicable at the time.

---

## 13.4 Explicit Workflow

Important process states must be represented rather than hidden in page/session behaviour.

---

## 13.5 Auditability

Consequential actions should produce provenance:

**actor + action + object + time + authority context + relevant rule/version**

---

## 13.6 API / Domain Separation

The user interface should not become the definition of the business domain.

Domain capabilities should be reusable by:

- web;
- mobile where appropriate;
- assisted channels;
- internal officer interfaces;
- future integrations.

---

## 13.7 Event-Driven Notifications

Notifications should be consequences of meaningful domain events rather than independently duplicated logic inside every service.

Examples:

- payment completed;
- filing submitted;
- query raised;
- query response due;
- decision issued;
- obligation approaching;
- obligation overdue.

---

## 13.8 Security and Privacy by Design

Access should be scoped according to:

- identity;
- role;
- entity;
- authority;
- data sensitivity;
- transaction context.

Do not assume that information available somewhere in the ecosystem should automatically be exposed everywhere.

---

## 13.9 Accessibility as a Platform Property

Accessibility should not be added separately to each form at the end.

It should be built into the shared design system, components, validation patterns, documents and interaction model.

---

## 13.10 Observability and Resilience

Critical services should expose operationally meaningful states and support:

- failure recovery;
- idempotent operations where appropriate;
- retry handling;
- payment reconciliation;
- audit trails;
- monitoring;
- incident diagnosis.

---

# 14. What Kiro Must NOT Do

The following are explicit architectural anti-patterns.

### Do not:

1. Recreate every existing form as a separate application.
2. Treat the current MCA navigation as the target information architecture.
3. Make form numbers the primary UX model.
4. Hard-code legal rules into individual screens.
5. Duplicate entity/person data across forms.
6. Treat a logged-in user as automatically authorised.
7. Hide the distinction between public, authenticated and entity-restricted information.
8. Hide human review behind generic “processing” states.
9. Couple registry records and transaction state into one undifferentiated object.
10. Assume every existing page corresponds to a necessary future system component.
11. Invent undocumented MCA APIs, backend services, internal workflows or officer permissions.
12. Treat inferred Phase 1 architecture as verified MCA implementation.
13. Build a visually modern frontend over an unchanged conceptual model and call that transformation.
14. Optimise for form completion while ignoring what happens before and after the form.
15. Make the user responsible for remembering transaction identifiers, deadlines and next steps when the system can provide them.

---

# 15. Architecture Decision Filters

Every major Phase 2 design decision should be tested against these questions.

### User

**Does this make the user's actual objective easier to accomplish?**

### Legal

**Can the design represent the applicable legal requirement and its source?**

### Entity

**Is the acting entity/person context explicit?**

### Authority

**Can the system distinguish identity from authority?**

### Reuse

**Is existing verified data reused instead of recollected?**

### Composition

**Is this capability reusable across multiple services?**

### Workflow

**Is the transaction state explicit and persistent?**

### Human intervention

**Is automated vs human processing visible and modelled?**

### Outcome

**Does the design represent the actual regulatory/registry outcome, not merely submission?**

### Future change

**Can the system accommodate regulatory, service and technology changes without rewriting unrelated services?**

### Legacy independence

**Would we still make this architectural choice if the current MCA website did not exist?**

That final question is particularly important.

---

# 16. Definition of Done for Phase 2 Architecture

Phase 2 architecture should not be considered complete until it can demonstrate:

- A validated service catalogue.
- A validated form/service relationship model.
- A canonical entity/person model.
- A user/role/authority model.
- A reusable capability map.
- A regulatory rule model.
- A document model.
- A transaction/workflow state model.
- A payment model.
- A registry/transaction separation.
- An obligation/continuous-compliance model.
- A notification/event model.
- An audit/provenance model.
- An integration boundary model.
- Explicit unknowns requiring MCA stakeholder validation.
- Traceability from legal provision → obligation → service → data → document → form → rule → workflow → outcome.
- A clear migration strategy that does not require reproducing legacy architecture one-for-one.

Most importantly, the architecture should demonstrate that multiple apparently different services can be produced from the same reusable platform primitives.

---

# 17. The Target Mental Model

The future MCA ecosystem should move from:

```text
USER
  ↓
WEBSITE
  ↓
MENU
  ↓
FORM
  ↓
SUBMIT
```

toward:

```text
USER
  ↓
INTENT
  ↓
IDENTITY + ACTIVE ROLE
  ↓
ENTITY / REGULATORY CONTEXT
  ↓
APPLICABLE OBLIGATION
  ↓
SERVICE
  ↓
REUSABLE DATA + DOCUMENTS
  ↓
RULES + VALIDATION
  ↓
SIGNATURE + PAYMENT
  ↓
TRANSACTION WORKFLOW
  ↓
AUTOMATED / ASSISTED / HUMAN REVIEW
  ↓
DECISION / REGISTRY OUTCOME
  ↓
PERSISTENT STATUS
  ↓
NEXT OBLIGATION / NEXT ACTION
```

This is the fundamental architectural shift.

---

# 18. One-Page Kiro Principle Checklist

Before implementing any feature, Kiro should be able to answer:

- [ ] What user intent does this serve?
- [ ] What entity/person context applies?
- [ ] What role is the user acting in?
- [ ] What authority is required?
- [ ] Is delegation relevant?
- [ ] What legal obligation/event triggers the service?
- [ ] What existing data can be reused?
- [ ] What documents are required?
- [ ] Which rules determine eligibility/validation?
- [ ] Which shared platform capabilities are being reused?
- [ ] What form(s), if any, are actually required?
- [ ] What is the transaction state?
- [ ] What is the payment state?
- [ ] Can processing be automated, assisted or human-reviewed?
- [ ] What is the authoritative outcome?
- [ ] Does the registry change?
- [ ] What does the user need to know next?
- [ ] What should be audited?
- [ ] What is public versus restricted?
- [ ] What happens when the law/rule changes?
- [ ] Is this architecture independent of legacy MCA navigation?
- [ ] Are any assumptions being presented as facts?
- [ ] What remains UNKNOWN and requires validation?

---

# 19. Architecture Manifesto

> **Build for intent, not forms.**
>
> **Make entity context explicit.**
>
> **Ask once; reuse verified data.**
>
> **Treat regulation as structured, versioned knowledge where appropriate.**
>
> **Compose services from reusable capabilities.**
>
> **Treat compliance as continuous, not episodic.**
>
> **Persist every consequential transaction state.**
>
> **Make human intervention visible.**
>
> **Keep the public registry conceptually distinct from transactional workflows.**
>
> **Design the future MCA platform from first principles—not from the shape of the legacy website.**
>
> **And never confuse a successful login with legal authority to act.**

---

## Source / Evidence Boundary

This document is a target-state architecture guardrail. It is based on the Phase 1 audit and the related Phase 2 bridge documents, including the findings that the current role-permission matrix, exact RBAC implementation, multi-entity access behaviour, detailed workflows, internal SOPs and technical architecture remain partly or wholly unverified.

Accordingly:

- statements about the **target architecture** are recommendations;
- statements about the **current MCA implementation** must be validated against MCA evidence;
- unresolved areas should remain explicitly marked **UNKNOWN** rather than being invented;
- the existing MCA website should be treated as current-state evidence, not as the target-state architectural specification.
