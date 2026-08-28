# INTENT MODEL AND SERVICE DISCOVERY

**MCA Digital Platform Transformation**  
**Phase 3 Product Definition — Part 4**  
**Date:** 28 August 2026  
**Status:** DRAFT — Intent-based service discovery model

---

## Executive Summary

This document defines HOW USERS DISCOVER AND START SERVICES on the future MCA platform.

**Architectural Principle (Phase 2 ADR-016):**
> **Intent First** — Users start with "I want to..." not "Form INC-22"

**Key Insight:**
Users don't think in form numbers. They think in outcomes:
- "I want to start a company"
- "I need to file my annual return"
- "I need to change a director"
- "I want to close this company"

**The Challenge:**
- **First-time founders** don't know form numbers
- **Expert professionals** DO know form numbers and use them as shortcuts
- **System must support BOTH** without compromising either experience

**The Solution:**
Multiple entry modes that resolve to the same underlying service model:
1. Intent-based discovery ("Start a company")
2. Entity-contextual discovery ("What's due for my company?")
3. Form-number search ("SPICe+")
4. Service category browse ("Incorporation services")
5. Obligation-triggered ("You need to file MGT-7")
6. Legal basis search ("Companies Act Section 7")

---

## 1. Intent Model Framework

### 1.1 What is an "Intent"?

**Intent = User Goal expressed in natural language**

Examples:
- "Start a company"
- "File annual return"
- "Change director"
- "Close company"
- "Search entity"
- "Download certificate"
- "Respond to notice"

**Intent ≠ Service (Yet)**

Intent is user-facing language. Service is system-side capability.

**Intent Resolution:**
```
USER INTENT
  ↓ (resolution)
ELIGIBLE SERVICES
  ↓ (context)
RECOMMENDED SERVICE
  ↓ (action)
SERVICE INITIATION
```

---

### 1.2 Intent Taxonomy

**FORMATION INTENTS:**
- Start a company
- Start an LLP
- Reserve a company name
- Reserve an LLP name
- Get a Director Identification Number (DIN)

**MAINTENANCE INTENTS:**
- Change directors
- Change partners (LLP)
- Change registered office
- Change company name
- Change capital structure
- Register a charge
- Modify a charge
- Satisfy a charge
- Update authorized signatories

**COMPLIANCE INTENTS:**
- File annual return
- File financial statements
- Complete director KYC
- File LLP disclosures
- File beneficial ownership
- File auditor details
- File board resolutions

**CLOSURE INTENTS:**
- Close a company
- Close an LLP
- Strike off inactive company
- Apply for voluntary liquidation

**INFORMATION INTENTS:**
- Search for a company
- Search for an LLP
- Check director information
- View entity profile
- View entity status
- View entity filings
- Check compliance status
- View charges registered

**DOCUMENT INTENTS:**
- Download certificate
- Get certified copy
- View public documents
- Download filing
- Access entity documents

**RESOLUTION INTENTS:**
- Respond to notice
- Respond to query
- File complaint
- Track complaint
- Request clarification

**CLAIM INTENTS:**
- Claim IEPF amount
- Claim IEPF securities
- Track IEPF claim

---

## 2. Service Discovery Model

### 2.1 Entry Modes

**MODE 1: INTENT-BASED DISCOVERY**

**How it works:**
- User enters intent in natural language (search box or prompted)
- System matches intent to services
- If multiple matches, shows disambiguation
- If single match, shows service with context

**Example Flow:**
```
User types: "start company"
  ↓
System matches: 
  - Company Incorporation (SPICe+) [RECOMMENDED]
  - Name Reservation (SPICe+ Part A)
  - LLP Incorporation (FiLLiP) [if user meant LLP]
  ↓
User selects: Company Incorporation
  ↓
System shows: 
  - What you'll accomplish
  - What's required
  - Estimated time
  - Fee (if known)
  - Legal basis
  ↓
User clicks: "Start Incorporation"
  ↓
Service initiated
```

**Intent Matching Logic:**
- Keyword matching ("start" + "company" → Incorporation)
- Synonym support ("register company" = "start company" = "incorporate")
- Context-aware (if entity already exists, "start company" not relevant)
- Persona-aware (public user: search only; director: filing services)

**UX Pattern:**
- Prominent search box: "What do you want to do?"
- Auto-suggest as user types
- Recent intents shown (for repeat users)
- Popular intents shortcuts

---

**MODE 2: ENTITY-CONTEXTUAL DISCOVERY**

**How it works:**
- User selects active entity (Company ABC)
- System shows entity-specific actions:
  - What's due (obligations)
  - Quick actions (common services for this entity)
  - Recently used
  - Available services

**Example Flow:**
```
User selects: ABC Pvt Ltd (active entity)
  ↓
System shows Workspace:
  
  📋 What's Due (3)
    • Annual Return (MGT-7) — Due: 30 Sep 2026 [FILE NOW]
    • Financial Statements (AOC-4) — Due: 30 Sep 2026 [FILE NOW]
    • Director KYC (DIR-3 KYC) — Due: 30 Sep 2026 [START]
  
  ⚡ Quick Actions
    • Change Director
    • Change Registered Office
    • Register Charge
    • View Compliance Status
  
  🕐 Recent
    • Director Change (DIR-12) — Completed 15 Aug 2026
  
  📁 All Services → [Browse]
  
User clicks: [FILE NOW] for Annual Return
  ↓
Service initiated with entity context already set
```

**UX Pattern:**
- Entity switcher prominent
- Workspace dashboard entity-centric
- Obligations shown first (proactive)
- Quick actions for common entity services
- "All Services" if user needs something not shown

---

**MODE 3: FORM-NUMBER SEARCH**

**How it works:**
- Expert users search by form number
- System resolves form → service
- Shows service (not just form)

**Example Flow:**
```
User types: "MGT-7"
  ↓
System matches: 
  - Annual Return (MGT-7)
  ↓
System shows:
  Service: Annual Return
  Form: MGT-7
  What's required
  Legal basis: Companies Act §92
  ↓
User clicks: "Start Annual Return"
  ↓
Service initiated
```

**UX Pattern:**
- Same search box supports intent OR form number
- Form number recognized (e.g., "MGT-7", "SPICe+", "DIR-3 KYC")
- Shows service context, not just form
- User understands they're starting a SERVICE that uses the form

---

**MODE 4: SERVICE CATEGORY BROWSE**

**How it works:**
- User browses by category
- System shows organized service catalog
- User selects service

**Example Flow:**
```
User clicks: "Browse Services"
  ↓
System shows categories:
  
  START & CREATE
    • Company Incorporation (SPICe+)
    • LLP Incorporation (FiLLiP)
    • Director Identification (DIN)
  
  MANAGE & CHANGE
    • Change Directors (DIR-series)
    • Change Office
    • Change Capital
    • Register/Modify Charges
  
  COMPLY & FILE
    • Annual Return (MGT-7)
    • Financial Statements (AOC-4)
    • Director KYC (DIR-3 KYC)
    • LLP Disclosures
  
  ... [more categories]
  
User selects: Annual Return
  ↓
Service details shown
  ↓
Service initiated
```

**UX Pattern:**
- Category-based navigation
- Services grouped by intent (not alphabetical)
- Each service shows: name, form(s), legal basis, summary

---

**MODE 5: OBLIGATION-TRIGGERED**

**How it works:**
- System calculates obligations (continuous compliance)
- Workspace shows "What's Due"
- User clicks obligation → Service initiated

**Example Flow:**
```
System calculates: ABC Pvt Ltd → Annual Return due 30 Sep 2026
  ↓
Workspace shows:
  "📋 Annual Return (MGT-7) — Due: 30 Sep 2026 [FILE NOW]"
  ↓
User clicks: [FILE NOW]
  ↓
Service initiated with:
  - Entity context: ABC Pvt Ltd
  - Service: Annual Return (MGT-7)
  - Obligation link: Satisfies obligation OBL-2026-ABC-001
  ↓
On completion: Obligation marked complete
```

**UX Pattern:**
- Obligation shown with deadline
- Clear call-to-action
- Single click from obligation → service
- Obligation satisfied automatically on completion

---

**MODE 6: LEGAL BASIS SEARCH**

**How it works:**
- User searches by legal provision
- System shows related services
- User selects service

**Example Flow:**
```
User searches: "Section 92"
  ↓
System matches:
  - Legal Provision: Companies Act §92 (Annual Return)
  - Related Services:
    • Annual Return (MGT-7) — Required under §92
  ↓
User selects: Annual Return
  ↓
Service details shown (includes legal basis §92)
  ↓
Service initiated
```

**UX Pattern:**
- Advanced search (for expert users)
- Links legal provisions → services
- Explainability: user understands legal requirement → service connection

---

## 3. Intent → Service Resolution

### 3.1 Simple Intent (One Service)

**Intent:** "Start a company"

**Resolution:**
```
Intent: "Start a company"
  ↓
Match: Company Incorporation (SPICe+)
  ↓
Show Service Card:
  
  📄 COMPANY INCORPORATION
  
  What you'll accomplish:
  • Register a new private limited company
  • Obtain Corporate Identity Number (CIN)
  • Register company details with MCA
  
  What's required:
  • Proposed directors (minimum 2)
  • Director Identification Numbers (DIN)
  • Registered office address
  • Memorandum and Articles of Association
  • Share capital details
  • Digital Signature Certificate (DSC)
  
  Forms: SPICe+ (Parts A & B), INC-9, INC-10, INC-11, INC-33, INC-34
  
  Legal Basis: Companies Act 2013, §7, §12; Incorporation Rules
  
  Estimated Time: 7-10 days (if documents complete)
  
  Fee: Based on authorized capital (calculator available)
  
  [START INCORPORATION]
  [LEARN MORE]
  
```

---

### 3.2 Ambiguous Intent (Multiple Services)

**Intent:** "Change director"

**Resolution:**
```
Intent: "Change director"
  ↓
Multiple Matches:
  - Appoint Director
  - Resign Director
  - Change Director Details
  ↓
Show Disambiguation:
  
  What would you like to do?
  
  ○ Appoint a new director
    Add a new director to the company
    Form: DIR-12
  
  ○ Remove or resign a director
    Record director resignation or removal
    Forms: DIR-11, DIR-12
  
  ○ Change director details
    Update existing director information
    Form: DIR-6
  
  [CANCEL]
  
User selects: "Appoint a new director"
  ↓
Service: Appoint Director
  ↓
Service initiated
```

---

### 3.3 Context-Dependent Intent

**Intent:** "File annual return"

**Context Check:**
```
Intent: "File annual return"
  ↓
System checks: Active entity?
  ↓
IF entity selected (ABC Pvt Ltd):
  ↓
  Entity Type: Company
  ↓
  Service: Annual Return (MGT-7) for Companies
  ↓
  Service initiated with entity context
  
IF entity selected (PQR LLP):
  ↓
  Entity Type: LLP
  ↓
  Service: LLP Annual Return (Form 11)
  ↓
  Service initiated with entity context
  
IF no entity selected:
  ↓
  Show: "Select an entity first"
  ↓
  [SELECT ENTITY]
```

---

### 3.4 Ineligible Intent

**Intent:** "Start a company"

**Eligibility Check:**
```
Intent: "Start a company"
  ↓
System checks: User persona
  ↓
IF Public User (not logged in):
  ↓
  Show: 
    "To start a company, you need to:
    1. Create an account
    2. Obtain Director Identification Number (DIN)
    3. Obtain Digital Signature Certificate (DSC)
    
    [CREATE ACCOUNT]
    [LEARN MORE ABOUT INCORPORATION]"
  
IF Professional (logged in):
  ↓
  Show:
    "You're logged in as a Professional.
    
    Are you incorporating:
    ○ For a client (Professional Representative)
    ○ For yourself (Own entity)
    
    [SELECT]"
  
IF Existing Director with 10 companies:
  ↓
  Show:
    "You're already a director of 10 companies.
    You can start a new company, but note the Companies Act 
    limits on number of directorships.
    
    [CONTINUE]
    [CANCEL]"
```

---

## 4. Service Discovery Patterns

### 4.1 Entry Pattern: Homepage (Unauthenticated)

```
┌─────────────────────────────────────────────────┐
│ MCA DIGITAL PLATFORM                      LOGIN │
├─────────────────────────────────────────────────┤
│                                                 │
│  Ministry of Corporate Affairs                  │
│  Digital Regulatory Platform                    │
│                                                 │
│  ┌───────────────────────────────────────────┐ │
│  │ What would you like to do?         🔍     │ │
│  └───────────────────────────────────────────┘ │
│                                                 │
│  QUICK ACCESS                                   │
│                                                 │
│  🏢 Start a Company                             │
│  🔍 Search Company/LLP                          │
│  📄 Access Public Documents                     │
│  💰 Claim IEPF Amount                           │
│                                                 │
│  FOR BUSINESSES                                 │
│  → Company Services                             │
│  → LLP Services                                 │
│  → Director Services                            │
│                                                 │
│  INFORMATION                                    │
│  → Acts & Rules                                 │
│  → Guides & FAQs                                │
│  → Fees & Timelines                             │
│                                                 │
└─────────────────────────────────────────────────┘
```

**User Journey:**
- Public user: Search entity, access documents, learn about incorporation
- Prospective founder: "Start a Company" → Create Account → Incorporation
- Professional: Login → Workspace

---

### 4.2 Entry Pattern: Authenticated Workspace (Single Entity)

```
┌─────────────────────────────────────────────────┐
│ 👤 Rajesh Sharma  |  ABC Pvt Ltd ▼  |  LOGOUT  │
├─────────────────────────────────────────────────┤
│                                                 │
│  ┌───────────────────────────────────────────┐ │
│  │ What would you like to do?         🔍     │ │
│  └───────────────────────────────────────────┘ │
│                                                 │
│  📋 WHAT'S DUE (3)                              │
│                                                 │
│  • Annual Return (MGT-7)        [FILE NOW]     │
│    Due: 30 Sep 2026 (32 days left)             │
│                                                 │
│  • Financial Statements (AOC-4) [FILE NOW]     │
│    Due: 30 Sep 2026 (32 days left)             │
│                                                 │
│  • Director KYC (DIR-3 KYC)     [START]        │
│    Due: 30 Sep 2026 (32 days left)             │
│                                                 │
│  ⚡ QUICK ACTIONS                                │
│  → Change Director                              │
│  → Change Registered Office                     │
│  → Register Charge                              │
│  → View Compliance Status                       │
│                                                 │
│  🕐 RECENT ACTIVITY                             │
│  • Director Change (DIR-12) — Completed 15 Aug │
│  • Office Change — Completed 10 Jul             │
│                                                 │
│  📁 ALL SERVICES                                │
│                                                 │
└─────────────────────────────────────────────────┘
```

**User Journey:**
- Entity context already set (ABC Pvt Ltd)
- Obligations shown first (proactive compliance)
- Quick actions for common needs
- Recent activity for reference
- Search available if need something specific

---

### 4.3 Entry Pattern: Authenticated Workspace (Multi-Entity Professional)

```
┌─────────────────────────────────────────────────┐
│ 👤 Meera Shah (CA)  |  ALL ENTITIES ▼  | LOGOUT│
├─────────────────────────────────────────────────┤
│                                                 │
│  ┌───────────────────────────────────────────┐ │
│  │ Search clients or services...       🔍     │ │
│  └───────────────────────────────────────────┘ │
│                                                 │
│  📋 OBLIGATIONS ACROSS CLIENTS (12)             │
│                                                 │
│  OVERDUE (2)                                    │
│  • Client A Ltd — Annual Return (3 days late)  │
│  • Client B Pvt Ltd — DIR-3 KYC (1 day late)   │
│                                                 │
│  DUE THIS WEEK (5)                              │
│  • Client C Ltd — Annual Return (4 days)       │
│  • Client D Pvt Ltd — Financial Statements...  │
│                                                 │
│  DUE THIS MONTH (5)                             │
│  • Client E Ltd — Annual Return (20 days)      │
│  ...                                            │
│                                                 │
│  ✍️ AWAITING MY SIGNATURE (8)                   │
│  • Client F Ltd — AOC-4 (Auditor signature)    │
│  • Client G Pvt Ltd — Annual Return            │
│  ...                                            │
│                                                 │
│  📁 MY CLIENTS (52) → [VIEW ALL]                │
│                                                 │
│  ⚡ QUICK START                                  │
│  → File Annual Return                           │
│  → File Financial Statements                    │
│  → Complete Director KYC                        │
│                                                 │
└─────────────────────────────────────────────────┘
```

**User Journey:**
- Multi-entity dashboard (all clients)
- Overdue obligations prioritized (risk management)
- Signature queue prominent (action needed)
- Search to filter clients
- Quick start for common services (still requires entity selection)

---

## 5. Intent Vocabulary

### 5.1 Canonical Intent Phrases

**Formation:**
- "Start a company" | "Register a company" | "Incorporate" | "New company"
- "Start an LLP" | "Register an LLP" | "New LLP"
- "Reserve company name" | "Check name availability"
- "Get DIN" | "Apply for DIN" | "Director identification"

**Changes:**
- "Change director" | "Add director" | "Remove director" | "Director resignation"
- "Change office" | "Update office address" | "Registered office change"
- "Change capital" | "Increase capital" | "Issue shares"
- "Register charge" | "Create charge" | "Modify charge" | "Satisfy charge"

**Compliance:**
- "File annual return" | "MGT-7" | "Annual filing"
- "File financial statements" | "AOC-4" | "Annual accounts"
- "Director KYC" | "DIR-3 KYC" | "Annual KYC"
- "File LLP return" | "LLP Form 11"

**Closure:**
- "Close company" | "Strike off" | "Shut down company" | "Dissolve company"
- "Close LLP" | "Dissolve LLP"

**Search:**
- "Search company" | "Find company" | "Company details"
- "Check director" | "Director information"
- "View entity profile" | "Entity details"
- "Check compliance" | "Compliance status"

**Documents:**
- "Download certificate" | "Get certificate"
- "Certified copy" | "Official copy"
- "View documents" | "Access filings"

**Resolution:**
- "Respond to notice" | "Reply to query"
- "File complaint" | "Grievance" | "Problem with filing"

---

### 5.2 Synonym Mapping

**Goal:** Support natural language variation

| **Canonical Intent** | **Synonyms** |
|---|---|
| Start a company | Register company, Incorporate, New company, Form company, Create company, Open company |
| File annual return | Annual filing, Submit annual return, MGT-7, Annual compliance |
| Change director | Add director, Remove director, Appoint director, Resign director, Director change |
| Search company | Find company, Lookup company, Company search, Check company |
| Download certificate | Get certificate, Certificate of incorporation, COI, View certificate |

---

## 6. Service Recommendation Logic

### 6.1 Recommendation Factors

**Factors influencing service recommendation:**

1. **User Persona**
   - Public User → Search, Information services
   - First-Time Founder → Incorporation
   - Existing Director → Compliance, Changes
   - Professional → Multi-entity compliance

2. **Entity Context**
   - Entity selected → Entity-specific services only
   - No entity → Entity-independent services (DIN, Search, Incorporation)

3. **Entity Type**
   - Company → Company services (MGT-7, AOC-4)
   - LLP → LLP services (Form 8, Form 11)

4. **Obligations**
   - If obligation due → Recommend obligation-satisfying service first

5. **Recent Activity**
   - Recently used services shown in suggestions

6. **Frequency**
   - Annual services shown near deadline dates

---

### 6.2 Recommendation Examples

**Example 1: First-Time Founder**

```
User: Rohan (new account, no entities, no DIN)
Intent: "Start a company"

System recommends:
  1. Obtain DIN (PREREQUISITE — shown first)
  2. Company Incorporation (PRIMARY GOAL)
  3. Guides: "How to Incorporate" (HELP)

Message shown:
  "Before incorporating, you'll need:
  • Director Identification Number (DIN) [APPLY FOR DIN]
  • Digital Signature Certificate (DSC) [LEARN MORE]
  
  Once you have these, you can start incorporation."
```

**Example 2: Existing Director, Multiple Entities**

```
User: Rajesh (director of ABC Pvt Ltd, XYZ Pvt Ltd)
Active Entity: NONE (must select)
Intent: "File annual return"

System prompts:
  "Which entity?"
  
  ○ ABC Pvt Ltd (Due: 30 Sep 2026)
  ○ XYZ Pvt Ltd (Due: 15 Oct 2026)
  
User selects: ABC Pvt Ltd

System recommends:
  Annual Return (MGT-7) for ABC Pvt Ltd
```

**Example 3: Professional, Multi-Entity**

```
User: Meera (CA, 52 clients)
Active Entity: ALL ENTITIES view
Intent: "File AOC-4"

System prompts:
  "Which client?"
  
  Search clients...
  
  Showing clients with AOC-4 due:
  • Client A Ltd (Due: 25 Aug — OVERDUE)
  • Client C Ltd (Due: 30 Sep — 32 days)
  • Client F Ltd (Due: 15 Oct — 47 days)
  ...
  
User selects: Client A Ltd

System recommends:
  Financial Statements (AOC-4) for Client A Ltd
  [ALERT: Overdue by 3 days — additional fee may apply]
```

---

## 7. Search Experience

### 7.1 Universal Search Box

**Location:** Prominent in header (all pages)

**Behavior:**
- Accepts natural language intent OR form number OR entity name
- Auto-suggests as user types
- Shows recent searches (personalized)

**Example Searches:**

```
User types: "start"
  ↓
Auto-suggest:
  📄 Start a company (Service)
  📄 Start an LLP (Service)
  🔍 ABC Startups Pvt Ltd (Entity — if exists)
```

```
User types: "MGT-7"
  ↓
Auto-suggest:
  📄 Annual Return (MGT-7) (Service)
  📖 MGT-7 Instructions (Help)
  📋 MGT-7 for ABC Ltd (Your draft — if exists)
```

```
User types: "ABC"
  ↓
Auto-suggest:
  🔍 ABC Pvt Ltd (Entity — CIN: U12345MH2020PTC123456)
  🔍 ABC Traders LLP (Entity — LLPIN: AAA-1234)
  📄 ABC Pvt Ltd — Annual Return (Your draft)
```

---

### 7.2 Search Results

**Mixed Results:** Services, Entities, Help, Drafts

**Example Results Page:**

```
Search: "annual return"

SERVICES (2)
  📄 Annual Return (MGT-7) — For Companies
     File your company's annual return under Companies Act §92
     [START]
  
  📄 LLP Annual Return (Form 11) — For LLPs
     File your LLP's annual return under LLP Act §35
     [START]

YOUR DRAFTS (1)
  📋 Annual Return (MGT-7) for ABC Pvt Ltd
     Last edited: 20 Aug 2026
     [RESUME]

HELP & GUIDES (3)
  📖 How to file Annual Return (MGT-7)
  📖 Annual Return deadline and penalties
  📖 MGT-7 form instructions

LEGAL BASIS (1)
  ⚖️ Companies Act 2013, Section 92 — Annual Return
```

---

## 8. Contextual Service Discovery

### 8.1 Obligation-Triggered Discovery

**Trigger:** System calculates obligation due

**Discovery Flow:**
```
System: ABC Pvt Ltd → Annual Return due 30 Sep 2026
  ↓
Workspace shows:
  "📋 Annual Return (MGT-7) — Due: 30 Sep 2026"
  [FILE NOW]
  ↓
User clicks: [FILE NOW]
  ↓
Service initiated with full context:
  - Entity: ABC Pvt Ltd
  - Service: Annual Return
  - Financial Year: 2025-26
  - Deadline: 30 Sep 2026
  - Obligation: OBL-2026-ABC-001
```

---

### 8.2 Post-Action Discovery

**Trigger:** User completes an action that triggers next obligation

**Example:**
```
User completes: Company Incorporation (ABC Pvt Ltd)
  ↓
System generates obligations:
  - Appoint Auditor (due within 30 days)
  - File INC-20A (within 180 days)
  - First Annual Return (next FY end)
  ↓
Confirmation screen shows:
  "🎉 ABC Pvt Ltd successfully incorporated!
  
  CIN: U12345MH2026PTC123456
  
  📋 Next Steps:
  • Appoint Auditor — Due: 28 Sep 2026 [START]
  • File INC-20A (Commencement of Business) — Due: 15 Feb 2027
  
  [VIEW CERTIFICATE]
  [GO TO WORKSPACE]"
```

---

### 8.3 Query/Deficiency-Triggered Discovery

**Trigger:** Officer issues query on transaction

**Discovery Flow:**
```
Officer issues query: "MGT-7 for ABC Pvt Ltd — Missing auditor signature"
  ↓
Notification to user:
  "⚠️ Query on Annual Return (MGT-7) for ABC Pvt Ltd"
  ↓
Workspace shows:
  "⚠️ ACTION REQUIRED: Annual Return (MGT-7)
  Query from MCA: Missing auditor signature
  Deadline to respond: 7 days
  [RESPOND TO QUERY]"
  ↓
User clicks: [RESPOND TO QUERY]
  ↓
Service: Query Response workflow initiated
```

---

## 9. Service Discovery by Persona

### 9.1 Public User

**Entry Points:**
- Homepage search: "Search company/LLP"
- Browse: Public services
- Direct: "Access Public Documents"

**Typical Flow:**
```
Public User → Search "ABC Pvt Ltd" → Entity Profile → View Documents
```

---

### 9.2 First-Time Founder

**Entry Points:**
- Homepage: "Start a Company"
- Guided: "I want to..." → "Start a business"

**Typical Flow:**
```
Founder → "Start a Company" → Prerequisites shown (DIN, DSC) → Obtain DIN → Return to Incorporation
```

---

### 9.3 Existing Director

**Entry Points:**
- Workspace: Entity-centric dashboard
- Obligations: "What's Due"
- Search: Intent or form number

**Typical Flow:**
```
Director → Login → Workspace → "What's Due" → [FILE NOW] → Service initiated
```

---

### 9.4 Professional (CA/CS)

**Entry Points:**
- Multi-entity dashboard: Cross-client obligations
- Signature queue: "Awaiting My Signature"
- Client search: Filter by client name
- Quick start: Common services (with entity selection)

**Typical Flow:**
```
Professional → Login → Multi-Entity Dashboard → Overdue Obligations → Client A → [FILE NOW] → Service initiated
```

---

## 10. Service Discovery Validation

### 10.1 Validation Questions

**For each persona:**
1. Can they find their primary intent in < 3 clicks?
2. Is the most likely intent shown first?
3. Are prerequisites clearly indicated?
4. Is entity context clear?
5. Is authority clear (can I do this)?

**For intent model:**
1. Do intents match user mental models?
2. Are synonyms covered?
3. Is disambiguation clear when multiple services match?
4. Is context (entity, persona, obligation) used effectively?

---

### 10.2 Success Metrics

**Discovery Success:**
- % of users who find intended service within 3 clicks
- % of users who use search vs browse vs obligations
- % of users who abandon during discovery (drop-off)

**Intent Matching:**
- % of searches that return relevant results
- % of searches that require disambiguation
- % of searches with zero results

**Contextual Discovery:**
- % of services initiated from obligations (vs search)
- % of multi-entity users who switch entities correctly

---

## 11. Service Card Standard

**Every service, when discovered, shows:**

```
┌─────────────────────────────────────────┐
│ 📄 SERVICE NAME                         │
│                                         │
│ What you'll accomplish:                 │
│ • Clear outcome statement               │
│ • Registry effect (if applicable)       │
│                                         │
│ What's required:                        │
│ • Prerequisites (DIN, DSC, etc.)        │
│ • Documents                             │
│ • Signers                               │
│ • Fees                                  │
│                                         │
│ Forms: [Form numbers]                   │
│ Legal Basis: [Act, Section, Rule]      │
│ Estimated Time: [7-10 days]            │
│                                         │
│ [START SERVICE]  [LEARN MORE]          │
└─────────────────────────────────────────┘
```

---

## 12. Intent Model Status

**Intent Model:** ✅ **COMPLETE (DRAFT)**

**Key Decisions Made:**
1. ✅ Support multiple entry modes (intent, entity, form, category, obligation, legal)
2. ✅ Intent-first primary, form-number supported (expert users)
3. ✅ Entity context drives recommendations
4. ✅ Obligations shown proactively
5. ✅ Multi-entity professionals get cross-client dashboard
6. ✅ Universal search box supports all entry modes
7. ✅ Service cards provide consistent information

**Next Steps:**
1. Design Information Architecture (how services are organized)
2. Design Entity-Centric Experience (entity context model)
3. Design Workspace (where intents/obligations/services converge)
4. Design User Journeys (end-to-end flows)

**What Changed from Phase 2:**
- ❌ **NO architectural changes**
- ✓ Intent model designed (Phase 2 principle: intent-first)
- ✓ Multiple entry modes support all personas
- ✓ Service discovery patterns defined
- ✓ Obligation-triggered discovery designed

---

**END OF INTENT MODEL AND SERVICE DISCOVERY**

**Status:** READY FOR INFORMATION ARCHITECTURE DESIGN

