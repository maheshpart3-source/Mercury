# MCA Phase 1 - Information Architecture Map

**Document Purpose:** Document the current information architecture and navigation structure of the MCA portal.

**Last Updated:** 27 August 2026

---

## EVIDENCE AND LIMITATIONS

**Evidence Base:**
- 2021 V3 launch documentation (navigation structure per FAQ)
- Seed URLs from Phase 1 brief
- Service and form catalogues
- User flow analysis

**Critical Limitation:** Portal access blocked (403 errors). This IA map is **reconstructed from documentation**, not observed from live portal.

**Status:** ALL STRUCTURAL DETAILS REQUIRE VALIDATION

---

## 1. TOP-LEVEL INFORMATION ARCHITECTURE

### Current Navigation Structure (per 2021 V3 Documentation)

```
MCA PORTAL
│
├── HOME
├── ABOUT MCA
├── ACTS & RULES
├── MY WORKSPACE (Authenticated)
├── MCA SERVICES
├── DATA & REPORTS
├── HELP & FAQs
└── CONTACT US
```

**Evidence:** VERIFIED from 2021 official MCA FAQ on new website  
**Validation Required:** Confirm structure unchanged since 2021

---

## 2. HOMEPAGE ORGANIZATION

### Homepage Components (per 2021 Documentation)

**2.1 Primary Service Cards (6 cards)**
1. Register Company
2. Company Forms Downloads
3. Close Company
4. Register LLP
5. LLP Forms Downloads
6. Close LLP

**2.2 Frequently Used Services Cards (10+ cards)**
1. E-Books
2. Name Reservation for Company
3. Name Reservation for LLP
4. DIR-3 KYC
5. Track Transaction Status
6. View Public Documents
7. View Company/LLP Master Data
8. Associate/Update DSC
9. Enquire Fee
10. Independent Director Databank Registration
11. E-Auction

**2.3 Additional Homepage Elements (INFERRED)**
- Banner / Hero section
- Important Messages / Announcements
- Notifications & Updates
- Information Corner
- Search functionality
- Login/Registration links

**Evidence:** Primary and frequently-used cards VERIFIED from 2021 FAQ  
**Validation Required:** Current homepage layout, card organization, additional elements

---

## 3. ABOUT MCA SECTION

### Expected Structure

```
ABOUT MCA
│
├── About Ministry
├── Organisation Structure
├── Key Officials
├── MCA Offices
│   ├── Headquarters
│   ├── ROC Offices (by region)
│   └── Regional Director Offices
├── Related Links
└── Contact Information
```

**Content Type:** Informational, public access  
**Evidence:** INFERRED from standard ministry portal patterns  
**Validation Required:** Actual sub-sections and content

---

## 4. ACTS & RULES SECTION

### Expected Structure

```
ACTS & RULES
│
├── Acts
│   ├── Companies Act 2013
│   ├── LLP Act 2008
│   ├── Companies Act 1956 (Historical)
│   └── Other Related Acts
│
├── Rules
│   ├── Companies (Incorporation) Rules 2014
│   ├── Companies (Registration Offices and Fees) Rules 2014
│   ├── LLP Rules 2009
│   └── Other Rules (by category)
│
├── Notifications
│   ├── Recent Notifications
│   ├── Search Notifications
│   └── Archive
│
├── Circulars
│   ├── General Circulars
│   ├── Office Memoranda
│   └── Archive
│
├── Amendments
└── Search/Download
```

**Content Type:** Legal documents, public access  
**Primary Users:** Professionals, researchers, company representatives  
**Evidence:** INFERRED from audit document and statutory requirements  
**Validation Required:** Document organization, search capability, download formats

---

## 5. MY WORKSPACE SECTION (Authenticated)

### Expected Structure

```
MY WORKSPACE
│
├── Dashboard
│   ├── Pending Actions
│   ├── Recent Activity
│   └── Upcoming Compliance Deadlines
│
├── Drafts
│   ├── Company Forms
│   ├── LLP Forms
│   └── DIN Forms
│
├── My Filings / Transaction History
│   ├── All Filings
│   ├── Pending Filings
│   ├── Approved Filings
│   ├── Rejected Filings
│   └── Search/Filter
│
├── My Payments
│   ├── Payment History
│   ├── Pending Payments
│   └── Receipts
│
├── My Entities
│   ├── Companies (linked)
│   ├── LLPs (linked)
│   └── Manage Associations
│
├── My Notifications
│   ├── Unread
│   ├── All Notifications
│   └── Preferences
│
├── My Profile
│   ├── Personal Details
│   ├── DIN (if applicable)
│   ├── DSC Management
│   ├── Change Password
│   └── Account Settings
│
└── Help / Support
```

**Content Type:** Personalized, transactional  
**Access:** Business users (authenticated)  
**Evidence:** INFERRED from standard transactional portal patterns + 2021 FAQ mention  
**Validation Required:** Actual My Workspace structure, section names, features

---

## 6. MCA SERVICES SECTION

### Service Organization (per 2021 Training + Service Catalogue)

```
MCA SERVICES
│
├── Company Services
│   ├── Register Company (SPICe+)
│   ├── Company Name Services
│   ├── Company Changes & Updates
│   ├── Director Services (company-level)
│   ├── Share Capital & Securities
│   ├── Charge Registration
│   ├── Annual Compliance
│   ├── Company Closure
│   └── Other Company Services
│
├── LLP Services
│   ├── Register LLP (FiLLiP)
│   ├── LLP Name Services
│   ├── Partner Management
│   ├── LLP Annual Compliance
│   ├── LLP Closure
│   └── Other LLP Services
│
├── E-Filing
│   ├── File Company Forms
│   ├── File LLP Forms
│   ├── Download Forms
│   ├── Resubmission
│   └── Filing Instructions
│
├── DIN / Director Services
│   ├── Apply for DIN (DIR-3)
│   ├── DIR-3 KYC
│   ├── Update Director Details (DIR-6)
│   └── Director Search
│
├── DSC Services
│   ├── Associate DSC
│   ├── Update DSC
│   └── DSC Information
│
├── Master Data Services
│   ├── View Company Master Data
│   ├── View LLP Master Data
│   ├── View Director Master Data
│   ├── Charges Register
│   └── Advanced Search
│
├── Document-Related Services
│   ├── View Public Documents
│   ├── Request Certified Copies
│   ├── Download Certificates
│   └── Document Search
│
├── Fee & Payment Services
│   ├── Fee Enquiry
│   ├── Pay Fees
│   ├── Track Payment Status
│   └── Download Receipts
│
├── Complaints & Grievances
│   ├── File Service Complaint
│   ├── File Investor Complaint
│   ├── Track Complaint Status
│   └── Feedback
│
├── Investor Services
│   ├── IEPF Services
│   ├── Search Unclaimed Amounts
│   ├── File IEPF-5 Claim
│   └── Investor Helpdesk
│
├── Track Transaction Status
│   ├── Track by SRN
│   ├── Track by Entity
│   └── Filing History
│
└── Specialized Services
    ├── Independent Director Databank
    ├── E-Auction
    ├── e-Adjudication (Public View)
    ├── e-Consultation
    ├── e-Books
    └── Learning Management System (LMS)
```

**Evidence:** Service families VERIFIED from 2021 training, individual services INFERRED from service catalogue  
**Validation Required:** Actual service organization, menu structure, service names

---

## 7. DATA & REPORTS SECTION

### Expected Structure

```
DATA & REPORTS
│
├── Library
│   ├── Corporate Reports
│   ├── Research Papers
│   ├── Annual Reports
│   ├── Press Releases
│   └── Publications
│
├── Reports & Statistics
│   ├── Filing Statistics
│   ├── Incorporation Trends
│   ├── Compliance Reports
│   ├── Industry Analysis
│   └── Custom Reports
│
├── ROC / RD Information
│   ├── ROC Office Details
│   ├── Jurisdiction Information
│   ├── Contact Information
│   └── Performance Reports
│
├── Corporate Information
│   ├── Newly Registered Companies/LLPs
│   ├── Companies Under Prosecution
│   ├── Struck Off Companies
│   └── Compliance Defaulters
│
└── Search & Download
```

**Content Type:** Informational, data products, public access  
**Primary Users:** Researchers, media, analysts, professionals  
**Evidence:** INFERRED from 2021 navigation + audit document mentions  
**Validation Required:** Available reports, update frequency, download formats

---

## 8. HELP & FAQs SECTION

### Expected Structure

```
HELP & FAQs
│
├── FAQs
│   ├── General FAQs
│   ├── Company FAQs
│   ├── LLP FAQs
│   ├── DIN FAQs
│   ├── Filing FAQs
│   ├── Payment FAQs
│   └── Search FAQs
│
├── User Manuals
│   ├── Getting Started
│   ├── Registration Guide
│   ├── Filing Guides (by form)
│   ├── DSC Guide
│   └── Payment Guide
│
├── Video Tutorials
│   ├── How to Register Company
│   ├── How to File Annual Return
│   ├── How to Use Master Data
│   └── Tutorial Library
│
├── Step-by-Step Guides
│   ├── Service-specific guides
│   └── Form-specific guides
│
├── Webinars & Training
│   ├── Upcoming Webinars
│   ├── Recorded Webinars
│   └── Training Materials
│
└── Troubleshooting
    ├── Common Errors
    ├── Technical Issues
    └── Recovery Steps
```

**Content Type:** Help and support, public access  
**Primary Users:** All users, especially new users  
**Evidence:** INFERRED from helpdesk data (316K+ tickets) and standard support patterns  
**Validation Required:** Help organization, content types, search capability

---

## 9. CONTACT US SECTION

### Expected Structure

```
CONTACT US
│
├── Helpdesk
│   ├── Technical Support
│   ├── Filing Assistance
│   ├── General Queries
│   ├── Phone Numbers
│   ├── Email IDs
│   └── Submit Query Form
│
├── ROC Offices
│   ├── Find ROC by Location
│   ├── ROC Contact Details
│   ├── Office Hours
│   └── Visit Appointment
│
├── Regional Director Offices
│   ├── RD Contact Details
│   └── Jurisdiction Information
│
├── Grievance Redressal
│   ├── File Grievance
│   ├── Escalation Matrix
│   └── Track Grievance
│
└── Social Media
    ├── Twitter
    ├── Facebook
    └── LinkedIn
```

**Content Type:** Contact information, support channels  
**Evidence:** INFERRED from standard government portal patterns  
**Validation Required:** Contact channels, helpdesk access, grievance process

---

## 10. NAVIGATION PATTERNS

### 10.1 Public vs Authenticated Navigation

**Public Navigation (Non-logged-in users):**
- All top-level sections visible
- Services visible but filing restricted
- Master data and documents accessible (with payment for documents)
- Help and contact information fully accessible

**Authenticated Navigation (Logged-in users):**
- All public navigation available
- Plus: My Workspace section
- Transactional services enabled (based on role and entity association)
- Personalized dashboard
- Draft and filing history access

**Validation Required:** Actual navigation differences by authentication state

---

### 10.2 Role-Based Navigation (INFERRED)

**Registered User:**
- Limited service access
- Master data view
- Document view (with payment)
- Submit queries/complaints
- Apply for DIN
- File DIR-3 KYC (own DIN)

**Business User - Director:**
- Company-specific filing
- My entities: Companies where director
- File forms for associated companies
- DSC management

**Business User - Professional:**
- Multi-client view
- File for multiple companies/LLPs
- Professional certification forms
- Manage professional staff

**Business User - Company/LLP User:**
- Entity-specific access
- Authorized services only
- Limited compared to director/professional

**Validation Required:** Actual role-based menu differences, permission-based service visibility

---

### 10.3 Breadcrumb Navigation

**Expected Pattern:**
```
Home > MCA Services > Company Services > Annual Compliance > AOC-4 Form
```

**Validation Required:** Breadcrumb implementation, "Back" functionality

---

### 10.4 Search Navigation

**Expected Search Types:**
1. **Global Site Search** - All content
2. **Company/LLP Search** - By CIN/LLPIN/Name
3. **Director Search** - By DIN/Name
4. **Form Search** - By form number/name
5. **Act/Rule/Circular Search** - By keyword/date
6. **Help/FAQ Search** - By query

**Validation Required:** Search types available, search result presentation, filters

---

## 11. INFORMATION TAXONOMY

### 11.1 Content Types

| Content Type | Examples | Access |
|--------------|----------|--------|
| **Informational** | About MCA, Acts & Rules, Help | Public |
| **Data Products** | Master Data, Reports, Statistics | Public (some paid) |
| **Transactional** | Forms, Filing, Payment | Authenticated |
| **Personal** | My Workspace, Drafts, History | Authenticated, personalized |
| **Support** | FAQs, Manuals, Helpdesk | Public |

### 11.2 Entity Types

Portal content organized around:
- **Company** (most content)
- **LLP** (parallel structure to company)
- **Director/DIN** (cross-entity)
- **Person** (individual users)
- **Public** (open access content)

### 11.3 Service Taxonomies

**By Function:**
- Registration/Incorporation
- Changes/Updates
- Compliance/Filings
- Closure
- Search/Information
- Support

**By Entity:**
- Company Services
- LLP Services
- Director Services
- Cross-entity Services

**By User:**
- Promoter/Founder
- Director
- Professional (CS/CA/CMA)
- Investor
- Public/Researcher

---

## 12. NAVIGATION MECHANISMS

### 12.1 Primary Navigation
- **Top Menu Bar:** Home, About MCA, Acts & Rules, My Workspace, MCA Services, Data & Reports, Help, Contact
- **Always Visible:** Fixed or sticky header
- **Responsive:** Mobile-friendly (assumed)

### 12.2 Secondary Navigation
- **Service Cards on Homepage:** Quick access to top services
- **Sub-menus:** Dropdown or fly-out for service families
- **Breadcrumbs:** Hierarchical path display
- **Sidebar Navigation:** Within sections (possible)

### 12.3 Tertiary Navigation
- **In-page Navigation:** Anchors, tabs, accordions (form pages)
- **Related Links:** Cross-links to related services
- **Contextual Help:** Links to relevant FAQs/guides

### 12.4 Utility Navigation
- **Login/Register:** Top-right corner (typical)
- **Language Selector:** If multi-language supported
- **Accessibility:** Screen reader, font size controls
- **Search:** Global search box

**Validation Required:** All navigation mechanisms and their implementation

---

## 13. USER FLOW THROUGH IA

### Example: New Company Incorporation User Flow

```
Entry: Homepage (Google search or direct)
  ↓
Homepage: Click "Register Company" card
  ↓
Service Landing: Company Incorporation overview
  ↓
Prerequisites Check: Name, DIN, DSC info
  ↓
Login/Register: Create account or login
  ↓
My Workspace: Dashboard
  ↓
Start SPICe+ Form: Navigate to form or click from dashboard
  ↓
Form Pages: Multi-step form with sections
  ↓
Review & Submit: Summary page
  ↓
Payment: Payment gateway
  ↓
Confirmation: SRN displayed
  ↓
My Workspace: Track status
  ↓
Certificate Download: Post-approval
```

**Navigation Touchpoints:** 10+ pages/interactions  
**Critical IA Elements:** Clear service discovery, seamless authentication, intuitive form flow, status visibility  

**Validation Required:** Actual user flow, drop-off points, navigation friction

---

## 14. MOBILE INFORMATION ARCHITECTURE

**Assumption:** Mobile-responsive site or native app

**Expected Mobile IA:**
- **Hamburger Menu:** Collapsed primary navigation
- **Service Cards:** Swipeable carousel
- **Simplified Forms:** Mobile-optimized input
- **Bottom Navigation:** Quick access to key functions (possible)
- **Reduced Hierarchy:** Flatter structure for mobile

**Validation Required:** Mobile site/app existence, mobile-specific IA, feature parity

---

## 15. SEARCH ARCHITECTURE

**Expected Search Functionality:**

### Global Site Search
- Search box in header
- Results across all content types (pages, documents, services, FAQs)
- Filters by content type, date, relevance

### Entity-Specific Search
- Company/LLP: CIN/LLPIN/Name search
- Director: DIN/Name search
- Results: Master data + documents + filings

### Document Search
- Acts, rules, circulars, notifications
- Filters by type, date, keyword
- Download options

### Help Search
- FAQs, manuals, tutorials
- Contextual (based on current page)

**Validation Required:** Search implementation, result quality, filter options

---

## 16. IA STRENGTHS (Based on Current Design)

1. **Clear Top-Level Structure:** 8 main sections cover all major functions
2. **Service-Oriented Organization:** MCA Services section groups by entity and function
3. **Homepage Service Cards:** Quick access to top tasks
4. **Separation of Concerns:** Informational (About/Acts), Transactional (Services), Data (Reports), Support (Help)
5. **Authenticated Area:** My Workspace as central hub for users
6. **Public Access:** Master data and documents available to all (foundational transparency)

---

## 17. IA GAPS AND ISSUES (INFERRED, require validation)

1. **Deep Hierarchy:** Some services 5-6 levels deep (hard to discover)
2. **Duplicate Entry Points:** Same service accessible from multiple paths (confusing)
3. **Terminology:** Government/legal language may not match user mental models
4. **Service Discovery:** 100+ services hard to browse, depends on search or prior knowledge
5. **Form-Centric vs Task-Centric:** May be organized around forms rather than user goals
6. **Professional vs Layperson:** IA may assume statutory knowledge
7. **Cross-Entity Journeys:** Director involved with multiple companies (how handled in IA?)

**Validation Required:** User research to confirm actual IA pain points

---

## 18. CONTENT INVENTORY (Estimated)

| Content Type | Estimated Volume |
|--------------|------------------|
| Informational Pages | 100-200 |
| Service Landing Pages | 100+ |
| Form Pages | 70+ (webforms) |
| Acts/Rules/Circulars | 1000+ documents |
| FAQs | 500+ |
| Manuals/Guides | 50+ |
| Reports | 100+ |
| Master Data Records | 20+ lakh companies, 4+ lakh LLPs |
| Filed Documents | Crores of filings |

**Validation Required:** Actual content inventory via crawl or CMS export

---

## 19. IA MAINTENANCE AND GOVERNANCE

**Assumptions about Current State:**

**Content Updates:**
- Acts/Rules: As notified by government
- Services: As new forms/services added
- FAQs: As common queries identified
- Reports: Periodic (monthly/quarterly/annual)

**IA Changes:**
- New services added to relevant section
- Forms added to downloads
- Help content expanded as needed

**Governance (UNKNOWN):**
- Who owns IA decisions?
- How are changes approved?
- How is consistency maintained?

**Validation Required:** Content governance model, update process

---

## 20. IA COMPARISON: V2 vs V3

**V2 (Historical, from references):**
- Form-download centric
- Separate portals for different functions
- Less integrated

**V3 (Current, from 2021 documentation):**
- Web-based forms (not download-upload)
- Integrated service view
- Service cards for discovery
- My Workspace for user context
- More user-centric language (claimed)

**Validation Required:** Actual V3 improvements observed by users

---

## CRITICAL VALIDATION REQUIREMENTS

### P0 - Essential for Phase 2

1. **Verify top-level navigation** structure (8 sections current?)
2. **Map complete MCA Services** hierarchy
3. **Document My Workspace** structure
4. **Service-to-URL mapping** for all 100+ services
5. **Understand authenticated vs public** navigation differences

### P1 - Important for Redesign

6. **User mental models** vs. current IA (user research)
7. **Service discovery patterns** (analytics on how users find services)
8. **Search usage and effectiveness** (search analytics)
9. **Mobile IA** (if different from desktop)
10. **Cross-entity navigation** (multi-company directors, professionals)

### P2 - Detailed Design

11. **Content inventory** (complete page/document count)
12. **Breadcrumb patterns** throughout site
13. **Related links/cross-references** structure
14. **Help content integration** (contextual help)
15. **Notification/alert architecture**

---

## NEXT STEPS

1. **Establish portal access** to verify IA structure
2. **Navigate portal systematically** documenting all sections
3. **Create as-is sitemap** from actual navigation
4. **Conduct card sorting** with users (validate mental models)
5. **Analyze search logs** (top queries, zero-result queries)
6. **Interview stakeholders** (service owners, helpdesk, users)
7. **Map user journeys** to IA (identify friction points)
8. **Compare IA to task analysis** (are common tasks easy to find?)
9. **Benchmark against best practices** (government portals, transactional sites)
10. **Document IA evolution** (V2 → V3 → Future)

---

**Document Status:** RECONSTRUCTED IA - REQUIRES VALIDATION  
**Evidence Base:** 2021 V3 documentation + service catalogue + logical inference  
**Confidence:** MEDIUM on top-level structure, LOW on detailed hierarchy  
**Risk:** Actual IA may have evolved since 2021; details are inferred  
**Recommendation:** Prioritize portal navigation session to validate IA before Phase 2 design
