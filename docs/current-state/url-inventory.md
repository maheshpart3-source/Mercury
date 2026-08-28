# MCA Phase 1 - URL and Page Inventory

**Document Purpose:** Catalog of MCA portal URLs and pages based on available evidence.

**Last Updated:** 27 August 2026

---

## CRITICAL LIMITATION

**Portal Access Blocked:** All seed URLs returned HTTP 403 Forbidden errors during Phase 1 discovery.

**Evidence Base:**
- Seed URLs from Phase 1 Discovery Brief
- 2021 V3 launch documentation (navigation structure)
- Third-party references
- Logical URL patterns

**Status:** ALL URLs IN THIS DOCUMENT ARE **UNVERIFIED** and require validation against live portal.

---

## URL Verification Status Legend

| Status | Meaning |
|--------|---------|
| **BLOCKED** | Attempted access, returned 403 Forbidden |
| **UNVERIFIED** | Seed URL or inferred, not tested |
| **ASSUMED CURRENT** | Based on 2021 documentation, may have changed |
| **LEGACY** | Older V2 URL pattern, status unknown |
| **VALIDATION REQUIRED** | Critical for Phase 2, must verify |

---

## 1. TOP-LEVEL NAVIGATION URLs

### 1.1 Homepage and Main Entry

| URL | Page | Evidence | Status |
|-----|------|----------|--------|
| https://www.mca.gov.in/ | MCA Homepage / Portal Entry | Seed URL | **BLOCKED** (403) |
| https://www.mca.gov.in/content/mca/global/en/home.html | Main Home Page | Seed URL | **BLOCKED** (403) |

**Notes:**
- First URL may redirect to second
- Homepage contains service cards and primary navigation
- 2021 documentation confirms this structure

**Validation Required:** Current active homepage URL, redirect behavior

---

### 1.2 About MCA

| URL | Page | Evidence | Status |
|-----|------|----------|--------|
| https://www.mca.gov.in/content/mca/global/en/about-us.html | About MCA Landing | Seed URL | **UNVERIFIED** |
| https://www.mca.gov.in/content/mca/global/en/about-us/about-ministry.html | About Ministry | Inferred | **UNVERIFIED** |
| https://www.mca.gov.in/content/mca/global/en/about-us/organisation.html | Organisation Structure | Inferred | **UNVERIFIED** |
| https://www.mca.gov.in/content/mca/global/en/about-us/offices.html | MCA Offices | Inferred | **UNVERIFIED** |

**Expected Content:**
- Ministry information
- Organisation chart
- Key officials
- Contact information
- Related links

---

### 1.3 Acts & Rules

| URL | Page | Evidence | Status |
|-----|------|----------|--------|
| https://www.mca.gov.in/content/mca/global/en/acts-rules.html | Acts & Rules Landing | Seed URL | **UNVERIFIED** |
| https://www.mca.gov.in/content/mca/global/en/acts-rules/acts.html | Acts | Inferred | **UNVERIFIED** |
| https://www.mca.gov.in/content/mca/global/en/acts-rules/rules.html | Rules | Inferred | **UNVERIFIED** |
| https://www.mca.gov.in/content/mca/global/en/acts-rules/notifications.html | Notifications | Inferred | **UNVERIFIED** |
| https://www.mca.gov.in/content/mca/global/en/acts-rules/circulars.html | Circulars | Inferred | **UNVERIFIED** |

**Expected Content:**
- Companies Act 2013
- LLP Act 2008
- Rules and amendments
- Notifications
- Circulars
- Searchable/downloadable

---

### 1.4 My Workspace (Authenticated Area)

| URL | Page | Evidence | Status |
|-----|------|----------|--------|
| https://www.mca.gov.in/content/mca/global/en/my-workspace.html | My Workspace Landing | Seed URL (inferred) | **UNVERIFIED** |
| Unknown | Drafts | Logical necessity | **UNKNOWN** |
| Unknown | My Filings / Transaction History | Logical necessity | **UNKNOWN** |
| Unknown | My Payments | Logical necessity | **UNKNOWN** |
| Unknown | My Notifications | Logical necessity | **UNKNOWN** |
| Unknown | My Profile | Logical necessity | **UNKNOWN** |

**Notes:**
- Authentication required
- User-specific content
- Actual URL structure unknown (may be different from public pages)
- 2021 documentation mentions My Workspace but doesn't provide URLs

**Validation Required:** My Workspace URL, sub-sections, navigation

---

### 1.5 MCA Services

| URL | Page | Evidence | Status |
|-----|------|----------|--------|
| https://www.mca.gov.in/content/mca/global/en/mca-services.html | MCA Services Landing | Seed URL | **UNVERIFIED** |

**Sub-Services (URLs Unknown):**
- Company Services
- LLP Services
- E-Filing
- DIN/Director Services
- DSC Services
- Master Data
- Document-Related Services
- Fee & Payment Services
- Complaints/Grievances
- Investor Services
- Track Transaction Status

**Note:** Service-level URLs not provided in seed list. Likely organized under /mca-services/ path with sub-paths for each service family.

**Validation Required:** Complete service URL structure

---

### 1.6 Data & Reports

| URL | Page | Evidence | Status |
|-----|------|----------|--------|
| https://www.mca.gov.in/content/mca/global/en/data-and-reports.html | Data & Reports Landing | Seed URL | **UNVERIFIED** |
| https://www.mca.gov.in/content/mca/global/en/data-and-reports/library.html | Library | Inferred | **UNVERIFIED** |
| https://www.mca.gov.in/content/mca/global/en/data-and-reports/reports-statistics.html | Reports & Statistics | Inferred | **UNVERIFIED** |
| https://www.mca.gov.in/content/mca/global/en/data-and-reports/roc-information.html | ROC Information | Inferred | **UNVERIFIED** |

**Expected Content:**
- Corporate reports
- Statistics and analytics
- Research papers
- ROC/RD information
- Company/LLP data products

---

### 1.7 Help & FAQs

| URL | Page | Evidence | Status |
|-----|------|----------|--------|
| https://www.mca.gov.in/content/mca/global/en/help.html | Help Landing | Seed URL | **UNVERIFIED** |
| https://www.mca.gov.in/content/mca/global/en/help/faqs.html | FAQs | Inferred | **UNVERIFIED** |
| https://www.mca.gov.in/content/mca/global/en/help/manuals.html | Manuals/Guides | Inferred | **UNVERIFIED** |
| https://www.mca.gov.in/content/mca/global/en/help/tutorials.html | Tutorials | Inferred | **UNVERIFIED** |

**Expected Content:**
- Searchable FAQs
- User manuals
- Video tutorials
- Step-by-step guides
- Form instructions

---

### 1.8 Contact Us

| URL | Page | Evidence | Status |
|-----|------|----------|--------|
| https://www.mca.gov.in/content/mca/global/en/contact-us.html | Contact Us Landing | Seed URL | **UNVERIFIED** |
| https://www.mca.gov.in/content/mca/global/en/contact-us/helpdesk.html | Helpdesk | Inferred | **UNVERIFIED** |
| https://www.mca.gov.in/content/mca/global/en/contact-us/roc-contacts.html | ROC Contacts | Inferred | **UNVERIFIED** |

**Expected Content:**
- Helpdesk phone/email
- ROC office addresses and contacts
- Submit query/complaint form
- Escalation information

---

## 2. SERVICE-SPECIFIC URLs

### 2.1 E-Filing

| URL | Page | Evidence | Status |
|-----|------|----------|--------|
| https://www.mca.gov.in/content/mca/global/en/mca/e-filing.html | E-Filing Landing | Seed URL | **UNVERIFIED** |
| https://www.mca.gov.in/content/mca/global/en/mca/e-filing/company-forms-download.html | Company Forms Download | Seed URL | **UNVERIFIED** |
| https://www.mca.gov.in/content/mca/global/en/mca/e-filing/llp-forms-download.html | LLP Forms Download | Seed URL | **UNVERIFIED** |
| https://www.mca.gov.in/content/mca/global/en/mca/e-filing/din-related-forms.html | DIN Related Forms | Seed URL | **UNVERIFIED** |
| https://www.mca.gov.in/content/mca/global/en/mca/e-filing/dsc-related-services.html | DSC Related Services | Seed URL | **UNVERIFIED** |
| https://www.mca.gov.in/content/mca/global/en/mca/e-filing/fees-payment.html | Fees & Payment | Seed URL | **UNVERIFIED** |
| https://www.mca.gov.in/content/mca/global/en/mca/e-filing/track-transaction-status.html | Track Transaction Status | Seed URL | **UNVERIFIED** |
| https://www.mca.gov.in/content/mca/global/en/mca/e-filing/complaints.html | Complaints | Seed URL | **UNVERIFIED** |

**Note:** These are form/service landing pages. Actual form filing likely happens via authenticated application URLs (not /content/ path).

---

### 2.2 Master Data

| URL | Page | Evidence | Status |
|-----|------|----------|--------|
| https://www.mca.gov.in/content/mca/global/en/mca/master-data/MDS.html | Master Data Services | Seed URL | **UNVERIFIED** |

**Likely Includes:**
- Search Company (by CIN/Name)
- Search LLP (by LLPIN/Name)
- Search Director (by DIN)
- Charges Register
- View Master Data

**Actual Search/Transaction URLs:** Unknown (likely dynamic, not static /content/ pages)

---

### 2.3 Investor Services

| URL | Page | Evidence | Status |
|-----|------|----------|--------|
| https://www.mca.gov.in/content/mca/global/en/mca/investor-services.html | Investor Services Landing | Seed URL | **UNVERIFIED** |

**Expected Sub-Services:**
- IEPF Services
- Unclaimed Amounts Search
- Investor Complaints

**URLs:** Unknown

---

## 3. LEGACY / HISTORICAL URLs (V2)

**Note:** These URLs appear in older MCA documentation and third-party references. Their current status is unknown. V2 system may be deprecated.

| URL | Page | Evidence | Status |
|-----|------|----------|--------|
| http://www.mca.gov.in/MinistryV2/ | V2 Portal Entry | Historical reference | **LEGACY - Status Unknown** |
| http://www.mca.gov.in/MinistryV2/login.html | V2 Login | Historical reference | **LEGACY** |
| http://www.mca.gov.in/mcafoportal/ | V2 FO Portal | Historical reference | **LEGACY** |
| http://www.mca.gov.in/MCA21/ | V2 Application | Historical reference | **LEGACY** |
| http://www.mca.gov.in/MCA21/Download_eForm_choose.html | V2 Forms Download | Historical reference | **LEGACY** |

**Validation Required:** Confirm V2 URLs are deprecated, identify any V2-to-V3 redirects

---

## 4. AUTHENTICATION / USER MANAGEMENT URLs

| URL | Page | Evidence | Status |
|-----|------|----------|--------|
| Unknown | User Registration | Logical necessity | **UNKNOWN** |
| Unknown | Login | Logical necessity | **UNKNOWN** |
| Unknown | Forgot Password | Logical necessity | **UNKNOWN** |
| Unknown | Password Reset | Logical necessity | **UNKNOWN** |
| Unknown | Logout | Logical necessity | **UNKNOWN** |

**Note:** Authentication URLs often follow different patterns (may not be under /content/ path). Likely under /auth/ or /login/ or similar.

**Validation Required:** Authentication flow URLs

---

## 5. TRANSACTIONAL / APPLICATION URLs

**Note:** Actual form filing and transactions likely happen on application server URLs, not static content pages.

**Expected URL Patterns (INFERRED):**
- Form filling: `/app/forms/{formType}` or `/filing/{formType}`
- Draft management: `/app/drafts/` or `/workspace/drafts/`
- Payment: `/payment/` or `/gateway/`
- Status: `/app/status/{SRN}` or `/track/{SRN}`

**All UNKNOWN - require discovery via portal navigation**

---

## 6. SPECIALIZED SERVICE URLs

### 6.1 e-Adjudication

| URL | Page | Evidence | Status |
|-----|------|----------|--------|
| Unknown | e-Adjudication Portal | Verified module exists | **UNKNOWN** |

**Notes:**
- May be separate portal or integrated
- Officer-facing and public/entity-facing interfaces
- URL structure unknown

---

### 6.2 e-Consultation

| URL | Page | Evidence | Status |
|-----|------|----------|--------|
| Unknown | e-Consultation Portal | Verified module exists | **UNKNOWN** |

**Expected Features:**
- View consultations
- Submit comments
- Track consultation status

---

### 6.3 e-Books

| URL | Page | Evidence | Status |
|-----|------|----------|--------|
| Unknown | e-Books Portal | Verified module exists | **UNKNOWN** |

**Expected Content:**
- Acts, rules in e-book format
- Guides and manuals
- Download/online reading

---

### 6.4 Learning Management System (LMS)

| URL | Page | Evidence | Status |
|-----|------|----------|--------|
| Unknown | LMS Portal | Verified module exists | **UNKNOWN** |

**Expected Features:**
- Course catalog
- Video lessons
- Assessments
- Certificates (if applicable)

---

## 7. API ENDPOINTS (If Publicly Accessible)

| Endpoint | Purpose | Evidence | Status |
|----------|---------|----------|--------|
| Unknown | Public Master Data API | Mentioned in V3 documentation | **UNKNOWN** |
| Unknown | Filing Status API | Possible | **UNKNOWN** |
| Unknown | Fee Calculation API | Possible | **UNKNOWN** |

**Note:** API endpoints may require authentication, may not be publicly documented.

**Validation Required:** API catalog, documentation, authentication

---

## 8. URL PATTERNS AND CONVENTIONS

### Observed Patterns (from seed URLs)

**Content Pages:**
```
https://www.mca.gov.in/content/mca/global/en/{section}/{page}.html
```

**Language Support (Possible):**
```
/content/mca/global/en/  → English
/content/mca/global/hi/  → Hindi (if supported)
```

**Examples:**
- `/content/mca/global/en/home.html`
- `/content/mca/global/en/mca-services.html`
- `/content/mca/global/en/mca/e-filing/company-forms-download.html`

**Pattern Observations:**
- Domain: `www.mca.gov.in`
- Path structure: `/content/mca/global/en/`
- Hierarchical navigation via path
- `.html` extensions for content pages

**Unknown Patterns:**
- Application/transaction URLs (likely different from content URLs)
- Search results pages
- Dynamic pages
- API endpoints
- Authenticated areas

---

## 9. MOBILE APP URLs (If Applicable)

| Platform | URL/Store Link | Evidence | Status |
|----------|----------------|----------|--------|
| Android | Unknown | Mobile app mentioned in govt docs | **UNKNOWN** |
| iOS | Unknown | Mobile app mentioned in govt docs | **UNKNOWN** |

**Validation Required:** Mobile app availability, download links, feature parity

---

## 10. SUBDOMAIN ANALYSIS

**Primary Domain:** `www.mca.gov.in`

**Possible Subdomains (INFERRED):**
- `portal.mca.gov.in` → Application portal (possible)
- `app.mca.gov.in` → Application server (possible)
- `services.mca.gov.in` → Services platform (possible)
- `eadjudication.mca.gov.in` → e-Adjudication (possible)
- `econsultation.mca.gov.in` → e-Consultation (possible)
- `api.mca.gov.in` → API gateway (possible)

**All subdomains UNVERIFIED**

**Validation Required:** DNS lookup, subdomain discovery

---

## 11. REDIRECTS AND ALIASES

**Potential Redirects:**
- `mca.gov.in` → `www.mca.gov.in`
- `www.mca.gov.in/` → `www.mca.gov.in/content/mca/global/en/home.html`
- V2 URLs → V3 equivalents (if configured)

**Validation Required:** Redirect mapping, canonical URLs

---

## 12. ROBOTS.TXT AND SITEMAP

| File | Purpose | Status |
|------|---------|--------|
| https://www.mca.gov.in/robots.txt | Crawling rules | **UNVERIFIED** |
| https://www.mca.gov.in/sitemap.xml | URL sitemap | **UNVERIFIED** |

**Validation Required:** Check robots.txt and sitemap.xml for authoritative URL list

---

## 13. SEARCH FUNCTIONALITY

| URL | Page | Evidence | Status |
|-----|------|----------|--------|
| Unknown | Site Search Results | Logical necessity | **UNKNOWN** |

**Expected Search Types:**
- Global site search
- Company/LLP search
- Director search
- Document search
- Act/Rule/Circular search

**URL Patterns:** Unknown (may be `/search?q={query}` or similar)

---

## 14. ERROR PAGES

| URL | Page | Status |
|-----|------|--------|
| Any invalid URL | 404 Not Found | **UNVERIFIED** |
| Blocked URL | 403 Forbidden | **OBSERVED** (seed URLs) |
| Server Error | 500 Internal Server Error | **UNVERIFIED** |

---

## 15. FOOTER LINKS (Common Additional Pages)

**Expected Footer Links (based on standard govt portal patterns):**
- Privacy Policy
- Terms and Conditions
- Copyright Policy
- Disclaimer
- Accessibility Statement
- Sitemap
- RTI (Right to Information)
- Screen Reader Access
- Social Media Links

**URLs:** Unknown

---

## URL INVENTORY SUMMARY

### By Verification Status

| Status | Count | Percentage |
|--------|-------|------------|
| **BLOCKED** (403 error) | 2 | 100% of attempted |
| **UNVERIFIED** (seed URLs, not tested) | 25+ | Majority |
| **UNKNOWN** (inferred logical necessity) | 30+ | Substantial |
| **LEGACY** (V2 URLs, status unknown) | 5+ | Small subset |

**Total URLs Catalogued:** 60+  
**Verified URLs:** 0  
**Critical Gap:** Cannot verify any current portal URL

---

## CRITICAL VALIDATION REQUIREMENTS

### P0 - Blocking Phase 2

1. **Establish portal access** - Resolve 403 errors
2. **Verify top-level navigation URLs** - All 8 main sections
3. **Discover My Workspace URLs** - Authenticated area structure
4. **Map service-to-URL** - Complete service catalog with entry points
5. **Identify transactional URLs** - Form filing, payment, status URLs

### P1 - Important for IA Design

6. **Complete URL inventory** via crawl or sitemap
7. **URL naming conventions** and patterns
8. **Subdomain structure** and purpose
9. **Redirect mapping** (V2 to V3, aliases)
10. **Mobile app integration** (if applicable)

### P2 - Detailed Documentation

11. **API endpoints** catalog
12. **Search URLs** and query patterns
13. **Footer and utility pages**
14. **Error page handling**
15. **URL localization** (language support)

---

## NEXT STEPS

1. **Resolve 403 errors** - Work with MCA or network team to establish access
2. **Access portal as user** - Navigate and document actual URLs
3. **Export sitemap** - If available, provides authoritative URL list
4. **Crawl portal** - Automated crawl to discover all accessible URLs
5. **Document authenticated URLs** - Login and map My Workspace structure
6. **Map service URLs** - Each service catalog item to actual URL
7. **Create URL-to-service mapping** - Complete cross-reference
8. **Identify deprecated URLs** - V2 vs V3, legacy vs current
9. **Document URL patterns** - For future maintenance and extensions
10. **Validate mobile URLs** - If mobile app or responsive site exists

---

## RISKS AND MITIGATION

**Risk:** URL structure may have changed significantly since 2021 V3 launch  
**Mitigation:** Treat all URLs as provisional, validate against live portal

**Risk:** Transactional URLs may be dynamic, not discoverable via sitemap  
**Mitigation:** User navigation session to map actual transaction flows

**Risk:** Authentication-required areas not discoverable without login  
**Mitigation:** Create test accounts for each user role, map authenticated experiences

**Risk:** Subdomain or separate portals for e-Adjudication, e-Consultation, LMS  
**Mitigation:** DNS discovery, document references, stakeholder inquiry

---

## INFORMATION ARCHITECTURE IMPLICATIONS

**Current IA Pattern (from URLs):**
- **Content-based hierarchy:** `/content/mca/global/en/{section}/{subsection}/`
- **Service-oriented within sections:** E-filing contains multiple service entry points
- **Language support possible:** `/en/` suggests multi-language structure

**Observed Characteristics:**
- Deep hierarchy (up to 6-7 levels in some seed URLs)
- Descriptive path segments (readable URLs)
- Separation of content pages from application pages (assumed)

**Unknown:**
- How transactional flows are URL-structured
- Search and filter URL patterns
- Parameter-based vs. path-based navigation
- Session management in URLs

**Validation Required:** Complete URL structure to inform future IA redesign

---

**Document Status:** INCOMPLETE - PORTAL ACCESS REQUIRED  
**Evidence Base:** Seed URLs + 2021 documentation + logical inference  
**Confidence:** LOW - 0 URLs verified against live portal  
**Recommendation:** Prioritize portal access resolution before Phase 2  
**Alternative:** If access cannot be established, work with MCA to obtain official URL catalog/sitemap export
