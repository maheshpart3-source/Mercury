# Entity-Centric Experience Model
## PART 2: Interaction & Persistence Model

**Document ID:** ECEM-PART-2  
**Version:** 1.0  
**Date:** 28 August 2026  
**Status:** DRAFT  
**Phase:** Phase 3 — Product Definition & Experience Architecture

---

## Document Purpose

This document defines HOW the entity context model (established in Part 1) behaves in real user interactions. It specifies:
- Entity selection mechanisms (first login, search, switching)
- Entity switching rules and workflows
- Context persistence (cross-page, cross-session, deep links)
- Session management (timeout, re-authentication)
- Unfinished transaction handling

**This Part Inherits:**
- All canonical definitions from Part 1 (Identity, Role, Authority, Entity, Active/Available Entities)
- All Entity-Context Rules (EC-01 through EC-15)

**This Part Extends:**
- Interaction patterns that implement the behavioural contract
- UI workflows that enforce the rules
- Persistence logic that maintains context integrity

---

## 1. Entity Selection and Switching

### 1.1 First Authenticated Entry

#### 1.1.1 Scenario: User Logs In for First Time in Session

**Initial State:**
- User authenticates successfully
- Identity verified
- Session created
- Active Entity = NULL

**System Behavior:**

**Option A: User Has Zero Available Entities**
```
┌────────────────────────────────────────────────────────┐
│ Welcome to MCA Digital Platform                        │
│                                                         │
│ You don't have any entities yet.                       │
│                                                         │
│ What would you like to do?                             │
│                                                         │
│ [ Start a New Company ]                                │
│ [ Register an LLP ]                                    │
│ [ Link to Existing Entity ]                           │
│ [ Browse Public Registry ]                            │
│                                                         │
└────────────────────────────────────────────────────────┘
```

**Available Actions:**
- Start incorporation workflow (creates entity)
- Link to existing entity (if user is director/professional but not yet linked in platform)
- Browse public registry (non-transactional, no entity context required per EC-08)

---

**Option B: User Has Exactly One Available Entity**

**Behavior: Auto-Select with Confirmation**

```
┌────────────────────────────────────────────────────────┐
│ Welcome back, Priya Sharma                             │
│                                                         │
│ Your entity:                                           │
│                                                         │
│  ABC PRIVATE LIMITED                                   │
│  CIN: U12345MH2020PTC123456                           │
│  Your role: Director                                   │
│                                                         │
│ [ Continue to Workspace ]                              │
│                                                         │
│ Or: [ Browse Public Registry ]                         │
│                                                         │
└────────────────────────────────────────────────────────┘
```

**Rationale:**
- Single entity = no ambiguity
- Auto-select reduces friction
- User can still choose public registry if they want non-entity-specific browsing

**On "Continue to Workspace":**
- Active Entity set to ABC Pvt Ltd
- User taken to entity-centric workspace (obligations, recent activity, quick actions)

---

**Option C: User Has Multiple Available Entities (2-5 entities)**

**Behavior: Entity Selection Required**

```
┌────────────────────────────────────────────────────────┐
│ Welcome back, Rajesh Kumar                             │
│                                                         │
│ Select an entity to continue:                          │
│                                                         │
│  ○ ABC PRIVATE LIMITED (Director)                     │
│    CIN: U12345MH2020PTC123456                         │
│    3 pending obligations                               │
│                                                         │
│  ○ XYZ TECHNOLOGIES LLP (Professional - CA)           │
│    LLPIN: AAA-1234                                    │
│    1 pending obligation                                │
│                                                         │
│  ○ DEF INDUSTRIES LTD (Authorized Representative)     │
│    CIN: U67890DL2018PTC987654                         │
│    No pending obligations                              │
│                                                         │
│ [ Continue ] [ Browse Public Registry Instead ]        │
│                                                         │
└────────────────────────────────────────────────────────┘
```

**Selection Behavior:**
- User must click one entity (radio button or clickable card)
- "Continue" button enabled only after selection
- Shows pending obligation count for decision support
- Shows user's role per entity

**On "Continue":**
- Active Entity set to selected entity
- User taken to entity-centric workspace for that entity

---

**Option D: User Has Many Available Entities (6+ entities, professional use case)**

**Behavior: Search-First Entity Selection**

```
┌────────────────────────────────────────────────────────┐
│ Welcome back, Meera Desai (Chartered Accountant)       │
│                                                         │
│ You manage 47 entities.                                │
│                                                         │
│ [ Search entities... ]                                 │
│                                                         │
│ Recently Used:                                         │
│  • ABC Private Limited (CIN: U12345MH2020PTC123456)   │
│  • XYZ Technologies LLP (LLPIN: AAA-1234)             │
│  • GHI Manufacturing Ltd (CIN: U11111KA2019PTC222222) │
│                                                         │
│ Entities with Pending Obligations (12):               │
│  • JKL Exports Ltd — MGT-7 due in 5 days              │
│  • MNO Retail Pvt Ltd — AOC-4 overdue                 │
│  [ View All ]                                          │
│                                                         │
│ [ Browse All Entities ] [ View Multi-Entity Dashboard ]│
│                                                         │
└────────────────────────────────────────────────────────┘
```

**Features for Professional Users:**
- **Search box** (front and center for quick entity access)
- **Recently Used Entities** (last 3-5 accessed)
- **Entities with Pending Obligations** (prioritized list)
- **Multi-Entity Dashboard option** (see Part 4 for details)

**On Entity Selection:**
- User clicks an entity from recent/pending lists OR searches and selects
- Active Entity set to selected entity
- User taken to entity-centric workspace for that entity

**Multi-Entity Dashboard:**
- User clicks "View Multi-Entity Dashboard"
- Active Entity remains NULL (dashboard is cross-entity view)
- User sees obligations, recent transactions, filing deadlines across ALL entities
- User can drill into specific entity from dashboard (sets Active Entity at that point)

---

#### 1.1.2 Entity Selection from Direct Link / Notification

**Scenario:** User receives email notification: "MGT-7 due for ABC Private Limited in 7 days"  
User clicks link in email.

**System Behavior:**

1. **User Not Authenticated:**
   - Redirect to login
   - After authentication, proceed to step 2

2. **User Authenticated, Link Contains Entity Context:**
   - Extract entity identifier (CIN) from URL
   - Verify user has active role for that entity
   - If YES:
     - Set Active Entity to specified entity
     - Display notification/transaction context
     - Show entity context prominently: "You are viewing obligations for ABC PRIVATE LIMITED"
   - If NO (user not authorized for that entity):
     - Display error: "You do not have access to ABC Private Limited."
     - Offer: "Return to your entities" or "Browse public registry"

3. **Link Does Not Contain Entity Context (e.g., generic "View My Obligations"):**
   - Treat as first authenticated entry (Option B/C/D above)
   - User must select entity before viewing obligations

**Applies Rule:** EC-10 (Explicit entity context for deep links)

---

### 1.2 Entity Search and Filtering (Professional Use Case)

#### 1.2.1 Search Interface

**Context:** Professional with 20+ entities needs to find a specific entity quickly.

**Search Box Behavior:**

```
┌────────────────────────────────────────────────────────┐
│ [ 🔍 Search your entities...                        ]  │
└────────────────────────────────────────────────────────┘

User types: "tech"

┌────────────────────────────────────────────────────────┐
│ Search Results (3):                                    │
│                                                         │
│  XYZ Technologies LLP                                  │
│  LLPIN: AAA-1234 · Your role: Professional (CA)       │
│  1 pending obligation                                  │
│                                                         │
│  Advanced Tech Solutions Pvt Ltd                       │
│  CIN: U72900KA2021PTC145678 · Your role: Professional │
│  No pending obligations                                │
│                                                         │
│  Biotech Innovations Ltd                               │
│  CIN: U24100MH2019PLC334455 · Your role: Professional │
│  3 pending obligations                                 │
│                                                         │
└────────────────────────────────────────────────────────┘
```

**Search Fields:**
- Entity legal name (primary)
- CIN / LLPIN (secondary)
- Entity type (filter: Company, LLP, Foreign Company)
- User's role for entity (filter: Director, Professional, etc.)

**Search Algorithm:**
- Fuzzy match on entity name (handles typos, partial names)
- Exact match on CIN/LLPIN (if user types identifier format)
- Results ranked by:
  1. Pending obligations (entities with overdue/upcoming obligations first)
  2. Recent activity (recently accessed entities)
  3. Alphabetical name

---

#### 1.2.2 Filtering (Professional Dashboard Context)

**Context:** Professional viewing multi-entity dashboard wants to filter by obligation status.

**Filter Options:**

```
┌────────────────────────────────────────────────────────┐
│ Your Entities (47)                                     │
│                                                         │
│ Filter by:                                             │
│  [ ] Pending Obligations (12)                         │
│  [ ] Overdue Obligations (3)                          │
│  [ ] No Obligations (35)                              │
│                                                         │
│ Filter by Role:                                        │
│  [ ] Professional (40)                                │
│  [ ] Director (5)                                     │
│  [ ] Authorized Representative (2)                    │
│                                                         │
│ Filter by Entity Type:                                 │
│  [ ] Private Company (30)                             │
│  [ ] LLP (15)                                         │
│  [ ] Public Company (2)                               │
│                                                         │
│ Sort by:                                               │
│  ( ) Obligations Due Date                             │
│  ( ) Entity Name                                      │
│  ( ) Recent Activity                                  │
│                                                         │
└────────────────────────────────────────────────────────┘
```

**Filter Behavior:**
- Filters are cumulative (checkboxes = AND logic)
- Filter state persists within session (user returns to dashboard, filters remain applied)
- Filter state does NOT persist across sessions (reset on fresh login)

---

#### 1.2.3 Saved Views / Favourites

**Use Case:** Professional frequently works with a subset of entities (e.g., "High-Value Clients" or "Entities with Upcoming AGMs").

**Feature: Saved Entity Groups**

```
┌────────────────────────────────────────────────────────┐
│ Your Entity Groups:                                    │
│                                                         │
│  ⭐ High-Value Clients (8)                            │
│  ⭐ Entities with Q1 Filings Due (15)                 │
│  ⭐ New Clients Onboarded This Month (3)              │
│                                                         │
│ [ + Create New Group ]                                 │
│                                                         │
└────────────────────────────────────────────────────────┘
```

**Group Creation:**
- User selects entities from full list
- Names the group
- Group saved to user profile (account-level preference)

**Group Usage:**
- User clicks group name
- Dashboard filters to show only entities in that group
- User can select entity from filtered list to set Active Entity

**Persistence:**
- Saved groups persist across sessions (stored in user profile)
- Group membership updated automatically if entity is removed from user's available entities

---

### 1.3 Entity Switching

#### 1.3.1 Entity Switcher UI Component

**Location:** Persistent header (visible on all authenticated pages except during active transaction)

**Compact State (Entity Selected):**

```
┌────────────────────────────────────────────────────────┐
│ MCA Platform    [ ABC PRIVATE LIMITED ▾ ]    [Account]│
└────────────────────────────────────────────────────────┘
```

**Expanded State (User Clicks Dropdown):**

```
┌────────────────────────────────────────────────────────┐
│ Current Entity:                                        │
│  ABC PRIVATE LIMITED                                   │
│  CIN: U12345MH2020PTC123456                           │
│  Your role: Director                                   │
│                                                         │
│ Switch to:                                             │
│  ○ XYZ Technologies LLP (Professional - CA)           │
│  ○ DEF Industries Ltd (Director)                      │
│                                                         │
│ [ Search all entities... ]                            │
│                                                         │
│ [ View Multi-Entity Dashboard ]                        │
│                                                         │
└────────────────────────────────────────────────────────┘
```

**Switching Behavior (Normal Case):**
1. User clicks different entity in dropdown
2. System verifies user has active role for that entity (sanity check)
3. Active Entity updated
4. Page reloads with new entity context (OR context updated without reload if technically feasible)
5. User sees workspace for newly selected entity

**Applies Rule:** EC-03 (switching must not silently transfer transactions)

---

#### 1.3.2 Entity Switching with In-Progress Transaction

**Scenario:** User is filling MGT-7 for ABC Pvt Ltd (draft saved).  
User attempts to switch to XYZ Technologies LLP.

**System Behavior: Block Switch with Warning**

```
┌────────────────────────────────────────────────────────┐
│ ⚠️  You have an in-progress transaction                │
│                                                         │
│ MGT-7 Annual Return                                    │
│ Entity: ABC PRIVATE LIMITED                            │
│ Draft saved: 5 minutes ago                             │
│                                                         │
│ If you switch entities now, this draft will remain    │
│ open for ABC Private Limited. You can return to it    │
│ from your Transactions page.                           │
│                                                         │
│ Do you want to switch to XYZ Technologies LLP?         │
│                                                         │
│ [ Cancel ] [ Save Draft & Switch ]                    │
│                                                         │
└────────────────────────────────────────────────────────┘
```

**User Actions:**

1. **Cancel:**
   - Return to in-progress transaction
   - No entity switch occurs
   - Active Entity remains ABC Pvt Ltd

2. **Save Draft & Switch:**
   - System saves draft MGT-7 for ABC Pvt Ltd
   - Transaction state = DRAFT (associated with ABC Pvt Ltd)
   - Active Entity switched to XYZ Technologies LLP
   - User taken to workspace for XYZ Technologies LLP
   - Draft transaction remains accessible from "My Transactions" for ABC Pvt Ltd

**Alternative Flow: Exit Without Saving**

If transaction has auto-save (recommended), user should not lose data. If platform does NOT have auto-save:

```
┌────────────────────────────────────────────────────────┐
│ ⚠️  Unsaved changes                                    │
│                                                         │
│ You have unsaved changes in MGT-7 for ABC Private Ltd. │
│                                                         │
│ [ Discard Changes & Switch ] [ Cancel ]                │
│                                                         │
└────────────────────────────────────────────────────────┘
```

**Applies Rule:** EC-03 (entity switching must not silently transfer transactions)

---

#### 1.3.3 Entity Switching During Consequential Action

**Scenario:** User is on MGT-7 submission confirmation page for ABC Pvt Ltd.  
User attempts to switch entity.

**System Behavior: Block Switch Entirely**

```
┌────────────────────────────────────────────────────────┐
│ ⚠️  Cannot switch entities                             │
│                                                         │
│ You are at a critical step in the MGT-7 submission     │
│ process for ABC PRIVATE LIMITED.                       │
│                                                         │
│ Please complete or cancel this transaction before      │
│ switching entities.                                    │
│                                                         │
│ [ OK ]                                                 │
│                                                         │
└────────────────────────────────────────────────────────┘
```

**Rationale:**
User is at submission confirmation (high-risk consequential action per EC-05). Allowing entity switch at this point creates unacceptable risk of wrong-entity submission.

**Entity Switcher UI State:**
- Entity switcher dropdown DISABLED (grayed out) during consequential action steps
- Tooltip on hover: "Complete current transaction to switch entities"

**Applies Rule:** EC-07 (entity context locked within service lifecycle)

---

#### 1.3.4 Entity Switching from Multi-Entity Dashboard

**Scenario:** Professional viewing multi-entity dashboard (Active Entity = NULL).  
User clicks into specific entity from dashboard.

**System Behavior:**

```
User viewing Multi-Entity Dashboard (47 entities shown).

User clicks: "ABC PRIVATE LIMITED — 3 pending obligations"

┌────────────────────────────────────────────────────────┐
│ Switching to: ABC PRIVATE LIMITED                      │
│                                                         │
│ Loading entity workspace...                            │
│                                                         │
└────────────────────────────────────────────────────────┘

System:
- Sets Active Entity = ABC Pvt Ltd
- Loads entity-centric workspace for ABC Pvt Ltd
- Displays obligations, recent transactions, entity profile
```

**Return to Multi-Entity Dashboard:**
- User clicks "View All Entities" or "Multi-Entity Dashboard" link
- Active Entity set to NULL
- Dashboard view restored

**Applies Rule:** EC-08 (null entity context for multi-entity dashboard, which is a cross-entity view, not a transactional page)

---

### 1.4 Recent and Favourite Entities

#### 1.4.1 Recent Entities

**Definition:** Entities the user has recently set as Active Entity.

**Storage:** Session-level preference (persists across browser sessions for same user)

**Recent Entity List:**
- Last 5 entities accessed
- Ordered by recency (most recent first)
- Displayed in entity switcher dropdown (top of list)
- Displayed on login screen (if user has 6+ entities, see Option D in 1.1.1)

**Update Logic:**
- When user sets Active Entity, that entity is added to front of recent list
- If entity already in list, move it to front (no duplicates)
- Maximum 5 entities in recent list (oldest dropped when new one added)

**Use Case:**
Professional alternates between 3-4 client entities throughout the day. Recent list provides one-click access to those entities without searching through full list.

---

#### 1.4.2 Favourite Entities

**Definition:** Entities the user has explicitly marked as favourites.

**Storage:** User profile (persists indefinitely)

**Favourite Indicator:**
- Star icon next to entity name in entity switcher dropdown
- User can click star to add/remove favourite

**Favourite Entity List:**
- Displayed in entity switcher dropdown (below recent entities, above all others)
- Displayed on login screen (if applicable)
- No limit on number of favourites (user manages list)

**Use Case:**
Professional has 50 client entities but actively manages 10 "high-value clients". Marking those 10 as favourites allows quick access without relying on recent history.

**UI Behavior:**

```
┌────────────────────────────────────────────────────────┐
│ Entity Switcher                                        │
│                                                         │
│ Recent:                                                │
│  • ABC Private Limited (Director)                     │
│  • XYZ Technologies LLP (Professional)                │
│                                                         │
│ Favourites:                                            │
│  ⭐ DEF Industries Ltd (Director)                     │
│  ⭐ GHI Manufacturing Pvt Ltd (Professional)          │
│                                                         │
│ All Entities (47):                                     │
│  • JKL Exports Ltd (Professional)                     │
│  • MNO Retail Pvt Ltd (Professional)                  │
│  ...                                                   │
│                                                         │
│ [ Search entities... ]                                 │
│                                                         │
└────────────────────────────────────────────────────────┘
```

---

## 2. Context Persistence

### 2.1 Cross-Page Persistence

#### 2.1.1 Active Entity Persistence Within Session

**Rule:** Active Entity persists as user navigates between pages within the authenticated workspace.

**Scenario:**

```
User logs in, selects ABC Private Limited as Active Entity.
User navigates: Workspace → Obligations → Transactions → Documents → Entity Profile
Active Entity remains: ABC Private Limited (visible in header throughout)
```

**Implementation:**
- Active Entity stored in session state (server-side session or client-side secure token)
- Every authenticated page load retrieves Active Entity from session
- Entity context displayed in persistent header

**Exception:**
- If user explicitly switches entity (via entity switcher), Active Entity updates for all subsequent page loads
- If user navigates to multi-entity dashboard, Active Entity may be set to NULL (see 1.3.4)

**Applies Rule:** EC-07 (entity context persists within service lifecycle) — extended to general navigation

---

#### 2.1.2 Active Entity Persistence Within Transaction Lifecycle

**Rule:** Active Entity MUST remain unchanged from transaction initiation through submission.

**Transaction Lifecycle Phases:**
1. Service Initiation (user selects form, Active Entity = ABC Pvt Ltd)
2. Data Entry (Active Entity locked to ABC Pvt Ltd)
3. Document Upload (Active Entity locked to ABC Pvt Ltd)
4. Review (Active Entity locked to ABC Pvt Ltd)
5. Submission (Active Entity locked to ABC Pvt Ltd)
6. Acknowledgment (Active Entity still ABC Pvt Ltd)

**UI Enforcement:**
- Entity switcher disabled (grayed out) during phases 2-5
- Enabled again after submission acknowledgment

**Data Enforcement:**
- Transaction record includes entity identifier (immutable)
- Form data saved with entity context metadata
- Submission API verifies entity context matches transaction entity

**Applies Rule:** EC-07 (entity context locked within service lifecycle)

---

### 2.2 Cross-Session Persistence

#### 2.2.1 Active Entity Persistence After Logout/Login

**Rule:** Active Entity MUST NOT automatically persist after user logs out and logs back in.

**Rationale:** Security risk if different user logs in on same device (see EC-11).

**Behavior:**

```
Session 1:
- User logs in
- Selects ABC Private Limited
- Works on MGT-7 draft
- Logs out

Session 2 (Same user, same device, 10 minutes later):
- User logs in again
- Active Entity = NULL (not restored)
- System MAY display: "Recently used: ABC Private Limited" in entity selection screen
- User must explicitly select entity again
```

**Exception: Session Timeout with Automatic Re-Authentication**

If session times out but user never explicitly logged out, AND user re-authenticates within short window (e.g., 10 minutes):

```
Session timeout at 2:30 PM while user on MGT-7 draft page.
User re-authenticates at 2:32 PM.

System MAY restore:
- Active Entity (ABC Pvt Ltd)
- Page context (return to MGT-7 draft)

Reason: User did not log out; this is session extension, not new session.
```

**Applies Rule:** EC-11 (entity context must not span authentication boundaries)

---

#### 2.2.2 Recent Entities Persistence Across Sessions

**Rule:** Recent Entities list DOES persist across sessions (stored in user profile).

**Rationale:** Convenience for returning users. Recent list is NOT security-sensitive (user must still explicitly select entity).

**Behavior:**

```
Session 1:
- User works with ABC Pvt Ltd, XYZ LLP, DEF Industries

Session 2 (Next day):
- User logs in
- Recent Entities shown: ABC Pvt Ltd, XYZ LLP, DEF Industries
- User can click one to set Active Entity
```

**Data Storage:**
- Recent Entities stored server-side in user profile
- Updated on every entity selection
- Persists indefinitely (or until user clears history)

---

#### 2.2.3 Favourite Entities Persistence

**Rule:** Favourite Entities persist across sessions indefinitely (stored in user profile).

**Behavior:**
- User marks entities as favourites
- Favourites displayed in entity switcher and login screen
- Persist until user removes favourite

---

### 2.3 Re-Confirmation Requirements

#### 2.3.1 When Entity Context Must Be Re-Confirmed

**Scenario 1: Long Idle Session (30+ minutes idle)**

User idle for 35 minutes, then attempts to submit MGT-7.

**System Behavior:**
```
┌────────────────────────────────────────────────────────┐
│ ⚠️  Session Idle — Confirm Entity Context              │
│                                                         │
│ You have been idle for 35 minutes.                     │
│                                                         │
│ Please confirm you are still working on:               │
│ ABC PRIVATE LIMITED (CIN: U12345MH2020PTC123456)      │
│ Your role: Director                                    │
│                                                         │
│ [ Confirm & Continue ] [ Switch Entity ]               │
│                                                         │
└────────────────────────────────────────────────────────┘
```

**Rationale:** During long idle period, user may have forgotten which entity they were working on. Explicit re-confirmation prevents accidental submission.

**Applies Rule:** EC-09 (authority reevaluated after idle session)

---

**Scenario 2: Deep Link Access After Session Expiry**

User clicks bookmarked link: "MGT-7 Draft for ABC Pvt Ltd"  
User's session has expired.

**System Behavior:**
```
1. Redirect to login
2. User authenticates
3. System restores transaction context (MGT-7 draft)
4. System displays:

┌────────────────────────────────────────────────────────┐
│ Restoring Your Work                                    │
│                                                         │
│ You are returning to:                                  │
│ MGT-7 Annual Return (Draft)                            │
│ For: ABC PRIVATE LIMITED                               │
│                                                         │
│ Your role: Director                                    │
│                                                         │
│ [ Continue ] [ Select Different Entity ]               │
│                                                         │
└────────────────────────────────────────────────────────┘
```

**Rationale:** User may have forgotten the context of the bookmarked link. Explicit confirmation prevents confusion.

**Applies Rule:** EC-10 (explicit entity context for deep links)

---

**Scenario 3: Authority Change Detected**

User was authorized as Professional for ABC Pvt Ltd.  
User's professional authorization expires while user is idle.  
User attempts to submit form.

**System Behavior:**
```
┌────────────────────────────────────────────────────────┐
│ ⚠️  Authorization Expired                              │
│                                                         │
│ Your professional authorization for ABC PRIVATE LIMITED│
│ expired on 25 August 2026.                             │
│                                                         │
│ You can no longer submit forms on behalf of this entity.│
│                                                         │
│ [ Save Draft & Exit ] [ View Authorization Details ]   │
│                                                         │
└────────────────────────────────────────────────────────┘
```

**Action:**
- Block consequential action (submit)
- Allow user to save draft (preparatory action)
- Provide guidance to renew authorization

**Applies Rule:** EC-09 (authority reevaluated after idle session)

---

#### 2.3.2 What Does NOT Require Re-Confirmation

**Scenario: Normal Page Navigation Within Active Session**

User selects ABC Pvt Ltd, navigates: Workspace → Obligations → Transactions.

**System Behavior:**
- Entity context persists without re-confirmation
- Entity displayed in header on each page
- No interruption to user flow

**Rationale:** User explicitly selected entity and is actively navigating. Repeated confirmation creates unnecessary friction.

---

**Scenario: Returning to Transaction Within Same Session**

User working on MGT-7 draft for ABC Pvt Ltd, saves draft, navigates to Documents page, then returns to MGT-7 draft 5 minutes later.

**System Behavior:**
- Draft loaded with entity context intact
- No re-confirmation required (session still active, no idle threshold crossed)

---

### 2.4 Context Invalidation Triggers

#### 2.4.1 When Entity Context MUST Be Invalidated

**Trigger 1: Entity Status Change to Inactive/Struck Off**

```
User has ABC Pvt Ltd as Active Entity.
MCA system marks ABC Pvt Ltd as STRUCK OFF.

System Behavior:
- Detect entity status change (via periodic sync or real-time notification)
- Invalidate Active Entity context
- If user is on entity-specific page:
  
  ┌────────────────────────────────────────────────────────┐
  │ ⚠️  Entity Status Changed                              │
  │                                                         │
  │ ABC PRIVATE LIMITED has been struck off from the MCA   │
  │ registry.                                               │
  │                                                         │
  │ You can no longer perform transactional actions for    │
  │ this entity.                                            │
  │                                                         │
  │ [ View Entity Details ] [ Select Different Entity ]    │
  │                                                         │
  └────────────────────────────────────────────────────────┘
```

**Post-Invalidation:**
- Remove entity from Available Entities list (for transactional actions)
- User can still search entity in public registry (read-only)
- Any in-progress transactions for that entity marked as ABANDONED (cannot be submitted)

**Applies Rule:** EC-12 (entity context invalidated when entity state changes)

---

**Trigger 2: User's Role for Entity Removed/Revoked**

```
User is Professional (CA) for XYZ Technologies LLP.
Entity revokes professional authorization (Form INC-28 withdrawn).

System Behavior:
- Detect authorization revocation
- If XYZ LLP is Active Entity:
  
  ┌────────────────────────────────────────────────────────┐
  │ ⚠️  Authorization Revoked                              │
  │                                                         │
  │ Your professional authorization for XYZ TECHNOLOGIES   │
  │ LLP has been revoked.                                  │
  │                                                         │
  │ You can no longer act on behalf of this entity.        │
  │                                                         │
  │ [ View Details ] [ Select Different Entity ]           │
  │                                                         │
  └────────────────────────────────────────────────────────┘
```

**Post-Invalidation:**
- Remove entity from Available Entities
- Invalidate Active Entity
- User redirected to entity selection screen

**Applies Rule:** EC-12 (entity context invalidated when relationship changes)

---

**Trigger 3: User's Officer Resignation Processed**

```
User is Director of ABC Pvt Ltd.
User files DIR-11 (resignation).
Resignation is accepted by MCA.

System Behavior:
- Mark user's Director role for ABC Pvt Ltd as INACTIVE (effective date = resignation date)
- If user attempts transactional action after resignation date:
  
  ┌────────────────────────────────────────────────────────┐
  │ ⚠️  You are no longer a Director                       │
  │                                                         │
  │ Your resignation as Director of ABC PRIVATE LIMITED    │
  │ was effective 20 August 2026.                          │
  │                                                         │
  │ You can no longer act on behalf of this entity.        │
  │                                                         │
  │ [ View Resignation Details ] [ Select Different Entity]│
  │                                                         │
  └────────────────────────────────────────────────────────┘
```

**Note:** If user has multiple roles for same entity (e.g., also Professional), only Director role invalidated. User can still act as Professional.

---

**Trigger 4: Session Timeout (Automatic Re-Authentication Fails)**

```
User idle for 60 minutes.
Session expires.
User attempts action.

System Behavior:
- Clear session state (including Active Entity)
- Redirect to login
- After re-authentication, Active Entity = NULL (per EC-11)
- User must select entity again
```

---

#### 2.4.2 What Does NOT Trigger Context Invalidation

**Non-Trigger: Entity Information Update (Name, Address, etc.)**

Entity changes registered office address. This does NOT invalidate entity context (entity remains active, user's authority unchanged).

---

**Non-Trigger: User's Personal Information Update**

User changes email address or phone number in account settings. This does NOT invalidate entity context.

---

**Non-Trigger: New Entity Added to User's Available Entities**

User is appointed Director of a new entity. This ADDS to Available Entities but does NOT invalidate current Active Entity.

---

### 2.5 Deep Links and Bookmarked Transactions

#### 2.5.1 Deep Link Structure

**Recommended URL Pattern:**

```
https://mca.gov.in/workspace/entity/{CIN}/transaction/{TRANSACTION_ID}

Example:
https://mca.gov.in/workspace/entity/U12345MH2020PTC123456/transaction/TXN-MGT7-2026-001234
```

**URL Components:**
- `{CIN}`: Entity identifier (explicit entity context)
- `{TRANSACTION_ID}`: Unique transaction identifier

**Benefits:**
- Entity context is EXPLICIT in URL (not implicit)
- Bookmarking URL captures entity context
- Sharing URL communicates entity context clearly

---

#### 2.5.2 Deep Link Access Flow

**Scenario:** User bookmarks MGT-7 draft, returns 3 days later.

**System Behavior:**

1. **User Clicks Bookmark URL**
   - Extract CIN from URL: `U12345MH2020PTC123456`
   - Extract Transaction ID from URL: `TXN-MGT7-2026-001234`

2. **Check Authentication**
   - If user not authenticated: redirect to login
   - After login, proceed to step 3

3. **Verify User Authority for Entity**
   ```
   EVALUATE_AUTHORITY(User_Identity, CIN, Action = "VIEW_TRANSACTION")
   ```
   - If user has authority: proceed to step 4
   - If user does NOT have authority:
     ```
     ┌────────────────────────────────────────────────────────┐
     │ ⚠️  Access Denied                                      │
     │                                                         │
     │ You do not have access to ABC PRIVATE LIMITED.         │
     │                                                         │
     │ [ Return to My Entities ]                              │
     │                                                         │
     └────────────────────────────────────────────────────────┘
     ```

4. **Load Transaction with Entity Context**
   - Set Active Entity = ABC Pvt Ltd
   - Load transaction data (MGT-7 draft)
   - Display entity context prominently:
     ```
     ┌────────────────────────────────────────────────────────┐
     │ MGT-7 Annual Return (Draft)                            │
     │ For: ABC PRIVATE LIMITED (CIN: U12345MH2020PTC123456) │
     │ Your role: Director                                    │
     │                                                         │
     │ Last saved: 3 days ago                                 │
     │                                                         │
     │ [ Resume Editing ]                                     │
     │                                                         │
     └────────────────────────────────────────────────────────┘
     ```

**Applies Rule:** EC-10 (explicit entity context for deep links)

---

#### 2.5.3 Stale Transaction Handling

**Scenario:** User bookmarks MGT-7 draft. Entity is struck off before user returns to draft.

**System Behavior:**

1. User clicks bookmark
2. System loads transaction, detects entity status = STRUCK OFF
3. Display:
   ```
   ┌────────────────────────────────────────────────────────┐
   │ ⚠️  This transaction cannot be completed               │
   │                                                         │
   │ ABC PRIVATE LIMITED has been struck off.               │
   │                                                         │
   │ This draft MGT-7 cannot be submitted.                  │
   │                                                         │
   │ You may view the draft for your records.               │
   │                                                         │
   │ [ View Draft (Read-Only) ] [ Delete Draft ]            │
   │                                                         │
   └────────────────────────────────────────────────────────┘
   ```

**Rationale:** Transaction is entity-bound. If entity becomes invalid, transaction cannot be completed.

---

#### 2.5.4 Shared Deep Links (Multi-User Scenario)

**Scenario:** User A (Director of ABC Pvt Ltd) sends deep link to User B (also Director of ABC Pvt Ltd).

**System Behavior:**

User B clicks link:
1. Extract entity context from URL (ABC Pvt Ltd)
2. Verify User B has authority for ABC Pvt Ltd (YES, User B is also Director)
3. Load transaction for ABC Pvt Ltd
4. User B can view/edit transaction (if permissions allow collaborative editing)

**Alternative Scenario:** User A sends link to User C (NOT associated with ABC Pvt Ltd).

User C clicks link:
1. Extract entity context from URL (ABC Pvt Ltd)
2. Verify User C has authority for ABC Pvt Ltd (NO)
3. Display "Access Denied" message

**Security Note:** Deep links containing entity identifiers are NOT a security vulnerability if authorization is correctly enforced (per EC-04). Entity identifier (CIN) is public information. Authorization check prevents unauthorized access.

---

### 2.6 Session Timeout and Re-Authentication

#### 2.6.1 Session Timeout Thresholds

**Recommended Thresholds:**

| Timeout Type | Duration | Behavior |
|---|---|---|
| **Idle Warning** | 25 minutes | Display warning: "Your session will expire in 5 minutes" |
| **Idle Timeout** | 30 minutes | Lock session, require re-authentication |
| **Absolute Timeout** | 8 hours | Force logout regardless of activity |

**Rationale:**
- 30-minute idle timeout balances security and usability (user steps away for lunch, must re-authenticate)
- 8-hour absolute timeout prevents indefinite sessions (shared/public computers)

---

#### 2.6.2 Idle Warning Dialog

**Scenario:** User idle for 25 minutes.

**System Behavior:**

```
┌────────────────────────────────────────────────────────┐
│ ⏱️  Session Expiring Soon                              │
│                                                         │
│ Your session will expire in 5 minutes due to inactivity.│
│                                                         │
│ [ Stay Logged In ] [ Log Out ]                         │
│                                                         │
└────────────────────────────────────────────────────────┘
```

**User Actions:**
- **Stay Logged In:** Session extended, timer reset to 0 minutes idle
- **Log Out:** User logs out immediately, entity context cleared

**Auto-Save During Warning:**
If user has unsaved draft, system auto-saves when warning appears (to prevent data loss if user ignores warning and session expires).

---

#### 2.6.3 Session Timeout and Transaction Recovery

**Scenario:** User filling MGT-7 draft, idle for 35 minutes, session times out.

**System Behavior:**

1. **Session Expires**
   - Clear session state (Active Entity = NULL)
   - Lock screen displayed:
     ```
     ┌────────────────────────────────────────────────────────┐
     │ 🔒 Session Expired                                     │
     │                                                         │
     │ Your session expired due to inactivity.                │
     │                                                         │
     │ Please log in again to continue.                       │
     │                                                         │
     │ [ Log In ]                                             │
     │                                                         │
     └────────────────────────────────────────────────────────┘
     ```

2. **User Re-Authenticates**
   - User logs in
   - System detects incomplete transaction associated with user
   - Display:
     ```
     ┌────────────────────────────────────────────────────────┐
     │ Resume Your Work?                                      │
     │                                                         │
     │ You have an incomplete transaction:                    │
     │ MGT-7 Annual Return (Draft)                            │
     │ For: ABC PRIVATE LIMITED                               │
     │                                                         │
     │ Last saved: 35 minutes ago (auto-saved)                │
     │                                                         │
     │ [ Resume ] [ Dismiss ]                                 │
     │                                                         │
     └────────────────────────────────────────────────────────┘
     ```

3. **User Clicks "Resume"**
   - Set Active Entity = ABC Pvt Ltd
   - Load MGT-7 draft (data restored from auto-save)
   - User continues editing

4. **User Clicks "Dismiss"**
   - Draft remains saved (accessible from My Transactions)
   - User taken to entity selection screen (Active Entity = NULL)

**Applies Rule:** EC-15 (entity context recoverable after system error/interruption)

---

#### 2.6.4 Absolute Session Timeout

**Scenario:** User logged in for 8 hours (even if continuously active).

**System Behavior:**

```
┌────────────────────────────────────────────────────────┐
│ 🔒 Maximum Session Duration Reached                    │
│                                                         │
│ For security reasons, you must log in again after 8    │
│ hours.                                                  │
│                                                         │
│ Your work has been saved.                              │
│                                                         │
│ [ Log In Again ]                                       │
│                                                         │
└────────────────────────────────────────────────────────┘
```

**Post-Logout:**
- Any in-progress transaction auto-saved
- Active Entity cleared
- User must re-authenticate and select entity to continue

**Rationale:** Prevents indefinite sessions on shared/public computers (security best practice).

---

## 3. Interaction Patterns Summary

### 3.1 Entity Selection Patterns

| User Profile | Available Entities | Selection Pattern |
|---|---|---|
| **New User** | 0 | Onboarding: Start incorporation or link to existing entity |
| **Individual Filer** | 1 (self) | Auto-select with confirmation |
| **Small Company Director** | 1-2 | Radio button selection, one-click continue |
| **Multi-Company Director** | 3-5 | List selection with obligation indicators |
| **Professional (Small Practice)** | 6-20 | Search + recent + favourites |
| **Professional (Large Firm)** | 20+ | Search-first + saved groups + multi-entity dashboard |

---

### 3.2 Entity Switching Patterns

| Context | Switching Behavior |
|---|---|
| **Normal navigation** | Dropdown switcher, immediate switch |
| **In-progress draft transaction** | Warning dialog, save & switch or cancel |
| **Consequential action (submit, pay, sign)** | Switcher disabled, block switch entirely |
| **Multi-entity dashboard** | Click entity card, set Active Entity |

---

### 3.3 Context Persistence Patterns

| Context | Persistence Behavior |
|---|---|
| **Within session (same login)** | Persists across all pages |
| **Within transaction** | Locked, cannot change |
| **Across logout/login** | Does NOT persist (must re-select) |
| **Session timeout with re-auth (< 10 min)** | MAY restore if resuming transaction |
| **Recent entities** | Persist across sessions (stored in profile) |
| **Favourite entities** | Persist indefinitely |

---

### 3.4 Re-Confirmation Patterns

| Trigger | Re-Confirmation Required? |
|---|---|
| **Long idle (30+ min), then consequential action** | YES |
| **Deep link access after session expiry** | YES |
| **Authority change detected** | YES (if attempting consequential action) |
| **Normal page navigation (active session)** | NO |
| **Returning to draft (same session, < 30 min)** | NO |

---

### 3.5 Context Invalidation Patterns

| Trigger | Invalidation Behavior |
|---|---|
| **Entity struck off** | Remove from Available Entities, invalidate Active Entity, block transactional actions |
| **User's role revoked** | Remove entity from Available Entities, invalidate Active Entity |
| **Officer resignation processed** | Invalidate role, allow read-only access if no other roles |
| **Session timeout** | Clear Active Entity, require re-selection |
| **Entity info update (address, etc.)** | NO invalidation |
| **New entity added to user's list** | NO invalidation (adds to Available Entities) |

---

## 4. Architecture Traceability

### 4.1 Rules Applied in This Part

This part implements and extends the following rules from Part 1:

| Rule | Implementation in Part 2 |
|---|---|
| **EC-01** | Entity selection required before transactional actions; null entity state for new users |
| **EC-02** | Entity displayed in persistent header; entity context shown in confirmation dialogs |
| **EC-03** | Entity switching blocked/warned during in-progress transactions |
| **EC-04** | Authority verified on deep link access; reevaluated after idle session |
| **EC-06** | Entity switching allowed between services (no auto-transfer of context) |
| **EC-07** | Entity context locked within transaction lifecycle; switcher disabled during consequential steps |
| **EC-08** | Null entity context allowed for public registry, multi-entity dashboard |
| **EC-09** | Authority reevaluated after 30-minute idle threshold |
| **EC-10** | Deep link entity context explicitly loaded and displayed |
| **EC-11** | Entity context cleared on logout; not restored on fresh login |
| **EC-12** | Entity context invalidated when entity struck off or role revoked |
| **EC-15** | Transaction recovery restores entity context from auto-save |

---

### 4.2 Phase 2 Concepts Implemented

| Phase 2 Concept | Part 2 Implementation |
|---|---|
| **Entity** | Active Entity vs Available Entities; entity selection UI; entity switcher component |
| **Identity** | Authority verification on deep link access; identity-entity relationship |
| **Role** | Role displayed in entity switcher; multiple roles handled via capacity selection |
| **Authority** | Authority reevaluation after idle; authority-based entity filtering |
| **Transaction** | Transaction recovery after session timeout; entity context immutable within transaction |
| **Session** | Session timeout thresholds; re-authentication flows |

---

## 5. Document Status

**Completion Status:** ✅ PART 2 COMPLETE

**What This Part Established:**
1. ✅ Entity Selection Mechanisms (first login, search, filtering, favourites)
2. ✅ Entity Switching Rules (normal, with in-progress transaction, during consequential action)
3. ✅ Context Persistence (cross-page, cross-session, recent/favourite entities)
4. ✅ Re-Confirmation Requirements (idle timeout, deep links, authority changes)
5. ✅ Context Invalidation Triggers (entity state change, role revocation, session timeout)
6. ✅ Deep Link Handling (URL structure, access flow, stale transaction handling)
7. ✅ Session Timeout Flows (idle warning, timeout recovery, absolute timeout)

**What This Part Did NOT Cover:**
- ⏳ Authority visibility in UI (detailed in PART 3)
- ⏳ Accidental-action prevention mechanisms (detailed in PART 3)
- ⏳ Professional multi-entity dashboard design (detailed in PART 4)
- ⏳ Entity profile structure (detailed in PART 4)
- ⏳ Relationship management UI (detailed in PART 4)
- ⏳ Edge case stress testing (detailed in PART 5)

---

## 6. Next Steps

**Proceed to:**  
**PART 3: Authority & Safety Model**

**Part 3 Will Define:**
- Authority indicators in UI ("Who am I?", "What capacity?", "What am I authorized to do?")
- Accidental-action prevention mechanisms (confirmation levels, high-risk action handling)
- Risk classification model (low/medium/high-risk actions)
- Explicit confirmation flows (entity + capacity + action confirmation chain)

**Dependency:** Part 3 inherits all rules (EC-01 through EC-15) and interaction patterns defined in Parts 1 and 2.

---

**END OF PART 2**
