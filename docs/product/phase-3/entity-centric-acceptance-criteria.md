# Entity-Centric Experience Model
## Acceptance Criteria

**Version:** 1.0  
**Date:** 28 August 2026  
**Purpose:** Testable behavioral requirements for entity-centric model implementation

---

## How to Use This Document

Each acceptance criterion is:
- **Testable:** Can be verified through automated or manual testing
- **Behavioral:** Describes observable system behavior, not implementation details
- **Traceable:** References Entity-Context Rules (EC-XX) where applicable

**Test Format:** Given [context] When [action] Then [expected behavior]

---

## 1. Entity Selection & Switching (10 criteria)

### ES-01: First Login — Zero Entities
**Given** user has no entity relationships  
**When** user logs in  
**Then** system displays onboarding options: Start Company, Register LLP, Browse Public Registry, Link Existing Entity

**Rule:** EC-08 (null entity context for non-transactional)

---

### ES-02: First Login — Single Entity
**Given** user has exactly 1 available entity (ABC Pvt Ltd)  
**When** user logs in  
**Then** system displays entity with "Continue to Workspace" option (auto-select with confirmation)

---

### ES-03: First Login — Multiple Entities (5-20)
**Given** user has 5 available entities  
**When** user logs in  
**Then** system displays entity selection list with obligation indicators, user must select before accessing workspace

**Rule:** EC-01 (mandatory entity context for transactional actions)

---

### ES-04: First Login — Many Entities (20+)
**Given** professional has 50+ available entities  
**When** user logs in  
**Then** system displays search-first interface with recent entities, overdue obligations, saved views

---

### ES-05: Entity Visible in Header
**Given** user has selected ABC Pvt Ltd as active entity  
**When** user navigates any authenticated page  
**Then** entity name "ABC PRIVATE LIMITED" visible in persistent header

**Rule:** EC-02 (entity context visibility)

---

### ES-06: Entity Switching — No In-Progress Transaction
**Given** user has ABC Pvt Ltd active, no in-progress transactions  
**When** user clicks entity switcher and selects XYZ Technologies LLP  
**Then** active entity switches to XYZ Technologies LLP, page refreshes with new entity context

---

### ES-07: Entity Switching — In-Progress Draft
**Given** user has MGT-7 draft in progress for ABC Pvt Ltd  
**When** user attempts to switch to XYZ Technologies LLP  
**Then** system displays warning "You have in-progress transaction. Save draft?" with [Cancel] [Save Draft & Switch]

**Rule:** EC-03 (no silent transaction transfer)

---

### ES-08: Entity Switching — Consequential Action
**Given** user is on MGT-7 submission confirmation page for ABC Pvt Ltd  
**When** user attempts to switch entity  
**Then** entity switcher is disabled (grayed out) with tooltip "Complete current transaction to switch entities"

**Rule:** EC-07 (entity context locked within service)

---

### ES-09: Entity Search (Professional)
**Given** professional has 100 entities  
**When** user types "tech" in entity search box  
**Then** system returns filtered results containing "tech" in entity name within 1 second

---

### ES-10: Saved Views Persist
**Given** professional created saved view "High-Value Clients" with 15 entities  
**When** user logs out and logs back in next day  
**Then** saved view "High-Value Clients" still available with same 15 entities

---

## 2. Context Persistence (8 criteria)

### CP-01: Context Persists Across Pages
**Given** user selected ABC Pvt Ltd as active entity  
**When** user navigates: Workspace → Obligations → Documents → Transactions  
**Then** active entity remains ABC Pvt Ltd on all pages, visible in header

---

### CP-02: Context Cleared on Logout
**Given** user has ABC Pvt Ltd as active entity  
**When** user logs out and logs back in  
**Then** active entity is NULL, user must select entity again

**Rule:** EC-11 (no context span authentication boundaries)

---

### CP-03: Recent Entities Persist
**Given** user worked with ABC Pvt Ltd, XYZ LLP, DEF Ltd in previous session  
**When** user logs in next day  
**Then** recent entities list shows ABC Pvt Ltd, XYZ LLP, DEF Ltd

---

### CP-04: Deep Link with Valid Authority
**Given** user bookmarked MGT-7 draft URL for ABC Pvt Ltd  
**When** user clicks bookmark (authenticated session)  
**Then** system extracts entity from URL, verifies authority, loads transaction with entity context displayed

**Rule:** EC-10 (explicit entity context for deep links)

---

### CP-05: Deep Link with Expired Authority
**Given** user bookmarked transaction URL for ABC Pvt Ltd, authority expired since bookmark  
**When** user clicks bookmark  
**Then** system displays "Authorization expired" message, prevents transactional actions, allows read-only view

**Rule:** EC-10, EC-12 (context invalidated when authority expires)

---

### CP-06: Session Timeout Recovery
**Given** user filling MGT-7 for ABC Pvt Ltd, session times out after 30 min idle  
**When** user re-authenticates  
**Then** system offers to resume transaction with entity context restored

**Rule:** EC-15 (context recoverable after system error)

---

### CP-07: Browser Crash Recovery
**Given** user filling MGT-7 for ABC Pvt Ltd, browser crashes  
**When** user restarts browser and logs in  
**Then** system displays "Resume your work?" with transaction and entity context from last auto-save

**Rule:** EC-15 (context recoverable)

---

### CP-08: Context Persistence Within Transaction
**Given** user initiated MGT-7 for ABC Pvt Ltd  
**When** user progresses: Data Entry → Document Upload → Review → Submit  
**Then** entity context remains ABC Pvt Ltd throughout, cannot be changed

**Rule:** EC-07 (context locked within service)

---

## 3. Authority Evaluation (10 criteria)

### AU-01: Authority Check at Service Entry
**Given** user has Director role for ABC Pvt Ltd  
**When** user attempts to start "File MGT-7" service  
**Then** system evaluates authority: Director can file MGT-7, access granted

**Rule:** EC-04 (authority evaluated against active entity)

---

### AU-02: Authority Denied — No Role
**Given** user has no relationship with XYZ Technologies LLP  
**When** user attempts to access XYZ LLP workspace (via URL manipulation)  
**Then** system displays "Access Denied. You do not have access to this entity."

**Rule:** EC-04

---

### AU-03: Authority Denied — Wrong Role
**Given** user is Professional (CA) for ABC Pvt Ltd, not Director  
**When** user attempts to "Remove Director" (requires Director authority)  
**Then** system displays "Not authorized. Only directors can remove officers." Action blocked.

**Rule:** EC-04

---

### AU-04: Authority Indicators Displayed
**Given** user is Professional for ABC Pvt Ltd  
**When** user views Services page for ABC Pvt Ltd  
**Then** system displays:  
- ✅ File MGT-7 (You are authorized)  
- 🚫 Remove Director (Not authorized. Only directors can remove officers.)

---

### AU-05: Authority Reevaluated After Idle
**Given** user idle for 35 minutes while drafting MGT-7 for ABC Pvt Ltd  
**When** user attempts to submit form  
**Then** system reevaluates authority before allowing submission

**Rule:** EC-09 (reevaluate after idle)

---

### AU-06: Authority Expired During Session
**Given** user's professional authorization for ABC Pvt Ltd expires at 11:59 PM  
**When** user attempts to submit form at 12:05 AM (next day)  
**Then** system displays "Authorization expired" message, blocks submission, allows draft save

**Rule:** EC-09, EC-12

---

### AU-07: Multi-Role Capacity Selection
**Given** user is both Director AND Professional (CA) for ABC Pvt Ltd  
**When** user attempts to sign MGT-7  
**Then** system displays capacity selection: "In what capacity are you signing? [Director] [Chartered Accountant]"

**Rule:** EC-13 (explicit multi-role selection)

---

### AU-08: Authority Source Displayed
**Given** user is Professional for ABC Pvt Ltd  
**When** user views authority details  
**Then** system displays: "Authority Source: Delegated via Form INC-28 dated 10 Jan 2025, Authorized by: Priya Sharma (Director)"

---

### AU-09: Delegate Authority Enforced
**Given** staff member (delegate) has draft-only authority for Client A  
**When** delegate attempts to click "Submit Form"  
**Then** Submit button is disabled with message "Requires Professional signature"

---

### AU-10: Authority Audit Trail
**Given** transaction was submitted  
**When** user views transaction audit trail  
**Then** system displays: Identity, Role/Capacity, Authority Source, Timestamp, IP address

**Rule:** EC-14 (audit trail)

---

## 4. Delegation (5 criteria)

### DL-01: Delegation Scope Indicator
**Given** professional delegated "Prepare MGT-7 for ABC Pvt Ltd" to staff  
**When** staff views ABC Pvt Ltd  
**Then** system displays: "You can: Draft, Edit. You cannot: Sign, Submit. Requires: Professional approval."

---

### DL-02: Delegate Cannot Submit
**Given** staff completed MGT-7 draft for ABC Pvt Ltd  
**When** staff attempts to submit form  
**Then** Submit button disabled, message "Requires Professional signature"

---

### DL-03: Professional Approval Workflow
**Given** staff marked MGT-7 draft "Ready for Review"  
**When** professional logs in  
**Then** professional sees notification and "Pending Your Approval" queue with staff's draft

---

### DL-04: Delegation Revoked Mid-Work
**Given** staff is drafting form, professional revokes delegation  
**When** staff attempts to save draft  
**Then** system displays "Delegation revoked. Draft saved but you can no longer edit."

---

### DL-05: Delegated Entity Visibility
**Given** professional delegated Client A access to staff  
**When** staff views entity list  
**Then** Client A appears in "Delegated Entities" section with label "Delegated by: [Professional Name]"

---

## 5. Accidental-Action Prevention (10 criteria)

### AP-01: Entity Context in Submission Confirmation
**Given** user about to submit MGT-7 for ABC Pvt Ltd  
**When** user clicks "Submit Form"  
**Then** confirmation dialog displays:  
- Entity name: ABC PRIVATE LIMITED  
- CIN: U12345MH2020PTC123456  
- Registered office address  
- User's capacity: Director

**Rule:** EC-02 (entity visibility at consequential points)

---

### AP-02: Checkbox Required for High-Risk Action
**Given** user on MGT-7 submission confirmation page  
**When** confirmation dialog displayed  
**Then** "Submit Form" button is disabled until user checks "[✓] I confirm this is the correct entity"

**Rule:** EC-05 (high-risk action confirmation)

---

### AP-03: Entity Name Repetition
**Given** user on submission confirmation for ABC Pvt Ltd  
**When** confirmation dialog displayed  
**Then** entity name "ABC PRIVATE LIMITED" appears at least 3 times (header, consequences, checkbox label)

---

### AP-04: Confirmation for Officer Removal
**Given** user attempts to remove Director from ABC Pvt Ltd  
**When** user clicks "Remove Director"  
**Then** system displays confirmation with:  
- Director name and DIN  
- Entity name and CIN  
- Consequences ("Cannot be undone without new appointment")  
- Checkbox confirmation required

**Rule:** EC-05

---

### AP-05: Payment Authorization Confirmation
**Given** user authorizing ₹400 payment for MGT-7 filing  
**When** user proceeds to payment  
**Then** confirmation displays:  
- Entity: ABC PRIVATE LIMITED  
- Amount: ₹400  
- "Cannot be refunded" warning  
- Checkbox required

---

### AP-06: Context Re-Confirmation After Long Idle
**Given** user idle for 35 minutes on MGT-7 draft for ABC Pvt Ltd  
**When** user clicks "Submit Form"  
**Then** system displays "You have been idle. Confirm you are still working on ABC PRIVATE LIMITED" before proceeding to submission confirmation

**Rule:** EC-09

---

### AP-07: No Silent Transaction Transfer
**Given** user drafting MGT-7 for ABC Pvt Ltd, switches to XYZ LLP  
**When** switch completes  
**Then** MGT-7 draft remains associated with ABC Pvt Ltd (not transferred to XYZ LLP)

**Rule:** EC-03

---

### AP-08: Visual Entity Differentiation
**Given** professional managing 20 entities  
**When** user views entity list  
**Then** each entity has visual identifier (color, icon) to aid recognition

---

### AP-09: Recent Entity Switch Warning
**Given** user switched to XYZ LLP 2 minutes ago  
**When** user attempts high-risk action for XYZ LLP  
**Then** confirmation displays "⚠️ You recently switched to this entity (2 minutes ago)"

---

### AP-10: Textual Confirmation for Extreme Risk
**Given** user initiating entity closure for ABC Pvt Ltd  
**When** user proceeds to closure confirmation  
**Then** system requires user to type entity name "ABC PRIVATE LIMITED" to enable "Proceed with Closure" button

---

## 6. Multi-Entity Professional Workflows (5 criteria)

### MP-01: Multi-Entity Dashboard Loads Fast
**Given** professional has 100 client entities  
**When** user logs in and dashboard loads  
**Then** dashboard displays within 2 seconds, showing overdue obligations across all entities

---

### MP-02: Cross-Entity Search Returns Fast
**Given** professional has 100 entities  
**When** user types search query  
**Then** system returns filtered results within 1 second

---

### MP-03: Obligation Dashboard Shows Cross-Entity View
**Given** professional has 50 entities with various obligations  
**When** user views Compliance Dashboard  
**Then** system displays:  
- Overdue: 8 entities, 12 obligations  
- Due This Week: 15 entities, 22 obligations  
- Compliant: 27 entities

---

### MP-04: Entity Grouping (Client Hierarchy)
**Given** client has 6 subsidiary entities  
**When** user views entity list  
**Then** entities grouped under parent client with expand/collapse, obligation summary at group level

---

### MP-05: Bulk Actions Available
**Given** professional selected 10 entities with overdue obligations  
**When** user views bulk actions  
**Then** system offers: "Generate Overdue Report" "Send Client Reminders" "Export to Excel"

---

## 7. Edge Cases (8 criteria)

### EC-01: Entity Struck Off During Transaction
**Given** user drafting MGT-7 for ABC Pvt Ltd, entity struck off by ROC during draft  
**When** user attempts to submit form  
**Then** system displays "Entity struck off. Cannot submit. You may save draft for records (read-only)."

**Rule:** EC-12 (context invalidated when entity state changes)

---

### EC-02: Authority Revoked During Transaction
**Given** professional drafting form for Client A, client revokes authorization during draft  
**When** professional attempts to submit  
**Then** system displays "Authorization revoked. Cannot submit. Draft saved."

**Rule:** EC-12

---

### EC-03: Director Resigns During Transaction
**Given** director drafting MGT-7, resigns via DIR-11 filed by another director  
**When** director attempts to submit MGT-7  
**Then** system displays "You resigned as director. Cannot submit. Transfer draft to another director."

---

### EC-04: Concurrent Edit Conflict
**Given** Director A and Director B both editing MGT-7 draft  
**When** Director A saves, then Director B saves  
**Then** system detects conflict, displays merge options: "Merge Both Changes" "Keep My Changes" "Keep A's Changes"

---

### EC-05: Stale Data Detection
**Given** user drafting form with entity registered office from 1 August, entity changes address on 15 August  
**When** user submits draft on 1 September  
**Then** system detects stale data, prompts "Registered office outdated. Update to current value?"

---

### EC-06: Multi-Party Signature — Revoke Before Completion
**Given** MGT-7 requires 2 director signatures, Director A signed, Director B not yet  
**When** Director A attempts to revoke signature  
**Then** system allows revocation, form returns to draft state

---

### EC-07: Multi-Party Signature — Cannot Revoke After Submission
**Given** MGT-7 submitted after both directors signed  
**When** Director A attempts to revoke signature  
**Then** system displays "Cannot revoke. Form already submitted. SRN: [number]"

---

### EC-08: Zero Active Entities After Struck Off
**Given** user's only entity (ABC Pvt Ltd) struck off  
**When** user logs in  
**Then** system displays "No active entities. Your previously associated entities are no longer active." with options: Start New Company, Browse Public Registry, View Historical Transactions

---

## 8. Accessibility (5 criteria)

### AC-01: Keyboard Navigation — Entity Switcher
**Given** user navigating via keyboard only  
**When** user presses Tab to entity switcher, then Enter  
**Then** entity dropdown opens, arrow keys navigate entities, Enter selects

---

### AC-02: Screen Reader — Entity Context
**Given** screen reader user on MGT-7 submission page  
**When** screen reader reads confirmation dialog  
**Then** screen reader announces "You are submitting MGT-7 for ABC PRIVATE LIMITED, CIN U12345..."

---

### AC-03: Screen Reader — Authority Indicators
**Given** screen reader user viewing services page  
**When** screen reader reads service list  
**Then** screen reader announces "File MGT-7, You are authorized" and "Remove Director, Not authorized, Only directors can remove officers"

---

### AC-04: Color Not Sole Indicator
**Given** entities have color identifiers for differentiation  
**When** user views entity list  
**Then** each entity has color AND icon/pattern (not color alone)

---

### AC-05: Focus Visible on Interactive Elements
**Given** user navigating via keyboard  
**When** user tabs through confirmation dialog  
**Then** focused element (checkbox, buttons) has visible focus indicator (outline, border)

---

## 9. Security-Sensitive Interactions (4 criteria)

### SS-01: Authority Verified Before Sensitive Action
**Given** user attempts to access transaction via URL manipulation (not authorized)  
**When** system evaluates authority  
**Then** access denied with message, no data exposed

---

### SS-02: Session Timeout Clears Context
**Given** user idle for 60 minutes (absolute timeout)  
**When** session expires  
**Then** system clears active entity, auto-save completes, requires re-authentication

---

### SS-03: Audit Trail Immutable
**Given** transaction submitted with audit trail recorded  
**When** anyone (including submitter) attempts to view audit trail  
**Then** audit trail displays correctly, cannot be edited or deleted

**Rule:** EC-14

---

### SS-04: Deep Link Does Not Bypass Authorization
**Given** user accesses deep link to entity they don't have authority for  
**When** system evaluates authority  
**Then** access denied with clear message, no transaction data exposed

**Rule:** EC-10

---

## Summary

**Total Acceptance Criteria:** 50

**Breakdown:**
- Entity Selection & Switching: 10
- Context Persistence: 8
- Authority Evaluation: 10
- Delegation: 5
- Accidental-Action Prevention: 10
- Multi-Entity Professional Workflows: 5
- Edge Cases: 8
- Accessibility: 5
- Security-Sensitive Interactions: 4

**Traceability:** All criteria trace to Entity-Context Rules (EC-01 through EC-15) where applicable.

**Testing Approach:**
- Automated: ~70% (entity selection, context persistence, authority checks)
- Manual: ~30% (UX confirmations, accessibility, complex scenarios)

**Definition of Done:**
All 50 criteria must pass before entity-centric model considered production-ready.

---

**END OF ACCEPTANCE CRITERIA**
