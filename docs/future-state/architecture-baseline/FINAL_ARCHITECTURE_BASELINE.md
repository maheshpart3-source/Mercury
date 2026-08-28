# FINAL ARCHITECTURE BASELINE

**MCA Digital Platform Transformation**  
**Phase 2 Architecture Baseline — Part 12**  
**Date:** 27 August 2026  
**Status:** LOCKED — Ready for Phase 3 Product Design

---

## Executive Summary

This document consolidates the complete Phase 2 architecture stress test results into a single authoritative baseline for Phase 3 product design.

**Stress Test Results:**
- ✅ Part 1: Canonical Vocabulary (23 concepts) — PASS
- ✅ Part 2: Service Architecture (10 patterns) — PASS
- ✅ Part 3: Regulatory Traceability (10 statutory examples) — PASS
- ✅ Part 11: Architecture Decision Register (28 decisions classified) — COMPLETE

**GO/NO-GO Recommendation:** **CONDITIONAL GO** — Proceed to Phase 3 with parallel validation

**Confidence Level:** HIGH for core architecture, MEDIUM for implementation details

---

## 1. Canonical Vocabulary (LOCKED)

### 1.1 Core Concepts (23)

**Identity & Authorization (9):**
1. PERSON — Natural person
2. PORTAL ACCOUNT — Digital access
3. IDENTITY — Verified actor in transaction
4. ROLE / CAPACITY — Acting capacity (Director, Partner, Professional, etc.)
5. ENTITY RELATIONSHIP — Person ↔ Entity link with effective dates
6. AUTHORITY — Context-dependent permission
7. DELEGATION — Granted authority with scope
8. SIGNATURE — DSC signing act
9. CREDENTIAL — DSC, Aadhaar, PAN

**Domain Core (7):**
10. ENTITY — Company, LLP, Person (as regulatory subject)
11. SERVICE — Orchestrated capability (intent → outcome)
12. TRANSACTION — User interaction lifecycle (Draft → Complete)
13. FILING — Legal submission record (immutable)
14. CASE — Regulatory/grievance matter (Notice → Order)
15. OBLIGATION — Regulatory duty (Applicable → Completed)
16. REGISTRY RECORD — Authoritative record (bi-temporal)

**Supporting (7):**
17. FORM — Legal submission interface/artifact
18. DOCUMENT REQUIREMENT — Evidence rule
19. DOCUMENT INSTANCE — Actual uploaded file
20. PAYMENT — Fee payment with state
21. WORKFLOW — Process orchestration
22. RULE — Versioned regulatory condition
23. OUTCOME — Result of service/case

**Cross-Cutting (3 clarifications):**
24. EVENT — Domain occurrence (decoupling mechanism)
25. NOTICE — Formal communication (within Case)
26. REGULATORY PROFILE — Entity compliance profile (for applicability)

### 1.2 Non-Negotiable Distinctions (LOCKED)

**These must NOT be collapsed:**
- Identity ≠ Authority
- Account ≠ Identity
- Role ≠ Authority
- Entity ≠ Account
- Form ≠ Service
- Service ≠ Transaction
- Transaction ≠ Filing
- Transaction ≠ Case
- Document Requirement ≠ Document Instance
- Registry Record ≠ Transaction
- Public Registry ≠ Transactional System

**Status:** Vocabulary LOCKED for Phase 3

---

## 2. Domain Architecture (LOCKED)

### 2.1 Twelve Bounded Domains

**Core Regulatory Domains (5):**

**1. Identity & Access**
- **Responsibility:** Who is acting, in what role, for which entity, with what authority
- **Key Entities:** Person, Portal Account, DIN, Credential, Role, Entity Relationship, Authority, Delegation
- **Critical Services:** Authentication, Authorization (context-dependent), DSC verification, Multi-entity switching, Delegation management

**2. Entity & Registry**
- **Responsibility:** Canonical, authoritative corporate entity records
- **Key Entities:** Company, LLP, Director-Company Relationship, Partner-LLP Relationship, Shareholder, Charge, ROC
- **Critical Services:** Entity master data, Entity search, Relationship management, Registry updates, Historical queries, Public access

**3. Regulatory Compliance**
- **Responsibility:** Continuous compliance tracking, obligation management
- **Key Entities:** Regulatory Profile, Obligation, Obligation Instance, Compliance Trigger Event, Exemption
- **Critical Services:** Obligation calculation, Due date tracking, Obligation status, Compliance dashboard, Next actions

**4. Service & Transaction**
- **Responsibility:** Service orchestration, transaction lifecycle
- **Key Entities:** Service Definition, Transaction, Transaction Data, Transaction Signature, Transaction Document, Transaction Payment, Transaction Routing
- **Critical Services:** Service intent resolution, Transaction creation, State management, SRN management, Transaction history

**5. Regulatory Oversight**
- **Responsibility:** Manual review, cases, scrutiny, adjudication, orders
- **Key Entities:** Review Case, Query/Deficiency, Order, Complaint, Adjudication Case, Scrutiny Case
- **Critical Services:** Case creation, Notice issuance, Response collection, Hearing management, Order issuance, Appeals

---

**Platform Capability Domains (7):**

**6. Payment & Fees**
- **Responsibility:** Fee calculation, payment processing
- **Key Entities:** Fee Rule, Payment, Payment Gateway Transaction
- **Critical Services:** Fee calculation (versioned rules), Payment initiation, Payment confirmation, Refund processing, Reconciliation

**7. Document Management**
- **Responsibility:** Document lifecycle, templates, certified copies
- **Key Entities:** Document, Document Template, Certified Copy
- **Critical Services:** Upload, Validation, Storage, Retrieval, Certified copy generation, Retention

**8. Workflow & Orchestration**
- **Responsibility:** State machines, routing (STP/manual), saga patterns
- **Key Entities:** Workflow Instance, Workflow Step, Routing Decision
- **Critical Services:** STP eligibility evaluation, Manual queue routing, Officer assignment, State transitions, Saga orchestration

**9. Notification & Events**
- **Responsibility:** Event-driven notifications, multi-channel delivery
- **Key Entities:** Domain Event, Notification, Notification Template
- **Critical Services:** Event publishing, Event subscription, Notification generation, Multi-channel delivery (email, SMS, in-app)

**10. Search & Discovery**
- **Responsibility:** Intent-based, entity-contextual search
- **Key Entities:** Search Index, Search Query, Search Result
- **Critical Services:** Entity search, Document search, Intent search, Service discovery, Faceted search

**11. Audit & Provenance**
- **Responsibility:** Comprehensive audit trail, regulatory reporting
- **Key Entities:** Audit Event, Audit Trail
- **Critical Services:** Action logging, Audit query, Compliance reporting, Provenance tracking

**12. Content & Help**
- **Responsibility:** Knowledge base, regulatory content, help system
- **Key Entities:** Help Article, FAQ, Regulatory Content
- **Critical Services:** Help search, Content management, User guidance

### 2.2 Domain Interaction Patterns (LOCKED)

**User-Initiated Service Flow:**
```
Identity & Access (authenticate, authorize)
→ Service & Transaction (initiate, create transaction)
→ Entity & Registry (fetch entity data, validate context)
→ Regulatory Compliance (check obligations, applicability)
→ Document Management (attach documents, validate)
→ Payment & Fees (calculate, collect payment)
→ Workflow & Orchestration (route: STP or manual)
→ [IF MANUAL] Regulatory Oversight (review, query, decide)
→ Entity & Registry (update on approval)
→ Regulatory Compliance (mark obligation complete, generate next)
→ Notification & Events (notify actor, publish events)
→ Audit & Provenance (log action)
```

**Regulatory-Initiated Case Flow:**
```
Regulatory Oversight (officer creates case)
→ Entity & Registry (fetch entity data)
→ Notification & Events (issue notice to entity)
→ [Entity responds via] Service & Transaction (response submission)
→ Regulatory Oversight (review, hearing, order)
→ Payment & Fees (penalty payment if ordered)
→ Entity & Registry (update registry if needed)
→ Notification & Events (notify parties)
→ Audit & Provenance (log case actions)
```

**Status:** Domain architecture LOCKED for Phase 3

---

## 3. Canonical Entity Model (LOCKED)

### 3.1 Core Entities (~25)

**Identity Domain:**
- Person (natural person identity)
- Portal Account (digital access)
- DIN (Director Identification Number)
- Credential (DSC, Aadhaar, PAN)
- Role (Director, Partner, Professional, Staff, Officer)
- Entity Relationship (Person ↔ Entity with effective dates)
- Authority (contextual permission record)
- Delegation (granted authority with scope and validity)

**Entity Domain:**
- Company (CIN-identified company)
- LLP (LLPIN-identified LLP)
- Director-Company Relationship (with appointment/resignation dates)
- Partner-LLP Relationship (including Designated Partner)
- Shareholder-Company Relationship (shareholding with changes)
- Charge (security interest with lifecycle: created → modified → satisfied)
- ROC (Registrar of Companies office, jurisdiction)
- Entity Change Event (director change, office change, capital change, etc.)

**Regulatory Compliance Domain:**
- Regulatory Profile (entity compliance attributes: type, capital, turnover, listing, jurisdiction)
- Obligation (regulatory duty with legal basis)
- Obligation Instance (specific due date, entity, status)
- Compliance Trigger Event (incorporation, FY end, event-based)
- Exemption (entity exempted from specific obligation)
- Compliance Timeline (historical compliance pattern)

**Transaction Domain:**
- Service Definition (service metadata, rules, requirements)
- Transaction (SRN-identified user interaction)
- Transaction Data (form data captured)
- Transaction Signature (DSC signatures collected)
- Transaction Document (documents attached)
- Transaction Payment (payment link)
- Transaction Routing (STP/manual routing decision)
- Transaction History (state changes, audit trail)

**Oversight Domain:**
- Review Queue (manual review items)
- Review Case (transaction under review)
- Review Action (officer action on review)
- Query/Deficiency (notice to entity)
- Scrutiny Case (compliance review)
- Investigation Case (potential violation)
- Adjudication Case (formal contravention proceedings)
- Order (legally binding decision)
- Complaint (user grievance)
- Enforcement Action (penalty execution, compliance enforcement)

**Platform Entities:**
- Document (uploaded/generated file with metadata)
- Payment (fee payment with gateway reference)
- Fee Rule (versioned fee calculation rule)
- Notification (email, SMS, in-app message)
- Audit Event (who, what, when, source, rule version)
- Regulatory Rule (versioned legal condition with source provenance)

### 3.2 Entity Principles (LOCKED)

1. **Canonical:** Single source of truth per entity
2. **Versioned:** Changes recorded, history preserved
3. **Bi-Temporal:** Transaction time (when recorded) + Valid time (when legally effective)
4. **Ask Once:** Reuse verified data, prefill where appropriate
5. **Immutable History:** Audit trail cannot be altered, only appended
6. **Access-Controlled:** Different visibility by role, entity context, and entitlement
7. **Provenance:** Every entity carries created-by, created-at, source, version

**Status:** Entity model LOCKED for Phase 3

---

## 4. Service Model (LOCKED)

### 4.1 Service Architecture Principles

1. **Intent-Driven:** Users start with "I want to..." not "Form INC-22"
2. **Composable:** Services = Platform Capabilities + Service-Specific Legal Logic
3. **Entity-Contextual:** Services operate on explicit entity
4. **Obligation-Linked:** Services satisfy regulatory obligations (where applicable)
5. **Outcome-Oriented:** Services produce registry outcomes, not just submissions

### 4.2 Service Composition Model

Every service composes:
- **Identity & Authorization:** Who is acting, with what authority
- **Entity Context:** Which entity, current status, relationships
- **Regulatory Rules:** Eligibility, applicability, validation, fee, deadline
- **Data Collection:** Prefill from entity, capture new data
- **Document Requirements:** Specify, validate, attach
- **Signature Orchestration:** Multi-party, sequential/parallel
- **Payment Processing:** Calculate fee, collect payment
- **Workflow Routing:** STP eligibility → Auto or Manual
- **Outcome Production:** Registry update, filing record, obligation completion
- **Next Actions:** Generate triggered obligations, notifications

### 4.3 Proven Service Patterns (10)

**Stress-tested patterns:**
1. **Entity Creation:** SPICe+ (multi-form composition, complex orchestration)
2. **Person Compliance:** DIR-3 KYC (100% STP, person-centric, annual recurrence)
3. **Periodic Entity Compliance:** Annual Return, Financial Statements (multi-party signing, deadline-driven)
4. **Event-Based Relationship Change:** Director/Partner change (relationship lifecycle)
5. **Persistent Object Lifecycle:** Charge (create → modify → satisfy across multiple transactions)
6. **Entity Termination:** Strike-off (complex preconditions, notice period, always manual)
7. **Public Read Services:** Master data search, public documents (read-only, entitlement-based)
8. **User-Initiated Case:** Complaint (case workflow, ticket ID, no payment/DSC)
9. **Regulatory Case:** Scrutiny, Adjudication (regulatory-initiated, formal proceedings, orders)
10. **Investor Services:** IEPF claims (specialized workflow, claim verification)

**Key Learning:** Not "one workflow fits all" but "composable capabilities with service orchestration"

**Status:** Service model LOCKED for Phase 3

---

## 5. Regulatory Rules Model (LOCKED IN PRINCIPLE)

### 5.1 Legal-to-Digital Traceability Chain

```
LEGAL PROVISION (Act, Rule, Section, Notification)
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

### 5.2 Rule Categories (LOCKED)

1. **Eligibility Rules:** Who can use a service
2. **Applicability Rules:** Does an obligation apply to this entity
3. **Field Validation Rules:** Is a field value structurally valid
4. **Cross-Field Validation Rules:** Do values make sense together
5. **Entity Validation Rules:** Is entity eligible for this action
6. **Document Rules:** Which documents are required/acceptable
7. **Signature Rules:** Who must sign and in what order
8. **Deadline Rules:** When must action occur (30 days, 60 days from AGM, etc.)
9. **Fee Rules:** What fee/additional fee applies (capital-based, fixed, escalating)
10. **Workflow Rules:** Which processing route (STP/manual, ROC/RD assignment)
11. **Authority Rules:** Which regulator/body has jurisdiction
12. **Outcome Rules:** What registry record/state is produced
13. **Access Rules:** Who may view/modify information

### 5.3 Rule Object Structure (LOCKED)

Every rule carries:
- **Source:** Act, Rule, Section, Notification, Circular (provenance)
- **Version:** Effective date, supersedes, superseded by
- **Applicability:** Entity type, conditions
- **Expression:** Machine-checkable logic (where objective)
- **Explanation:** User-facing "Why is this required?" text with legal reference

### 5.4 Versioning & Explainability (LOCKED)

- Rule changes are versioned, not in-place updates
- Historical transactions link to rule version applicable at time
- Users can see "Why?" with statutory reference
- Regulatory changes update rules (data), not code

**Status:** Rules framework LOCKED IN PRINCIPLE; exact rule extraction PROVISIONAL (Phase 3 parallel work)

---

## 6. Workflow & State Model (LOCKED)

### 6.1 Orthogonal State Machines

**NOT one 19-state model. Separate concerns:**

1. **Draft/Edit State:** Draft → Validating → Validated
2. **Signing State:** Unsigned → Partially Signed → Fully Signed → Failed
3. **Payment State:** Calculated → Pending → In Progress → Confirmed → Failed
4. **Submission State:** Ready → Submitted (SRN generated)
5. **Processing State:** Queued → STP Processing → Manual Review Queued → Under Review
6. **Review State:** Pending Decision → Query Raised → Response Received → Approved → Rejected
7. **Registry State:** Pending Update → Registry Updated → Update Failed
8. **Transaction State (Overall):** In Progress → Completed → Abandoned

### 6.2 Workflow Patterns (LOCKED)

**STP vs Manual Decision:**
```
Transaction Submitted
  ↓
Evaluate STP Eligibility Rules (service-specific)
  ↓
├─ STP ELIGIBLE
│    ↓
│  Automated Processing (rules engine)
│    ↓
│  ├─ Auto-Approve (majority of filings)
│  └─ Escalate to Human (exceptions, complex cases)
│
└─ MANUAL REQUIRED
     ↓
   Route to ROC/RD/Specialized (routing rules)
     ↓
   Assign to Officer (assignment rules)
     ↓
   Review → Query/Approve/Reject
```

**Transparency:** User always knows STP vs manual, routing reason, review status, estimated timeline

### 6.3 Case Workflow (Distinct from Transaction)

```
Case Created
  ↓
Notice Issued to Party
  ↓
Response Due (deadline)
  ↓
Response Received (or deadline passed)
  ↓
[Optional] Hearing Scheduled
  ↓
Order Drafted
  ↓
Order Issued (legally binding)
  ↓
[Optional] Penalty Payment
  ↓
[Optional] Appeal Filed (new case)
  ↓
Case Closed
```

**Status:** Workflow model LOCKED for Phase 3

---

## 7. Data Principles (LOCKED)

### 7.1 Canonical Data Principles

1. **Single Source of Truth:** One authoritative record per entity/person/DIN/transaction
2. **Prefill from Canonical:** Forms prefill from Entity & Registry domain
3. **Update Canonical on Approval:** Approved transactions update canonical records
4. **Historical Preservation:** Changes append, never overwrite (bi-temporal)
5. **Versioning:** Regulatory rules, forms, fees versioned with effective dates
6. **Access Control:** Entity relationship determines data visibility
7. **Provenance:** Every record carries who, when, why, source, rule version

### 7.2 Bi-Temporal Data Model (LOCKED IN PRINCIPLE)

**Two time dimensions:**
- **Transaction Time:** When was the record created/updated in the system
- **Valid Time:** When was/is the fact legally effective in reality

**Example:**
- Director appointed effective 01-Jan-2024 (Valid Time)
- Filed on 15-Jan-2024 (Transaction Time)
- Query: "Who were the directors on 31-Dec-2023?" → Uses Valid Time
- Query: "When did we learn about this director?" → Uses Transaction Time

**Benefits:**
- Historical queries ("as of date")
- Audit trail (when did we know)
- Regulatory reporting (effective dates)
- Immutable history

**Status:** LOCKED IN PRINCIPLE; technical implementation PROVISIONAL (POC required)

---

## 8. Authorization Model (LOCKED)

### 8.1 Context-Dependent Authorization

**Authorization Decision Formula:**
```
PERMIT / DENY = f(
  Identity (who),
  Role (in what capacity),
  Entity Relationship (for which entity),
  Authority (what authority granted/delegated),
  Action (what are they trying to do),
  Object (which resource),
  Service (which service/form),
  Legal Conditions (statutory rules),
  Delegation (granted authority),
  Time (effective dates, validity periods)
)
```

### 8.2 Authorization Flow

```
User Logs In
  ↓
AUTHENTICATE IDENTITY (Person + Portal Account)
  ↓
[Multi-Entity User] SELECT ACTIVE ENTITY
  ↓
RESOLVE ENTITY RELATIONSHIP (Person ↔ Entity)
  ↓
RESOLVE ACTIVE ROLE (Director, Professional, Staff, etc.)
  ↓
[Action Attempted] EVALUATE AUTHORITY
  ├─ Statutory Authority (Director can sign for company)
  ├─ Delegated Authority (Staff delegated by Professional)
  ├─ Service-Specific Rules (Who can file this service)
  ├─ Entity-Specific Configuration (Authorized signatories)
  └─ Time-Based Validity (Authority not expired)
  ↓
PERMIT / DENY with Reason
  ↓
[If PERMIT] EXECUTE ACTION
  ↓
LOG AUDIT EVENT (who, what, when, context, authority basis)
```

### 8.3 Multi-Entity Support

**Platform supports:**
- Entity context switching (explicit selection)
- Role activation per entity (acting as director for A, professional for B)
- Authority evaluation per context (different permissions per entity)
- Delegation management (professional delegates to staff with scope)

**Status:** Authorization model LOCKED for Phase 3

---

## 9. My Workspace / Entity Control Center (LOCKED AS DIRECTION)

### 9.1 Core Capabilities

**1. Entity Context Selector**
- Switch between entities (multi-entity users)
- View entity profile
- Select active role

**2. Obligation Timeline**
- Completed obligations ✓
- Upcoming (30/15/7 days)
- Due today
- Overdue (critical alerts)
- Requires my action vs waiting on others

**3. Transaction Manager**
- Drafts in progress
- Submitted (SRN + status)
- Under review (timeline)
- Queries requiring response
- Completed transactions

**4. Notices & Decisions**
- Queries/deficiencies received
- Orders issued
- Hearing notices
- Approvals/rejections

**5. Documents & Certificates**
- Entity documents (incorporation certificate)
- Filing receipts
- Public documents
- Certified copy requests

**6. Payments**
- Pending payments
- Payment history
- Challans

**7. Compliance Dashboard**
- Compliance status
- Historical pattern
- Upcoming deadlines (calendar)

**8. Quick Actions**
- Start most likely next obligation
- Respond to query
- View latest order
- Download certificate

### 9.2 User Experience Principles

- **Entity-first:** Always show active entity context
- **Role-explicit:** Always show active role
- **Action-oriented:** Focus on "what to do next"
- **Timeline-based:** Chronological view
- **Status-transparent:** Always know transaction state
- **Notification-driven:** Proactive alerts
- **Mobile-first:** Compact, essential actions

**Status:** Workspace concept LOCKED AS PRODUCT DIRECTION; exact features PROVISIONAL (Phase 3 UX design)

---

## 10. Technical Architecture Direction (PROVISIONAL / RECOMMENDED)

### 10.1 Domain-Oriented Modular Monolith

**Structure:**
- Monolith application with 12 domain modules
- Clear domain boundaries (can extract to services later if needed)
- Shared database, schema-per-domain
- Domain events for cross-domain communication (event bus)
- Horizontal scaling of application tier
- Read replicas for reporting/search

**Rationale:**
- Simpler operations than microservices
- Transaction integrity easier within monolith
- Government context (operational simplicity)
- Can evolve to microservices if scaling requires

### 10.2 Technology Principles (Not Prescriptions)

**Backend:** Enterprise-grade (Java/Spring Boot, .NET Core, or equivalent)
**Database:** Relational with bi-temporal support or application-layer (PostgreSQL, Oracle, SQL Server)
**Event Bus:** Reliable messaging (Kafka, RabbitMQ, Azure Service Bus, or equivalent)
**Search:** Full-text + faceted (Elasticsearch, Solr, Azure Cognitive Search, or equivalent)
**Cache:** Distributed cache (Redis, Memcached, or equivalent)
**Document Storage:** Object storage (S3-compatible, Azure Blob, or equivalent)
**Frontend:** Modern SPA framework (React, Angular, Vue, or equivalent)

**Government Constraints:**
- Security certifications required
- On-premises or govt cloud
- Vendor support in India
- Technology standards compliance

**Status:** Architecture direction PROVISIONAL (requires government constraints validation + technical POC)

---

## 11. Information Architecture Principles (LOCKED)

### 11.1 IA Derived from Domain Model + User Intent

**NOT:** Homepage → Services → About MCA → Acts & Rules → Data & Reports → Help → Contact  
(Current website navigation)

**INSTEAD (Illustrative):**

**For Authenticated Entity Users:**
- My Entities (switch, profile, compliance)
- My Obligations (what's due, start obligation)
- My Transactions (drafts, submitted, queries)
- Services (intent-driven, recent, browse)
- Documents & Certificates
- Notices & Orders
- Help & Support

**For Public Users:**
- Search Companies/LLPs
- Public Documents
- Data & Reports
- Learn (about incorporation, compliance)
- Help

**For MCA Officers:**
- Review Queues
- Cases
- Orders
- Search & Lookup
- Reports

### 11.2 IA Principles

1. **Intent-driven** not form-driven
2. **Entity-contextual** for authenticated users
3. **Obligation-forward** (show what's due)
4. **Role-appropriate** (different views per role)
5. **Mobile-first**
6. **Accessible** (WCAG 2.1 AA minimum)
7. **Search-prominent**

**Status:** IA principles LOCKED; exact navigation PROVISIONAL (Phase 3 IA + UX design)

---

## 12. Migration & Build Strategy (LOCKED)

### 12.1 Future Architecture Independence

**Principle:** Future architecture designed from first principles (domain model + statutory requirements), not constrained by:
- Current portal navigation
- Presumed current backend
- Current URL structure
- Current form organization

**Rationale:**
- Phase 1 could not verify current portal (HTTP 403)
- Copying legacy reproduces legacy problems
- Stress testing proves architecture without current implementation knowledge

**Migration Work:**
- Map current services to future services
- Map current data to canonical entities
- Map current users to future identity/authority model
- Design dual-system operation or cutover strategy

### 12.2 Parallel Validation During Phase 3

**Phase 3 proceeds with:**
- Future-state product design
- Service blueprints
- UX design
- Prototype architecture

**In parallel:**
- Current-state validation (145 items from Phase 1)
- Service-form catalogue completion
- Role-permission matrix validation
- Current data quality assessment
- Technical stack selection (government constraints)
- Migration strategy design

**Rationale:**
- Future architecture is independent (doesn't require current details for design)
- Validation focuses on migration, not future design
- Waiting for validation would delay transformation indefinitely

**Status:** Strategy LOCKED

---

## 13. Locked vs Provisional Summary

### 13.1 LOCKED (Ready for Phase 3)

**Vocabulary & Domain:**
- 23 canonical concepts with non-negotiable distinctions
- 12 bounded domains with clear responsibilities
- ~25 canonical entities with relationships
- Forms as interfaces over services
- Services compose platform capabilities
- Identity ≠ Authority (context-dependent authorization)

**Regulatory:**
- Obligations as first-class objects (principle)
- Regulation as versioned structured data (principle)
- Legal-to-digital traceability chain
- Continuous compliance engine (principle)

**Workflow & State:**
- Orthogonal state machines (not single 19-state)
- Transaction ≠ Filing ≠ Case distinctions
- STP vs manual routing patterns
- Case workflow (notice → order)

**Data:**
- Canonical data with prefill
- Bi-temporal model (principle)
- Registry ≠ Transaction separation
- Historical preservation

**Product Direction:**
- Intent-first service discovery
- Entity-centric workspace
- Obligation-forward UX
- Mobile-first, accessible

**Strategy:**
- Future architecture independent of legacy
- Parallel validation during Phase 3

### 13.2 PROVISIONAL (Design with Validation)

**Regulatory Details:**
- Exact Regulatory Profile attributes
- Complete obligation applicability rules (requires legal validation)
- Complete STP eligibility rules (requires MCA validation)

**Technical:**
- Modular monolith vs microservices (requires POC + government constraints)
- Shared database, schema-per-domain (requires database choice + migration assessment)
- Domain events (requires event bus selection + idempotency design)
- Bi-temporal data technical implementation (requires POC)
- Specific technology stack (requires government constraints + security certifications)

**Product Details:**
- Exact My Workspace features (requires UX research + design)
- Exact intent vocabulary (requires user research)
- Exact navigation structure (requires IA + UX design)

**Migration:**
- Service-form catalogue (requires MCA validation — P0)
- Role-permission matrix (requires MCA validation — P0)
- Rollout strategy (requires migration planning)

### 13.3 OPEN (Phase 3 Decisions)

- Exact UX patterns (navigation, forms, wizards, modals)
- Technology stack (Java vs .NET, PostgreSQL vs Oracle, etc.)
- Rollout strategy (big-bang vs phased)
- Notification preferences (email, SMS, in-app)
- Search ranking algorithms
- Caching strategies
- Monitoring/observability implementation

---

## 14. Risk Register

### 14.1 High Risks (Require Mitigation)

**RISK-01: Incorrect Obligation Calculation**
- **Impact:** HIGH — Users non-compliant, penalties
- **Probability:** MEDIUM — Legal complexity
- **Mitigation:**
  - Legal validation of every obligation rule before deployment
  - Start with high-confidence obligations only (incorporation, annual return, DIR-3 KYC)
  - Manual obligation entry fallback for complex cases
  - Obligation review/appeal mechanism

**RISK-02: Incorrect Regulatory Rule Interpretation**
- **Impact:** HIGH — Non-compliant filings, legal issues
- **Probability:** MEDIUM — Interpretation complexity
- **Mitigation:**
  - Legal validation of every rule before implementation
  - Use official MCA instruction kits as primary source
  - Rule versioning with source provenance
  - Manual review override for edge cases

**RISK-03: STP Over-Confidence**
- **Impact:** MEDIUM — Auto-approval of non-compliant filings
- **Probability:** LOW to MEDIUM
- **Mitigation:**
  - Start conservative (manual review), graduate to STP with evidence
  - Validate STP eligibility rules with MCA
  - STP eligibility configurable per service
  - Officer override available

### 14.2 Medium Risks (Monitor)

**RISK-04: Performance (Bi-Temporal Queries)**
- **Impact:** MEDIUM — Slow user experience
- **Probability:** LOW to MEDIUM
- **Mitigation:** Technical POC, read models, query optimization, caching

**RISK-05: Registry Lag**
- **Impact:** MEDIUM — Public data not real-time
- **Probability:** CERTAIN (eventual consistency design)
- **Mitigation:** User messaging ("registry updates within 24 hours"), SLA monitoring

**RISK-06: Current Data Quality**
- **Impact:** MEDIUM — Migration issues, bad prefill
- **Probability:** UNKNOWN
- **Mitigation:** Data quality assessment during Phase 3, data cleanup before migration

**RISK-07: User Adoption (Intent-First)**
- **Impact:** MEDIUM — Users revert to form-number search
- **Probability:** LOW
- **Mitigation:** Support both intent and form-number search, user training

### 14.3 Low Risks (Accept)

**RISK-08: Technology Choice**
- **Impact:** LOW — Can swap technology within architecture
- **Probability:** LOW
- **Mitigation:** Architecture independent of technology

**RISK-09: Domain Boundary Adjustment**
- **Impact:** LOW — Refactor within architecture
- **Probability:** LOW (stress-tested)
- **Mitigation:** Clear interfaces between domains

---

## 15. Validation Requirements (P0 = Blocking)

### 15.1 P0 Validation (Required for Detailed Design)

**V-01: Complete Service & Form Catalogue**
- **Requirement:** Authoritative list of all services, all current forms, service-to-form mapping
- **Source:** MCA
- **Timeline:** Phase 3 parallel work
- **Impact:** Service decomposition, form inventory

**V-02: Role-Permission Matrix**
- **Requirement:** Complete RBAC matrix, multi-entity behavior, delegation mechanism
- **Source:** MCA + portal walkthrough
- **Timeline:** Phase 3 parallel work
- **Impact:** Authorization design, workspace features

**V-03: Current Technical Architecture & Data Quality**
- **Requirement:** Current database schema, data quality, migration approach
- **Source:** MCA IT + technical discovery
- **Timeline:** Before migration design
- **Impact:** Migration strategy, data cleanup

### 15.2 P1 Validation (Important, Not Blocking)

**V-04: Exact STP Eligibility Rules**
- **Requirement:** What makes a filing STP vs manual review
- **Source:** MCA + ROC operational rules
- **Timeline:** Phase 3 detailed design

**V-05: Exact Validation Rules**
- **Requirement:** Field-level, cross-field validation logic
- **Source:** MCA instruction kits + current portal validation
- **Timeline:** Phase 3 implementation

**V-06: Fee Calculation Formulas**
- **Requirement:** Exact fee formulas, additional fee escalation
- **Source:** Fee Rules + current implementation
- **Timeline:** Phase 3 detailed design

**V-07: Government Technology Constraints**
- **Requirement:** Approved technologies, security certifications, deployment constraints
- **Source:** Government IT standards + MCA IT
- **Timeline:** Before technology selection

---

## 16. Phase 3 Handoff

### 16.1 What Phase 3 Should Do

**Product Design:**
1. Define future user journeys (intent → obligation → service → transaction → outcome)
2. Design entity-centric workspace (wireframes, features)
3. Define intent-first service discovery (search, navigation)
4. Design service blueprints for tested patterns (incorporation, DIR-3 KYC, annual filing, charge, closure, public search, complaint, scrutiny)
5. Derive future IA from domain model + user research
6. Design notification templates and triggers
7. Design compliance dashboard and obligation views
8. Design multi-entity switching and role activation UX
9. Design authority transparency ("You are authorized to..." vs "You cannot...")

**Architecture Refinement:**
10. Refine service-form mapping (use Phase 1 catalogue + validation)
11. Extract detailed rules from instruction kits (validation, document, signature, fee)
12. Design obligation applicability rules (which entity types → which obligations)
13. Design STP eligibility rules (per service)
14. Design form rendering approach (schema-driven, template-driven, or hybrid)
15. Design workflow orchestration (state machines, sagas)

**Technical Planning:**
16. Validate government technology constraints
17. Conduct technical POC (modular monolith, bi-temporal queries, event bus, search)
18. Select technology stack (within constraints)
19. Design deployment architecture (on-prem, govt cloud, hybrid)
20. Design security architecture (encryption, access control, audit)
21. Design observability (monitoring, logging, alerting)

**Migration Planning:**
22. Assess current data quality
23. Design data migration approach (entity mapping, relationship mapping)
24. Design user migration approach (account migration, identity verification)
25. Design rollout strategy (phased vs big-bang)
26. Design dual-system operation (if needed)

**Validation (Parallel):**
27. Complete service-form catalogue with MCA
28. Validate role-permission matrix with MCA
29. Conduct user research (current pain points, future usability)
30. Validate regulatory rules with legal experts

### 16.2 What Phase 3 Should NOT Do

**DO NOT:**
1. Build production frontend
2. Build production backend
3. Create hundreds of screens
4. Reproduce current MCA website navigation
5. Assume current MCA internals not verified
6. Turn Phase 1 hypotheses into facts
7. Treat form catalogue as final architecture
8. Create bespoke architecture per service
9. Choose technology because it's modern (choose based on constraints + fit)
10. Hide uncertainty

**USE EVIDENCE TAXONOMY:**
- CURRENT VERIFIED
- CURRENT INFERRED
- FUTURE PROPOSED
- UNKNOWN
- VALIDATION REQUIRED

---

## 17. Success Criteria for Phase 3

Phase 3 is successful if it can demonstrate:

**Product Model:**
1. ✅ Future user journeys designed for 8-10 representative service patterns
2. ✅ Entity-centric workspace wireframes and features defined
3. ✅ Intent-first service discovery designed
4. ✅ Future IA designed from domain model (not legacy navigation)
5. ✅ Notification strategy designed
6. ✅ Compliance dashboard designed
7. ✅ Multi-entity UX designed
8. ✅ Authority transparency designed

**Architecture Refinement:**
9. ✅ Service-form mapping complete (validated with MCA)
10. ✅ Detailed rules extracted (from instruction kits)
11. ✅ Obligation applicability rules designed
12. ✅ STP eligibility rules designed (per service)
13. ✅ Form rendering approach designed
14. ✅ Workflow orchestration designed

**Technical:**
15. ✅ Technology stack selected (within government constraints)
16. ✅ Technical POC completed (key patterns validated)
17. ✅ Deployment architecture designed
18. ✅ Security architecture designed

**Migration:**
19. ✅ Data migration approach designed
20. ✅ Rollout strategy designed

**Validation:**
21. ✅ Service-form catalogue validated
22. ✅ Role-permission matrix validated
23. ✅ User research completed
24. ✅ Key regulatory rules validated

---

## 18. Conclusion

### 18.1 Stress Test Summary

**Completed:**
- ✅ Canonical Vocabulary (23 concepts) — PASS
- ✅ Service Architecture (10 patterns) — PASS
- ✅ Regulatory Traceability (10 statutory examples) — PASS
- ✅ Architecture Decision Register (28 decisions) — COMPLETE

**Result:**
- **15 LOCKED decisions** — Ready for Phase 3
- **8 PROVISIONAL decisions** — Design with validation
- **3 OPEN decisions** — Phase 3 choices
- **2 VALIDATION REQUIRED** — P0 parallel work

### 18.2 Architectural Strengths Confirmed

1. ✅ **Canonical vocabulary** coherent and necessary
2. ✅ **Domain architecture** survives 10 service patterns
3. ✅ **Services compose platform capabilities** (not 70 bespoke architectures)
4. ✅ **Regulatory traceability** proven (legal provision → digital outcome)
5. ✅ **Identity ≠ Authority** necessary for multi-entity, delegation
6. ✅ **Obligations first-class** enables continuous compliance
7. ✅ **Forms as interfaces** enables service orchestration
8. ✅ **Transaction ≠ Filing ≠ Case** necessary distinctions
9. ✅ **Orthogonal state machines** accommodate service diversity
10. ✅ **Registry ≠ Transaction** enables scaling and public access

### 18.3 Principal Risks

**HIGH:** Incorrect obligation calculation, incorrect regulatory rule interpretation, STP over-confidence  
**MITIGATION:** Legal validation before deployment, start conservative, manual override available

**MEDIUM:** Performance (bi-temporal), registry lag (eventual consistency), data quality  
**MITIGATION:** POC, user messaging, data cleanup

**LOW:** Technology choice, domain boundary adjustment  
**MITIGATION:** Architecture independent of technology

### 18.4 Final Status

**ARCHITECTURE BASELINE:** LOCKED

**PHASE 3 GO/NO-GO:** **CONDITIONAL GO**

**CONDITIONS:**
1. Service-form catalogue validation continues in parallel (P0)
2. Role-permission matrix validation continues in parallel (P0)
3. User research conducted during Phase 3 (validate intent-first, entity-centric)
4. Technical POC conducted (modular monolith, bi-temporal, events)
5. Government constraints validated (technology, security, deployment)
6. Regulatory rules validated with legal experts (high-risk rules)

**READY FOR PHASE 3:**
- ✅ Product architecture baseline
- ✅ Information architecture principles
- ✅ Service composition model
- ✅ Domain model and entity model
- ✅ Authorization model
- ✅ Workflow patterns
- ✅ Rules framework
- ✅ Workspace concept
- ✅ Migration strategy

**NOT BLOCKING PHASE 3:**
- Current MCA implementation unknowns (validation continues, doesn't block future design)
- Technology stack selection (Phase 3 technical planning)
- Exact UX patterns (Phase 3 UX design)
- Rollout strategy (Phase 3 migration planning)

---

**END OF FINAL ARCHITECTURE BASELINE**
