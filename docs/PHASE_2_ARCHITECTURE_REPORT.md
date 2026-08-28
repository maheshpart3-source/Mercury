# Phase 2: Future-State Architecture Decision Report

**Project:** MCA Digital Platform Transformation  
**Phase:** Phase 2 - Future-State Architecture  
**Date:** August 27, 2026  
**Status:** COMPLETE - Ready for Stakeholder Review

---

## Executive Summary

Phase 2 has designed the future MCA digital platform as a **regulatory service platform** organized around user intent, legal obligations, and entity context—fundamentally different from the current form-centric website.

**Key Transformation:** FROM 70+ independent form products TO intent-driven platform with composable capabilities.

**Deliverables:**
- 12 bounded domain architecture
- ~25 canonical entities
- 10 locked architectural decisions
- Intent-first service model
- Continuous compliance engine
- Entity-centric workspace redesign
- Technical architecture recommendation
- Migration and build strategy

---

## 1. What Phase 1 Got Right

### Verified Starting Points

✅ **Core Services Identified**
- SPICe+, FiLLiP, DIR-3 KYC, AOC-4, MGT-7, CHG-1, STK-2, IEPF-5 verified
- These form the foundation for Phase 2 service architecture

✅ **Entity Taxonomy**
- Person, Company, LLP, Director-Company relationship, Partner-LLP relationship correct
- Charge as first-class entity correct
- Foundation for Phase 2 entity model

✅ **User Type Classification**
- Registered User and 4 Business User subtypes (Director, Professional, Company/LLP User, Professional Staff) verified from ICSI training
- Matches statutory reality
- Foundation for Phase 2 identity/authority model

✅ **Transaction Statistics**
- 3.84 crore filings, 86.7% STP, 10.6% manual, 2.2% rejection: verified from government sources
- Critical for capacity planning and workflow design

✅ **Evidence Discipline**
- VERIFIED / INFERRED / ASSUMED / UNKNOWN taxonomy maintained throughout
- Did not invent MCA internal systems, APIs, or SOPs
- Correctly identified gaps requiring validation
- **This discipline preserved in Phase 2**

✅ **Problem Identification**
- Correctly identified multi-entity context, role-permission matrix, My Workspace structure, technical architecture as UNKNOWN
- These gaps drove Phase 2 design decisions

---

## 2. What Phase 1 Got Wrong or Overgeneralized

### Issues Corrected in Phase 2

❌ **Form-Centricity**
- **Problem:** Organized around 70+ forms as if each were independent products
- **Correction:** Forms are interface layer over service/data/rules model; services compose platform capabilities

❌ **Navigation-Centric IA**
- **Problem:** Preserved 2021 website navigation (Home, Services, About, Help) as if it were domain architecture
- **Correction:** IA derives from domain model + user intent + entity context, not website structure

❌ **Service Family Confusion**
- **Problem:** Mixed entity types (Company, LLP), platform capabilities (DSC, E-Filing, Payment), and user needs (Complaints, Investor) into single taxonomy
- **Correction:** Separated service domains (Entity Formation, Compliance, Change, etc.) from platform capabilities (Identity, Document, Payment, etc.)

❌ **State Machine Conflation**
- **Problem:** Single 19-state model conflated draft/signing/payment/processing/review/registry states
- **Correction:** Decomposed into orthogonal state machines (Draft State, Signing State, Payment State, Processing State, Review State, Registry State)

❌ **Workspace Structure Guessing**
- **Problem:** Inferred generic dashboard/drafts/filings structure without evidence
- **Correction:** Redesigned as obligation-centric entity control center with "what's next" intelligence

❌ **Missing Abstractions**
- **Problem:** Didn't identify Obligation, Rule, Authority, Delegation, Case, Event as first-class domain objects
- **Correction:** All modeled explicitly in Phase 2 with clear ownership and lifecycle

---

## 3. What Should Be Retained from Phase 1

### Foundational Elements

**RETAIN:**
1. Core service inventory (SPICe+, FiLLiP, DIR-3 KYC, AOC-4, MGT-7, CHG-1, STK-2, IEPF-5, etc.)
2. Entity types (Person, Company, LLP, Director-Company, Partner-LLP, Shareholder, Charge)
3. User taxonomy (Registered User, 4 Business User subtypes)
4. Transaction statistics (3.84cr filings, 86.7% STP, 10.6% manual, 2.2% rejection)
5. Evidence discipline (VERIFIED/INFERRED/ASSUMED/UNKNOWN)
6. Gap identification (45 P0, 62 P1, 38 P2 validation items)

**USE AS REFERENCE, NOT BLUEPRINT:**
- Form catalogue (legal artifacts, but reorganize architecturally)
- Service catalogue (inventory useful, but reorganize by domain and intent)
- URL inventory (current structure, but redesign IA from first principles)

---

## 4. What Should Be Discarded

### Phase 1 Elements NOT Carried Forward

**DISCARD:**
1. **8-section IA** (Home, Services, About, etc.) - Website navigation, not domain architecture
2. **14 service families** - Mixed taxonomy; replaced with 7 service domains + 12 platform capabilities
3. **Single 19-state transaction model** - Conflated concerns; replaced with orthogonal state machines
4. **Inferred My Workspace structure** - No evidence; replaced with entity control center design
5. **E-governance module assumptions** (e-Scrutiny, CMS status) - Unknown; removed assumptions
6. **All technical architecture inferences** - No evidence; replaced with domain-oriented modular monolith proposal
7. **Form-as-product model** - Replaced with forms-as-interfaces over services/data/rules

---

## 5. What Remains Unresolved (Requires MCA Validation)

### Critical Unknowns (P0 - Blocking Phase 3)

**Portal & Current Implementation:**
1. Current portal navigation and IA (unverified - access blocked)
2. My Workspace actual implementation
3. V2/V3/legacy system relationship and migration status
4. Current technical architecture, APIs, database schemas

**Services & Forms:**
5. Complete current service catalogue (100+ services unverified)
6. Complete current form catalogue (70+ forms unverified)
7. Service-to-form mappings
8. Form field schemas and validation rules

**Authorization & Workflow:**
9. Role-permission matrix (RBAC implementation)
10. Multi-entity context switching mechanism
11. STP eligibility rules (what makes a filing STP vs manual?)
12. ROC/RD assignment logic
13. Manual review workflow details
14. Query/resubmission mechanics (SRN versioning?)

**Integration:**
15. Payment gateway providers and integration patterns
16. DSC verification with CAs (technical protocol)
17. PAN/Aadhaar validation integration (if exists)

**Data & Migration:**
18. Entity master data quality and completeness
19. Filing history completeness and format
20. User account migration requirements

### Important Unknowns (P1 - Phase 3 Detailed Design)

21-82. [See Phase 1 validation register - 62 P1 items]

### Detailed Implementation (P2)

83-145. [See Phase 1 validation register - 38 P2 items]

---

## 6. Reconciled Phase 2 Document Findings

### Four Input Documents Synthesized

**Document 1: Regulatory Framework Pack**
- Established legal-to-digital traceability chain
- Defined 18 Companies Act legal domains + LLP domains
- Proposed machine-readable rules model
- **Contribution:** Regulatory Rules domain, legal basis for all services

**Document 2: Service → Form → Process Matrix**
- Tested hypothesis: "70+ forms ≠ 70+ products"
- Identified 13 reusable platform primitives
- Mapped services to capability clusters
- **Contribution:** Service composition model, platform capabilities architecture

**Document 3: User / Role / Authority Model**
- Established principle: "Authentication ≠ Authorization"
- Separated identity/role/authority/entity/delegation layers
- Defined 6 access questions
- **Contribution:** Identity & Access domain, authorization architecture

**Document 4: Architecture Principles**
- Defined 10 architectural guardrails
- Defined 10 cross-cutting invariants
- Defined 15 anti-patterns to avoid
- **Contribution:** Architectural constraints and quality attributes

### Key Reconciliation Outcomes

**Reinforcements (All 4 Documents Agreed):**
- Legal provision must drive digital implementation
- Forms are legal artifacts, not products
- Identity ≠ Authority (context-dependent authorization)
- Reusable platform capabilities + service-specific logic
- Continuous compliance, not episodic filing
- Persistent transaction state
- Explicit human intervention
- Public registry ≠ transactional platform separation

**Contradictions Resolved:**
- Obligation architecture (incomplete across all docs) → Designed in Regulatory Compliance domain
- My Workspace scope → Comprehensive entity control center (not just obligations)
- Case scope → Complaints + Adjudication + Scrutiny (not just adjudication)
- Transaction vs Filing terminology → Clarified: Filing = legal record, Transaction = user action with lifecycle

**Gaps Filled:**
- Search architecture (undefined in all docs) → Search & Discovery domain
- Notification architecture (mentioned but not designed) → Notification & Events domain
- Document architecture (mentioned but not designed) → Document Management domain
- Form architecture (conceptual only) → Form interface layer specification
- Fee/Payment architecture → Payment & Fees domain
- Signature/DSC architecture → Part of Identity & Access + Workflow
- Technical architecture → Domain-oriented modular monolith
- Security architecture → Layered security model

---

## 7. Proposed Future Domain Model

### 12 Bounded Domains

**CORE REGULATORY (5 domains):**

1. **Identity & Access**
   - Purpose: Who is acting, in what role, for which entity, with what authority
   - Key Entities: Person, Portal Account, DIN, Credential, Role, Entity Relationship, Authority, Delegation
   - Critical Principle: Identity ≠ Authority

2. **Entity & Registry**
   - Purpose: Canonical, authoritative corporate entity records
   - Key Entities: Company, LLP, Director-Company Relationship, Partner-LLP Relationship, Shareholder, Charge, ROC
   - Critical Principle: Single source of truth, immutable history, bi-temporal data

3. **Regulatory Compliance**
   - Purpose: Continuous compliance tracking, "what's next" intelligence
   - Key Entities: Regulatory Profile, Obligation, Obligation Instance, Compliance Trigger Event, Exemption
   - Critical Principle: Proactive obligation calculation, not passive filing acceptance

4. **Service & Transaction**
   - Purpose: Service orchestration, transaction lifecycle, state management
   - Key Entities: Service Definition, Transaction, Transaction Data, Transaction Signature, Transaction Document, Transaction Payment, Transaction Routing
   - Critical Principle: Intent-driven services, persistent transaction state

5. **Regulatory Oversight**
   - Purpose: Manual review, cases, scrutiny, adjudication, orders
   - Key Entities: Review Case, Query/Deficiency, Order, Complaint, Adjudication Case, Scrutiny Case
   - Critical Principle: Explicit human intervention, case-based workflow

**PLATFORM CAPABILITIES (7 domains):**

6. **Payment & Fees** - Fee calculation, payment processing, versioned fee rules
7. **Document Management** - Document lifecycle, templates, certified copies, retention
8. **Workflow & Orchestration** - State machines, routing (STP/manual), saga patterns
9. **Notification & Events** - Event-driven notifications, multi-channel delivery
10. **Search & Discovery** - Intent-based, entity-contextual, regulatory search
11. **Audit & Provenance** - Comprehensive audit trail, regulatory reporting
12. **Content & Help** - Knowledge base, regulatory content, help system

### Domain Interaction Patterns

**User-Initiated Service Flow:**
```
Identity & Access (authenticate, authorize)
→ Service & Transaction (initiate)
→ Entity & Registry (get entity data)
→ Regulatory Compliance (check obligation)
→ Document Management (attach documents)
→ Payment & Fees (calculate, collect)
→ Workflow & Orchestration (execute)
→ Regulatory Oversight (review if manual)
→ Entity & Registry (update on approval)
→ Regulatory Compliance (mark complete)
→ Notification & Events (notify outcome)
```

---

## 8. Proposed Identity/Role/Authority Model

### Key Architectural Separation

```
PERSON (natural person identity)
  ↓
PORTAL ACCOUNT (digital access)
  ↓
AUTHENTICATION (who are you?)
  ↓
ROLE/CAPACITY (what capacity are you acting in?)
  ↓
ENTITY RELATIONSHIP (for which entity?)
  ↓
AUTHORITY (what are you permitted to do?)
  ↓
DELEGATION (authority granted by others)
  ↓
TRANSACTION CONTEXT (specific action)
  ↓
AUTHORIZATION DECISION (permit/deny with reason)
```

### Critical Principle

**Authentication ≠ Authorization**

Successful login establishes identity only. Authorization requires evaluation of:
- Identity + Role + Entity Context + Authority + Delegation + Action + Object + Legal/Business Conditions

### Multi-Entity Support

One person can:
- Be director of Company A
- Be professional representative for Company B
- Be partner of LLP C
- Be staff working under professional for Companies D, E, F

Platform must support:
- **Entity context switching** (explicit selection)
- **Role activation** (acting as director vs professional vs staff)
- **Authority evaluation per context** (different permissions per entity)

---

## 9. Proposed Service Model

### Service Architecture Principles

1. **Intent-Driven:** Users start with "I want to..." not "Form INC-22"
2. **Composable:** Services = Platform Capabilities + Service-Specific Legal Logic
3. **Entity-Contextual:** Services operate on explicit entity
4. **Obligation-Linked:** Services satisfy regulatory obligations (where applicable)
5. **Outcome-Oriented:** Services produce registry outcomes, not just submissions

### Service Object Model

Every service has:
- Intent (what user wants)
- Eligibility (who can use)
- Legal Basis (Act, Rule, Section)
- Entity Applicability (which entity types)
- Requirements (data, documents, signatures)
- Rules (validation, eligibility, business rules)
- Fee (calculation rules)
- Workflow (STP/manual routing)
- Outcomes (registry update, obligation completion)
- Next Obligations (triggered obligations)

### Service Patterns (8 Clusters)

1. **Entity Creation** (SPICe+, FiLLiP) - Incorporation flow
2. **Person/Role Maintenance** (DIR series, LLP partner) - Identity and relationship
3. **Periodic Compliance** (AOC-4, MGT-7, LLP 8/11, DIR-3 KYC) - Recurring obligations
4. **Event-Based Change** (director, office, capital, charge, partner) - Triggered filings
5. **Registry Disclosure** (master data, public docs, certified copies) - Public access
6. **Regulatory Cases** (complaint, adjudication, scrutiny) - Case management
7. **Closure** (STK-2, LLP dissolution) - Entity lifecycle end
8. **Investor Services** (IEPF) - Specialized services

### Platform Capability Reuse

**Common across services:**
- Identity/Authority evaluation
- Entity data access
- Regulatory rules application
- Document attachment/validation
- Signature orchestration
- Fee calculation
- Payment processing
- Workflow routing
- Notification triggering
- Audit logging

**Service-specific:**
- Legal event orchestration
- Entity-specific requirements
- Service-specific validations
- Outcome-specific registry updates

---

## 10. Proposed Regulatory/Rules Model

### Legal-to-Digital Traceability Chain

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

### Rule Categories

1. **Eligibility Rules:** Who can use a service
2. **Applicability Rules:** Does an obligation apply to this entity
3. **Field Validation Rules:** Is a field value structurally valid
4. **Cross-Field Validation Rules:** Do values make sense together
5. **Entity Validation Rules:** Is entity eligible for this action
6. **Document Rules:** Which documents are required/acceptable
7. **Signature Rules:** Who must sign and in what order
8. **Deadline Rules:** When must action occur
9. **Fee Rules:** What fee/additional fee applies
10. **Workflow Rules:** Which processing route (STP/manual, ROC/RD)
11. **Authority Rules:** Which regulator/body acts
12. **Outcome Rules:** What registry record/state is produced
13. **Access Rules:** Who may view/modify information

### Versioning and Explainability

- Every rule links to legal source (Act, Rule, Notification, Circular)
- Every rule has effective dates and supersession
- Rule changes generate impact analysis (affected services, forms, validations)
- Users can see "Why is this required?" with legal reference

---

## 11. Proposed Data/Document Model

### Canonical Entities (~25)

**Identity & Access:**
Person, Portal Account, DIN, Credential, Role, Entity Relationship, Authority, Delegation

**Entity & Registry:**
Company, LLP, Director-Company Relationship, Partner-LLP Relationship, Shareholder-Company Relationship, Charge, ROC, Entity Change Event

**Regulatory Compliance:**
Regulatory Profile, Obligation, Obligation Instance, Compliance Trigger Event, Exemption, Compliance Timeline

**Service & Transaction:**
Service Definition, Transaction, Transaction Data, Transaction Signature, Transaction Document, Transaction Payment, Transaction Routing, Transaction History

**Regulatory Oversight:**
Review Queue, Review Case, Review Action, Query/Deficiency, Scrutiny Case, Investigation Case, Adjudication Case, Order, Complaint, Enforcement Action

**Platform:**
Document, Payment, Fee Rule, Notification, Audit Event, Regulatory Rule

### Data Principles

1. **Canonical:** Single source of truth per entity
2. **Versioned:** Changes recorded, history preserved
3. **Bi-Temporal:** Transaction time (when recorded) + valid time (when effective)
4. **Ask Once:** Reuse verified data, don't re-request
5. **Prefill:** Forms prefilled from canonical data
6. **Immutable History:** Audit trail cannot be altered
7. **Access-Controlled:** Different visibility by role and context

### Document Architecture

**Separate:**
- **Document Requirement** (what's needed)
- **Document Instance** (uploaded file)
- **Generated Document** (system-generated)
- **Signed Document** (DSC-signed)
- **Certified Document** (official copy with verification)
- **Registry Record Document** (incorporation certificate, etc.)

**Lifecycle:**
Required → Uploaded → Validated → Attached to Transaction → Signed (if required) → Stored → Archived → Purged (per retention policy)

---

## 12. Proposed Workflow/Case Model

### Separate State Machines

**NOT one 19-state model. Separate orthogonal concerns:**

1. **Draft/Edit State:** Draft → Validating → Validated
2. **Signing State:** Unsigned → Partially Signed → Fully Signed → Failed
3. **Payment State:** Calculated → Pending → In Progress → Confirmed → Failed
4. **Submission State:** Ready → Submitted (SRN generated)
5. **Processing State:** Queued → STP Processing → Manual Review Queued → Under Review
6. **Review State:** Pending Decision → Query Raised → Response Received → Approved → Rejected
7. **Registry State:** Pending Update → Registry Updated → Update Failed
8. **Transaction State (Overall):** In Progress → Completed → Abandoned

### Workflow Routing

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
│  ├─ Auto-Approve (86.7% of filings)
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

**Transparency:** User always knows STP vs manual, routing reason, review status, officer (if permissible), estimated timeline.

### Case Management

Different workflows for:
- **Transaction Review Case:** Filing sent for manual review
- **Scrutiny Case:** Compliance review of entity
- **Investigation Case:** Potential violation inquiry
- **Adjudication Case:** Formal contravention proceedings
- **Complaint Case:** User grievance

Each has distinct lifecycle, actors, SLAs, and outcomes.

---

## 13. Proposed Compliance Engine

### Continuous Compliance Model

**Entity-Centric Obligation Tracking:**

```
Entity Created/Changed
  ↓
Calculate Regulatory Profile
  (type, capital, turnover, jurisdiction, special flags)
  ↓
Apply Applicability Rules
  (which obligations apply to this profile?)
  ↓
Generate Obligation Instances
  (with due dates, recurrence, legal basis)
  ↓
Monitor Continuously
  ↓
├─ 30 days before due → Notify "Upcoming"
├─ 15 days before due → Notify "Due Soon"
├─ 7 days before due → Notify "Critical"
├─ Due date → Notify "Due Today"
├─ After due date → Notify "Overdue" + Flag
└─ Completed (via transaction) → Mark Complete + Generate Next Obligation
```

**Event-Triggered Obligations:**

```
Entity Event Detected (director change, capital increase, etc.)
  ↓
Identify Triggered Obligations (rules engine)
  ↓
Create Obligation Instances (with deadlines)
  ↓
Notify Entity
```

### My Workspace Intelligence

**Platform can answer:**
- "What does my entity need to do next?"
- "What obligations are due?"
- "What obligations are overdue?"
- "What's my compliance status?"
- "What happens if I don't comply?"
- "Which obligation does this filing satisfy?"

**NOT just:**
- "Here are all the forms. Figure out which applies to you."

---

## 14. Proposed My Workspace Architecture

### Entity Control Center (Not Generic Dashboard)

**Core Capabilities:**

1. **Entity Context Selector**
   - Switch between entities (for multi-entity users)
   - View entity profile
   - Select active role (director vs professional vs staff)

2. **Obligation Timeline**
   - What's completed ✓
   - What's upcoming (30/15/7 days)
   - What's due today
   - What's overdue (critical alerts)
   - What requires my action vs waiting on others

3. **Transaction Manager**
   - Drafts in progress
   - Submitted transactions (with SRN and status)
   - Transactions under review (with estimated timeline)
   - Queries requiring response (with response deadline)
   - Completed transactions

4. **Notices & Decisions**
   - Queries/deficiencies received
   - Orders issued
   - Hearing notices
   - Approvals/rejections

5. **Documents & Certificates**
   - Entity documents (incorporation certificate, etc.)
   - Filing receipts
   - Public documents
   - Certified copy requests

6. **Payments**
   - Pending payments
   - Payment history
   - Challans

7. **Compliance Dashboard**
   - Compliance score (if calculated)
   - Compliance status by category
   - Historical compliance pattern
   - Upcoming deadlines (calendar view)

8. **Quick Actions**
   - "Start [most likely next obligation]"
   - "Respond to query"
   - "View latest order"
   - "Download certificate"

### User Experience Principles

- **Entity-first:** Always show active entity context
- **Role-explicit:** Always show active role (director vs professional)
- **Action-oriented:** Focus on "what to do next" not "browse everything"
- **Timeline-based:** Chronological obligation and transaction view
- **Status-transparent:** Always know transaction state
- **Notification-driven:** Proactive alerts, not just passive display
- **Mobile-first:** Compact, touch-friendly, essential actions

---

## 15. Proposed Information Architecture

### Derived from Domain Model + User Intent

**NOT:** Home / About MCA / Acts & Rules / Services / Data & Reports / Help / Contact

**Proposed (Illustrative):**

**For Authenticated Entity Users:**
1. **My Entities** - Switch context, view profile, compliance status
2. **My Obligations** - What's due/upcoming/overdue, start obligation
3. **My Transactions** - Drafts, submitted, queries, completed
4. **Services** - Intent-driven ("I want to..."), recent/frequent, browse
5. **Documents & Certificates** - Entity documents, certified copies
6. **Notices & Orders** - Queries, orders, hearings
7. **Help & Support** - Knowledge base, file complaint, contact

**For Public Users:**
1. **Search Companies/LLPs** - By name, CIN, LLPIN, director
2. **Public Documents** - View filings, certified copies
3. **Data & Reports** - Statistics, registry reports
4. **Learn** - About incorporation, compliance requirements
5. **Help** - FAQs, contact

**For MCA Officers:**
1. **Review Queues** - My assigned cases, queue management
2. **Cases** - Review, scrutiny, adjudication cases
3. **Orders** - Draft/issue orders
4. **Search & Lookup** - Entity, transaction lookup
5. **Reports** - Analytics, compliance trends

### IA Principles

1. **Intent-driven** not form-driven
2. **Entity-contextual** for authenticated users
3. **Obligation-forward** (show what's due)
4. **Role-appropriate** (director sees different view than professional)
5. **Mobile-first**
6. **Accessible** (WCAG 2.1 AA minimum)
7. **Search-prominent**

---

## 16. Technical Architecture

### Recommendation: Domain-Oriented Modular Monolith

**Rationale:**
- Clear domain boundaries (12 domains) enable future service extraction if needed
- Avoids microservices complexity for initial build
- Simpler deployment and operations (government context)
- Transaction integrity easier within monolith
- Can scale horizontally

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

**Data Strategy:**
- Single database, schema-per-domain
- Transactional consistency within domain
- Eventual consistency across domains (via events)
- Separate read models for complex queries (My Workspace, Search)

**Scalability:**
- Horizontal scaling of application tier
- Read replicas for reporting
- Caching layers (Redis)
- CDN for static assets

**Technology (Illustrative):**
- Backend: Java/Spring Boot or .NET Core
- Database: PostgreSQL
- Event Bus: RabbitMQ or Kafka
- Search: Elasticsearch
- Cache: Redis
- Frontend: React
- Document Storage: S3-compatible

---

## 17. Security Architecture

### Layered Security

**Authentication:**
- Multi-factor (password + OTP/SMS)
- Session management (secure cookies)
- DSC integration with CAs

**Authorization:**
- Context-dependent (identity + role + entity + action)
- Policy-based access control (PBAC/ABAC)
- Entity relationship verification
- Delegation validation

**Data Security:**
- Encryption at rest (database)
- Encryption in transit (TLS 1.3)
- PII protection
- Sensitive data masking

**API Security:**
- OAuth 2.0 / OpenID Connect (if external APIs)
- Rate limiting
- Request validation
- CORS policies

**Audit:**
- Every consequential action logged
- Immutable audit trail
- Regulatory reporting

**Threat Protection:**
- SQL injection prevention
- XSS prevention
- CSRF protection
- DDoS mitigation
- Fraud detection

---

## 18. Major Architectural Decisions and Tradeoffs

### ADR 1: Forms Are Interfaces, Not Products

**Decision:** Forms become interface layer over service/data/rules model, not 70+ independent products.

**Alternatives:**
1. Build each form as independent product (rejected - duplication, inconsistency)
2. Generic form builder (rejected - cannot capture service-specific logic elegantly)
3. Forms as interfaces ✓ (chosen)

**Tradeoffs:**
- **Benefit:** Reusable capabilities, consistent UX, easier maintenance, regulatory changes impact fewer components
- **Cost:** More upfront architecture, requires platform capabilities built first
- **Risk:** If service decomposition is wrong, refactoring is costly

**Regulatory Implication:** Regulatory changes affect rules engine, not 70 form implementations.

**UX Implication:** Consistent validation messages, consistent document upload, consistent signature flow.

**Technical Implication:** Requires rules engine, service orchestration layer, canonical data model.

---

### ADR 2: Identity ≠ Authority (Context-Dependent Authorization)

**Decision:** Separate identity, role, entity relationship, authority, and delegation into distinct architectural layers.

**Alternatives:**
1. Login-based permission assignment (rejected - doesn't handle multi-entity, delegation)
2. Simple RBAC (rejected - insufficient for regulatory context)
3. Context-dependent authorization ✓ (chosen)

**Tradeoffs:**
- **Benefit:** Handles multi-entity users, professional representation, delegation, fine-grained control
- **Cost:** More complex authorization logic, more data to manage
- **Risk:** Performance if not cached properly

**Regulatory Implication:** Supports statutory authority requirements (who can sign what for which entity).

**UX Implication:** Explicit entity context selection, role activation, authority transparency.

**Technical Implication:** Authorization service, policy engine, caching strategy.

---

### ADR 3: Continuous Compliance (Not Episodic Filing)

**Decision:** Platform calculates obligations, tracks deadlines, provides "what's next" intelligence.

**Alternatives:**
1. Passive filing acceptance (rejected - users must discover obligations themselves)
2. Manual obligation tracking by users (rejected - error-prone, user burden)
3. Platform-driven continuous compliance ✓ (chosen)

**Tradeoffs:**
- **Benefit:** Better compliance, user-friendly, proactive notifications, reduced errors
- **Cost:** Obligation calculation engine, applicability rules, monitoring infrastructure
- **Risk:** Incorrect obligation calculation = regulatory non-compliance

**Regulatory Implication:** Entities less likely to miss deadlines, better overall compliance.

**UX Implication:** Users see "what to do next" not "figure out which form applies."

**Technical Implication:** Regulatory Compliance domain, obligation engine, notification system.

---

### ADR 4: Domain-Oriented Modular Monolith (Not Microservices)

**Decision:** Build modular monolith with 12 domain modules, not microservices.

**Alternatives:**
1. Microservices (rejected - premature complexity, operational burden)
2. Monolith without domain boundaries (rejected - unmaintainable)
3. Domain-oriented modular monolith ✓ (chosen)

**Tradeoffs:**
- **Benefit:** Simpler deployment, transaction integrity, easier development initially
- **Cost:** Must maintain domain boundaries discipline, harder to scale individual domains
- **Risk:** If domains are wrong, refactoring is difficult

**Regulatory Implication:** Transaction integrity easier (critical for filings).

**UX Implication:** Faster initial delivery, consistent performance.

**Technical Implication:** Single deployment unit, shared database with schema-per-domain, event bus for domain communication.

---

### ADR 5: Public Registry ≠ Transactional Platform

**Decision:** Maintain architectural boundary between public registry and transactional platform.

**Alternatives:**
1. Single unified system (rejected - conflates concerns, access control complexity)
2. Completely separate systems (rejected - data synchronization burden)
3. Separate domains with clear boundary ✓ (chosen)

**Tradeoffs:**
- **Benefit:** Clear access rules, different scaling needs, independent evolution
- **Cost:** Must manage relationship and consistency
- **Risk:** Eventual consistency between transaction approval and registry update

**Regulatory Implication:** Public registry integrity protected from transactional errors.

**UX Implication:** Public search is fast (read-optimized), transactional workflows are write-optimized.

**Technical Implication:** Entity & Registry domain separate from Service & Transaction domain, registry updates via domain events.

---

## 19. Largest Risks

### Risk 1: Portal Access Not Resolved (CRITICAL)

**Risk:** Cannot validate Phase 1/2 assumptions without access to current portal.

**Impact:** Architecture may be based on incorrect understanding of current state.

**Mitigation:**
- Resolve portal access with MCA IT before Phase 3
- Conduct stakeholder validation workshop
- Plan for architecture adjustments if assumptions are wrong

---

### Risk 2: STP Rules Unknown (CRITICAL)

**Risk:** 86.7% STP rate assumption not validated; actual STP eligibility rules unknown.

**Impact:** Incorrect routing, manual review overload or incorrect auto-approvals.

**Mitigation:**
- P0 validation with MCA: exact STP eligibility criteria per service
- Start with conservative STP (fewer auto-approvals), expand gradually
- Monitor STP rate in production, adjust rules

---

### Risk 3: Regulatory Rules Accuracy (HIGH)

**Risk:** Rules engine depends on accurate legal-to-digital translation. Errors = non-compliance.

**Impact:** Invalid filings accepted, valid filings rejected, legal liability.

**Mitigation:**
- Legal review of every validation rule
- Traceability: every rule links to legal source
- Regulatory change management process
- Testing: rule validation against known cases
- MCA approval before deployment

---

### Risk 4: Data Migration Quality (HIGH)

**Risk:** Entity master data migration errors = registry integrity issues.

**Impact:** Incorrect entity data, broken relationships, loss of history.

**Mitigation:**
- Comprehensive data quality analysis
- Reconciliation reports (old vs new)
- User acceptance testing with real data
- Phased migration with validation checkpoints
- Rollback plan

---

### Risk 5: User Adoption (HIGH)

**Risk:** Users accustomed to current portal resist new intent-driven IA.

**Impact:** Low adoption, support burden, rollback pressure.

**Mitigation:**
- Extensive user testing before launch
- Phased rollout (start with simple service)
- Comprehensive training and documentation
- Support hotline and chat
- Gradual transition (parallel operation period if needed)

---

### Risk 6: DSC Integration (MEDIUM)

**Risk:** DSC verification with CAs may have technical/operational issues.

**Impact:** Signing failures, transaction delays.

**Mitigation:**
- Early integration testing with CAs
- Fallback mechanisms
- Clear error messages for users
- Support for re-signing

---

### Risk 7: Performance at Scale (MEDIUM)

**Risk:** 3.84 crore filings/year (~10K/day avg, ~50K peak) may stress platform.

**Impact:** Slow response, timeouts, user frustration.

**Mitigation:**
- Performance testing early (load, stress, spike)
- Scalability built into architecture (horizontal scaling)
- Caching strategy
- Database optimization
- Monitoring and alerting

---

### Risk 8: Regulatory Change Frequency (MEDIUM)

**Risk:** Frequent rule changes require rapid platform updates.

**Impact:** Development bottleneck, deployment risk.

**Mitigation:**
- Rules engine separates rules from code
- Versioned rules with effective dates
- Automated testing of rule changes
- Fast deployment pipeline
- Regulatory change impact analysis tool

---

### Risk 9: Scope Creep (MEDIUM)

**Risk:** Stakeholders request features beyond Phase 2 architecture.

**Impact:** Timeline delays, budget overruns, architectural inconsistency.

**Mitigation:**
- Clear scope definition and approval
- Change control process
- Prioritization framework
- Phase 3 backlog management
- "No" to non-essential features initially

---

### Risk 10: Technology Stack Choice (LOW-MEDIUM)

**Risk:** Technology choices (Java vs .NET, PostgreSQL vs Oracle) affect development.

**Impact:** Developer availability, licensing costs, performance.

**Mitigation:**
- Technology selection workshop with stakeholders
- Proof-of-concept for critical technical decisions
- Consider government IT environment constraints
- Balance innovation with operational maturity

---

## 20. Evidence Still Required (MCA Validation)

### P0 - Blocking Phase 3 Start (45 Items)

**Must have before detailed design:**

1. Portal access resolved
2. Complete current service catalogue (100+ services validated)
3. Complete current form catalogue (70+ forms validated)
4. Service-to-form mappings verified
5. Current navigation and IA verified
6. My Workspace actual structure verified
7. Role-permission matrix (complete RBAC)
8. Multi-entity context mechanism
9. STP eligibility rules per service
10. Manual review routing logic (ROC/RD assignment)
11. Query/resubmission mechanics (SRN versioning, state)
12. Transaction state names and transitions (actual, not inferred)
13. Payment gateway providers and integration patterns
14. DSC verification protocol with CAs
15. Current technical architecture (to understand migration)
... [30 more P0 items - see Phase 1 validation register]

### P1 - Important for Detailed Design (62 Items)

**Need during Phase 3 detailed design:**
- My Workspace detailed features
- Search functionality requirements
- Notification templates and triggers
- Document management details
- Fee calculation formulas (exact)
- Public vs authenticated access boundaries
... [see Phase 1 validation register]

### P2 - Detailed Implementation (38 Items)

**Need during Phase 3 implementation:**
- Performance requirements (response times, concurrent users)
- Security certifications required
- Audit logging requirements (retention, format)
- Infrastructure constraints
... [see Phase 1 validation register]

---

## 21. What Should Be Built First (Phase 3 Priority)

### Phase 3A: Foundation (Months 1-3)

**Infrastructure Setup:**
- Development/staging/production environments
- CI/CD pipeline
- Database setup
- Auth/authz framework
- Logging/monitoring

**Core Domains (MVP):**
1. **Identity & Access** (authentication, authorization framework, person, DIN, entity relationship)
2. **Entity & Registry** (company master data, director relationship, read operations)
3. **Search & Discovery** (public company search, master data display - read-only)

**Deliverable:** Public can search for companies by name/CIN and view master data (low risk, public value).

---

### Phase 3B: First Transactional Service (Months 4-6)

**Target Service: DIR-3 KYC (Director Annual KYC)**

**Why DIR-3 KYC:**
- Simple (single form, prefill, minimal documents)
- High volume (validates scale)
- 100% STP (validates automated processing)
- Low regulatory risk (annual update)
- Tests core platform capabilities

**Build:**
4. **Regulatory Compliance** (obligation calculation, DIR-3 KYC obligation)
5. **Service & Transaction** (service orchestration, transaction lifecycle, validation)
6. **Document Management** (upload, validate, store)
7. **Workflow & Orchestration** (STP processing, auto-approval, registry update)
8. **Notification & Events** (email/SMS, obligation due, transaction status)
9. **My Workspace** (basic - view obligations, view transactions, status tracking)

**Deliverable:** Directors can complete DIR-3 KYC online with auto-approval.

---

### Phase 3C: Complex Service (Months 7-12)

**Target Service: Company Incorporation (SPICe+)**

**Why SPICe+:**
- High value (critical service)
- Complex (multi-form, multi-signer, payment, STP + manual review)
- Tests full platform capabilities

**Build:**
10. **Payment & Fees** (fee calculation, payment gateway, challan)
11. **Signature/DSC** (multi-signer orchestration, signing order, DSC verification with CAs)
12. **Regulatory Oversight** (review queue, review case, query/deficiency, approval/rejection)
13. **Entity Creation** (name reservation, SPICe+, entity creation on approval)
14. **Regulatory Rules Engine** (Companies Act rules, validation, STP eligibility, fee rules)

**Deliverable:** Users can incorporate companies online (name → SPICe+ → payment → review → CIN).

---

### Phase 3D: Service Expansion (Months 13-18)

**Expand Services:**
- Annual compliance (AOC-4, MGT-7)
- Director appointment/resignation
- Registered office change
- Capital changes
- Charge registration (CHG-1)
- LLP services (FiLLiP, Forms 8/11, partner changes)
- Company closure (STK-2)

**Expand Capabilities:**
- Advanced My Workspace (compliance intelligence, multi-entity support)
- Public documents and certified copies
- Complaints and grievances
- Search expansion (director search, document search, advanced filters)
- Mobile application (if in scope)

**Operational Maturity:**
- Performance optimization (target: 10K filings/day avg, 50K peak)
- Security hardening
- Disaster recovery and business continuity
- User training materials
- Help content and knowledge base
- Analytics and reporting

---

## 22. What Should Explicitly NOT Be Built Yet

### Do NOT Build in Phase 3

❌ **All 70 Forms Simultaneously**
- Build incrementally: DIR-3 KYC → SPICe+ → AOC-4/MGT-7 → others
- Validate platform with each service before expanding

❌ **Advanced Analytics/Dashboards**
- Focus on transactional capabilities first
- Analytics come after transaction volume accumulates

❌ **Mobile App (Initially)**
- Responsive web first
- Mobile app after web platform is stable and adopted

❌ **AI/ML Features**
- Not in initial scope
- Consider after platform is operational (e.g., STP eligibility prediction, fraud detection)

❌ **External API for Third Parties**
- Internal platform first
- External APIs after internal adoption and stability

❌ **Officer Mobile App**
- Officer web interface first
- Mobile for officers after web is mature

❌ **Advanced Reporting/BI**
- Basic compliance reports first
- Advanced BI after operational data accumulates

❌ **Chatbot/Virtual Assistant**
- Human support first
- Chatbot after common issues are understood

❌ **Blockchain/DLT for Registry**
- Not necessary for MVP
- Evaluate after platform is operational if regulatory requirement emerges

---

## Conclusion

Phase 2 has established a comprehensive future-state architecture for the MCA digital platform, designed from first principles around user intent, legal obligations, and entity context.

**Key Transformation:** From form-centric website to regulatory service platform.

**Next Step:** MCA stakeholder validation workshop to review and approve architecture before Phase 3 development begins.

**Critical Path:**
1. Resolve portal access (unblock validation)
2. Validate Phase 2 architecture with MCA
3. Resolve P0 unknowns (45 items)
4. Phase 3 kickoff

**Definition of Success:**
- MCA approves Phase 2 architecture
- Phase 3 team understands domain model and architectural decisions
- Clear build roadmap (Foundation → DIR-3 KYC → SPICe+ → Expand)
- Validation requirements documented and prioritized

---

**END OF PHASE 2 ARCHITECTURE DECISION REPORT**

**Prepared by:** Kiro AI  
**Date:** August 27, 2026  
**Status:** COMPLETE - Ready for Stakeholder Review  
**Next:** Phase 3 Planning and Development
