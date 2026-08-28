# MCA Phase 1 - Source Register

**Document Purpose:** Comprehensive catalog of all sources used in Phase 1 current-state discovery.

**Last Updated:** 27 August 2026

---

## Primary Source Documents

### Project Documentation
| Source | Type | Status | Notes |
|--------|------|--------|-------|
| MCA_Current_Website_Audit_and_Process_Architecture.md | Project Document | VERIFIED | Audit baseline and taxonomy framework |
| MCA_Kiro_Phase_1_Current_State_Discovery_Brief.md | Execution Brief | VERIFIED | Phase 1 operating instructions |

### Official MCA/Government Sources

| Source | URL | Access Status | Date | Evidence Class |
|--------|-----|---------------|------|----------------|
| MCA Homepage | https://www.mca.gov.in/ | 403 Forbidden | 27-Aug-2026 | BLOCKED |
| MCA Main Portal | https://www.mca.gov.in/content/mca/global/en/home.html | 403 Forbidden | 27-Aug-2026 | BLOCKED |
| Government Answer - Digital Platforms | https://sansad.in/getFile/annex/271/AU1017_FwPzhH.pdf | PDF (not fetched) | July 2026 | VERIFIED - Referenced |
| Government Answer - MCA21 V3 Features | https://sansad.in/getFile/loksabhaquestions/annex/187/AU4954_vFAQV0.pdf | PDF (not fetched) | 2026 | VERIFIED - Referenced |
| Government Answer - Helpdesk Data | https://sansad.in/getFile/annex/270/AU1164_cnaQFn.pdf | PDF (not fetched) | Jan 2026 | VERIFIED - Referenced |
| PIB Document - MCA21 Filings | https://static.pib.gov.in/WriteReadData/specificdocs/documents/2026/mar/doc202639816601.pdf | PDF (not fetched) | Mar 2026 | VERIFIED - Referenced |

### Professional/Training Documentation

| Source | URL | Access Status | Date | Evidence Class |
|--------|-----|---------------|------|----------------|
| ICSI FAQ - MCA21 Login/Registration | https://icsi.edu/media/webmodules/FAQs_MCA-21_Login_Registration.pdf | PDF (not fetched) | N/A | INFERRED |
| ICAI Training - V3 Overview | https://resource.cdn.icai.org/70539clcgc56494.pdf | PDF (not fetched) | N/A | INFERRED |
| ICSI Letter - V3 Portal Issues | https://www.icsi.edu/media/webmodules/DCL/Functioning_of_MCA21_V3_Portal_Issues_and_Challenges_faced_by_stakeholders_20.12.2025.pdf | PDF (not fetched) | 20-Dec-2025 | INFERRED |
| MCA21 V3 Website About Document | https://www.scribd.com/document/518049980/About-New-MCA21-V3-Website-06042021 | Limited Access | 06-Apr-2021 | INFERRED - Historical |
| MCA V3 2021 Guidance | https://cajatinminocha.com/resource/Articles/Image/MCA_21_Version_3_2021.pdf | PDF (not fetched) | 2021 | INFERRED - Historical |

### Third-Party Information Sources (Contextual Only)

| Source | URL | Access Status | Date | Evidence Class |
|--------|-----|---------------|------|----------------|
| ClearTax - MCA21 Portal Overview | https://cleartax.in/s/what-is-mca21-portal | ACCESSED | Feb 2026 | INFERRED |
| Bajaj Finserv - MCA Portal Guide | https://www.bajajfinserv.in/what-is-mca-portal | Not Accessed | Jan 2026 | INFERRED |
| Various - MCA Forms Lists | Multiple URLs | Various | 2026 | INFERRED |

---

## Access Constraints Encountered

### Direct Portal Access
**Issue:** MCA portal returns HTTP 403 Forbidden errors  
**URLs Affected:**
- https://www.mca.gov.in/
- https://www.mca.gov.in/content/mca/global/en/home.html
- All seed URLs from Phase 1 brief

**Impact:** Cannot directly crawl/verify current live portal structure  
**Mitigation Strategy:** 
1. Use official government documentation (Parliament answers, PIB releases)
2. Cross-reference professional body training materials (ICSI, ICAI)
3. Document as INFERRED where direct verification not possible
4. Flag all seed URLs for validation when access is possible

### PDF Documentation
**Issue:** Official training and guidance documents in PDF format cannot be directly parsed  
**Impact:** Cannot extract detailed page-level information from official training materials  
**Mitigation:** Use web summaries and third-party descriptions where they cite official sources

---

## Evidence from Search Results

### Key Facts VERIFIED from Official Government Sources (via sansad.in):

1. **All filings now use V3** (as of 2026)
2. **3.84 crore filings in 2021-2025**
3. **3.33 crore STP approvals**
4. **40.8 lakh ROC/RD approvals**
5. **8.3 lakh officer rejections**
6. **316,877 helpdesk tickets in FY 2025-26 (to 31 Jan 2026), ~98% resolved**
7. **V3 features confirmed:** Web-based filings, real-time validations, pre-filled master data, LLP Module, Company Module, e-Enforcement, e-Adjudication, e-Consultation, e-Book, Learning Management System
8. **MFA implementation confirmed**

### Key Service Families INFERRED from Multiple Sources:

1. Company Services
2. LLP Services
3. E-Filing
4. DIN/Director Services
5. DSC Services
6. Master Data
7. Document-Related Services
8. Fee & Payment Services
9. Complaints/Grievances
10. Investor Services
11. Track Transaction Status
12. Data & Reports
13. Help & FAQs

---

## Seed URLs - Verification Status

| Seed URL | Category | Verification Status | Evidence Class |
|----------|----------|-------------------|----------------|
| https://www.mca.gov.in/ | Homepage | BLOCKED (403) | UNKNOWN |
| https://www.mca.gov.in/content/mca/global/en/home.html | Main Entry | BLOCKED (403) | UNKNOWN |
| https://www.mca.gov.in/content/mca/global/en/about-us.html | About MCA | NOT VERIFIED | UNKNOWN |
| https://www.mca.gov.in/content/mca/global/en/acts-rules.html | Acts & Rules | NOT VERIFIED | UNKNOWN |
| https://www.mca.gov.in/content/mca/global/en/mca-services.html | MCA Services | NOT VERIFIED | UNKNOWN |
| https://www.mca.gov.in/content/mca/global/en/data-and-reports.html | Data & Reports | NOT VERIFIED | UNKNOWN |
| https://www.mca.gov.in/content/mca/global/en/help.html | Help/FAQs | NOT VERIFIED | UNKNOWN |
| https://www.mca.gov.in/content/mca/global/en/contact-us.html | Contact Us | NOT VERIFIED | UNKNOWN |
| https://www.mca.gov.in/content/mca/global/en/mca/e-filing.html | E-Filing | NOT VERIFIED | UNKNOWN |
| All other seed URLs | Various | NOT VERIFIED | UNKNOWN |

**STATUS:** All seed URLs require validation once portal access is established.

---

## Next Steps for Complete Source Documentation

1. **P0 - Obtain portal access** to verify seed URLs and discover actual current structure
2. **P0 - Parse official PDF documentation** via alternative methods
3. **P1 - Interview MCA stakeholders** for internal process documentation
4. **P1 - Analyze actual transaction logs** for real user flow patterns
5. **P1 - Access authenticated portal** to document My Workspace and transactional flows

---

## Document Status

**Current State:** PARTIAL - Blocked from primary source (live portal)  
**Evidence Base:** Official government statements + third-party documentation + audit document  
**Confidence Level:** MEDIUM - Structure understood, details require verification  
**Validation Required:** All seed URLs, page inventory, complete service catalog, form catalog
