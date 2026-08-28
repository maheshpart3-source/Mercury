# CANONICAL VOCABULARY

**Phase 2 Architecture Baseline — Part 1**  
**Date:** 27 August 2026  
**Status:** LOCKED — Ready for Phase 3

---

## Executive Summary

This document tests whether the distinctions proposed in the Architecture Baseline are necessary, coherent, and sufficient. The test evaluates 22 core concepts against:

- **Definition clarity:** Can the concept be defined without circularity?
- **Responsibility:** Who owns this in the domain?
- **Lifecycle:** Does it have persistent state?
- **Legal significance:** Is it legally meaningful or purely technical?
- **Necessity:** Can we collapse it without creating ambiguity?

**Result:** All 22 concepts pass stress testing. Zero concepts removed. Three clarifications added.

---

## 1. Testing Methodology

For each concept, evaluate:

1. **Can it be defined independently?** (No circular dependencies)
2. **Does it have clear ownership?** (Which domain/actor is responsible?)
3. **Does it have meaningful lifecycle?** (Or is it ephemeral?)
4. **Is it user-facing or internal?** (Affects interface design)
5. **Is it legally binding or technical?** (Affects audit/provenance)
6. **Can it be collapsed into another concept without loss?** (Necessity test)

### Stress Test Questions

- **IDENTITY ≠ AUTHORITY:** Can one person have multiple authorities? YES → Keep separate
- **ACCOUNT ≠ IDENTITY:** Can one identity have multiple accounts? NO in MCA context → But keep for delegation cases
- **ROLE ≠ AUTHORITY:** Can same role have different authorities? YES (director of A ≠ director of B) → Keep separate
- **FORM ≠ SERVICE:** Can one service produce multiple forms? YES (SPICe+) → Keep separate
- **SERVICE ≠ TRANSACTION:** Can one service create multiple transactions? YES (amendments) → Keep separate
- **TRANSACTION ≠ FILING:** Can one transaction create no filing (rejection)? YES → Keep separate
- **TRANSACTION ≠ CASE:** Can one transaction trigger a case? YES (scrutiny) → Keep separate
- **DOCUMENT REQUIREMENT ≠ DOCUMENT INSTANCE:** Can one requirement have multiple instances (resubmission)? YES → Keep separate
- **REGISTRY RECORD ≠ TRANSACTION:** Is registry immutable while transaction is workflow? YES → Keep separate
- **PUBLIC REGISTRY ≠ TRANSACTIONAL SYSTEM:** Do they have different consistency/access models? YES → Keep separate

**All core distinctions pass necessity test.**

---

## 2. PERSON

**Definition:** Natural person with identity attributes, distinct from their portal account, roles, or legal relationships.

**Responsibility:** Identity & Access domain

**Ownership:** Self (the natural person); Platform maintains canonical representation

**Lifecycle:**
- Created: On first portal interaction or statutory registration (DIN)
- Updated: KYC updates, contact changes
- State: Active, Suspended, Deceased
- Never deleted: Audit trail preservation

**Relationships:**
- Person → Portal Account (1:N possible, typically 1:1 in MCA context)
- Person → DIN (1:1 for directors)
- Person → Company (via Director relationship)
- Person → LLP (via Partner relationship)
- Person → Credentials (DSC, Aadhaar, PAN)

**Persistent State:** YES — canonical identity record

**User-Facing:** Indirectly (via profile, KYC forms)

**Legally Meaningful:** YES — statutory obligations attach to natural persons, not accounts

**Key Attributes:**
- Legal name
- PAN, Aadhaar (where applicable)
- Contact details
- Nationality, residence
- KYC status

**Why Necessary:**
Separates natural person from:
- Their digital account (a person can exist without an account)
- Their roles (a person can have multiple roles across entities)
- Their credentials (DSC is not identity, it's a signing tool)

**VERDICT:** LOCKED ✓

---

## 3. PORTAL ACCOUNT

**Definition:** Digital access construct allowing authentication to the platform. Represents login identity, not legal authority.

**Responsibility:** Identity & Access domain

**Ownership:** Platform

**Lifecycle:**
- Created: User registration
- Active: Normal use
- Locked: Security violations, suspicious activity
- Suspended: Administrative action
- Closed: User request or administrative closure
- Never deleted: Audit trail

**Relationships:**
- Portal Account → Person (N:1 — multiple accounts could point to same person in edge cases)
- Portal Account → Authentication Credentials (password, OTP config)
- Portal Account → Session
- Portal Account → Role Assignments (via Entity Relationships)

**Persistent State:** YES — account status, preferences, security settings

**User-Facing:** YES — login identity

**Legally Meaningful:** NO — an account is technical access, not legal authority

**Key Attributes:**
- Email/mobile (login ID)
- Account type (Registered User, Business User subtypes)
- Account status
- Security settings (MFA config)
- Preferences

**Why Necessary:**
Authentication ≠ Legal Identity ≠ Authorization. A logged-in user has not yet established:
- Which entity they represent
- What role they're acting in
- What authority they have

**VERDICT:** LOCKED ✓

---

## 4. IDENTITY

**Definition:** Verified representation of who is acting in a transaction. Combines Person + Authentication + Verification Evidence.

**Responsibility:** Identity & Access domain

**Ownership:** Platform verification process

**Lifecycle:**
- Established: Login + identity proof
- Verified: KYC complete, credentials validated
- Active: Current session
- Expired: Session timeout, credential expiry

**Relationships:**
- Identity → Person (1:1 per session)
- Identity → Portal Account (1:1 per session)
- Identity → Credentials (DSC, Aadhaar-verified)
- Identity → Transaction (who initiated)

**Persistent State:** Transaction-scoped, but verification evidence persists

**User-Facing:** Indirectly (identity verification prompts)

**Legally Meaningful:** YES — "who acted" for audit/provenance

**Why Necessary:**
Separates:
- Person (permanent)
- Account (access tool)
- Identity (verified actor in a transaction context)

Example: Professional acting for multiple entities needs identity established before entity context selection.

**VERDICT:** LOCKED ✓

---

## 5. ROLE / CAPACITY

**Definition:** The capacity in which a person acts: Director, Partner, Professional, Authorized Representative, Company Staff, MCA Officer.

**Responsibility:** Identity & Access domain

**Ownership:** Determined by statutory registration (Director, Partner) or delegation (Professional, Staff)

**Lifecycle:**
- Appointed: Statutory filing or delegation
- Active: Current and valid
- Suspended: Disqualification, temporary suspension
- Resigned/Removed: Role end
- Expired: Time-bounded authority elapsed

**Relationships:**
- Person → Role (N:N — one person, many roles)
- Role → Entity (role is always contextual to an entity)
- Role → Authority (role enables certain authorities)

**Persistent State:** YES — role appointment history, effective dates

**User-Facing:** YES — explicit role selection in UI

**Legally Meaningful:** YES — statutory roles (Director, Partner) have legal obligations

**Why Necessary:**
**ROLE ≠ AUTHORITY:** Same role can have different permissions:
- Director of Company A (can sign)
- Director of Company B (cannot sign, if not authorized signatory)

Role describes capacity, not permission.

**VERDICT:** LOCKED ✓

---

## 6. ENTITY

**Definition:** Legal or registry subject: Company, LLP, or (in extended sense) Person as a regulatory subject.

**Responsibility:** Entity & Registry domain

**Ownership:** Registry (ROC/RD)

**Lifecycle:**
- Incorporated: Entity created
- Active: Normal operations
- Strike-off Initiated: Closure begun
- Dissolved: Entity no longer exists
- Restored: Revival after dissolution

**Relationships:**
- Entity → Person (via Director, Partner, Shareholder relationships)
- Entity → Charges
- Entity → Filings
- Entity → Obligations
- Entity → Transactions

**Persistent State:** YES — canonical registry record with bi-temporal history

**User-Facing:** YES — entity selection, entity profile

**Legally Meaningful:** YES — entities have statutory obligations

**Key Attributes:**
- CIN / LLPIN
- Name, type, category
- Registered office
- Capital / Contribution
- Status, incorporation date
- ROC jurisdiction

**Why Necessary:**
Central domain object. All services operate on entities. Separates entity (the company) from:
- People associated with it (directors, shareholders)
- Transactions about it (filings)
- Obligations it must meet (compliance)

**VERDICT:** LOCKED ✓

---

## 7. ENTITY RELATIONSHIP

**Definition:** Association between a Person and an Entity, defining role and effective period: Director-Company, Partner-LLP, Shareholder-Company.

**Responsibility:** Entity & Registry domain (for statutory relationships) and Identity & Access domain (for authority derivation)

**Ownership:** Registry (for statutory relationships), Entity + Person (for authorization relationships)

**Lifecycle:**
- Established: Statutory filing or delegation
- Active: Current relationship
- Modified: Changes in shareholding, designation
- Ended: Resignation, removal, transfer
- Historical: Past relationship

**Relationships:**
- Entity Relationship → Person (N:1)
- Entity Relationship → Entity (N:1)
- Entity Relationship → Role (1:1 or 1:N)
- Entity Relationship → Authority (derivation basis)

**Persistent State:** YES — relationship history with effective dates, bi-temporal

**User-Facing:** Indirectly (entity selection UI, authority checks)

**Legally Meaningful:** YES — Director-Company is a statutory relationship with filing obligations

**Why Necessary:**
Separates:
- Person (identity)
- Entity (legal subject)
- Role (capacity)
- Relationship (the link with effective dates and status)

Example: Same person is Director of Entity A and Partner of Entity B → two distinct Entity Relationships.

**VERDICT:** LOCKED ✓

---

## 8. AUTHORITY

**Definition:** Legally/operationally permitted scope of action for a given [actor + entity + transaction type + conditions]. Not a static property of a role.

**Responsibility:** Identity & Access domain

**Ownership:** Derived from: statutory law, entity constitution, delegation records, transaction rules

**Lifecycle:**
- Evaluated: Per transaction, not persisted as static assignment
- Cached: Performance optimization
- Revoked: Delegation withdrawal, role change
- Expired: Time-bounded or condition-based

**Relationships:**
- Authority ← Identity + Role + Entity Relationship + Delegation + Service + Legal Rules
- Authority → Transaction (authorization decision)

**Persistent State:** Authorization decisions are audited; authority derivation rules are configured

**User-Facing:** Indirectly (permission errors, authorization prompts)

**Legally Meaningful:** YES — who is authorized to sign/submit is legally critical

**Why Necessary:**
**AUTHORITY ≠ ROLE:** Director does not automatically mean "can submit all filings."
- Authorized signatory designation
- Delegation scope
- Service-specific rules
- Entity-specific configuration

Authority is contextual, not inherent.

**VERDICT:** LOCKED ✓

---

## 9. DELEGATION

**Definition:** Authority explicitly granted by one actor (grantor) to another (grantee), with defined scope, entity, services, and validity period.

**Responsibility:** Identity & Access domain

**Ownership:** Grantor (typically entity or senior role), Platform records and enforces

**Lifecycle:**
- Granted: Delegation record created
- Active: Within validity period, not revoked
- Revoked: Explicit withdrawal by grantor
- Expired: End date reached
- Historical: Past delegation

**Relationships:**
- Delegation → Grantor (Person/Entity)
- Delegation → Grantee (Person)
- Delegation → Entity (scope)
- Delegation → Services (scope)
- Delegation → Authority (grants specific authorities)

**Persistent State:** YES — delegation records with audit trail

**User-Facing:** YES — professional grants delegation to staff; entity grants authority to representative

**Legally Meaningful:** YES — statutory filings may require evidence of authority

**Key Attributes:**
- Grantor, Grantee
- Entity scope, Service scope
- Can sign? Can pay? Can submit?
- Start/end dates
- Revocation status
- Evidence reference

**Why Necessary:**
Professional staff scenario:
- Professional (grantor) delegates draft/edit authority to Staff (grantee)
- Staff can prepare, but Professional must sign
- Without Delegation object, this cannot be modeled cleanly

**VERDICT:** LOCKED ✓

---

## 10. INTENT

**Definition:** User's desired outcome, independent of form number or implementation. Examples: "start a company," "change registered office," "understand my obligations."

**Responsibility:** Service & Transaction domain (resolution), Search & Discovery domain (intent capture)

**Ownership:** User expresses intent; Platform resolves to service

**Lifecycle:**
- Expressed: User search, navigation, prompt
- Resolved: Matched to Service Definition
- Executed: Becomes Transaction

**Relationships:**
- Intent → Service (1:N possible — one intent may offer multiple service paths)
- Intent → Entity (contextual to entity type)
- Intent → Search Query

**Persistent State:** Minimal — intent logged for analytics, but not persisted as domain object

**User-Facing:** YES — primary entry point for services

**Legally Meaningful:** NO — intent is UX concept; legal event is the resulting transaction

**Why Necessary:**
**FORM ≠ SERVICE ≠ INTENT:** Users think "I need to change my address," not "I need Form INC-22."
Intent-driven navigation requires Intent → Service → Form resolution.

**VERDICT:** LOCKED ✓

---

## 11. SERVICE

**Definition:** Business capability orchestrating requirements, data, documents, rules, payment, workflow, and outcome. Services compose platform capabilities + service-specific legal logic.

**Responsibility:** Service & Transaction domain

**Ownership:** Platform (orchestration), Regulatory framework (legal definition)

**Lifecycle:**
- Defined: Service specification created
- Active: Available for use
- Deprecated: Superseded by new service
- Archived: Historical reference

**Relationships:**
- Service → Intent (N:1 — multiple intents may resolve to same service)
- Service → Form (1:N — service may use multiple forms)
- Service → Transaction (1:N — service creates transactions)
- Service → Obligation (service satisfies obligation)
- Service → Rules (eligibility, validation, fee, workflow)

**Persistent State:** YES — service definition, rules, versioning

**User-Facing:** YES — service is primary interaction unit

**Legally Meaningful:** YES — services implement statutory requirements

**Key Attributes:**
- Service ID, name, description
- Intent mapping
- Legal basis (Act, Rule, Section)
- Entity applicability
- Requirements (data, documents, signatures)
- Rules (eligibility, validation, fee)
- Workflow configuration
- Outcomes

**Why Necessary:**
**SERVICE ≠ FORM:** SPICe+ service orchestrates 11 forms (INC-32, INC-33, INC-34, AGILE-PRO, etc.).
Service is the composition layer; forms are legal artifacts within the service.

**VERDICT:** LOCKED ✓

---

## 12. FORM

**Definition:** Legal/digital submission interface or artifact. Forms are the regulatory contract format, not the service itself.

**Responsibility:** Service & Transaction domain (form as interface), Document Management domain (form as document)

**Ownership:** MCA (legal definition), Platform (digital implementation)

**Lifecycle:**
- Defined: Form prescribed by rules
- Active: Current version
- Revised: New version supersedes old
- Deprecated: No longer accepted

**Relationships:**
- Form → Service (N:1 — forms are used by services)
- Form → Transaction Data (captures data)
- Form → Document Requirements (specifies attachments)
- Form → Signing Requirements
- Form → Fee Rules

**Persistent State:** YES — form schema, validation rules, version history

**User-Facing:** YES — forms are presented to users, but ideally through service context

**Legally Meaningful:** YES — statutory forms are legal instruments

**Why Necessary:**
**FORM ≠ SERVICE:** SPICe+ is one service; it produces 11 forms.
Annual compliance is one conceptual service; it uses AOC-4 + MGT-7 + other forms.

Forms are artifacts; services are orchestrations.

**VERDICT:** LOCKED ✓

---

## 13. OBLIGATION

**Definition:** Regulatory duty applicable to an entity under defined conditions. Obligations are first-class domain objects, not just UI reminders.

**Responsibility:** Regulatory Compliance domain

**Ownership:** Derived from law (obligation template) + entity profile (obligation instance)

**Lifecycle:**
- Applicable: Obligation applies to entity based on rules
- Due: Within due period
- Overdue: Past due date
- Completed: Satisfied by transaction
- Exempted: Entity exempt
- Waived: Regulatory waiver

**Relationships:**
- Obligation → Entity (N:1)
- Obligation → Regulatory Rule (obligation template)
- Obligation → Service (how to comply)
- Obligation → Transaction (completion evidence)
- Obligation → Next Obligation (cascading)

**Persistent State:** YES — obligation instances with status, due dates, completion records

**User-Facing:** YES — central to My Workspace

**Legally Meaningful:** YES — obligations are statutory duties

**Key Attributes:**
- Entity
- Obligation type (annual return, director KYC, etc.)
- Legal basis
- Due date
- Status
- Completed transaction reference
- Next obligation trigger

**Why Necessary:**
Without Obligation as first-class object:
- Compliance becomes passive (user browses forms)
- "What's due next?" cannot be answered
- Regulatory changes affect form UI directly, not obligation rules

**VERDICT:** LOCKED ✓

---

## 14. TRANSACTION

**Definition:** Persistent user/system interaction attempting a service. Has lifecycle, state, and audit trail. Distinct from Filing (legal record) and Case (regulatory proceeding).

**Responsibility:** Service & Transaction domain

**Ownership:** Initiating user + Entity

**Lifecycle:**
- Draft: In preparation
- Validating: Rules applied
- Signing: DSC collection
- Payment: Fee processing
- Submitted: SRN issued
- Processing: STP or manual review
- Query: Deficiency raised
- Completed: Approved/Rejected
- Abandoned: User did not complete

**Relationships:**
- Transaction → Service (N:1)
- Transaction → Entity (N:1)
- Transaction → Actor (who initiated)
- Transaction → Transaction Data
- Transaction → Transaction Documents
- Transaction → Payments
- Transaction → Signatures
- Transaction → Filing (if approved and filed)
- Transaction → Case (if escalates to scrutiny/adjudication)

**Persistent State:** YES — full transaction history, state transitions, SRN

**User-Facing:** YES — users track transactions by SRN

**Legally Meaningful:** YES — audit trail of who did what when

**Why Necessary:**
**TRANSACTION ≠ FILING:** Not all transactions produce filings (rejections, abandoned drafts).
**TRANSACTION ≠ CASE:** Regulatory cases are distinct lifecycle (scrutiny, adjudication).

Transaction is the user's interaction with the platform; Filing is the legal record produced.

**VERDICT:** LOCKED ✓

---

## 15. FILING

**Definition:** Legal submission/record produced through a service. A filing is the immutable legal artifact resulting from an approved transaction.

**Responsibility:** Entity & Registry domain

**Ownership:** Entity (filer), Registry (custodian)

**Lifecycle:**
- Submitted: Transaction approved, SRN issued
- Registered: Registry record created
- Public: Accessible per access rules
- Archived: Per retention policy

**Relationships:**
- Filing → Transaction (1:1 — produced by transaction)
- Filing → Entity (N:1 — entity's filing)
- Filing → Form (what form was filed)
- Filing → Documents (attached evidence)
- Filing → Registry Record (updates registry)

**Persistent State:** YES — immutable filing record

**User-Facing:** YES — filing history, certificates

**Legally Meaningful:** YES — filing is the statutory submission

**Why Necessary:**
**FILING ≠ TRANSACTION:** Transaction includes draft, validation, payment, review. Filing is the final legal record.

A rejected transaction is not a filing. A draft is not a filing. Filing is the outcome, not the process.

**VERDICT:** LOCKED ✓

---

## 16. CASE

**Definition:** Regulatory/grievance matter with its own evidence, actors, decisions, and lifecycle. Distinct from transactions (user-initiated filings).

**Responsibility:** Regulatory Oversight domain

**Ownership:** MCA (regulator), Case Officer (assigned)

**Lifecycle:**
- Created: Case opened (complaint, scrutiny trigger, adjudication notice)
- Under Investigation: Evidence collection, review
- Hearing Scheduled: Formal proceedings
- Order Issued: Decision made
- Closed: Case resolved
- Appealed: Appeal filed

**Relationships:**
- Case → Entity (subject of case)
- Case → Transaction (may originate from transaction review)
- Case → Notices (issued to parties)
- Case → Responses (from parties)
- Case → Orders (decisions)
- Case → Officers (assigned investigators, adjudicators)

**Persistent State:** YES — complete case file with immutable audit trail

**User-Facing:** YES — parties receive notices, respond to queries, view orders

**Legally Meaningful:** YES — cases produce legally binding orders

**Why Necessary:**
**CASE ≠ TRANSACTION:** Complaint service creates a Case, not a Filing.
Scrutiny creates a Case, not a Filing.
Adjudication is a Case, not a Filing.

Cases have different workflows (notice → response → hearing → order) than filings (draft → submit → review → approve).

**VERDICT:** LOCKED ✓

---

## 17. DOCUMENT REQUIREMENT

**Definition:** Rule specifying what evidence is required for a service/transaction. Different from the actual document uploaded.

**Responsibility:** Service & Transaction domain (requirements definition), Document Management domain (requirement enforcement)

**Ownership:** Regulatory framework (legal requirement), Platform (implementation)

**Lifecycle:**
- Defined: Requirement specified in service rules
- Active: Current requirement
- Revised: Requirement changed by regulatory update
- Deprecated: No longer required

**Relationships:**
- Document Requirement → Service (N:1)
- Document Requirement → Form (N:1)
- Document Requirement → Rules (conditional requirements)
- Document Requirement → Document Instances (1:N)

**Persistent State:** YES — requirement definitions with versioning

**User-Facing:** YES — displayed as "Documents Required"

**Legally Meaningful:** YES — statutory requirement

**Why Necessary:**
**DOCUMENT REQUIREMENT ≠ DOCUMENT INSTANCE:** 
Requirement: "Proof of registered office address"
Instance: User uploads "rent_agreement.pdf"

If upload is rejected, user uploads "ownership_deed.pdf" (second instance, same requirement).

**VERDICT:** LOCKED ✓

---

## 18. DOCUMENT INSTANCE

**Definition:** Specific uploaded/generated/signed document. An instance of a document requirement or standalone document.

**Responsibility:** Document Management domain

**Ownership:** Uploader (user/entity) initially; custody transfers to Registry for filings

**Lifecycle:**
- Uploaded: User uploads
- Validating: Format, size, signature validation
- Validated: Passed checks
- Attached: Linked to transaction
- Signed: DSC applied
- Submitted: Included in filing
- Archived: Permanent storage

**Relationships:**
- Document Instance → Document Requirement (N:1, if required doc)
- Document Instance → Transaction (N:1)
- Document Instance → Signer (if signed)
- Document Instance → Storage (file reference)

**Persistent State:** YES — document file, metadata, validation status

**User-Facing:** YES — upload interface, document viewer

**Legally Meaningful:** YES — submitted documents are legal evidence

**Key Attributes:**
- Document type
- Filename, size, format
- Upload date, uploader
- Validation status
- DSC signatures (if any)
- Transaction reference
- Storage location

**Why Necessary:**
Separates requirement (what's needed) from instance (actual file). Supports resubmission, multiple uploads, versioning.

**VERDICT:** LOCKED ✓

---

## 19. PAYMENT

**Definition:** Fee payment associated with a transaction. Separate state from transaction state.

**Responsibility:** Payment & Fees domain

**Ownership:** Payer (user/entity), Platform processes, Gateway executes

**Lifecycle:**
- Calculated: Fee computed
- Pending: Payment initiated
- In Progress: Gateway processing
- Confirmed: Payment successful
- Failed: Payment failed
- Refunded: Reversal processed

**Relationships:**
- Payment → Transaction (N:1 — one transaction may require multiple payments)
- Payment → Fee Rule (what fee applies)
- Payment → Payer (who paid)
- Payment → Gateway Reference

**Persistent State:** YES — payment records, reconciliation

**User-Facing:** YES — payment interface, receipts, challan

**Legally Meaningful:** YES — proof of payment for statutory fees

**Why Necessary:**
**PAYMENT STATE ≠ TRANSACTION STATE:** Transaction can be validated and ready for submission, but payment pending.
Payment can fail while transaction remains in draft.

Separate state machines required.

**VERDICT:** LOCKED ✓

---

## 20. SIGNATURE

**Definition:** Digital signature applied to transaction/document using DSC. Represents legally binding signing act.

**Responsibility:** Identity & Access domain (signer verification), Document Management domain (signature attachment)

**Ownership:** Signer (person), Certificate Authority (DSC issuer)

**Lifecycle:**
- Required: Service determines signing requirement
- Pending: Awaiting signer
- Initiated: DSC application begun
- Completed: Signature applied
- Verified: Signature validated
- Failed: Signature invalid or expired

**Relationships:**
- Signature → Signer (Person)
- Signature → DSC (credential used)
- Signature → Transaction (what was signed)
- Signature → Document Instance (signed document)
- Signature → Timestamp

**Persistent State:** YES — signature metadata, verification records

**User-Facing:** YES — DSC signing interface

**Legally Meaningful:** YES — DSC signatures are legally binding

**Why Necessary:**
**SIGNATURE STATE ≠ TRANSACTION STATE:** Transaction can be draft-complete but awaiting signatures.
Multi-party transactions require multiple signatures in sequence or parallel.

Separate orchestration required.

**VERDICT:** LOCKED ✓

---

## 21. WORKFLOW

**Definition:** Orchestration of processing, routing, review, decision, and state transitions. Manages STP vs manual routing, officer assignment, case progression.

**Responsibility:** Workflow & Orchestration domain

**Ownership:** Platform (execution), Rules Engine (routing decisions)

**Lifecycle:**
- Initiated: Transaction submitted or case created
- Routing: STP eligibility evaluated
- Processing: Automated or manual steps
- Review: Human intervention (if required)
- Decision: Approval/rejection/query
- Completed: Workflow terminal state

**Relationships:**
- Workflow → Transaction or Case (1:1 — each transaction/case has workflow instance)
- Workflow → Rules (routing, STP eligibility)
- Workflow → Officer Assignment (manual review)
- Workflow → State Machines (orchestrates multiple states)

**Persistent State:** YES — workflow instance, step history, routing decisions

**User-Facing:** Indirectly (via transaction status, "under review" messages)

**Legally Meaningful:** NO directly, but audit trail YES

**Why Necessary:**
Separates orchestration logic from domain logic. Allows:
- STP vs manual routing per service
- Officer assignment algorithms
- Query/resubmission loops
- Saga patterns for distributed transactions

Without explicit workflow, orchestration becomes embedded in services (high coupling).

**VERDICT:** LOCKED ✓

---

## 22. REGISTRY RECORD

**Definition:** Authoritative record in the public/regulatory registry: Company master record, Director record, Charge record, Filing record. Immutable history, bi-temporal data model.

**Responsibility:** Entity & Registry domain

**Ownership:** MCA (registrar authority), ROC/RD (jurisdiction)

**Lifecycle:**
- Created: Entity incorporated or record registered
- Updated: Filing approved, registry updated
- Amended: Correction/rectification
- Historical: Superseded by new version
- Archived: Per retention policy

**Relationships:**
- Registry Record → Entity (N:1 — entity's records)
- Registry Record → Filing (source of record)
- Registry Record → Effective Dates (bi-temporal)
- Registry Record → Public Access (entitlement rules)

**Persistent State:** YES — immutable append-only log, bi-temporal (transaction time + valid time)

**User-Facing:** YES — public search, entity profile, certified copies

**Legally Meaningful:** YES — registry is authoritative legal record

**Why Necessary:**
**REGISTRY RECORD ≠ TRANSACTION:** Registry is the outcome, not the process.

Transaction may be rejected → no registry update.
Registry must preserve history → immutable.
Transactional system can update frequently → eventual consistency.

Separate domains with explicit synchronization.

**VERDICT:** LOCKED ✓

---

## 23. OUTCOME

**Definition:** Legally/business-relevant result of a service or case. What happened as a consequence of the transaction/case.

**Responsibility:** Service & Transaction domain (transaction outcomes), Regulatory Oversight domain (case outcomes)

**Ownership:** Platform (records), Regulator (for case outcomes)

**Lifecycle:**
- Determined: Decision made (approval/rejection/order)
- Recorded: Outcome persisted
- Notified: Parties informed
- Effective: Outcome takes legal effect

**Relationships:**
- Outcome → Transaction or Case (1:1)
- Outcome → Registry Record (may create/update)
- Outcome → Next Obligation (may trigger)
- Outcome → Notification (triggers alerts)

**Persistent State:** YES — outcome records

**User-Facing:** YES — "Your filing was approved," "Case closed with order"

**Legally Meaningful:** YES — outcomes have legal effect

**Why Necessary:**
Separates:
- Process (workflow, states)
- Outcome (what resulted)

Example: Transaction state = "Completed," Outcome = "Approved" or "Rejected" (two different outcomes, same terminal state).

**VERDICT:** LOCKED ✓

---

## 4. Composite Concepts (Clarifications Added)

### 4.1 RULE

**Status:** LOCKED IN PRINCIPLE

**Definition:** Versioned, traceable expression of a regulatory/business condition. Rules are data, not hard-coded logic.

**Why Needed:** Regulatory changes must not require code rewrite. Rules must link to legal source.

**Types:**
- Eligibility rules
- Validation rules
- Fee rules
- Workflow routing rules
- Access rules
- Deadline rules

**Responsibility:** Shared across all domains (each domain has its rules); Regulatory Compliance domain owns rule versioning and provenance.

**VERDICT:** LOCKED ✓

---

### 4.2 EVENT

**Status:** LOCKED IN PRINCIPLE (Not in original vocabulary, but required)

**Definition:** Significant occurrence within a domain that other domains may need to react to. Enables loose coupling via event-driven architecture.

**Examples:**
- Entity incorporated
- Filing submitted
- Payment confirmed
- Obligation due
- Case opened
- Order issued

**Why Needed:** 
- Notifications must react to events
- Compliance engine must react to entity changes
- Workflow must react to payment confirmation

**Responsibility:** Each domain publishes its own events; Notification & Events domain orchestrates reactions.

**VERDICT:** LOCKED ✓

---

### 4.3 NOTICE

**Status:** LOCKED (Subset of Case)

**Definition:** Formal communication from regulator to entity/person, typically in a case context. Requires response by deadline.

**Examples:**
- Query/Deficiency notice
- Show-cause notice
- Hearing notice
- Order notice

**Why Needed:** Cases involve formal procedural communications with legal weight, not just transactional messages.

**Responsibility:** Regulatory Oversight domain

**VERDICT:** LOCKED ✓

---

## 5. Rejected Concepts / Mergers

### 5.1 WORKSPACE (Rejected as Entity)

**Decision:** NOT a domain entity, it's a UX aggregation layer.

My Workspace presents:
- Obligations (from Compliance domain)
- Transactions (from Transaction domain)
- Notices (from Oversight domain)
- Documents (from Document domain)

Workspace is a view, not a core object.

---

### 5.2 NOTIFICATION vs EVENT (Kept Separate)

**Event:** Domain occurrence (internal)
**Notification:** Communication to user (external)

One event may trigger multiple notifications (email, SMS, in-app). Keep separate.

---

### 5.3 FORM INSTANCE vs TRANSACTION DATA (Merged into TRANSACTION DATA)

**Decision:** Transaction Data captures form data. No need for separate Form Instance entity.

Transaction → Service → Form → Transaction Data (captured).

---

## 6. Cross-Cutting Attributes

### 6.1 Provenance (All Consequential Entities)

Every important domain object should carry:
- Created by (actor)
- Created at (timestamp)
- Source (legal basis, rule version)
- Modified by, Modified at
- Version

**Applies to:** Entity, Transaction, Filing, Case, Obligation, Registry Record, Rule, Payment, Signature, Document

---

### 6.2 Versioning (Regulatory Objects)

**Versioned entities:**
- Rule
- Form
- Service Definition
- Fee Rule
- Obligation Template
- Regulatory Record (bi-temporal)

Versioning enables: regulatory change management, historical queries, audit.

---

### 6.3 Status/State (Lifecycle Objects)

**State-carrying entities:**
- Transaction (Draft, Submitted, Processing, Completed)
- Case (Created, Under Investigation, Hearing, Closed)
- Obligation (Applicable, Due, Overdue, Completed)
- Payment (Pending, Confirmed, Failed)
- Signature (Pending, Completed, Verified, Failed)
- Portal Account (Active, Locked, Suspended, Closed)
- Entity (Active, Strike-off, Dissolved)

State machines required for each.

---

## 7. Unnecessary Distinctions Considered and Rejected

### 7.1 Could ROLE and AUTHORITY be merged?

**Test:** Can one role have multiple authorities?

YES: Director of Company A (can sign) vs Director of Company B (cannot sign, if not authorized signatory).

**Conclusion:** Keep separate. Role describes capacity; Authority describes permission.

---

### 7.2 Could SERVICE and FORM be merged?

**Test:** Can one service use multiple forms?

YES: SPICe+ uses 11 forms. Annual compliance uses AOC-4 + MGT-7.

**Conclusion:** Keep separate. Service orchestrates; Form is interface.

---

### 7.3 Could TRANSACTION and FILING be merged?

**Test:** Can a transaction exist without producing a filing?

YES: Rejected transactions, abandoned drafts.

**Conclusion:** Keep separate. Transaction is process; Filing is outcome.

---

### 7.4 Could OBLIGATION and SERVICE be merged?

**Test:** Can one obligation be satisfied by multiple services?

YES: Director appointment obligation satisfied by DIR-12 or SPICe+ (if during incorporation).

Can one service satisfy multiple obligations?

YES: SPICe+ satisfies incorporation + name reservation + DIN application + address registration.

**Conclusion:** Keep separate. Obligation is duty; Service is solution.

---

### 7.5 Could REGISTRY RECORD and ENTITY be merged?

**Test:** Is registry record simply the current entity state?

NO: Registry must preserve full history (bi-temporal). Entity is logical object; Registry Record is historical fact log.

**Conclusion:** Keep separate but closely related. Registry Record updates Entity.

---

## 8. Vocabulary Integrity Check

### 8.1 Circular Dependency Test

✓ Person does not require Account to be defined  
✓ Account does not require Person (can define Account independently)  
✓ Identity composes Person + Account (dependent, but Person and Account are independent)  
✓ Role does not require Authority to be defined  
✓ Entity does not require Transaction to be defined  
✓ Service does not require Transaction (service can be defined before execution)  
✓ Transaction depends on Service, but Service is defined first  
✓ Obligation does not require Transaction (obligation exists before fulfillment)

**No circular dependencies detected.**

---

### 8.2 Ambiguity Test

For each pair of concepts, ask: "Could these be confused in conversation?"

**Person vs Account:** Could confuse. MITIGATION: Always say "Portal Account" when referring to login.

**Role vs Authority:** Could confuse. MITIGATION: Use "Role (capacity)" vs "Authority (permission)".

**Service vs Form:** Already distinct in MCA parlance.

**Transaction vs Filing:** Could confuse. MITIGATION: "Transaction (SRN)" vs "Filing (legal record)".

**Case vs Transaction:** Distinct domains, low confusion risk.

**Document Requirement vs Document Instance:** Clear in context ("requirement" vs "uploaded document").

**Payment vs Fee:** Payment is act/state; Fee is amount. Clear.

**Rule vs Regulation:** Rule is machine rule; Regulation is legal instrument. Context distinguishes.

---

### 8.3 Completeness Test

**Missing concepts:**
- EVENT (added in Section 4.2)
- NOTICE (added in Section 4.3)
- REGULATORY PROFILE (implicit in Obligation, but should be explicit)

**REGULATORY PROFILE (Addition):**

**Definition:** Entity's compliance profile determining which obligations apply: entity type, capital, turnover, jurisdiction, listing status, special categories.

**Responsibility:** Regulatory Compliance domain

**Why Needed:** Applicability rules require profile: "Annual return due date depends on entity type + financial year" → needs Regulatory Profile.

**VERDICT:** LOCKED ✓

---

## 9. Final Canonical Vocabulary (23 Concepts)

### 9.1 Identity & Authorization Layer (9)

1. PERSON — Natural person
2. PORTAL ACCOUNT — Digital access
3. IDENTITY — Verified actor
4. ROLE / CAPACITY — Capacity of action
5. ENTITY RELATIONSHIP — Person ↔ Entity link
6. AUTHORITY — Contextual permission
7. DELEGATION — Granted authority
8. SIGNATURE — DSC signing act
9. CREDENTIAL — DSC, Aadhaar, PAN

### 9.2 Domain Core Layer (7)

10. ENTITY — Company, LLP, Person (as subject)
11. SERVICE — Orchestrated capability
12. TRANSACTION — User interaction lifecycle
13. FILING — Legal submission record
14. CASE — Regulatory/grievance matter
15. OBLIGATION — Regulatory duty
16. REGISTRY RECORD — Authoritative record

### 9.3 Supporting Layer (7)

17. FORM — Legal submission interface/artifact
18. DOCUMENT REQUIREMENT — Evidence rule
19. DOCUMENT INSTANCE — Actual file
20. PAYMENT — Fee payment
21. WORKFLOW — Orchestration
22. RULE — Versioned condition
23. OUTCOME — Result

### 9.4 Cross-Cutting (3 clarifications added)

24. EVENT — Domain occurrence (enables decoupling)
25. NOTICE — Formal communication (within Case)
26. REGULATORY PROFILE — Entity compliance profile (for applicability)

---

## 10. Domain Ownership Table

| **Concept** | **Primary Domain** | **Secondary Domains** |
|---|---|---|
| Person | Identity & Access | — |
| Portal Account | Identity & Access | — |
| Identity | Identity & Access | — |
| Role / Capacity | Identity & Access | Entity & Registry (statutory roles) |
| Entity Relationship | Identity & Access, Entity & Registry | — |
| Authority | Identity & Access | — |
| Delegation | Identity & Access | — |
| Signature | Identity & Access | Document Management |
| Credential | Identity & Access | — |
| Entity | Entity & Registry | — |
| Service | Service & Transaction | — |
| Transaction | Service & Transaction | — |
| Filing | Entity & Registry | — |
| Case | Regulatory Oversight | — |
| Obligation | Regulatory Compliance | — |
| Registry Record | Entity & Registry | — |
| Form | Service & Transaction | — |
| Document Requirement | Service & Transaction | Document Management |
| Document Instance | Document Management | — |
| Payment | Payment & Fees | — |
| Workflow | Workflow & Orchestration | — |
| Rule | All domains (each owns its rules) | Regulatory Compliance (versioning) |
| Outcome | Service & Transaction, Regulatory Oversight | — |
| Event | Notification & Events | All domains (publishers) |
| Notice | Regulatory Oversight | — |
| Regulatory Profile | Regulatory Compliance | — |

---

## 11. Locked Distinctions (Non-Negotiable)

The following distinctions are **architecturally essential** and must not be collapsed:

1. **IDENTITY ≠ AUTHORITY:** One person can have different authorities in different contexts
2. **ACCOUNT ≠ IDENTITY:** Login is not legal identity
3. **IDENTITY ≠ ROLE:** Identity is who; role is capacity
4. **ROLE ≠ AUTHORITY:** Same role can have different permissions
5. **ENTITY ≠ ACCOUNT:** Company is not a user account
6. **FORM ≠ SERVICE:** Forms are artifacts; services orchestrate
7. **SERVICE ≠ TRANSACTION:** Service is definition; transaction is instance
8. **TRANSACTION ≠ FILING:** Not all transactions produce filings
9. **TRANSACTION ≠ CASE:** Cases have different lifecycle
10. **DOCUMENT REQUIREMENT ≠ DOCUMENT INSTANCE:** Rule vs actual file
11. **PAYMENT STATE ≠ TRANSACTION STATE:** Separate state machines
12. **CASE STATE ≠ TRANSACTION STATE:** Different workflows
13. **REGISTRY RECORD ≠ TRANSACTION:** Immutable outcome vs mutable process
14. **PUBLIC REGISTRY ≠ TRANSACTIONAL SYSTEM:** Different consistency models
15. **LEGAL RULE ≠ UI LOGIC:** Rules are data, not hard-coded
16. **CURRENT MCA ≠ FUTURE ARCHITECTURE:** Evidence vs design

---

## 12. Vocabulary Stability

**LOCKED (23 concepts):** All pass coherence, necessity, and integrity tests.

**STABLE:** No concepts removed, 3 clarifications added (Event, Notice, Regulatory Profile).

**READY FOR PHASE 3:** YES. This vocabulary is sufficient and necessary for Phase 3 product design.

---

## 13. Conclusion

**Result:** ✓ PASS

All 22 original concepts survive stress testing. 3 additional concepts identified (Event, Notice, Regulatory Profile). Zero unnecessary distinctions. Zero circular dependencies. Zero ambiguities that cannot be mitigated by naming convention.

**Status:** LOCKED — This vocabulary becomes the canonical project terminology for Phase 3.

**Next:** Service Architecture Stress Test (Part 2) will use this vocabulary to test service composition against 10 materially different MCA patterns.

---

**END OF PART 1**
