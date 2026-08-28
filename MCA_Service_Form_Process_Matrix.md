**MCA SERVICE → FORM → PROCESS MATRIX**

_Phase 2 Architecture Bridge Document_

Purpose: translate Phase 1 service/form discovery plus the Regulatory Framework Pack into a service-oriented model that exposes reusable platform capabilities beneath the visible form catalogue.

Evidence discipline: Phase 1 could not access the live MCA portal; all seed URLs returned HTTP 403. Therefore, this matrix preserves the project's VERIFIED / INFERRED / ASSUMED / UNKNOWN taxonomy and does not invent internal MCA SOPs, APIs or backend systems.

# 1\. The Architectural Question

The question is not "How do we rebuild 70+ forms?" It is "What reusable digital capabilities produce the outcomes represented by those forms?" Phase 1 identifies 70+ forms and 100+ services across multiple families, alongside recurring concepts such as identity, entities, filings, documents, payment, workflow and registry records.

**70+ FORMS ≠ 70+ PRODUCTS**

_Candidate architecture: COMMON PLATFORM PRIMITIVES + SERVICE-SPECIFIC LEGAL LOGIC_

# 2\. Service → Form → Process Matrix

| **Service**             | **Intent**                             | **Entity / Actor**         | **Legal basis**                        | **Form / service**             | **Key data**                                        | **Required docs**                       | **Signature / DSC** | **Fee**                   | **Workflow**                                                    | **Validation / rules**               | **Outcome**                   | **Registry / object**           | **Next obligation**                                       | **Evidence** |
| ----------------------- | -------------------------------------- | -------------------------- | -------------------------------------- | ------------------------------ | --------------------------------------------------- | --------------------------------------- | ------------------- | ------------------------- | --------------------------------------------------------------- | ------------------------------------ | ----------------------------- | ------------------------------- | --------------------------------------------------------- | ------------ |
| Incorporation           | Start company                          | Company / promoter         | Companies Act + Incorporation Rules    | SPICe+ Part A/B                | Founder, entity, office, capital, directors         | Constitutional / incorporation evidence | Yes / applicable    | Yes                       | Submission → validation → payment → processing                  | Eligibility, name, identity, docs    | CIN / incorporation           | Post-incorporation compliance   | Core service VERIFIED; detail INFERRED                    |              |
| Name reservation        | Reserve proposed name                  | Proposed company           | Companies Act + Incorporation Rules    | SPICe+ Part A / name service   | Name, entity type, context                          | Evidence where required                 | As applicable       | Yes / applicable          | Submit → name validation → decision                             | Naming restrictions / similarity     | Reservation / rejection       | Incorporation or name action    | Core service VERIFIED; exact flow INFERRED                |              |
| LLP incorporation       | Start LLP                              | LLP / partners             | LLP Act + LLP Rules                    | FiLLiP                         | Partners, designated partners, contribution, office | LLP incorporation docs                  | Yes / applicable    | Yes                       | Submission → validation → processing → registration             | Partner/name/document eligibility    | LLPIN / registration          | LLP annual compliance           | Core service VERIFIED; detail INFERRED                    |              |
| Director identification | Obtain/update director identity        | Person / director          | Companies Act + Rules                  | DIR-series                     | Person identity, DIN-linked data, role              | KYC/declarations as applicable          | Yes / applicable    | Conditional               | Draft → validation → signing → filing                           | Identity, eligibility, role          | DIN record/status             | KYC / event filings             | DIR family VERIFIED; exact mapping varies                 |              |
| Director KYC            | Maintain director status               | Director / DIN holder      | Companies Act + Rules                  | DIR-3 KYC                      | Personal/KYC data                                   | KYC evidence                            | Yes / applicable    | Conditional               | Prefill → validation → STP/processing                           | KYC eligibility/fields               | DIN status / KYC completion   | Next annual cycle               | Core service VERIFIED; detail requires validation         |              |
| Director change         | Appoint/resign/change director         | Company + person           | Companies Act + Director Rules         | DIR-series / relevant filing   | Person, role, effective date                        | Consent/declarations/supporting docs    | Yes                 | Yes / applicable          | Event → filing → validation → processing → registry             | Eligibility, role, timing            | Director-company relationship | Subsequent compliance           | Family VERIFIED; exact form mapping validate              |              |
| Registered office       | Establish/change office                | Company / LLP              | Companies Act / LLP framework + Rules  | Relevant office-change service | Address, effective date, entity                     | Address/evidence docs                   | As applicable       | Yes / applicable          | Event → evidence → filing → review → registry                   | Jurisdiction, evidence, timing       | Office record updated         | Future office/compliance events | Legal mapping grounded; portal flow INFERRED              |              |
| Share capital           | Issue/alter capital                    | Company                    | Companies Act + Share Capital Rules    | PAS/SH relevant forms          | Capital, securities, holders/allotment              | Resolutions/capital docs                | Yes                 | Yes / applicable          | Corporate event → filing → validation → registry                | Capital/security consistency         | Capital/share record          | Annual/event compliance         | Form family identified; exact service map validate        |              |
| Charges                 | Create/modify charge                   | Company + charge holder    | Companies Act + Charges Rules          | CHG-series                     | Charge type, holder, amount, dates                  | Charge/security instrument              | Yes                 | Yes                       | Charge event → filing → fee → registration                      | Timing, data, docs                   | Charge registered/modified    | Satisfaction / later changes    | CHG-1 core VERIFIED; detail INFERRED                      |              |
| Charge satisfaction     | Record satisfaction                    | Company + charge holder    | Companies Act + Charges Rules          | CHG-series                     | Charge ID, satisfaction date                        | Satisfaction evidence                   | Yes / applicable    | Yes / applicable          | Event → filing → validation → registry                          | Existing charge/status/timing        | Charge status updated         | Future charge events            | Concept grounded; exact form validate                     |              |
| Financial statements    | File financial statements              | Company                    | Companies Act + Accounts Rules         | AOC-4 family                   | Financial statement metadata/data                   | Financial statements/reports            | Yes                 | Yes                       | Prepare → validate → sign → pay → submit → process              | Period/entity/audit consistency      | Filing record                 | Annual return / next period     | AOC-4 core VERIFIED                                       |              |
| Annual return           | File annual return                     | Company                    | Companies Act + Management/Admin Rules | MGT-7 family                   | Company, ownership, governance, capital             | Annual return supporting data           | Yes                 | Yes                       | Prepare → validate → sign → pay → submit                        | Period/entity consistency            | Annual return filing          | Next annual cycle               | MGT-7 core VERIFIED                                       |              |
| Audit / auditor         | Maintain auditor appointment/reporting | Company + auditor          | Companies Act + Audit Rules            | Relevant auditor filing        | Auditor, appointment, period                        | Consent/reporting docs                  | Yes / applicable    | Yes / applicable          | Appointment/change → filing → validation                        | Eligibility/term/entity relation     | Auditor relationship / filing | Annual audit cycle              | Domain VERIFIED; exact forms validate                     |              |
| Beneficial ownership    | Report beneficial ownership            | Company + beneficial owner | Companies Act + Rules                  | Relevant SBO forms             | Ownership/control relationships                     | Declarations/evidence                   | Yes / applicable    | Conditional               | Trigger → identify → filing                                     | Threshold/applicability/relationship | Disclosure record             | Ongoing/event obligation        | Framework VERIFIED; current form mapping validate         |              |
| Strike-off              | Close/remove company                   | Company                    | Companies Act + Removal of Names Rules | STK-series / STK-2             | Closure eligibility, declarations                   | Closure evidence                        | Yes                 | Yes                       | Eligibility → application → notice/review → decision → registry | Preconditions/eligibility            | Removed/closed state          | Historical record/access        | STK-2 core VERIFIED; processing INFERRED                  |              |
| LLP annual compliance   | File LLP disclosures                   | LLP                        | LLP Act + LLP Rules                    | Forms 8 / 11                   | Financial/partner data                              | Financial/supporting records            | Yes                 | Yes                       | Prepare → validate → sign → pay → submit                        | Period/entity/partner consistency    | LLP filing record             | Next annual cycle               | Core forms VERIFIED                                       |              |
| LLP partner change      | Change partner/designated partner      | LLP + person               | LLP Act + LLP Rules                    | Forms 3/4 and related          | Person, role, contribution, effective date          | Consent/agreement evidence              | Yes                 | Yes / applicable          | Event → filing → validation → registry                          | Role/partner eligibility             | Partner-LLP relationship      | Further LLP filings             | Core forms identified; exact mapping validate             |              |
| LLP closure             | Dissolve LLP                           | LLP / partners             | LLP Act + Rules                        | Relevant closure service       | Status, grounds, declarations                       | Closure evidence                        | Yes / applicable    | Yes / applicable          | Eligibility → application → review → registry                   | Outstanding obligations/eligibility  | Dissolved/closed state        | Historical record/access        | Framework VERIFIED; portal flow UNKNOWN                   |              |
| Public master data      | Research entity                        | Public user                | Registry framework                     | Master Data services           | CIN/LLPIN/name/search keys                          | None or entitlement-dependent           | No                  | May apply                 | Search → retrieve → display                                     | Search/access rules                  | Entity profile                | Optional document inspection    | Capability VERIFIED; details INFERRED                     |              |
| Public documents        | Inspect corporate records              | Public user                | Companies Act + Rules                  | Public Documents               | Entity/document IDs                                 | None; registry record requested         | No                  | Yes / applicable          | Search → select → payment if applicable → access                | Entitlement/payment/availability     | Document access               | Optional certified copy         | Capability VERIFIED; process INFERRED                     |              |
| Certified copies        | Obtain certified record                | Public / authorised user   | Companies Act + Rules                  | Certified copy service         | Entity + document reference                         | Existing registry record                | Service-specific    | Yes                       | Request → payment → issuance                                    | Entitlement/document availability    | Certified document            | None                            | Service mapping INFERRED                                  |              |
| Fee enquiry             | Calculate expected fee                 | Transaction actor          | Fees rules                             | Fee enquiry/calculation        | Form/entity/timing/category                         | None                                    | No                  | Calculated                | Inputs → fee rules → result                                     | Fee rules/timing/category            | Fee quote                     | Payment/filing                  | Fee engine is architectural requirement; formulas UNKNOWN |              |
| Payment                 | Pay statutory fee                      | Filer / public user        | Applicable fee rules                   | Payment / challan              | SRN/transaction, amount, payer                      | Payment reference                       | No                  | Yes                       | Fee → gateway/payment → confirmation                            | Amount/transaction/payment state     | Payment receipt/record        | Submission/completion           | Payment in flow VERIFIED; gateway details UNKNOWN         |              |
| Track transaction       | Track filing/payment status            | Filer                      | Transaction framework                  | Track SRN/status               | SRN, entity, transaction                            | None                                    | No                  | No                        | Lookup → status timeline                                        | SRN/status mapping                   | Current status/history        | Action if queried/resubmission  | Capability INFERRED                                       |              |
| Complaints              | Raise grievance                        | Citizen/business user      | MCA grievance framework                | Complaint service              | User, issue, entity/transaction ref                 | Evidence where required                 | Service-specific    | No                        | Create → assign → respond → close                               | Category/routing/identity            | Complaint/case record         | Follow-up/escalation            | Capability VERIFIED; workflow UNKNOWN                     |              |
| Investor claims         | Claim IEPF amounts/securities          | Investor                   | Companies Act + IEPF Rules             | IEPF forms incl. IEPF-5        | Investor/company/claim data                         | Identity/claim evidence                 | Yes / applicable    | Yes / applicable          | Claim → validation → processing → outcome                       | Claim eligibility/doc rules          | Claim/case outcome            | Further action if required      | IEPF-5 core VERIFIED                                      |              |
| Data & reports          | Consume regulatory data                | Public user                | Disclosure/statistical framework       | Data/report services           | Report/search parameters                            | None                                    | No                  | May apply                 | Query → aggregate/retrieve → display                            | Access/data availability             | Report/dataset                | None                            | Family partly INFERRED                                    |              |
| Adjudication            | Resolve contravention                  | Entity/person + authority  | Companies Act + Adjudication Rules     | e-Adjudication / case service  | Case, notice, parties, contravention                | Evidence/response                       | As applicable       | Penalty/payment may apply | Case → notice → response → hearing/review → order               | Jurisdiction/deadlines/evidence      | Order/penalty/compliance      | Appeal/further action           | Framework VERIFIED; internal workflow UNKNOWN             |              |
| Regulatory scrutiny     | Review compliance                      | Entity + regulator         | Companies Act / regulatory framework   | e-Scrutiny                     | Entity, filing/compliance data                      | Filed records/evidence                  | As applicable       | Not necessarily           | Signal → scrutiny → review → action                             | Risk/exception rules                 | Review outcome                | Corrective action               | Phase 1 marks status UNKNOWN                              |              |

# 3\. Reusable Platform Primitive Hypothesis

These are candidate architectural primitives, not claims about MCA's existing internal backend.

| **Primitive**             | **Appears across**                                           | **Candidate responsibility**                              |
| ------------------------- | ------------------------------------------------------------ | --------------------------------------------------------- |
| COMMON IDENTITY           | Users, directors, partners, professionals, investors         | Authentication, account, role, authority, delegation      |
| COMMON ENTITY / REGISTRY  | Companies, LLPs, persons, relationships, charges             | Canonical records, relationships, effective dates, status |
| COMMON DATA               | Incorporation, annual, KYC, capital, LLP, investor           | Reusable canonical data + prefill                         |
| COMMON RULES              | Eligibility, applicability, validation, deadlines, access    | Versioned source-linked rules                             |
| COMMON DOCUMENTS          | Incorporation, KYC, office, charges, closure, public records | Evidence, metadata, validation, retention, retrieval      |
| COMMON SIGNATURE          | Company/LLP/director/professional filings                    | Signer, authority, DSC/signature verification             |
| COMMON FEE                | Paid filings/services                                        | Versioned fee calculation + additional fee                |
| COMMON PAYMENT            | Filing, documents, fees                                      | Payment intent, confirmation, failure/refund              |
| COMMON WORKFLOW           | Submission, STP/manual, query, decision                      | State machine, routing, SLA, exceptions                   |
| COMMON NOTIFICATION       | Filing, payment, query, decision, complaint                  | Event-triggered communications                            |
| COMMON CASE MANAGEMENT    | Complaints, adjudication, scrutiny                           | Case, notice, evidence, response, decision                |
| COMMON AUDIT / PROVENANCE | All consequential actions                                    | Who/what/when/source/rule version                         |
| SERVICE-SPECIFIC LOGIC    | Formation, charges, closure, IEPF, etc.                      | Legal-event-specific orchestration and rules              |

# 4\. Form-to-Capability Clustering

| **Cluster**               | **Representative forms/services**          | **Shared stack**                                                                         | **Service-specific layer**         |
| ------------------------- | ------------------------------------------ | ---------------------------------------------------------------------------------------- | ---------------------------------- |
| Entity creation           | SPICe+, FiLLiP                             | Identity + entity + name + data + docs + signature + fee + payment + workflow + registry | Company vs LLP formation rules     |
| Person / role maintenance | DIR forms; LLP partner forms               | Person + role relationship + signature + filing + registry                               | Director vs partner rules          |
| Periodic compliance       | AOC-4; MGT-7; LLP 8/11; DIR-3 KYC          | Obligation engine + prefill + data + docs + signature + fee + payment + workflow         | Period-specific applicability/data |
| Event-based change        | Director; office; capital; charge; partner | Event engine + relationships + docs + signature + fee + workflow + registry              | Event-specific legal rules         |
| Registry disclosure       | Master data; public docs; certified copies | Search + entitlement + payment + document/registry access                                | Disclosure/access restrictions     |
| Regulatory cases          | Complaint; adjudication; scrutiny          | Case + notice + evidence + response + authority + decision + audit                       | Proceeding-specific rules          |
| Closure                   | STK; LLP closure                           | Eligibility + obligations + docs + application + payment + workflow + registry           | Closure grounds/preconditions      |
| Investor services         | IEPF services                              | Identity + claim + docs + payment + case/workflow                                        | IEPF eligibility/claim rules       |

# 5\. Shared Data Model Candidates

| **Object**           | **Core attributes / relationships**                              | **Why reusable**                                 |
| -------------------- | ---------------------------------------------------------------- | ------------------------------------------------ |
| Person               | Identity, identifiers, contact, status                           | Director, partner, investor, filer, professional |
| Account              | Credentials, account type, authentication state                  | Portal access ≠ statutory identity               |
| Role / Authority     | Person ↔ entity ↔ role, effective dates                          | Separates authority from identity                |
| Company              | CIN, name, type, status, office, capital                         | Canonical company record                         |
| LLP                  | LLPIN, name, status, office, contribution                        | Canonical LLP record                             |
| Filing / Transaction | SRN, service, actor, entity, timestamps, status                  | Common transaction spine                         |
| Document             | Type, owner, source, version, status, entitlement                | Common evidence/public-record object             |
| Charge               | ID, holder, amount, dates, status                                | Persistent lifecycle object                      |
| Obligation           | Entity, trigger, legal basis, due date, status                   | Compliance workspace                             |
| Rule                 | Source, provision, version, effective dates, conditions          | Machine-addressable regulation                   |
| Fee                  | Rule version, base/additional fee, parameters                    | Calculation separated from payment               |
| Payment              | Transaction, amount, reference, status                           | Payment state separated from filing state        |
| Case                 | Type, authority, parties, notices, responses, evidence, decision | Shared proceedings model                         |
| Notification         | Trigger, recipient, channel, delivery status                     | Cross-service communication                      |
| Audit event          | Actor, timestamp, action, object, source/rule version            | Traceability/accountability                      |

# 6\. Common Workflow Model

Phase 1 presents a 19-state transaction lifecycle; its detailed transitions are explicitly classified as inferred and require validation. The architectural use is to separate generic transaction states from service-specific processing.

**Draft → Validating → Validated → Signing → Fee Calculation → Payment → Submitted → Processing → STP / Manual Review → Query / Resubmission → Approved / Rejected → Registry Update → Completed**

- Payment status should remain separate from filing status.
- STP/manual should be a configurable processing decision, not duplicated in each service.
- Query/resubmission should be a reusable capability; exact SRN/version semantics remain UNKNOWN.
- Registry update should be an explicit outcome.
- Failures, refunds, exceptions and escalations require explicit states.

# 7\. Legal Rule → Digital Capability

| **Rule category**      | **Shared engine / service**  | **Example**                             |
| ---------------------- | ---------------------------- | --------------------------------------- |
| Eligibility            | Rules engine                 | Can this actor/entity use this service? |
| Applicability          | Obligation/rules engine      | Does this obligation apply?             |
| Field validation       | Schema validator             | Is the field structurally valid?        |
| Cross-field validation | Rules engine                 | Do values agree?                        |
| Entity relationship    | Registry/domain rules        | Is the actor authorised for the entity? |
| Document requirement   | Document rules               | Which evidence is required?             |
| Signature authority    | Identity/authority/signature | Who must sign and in what capacity?     |
| Deadline               | Temporal rules               | When is filing due?                     |
| Fee                    | Fee engine                   | What fee/additional fee applies?        |
| Routing                | Workflow engine              | STP vs manual; which authority?         |
| Access                 | Authorisation policy         | Who may view/modify?                    |
| Outcome                | Registry/workflow            | What canonical record/state is created? |

# 8\. Implications for the MCA Website Revamp

- Do not start by recreating forms one-by-one.
- Start with canonical domain objects and reusable platform services.
- Represent legal obligations as first-class objects so users can see what is due, why, and how to resolve it.
- Use event/service intents such as "change director" or "change registered office" rather than requiring users to know form numbers.
- Resolve the appropriate form/view from service intent + legal context.
- Pre-fill from canonical registry data where legally and operationally permissible.
- Make validation explainable where appropriate.
- Unify signing, documents, payment, notifications and tracking.
- Keep form numbers as legal/operational identifiers, not the primary UX information architecture.
- Make regulatory change versioned and traceable.

# 9\. Critical Unknowns / Validation Required

- Live portal was not accessible in Phase 1; no seed URL was directly verified.
- Complete 100+ service and 70+ form catalogues require validation.
- Exact service-to-form mappings require validation.
- Exact field-level validations are not established.
- Exact STP eligibility/manual routing is unknown.
- Internal ROC/RD SOPs and review criteria are unavailable.
- Payment gateway/challan/refund mechanics are unknown.
- DSC verification architecture is unknown.
- Role-permission matrix is unknown.
- Public vs authenticated access boundaries are unclear.
- Legacy V2/e-Scrutiny/CMS relationships remain unresolved.
- Current URL structure and live IA were not verified.

# 10\. Required Phase 2 Outputs

| **Output**                  | **Granularity**                                       | **Purpose**                 |
| --------------------------- | ----------------------------------------------------- | --------------------------- |
| Validated service catalogue | Every service, status, actor, owner                   | Authoritative inventory     |
| Validated form catalogue    | Every form, version, service relationship             | Legal/operational inventory |
| Service decomposition map   | Service → capability → data → docs → rules → workflow | Target architecture         |
| Rule catalogue              | Rule + source + conditions + version                  | Rules engine                |
| Data dictionary             | Canonical object/field + source + reuse               | Common data model           |
| Document matrix             | Document + trigger + validation + retention           | Document platform           |
| Workflow catalogue          | States + routing + SLA + exceptions                   | Workflow platform           |
| Role/authority matrix       | Actor + entity + action + permission                  | Identity/access             |
| Fee matrix                  | Rule + parameters + timing + effective date           | Fee engine                  |
| Integration map             | Dependency + exchange + ownership                     | Integration architecture    |
| Case model                  | Complaint/adjudication/scrutiny lifecycle             | Regulatory case platform    |
| Traceability matrix         | Legal provision → service → rule → form → outcome     | Auditability                |

# 11\. Core Architectural Principle

**The target system should be modelled as a regulatory service platform, not a collection of forms.**

A form is one presentation/submission surface for a legal obligation. The durable architecture underneath consists of identity, entities, relationships, canonical data, regulatory rules, documents, signatures, fees, payment, workflow, cases, registry records, notifications and auditability. Service-specific logic composes those primitives according to the applicable legal event and rule version.

This matrix is therefore the bridge between Phase 1 current-state reconstruction and Phase 2 future-state architecture.

# 12\. Source Basis

Built from the Phase 1 Summary Report and MCA Regulatory Framework & Digital Rules Research Pack. Phase 1 states that core services such as SPICe+, FiLLiP, DIR-3 KYC, AOC-4, MGT-7, CHG-1, STK-2 and IEPF-5 are verified, while many complete catalogue mappings, detailed workflows, internal SOPs, technical architecture, APIs and exact business rules are inferred or unknown. The Regulatory Framework Pack establishes the legal → event → obligation → entity → data → document → form/service → validation → fee → workflow → outcome → registry → next-obligation traceability chain.