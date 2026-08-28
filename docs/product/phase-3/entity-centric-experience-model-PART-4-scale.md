# Entity-Centric Experience Model
## PART 4: Scale & Complexity

**Document ID:** ECEM-PART-4  
**Version:** 1.0  
**Date:** 28 August 2026  
**Status:** DRAFT  
**Phase:** Phase 3 — Product Definition & Experience Architecture

---

## Document Purpose

This document defines HOW the entity-centric model scales for professional users managing many entities and HOW entity information is structured. It specifies:
- Professional/multi-entity experience (5, 20, 100+ entity portfolios)
- Cross-entity obligation dashboards and compliance tracking
- Bulk actions and entity queues
- Delegated staff model (professionals with team members)
- Entity profile structure (canonical entity view)
- Relationship management (Person ↔ Entity model with authority scope)

**This Part Inherits:**
- All canonical definitions from Part 1
- All Entity-Context Rules (EC-01 through EC-15)
- All interaction patterns from Part 2
- All authority and safety mechanisms from Part 3

**This Part Extends:**
- Scale patterns for large professional practices
- Cross-entity views and bulk operations
- Entity information architecture
- Relationship and delegation models

---

## 1. Professional / Multi-Entity Experience

### 1.1 Scale Scenarios

Professional users (Chartered Accountants, Company Secretaries) manage client entities at widely varying scales:

| Scale | Entity Count | User Profile | Key Challenges |
|---|---|---|---|
| **Small Practice** | 5-10 entities | Solo professional, small client base | Entity selection, obligation tracking |
| **Medium Practice** | 10-50 entities | Professional with 1-2 staff | Search/filter, delegation, workload distribution |
| **Large Practice** | 50-200 entities | Professional firm with 5-10 staff | Cross-entity dashboards, bulk actions, team coordination |
| **Enterprise Practice** | 200+ entities | Large firm with multiple partners, 20+ staff | Entity grouping, client hierarchies, advanced filtering, role-based access |

**Design Principle:**  
The platform must support ALL scales without forcing small practices to use "enterprise" features or forcing large practices into inefficient workflows designed for small users.

---

### 1.2 Five-Entity Scenario (Solo Professional)

**User Profile:** Meera Desai, Chartered Accountant, managing 5 small company clients.

#### 1.2.1 Dashboard View

```
┌────────────────────────────────────────────────────────┐
│ Welcome back, Meera Desai (Chartered Accountant)       │
│                                                         │
│ Your Entities (5)                                      │
│                                                         │
│ ┌────────────────────────────────────────────────────┐ │
│ │ ABC PRIVATE LIMITED                                │ │
│ │ CIN: U12345MH2020PTC123456                        │ │
│ │ 📋 3 pending obligations                          │ │
│ │ ⚠️  MGT-7 due in 5 days                           │ │
│ │ [Open Workspace]                                   │ │
│ └────────────────────────────────────────────────────┘ │
│                                                         │
│ ┌────────────────────────────────────────────────────┐ │
│ │ XYZ TECHNOLOGIES LLP                               │ │
│ │ LLPIN: AAA-1234                                   │ │
│ │ 📋 1 pending obligation                           │ │
│ │ Form 8 due in 15 days                             │ │
│ │ [Open Workspace]                                   │ │
│ └────────────────────────────────────────────────────┘ │
│                                                         │
│ ┌────────────────────────────────────────────────────┐ │
│ │ DEF INDUSTRIES LTD                                 │ │
│ │ CIN: U67890DL2018PTC987654                        │ │
│ │ ✅ No pending obligations                         │ │
│ │ [Open Workspace]                                   │ │
│ └────────────────────────────────────────────────────┘ │
│                                                         │
│ [Show 2 more entities...]                              │
│                                                         │
│ Quick Actions:                                         │
│ [ Start New Filing ] [ View All Obligations ]          │
│                                                         │
└────────────────────────────────────────────────────────┘
```

**Features at This Scale:**
- **Simple list view:** All entities visible at once (or with minimal scrolling)
- **Obligation indicators:** Pending count + most urgent obligation shown per entity
- **Direct workspace access:** One click to open entity workspace
- **No complex filtering needed:** 5 entities are mentally scannable

**What's NOT Needed at This Scale:**
- Search box (user knows all 5 clients by name)
- Advanced filters (small enough to scan visually)
- Bulk actions (manageable to handle individually)

---

### 1.3 Twenty-Entity Scenario (Small Firm)

**User Profile:** Rajesh Kumar, Chartered Accountant, managing 20 client companies with 1 assistant.

#### 1.3.1 Dashboard View with Filtering

```
┌────────────────────────────────────────────────────────┐
│ Your Entities (20)                                     │
│                                                         │
│ [ 🔍 Search entities... ]                              │
│                                                         │
│ Filter: [ All (20) ▾ ]                                 │
│  • Pending Obligations (7)                            │
│  • Overdue (2)                                        │
│  • No Obligations (11)                                │
│                                                         │
│ Sort: [ Most Urgent First ▾ ]                         │
│                                                         │
│ ⚠️ OVERDUE (2):                                        │
│                                                         │
│ ┌────────────────────────────────────────────────────┐ │
│ │ JKL EXPORTS LTD                                    │ │
│ │ CIN: U11111KA2019PTC222222                        │ │
│ │ 🔴 AOC-4 overdue by 3 days                        │ │
│ │ [File Now] [View Details]                          │ │
│ └────────────────────────────────────────────────────┘ │
│                                                         │
│ ┌────────────────────────────────────────────────────┐ │
│ │ MNO RETAIL PVT LTD                                 │ │
│ │ CIN: U22222MH2021PTC333333                        │ │
│ │ 🔴 MGT-7 overdue by 1 day                         │ │
│ │ [File Now] [View Details]                          │ │
│ └────────────────────────────────────────────────────┘ │
│                                                         │
│ 📋 DUE SOON (5):                                       │
│                                                         │
│ ┌────────────────────────────────────────────────────┐ │
│ │ ABC PRIVATE LIMITED                                │ │
│ │ ⏰ MGT-7 due in 5 days                            │ │
│ │ [Start Filing] [View Details]                      │ │
│ └────────────────────────────────────────────────────┘ │
│                                                         │
│ [Show 3 more due soon...]                              │
│                                                         │
│ ✅ NO OBLIGATIONS (11)                                 │
│ [Show all...]                                          │
│                                                         │
└────────────────────────────────────────────────────────┘
```

**Features at This Scale:**
- **Search box:** Essential (20 entities not mentally scannable)
- **Obligation-based filtering:** Overdue / Due Soon / No Obligations
- **Urgency-based sorting:** Most urgent shown first
- **Grouped display:** Overdue → Due Soon → No Obligations (visual hierarchy)
- **Quick actions per entity:** "File Now" for overdue, "Start Filing" for due soon

**User Workflow:**
1. Log in → Dashboard shows overdue entities first (immediate attention needed)
2. Handle overdue filings (2 entities)
3. Move to "due soon" entities (5 entities)
4. Check "no obligations" entities periodically (11 entities, less frequent)

---

#### 1.3.2 Delegation to Assistant

**Scenario:** Rajesh has an assistant, Priya, who prepares drafts. Rajesh reviews and signs.

**Delegation Model:**

**Priya's Access (Assistant/Delegate):**
- Can view all 20 client entities Rajesh manages
- Can create draft filings
- Can upload documents
- **CANNOT** submit filings (requires Rajesh's signature)
- **CANNOT** make payments
- **CANNOT** sign documents

**Rajesh's Workflow:**
1. Rajesh assigns "Prepare MGT-7 for ABC Pvt Ltd" to Priya
2. Priya logs in, sees ABC Pvt Ltd in her entity list (with note "Delegated by Rajesh Kumar")
3. Priya prepares MGT-7 draft, saves
4. Rajesh receives notification: "Draft MGT-7 for ABC Pvt Ltd ready for review"
5. Rajesh reviews draft, signs, submits

**Delegation UI (Rajesh Assigns Task):**
```
┌────────────────────────────────────────────────────────┐
│ Assign Task                                            │
│                                                         │
│ Entity: ABC PRIVATE LIMITED                            │
│ Task: Prepare MGT-7 Annual Return                      │
│                                                         │
│ Assign to:                                             │
│ ○ Priya Sharma (Assistant)                            │
│                                                         │
│ Priya will be able to:                                 │
│  ✅ View entity information                           │
│  ✅ Create and edit draft                             │
│  ✅ Upload documents                                  │
│  🚫 Submit filing (requires your signature)           │
│                                                         │
│ Due Date: [ 5 September 2026 ]                         │
│                                                         │
│ [Cancel] [Assign Task]                                 │
│                                                         │
└────────────────────────────────────────────────────────┘
```

**Delegation Model Characteristics:**
- **Task-specific:** Delegate access for specific transaction, not blanket access to all entity operations
- **Authority-limited:** Delegate can perform preparatory actions only (per EC-04, authority is context-dependent)
- **Traceable:** Audit trail records who prepared (Priya) and who signed (Rajesh)

---

### 1.4 One Hundred-Entity Scenario (Large Firm)

**User Profile:** Anil Gupta, Senior Partner at CA firm, managing 120 client entities across 6 junior CAs.

#### 1.4.1 Multi-Entity Dashboard with Advanced Filtering

```
┌────────────────────────────────────────────────────────┐
│ Your Portfolio (120 entities)                          │
│                                                         │
│ [ 🔍 Search by name, CIN, or keyword... ]              │
│                                                         │
│ ┌──────────────────┬──────────────────┬───────────────┐│
│ │ Filter           │ Sort             │ View          ││
│ ├──────────────────┼──────────────────┼───────────────┤│
│ │ ☐ Overdue (8)    │ ● Most Urgent    │ ● Cards       ││
│ │ ☐ Due This Week  │ ○ Entity Name    │ ○ Table       ││
│ │   (15)           │ ○ Recent Activity│ ○ Compact     ││
│ │ ☐ Due This Month │                  │               ││
│ │   (22)           │                  │               ││
│ │ ☐ No Obligations │                  │               ││
│ │   (75)           │                  │               ││
│ ├──────────────────┤                  │               ││
│ │ Entity Type:     │                  │               ││
│ │ ☐ Private Co (90)│                  │               ││
│ │ ☐ LLP (25)       │                  │               ││
│ │ ☐ Public Co (5)  │                  │               ││
│ ├──────────────────┤                  │               ││
│ │ Assigned To:     │                  │               ││
│ │ ☐ Me (40)        │                  │               ││
│ │ ☐ Priya (25)     │                  │               ││
│ │ ☐ Rahul (30)     │                  │               ││
│ │ ☐ Unassigned (25)│                  │               ││
│ └──────────────────┴──────────────────┴───────────────┘│
│                                                         │
│ Showing: Overdue (8 entities)                          │
│                                                         │
│ 🔴 CRITICAL — OVERDUE > 7 DAYS (3):                    │
│                                                         │
│ ┌────────────────────────────────────────────────────┐ │
│ │ ALPHA INDUSTRIES LTD                 Assigned: Priya│ │
│ │ CIN: U33333KA2020PTC444444                        │ │
│ │ 🔴 MGT-7 overdue by 12 days                       │ │
│ │ [Escalate] [Reassign] [File Now]                  │ │
│ └────────────────────────────────────────────────────┘ │
│                                                         │
│ [Show 2 more critical...]                              │
│                                                         │
│ 🟠 OVERDUE < 7 DAYS (5):                               │
│ [Show all...]                                          │
│                                                         │
│ Bulk Actions (8 selected):                             │
│ [ Generate Overdue Report ] [ Send Client Reminders ]  │
│                                                         │
└────────────────────────────────────────────────────────┘
```

**Features at This Scale:**

**1. Advanced Search:**
- Search by entity name, CIN, or keyword (e.g., "manufacturing" to find all manufacturing clients)
- Fuzzy matching (handles typos)
- Search results ranked by relevance + urgency

**2. Multi-Dimensional Filtering:**
- **Obligation Status:** Overdue / Due This Week / Due This Month / No Obligations
- **Entity Type:** Private Company / LLP / Public Company / Foreign Company
- **Assignment:** Entities assigned to specific team members
- **Custom Tags:** Client categories (e.g., "High-Value", "New Client", "Audit Required")

**3. Multiple Sort Options:**
- Most Urgent First (default for overdue view)
- Entity Name (alphabetical)
- Recent Activity (recently accessed entities first)
- Client Name (if entities grouped by client/parent company)

**4. View Modes:**
- **Cards:** Detailed view with obligation summaries (default)
- **Table:** Compact rows for quick scanning (spreadsheet-like)
- **Compact:** Minimal list (entity name + most urgent obligation only)

**5. Bulk Actions:**
- Generate reports (overdue obligations across selected entities)
- Send client reminders (bulk email to entity contacts)
- Export data (entity list with obligations to Excel)

**6. Team Coordination:**
- **Assignment Tracking:** See which entities assigned to which team member
- **Workload Distribution:** Visual indicator of team member workload
- **Escalation:** Reassign entity from junior CA to senior if overdue

---

#### 1.4.2 Saved Views and Entity Groups

**Problem:** Anil doesn't want to recreate filters every day.

**Solution: Saved Views**

```
┌────────────────────────────────────────────────────────┐
│ Your Saved Views:                                      │
│                                                         │
│ ⭐ My Weekly Review (40 entities)                     │
│    Filters: Assigned to Me + Due This Week            │
│                                                         │
│ ⭐ Critical Overdue (8 entities)                      │
│    Filters: Overdue > 3 days + All Team Members       │
│                                                         │
│ ⭐ High-Value Clients (15 entities)                   │
│    Filters: Custom Tag "High-Value"                   │
│                                                         │
│ ⭐ New Clients Onboarded This Quarter (12 entities)   │
│    Filters: Client Onboarded After 1 July 2026        │
│                                                         │
│ [ + Create New View ]                                  │
│                                                         │
└────────────────────────────────────────────────────────┘
```

**Saved View Creation:**
1. User applies filters (e.g., Overdue + Assigned to Priya)
2. User clicks "Save This View"
3. Names the view: "Priya's Overdue Entities"
4. View saved to user profile, accessible from sidebar

**Saved View Benefits:**
- One-click access to frequently used entity subsets
- Team members can share views (e.g., "Partner Review Queue")
- Views update dynamically (entity counts change as obligations completed)

---

#### 1.4.3 Cross-Entity Obligation Dashboard

**Purpose:** Professional needs holistic view of ALL obligations across ALL client entities.

**Dashboard Layout:**

```
┌────────────────────────────────────────────────────────┐
│ Compliance Dashboard — All Entities (120)              │
│                                                         │
│ ┌──────────────┬──────────────┬──────────────────────┐ │
│ │ 🔴 Overdue   │ 🟡 Due Soon  │ ✅ Compliant         │ │
│ │              │              │                      │ │
│ │ 8 entities   │ 37 entities  │ 75 entities          │ │
│ │ 12 obligations│ 52 obligations│ No pending          │ │
│ │              │              │                      │ │
│ │ [View All]   │ [View All]   │ [View All]           │ │
│ └──────────────┴──────────────┴──────────────────────┘ │
│                                                         │
│ Upcoming Deadlines (Next 30 Days):                     │
│                                                         │
│ Week of 1-7 Sep:   15 filings due                      │
│ Week of 8-14 Sep:  12 filings due                      │
│ Week of 15-21 Sep: 18 filings due                      │
│ Week of 22-28 Sep: 7 filings due                       │
│                                                         │
│ [View Calendar]                                        │
│                                                         │
│ By Form Type:                                          │
│                                                         │
│ MGT-7 (Annual Return):     22 due this quarter         │
│ AOC-4 (Financial Stmt):    18 due this quarter         │
│ Form 8 (LLP Annual):       8 due this quarter          │
│ DIR-3 KYC:                 5 due this month            │
│                                                         │
│ [Generate Compliance Report] [Export to Excel]         │
│                                                         │
└────────────────────────────────────────────────────────┘
```

**Dashboard Features:**

**1. Status Summary:**
- Count of entities by compliance status (Overdue / Due Soon / Compliant)
- Obligation count per status

**2. Timeline View:**
- Upcoming obligations grouped by week
- Helps professional plan workload distribution

**3. Form Type Aggregation:**
- Count of obligations by form type (MGT-7, AOC-4, etc.)
- Useful for identifying peak periods (e.g., "22 annual returns due this quarter")

**4. Reports:**
- Generate PDF compliance report for internal review or client communication
- Export to Excel for custom analysis

---

#### 1.4.4 Entity Queues and Task Assignment

**Problem:** Large firm needs formal task assignment and tracking.

**Solution: Entity Queue System**

**Partner View (Anil):**
```
┌────────────────────────────────────────────────────────┐
│ Team Workload                                          │
│                                                         │
│ Priya Sharma (Junior CA):                              │
│ ├─ In Progress (8 entities)                           │
│ ├─ Review Required (3 entities)                       │
│ └─ Completed This Week (5 entities)                   │
│                                                         │
│ Rahul Verma (Junior CA):                               │
│ ├─ In Progress (12 entities)                          │
│ ├─ Review Required (2 entities)                       │
│ └─ Completed This Week (7 entities)                   │
│                                                         │
│ Unassigned (25 entities):                              │
│ [ Assign to Team Member ]                              │
│                                                         │
└────────────────────────────────────────────────────────┘
```

**Junior CA View (Priya):**
```
┌────────────────────────────────────────────────────────┐
│ My Queue (8 entities)                                  │
│                                                         │
│ ⏰ DUE TODAY (2):                                      │
│                                                         │
│ ┌────────────────────────────────────────────────────┐ │
│ │ ABC PRIVATE LIMITED                                │ │
│ │ Task: File MGT-7 Annual Return                     │ │
│ │ Assigned by: Anil Gupta (Partner)                  │ │
│ │ Due: Today, 5:00 PM                                │ │
│ │ Status: Draft ready, awaiting your review          │ │
│ │ [Review & Complete]                                │ │
│ └────────────────────────────────────────────────────┘ │
│                                                         │
│ ⏰ DUE THIS WEEK (6):                                  │
│ [Show all...]                                          │
│                                                         │
│ ✅ COMPLETED, PENDING PARTNER REVIEW (3):              │
│ [Show all...]                                          │
│                                                         │
└────────────────────────────────────────────────────────┘
```

**Queue Workflow:**
1. Partner assigns entity + task to junior CA (with due date)
2. Junior CA sees entity in "My Queue"
3. Junior CA prepares draft, marks "Ready for Review"
4. Partner receives notification, reviews draft
5. Partner approves → Junior CA submits (or Partner submits if signing required)
6. Task marked complete, entity removed from queue

**Benefits:**
- Clear ownership (no confusion about who's handling which entity)
- Workload visibility (partner can rebalance if one CA overloaded)
- Accountability (due dates and completion tracking)

---

### 1.5 Two Hundred Plus Entity Scenario (Enterprise Practice)

**User Profile:** Large CA firm with 300+ client entities, 5 partners, 20 junior CAs.

#### 1.5.1 Client Hierarchy and Entity Grouping

**Problem:** Some clients have multiple entities (e.g., holding company + 5 subsidiaries).

**Solution: Client-Entity Hierarchy**

```
┌────────────────────────────────────────────────────────┐
│ Clients (85)                                           │
│                                                         │
│ [ 🔍 Search clients or entities... ]                   │
│                                                         │
│ GLOBAL INDUSTRIES GROUP (6 entities)                   │
│ ├─ Global Industries Ltd (Holding)          ⚠️ 2 due  │
│ ├─ Global Manufacturing Pvt Ltd             ✅ Compliant│
│ ├─ Global Exports Pvt Ltd                   ⚠️ 1 due  │
│ ├─ Global Tech Services Pvt Ltd             ⚠️ 3 due  │
│ ├─ Global Logistics LLP                     ✅ Compliant│
│ └─ Global Real Estate Pvt Ltd               🔴 Overdue │
│ [Expand All] [View Group Dashboard]                    │
│                                                         │
│ ALPHA CORPORATION (3 entities)                         │
│ ├─ Alpha Corporation Ltd                    ✅ Compliant│
│ ├─ Alpha Retail Pvt Ltd                     ⚠️ 1 due  │
│ └─ Alpha Online Services Pvt Ltd            ✅ Compliant│
│                                                         │
│ [Show 83 more clients...]                              │
│                                                         │
└────────────────────────────────────────────────────────┘
```

**Client Grouping Features:**
- Entities grouped under parent client
- Obligation summary at group level (e.g., "6 entities, 6 obligations due")
- Expand/collapse groups for navigation
- Group-level dashboard (view all entities for one client in single view)

**Benefits:**
- Professional can manage "Global Industries Group" as a unit (not 6 separate entities)
- Group-level compliance report ("All Global entities compliant except Global Real Estate")

---

#### 1.5.2 Role-Based Access Control (RBAC) for Large Teams

**Scenario:** Not all junior CAs should see all 300 entities. Partner wants to assign specific client portfolios.

**RBAC Model:**

**Partner (Anil):**
- Access: ALL 300 entities
- Authority: Review and sign for all clients

**Senior CA (Meera):**
- Access: 100 entities (assigned client portfolio: "Manufacturing Clients")
- Authority: Prepare, review, sign for assigned clients

**Junior CA (Priya):**
- Access: 25 entities (assigned by Meera)
- Authority: Prepare drafts only (cannot sign)

**Entity Assignment UI (Partner View):**
```
┌────────────────────────────────────────────────────────┐
│ Assign Client Portfolio                                │
│                                                         │
│ Assign to: Meera Desai (Senior CA)                     │
│                                                         │
│ Select Entities:                                       │
│ [✓] Global Industries Group (6 entities)              │
│ [✓] Alpha Corporation (3 entities)                    │
│ [✓] Beta Manufacturing Ltd (1 entity)                 │
│ [ ] Gamma Tech Pvt Ltd (1 entity)                     │
│                                                         │
│ Authority Level:                                       │
│ ● Full Authority (prepare, review, sign)              │
│ ○ Review Only (cannot sign)                           │
│ ○ View Only (read-only access)                        │
│                                                         │
│ [Cancel] [Assign Portfolio]                            │
│                                                         │
└────────────────────────────────────────────────────────┘
```

**Benefits:**
- Junior CA sees only assigned 25 entities (not overwhelmed by full 300-entity list)
- Partner maintains oversight (can reassign entities if needed)
- Clear authority boundaries (junior cannot accidentally sign for unassigned client)

---

### 1.6 Cross-Entity Search

**Problem:** Professional with 100+ entities needs to find "all entities with overdue MGT-7".

**Solution: Advanced Cross-Entity Search**

**Search Interface:**
```
┌────────────────────────────────────────────────────────┐
│ Search Across All Entities (120)                       │
│                                                         │
│ [ Search for entities, obligations, or filings... ]    │
│                                                         │
│ Advanced Filters:                                      │
│                                                         │
│ Obligation Type:                                       │
│ [✓] MGT-7 (Annual Return)                             │
│ [ ] AOC-4 (Financial Statements)                      │
│ [ ] Form 8 (LLP Annual)                               │
│                                                         │
│ Obligation Status:                                     │
│ [ ] Due Soon                                          │
│ [✓] Overdue                                           │
│ [ ] Completed                                         │
│                                                         │
│ Date Range:                                            │
│ Due Date: [ 1 Aug 2026 ] to [ 31 Aug 2026 ]           │
│                                                         │
│ [ Search ]                                             │
│                                                         │
└────────────────────────────────────────────────────────┘

Results: 8 entities with overdue MGT-7

┌────────────────────────────────────────────────────────┐
│ ABC PRIVATE LIMITED                                    │
│ MGT-7 overdue by 5 days (Due: 25 Aug 2026)            │
│ [File Now]                                             │
└────────────────────────────────────────────────────────┘

[Show 7 more...]
```

**Search Capabilities:**
- Search by obligation type (MGT-7, AOC-4, etc.)
- Filter by status (overdue, due soon)
- Filter by date range
- Results show entity + obligation + urgency

**Use Case:**
Partner asks Priya: "How many of our clients have overdue MGT-7?"  
Priya runs cross-entity search → "8 entities with overdue MGT-7" → Generate report for partner review.

---

## 2. Entity Profile

### 2.1 Canonical Entity View

The Entity Profile is the single-page consolidated view of everything about an entity.

**Design Principle:** Information Architecture derived from user needs, not copied from current MCA portal.

---

### 2.2 Entity Profile Structure

#### 2.2.1 Profile Header (Always Visible)

```
┌────────────────────────────────────────────────────────┐
│ 🔵 ABC PRIVATE LIMITED                                 │
│    CIN: U12345MH2020PTC123456                         │
│    Status: 🟢 Active                                  │
│    Your Role: Director                                 │
│                                                         │
│ [ Overview ] [ People ] [ Compliance ] [ Filings ]    │
│ [ Documents ] [ Transactions ] [ Cases ] [ History ]   │
│                                                         │
└────────────────────────────────────────────────────────┘
```

**Header Components:**
- Entity name + color indicator (for multi-entity users)
- CIN/LLPIN (unique identifier)
- Status indicator (Active / Inactive / Struck Off)
- User's role for this entity

**Navigation Tabs:**
- Overview, People, Compliance, Filings, Documents, Transactions, Cases, History

---

#### 2.2.2 Overview Tab

**Purpose:** At-a-glance summary of entity's current state.

```
┌────────────────────────────────────────────────────────┐
│ OVERVIEW                                               │
│                                                         │
│ Entity Information:                                    │
│ Legal Name: ABC PRIVATE LIMITED                        │
│ CIN: U12345MH2020PTC123456                            │
│ Incorporation Date: 15 January 2020                    │
│ Jurisdiction: Maharashtra                              │
│ Company Type: Private Company Limited by Shares        │
│                                                         │
│ Registered Office:                                     │
│ 123 MG Road, Mumbai, Maharashtra, 400001               │
│                                                         │
│ Authorized Capital: ₹10,00,000                         │
│ Paid-Up Capital: ₹5,00,000                             │
│                                                         │
│ Key Dates:                                             │
│ Financial Year End: 31 March                           │
│ Last AGM Held: 30 September 2025                       │
│ Next AGM Due By: 30 September 2026                     │
│                                                         │
│ Compliance Status:                                     │
│ 📋 3 pending obligations                              │
│ ⚠️  MGT-7 due in 5 days                               │
│ [View All Obligations]                                 │
│                                                         │
│ Recent Activity:                                       │
│ • 28 Aug: AOC-4 filed (Financial Statements FY 2025-26)│
│ • 15 Aug: Director KYC (DIR-3 KYC) completed           │
│ • 10 Aug: Registered office address updated            │
│ [View Full History]                                    │
│                                                         │
└────────────────────────────────────────────────────────┘
```

**Overview Sections:**
1. **Entity Information:** Basic identifiers and legal details
2. **Registered Office:** Current address
3. **Capital Structure:** Authorized and paid-up capital (companies only)
4. **Key Dates:** Financial year, AGM dates (companies only)
5. **Compliance Status:** Pending obligations with urgency indicators
6. **Recent Activity:** Last 5 actions/filings for quick reference

---

#### 2.2.3 People Tab

**Purpose:** All individuals associated with the entity (directors, partners, professionals, signatories).

```
┌────────────────────────────────────────────────────────┐
│ PEOPLE                                                 │
│                                                         │
│ Directors (3):                                         │
│                                                         │
│ ┌────────────────────────────────────────────────────┐ │
│ │ Priya Sharma                          — You         │ │
│ │ DIN: 12345678                                      │ │
│ │ Appointed: 15 January 2020                         │ │
│ │ Status: Active                                     │ │
│ │ [View Details]                                     │ │
│ └────────────────────────────────────────────────────┘ │
│                                                         │
│ ┌────────────────────────────────────────────────────┐ │
│ │ Rajesh Kumar                                       │ │
│ │ DIN: 87654321                                      │ │
│ │ Appointed: 20 March 2021                           │ │
│ │ Status: Active                                     │ │
│ │ [View Details] [Remove Director]                   │ │
│ └────────────────────────────────────────────────────┘ │
│                                                         │
│ [ + Appoint New Director ]                             │
│                                                         │
│ Company Secretary:                                     │
│                                                         │
│ ┌────────────────────────────────────────────────────┐ │
│ │ Meera Desai                                        │ │
│ │ Membership No: ACS-123456                          │ │
│ │ Appointed: 1 April 2021                            │ │
│ │ Status: Active                                     │ │
│ │ [View Details] [Change CS]                         │ │
│ └────────────────────────────────────────────────────┘ │
│                                                         │
│ Authorized Professionals:                              │
│                                                         │
│ ┌────────────────────────────────────────────────────┐ │
│ │ Anil Gupta (Chartered Accountant)                  │ │
│ │ ICAI Membership: 098765                            │ │
│ │ Authorized: 10 January 2025 (Form INC-28)         │ │
│ │ Authority: File annual returns, financial statements│ │
│ │ Valid Until: No expiration                         │ │
│ │ [View Authorization] [Revoke]                      │ │
│ └────────────────────────────────────────────────────┘ │
│                                                         │
│ Authorized Signatories (3):                            │
│ [View All]                                             │
│                                                         │
└────────────────────────────────────────────────────────┘
```

**People Tab Sections:**
1. **Directors:** All directors with appointment dates, status (active/resigned), actions (remove, view details)
2. **Company Secretary:** Current CS with appointment details
3. **Authorized Professionals:** CAs/CSs authorized to act on behalf of entity
4. **Authorized Signatories:** Individuals authorized to sign specific documents

**Relationship Details (Click "View Details"):**
- Full person profile (name, DIN, contact)
- Appointment/authorization documents
- Authority scope (what they can do)
- Validity period (if applicable)

---

#### 2.2.4 Compliance Tab

**Purpose:** Obligation tracking and compliance status.

```
┌────────────────────────────────────────────────────────┐
│ COMPLIANCE                                             │
│                                                         │
│ Pending Obligations (3):                               │
│                                                         │
│ ┌────────────────────────────────────────────────────┐ │
│ │ ⚠️  MGT-7 Annual Return                            │ │
│ │ Due: 3 September 2026 (in 5 days)                 │ │
│ │ Period: FY 2025-26                                 │ │
│ │ [Start Filing] [View Obligation Details]           │ │
│ └────────────────────────────────────────────────────┘ │
│                                                         │
│ ┌────────────────────────────────────────────────────┐ │
│ │ DIR-3 KYC (Director KYC)                           │ │
│ │ Due: 30 September 2026 (in 32 days)               │ │
│ │ For: Rajesh Kumar (DIN: 87654321)                 │ │
│ │ [Start Filing]                                     │ │
│ └────────────────────────────────────────────────────┘ │
│                                                         │
│ Upcoming Obligations (Next 90 Days):                   │
│ [ Show All ]                                           │
│                                                         │
│ Compliance History:                                    │
│ ✅ AOC-4 (FY 2025-26) — Filed on 28 Aug 2026          │
│ ✅ MGT-7 (FY 2024-25) — Filed on 30 Aug 2025          │
│ ✅ ADT-1 (Auditor Appointment) — Filed on 15 Oct 2025 │
│ [View All Filings]                                     │
│                                                         │
│ [ Generate Compliance Report ]                         │
│                                                         │
└────────────────────────────────────────────────────────┘
```

**Compliance Tab Sections:**
1. **Pending Obligations:** All upcoming obligations with due dates and urgency
2. **Upcoming Obligations:** Obligations due in next 90 days (expandable)
3. **Compliance History:** Recently completed filings
4. **Compliance Report:** Generate PDF report of entity's compliance status

---

#### 2.2.5 Filings Tab

**Purpose:** All forms filed with MCA for this entity.

```
┌────────────────────────────────────────────────────────┐
│ FILINGS                                                │
│                                                         │
│ Filter: [ All Forms ▾ ] [ All Years ▾ ]               │
│                                                         │
│ 2026 (12 filings):                                     │
│                                                         │
│ ┌────────────────────────────────────────────────────┐ │
│ │ AOC-4 — Financial Statements (FY 2025-26)          │ │
│ │ Filed: 28 August 2026                              │ │
│ │ SRN: AOC4-2026-123456                              │ │
│ │ Filed by: Anil Gupta (Chartered Accountant)        │ │
│ │ [View Form] [Download PDF] [View Attachments]      │ │
│ └────────────────────────────────────────────────────┘ │
│                                                         │
│ ┌────────────────────────────────────────────────────┐ │
│ │ MGT-14 — Board Resolution                          │ │
│ │ Filed: 15 August 2026                              │ │
│ │ SRN: MGT14-2026-654321                             │ │
│ │ Filed by: Priya Sharma (Director)                  │ │
│ │ [View Form] [Download PDF]                         │ │
│ └────────────────────────────────────────────────────┘ │
│                                                         │
│ [Show 10 more filings from 2026...]                    │
│                                                         │
│ 2025 (18 filings):                                     │
│ [Expand]                                               │
│                                                         │
│ [ Search Filings... ] [ Export List to Excel ]         │
│                                                         │
└────────────────────────────────────────────────────────┘
```

**Filings Tab Features:**
- Chronological list of all filings (most recent first)
- Grouped by year
- Filter by form type (MGT-7, AOC-4, etc.) or year
- Each filing shows: Form name, Filed date, SRN, Filed by (person + capacity)
- Actions: View form, Download PDF, View attachments

---

#### 2.2.6 Documents Tab

**Purpose:** All documents associated with entity (not just filing attachments).

```
┌────────────────────────────────────────────────────────┐
│ DOCUMENTS                                              │
│                                                         │
│ Filter: [ All Categories ▾ ] [ Search documents... ]  │
│                                                         │
│ Incorporation Documents:                               │
│ • Certificate of Incorporation (15 Jan 2020)           │
│ • Memorandum of Association                            │
│ • Articles of Association                              │
│ [View All]                                             │
│                                                         │
│ Board Resolutions:                                     │
│ • Board Resolution — Director Appointment (15 Aug 2026)│
│ • Board Resolution — Auditor Appointment (10 Oct 2025) │
│ [View All 12 Resolutions]                              │
│                                                         │
│ Financial Documents:                                   │
│ • Balance Sheet FY 2025-26                             │
│ • Profit & Loss Statement FY 2025-26                   │
│ • Auditor's Report FY 2025-26                          │
│ [View All]                                             │
│                                                         │
│ Statutory Registers:                                   │
│ • Register of Members                                  │
│ • Register of Directors                                │
│ [View All]                                             │
│                                                         │
│ [ + Upload Document ]                                  │
│                                                         │
└────────────────────────────────────────────────────────┘
```

**Documents Tab Categories:**
- Incorporation Documents (CoI, MoA, AoA)
- Board Resolutions (meeting minutes, resolutions)
- Financial Documents (balance sheets, P&L, audit reports)
- Statutory Registers (members, directors, charges)
- Contracts and Agreements
- Notices and Correspondence

---

#### 2.2.7 Transactions Tab

**Purpose:** In-progress and completed MCA transactions for this entity.

```
┌────────────────────────────────────────────────────────┐
│ TRANSACTIONS                                           │
│                                                         │
│ In Progress (2):                                       │
│                                                         │
│ ┌────────────────────────────────────────────────────┐ │
│ │ MGT-7 Annual Return (FY 2025-26)                   │ │
│ │ Status: Draft                                      │ │
│ │ Started: 25 August 2026                            │ │
│ │ Last Updated: 27 August 2026                       │ │
│ │ [Continue Editing] [Delete Draft]                  │ │
│ └────────────────────────────────────────────────────┘ │
│                                                         │
│ Completed (15):                                        │
│                                                         │
│ ┌────────────────────────────────────────────────────┐ │
│ │ AOC-4 Financial Statements (FY 2025-26)            │ │
│ │ Status: ✅ Submitted                               │ │
│ │ Submitted: 28 August 2026                          │ │
│ │ SRN: AOC4-2026-123456                              │ │
│ │ [View Submission Details] [Download Receipt]       │ │
│ └────────────────────────────────────────────────────┘ │
│                                                         │
│ [Show 14 more completed transactions...]               │
│                                                         │
└────────────────────────────────────────────────────────┘
```

**Transactions vs Filings:**
- **Transactions:** User's actions (drafts, in-progress, submitted)
- **Filings:** Forms successfully filed with MCA (public record)

Transactions Tab shows USER PERSPECTIVE (what user is working on).  
Filings Tab shows REGISTRY PERSPECTIVE (what's on public record).

---

#### 2.2.8 Cases Tab

**Purpose:** Adjudication, appeals, or disputes related to this entity.

```
┌────────────────────────────────────────────────────────┐
│ CASES                                                  │
│                                                         │
│ Active Cases (1):                                      │
│                                                         │
│ ┌────────────────────────────────────────────────────┐ │
│ │ Appeal Against Late Filing Penalty                 │ │
│ │ Case No: NCLT/MUM/2026/12345                       │ │
│ │ Filed: 10 August 2026                              │ │
│ │ Status: Pending Hearing                            │ │
│ │ Next Hearing: 15 September 2026                    │ │
│ │ [View Case Details] [Submit Response]              │ │
│ └────────────────────────────────────────────────────┘ │
│                                                         │
│ Closed Cases (0):                                      │
│ No closed cases.                                       │
│                                                         │
│ [ + File New Appeal ]                                  │
│                                                         │
└────────────────────────────────────────────────────────┘
```

**Cases Tab (if no cases):**
- "No active or closed cases for this entity."

---

#### 2.2.9 History Tab

**Purpose:** Complete audit trail of all entity actions.

```
┌────────────────────────────────────────────────────────┐
│ HISTORY                                                │
│                                                         │
│ Filter: [ All Actions ▾ ] [ Date Range: Last 90 Days ▾]│
│                                                         │
│ August 2026:                                           │
│                                                         │
│ 28 Aug 2026, 14:35 IST                                 │
│ AOC-4 Financial Statements submitted                   │
│ By: Anil Gupta (Chartered Accountant)                  │
│ SRN: AOC4-2026-123456                                  │
│                                                         │
│ 27 Aug 2026, 10:22 IST                                 │
│ MGT-7 draft saved                                      │
│ By: Priya Sharma (Director)                            │
│                                                         │
│ 15 Aug 2026, 16:45 IST                                 │
│ Registered office address updated                      │
│ By: Priya Sharma (Director)                            │
│ New Address: 123 MG Road, Mumbai, Maharashtra, 400001  │
│                                                         │
│ 10 Aug 2026, 09:30 IST                                 │
│ Director KYC (DIR-3 KYC) submitted for Rajesh Kumar    │
│ By: Rajesh Kumar (Director)                            │
│                                                         │
│ [Load More]                                            │
│                                                         │
│ [ Export History to PDF ]                              │
│                                                         │
└────────────────────────────────────────────────────────┘
```

**History Tab Features:**
- Complete chronological log of entity actions
- Grouped by month
- Each entry shows: Date/time, Action, Performed by (person + capacity), Additional details
- Filter by action type (filings, document uploads, profile changes)
- Filter by date range
- Export to PDF for audit purposes

---

### 2.3 Entity Profile Information Architecture Summary

| Tab | Purpose | Key Information |
|---|---|---|
| **Overview** | At-a-glance summary | Entity identifiers, compliance status, recent activity |
| **People** | Who's associated | Directors, officers, professionals, signatories |
| **Compliance** | Obligations & status | Pending obligations, upcoming deadlines, compliance history |
| **Filings** | What's been filed | All forms filed with MCA, chronological list |
| **Documents** | Entity records | Incorporation docs, resolutions, financial statements, registers |
| **Transactions** | User's actions | Drafts, in-progress transactions, submission history |
| **Cases** | Disputes/appeals | Active and closed adjudication cases |
| **History** | Audit trail | Complete chronological log of all entity actions |

---

## 3. Relationship Management

### 3.1 Person ↔ Entity Relationship Model

**Relationship Definition:** A Person ↔ Entity relationship defines:
1. **Relationship Type:** Director, Partner, Professional, Authorized Rep, Delegate
2. **Authority Scope:** What the person can do for that entity
3. **Validity Period:** When the relationship is active
4. **Source Document:** Legal basis for relationship (appointment letter, authorization form)

---

### 3.2 Relationship Types

#### 3.2.1 Officer (Director, Partner, Company Secretary)

**Characteristics:**
- **Authority Source:** Inherent (derived from appointment per Companies Act or LLP Act)
- **Authority Scope:** Broad (can perform most entity management actions)
- **Validity:** From appointment date until resignation/removal
- **Source Document:** Board resolution (DIR-12 for appointment, DIR-11 for resignation)

**Example: Director Relationship**
```
Person: Priya Sharma (DIN: 12345678)
Entity: ABC Private Limited (CIN: U12345MH2020PTC123456)
Relationship Type: Director
Appointed: 15 January 2020 (Incorporation)
Status: Active
Authority Scope:
  ✅ File annual returns
  ✅ File financial statements
  ✅ Appoint/remove officers
  ✅ Change registered office
  ✅ Sign documents on behalf of entity
  ✅ Authorize payments
Source Document: Certificate of Incorporation (Subscriber)
```

---

#### 3.2.2 Professional (Chartered Accountant, Company Secretary)

**Characteristics:**
- **Authority Source:** Delegated (entity authorizes professional via Form INC-28 or equivalent)
- **Authority Scope:** Limited to specific services (filing returns, statutory audits)
- **Validity:** From authorization date until revoked or expired
- **Source Document:** Form INC-28 (authorization of professional)

**Example: Professional Relationship**
```
Person: Anil Gupta (ICAI Membership: 098765)
Entity: ABC Private Limited (CIN: U12345MH2020PTC123456)
Relationship Type: Professional (Chartered Accountant)
Authorized: 10 January 2025
Status: Active
Authority Scope:
  ✅ File annual returns (MGT-7)
  ✅ File financial statements (AOC-4)
  ✅ Respond to MCA notices
  🚫 Appoint/remove officers (only directors)
  🚫 Change registered office (only directors)
Source Document: Form INC-28 dated 10 January 2025
Authorized By: Priya Sharma (Director)
Validity: No expiration (until revoked)
```

---

#### 3.2.3 Authorized Representative

**Characteristics:**
- **Authority Source:** Delegated (entity authorizes individual via Form GNL-2 or entity resolution)
- **Authority Scope:** Narrow (specific service or transaction)
- **Validity:** Often time-bound or service-specific
- **Source Document:** Form GNL-2 (authorization of representative)

**Example: Authorized Representative Relationship**
```
Person: Rahul Verma
Entity: ABC Private Limited (CIN: U12345MH2020PTC123456)
Relationship Type: Authorized Representative
Authorized: 1 August 2026
Status: Active
Authority Scope:
  ✅ Collect certified copies of documents
  ✅ Submit responses to MCA queries (for Case No. NCLT/MUM/2026/12345)
  🚫 File annual returns
  🚫 Sign forms on behalf of entity
Source Document: Form GNL-2 dated 1 August 2026
Authorized By: Priya Sharma (Director)
Validity: Until 31 December 2026 (case-specific authorization)
```

---

#### 3.2.4 Delegate / Staff

**Characteristics:**
- **Authority Source:** Delegated by Professional or Officer (not by entity directly)
- **Authority Scope:** Preparatory actions only (draft, upload, no submission/signing)
- **Validity:** Tied to principal's authority (if principal's authority revoked, delegate's access revoked)
- **Source Document:** Internal delegation (not MCA-filed)

**Example: Delegate Relationship**
```
Person: Priya Sharma (Junior CA)
Entity: ABC Private Limited (CIN: U12345MH2020PTC123456)
Relationship Type: Delegate (Staff of Anil Gupta)
Delegated By: Anil Gupta (Chartered Accountant, Principal)
Delegated: 15 August 2026
Status: Active
Authority Scope:
  ✅ Prepare draft filings (MGT-7, AOC-4)
  ✅ Upload documents
  ✅ View entity information
  🚫 Submit filings (requires Anil's signature)
  🚫 Sign documents
  🚫 Authorize payments
Validity: Until Anil Gupta's authorization revoked OR until delegation withdrawn
```

---

### 3.3 Authority Scope Matrix

| Relationship Type | File Returns | Sign Forms | Appoint Officers | Change Address | Authorize Payment | View Entity Info |
|---|---|---|---|---|---|---|
| **Director** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Partner (LLP)** | ✅ | ✅ | ✅ (partners) | ✅ | ✅ | ✅ |
| **Professional (CA/CS)** | ✅ | ✅ | 🚫 | 🚫 | 🚫 | ✅ |
| **Company Secretary** | ✅ | ✅ (specific forms) | 🚫 | 🚫 | 🚫 | ✅ |
| **Authorized Rep** | ⚠️ (limited) | ⚠️ (limited) | 🚫 | 🚫 | 🚫 | ✅ |
| **Delegate/Staff** | 🟡 Draft only | 🚫 | 🚫 | 🚫 | 🚫 | ✅ |

**Legend:**
- ✅ Fully authorized
- ⚠️ Partially authorized (specific services only)
- 🟡 Preparatory actions only (cannot submit)
- 🚫 Not authorized

---

### 3.4 Relationship Management UI

#### 3.4.1 Adding a Relationship (Entity View)

**Scenario:** Director wants to authorize a CA to file returns.

**UI Flow:**

```
Entity Profile > People Tab > [ + Add Authorized Professional ]

┌────────────────────────────────────────────────────────┐
│ Authorize Professional                                 │
│                                                         │
│ Entity: ABC PRIVATE LIMITED                            │
│                                                         │
│ Professional Type:                                     │
│ ● Chartered Accountant                                │
│ ○ Company Secretary                                   │
│ ○ Cost Accountant                                     │
│                                                         │
│ Search Professional:                                   │
│ [ Search by name or membership number... ]             │
│                                                         │
│ Selected: Anil Gupta (ICAI Membership: 098765)         │
│                                                         │
│ Authority Scope:                                       │
│ [✓] File annual returns (MGT-7, Form 8, etc.)         │
│ [✓] File financial statements (AOC-4)                 │
│ [✓] Respond to MCA notices                            │
│ [ ] File director KYC (DIR-3 KYC)                     │
│                                                         │
│ Validity Period:                                       │
│ From: [ 1 Sep 2026 ]                                   │
│ Until: [ No expiration ▾ ] (or select end date)       │
│                                                         │
│ This will generate Form INC-28 for digital signature. │
│                                                         │
│ [Cancel] [Authorize Professional]                      │
│                                                         │
└────────────────────────────────────────────────────────┘
```

**Post-Authorization:**
- Form INC-28 generated
- Director signs INC-28 digitally
- INC-28 filed with MCA
- Professional's access granted
- Professional sees ABC Pvt Ltd in their Available Entities list

---

#### 3.4.2 Viewing Relationships (Entity View)

**Entity Profile > People Tab** (see section 2.2.3 for full UI)

Shows all relationships for entity:
- Directors with appointment dates, status
- Professionals with authorization details, authority scope
- Authorized Representatives with specific grants

---

#### 3.4.3 Revoking a Relationship

**Scenario:** Entity wants to revoke CA's authorization.

**UI Flow:**

```
Entity Profile > People Tab > Anil Gupta (Professional) > [Revoke]

┌────────────────────────────────────────────────────────┐
│ ⚠️  Revoke Professional Authorization                  │
│                                                         │
│ Entity: ABC PRIVATE LIMITED                            │
│                                                         │
│ Professional: Anil Gupta (Chartered Accountant)        │
│ ICAI Membership: 098765                                │
│                                                         │
│ Current Authorization:                                 │
│ Authorized: 10 January 2025                            │
│ Authority Scope: File annual returns, financial        │
│                 statements, respond to notices         │
│                                                         │
│ Revoking this authorization will:                      │
│  • File updated Form INC-28 with MCA                   │
│  • Remove Anil's access to this entity                 │
│  • Anil will no longer appear as authorized professional│
│  • Any in-progress drafts by Anil will remain saved    │
│                                                         │
│ [✓] I confirm revocation of authorization              │
│                                                         │
│ [Cancel] [Revoke Authorization]                        │
│                                                         │
└────────────────────────────────────────────────────────┘
```

**Post-Revocation:**
- Updated INC-28 generated and filed
- Professional's access removed
- Entity removed from professional's Available Entities
- Applies Rule EC-12 (entity context invalidated when relationship changes)

---

### 3.5 Delegation Model (Professional → Staff)

#### 3.5.1 Professional Delegates Work to Staff

**Scenario:** Anil (CA) delegates "Prepare MGT-7 for ABC Pvt Ltd" to Priya (Junior CA on his team).

**Delegation UI (Anil's View):**

```
Entity: ABC Private Limited > Compliance > MGT-7 > [Assign to Staff]

┌────────────────────────────────────────────────────────┐
│ Assign Task to Staff                                   │
│                                                         │
│ Entity: ABC PRIVATE LIMITED                            │
│ Task: Prepare MGT-7 Annual Return (FY 2025-26)         │
│                                                         │
│ Assign to:                                             │
│ ○ Priya Sharma (Junior CA)                            │
│ ○ Rahul Verma (Junior CA)                             │
│                                                         │
│ Priya will be able to:                                 │
│  ✅ View entity information (limited to compliance tab)│
│  ✅ Create and edit MGT-7 draft                       │
│  ✅ Upload documents                                  │
│  🚫 Submit filing (requires your signature)           │
│  🚫 View financial details beyond what's in MGT-7     │
│                                                         │
│ Due Date: [ 3 September 2026 ]                         │
│                                                         │
│ [Cancel] [Assign Task]                                 │
│                                                         │
└────────────────────────────────────────────────────────┘
```

**Priya's View After Assignment:**

```
My Tasks (from Anil Gupta):

┌────────────────────────────────────────────────────────┐
│ Prepare MGT-7 Annual Return                            │
│ Entity: ABC PRIVATE LIMITED                            │
│ Delegated by: Anil Gupta (Principal)                   │
│ Due: 3 September 2026 (in 5 days)                      │
│                                                         │
│ [Start Working on Draft]                               │
│                                                         │
└────────────────────────────────────────────────────────┘
```

**Priya's Access Scope:**
- Can view ABC Pvt Ltd in "Delegated Entities" (separate from own client list)
- Can access only MGT-7 transaction (not full entity profile)
- Can prepare draft, save, upload documents
- CANNOT submit (Submit button disabled with message "Requires Anil Gupta's signature")

**Anil's Review:**
- Priya marks draft "Ready for Review"
- Anil receives notification
- Anil reviews draft, signs, submits
- Transaction audit trail shows: "Prepared by: Priya Sharma (Delegate), Signed by: Anil Gupta (Chartered Accountant)"

---

## 4. Architecture Traceability

### 4.1 Rules Applied in This Part

| Rule | Implementation in Part 4 |
|---|---|
| **EC-01** | Multi-entity dashboard requires entity selection before transactional actions |
| **EC-04** | Authority scope matrix (Professional vs Director authority differences) |
| **EC-08** | Multi-entity dashboard (null entity context for cross-entity view) |
| **EC-12** | Relationship revocation removes entity from Available Entities |
| **EC-13** | Multi-role users (e.g., Director + Professional) handled in entity selection |

---

### 4.2 Phase 2 Concepts Implemented

| Phase 2 Concept | Part 4 Implementation |
|---|---|
| **Entity** | Entity profile structure (canonical view), entity grouping (client hierarchies) |
| **Role** | Relationship types (Director, Professional, Authorized Rep, Delegate) |
| **Authority** | Authority scope matrix (what each role can do), delegation model |
| **Delegation** | Professional → Staff delegation with limited authority |
| **Obligation** | Cross-entity obligation dashboard, compliance tracking |

---

## 5. Document Status

**Completion Status:** ✅ PART 4 COMPLETE

**What This Part Established:**
1. ✅ Professional/Multi-Entity Experience (5, 20, 100+ entity scenarios with specific UI patterns)
2. ✅ Cross-Entity Obligation Dashboard (compliance tracking across portfolio)
3. ✅ Advanced Filtering and Search (multi-dimensional filters, saved views, entity grouping)
4. ✅ Delegation Model (professional → staff with limited authority)
5. ✅ Entity Queues and Task Assignment (team coordination for large firms)
6. ✅ Entity Profile Structure (8-tab canonical view: Overview, People, Compliance, Filings, Documents, Transactions, Cases, History)
7. ✅ Relationship Management (Person ↔ Entity model with 5 relationship types, authority scope matrix)
8. ✅ Client Hierarchy (entity grouping for multi-entity clients)
9. ✅ Role-Based Access Control (team member assignment with portfolio-based access)

**What This Part Did NOT Cover:**
- ⏳ Edge case stress testing (detailed in PART 5)
- ⏳ Model validation against personas (detailed in PART 5)
- ⏳ Architecture traceability matrix (comprehensive, detailed in PART 5)

---

## 6. Next Steps

**Proceed to:**  
**PART 5: Edge Cases & Validation**

**Part 5 Will Define:**
- Edge case scenarios (no entities, authority expires, entity struck off during transaction, etc.)
- Model stress test (validate against 8+ persona scenarios)
- Complete architecture traceability matrix (every decision mapped to Phase 2 concepts)
- Pass/fail assessment per scenario
- Production readiness assessment

**Dependency:** Part 5 validates and stress-tests the complete model established in Parts 1-4.

---

**END OF PART 4**
