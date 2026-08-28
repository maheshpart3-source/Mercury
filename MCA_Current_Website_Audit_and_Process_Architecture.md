**MCA WEBSITE & MCA21 V3  
CURRENT-STATE AUDIT**

Page Map • Services • Forms • User Flows • Process Logic • SOP/Legal Mapping • System Architecture

_Audit baseline for a future website and digital-platform transformation_

Scope: current-state factual baseline of the MCA public website and MCA21 V3 ecosystem. It separates publicly verified facts from inferred or unknown backend behaviour. It is an audit and systems map, not a redesign proposal.

# 1\. Audit Objective

The website should be audited as the visible layer of a regulatory transaction platform, not as a collection of pages. The audit therefore connects page → service → form → legal basis → data → validation → payment → workflow → registry/document outcome → user status.

- Website information architecture and page inventory.
- Major service families and service entry points.
- Forms/e-forms/webforms and their role in transactions.
- User roles, authentication and authorisation.
- End-to-end user journeys and transaction states.
- Prerequisites, inputs, documents, validations, fees and payments.
- Automated versus human processing, including STP and officer workflows.
- Master data, public documents and electronic registry concepts.
- e-Scrutiny, Compliance Management, e-Enforcement, e-Adjudication and e-Consultation.
- Helpdesk, complaints, FAQs, tutorials and feedback.
- Data/reporting, APIs and interoperability.
- Legal/Rules/SOP traceability and audit gaps.

# 2\. Evidence Standard

| **Evidence class**               | **Meaning**                                                                                  |
| -------------------------------- | -------------------------------------------------------------------------------------------- |
| Verified current                 | Directly supported by current MCA material or recent Government statement.                   |
| Verified historical              | Official MCA documentation describing an earlier workflow; revalidate before implementation. |
| Publicly documented architecture | MCA/Government explicitly describes the module or capability.                                |
| Process inference                | Reasonable deduction from public behaviour; must be validated with MCA.                      |
| Unknown/internal                 | Not publicly documented; record as a discovery gap, not a guess.                             |

MCA does not expose every current form, internal SOP and backend implementation in one public catalogue. A production-grade exhaustive audit therefore requires a live crawl/export plus access to internal process documentation. This document provides the evidence-backed baseline and the master audit structure.

# 3\. Top-Level Website Map

HOME

├─ About MCA

├─ Acts & Rules

├─ My Workspace

├─ MCA Services

│ ├─ Company Services

│ ├─ LLP Services

│ ├─ E-Filing

│ ├─ DIN / Director Services

│ ├─ DSC Services

│ ├─ Master Data

│ ├─ Document-Related Services

│ ├─ Fee & Payment Services

│ ├─ Complaints / Grievances

│ ├─ Investor / specialised services

│ └─ Transaction tracking

├─ Data & Reports

│ ├─ Library

│ ├─ RD / ROC Information

│ ├─ Reports / Statistics

│ └─ Corporate information

├─ Help & FAQs

└─ Contact Us

MCA's new-website FAQ identifies Home, About MCA, Acts & Rules, My Workspace, MCA Services, Data & Reports, Help & FAQs and Contact Us as the main navigation; it also describes homepage cards for primary and frequently used services. citeturn1search0turn1search1

# 4\. Page-by-Page Audit

| **Page/area**        | **Purpose**                  | **Main functions**                                              | **Backend dependency**                    | **Audit question**                                         |
| -------------------- | ---------------------------- | --------------------------------------------------------------- | ----------------------------------------- | ---------------------------------------------------------- |
| Home                 | Gateway/discovery            | Service cards, updates, search, information corner.             | CMS + links to transaction modules.       | Is navigation organised around user intent?                |
| About MCA            | Institutional information    | Ministry, organisation, offices, related documents.             | CMS/document repository.                  | Can users understand ownership and escalation?             |
| Acts & Rules         | Legal knowledge              | Acts, rules, notifications, circulars, e-books.                 | Legal content/search.                     | Can a legal requirement be connected to a service?         |
| My Workspace         | Authenticated operating area | Drafts, filings, notices, payments, status/activity.            | Identity + transaction/workflow services. | Is this a true task dashboard or an inbox?                 |
| MCA Services         | Service catalogue            | Company, LLP, DIN, DSC, filing, documents, payment, complaints. | Service modules/orchestration.            | Can non-experts find the correct service?                  |
| Data & Reports       | Information/public data      | Library, reports, RD/ROC information, corporate data.           | Reporting/data dissemination.             | Can data be found and reused easily?                       |
| Help & FAQs          | Self-service support         | FAQs, manuals, tutorials, SOPs, webinars.                       | Knowledge base + helpdesk.                | Is help contextual to the user's transaction/error?        |
| Contact Us           | Support/escalation           | Helpdesk, contacts, grievance routes.                           | Ticket/case management.                   | Can support see transaction context?                       |
| Search               | Discovery                    | Website and sectional/document search.                          | Search/index service.                     | Does search understand intent, law, forms and identifiers? |
| Login/Registration   | Identity                     | Account creation, login, OTP/MFA, captcha/session.              | Identity/access management.               | Is person/entity/role/authorisation model clear?           |
| Service landing page | Transaction initiation       | Instructions, prerequisites, entry to service/form.             | Service metadata + transaction module.    | Does it explain outcome and processing path?               |
| Form/webform         | Data capture                 | Prefill, validation, documents, authentication, submission.     | Form engine + rules + master data.        | What is reusable and what is duplicated?                   |
| Payment              | Financial transaction        | Fee enquiry, payment and payment status.                        | Fee engine + gateway + ledger.            | Can payment be reconciled to the filing?                   |
| Status/SRN           | Transparency                 | Transaction status and outcome.                                 | Transaction/workflow state service.       | Does status explain next action?                           |

# 5\. Homepage Service Inventory

The official FAQ lists six primary cards: Register Company, Company Forms Downloads, Close Company, Register LLP, LLP Forms Downloads and Close LLP. Frequently used cards include E-Books, Name Reservation for Company/LLP, DIR-3 KYC, Track Transaction Status, View Public Documents, View Company/LLP Master Data, Associate/Update DSC, Enquire Fee, Independent Director/Databank Registration and E-Auction. citeturn0search15

| **Entry point**               | **Underlying journey**                                                          | **Primary users**       |
| ----------------------------- | ------------------------------------------------------------------------------- | ----------------------- |
| Register Company              | Name → incorporation → linked registrations → certificate → post-incorporation. | Founder/professional    |
| Company Forms Downloads       | Find prescribed forms/instructions.                                             | Professional/researcher |
| Close Company                 | Determine closure/strike-off route → application → processing → outcome.        | Company/professional    |
| Register LLP                  | Name → LLP registration → partner data → certificate.                           | Founder/professional    |
| LLP Forms Downloads           | Find prescribed LLP forms/instructions.                                         | Professional/researcher |
| Close LLP                     | Determine eligible closure route → application → outcome.                       | LLP/professional        |
| Name Reservation              | Search/check/reserve name.                                                      | Founder/professional    |
| DIR-3 KYC                     | Director identity/KYC compliance.                                               | Director/professional   |
| Track Transaction Status      | Track SRN/transaction.                                                          | All filing users        |
| Public Documents              | Search entity → document list → access/payment.                                 | Public/professional     |
| Master Data                   | Search entity → current registry information.                                   | Public/professional     |
| Associate/Update DSC          | Associate/update digital signature.                                             | Authorised filer        |
| Enquire Fee                   | Determine applicable fee.                                                       | All                     |
| Independent Director/Databank | Specialised registration/service.                                               | Eligible users          |
| E-Auction                     | Auction-related service.                                                        | Eligible users          |

# 6\. Functional Service Catalogue

| **Family**        | **Functions**                                              | **Inputs/dependencies**                                     | **Outputs**                                     |
| ----------------- | ---------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------- |
| Company Services  | Incorporation, name, changes, statutory/lifecycle actions. | Entity/person data, forms, evidence, fees.                  | Registry updates, filings, certificates/orders. |
| LLP Services      | LLP registration, changes, annual/statutory filings.       | LLPIN, partner data, forms, documents, fees.                | LLP registry/document updates.                  |
| E-Filing          | Find/download/fill/validate/sign/submit/resubmit forms.    | Account, master data, form data, authentication, documents. | SRN, filing record, status/outcome.             |
| DIN/Director      | Director identification and KYC-related services.          | DIN/person data, identity/contact, authentication.          | DIN record/status.                              |
| DSC               | Associate/update digital signature.                        | User/entity context, DSC, authentication.                   | DSC association state.                          |
| Master Data       | View company/LLP registry data.                            | Name/CIN/LLPIN/registration identifiers.                    | Structured registry information.                |
| Documents         | View public documents and document requests.               | Entity/document selection, payment where required.          | Document access/request status.                 |
| Fee & Payment     | Fee enquiry, payment, status and related payment routes.   | Service/form/SRN/challan, fee rules.                        | Payment receipt/status.                         |
| Complaints        | Service complaints, investor complaints, feedback.         | User, transaction context, evidence.                        | Complaint/case reference.                       |
| Investor Services | Investor/unclaimed amounts and related workflows.          | Investor/company data, uploads/confirmation.                | Search/update/claim outcome.                    |
| Tracking          | SRN/transaction tracking.                                  | SRN/transaction ID.                                         | Status/event history.                           |
| Data & Reports    | Reports, statistics, library, public information.          | Search/report criteria.                                     | Reports/documents/data.                         |

MCA V3 training groups services under Company Services, Complaint, Document-Related Services, Fee and payment services, DIN, DSC, Master Data, LLP Services and E-Filing. Older MCA help documentation also records Investor Services, SRN tracking, public trademark search and Reports & Statistics; those older labels should be reconciled against the live V3 menu before treating them as current navigation. citeturn1search2turn2search1

# 7\. Forms and Webforms

Forms are the transactional interface between statutory requirements and the MCA registry. The Companies (Registration Offices and Fees) Rules define an e-Form as an electronic prescribed form and define pre-fill as automated input from the electronic registry. citeturn1search3

| **Form category**        | **Representative examples**                        | **Audit fields**                                                                           |
| ------------------------ | -------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| Incorporation            | SPICe+ and linked incorporation services.          | Eligibility, name, directors, capital, integrated registrations, validations, certificate. |
| Director/DIN             | DIR-3, DIR-3 KYC and related forms.                | Identity, DIN, KYC, authentication, duplicates, linked entities.                           |
| Director changes         | DIR-12 and related event filings.                  | Appointment/change event, authorisation, fee, relationship update.                         |
| Annual filings           | AOC-4 family, MGT-7/MGT-7A and related filings.    | Financial/annual data, sequencing, due dates, attachments, XBRL where applicable.          |
| Share capital/securities | PAS/SH and related event forms.                    | Security event, capital data, disclosures, linked filings.                                 |
| Charges                  | CHG-series processes.                              | Creation/modification/satisfaction, lender/company roles, documents, registry impact.      |
| LLP filings              | LLP incorporation/change/annual forms.             | Partner data, events, annual return, fees, validations.                                    |
| Closure                  | Strike-off/closure applications and related forms. | Eligibility, outstanding obligations, dependencies, notice/order flow.                     |
| Investor/unclaimed       | Investor uploads/claims/services.                  | Identity, uploads, verification, confirmation.                                             |

This is a representative taxonomy, not a claim that it is every active form. The final audit should export the live form catalogue and reconcile it against current prescribed forms and notifications.

# 8\. Generic User / Transaction Flow

USER GOAL / LEGAL EVENT

↓

SERVICE DISCOVERY

↓

AUTHENTICATION + ROLE + ENTITY CONTEXT

↓

ELIGIBILITY / PREREQUISITES

↓

FORM / WEBFORM

↓

PREFILL FROM MASTER DATA

↓

USER DATA + DOCUMENTS

↓

FIELD + BUSINESS-RULE VALIDATION

↓

DSC / OTP / MFA / AUTHORISATION

↓

FEE CALCULATION + PAYMENT

↓

SUBMISSION → SRN

↓

STP OR HUMAN PROCESSING

┌──────┴─────────┐

↓ ↓

AUTOMATED EXCEPTION/REVIEW

↓ ↓

REGISTRY/ ROC/RD/CPC/CPACE

DOCUMENT / OTHER WORKFLOW

└──────┬─────────┘

↓

OUTCOME / ORDER / CERTIFICATE / REGISTRY UPDATE

↓

STATUS + NOTIFICATION

↓

NEXT OBLIGATION / FOLLOW-ON EVENT

MCA reported approximately 3.84 crore filings in 2021–2025, with 3.33 crore approved through Straight Through Processing, 40.8 lakh approved by ROC/RD and 8.3 lakh rejected by officers. This confirms a material automated-plus-human process model. citeturn0search0

# 9\. Transaction State Model

| **State**          | **Meaning**                         | **Required user/system behaviour**            |
| ------------------ | ----------------------------------- | --------------------------------------------- |
| Draft              | Started but not submitted.          | Persist; show missing/incomplete fields.      |
| Validated          | Current validation passes.          | Enable signing/payment/submission.            |
| Payment pending    | Payment required or not reconciled. | Show exact payment state and reconciliation.  |
| Submitted          | SRN created/received.               | Create immutable transaction record.          |
| STP                | Automated checks/processing.        | Run business rules and update state.          |
| Under review       | Human/CPC/CPACE/ROC/RD processing.  | Expose stage/next action where permissible.   |
| Resubmission/query | User correction required.           | Structured query, exact correction, deadline. |
| Approved           | Accepted.                           | Update registry/document; expose evidence.    |
| Rejected           | Not accepted.                       | Reason + permitted next route.                |
| Closed             | Complete/archived.                  | Preserve audit trail and evidence.            |

# 10\. Publicly Evidenced Backend Architecture

Government descriptions of MCA21 V3 explicitly reference microservices, scalability, advanced analytics, AI/ML, interoperability/data exchange, e-Scrutiny, e-Adjudication, e-Consultation, Compliance Management, MCA Lab, cognitive helpdesk, dashboards and APIs. More recent material also references web-based forms, field-level validation, auto-prefill and MFA. citeturn0search7turn0search10turn0search5

EXPERIENCE: website / webforms / mobile / chatbot / dashboards

↓

IDENTITY: registration / login / OTP / MFA / DSC / roles

↓

SERVICES: company / LLP / DIN / DSC / filing / documents / payments

↓

RULES + DATA: validation / eligibility / fee / prefill / master data

↓

WORKFLOW: SRN / STP / CPC / CPACE / ROC / RD / resubmission

↓

RECORDS: electronic registry / corporate master data / document repository

↓

REGULATION: e-Scrutiny / CMS / e-Enforcement / e-Adjudication

↓

DATA: reports / APIs / exchange / analytics

Precise internal databases, microservice boundaries, queues, event buses, internal APIs and officer interfaces are not sufficiently documented publicly. Those must be marked as discovery items rather than inferred as facts.

# 11\. Regulatory Modules

| **Module**                   | **Purpose**                                                                | **Process logic**                                       | **Evidence**                                                         |
| ---------------------------- | -------------------------------------------------------------------------- | ------------------------------------------------------- | -------------------------------------------------------------------- |
| e-Scrutiny                   | Scrutinise selected STP forms and flag entities for deeper review.         | Selection/rules → flag → scrutiny.                      | Publicly documented. citeturn0search7                             |
| Compliance Management System | Identify non-compliance, alerts and e-notices; support enforcement drives. | Rule checks → default → notice/alert → action.          | Publicly documented. citeturn0search7                             |
| e-Enforcement                | Digitise enforcement activities.                                           | Trigger → notice/action → case progression → outcome.   | Implemented in V3 per 2026 Government statement. citeturn0search0 |
| e-Adjudication               | Digitise adjudication, including online hearings.                          | Case → notice → response/hearing → order → record.      | Publicly documented. citeturn0search7                             |
| e-Consultation               | Structured consultation on draft rules/amendments.                         | Publish → comments → categorise/analyse → policy input. | Publicly documented. citeturn0search7                             |
| MCA Lab                      | Evaluate effectiveness of compliance/enforcement/consultation modules.     | Expert review → recommendations → improvement.          | Publicly documented concept. citeturn0search7                     |
| CPC / CPACE                  | Centralised processing of specified services.                              | Submission → central processing → outcome/exception.    | Publicly referenced; detailed SOP needs confirmation.                |
| Helpdesk                     | Resolve technical, awareness and processing issues.                        | Ticket → classify → resolve/escalate → close.           | Current performance publicly reported. citeturn0search0           |

# 12\. Master Data vs Public Documents

| **Product**                 | **User question**                                 | **Interaction**                                        | **System dependency**                      |
| --------------------------- | ------------------------------------------------- | ------------------------------------------------------ | ------------------------------------------ |
| Master Data                 | What does MCA currently record about this entity? | Search entity → view structured data.                  | Electronic registry/master-data service.   |
| Public Documents            | What filed documents are available?               | Search entity → list → access/payment where required.  | Document repository + access/payment.      |
| Certified/document requests | Can I obtain an official/certified copy?          | Select entity/document → request/payment → fulfilment. | Document repository + fulfilment workflow. |
| RD/ROC information          | What regulatory reports are published?            | Browse/search reports.                                 | Publishing/reporting layer.                |

MCA help documentation describes public documents as items such as incorporation documents, annual returns and balance sheets, and documents a logged-in paid workflow for viewing available public documents. citeturn2search0

# 13\. Identity, Authentication and Authorisation

- User registration/login is the account layer.
- MFA is publicly documented as a security measure in V3. citeturn0search10
- DSC provides applicable electronic signing/authentication.
- DIN provides persistent identification of directors; MCA rules also define the electronic registry and pre-fill concepts. citeturn1search3
- The audit must distinguish Person → Account → Role → Entity → Authorisation → Action.
- The complete service-by-service authorisation matrix is not publicly available in one authoritative source and should be obtained during discovery.

# 14\. Help, Complaints and Support

| **Surface**        | **Function**                               | **Underlying process**              |
| ------------------ | ------------------------------------------ | ----------------------------------- |
| FAQs               | Procedural answers.                        | Knowledge/content management.       |
| Manuals/tutorials  | Filing/navigation guidance.                | Documentation/training.             |
| Webinars           | Stakeholder handholding.                   | Training/outreach.                  |
| Chatbot/helpdesk   | Assistance and issue resolution.           | Conversational support + ticketing. |
| Service complaint  | Portal/service problem.                    | Complaint/case workflow.            |
| Investor complaint | Investor grievance.                        | Investor grievance workflow.        |
| Feedback           | Suggestions on services/forms.             | Feedback capture/analysis.          |
| Live support       | Technical/awareness/processing resolution. | Case management/escalation.         |

MCA reported 316,877 helpdesk tickets through 31 January 2026, with about 98% successfully resolved; issues included technical problems, awareness, processing requests and stakeholder feedback. citeturn0search0

# 15\. Legal / Rules / SOP / System Traceability

ACT / LEGAL PROVISION

↓

RULE / NOTIFICATION / CIRCULAR

↓

PROCEDURE / PRESCRIBED FORM

↓

MCA SERVICE

↓

FORM / DATA MODEL

↓

ELIGIBILITY + VALIDATION + FEE RULES

↓

SOP / PROCESS OWNER

↓

SYSTEM WORKFLOW / QUEUE

↓

AUTOMATED OR HUMAN DECISION

↓

REGISTRY / DOCUMENT / CASE UPDATE

↓

USER STATUS / NOTIFICATION / PUBLIC OUTPUT

| **Traceability field** | **What to capture**                                               |
| ---------------------- | ----------------------------------------------------------------- |
| Legal source           | Act section, rule, schedule, notification/circular.               |
| Trigger                | Event/obligation that creates the requirement.                    |
| Service                | Exact service name and URL.                                       |
| Form                   | Form number/version or webform name.                              |
| Prerequisites          | Entity state, role, previous filings, approvals.                  |
| Data                   | Fields, source, prefill/reuse and sensitivity.                    |
| Documents              | Evidence, declarations, signatures.                               |
| Validation             | Field, cross-field, registry and external checks.                 |
| Fee                    | Formula, payment trigger, late fee/exemption logic.               |
| Workflow               | STP, CPC/CPACE, ROC/RD, scrutiny, adjudication, etc.              |
| SLA                    | Statutory/indicative time, escalation.                            |
| Outcome                | Approval, order, certificate, registry/document update.           |
| Downstream             | Next filing/obligation/event.                                     |
| SOP                    | Public SOP or internal reference; mark unavailable if not public. |
| Owner                  | Business/process owner and technical owner.                       |

# 16\. Core User Flows That Must Be Fully Mapped

## New company

Discover → name → incorporation → DIN → linked registrations → certificate → post-incorporation compliance.

## New LLP

Discover → name → registration → partner/designated partner data → certificate → ongoing compliance.

## Director lifecycle

DIN → appointment/change → KYC → company relationship → ongoing obligations → cessation.

## Annual compliance

Identify applicable filings → prefill → prepare → validate → sign → pay → submit → process → next due date.

## Event-based filing

Business event → legal consequence → required forms → dependencies → file → registry update.

## Payment

Service/form → fee → payment → confirmation → reconciliation → transaction continuation.

## Resubmission

Submission → query/rejection → correction → resubmit → reprocess.

## Public research

Search entity → master data → documents → payment/access → inspection/data reuse.

## Complaint

Problem → identify transaction → complaint → acknowledgement → escalation → resolution.

## Regulatory case

Signal → scrutiny/enforcement/adjudication → notice → response/hearing → order → record.

## Consultation

Draft → publish → stakeholder comment → categorise/analyse → policy review → final rule.

# 17\. Standard Service Blueprint

| **Layer**      | **Fields to capture**                                       |
| -------------- | ----------------------------------------------------------- |
| User goal      | What the user wants to accomplish.                          |
| Trigger        | Legal/business event starting the journey.                  |
| Entry point    | Exact page/service/URL.                                     |
| Identity       | Who must authenticate.                                      |
| Role           | Authority required.                                         |
| Eligibility    | Conditions that must be true.                               |
| Data           | Required information and source.                            |
| Documents      | Required evidence.                                          |
| Rules          | Validations/calculations.                                   |
| Payment        | Fee and payment trigger.                                    |
| Authentication | OTP/MFA/DSC/authorisation.                                  |
| Workflow       | Automated vs human stages.                                  |
| Status         | All possible user-visible states.                           |
| Exceptions     | Errors, resubmission, rejection, timeout, payment mismatch. |
| Outcome        | Registry/document/case change.                              |
| Notification   | Email/SMS/dashboard/etc.                                    |
| Audit trail    | What is logged and who can see it.                          |
| Downstream     | Subsequent obligation/service.                              |
| Support        | Recovery path if it fails.                                  |
| Legal/SOP      | Authoritative source and owner.                             |

# 18\. Critical Areas Missing From a Normal Website Audit

- Complete URL and content inventory, including PDFs, circulars, FAQs, videos and legacy URLs.
- Search analytics: queries, zero results, refinements and search-to-service conversion.
- Role/permission matrix and authenticated versus public experience.
- Mobile app parity.
- Accessibility, language, browser/device compatibility, captcha and OTP friction.
- Analytics/funnel instrumentation.
- Complete error and technical-failure catalogue.
- Form versioning and backward compatibility.
- Data ownership and source-of-truth map.
- Duplicate data collection and reuse opportunities.
- Notification/event architecture.
- Payment reconciliation, failed payment and refund logic.
- Document storage, retrieval, certification and retention.
- SLA and escalation logic.
- Internal queues, officer dashboards and workload allocation.
- Audit logs, security, privacy and public-data masking.
- API catalogue, authentication, rate limits and data contracts.
- How legal/regulatory changes become new services, forms, validations and workflows.
- Release/change management, testing and rollback.
- Monitoring, uptime, incident response and disaster recovery.
- Third-party/vendor dependencies.
- Entity master-data quality and duplicate resolution.
- Interoperability with GST, Income Tax, banks and other regulators.
- Feedback loop from helpdesk and user behaviour into product/process changes.

# 19\. Regulatory Change → Portal Change Pipeline

NEW ACT / RULE / NOTIFICATION

↓

LEGAL / POLICY INTERPRETATION

↓

PROCESS / SOP CHANGE

↓

SERVICE REQUIREMENT

↓

FORM + DATA MODEL

↓

VALIDATION / FEE / ELIGIBILITY RULES

↓

WORKFLOW / OFFICER PROCEDURE

↓

UI + CONTENT + HELP

↓

TEST → RELEASE → PRODUCTION

↓

ANALYTICS / HELPDESK / FEEDBACK

↺

This change pipeline is essential to map because a future-proof website depends on how quickly and safely regulatory changes propagate through law, SOP, software, forms, content and workflows.

# 20\. Recommended Audit Deliverables Before Design

1. Master page inventory with URL, page type, audience, purpose and owner.
2. Master service catalogue with exact current service names and entry points.
3. Master form catalogue reconciled with current prescribed forms.
4. Legal-to-service traceability matrix.
5. Service blueprints for all high-volume/high-risk journeys.
6. Role and permission matrix.
7. Data-field inventory: source, prefill, reuse, sensitivity.
8. System dependency map for every service.
9. Transaction state machine for every transactional service.
10. Payment/reconciliation map.
11. Document/evidence lifecycle map.
12. Notification/event map.
13. Internal queue/processing map.
14. Error/exception catalogue.
15. Search/content taxonomy audit.
16. API/integration inventory.
17. Analytics/helpdesk evidence pack.
18. Technical architecture discovery pack.
19. Validated user research and process evidence.
20. Only then: future-state requirements and redesign.

# 21\. Current-State Signals

| **Public signal**                                                     | **Audit implication**                                                                            |
| --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| All filings now use V3.                                               | Treat V3 as the primary current transaction platform. citeturn0search0                        |
| 3.84 crore filings in 2021–2025; 3.33 crore STP approvals.            | Transaction volume and STP should be core audit metrics. citeturn0search0                     |
| 40.8 lakh ROC/RD approvals; 8.3 lakh officer rejections.              | Human exception workflows are material and require their own audit. citeturn0search0          |
| V3 includes e-Scrutiny, e-Adjudication, e-Consultation and CMS.       | MCA is a regulatory operating platform, not just a filing site. citeturn0search7turn0search0 |
| Web forms have field validation and auto-prefill; MFA is implemented. | Form UX, identity and security are platform concerns. citeturn0search10                       |
| APIs/data dissemination are part of the stated V3 direction.          | Audit machine consumers and ecosystem integrations. citeturn0search5                          |
| Helpdesk issues include technical, awareness and processing problems. | Support data is evidence of product/process failure. citeturn0search0                         |

# 22\. Audit Conclusion

The correct unit of analysis is not the webpage; it is the regulatory transaction. For every page and service, the audit should be able to answer: Who uses it? What task/event starts it? What legal rule creates it? Which form/data model captures it? What rules validate it? What authentication and payment are required? Which automated or human workflow processes it? What registry/document/case state changes? What does the user see? What happens next?

Once this map is complete, the redesign team can distinguish cosmetic UX issues from process, data, workflow, legal and architecture constraints. That is the factual baseline required before proposing a future-first MCA platform.

# 23\. Primary Sources

- MCA — FAQs on New MCA Website: navigation, homepage service cards, forms/downloads, My Workspace, Data & Reports and Help/FAQ placement. citeturn1search0
- MCA — MCA21 V3 Website Training: main menu and MCA Services taxonomy. citeturn1search2
- MCA — MCA21 Application Online Help: e-filing, complaints, document services, fees/payments, investor services, SRN tracking and reports. citeturn2search1
- MCA — MCA21 Application Online Help: public-document access workflow. citeturn2search0
- MCA — Companies (Registration Offices and Fees) Rules: DIN, e-Form, electronic registry and pre-fill definitions. citeturn1search3
- PIB / MCA — MCA21 V3 architecture and modules: microservices, e-Scrutiny, e-Adjudication, e-Consultation, CMS, MCA Lab, APIs and AI/ML. citeturn0search7
- PIB / MCA — 2026 filing volumes, STP/RoC/RD processing and helpdesk data. citeturn0search0
- PIB / MCA — web forms, field validation, auto-prefill, MFA and mobile app. citeturn0search10
- PIB / Government of India — current MCA21 V3 and incorporation/registry description. citeturn0search1turn0search5

# 24\. What Must Be Obtained Next for a Truly Exhaustive Audit

| **Priority** | **Evidence**                                   | **Reason**                                                       |
| ------------ | ---------------------------------------------- | ---------------------------------------------------------------- |
| P0           | Live URL/page crawl + sitemap export           | Authoritative page inventory.                                    |
| P0           | Current form/service export                    | Prevents missing/obsolete forms.                                 |
| P0           | Internal SOP/process documentation             | Accurate backend human workflow.                                 |
| P0           | Service-owner interviews                       | Actual rules, exceptions and ownership.                          |
| P0           | Current Act/Rules/notifications reconciliation | Authoritative legal mapping.                                     |
| P1           | Transaction/error/helpdesk analytics           | Evidence of real friction.                                       |
| P1           | API/integration inventory                      | Machine-to-machine architecture.                                 |
| P1           | Data dictionary/master-data model              | Source-of-truth and reuse mapping.                               |
| P1           | Role/permission matrix                         | Authenticated experience.                                        |
| P2           | Officer workflow research                      | Exception, scrutiny, adjudication and enforcement understanding. |