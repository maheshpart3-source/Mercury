# Phase 2 Document Reconciliation

**Purpose:** Analyze the 4 Phase 2 input documents to identify reinforcements, overlaps, contradictions, gaps, and resolve into coherent future-state architecture.

**Input Documents:**
1. MCA Regulatory Framework and Digital Rules Research Pack
2. MCA Service → Form → Process Matrix  
3. MCA User / Role / Authority Model
4. MCA Future-State Architecture Principles

---

## DOCUMENT 1: Regulatory Framework and Digital Rules Research Pack

### Core Contribution

**Establishes the legal-to-digital traceability chain:**

```
LEGAL PROVISION
  ↓
BUSINESS / LEGAL EVENT
  ↓
OBLIGATION
  ↓
ELIGIBLE ENTITY / PERSON
  ↓
REQUIRED DATA
  ↓
REQUIRED DOCUMENT
  ↓
FORM / SERVICE
  ↓
VALIDATION / RULES
  ↓
FEE
  ↓
WORKFLOW
  ↓
DECISION / PROCESSING
  ↓
OUTCOME
  ↓
REGISTRY / RECORD
  ↓
NEXT OBLIGATION
```

### Key Insights

1. **Legal primacy:** Every digital requirement should trace to a legal source (Act, Rule, Notification, Circular)

2. **Domain taxonomy:** Provides comprehensive legal domain map:
   - Formation (incorporation)
   - Name (reservation, change)
   - Share capital (issuance, alteration)
   - Directors (appointment, change)
   - Registered office (establishment, change)
   - Charges (creation, modification, satisfaction)
   - Accounts (preparation, filing)
   - Audit (auditor appointment, reporting)
   - Annual return (periodic filing)
   - Governance (meetings, resolutions)
   - Beneficial ownership (disclosure)
   - Deposits (compliance)
   - CSR (reporting)
   - Inspection/investigation (regulatory inquiry)
   - Restructuring (merger, amalgamation)
   - Closure (strike-off, winding up)
   - Adjudication (penalty, contravention)
   - Tribunals (NCLT/NCLAT)

3. **Rules as first-class objects:** Introduces 18 Companies Rule families + LLP Rule families as versioned, structured requirements

4. **Event-based compliance:** Distinguishes periodic vs event-triggered obligations

5. **Machine-readable rules model:** Proposes structured representation with:
   - Source instrument
   - Provision
   - Version/effective dates
   - Applicability (entity type, jurisdiction, threshold, status, event)
   - Obligation
   - Required data/documents
   - Validations
   - Deadlines
   - Fee rules
   - Workflow
   - Authority
   - Outcomes
   - Downstream obligations

6. **Rule categories:** Identifies 12 rule types:
   - Eligibility
   - Applicability
   - Field validation
   - Cross-field validation
   - Entity relationship
   - Document requirements
   - Signature authority
   - Deadline rules
   - Fee rules
   - Workflow routing
   - Authority routing
   - Outcome rules
   - Access rules

### Limitations Acknowledged

- "Not a reproduction of the Acts"
- "Architecture model, not legal advice"
- "Production must use current statutory text"
- Explicitly marks unknowns: fee formulas, internal SOPs, exact STP rules, role-permission matrix, technical architecture

---

## DOCUMENT 2: Service → Form → Process Matrix

### Core Contribution

**Tests the hypothesis: "70+ FORMS ≠ 70+ PRODUCTS"**

**Proposes:** Common platform primitives + service-specific legal logic

### Key Insights

1. **Service decomposition:** Maps 20+ major services to:
   - Intent
   - Entity/Actor
   - Legal basis
   - Form(s)
   - Key data
   - Required documents
   - Signature/DSC
   - Fee
   - Workflow
   - Validation/rules
   - Outcome
   - Registry/object
   - Next obligation

2. **Reusable primitive hypothesis:** Identifies 13 candidate platform primitives:
   - Common Identity
   - Common Entity/Registry
   - Common Data
   - Common Rules
   - Common Documents
   - Common Signature
   - Common Fee
   - Common Payment
   - Common Workflow
   - Common Notification
   - Common Case Management
   - Common Audit/Provenance
   - Service-Specific Logic

3. **Form-to-capability clustering:** Groups services into 8 clusters:
   - Entity creation (SPICe+, FiLLiP)
   - Person/role maintenance (DIR, LLP partner forms)
   - Periodic compliance (AOC-4, MGT-7, LLP 8/11, DIR-3 KYC)
   - Event-based change (director, office, capital, charge, partner)
   - Registry disclosure (master data, public docs, certified copies)
   - Regulatory cases (complaint, adjudication, scrutiny)
   - Closure (STK, LLP closure)
   - Investor services (IEPF)

4. **Shared data model:** Proposes 14 canonical objects:
   - Person
   - Account
   - Role/Authority
   - Company
   - LLP
   - Filing/Transaction
   - Document
   - Charge
   - Obligation
   - Rule
   - Fee
   - Payment
   - Case
   - Notification
   - Audit event

5. **Common workflow model:** Adapts Phase 1's 19-state model with critical note:
   - "Detailed transitions explicitly classified as inferred"
   - "Separate payment status from filing status"
   - "STP/manual should be configurable, not duplicated"
   - "Query/resubmission semantics remain UNKNOWN"

6. **Legal rule → digital capability mapping:** Defines how rule categories map to platform engines

### Critical Gaps Identified

- Live portal was not accessible
- Complete service/form catalogues require validation
- Exact service-to-form mappings unknown
- Field-level validations unknown
- STP eligibility/routing unknown
- Internal SOPs unavailable
- Payment gateway mechanics unknown
- DSC verification architecture unknown
- Role-permission matrix unknown
- Public vs authenticated boundaries unclear
- Legacy relationships unresolved

---

## DOCUMENT 3: User / Role / Authority Model

### Core Contribution

**Establishes the principle: AUTHENTICATION ≠ AUTHORISATION**

**Critical separation:**

```
IDENTITY (who are you?)
  ↓
ACCOUNT (portal access)
  ↓
ROLE (capacity you act in)
  ↓
AUTHORITY (what you may do)
  ↓
ENTITY RELATIONSHIP (which company/LLP?)
  ↓
DELEGATION (authority granted by others)
  ↓
TRANSACTION AUTHORITY (specific action permission)
```

### Key Insights

1. **Six access questions:**
   - Identity: Who are you?
   - Role: In what capacity are you acting?
   - Authority: What are you legally permitted to do?
   - Entity relationship: Which company/LLP are you acting for?
   - Delegation: Who authorized you to act?
   - Transaction authority: What can you submit, sign, pay, or view?

2. **Actor catalogue:** Maps Phase 1 findings to architectural objects:
   - Public/citizen user
   - Registered user
   - Director (DIN holder)
   - Professional (CS/CA/Advocate)
   - Company/LLP user (authorized signatory)
   - Professional staff
   - KMP/statutory roles
   - Partner/Designated Partner
   - Auditor/Company Secretary
   - Shareholder/Member
   - MCA Officer
   - Specialized Officer/Authority

3. **Identity model:** Separates 11 identity-related objects:
   - Person (canonical human identity)
   - Portal Account (digital access)
   - DIN (statutory director identifier)
   - DSC/Credential (signing credential)
   - Role (capacity)
   - Entity Relationship (person ↔ entity association)
   - Authority (permission basis)
   - Delegation (granted authority)
   - Transaction (specific act)

4. **Entity-relationship context:** Multi-entity problem explicitly modeled:
   - Person → Company → Director
   - Person → Company → Director + Professional (dual capacity)
   - Professional → Company → Mandate
   - Professional Staff → Professional → Client Entity
   - Person → LLP → Partner/Designated Partner

5. **Role → Authority → Action matrix:** Defines 11 actions × 9 actor types grid with explicit permission scope

6. **Transaction authority model:** Every action requires evaluation of:
   - Identity + object + access policy
   - Service eligibility + entity context
   - Ownership/association + draft state
   - Active role + entity relationship
   - Statutory signing rule + credential
   - Transaction + payment authority
   - Authority + deadline + state

7. **Delegation model:** First-class object with 11 elements:
   - Grantor, Grantee, Scope
   - Entity scope, Service scope, Transaction scope
   - Signing scope, Payment scope
   - Validity, Evidence, Revocation

8. **RBAC + ABAC architecture:** Proposes policy-based access with 10 dimensions:
   - Subject, Entity, Action, Resource, Service
   - Legal condition, Delegation, Transaction state, Time, Risk/sensitivity

9. **Access decision flow:** 9-step evaluation process ending with audit

10. **Separation of duties:** 7 explicit architectural rules:
    - Preparer ≠ Signer
    - Signer ≠ Payer
    - Entity association ≠ automatic permission
    - Professional staff authority ≠ inferred
    - Public access ≠ authenticated records
    - Role change ≠ historical authority rewrite
    - Officer decision scope ≠ system admin

### Critical Unknowns Flagged

- Exact role-permission matrix (P0)
- Exact RBAC implementation
- Entity switching mechanism
- Delegation mechanism
- Signing authority rules
- Public vs authenticated vs entity-restricted boundaries
- Officer role hierarchy
- Permission persistence vs recalculation
- Audit schema

---

## DOCUMENT 4: Future-State Architecture Principles

### Core Contribution

**Provides 10 architectural guardrails + cross-cutting invariants + anti-patterns**

### The 10 Principles

1. **Intent Over Form**
   - Users begin with what they want to accomplish, not form number
   - Form ≠ Service
   - Intent → Service → Legal Context → Form(s) → Workflow

2. **Entity Context Everywhere**
   - Platform knows entity, person, relationship, role the user is acting within
   - Identity → Role → Authority → Entity Relationship → Delegation → Transaction Authority
   - Entity context = first-class application state
   - Support explicit entity switching

3. **Ask Once**
   - Verified information reused, not re-requested
   - Create canonical domain data, not form-specific copies
   - Use prefill, confirmation, "no change" acknowledgement

4. **Regulation as Structured Data**
   - Legal/regulatory requirements as structured, versioned rules where appropriate
   - Versioned regulatory/rules layer with source, effective date, expiry, conditions
   - Changes traceable from legal source → service → validation → workflow → user explanation

5. **Services Are Compositions**
   - Services compose reusable platform capabilities
   - Identity + Entity + Data + Documents + Rules + Forms + Payment + Workflow + Outcome
   - Common primitives + service-specific legal logic
   - Don't create 70 independent products

6. **Compliance Is Continuous**
   - Platform understands what entity needs to do next
   - Obligations as first-class objects
   - Entity compliance workspace: what's complete, due, overdue, changed, next?

7. **Transaction State Is Persistent**
   - Transaction has durable, discoverable state and history
   - Separate but connect: Transaction State / Payment State / Workflow State / Registry State
   - Users can always determine: submitted? payment succeeded? review pending? query raised? outcome?

8. **Human Intervention Is Explicit**
   - Distinguish: Automated / Assisted / Human Review / Decision
   - Users know: where is it? who's responsible? what happens next? do I need to act?
   - Don't fake automation where process is human-controlled

9. **Public Registry ≠ Transactional System**
   - Public registry and transactional platform architecturally distinct
   - Public: master data, public documents, reports, statistics
   - Transactional: filings, applications, payments, queries, cases
   - Maintain relationships but don't merge

10. **Don't Optimize Legacy Architecture**
    - Future not constrained by current website IA, URL structure, form taxonomy, backend boundaries
    - Derive from: user intent, legal events, obligations, entities, capabilities, workflow, outcomes
    - Not from: existing menus, legacy hierarchy, URL patterns, form numbering, screen sequence

### Cross-Cutting Invariants (10)

1. Identity ≠ Authorisation
2. Canonical Data (identifiable authoritative sources)
3. Versioned Regulation (traceable to source, effective period)
4. Explicit Workflow (states represented, not hidden)
5. Auditability (actor, action, object, time, authority, rule version)
6. API/Domain Separation (UI ≠ business domain definition)
7. Event-Driven Notifications (domain events, not duplicated logic)
8. Security and Privacy by Design (scoped by identity, role, entity, authority, sensitivity, context)
9. Accessibility as Platform Property (built into design system, not added per form)
10. Observability and Resilience (failure recovery, idempotency, retry, audit, monitoring)

### The 15 Anti-Patterns (What NOT to Do)

1. Don't recreate every existing form as separate application
2. Don't treat current MCA navigation as target IA
3. Don't make form numbers primary UX model
4. Don't hard-code legal rules into individual screens
5. Don't duplicate entity/person data across forms
6. Don't treat logged-in user as automatically authorized
7. Don't hide distinction between public/authenticated/entity-restricted
8. Don't hide human review behind generic "processing"
9. Don't couple registry records and transaction state
10. Don't assume every existing page = necessary future component
11. Don't invent undocumented MCA APIs, backend, workflows, officer permissions
12. Don't treat inferred Phase 1 architecture as verified
13. Don't build visually modern frontend over unchanged conceptual model
14. Don't optimize for form completion while ignoring before/after
15. Don't make user responsible for remembering identifiers, deadlines, next steps

### Architecture Decision Filters (11 Questions)

For every major design decision, test:
1. Does this make user's actual objective easier?
2. Can design represent applicable legal requirement and source?
3. Is acting entity/person context explicit?
4. Can system distinguish identity from authority?
5. Is existing verified data reused?
6. Is capability reusable across multiple services?
7. Is transaction state explicit and persistent?
8. Is automated vs human processing visible and modeled?
9. Does design represent actual regulatory/registry outcome?
10. Can system accommodate regulatory/service/technology changes without rewriting unrelated services?
11. **Would we still make this choice if current MCA website didn't exist?** (Critical)

---

## RECONCILIATION ANALYSIS

### Where Documents REINFORCE Each Other

#### 1. Legal Primacy and Traceability

**All 4 documents agree:**
- Legal provision must drive digital implementation
- Every requirement should trace to statutory source
- Regulation as structured, versioned data
- Explainability: "Why is this required?" should reference legal basis

**Consensus architecture:**
```
Legal Source → Obligation → Service → Data/Document → Validation → Workflow → Outcome
```

#### 2. Form ≠ Service ≠ Product

**Documents 2, 4 explicitly state; Documents 1, 3 implicitly support:**
- "70+ forms ≠ 70+ products" (Doc 2)
- "Intent over form" (Doc 4)
- Forms are legal submission instruments, not the organizing principle
- Forms as **interfaces** over service/data/rules model

**Consensus:** Don't build 70 independent form applications

#### 3. Identity ≠ Authority

**Document 3 establishes; Documents 2, 4 reinforce:**
- Authentication establishes identity
- Authorization requires: identity + role + entity + authority + delegation + context
- Multi-entity, multi-role, multi-capacity scenarios must be explicitly modeled
- Entity context everywhere (Doc 4 Principle 2)

**Consensus:** Separate identity/account/role/authority/entity/delegation layers

#### 4. Reusable Platform Capabilities

**All 4 documents converge on:**

**Common Platform Primitives:**
- Identity/Authority
- Entity/Registry
- Canonical Data
- Regulatory Rules
- Documents
- Signature/DSC
- Fee Calculation
- Payment
- Workflow
- Notification
- Case Management
- Audit/Provenance

**Plus Service-Specific Logic:**
- Legal event orchestration
- Service-specific rules
- Entity-specific requirements

**Consensus:** Services compose platform capabilities + service-specific legal logic

#### 5. Continuous Compliance vs Episodic Filing

**Documents 1, 2, 4 align:**
- Doc 1: "Next Obligation" in traceability chain
- Doc 2: Obligation as first-class object
- Doc 4: Principle 6 "Compliance Is Continuous"

**Consensus:** Platform should know what entity needs to do next, not just accept filings when user submits

#### 6. Persistent Transaction State

**Documents 2, 4 agree; Document 3 supports:**
- Transaction state must be durable and discoverable
- Separate: Transaction / Payment / Workflow / Registry states
- Users must always know status without memorizing SRNs

**Consensus:** Transaction state = first-class persistent object with history

#### 7. Human Intervention Must Be Explicit

**Documents 2, 4 align:**
- Doc 2: STP vs manual routing should be explicit
- Doc 4: Principle 8 "Human Intervention Is Explicit"
- Distinguish: Automated / Assisted / Human Review / Decision

**Consensus:** Don't hide human review; make workflow routing and review status visible

#### 8. Public Registry ≠ Transactional Platform

**Documents 1, 2, 4 agree:**
- Doc 1: Separate "Inspection/Public Documents" from transactional services
- Doc 2: "Registry disclosure" as distinct cluster from transactional services
- Doc 4: Principle 9 explicit separation

**Consensus:** Maintain architectural boundary between public registry and transactional system

#### 9. Evidence Discipline

**All 4 documents maintain:**
- Preserve VERIFIED / INFERRED / ASSUMED / UNKNOWN taxonomy
- Don't invent MCA internal systems, APIs, SOPs
- Flag validation requirements
- Acknowledge gaps explicitly

**Consensus:** Phase 2 architecture is **future-state proposal**, not claim about current MCA implementation

---

### Where Documents OVERLAP

#### 1. Entity Model

**Documents 1, 2, 3 all define entities:**

**Doc 1 (Regulatory):**
- Person, Company, LLP, Director, Partner, Shareholder, Auditor
- Charge, Filing, Case, Order

**Doc 2 (Service/Form):**
- Person, Account, Role/Authority, Company, LLP
- Filing/Transaction, Document, Charge, Obligation
- Rule, Fee, Payment, Case, Notification, Audit event

**Doc 3 (User/Role):**
- Person, Portal Account, DIN, DSC/Credential
- Role, Entity Relationship, Authority, Delegation, Transaction

**Overlap areas:**
- Person (all 3)
- Company/LLP (all 3)
- Account vs Portal Account (Docs 2, 3)
- Role vs Capacity (Docs 2, 3)
- Filing vs Transaction (Docs 1, 2)
- Authority (Docs 2, 3)

**Resolution needed:** Unified canonical entity model (Step 8)

#### 2. Workflow/State Models

**Documents 1, 2 both address workflow:**

**Doc 1 (Regulatory):**
```
Submission → Validation → Payment → Processing → Decision → Registry → Next Obligation
```

**Doc 2 (Service/Form):**
```
Draft → Validating → Validated → Signing → Fee → Payment → Submitted → 
Processing (STP/Manual) → Query/Resubmission → Approved/Rejected → Registry → Completed
```

**Both recognize:**
- Validation before submission
- Payment as distinct stage
- STP vs manual distinction
- Query/resubmission cycle
- Registry update as outcome

**Gap:** Neither fully separates orthogonal state machines (draft vs signing vs payment vs processing vs registry)

**Resolution needed:** Decompose into orthogonal state machines (Step 11)

#### 3. Rule Categories

**Documents 1, 2 both define rule types:**

**Doc 1:**
- Eligibility, Applicability, Field, Cross-field, Entity, Document, Signature, Deadline, Fee, Workflow, Authority, Outcome, Access (13 types)

**Doc 2:**
- Same 13 types mapped to platform engines

**Perfect alignment:** No contradiction

#### 4. Service Decomposition

**Documents 1, 2 both provide service taxonomies:**

**Doc 1 (Legal Domain Map):**
- Formation, Name, Share Capital, Directors, Office, Charges, Accounts, Audit, Annual Return, Governance, Beneficial Ownership, Deposits, CSR, Inspection, Restructuring, Closure, Adjudication, Tribunals (18 domains)

**Doc 2 (Service Clusters):**
- Entity creation, Person/role maintenance, Periodic compliance, Event-based change, Registry disclosure, Regulatory cases, Closure, Investor services (8 clusters)

**Mapping:**
- Formation → Entity creation
- Directors, Office, Share Capital, Charges → Event-based change + Person/role maintenance
- Accounts, Audit, Annual Return → Periodic compliance
- Closure → Closure
- Inspection → Registry disclosure
- Adjudication, Tribunals → Regulatory cases

**Gap:** Doc 1 has more granular legal domains; Doc 2 has service clusters

**Resolution:** Map legal domains → service clusters → platform capabilities (Step 5)

---

### Where Documents CONTRADICT

#### 1. Obligation Model Completeness

**Contradiction:**

**Doc 1 (Regulatory Framework):**
- Ends traceability chain with "NEXT OBLIGATION"
- Obligation as consequence of regulatory requirement
- **But does not define Obligation entity model**

**Doc 2 (Service/Form):**
- Lists "Obligation" as candidate canonical object
- **But provides minimal definition:** "Entity, trigger, legal basis, due date, status"

**Doc 4 (Architecture Principles):**
- Principle 6 "Compliance Is Continuous"
- Obligation should answer: "What does entity need to do next?"
- **But doesn't specify Obligation architecture**

**Gap:** All 3 documents reference Obligation but none fully specifies it

**Resolution:** Must design complete Obligation architecture (Step 12)

#### 2. My Workspace Structure

**Contradiction:**

**Doc 2:**
- Mentions "Workspace should expose upcoming, due, overdue, completed obligations"
- Focus on compliance obligations

**Doc 4:**
- Principle workspace should unify: entities, role/context, active tasks, drafts, filings, payments, notices, queries, documents, certificates, obligations, deadlines, authorizations, notifications, cases
- Much broader scope

**Gap:** Different scopes - Doc 2 obligation-focused, Doc 4 comprehensive control center

**Resolution:** Doc 4 scope is correct; adopt comprehensive workspace architecture (Step 13)

#### 3. Case Management Scope

**Contradiction:**

**Doc 1 (Regulatory):**
- "Adjudication" as domain
- Case = contravention → notice → response → hearing → order → penalty → appeal

**Doc 2 (Service/Form):**
- "Regulatory cases" cluster includes: Complaint, Adjudication, Scrutiny
- Broader than just adjudication

**Gap:** Doc 1 focuses on adjudication; Doc 2 includes complaints and scrutiny as cases

**Resolution:** Case architecture must cover: Complaints (Grievance), Adjudication (Contravention), Scrutiny (Compliance Review), Investigation, Enforcement (Step 11, 17)

#### 4. Transaction vs Filing Terminology

**Contradiction:**

**Doc 1:** Uses "Filing" consistently
**Doc 2:** Uses "Transaction" and "Filing/Transaction" interchangeably
**Doc 3:** Uses "Transaction" for "specific act being attempted"

**Semantic confusion:**
- Is Transaction = Filing submission?
- Or Transaction = broader action (including non-filing services like search, payment)?
- Or Transaction = state container with lifecycle?

**Resolution:** Must clarify:
- **Filing:** Legal submission record (AOC-4, MGT-7, etc.) with SRN
- **Transaction:** User-initiated action with lifecycle (includes filings, payments, searches, queries, cases)
- **Registry Record:** Outcome of approved filing, canonical entity/relationship state

(Step 8, 11)

---

### Where Documents LEAVE GAPS

#### GAP 1: Search and Discovery Architecture

**Gap:** None of the 4 documents addresses search architecture

**User needs:**
- Search by company/LLP name, CIN/LLPIN
- Search by director name, DIN
- Search for services by intent
- Search for forms
- Search for regulations
- Search public documents
- Search obligations

**Required:** Comprehensive search architecture (Step 15)

#### GAP 2: Notification Architecture

**Gap:** Documents mention notifications but don't architect them

**Doc 1:** "Outcome" → "Next Obligation" implies notification
**Doc 2:** Lists "Notification" as canonical object, "Common Notification" as primitive
**Doc 4:** Invariant 7 "Event-Driven Notifications"

**But none specify:**
- Event catalogue
- Notification types
- Recipient resolution
- Channel selection (email, SMS, portal, mobile)
- Template management
- Delivery tracking
- Preferences
- Acknowledgement

**Required:** Event-driven notification architecture (Step 16)

#### GAP 3: Document Management Architecture

**Gap:** Documents mentioned throughout but architecture undefined

**Doc 1:** "Required Document" in traceability chain
**Doc 2:** "Common Documents" as primitive, lists Document as canonical object
**Doc 4:** Principle 3 "Ask Once" implies document reuse

**But missing:**
- Document type taxonomy
- Document requirement vs instance vs generated vs signed vs certified vs registry record
- Document templates
- Upload/generation workflow
- Versioning
- Provenance
- Access control
- Retention policies
- Certified copy generation

**Required:** Comprehensive document architecture (Step 9)

#### GAP 4: Form Architecture

**Gap:** Forms discussed conceptually but architecture undefined

**Doc 2:** "Forms should be interfaces over service/data/rules model"
**Doc 4:** Principle 1 "Form ≠ Service"

**But missing:**
- Form schema architecture
- Field type system
- Conditional fields
- Prefill strategy
- Validation layers
- Multi-form composition
- Form versioning
- Dynamic vs static forms
- Accessibility patterns

**Required:** Form architecture as interface layer (Step 10)

#### GAP 5: Fee and Payment Architecture

**Gap:** Fee calculation mentioned but architecture undefined

**Doc 1:** "FEE" in traceability chain, "Fee rules versioned and linked to legal source"
**Doc 2:** "Common Fee" and "Common Payment" as primitives

**But missing:**
- Fee rule engine architecture
- Fee calculation vs collection separation
- Payment gateway integration patterns
- Challan generation
- Payment modes
- Payment failure handling
- Refund workflow
- Payment state machine
- Fee vs additional fee logic
- Multiple entity payment scenarios

**Required:** Fee and payment architecture (Steps 8, 11)

#### GAP 6: Signature/DSC Architecture

**Gap:** DSC signing mentioned throughout but architecture undefined

**Doc 1:** "Signature authority" as rule type
**Doc 2:** "Common Signature" as primitive
**Doc 3:** DSC as credential, signing authority rules

**But missing:**
- Signature requirement determination
- Multi-signer orchestration
- Signing order enforcement
- DSC verification with CAs
- Class 2 vs Class 3 DSC routing
- Signature state machine
- Partial signing state
- Signature failure handling
- Credential expiry handling
- Signature audit trail

**Required:** Signature architecture (Steps 8, 11, 19)

#### GAP 7: Technical Architecture Selection

**Gap:** None of the 4 documents proposes technical architecture

**Doc 4:** Lists options (modular monolith, SOA, microservices, event-driven) but doesn't choose

**Missing:**
- Architecture style recommendation
- Explicit tradeoff analysis
- Scalability approach
- Data consistency strategy
- Integration patterns
- Technology choices
- Deployment model
- Operational model

**Required:** Technical architecture with explicit tradeoffs (Step 18)

#### GAP 8: Security Architecture

**Gap:** Security mentioned but not architected

**Doc 3:** Access decision flow, separation of duties
**Doc 4:** Invariant 8 "Security and Privacy by Design"

**But missing:**
- Authentication mechanisms
- Session management
- Credential storage
- Encryption strategy
- API security
- Audit logging
- Threat model
- Data privacy controls
- Fraud prevention
- Regulatory compliance (data protection)

**Required:** Complete security architecture (Step 19)

#### GAP 9: Migration and Legacy

**Gap:** No migration strategy from current to future

**Missing:**
- V2 to V3 migration status (unknown)
- Future V3 to V4 migration approach
- Data migration strategy
- Service migration sequence
- Dual-system operation period
- Cutover approach
- Rollback plan
- User migration (account, data, drafts)

**Required:** Migration architecture (not explicitly in 22 steps, but critical)

#### GAP 10: Accessibility Architecture

**Gap:** Mentioned but not architected

**Doc 4:** Invariant 9 "Accessibility as Platform Property"

**But missing:**
- WCAG compliance level target
- Screen reader support strategy
- Keyboard navigation patterns
- Form accessibility patterns
- Document accessibility
- Notification accessibility
- Error message accessibility
- Multi-language support

**Required:** Accessibility architecture (part of Step 10 form architecture, Step 20 IA)

---

## COHERENT FUTURE-STATE MODEL: Synthesis

### Architectural Foundation (from all 4 documents)

```
USER INTENT
  ↓
IDENTITY + ROLE + ENTITY CONTEXT
  ↓
AUTHORITY + DELEGATION EVALUATION
  ↓
LEGAL PROVISION + REGULATORY RULE
  ↓
SERVICE (composed from platform capabilities)
  ↓
OBLIGATION DETERMINATION
  ↓
DATA (canonical, reused)
  ↓
DOCUMENTS (required + provided)
  ↓
FORM INTERFACE (over data/rules)
  ↓
VALIDATION (rules engine)
  ↓
SIGNATURE (authority + credential)
  ↓
FEE CALCULATION (rules engine)
  ↓
PAYMENT (gateway integration)
  ↓
SUBMISSION
  ↓
WORKFLOW (routing: STP / Assisted / Human Review)
  ↓
PROCESSING (explicit states)
  ↓
QUERY / RESUBMISSION (if required)
  ↓
DECISION (approval / rejection)
  ↓
REGISTRY UPDATE (canonical entity/relationship state)
  ↓
NOTIFICATION (events)
  ↓
NEXT OBLIGATION
  ↓
CONTINUOUS COMPLIANCE LOOP
```

### Layered Architecture Model

**PRESENTATION LAYER:**
- Information Architecture (intent-driven, not form-driven)
- Form Interfaces (over service/data/rules, not independent products)
- My Workspace (entity control center)
- Search & Discovery
- Notifications

**SERVICE LAYER:**
- Service Orchestration (intent → service resolution)
- Service Domains (Formation, Compliance, Change, Disclosure, Closure, Registry Access, Cases)

**PLATFORM CAPABILITIES LAYER:**
- Identity & Authority (identity, role, entity context, delegation, authorization)
- Entity & Registry (canonical Person, Company, LLP, Relationships)
- Obligation & Compliance (continuous compliance engine)
- Regulatory Rules (versioned, structured, explainable)
- Document Management
- Signature/DSC
- Fee Calculation
- Payment
- Workflow & Case Management
- Notification & Events
- Search & Discovery
- Audit & Provenance

**DATA LAYER:**
- Canonical Domain Objects (~25 entities)
- Separate: Transactional Data, Registry Data, Audit Data
- Versioning, History, Effective Dates

**INTEGRATION LAYER:**
- Payment Gateways
- DSC Certifying Authorities
- Email/SMS Gateways
- PAN/Aadhaar Validation (if integrated)
- Legacy Systems (V2, e-Scrutiny, CMS status unknown)

**INFRASTRUCTURE LAYER:**
- Technical Architecture (to be determined Step 18)
- Security & Privacy
- Observability
- Resilience

---

## RESOLVED ARCHITECTURAL DECISIONS

### Decision 1: Forms Are Interfaces, Not Products

**Source:** Documents 2, 4
**Decision:** Forms remain as legal submission artifacts but become **interface layer over service/data/rules model**
**Implication:** Don't build 70 independent form applications
**Next:** Form architecture (Step 10)

### Decision 2: Identity ≠ Authority

**Source:** Document 3, reinforced by 2, 4
**Decision:** Separate identity/account/role/entity/authority/delegation/transaction authority into architectural layers
**Implication:** Authorization is context-dependent evaluation, not login-time permission assignment
**Next:** Complete identity/authority model (Step 4)

### Decision 3: Services Compose Platform Capabilities

**Source:** Documents 2, 4
**Decision:** Service = Platform Capability Orchestration + Service-Specific Legal Logic
**Implication:** Build reusable capabilities first, service logic second
**Next:** Service architecture (Step 5), test form hypothesis (Step 6)

### Decision 4: Regulation as Structured Data

**Source:** Documents 1, 2, 4
**Decision:** Legal provisions → machine-addressable rules where appropriate, with versioning, provenance, explainability
**Implication:** Rules engine; regulatory change as configuration not code rewrite
**Next:** Regulatory/rules architecture (Step 7)

### Decision 5: Obligations as First-Class Domain Objects

**Source:** Documents 1, 2, 4
**Decision:** Obligation = persistent object with entity, trigger, legal basis, due date, status, next action
**Implication:** Platform knows "what entity needs to do next"
**Next:** Compliance engine (Step 12)

### Decision 6: Separate Transaction/Payment/Workflow/Registry States

**Source:** Documents 2, 4
**Decision:** Decompose Phase 1's conflated 19-state model into orthogonal state machines
**Implication:** Clear separation of concerns; better observability
**Next:** Workflow/case architecture (Step 11)

### Decision 7: My Workspace = Entity Control Center

**Source:** Documents 2, 4
**Decision:** Workspace unifies entity context, role, obligations, transactions, drafts, payments, queries, notifications, deadlines with "what to do next" intelligence
**Implication:** Not generic dashboard; contextual compliance and action center
**Next:** Workspace redesign (Step 13)

### Decision 8: Public Registry ≠ Transactional Platform

**Source:** Documents 1, 2, 4
**Decision:** Maintain architectural boundary between public registry (master data, documents) and transactional platform (filings, applications, cases)
**Implication:** Different access patterns, data models, and integrity requirements
**Next:** Registry vs transactional architecture (Step 14)

### Decision 9: Explicit Human Intervention

**Source:** Documents 2, 4
**Decision:** Model Automated / Assisted / Human Review / Decision explicitly; make routing rules and review status visible
**Implication:** Don't hide human review behind "processing"; transparency for users and internal efficiency
**Next:** Internal workflow model (Step 17)

### Decision 10: Evidence Discipline Maintained

**Source:** All 4 documents
**Decision:** Continue VERIFIED / INFERRED / PROPOSED / UNKNOWN taxonomy; Phase 2 outputs are **future-state proposals**, not claims about current MCA implementation
**Implication:** Never invent MCA internal systems, APIs, SOPs; flag validation requirements
**Next:** Validation register (Step 25)

---

## PRIORITY ARCHITECTURE WORK (Steps 3-22)

### Immediate (Steps 3-8): Foundation

1. **Domain Model** - Define ~25 canonical domain objects with clear boundaries
2. **Identity/Authority** - Complete separation of identity/role/entity/authority/delegation
3. **Service Architecture** - Intent-driven service model with platform capability composition
4. **Form Hypothesis Test** - Validate reusable primitives + service-specific logic
5. **Regulatory/Rules** - Machine-addressable rules with versioning and explainability
6. **Canonical Data** - Source of truth, lifecycle, versioning for all domain objects

### Core Capabilities (Steps 9-14): Platform

7. **Document Architecture** - Requirement/instance/generated/signed/certified/registry lifecycle
8. **Form Architecture** - Interfaces over service/data/rules with accessibility
9. **Workflow/Case** - Orthogonal state machines for different lifecycle aspects
10. **Compliance Engine** - Continuous compliance with obligation intelligence
11. **My Workspace** - Entity control center with role context and obligation-driven actions
12. **Registry/Transaction Separation** - Clear boundary and relationship model

### Supporting Capabilities (Steps 15-17): Experience & Operations

13. **Search & Discovery** - Intent-based, entity-contextual, multi-dimensional search
14. **Notifications** - Event-driven notification architecture
15. **Internal Workflows** - STP, ROC, RD, scrutiny, enforcement with transparency

### Technical & Security (Steps 18-19): Infrastructure

16. **Technical Architecture** - Architecture style with explicit tradeoffs
17. **Security Architecture** - Authentication, authorization, encryption, audit, privacy

### User-Facing (Steps 20-22): Experience Validation

18. **Information Architecture** - Derived from domain model + intent + entity context, NOT from current navigation
19. **User Journeys** - 10 user types with intent → outcome validation
20. **Stress Tests** - Validate architecture across 10 service patterns

### Documentation (Steps 23-26): Governance

21. **ADRs** - Architecture Decision Records for all major choices
22. **Gap Analysis** - Current vs Future comparison across all domains
23. **Validation Register** - P0/P1/P2 unknowns requiring MCA validation
24. **Final Report** - Comprehensive architecture decision summary

---

## CRITICAL SUCCESS FACTORS

### From Document Reconciliation

1. **Don't rebuild current website** - Design from intent, legal events, entities, obligations
2. **Don't build 70 form products** - Compose from platform capabilities
3. **Don't conflate identity and authority** - Separate into architectural layers
4. **Don't hide entity context** - Make explicit everywhere
5. **Don't duplicate canonical data** - Ask once, reuse verified
6. **Don't conflate state machines** - Separate transaction/payment/workflow/registry
7. **Don't hide human review** - Make routing and status explicit
8. **Don't merge registry and transactional** - Maintain architectural boundary
9. **Don't invent MCA internals** - Propose future, flag validation needs
10. **Don't optimize legacy** - Would we still make this choice if current website didn't exist?

---

## TRANSITION TO STEP 3

**Reconciliation complete. Key outcomes:**

**Reinforced:** Legal traceability, form ≠ product, identity ≠ authority, reusable capabilities, continuous compliance, persistent state, explicit human intervention, registry ≠ transactional, evidence discipline

**Overlaps resolved:** Unified entity model needed, workflow decomposition required, service cluster mapping defined

**Contradictions resolved:** Obligation architecture required, comprehensive workspace scope, case management scope clarified, transaction vs filing terminology defined

**Gaps identified:** Search, notification, document, form, fee/payment, signature/DSC, technical, security, migration, accessibility architectures required

**10 decisions locked:** Forms as interfaces, identity ≠ authority, composed services, regulation as data, obligations first-class, separate states, workspace as control center, registry separation, explicit human intervention, evidence discipline

**Ready for Step 3:** Define Future MCA Domain Model with bounded domains, purpose, responsibility, owned data, relationships, lifecycle, inputs, outputs, events, actors, dependencies.
