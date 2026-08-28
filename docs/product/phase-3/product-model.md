# FUTURE MCA PRODUCT MODEL

**MCA Digital Platform Transformation**  
**Phase 3 Product Definition — Part 2**  
**Date:** 28 August 2026  
**Status:** DRAFT — Product taxonomy and capability model

---

## Executive Summary

This document defines WHAT THE FUTURE MCA PLATFORM IS as a product, not how every screen will be built.

**The future MCA is:**
> **A Digital Regulatory Operating Platform**  
> enabling entities, professionals, investors, and the public to understand regulatory obligations, complete compliant transactions, track processing, access authoritative records, resolve issues, and maintain continuous compliance — with transparency, explainability, and provenance at every step.

**The future MCA is NOT:**
- A collection of government webpages
- 70+ independent form applications
- A passive document repository
- A forms catalog with no intelligence

**Product Philosophy:**
```
USER PROBLEMS → INTENTS → CAPABILITIES → SERVICES → WORKFLOWS → OUTCOMES
```

Not:
```
PAGES → MENUS → FORM NUMBERS → SUBMIT
```

---

## 1. Product Vision

### 1.1 North Star

**For Entities & Professionals:**
"I know what I need to do, why I need to do it, how to do it correctly, what's happening with my submission, and what's due next."

**For MCA Officers:**
"I have the context, evidence, and tools to make informed decisions efficiently, with full audit trail."

**For Public/Investors:**
"I can find reliable, authoritative information about entities without navigating bureaucratic complexity."

### 1.2 Product Principles (Inherited from Phase 2)

1. **Intent First:** Users start with "I want to..." not "Form INC-22"
2. **Entity Context Everywhere:** Active entity and acting capacity are always explicit
3. **Identity ≠ Authority:** System verifies authority contextually, never assumes
4. **Ask Once, Reuse:** Verified information is prefilled, not re-requested
5. **Explainability:** "Why is this required?" → Legal basis shown
6. **Transparency:** "What's happening?" → Clear status, not jargon
7. **Proactive Compliance:** "What's due next?" → System calculates obligations
8. **Composition Over Duplication:** Shared capabilities + service-specific logic
9. **Public ≠ Private:** Public registry distinct from authenticated workspace
10. **Accessible by Default:** Core journeys work for all users

---

## 2. Product Taxonomy

### 2.1 User Problems → Product Capabilities

| **User Problem** | **Current Reality** | **Future Product Capability** |
|---|---|---|
| "I need to start a company" | Navigate forms, unclear requirements | **Intent-Based Service Discovery** |
| "I don't know what's required" | Read Acts/Rules, guess | **Guided Requirements with Legal Basis** |
| "I have multiple companies" | Switch accounts? Unclear | **Multi-Entity Workspace** |
| "What's due for my entity?" | Manual tracking, miss deadlines | **Continuous Compliance Tracking** |
| "Where's my submission?" | Generic status, no detail | **Transparent Transaction Status** |
| "I need to authorize staff" | Unclear delegation mechanism | **Explicit Delegation & Authority** |
| "I need public entity info" | Navigate confusing portal | **Intent-Based Public Search** |
| "I need to respond to notice" | Email/paper notice, unclear process | **Integrated Case Management** |
| "What if I made an error?" | Resubmission unclear | **Error Recovery with Guidance** |
| "I need certified copies" | Separate complex process | **Integrated Document Access** |

---

## 3. Product Architecture Layers

### 3.1 Five Product Layers

```
┌─────────────────────────────────────────────────────┐
│ 5. EXPERIENCE LAYER                                  │
│    User Journeys, UI/UX, Navigation, Interaction    │
├─────────────────────────────────────────────────────┤
│ 4. SERVICE LAYER                                     │
│    Incorporation, Compliance, Changes, Cases, Search │
├─────────────────────────────────────────────────────┤
│ 3. CAPABILITY LAYER (Platform Primitives)           │
│    Identity, Entity, Document, Payment, Signature... │
├─────────────────────────────────────────────────────┤
│ 2. DOMAIN LAYER                                      │
│    12 Bounded Domains (from Phase 2)                 │
├─────────────────────────────────────────────────────┤
│ 1. DATA LAYER                                        │
│    Entities, Transactions, Rules, Registry Records   │
└─────────────────────────────────────────────────────┘
```

**Phase 3 focuses on Layers 4 & 5:** Services and Experience

---

## 4. Product Capability Model

### 4.1 Core Platform Capabilities (Reusable Primitives)

| **Capability** | **What It Does** | **Used By** |
|---|---|---|
| **Identity & Authority** | Authenticate user, verify identity, establish role, check authority, manage delegation | All authenticated services |
| **Entity Context** | Select entity, show entity profile, switch entities, display relationships | All entity-centric services |
| **Service Discovery** | Resolve intent → service, search by form number, browse by category | All entry points |
| **Requirements** | Show what's required, explain why (legal basis), check eligibility | All transactional services |
| **Data Collection** | Prefill verified data, capture new data, validate fields, show explanations | All forms/services |
| **Document Handling** | Specify requirements, upload, validate, generate, sign, store, retrieve | 90% of services |
| **Signature Orchestration** | Collect DSC signatures (single/multi-party), verify signatures, track signing state | All statutory filings |
| **Payment Processing** | Calculate fee, initiate payment, confirm payment, handle failure/refund | All paid services |
| **Workflow Routing** | Determine STP eligibility, route to manual review, assign officers, track state | All transactional services |
| **Status & Notifications** | Show transparent status, send notifications (email/SMS/in-app), explain next steps | All services |
| **Obligation Tracking** | Calculate applicable obligations, show due dates, mark completed, generate next | Compliance workspace |
| **Case Management** | Create case, issue notice, collect response, track hearing, issue order | Complaints, scrutiny, adjudication |
| **Search & Discovery** | Entity search, document search, intent search, faceted search | Public + authenticated |
| **Registry Access** | Query registry, show entity profile, list filings, access public documents | Public services |
| **Help & Guidance** | Contextual help, legal references, FAQs, examples | All services |
| **Audit & Provenance** | Log actions, show history, explain decisions, reference rule versions | All consequential actions |

**Key Insight:** These capabilities are **composed** differently by each service, not duplicated.

---

### 4.2 Service-Specific Logic (Not Reusable)

| **Service Type** | **Service-Specific Logic** |
|---|---|
| **Company Incorporation (SPICe+)** | Multi-form orchestration (11 forms), name reservation, constitution, promoter coordination |
| **Director KYC (DIR-3 KYC)** | Annual recurrence, STP eligibility rules, DIN-specific validation |
| **Annual Compliance** | Financial year period, multi-document coordination (AOC-4 + MGT-7), deadline calculation |
| **Charge Lifecycle** | Persistent object across multiple transactions (create → modify → satisfy) |
| **Company Closure (STK-2)** | Complex preconditions (no pending obligations, charges satisfied), always manual review |
| **Public Document Access** | Entitlement rules, certified copy generation, provenance marking |
| **Complaint** | Ticket creation, category routing, response SLA, escalation |
| **Adjudication** | Formal proceedings, notice periods, hearing scheduling, order issuance, appeal |

**Key Insight:** Service-specific logic is **isolated**, not scattered across platform.

---

## 5. Product Service Taxonomy

### 5.1 Service Categories (User-Facing)

**Primary Service Categories:**

**1. START & CREATE**
- Start a company (SPICe+)
- Start an LLP (FiLLiP)
- Reserve a name
- Obtain DIN (Director Identification)

**2. MANAGE & CHANGE**
- Change directors/partners
- Change registered office
- Change capital structure
- Register/modify charges
- Update authorized signatories

**3. COMPLY & FILE**
- File annual return (MGT-7)
- File financial statements (AOC-4)
- Complete director KYC (DIR-3 KYC)
- File LLP disclosures (Forms 8, 11)
- File beneficial ownership (SBO)

**4. CLOSE & TERMINATE**
- Strike-off company (STK-2)
- Close LLP
- Voluntary liquidation
- Fast-track exit

**5. SEARCH & ACCESS**
- Search entities (companies, LLPs)
- View entity profile
- Access public documents
- Obtain certified copies
- Download filings

**6. RESPOND & RESOLVE**
- Respond to compliance notice
- File complaint/grievance
- Respond to query/deficiency
- Request clarification
- Track case status

**7. CLAIM & RECOVER**
- Claim IEPF amounts (IEPF-5)
- Recover securities
- Request refund

**8. REPORT & RESEARCH**
- Generate compliance reports
- Access statistical data
- Research industry/sector data
- Export entity data

---

### 5.2 Service Composition Examples

**Example 1: Company Incorporation (SPICe+)**

```
Platform Capabilities Used:
✓ Identity & Authority (promoters, proposed directors)
✓ Entity Context (proposed entity creation)
✓ Service Discovery (intent: "start a company")
✓ Requirements (legal basis: Companies Act §7, §12)
✓ Data Collection (11 forms worth of data)
✓ Document Handling (constitution, declarations, proofs)
✓ Signature Orchestration (promoters, directors)
✓ Payment Processing (incorporation fee)
✓ Workflow Routing (STP eligibility, ROC assignment)
✓ Status & Notifications (submission → validation → CIN issued)
✓ Obligation Tracking (post-incorporation obligations generated)
✓ Audit & Provenance (full incorporation trail)

Service-Specific Logic:
• Name availability validation
• Multi-form orchestration (SPICe+ Parts A/B, INC-9, etc.)
• Promoter coordination
• Director consent collection
• Constitution validation
• Jurisdiction determination
```

**Example 2: Director Annual KYC (DIR-3 KYC)**

```
Platform Capabilities Used:
✓ Identity & Authority (DIN holder)
✓ Entity Context (not entity-specific; person-centric)
✓ Service Discovery (obligation-triggered)
✓ Requirements (legal basis: Rule 12A)
✓ Data Collection (prefill from last KYC, update changes)
✓ Document Handling (KYC evidence)
✓ Signature Orchestration (DIN holder DSC)
✓ Payment Processing (conditional fee)
✓ Workflow Routing (100% STP eligible if data complete)
✓ Status & Notifications (submission → approval → next annual)
✓ Obligation Tracking (annual recurrence)
✓ Audit & Provenance (KYC history)

Service-Specific Logic:
• Annual recurrence calculation
• STP eligibility rules (data completeness, no red flags)
• DIN-specific validation
• KYC status determination
```

**Example 3: Company Closure (STK-2)**

```
Platform Capabilities Used:
✓ Identity & Authority (authorized signatory)
✓ Entity Context (company being closed)
✓ Service Discovery (intent: "close company")
✓ Requirements (legal basis: Companies Act §248)
✓ Data Collection (closure declarations)
✓ Document Handling (closure evidence)
✓ Signature Orchestration (director signatures)
✓ Payment Processing (closure fee)
✓ Workflow Routing (always manual review, never STP)
✓ Case Management (notice period, objections)
✓ Status & Notifications (application → notice → decision)
✓ Registry Access (entity moves to dissolved state)
✓ Audit & Provenance (full closure trail)

Service-Specific Logic:
• Precondition validation (no pending obligations, charges satisfied, no defaults)
• Eligibility determination (dormant/inactive criteria)
• Notice period calculation
• Objection handling
• Irrevocable state transition
```

---

## 6. Service vs Form Relationship

### 6.1 Architectural Principle

**ONE SERVICE MAY COMPOSE MULTIPLE FORMS**

Example: SPICe+ Service composes:
- SPICe+ Part A (Name Reservation)
- SPICe+ Part B (Incorporation)
- INC-9 (Declaration)
- INC-10 (Consent)
- INC-11 (Registered Office)
- INC-12 (Director Details)
- INC-13 (Promoter Details)
- INC-14 (Subscriber Details)
- INC-15 (First Directors)
- INC-33 (E-MOA)
- INC-34 (E-AOA)

**User Experience:** ONE incorporation journey, not 11 separate form submissions.

**Form as Interface:** Each form is a **step/section** in the incorporation service, sharing:
- Same entity context
- Same transaction (SRN)
- Same signature collection
- Same payment
- Same submission workflow
- Same status tracking

---

### 6.2 Form Reuse Patterns

**PATTERN 1: Single Service, Single Form**
- Example: DIR-3 KYC → DIR-3 KYC Service
- User completes one form

**PATTERN 2: Single Service, Multiple Forms (Orchestrated)**
- Example: SPICe+ → 11 forms
- User experiences: "Start Company" service
- Forms collected as steps/sections

**PATTERN 3: Multiple Services, Shared Form**
- Example: Director changes (appointment, resignation, change) → DIR-series forms
- Different intents resolve to appropriate DIR form

**PATTERN 4: Periodic Service, Recurring Form**
- Example: Annual Return → MGT-7 every year
- Service tracks period, generates annual obligation

**PATTERN 5: Event-Driven Service, Event-Specific Form**
- Example: Charge creation → CHG-1
- Service triggered by event, form captures event data

---

## 7. Product Capability Map

### 7.1 Capability Clusters

**AUTHENTICATED WORKSPACE CAPABILITIES:**

**Entity Management**
- Select/switch active entity
- View entity profile
- View entity relationships (directors, partners, shareholders, charges)
- View entity compliance status
- View entity transaction history
- View entity obligations

**Transaction Capabilities**
- Discover services (intent, category, form number, obligation)
- Start new transaction
- Resume draft transaction
- Check requirements
- Upload documents
- Collect signatures
- Make payment
- Submit transaction
- Track status
- Respond to query/deficiency
- Amend/resubmit
- Download receipts/certificates

**Compliance Capabilities**
- View upcoming obligations
- View overdue obligations
- View completed obligations
- Understand why obligation applies
- Take action to satisfy obligation
- View compliance timeline
- View next recommended action

**Case Capabilities**
- View notices received
- Respond to notices
- Upload case evidence
- Track case status
- View hearing dates
- View orders issued
- Request clarification

**Authority & Delegation**
- View roles per entity
- Authorize representatives
- Delegate authority (with scope)
- Revoke delegation
- View delegation status

**Document & Certificate Access**
- View entity documents
- Download certificates
- Request certified copies
- View document history

**Notifications & Alerts**
- View notifications (in-app)
- Configure notification preferences (email/SMS)
- View alert history

---

**PUBLIC ACCESS CAPABILITIES:**

**Search & Discovery**
- Search entities (by name, CIN, LLPIN, DIN)
- Filter search (by type, status, jurisdiction, sector)
- View search results

**Entity Information**
- View entity public profile
- View directors/partners (public data)
- View charges registered
- View filing history
- View entity status history

**Document Access**
- Browse public documents
- View document details
- Pay for document access (if applicable)
- Download public documents
- Request certified copies

**Regulatory Information**
- Browse Acts & Rules
- Search regulatory content
- View guides & FAQs
- View filing timelines
- View fee schedules

**Reports & Data**
- Access statistical reports
- Download datasets (where public)
- View sector/industry trends

---

**OFFICER CAPABILITIES (Internal/Administrative):**

**Review & Processing**
- View assigned queue
- View transaction details
- Review documents
- Evaluate STP eligibility
- Approve/reject transaction
- Issue query/deficiency
- Request additional evidence
- Escalate to senior officer
- Record decision rationale

**Case Management**
- Create case (scrutiny, investigation, adjudication)
- Issue notice
- Schedule hearing
- Review response
- Issue order
- Record penalty
- Track appeal

**Registry Management**
- Update registry records (on approval)
- Verify data consistency
- Correct errors (with audit trail)
- Manage entity status transitions

**Audit & Reports**
- View audit trail
- Generate compliance reports
- View officer activity reports
- Export data for analysis

---

## 8. Capability Composition Matrix

| **Service** | **Identity & Authority** | **Entity Context** | **Data Collection** | **Documents** | **Signature** | **Payment** | **Workflow** | **Obligation** | **Case** | **Registry** | **Notification** | **Audit** |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **Company Incorporation** | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |  | ✓ | ✓ | ✓ |
| **Director KYC** | ✓ |  | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |  | ✓ | ✓ | ✓ |
| **Annual Return** | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |  | ✓ | ✓ | ✓ |
| **Director Change** | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |  |  | ✓ | ✓ | ✓ |
| **Charge Registration** | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |  |  | ✓ | ✓ | ✓ |
| **Company Closure** | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| **Public Document Access** | † | ✓ |  |  |  | ✓ |  |  |  | ✓ |  |  |
| **Complaint** | ✓ | ‡ | ✓ | ✓ |  |  |  |  | ✓ |  | ✓ | ✓ |
| **Scrutiny (Officer)** | ✓ | ✓ | ✓ | ✓ |  |  | ✓ |  | ✓ | ✓ | ✓ | ✓ |
| **Entity Search (Public)** |  |  |  |  |  |  |  |  |  | ✓ |  |  |

**Legend:**
- ✓ = Capability used
- † = Authentication optional (public access available)
- ‡ = Entity context optional (can be generic complaint)

**Insight:** 
- **High reuse:** Identity, Document, Payment, Workflow, Registry, Notification, Audit
- **Moderate reuse:** Signature (statutory filings only), Obligation (compliance services), Case (regulatory/grievance services)
- **Service-specific:** Data collection fields, validation rules, STP criteria, orchestration logic

---

## 9. Service Orchestration Model

### 9.1 Generic Service Lifecycle

```
1. ENTRY & DISCOVERY
   ↓ User states intent or selects service
   
2. IDENTITY & CONTEXT
   ↓ Authenticate, establish entity context, verify authority
   
3. ELIGIBILITY & REQUIREMENTS
   ↓ Check eligibility, show requirements, explain legal basis
   
4. DATA COLLECTION
   ↓ Prefill verified data, collect new data, validate
   
5. DOCUMENT HANDLING
   ↓ Show document requirements, upload, validate
   
6. SIGNATURE COLLECTION
   ↓ Identify required signers, collect DSC signatures
   
7. PAYMENT PROCESSING
   ↓ Calculate fee, initiate payment, confirm
   
8. SUBMISSION & ROUTING
   ↓ Submit transaction, evaluate STP eligibility, route
   
9. PROCESSING & REVIEW
   ↓ Validate (auto/manual), query if needed, decide
   
10. OUTCOME & REGISTRY
    ↓ Approve/reject, update registry, generate certificate
    
11. NOTIFICATION & NEXT
    ↓ Notify actor, generate next obligations, close transaction
```

**Not every service uses every step:**
- Public document access: Steps 1, 2†, 7, 10 only
- Director KYC: Steps 1-11, but simplified (STP-oriented)
- Complaint: Steps 1-4, 9 (case workflow), 11

---

### 9.2 Service Orchestration Patterns

**PATTERN A: Linear Flow (Simple)**
- Example: DIR-3 KYC
- Entry → Context → Data → Document → Sign → Pay → Submit → Process (STP) → Approve → Notify

**PATTERN B: Multi-Party Coordination (Complex)**
- Example: Annual Return (MGT-7)
- Entry → Context → Data → Document → **Collect Multiple Signatures** (director, auditor) → Pay → Submit → Process → Approve → Notify

**PATTERN C: Multi-Form Orchestration (Very Complex)**
- Example: SPICe+
- Entry → Context → **Orchestrate 11 Forms** (sections/steps) → Coordinate Signatures → Pay → Submit → Process → Approve → Registry → Notify → **Generate Post-Incorporation Obligations**

**PATTERN D: Case-Based (Non-Transactional)**
- Example: Complaint
- Entry → Context → Issue → Evidence → Submit → **Case Workflow** (Assign → Investigate → Respond) → Close → Notify

**PATTERN E: Persistent Object Lifecycle (Multi-Transaction)**
- Example: Charge
- Entry → Context → Data → Document → Sign → Pay → Submit → Process → **Registry Object Created**
- (Later) Modify Charge: Entry → Context → **Reference Existing Charge** → Data → Document → Sign → Pay → Submit → **Update Registry Object**
- (Later) Satisfy Charge: Entry → Context → **Reference Charge** → Evidence → Sign → Pay → Submit → **Mark Charge Satisfied**

---

## 10. What's Reusable vs What's Service-Specific

### 10.1 Reusable Platform Patterns (Design Once, Use Everywhere)

**Interaction Patterns:**
- Login & authentication
- Entity selection/switching
- Service search/discovery
- Requirement explanation (with legal basis)
- Field validation & error messages
- Document upload & validation
- Signature request & collection
- Fee calculation & display
- Payment initiation & confirmation
- Transaction status display
- Notification delivery
- Help & guidance access

**Data Patterns:**
- Person data (identity, contact, credentials)
- Entity data (company/LLP master data)
- Relationship data (director-company, partner-LLP)
- Document metadata (type, owner, version, status)
- Payment data (amount, reference, status)
- Audit data (who, what, when, why)

**Workflow Patterns:**
- Draft → Review → Submit
- STP eligibility evaluation
- Manual review routing
- Query/deficiency issuance
- Resubmission handling
- Approval/rejection
- Notification triggers

---

### 10.2 Service-Specific Elements (Design Per Service)

**Service-Specific Patterns:**
- **SPICe+:** Multi-form orchestration, name reservation, promoter coordination
- **DIR-3 KYC:** Annual recurrence, STP rules, DIN validation
- **Closure:** Precondition checking, notice period, objection handling
- **Charge:** Lifecycle management (create → modify → satisfy)
- **Complaint:** Ticket routing, category-specific handling, escalation

**Service-Specific Data:**
- **Incorporation:** Constitutional documents, promoter details, initial capital
- **Annual Return:** Annual data (meetings, members, governance changes)
- **Financial Statements:** Accounting data, auditor details, schedules
- **Charge:** Security instrument details, charge holder, amount, dates
- **IEPF Claim:** Claim details, investor identity, entitlement proof

**Service-Specific Rules:**
- **Applicability:** Which entities must file which services (e.g., OPC vs Public Company)
- **Eligibility:** Who can initiate service (e.g., authorized signatory only)
- **Validation:** Service-specific field rules (e.g., capital thresholds, jurisdiction)
- **STP Criteria:** Which services qualify for straight-through processing
- **Fee Calculation:** Service-specific fee formulas (capital-based, fixed, additional)

---

## 11. Product Stress Test

### 11.1 Test: Can This Product Model Handle All Service Patterns?

**Service Pattern 1: Entity Creation (SPICe+)**
- ✓ Multi-form orchestration supported
- ✓ Platform handles: identity, data, documents, signatures, payment, workflow
- ✓ Service-specific: orchestration logic, name reservation
- **PASS**

**Service Pattern 2: Person Compliance (DIR-3 KYC)**
- ✓ Person-centric (not entity-centric) supported
- ✓ 100% STP eligibility evaluation supported
- ✓ Annual recurrence via obligation tracking
- **PASS**

**Service Pattern 3: Periodic Entity Compliance (Annual Return)**
- ✓ Multi-party signature coordination supported
- ✓ Deadline-driven via obligation tracking
- ✓ Platform handles coordination
- **PASS**

**Service Pattern 4: Event-Based Change (Director Change)**
- ✓ Event-driven service initiation supported
- ✓ Relationship lifecycle (appointment → resignation) supported
- ✓ Effective date handling
- **PASS**

**Service Pattern 5: Persistent Object Lifecycle (Charge)**
- ✓ Multi-transaction object supported (create → modify → satisfy)
- ✓ Charge object persists across transactions
- ✓ Platform supports object reference
- **PASS**

**Service Pattern 6: Entity Termination (Closure)**
- ✓ Complex precondition checking supported
- ✓ Always-manual routing supported
- ✓ Notice period via case management
- **PASS**

**Service Pattern 7: Public Read Services (Entity Search, Documents)**
- ✓ Public access (unauthenticated) supported
- ✓ Payment for documents supported
- ✓ Distinct from transactional workspace
- **PASS**

**Service Pattern 8: User-Initiated Case (Complaint)**
- ✓ Case workflow (not transactional) supported
- ✓ Case management capability distinct from transaction
- ✓ Ticket creation, routing, response
- **PASS**

**Service Pattern 9: Regulatory Case (Scrutiny, Adjudication)**
- ✓ Officer-initiated cases supported
- ✓ Formal proceedings (notice → response → hearing → order) supported
- ✓ Case management capabilities
- **PASS**

**Service Pattern 10: Investor Services (IEPF Claim)**
- ✓ Specialized workflow supported
- ✓ Claim verification process supported
- ✓ Platform handles identity, documents, workflow
- **PASS**

**Result:** ✅ **PRODUCT MODEL PASSES STRESS TEST**

All 10 materially different service patterns can be supported by:
- **Reusable platform capabilities** (identity, entity, document, payment, signature, workflow, case, registry, notification, audit)
- **+** Service-specific orchestration and rules

---

## 12. Product Boundaries

### 12.1 What's IN SCOPE for This Product

**YES:**
- ✓ Company & LLP regulatory services
- ✓ Director/partner identity & KYC
- ✓ Compliance obligations & tracking
- ✓ Transactional filings
- ✓ Regulatory cases (complaints, scrutiny, adjudication)
- ✓ Public registry access
- ✓ Investor services (IEPF)
- ✓ Document management
- ✓ Certified copies
- ✓ Help & guidance

**NOT YET:**
- ⚠️ Cost accountant services (adjacent domain)
- ⚠️ Valuer services (adjacent domain)
- ⚠️ Secretarial audit (adjacent domain)
- ⚠️ Internal MCA HR/admin systems (different product)
- ⚠️ Inter-ministerial integrations (future phase)

---

### 12.2 What's OUT OF SCOPE (Not a Product Decision)

**Phase 3 does NOT decide:**
- ❌ Exact technology stack (Java vs .NET, PostgreSQL vs Oracle)
- ❌ Deployment infrastructure (cloud vs on-premise)
- ❌ Migration strategy (big-bang vs phased)
- ❌ Legacy system integration details (V2/V3 relationship)
- ❌ Production implementation timelines
- ❌ Vendor selection

**These are Phase 4+ engineering/implementation decisions.**

---

## 13. Success Criteria

**The product model succeeds if:**

1. ✅ **Explainable:** "What is the future MCA platform?" can be answered without showing screens
2. ✅ **Coherent:** Services share platform capabilities without forced uniformity
3. ✅ **Testable:** Product model survives stress test against 10 service patterns
4. ✅ **Traceable:** Product capabilities map cleanly to Phase 2 architecture (domains, entities, invariants)
5. ✅ **Usable:** User problems map to product capabilities
6. ✅ **Scalable:** Model supports 70+ forms without creating 70+ products
7. ✅ **Accessible:** Core capabilities work for all user types (founders, professionals, officers, public)
8. ✅ **Explainable:** Requirements link to legal basis, status is transparent, errors are actionable

---

## 14. Product Model Status

**Phase 3 Product Model:** ✅ **COMPLETE (DRAFT)**

**Next Steps:**
1. Validate product model against Phase 2 architecture (traceability check)
2. Design personas & contexts (who uses which capabilities)
3. Design information architecture (how capabilities are organized/navigated)
4. Design priority user journeys (how capabilities compose into end-to-end experiences)
5. Design service blueprints (detailed service orchestration)

**What Changed from Phase 2:**
- ❌ **NO architectural changes**
- ✓ Product layer added on top of architecture
- ✓ Capability taxonomy created (reusable vs service-specific)
- ✓ Service categories defined (user-facing taxonomy)
- ✓ Composition model proven (stress test pass)

---

## 15. Product Model Diagram

```
┌─────────────────────────────────────────────────────────────┐
│  FUTURE MCA DIGITAL REGULATORY OPERATING PLATFORM           │
└─────────────────────────────────────────────────────────────┘
                            │
        ┌───────────────────┼───────────────────┐
        │                   │                   │
   ┌────▼────┐        ┌────▼────┐        ┌────▼────┐
   │  START  │        │ MANAGE  │        │ COMPLY  │
   │ CREATE  │        │ CHANGE  │        │  FILE   │
   └────┬────┘        └────┬────┘        └────┬────┘
        │                  │                   │
   ┌────▼────┐        ┌────▼────┐        ┌────▼────┐
   │  CLOSE  │        │ SEARCH  │        │ RESPOND │
   │TERMINATE│        │ ACCESS  │        │ RESOLVE │
   └────┬────┘        └────┬────┘        └────┬────┘
        │                  │                   │
        └──────────────────┼───────────────────┘
                           │
        ┌──────────────────┴──────────────────┐
        │   PLATFORM CAPABILITIES (Reusable)   │
        ├──────────────────────────────────────┤
        │ • Identity & Authority               │
        │ • Entity Context                     │
        │ • Service Discovery                  │
        │ • Requirements & Explainability      │
        │ • Data Collection & Prefill          │
        │ • Document Handling                  │
        │ • Signature Orchestration            │
        │ • Payment Processing                 │
        │ • Workflow Routing (STP/Manual)      │
        │ • Status & Notifications             │
        │ • Obligation Tracking                │
        │ • Case Management                    │
        │ • Search & Registry Access           │
        │ • Help & Guidance                    │
        │ • Audit & Provenance                 │
        └──────────────────┬──────────────────┘
                           │
        ┌──────────────────▼──────────────────┐
        │    DOMAIN LAYER (12 Domains)        │
        ├──────────────────────────────────────┤
        │ Identity | Entity | Compliance       │
        │ Service | Oversight | Payment        │
        │ Document | Workflow | Notification   │
        │ Search | Audit | Content             │
        └──────────────────┬──────────────────┘
                           │
        ┌──────────────────▼──────────────────┐
        │     DATA LAYER (Entities/Rules)     │
        └──────────────────────────────────────┘
```

---

**END OF PRODUCT MODEL**

**Status:** READY FOR PERSONAS & INFORMATION ARCHITECTURE DESIGN

