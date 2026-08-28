# FUTURE INFORMATION ARCHITECTURE

**MCA Digital Platform Transformation**  
**Phase 3 Product Definition — Part 5**  
**Date:** 28 August 2026  
**Status:** DRAFT — Information architecture and navigation model

---

## Executive Summary

This document defines HOW INFORMATION AND CAPABILITIES ARE ORGANIZED on the future MCA platform.

**Critical Principle (Phase 2 ADR-018):**
> **Future architecture independent of legacy** — Do NOT copy current MCA portal navigation

**Design Challenge:**
- Current MCA portal organized by: Home → About → MCA Services → Acts & Rules → Data & Reports
- Current structure is **institution-centric** (MCA's org chart), not **user-centric** (what users need to do)
- Future IA must be derived from: user intents, service taxonomy, entity context, persona needs

**Proposed Approach:**
- **Intent-driven** top-level navigation (what users want to do)
- **Entity-centric** authenticated workspace (what's relevant to my entity)
- **Contextual** navigation (changes based on persona, entity, state)
- **Search-first** for power users (universal search)

**IA Validation Criteria:**
1. Can first-time founder find "Start a company" in < 10 seconds?
2. Can director find "What's due for my company" in < 5 seconds?
3. Can professional see obligations across all clients in one view?
4. Can public user search and find entity information in < 3 clicks?
5. Can officer access review queue immediately on login?

---

## 1. Information Architecture Principles

### 1.1 Design Principles

**1. Intent Over Structure**
- Organize by what users want to accomplish, not by MCA departments
- Example: "Start & Create" not "Incorporation Department"

**2. Entity Context Drives Experience**
- Authenticated users experience entity-centric navigation
- Public users experience search-centric navigation
- Different persona = different IA

**3. Progressive Disclosure**
- Don't show everything at once
- Most common needs prominent
- Advanced/rare capabilities accessible but not primary

**4. Search First**
- Universal search box always available
- Search supports intent, form number, entity name, legal provision

**5. Contextual Navigation**
- Navigation adapts to:
  - User persona (public, director, professional, officer)
  - Entity context (company, LLP, no entity)
  - Current state (logged in, entity selected, transaction in progress)

**6. Consistent Patterns**
- Same navigation patterns across authenticated experience
- Predictable locations for common functions

**7. Accessibility**
- Keyboard navigable
- Screen reader compatible
- Clear visual hierarchy
- Skip links

---

## 2. Top-Level Information Architecture

### 2.1 IA Structure Overview

```
PUBLIC SITE (Unauthenticated)
├── HOME
├── DISCOVER
│   ├── Company Services
│   ├── LLP Services
│   ├── Director Services
│   └── Investor Services
├── SEARCH
│   ├── Search Companies
│   ├── Search LLPs
│   ├── Search Directors
│   └── Advanced Search
├── INFORMATION
│   ├── Acts & Rules
│   ├── Guides & FAQs
│   ├── Fees & Timelines
│   └── Statistical Reports
├── GET STARTED
│   ├── Start a Company
│   ├── Start an LLP
│   ├── Obtain DIN
│   └── Learn About Incorporation
└── HELP & SUPPORT
    ├── Contact Us
    ├── File Complaint
    └── FAQs

AUTHENTICATED WORKSPACE (Logged In)
├── WORKSPACE [Default Landing]
│   ├── Entity Dashboard (if entity selected)
│   ├── Multi-Entity Dashboard (if professional)
│   ├── What's Due (Obligations)
│   ├── Quick Actions
│   ├── Recent Activity
│   └── All Services
├── MY ENTITIES
│   ├── View All Entities
│   ├── Entity Details
│   ├── Entity Relationships
│   └── Add/Link Entity
├── TRANSACTIONS
│   ├── Active Transactions
│   ├── Drafts
│   ├── Pending Signatures
│   ├── Pending Payments
│   ├── Under Review
│   └── Completed
├── DOCUMENTS
│   ├── Certificates
│   ├── Filings
│   ├── Notices
│   └── Uploaded Documents
├── CASES & NOTICES
│   ├── Active Cases
│   ├── Notices Received
│   ├── Responses Due
│   └── Closed Cases
├── SEARCH & DISCOVER
│   ├── Service Search
│   ├── Public Entity Search
│   └── Legal Reference Search
└── ACCOUNT
    ├── Profile
    ├── Authorizations & Delegations
    ├── Notifications
    └── Settings

OFFICER WORKBENCH (Internal)
├── REVIEW QUEUE
│   ├── Assigned to Me
│   ├── My ROC/RD
│   └── Priority Queue
├── CASES
│   ├── Scrutiny
│   ├── Adjudication
│   ├── Investigation
│   └── Complaints
├── ENTITY SEARCH
├── REPORTS
└── ADMIN
```

---

## 3. Public Site Information Architecture

### 3.1 Public Homepage

**Purpose:** Entry point for unauthenticated users

**Layout:**
```
┌─────────────────────────────────────────────────────────┐
│ MCA DIGITAL PLATFORM                            [LOGIN] │
├─────────────────────────────────────────────────────────┤
│                                                         │
│         MINISTRY OF CORPORATE AFFAIRS                   │
│         Digital Regulatory Platform                     │
│                                                         │
│  ┌───────────────────────────────────────────────────┐ │
│  │ What would you like to do?               🔍       │ │
│  └───────────────────────────────────────────────────┘ │
│                                                         │
│  QUICK ACCESS                                           │
│  ┌────────────┐ ┌────────────┐ ┌────────────┐        │
│  │ 🏢 START A  │ │ 🔍 SEARCH  │ │ 📄 PUBLIC  │        │
│  │  COMPANY   │ │  ENTITIES  │ │  DOCUMENTS │        │
│  └────────────┘ └────────────┘ └────────────┘        │
│                                                         │
│  FOR BUSINESSES                                         │
│  → Company Services                                     │
│  → LLP Services                                         │
│  → Director Services                                    │
│  → Investor Services                                    │
│                                                         │
│  INFORMATION & GUIDANCE                                 │
│  → Acts & Rules                                         │
│  → Service Guides                                       │
│  → Fees & Timelines                                     │
│  → FAQs                                                 │
│                                                         │
│  ABOUT MCA                                              │
│  → About Ministry                                       │
│  → Contact Us                                           │
│  → Grievance                                            │
│                                                         │
└─────────────────────────────────────────────────────────┘

HEADER NAVIGATION (All Pages):
[Logo] [Discover] [Search] [Information] [Get Started] [Help]  [LOGIN]
```

**Key Features:**
- Prominent search box (intent or entity search)
- Quick access to top tasks (start company, search entities, documents)
- Service discovery by category
- Information access (Acts, guides, fees)
- Clear login button

---

### 3.2 Public Navigation Structure

**Primary Navigation (Header):**

```
┌─────────────────────────────────────────────────────────┐
│ [MCA Logo]  DISCOVER  SEARCH  INFORMATION  GET STARTED  │
│                                         HELP    [LOGIN]  │
└─────────────────────────────────────────────────────────┘
```

**DISCOVER (Dropdown):**
- Company Services
  - Incorporation
  - Annual Compliance
  - Changes & Events
  - Closure
- LLP Services
  - LLP Incorporation
  - LLP Compliance
  - LLP Changes
  - LLP Closure
- Director Services
  - Director Identification (DIN)
  - Director KYC
  - Director Changes
- Investor Services
  - IEPF Claims
  - Investor Complaints
- Professional Services
  - For Chartered Accountants
  - For Company Secretaries
  - For Advocates

**SEARCH (Dropdown):**
- Search Companies
- Search LLPs
- Search Directors
- Advanced Search
- Public Documents

**INFORMATION (Dropdown):**
- Acts & Rules
  - Companies Act 2013
  - LLP Act 2008
  - Rules & Regulations
- Service Guides
  - How to Incorporate
  - How to File Annual Return
  - How to Close Company
- Fees & Timelines
  - Fee Calculator
  - Service Timelines
  - Penalty Structure
- Reports & Data
  - Statistical Reports
  - Open Data
  - Research & Analytics

**GET STARTED (Dropdown):**
- Start a Company
- Start an LLP
- Obtain Director Identification (DIN)
- Obtain Digital Signature (DSC)
- Create Account

**HELP (Dropdown):**
- Contact Us
- FAQs
- File Complaint
- Track Complaint
- Tutorials & Videos

---

## 4. Authenticated Workspace Information Architecture

### 4.1 Authenticated Landing (Workspace)

**Purpose:** Default landing for authenticated users

**Single-Entity Director:**
```
┌─────────────────────────────────────────────────────────┐
│ [MCA Logo] WORKSPACE  TRANSACTIONS  DOCUMENTS  SEARCH   │
│                                                          │
│           👤 Rajesh Sharma  │  ABC Pvt Ltd ▼  │ LOGOUT │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  ┌───────────────────────────────────────────────────┐  │
│  │ What would you like to do?               🔍       │  │
│  └───────────────────────────────────────────────────┘  │
│                                                          │
│  📋 WHAT'S DUE (3)                        [View All]     │
│  ┌─────────────────────────────────────────────────┐   │
│  │ • Annual Return (MGT-7)          [FILE NOW]     │   │
│  │   Due: 30 Sep 2026 (32 days left)               │   │
│  │                                                  │   │
│  │ • Financial Statements (AOC-4)   [FILE NOW]     │   │
│  │   Due: 30 Sep 2026 (32 days left)               │   │
│  │                                                  │   │
│  │ • Director KYC (DIR-3 KYC)       [START]        │   │
│  │   Due: 30 Sep 2026 (32 days left)               │   │
│  └─────────────────────────────────────────────────┘   │
│                                                          │
│  ⚡ QUICK ACTIONS                                        │
│  [Change Director] [Change Office] [Register Charge]    │
│  [View Compliance] [Download Certificate]               │
│                                                          │
│  🕐 RECENT ACTIVITY                       [View All]     │
│  • Director Change (DIR-12) — Completed 15 Aug 2026     │
│  • Office Change — Completed 10 Jul 2026                │
│                                                          │
│  📁 ALL SERVICES                          [Browse →]     │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

**Multi-Entity Professional:**
```
┌─────────────────────────────────────────────────────────┐
│ [MCA Logo] WORKSPACE  CLIENTS  TRANSACTIONS  SEARCH     │
│                                                          │
│      👤 Meera Shah (CA)  │  ALL ENTITIES ▼  │  LOGOUT  │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  ┌───────────────────────────────────────────────────┐  │
│  │ Search clients or services...            🔍       │  │
│  └───────────────────────────────────────────────────┘  │
│                                                          │
│  📋 OBLIGATIONS ACROSS CLIENTS (12)     [Filter ▼]      │
│                                                          │
│  OVERDUE (2) 🔴                           [View All]     │
│  • Client A Ltd — Annual Return (3 days late)           │
│  • Client B Pvt Ltd — DIR-3 KYC (1 day late)            │
│                                                          │
│  DUE THIS WEEK (5) 🟡                     [View All]     │
│  • Client C Ltd — Annual Return (4 days)                │
│  • Client D Pvt Ltd — Financial Statements (5 days)     │
│  ...                                                     │
│                                                          │
│  ✍️ AWAITING MY SIGNATURE (8)             [View All]     │
│  • Client F Ltd — AOC-4 (Auditor signature)             │
│  • Client G Pvt Ltd — Annual Return                     │
│  ...                                                     │
│                                                          │
│  📁 MY CLIENTS (52)                       [View All →]   │
│  [Search clients...]                                     │
│                                                          │
│  ⚡ QUICK START                                          │
│  [File Annual Return] [File AOC-4] [Complete DIR-3 KYC] │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

---

### 4.2 Authenticated Primary Navigation

**Header Navigation (Always Visible):**

**For Single-Entity User:**
```
[MCA Logo]  WORKSPACE  TRANSACTIONS  DOCUMENTS  SEARCH
                                   [Entity: ABC Pvt Ltd ▼]  [Account ▼]  [LOGOUT]
```

**For Multi-Entity Professional:**
```
[MCA Logo]  WORKSPACE  CLIENTS  TRANSACTIONS  DOCUMENTS  SEARCH
                          [View: ALL ENTITIES ▼]  [Account ▼]  [LOGOUT]
```

**Navigation Items:**

**WORKSPACE (Primary Tab)**
- Default landing page
- Entity-centric dashboard
- What's Due (obligations)
- Quick Actions
- Recent Activity
- All Services

**MY ENTITIES / CLIENTS (Dropdown)**
- View All Entities
- [List of entities with quick switch]
- Add/Link Entity
- Entity Details (per entity)

**TRANSACTIONS (Tab)**
- Active Transactions (in progress)
- Drafts (saved, not submitted)
- Pending Signatures (awaiting others)
- Pending Payments (awaiting payment confirmation)
- Under Review (submitted, MCA reviewing)
- Queries/Deficiencies (action required)
- Completed (historical)

**DOCUMENTS (Tab)**
- Certificates
- Filings (submitted documents)
- Notices (from MCA)
- Uploaded Documents
- Generated Documents

**CASES & NOTICES (Tab - if applicable)**
- Active Cases
- Notices Received
- Responses Due
- Closed Cases

**SEARCH (Tab)**
- Service Search (start a service)
- Public Entity Search (search other entities)
- My Transactions Search
- Legal Reference Search

**[Entity Switcher] (Dropdown)**
- Shows active entity name
- Click to show all entities
- Search to filter
- Select to switch

**[Account] (Dropdown)**
- My Profile
- Authorizations & Delegations
- Notification Preferences
- Settings
- Help & Support

---

## 5. Workspace (Default Authenticated Landing)

### 5.1 Workspace Structure

**Purpose:** Personalized, entity-centric command center

**Information Hierarchy:**
```
WORKSPACE
├── Search Box (universal, prominent)
├── What's Due (obligations) [TOP PRIORITY]
│   ├── Overdue
│   ├── Due This Week
│   ├── Due This Month
│   └── Upcoming
├── Action Required [ALERTS]
│   ├── Queries/Deficiencies
│   ├── Pending Signatures (yours)
│   ├── Pending Payments
│   └── Notices
├── Quick Actions [COMMON TASKS]
│   ├── Entity-specific quick actions
│   └── Recently used
├── Recent Activity [CONTEXT]
│   ├── Completed transactions
│   └── Entity changes
├── Entity Overview [CONTEXT]
│   ├── Entity status
│   ├── Compliance score
│   └── Key details
└── All Services [BROWSE]
    └── Full service catalog
```

---

### 5.2 Workspace Variants by Persona

**PERSONA: First-Time Founder (No Entities Yet)**

```
WORKSPACE
│
├── Getting Started Guide
│   ├── Step 1: Obtain DIN [START]
│   ├── Step 2: Obtain DSC [LEARN MORE]
│   ├── Step 3: Start Incorporation [PREVIEW]
│
├── Quick Start
│   ├── Start a Company [PRIMARY]
│   ├── Start an LLP
│   ├── Reserve Name
│
└── Resources
    ├── How to Incorporate (Guide)
    ├── Fee Calculator
    └── FAQs
```

**PERSONA: Existing Director (Single Entity)**

```
WORKSPACE (ABC Pvt Ltd)
│
├── What's Due (3) [PROMINENT]
│   ├── Annual Return — Due 30 Sep
│   ├── Financial Statements — Due 30 Sep
│   └── Director KYC — Due 30 Sep
│
├── Quick Actions
│   ├── Change Director
│   ├── Change Office
│   ├── Register Charge
│   └── View Compliance Status
│
├── Recent Activity
│   └── Director Change — Completed 15 Aug
│
└── Entity Overview
    ├── CIN: U12345MH2020PTC123456
    ├── Status: Active
    └── Compliance: 2 items due
```

**PERSONA: Professional (Multi-Entity)**

```
WORKSPACE (ALL ENTITIES)
│
├── Obligations Summary [DASHBOARD]
│   ├── Overdue (2 clients) 🔴
│   ├── Due This Week (5 clients) 🟡
│   ├── Due This Month (5 clients) 🟢
│
├── Awaiting My Signature (8)
│   ├── Client F — AOC-4 (Auditor)
│   └── Client G — Annual Return
│
├── Client Filter
│   └── [Search 52 clients...]
│
├── Quick Start (with entity selection)
│   ├── File Annual Return
│   ├── File AOC-4
│   └── Complete DIR-3 KYC
│
└── My Clients (52) [VIEW ALL]
```

**PERSONA: MCA Officer (Internal)**

```
OFFICER WORKBENCH
│
├── My Review Queue (15)
│   ├── Priority Queue (3) 🔴
│   ├── Regular Queue (12)
│   └── Filters: [ROC] [Service Type] [Age]
│
├── Recent Decisions
│   └── Last 5 approvals/rejections
│
├── Quick Tools
│   ├── Entity Search
│   ├── Transaction Search
│   └── Case Search
│
└── Cases (if assigned)
    ├── Active Cases (5)
    └── Pending Hearings (2)
```

---

## 6. Contextual Navigation

### 6.1 Context-Driven Navigation Changes

**Context 1: No Entity Selected**
- WORKSPACE shows: "Select an entity to see obligations"
- Services requiring entity context: Disabled until entity selected
- Services NOT requiring entity: Available (DIN, Search, Incorporation)

**Context 2: Entity Selected (Company)**
- WORKSPACE shows: Company-specific obligations and quick actions
- Services filtered: Only company services shown
- LLP services: Hidden

**Context 3: Entity Selected (LLP)**
- WORKSPACE shows: LLP-specific obligations and quick actions
- Services filtered: Only LLP services shown
- Company services: Hidden

**Context 4: Multi-Entity Professional**
- WORKSPACE shows: Cross-entity dashboard
- Entity filter: Required to drill down
- Services: Require entity selection before initiation

**Context 5: Transaction In Progress**
- Persistent transaction bar: Shows active transaction
- Navigation: "You have an active transaction. [RESUME] [SAVE & EXIT]"
- Warning: "Switching entities will save current transaction as draft"

---

## 7. Service Catalog Information Architecture

### 7.1 Service Browsing Structure

**ALL SERVICES (Browseable)**

```
START & CREATE
├── Company Incorporation (SPICe+)
├── LLP Incorporation (FiLLiP)
├── Reserve Company Name
├── Reserve LLP Name
└── Obtain Director Identification (DIN)

MANAGE & CHANGE
├── Directors & Partners
│   ├── Appoint Director
│   ├── Resign Director
│   ├── Change Director Details
│   ├── Add LLP Partner
│   └── Remove LLP Partner
├── Entity Details
│   ├── Change Registered Office
│   ├── Change Company Name
│   ├── Update Authorized Signatories
│   └── Change Entity Classification
├── Capital & Ownership
│   ├── Alter Share Capital
│   ├── Issue Shares
│   ├── Transfer Shares
│   └── File Beneficial Ownership (SBO)
└── Charges & Security
    ├── Register Charge (CHG-1)
    ├── Modify Charge
    └── Satisfy Charge

COMPLY & FILE
├── Annual Compliance
│   ├── File Annual Return (MGT-7)
│   ├── File Financial Statements (AOC-4)
│   ├── File LLP Annual Return (Form 11)
│   └── File LLP Financial Disclosure (Form 8)
├── Director Compliance
│   ├── Director KYC (DIR-3 KYC)
│   └── File Director Details
├── Auditor Compliance
│   ├── Appoint Auditor
│   ├── File Auditor Details
│   └── Change Auditor
└── Other Compliance
    ├── File Board Resolutions
    ├── File Secretarial Audit
    └── File Beneficial Ownership

CLOSE & TERMINATE
├── Strike Off Company (STK-2)
├── Close LLP
├── Voluntary Liquidation
└── Fast Track Exit

SEARCH & ACCESS
├── Search Companies
├── Search LLPs
├── Search Directors
├── View Entity Profile
├── Access Public Documents
└── Download Certificates

RESPOND & RESOLVE
├── Respond to Query/Deficiency
├── Respond to Notice
├── File Complaint
├── Track Complaint
└── Request Clarification

CLAIM & RECOVER
├── Claim IEPF Amount (IEPF-5)
├── Claim IEPF Securities
└── Track IEPF Claim
```

---

## 8. Breadcrumb and Wayfinding

### 8.1 Breadcrumb Patterns

**Pattern 1: Service from Workspace**
```
Workspace > ABC Pvt Ltd > Annual Return (MGT-7) > Step 2: Company Details
```

**Pattern 2: Service from Browse**
```
All Services > Comply & File > Annual Compliance > Annual Return (MGT-7) > Step 1: Requirements
```

**Pattern 3: Service from Obligation**
```
Workspace > What's Due > Annual Return (MGT-7) > Step 3: Upload Documents
```

**Pattern 4: Public Search**
```
Home > Search Companies > Search Results > ABC Pvt Ltd > Entity Profile
```

**Pattern 5: Transaction Tracking**
```
Workspace > Transactions > Under Review > Annual Return (SRN-123456) > Transaction Details
```

---

### 8.2 Wayfinding Aids

**Persistent Elements:**
- Universal search box (always visible in header)
- Active entity indicator (always visible)
- Account menu (always accessible)
- Help link (always accessible)

**Contextual Indicators:**
- "You are here" in navigation
- Step indicators in multi-step services
- Progress bars for complex workflows
- Clear back/cancel options

**Exit Points:**
- Save draft and return to workspace
- Cancel (with confirmation)
- Help (contextual)

---

## 9. Mobile Information Architecture

### 9.1 Mobile Adaptations

**Mobile-First Simplifications:**
- Hamburger menu for secondary navigation
- Bottom navigation for primary tabs (Workspace, Transactions, Documents, Search, Account)
- Entity switcher: Full-screen overlay
- Search: Dedicated page (not just box)
- Forms: Single-column, progressive disclosure

**Mobile Navigation (Bottom Bar):**
```
[🏠 Workspace] [📋 Transactions] [📄 Documents] [🔍 Search] [👤 Account]
```

**Mobile Workspace:**
- Cards stack vertically
- Swipe for actions
- Pull to refresh
- Obligations: Accordion (collapsed by default except overdue)

---

## 10. Information Architecture Validation

### 10.1 Validation Tests

**Test 1: First-Time Founder**
- Task: Find "Start a company"
- Target: < 10 seconds, < 3 clicks
- Path: Homepage > "Start a Company" button OR Search "start company"
- ✅ PASS if found

**Test 2: Existing Director**
- Task: Find "What's due for my company"
- Target: < 5 seconds, 1 click (login → workspace)
- Path: Login → Workspace (shows obligations immediately)
- ✅ PASS if obligations visible on landing

**Test 3: Professional (Multi-Entity)**
- Task: See all client obligations
- Target: < 5 seconds, 1 click (login → workspace)
- Path: Login → Workspace (shows cross-client dashboard)
- ✅ PASS if cross-client view is default

**Test 4: Expert User (Form Number)**
- Task: Find MGT-7 form
- Target: < 10 seconds, 1 search
- Path: Search "MGT-7" → Annual Return service
- ✅ PASS if service found and described

**Test 5: Public User (Entity Search)**
- Task: Find company details
- Target: < 15 seconds, < 3 clicks
- Path: Homepage > Search Companies > Search "ABC Pvt Ltd" > Entity Profile
- ✅ PASS if entity profile accessible

---

## 11. Comparison: Current vs Future IA

### 11.1 Current MCA Portal IA (Inferred)

```
Home
├── About MCA
│   ├── Organization
│   ├── Contact
│   └── Tenders
├── MCA Services
│   ├── eForm Catalog (alphabetical/numerical list)
│   └── Service List
├── Acts & Rules
│   ├── Acts
│   ├── Rules
│   └── Circulars
├── Data & Reports
│   └── Statistical Data
└── Help
    └── FAQs
```

**Problems:**
- ❌ Institution-centric (MCA org chart), not user-centric
- ❌ No intent-based entry ("I want to start a company" not prominent)
- ❌ Form-number-first (user must know "SPICe+" or "MGT-7")
- ❌ No entity-centric workspace
- ❌ No proactive obligation tracking
- ❌ No multi-entity support for professionals

---

### 11.2 Future MCA Platform IA

```
PUBLIC:
├── Discover (by intent)
├── Search (entities)
├── Information (Acts, guides, fees)
├── Get Started (prominent calls-to-action)
└── Help

AUTHENTICATED:
├── Workspace (entity-centric, obligation-driven)
├── My Entities/Clients (multi-entity support)
├── Transactions (status tracking)
├── Documents (all entity documents)
├── Cases & Notices (case management)
└── Search (intent + entity + form)
```

**Improvements:**
- ✅ User-centric (intents, not departments)
- ✅ Intent-first discovery ("Start a company" prominent)
- ✅ Form-number search supported (but not primary)
- ✅ Entity-centric authenticated workspace
- ✅ Proactive obligation tracking
- ✅ Multi-entity dashboard for professionals
- ✅ Contextual navigation (adapts to persona)

---

## 12. IA Status & Next Steps

**Information Architecture:** ✅ **COMPLETE (DRAFT)**

**Key Decisions Made:**
1. ✅ DO NOT copy current MCA portal navigation
2. ✅ Intent-driven public site (Discover, Search, Information, Get Started)
3. ✅ Entity-centric authenticated workspace (Workspace as default landing)
4. ✅ Multi-entity dashboard for professionals (cross-client view)
5. ✅ Obligation-first workspace (What's Due prominent)
6. ✅ Contextual navigation (adapts to persona, entity type, state)
7. ✅ Universal search box (always available)
8. ✅ Service catalog organized by intent (not alphabetical)

**Validation Required:**
- User testing: Can personas find primary intents in target time?
- Tree testing: Are services discoverable in proposed IA?
- Card sorting: Do service categories match user mental models?

**Next Steps:**
1. Design Entity-Centric Experience Model (how entity context works in detail)
2. Design Workspace Model (detailed workspace components)
3. Design User Journeys (end-to-end flows through IA)
4. Design Service Blueprints (how services work within IA)

**What Changed from Phase 2:**
- ❌ **NO architectural changes**
- ✓ IA designed from user intents (not MCA org chart)
- ✓ Public vs authenticated IA defined
- ✓ Contextual navigation model designed
- ✓ Multi-entity support designed

---

**END OF FUTURE INFORMATION ARCHITECTURE**

**Status:** READY FOR ENTITY-CENTRIC EXPERIENCE AND WORKSPACE DESIGN

