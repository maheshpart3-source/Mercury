# Entity-Centric Experience Model
## Key User Flows

**Version:** 1.0  
**Date:** 28 August 2026  
**Purpose:** Visual/textual representation of critical entity-centric flows

---

## How to Use This Document

Each flow shows:
- **Entry Point:** Where flow begins
- **Steps:** Sequential actions with decision points
- **Exit Point:** Flow completion or termination
- **Rules Applied:** Entity-Context Rules (EC-XX) enforced in flow

**Format:** Step-by-step with decision branches (if applicable)

---

## Flow 1: Entity Selection (First Login)

### Context
User logs in for first time in session, must select entity before accessing transactional workspace.

### Flow Variants

#### Variant 1A: User Has Zero Entities

```
1. User authenticates successfully
2. System calculates Available Entities → Result: 0 entities
3. System displays onboarding screen:
   ┌─────────────────────────────────────────┐
   │ You don't have any entities yet.        │
   │                                         │
   │ [ Start a New Company ]                 │
   │ [ Register an LLP ]                     │
   │ [ Apply for DIN ]                       │
   │ [ Link to Existing Entity ]             │
   │ [ Browse Public Registry ]              │
   └─────────────────────────────────────────┘
4. User selects option → Proceeds to selected workflow
```

**Rules Applied:** EC-08 (null entity context for non-transactional browsing)

---

#### Variant 1B: User Has Exactly One Entity

```
1. User authenticates successfully
2. System calculates Available Entities → Result: 1 entity (ABC Pvt Ltd)
3. System displays auto-select confirmation:
   ┌─────────────────────────────────────────┐
   │ Your entity:                            │
   │ ABC PRIVATE LIMITED                     │
   │ CIN: U12345MH2020PTC123456             │
   │ Your role: Director                     │
   │                                         │
   │ [ Continue to Workspace ]               │
   │ [ Browse Public Registry ]              │
   └─────────────────────────────────────────┘
4. User clicks "Continue to Workspace"
5. System sets Active Entity = ABC Pvt Ltd
6. System loads entity-centric workspace
```

**Rules Applied:** EC-01 (mandatory entity context for transactional actions)

---

#### Variant 1C: User Has Multiple Entities (5-20)

```
1. User authenticates successfully
2. System calculates Available Entities → Result: 5 entities
3. System displays entity selection list:
   ┌─────────────────────────────────────────┐
   │ Select an entity to continue:           │
   │                                         │
   │ ○ ABC PRIVATE LIMITED (Director)        │
   │   3 pending obligations                 │
   │                                         │
   │ ○ XYZ TECHNOLOGIES LLP (Professional)   │
   │   1 pending obligation                  │
   │                                         │
   │ ○ DEF INDUSTRIES LTD (Director)         │
   │   No pending obligations                │
   │                                         │
   │ [ Continue ]                            │
   └─────────────────────────────────────────┘
4. User selects entity (radio button)
5. User clicks "Continue"
6. System sets Active Entity = selected entity
7. System loads entity-centric workspace
```

---

#### Variant 1D: User Has Many Entities (20+, Professional)

```
1. User authenticates successfully
2. System calculates Available Entities → Result: 50 entities
3. System displays search-first interface:
   ┌─────────────────────────────────────────┐
   │ You manage 50 entities.                 │
   │                                         │
   │ [ 🔍 Search entities... ]               │
   │                                         │
   │ Recently Used:                          │
   │ • ABC Private Limited                   │
   │ • XYZ Technologies LLP                  │
   │                                         │
   │ Entities with Pending Obligations (12): │
   │ • JKL Exports Ltd — MGT-7 due in 5 days │
   │ [ View All ]                            │
   │                                         │
   │ [ View Multi-Entity Dashboard ]         │
   └─────────────────────────────────────────┘
4a. User searches → Selects entity → Active Entity set → Workspace loads
4b. User clicks recent entity → Active Entity set → Workspace loads
4c. User clicks "View Multi-Entity Dashboard" → Active Entity = NULL → Dashboard loads
```

**Rules Applied:** EC-08 (null entity context for multi-entity dashboard)

---

## Flow 2: Entity Switching

### Context
User has active entity, wants to switch to different entity during session.

### Flow with Decision Points

```
1. User clicks entity switcher dropdown in header
2. System displays Available Entities list
3. User selects different entity (e.g., switch from ABC Pvt Ltd to XYZ LLP)

4. DECISION POINT: Does user have in-progress transaction?

   ┌─ NO in-progress transaction ────────────────────────┐
   │                                                      │
   │ 5a. System switches Active Entity to XYZ LLP        │
   │ 6a. System reloads page with new entity context     │
   │ 7a. User sees XYZ LLP workspace                     │
   │                                                      │
   └──────────────────────────────────────────────────────┘

   ┌─ YES, has DRAFT transaction ─────────────────────────┐
   │                                                       │
   │ 5b. System displays warning:                         │
   │     ┌───────────────────────────────────────────┐   │
   │     │ ⚠️ You have an in-progress transaction    │   │
   │     │                                           │   │
   │     │ MGT-7 Annual Return for ABC Pvt Ltd       │   │
   │     │ Draft saved: 5 minutes ago                │   │
   │     │                                           │   │
   │     │ [ Cancel ] [ Save Draft & Switch ]        │   │
   │     └───────────────────────────────────────────┘   │
   │                                                       │
   │ 6b. DECISION: User action?                           │
   │                                                       │
   │     ┌─ User clicks "Cancel" ─────────────────┐      │
   │     │                                         │      │
   │     │ 7b1. Switch cancelled                   │      │
   │     │ 8b1. Active Entity remains ABC Pvt Ltd  │      │
   │     │ 9b1. User continues draft               │      │
   │     │                                         │      │
   │     └─────────────────────────────────────────┘      │
   │                                                       │
   │     ┌─ User clicks "Save Draft & Switch" ────┐      │
   │     │                                         │      │
   │     │ 7b2. System saves MGT-7 draft           │      │
   │     │ 8b2. System switches Active Entity      │      │
   │     │ 9b2. System loads XYZ LLP workspace     │      │
   │     │                                         │      │
   │     └─────────────────────────────────────────┘      │
   │                                                       │
   └───────────────────────────────────────────────────────┘

   ┌─ YES, on CONSEQUENTIAL ACTION page ──────────────────┐
   │                                                       │
   │ 5c. Entity switcher is DISABLED (grayed out)         │
   │ 6c. Tooltip displays: "Complete current transaction  │
   │     to switch entities"                              │
   │ 7c. User must complete or cancel transaction         │
   │                                                       │
   └───────────────────────────────────────────────────────┘
```

**Rules Applied:**  
- EC-03 (no silent transaction transfer)  
- EC-07 (context locked during consequential action)

---

## Flow 3: Authority Evaluation at Action Point

### Context
User attempts transactional action, system must verify authority before allowing.

### Flow

```
1. User (Rajesh) attempts action: "File MGT-7 for ABC Pvt Ltd"
2. System extracts evaluation inputs:
   - Identity: Rajesh (DIN: 12345678)
   - Active Entity: ABC Pvt Ltd
   - Action: File MGT-7
   - Timestamp: Current time

3. System evaluates authority:
   EVALUATE_AUTHORITY(Rajesh, ABC_Pvt_Ltd, "File MGT-7", Now)

4. System retrieves Rajesh's roles for ABC Pvt Ltd:
   - Role: Director
   - Status: Active
   - Appointed: 15 Jan 2020

5. System checks authority for "File MGT-7" given role "Director":
   - Director role → Inherent authority for annual returns
   - No blocking constraints (not resigned, not suspended)

6. DECISION POINT: Authority result?

   ┌─ AUTHORIZED ──────────────────────────────────────┐
   │                                                    │
   │ 7a. System grants access to MGT-7 filing service  │
   │ 8a. User proceeds to form                         │
   │                                                    │
   └────────────────────────────────────────────────────┘

   ┌─ NOT AUTHORIZED ──────────────────────────────────┐
   │                                                    │
   │ 7b. System displays denial message:               │
   │     ┌──────────────────────────────────────────┐ │
   │     │ 🚫 Not Authorized                        │ │
   │     │                                          │ │
   │     │ You are not a director of ABC PRIVATE    │ │
   │     │ LIMITED and cannot file annual returns.  │ │
   │     │                                          │ │
   │     │ Your role: Professional (Chartered       │ │
   │     │ Accountant)                              │ │
   │     │                                          │ │
   │     │ Only directors can file this form.       │ │
   │     │                                          │ │
   │     │ [ Return to Workspace ]                  │ │
   │     └──────────────────────────────────────────┘ │
   │                                                    │
   │ 8b. Access denied, user cannot proceed            │
   │                                                    │
   └────────────────────────────────────────────────────┘
```

**Rules Applied:** EC-04 (authority evaluated against active entity)

---

## Flow 4: High-Risk Action Confirmation (Form Submission)

### Context
User completing MGT-7 form, ready to submit. System must confirm entity context and obtain explicit confirmation before submission.

### Flow

```
1. User completes MGT-7 form for ABC Pvt Ltd
2. User clicks "Submit Form" button
3. System displays Level 2 Confirmation dialog:

   ┌──────────────────────────────────────────────────────┐
   │ ⚠️ Confirm Form Submission                           │
   │                                                      │
   │ You are submitting:                                  │
   │ MGT-7 Annual Return (FY 2025-26)                     │
   │                                                      │
   │ For:                                                 │
   │ ┌──────────────────────────────────────────────────┐│
   │ │ ABC PRIVATE LIMITED                              ││
   │ │ CIN: U12345MH2020PTC123456                      ││
   │ │ Registered Office: Mumbai, Maharashtra          ││
   │ └──────────────────────────────────────────────────┘│
   │                                                      │
   │ Your capacity: Director                              │
   │                                                      │
   │ This action will:                                    │
   │ • File form with MCA immediately                     │
   │ • Update public registry within 24 hours             │
   │ • Cannot be withdrawn after submission               │
   │                                                      │
   │ [ ] I confirm this is the correct entity and I have │
   │     reviewed all information                         │
   │                                                      │
   │ [ Cancel ] [ Submit Form ] ← DISABLED until checked │
   └──────────────────────────────────────────────────────┘

4. DECISION POINT: User action?

   ┌─ User clicks "Cancel" ────────────────────────────┐
   │                                                    │
   │ 5a. Confirmation dialog closes                     │
   │ 6a. User returns to form review page               │
   │ 7a. Form remains in draft state                    │
   │                                                    │
   └────────────────────────────────────────────────────┘

   ┌─ User checks checkbox ─────────────────────────────┐
   │                                                     │
   │ 5b. "Submit Form" button becomes ENABLED           │
   │                                                     │
   │ 6b. User clicks "Submit Form"                      │
   │                                                     │
   │ 7b. System reevaluates authority:                  │
   │     EVALUATE_AUTHORITY(User, ABC_Pvt_Ltd,          │
   │                        "Submit MGT-7", Now)        │
   │                                                     │
   │ 8b. DECISION: Authority still valid?               │
   │                                                     │
   │     ┌─ YES, authorized ──────────────────────┐    │
   │     │                                         │    │
   │     │ 9b1. System submits form to MCA        │    │
   │     │ 10b1. System generates SRN             │    │
   │     │ 11b1. System records audit trail:      │    │
   │     │       - Identity, Role, Entity          │    │
   │     │       - Timestamp, IP address           │    │
   │     │ 12b1. System displays confirmation:    │    │
   │     │       ┌───────────────────────────────┐│    │
   │     │       │ ✅ Form Submitted             ││    │
   │     │       │                               ││    │
   │     │       │ MGT-7 for ABC PRIVATE LIMITED ││    │
   │     │       │ SRN: MGT7-2026-123456         ││    │
   │     │       │                               ││    │
   │     │       │ [ Download Receipt ]          ││    │
   │     │       │ [ Return to Workspace ]       ││    │
   │     │       └───────────────────────────────┘│    │
   │     │                                         │    │
   │     └─────────────────────────────────────────┘    │
   │                                                     │
   │     ┌─ NO, authorization changed/expired ───┐     │
   │     │                                         │     │
   │     │ 9b2. System displays error:            │     │
   │     │      "Authorization expired. Cannot    │     │
   │     │      submit. Draft saved."             │     │
   │     │ 10b2. Submission blocked               │     │
   │     │                                         │     │
   │     └─────────────────────────────────────────┘     │
   │                                                     │
   └─────────────────────────────────────────────────────┘
```

**Rules Applied:**  
- EC-02 (entity visibility at consequential points)  
- EC-05 (high-risk action confirmation)  
- EC-09 (authority reevaluated at submission)  
- EC-14 (audit trail)

---

## Flow 5: Delegated Action (Professional → Staff)

### Context
Professional delegates form preparation to staff member. Staff prepares draft, professional reviews and signs.

### Flow

```
1. Professional (Meera) assigns task:
   "Prepare MGT-7 for Client A" → Assigned to: Amit (Staff)

2. Amit logs in
3. System displays assigned tasks:
   ┌────────────────────────────────────────┐
   │ My Tasks (from Meera Desai):           │
   │                                        │
   │ Prepare MGT-7 Annual Return            │
   │ Entity: CLIENT A PRIVATE LIMITED       │
   │ Due: 3 Sep 2026 (in 5 days)           │
   │                                        │
   │ [ Start Working on Draft ]             │
   └────────────────────────────────────────┘

4. Amit clicks "Start Working on Draft"
5. System sets Active Entity = Client A (delegated context)
6. System displays authority indicator:
   "You can: Draft, Edit. You cannot: Sign, Submit. Requires: Meera's approval."

7. Amit prepares MGT-7 draft
8. Amit saves draft periodically (auto-save)
9. Amit completes draft
10. Amit clicks "Mark Ready for Review"
11. System updates draft status: "READY_FOR_REVIEW"
12. System notifies Meera: "Amit completed MGT-7 draft for Client A"

13. Meera logs in
14. System displays "Pending Your Approval" queue:
    ┌────────────────────────────────────────┐
    │ Pending Your Approval (1):             │
    │                                        │
    │ MGT-7 for CLIENT A PRIVATE LIMITED     │
    │ Prepared by: Amit (Staff)              │
    │ Marked ready: 28 Aug 2026, 2:30 PM    │
    │                                        │
    │ [ Review & Approve ]                   │
    └────────────────────────────────────────┘

15. Meera clicks "Review & Approve"
16. System loads MGT-7 draft with Client A entity context
17. Meera reviews draft

18. DECISION POINT: Meera's action?

    ┌─ Approve & Sign ─────────────────────────────────┐
    │                                                   │
    │ 19a. Meera makes any final edits (if needed)     │
    │ 20a. Meera clicks "Sign & Submit"                │
    │ 21a. System verifies Meera's authority           │
    │ 22a. Meera signs with DSC                        │
    │ 23a. System submits form                         │
    │ 24a. Audit trail records:                        │
    │      "Prepared by: Amit (Delegate)               │
    │       Signed by: Meera Desai (Professional)"    │
    │                                                   │
    └───────────────────────────────────────────────────┘

    ┌─ Request Changes ────────────────────────────────┐
    │                                                   │
    │ 19b. Meera clicks "Request Changes"              │
    │ 20b. System prompts for comments                 │
    │ 21b. System returns draft to Amit with comments  │
    │ 22b. Amit receives notification, makes changes   │
    │ 23b. Flow returns to step 10 (mark ready again)  │
    │                                                   │
    └───────────────────────────────────────────────────┘
```

**Rules Applied:**  
- EC-04 (delegate has limited authority, professional has signing authority)  
- EC-14 (audit trail records both delegate and professional actions)

---

## Flow 6: Multi-Entity Professional Workflow

### Context
Professional (CA) managing 50 client entities, needs to track and act on obligations across all clients.

### Flow

```
1. Professional logs in
2. System calculates Available Entities → Result: 50 entities
3. System displays Multi-Entity Dashboard:

   ┌──────────────────────────────────────────────────────┐
   │ Your Portfolio (50 entities)                         │
   │                                                      │
   │ [ 🔍 Search entities... ]                            │
   │                                                      │
   │ Compliance Summary:                                  │
   │ 🔴 Overdue: 8 entities (12 obligations)             │
   │ ⚠️ Due This Week: 15 entities (22 obligations)      │
   │ ✅ Compliant: 27 entities                           │
   │                                                      │
   │ [ View Overdue ] [ View Due This Week ]              │
   └──────────────────────────────────────────────────────┘

4. User clicks "View Overdue"
5. System displays filtered list:
   ┌──────────────────────────────────────────────────────┐
   │ Overdue Obligations (8 entities)                     │
   │                                                      │
   │ ┌──────────────────────────────────────────────────┐│
   │ │ ALPHA INDUSTRIES LTD                             ││
   │ │ 🔴 MGT-7 overdue by 12 days                      ││
   │ │ [ File Now ]                                     ││
   │ └──────────────────────────────────────────────────┘│
   │                                                      │
   │ ┌──────────────────────────────────────────────────┐│
   │ │ BETA MANUFACTURING PVT LTD                       ││
   │ │ 🔴 AOC-4 overdue by 5 days                       ││
   │ │ [ File Now ]                                     ││
   │ └──────────────────────────────────────────────────┘│
   │                                                      │
   │ [Show 6 more...]                                     │
   └──────────────────────────────────────────────────────┘

6. User clicks "File Now" for ALPHA INDUSTRIES LTD
7. System sets Active Entity = Alpha Industries Ltd
8. System loads MGT-7 filing service for Alpha Industries
9. User completes filing

10. User clicks entity switcher to return to dashboard
11. DECISION POINT: In-progress transaction?

    ┌─ NO transaction (filing complete) ────────────────┐
    │                                                    │
    │ 12a. System switches Active Entity to NULL        │
    │ 13a. System loads multi-entity dashboard          │
    │ 14a. Overdue count updated: 7 entities now        │
    │                                                    │
    └────────────────────────────────────────────────────┘

    ┌─ YES, draft in progress ───────────────────────────┐
    │                                                     │
    │ 12b. System warns about in-progress transaction    │
    │ 13b. User saves draft                              │
    │ 14b. System returns to dashboard                   │
    │                                                     │
    └─────────────────────────────────────────────────────┘

15. User continues working through overdue list
16. User can:
    - Filter by entity type, obligation type
    - Search for specific entity
    - Use saved views ("High-Value Clients")
    - Generate compliance report (all clients)
```

**Rules Applied:**  
- EC-08 (null entity context for multi-entity dashboard)  
- EC-01 (mandatory entity context when starting filing)  
- EC-03 (warning when switching with in-progress transaction)

---

## Flow 7: Context Recovery After Interruption

### Context
User experiences interruption (browser crash, session timeout) during transaction. System must recover transaction with entity context intact.

### Flow: Browser Crash Scenario

```
1. User drafting MGT-7 for ABC Pvt Ltd
2. System auto-saves draft every 2 minutes
3. Last auto-save: 2:28 PM (includes entity context metadata)
4. User's browser crashes at 2:30 PM

   ──────────── INTERRUPTION ────────────

5. User restarts browser
6. User navigates to MCA platform
7. User logs in

8. System detects incomplete transaction:
   - Transaction ID: TXN-MGT7-2026-001234
   - Entity: ABC Pvt Ltd (CIN: U12345...)
   - Status: DRAFT
   - Last saved: 2:28 PM (2 minutes ago)

9. System verifies user still has authority for ABC Pvt Ltd
10. DECISION: Authority still valid?

    ┌─ YES, authority valid ─────────────────────────────┐
    │                                                     │
    │ 11a. System displays recovery prompt:              │
    │      ┌─────────────────────────────────────────┐  │
    │      │ ⏳ Resume Your Work?                     │  │
    │      │                                         │  │
    │      │ You have an incomplete transaction:     │  │
    │      │                                         │  │
    │      │ MGT-7 Annual Return (FY 2025-26)        │  │
    │      │ Entity: ABC PRIVATE LIMITED             │  │
    │      │ Last saved: 2 minutes ago (auto-saved)  │  │
    │      │                                         │  │
    │      │ [ Resume ] [ Dismiss ]                  │  │
    │      └─────────────────────────────────────────┘  │
    │                                                     │
    │ 12a. DECISION: User action?                        │
    │                                                     │
    │      ┌─ User clicks "Resume" ──────────────┐      │
    │      │                                      │      │
    │      │ 13a1. System sets Active Entity =    │      │
    │      │       ABC Pvt Ltd                    │      │
    │      │ 14a1. System loads MGT-7 draft from  │      │
    │      │       auto-save (2:28 PM state)      │      │
    │      │ 15a1. User continues from            │      │
    │      │       interruption point             │      │
    │      │                                      │      │
    │      └──────────────────────────────────────┘      │
    │                                                     │
    │      ┌─ User clicks "Dismiss" ──────────────┐     │
    │      │                                       │     │
    │      │ 13a2. System does not load draft     │     │
    │      │ 14a2. Draft remains in "My            │     │
    │      │       Transactions" (accessible later)│     │
    │      │ 15a2. User taken to entity selection  │     │
    │      │                                       │     │
    │      └───────────────────────────────────────┘     │
    │                                                     │
    └─────────────────────────────────────────────────────┘

    ┌─ NO, authority no longer valid ────────────────────┐
    │                                                     │
    │ 11b. System displays:                              │
    │      ┌─────────────────────────────────────────┐  │
    │      │ ⚠️ Authorization Changed                 │  │
    │      │                                         │  │
    │      │ You have an incomplete transaction:     │  │
    │      │ MGT-7 for ABC PRIVATE LIMITED           │  │
    │      │                                         │  │
    │      │ Your authorization for this entity      │  │
    │      │ changed while you were offline.         │  │
    │      │                                         │  │
    │      │ You can view the draft (read-only) but  │  │
    │      │ cannot complete submission.             │  │
    │      │                                         │  │
    │      │ [ View Draft (Read-Only) ]              │  │
    │      │ [ Dismiss ]                             │  │
    │      └─────────────────────────────────────────┘  │
    │                                                     │
    │ 12b. User can view but not submit                  │
    │                                                     │
    └─────────────────────────────────────────────────────┘
```

**Rules Applied:**  
- EC-15 (context recoverable after system error)  
- EC-09 (authority reevaluated before allowing continued work)  
- EC-10 (entity context explicitly confirmed on recovery)

---

### Flow: Deep Link Access After Session Expiry

```
1. User bookmarks transaction URL on 1 August 2026:
   https://mca.gov.in/workspace/entity/U12345.../transaction/TXN-MGT7-001234

2. User returns via bookmark on 1 September 2026
3. System detects: Session expired (no valid auth cookie)

4. System redirects to login page
5. User authenticates

6. System extracts entity context from bookmarked URL:
   - CIN: U12345MH2020PTC123456 (ABC Pvt Ltd)
   - Transaction ID: TXN-MGT7-001234

7. System verifies user authority for ABC Pvt Ltd (as of 1 Sep 2026)
8. DECISION: Authority valid?

   ┌─ YES, authorized ──────────────────────────────────┐
   │                                                     │
   │ 9a. System loads transaction with explicit context:│
   │     ┌──────────────────────────────────────────┐  │
   │     │ Restoring Your Work                      │  │
   │     │                                          │  │
   │     │ You are returning to:                    │  │
   │     │ MGT-7 Annual Return (Draft)              │  │
   │     │ For: ABC PRIVATE LIMITED                 │  │
   │     │                                          │  │
   │     │ Your role: Director                      │  │
   │     │ Last saved: 1 August 2026                │  │
   │     │                                          │  │
   │     │ [ Continue ] [ Select Different Entity ] │  │
   │     └──────────────────────────────────────────┘  │
   │                                                     │
   │ 10a. User clicks "Continue"                        │
   │ 11a. System sets Active Entity = ABC Pvt Ltd       │
   │ 12a. System loads MGT-7 draft                      │
   │ 13a. User continues work                           │
   │                                                     │
   └─────────────────────────────────────────────────────┘

   ┌─ NO, not authorized ───────────────────────────────┐
   │                                                     │
   │ 9b. System displays:                               │
   │     ┌──────────────────────────────────────────┐  │
   │     │ 🚫 Access Denied                          │  │
   │     │                                          │  │
   │     │ You no longer have access to             │  │
   │     │ ABC PRIVATE LIMITED.                     │  │
   │     │                                          │  │
   │     │ Your authorization was revoked on        │  │
   │     │ 15 August 2026.                          │  │
   │     │                                          │  │
   │     │ [ Return to My Entities ]                │  │
   │     └──────────────────────────────────────────┘  │
   │                                                     │
   │ 10b. Access denied, transaction not accessible     │
   │                                                     │
   └─────────────────────────────────────────────────────┘
```

**Rules Applied:**  
- EC-10 (explicit entity context for deep links)  
- EC-04 (authority evaluated before granting access)  
- EC-11 (context cleared on logout, must be re-established)

---

## Flow Summary

**7 Key Flows Documented:**

1. **Entity Selection (First Login)** — 4 variants based on entity count
2. **Entity Switching** — With decision branches for in-progress transactions
3. **Authority Evaluation** — Real-time authority check at action point
4. **High-Risk Action Confirmation** — Multi-step confirmation with reevaluation
5. **Delegated Action** — Professional → Staff workflow with approval
6. **Multi-Entity Professional Workflow** — Cross-entity dashboard usage
7. **Context Recovery After Interruption** — Browser crash and deep link scenarios

**Flow Characteristics:**
- **Decision-driven:** Multiple branches based on system state and user choice
- **Rule-enforced:** Entity-Context Rules (EC-XX) applied at key points
- **Recovery-capable:** Interruption scenarios have defined recovery paths
- **Authority-aware:** Authority verification integrated throughout flows

**Usage:**
- **For Implementation:** Use as behavioral specification for feature development
- **For Testing:** Convert decision points to test cases
- **For UX Design:** Use as foundation for wireframes and prototypes
- **For Documentation:** Reference flows when explaining system behavior

---

**END OF KEY FLOWS**
