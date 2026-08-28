# MCA Platform — Architecture Source of Truth Synthesis

**Implementation Phase — Foundation Initialisation**  
**Synthesis Date:** 28 August 2026  
**Status:** FOUNDATIONAL KNOWLEDGE BASE  
**Purpose:** Consolidated understanding of Phase 1, 2, 3 documentation for implementation

---

## Executive Summary

This document synthesizes ALL Phase 1 (Current-State), Phase 2 (Architecture), and Phase 3 (Product Definition) documentation into a single authoritative knowledge base for implementation.

**Documentation Review Status:**
- ✅ Phase 1 Summary Report
- ✅ Phase 2 Architecture Report (LOCKED)
- ✅ Phase 2 Architecture Baseline (LOCKED)
- ✅ Phase 3 Product Definition & Execution Baseline
- ✅ Entity-Centric Experience Model (Part 1)
- ✅ User/Role/Authority Model
- ✅ Regulatory Framework Research
- ✅ Service/Form/Process Matrix
- ✅ Future-State Architecture Principles

**Confidence Level:** HIGH — Architecture is comprehensive, evidence-based, and stress-tested.

---

## PART 1: ARCHITECTURAL INVARIANTS (NON-NEGOTIABLE)

### 1.1 The Fundamental Separations (MUST NOT BE COLLAPSED)

These distinctions are **LOCKED** in Phase 2 and MUST be preserved in implementation:

| What | ≠ | What | Why This Matters |
|------|---|------|------------------|
| **Identity** | ≠ | **Authority** | A logged-in user is not automatically authorized to act |
| **Account** | ≠ | **Identity** | Portal access ≠ verified legal person |
| **Role** | ≠ | **Authority** | Having a role doesn't grant all permissions |
| **Entity** | ≠ | **Account** | Legal entity ≠ user account |
| **Form** | ≠ | **Service** | Forms are interfaces over services |
| **Service** | ≠ | **Transaction** | Service definition ≠ user's transaction instance |
| **Transaction** | ≠ | **Filing** | User action ≠ immutable legal record |
| **Transaction** | ≠ | **Case** | Filing lifecycle ≠ regulatory case |
| **Filing** | ≠ | **Registry Record** | Submission ≠ authoritative registry state |
| **Document Requirement** | ≠ | **Document Instance** | Rule ≠ uploaded file |
| **Public Registry** | ≠ | **Transactional System** | Public information ≠ private processing |
| **Draft State** | ≠ | **Payment State** | Orthogonal state machines |
| **Payment State** | ≠ | **Processing State** | Orthogonal state machines |
| **Processing State** | ≠ | **Registry State** | Orthogonal state machines |

**Implementation Rule:** If you find yourself merging any of these concepts, STOP and reconsider the design.

---

### 1.2 The Canonical Context Chain

Every authenticated MCA transaction operates through this multi-layered context:

```
PERSON (natural human)
  ↓
PORTAL ACCOUNT (digital access credential)
  ↓
AUTHENTICATION (who are you?)
  ↓
IDENTITY (verified legal person)
  ↓
ROLE/CAPACITY (what capacity are you acting in?)
  ↓
ENTITY RELATIONSHIP (for which entity?)
  ↓
AUTHORITY (what are you permitted to do?)
  ↓
DELEGATION (authority granted by others)
  ↓
ACTIVE ENTITY CONTEXT (which entity is active right now?)
  ↓
TRANSACTION (specific action being attempted)
  ↓
AUTHORIZATION DECISION (permit/deny with reason)
```

**Implementation Rule:** Authority is a **FUNCTION** of `(Identity × Role × Entity × Action)`, NOT a property of Identity.

---

### 1.3 Phase 2 Architectural Principles (10 Locked Invariants)

From Architecture Baseline:

1. **Intent Over Form** — Users start with "I want to..." not "Form INC-22"
2. **Entity Context Everywhere** — Active entity and acting capacity must be explicit
3. **Ask Once** — Reuse verified data; prefill where appropriate
4. **Regulation as Structured Data** — Rules are versioned, source-linked, explainable
5. **Services Are Compositions** — Platform capabilities + service-specific logic
6. **Compliance Is Continuous** — Platform calculates obligations proactively
7. **Transactions Persist** — Transaction state is durable, not ephemeral
8. **Explicit Human Intervention** — Manual review is an explicit workflow state
9. **Registry Separation** — Public registry ≠ transaction processing system
10. **Bi-Temporal Data** — Transaction time (when recorded) + Valid time (when effective)

**Implementation Rule:** These are architectural constraints. Any deviation requires an explicit Architecture Decision Record.

---

## PART 2: DOMAIN ARCHITECTURE (12 BOUNDED DOMAINS)

### 2.1 Core Regulatory Domains (5)

**Domain 1: Identity & Access**
- **Responsibility:** Who is acting, in what role, for which entity, with what authority
- **Key Entities:** Person, Portal Account, DIN, Credential, Role, Entity Relationship, Authority, Delegation
- **Critical Principle:** Authentication ≠ Authorization
- **Services:** Authentication, Context-dependent authorization, DSC verification, Multi-entity switching, Delegation management

**Domain 2: Entity & Registry**
- **Responsibility:** Canonical, authoritative corporate entity records
- **Key Entities:** Company, LLP, Director-Company Relationship, Partner-LLP Relationship, Shareholder, Charge, ROC
- **Critical Principle:** Single source of truth, bi-temporal data
- **Services:** Entity master data, Entity search, Relationship management, Registry updates, Historical queries

**Domain 3: Regulatory Compliance**
- **Responsibility:** Continuous compliance tracking, obligation management
- **Key Entities:** Regulatory Profile, Obligation, Obligation Instance, Compliance Trigger Event, Exemption
- **Critical Principle:** Proactive obligation calculation
- **Services:** Obligation calculation, Due date tracking, Compliance dashboard, "What's next" intelligence

**Domain 4: Service & Transaction**
- **Responsibility:** Service orchestration, transaction lifecycle
- **Key Entities:** Service Definition, Transaction, Transaction Data, Transaction Signature, Transaction Document, Transaction Payment
- **Critical Principle:** Intent-driven services, persistent transaction state
- **Services:** Service intent resolution, Transaction creation, State management, SRN management

**Domain 5: Regulatory Oversight**
- **Responsibility:** Manual review, cases, scrutiny, adjudication, orders
- **Key Entities:** Review Case, Query/Deficiency, Order, Complaint, Adjudication Case, Scrutiny Case
- **Critical Principle:** Explicit human intervention, case-based workflow
- **Services:** Case creation, Notice issuance, Response collection, Order issuance

---

### 2.2 Platform Capability Domains (7)

**Domain 6: Payment & Fees**
- Fee calculation (versioned rules), Payment processing, Refunds, Reconciliation

**Domain 7: Document Management**
- Upload, Validation, Storage, Retrieval, Certified copy generation, Retention

**Domain 8: Workflow & Orchestration**
- State machines, STP/manual routing, Officer assignment, Saga orchestration

**Domain 9: Notification & Events**
- Event publishing/subscription, Multi-channel delivery (email, SMS, in-app)

**Domain 10: Search & Discovery**
- Intent-based search, Entity search, Service discovery, Faceted search

**Domain 11: Audit & Provenance**
- Action logging, Audit query, Compliance reporting, Immutable audit trail

**Domain 12: Content & Help**
- Help search, Knowledge base, Regulatory content management

---

### 2.3 Domain Interaction Pattern (Standard Service Flow)

```
User initiates service
  ↓
Identity & Access (authenticate, authorize, establish entity context)
  ↓
Service & Transaction (create transaction, initialize state)
  ↓
Entity & Registry (fetch entity data, validate context)
  ↓
Regulatory Compliance (check obligations, applicability rules)
  ↓
Document Management (attach documents, validate requirements)
  ↓
Payment & Fees (calculate fee, collect payment)
  ↓
Workflow & Orchestration (route: STP or manual)
  ↓
[IF MANUAL] Regulatory Oversight (review, query, decide)
  ↓
Entity & Registry (update registry on approval)
  ↓
Regulatory Compliance (mark obligation complete, generate next)
  ↓
Notification & Events (notify actor, publish events)
  ↓
Audit & Provenance (log action with full context)
```

**Implementation Rule:** Every consequential service MUST follow this pattern (or explicitly document why not).

---

## PART 3: CANONICAL ENTITY MODEL (25 Core Entities)

### 3.1 Identity Domain (8 entities)

1. **Person** — Natural person identity (name, identifiers, contact, status)
2. **Portal Account** — Digital access credential (login, authentication state)
3. **DIN** — Director Identification Number (linked to Person)
4. **Credential** — DSC, Aadhaar, PAN (signing/verification)
5. **Role** — Director, Partner, Professional, Staff, Officer (capacity)
6. **Entity Relationship** — Person ↔ Entity link with effective dates
7. **Authority** — Contextual permission record (source, scope, validity)
8. **Delegation** — Granted authority with scope and validity

**Key Principle:** Person exists independently of Account. Account links to Identity. Identity participates in Roles. Roles have Authority.

---

### 3.2 Entity Domain (8 entities)

1. **Company** — CIN-identified company (name, type, status, office, capital)
2. **LLP** — LLPIN-identified LLP (name, status, office, contribution)
3. **Director-Company Relationship** — With appointment/resignation dates
4. **Partner-LLP Relationship** — Including Designated Partner status
5. **Shareholder-Company Relationship** — Shareholding with changes
6. **Charge** — Security interest with lifecycle (created → modified → satisfied)
7. **ROC** — Registrar office, jurisdiction
8. **Entity Change Event** — Director change, office change, capital change, etc.

**Key Principle:** Relationships are first-class entities with effective dates. Historical relationships are preserved, not deleted.

---

### 3.3 Compliance Domain (6 entities)

1. **Regulatory Profile** — Entity compliance attributes (type, capital, turnover, listing)
2. **Obligation** — Regulatory duty with legal basis
3. **Obligation Instance** — Specific due date, entity, status
4. **Compliance Trigger Event** — Incorporation, FY end, event-based
5. **Exemption** — Entity exempted from specific obligation
6. **Compliance Timeline** — Historical compliance pattern

**Key Principle:** Obligations are calculated proactively based on entity profile and trigger events.

---

### 3.4 Transaction Domain (8 entities)

1. **Service Definition** — Service metadata, rules, requirements
2. **Transaction** — SRN-identified user interaction
3. **Transaction Data** — Form data captured
4. **Transaction Signature** — DSC signatures collected
5. **Transaction Document** — Documents attached
6. **Transaction Payment** — Payment link
7. **Transaction Routing** — STP/manual routing decision
8. **Transaction History** — State changes, audit trail

**Key Principle:** Transaction is the user's interaction lifecycle. Filing is the immutable legal record produced.

---

### 3.5 Oversight Domain (10 entities)

1. **Review Queue** — Manual review items
2. **Review Case** — Transaction under review
3. **Review Action** — Officer action on review
4. **Query/Deficiency** — Notice to entity requiring response
5. **Scrutiny Case** — Compliance review of entity
6. **Investigation Case** — Potential violation inquiry
7. **Adjudication Case** — Formal contravention proceedings
8. **Order** — Legally binding decision
9. **Complaint** — User grievance
10. **Enforcement Action** — Penalty execution

**Key Principle:** Cases have distinct lifecycles. Transaction Review Case ≠ Complaint Case ≠ Adjudication Case.

---

### 3.6 Platform Entities (6 entities)

1. **Document** — Uploaded/generated file with metadata
2. **Payment** — Fee payment with gateway reference
3. **Fee Rule** — Versioned fee calculation rule
4. **Notification** — Email, SMS, in-app message
5. **Audit Event** — Who, what, when, source, rule version
6. **Regulatory Rule** — Versioned legal condition with source provenance

---

## PART 4: ENTITY CONTEXT MODEL (THE CRITICAL ARCHITECTURE)

### 4.1 Active Entity vs Available Entities

**Active Entity:**
- Exactly ONE active entity at any time (or NONE)
- Explicit and visible to user
- Determines: obligations shown, transactions accessible, authority evaluated, context for actions

**Available Entities:**
- Set of entities user has active role for
- May be zero (new user), one (typical director), many (professional), or thousands (large firm)

**Derivation Logic:**
```typescript
AVAILABLE_ENTITIES(Identity, Timestamp) = 
  ALL entities WHERE:
    - Identity has ACTIVE role for Entity at Timestamp
    - Role grants any authority (even preparatory)
    - Entity is not STRUCK OFF
```

**Initial State:**
- First login: NO active entity (user must select)
- Subsequent login: MAY restore last active entity (with constraints)

**Null State (No Active Entity):**
- Can access: Public registry, Account settings, Help, Entity selection
- Cannot access: Entity transactions, Filing services, Entity management

---

### 4.2 Authority Evaluation Model

**The Six Questions:**

| Concept | Question | Decision Input |
|---------|----------|----------------|
| **Identity** | Who are you? | Person + Account + Authentication |
| **Role** | In what capacity? | Active role selection |
| **Authority** | What are you permitted to do? | Permission + legal/business policy |
| **Entity Relationship** | For which entity? | EntityRelationship + effective dates |
| **Delegation** | Who authorized you? | Delegation record + scope |
| **Transaction Authority** | What can you do on THIS transaction? | Transaction-scoped authorization |

**Authorization Function:**
```typescript
CAN_PERFORM(Identity, Role, Entity, Action, Timestamp) → Boolean

WHERE:
  - Identity is VERIFIED
  - Role is ACTIVE for Entity at Timestamp
  - Authority derived from Role includes Action
  - No blocking constraints (suspension, revocation, expiration)
  - Delegation scope allows Action (if acting as delegate)
```

---

### 4.3 Multi-Entity Scenarios (Critical Test Cases)

| Scenario | Example | Authority Difference |
|----------|---------|---------------------|
| **Single entity director** | Priya is director of ABC Pvt Ltd only | Full authority for ABC, none for others |
| **Multi-entity director** | Priya is director of ABC and XYZ | Different authority for each entity |
| **Professional multi-entity** | Rajesh (CA) authorized for 50 client companies | Different scope per client |
| **Mixed roles** | Priya is director of ABC, professional for XYZ | Director authority for ABC, professional scope for XYZ |
| **Delegate** | Amit (staff) works under Rajesh (CA) | Limited preparatory actions, cannot submit/sign |
| **Expired relationship** | Former director | NO authority after resignation date |

**Implementation Rule:** Authority MUST be evaluated per entity. A user with authority for Entity A has NO automatic authority for Entity B.

---

## PART 5: SERVICE ARCHITECTURE

### 5.1 Service Composition Model

Every service composes these capabilities:

```
SERVICE = 
  Identity & Authorization (who, with what authority)
  + Entity Context (which entity, current state)
  + Regulatory Rules (eligibility, validation, fee, deadline)
  + Data Collection (prefill + capture)
  + Document Requirements (specify, validate, attach)
  + Signature Orchestration (multi-party, sequential/parallel)
  + Payment Processing (calculate + collect)
  + Workflow Routing (STP/manual decision)
  + Outcome Production (registry update, filing record)
  + Next Actions (triggered obligations, notifications)
```

**Implementation Rule:** Build platform capabilities FIRST, then compose them into services. Do NOT build 70 independent services from scratch.

---

### 5.2 Proven Service Patterns (10 Stress-Tested)

From Phase 2 stress test:

1. **Entity Creation** — SPICe+ (multi-form composition, complex orchestration)
2. **Person Compliance** — DIR-3 KYC (100% STP, person-centric, annual)
3. **Periodic Entity Compliance** — AOC-4, MGT-7 (multi-party signing, deadline-driven)
4. **Event-Based Relationship Change** — Director/Partner change (relationship lifecycle)
5. **Persistent Object Lifecycle** — Charge (create → modify → satisfy across transactions)
6. **Entity Termination** — STK-2 (preconditions, notice period, always manual)
7. **Public Read Services** — Master data, public docs (entitlement-based)
8. **User-Initiated Case** — Complaint (no payment/DSC, ticket workflow)
9. **Regulatory Case** — Scrutiny, Adjudication (formal proceedings, orders)
10. **Investor Services** — IEPF (specialized workflow, claim verification)

**Implementation Rule:** For foundation phase, implement ONE pattern fully (Entity Creation or Person Compliance) to prove the architecture.

---

### 5.3 Reusable Platform Primitives (13 Identified)

From Service/Form/Process Matrix:

| Primitive | Used By | Responsibility |
|-----------|---------|----------------|
| **Common Identity** | All authenticated services | Authentication, account, role, authority, delegation |
| **Common Entity** | All entity services | Canonical records, relationships, effective dates |
| **Common Data** | All data-capture services | Reusable data + prefill |
| **Common Rules** | All services | Versioned source-linked rules |
| **Common Documents** | All evidence-based services | Upload, validation, retention, retrieval |
| **Common Signature** | All signed filings | DSC verification, authority check |
| **Common Fee** | All paid services | Versioned fee calculation |
| **Common Payment** | All paid services | Payment intent, confirmation, failure |
| **Common Workflow** | All services | State machine, routing, SLA |
| **Common Notification** | All services | Event-triggered communications |
| **Common Case** | Complaints, oversight | Case, notice, evidence, decision |
| **Common Audit** | All consequential actions | Immutable audit trail |
| **Service-Specific Logic** | Each service | Legal event orchestration |

---

## PART 6: REGULATORY FRAMEWORK MAPPING

### 6.1 Legal-to-Digital Traceability Chain

```
LEGAL PROVISION (Act, Rule, Section)
  ↓
REGULATORY RULE (machine-addressable, versioned)
  ↓
OBLIGATION TEMPLATE (recurring or event-triggered)
  ↓
APPLICABILITY RULES (which entities must comply)
  ↓
SERVICE DEFINITION (how to comply)
  ↓
FORM/DATA REQUIREMENTS (what to submit)
  ↓
VALIDATION RULES (what makes submission valid)
  ↓
FEE RULES (how much to pay)
  ↓
WORKFLOW RULES (STP eligibility, routing)
  ↓
OUTCOME RULES (what happens on approval)
  ↓
NEXT OBLIGATION (triggered obligations)
```

**Implementation Rule:** Every rule MUST link to legal source. Every rule is versioned with effective dates.

---

### 6.2 Companies Act Domain Map (18 Domains)

From Regulatory Framework Research:

| Legal Domain | Business Event | Digital Object |
|--------------|----------------|----------------|
| **Formation** | Create company | Incorporation service |
| **Name** | Reserve/change name | Name validation + registry |
| **Share Capital** | Issue/alter capital | Capital event + filing |
| **Directors** | Appoint/change director | Person-role relationship |
| **Registered Office** | Change office | Address record + evidence |
| **Charges** | Create/modify/satisfy | Charge lifecycle |
| **Accounts** | File accounts | Financial filing |
| **Audit** | Appoint auditor | Auditor relationship |
| **Annual Return** | Periodic return | Recurring obligation |
| **Governance** | Corporate action | Governance event |
| **Beneficial Ownership** | Report ownership | Ownership relationship |
| **Deposits** | Deal with deposits | Compliance obligation |
| **CSR** | CSR reporting | Disclosure filing |
| **Inspection** | Investigation | Regulatory case |
| **Restructuring** | Merger/arrangement | Tribunal case |
| **Closure** | Strike-off/winding up | Closure workflow |
| **Adjudication** | Contravention | Adjudication case |
| **Tribunals** | Appeal | Judicial case |

---

## PART 7: PHASE 3 PRODUCT MODEL

### 7.1 Future Information Architecture Direction

**NOT:** Home / About / Services / Data / Help (legacy website navigation)

**PROPOSED:**

| Experience Layer | Purpose | Examples |
|-----------------|---------|----------|
| **Start / Do** | Begin an outcome | Start company, Change director, File, Close |
| **Manage** | Manage entities/relationships | Entities, Directors, Partners, Charges |
| **Comply** | Understand obligations | Due items, Deadlines, Notices |
| **Track** | Understand state | Transactions, Cases, Payments, Decisions |
| **Search** | Find information | Entities, Filings, Documents, Services |
| **Learn** | Understand requirements | Acts, Rules, Guidance |
| **Workspace** | Operate across work | Tasks, Entities, Drafts, Obligations |
| **Help** | Resolve problems | Guidance, Support, Complaints |

**Implementation Rule:** IA derives from user intent + entity context + service domains, NOT from legacy navigation.

---

### 7.2 Standard Journey Pattern

```
ENTRY → INTENT → CONTEXT → ELIGIBILITY → REQUIREMENTS → 
PREPARATION → ACTION → VALIDATION → SUBMISSION → PROCESSING → 
STATUS → OUTCOME → RECORD → NOTIFICATION → NEXT ACTION
```

**Implementation Rule:** Not every journey has every stage, but this pattern exposes omissions.

---

### 7.3 Workspace Requirements (Entity Control Center)

From Entity-Centric Experience Model:

**Core Capabilities:**

1. **Entity Context Selector** — Switch entities, view profile, select active role
2. **Obligation Timeline** — Completed, upcoming, due, overdue, requires action
3. **Transaction Manager** — Drafts, submitted, under review, queries, completed
4. **Notices & Decisions** — Queries, orders, hearing notices, approvals/rejections
5. **Documents & Certificates** — Entity documents, filing receipts, public docs
6. **Payments** — Pending, history, challans
7. **Compliance Dashboard** — Status by category, upcoming deadlines, calendar view
8. **Quick Actions** — "Start next obligation", "Respond to query", "Download certificate"

**User Experience Principles:**
- Entity-first: Always show active entity
- Role-explicit: Always show active role
- Action-oriented: Focus on "what to do next"
- Timeline-based: Chronological obligation/transaction view
- Status-transparent: Always know transaction state
- Mobile-first: Compact, essential actions

---

## PART 8: ENTITY SAFETY (CRITICAL REQUIREMENT)

### 8.1 Wrong-Entity Prevention

**The Problem:** User accidentally submits action against wrong entity.

**The Solution:** Safeguards at consequential actions.

**Consequential Actions Requiring Confirmation:**
- Filing submission
- Payment execution
- Signature application
- Director/partner changes
- Charge creation/modification
- Closure-related actions
- Any irreversible action

**Confirmation Pattern:**
```
BEFORE consequential action:
  CONFIRM:
    - Entity: [Entity Name] (CIN/LLPIN)
    - Acting capacity: [Role]
    - Action: [What you're about to do]
  
  USER MUST EXPLICITLY CONFIRM
```

**Implementation Rule:** A user must NEVER accidentally act on the wrong entity. This is a SAFETY requirement.

---

### 8.2 Entity Switching Safety

**Safe Switching:**
- User can switch entity at any time
- Draft work is preserved per entity
- Active transaction prevents switch without warning
- Context restoration after switch

**Unsafe Switching (MUST PREVENT):**
- Switching mid-signature flow without warning
- Switching during payment without confirmation
- Losing draft work without notification
- Carrying data from Entity A into Entity B context

---

## PART 9: STATE MODEL (ORTHOGONAL STATE MACHINES)

### 9.1 NOT One Giant State Enum

**WRONG Approach:**
```typescript
enum TransactionState {
  DRAFT, VALIDATING, VALIDATED, SIGNING, PARTIALLY_SIGNED,
  FULLY_SIGNED, CALCULATING_FEE, PENDING_PAYMENT, PAYMENT_IN_PROGRESS,
  PAYMENT_CONFIRMED, PAYMENT_FAILED, SUBMITTED, QUEUED,
  STP_PROCESSING, MANUAL_REVIEW_QUEUED, UNDER_REVIEW,
  QUERY_RAISED, RESPONSE_RECEIVED, APPROVED, REJECTED,
  REGISTRY_UPDATE_PENDING, REGISTRY_UPDATED, COMPLETED, ABANDONED
}
```

This conflates orthogonal concerns.

---

### 9.2 CORRECT Approach: Separate State Machines

**Draft State:**
- Draft → Validating → Validated

**Signing State:**
- Unsigned → Partially Signed → Fully Signed → Signing Failed

**Payment State:**
- Calculated → Pending → In Progress → Confirmed → Failed

**Submission State:**
- Ready → Submitted (SRN generated)

**Processing State:**
- Queued → STP Processing → Manual Review Queued → Under Review

**Review State:**
- Pending Decision → Query Raised → Response Received → Approved → Rejected

**Registry State:**
- Pending Update → Registry Updated → Update Failed

**Overall Transaction State:**
- In Progress → Completed → Abandoned

**Implementation Rule:** UI may aggregate these into user-friendly status narrative, but backend MUST maintain separate states.

---

## PART 10: EVIDENCE DISCIPLINE

### 10.1 Classification System (MANDATORY)

| Label | Meaning | Use in Implementation |
|-------|---------|----------------------|
| **CURRENT VERIFIED** | Supported by reliable current evidence | Can use with confidence |
| **CURRENT INFERRED** | Reconstructed; not confirmed | Mark as assumption, validate when possible |
| **FUTURE PROPOSED** | New behavior proposed in Phase 2/3 | Implement as designed |
| **UNKNOWN** | Insufficient evidence | Do NOT invent; mark as MOCK clearly |
| **VALIDATION REQUIRED** | Must check before production | Flag for stakeholder validation |

**Implementation Rule:** When implementing unknowns (e.g., MCA APIs, DSC integration, payment gateway), mark them clearly as MOCK or STUB. Do NOT invent assumed behavior.

---

### 10.2 Critical Unknowns (45 P0, 62 P1, 38 P2 from Phase 1)

**P0 Unknowns (Must Mock Clearly):**
- Current portal navigation and IA (access blocked in Phase 1)
- My Workspace actual implementation
- V2/V3/legacy system relationship
- Current technical architecture, APIs, database schemas
- Complete service/form catalogues
- Role-permission matrix (RBAC implementation)
- Multi-entity context switching mechanism
- STP eligibility rules (what makes filing STP vs manual)
- ROC/RD assignment logic
- Manual review workflow details
- Query/resubmission mechanics
- Payment gateway providers and integration
- DSC verification technical protocol
- Entity master data quality
- Filing history format

**Implementation Rule:** For each unknown, create explicit MOCK service with clear "MOCK" label. Design integration boundary carefully for future replacement.

---

## PART 11: TESTING STRATEGY (ARCHITECTURAL INVARIANTS)

### 11.1 Tests That Prove the Architecture

**Entity Context Tests:**
1. User with one entity can select it
2. User with multiple entities can switch between them
3. Active entity persists across requests
4. Active entity is visible in UI
5. Entity context is sent with every API call
6. Entity switching during draft preserves per-entity drafts
7. No active entity prevents consequential actions

**Authority Tests:**
1. User with authority for Entity A cannot act on Entity B
2. Director has director permissions
3. Professional has professional permissions (where authorized)
4. Delegate has limited permissions
5. Expired relationship denies access
6. Revoked delegation denies access
7. Different roles have different authorities
8. Authority evaluation logs to audit

**Multi-Entity User Tests:**
1. Professional can access 10 different entities
2. Professional sees available entities list
3. Professional can switch between client entities
4. Authority differs by entity (full for A, limited for B)
5. Professional + Director (same user) works correctly

**Entity Safety Tests:**
1. Consequential action requires confirmation
2. Confirmation shows entity + role + action
3. Wrong-entity action cannot be submitted accidentally
4. Entity switch during signature flow requires confirmation
5. Payment shows correct entity context

**Session Restoration Tests:**
1. User logs out and back in
2. Last active entity is restored (or null)
3. Draft work is preserved per entity
4. Active transaction state is restored

**Implementation Rule:** These tests MUST pass before foundation phase is complete. They prove the architecture works.

---

## PART 12: TECHNICAL CONSTRAINTS

### 12.1 Technology Stack Recommendation

**From Phase 2 (Illustrative):**
- Backend: Java/Spring Boot OR .NET Core
- Database: PostgreSQL
- Event Bus: RabbitMQ or Kafka
- Search: Elasticsearch
- Cache: Redis
- Frontend: React
- Document Storage: S3-compatible

**Repository Assessment Recommendation (Foundation Phase):**
- Backend: Node.js + TypeScript + Express (rapid proof-of-concept)
- Frontend: React + TypeScript + Vite
- Database: PostgreSQL (Docker for dev)
- ORM: Prisma
- State Management: React Context API (initially)
- Styling: Tailwind CSS
- Testing: Jest + React Testing Library

**Rationale:** Rapid development for foundation phase, can refactor to Java/ASP.NET in production if needed.

**Implementation Rule:** Architecture is more important than technology. Domain model must be preserved regardless of stack.

---

### 12.2 Architecture Style: Domain-Oriented Modular Monolith

**NOT microservices initially.**

**Structure:**
```
MCA Platform (Monolith with Domain Modules)
├─ Identity & Access Module
├─ Entity & Registry Module
├─ Regulatory Compliance Module
├─ Service & Transaction Module
├─ Regulatory Oversight Module
├─ Payment & Fees Module
├─ Document Management Module
├─ Workflow & Orchestration Module
├─ Notification & Events Module
├─ Search & Discovery Module
├─ Audit & Provenance Module
└─ Content & Help Module

Shared Infrastructure:
├─ Database (schema-per-domain)
├─ Event Bus (domain events)
├─ API Gateway
├─ Auth/Authz
└─ Observability
```

**Key Patterns:**
- Domain events for inter-domain communication
- Repository pattern for data access
- Command/Query separation (CQRS-lite)
- Saga pattern for distributed transactions
- Anti-corruption layers between domains

---

## PART 13: FIRST VERTICAL SLICE (FOUNDATION PHASE)

### 13.1 Chosen Slice: Start/Manage Company

**Why This Slice:**
- Demonstrates complete architecture end-to-end
- Proves entity creation workflow
- Tests identity → role → authority → entity flow
- Requires: Intent, Eligibility, Requirements, Data, Documents, Validation, Payment, Signature, Submission, Status, Outcome
- Complex enough to prove the model
- Simple enough for foundation phase

**What to Implement:**
1. Service definition for company incorporation (mock legal rules)
2. Intent entry point ("Start a company")
3. Eligibility check (mock rules)
4. Requirements display (mock requirements)
5. Data entry form (basic fields only)
6. Document upload (mock validation)
7. Validation (mock rules engine)
8. Payment calculation (mock fee rules)
9. Payment flow (mock gateway)
10. Signature collection (mock DSC)
11. Submission (create SRN, record transaction)
12. Status tracking (show transaction state)
13. Outcome display (mock approval)

**What to Mark as MOCK:**
- Legal validation rules (mark "MOCK RULES")
- MCA APIs (mark "MOCK MCA API")
- DSC integration (mark "MOCK DSC")
- Payment gateway (mark "MOCK PAYMENT")
- ROC processing (mark "MOCK PROCESSING")
- Registry update (mark "MOCK REGISTRY")

**What to Implement Fully:**
- Entity context system
- Authorization evaluation
- Transaction state management
- Multi-entity support
- Entity switching
- Draft persistence
- Confirmation dialogs
- Audit logging

---

### 13.2 Success Criteria for Vertical Slice

The slice is complete when:

✅ User can log in (mock authentication)
✅ User can select active entity (or create first entity)
✅ User can initiate "Start a company" service
✅ User sees requirements and eligibility (mock)
✅ User can enter basic data
✅ User can upload documents (mock validation)
✅ User can see calculated fee (mock rules)
✅ User can make payment (mock gateway)
✅ User can see signature requirement (mock DSC)
✅ User can submit transaction (SRN generated)
✅ User can track transaction status
✅ User sees outcome (mock approval)
✅ All actions are audited
✅ Entity context is preserved throughout
✅ User with multiple entities can switch and see different context

---

## PART 14: IMPLEMENTATION SEQUENCE (36 DAYS)

**Days 1-3:** Project initialization + Backend foundation  
**Days 4-6:** Domain model (Prisma schema, domain types)  
**Days 7-9:** Entity context system (backend)  
**Days 10-12:** Authorization system (context-dependent)  
**Days 13-15:** Frontend foundation (React + entity context provider)  
**Days 16-18:** Design system primitives  
**Days 19-21:** Application shell  
**Days 22-30:** First vertical slice (Start Company)  
**Days 31-33:** Architectural tests  
**Days 34-35:** Documentation  
**Day 36:** Architectural self-review

---

## PART 15: DO NOT OVERBUILD (CRITICAL CONSTRAINTS)

### 15.1 What Foundation Phase SHOULD Deliver

✅ Production-grade application foundation  
✅ Canonical domain structure (12 domains, 25 entities)  
✅ Entity context system (working)  
✅ Authority boundary (context-dependent authorization)  
✅ Entity switching (safe)  
✅ Entity safety mechanisms (confirmation dialogs)  
✅ Design-system foundation (reusable components)  
✅ Application shell (authenticated layout)  
✅ One representative vertical slice (Start Company)  
✅ Automated architectural tests  
✅ Implementation documentation

---

### 15.2 What Foundation Phase SHOULD NOT Deliver

❌ Every MCA service (only ONE slice)  
❌ Every MCA form (only forms needed for slice)  
❌ Hundreds of screens  
❌ Complete regulatory rules engine (mock rules only)  
❌ Complete payment integration (mock gateway)  
❌ Complete DSC integration (mock DSC)  
❌ Complete MCA backend integration (mock APIs)  
❌ Production migration infrastructure  
❌ Production deployment configuration  
❌ 70+ services implementation  
❌ Complete compliance engine (basic obligation model only)  
❌ Production-grade rules engine  
❌ All 18 legal domains

**Implementation Rule:** STOP after one vertical slice. Do NOT proceed without explicit approval.

---

## PART 16: ARCHITECTURAL SELF-REVIEW CHECKLIST

Before declaring foundation phase complete, verify:

✅ **1. Identity ≠ Authority preserved?**
- Code separates identity from authority?
- Authorization evaluates context (Identity × Role × Entity × Action)?

✅ **2. Entity ≠ Account preserved?**
- Legal entity is not conflated with user account?
- Entity context is first-class?

✅ **3. Service ≠ Form preserved?**
- Services compose platform capabilities?
- Forms are interfaces, not products?

✅ **4. Transaction ≠ Case preserved?**
- Transaction lifecycle distinct from case lifecycle?

✅ **5. Registry ≠ Transaction preserved?**
- Public registry separate from transactional system?

✅ **6. Entity context is first-class?**
- Active entity is explicit and visible?
- Entity context persists correctly?
- Entity switching works safely?

✅ **7. Professional can operate across entities?**
- Multi-entity user can access multiple entities?
- Authority differs by entity?

✅ **8. Authority differs by entity?**
- User with authority for A has no automatic authority for B?

✅ **9. Wrong-entity actions prevented?**
- Confirmation required before consequential actions?
- Entity + Role + Action shown in confirmation?

✅ **10. Future services can reuse primitives?**
- Platform capabilities are reusable?
- Service-specific logic is separate?

✅ **11. No architectural debt?**
- No shortcuts that violate Phase 2 invariants?

✅ **12. No hard-coded legacy assumptions?**
- No "current MCA portal" behavior invented without evidence?

---

## PART 17: NEXT STEPS AFTER FOUNDATION

**After foundation phase is approved:**

**Second Vertical Slice Options:**
1. **Periodic Compliance** (DIR-3 KYC or AOC-4) — Tests recurring obligations, 100% STP, prefill
2. **Event-Based Change** (Change Director) — Tests relationship lifecycle, event-triggered obligations
3. **Charge Lifecycle** — Tests persistent object across multiple transactions
4. **Public Registry Search** — Tests read-only, public access, entitlement boundary

**Recommendation:** DIR-3 KYC — Proves continuous compliance model, STP workflow, obligation engine.

---

## CONCLUSION

**Source of Truth Status:** ✅ ESTABLISHED

**Phase 1 Understanding:** Current-state audit (form-centric legacy)  
**Phase 2 Understanding:** Future-state architecture (12 domains, 25 entities, LOCKED)  
**Phase 3 Understanding:** Product definition (entity-centric experience, intent-driven)

**Confidence Level:** **HIGH** — Architecture is comprehensive, stress-tested, evidence-based.

**Risk Level:** **MEDIUM** — Entity context complexity, no existing baseline, 145 unknowns to mock.

**Recommendation:** **PROCEED** with implementation following this synthesis as source of truth.

**Critical Success Factor:** Preserve architectural invariants. Do not collapse the fundamental separations. Prove the entity-centric model through one complete vertical slice.

---

**Document Status:** COMPLETE  
**Next Document:** `implementation-architecture.md`  
**Synthesized By:** Kiro Agent  
**Review Required:** Technical lead confirmation before implementation begins
