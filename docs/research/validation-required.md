# MCA Phase 1 - Validation Required Register

**Document Purpose:** Consolidated list of items requiring MCA stakeholder validation before Phase 2.

**Last Updated:** 27 August 2026

---

## Purpose

This register consolidates all "VALIDATION REQUIRED" items identified across Phase 1 documentation. These are critical gaps where public evidence is insufficient and MCA stakeholder input is essential.

**Priority Levels:**
- **P0 (Blocking):** Must validate before Phase 2 design can begin
- **P1 (Important):** Should validate during Phase 2 for accurate detailed design
- **P2 (Detailed):** Can validate during Phase 3+ implementation

---

## SUMMARY STATISTICS

| Priority | Count | Action Required |
|----------|-------|----------------|
| **P0** | 45 items | Validation BEFORE Phase 2 |
| **P1** | 62 items | Validation DURING Phase 2 |
| **P2** | 38 items | Validation DURING Phase 3+ |
| **TOTAL** | 145 items | Requires MCA collaboration |

---

## P0 - BLOCKING PHASE 2 (45 Items)

### Portal Access and Structure (5 items)

| ID | Item | Source Document | Why P0 |
|----|------|-----------------|--------|
| P0-001 | **Establish portal access** (resolve 403 errors on all seed URLs) | URL Inventory | Cannot verify ANY current state without access |
| P0-002 | **Verify top-level navigation** structure (8 sections current as of 2026?) | Information Architecture | Foundation for IA design |
| P0-003 | **Complete URL inventory** via portal navigation or sitemap export | URL Inventory | Need accurate page structure |
| P0-004 | **My Workspace structure** and functionality | Information Architecture, User Flows | Central authenticated experience unknown |
| P0-005 | **Service entry point URLs** for all 100+ services | Service Catalogue, URL Inventory | Cannot map services to implementation |

---

### Services and Forms (10 items)

| ID | Item | Source Document | Why P0 |
|----|------|-----------------|--------|
| P0-006 | **Complete active service catalog** (vs. 2021 list, confirm no additions/changes) | Service Catalogue | Service scope drives architecture |
| P0-007 | **Official current forms list** with versions | Form Catalogue | Form catalog completeness uncertain |
| P0-008 | **Active vs deprecated forms** (V2 to V3 mapping) | Form Catalogue | Need to know what's actually in use |
| P0-009 | **SPICe+ current structure** (Part A/B, integrated services scope) | Form Catalogue, Service Catalogue | Primary incorporation form structure unclear |
| P0-010 | **FiLLiP current structure** and integrated services (if any) | Form Catalogue, Service Catalogue | Primary LLP formation form structure unclear |
| P0-011 | **DIR-3 KYC current process** (due date, deactivation rules, late fee) | Form Catalogue, User Flows | Annual compliance mechanism unclear |
| P0-012 | **Form-to-service mapping** (which forms support which services) | Service Catalogue, Form Catalogue | Service-form relationship incomplete |
| P0-013 | **Service-specific eligibility** criteria and prerequisites | Service Catalogue | Cannot design service entry without eligibility rules |
| P0-014 | **e-Scrutiny current status** (operational? how does it work?) | Evidence Matrix, Transaction Model | Module status unclear from public sources |
| P0-015 | **CMS (Compliance Management System) current status** and operation | Evidence Matrix, Transaction Model | Module status unclear from public sources |

---

### Transaction and Processing (10 items)

| ID | Item | Source Document | Why P0 |
|----|------|-----------------|--------|
| P0-016 | **Transaction state labels** (exact user-visible terminology) | Transaction Model | State machine design depends on actual labels |
| P0-017 | **Complete state machine** with all possible transitions | Transaction Model | Transaction flow design incomplete |
| P0-018 | **STP eligibility rules** by form | Transaction Model | Cannot design automated processing without rules |
| P0-019 | **Query and resubmission process** details | Transaction Model, User Flows | Exception handling flow unclear |
| P0-020 | **Payment timing** (before submission? after? integrated?) | Transaction Model, User Flows | Payment integration point unclear |
| P0-021 | **Payment reconciliation** process and timing | Transaction Model | Payment-filing linkage unclear |
| P0-022 | **Processing paths** (CPC/CPACE vs ROC/RD routing rules) | Transaction Model | Human review routing logic unknown |
| P0-023 | **SRN format** and generation logic | Transaction Model | Transaction identifier structure unknown |
| P0-024 | **Notification triggers** and channels (email/SMS/dashboard) | Transaction Model, User Flows | User communication mechanism unclear |
| P0-025 | **Transaction metadata** complete schema | Transaction Model | What data is captured per transaction unknown |

---

### User Roles and Authorization (10 items)

| ID | Item | Source Document | Why P0 |
|----|------|-----------------|--------|
| P0-026 | **Complete role-permission matrix** (role × service → allowed/denied) | User-Role Catalogue | Authorization model is foundation for access control |
| P0-027 | **Business user registration process** (step-by-step for each role) | User-Role Catalogue | User onboarding flows unknown |
| P0-028 | **Entity association process** (how users link to companies/LLPs) | User-Role Catalogue, Entity Model | User-entity linking mechanism unclear |
| P0-029 | **DSC association and verification** process | User-Role Catalogue, User Flows | Authentication mechanism details unknown |
| P0-030 | **Authorization delegation** (how company authorizes users) | User-Role Catalogue | Delegation workflow unknown |
| P0-031 | **Role-based service access** boundaries (what each role can do) | User-Role Catalogue | Service visibility by role unknown |
| P0-032 | **Authenticated vs public navigation** differences | Information Architecture | Menu changes by authentication state unknown |
| P0-033 | **Multi-entity handling** (director in multiple companies, professional with multiple clients) | User-Role Catalogue | Multi-entity UX unknown |
| P0-034 | **DSC technical requirements** (Class 2/3, providers, registration) | User-Role Catalogue | DSC specifics unclear |
| P0-035 | **MFA implementation details** (OTP delivery, fallback options) | User-Role Catalogue | Authentication mechanism details unknown |

---

### Data and Master Registry (5 items)

| ID | Item | Source Document | Why P0 |
|----|------|-----------------|--------|
| P0-036 | **Entity attribute lists** (complete fields in company/LLP/director master data) | Entity Model | Data model incompleteness blocks design |
| P0-037 | **Prefill behavior** by form (which fields prefill from where) | Transaction Model, Form Catalogue | Data reuse logic unknown |
| P0-038 | **Master data update triggers** (what filing updates what data) | Entity Model | Registry update logic unclear |
| P0-039 | **Data visibility rules** (public vs private fields, masking) | Entity Model | Privacy/transparency rules unknown |
| P0-040 | **Entity status taxonomy** (complete list of company/LLP/DIN statuses) | Entity Model | Status values and meanings unclear |

---

### Legacy and V2/V3 Transition (5 items)

| ID | Item | Source Document | Why P0 |
|----|------|-----------------|--------|
| P0-041 | **V2 deprecation status** (are V2 URLs active? redirects?) | URL Inventory | Legacy system status unknown |
| P0-042 | **V2 to V3 form mapping** (form number/name changes) | Form Catalogue | Form evolution unclear |
| P0-043 | **2021 to 2026 changes** (confirm navigation structure unchanged) | Information Architecture | 5-year evolution unknown |
| P0-044 | **Service additions/deprecations** since 2021 V3 launch | Service Catalogue | Service catalog currency unknown |
| P0-045 | **Module implementation status** (e-Enforcement, MCA Lab confirmed operational?) | Evidence Matrix | Module status gaps |

---

## P1 - IMPORTANT FOR PHASE 2 (62 Items)

### Service Design (15 items)

| ID | Item | Source Document | Why P1 |
|----|------|-----------------|--------|
| P1-001 | Service-specific prerequisites | Service Catalogue | Needed for detailed service design |
| P1-002 | Service-specific validation rules | Service Catalogue | Needed for form validation |
| P1-003 | Service-specific STP eligibility | Transaction Model | Needed for processing design |
| P1-004 | Service-specific fees | Service Catalogue | Needed for payment design |
| P1-005 | Service-specific processing timelines (SLAs) | Transaction Model | Needed for expectation setting |
| P1-006 | Service-specific documents required | Service Catalogue | Needed for attachment handling |
| P1-007 | Service-specific outcomes (certificates, registry updates) | Service Catalogue | Needed for outcome design |
| P1-008 | Service-specific downstream obligations | Service Catalogue | Needed for next-action guidance |
| P1-009 | e-Adjudication user interface (public/entity access) | Service Catalogue | Public interaction with module unclear |
| P1-010 | e-Consultation current interface | Service Catalogue | Public participation mechanism unclear |
| P1-011 | e-Books access and catalog | Service Catalogue | Content and access method unclear |
| P1-012 | LMS (Learning Management System) structure and content | Service Catalogue | Training platform details unclear |
| P1-013 | Independent Director Databank functionality | Service Catalogue | Specialized service operation unclear |
| P1-014 | E-Auction process and scope | Service Catalogue | Specialized service operation unclear |
| P1-015 | Investor Services detailed workflows | Service Catalogue | IEPF processes beyond IEPF-5 unclear |

---

### Form Design (10 items)

| ID | Item | Source Document | Why P1 |
|----|------|-----------------|--------|
| P1-016 | Form data models (fields, sections, data types) | Form Catalogue | Needed for form implementation |
| P1-017 | Field-level validation rules by form | Form Catalogue | Needed for real-time validation |
| P1-018 | Required attachments by form | Form Catalogue | Needed for document upload |
| P1-019 | Form versioning practice | Form Catalogue | Needed for change management |
| P1-020 | Form instructions and help text | Form Catalogue | Needed for user guidance |
| P1-021 | Conditional sections in forms (show/hide logic) | Form Catalogue | Needed for dynamic form behavior |
| P1-022 | Cross-field validations | Form Catalogue | Needed for complex validation |
| P1-023 | Pre-fill sources by field | Form Catalogue | Needed for data reuse implementation |
| P1-024 | AOC-4 and MGT-7 detailed structures | Form Catalogue | High-volume forms need detail |
| P1-025 | CHG-1 detailed structure and documents | Form Catalogue | Complex form needs detail |

---

### User Experience (12 items)

| ID | Item | Source Document | Why P1 |
|----|------|-----------------|--------|
| P1-026 | Professional staff management (how professionals manage staff) | User-Role Catalogue | Multi-user workflow unclear |
| P1-027 | Role switching (user with multiple roles/entities) | User-Role Catalogue | Multi-context UX unclear |
| P1-028 | Account upgrade path (registered → business user) | User-Role Catalogue | User progression unclear |
| P1-029 | Draft management in My Workspace | User Flows | Draft handling details unclear |
| P1-030 | Error messages and recovery guidance | Transaction Model | Error UX unknown |
| P1-031 | Helpdesk ticket categories and routing | User Flows | Support taxonomy unclear |
| P1-032 | Resubmission fee rules | Transaction Model | Resubmission economics unclear |
| P1-033 | Payment gateway provider and UX | Transaction Model | Payment integration details unknown |
| P1-034 | Status visibility in UI | Transaction Model | User-facing status display unknown |
| P1-035 | Certificate download mechanism | User Flows | Document delivery unclear |
| P1-036 | Notification content templates | Transaction Model | User communication content unknown |
| P1-037 | Mobile site/app structure (if different from desktop) | Information Architecture | Mobile experience unknown |

---

### Processing and Workflow (10 items)

| ID | Item | Source Document | Why P1 |
|----|------|-----------------|--------|
| P1-038 | e-Scrutiny selection criteria and timing | Transaction Model | Post-approval review logic unknown |
| P1-039 | CMS detection rules and notice types | Transaction Model | Compliance monitoring logic unknown |
| P1-040 | e-Enforcement trigger conditions | Transaction Model | Enforcement initiation unclear |
| P1-041 | Officer workflows (ROC/RD interfaces) | Transaction Model | Human review process unknown |
| P1-042 | Queue assignment rules (CPC/CPACE/ROC/RD) | Transaction Model | Routing logic unclear |
| P1-043 | Query issuance process | Transaction Model | Query mechanism unclear |
| P1-044 | Rejection reasons taxonomy | Transaction Model | Rejection categorization unknown |
| P1-045 | Registry update timing and propagation | Transaction Model | Data update latency unknown |
| P1-046 | Certificate generation process | Transaction Model | Document creation workflow unclear |
| P1-047 | Resubmission routing (same queue? priority?) | Transaction Model | Re-processing path unclear |

---

### Data and Integration (10 items)

| ID | Item | Source Document | Why P1 |
|----|------|-----------------|--------|
| P1-048 | Entity relationship cardinalities (1:1, 1:N, M:N) | Entity Model | Data model precision needed |
| P1-049 | Business rules and constraints | Entity Model | Data integrity rules unknown |
| P1-050 | Data validation rules by field | Entity Model | Field-level rules unknown |
| P1-051 | Data update triggers (what updates what) | Entity Model | Data flow logic unclear |
| P1-052 | Historical data retention rules | Entity Model | Data lifecycle unknown |
| P1-053 | Payment gateway integration details | Transaction Model | Payment technical integration unclear |
| P1-054 | Document repository integration | Transaction Model | Document storage unclear |
| P1-055 | Fee calculation rules (detailed by service/entity) | Service Catalogue | Fee logic complexity unknown |
| P1-056 | AGILE-PRO integrations (PAN/TAN/EPFO/ESIC) in SPICe+ | Service Catalogue | External integration scope unclear |
| P1-057 | API catalog (if public APIs exist) | URL Inventory | External access unknown |

---

### Content and Help (5 items)

| ID | Item | Source Document | Why P1 |
|----|------|-----------------|--------|
| P1-058 | Complete content inventory | Information Architecture | Content scope unknown |
| P1-059 | FAQ organization and search | Information Architecture | Self-service structure unclear |
| P1-060 | Help content contextual integration | Information Architecture | Contextual help unclear |
| P1-061 | User manual catalog | Information Architecture | Documentation scope unknown |
| P1-062 | Video tutorial catalog | Information Architecture | Training content scope unknown |

---

## P2 - DETAILED DESIGN (38 Items)

### Service Refinements (8 items)

| ID | Item | Source Document | Why P2 |
|----|------|-----------------|--------|
| P2-001 | Service blueprints for all 100+ services | Service Catalogue | Comprehensive documentation |
| P2-002 | Service-to-legal-provision mapping | Service Catalogue | Legal traceability |
| P2-003 | Service ownership and process owners | Service Catalogue | Governance clarity |
| P2-004 | Service performance metrics (volumes, durations) | Service Catalogue | Optimization data |
| P2-005 | Service exception scenarios catalog | Service Catalogue | Edge case handling |
| P2-006 | Service change management process | Service Catalogue | Evolution process |
| P2-007 | Service deprecation process | Service Catalogue | Lifecycle management |
| P2-008 | Service SLA enforcement and escalation | Service Catalogue | Service management |

---

### Form Refinements (8 items)

| ID | Item | Source Document | Why P2 |
|----|------|-----------------|--------|
| P2-009 | Complete form catalog with all variants | Form Catalogue | Exhaustive inventory |
| P2-010 | Form usage statistics (volume by form) | Form Catalogue | Usage patterns |
| P2-011 | Form error frequency (common validation failures) | Form Catalogue | Quality improvement |
| P2-012 | Form change history | Form Catalogue | Evolution tracking |
| P2-013 | Form backward compatibility rules | Form Catalogue | Version management |
| P2-014 | Form internationalization (if multi-language) | Form Catalogue | Localization |
| P2-015 | Form accessibility compliance (WCAG) | Form Catalogue | Accessibility |
| P2-016 | Form testing and validation process | Form Catalogue | Quality assurance |

---

### User Experience Refinements (8 items)

| ID | Item | Source Document | Why P2 |
|----|------|-----------------|--------|
| P2-017 | User behavior analytics (navigation patterns, drop-offs) | Information Architecture | User research |
| P2-018 | Search usage and effectiveness (queries, zero-results) | Information Architecture | Search optimization |
| P2-019 | Accessibility features (screen reader, font size, contrast) | Information Architecture | Accessibility compliance |
| P2-020 | Multi-language support (if Hindi/other languages supported) | Information Architecture | Localization |
| P2-021 | Browser/device compatibility matrix | Information Architecture | Technical compatibility |
| P2-022 | Session timeout and security policies | User-Role Catalogue | Security policies |
| P2-023 | Account recovery process | User-Role Catalogue | Security recovery |
| P2-024 | Privacy and data masking policies | Entity Model | Privacy compliance |

---

### Technical and Architecture (8 items)

| ID | Item | Source Document | Why P2 |
|----|------|-----------------|--------|
| P2-025 | Technical architecture documentation | Transaction Model | System design |
| P2-026 | Database schemas | Entity Model | Data implementation |
| P2-027 | API specifications (if applicable) | URL Inventory | Integration specs |
| P2-028 | Authentication/authorization implementation | User-Role Catalogue | Security implementation |
| P2-029 | Audit logging scope and retention | Transaction Model | Compliance logging |
| P2-030 | Monitoring and alerting | Transaction Model | Operations |
| P2-031 | Disaster recovery and backup | Transaction Model | Business continuity |
| P2-032 | Third-party dependencies | Transaction Model | Vendor management |

---

### Operational and Governance (6 items)

| ID | Item | Source Document | Why P2 |
|----|------|-----------------|--------|
| P2-033 | Content governance model | Information Architecture | Content management |
| P2-034 | Release and deployment process | Transaction Model | Change management |
| P2-035 | Testing procedures | Transaction Model | Quality assurance |
| P2-036 | Regulatory change to system change pipeline | Form Catalogue | Regulatory agility |
| P2-037 | Helpdesk case management workflow | User Flows | Support operations |
| P2-038 | Escalation paths and SLAs | User Flows | Support escalation |

---

## VALIDATION APPROACH

### Recommended Validation Methods

**1. Portal Navigation Sessions**
- Systematic navigation of all sections
- Document actual URLs, page titles, content
- Screenshot key pages
- Test transactional flows where possible

**2. Stakeholder Interviews**
- MCA product owners (service definitions)
- MCA process owners (workflows, SOPs)
- MCA technical team (architecture, integration)
- ROC officers (review processes)
- Helpdesk team (support taxonomy)

**3. Documentation Review**
- Request internal process documentation
- Access training materials
- Review SOPs and policy documents
- Analyze form specifications

**4. User Research**
- Interview actual users (directors, professionals, company secretaries)
- Observe filing sessions
- Collect pain points and success stories
- Validate user journeys

**5. Data Analysis**
- Request analytics (page views, popular services, search queries)
- Review helpdesk ticket data (categories, volumes, resolution times)
- Analyze transaction logs (processing paths, timings, error frequencies)
- Examine form submissions (volume by form, approval rates)

**6. Testing**
- Create test accounts (each user role)
- Submit test filings (if test environment available)
- Test error scenarios
- Validate state transitions

---

## VALIDATION PRIORITIZATION STRATEGY

### Phase 2 Gate 1 (Before Design Begins)
**Validate:** All P0 items (45 items)  
**Method:** Portal access + stakeholder interviews + documentation review  
**Timeline:** 2-4 weeks  
**Deliverable:** Validated current-state model

### Phase 2 During Design
**Validate:** P1 items in relevant design areas (62 items, progressive)  
**Method:** Iterative validation as design progresses  
**Timeline:** Throughout Phase 2  
**Deliverable:** Detailed design specifications

### Phase 3+ During Implementation
**Validate:** P2 items as needed (38 items, as required)  
**Method:** Just-in-time validation  
**Timeline:** On-demand during implementation  
**Deliverable:** Implementation-ready specifications

---

## VALIDATION RISK ASSESSMENT

### High Risk (If Not Validated)

**Service and Form Scope:** Designing for wrong/incomplete set of services  
**Mitigation:** P0 validation of service/form catalogs essential

**Transaction States:** Building incorrect workflow logic  
**Mitigation:** P0 validation of state machine critical

**Authorization Model:** Implementing wrong access control  
**Mitigation:** P0 validation of role-permission matrix critical

**Portal Access:** Cannot validate anything without access  
**Mitigation:** Resolve 403 errors immediately, highest priority

### Medium Risk

**Processing Rules:** STP/manual routing inefficiency  
**Mitigation:** P1 validation during Phase 2

**User Experience:** Misunderstanding user needs  
**Mitigation:** P1 user research during Phase 2

### Low Risk

**Optimization Details:** Suboptimal but functional  
**Mitigation:** P2 validation during Phase 3+

---

## NEXT STEPS

1. **Share this register with MCA stakeholders**
2. **Prioritize P0 items** for immediate validation
3. **Schedule validation sessions** (portal access, interviews, documentation review)
4. **Create validation tracking sheet** (item, owner, method, target date, status)
5. **Establish validation cadence** (weekly reviews during Phase 2)
6. **Document validation outcomes** (update current-state documents as validated)
7. **Manage validation scope** (add new items as discovered, remove if resolved)

---

## VALIDATION TRACKING

**Validation Status Legend:**
- **NOT STARTED:** Awaiting validation
- **IN PROGRESS:** Validation underway
- **PARTIALLY VALIDATED:** Some information obtained, more needed
- **VALIDATED:** Confirmed with evidence
- **UNABLE TO VALIDATE:** MCA unable/unwilling to provide, proceed with assumption

**Current Status:** All 145 items = NOT STARTED (Phase 1 complete, awaiting Phase 2 kickoff)

---

**Document Status:** COMPLETE VALIDATION REGISTER  
**Total Items:** 145 validation requirements  
**Critical Path:** P0 items (45) must be validated before Phase 2 design  
**Owner:** Project team + MCA stakeholders  
**Review Cadence:** Weekly during validation phase
