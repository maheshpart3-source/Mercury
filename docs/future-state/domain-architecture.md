# MCA Future-State Domain Architecture

**Purpose:** Define the bounded domains for the future MCA digital regulatory platform with clear purposes, responsibilities, owned data, relationships, lifecycles, inputs, outputs, events, actors, and dependencies.

**Method:** Domain-Driven Design principles applied to regulatory platform context.

**Status:** FUTURE-STATE PROPOSAL - Not a claim about current MCA implementation.

---

## Domain Architecture Overview

The future MCA platform is organized into **12 bounded domains** that represent distinct areas of responsibility with clear boundaries, owned data, and defined interactions.

### Domain Taxonomy

```
┌─────────────────────────────────────────────────────────────────────┐
│                    MCA REGULATORY PLATFORM                           │
└─────────────────────────────────────────────────────────────────────┘

CORE REGULATORY DOMAINS                    PLATFORM CAPABILITY DOMAINS
├─ Identity & Access                       ├─ Document Management
├─ Entity & Registry                       ├─ Workflow & Orchestration
├─ Regulatory Compliance                   ├─ Notification & Events
├─ Service & Transaction                   ├─ Search & Discovery
└─ Regulatory Oversight                    └─ Audit & Provenance

SUPPORTING DOMAINS
├─ Payment & Fees
└─ Content & Help
```

---

## DOMAIN 1: Identity & Access

### Purpose
Establish and verify who is acting, in what capacity, for which entity, with what authority, and what they are permitted to do.

### Core Responsibility
**Answer the question:** "Who is this actor, what role are they acting in, which entity are they representing, do they have authority to perform this action, and under what constraints?"

### Bounded Context
Identity, authentication, authorization, role management, entity relationships, delegation, and access control.

**Out of scope:** Business entity data (belongs to Entity & Registry), transaction execution (belongs to Service & Transaction).

### Owned Data

**Core Entities:**
1. **Person**
   - Natural person identity
   - PAN, Aadhaar (identifiers)
   - Contact information
   - Verification status
   - KYC status

2. **Portal Account**
   - Login credentials
   - Authentication state
   - Account type (Registered User, Business User subtypes)
   - Multi-factor authentication settings
   - Session management

3. **DIN (Director Identification Number)**
   - DIN identifier
   - Link to Person
   - Allotment date
   - Status (Active, Deactivated, Disqualified)
   - KYC compliance status
   - Annual KYC due date

4. **Credential (DSC)**
   - Certificate identifier
   - Certificate class (Class 2, Class 3)
   - Issuing CA
   - Valid from/to dates
   - Certificate status
   - Public key
   - Binding to Person

5. **Role**
   - Role type (Director, Professional, Company User, Professional Staff, Partner, Designated Partner, Auditor, etc.)
   - Entity scope
   - Effective dates
   - Status

6. **Entity Relationship**
   - Person ↔ Entity association
   - Relationship type (Director, Partner, Professional Representative, Authorized User, etc.)
   - Effective from/to dates
   - Appointment/cessation details
   - Status

7. **Authority**
   - Permission type
   - Scope (service, action, entity)
   - Source (statutory, delegated, system)
   - Effective dates
   - Constraints

8. **Delegation**
   - Grantor (person/entity granting authority)
   - Grantee (person receiving authority)
   - Delegated permissions
   - Entity scope
   - Service scope
   - Transaction scope
   - Signing authority scope
   - Payment authority scope
   - Validity period
   - Evidence/mandate reference
   - Revocation status

### Relationships

**Internal:**
- Person → Portal Account (1:1 or 1:N for professionals managing multiple accounts)
- Person → DIN (1:N - one person may hold multiple DINs across jurisdictions, though typically 1:1)
- Person → Credential (1:N - multiple DSCs, different classes)
- Person → Entity Relationship (1:N - one person, multiple entities)
- Entity Relationship → Role (N:1 - relationship carries role)
- Person → Authority (1:N - multiple authorities from different sources)
- Authority → Delegation (1:N - authorities can be delegated)

**External (to other domains):**
- Entity Relationship → Entity & Registry domain (which entity?)
- Authority → Service & Transaction domain (what can be done?)
- Delegation → Regulatory Compliance domain (professional representation)

### Lifecycle

**Person:**
```
Unregistered → Registered → Verified → KYC Compliant → Active
                                ↓
                          Suspended → Reactivated
                                ↓
                            Closed (historical record retained)
```

**Portal Account:**
```
Created → Email Verified → Active → Locked (failed auth) → Unlocked
                                ↓
                            Suspended → Reactivated
                                ↓
                            Closed
```

**DIN:**
```
Applied → Allotted → Active → KYC Due → KYC Compliant
                        ↓
                  Deactivated (for non-compliance)
                        ↓
                  Disqualified (statutory)
```

**Credential (DSC):**
```
Issued → Active → Expiring Soon → Expired
                    ↓
              Revoked / Suspended
```

**Entity Relationship:**
```
Proposed → Appointed → Active → Cessation Notified → Ceased
                         ↓
                    Suspended (interim orders)
```

**Delegation:**
```
Created → Active → Expiring Soon → Expired
                     ↓
                 Revoked
```

### Inputs

**From users:**
- Registration requests
- Authentication attempts
- Role activation requests
- Entity relationship proposals (appointment of director, partner, etc.)
- Delegation grants
- Credential registration
- Profile updates
- KYC submissions

**From Entity & Registry:**
- Entity creation events (new company/LLP triggers relationship creation)
- Entity status changes (strike-off triggers relationship termination)
- Statutory disqualification events

**From Regulatory Oversight:**
- Disqualification orders
- Suspension orders
- Debarment orders

### Outputs

**To users:**
- Authentication tokens
- Authorization decisions (permit/deny with reasons)
- Active role context
- Active entity context
- Available actions for current context

**To Service & Transaction:**
- Authorization decisions for transaction initiation
- Signing authority validation
- Payment authority validation
- Entity context for transaction

**To Audit & Provenance:**
- Authentication events
- Authorization decisions
- Role activation events
- Delegation creation/revocation events
- Credential usage events

### Events Published

1. **PersonRegistered** - New person registered
2. **AccountCreated** - Portal account created
3. **AccountVerified** - Email/mobile verified
4. **DINAllotted** - DIN issued to person
5. **DINKYCCompleted** - Annual KYC submitted
6. **CredentialRegistered** - DSC associated with person
7. **CredentialExpiring** - DSC expiring in 30 days
8. **EntityRelationshipEstablished** - Director appointed, partner added, etc.
9. **EntityRelationshipCeased** - Director resigned, partner removed, etc.
10. **DelegationGranted** - Authority delegated
11. **DelegationRevoked** - Authority withdrawn
12. **AuthorizationDenied** - Access attempt blocked (for security monitoring)
13. **RoleActivated** - User switched to different capacity
14. **EntityContextSwitched** - User switched to different entity

### Actors

**Primary:**
- Person (individual human)
- Professional (CS, CA, Advocate)
- MCA Officer (internal)

**System:**
- Authentication service
- Authorization service
- KYC verification service
- DSC verification service (via CA integration)

### Dependencies

**Depends on:**
- External CA (Certifying Authority) for DSC verification
- External identity providers (Aadhaar, PAN) for KYC verification (if integrated)
- Entity & Registry domain for entity data

**Depended on by:**
- All other domains (everyone needs identity and authorization)

### Regulatory Sensitivity
**CRITICAL** - Contains personally identifiable information (PII), credentials, authentication data. Subject to data protection regulations. Access must be strictly controlled and audited.

### Key Architectural Principles

1. **Authentication ≠ Authorization:** Successful login establishes identity only, not permission
2. **Context-dependent authorization:** Same person may have different authorities for different entities
3. **Temporal authority:** All relationships and authorities have effective dates
4. **Explicit delegation:** Authority transfer must be explicit, traceable, and revocable
5. **Separation of duties:** Preparer ≠ Signer ≠ Payer ≠ Approver
6. **Multi-entity support:** One person can act for multiple entities in different capacities
7. **Role activation:** User explicitly activates role+entity context for session
8. **Audit everything:** Every authentication, authorization decision, role activation, delegation logged

---

## DOMAIN 2: Entity & Registry

### Purpose
Maintain the canonical, authoritative record of all corporate entities (companies, LLPs), their attributes, relationships, charges, and historical changes.

### Core Responsibility
**Answer the question:** "What entities exist, what are their current attributes, who are their stakeholders, what charges exist against them, and what is their complete history?"

### Bounded Context
Corporate entities, LLPs, entity attributes, corporate relationships, charges, entity lifecycle, entity history, registry records.

**Out of scope:** Filing transactions (belongs to Service & Transaction), compliance obligations (belongs to Regulatory Compliance), payment of fees (belongs to Payment & Fees).

### Owned Data

**Core Entities:**

1. **Company**
   - CIN (Corporate Identity Number) - unique identifier
   - Company name (current + historical)
   - Company type (Private, Public, OPC, Section 8, etc.)
   - Company status (Active, Dormant, Struck Off, Dissolved, Under Liquidation)
   - Date of incorporation
   - ROC jurisdiction
   - Registered office address (current + historical with effective dates)
   - Authorized capital
   - Paid-up capital
   - Class of shares
   - Business activity codes
   - Email, contact
   - Compliance status summary

2. **LLP**
   - LLPIN (LLP Identification Number) - unique identifier
   - LLP name (current + historical)
   - LLP status (Active, Dissolved, etc.)
   - Date of incorporation
   - ROC jurisdiction
   - Registered office address (current + historical)
   - Total contribution
   - Email, contact
   - Compliance status summary

3. **Director-Company Relationship**
   - Relationship identifier
   - CIN
   - DIN
   - Person identifier
   - Designation (Director, Managing Director, Whole-time Director, Independent Director, etc.)
   - Appointment date
   - Cessation date (if ceased)
   - Status (Active, Ceased, Disqualified)
   - Shareholding (if applicable)

4. **Partner-LLP Relationship**
   - Relationship identifier
   - LLPIN
   - Person identifier
   - Partner type (Designated Partner, Partner)
   - Contribution amount
   - Appointment date
   - Cessation date (if ceased)
   - Status

5. **Shareholder-Company Relationship**
   - Relationship identifier
   - CIN
   - Shareholder identifier (Person or Entity)
   - Shareholder type (Individual, Body Corporate, etc.)
   - Number of shares
   - Class of shares
   - Share percentage
   - Acquisition date
   - Transfer date (if transferred)
   - Status

6. **Charge**
   - Charge identifier
   - CIN
   - Charge type (Mortgage, Pledge, Hypothecation, etc.)
   - Charge holder name and details
   - Charge amount
   - Assets charged
   - Date of creation
   - Date of filing (CHG-1)
   - Date of modification (if modified)
   - Date of satisfaction (if satisfied)
   - Status (Outstanding, Satisfied, Partially Satisfied)

7. **Company Group Relationship**
   - Relationship identifier
   - Parent CIN
   - Subsidiary CIN
   - Relationship type (Holding-Subsidiary, Associate, etc.)
   - Effective from/to dates
   - Ownership percentage

8. **ROC (Registrar of Companies)**
   - ROC code
   - ROC name
   - Jurisdiction (state/UT)
   - City
   - Contact details

9. **Entity Change Event**
   - Event identifier
   - Entity identifier (CIN/LLPIN)
   - Event type (Name Change, Address Change, Capital Change, Status Change, etc.)
   - Event date
   - Effective date
   - Old value
   - New value
   - Filing reference (SRN)
   - Approval reference

### Relationships

**Internal:**
- Company → Director-Company Relationship (1:N)
- Company → Shareholder-Company Relationship (1:N)
- Company → Charge (1:N)
- Company → Company Group Relationship (1:N for subsidiaries, 1:1 for parent)
- Company → ROC (N:1 - jurisdiction)
- Company → Entity Change Event (1:N - history)
- LLP → Partner-LLP Relationship (1:N)
- LLP → ROC (N:1)
- LLP → Entity Change Event (1:N)

**External:**
- Director-Company Relationship → Identity & Access domain (DIN, Person)
- Partner-LLP Relationship → Identity & Access domain (Person)
- Shareholder-Company Relationship → Identity & Access domain (Person) or Entity & Registry (if Body Corporate)
- Entity → Regulatory Compliance domain (obligations)
- Entity → Service & Transaction domain (filings)
- Charge → Service & Transaction domain (CHG filings)

### Lifecycle

**Company:**
```
Incorporation Applied → Name Reserved → Incorporation Approved → Registered (Active)
                                                                    ↓
                                                                 Dormant
                                                                    ↓
                                                             Reactivated → Active
                                                                    ↓
                                          Strike-off Applied → Struck Off
                                                                    ↓
                                          Winding Up Initiated → Under Liquidation → Dissolved
```

**LLP:**
```
Incorporation Applied → Name Reserved → Incorporation Approved → Registered (Active)
                                                                    ↓
                                            Dissolution Applied → Dissolved
```

**Charge:**
```
Created → Filed (CHG-1) → Registered → Modified (CHG-9) → Satisfied (CHG-4) → Closed
```

**Director-Company / Partner-LLP Relationship:**
```
Appointed → Active → Resigned/Removed → Ceased
                ↓
          Disqualified (interim or permanent)
```

### Inputs

**From Service & Transaction:**
- Incorporation approvals (create entity)
- Name change approvals (update entity)
- Address change approvals (update entity)
- Capital change approvals (update entity)
- Director appointment/resignation filings (create/update relationships)
- Partner addition/removal filings (create/update relationships)
- Charge creation/modification/satisfaction filings (create/update charges)
- Strike-off approvals (update entity status)

**From Identity & Access:**
- DIN allotments (for director relationships)
- Person data (for relationships)

**From Regulatory Oversight:**
- Disqualification orders (update director status)
- Winding up orders (update entity status)
- Strike-off orders (update entity status)

### Outputs

**To all domains:**
- Entity master data (CIN, name, status, etc.)
- Entity relationships (directors, partners, shareholders)
- Entity history (changes over time)

**To Regulatory Compliance:**
- Entity profile (for obligation calculation)
- Entity status (for compliance applicability)

**To Search & Discovery:**
- Searchable entity data
- Public entity records

**To users (via Search):**
- Public entity master data
- Director/partner information (subject to access rules)
- Charge register
- Historical filings

### Events Published

1. **CompanyIncorporated** - New company registered
2. **LLPIncorporated** - New LLP registered
3. **CompanyNameChanged** - Name updated
4. **CompanyAddressChanged** - Registered office changed
5. **CompanyCapitalChanged** - Capital altered
6. **CompanyStatusChanged** - Status updated (dormant, struck off, etc.)
7. **DirectorAppointed** - New director
8. **DirectorResigned** - Director ceased
9. **DirectorDisqualified** - Director disqualified
10. **PartnerAdded** - New partner
11. **PartnerRemoved** - Partner ceased
12. **ChargeCreated** - New charge registered
13. **ChargeSatisfied** - Charge satisfied
14. **ShareholderChanged** - Shareholding pattern updated
15. **EntityDissolved** - Company/LLP dissolved

### Actors

**Primary:**
- Company (legal entity)
- LLP (legal entity)
- Directors, Partners, Shareholders (via Identity & Access)
- ROC Officers (for registry updates)

**System:**
- Registry service
- Entity lifecycle service
- Charge management service

### Dependencies

**Depends on:**
- Identity & Access domain (for person/director/partner data)
- Service & Transaction domain (for filing approvals that trigger registry updates)
- Regulatory Oversight domain (for orders affecting entity status)

**Depended on by:**
- Regulatory Compliance domain (needs entity profile for obligations)
- Service & Transaction domain (needs entity data for filings)
- Search & Discovery domain (exposes entity data)
- All domains (canonical entity reference)

### Regulatory Sensitivity
**HIGH** - Public registry data, but with access controls for sensitive information. Some data is public (company name, CIN, directors), some is restricted (detailed shareholder patterns, specific charge details may have access rules).

### Key Architectural Principles

1. **Single source of truth:** Entity & Registry is the authoritative source for entity data
2. **Immutable history:** Changes are recorded as events, historical states preserved
3. **Effective dates:** All changes have effective dates (may differ from filing dates)
4. **Eventual consistency:** Registry updates after transaction approval, not during
5. **Public vs private:** Clear distinction between public registry data and restricted data
6. **Temporal queries:** Must support "entity state as of date X"
7. **Bi-temporal model:** Record both transaction time (when recorded) and valid time (when effective)
8. **Registry ≠ transactional:** Registry is outcome, not workflow

---

## DOMAIN 3: Regulatory Compliance

### Purpose
Determine what an entity must do, when it must be done, track completion, calculate next obligations, and maintain continuous compliance state.

### Core Responsibility
**Answer the question:** "What does this entity need to do next, why, by when, and has it complied with its obligations?"

### Bounded Context
Obligations, compliance requirements, deadlines, recurring compliance, event-triggered compliance, compliance status, regulatory profile.

**Out of scope:** Legal text itself (belongs to Regulatory Rules), transaction execution (belongs to Service & Transaction), registry records (belongs to Entity & Registry).

### Owned Data

**Core Entities:**

1. **Regulatory Profile**
   - Entity identifier (CIN/LLPIN)
   - Entity type (Private Company, Public Company, OPC, LLP, etc.)
   - Jurisdiction
   - Incorporation date
   - Financial year
   - Paid-up capital range
   - Turnover range (if applicable)
   - Listed/unlisted status
   - Special category flags (Nidhi, Section 8, Dormant, etc.)
   - Compliance tier (determines applicability of certain rules)
   - Applicability rules cache

2. **Obligation**
   - Obligation identifier
   - Entity identifier
   - Obligation type (Annual Filing, Event-Based Filing, Periodic Return, KYC, etc.)
   - Legal basis (Act, Rule, Section)
   - Trigger condition (Incorporation, Financial Year End, Event, etc.)
   - Applicable form(s)
   - Description
   - Recurrence pattern (Annual, One-time, Event-triggered)
   - Due date calculation rule
   - Due date (calculated)
   - Grace period
   - Additional fee trigger date
   - Status (Upcoming, Due, Overdue, In Progress, Completed, Not Applicable, Waived)
   - Priority (Critical, High, Medium, Low)
   - Consequences of non-compliance

3. **Obligation Instance**
   - Instance identifier
   - Obligation identifier (parent)
   - Entity identifier
   - Period (FY 2024-25, Date range, etc.)
   - Due date
   - Extended due date (if extension granted)
   - Status
   - Completion date
   - Completion transaction reference (SRN)
   - Additional fees incurred
   - Notes

4. **Compliance Trigger Event**
   - Event identifier
   - Entity identifier
   - Event type (Director Appointed, Capital Increased, Office Changed, etc.)
   - Event date
   - Triggered obligations list
   - Status (Pending Obligation Creation, Obligations Created)

5. **Exemption**
   - Exemption identifier
   - Entity identifier
   - Obligation type(s) exempted
   - Legal basis (Notification, Order)
   - Effective from/to dates
   - Status

6. **Compliance Timeline**
   - Entity identifier
   - Timeline entries (obligation instances in chronological order)
   - Next action
   - Overdue count
   - Compliance score (if calculated)

### Relationships

**Internal:**
- Regulatory Profile → Obligation (1:N - profile determines applicable obligations)
- Obligation → Obligation Instance (1:N - recurring obligations have multiple instances)
- Regulatory Profile → Exemption (1:N - entity may have exemptions)
- Compliance Trigger Event → Obligation Instance (1:N - event creates obligations)

**External:**
- Regulatory Profile → Entity & Registry domain (entity data)
- Obligation → Regulatory Rules domain (legal basis, rules, forms)
- Obligation Instance → Service & Transaction domain (completion via transaction)
- Compliance Trigger Event → Entity & Registry domain (entity events)

### Lifecycle

**Regulatory Profile:**
```
Created (on incorporation) → Active → Updated (on entity changes) → Archived (on dissolution)
```

**Obligation (template):**
```
Defined → Active → Suspended (legislative change) → Superseded / Retired
```

**Obligation Instance:**
```
Created → Upcoming → Due → Overdue → In Progress (draft started) → Completed
                                  ↓
                              Not Applicable (exemption granted)
                                  ↓
                              Waived (regulatory relief)
```

**Compliance Trigger Event:**
```
Detected → Obligations Identified → Obligation Instances Created → Processed
```

### Inputs

**From Entity & Registry:**
- Entity creation events (create regulatory profile)
- Entity change events (update profile, may trigger obligations)
- Entity status changes (affect applicability)
- Director/partner change events (trigger obligations)
- Capital change events (trigger obligations)
- Address change events (trigger obligations)

**From Service & Transaction:**
- Transaction completion events (mark obligation instance complete)
- Filing submission events (obligation in progress)

**From Regulatory Rules:**
- Rule changes (create/modify/retire obligation templates)
- Exemption notifications
- Extension notifications

**From time:**
- Date changes (calculate due dates, trigger "upcoming" status, "overdue" status)

### Outputs

**To users (via My Workspace):**
- Obligation timeline (what's due, upcoming, overdue)
- Next actions
- Compliance status
- Deadline alerts

**To Service & Transaction:**
- Obligation context for transactions (which obligation is this filing satisfying?)
- Required forms for obligation

**To Notification & Events:**
- Deadline approaching notifications
- Obligation overdue notifications
- New obligation created notifications

**To Audit & Provenance:**
- Obligation state changes
- Compliance calculations

### Events Published

1. **RegulatoryProfileCreated** - New entity compliance profile
2. **RegulatoryProfileUpdated** - Entity characteristics changed affecting compliance
3. **ObligationCreated** - New obligation instance for entity
4. **ObligationDueDateApproaching** - 30/15/7 days to due date
5. **ObligationDue** - Due date reached
6. **ObligationOverdue** - Due date passed without completion
7. **ObligationInProgress** - Entity started working on obligation
8. **ObligationCompleted** - Obligation satisfied
9. **ObligationNotApplicable** - Exemption applied
10. **AdditionalFeeTriggered** - Obligation crossed additional fee threshold
11. **ComplianceTriggerEventDetected** - Entity event triggers obligations
12. **ExemptionGranted** - Entity received exemption
13. **ExtensionGranted** - Due date extended

### Actors

**Primary:**
- Entity (company/LLP) - subject of obligations
- Entity Representatives (directors, partners, professionals) - must complete obligations
- MCA Officials - grant exemptions, extensions

**System:**
- Compliance engine
- Obligation calculator
- Due date calculator
- Applicability rules engine

### Dependencies

**Depends on:**
- Entity & Registry domain (entity profile, entity events)
- Regulatory Rules domain (obligation definitions, applicability rules, due date rules)
- Service & Transaction domain (obligation completion)

**Depended on by:**
- Service & Transaction domain (transactions linked to obligations)
- Notification & Events domain (obligation-based notifications)
- My Workspace (obligation timeline)

### Regulatory Sensitivity
**MEDIUM** - Compliance data is entity-specific and should be visible to authorized entity representatives and MCA officers. Not typically public.

### Key Architectural Principles

1. **Continuous compliance:** Platform actively tracks and calculates obligations, not just passive filing acceptance
2. **Event-driven obligation creation:** Entity events automatically trigger applicable obligations
3. **Applicability rules:** Obligations calculated based on entity regulatory profile
4. **Proactive notifications:** System notifies before deadlines, not just after
5. **Explainability:** Every obligation links to legal basis
6. **Recurrence management:** Recurring obligations (annual, periodic) managed systematically
7. **Grace periods and additional fees:** Modeled explicitly in obligation timeline
8. **Next action intelligence:** System can always answer "what should this entity do next?"

---

## DOMAIN 4: Service & Transaction

### Purpose
Orchestrate user-initiated services, manage transaction lifecycle, coordinate platform capabilities, route to appropriate workflows, and maintain transaction state.

### Core Responsibility
**Answer the question:** "What service is the user trying to accomplish, what's the transaction state, where is it in the workflow, and what happens next?"

### Bounded Context
Service definitions, service orchestration, transaction lifecycle, transaction state, service-specific logic, workflow routing.

**Out of scope:** Authorization (belongs to Identity & Access), registry updates (belongs to Entity & Registry), obligation tracking (belongs to Regulatory Compliance), workflow execution details (belongs to Workflow & Orchestration).

### Owned Data

**Core Entities:**

1. **Service Definition**
   - Service identifier
   - Service name
   - Service intent (what user wants to accomplish)
   - Service type (Entity Formation, Entity Change, Periodic Compliance, Public Access, Regulatory Case)
   - Applicability rules (which entities can use)
   - Legal basis
   - Required form(s)
   - Required data schema
   - Required documents
   - Signature requirements
   - Fee rules reference
   - Workflow template
   - STP eligibility rules
   - Service version
   - Status (Active, Deprecated, Superseded)

2. **Transaction**
   - Transaction identifier
   - Service identifier
   - Entity identifier (which entity is this for?)
   - Initiator (person/account)
   - Actor context (role, authority)
   - Transaction type (Filing, Payment, Search, Query Response, Complaint, etc.)
   - Intent description
   - Created date/time
   - Last updated date/time
   - Transaction status (Draft, Validating, Validated, Signing, Payment Pending, Submitted, Processing, Completed, Abandoned, Failed)
   - SRN (Service Request Number) - generated on submission
   - Form code (if filing)
   - Obligation reference (if satisfying obligation)

3. **Transaction Data**
   - Transaction identifier
   - Data payload (structured form data)
   - Data version
   - Validation status
   - Prefilled data sources

4. **Transaction Signature**
   - Transaction identifier
   - Signer (person identifier)
   - Signer role
   - Signature requirement (why this signer?)
   - Credential used (DSC identifier)
   - Signature timestamp
   - Verification status
   - Signature order (for multi-signer)

5. **Transaction Document**
   - Transaction identifier
   - Document reference (from Document Management domain)
   - Document requirement (which requirement does this satisfy?)
   - Upload timestamp
   - Validation status

6. **Transaction Payment**
   - Transaction identifier
   - Payment reference (from Payment & Fees domain)
   - Fee amount
   - Additional fee
   - Payment status link

7. **Transaction Routing**
   - Transaction identifier
   - Routing decision (STP, Manual Review, Specialized Review)
   - Routing reason
   - Routing timestamp
   - Assigned to (ROC, RD, CPC, Officer)
   - Queue identifier

8. **Transaction History**
   - Transaction identifier
   - Event sequence
   - State changes
   - Actor actions
   - System actions
   - Timestamps
   - Audit trail

### Relationships

**Internal:**
- Service Definition → Transaction (1:N - service used many times)
- Transaction → Transaction Data (1:1)
- Transaction → Transaction Signature (1:N - multiple signers)
- Transaction → Transaction Document (1:N - multiple documents)
- Transaction → Transaction Payment (1:1 or 1:N if multiple payments)
- Transaction → Transaction Routing (1:1)
- Transaction → Transaction History (1:N)

**External:**
- Service Definition → Regulatory Rules domain (legal basis, forms, rules)
- Transaction → Entity & Registry domain (which entity)
- Transaction → Identity & Access domain (who, what role, what authority)
- Transaction → Regulatory Compliance domain (which obligation)
- Transaction → Document Management domain (documents)
- Transaction → Payment & Fees domain (payment)
- Transaction → Workflow & Orchestration domain (workflow execution)
- Transaction Routing → Regulatory Oversight domain (manual review)

### Lifecycle

**Service Definition:**
```
Designed → Tested → Active → Updated (version) → Deprecated → Retired
```

**Transaction:**
```
Draft → Validating → Validated → Signing → Signing Complete → 
Fee Calculated → Payment Pending → Payment Complete → Submitted (SRN generated)
     ↓
Processing → Routed (STP or Manual) → In Review (if manual) → 
Query Raised (if deficiency) → Resubmitted (response) → 
Approved / Rejected → Registry Update (if approved) → Completed
     ↓
Abandoned (user stopped), Failed (system error)
```

**Important:** Different transaction types may have different state machines. Above is generalized filing transaction. Payment-only transactions, search transactions, complaint transactions have different states.

### Inputs

**From users:**
- Service initiation requests (start transaction)
- Transaction data (form filling)
- Document uploads
- Signature applications
- Payment authorizations
- Query responses
- Resubmissions

**From Identity & Access:**
- Authorization decisions
- Actor context (role, entity, authority)

**From Regulatory Compliance:**
- Obligation context (which obligation is being satisfied)
- Required forms

**From Regulatory Rules:**
- Validation rules
- Eligibility rules
- STP criteria

**From Workflow & Orchestration:**
- State transition commands
- Routing decisions
- Review outcomes

**From Regulatory Oversight:**
- Query/deficiency notices
- Approval/rejection decisions

### Outputs

**To Entity & Registry:**
- Registry update requests (on approval)

**To Regulatory Compliance:**
- Obligation completion events

**To Notification & Events:**
- Transaction state change events

**To users (via My Workspace):**
- Transaction status
- Transaction history
- Next actions required

**To Regulatory Oversight:**
- Transactions for manual review
- Transaction data for review

**To Audit & Provenance:**
- Complete transaction audit trail

### Events Published

1. **TransactionInitiated** - User started service
2. **TransactionDraftSaved** - User saved progress
3. **TransactionValidated** - Passed all validations
4. **TransactionSigned** - Signature applied
5. **TransactionPaymentCompleted** - Payment successful
6. **TransactionSubmitted** - SRN generated
7. **TransactionRouted** - Routed to STP or manual
8. **TransactionSTPProcessing** - Automated processing started
9. **TransactionSentForReview** - Manual review started
10. **TransactionQueryRaised** - Deficiency identified
11. **TransactionResubmitted** - Query response submitted
12. **TransactionApproved** - Approved by reviewer
13. **TransactionRejected** - Rejected
14. **TransactionCompleted** - Final state reached
15. **TransactionAbandoned** - User stopped without completing

### Actors

**Primary:**
- Service users (all user types)
- Entity representatives
- Professionals
- MCA Officers (for review)

**System:**
- Service orchestration engine
- Transaction manager
- Validation engine
- Routing engine

### Dependencies

**Depends on:**
- Identity & Access domain (authorization)
- Entity & Registry domain (entity data)
- Regulatory Compliance domain (obligations)
- Regulatory Rules domain (validation, eligibility, STP rules)
- Document Management domain (documents)
- Payment & Fees domain (payment)
- Workflow & Orchestration domain (state management)
- Regulatory Oversight domain (manual review)

**Depended on by:**
- All user-facing domains (transactions are how users accomplish things)
- Entity & Registry domain (filings trigger registry updates)
- Regulatory Compliance domain (transactions complete obligations)

### Regulatory Sensitivity
**HIGH** - Contains transaction data, pending submissions, drafts. Sensitive to entity and actor. Access must be strictly controlled.

### Key Architectural Principles

1. **Intent-driven:** Services organized by user intent, not just form numbers
2. **Orchestration not execution:** Service & Transaction coordinates capabilities, doesn't implement them
3. **Persistent state:** Every transaction has durable state, discoverable by users
4. **Separation of concerns:** Transaction state ≠ Payment state ≠ Workflow state ≠ Registry state (coordinated but separate)
5. **Explicit routing:** STP vs manual routing is explicit, transparent, audited
6. **Resubmission support:** Query/resubmission cycle modeled explicitly
7. **Idempotency:** Transaction operations are idempotent where possible
8. **Service composition:** Services compose platform capabilities, don't duplicate them

---

## DOMAIN 5: Regulatory Oversight

### Purpose
Enable MCA officers and regulatory authorities to review transactions, conduct scrutiny, manage cases, issue orders, enforce compliance, and make regulatory decisions.

### Core Responsibility
**Answer the question:** "What transactions require human review, what cases are open, what regulatory decisions need to be made, and what enforcement actions are being taken?"

### Bounded Context
Manual review workflow, case management, scrutiny, investigation, adjudication, enforcement, regulatory decisions, orders.

**Out of scope:** Transaction initiation (belongs to Service & Transaction), obligation tracking (belongs to Regulatory Compliance), automated processing (belongs to Workflow & Orchestration).

### Owned Data

**Core Entities:**

1. **Review Queue**
   - Queue identifier
   - Queue type (ROC Review, RD Review, CPC Review, Specialized)
   - Jurisdiction
   - Assigned officer/team
   - Queue status
   - SLA

2. **Review Case**
   - Case identifier
   - Transaction reference
   - Entity identifier
   - Case type (Transaction Review, Scrutiny, Investigation, Adjudication)
   - Assigned to (officer/team)
   - Priority
   - Created date
   - Due date
   - Status (Assigned, In Progress, Pending Response, Decision Made, Closed)

3. **Review Action**
   - Action identifier
   - Case identifier
   - Officer identifier
   - Action type (Query, Approve, Reject, Escalate, Refer)
   - Action date
   - Reasons
   - Notes
   - Attachments

4. **Query / Deficiency**
   - Query identifier
   - Case identifier
   - Transaction reference
   - Query type (Missing Document, Incorrect Data, Legal Issue, Clarification)
   - Query text
   - Legal reference
   - Issued by
   - Issued date
   - Response deadline
   - Response received date
   - Response text
   - Response status (Pending, Received, Accepted, Rejected)

5. **Scrutiny Case**
   - Case identifier (inherits from Review Case)
   - Entity identifier
   - Scrutiny type (Routine, Risk-Based, Complaint-Based)
   - Scope (specific filings, time period, specific aspect)
   - Findings
   - Recommendations
   - Outcome

6. **Investigation Case**
   - Case identifier
   - Entity/person under investigation
   - Investigation grounds
   - Investigation scope
   - Evidence collected
   - Findings
   - Outcome

7. **Adjudication Case**
   - Case identifier
   - Respondent (entity/person)
   - Contravention alleged
   - Legal provision violated
   - Show cause notice
   - Response from respondent
   - Hearing date
   - Hearing records
   - Order
   - Penalty (if any)
   - Appeal status

8. **Order**
   - Order identifier
   - Order type (Approval, Rejection, Penalty, Disqualification, Exemption, Extension)
   - Case reference
   - Entity/person affected
   - Legal basis
   - Order text
   - Order date
   - Effective date
   - Issued by (authority)
   - Appeal deadline
   - Appeal status
   - Status (Active, Stayed, Overturned, Expired)

9. **Complaint**
   - Complaint identifier
   - Complainant (entity/person)
   - Complaint type (Filing Issue, System Issue, MCA Service, Fraud/Malpractice)
   - Subject entity/person
   - Complaint text
   - Evidence attachments
   - Priority
   - Assigned to
   - Status (Received, Under Review, Investigating, Resolved, Closed)
   - Resolution

10. **Enforcement Action**
    - Action identifier
    - Entity/person
    - Enforcement type (Penalty Recovery, Strike-off Proceedings, Prosecution)
    - Legal basis
    - Action date
    - Status
    - Outcome

### Relationships

**Internal:**
- Review Queue → Review Case (1:N)
- Review Case → Review Action (1:N)
- Review Case → Query/Deficiency (1:N)
- Scrutiny Case extends Review Case
- Investigation Case extends Review Case
- Adjudication Case extends Review Case
- Review Case → Order (1:1 or 1:N)
- Complaint → Investigation Case (1:1 if escalated)

**External:**
- Review Case → Service & Transaction domain (transaction being reviewed)
- Review Case → Entity & Registry domain (entity/person)
- Order → Entity & Registry domain (updates entity status if disqualification, strike-off, etc.)
- Order → Identity & Access domain (updates person/director status if disqualification)
- Query → Service & Transaction domain (triggers resubmission)

### Lifecycle

**Review Case:**
```
Created → Assigned → In Progress → Query Issued → Response Awaited → 
Response Received → Reviewing Response → Decision Made → Order Issued → Closed
```

**Query:**
```
Issued → Awaiting Response → Response Received → Response Reviewing → 
Accepted (case proceeds) / Rejected (new query or rejection)
```

**Adjudication Case:**
```
Contravention Identified → Show Cause Notice Issued → Response Awaited → 
Response Received → Hearing Scheduled → Hearing Conducted → 
Order Issued (Penalty/Exoneration) → Appeal Period → Closed / Under Appeal
```

**Complaint:**
```
Received → Triaged → Assigned → Investigating → Resolved / Escalated to Investigation → Closed
```

**Order:**
```
Drafted → Reviewed → Issued → Active → Appealed (if applicable) → 
Stayed (if appeal admits) / Upheld / Overturned → Expired / Completed
```

### Inputs

**From Service & Transaction:**
- Transactions routed to manual review
- Resubmissions (query responses)
- Escalations

**From Regulatory Compliance:**
- Non-compliance alerts (entities severely overdue)
- Compliance patterns (for risk-based scrutiny)

**From users:**
- Complaints
- Grievances
- Query responses

**From Entity & Registry:**
- Entity data for review
- Historical filings for scrutiny

### Outputs

**To Service & Transaction:**
- Review decisions (approve, reject)
- Queries/deficiencies
- Escalation requests

**To Entity & Registry:**
- Registry update orders (strike-off, status changes)
- Disqualification orders (director status)

**To Identity & Access:**
- Disqualification orders (director authority)
- Debarment orders (professional)

**To Notification & Events:**
- Order issuance events
- Query issuance events
- Hearing notices

**To users:**
- Queries/deficiencies
- Orders
- Hearing notices
- Complaint status updates

**To Audit & Provenance:**
- All case actions
- All orders
- All decisions

### Events Published

1. **ReviewCaseCreated** - Transaction sent for review
2. **ReviewCaseAssigned** - Case assigned to officer
3. **QueryIssued** - Deficiency notice sent
4. **QueryResponseReceived** - Entity responded
5. **TransactionApprovedAfterReview** - Manual approval
6. **TransactionRejectedAfterReview** - Manual rejection
7. **ScrutinyCaseOpened** - Scrutiny initiated
8. **InvestigationCaseOpened** - Investigation initiated
9. **AdjudicationCaseOpened** - Adjudication initiated
10. **ShowCauseNoticeIssued** - Adjudication notice
11. **HearingScheduled** - Hearing date set
12. **OrderIssued** - Regulatory order issued
13. **ComplaintReceived** - New complaint
14. **ComplaintResolved** - Complaint closed
15. **EnforcementActionInitiated** - Enforcement started

### Actors

**Primary:**
- ROC Officers
- Regional Directors
- MCA Officials
- Adjudicating Officers
- Specialized Officers (for investigations, scrutiny)
- Complainants (citizens, entities)

**System:**
- Case management system
- Review workflow engine
- Order management system

### Dependencies

**Depends on:**
- Service & Transaction domain (transactions to review)
- Entity & Registry domain (entity data)
- Identity & Access domain (officer permissions, entity representative data)
- Document Management domain (case documents, evidence)
- Regulatory Rules domain (legal basis for decisions)

**Depended on by:**
- Service & Transaction domain (review decisions affect transaction outcomes)
- Entity & Registry domain (orders affect entity status)
- Identity & Access domain (orders affect person/director authority)

### Regulatory Sensitivity
**CRITICAL** - Contains regulatory decisions, orders, investigation data, complaints. Highly sensitive. Access strictly controlled to authorized MCA personnel.

### Key Architectural Principles

1. **Explicit human intervention:** Human review is visible, not hidden behind "processing"
2. **Case-based:** Review, scrutiny, investigation, adjudication all modeled as cases with lifecycle
3. **Transparent workflow:** Status always clear to both officer and submitter
4. **SLA management:** Review queue SLAs tracked and enforced
5. **Query/response cycle:** Structured resubmission with audit trail
6. **Order traceability:** Every order links to case, legal basis, authority
7. **Separation of roles:** Reviewer ≠ Adjudicator ≠ Investigator
8. **Appeal support:** Orders can be appealed, appeal status tracked

---

*[Document continues with remaining 7 domains: Payment & Fees, Document Management, Workflow & Orchestration, Notification & Events, Search & Discovery, Audit & Provenance, Content & Help. Would you like me to continue with these domains?]*

---

## Domain Interaction Map

```
┌─────────────────────────────────────────────────────────────────────┐
│                         USER / ACTOR                                 │
└─────────────────────────────────────────────────────────────────────┘
                                ↓
                    ┌───────────────────────┐
                    │  IDENTITY & ACCESS    │←──────────────┐
                    └───────────────────────┘               │
                         ↓           ↓                       │
              ┌──────────┴───────────┴────────┐            │
              ↓                                ↓             │
    ┌─────────────────┐              ┌──────────────────┐  │
    │ ENTITY &        │←────────────→│ REGULATORY       │  │
    │ REGISTRY        │              │ COMPLIANCE       │  │
    └─────────────────┘              └──────────────────┘  │
              ↓                                ↓             │
              └───────────────┬────────────────┘            │
                              ↓                              │
                    ┌───────────────────────┐              │
                    │ SERVICE &             │              │
                    │ TRANSACTION           │              │
                    └───────────────────────┘              │
                              ↓                              │
            ┌─────────────────┼─────────────────┐          │
            ↓                 ↓                  ↓           │
    ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
    │ DOCUMENT     │  │ PAYMENT &    │  │ WORKFLOW &   │  │
    │ MANAGEMENT   │  │ FEES         │  │ ORCHESTRATION│  │
    └──────────────┘  └──────────────┘  └──────────────┘  │
                              ↓                              │
                    ┌───────────────────────┐              │
                    │ REGULATORY            │              │
                    │ OVERSIGHT             │──────────────┘
                    └───────────────────────┘
                              ↓
            ┌─────────────────┼─────────────────┐
            ↓                 ↓                  ↓
    ┌──────────────┐  ┌──────────────┐  ┌──────────────┐
    │ NOTIFICATION │  │ SEARCH &     │  │ AUDIT &      │
    │ & EVENTS     │  │ DISCOVERY    │  │ PROVENANCE   │
    └──────────────┘  └──────────────┘  └──────────────┘

Supporting: CONTENT & HELP (accessible from all user touchpoints)
```

---

## Cross-Domain Patterns

### Pattern 1: User-Initiated Service Flow

```
User → Identity & Access (authenticate, authorize)
     → Service & Transaction (initiate service)
     → Entity & Registry (get entity data)
     → Regulatory Compliance (check obligation context)
     → Document Management (attach required documents)
     → Payment & Fees (calculate and collect fee)
     → Workflow & Orchestration (execute workflow)
     → Regulatory Oversight (manual review if required)
     → Entity & Registry (update registry on approval)
     → Regulatory Compliance (mark obligation complete)
     → Notification & Events (notify user of outcome)
```

### Pattern 2: Obligation Calculation Flow

```
Entity & Registry (entity event occurs)
     → Regulatory Compliance (detect event, calculate obligations)
     → Regulatory Rules (apply applicability rules)
     → Regulatory Compliance (create obligation instances)
     → Notification & Events (notify entity of new obligations)
     → User (via My Workspace shows obligations)
```

### Pattern 3: Manual Review Flow

```
Service & Transaction (transaction submitted)
     → Workflow & Orchestration (routing decision: manual)
     → Regulatory Oversight (create review case)
     → Regulatory Oversight (officer reviews, issues query)
     → Service & Transaction (transaction status: query raised)
     → Notification & Events (notify user of query)
     → Service & Transaction (user responds)
     → Regulatory Oversight (officer reviews response)
     → Regulatory Oversight (approve/reject)
     → Service & Transaction (transaction status: approved/rejected)
     → Entity & Registry (registry update if approved)
```

### Pattern 4: Public Search Flow

```
User → Identity & Access (public access, no entity context)
     → Search & Discovery (search request)
     → Entity & Registry (fetch entity data)
     → Search & Discovery (return results with access rules applied)
     → Document Management (if user requests public documents)
     → Payment & Fees (if certified copy requested)
```

---

## Validation Status

**Evidence Classification:** FUTURE-STATE PROPOSAL

This domain model represents the proposed future architecture for the MCA digital platform. It is NOT a claim about how MCA currently implements its systems.

**Based on:**
- Phase 1 verified findings (core services, entities, user types)
- Phase 2 document reconciliation
- Domain-Driven Design principles
- Regulatory platform best practices

**Requires Validation:**
- Current MCA domain boundaries (unknown)
- Current MCA service architecture (unknown)
- Current MCA database/data ownership (unknown)
- Current MCA workflow and case management (unknown)

---

## Next Steps

With domain architecture defined, proceed to:
- **Step 4:** Detail Identity/Role/Authority/Entity Model
- **Step 5:** Design Intent-First Service Architecture
- **Step 6:** Test Form Hypothesis (can forms decompose into domain capabilities?)
- **Step 7:** Design Regulatory/Rules Architecture
- **Step 8:** Define Canonical Data Architecture (complete entity catalog)

The remaining 7 domains (Payment & Fees, Document Management, Workflow & Orchestration, Notification & Events, Search & Discovery, Audit & Provenance, Content & Help) will be detailed in subsequent architecture documents as needed for completeness.
