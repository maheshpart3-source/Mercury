**MCA REGULATORY FRAMEWORK**

**AND DIGITAL RULES RESEARCH PACK**

_Architecture-oriented regulatory map for the future MCA digital platform_

**Phase 2 input — not a reproduction of the Acts**

# 1\. Purpose and Scope

This document converts the MCA legal and regulatory environment into a structure usable for future digital product, service, workflow, data and rules architecture. It deliberately does not reproduce the Companies Act, LLP Act or their rules in full.

The target traceability chain is:

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

This is a research and architecture model, not legal advice. Production decisions must use the applicable current statutory text, rules, notifications, circulars, orders and official form instructions.

# 2\. Evidence and Currentness Method

| **Evidence class**                   | **Meaning**                                                           | **Architecture use**                                                    |
| ------------------------------------ | --------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| PRIMARY — STATUTE                    | Act / section / schedule from an official legislative source.         | Highest legal authority.                                                |
| PRIMARY — RULE                       | Rule or schedule made under the relevant Act.                         | Detailed procedural requirements.                                       |
| PRIMARY — NOTIFICATION / ORDER       | Official Gazette/MCA notification, order or amendment.                | Commencement, amendment, exemption, prescription or operational change. |
| PRIMARY — CIRCULAR / MCA INSTRUCTION | Official clarification, circular, instruction or procedural material. | Operational interpretation; verify legal status.                        |
| PRIMARY — FORM INSTRUCTION KIT       | Official MCA instruction kit.                                         | Strong evidence for digital data, documents, fees and submission logic. |
| SECONDARY OFFICIAL                   | MCA manual, annual report or explanatory material.                    | Context; not a substitute for the law.                                  |
| INFERRED                             | Logical relationship derived from multiple sources.                   | Architecture hypothesis only.                                           |
| UNKNOWN / VALIDATION REQUIRED        | Not established from accessible evidence.                             | Must not become a system requirement without validation.                |

Currentness rule: every material legal mapping should carry a source date/version and currentness status. India Code exposes the Acts and associated instruments; the applicable current legal text remains controlling.

# 3\. Primary Regulatory Framework

| **Instrument**                            | **Role**                                                                                                                                     | **Digital architecture implication**                                                     |
| ----------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| Companies Act, 2013                       | Primary statutory framework for company formation, governance, capital, charges, filings, accounts, investigation, adjudication and closure. | Master company lifecycle, obligation, registry, filing, workflow and enforcement domain. |
| Companies Rules                           | Detailed procedural rules, forms, fees, timelines and conditions.                                                                            | Versioned regulatory/rules modules.                                                      |
| LLP Act, 2008                             | Primary framework for LLP formation, partners/designated partners, contributions, disclosures, conversion, investigation and dissolution.    | LLP lifecycle domain sharing platform primitives.                                        |
| LLP Rules, 2009 + amendments              | Detailed LLP procedures, forms and fees.                                                                                                     | Configurable LLP rules/service layer.                                                    |
| Notifications / Gazette instruments       | Commencement, amendments, exemptions, dates and legally operative changes.                                                                   | Versioned regulatory-change events linked to affected services.                          |
| Circulars / MCA instructions              | Clarifications and operational guidance.                                                                                                     | Provenance-aware regulatory knowledge layer.                                             |
| Orders / adjudication / tribunal material | Legally meaningful decisions, directions and penalties.                                                                                      | Case/decision/order architecture.                                                        |

**Source note:** India Code identifies the Companies Act, 2013 as Act 18 of 2013 and the LLP Act, 2008 as Act 6 of 2009, under the Ministry of Corporate Affairs. It also exposes associated rules, notifications, orders and circulars.

# 4\. Companies Act, 2013 — Digital Domain Map

| **Domain**               | **Representative legal area**                            | **Business/legal event**         | **Digital object**                    |
| ------------------------ | -------------------------------------------------------- | -------------------------------- | ------------------------------------- |
| Formation                | Formation, memorandum, articles, incorporation           | Create company                   | Incorporation service/entity creation |
| Name                     | Name provisions and rules                                | Reserve/change name              | Name service + validation             |
| Share capital            | Capital/securities provisions                            | Issue/alter/transfer capital     | Capital event + filing + registry     |
| Directors                | Director appointment/qualification/DIN-related framework | Appoint/change director          | Person-role relationship + filing     |
| Registered office        | Registered office provisions                             | Establish/change office          | Address record + evidence workflow    |
| Charges                  | Registration of charges                                  | Create/modify/satisfy charge     | Charge lifecycle + registry           |
| Accounts                 | Accounts/financial statements                            | Prepare/approve/file accounts    | Financial filing + records            |
| Audit                    | Audit provisions                                         | Appoint/change auditor           | Auditor relationship + filing         |
| Annual return            | Annual-return provisions                                 | Periodic return                  | Recurring obligation + filing         |
| Governance               | Meetings/resolutions/registers                           | Corporate action                 | Governance event + record             |
| Beneficial ownership     | Significant beneficial ownership framework               | Identify/report ownership        | Ownership/control relationship        |
| Deposits                 | Deposit provisions                                       | Accept/return/deal with deposits | Compliance obligation + filing        |
| CSR                      | CSR framework                                            | Applicability/reporting          | Eligibility + disclosure              |
| Inspection/investigation | Regulatory scrutiny                                      | Inquiry/investigation            | Case + notice + evidence              |
| Restructuring            | Compromise/arrangement/merger                            | Corporate restructuring          | Case/workflow + tribunal linkage      |
| Closure                  | Strike-off/removal/winding-up related provisions         | Close company                    | Closure workflow + registry state     |
| Adjudication             | Penalty/adjudication provisions                          | Contravention                    | Case + order + penalty                |
| Tribunals                | NCLT/NCLAT framework                                     | Appeal/judicial process          | Related case + order record           |

**Source note:** India Code's Companies Act structure spans incorporation, securities, capital, deposits, charges, management, accounts/audit, restructuring, disputes, foreign companies, registration/fees, information/statistics, tribunals and special courts.

# 5\. Companies Rules — Architecture Taxonomy

| **Rule family**                                                                      | **Digital responsibility**                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------- |
| Companies (Incorporation) Rules, 2014                                                | Requirements, validations, forms, fees, deadlines and/or workflow logic — map precisely during Phase 2. |
| Companies (Prospectus and Allotment of Securities) Rules, 2014                       | Requirements, validations, forms, fees, deadlines and/or workflow logic — map precisely during Phase 2. |
| Companies (Share Capital and Debentures) Rules, 2014                                 | Requirements, validations, forms, fees, deadlines and/or workflow logic — map precisely during Phase 2. |
| Companies (Acceptance of Deposits) Rules, 2014                                       | Requirements, validations, forms, fees, deadlines and/or workflow logic — map precisely during Phase 2. |
| Companies (Registration of Charges) Rules, 2014                                      | Requirements, validations, forms, fees, deadlines and/or workflow logic — map precisely during Phase 2. |
| Companies (Management and Administration) Rules, 2014                                | Requirements, validations, forms, fees, deadlines and/or workflow logic — map precisely during Phase 2. |
| Companies (Accounts) Rules, 2014                                                     | Requirements, validations, forms, fees, deadlines and/or workflow logic — map precisely during Phase 2. |
| Companies (Audit and Auditors) Rules, 2014                                           | Requirements, validations, forms, fees, deadlines and/or workflow logic — map precisely during Phase 2. |
| Companies (Meetings of Board and its Powers) Rules, 2014                             | Requirements, validations, forms, fees, deadlines and/or workflow logic — map precisely during Phase 2. |
| Companies (Appointment and Qualification of Directors) Rules, 2014                   | Requirements, validations, forms, fees, deadlines and/or workflow logic — map precisely during Phase 2. |
| Companies (Appointment and Remuneration of Managerial Personnel) Rules, 2014         | Requirements, validations, forms, fees, deadlines and/or workflow logic — map precisely during Phase 2. |
| Companies (Inspection, Investigation and Inquiry) Rules, 2014                        | Requirements, validations, forms, fees, deadlines and/or workflow logic — map precisely during Phase 2. |
| Companies (Registration of Foreign Companies) Rules, 2014                            | Requirements, validations, forms, fees, deadlines and/or workflow logic — map precisely during Phase 2. |
| Companies (Registration Offices and Fees) Rules, 2014                                | Requirements, validations, forms, fees, deadlines and/or workflow logic — map precisely during Phase 2. |
| Companies (Nidhi) Rules, 2014                                                        | Requirements, validations, forms, fees, deadlines and/or workflow logic — map precisely during Phase 2. |
| Companies (Adjudication of Penalties) Rules, 2014                                    | Requirements, validations, forms, fees, deadlines and/or workflow logic — map precisely during Phase 2. |
| Companies (Miscellaneous) Rules, 2014                                                | Requirements, validations, forms, fees, deadlines and/or workflow logic — map precisely during Phase 2. |
| Companies (Indian Accounting Standards) Rules, 2015                                  | Requirements, validations, forms, fees, deadlines and/or workflow logic — map precisely during Phase 2. |
| Companies (Removal of Names of Companies from the Register of Companies) Rules, 2016 | Requirements, validations, forms, fees, deadlines and/or workflow logic — map precisely during Phase 2. |

**Source note:** The MCA Unified Manual lists these rule families. Individual rules may have been amended; the current consolidated rule text and subsequent notifications must be checked before implementation.

# 6\. LLP Regulatory Framework

| **Domain**             | **Legal area**                      | **Event**                      | **Digital object**                |
| ---------------------- | ----------------------------------- | ------------------------------ | --------------------------------- |
| Formation              | Incorporation document/registration | Create LLP                     | LLP incorporation service         |
| Name                   | Reservation/rectification/change    | Reserve/change name            | Name service + validation         |
| Registered office      | Registered office                   | Establish/change office        | Address record                    |
| Partners               | Partners/designated partners        | Add/remove/change partner      | Person ↔ LLP relationship         |
| Contributions          | Contribution framework              | Change contribution            | Contribution event                |
| Partner relations      | LLP agreement/relations             | Change internal arrangement    | Document + relationship           |
| Financial disclosure   | Financial disclosures/annual return | Periodic compliance            | Recurring obligation + filing     |
| Conversion             | Conversion provisions               | Convert to LLP where permitted | Conversion workflow               |
| Foreign LLP            | Foreign LLP framework               | Register/compliance            | Foreign-entity workflow           |
| Investigation          | Investigation provisions            | Regulatory investigation       | Case workflow                     |
| Winding up/dissolution | Closure framework                   | Close LLP                      | Closure workflow + registry state |

**Source note:** India Code's LLP Act structure includes incorporation, registered office, partners/designated partners, contributions, financial disclosures, conversion, foreign LLPs, investigation and winding up/dissolution. India Code also lists the LLP Rules, 2009 and amendments.

# 7\. Major Legal / Business Event Catalogue

| **Event**                    | **Actor/entity**                       | **Regulatory question**                                    | **Digital consequence**                                                            |
| ---------------------------- | -------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Start a company              | Promoter / proposed directors          | Can it be incorporated and under what conditions?          | Eligibility + name + incorporation + identity + documents + payment + registration |
| Start an LLP                 | Proposed partners/designated partners  | Can the LLP be registered?                                 | Name + partners + incorporation + registration                                     |
| Change directors             | Company + person + authorised filer    | Is the role change valid?                                  | Role relationship + identification + filing + registry update                      |
| Change registered office     | Company/LLP                            | What conditions and evidence apply?                        | Address event + verification + registry update                                     |
| Create/modify/satisfy charge | Company + charge holder                | What security interest exists and what must be registered? | Charge lifecycle + filing + registry                                               |
| Annual compliance            | Company/LLP + professional             | Which recurring obligations are due?                       | Obligation engine + reminders + filing                                             |
| Event-based filing           | Entity + authorised actor              | What filing follows the legal event?                       | Event-to-service resolution                                                        |
| Close company                | Company / authorised actor / regulator | Can the entity be removed/dissolved?                       | Eligibility + notices + closure workflow                                           |
| Close LLP                    | LLP / partners / regulator             | Can the LLP be dissolved?                                  | Closure workflow                                                                   |
| Public inspection            | Public user                            | What information is available and on what terms?           | Search + entitlement + fee + document access                                       |
| Regulatory scrutiny          | Regulator + entity                     | Is further inquiry required?                               | Case + notice + evidence + response                                                |
| Adjudication                 | Regulator + entity/person              | Has a contravention occurred?                              | Case + decision + order + payment/appeal                                           |
| Investor research            | Investor/public user                   | What public corporate information is available?            | Registry search + filings + documents + reports                                    |

# 8\. Major Incorporation Requirements — Digital Mapping

| **Requirement**          | **Digital representation**             | **Rule category**                       |
| ------------------------ | -------------------------------------- | --------------------------------------- |
| Entity type              | Entity-type object                     | Eligibility/jurisdiction                |
| Name                     | Name candidate                         | Similarity/prohibited-word/naming rules |
| Registered office        | Address + evidence                     | Address/evidence/jurisdiction           |
| Subscribers/founders     | Person ↔ proposed entity               | Identity/eligibility/declarations       |
| Directors                | Person ↔ role                          | Identification/eligibility/consent      |
| Constitutional documents | MOA/AOA or LLP incorporation documents | Schema/signature/legal consistency      |
| Capital/contribution     | Capital/contribution object            | Threshold/category rules                |
| Declarations             | Structured declarations                | Eligibility/compliance assertions       |
| Digital signature        | Signature object                       | Certificate/signer/authority            |
| Fees/stamp duty          | Fee calculation                        | Entity/category/jurisdiction rules      |
| Registration decision    | Workflow outcome                       | STP/manual review/deficiency            |
| Registry creation        | CIN/LLPIN + master record              | Unique identity/canonical state         |

This is an architecture abstraction. Exact applicability must be resolved from the applicable Act, Rules, current forms and official instruction kits.

# 9\. Director / Designated Partner Requirements

- Represent person identity separately from the person's relationship to a company or LLP.
- Separate identification number, corporate role, authority to act and transaction.
- Model appointment, resignation, cessation, disqualification and other role changes as lifecycle events.
- Represent KYC-related requirements as recurring or conditional obligations where applicable.
- Treat DSC/signing as a transaction capability, not as the user's identity itself.
- Represent professional representation and delegation separately from director/partner status.

# 10\. Registered Office Requirements

LEGAL REQUIREMENT

↓

ENTITY ADDRESS

↓

ADDRESS TYPE / STATUS

↓

EVIDENCE

↓

VERIFICATION / DECLARATION

↓

FILING

↓

REGISTRY UPDATE

↓

OUTCOME

- Address should be a first-class entity attribute with effective dates.
- Historical addresses should be preserved rather than overwritten.
- Evidence/verification status should be separate from the address.
- A change should be an event with an effective date and legal basis.

# 11\. Charges

CHARGE EVENT

↓

CREATE / MODIFY / SATISFY

↓

SECURITY-INTEREST DATA

↓

CHARGE HOLDER

↓

DOCUMENT / EVIDENCE

↓

FILING

↓

FEE

↓

REGISTRATION / VERIFICATION

↓

REGISTRY RECORD

↓

STATUS CHANGE

A future platform should treat a charge as a persistent registry object with a lifecycle, not merely a submitted form.

# 12\. Annual Compliance

ENTITY

↓

APPLICABILITY RULES

↓

OBLIGATION SET

↓

DUE DATES

↓

REQUIREMENTS

↓

FORM / SERVICE

↓

DATA + DOCUMENTS

↓

VALIDATION

↓

FEE / ADDITIONAL FEE

↓

SUBMISSION

↓

COMPLETION

↓

NEXT PERIOD

- Applicability should be calculated from entity characteristics and legal conditions.
- Due dates should derive from applicable rules/event dates.
- Late filing should be a rule/fee state, not a separate website concept.
- Completed obligations should remain part of compliance history.
- Workspace should expose upcoming, due, overdue and completed obligations.

# 13\. Event-Based Compliance

| **Event**                           | **Rules-engine question**                             | **Service consequence**     |
| ----------------------------------- | ----------------------------------------------------- | --------------------------- |
| Director appointed/resigned         | Which filings, declarations and deadlines arise?      | Director-change workflow    |
| Registered office changed           | What evidence, notice and effective-date rules apply? | Address-change workflow     |
| Share capital changed               | Which approvals, filings and records are required?    | Capital-event workflow      |
| Charge created/modified/satisfied   | What registration and timing rules apply?             | Charge workflow             |
| Financial year closed               | Which annual obligations arise?                       | Annual compliance set       |
| Ownership/control event             | Which beneficial-ownership disclosures apply?         | Ownership/control workflow  |
| Corporate restructuring             | Which approval/case pathway applies?                  | Restructuring workflow      |
| Entity becomes eligible for closure | Which closure conditions apply?                       | Strike-off/closure workflow |

# 14\. Strike-Off / Closure

CLOSURE INTENT

↓

ELIGIBILITY

↓

PRECONDITIONS

↓

DECLARATIONS / DOCUMENTS

↓

APPLICATION

↓

NOTICE / OBJECTION PERIOD

↓

REGULATORY REVIEW

↓

DECISION

↓

REGISTRY STATE CHANGE

↓

POST-CLOSURE RECORD / ACCESS

**Source note:** Official MCA material for the Companies (Removal of Names of Companies from the Register of Companies) Rules, 2016 includes STK forms and notices under section 248. Exact current procedure must be checked against the latest applicable rules and amendments.

# 15\. Inspection / Public Documents / Public Registry

| **Capability**               | **Underlying object**                           | **Digital architecture**                          |
| ---------------------------- | ----------------------------------------------- | ------------------------------------------------- |
| Master data                  | Canonical registry record                       | Search/index + entity profile                     |
| Company/LLP documents        | Public records subject to applicable rules/fees | Document catalogue + entitlement + payment/access |
| Certified copies             | Officially issued/verified record               | Document issuance + verification metadata         |
| Charges                      | Public charge record                            | Searchable registry object                        |
| Filings                      | Filed statutory records                         | Filing archive + metadata + access                |
| Director/partner information | Public registry attributes subject to law       | Relationship search + access rules                |
| Reports/statistics           | Aggregated regulatory data                      | Analytics/data publication layer                  |

Public access should be architecturally distinct from authenticated transactional modification rights.

# 16\. Adjudication and Enforcement

CONTRAVENTION / REGULATORY SIGNAL

↓

CASE CREATION

↓

JURISDICTION / AUTHORITY

↓

NOTICE

↓

RESPONSE / EVIDENCE

↓

HEARING / REVIEW

↓

DECISION

↓

ORDER / PENALTY

↓

PAYMENT / COMPLIANCE

↓

APPEAL / FURTHER ACTION

↓

CASE CLOSURE

- Case is distinct from transaction.
- Notice, response, evidence, hearing and order are distinct objects.
- Cases need an immutable audit trail.
- Orders should link to legal provision, authority and underlying case.
- Penalty payment should link to the order/case.
- Appeal/review should create a related case rather than overwrite the original.

**Source note:** The Companies Act contains adjudication, investigation, tribunal and special-court provisions; the MCA rule taxonomy includes Companies (Adjudication of Penalties) Rules, 2014.

# 17\. Investor-Related Requirements

| **Need**                     | **Underlying object**                         | **Experience requirement**              |
| ---------------------------- | --------------------------------------------- | --------------------------------------- |
| Research company             | Company master record                         | Search + entity profile                 |
| Review filings               | Filing records                                | Chronological filing history            |
| Inspect public documents     | Document records                              | Entitlement + fee + access              |
| Understand ownership/control | Ownership/control records where public        | Relationship visualization + provenance |
| Review charges               | Charge records                                | Status + holder + dates                 |
| Review regulatory events     | Orders/notices/public records where available | Case/order timeline                     |
| Use reports/data             | Aggregated data                               | Structured datasets + provenance        |

# 18\. Notifications, Circulars, Orders and MCA Instructions

REGULATORY CHANGE

↓

SOURCE INSTRUMENT

↓

EFFECTIVE DATE

↓

AFFECTED PROVISION

↓

AFFECTED RULE

↓

AFFECTED REQUIREMENT

↓

AFFECTED SERVICE / FORM

↓

AFFECTED VALIDATION

↓

AFFECTED FEE / DEADLINE

↓

AFFECTED WORKFLOW

↓

TEST CASES

↓

DEPLOYMENT / CONFIGURATION

↓

AUDIT TRAIL

| **Regulatory object** | **Minimum metadata**                                      |
| --------------------- | --------------------------------------------------------- |
| Act / section         | Act, section/schedule, version/source                     |
| Rule                  | Rule family, rule number, version/effective date          |
| Notification          | Number, date, subject, effective date, affected provision |
| Circular              | Number/date, issuing authority, subject, applicability    |
| Order                 | Order number/date, authority, affected case/provision     |
| MCA instruction       | Document/date, affected process/service, status           |

# 19\. Machine-Readable Regulatory Rules Model

Regulation

├── sourceInstrument

├── provision

├── version

├── effectiveFrom

├── effectiveTo

├── applicability

│ ├── entityType

│ ├── jurisdiction

│ ├── threshold

│ ├── status

│ └── event

├── obligation

├── requiredData

├── requiredDocuments

├── validations

├── deadlines

├── feeRules

├── workflow

├── authority

├── outcomes

└── downstreamObligations

Every automated rule should be traceable to a legal/regulatory source and explainable to the user where appropriate.

# 20\. Regulatory Rule Categories

| **Rule type** | **Purpose**                         | **Digital implementation candidate** |
| ------------- | ----------------------------------- | ------------------------------------ |
| Eligibility   | Who can use a service?              | Rules engine                         |
| Applicability | Does an obligation apply?           | Rules engine                         |
| Field         | Is a value structurally valid?      | Schema validation                    |
| Cross-field   | Do values make sense together?      | Rules engine                         |
| Entity        | Is actor/entity relationship valid? | Domain validation                    |
| Document      | Is evidence required/acceptable?    | Document rules                       |
| Signature     | Who must sign and in what capacity? | Authority/signature rules            |
| Deadline      | When must action occur?             | Temporal rules                       |
| Fee           | What fee/additional fee applies?    | Fee engine                           |
| Workflow      | Which processing route applies?     | Workflow engine                      |
| Authority     | Which regulator/body acts?          | Routing rules                        |
| Outcome       | What record/state is produced?      | Workflow + registry                  |
| Access        | Who may view/modify information?    | Authorisation policy                 |

# 21\. Legal-to-Form Traceability

LEGAL REQUIREMENT

↓

REQUIRED EVIDENCE

↓

DATA SCHEMA

↓

FORM VIEW

↓

VALIDATION

↓

DOCUMENTS

↓

SIGNATURE

↓

SUBMISSION

↓

PROCESSING

↓

OUTCOME

Form numbers remain legally meaningful objects, but should not be the primary organizing principle of the future user experience.

# 22\. Fees and Additional Fees

- Fee rules should be versioned and linked to their legal/rule source.
- Fee calculation should be deterministic and explainable.
- Fee applicability may depend on entity type, capital/contribution, filing type, jurisdiction, timing and other parameters.
- Additional/late fees should derive from applicable delay rules.
- Payment status should be distinct from filing status.
- Refund, failed-payment and duplicate-payment outcomes should be explicit states.

**Source note:** MCA form instruction kits demonstrate that fee rules are linked to applicable rules and that additional fees can depend on event dates and filing time limits. Exact fee values are intentionally not frozen here because they can change.

# 23\. Regulatory Change Management

NEW / AMENDING INSTRUMENT

↓

LEGAL IMPACT ANALYSIS

↓

IMPACTED RULES

↓

IMPACTED SERVICES

↓

IMPACTED FORMS

↓

IMPACTED DATA

↓

IMPACTED VALIDATIONS

↓

IMPACTED FEES / DEADLINES

↓

IMPACTED WORKFLOWS

↓

REGRESSION TESTS

↓

RELEASE / CONFIGURATION

↓

AUDIT RECORD

- Every rule should have an effective date.
- Historical versions should be preserved where required.
- Transactions should resolve against the correct rule version for the relevant legal event/date.
- Regulatory changes should generate an impact list before deployment.
- Rules should be testable independently from UI.

# 24\. Boundaries and Non-Goals

- This document does not reproduce the Acts or Rules in full.
- It is not legal advice.
- It does not claim to reveal MCA internal SOPs.
- It does not claim to reveal MCA internal databases, APIs, microservices or technology stack.
- It does not claim that MCA currently uses the proposed machine-readable rules architecture.
- Where current implementation is not publicly verifiable, the item remains an architecture proposal or validation requirement.

# 25\. Phase 2 Research Agenda

1. Map highest-value legal provisions to concrete MCA services and forms.
2. Map service → form → data → document → validation → fee → workflow → outcome.
3. Identify reusable rules across multiple services.
4. Identify recurring obligations and their trigger conditions.
5. Separate public registry information from authenticated transactional information.
6. Model case-based regulatory processes separately from filing transactions.
7. Determine which regulatory rules can safely become configuration/rules-engine objects.
8. Identify legal changes that require versioned service behaviour.
9. Stress-test the model against incorporation, annual filing, director change, charges, closure, public inspection, compliance and adjudication.

# 26\. Initial Legal-to-Digital Traceability Matrix

| **Legal anchor**                        | **Event**               | **Actor/entity**            | **Required data**                                     | **Service**                  | **Rules**                                      | **Outcome**             |
| --------------------------------------- | ----------------------- | --------------------------- | ----------------------------------------------------- | ---------------------------- | ---------------------------------------------- | ----------------------- |
| Companies Act — formation/incorporation | Start company           | Promoter / proposed company | Identity, constitution, office, capital, declarations | Incorporation                | Eligibility, naming, documents, signature, fee | Registration/CIN        |
| Companies Act — directors               | Appoint/change director | Person + company            | Identity, role, declarations                          | Director service/filing      | Eligibility, role, identity                    | Registry relationship   |
| Companies Act — registered office       | Establish/change office | Company                     | Address, evidence, effective date                     | Office service               | Address/evidence/timing                        | Registry update         |
| Companies Act — charges                 | Create/modify/satisfy   | Company + charge holder     | Charge/security data, evidence                        | Charge service               | Timing, document, status                       | Charge registry         |
| Companies Act — annual compliance       | Periodic filing         | Company                     | Financial/governance data                             | Annual filing                | Applicability, deadline, fee                   | Filing record           |
| Companies Act — strike-off              | Close company           | Company                     | Closure declarations/evidence                         | Strike-off service           | Eligibility, preconditions, notice             | Removed/dissolved state |
| LLP Act — incorporation                 | Start LLP               | Partners/proposed LLP       | Partner, contribution, office                         | LLP incorporation            | Eligibility, name, partner, docs               | LLPIN/registry          |
| LLP Act — annual disclosure             | Periodic compliance     | LLP                         | Financial/partner data                                | LLP filing                   | Applicability, deadline, fee                   | Filing record           |
| LLP Act — dissolution                   | Close LLP               | LLP/partners                | Closure evidence                                      | LLP closure                  | Eligibility/process                            | Dissolved state         |
| Companies Act — inspection              | Research record         | Public user                 | Search parameters                                     | Public documents/master data | Access/fee rules                               | Record/document         |
| Companies Act — adjudication            | Resolve contravention   | Entity/person + authority   | Case, notice, response, evidence                      | Adjudication                 | Jurisdiction/procedure                         | Order/penalty/appeal    |

# 27\. Source Register

| **Source**                                             | **Use**                                                    | **Status**                          |
| ------------------------------------------------------ | ---------------------------------------------------------- | ----------------------------------- |
| India Code — Companies Act, 2013                       | Primary statutory framework and chapter/section structure. | Official legislative source.        |
| India Code — LLP Act, 2008                             | Primary LLP statutory framework.                           | Official legislative source.        |
| MCA Unified Manual of MCA                              | Rule-family taxonomy and departmental context.             | Official MCA supporting source.     |
| MCA Instruction Kit — Form FiLLiP                      | Example legal → form → fee → submission mapping.           | Official MCA form instruction kit.  |
| MCA Companies (Incorporation) Rules amendment material | Example of rule-driven name validation.                    | Official MCA notification material. |
| MCA Companies (Removal of Names...) Rules, 2016        | Strike-off procedural framework and STK forms.             | Official MCA/Gazette material.      |
| MCA annual-report / notifications material             | Context for notifications and LLP rule history.            | Official MCA supporting source.     |

For production architecture, expand this register into a machine-readable evidence catalogue with source URL, document ID, publication date, effective date, legal status, affected provisions and affected digital objects.

# 28\. Key Architecture Conclusions

- The future MCA platform should be legal-rule-aware, not merely form-aware.
- A service should orchestrate requirements, data, documents, validation, fees, signatures, workflow and outcomes.
- Forms should be representations of service/data requirements, not the primary information architecture.
- Legal requirements need provenance and effective dates.
- Regulatory changes should propagate through a traceable impact chain.
- Entity, person, role, authority and transaction must remain separate concepts.
- Recurring compliance should be represented as an obligation engine.
- Adjudication/enforcement should be case management, not ordinary filing.
- Public registry access should be separated from transactional modification rights.
- Payment, filing, workflow, document and case states should not be collapsed into one status.
- Automated validations and decisions should be explainable in terms of the applicable rule/source.

# 29\. Critical Unknowns for MCA Validation

- Exact current consolidated text/version of each rule family as implemented in the portal.
- Exact current service-to-form mappings.
- Exact field-level validation logic.
- Internal SOPs and processing routing.
- Exact role/permission matrix for authenticated users and professionals.
- Exact STP versus manual-review routing by service.
- Internal system boundaries and APIs.
- Current relationship between legacy and current MCA digital modules.
- Current My Workspace behaviour and transaction-state semantics.
- Exact fee configuration and effective-date handling.
- Current notification/event architecture.
- Current document-management and public-document access implementation.

These unknowns do not necessarily block Phase 2. They define the boundary between legally grounded architecture and implementation details requiring validation.