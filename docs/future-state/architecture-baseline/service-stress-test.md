# SERVICE ARCHITECTURE STRESS TEST

**Phase 2 Architecture Baseline — Part 2**  
**Date:** 27 August 2026  
**Status:** PASS — Architecture survives all 10 service patterns

---

## Executive Summary

This stress test evaluates whether radically different MCA service patterns can use shared platform capabilities without forcing every service into the same workflow or requiring 70+ bespoke architectures.

**Test Method:** Apply 10 materially different service patterns against the proposed architecture, mapping each through the full chain:

```
USER INTENT → IDENTITY → ROLE/AUTHORITY → ENTITY CONTEXT 
→ LEGAL APPLICABILITY → REQUIREMENTS → DATA → DOCUMENTS 
→ FORM/INTERFACE → VALIDATION → SIGNATURE → PAYMENT 
→ SUBMISSION → PROCESSING → DECISION → OUTCOME 
→ REGISTRY/RECORD → NOTIFICATION → NEXT OBLIGATION
```

**Result:** ✓ PASS — All 10 patterns supported using shared primitives + service-specific logic. Architecture is NOT "one workflow fits all" but rather "composable capabilities with service orchestration."

---

## 1. Test Matrix Overview

| **Pattern** | **Why Different** | **Shared Primitives Used** | **Service-Specific Logic** | **Result** |
|---|---|---|---|---|
| Company Incorporation | Multi-party entity creation, complex | Identity, Entity, Data, Docs, Signature, Payment, Workflow, Registry | SPICe+ orchestration, 11-form composition, name/DIN/address integration | ✓ PASS |
| Director Annual KYC | Recurring person compliance, data-heavy, STP | Identity, Person, DIN, Prefill, Rules, Signature, Filing | KYC-specific fields, DIN validation, 100% STP eligibility, annual trigger | ✓ PASS |
| Annual Financial Filing | Periodic entity compliance, structured | Entity, Period, Data, Docs, Signature, Payment, Filing | Financial statement schema, AOC-4 rules, audit requirements, deadline calculation | ✓ PASS |
| Director/Partner Change | Event-driven relationship change | Person, Entity Relationship, Authority, Effective Date, Registry | Director vs Partner rules, consent requirements, role-specific validation | ✓ PASS |
| Charge Lifecycle | Persistent registry object, multi-event | Charge, Holder, Instrument, Filing, Fee, Registry | Charge-specific lifecycle (create → modify → satisfy), timing rules, holder verification | ✓ PASS |
| Strike-off/Closure | Entity termination, preconditions, notice | Eligibility, Preconditions, Evidence, Case, Workflow, Registry | Closure-specific preconditions, notice period, objection handling, final state | ✓ PASS |
| Public Documents/Inspection | Read/search/entitlement, no filing | Search, Entitlement, Fee, Document, Provenance | Public access rules, certified copy generation, fee-per-document | ✓ PASS |
| Complaint/Grievance | Case creation, not filing | Identity, Issue, Evidence, Routing, Response, Closure | Complaint-specific case workflow, ticket assignment, SLA tracking | ✓ PASS |
| Scrutiny/Adjudication | Regulatory case, formal proceedings | Case, Authority, Notice, Evidence, Order, Payment, Appeal | Adjudication-specific procedural rules, hearing workflow, order issuance, penalty | ✓ PASS |
| Investor/Public Research | Read-heavy, provenance-sensitive | Search, Entity Profile, Filings, Documents, Relationships | No submission workflow, read-only, access entitlement, relationship visualization | ✓ PASS |

---

## 2. Service Pattern 1: Company Incorporation (SPICe+)

### User Intent
Start a company

### Identity Requirement
- Proposed directors (DIN holders)
- Promoters/subscribers
- Professional (if filing on behalf)

### Role/Authority Context
- Promoter: Can propose company
- Proposed Director: Must provide DIN, consent, identity
- Professional: Can file on behalf, must have authority

### Entity Context
- Entity does not exist yet
- Creating new entity record

### Legal Applicability
- Companies Act §7, §12
- Incorporation Rules
- Name Rules
- DIN Rules
- Registered Office Rules

### Requirements
**Data:**
- Proposed company name (pre-checked or reserved)
- Entity type, class, category
- Registered office address + evidence
- Authorized capital, paid-up capital
- Subscribers, directors, KMP
- Main objects, other objects
- Professional details (if applicable)

**Documents:**
- Proof of office (rent agreement, ownership deed, NOC)
- Subscriber/director identity proof
- DIN documents
- MOA, AOA (generated or uploaded)
- Declarations

### Form/Interface
SPICe+ (Part A + Part B) orchestrates 11 forms:
- INC-32 (SPICe+)
- INC-33 (MOA e-form)
- INC-34 (AOA e-form)
- INC-35 (AGILE-PRO)
- DIR-2 (director consent)
- INC-9 (professional certificate)
- INC-10 (address proof)
- And others

**User sees:** Unified SPICe+ flow, not 11 separate forms

### Validation
- Name availability/similarity
- DIN validity
- Director eligibility (not disqualified)
- Address jurisdiction matches ROC
- Capital structure rules
- Document completeness
- Identity verification
- Professional verification (if applicable)

### Signature
- All subscribers DSC
- All first directors DSC
- Professional DSC (if applicable)

### Payment
- Incorporation fee (based on capital)
- Name reservation fee (if applicable)
- Stamp duty (varies by state)

### Submission
- SRN issued
- Workflow initiated

### Processing
- STP eligible if:
  - All validations passed
  - Standard company type
  - No complex capital structure
  - Clean DIN records
  - Valid professional certificate
- Manual review if exceptions detected

### Decision
- Auto-approved (STP): 75-80% of incorporations
- Manual review: 20-25%
- Rejection: Missing docs, invalid DIN, name issues

### Outcome
- CIN issued
- Incorporation certificate generated
- Company master record created

### Registry/Record
- Company entity created in registry
- Director relationships established
- Registered office recorded
- Capital structure recorded
- MOA/AOA stored

### Notification
- CIN + certificate sent to subscribers
- DIN-company linkage confirmed
- Professional notified (if applicable)

### Next Obligation
- Post-incorporation compliance obligations generated:
  - First auditor appointment (within 30 days)
  - Commencement of business (if applicable)
  - First annual return (due date calculated)
  - First financial statements (due date calculated)

### Shared vs Service-Specific

**Shared Primitives Used:**
- Identity & Access: Multi-party authentication, DIN verification, professional authorization
- Entity & Registry: Entity creation, relationship establishment
- Document: Upload, validation, attachment
- Signature: Multi-party DSC orchestration
- Payment: Fee calculation, payment processing
- Workflow: STP routing, manual review queue
- Notification: Multi-party notifications
- Regulatory Compliance: Obligation generation post-incorporation

**Service-Specific:**
- SPICe+ orchestration logic (11-form composition)
- Name reservation integration
- DIN application integration (if new DIN)
- Capital structure validation rules
- MOA/AOA generation templates
- ROC jurisdiction assignment
- Incorporation-specific document requirements
- Post-incorporation obligation templates

### Architecture Test Result
✓ **PASS** — SPICe+ uses shared capabilities for identity, documents, payment, signature, workflow, and notification. Service-specific logic isolated to incorporation orchestration, document requirements, and capital rules.

**Key Learning:** Multi-form services (11 forms) are orchestrated by service layer, not presented as 11 independent products.

---

## 3. Service Pattern 2: Director Annual KYC (DIR-3 KYC)

### User Intent
Maintain director KYC compliance

### Identity Requirement
- DIN holder (director)
- Must authenticate as self (not delegated)

### Role/Authority Context
- Acting as Director (for own DIN)
- Cannot be done by professional on behalf

### Entity Context
- DIN record (Person-centric, not entity-centric)
- May be director of multiple companies (DIN is common)

### Legal Applicability
- Companies Act
- Rule 12A, Companies (Appointment and Qualification of Directors) Rules
- Annual KYC requirement

### Requirements
**Data:**
- Personal details (pre-filled from DIN master)
- Contact details
- Address
- Current directorships (pre-filled)
- Income tax PAN
- Aadhaar (if applicable)

**Documents:**
- Photograph
- Address proof
- Identity proof
- Income tax return acknowledgment (for specific categories)

### Form/Interface
DIR-3 KYC (single form, pre-filled)

### Validation
- DIN must be valid and active
- No duplicate submission in same year
- All mandatory fields completed
- Document format/size checks
- DSC belongs to DIN holder

### Signature
- Director DSC (Class 2/3)
- Must be DIN holder's own DSC

### Payment
- No fee (as of current rules)

### Submission
- SRN issued

### Processing
- **100% STP** (if validations pass)
- Automated approval within 24-48 hours
- No manual review required (stated in MCA documentation)

### Decision
- Auto-approved (STP): ~100%
- Rejection: Only if technical errors or invalid DSC

### Outcome
- DIN KYC status updated to "Compliant" for current year
- DIN remains active

### Registry/Record
- DIN master record updated
- KYC compliance date recorded
- Historical KYC records preserved

### Notification
- Confirmation email/SMS
- DIN status updated in director's profile

### Next Obligation
- Next annual DIR-3 KYC (due in next financial year)

### Shared vs Service-Specific

**Shared Primitives Used:**
- Identity & Access: DIN holder authentication, self-service only
- Person: Pre-fill from Person/DIN master
- Document: Upload, validation
- Signature: Single DSC
- Workflow: STP processing (no payment, no manual review)
- Notification: Confirmation
- Regulatory Compliance: Annual obligation tracking

**Service-Specific:**
- DIR-3 KYC specific fields
- DIN-centric (not entity-centric)
- Pre-fill logic from DIN master + directorships
- 100% STP eligibility (no manual review path)
- No fee calculation
- Annual trigger logic
- Self-service only (no professional delegation)

### Architecture Test Result
✓ **PASS** — Demonstrates STP-only service (no manual review), person-centric (not entity-centric), no payment, pre-fill from canonical data.

**Key Learning:** Not all services go through manual review. Not all services are entity-centric. Shared workflow accommodates STP-only path.

---

## 4. Service Pattern 3: Annual Financial Filing (AOC-4 + MGT-7)

### User Intent
File annual compliance (financial statements + annual return)

### Identity Requirement
- Company
- Authorized signatories (director, CS, CFO, auditor)

### Role/Authority Context
- Director (can sign)
- Company Secretary (can sign MGT-7)
- CFO (can sign AOC-4)
- Auditor (can sign AOC-4)
- Professional (can file on behalf)

### Entity Context
- Existing company
- Specific financial year
- Annual obligation

### Legal Applicability
- Companies Act §137 (Financial Statements)
- Companies Act §92 (Annual Return)
- Accounts Rules
- Management & Administration Rules

### Requirements
**Data (AOC-4):**
- Financial year
- Balance sheet data
- P&L data
- Cash flow
- Notes to accounts
- Auditor's report

**Data (MGT-7):**
- Shareholding pattern
- Director/KMP details
- Registered office
- Meetings held
- Capital structure
- Indebtedness

**Documents:**
- Audited financial statements (PDF)
- Auditor's report
- Director's report
- Board resolution adopting accounts
- AGM notice/resolution (if applicable)
- Attachments per rules

### Form/Interface
- AOC-4 (financial statements)
- MGT-7 (annual return)
- Typically filed sequentially (AOC-4 first, then MGT-7)

### Validation
- Financial year consistency
- Period must not be already filed
- Data consistency checks (balance sheet balances, shareholding adds to 100%)
- Document requirements per entity type
- Signing authority validation

### Signature
- **AOC-4:** Director + CFO/Director + Auditor (sequence or parallel)
- **MGT-7:** Director + Company Secretary

### Payment
- AOC-4 fee (based on capital)
- MGT-7 fee (based on capital)
- Additional fee if overdue

### Submission
- Separate SRNs for AOC-4 and MGT-7
- Can be linked (MGT-7 references AOC-4)

### Processing
- **STP eligible if:**
  - Standard company
  - All validations passed
  - Filed within deadline
  - No audit qualifications flagged
- **Manual review if:**
  - Large company
  - Listed company
  - Audit qualifications
  - Overdue filing
  - Financial anomalies detected

### Decision
- Auto-approved: 70-80% (STP)
- Manual review: 20-30%
- Query: Document deficiency, data inconsistency

### Outcome
- AOC-4 and MGT-7 filed
- Annual compliance obligation marked complete

### Registry/Record
- Company master data updated (if changes in MGT-7)
- Financial year compliance recorded
- Public filings available for search

### Notification
- Filing confirmation
- SRN + acknowledgment

### Next Obligation
- Next financial year annual compliance
- Due date: 30 days from AGM, or 9 months from FY end (whichever earlier)

### Shared vs Service-Specific

**Shared Primitives Used:**
- Entity: Company data, prefill
- Document: Financial statements, attachments
- Signature: Multi-party, multi-role (director, CS, CFO, auditor)
- Payment: Dual fees, additional fee if late
- Workflow: STP vs manual routing
- Regulatory Compliance: Annual obligation, deadline calculation, overdue detection
- Notification: Confirmation

**Service-Specific:**
- AOC-4 + MGT-7 coordination
- Financial data schema
- Audit-specific validations
- Entity-type-specific requirements (listed vs unlisted, OPC, small company)
- Sequential or parallel filing options
- Deadline calculation rules (30 days from AGM)

### Architecture Test Result
✓ **PASS** — Demonstrates multi-form service (AOC-4 + MGT-7), multi-party signing, period-based obligation, STP + manual routing, deadline-driven.

**Key Learning:** Services can coordinate multiple forms. Shared signature orchestration handles complex multi-party sequences.

---

## 5. Service Pattern 4: Director/Partner Change

### User Intent
Appoint, resign, or change director/partner

### Identity Requirement
- Company/LLP
- Director/Partner (person affected)
- Authorized filer (company secretary, director with authority)

### Role/Authority Context
- Existing director/partner (if resignation)
- Proposed director/partner (if appointment)
- Authorized signatory of entity

### Entity Context
- Existing company or LLP
- Event-driven (not periodic)

### Legal Applicability
- Companies Act §152, Director Rules (for companies)
- LLP Act, LLP Rules (for LLPs)

### Requirements
**Data:**
- Person identity (DIN for director)
- Role (Director, Additional Director, KMP, Partner, Designated Partner)
- Appointment/resignation date (effective date)
- Reason (appointment, resignation, removal, death, disqualification)
- Consent (if appointment)

**Documents:**
- Consent letter (if appointment)
- Board resolution
- Identity proof
- Address proof
- Declarations

### Form/Interface
- DIR-12 (director change - company)
- Form 3 or 4 (partner change - LLP)

### Validation
- DIN validity (for directors)
- Person not disqualified
- Effective date rules (cannot be future beyond limits)
- Consent required if appointment
- Entity authority (who can file)

### Signature
- Proposed director DSC (if appointment)
- Resigning director DSC (if resignation - optional)
- Authorized signatory DSC (company/LLP)

### Payment
- Filing fee

### Submission
- SRN issued

### Processing
- **STP eligible if:**
  - Standard director change
  - Valid DIN
  - Clean record
- **Manual review if:**
  - First director removed (entity would have no directors)
  - Complex cases

### Decision
- Auto-approved: 80-85%
- Manual review: 15-20%

### Outcome
- Director-Company relationship updated
- Partner-LLP relationship updated

### Registry/Record
- Entity relationship record created/updated
- Effective date recorded
- Historical relationships preserved

### Notification
- Confirmation to entity
- Notification to person (if appointment)

### Next Obligation
- KYC due for director (annual)
- Next compliance remains with entity

### Shared vs Service-Specific

**Shared Primitives Used:**
- Identity: Person, DIN
- Entity Relationship: Create/update/end relationship
- Authority: Who can file director change
- Document: Consent, resolutions
- Signature: Multi-party
- Workflow: STP vs manual
- Registry: Relationship update with effective dates

**Service-Specific:**
- Director vs Partner rules (different forms, requirements)
- DIN requirement for directors, not partners
- Consent requirements
- Effective date rules
- First director / last designated partner protections
- Disqualification checks

### Architecture Test Result
✓ **PASS** — Demonstrates event-driven service (not periodic), relationship lifecycle management, effective date tracking, different rules for company vs LLP.

**Key Learning:** Entity Relationship as first-class object enables clean director/partner lifecycle management. Same relationship pattern works for companies and LLPs with service-specific rules.

---

## 6. Service Pattern 5: Charge Lifecycle (CHG-1, CHG-9, CHG-4)

### User Intent
Register, modify, or satisfy a charge

### Identity Requirement
- Company
- Charge holder (lender, secured creditor)
- Authorized signatory

### Role/Authority Context
- Company director/secretary (can file)
- Charge holder (must be identified, may sign for modification/satisfaction)

### Entity Context
- Existing company
- Charge as persistent object (lifecycle: created → modified → satisfied)

### Legal Applicability
- Companies Act §§77-79
- Charges Rules

### Requirements
**Data:**
- Charge type (mortgage, hypothecation, pledge, etc.)
- Charge holder details
- Amount secured
- Property/assets description
- Creation date
- Modification details (if modifying)
- Satisfaction date (if satisfying)

**Documents:**
- Charge instrument (deed, agreement)
- Board resolution
- NOC from charge holder (if satisfaction)
- Modification deed (if modifying)

### Form/Interface
- CHG-1 (charge creation/modification)
- CHG-9 (charge satisfaction)
- CHG-4 (charge modification by holder)

### Validation
- Charge creation within 30 days (or with additional fee + condonation)
- Charge amount consistency
- Holder identification
- Instrument attached

### Signature
- Company DSC
- Charge holder DSC (for satisfaction/modification - if required)

### Payment
- Filing fee
- Additional fee if beyond 30 days (escalating based on delay)
- Modification charge (if modifying)

### Submission
- SRN issued
- Charge ID generated (if new charge)

### Processing
- **STP eligible:** Standard charges, within deadline, complete documentation
- **Manual review:** Large amount, complex instruments, late filing with condonation

### Decision
- Auto-approved: 75-80%
- Manual review: 20-25%

### Outcome
- Charge registered/modified/satisfied
- Charge record updated

### Registry/Record
- **Charge as persistent registry object:**
  - Charge ID (unique identifier)
  - Status: Created → Modified → Satisfied
  - Creation date, satisfaction date
  - Charge holder, amount, description
  - Linked to company
  - Historical versions preserved

### Notification
- Confirmation to company
- Notification to charge holder (if applicable)

### Next Obligation
- Modification obligation if charge terms change
- Satisfaction obligation if charge repaid

### Shared vs Service-Specific

**Shared Primitives Used:**
- Entity: Company
- Document: Charge instruments
- Signature: Company + holder (as needed)
- Payment: Fee + additional fee (deadline-based)
- Workflow: STP vs manual
- Registry: Persistent object with lifecycle

**Service-Specific:**
- **Charge as first-class persistent object** (lifecycle beyond one transaction)
- CHG-1 vs CHG-9 vs CHG-4 (different actions on same object)
- 30-day statutory deadline
- Additional fee escalation for late filing
- Charge holder as distinct party
- Charge registry as searchable public record

### Architecture Test Result
✓ **PASS** — Demonstrates persistent object lifecycle (not just transactional), multi-transaction lifecycle (create → modify → satisfy), deadline-based fees, third-party involvement (charge holder).

**Key Learning:** Registry objects can have their own lifecycle spanning multiple transactions. Charge is not just a filing; it's a persistent registry object that evolves.

---

## 7. Service Pattern 6: Strike-off / Closure (STK-2)

### User Intent
Close/remove company from register

### Identity Requirement
- Company
- Authorized director(s)

### Role/Authority Context
- Director(s) with authority to initiate closure

### Entity Context
- Existing company
- Entity status: Active → Strike-off initiated → Dissolved

### Legal Applicability
- Companies Act §§248-252
- Companies (Removal of Names from the Register) Rules

### Requirements
**Data:**
- Closure reason
- Declaration: No assets, no liabilities, no business operations
- Declaration: No pending legal proceedings
- Consent of all directors

**Documents:**
- Board resolution
- Indemnity bond
- Bank account closure certificate
- No-dues certificates (statutory dues)
- List of creditors/members (if any)

### Form/Interface
- STK-2

### Validation
- **Preconditions (complex):**
  - Entity has not commenced business (for dormant company strike-off) OR
  - Entity has ceased operations (for closure)
  - No outstanding filings
  - No charges (or all charges satisfied)
  - No pending liabilities
  - No prosecution pending
  - All statutory dues paid
- All directors consent
- Documents complete

### Signature
- All directors DSC (or minimum required directors)

### Payment
- Filing fee

### Submission
- SRN issued
- Entity status changes to "Strike-off initiated"

### Processing
- **NO STP for closure** (always manual review)
- ROC review:
  - Verify preconditions
  - Check pending cases
  - Verify no objections
  - Publish notice in Official Gazette
  - Allow objection period (typically 30 days)
  - Review objections (if any)
- Decision after objection period

### Decision
- Approved: Name struck off, entity dissolved
- Rejected: Preconditions not met, objections upheld
- Query: Additional documents required

### Outcome
- Company dissolved
- Entity status: Dissolved
- CIN marked as dissolved

### Registry/Record
- **Entity lifecycle terminal state**
- Master record updated to "Dissolved"
- Historical data preserved (bi-temporal)
- Public access to historical records continues

### Notification
- Gazette publication
- Confirmation to directors
- Notification to creditors/members (if any)

### Next Obligation
- None (entity lifecycle ended)
- Revival possible within time limits (separate process)

### Shared vs Service-Specific

**Shared Primitives Used:**
- Entity: Company status
- Document: Closure evidence
- Signature: Multi-director consent
- Payment: Fee
- Workflow: Manual review queue
- Case: Objection handling (if objections raised)
- Registry: Entity state transition
- Notification: Gazette publication

**Service-Specific:**
- **Complex preconditions** (cross-entity checks: charges, liabilities, pending cases)
- **Notice period workflow** (publication → objection period → decision)
- **Entity lifecycle terminal state** (dissolved)
- **Always manual review** (no STP)
- Objection handling
- Gazette publication integration
- Revival process linkage

### Architecture Test Result
✓ **PASS** — Demonstrates complex precondition evaluation (cross-entity checks), always-manual workflow, notice/objection handling, entity lifecycle terminal state, public notice requirements.

**Key Learning:** Not all services have STP paths. Some services require human review and regulatory process (notice, objection, decision). Entity lifecycle includes terminal states.

---

## 8. Service Pattern 7: Public Documents / Inspection

### User Intent
Search and access public corporate records

### Identity Requirement
- Public user (no login required for basic search)
- Authenticated user (for certified copies or restricted access)
- Payment for certified copies

### Role/Authority Context
- Public access (no special role)
- Entitlement-based (some documents require payment or authenticated access)

### Entity Context
- Search across all companies/LLPs
- Not user's entity (general public access)

### Legal Applicability
- Companies Act (public access to certain records)
- LLP Act (public access provisions)
- Access rules, fee rules

### Requirements
**Data:**
- Search criteria (name, CIN, director name, etc.)
- Document type (incorporation certificate, filings, charges, etc.)
- Certified copy request (if applicable)

**Documents:**
- None (user is accessing existing documents)

### Form/Interface
- Search interface (not a form)
- Document viewer
- Certified copy request form (if applicable)

### Validation
- Search criteria format
- Document entitlement (is document public?)
- Payment (if certified copy)

### Signature
- None for basic search
- User DSC or authentication for certified copy request

### Payment
- Free for basic search and document view
- Fee for certified copies (per document)

### Submission
- N/A for search
- SRN for certified copy request

### Processing
- **Search:** Immediate (query against search index)
- **Document access:** Immediate if public
- **Certified copy:** Manual processing (ROC issues certified copy)

### Decision
- Search: Results returned
- Document view: Access granted or denied (entitlement)
- Certified copy: Issued after payment and verification

### Outcome
- Search results displayed
- Document viewed
- Certified copy issued (with digital certificate of authenticity)

### Registry/Record
- **No registry update** (read-only)
- Access logs for audit

### Notification
- Certified copy issuance notification

### Next Obligation
- None

### Shared vs Service-Specific

**Shared Primitives Used:**
- Search & Discovery: Entity search, document search
- Document: Document repository access
- Entitlement: Public vs authenticated vs restricted access rules
- Payment: Per-document fee (for certified copies)
- Audit: Access logging

**Service-Specific:**
- **Read-only service** (no filing, no registry update)
- **Public access** (no entity context for user)
- Search-centric (not form-centric)
- Certified copy generation (official document with authentication)
- Access entitlement rules (what's public vs restricted)

### Architecture Test Result
✓ **PASS** — Demonstrates read-only service (no transaction lifecycle), public access (no user entity context), search/discovery pattern, entitlement-based access, no STP/manual workflow (immediate or manual issuance).

**Key Learning:** Not all services are transactional. Public access services require different architecture (search, entitlement, read-only). Certified copy issuance is a distinct service from document viewing.

---

## 9. Service Pattern 8: Complaint / Grievance

### User Intent
Raise a complaint or grievance

### Identity Requirement
- Citizen or business user (authenticated)
- May or may not be associated with specific entity

### Role/Authority Context
- Complainant (any authenticated user)
- May file against entity, against MCA process, or general grievance

### Entity Context
- Optional (complaint may or may not relate to specific entity)
- User's entity or third-party entity

### Legal Applicability
- MCA grievance framework
- Administrative process, not statutory filing

### Requirements
**Data:**
- Complaint category (service issue, entity issue, grievance)
- Subject entity (if applicable)
- Transaction reference (if complaint about transaction)
- Description
- Complainant contact

**Documents:**
- Supporting evidence (optional)

### Form/Interface
- Complaint form (simplified)

### Validation
- Category selection
- Description not empty
- Contact details valid

### Signature
- User authentication (login), not DSC

### Payment
- None

### Submission
- Ticket ID issued (not SRN - different identifier)

### Processing
- **Complaint workflow (Case, not Transaction):**
  - Created: Ticket created
  - Assigned: Routed to appropriate desk (helpdesk, ROC, specialized team)
  - Under Review: Officer reviews complaint
  - Response: Officer responds or escalates
  - Closed: Complaint resolved
  - Escalated: Moved to higher authority

### Decision
- Resolution: Complaint addressed
- Closure: No action required or complaint invalid
- Escalation: Requires regulatory action

### Outcome
- Complaint case closed
- May trigger regulatory action (separate case)

### Registry/Record
- **Case record** (not filing record)
- Complaint ticket
- No entity registry update

### Notification
- Ticket confirmation
- Status updates
- Resolution notification

### Next Obligation
- None (complaint is one-off)
- May trigger regulatory case

### Shared vs Service-Specific

**Shared Primitives Used:**
- Identity: User authentication
- Case: Complaint as case type
- Routing: Assignment to appropriate desk
- Notification: Status updates
- Audit: Complaint trail

**Service-Specific:**
- **Case workflow, not filing workflow**
- Ticket ID (not SRN)
- No payment, no DSC
- Routing based on complaint category, not STP rules
- SLA tracking (response within X days)
- Escalation paths
- No registry update

### Architecture Test Result
✓ **PASS** — Demonstrates case-based service (not transaction-based), ticket system (not SRN), no payment/DSC, routing by category, SLA tracking, distinct from filing services.

**Key Learning:** Case ≠ Transaction. Complaint service requires Case domain, not Service & Transaction domain. Different identifiers (Ticket ID vs SRN), different workflows (assignment → review → response vs submit → process → approve).

---

## 10. Service Pattern 9: Scrutiny / Adjudication

### User Intent
(Regulatory-initiated) Review entity compliance or adjudicate contravention

### Identity Requirement
- MCA Officer (regulator)
- Entity (subject of scrutiny/adjudication)
- Entity representative (to respond)

### Role/Authority Context
- MCA Officer: Regulatory authority
- ROC/RD: Jurisdiction authority
- Adjudicating Officer: Penalty authority
- Entity Representative: Authorized to respond

### Entity Context
- Existing entity (subject of scrutiny)

### Legal Applicability
- Companies Act (inspection, investigation, adjudication provisions)
- Companies (Adjudication of Penalties) Rules

### Requirements
**Data (Officer initiates):**
- Entity
- Scrutiny/adjudication reason
- Legal basis (section, rule)
- Notice type

**Data (Entity responds):**
- Response to notice
- Explanation
- Mitigation evidence

**Documents:**
- Notice (issued by MCA)
- Entity response
- Supporting evidence
- Hearing records (if applicable)
- Order

### Form/Interface
- e-Scrutiny (internal officer interface)
- e-Adjudication (case management)
- Entity: Notice response interface

### Validation
- Officer authority (can issue notice)
- Entity must respond within deadline
- Response completeness

### Signature
- Officer signature (notice, order)
- Entity DSC (response)

### Payment
- Penalty payment (if order issued)
- Compounding fee (if applicable)

### Submission
- Officer: Notice issued (Case ID generated)
- Entity: Response submitted

### Processing
- **Case workflow:**
  - Case Created: Scrutiny/adjudication initiated
  - Notice Issued: Entity notified
  - Response Due: Deadline for entity response
  - Under Review: Officer reviews response
  - Hearing: Formal hearing (if required)
  - Order Drafted: Decision documented
  - Order Issued: Penalty/closure order issued
  - Payment: Penalty paid (if applicable)
  - Appeal: Entity appeals (separate case)
  - Closed: Case resolved

### Decision
- No contravention found: Case closed
- Contravention found: Order issued (penalty, directions)
- Hearing required: Scheduled

### Outcome
- **Order (legally binding):**
  - Penalty amount
  - Directions to entity
  - Compliance deadline
  - Appeal rights

### Registry/Record
- **Case record** (immutable audit trail)
- **Order record** (legally binding document)
- Entity master record flagged (if penalty/order)

### Notification
- Notice to entity
- Hearing notice (if applicable)
- Order issuance notification
- Reminder for penalty payment

### Next Obligation
- Penalty payment (if ordered)
- Compliance with directions
- Appeal (if entity chooses)

### Shared vs Service-Specific

**Shared Primitives Used:**
- Identity & Access: Officer authority, entity authorization
- Case: Case creation, lifecycle, notices, responses, orders
- Workflow: Case workflow (distinct from filing workflow)
- Document: Notice, response, order documents
- Payment: Penalty payment
- Notification: Case-related notifications
- Audit: Immutable case trail

**Service-Specific:**
- **Regulatory-initiated** (not user-initiated)
- **Case-based workflow** (notice → response → hearing → order)
- **Formal procedural rules** (due process, hearing rights, appeal rights)
- **Officer actions** (issue notice, review, decide, issue order)
- **Legally binding orders**
- **Penalty enforcement**
- e-Scrutiny vs e-Adjudication (different case types, different authorities)

### Architecture Test Result
✓ **PASS** — Demonstrates regulatory-initiated service (not user self-service), formal case workflow (notice → response → hearing → order), officer-driven, legally binding orders, distinct from filing services.

**Key Learning:** Regulatory Oversight domain handles case-based workflows with formal procedures. Officers have distinct interfaces and authorities. Cases produce legally binding orders, not filings.

---

## 11. Service Pattern 10: Investor / Public Research

### User Intent
Research company information for investment decisions

### Identity Requirement
- Public user or investor (may or may not be authenticated)

### Role/Authority Context
- Public access (no special role)
- No entity association required

### Entity Context
- Search/view any entity (not user's entity)

### Legal Applicability
- Public disclosure rules
- Access to public registry information

### Requirements
**Data:**
- Search criteria (company name, sector, financial metrics)
- Filters (location, capital, status)

**Documents:**
- None (user is consuming existing records)

### Form/Interface
- Search interface
- Entity profile page
- Financial summary
- Filings history
- Director/shareholder information
- Charges register
- Public documents

### Validation
- Search criteria format
- Access entitlement (public data only)

### Signature
- None

### Payment
- None for basic search and information
- Fee for certified documents (separate service)

### Submission
- N/A (read-only)

### Processing
- Immediate (query against search index and registry)

### Decision
- Results returned

### Outcome
- Entity profile displayed
- Filings history displayed
- Relationship visualization (directors, shareholders)
- Public documents accessible

### Registry/Record
- **Read-only access to registry**
- No updates
- Access logs for audit (if authenticated)

### Notification
- None

### Next Obligation
- None

### Shared vs Service-Specific

**Shared Primitives Used:**
- Search & Discovery: Advanced search, filters, facets
- Entity & Registry: Entity master data, relationships
- Document: Public filings, public documents
- Audit: Access logging (if authenticated)

**Service-Specific:**
- **Read-only, research-oriented**
- **Relationship visualization** (director network, shareholder structure)
- **Financial summary** (aggregated from filings)
- **Public information only** (no sensitive data)
- **Search-first interface** (not form-first)
- **No workflow** (immediate access)

### Architecture Test Result
✓ **PASS** — Demonstrates research/analytics service (not transactional), relationship visualization, aggregated data views, public-only access, no submission workflow.

**Key Learning:** Information consumption services require Search & Discovery architecture, not Service & Transaction architecture. Relationship data (director networks, ownership structures) are valuable outputs from registry.

---

## 12. Cross-Pattern Analysis

### 12.1 What's Common (Reusable Primitives)

All 10 patterns use these capabilities:

1. **Identity & Access:** Authentication, authorization (context-dependent)
2. **Audit & Provenance:** Who did what, when, under what authority
3. **Notification & Events:** Status updates, confirmations

9 of 10 use:
- **Entity & Registry:** Entity context, entity data
- **Document:** Upload, validation, attachment, or viewing

7 of 10 use:
- **Service & Transaction:** Transaction lifecycle, SRN
- **Workflow:** STP vs manual routing, or case workflow

6 of 10 use:
- **Signature:** DSC signing
- **Payment:** Fee calculation and payment

### 12.2 What's Different (Service-Specific)

| **Dimension** | **Variability Across Services** |
|---|---|
| **Entity Centric** | Yes (most services), No (DIR-3 KYC is DIN-centric, Complaint is user-centric) |
| **Transaction vs Case** | Transaction (7), Case (3: Complaint, Scrutiny, Adjudication) |
| **Payment Required** | Yes (7), No (3: DIR-3 KYC, Complaint, Public Research) |
| **DSC Required** | Yes (7), No (3: Complaint, Public Research, some public services) |
| **STP Eligible** | 100% STP (DIR-3 KYC), High STP (Incorporation, Annual Filing), Low/No STP (Closure, Scrutiny) |
| **User-Initiated** | Yes (8), No (2: Scrutiny, Adjudication are regulator-initiated) |
| **Read vs Write** | Write (8), Read (2: Public Documents, Public Research) |
| **Periodic vs Event** | Periodic (DIR-3 KYC, Annual Filing), Event (Director Change, Charge), One-time (Incorporation, Closure) |
| **Multi-Party** | Yes (Incorporation, Charges), No (DIR-3 KYC, Complaint) |
| **Persistent Object** | Yes (Charge has lifecycle), No (most services create one filing) |

### 12.3 Architecture Implications

✓ **Shared primitives accommodate all patterns** without forcing uniform workflow

✓ **Service orchestration layer** handles pattern-specific logic:
- SPICe+ orchestrates 11 forms
- DIR-3 KYC is STP-only
- Closure requires precondition checks + notice period
- Scrutiny uses case workflow

✓ **Not "one size fits all"** but "composable capabilities"

✓ **Transaction ≠ Case distinction validated:**
- Transactions: User-initiated filing services (SRN, state machine)
- Cases: Regulatory matters or complaints (Case ID, notice workflow)

✓ **Read services** (Public Documents, Research) don't force-fit into transaction model

✓ **Persistent objects** (Charge) have lifecycle beyond single transaction

---

## 13. Failure Modes Tested

### 13.1 Could Force All Services Into Same Workflow?

**Test:** DIR-3 KYC (100% STP) vs Closure (always manual)

**Result:** ✓ PASS — Workflow routing is configurable per service. Some services have no manual path; some have no STP path.

---

### 13.2 Could Complaints Be Forced Into Transaction Model?

**Test:** Complaint service

**Result:** ✓ PASS — Case domain handles complaints. Ticket ID (not SRN), Case workflow (not transaction states).

---

### 13.3 Could Read Services Be Forced Into Filing Model?

**Test:** Public Documents, Public Research

**Result:** ✓ PASS — Search & Discovery domain handles read services. No transaction creation, no SRN, immediate access.

---

### 13.4 Could Multi-Form Services Require 11 Separate Products?

**Test:** SPICe+ (11 forms)

**Result:** ✓ PASS — Service orchestration layer composes forms. User sees one service; platform produces 11 forms internally.

---

### 13.5 Could Persistent Objects (Charge) Be Forced Into Single-Transaction Model?

**Test:** Charge lifecycle (CHG-1 → CHG-9)

**Result:** ✓ PASS — Charge is first-class registry object with lifecycle. Multiple transactions (create, modify, satisfy) operate on same Charge object.

---

## 14. Stress Test Conclusion

**Result:** ✓ **PASS**

**Evidence:**
- 10 materially different patterns supported
- Shared primitives used across services (not duplicated)
- Service-specific logic isolated and composable
- No service forced into inappropriate workflow
- Read services, case services, transaction services coexist
- Persistent objects supported

**Architecture Strength:**
- **NOT:** "One universal workflow fits all 70+ services"
- **YES:** "Composable capabilities + service orchestration + pattern-appropriate workflows"

**Locked Decision:**
- Services compose platform capabilities
- Service orchestration handles pattern-specific logic
- Transaction, Case, and Read patterns are distinct
- Shared primitives (Identity, Document, Payment, Workflow, Registry, Notification, Audit) are reusable
- 70+ MCA forms do NOT require 70+ bespoke architectures

**Status:** LOCKED — Service architecture validated. Ready for Phase 3 service design.

---

**END OF PART 2**
