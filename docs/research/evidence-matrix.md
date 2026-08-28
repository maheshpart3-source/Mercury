# MCA Phase 1 - Evidence Matrix

**Document Purpose:** Classification of all Phase 1 findings by evidence level.

**Last Updated:** 27 August 2026

---

## Evidence Classification System

| Class | Definition | Source Requirement |
|-------|------------|-------------------|
| **VERIFIED** | Directly supported by current official MCA material or recent Government statement | Official MCA/PIB/Parliament documents dated 2025-2026 |
| **VERIFIED-HISTORICAL** | Official MCA documentation describing earlier workflow; requires revalidation | Official sources dated 2021-2024 |
| **INFERRED** | Reasonable deduction from public behavior; must be validated with MCA | Multiple consistent third-party sources + logical necessity |
| **UNKNOWN** | Not publicly documented; discovery gap, not a guess | No authoritative source found |
| **PROPOSED** | Future-state recommendation; NOT current state | Design/architecture document (N/A for Phase 1) |
| **VALIDATION REQUIRED** | Important for project but cannot be confirmed from public sources | Critical dependency with insufficient evidence |

---

## VERIFIED - Platform & Architecture

**Source:** Government of India Parliament answers (sansad.in), PIB releases 2026

### MCA21 V3 Status
| Fact | Source | Date | Confidence |
|------|--------|------|------------|
| All filings now use V3 (V2 deprecated) | sansad.in AU1017 | July 2026 | HIGH |
| Web-based forms with real-time validation | sansad.in AU4954 | 2026 | HIGH |
| Pre-filled master data capability | sansad.in AU4954 | 2026 | HIGH |
| Multi-factor authentication (MFA) implemented | Multiple govt sources | 2026 | HIGH |
| Microservices architecture | Audit document citing PIB | N/A | MEDIUM |

### Transaction Volumes
| Metric | Value | Source | Date | Confidence |
|--------|-------|--------|------|------------|
| Total filings 2021-2025 | 3.84 crore | PIB doc202639816601 | Mar 2026 | HIGH |
| STP approvals | 3.33 crore | Same | Mar 2026 | HIGH |
| ROC/RD approvals | 40.8 lakh | Same | Mar 2026 | HIGH |
| Officer rejections | 8.3 lakh | Same | Mar 2026 | HIGH |
| Helpdesk tickets FY25-26 (to 31 Jan) | 316,877 | sansad.in AU1164 | Jan 2026 | HIGH |
| Helpdesk resolution rate | ~98% | Same | Jan 2026 | HIGH |

### e-Governance Modules - Implemented
| Module | Status | Source | Date | Confidence |
|--------|--------|--------|------|------------|
| Web filings | Implemented | sansad.in AU2768 | 2026 | HIGH |
| LLP Module | Implemented | sansad.in AU2768 | 2026 | HIGH |
| Company Module | Implemented | sansad.in AU2768 | 2026 | HIGH |
| e-Enforcement | Implemented | sansad.in AU2768 | 2026 | HIGH |
| e-Adjudication | Implemented | sansad.in AU2768, AU2609 | 2026 | HIGH |
| e-Consultation | Implemented | sansad.in AU2768, AU2609 | 2026 | HIGH |
| e-Book | Implemented | sansad.in AU2768, AU2609 | 2026 | HIGH |
| Learning Management System | Implemented | sansad.in AU2768, AU2609 | 2026 | HIGH |

### e-Governance Modules - Documented but Status TBD
| Module | Status | Source | Date | Confidence |
|--------|--------|--------|------|------------|
| e-Scrutiny | Documented concept | Audit doc + older sources | Historical | MEDIUM |
| Compliance Management System (CMS) | Documented concept | Audit doc + older sources | Historical | MEDIUM |
| MCA Lab | Documented concept | Audit doc | Historical | MEDIUM |

**VALIDATION REQUIRED:** Confirm current implementation status of e-Scrutiny, CMS, MCA Lab as of 2026

---

## VERIFIED-HISTORICAL - Website Structure

**Source:** MCA21 V3 Training Materials (2021), Professional body guidance (2021-2025)

### Top-Level Navigation (2021 baseline)
| Navigation Item | Evidence Date | Status | Validation Status |
|----------------|---------------|--------|-------------------|
| Home | 2021 V3 launch | Assumed current | VALIDATION REQUIRED |
| About MCA | 2021 V3 launch | Assumed current | VALIDATION REQUIRED |
| Acts & Rules | 2021 V3 launch | Assumed current | VALIDATION REQUIRED |
| My Workspace | 2021 V3 launch | Assumed current | VALIDATION REQUIRED |
| MCA Services | 2021 V3 launch | Assumed current | VALIDATION REQUIRED |
| Data & Reports | 2021 V3 launch | Assumed current | VALIDATION REQUIRED |
| Help & FAQs | 2021 V3 launch | Assumed current | VALIDATION REQUIRED |
| Contact Us | 2021 V3 launch | Assumed current | VALIDATION REQUIRED |

**Note:** These were documented in April 2021 V3 launch materials. Seed URLs provided in brief use this structure. Direct verification blocked by 403 errors.

### Homepage Service Cards (2021 baseline)

**Primary Cards (per 2021 FAQ):**
1. Register Company
2. Company Forms Downloads
3. Close Company
4. Register LLP
5. LLP Forms Downloads
6. Close LLP

**Frequently Used Cards (per 2021 FAQ):**
1. E-Books
2. Name Reservation (Company/LLP)
3. DIR-3 KYC
4. Track Transaction Status
5. View Public Documents
6. View Company/LLP Master Data
7. Associate/Update DSC
8. Enquire Fee
9. Independent Director Databank Registration
10. E-Auction

**VALIDATION REQUIRED:** Confirm this list is still current as of August 2026

---

## INFERRED - Service Catalogue

**Source:** Multiple third-party sources (ClearTax, professional guides) + logical necessity from statutory requirements

### Service Families
| Service Family | Inference Basis | Confidence | Validation Priority |
|---------------|-----------------|------------|---------------------|
| Company Services | Statutory + multiple sources | HIGH | P0 |
| LLP Services | Statutory + multiple sources | HIGH | P0 |
| E-Filing | Core platform function | HIGH | P0 |
| DIN/Director Services | Statutory requirement | HIGH | P0 |
| DSC Services | Authentication requirement | HIGH | P0 |
| Master Data | Public record requirement | HIGH | P0 |
| Document-Related Services | Public access requirement | HIGH | P0 |
| Fee & Payment Services | Transaction requirement | HIGH | P0 |
| Complaints/Grievances | Helpdesk confirmed | HIGH | P1 |
| Investor Services | IEPF statutory requirement | HIGH | P1 |
| Track Transaction Status | Logical necessity | HIGH | P0 |
| Data & Reports | Public information obligation | MEDIUM | P1 |

### Individual Services (INFERRED from third-party sources)

#### Company Services
- Company incorporation (SPICe+)
- Name reservation (RUN)
- Director appointment/change
- Annual return filing (AOC-4, MGT-7 families)
- Change of registered office
- Share capital changes
- Charge registration/modification/satisfaction
- Company closure/strike-off

#### LLP Services
- LLP registration (FiLLiP)
- LLP name reservation (RUN-LLP)
- Partner changes
- LLP annual return (Form 11, Form 8)
- LLP agreement filing
- LLP closure

#### DIN Services  
- DIN application (DIR-3)
- DIR-3 KYC
- DIN modification (DIR-6)

#### DSC Services
- Associate DSC
- Update DSC

#### Master Data Services
- View company master data
- View LLP master data
- View director master data
- Search company by CIN/name
- View charges register

#### Document Services
- View public documents
- Request certified copies
- Download incorporation certificate

#### Payment Services
- Fee enquiry
- Payment gateway
- Payment status tracking
- Stamp duty payment

**VALIDATION REQUIRED:** All service names, URLs, current availability

---

## INFERRED - Forms Catalogue (Partial)

**Source:** Third-party MCA forms lists (2026), audit document

### Known Form Categories

| Category | Representative Forms | Evidence | Confidence |
|----------|---------------------|----------|------------|
| Incorporation | SPICe+, RUN, FiLLiP, RUN-LLP | Multiple sources | HIGH |
| Director/DIN | DIR-3, DIR-3 KYC, DIR-6, DIR-12 | Multiple sources | HIGH |
| Annual filing | AOC-4 family, MGT-7, MGT-7A, Form 8, Form 11 | Multiple sources | HIGH |
| Changes | Various event-based forms | Multiple sources | MEDIUM |
| Charges | CHG-series | Multiple sources | MEDIUM |
| Investor | IEPF-5 | Multiple sources | HIGH |
| LLP changes | Form 3, Form 4, Form 4A, Form 5 | MCA site historical | MEDIUM |

**VALIDATION REQUIRED:** Complete active form list, current form versions, V3 vs V2 form mapping

---

## INFERRED - User Roles

**Source:** Professional training materials (ICSI, ICAI), third-party sources

| Role Type | Role | Evidence | Confidence |
|-----------|------|----------|------------|
| **Account Types** | Registered User | ICSI FAQ reference | HIGH |
| | Business User | ICSI FAQ reference | HIGH |
| **Business User Subtypes** | Director User | ICSI FAQ reference | HIGH |
| | Professional User (CS/CA) | ICSI FAQ reference | HIGH |
| | Company/LLP User | ICSI FAQ reference | HIGH |
| | Professional Staff | ICSI FAQ reference | HIGH |
| **Authorized Actions** | Designated Partner | Statutory | HIGH |
| | Managing Director | Statutory | HIGH |
| | Company Secretary | Statutory | HIGH |
| | Authorized Signatory | Statutory | HIGH |
| **Public Access** | Anonymous/Public User | Logical necessity | HIGH |

**VALIDATION REQUIRED:** Complete role-to-action authorization matrix

---

## INFERRED - Transaction States

**Source:** Logical necessity from STP/human workflow + helpdesk references

| State | Inference Basis | Confidence | Validation Priority |
|-------|-----------------|------------|---------------------|
| Draft | Standard e-filing pattern | HIGH | P1 |
| Payment Pending | Fee services confirmed | HIGH | P1 |
| Submitted (SRN created) | SRN tracking service exists | HIGH | P0 |
| STP Processing | 3.33 crore STP approvals confirmed | HIGH | P0 |
| Under Review (ROC/RD) | 40.8 lakh human approvals confirmed | HIGH | P0 |
| Query/Resubmission | 8.3 lakh rejections confirmed | HIGH | P0 |
| Approved | Logical outcome | HIGH | P1 |
| Rejected | 8.3 lakh rejections confirmed | HIGH | P0 |

**VALIDATION REQUIRED:** Exact state labels shown to users, complete state machine, transition rules

---

## UNKNOWN - Requiring Discovery

### URL/Page Inventory
- **Complete page list:** Cannot access live portal
- **Current navigation structure:** Blocked from verification
- **My Workspace structure:** Authentication required
- **Search functionality:** Cannot observe
- **Mobile app features:** Not investigated

### Service Details
- **Exact service entry point URLs:** All seed URLs unverified
- **Service-specific prerequisites:** Not documented publicly
- **Eligibility rules:** Not comprehensive
- **Form-to-service mapping:** Incomplete
- **Prefill data sources:** Logic inferred but not documented

### Forms
- **Complete active form catalogue:** Third-party sources may be incomplete
- **Form versions:** V2 vs V3 transitions not fully clear
- **Form data models:** Not exposed publicly
- **Validation rules:** Real-time validation confirmed but rules not exposed
- **Required attachments per form:** Not documented comprehensively

### Process/Workflow
- **STP business rules:** Not exposed
- **ROC/RD workflow:** Officer interface not accessible
- **CPC/CPACE procedures:** Limited public documentation
- **Resubmission process:** Not detailed
- **e-Scrutiny selection criteria:** Not exposed
- **e-Enforcement triggers:** Not exposed

### Technical Architecture
- **Microservice boundaries:** Not documented
- **Internal APIs:** Not exposed
- **Database schemas:** Not exposed
- **Queue/event architecture:** Not documented
- **Authentication/session management:** Implementation details not exposed
- **Payment gateway integration:** Provider/flow not confirmed

### Data
- **Master data model:** Structure inferred but not documented
- **Data dictionary:** Not available
- **Entity relationships:** Partial understanding
- **Data retention policies:** Not found
- **Document storage:** Implementation not known

### Support
- **Helpdesk ticket categories:** High-level only (technical, awareness, processing)
- **Escalation paths:** Not documented
- **SLA definitions:** Not found publicly
- **Case management workflow:** Not exposed

---

## VALIDATION REQUIRED - Critical Gaps

### P0 - Blocking Issues
1. **Live portal access** - Cannot verify any seed URLs
2. **Complete service catalog** - Third-party sources may be outdated
3. **Active forms list** - No authoritative current source found
4. **Transaction state labels** - User-facing terminology not confirmed
5. **Service-to-form mapping** - Incomplete understanding

### P1 - Important Gaps
1. **e-Scrutiny current status** - Historical documentation only
2. **CMS current status** - Historical documentation only
3. **MCA Lab current status** - Historical documentation only
4. **Role-to-permission matrix** - Not found publicly
5. **Internal SOP documentation** - Not available publicly

### P2 - Detailed Gaps
1. **Form validation rules** - Not exposed
2. **Fee calculation rules** - General only, not detailed
3. **Payment reconciliation flow** - Not documented
4. **Document certification workflow** - Not detailed
5. **API specifications** - Not available publicly

---

## Evidence Quality Assessment

| Area | Evidence Quality | Blocking Issues | Mitigation |
|------|-----------------|-----------------|------------|
| Platform Status | **HIGH** | None | Official govt sources current |
| Transaction Volumes | **HIGH** | None | Official govt sources current |
| Top-level Structure | **MEDIUM** | Portal access | Use historical docs + validation |
| Service Families | **MEDIUM** | Portal access | Use third-party + logic |
| Individual Services | **LOW** | Portal access + details | Requires portal + stakeholder input |
| Forms | **MEDIUM** | Complete list | Third-party sources + validation |
| User Journeys | **LOW** | Portal access | Requires portal + user research |
| Transaction States | **LOW** | Portal access | Requires portal observation |
| Backend Processes | **LOW** | Not exposed | Requires MCA internal docs |
| Technical Architecture | **LOW** | Not exposed | Requires MCA technical docs |

---

## Next Steps for Evidence Improvement

1. **Immediate**
   - Attempt alternative portal access methods
   - Search for official MCA V3 training videos/webinars
   - Review Companies Act/LLP Act for statutory service requirements

2. **Near-term (requires coordination)**
   - MCA stakeholder interviews for process details
   - Access to internal SOP documentation
   - Access to authenticated portal for My Workspace mapping
   - Technical architecture documentation request

3. **As available**
   - User research for actual journey mapping
   - Transaction log analysis for real workflow patterns
   - Helpdesk case analysis for exception patterns
   - Analytics for service usage patterns

---

## Document Status

**Overall Evidence Quality:** MEDIUM  
**Critical Gaps:** Portal access, complete service/form catalogs  
**Recommendation:** Proceed with structure documentation using available evidence, flag all items requiring validation  
**Risk:** Details may have changed since 2021 V3 launch; all HISTORICAL evidence must be revalidated
