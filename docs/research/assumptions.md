# MCA Phase 1 - Assumptions Register

**Document Purpose:** Explicit catalog of assumptions made in absence of verified evidence.

**Last Updated:** 27 August 2026

---

## Purpose and Usage

**This document records:**
- Assumptions made to proceed with Phase 1 documentation despite information gaps
- Reasoning/basis for each assumption
- Risk level if assumption proves incorrect
- Validation requirement

**How to use:**
- NEVER treat assumptions as verified facts
- When using assumed information in other documents, reference this register
- Prioritize validation of HIGH RISK assumptions before Phase 2
- Update when assumptions are validated or contradicted

---

## Navigation and Information Architecture Assumptions

### A01: Top-Level Navigation Structure
**Assumption:** The 2021 V3 launch navigation (Home, About MCA, Acts & Rules, My Workspace, MCA Services, Data & Reports, Help & FAQs, Contact Us) remains current in August 2026.

**Basis:**
- Documented in April 2021 official training materials
- Seed URLs in Phase 1 brief use this structure
- Third-party guides (2025-2026) reference same structure

**Risk if wrong:** MEDIUM - If navigation has changed, entire IA mapping will be inaccurate

**Validation:** Compare against live portal or official current sitemap

**Status:** UNVALIDATED

---

### A02: Service Card Organization
**Assumption:** Homepage service cards remain organized as "Primary Cards" (6) and "Frequently Used Services" (10+) as documented in 2021 FAQ.

**Basis:**
- 2021 official FAQ explicitly listed this organization
- Logical UX pattern for task-based portal

**Risk if wrong:** LOW - Card organization is presentation layer, doesn't affect underlying service model

**Validation:** Observe current homepage

**Status:** UNVALIDATED

---

### A03: My Workspace Exists and is Authenticated
**Assumption:** My Workspace is an authenticated area containing user-specific information (drafts, filings, status, payments, notifications).

**Basis:**
- Mentioned in 2021 training materials
- Standard pattern for transactional portals
- Logical necessity for draft management

**Risk if wrong:** LOW - Functionality must exist somewhere, even if not called "My Workspace"

**Validation:** Access authenticated portal area

**Status:** UNVALIDATED

---

## Service Catalogue Assumptions

### A04: Core Service Families Remain Stable
**Assumption:** The major service families (Company, LLP, DIN, DSC, Filing, Master Data, Documents, Payment, Complaints, Investor, Tracking, Data/Reports) exist in some form as of 2026.

**Basis:**
- All are rooted in statutory requirements (Companies Act, LLP Act)
- Confirmed in multiple third-party sources (2025-2026)
- Transaction volumes confirm active usage

**Risk if wrong:** LOW - Statutory requirements don't change rapidly; services must exist to fulfill obligations

**Validation:** Verify service catalog against live portal menu

**Status:** PARTIALLY VALIDATED (statutory basis) / UNVALIDATED (exact organization)

---

### A05: SPICe+ is Primary Incorporation Form
**Assumption:** SPICe+ remains the primary company incorporation form in 2026.

**Basis:**
- Multiple recent sources (2025-2026) reference SPICe+ as current
- Government integration of PAN/TAN/EPFO/ESIC into SPICe+ mentioned in recent materials
- No indication of replacement

**Risk if wrong:** MEDIUM - If incorporation process has changed, major workflow documentation would be affected

**Validation:** Verify against current forms list and incorporation service page

**Status:** HIGH CONFIDENCE UNVALIDATED

---

### A06: FiLLiP is Primary LLP Formation Form
**Assumption:** FiLLiP (Form for Incorporation of Limited Liability Partnership) remains the primary LLP registration form in 2026.

**Basis:**
- Referenced in multiple current sources
- LLP Act requirements unchanged

**Risk if wrong:** MEDIUM - Same as SPICe+

**Validation:** Verify against current LLP forms list

**Status:** HIGH CONFIDENCE UNVALIDATED

---

### A07: DIR-3 KYC is Active Requirement
**Assumption:** DIR-3 KYC remains an active annual director compliance requirement.

**Basis:**
- Included in "Frequently Used Services" in 2021 FAQ
- Multiple recent sources reference ongoing DIR-3 KYC requirement
- Helpdesk data suggests active usage

**Risk if wrong:** LOW - Director KYC is regulatory requirement; form may change but function won't

**Validation:** Check current director compliance requirements

**Status:** HIGH CONFIDENCE UNVALIDATED

---

## Transaction and Workflow Assumptions

### A08: SRN = Service Request Number = Transaction ID
**Assumption:** SRN (Service Request Number) is the primary transaction identifier, created upon submission, used for tracking.

**Basis:**
- "Track SRN Transaction Status" is a known service
- Standard e-filing pattern
- References in multiple sources

**Risk if wrong:** LOW - Transaction ID must exist; may be called something else

**Validation:** Observe transaction submission and status tracking

**Status:** HIGH CONFIDENCE UNVALIDATED

---

### A09: STP = Automated Approval Path
**Assumption:** STP (Straight Through Processing) means automated business rule validation and approval without human intervention.

**Basis:**
- 3.33 crore STP approvals confirmed by government (87% of total)
- Standard regulatory technology term
- Contrasted with ROC/RD human approvals

**Risk if wrong:** LOW - Term is industry-standard; implementation details may vary

**Validation:** Confirm STP definition with MCA documentation

**Status:** HIGH CONFIDENCE UNVALIDATED

---

### A10: Payment Required Before Submission for Fee-Bearing Services
**Assumption:** For services requiring fees, payment is completed before or immediately after form submission, not as a separate later step.

**Basis:**
- "Fee Enquiry" and "Payment Services" existence suggests integrated fee handling
- Standard e-governance pattern
- Real-time validation suggests inline process

**Risk if wrong:** MEDIUM - Affects transaction flow documentation

**Validation:** Observe actual filing workflow including payment step

**Status:** UNVALIDATED

---

### A11: DSC Required for Filing Submission
**Assumption:** Digital Signature Certificate (DSC) is required authentication for submitting e-forms.

**Basis:**
- DSC services prominently featured
- Companies Act e-filing provisions
- Professional guidance materials reference DSC requirement
- "Associate/Update DSC" is frequently used service

**Risk if wrong:** LOW - Statutory requirement; OTP/MFA may supplement but unlikely to replace

**Validation:** Confirm authentication requirements by service/form type

**Status:** HIGH CONFIDENCE UNVALIDATED

---

### A12: Prefill Uses Company/LLP Master Data
**Assumption:** Form prefill capability pulls data from MCA's electronic registry (company/LLP master data).

**Basis:**
- Government confirms "pre-filled master data" in V3
- Companies (Registration Offices and Fees) Rules define "electronic registry" and "pre-fill"
- Logical efficiency measure

**Risk if wrong:** LOW - Prefill confirmed; source is logical inference

**Validation:** Observe which fields prefill and confirm data source

**Status:** HIGH CONFIDENCE UNVALIDATED

---

## User Role Assumptions

### A13: Registered User vs Business User Distinction
**Assumption:** "Registered User" = limited public services access; "Business User" = transactional filing access with role-specific permissions.

**Basis:**
- ICSI FAQ references these two account types
- Logical access control pattern
- Public services (master data, documents) vs. authenticated services (filing) distinction

**Risk if wrong:** MEDIUM - Affects user management design

**Validation:** Verify account type definitions and permissions

**Status:** UNVALIDATED

---

### A14: Professional User = CS/CA/CMA
**Assumption:** "Professional User" refers to Company Secretaries, Chartered Accountants, Cost Accountants and similar authorized professionals who file on behalf of companies/LLPs.

**Basis:**
- ICSI (Company Secretaries) training materials reference this role
- Statutory provisions for professional representation
- Market practice

**Risk if wrong:** LOW - Professionals file on behalf of entities is confirmed practice

**Validation:** Confirm professional registration and authorization process

**Status:** HIGH CONFIDENCE UNVALIDATED

---

### A15: Entity-Linked Authorization Required for Filing
**Assumption:** A user must be linked/authorized to a specific company/LLP to file forms on its behalf.

**Basis:**
- Logical security requirement
- Standard corporate authorization pattern
- Prevents unauthorized filings

**Risk if wrong:** LOW - Must exist in some form for regulatory platform

**Validation:** Observe authorization/linking process

**Status:** HIGH CONFIDENCE UNVALIDATED

---

## e-Governance Module Assumptions

### A16: e-Scrutiny Operates Post-STP-Approval
**Assumption:** e-Scrutiny reviews a sample of STP-approved filings after automatic approval, not before.

**Basis:**
- Audit document describes "scrutinise STP forms" and "flag for deeper review"
- Post-approval audit pattern common in regulatory systems
- Enables high throughput while maintaining oversight

**Risk if wrong:** MEDIUM - Affects understanding of approval finality

**Validation:** Confirm e-Scrutiny trigger, timing and process

**Status:** UNVALIDATED

---

### A17: CMS Operates on Scheduled Compliance Checks
**Assumption:** Compliance Management System runs scheduled/periodic checks to identify defaults (e.g., annual filing missed), not only real-time transaction checks.

**Basis:**
- Audit document describes "identify non-compliance" and "issue e-notices"
- Compliance defaults often time-based (annual filing due dates)
- Notice generation suggests batch processing

**Risk if wrong:** LOW - Distinction between real-time and batch CMS doesn't affect service model

**Validation:** Confirm CMS detection triggers and frequency

**Status:** UNVALIDATED

---

### A18: e-Enforcement, e-Adjudication Accessible to Officers, Notices to Public Users
**Assumption:** e-Enforcement and e-Adjudication are primarily officer-facing case management systems; public/entity users receive notices and respond but don't see full case management interface.

**Basis:**
- These are regulatory/judicial functions typically managed by authorities
- Users are subjects of enforcement/adjudication, not operators
- Standard regulatory platform pattern

**Risk if wrong:** MEDIUM - Affects public vs officer interface distinction

**Validation:** Confirm user access to enforcement/adjudication modules

**Status:** UNVALIDATED

---

### A19: e-Consultation is Public Access for Comment Submission
**Assumption:** e-Consultation provides public access to view draft rules/circulars and submit comments.

**Basis:**
- Audit document describes "publish → comments → categorise/analyse"
- Public consultation is democratic governance practice
- Module name suggests public participation

**Risk if wrong:** LOW - Purpose is clear even if implementation details vary

**Validation:** Observe e-Consultation interface and workflow

**Status:** HIGH CONFIDENCE UNVALIDATED

---

## Form and Data Assumptions

### A20: Forms Have Standardized Structure (Header, Sections, Attachments, Declarations)
**Assumption:** MCA e-forms follow a consistent structure across form types.

**Basis:**
- Companies Act prescribes form standards
- User training materials suggest consistent patterns
- Efficiency in development and user learning

**Risk if wrong:** LOW - Doesn't affect external documentation if forms are inconsistent

**Validation:** Review multiple forms for structural patterns

**Status:** UNVALIDATED

---

### A21: Form Versions Increment When Rules Change
**Assumption:** Forms have version numbers/dates that update when underlying rules change.

**Basis:**
- Standard legal/regulatory document practice
- References to "current form versions" in guidance materials
- Change management necessity

**Risk if wrong:** LOW - Versioning method doesn't affect service model

**Validation:** Observe form versioning practice

**Status:** HIGH CONFIDENCE UNVALIDATED

---

### A22: Company/LLP Master Data Reflects Current Registry State
**Assumption:** Public master data service shows the current official registry state for companies/LLPs, updated when filings are approved.

**Basis:**
- Master data service purpose is to provide official information
- Prefill uses master data (confirmed), so must be current
- Public reliance requires currency

**Risk if wrong:** LOW - If master data lags, affects data freshness understanding but not structure

**Validation:** Confirm master data update triggers and latency

**Status:** HIGH CONFIDENCE UNVALIDATED

---

## Technical Architecture Assumptions

### A23: Microservices Implement Service Domains
**Assumption:** V3 "microservices architecture" means service-oriented decomposition aligned to business domains (e.g., company service, LLP service, DIN service, payment service, document service).

**Basis:**
- Government confirms microservices architecture
- Domain-aligned services are standard pattern
- Enables independent scaling and development

**Risk if wrong:** LOW - Internal architecture doesn't affect external service model

**Validation:** Request technical architecture documentation

**Status:** UNVALIDATED (architecture confirmed, decomposition inferred)

---

### A24: APIs Enable Interoperability
**Assumption:** "APIs and interoperability" means MCA exposes APIs for data access/exchange with external systems (GST, Income Tax, banks, etc.) and possibly public consumption.

**Basis:**
- Government documents mention APIs and data exchange
- SPICe+ integration with PAN/TAN/EPFO/ESIC confirms external integration
- Modern e-governance best practice

**Risk if wrong:** LOW - Integration exists; API details are implementation

**Validation:** Request API catalog and specifications

**Status:** HIGH CONFIDENCE UNVALIDATED (integration confirmed, API approach inferred)

---

### A25: Web Forms = Browser-Based Forms (Not Downloaded)
**Assumption:** "Web forms" in V3 means forms filled directly in browser, submitted online, as opposed to V2 download-fill-upload pattern.

**Basis:**
- Government explicitly describes V3 "web based filings" vs V2 download pattern
- Multiple sources contrast V2 and V3 filing methods
- Real-time validation requires online form

**Risk if wrong:** VERY LOW - This is explicitly documented distinction

**Validation:** Already validated by official sources

**Status:** VALIDATED

---

### A26: Real-Time Validation = Field-Level and Form-Level Checks
**Assumption:** "Real-time validation" means immediate feedback on field entry errors and business rule violations, before submission.

**Basis:**
- Government confirms "real time validations" in V3
- Standard web form UX pattern
- Reduces resubmissions (stated goal)

**Risk if wrong:** LOW - Validation exists; timing/granularity is detail

**Validation:** Observe form validation behavior

**Status:** HIGH CONFIDENCE UNVALIDATED

---

### A27: MFA = OTP-Based Additional Authentication
**Assumption:** Multi-factor authentication (MFA) in V3 likely means OTP (one-time password) via SMS/email in addition to password login.

**Basis:**
- Government confirms MFA implementation
- OTP is standard MFA method in Indian e-governance
- Mentioned alongside DSC which is separate mechanism

**Risk if wrong:** LOW - MFA confirmed; method is implementation detail

**Validation:** Observe login flow

**Status:** UNVALIDATED

---

## Payment and Fee Assumptions

### A28: Fee Rules Defined by Companies (Registration Offices and Fees) Rules
**Assumption:** Fees for all MCA services are prescribed in Companies (Registration Offices and Fees) Rules, 2014 and LLP Rules, with amendments.

**Basis:**
- These rules specifically cover fees
- Statutory basis required for government fees
- Fee enquiry service implies deterministic calculation

**Risk if wrong:** VERY LOW - Statutory requirement

**Validation:** Cross-reference fee rules with services

**Status:** HIGH CONFIDENCE UNVALIDATED

---

### A29: Payment Gateway Integration for Online Payment
**Assumption:** MCA portal integrates with payment gateway(s) for online payment of fees.

**Basis:**
- Online filing requires online payment
- "Payment Services" include "pay fees" functionality
- Standard e-governance payment pattern

**Risk if wrong:** VERY LOW - Online payment necessity

**Validation:** Observe payment flow and confirm gateway provider

**Status:** HIGH CONFIDENCE UNVALIDATED

---

### A30: Payment Status Tracked and Reconciled to Filing
**Assumption:** Payment and filing are linked by transaction reference; payment status is tracked; payment confirmation enables filing progression.

**Basis:**
- "Track payment status" is listed service
- Payment-filing linkage is logical requirement
- Prevents submission without payment for fee-bearing services

**Risk if wrong:** LOW - Requirement is logical; implementation detail

**Validation:** Observe payment-filing linkage

**Status:** UNVALIDATED

---

## Document Assumptions

### A31: Public Documents Require Payment for Access
**Assumption:** Most public documents (beyond basic master data) require payment, particularly for certified copies.

**Basis:**
- Audit document describes "public documents + access/payment where required"
- ICSI training mentions "logged-in paid workflow"
- Fee rules include document fees

**Risk if wrong:** MEDIUM - Affects public document service flow

**Validation:** Confirm document access rules and fee requirements

**Status:** UNVALIDATED

---

### A32: Document Repository Stores All Filed Documents
**Assumption:** MCA maintains a document repository of all e-filed forms, attachments, certificates, orders, and notices.

**Basis:**
- Regulatory requirement for audit trail
- Public document access implies storage
- Logical necessity for any filing system

**Risk if wrong:** VERY LOW - Repository must exist

**Validation:** Confirm document types stored and retention rules

**Status:** HIGH CONFIDENCE UNVALIDATED

---

## Helpdesk and Support Assumptions

### A33: Helpdesk Covers Technical, Process and Awareness Issues
**Assumption:** Helpdesk handles three main categories: technical (portal/system problems), process (how-to/filing guidance), awareness (general information).

**Basis:**
- Government reports mention "technical, awareness, processing" issues
- 98% resolution rate suggests broad capability
- Comprehensive support for diverse user base

**Risk if wrong:** LOW - Categories are high-level; detail doesn't affect structure

**Validation:** Review helpdesk taxonomy and ticket types

**Status:** HIGH CONFIDENCE UNVALIDATED

---

### A34: Helpdesk Accessible via Web Form, Phone, Email
**Assumption:** Helpdesk provides multiple contact channels for user convenience.

**Basis:**
- Standard support best practice
- Contact Us page implies multiple channels
- 316K+ tickets implies scaled intake

**Risk if wrong:** LOW - Doesn't affect overall support model

**Validation:** Confirm available support channels

**Status:** UNVALIDATED

---

## Legal and Compliance Assumptions

### A35: Every Service Traces to Statutory Requirement
**Assumption:** All MCA transactional services exist to fulfill a specific obligation or enable a specific right under Companies Act, LLP Act or related legislation.

**Basis:**
- MCA is regulatory body; services implement law
- Audit document emphasizes legal traceability
- Best practice for regulatory platform

**Risk if wrong:** VERY LOW - Regulatory platform nature

**Validation:** Build service-to-legal-provision mapping

**Status:** HIGH CONFIDENCE (conceptually) / UNVALIDATED (specific mappings)

---

### A36: Form Prescribed by Notification/Rule
**Assumption:** Every e-form is prescribed by a specific rule/schedule, with legal authority for data collection.

**Basis:**
- Companies Act and LLP Act prescribe forms by rules
- Legal requirement for government data collection
- Forms referred to by number (e.g., "DIR-3") implying official designation

**Risk if wrong:** VERY LOW - Statutory requirement

**Validation:** Map forms to prescribing rules

**Status:** HIGH CONFIDENCE UNVALIDATED

---

## Change Management Assumptions

### A37: Portal Maintained and Enhanced Continuously
**Assumption:** MCA portal undergoes regular updates for bug fixes, new features, regulatory changes, and improvements.

**Basis:**
- V2 to V3 transition confirms evolution
- Active development implied by "additional features" mentions
- Regulatory platform requires adaptation to legal changes

**Risk if wrong:** VERY LOW - Modern software system nature

**Validation:** Understand release process and frequency

**Status:** HIGH CONFIDENCE UNVALIDATED

---

### A38: Backward Compatibility Maintained for In-Progress Transactions
**Assumption:** System changes don't break in-progress transactions; drafts and submitted-but-not-processed filings remain valid across releases.

**Basis:**
- Transaction volumes (crores of filings) require stability
- Legal/regulatory nature requires transaction integrity
- User trust requirement

**Risk if wrong:** MEDIUM - Affects understanding of system risk/reliability

**Validation:** Confirm change management and transaction handling policies

**Status:** UNVALIDATED

---

## Mobile and Channel Assumptions

### A39: Mobile App Provides Subset of Portal Functionality
**Assumption:** If MCA mobile app exists, it provides key services (status tracking, document access, maybe filing) rather than full portal replication.

**Basis:**
- Government mentions mobile app development
- Standard mobile strategy is mobile-first services, not full parity
- Complex filing likely remains web-primary

**Risk if wrong:** LOW - Mobile is additional channel

**Validation:** Review mobile app if it exists

**Status:** UNVALIDATED (mobile app existence not confirmed)

---

### A40: Public Services Accessible Without Authentication
**Assumption:** Services like master data view, public document search, fee enquiry, forms download don't require login.

**Basis:**
- "Public" nature of these services
- Transparency objective of platform
- Standard e-governance pattern

**Risk if wrong:** LOW - Doesn't affect authenticated user flows

**Validation:** Confirm public vs authenticated service boundaries

**Status:** HIGH CONFIDENCE UNVALIDATED

---

## Risk Summary

| Risk Level | Count | Examples | Phase 2 Action |
|------------|-------|----------|----------------|
| **VERY LOW** | 9 | Web forms, payment gateway, document repository | Accept assumption, validate opportunistically |
| **LOW** | 19 | STP definition, helpdesk channels, form structure | Validate during detailed design |
| **MEDIUM** | 10 | Navigation structure, payment timing, e-enforcement access | Validate before Phase 2 design |
| **HIGH** | 0 | None | N/A |

**Total Assumptions:** 40

**High Confidence (likely correct):** 15  
**Medium Confidence (reasonable inference):** 20  
**Low Confidence (placeholder until validated):** 5

---

## Validation Strategy

### Immediate Validation (Before Phase 2)
- Navigation structure (A01, A02)
- Service families (A04)
- Transaction payment flow (A10)
- User role model (A13, A14, A15)
- e-Governance module access (A18)
- Payment and documents access rules (A31)

### Near-Term Validation (During Phase 2)
- Form catalog details (A05, A06, A07, A20, A21)
- Transaction workflow details (A08, A09, A11, A12)
- e-Governance module operation (A16, A17, A19)
- Technical architecture (A23, A24, A26, A27)
- Support and helpdesk (A33, A34)

### Long-Term Validation (Phase 3+)
- Change management (A37, A38)
- Legal traceability (A35, A36)
- Mobile strategy (A39)

---

## Usage in Phase 1 Documentation

When these assumptions are used in other Phase 1 documents:
- Reference assumption number (e.g., "per A08")
- Note as ASSUMED in evidence classification
- Flag for validation in unknowns/validation-required registers

**Example:**
> The transaction identifier (SRN) is created upon submission (per A08, ASSUMED) and used for status tracking via the "Track SRN Transaction Status" service (VERIFIED per multiple sources).

---

## Document Status

**Purpose:** Make explicit what is inferred vs known  
**Benefit:** Prevents assumptions from being mistaken for facts  
**Usage:** Reference when documenting current state  
**Maintenance:** Update as assumptions are validated or refuted
