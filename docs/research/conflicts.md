# MCA Phase 1 - Conflicts and Discrepancies Register

**Document Purpose:** Document conflicts, contradictions, and discrepancies found during Phase 1 discovery.

**Last Updated:** 27 August 2026

---

## Purpose

This register documents:
- **Conflicts:** Where sources contradict each other
- **Discrepancies:** Where observations don't match documentation
- **Ambiguities:** Where information is unclear or incomplete
- **Inconsistencies:** Where patterns break or don't align

**Why Important:** Conflicts must be resolved before design decisions can be made confidently.

---

## SUMMARY

| Conflict Type | Count | Resolution Required |
|---------------|-------|---------------------|
| **Source Conflicts** | 8 | Determine authoritative source |
| **Temporal Conflicts** | 6 | Confirm current vs historical |
| **Terminology Conflicts** | 4 | Standardize terminology |
| **Structural Ambiguities** | 7 | Clarify actual structure |
| **Evidence Gaps** | 10 | Validate or accept as unknown |
| **TOTAL** | 35 conflicts | Require resolution |

---

## 1. SOURCE CONFLICTS

### C-001: Service Family Organization

**Conflict:**
- **Source A (2021 V3 Training):** Lists service families as "Company Services, Complaint, Document-Related Services, Fee and Payment Services, DIN, DSC, Master Data, LLP Services, E-Filing"
- **Source B (2021 FAQ):** Organizes homepage cards differently: "Primary Cards" (6 cards) and "Frequently Used Services" (10+ cards) without explicit family grouping
- **Source C (Audit Document):** Proposes 12 service families including specialized services

**Impact:** Service organization in MCA Services menu may differ from documented taxonomies

**Resolution Required:**
- Verify actual MCA Services menu structure on live portal
- Determine if there are multiple organizational views (menu vs cards)

**Recommended Approach:** Portal navigation to observe actual structure

---

### C-002: e-Scrutiny Operational Status

**Conflict:**
- **Source A (Audit Document):** Describes e-Scrutiny as "publicly documented" MCA21 V3 module
- **Source B (2026 Government Statement):** Lists "e-Enforcement, e-Adjudication, e-Consultation, e-Book, LMS" as implemented, **does not mention e-Scrutiny**
- **Source C (Older PIB):** Describes e-Scrutiny as planned V3 capability

**Impact:** Uncertain if e-Scrutiny is currently operational or still planned

**Resolution Required:**
- Confirm e-Scrutiny implementation status with MCA
- If operational, understand user visibility and process

**Recommended Approach:** Stakeholder interview with MCA product team

**Criticality:** MEDIUM - Affects post-approval review process understanding

---

### C-003: CMS (Compliance Management System) Operational Status

**Conflict:**
- **Source A (Audit Document):** Describes CMS as V3 module with e-notices capability
- **Source B (2026 Government Statement):** Does not explicitly list CMS in implemented modules
- **Source C (Older PIB):** Describes CMS as planned V3 capability

**Impact:** Uncertain if CMS is currently operational, how it operates, and user visibility

**Resolution Required:**
- Confirm CMS implementation status
- If operational, understand notice generation and delivery

**Recommended Approach:** Stakeholder interview + check for e-notices in user experience

**Criticality:** MEDIUM - Affects compliance monitoring understanding

---

### C-004: MCA Lab Status

**Conflict:**
- **Source A (Audit Document):** Describes MCA Lab as "publicly documented concept" for evaluating CMS/e-Consultation/enforcement effectiveness
- **Source B (Recent Government Statements):** No mention of MCA Lab in 2025-2026 references
- **Source C:** No operational evidence found

**Impact:** Uncertain if MCA Lab is operational, planned, or shelved

**Resolution Required:**
- Confirm MCA Lab status
- If operational, understand its role and outputs

**Recommended Approach:** Stakeholder inquiry

**Criticality:** LOW - Lab is evaluation function, not user-facing

---

### C-005: V2 System Status

**Conflict:**
- **Source A (2026 Government Statement):** "All filings are now made through V3"
- **Source B (V2 URLs):** Legacy V2 URLs still exist in older documentation (status unknown)
- **Source C (Third-party sources):** Some 2025-2026 references still mention V2 alongside V3

**Impact:** Uncertain if V2 is fully deprecated, redirected, or partially active

**Resolution Required:**
- Confirm V2 complete deprecation
- Check for V2-to-V3 redirects
- Identify any V2 remnants that need addressing

**Recommended Approach:** Attempt to access V2 URLs, check for redirects

**Criticality:** MEDIUM - Affects legacy system handling

---

### C-006: Mobile App Existence

**Conflict:**
- **Source A (Government Statements):** Mentions "mobile app" as part of V3
- **Source B (Phase 1 Discovery):** No official mobile app download link found
- **Source C:** Third-party sources vary (some mention app, some only mention responsive site)

**Impact:** Uncertain if native mobile app exists or if "mobile app" refers to mobile-responsive website

**Resolution Required:**
- Confirm mobile app existence (iOS/Android)
- If exists, obtain download links and feature parity info

**Recommended Approach:** Check app stores, MCA official site mobile section

**Criticality:** LOW-MEDIUM - Affects channel strategy

---

### C-007: Helpdesk Ticket Categories

**Conflict:**
- **Source A (2026 Government Statement):** "Technical, awareness, processing requests and stakeholder feedback"
- **Source B (Audit Document):** "Technical, Process, Awareness"
- **Source C (Service Catalogue):** "Service complaints, Investor complaints, Feedback"

**Impact:** Taxonomy for helpdesk categories unclear

**Resolution Required:**
- Confirm official helpdesk taxonomy
- Understand ticket routing by category

**Recommended Approach:** Review helpdesk interface or documentation

**Criticality:** LOW - Operational detail

---

### C-008: Independent Director Databank vs Services

**Conflict:**
- **Source A (2021 FAQ):** Lists "Independent Director Databank Registration" as frequently used service
- **Source B (Service research):** Uncertain if this is registration TO databank or search OF databank or both
- **Source C:** Minimal detail found in public sources

**Impact:** Service purpose and workflow unclear

**Resolution Required:**
- Clarify Independent Director Databank service(s)
- Understand registration vs search functionality

**Recommended Approach:** Access service page on portal or stakeholder clarification

**Criticality:** LOW - Specialized service

---

## 2. TEMPORAL CONFLICTS (Historical vs Current)

### T-001: 2021 Navigation Structure Validity

**Conflict:**
- **2021 Documentation:** Describes specific navigation structure (8 sections, service cards, etc.)
- **2026 Observation:** Cannot verify (portal access blocked)
- **Risk:** Structure may have evolved over 5 years

**Impact:** Entire information architecture may be outdated

**Resolution Required:**
- Verify 2021 structure still current in 2026
- Identify any changes/additions since 2021

**Recommended Approach:** Portal navigation session

**Criticality:** HIGH - Foundational IA understanding

---

### T-002: Service Additions Since 2021

**Conflict:**
- **2021 Documentation:** Service catalog as of April 2021
- **2026 Current State:** May have new services (e.g., related to new regulations, compliance schemes)
- **Gap:** 5 years of potential service evolution undocumented

**Impact:** Service catalog may be incomplete

**Resolution Required:**
- Identify services added post-2021
- Identify services deprecated post-2021

**Recommended Approach:** Compare 2021 list to current portal services section

**Criticality:** HIGH - Service scope drives design

---

### T-003: Form Catalog Currency

**Conflict:**
- **Historical Form Lists:** Forms known from V2 era and early V3
- **Current Forms:** Some forms may be added, merged, deprecated
- **V2 to V3 Transition:** Form number/name changes not fully documented

**Impact:** Form catalog may include deprecated forms, miss new forms

**Resolution Required:**
- Obtain authoritative current form list with versions
- Map V2 form numbers to V3 equivalents

**Recommended Approach:** Access forms download section or request official list

**Criticality:** HIGH - Form catalog completeness

---

### T-004: Fee Rules Currency

**Conflict:**
- **Fee Rules Reference:** Companies (Registration Offices and Fees) Rules 2014 with amendments
- **Current Fees:** May have been amended multiple times since 2014
- **Gap:** Current fee schedule not verified

**Impact:** Fee calculations may be inaccurate

**Resolution Required:**
- Obtain current fee schedule
- Identify recent amendments

**Recommended Approach:** Check Acts & Rules section or Fee Enquiry service

**Criticality:** MEDIUM - Payment accuracy

---

### T-005: e-Governance Module Rollout

**Conflict:**
- **Historical Plans:** V3 modules described in 2019-2021 planning documents
- **2026 Status:** Some modules confirmed operational, others status unclear
- **Gap:** Rollout timeline and current status not fully clear

**Impact:** Module availability assumptions may be wrong

**Resolution Required:**
- Confirm current status of all V3 modules
- Understand phased rollout completion

**Recommended Approach:** MCA official statement or stakeholder clarification

**Criticality:** MEDIUM - Module-dependent features

---

### T-006: DIR-3 KYC Annual Due Date

**Conflict:**
- **Various References:** Different sources mention different DIR-3 KYC due dates (30th April, 30th September)
- **Current Practice:** Actual due date for current year unknown
- **Variation:** MCA may change due date by notification

**Impact:** Compliance guidance may be incorrect

**Resolution Required:**
- Confirm current financial year DIR-3 KYC due date
- Understand how due date is communicated

**Recommended Approach:** Check MCA notifications or DIN services section

**Criticality:** MEDIUM - Director compliance

---

## 3. TERMINOLOGY CONFLICTS

### TERM-001: "STP" Definition

**Usage Observed:**
- Consistently means "Straight Through Processing" (automated approval)
- 3.33 crore STP approvals confirmed

**Ambiguity:**
- Exact STP business rules not documented
- Boundary between STP and "flagged for review" unclear

**Resolution Required:**
- Confirm STP scope and rules
- Clarify when filing goes to STP vs immediate human review

**Criticality:** MEDIUM - Processing path understanding

---

### TERM-002: "My Workspace" vs "Dashboard"

**Usage Observed:**
- "My Workspace" mentioned in 2021 documentation as authenticated area
- Various sources also mention "Dashboard" for personalized view
- Relationship unclear (Is dashboard part of My Workspace? Separate? Same thing?)

**Resolution Required:**
- Clarify terminology
- Confirm actual authenticated area name and structure

**Criticality:** LOW - Terminology standardization

---

### TERM-003: "CPC" and "CPACE"

**Usage Observed:**
- Both terms appear in audit document
- Both described as "centralized processing"
- Distinction unclear (same entity? different offices? different functions?)

**Resolution Required:**
- Clarify CPC vs CPACE
- Understand roles and responsibilities

**Criticality:** LOW - Internal MCA structure

---

### TERM-004: "ROC" vs "RoC"

**Usage Observed:**
- Various sources use different capitalizations
- "ROC" (all caps) more common
- "RoC" also appears

**Resolution Required:**
- Standardize official terminology

**Criticality:** VERY LOW - Style guide issue

---

## 4. STRUCTURAL AMBIGUITIES

### S-001: My Workspace Actual Structure

**Ambiguity:**
- My Workspace mentioned in 2021 docs but no details
- Sub-sections unknown (Drafts? Filings? Payments? Notifications? Profile?)
- Navigation within My Workspace unclear

**Impact:** Cannot design authenticated experience without structure

**Resolution Required:**
- Access My Workspace with test account
- Document actual sections and features

**Criticality:** HIGH - Core user experience

---

### S-002: Service Landing Page vs Form Entry

**Ambiguity:**
- Unclear if services have landing pages or go directly to forms
- Relationship between seed URLs (content pages) and transactional forms unclear
- Path from service discovery to form submission not clear

**Impact:** Service entry UX unclear

**Resolution Required:**
- Navigate service-to-form flow
- Document intermediate pages

**Criticality:** HIGH - Service access pattern

---

### S-003: Search Functionality Scope

**Ambiguity:**
- Multiple search types inferred (site, entity, document, help)
- Actual search implementation unknown (single search box? multiple? where located?)
- Search results presentation unknown

**Impact:** Search strategy unclear

**Resolution Required:**
- Identify all search entry points
- Test search functionality

**Criticality:** MEDIUM - Discovery mechanism

---

### S-004: Payment Gateway Integration Point

**Ambiguity:**
- Payment required but integration point unclear (before DSC? after DSC? after submission?)
- Payment confirmation and reconciliation mechanism unclear
- Failed payment handling unclear

**Impact:** Payment flow design uncertain

**Resolution Required:**
- Observe payment flow in actual transaction
- Understand payment-filing linkage

**Criticality:** HIGH - Critical transaction step

---

### S-005: DSC Signing in Form Flow

**Ambiguity:**
- DSC signing is required but timing unclear (page-by-page? at end? separate signing step?)
- Multiple signers (multiple directors) - sequential? parallel?
- DSC error handling unclear

**Impact:** Form submission flow uncertain

**Resolution Required:**
- Observe DSC signing in actual form
- Document signing UX

**Criticality:** HIGH - Authentication step

---

### S-006: Notification Delivery

**Ambiguity:**
- Notifications mentioned but delivery mechanism unclear (email? SMS? in-portal? all three?)
- Notification triggers not documented
- Notification content unknown

**Impact:** Communication strategy unclear

**Resolution Required:**
- Observe notifications in actual transactions
- Review notification preferences (if any)

**Criticality:** MEDIUM - User communication

---

### S-007: Resubmission vs Fresh Filing

**Ambiguity:**
- When query raised, unclear if resubmission is correction of original or new SRN
- Resubmission fee rules unclear
- Relationship to original filing unclear

**Impact:** Exception handling design uncertain

**Resolution Required:**
- Understand resubmission mechanics
- Clarify SRN handling

**Criticality:** MEDIUM - Exception workflow

---

## 5. EVIDENCE GAPS (Cannot Resolve from Public Sources)

### G-001: Internal SOPs

**Gap:** Internal MCA operating procedures for processing, review, approval not publicly available

**Impact:** Cannot understand officer workflows, decision criteria, review checklists

**Resolution:** Request from MCA or accept as unknown

**Criticality:** MEDIUM - Officer-side process

---

### G-002: Technical Architecture

**Gap:** Backend technical architecture, microservices, databases, APIs not exposed

**Impact:** Cannot understand system implementation, scalability, integration points

**Resolution:** Request architecture documentation or infer from behavior

**Criticality:** LOW for Phase 1-2 (user-facing focus), HIGH for Phase 4 (technical architecture)

---

### G-003: Business Rule Engines

**Gap:** STP rules, validation rules, fee calculation rules not exposed in detail

**Impact:** Cannot replicate logic accurately

**Resolution:** Request rules documentation or reverse-engineer from behavior

**Criticality:** HIGH for implementation - Need rules to build system

---

### G-004: Role-Permission Matrix

**Gap:** Complete role-to-service-to-action authorization matrix not publicly available

**Impact:** Cannot design accurate access control

**Resolution:** Request or build through testing with different role accounts

**Criticality:** HIGH - Security and access control

---

### G-005: Master Data Schema

**Gap:** Complete database schema, field definitions, relationships not exposed

**Impact:** Data model incomplete

**Resolution:** Request data dictionary or infer from forms/master data views

**Criticality:** MEDIUM - Data architecture

---

### G-006: API Specifications

**Gap:** If APIs exist, specifications not publicly documented

**Impact:** Integration capability unknown

**Resolution:** Request API catalog or test for API presence

**Criticality:** LOW-MEDIUM - External integration

---

### G-007: Analytics and Metrics

**Gap:** Detailed usage analytics (page views, popular services, conversion rates, error rates) not public

**Impact:** Cannot optimize based on actual usage

**Resolution:** Request analytics access or data export

**Criticality:** MEDIUM - Evidence-based design

---

### G-008: Helpdesk Case Data

**Gap:** Detailed helpdesk case taxonomy, resolution patterns, common issues not public (only high-level volumes known)

**Impact:** Cannot design targeted help/support

**Resolution:** Request helpdesk data analysis

**Criticality:** MEDIUM - Support strategy

---

### G-009: User Research

**Gap:** No existing user research, personas, journey maps, pain points publicly available

**Impact:** Designing without user voice

**Resolution:** Conduct user research in Phase 2

**Criticality:** HIGH - User-centered design

---

### G-010: Form Validation Rules

**Gap:** Field-level, cross-field validation rules for each form not exposed

**Impact:** Cannot replicate validations accurately

**Resolution:** Request validation specifications or reverse-engineer

**Criticality:** HIGH for implementation - Need rules to build forms

---

## CONFLICT RESOLUTION STRATEGY

### Priority 1: Portal Access
**Resolves:** T-001, T-002, T-003, S-001, S-002, S-003, S-004, S-005, S-006, S-007  
**Method:** Establish portal access, navigate systematically  
**Timeline:** Immediate (blocking)

### Priority 2: Stakeholder Interviews
**Resolves:** C-002, C-003, C-004, C-005, C-007, C-008, T-004, T-005, TERM-003  
**Method:** Schedule interviews with MCA product/process owners  
**Timeline:** Phase 2 kickoff

### Priority 3: Documentation Request
**Resolves:** G-001, G-002, G-003, G-004, G-005, G-006, G-010  
**Method:** Formal request for internal documentation  
**Timeline:** Phase 2, progressive

### Priority 4: Analytics and Research
**Resolves:** G-007, G-008, G-009  
**Method:** Request data access, conduct user research  
**Timeline:** Phase 2, ongoing

### Priority 5: Testing and Observation
**Resolves:** Remaining ambiguities through actual system interaction  
**Method:** Test accounts, transaction observation, user shadowing  
**Timeline:** Phase 2-3

---

## RESOLUTION TRACKING

| Conflict ID | Priority | Resolution Method | Owner | Target Date | Status |
|-------------|----------|-------------------|-------|-------------|--------|
| All | Varies | See strategy above | Project Team | Phase 2 | NOT STARTED |

**Current Status:** All conflicts documented, awaiting Phase 2 resolution activities

---

## IMPACT ASSESSMENT

### High Impact (Blocking Design)
- T-001, T-002, T-003 (Navigation and service scope)
- S-001, S-002, S-004, S-005 (Core user flows)
- G-003, G-004, G-010 (Business rules and authorization)

### Medium Impact (Affects Detailed Design)
- C-002, C-003, C-005 (Module and legacy status)
- T-004, T-005, T-006 (Current operational details)
- S-003, S-006, S-007 (Secondary flows)
- G-001, G-005, G-007, G-008, G-009 (Process and optimization)

### Low Impact (Refinement and Optimization)
- C-001, C-004, C-006, C-007, C-008 (Taxonomy and terminology)
- TERM series (Terminology standardization)
- G-002, G-006 (Technical architecture detail)

---

## ASSUMPTIONS TO BRIDGE CONFLICTS

Where conflicts cannot be immediately resolved, explicit assumptions have been made (see Assumptions Register). These assumptions are provisional and must be validated.

**Key Assumption Areas:**
- Navigation structure (Assumption A01, A02, A03)
- Service organization (Assumption A04)
- Transaction states (Assumptions A08, A09, A10)
- User roles (Assumptions A13, A14, A15)
- e-Governance modules (Assumptions A16, A17, A18, A19)

**All assumptions flagged for validation in Validation Required Register.**

---

**Document Status:** COMPLETE CONFLICTS REGISTER  
**Total Conflicts:** 35 identified  
**Resolution Required:** All conflicts should be resolved during Phase 2  
**High-Priority Conflicts:** 13 items blocking core design  
**Next Step:** Execute conflict resolution strategy starting with portal access
