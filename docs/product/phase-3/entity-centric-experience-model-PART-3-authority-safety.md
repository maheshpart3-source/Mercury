# Entity-Centric Experience Model
## PART 3: Authority & Safety Model

**Document ID:** ECEM-PART-3  
**Version:** 1.0  
**Date:** 28 August 2026  
**Status:** DRAFT  
**Phase:** Phase 3 — Product Definition & Experience Architecture

---

## Document Purpose

This document defines HOW authority is made transparent to users and HOW the platform prevents accidental actions on wrong entities. It specifies:
- Authority indicators in UI (identity, capacity, permissions)
- Risk classification model for actions
- Accidental-action prevention mechanisms
- Explicit confirmation flows for high-risk actions

**This Part Inherits:**
- All canonical definitions from Part 1 (Identity, Role, Authority, Entity)
- All Entity-Context Rules (EC-01 through EC-15)
- All interaction patterns from Part 2 (entity selection, switching, persistence)

**This Part Extends:**
- Visibility and transparency of authority model
- Safety mechanisms that prevent costly errors
- User confidence through explicit confirmation

---

## 1. Authority Model in UI

### 1.1 The Four Questions Every User Should Be Able to Answer

At any point in an authenticated session, especially before consequential actions, the user should be able to answer:

1. **"Who am I?"** (Identity)
2. **"Which entity am I acting for?"** (Entity Context)
3. **"In what capacity am I acting?"** (Role/Capacity)
4. **"What am I authorized to do?"** (Authority/Permissions)

Additionally, for transparency and auditability:

5. **"Who granted me this authority?"** (Authority Source)
6. **"When does this authority expire?"** (Temporal Validity)

The UI must make these answers **immediately visible** at consequential interaction points, not buried in profile dropdowns or help documentation.

---

### 1.2 "Who Am I?" — Identity Indicators

#### 1.2.1 Persistent Identity Display

**Location:** Top-right corner of authenticated interface (standard web application pattern)

**Compact State:**
```
┌────────────────────────────────────────────────────────┐
│ MCA Platform    [ABC Private Limited ▾]    [PS ▾]     │
└────────────────────────────────────────────────────────┘
                                             └─ Identity Indicator
```

**Identity Indicator Components:**
- **Initials or Avatar:** Visual identifier (e.g., "PS" for Priya Sharma)
- **Dropdown trigger:** Click to expand identity details

**Expanded State (User Clicks Identity Indicator):**
```
┌────────────────────────────────────────────────────────┐
│ Logged in as:                                          │
│ Priya Sharma                                           │
│ priya.sharma@example.com                               │
│                                                         │
│ Verification Status: ✅ Verified                       │
│ Verified on: 15 Jan 2025                               │
│                                                         │
│ [Account Settings] [Log Out]                           │
│                                                         │
└────────────────────────────────────────────────────────┘
```

**Identity Information Displayed:**
- Legal name (as per verified identity documents)
- Email (account identifier)
- Verification status (Verified / Unverified / Professional)
- Verification date (for audit transparency)

**Verification Status Indicators:**
- ✅ **Verified:** Identity documents validated (PAN, Aadhaar, DIN, etc.)
- ⚠️ **Unverified:** Email/phone verified only (limited access to services)
- 🎓 **Professional:** CA/CS credential verified (ICAI/ICSI membership)

**Purpose:**
- User knows WHO the system recognizes them as
- Verification status visible (important for services requiring verified identity)
- Quick access to account settings and logout

---

#### 1.2.2 Identity in High-Risk Contexts

**Context:** User about to digitally sign a form.

**Display (Signature Confirmation Page):**
```
┌────────────────────────────────────────────────────────┐
│ Digital Signature                                      │
│                                                         │
│ You are signing as:                                    │
│ Priya Sharma                                           │
│ DIN: 12345678 (Verified)                               │
│                                                         │
│ For entity:                                            │
│ ABC PRIVATE LIMITED (CIN: U12345MH2020PTC123456)      │
│                                                         │
│ In capacity:                                           │
│ Director                                               │
│                                                         │
│ Document:                                              │
│ MGT-7 Annual Return (FY 2025-26)                       │
│                                                         │
│ [✓] I confirm my identity and capacity                │
│                                                         │
│ [Cancel] [Sign Document]                               │
│                                                         │
└────────────────────────────────────────────────────────┘
```

**Purpose:**
- User sees their VERIFIED IDENTITY before signing (not just name, but DIN)
- Legal binding action requires explicit identity confirmation
- Prevents "I didn't know which identity I was using" disputes

---

### 1.3 "Which Entity Am I Acting For?" — Entity Context Indicators

#### 1.3.1 Persistent Entity Display (Header)

**Location:** Primary navigation header (left-center or center)

**Design Pattern: Prominent Display**

```
┌────────────────────────────────────────────────────────┐
│ MCA    [ ABC PRIVATE LIMITED ▾ ]    Workspace  Docs   │
└────────────────────────────────────────────────────────┘
        └─ Active Entity Indicator (clickable dropdown)
```

**Visual Treatment:**
- **Bold or Medium Weight Font:** Entity name stands out
- **Dropdown Arrow:** Indicates ability to switch entity
- **Color/Background:** Optional subtle background color to create visual prominence

**Purpose:**
- Active entity visible on EVERY page
- User never loses sight of "which company am I working on"
- One-click entity switching access

---

#### 1.3.2 Entity Context in Consequential Action Confirmations

**Context:** User about to submit MGT-7 form.

**Display (Submission Confirmation Page):**
```
┌────────────────────────────────────────────────────────┐
│ ⚠️  Confirm Submission                                 │
│                                                         │
│ You are about to submit:                               │
│ MGT-7 Annual Return (FY 2025-26)                       │
│                                                         │
│ For:                                                   │
│ ┌────────────────────────────────────────────────────┐ │
│ │ ABC PRIVATE LIMITED                                │ │
│ │ CIN: U12345MH2020PTC123456                        │ │
│ │ Registered Office: Mumbai, Maharashtra            │ │
│ └────────────────────────────────────────────────────┘ │
│                                                         │
│ Your role: Director                                    │
│                                                         │
│ This action will:                                      │
│  • File form with MCA immediately                      │
│  • Update public registry                              │
│  • Cannot be withdrawn after submission                │
│                                                         │
│ [✓] I confirm this is the correct entity              │
│                                                         │
│ [Cancel] [Submit Form]                                 │
│                                                         │
└────────────────────────────────────────────────────────┘
```

**Visual Treatment:**
- **Entity name and CIN in bordered box** (visual emphasis)
- **Registered office shown** (additional confirmation detail)
- **Explicit checkbox:** "I confirm this is the correct entity"

**Purpose:**
- Impossible for user to miss which entity they're submitting for
- Prevents "I thought I was filing for my other company" errors
- Additional details (registered office) allow user to mentally confirm correct entity

---

#### 1.3.3 Entity Context in Transaction Lists

**Context:** User viewing "My Transactions" list (potentially across multiple entities if professional).

**Display:**
```
┌────────────────────────────────────────────────────────┐
│ My Transactions                                        │
│                                                         │
│ Active Entity: ABC Private Limited                     │
│ [Show All Entities ▾]                                  │
│                                                         │
│ ┌────────────────────────────────────────────────────┐ │
│ │ MGT-7 Annual Return                                │ │
│ │ Status: Draft                                      │ │
│ │ Entity: ABC PRIVATE LIMITED                       │ │
│ │ Last updated: 2 hours ago                          │ │
│ │ [Continue Editing]                                 │ │
│ └────────────────────────────────────────────────────┘ │
│                                                         │
│ ┌────────────────────────────────────────────────────┐ │
│ │ AOC-4 Financial Statements                         │ │
│ │ Status: Submitted                                  │ │
│ │ Entity: ABC PRIVATE LIMITED                       │ │
│ │ Submitted: 15 Aug 2026                             │ │
│ │ [View Details]                                     │ │
│ └────────────────────────────────────────────────────┘ │
│                                                         │
│ Transactions for Other Entities:                       │
│                                                         │
│ ┌────────────────────────────────────────────────────┐ │
│ │ MGT-7 Annual Return                                │ │
│ │ Status: Draft                                      │ │
│ │ Entity: XYZ TECHNOLOGIES LLP                      │ │
│ │ Last updated: Yesterday                            │ │
│ │ [Continue Editing]                                 │ │
│ └────────────────────────────────────────────────────┘ │
│                                                         │
└────────────────────────────────────────────────────────┘
```

**Entity Display per Transaction:**
- Entity name displayed on EVERY transaction card
- Prevents confusion when professional viewing cross-entity transaction list
- Active entity filter available ("Show only ABC Pvt Ltd transactions")

**Purpose:**
- User can quickly identify which transactions belong to which entities
- No risk of clicking into wrong entity's transaction

---

### 1.4 "In What Capacity Am I Acting?" — Role/Capacity Indicators

#### 1.4.1 Role Display in Entity Switcher

**Context:** User has multiple entities with different roles.

**Display (Entity Switcher Dropdown):**
```
┌────────────────────────────────────────────────────────┐
│ Current Entity:                                        │
│ ABC PRIVATE LIMITED                                    │
│ Your role: Director                                    │
│                                                         │
│ Switch to:                                             │
│  ○ XYZ Technologies LLP                               │
│    Your role: Professional (Chartered Accountant)     │
│                                                         │
│  ○ DEF Industries Ltd                                 │
│    Your role: Authorized Representative               │
│                                                         │
│  ○ GHI Manufacturing Pvt Ltd                          │
│    Your role: Director                                │
│                                                         │
└────────────────────────────────────────────────────────┘
```

**Role Information per Entity:**
- Role type (Director, Professional, Authorized Rep, etc.)
- Professional credential if applicable (CA, CS)

**Purpose:**
- User knows their relationship to each entity
- Role information aids entity selection (user may want to select based on role)

---

#### 1.4.2 Capacity Selection for Multi-Role Users

**Context:** User is BOTH Director AND Professional (CA) for the same entity.

**Scenario:** User initiates MGT-7 filing for ABC Pvt Ltd.

**Display (Capacity Selection Page):**
```
┌────────────────────────────────────────────────────────┐
│ Select Capacity                                        │
│                                                         │
│ You have multiple roles for ABC PRIVATE LIMITED.       │
│                                                         │
│ In what capacity are you filing MGT-7?                 │
│                                                         │
│  ○ Director                                            │
│    Authority: Inherent (Companies Act Section 2)      │
│    You may sign this form as Director.                │
│                                                         │
│  ○ Chartered Accountant                               │
│    Authority: Delegated (Form INC-28 dated 10 Jan 2025)│
│    You may sign this form as Professional.            │
│                                                         │
│ [ Continue ]                                           │
│                                                         │
└────────────────────────────────────────────────────────┘
```

**Capacity Information Displayed:**
- Role title (Director, Chartered Accountant)
- Authority source (Inherent, Delegated)
- Authorization document reference (if delegated)
- Permission summary ("You may sign this form...")

**User Action:**
- User selects ONE capacity
- Selected capacity is locked for this transaction lifecycle
- Capacity is recorded in transaction audit trail

**Purpose:**
- Explicit capacity selection prevents audit ambiguity
- User understands the BASIS of their authority (inherent vs delegated)
- Form submission records correct signatory capacity

**Applies Rule:** EC-13 (multi-role selection must be explicit for consequential actions)

---

#### 1.4.3 Role Display in Confirmation Dialogs

**Context:** User about to appoint a new director.

**Display (Officer Appointment Confirmation):**
```
┌────────────────────────────────────────────────────────┐
│ ⚠️  Confirm Officer Appointment                        │
│                                                         │
│ You are appointing:                                    │
│ Rajesh Kumar (DIN: 87654321)                           │
│ As: Additional Director                                │
│                                                         │
│ For:                                                   │
│ ABC PRIVATE LIMITED (CIN: U12345MH2020PTC123456)      │
│                                                         │
│ Your capacity:                                         │
│ Director (authorized to appoint officers)              │
│                                                         │
│ This action will:                                      │
│  • File DIR-12 with MCA immediately                    │
│  • Add director to entity registry                     │
│  • Require board resolution upload                     │
│                                                         │
│ [✓] I confirm I have authority to make this appointment│
│                                                         │
│ [Cancel] [Proceed with Appointment]                    │
│                                                         │
└────────────────────────────────────────────────────────┘
```

**Capacity Information Displayed:**
- "Your capacity: Director (authorized to appoint officers)"
- Makes authority explicit before high-risk action

**Purpose:**
- User sees their capacity and understands it grants authority for this action
- Confirmation checkbox requires acknowledgment of authority

---

### 1.5 "What Am I Authorized to Do?" — Permission Indicators

#### 1.5.1 Service Availability Based on Authority

**Context:** User viewing available services for an entity.

**Display (Services Page - Professional User):**
```
┌────────────────────────────────────────────────────────┐
│ Services for ABC PRIVATE LIMITED                       │
│ Your role: Professional (Chartered Accountant)         │
│                                                         │
│ Available Services:                                    │
│                                                         │
│ ✅ File Annual Return (MGT-7)                         │
│    You are authorized to prepare and sign             │
│                                                         │
│ ✅ File Financial Statements (AOC-4)                  │
│    You are authorized to prepare and sign             │
│                                                         │
│ ⚠️ Appoint Director (DIR-12)                          │
│    You can prepare but cannot sign                    │
│    Requires: Director signature                        │
│                                                         │
│ 🚫 Remove Director (DIR-11)                           │
│    Not authorized                                      │
│    Reason: Only directors can remove officers         │
│                                                         │
└────────────────────────────────────────────────────────┘
```

**Permission Indicators:**
- ✅ **Fully Authorized:** User can complete service end-to-end
- ⚠️ **Partially Authorized:** User can prepare but requires additional signature
- 🚫 **Not Authorized:** Service not available to user's current role

**Permission Explanation:**
- Each service shows WHY user has or lacks authority
- "Requires: Director signature" → user knows what's needed
- "Reason: Only directors can remove officers" → user understands constraint

**Purpose:**
- User knows upfront what they can and cannot do
- Prevents frustration of starting service only to discover they can't complete it
- Transparency builds user confidence

---

#### 1.5.2 Action-Level Authority Indicators

**Context:** User viewing entity profile with officer list.

**Display (Entity Officers Page):**
```
┌────────────────────────────────────────────────────────┐
│ Officers - ABC PRIVATE LIMITED                         │
│ Your role: Director                                    │
│                                                         │
│ Directors:                                             │
│                                                         │
│  Priya Sharma (DIN: 12345678) — You                   │
│  Appointed: 15 Jan 2020                                │
│  [View Details]                                        │
│                                                         │
│  Rajesh Kumar (DIN: 87654321)                          │
│  Appointed: 20 Mar 2021                                │
│  [View Details] [Remove Director]                      │
│                                                         │
│  Amit Singh (DIN: 11223344)                            │
│  Appointed: 10 Jun 2023                                │
│  [View Details] [Remove Director]                      │
│                                                         │
│ [ + Appoint New Director ]                             │
│                                                         │
└────────────────────────────────────────────────────────┘
```

**Authority-Based UI:**
- **"Remove Director" button:** Visible only if user has authority to remove officers
- **"Appoint New Director" button:** Visible only if user has authority to appoint
- User cannot remove SELF (no "Remove Director" button on own entry)

**Alternative (If User Lacks Authority):**
```
┌────────────────────────────────────────────────────────┐
│ Officers - ABC PRIVATE LIMITED                         │
│ Your role: Authorized Representative                   │
│                                                         │
│ Directors:                                             │
│                                                         │
│  Priya Sharma (DIN: 12345678)                          │
│  Appointed: 15 Jan 2020                                │
│  [View Details]                                        │
│                                                         │
│  Rajesh Kumar (DIN: 87654321)                          │
│  Appointed: 20 Mar 2021                                │
│  [View Details]                                        │
│                                                         │
│ ℹ️  You cannot appoint or remove officers.             │
│    Reason: Only directors have this authority.         │
│                                                         │
└────────────────────────────────────────────────────────┘
```

**Authority Feedback:**
- Info message explains WHY user cannot perform action
- No confusing "disabled button" that user might think is a bug

**Purpose:**
- User sees only actions they're authorized to perform
- Prevents "submit then fail" negative experience
- Builds user mental model of their authority scope

---

### 1.6 "Who Granted This Authority?" — Authority Source Indicators

#### 1.6.1 Authority Source Display (Professional Authorization)

**Context:** Professional viewing their authority for a client entity.

**Display (Authority Details Page):**
```
┌────────────────────────────────────────────────────────┐
│ Your Authority for ABC PRIVATE LIMITED                 │
│                                                         │
│ Role: Professional (Chartered Accountant)              │
│                                                         │
│ Authority Source:                                      │
│ Delegated via Form INC-28                              │
│ Authorized by: Priya Sharma (Director)                 │
│ Authorization Date: 10 January 2025                    │
│                                                         │
│ Scope of Authority:                                    │
│  ✅ Prepare and sign annual returns                   │
│  ✅ File financial statements                         │
│  ✅ Respond to MCA notices                            │
│  🚫 Appoint or remove officers                        │
│  🚫 Change registered office                          │
│                                                         │
│ Validity:                                              │
│ Valid From: 10 January 2025                            │
│ Valid Until: No expiration (until revoked)             │
│                                                         │
│ [View Authorization Document (INC-28)]                 │
│                                                         │
└────────────────────────────────────────────────────────┘
```

**Authority Source Information:**
- **Delegation mechanism:** Form INC-28 (legal basis)
- **Grantor:** Priya Sharma (who authorized the professional)
- **Authorization date:** When authority was granted
- **Scope of authority:** What professional can and cannot do
- **Validity period:** Start date, expiration date (if any)
- **Link to authorization document:** User can view source document

**Purpose:**
- Professional knows the legal basis of their authority
- Professional can verify scope if unsure about specific action
- Transparency for audit and compliance purposes

---

#### 1.6.2 Authority Source in Submission Audit Trail

**Context:** Form has been submitted. Viewing submission audit trail.

**Display (Transaction Audit Trail):**
```
┌────────────────────────────────────────────────────────┐
│ MGT-7 Annual Return - Submission Audit Trail           │
│                                                         │
│ Form Submitted: 28 August 2026, 14:35 IST              │
│                                                         │
│ Submitted by:                                          │
│ Rajesh Kumar (ICAI Membership: 123456)                 │
│ Email: rajesh.kumar@caexample.com                      │
│                                                         │
│ Acting in capacity:                                    │
│ Chartered Accountant (Professional)                    │
│                                                         │
│ Authority basis:                                       │
│ Delegated via Form INC-28 dated 10 January 2025       │
│ Authorized by: Priya Sharma (Director, DIN: 12345678) │
│                                                         │
│ Entity:                                                │
│ ABC PRIVATE LIMITED (CIN: U12345MH2020PTC123456)      │
│                                                         │
│ Signature:                                             │
│ Digital Signature Certificate (DSC): [View Certificate]│
│ Signed: 28 August 2026, 14:34 IST                     │
│                                                         │
│ Form Receipt Number: MGT-7-2026-ABC123456              │
│                                                         │
└────────────────────────────────────────────────────────┘
```

**Audit Trail Components:**
- Who submitted (identity + professional credential)
- Capacity (role)
- Authority basis (delegation document reference + grantor)
- Entity context
- Digital signature details
- Timestamp

**Purpose:**
- Complete traceability for regulatory audit
- Answers "Who had authority to submit this form?" question
- Provides evidence of authorized action

---

### 1.7 "When Does This Authority Expire?" — Temporal Validity Indicators

#### 1.7.1 Expiring Authority Warnings

**Context:** Professional's authorization expires in 30 days.

**Display (Dashboard Warning):**
```
┌────────────────────────────────────────────────────────┐
│ ⚠️  Authorization Expiring Soon                        │
│                                                         │
│ Your professional authorization for:                   │
│ XYZ TECHNOLOGIES LLP                                   │
│                                                         │
│ Will expire on: 30 September 2026 (in 30 days)        │
│                                                         │
│ Please renew your authorization to continue managing   │
│ this entity.                                            │
│                                                         │
│ [Renew Authorization] [Contact Entity]                 │
│                                                         │
└────────────────────────────────────────────────────────┘
```

**Warning Thresholds:**
- 30 days before expiration: ⚠️ Warning displayed on dashboard
- 7 days before expiration: ⚠️ Warning displayed + email notification
- Expired: 🚫 Authority revoked, entity removed from Available Entities

**Purpose:**
- Professional has time to renew before authority lapses
- Prevents disruption to ongoing work

---

#### 1.7.2 Expired Authority Blocking

**Context:** Professional's authorization expired yesterday. Professional attempts to file form.

**Display (Action Blocked):**
```
┌────────────────────────────────────────────────────────┐
│ 🚫 Authorization Expired                               │
│                                                         │
│ Your professional authorization for XYZ TECHNOLOGIES   │
│ LLP expired on 27 August 2026.                         │
│                                                         │
│ You can no longer file forms or perform transactional │
│ actions for this entity.                               │
│                                                         │
│ To restore access:                                     │
│  1. Contact the entity to renew your authorization     │
│  2. Entity must file updated Form INC-28               │
│  3. Your access will be restored once filed            │
│                                                         │
│ You can still view historical transactions and         │
│ documents (read-only access).                          │
│                                                         │
│ [Contact Entity] [View Historical Data]                │
│                                                         │
└────────────────────────────────────────────────────────┘
```

**Post-Expiration Behavior:**
- Transactional actions: 🚫 Blocked
- Read-only access: ✅ Allowed (view historical filings, documents)
- Entity removed from Available Entities (for transactional context)
- Entity still visible in "Inactive Relationships" list

**Purpose:**
- Clear explanation of why access blocked
- Guidance on how to restore access
- Maintains read-only access for business continuity (professional may need historical records)

**Applies Rule:** EC-09 (authority reevaluated), EC-12 (context invalidated when authority expires)

---

### 1.8 Visual Design Principles for Authority Indicators

#### 1.8.1 Hierarchy of Visibility

**Always Visible (Persistent Header):**
- Identity (top-right: "PS ▾")
- Active Entity (center: "ABC PRIVATE LIMITED ▾")

**Visible at Decision Points (Contextual):**
- Role/Capacity (before consequential actions)
- Authority scope (before restricted actions)
- Authority source (in audit trails, authority details pages)
- Expiration date (in warnings, authority details pages)

**On Demand (User Clicks for Details):**
- Full identity details (name, email, verification status)
- Full entity details (CIN, registered office, status)
- Full authority details (source document, grantor, scope)

---

#### 1.8.2 Color and Icon System

**Authority Status Colors:**
- 🟢 **Green / ✅ Checkmark:** Fully authorized, no constraints
- 🟡 **Yellow / ⚠️ Warning:** Partially authorized or expiring soon
- 🔴 **Red / 🚫 Blocked:** Not authorized or expired

**Role Type Icons:**
- 👤 **Director/Officer:** Individual icon
- 🎓 **Professional (CA/CS):** Graduation cap or certificate icon
- 📄 **Authorized Representative:** Document icon
- 👥 **Delegate/Staff:** People icon (subordinate role)

**Visual Consistency:**
- Same icon/color system used across all pages
- User learns visual language, can quickly scan authority status

---

#### 1.8.3 Accessible Design Requirements

**Text Alternatives:**
- Icons must have text labels (not icon-only)
- Color must NOT be sole indicator (use icon + text)
- Screen reader compatibility (ARIA labels for authority indicators)

**Example (Accessible Authority Indicator):**
```html
<!-- Good: Icon + Text + ARIA -->
<span class="authority-indicator authorized" aria-label="Fully authorized">
  ✅ Authorized
</span>

<!-- Bad: Icon only, no text -->
<span class="authority-indicator">
  ✅
</span>
```

---

## 2. Accidental-Action Prevention

### 2.1 Risk Classification Model

Every MCA platform action is classified into one of three risk levels based on:
- **Reversibility:** How difficult is it to undo the action?
- **Impact:** What are the consequences if performed on wrong entity?
- **Regulatory Significance:** Does it trigger legal obligations or registry changes?

---

#### 2.1.1 Low-Risk Actions

**Definition:** Actions that are easily reversible, have minimal impact, and do not trigger legal consequences.

**Examples:**
- Viewing entity information
- Searching public registry
- Downloading documents
- Viewing transaction history
- Saving draft form (not submitting)
- Updating account preferences (email, notifications)

**User Experience:**
- No confirmation required
- No entity context re-confirmation (unless idle session per EC-09)
- Standard "Save Draft" button (no warnings)

**Rationale:** These actions do not change legal state or commit resources. User should have frictionless experience.

---

#### 2.1.2 Medium-Risk Actions

**Definition:** Actions that have some impact but are reversible with effort, or actions that require payment but have no legal registry impact.

**Examples:**
- Uploading document to transaction (can be deleted)
- Requesting certified copy of document (payment required, but no registry change)
- Updating draft form and overwriting previous draft
- Inviting another user to collaborate on draft (can be revoked)

**User Experience:**
- **Light Confirmation:** Simple confirmation button or dialog
- **No explicit checkbox:** User can proceed with single click
- **Entity context visible:** But not re-confirmed unless idle

**Example (Medium-Risk Confirmation):**
```
┌────────────────────────────────────────────────────────┐
│ Request Certified Copy?                                │
│                                                         │
│ Document: Certificate of Incorporation                 │
│ Entity: ABC PRIVATE LIMITED                            │
│ Fee: ₹100                                              │
│                                                         │
│ [Cancel] [Proceed with Request]                        │
│                                                         │
└────────────────────────────────────────────────────────┘
```

**Rationale:** Some friction to prevent accidental clicks, but not so much that it disrupts workflow.

---

#### 2.1.3 High-Risk Actions

**Definition:** Actions that are difficult or impossible to reverse, have significant legal or financial impact, or modify public registry.

**Examples (Filing Actions):**
- Submitting any e-form (MGT-7, AOC-4, DIR-12, etc.)
- Filing annual return
- Filing financial statements
- Filing officer appointment/removal

**Examples (Officer Changes):**
- Appointing director
- Removing director
- Appointing auditor
- Changing company secretary

**Examples (Payment Actions):**
- Authorizing fee payment for filing
- Paying penalty or late fee
- Authorizing service charge

**Examples (Signature Actions):**
- Digitally signing form or document
- Authorizing multi-party signature

**Examples (Entity Changes):**
- Changing registered office address
- Changing entity name
- Altering share capital structure (companies)
- Initiating entity closure/striking-off

**Examples (Document Actions):**
- Deleting filed document (if permitted)
- Marking document as obsolete

**User Experience:**
- **Strong Confirmation Required:** Multi-step confirmation process
- **Entity context explicitly displayed:** Name, CIN, registered office
- **Capacity/role explicitly displayed:** User's role for that entity
- **Consequences explicitly listed:** What will happen when action executes
- **Explicit checkbox:** "I confirm this is the correct entity and action"
- **Two-step button:** Checkbox must be checked before "Proceed" button enabled

**Rationale:** These actions have irreversible or costly-to-reverse consequences. Platform must create deliberate friction to prevent accidental execution.

---

### 2.2 Confirmation Levels

#### 2.2.1 Level 0: No Confirmation (Low-Risk Actions)

**Actions:** Viewing, searching, downloading, navigating

**UI:** Standard buttons, no confirmation dialog

**Example:**
```
[View Entity Profile]  ← Single click, immediate action
```

---

#### 2.2.2 Level 1: Simple Confirmation (Medium-Risk Actions)

**Actions:** Document upload, payment for certified copies, draft updates

**UI:** Single confirmation dialog with "Cancel" and "Proceed" buttons

**Example:**
```
┌────────────────────────────────────────────────────────┐
│ Upload Document?                                       │
│                                                         │
│ File: Balance_Sheet_FY2026.pdf                         │
│ Size: 2.5 MB                                           │
│                                                         │
│ [Cancel] [Upload]                                      │
│                                                         │
└────────────────────────────────────────────────────────┘
```

---

#### 2.2.3 Level 2: Strong Confirmation (High-Risk Actions)

**Actions:** Form submission, officer changes, payments, signatures, entity changes

**UI:** Multi-element confirmation dialog:
1. Entity context displayed (name, CIN, registered office)
2. User capacity displayed (role)
3. Action consequences listed (what will happen)
4. Explicit checkbox: "I confirm..."
5. Two-step button: Checkbox must be checked to enable "Proceed" button

**Example (Form Submission):**
```
┌────────────────────────────────────────────────────────┐
│ ⚠️  Confirm Form Submission                            │
│                                                         │
│ You are submitting:                                    │
│ MGT-7 Annual Return (FY 2025-26)                       │
│                                                         │
│ For:                                                   │
│ ┌────────────────────────────────────────────────────┐ │
│ │ ABC PRIVATE LIMITED                                │ │
│ │ CIN: U12345MH2020PTC123456                        │ │
│ │ Registered Office: Mumbai, Maharashtra            │ │
│ └────────────────────────────────────────────────────┘ │
│                                                         │
│ Your capacity: Director                                │
│                                                         │
│ This action will:                                      │
│  • File form with MCA immediately                      │
│  • Update public registry within 24 hours              │
│  • Cannot be withdrawn after submission                │
│  • Additional documents cannot be attached after filing│
│                                                         │
│ [✓] I confirm this is the correct entity and I have   │
│     reviewed all information                           │
│                                                         │
│ [Cancel] [Submit Form] ← Disabled until checkbox checked│
│                                                         │
└────────────────────────────────────────────────────────┘
```

**Checkbox Requirement:**
- Checkbox starts unchecked
- "Submit Form" button is DISABLED (grayed out)
- User must check checkbox to enable button
- Checkbox label clearly states what user is confirming

**Purpose:**
- Forces deliberate action (cannot accidentally click "Submit")
- User must read confirmation details to find checkbox
- Checkbox explicitly states user has reviewed information

---

#### 2.2.4 Level 3: Multi-Factor Confirmation (Extreme High-Risk Actions)

**Actions:** Entity closure, striking-off, director removal (if sole director), share capital reduction

**UI:** Strong Confirmation (Level 2) PLUS one or more of:
- **Re-authentication required:** User must enter password again
- **Secondary approval required:** Action requires approval from another authority holder (e.g., second director must approve)
- **Waiting period:** Action is queued, not immediate (e.g., "Director removal will process in 24 hours, giving you time to cancel if needed")
- **Textual confirmation:** User must type entity name or specific phrase to confirm

**Example (Entity Closure Confirmation):**
```
┌────────────────────────────────────────────────────────┐
│ ⚠️  CONFIRM ENTITY CLOSURE                             │
│                                                         │
│ You are initiating closure for:                        │
│ ABC PRIVATE LIMITED (CIN: U12345MH2020PTC123456)      │
│                                                         │
│ ⚠️  THIS ACTION IS IRREVERSIBLE                        │
│                                                         │
│ Closing an entity will:                                │
│  • File STK-2 application with MCA                     │
│  • Begin formal striking-off process                   │
│  • Render entity inactive                              │
│  • Cannot be undone without court order                │
│                                                         │
│ Before proceeding, ensure:                             │
│  ☐ All pending obligations are cleared                │
│  ☐ All liabilities are settled                        │
│  ☐ All directors/partners have agreed                 │
│                                                         │
│ To confirm, type the entity name:                      │
│ [ ___________________________________ ]                 │
│                                                         │
│ [Cancel] [Proceed with Closure] ← Disabled until verified│
│                                                         │
└────────────────────────────────────────────────────────┘
```

**Textual Confirmation:**
- User must type "ABC PRIVATE LIMITED" (exact match, case-insensitive)
- "Proceed with Closure" button enabled only when text matches entity name
- Prevents accidental closure due to misclick

**Purpose:**
- Maximum friction for maximum-risk actions
- User must demonstrate deliberate intent
- Textual confirmation ensures user has read entity name carefully

---

### 2.3 Entity/Capacity/Action Confirmation Chain

#### 2.3.1 The Three-Part Confirmation Model

For high-risk actions, the confirmation process must explicitly confirm:
1. **Entity:** "I am performing this action for [Entity Name]"
2. **Capacity:** "I am acting in my capacity as [Role]"
3. **Action:** "I understand the consequences of [Action]"

**Confirmation Dialog Structure:**
```
┌────────────────────────────────────────────────────────┐
│ ⚠️  Confirm [ACTION]                                   │
│                                                         │
│ ENTITY:                                                │
│ [Entity Name + CIN + Registered Office]                │
│                                                         │
│ CAPACITY:                                              │
│ [User's Role for this Entity]                          │
│                                                         │
│ ACTION:                                                │
│ [What will happen]                                     │
│ [Consequences listed as bullet points]                 │
│                                                         │
│ CONFIRMATION:                                          │
│ [✓] I confirm the entity, capacity, and action details│
│                                                         │
│ [Cancel] [Proceed]                                     │
│                                                         │
└────────────────────────────────────────────────────────┘
```

---

#### 2.3.2 Example: Officer Removal Confirmation

```
┌────────────────────────────────────────────────────────┐
│ ⚠️  Confirm Director Removal                           │
│                                                         │
│ ENTITY:                                                │
│ ABC PRIVATE LIMITED                                    │
│ CIN: U12345MH2020PTC123456                            │
│ Registered Office: 123 MG Road, Mumbai, Maharashtra   │
│                                                         │
│ CAPACITY:                                              │
│ Director (you are authorized to remove officers)       │
│                                                         │
│ DIRECTOR TO BE REMOVED:                                │
│ Rajesh Kumar (DIN: 87654321)                           │
│ Current Position: Director                             │
│ Appointed: 20 March 2021                               │
│                                                         │
│ ACTION:                                                │
│ This action will:                                      │
│  • File DIR-11 (Director Resignation) with MCA         │
│  • Remove Rajesh Kumar from entity registry            │
│  • Update public registry within 24 hours              │
│  • Cannot be undone without new appointment            │
│  • Requires board resolution (to be uploaded)          │
│                                                         │
│ CONFIRMATION:                                          │
│ [✓] I confirm:                                         │
│     - This is the correct entity                       │
│     - I am acting as Director                          │
│     - I have authority to remove this officer          │
│     - I have obtained necessary board approval         │
│                                                         │
│ [Cancel] [Proceed with Removal]                        │
│                                                         │
└────────────────────────────────────────────────────────┘
```

**Confirmation Checklist:**
- Single checkbox with multi-part confirmation statement
- User must check box to confirm all points
- "Proceed" button disabled until checkbox checked

---

#### 2.3.3 Example: Payment Authorization Confirmation

```
┌────────────────────────────────────────────────────────┐
│ ⚠️  Authorize Payment                                  │
│                                                         │
│ ENTITY:                                                │
│ ABC PRIVATE LIMITED                                    │
│ CIN: U12345MH2020PTC123456                            │
│                                                         │
│ CAPACITY:                                              │
│ Director (you are authorized to make payments on behalf│
│ of the entity)                                         │
│                                                         │
│ PAYMENT DETAILS:                                       │
│ Service: MGT-7 Annual Return Filing Fee                │
│ Amount: ₹400                                           │
│ Payment Method: Net Banking (to be selected)           │
│                                                         │
│ ACTION:                                                │
│ This action will:                                      │
│  • Deduct ₹400 from entity bank account                │
│  • Authorize filing fee payment to MCA                 │
│  • Cannot be refunded once payment processed           │
│  • Receipt will be generated for entity records        │
│                                                         │
│ CONFIRMATION:                                          │
│ [✓] I confirm:                                         │
│     - This payment is for ABC PRIVATE LIMITED          │
│     - I am authorized to make payments for this entity │
│     - The amount is correct                            │
│                                                         │
│ [Cancel] [Proceed to Payment Gateway]                  │
│                                                         │
└────────────────────────────────────────────────────────┘
```

**Payment-Specific Considerations:**
- Amount prominently displayed
- Payment method selection occurs AFTER confirmation (not before)
- "Cannot be refunded" consequence explicitly stated

---

### 2.4 Context Re-Confirmation After Idle Session

#### 2.4.1 Idle Threshold for Re-Confirmation

**Rule:** If user idle for 30+ minutes, entity context must be re-confirmed before allowing consequential action.

**Scenario:** User drafting MGT-7 for ABC Pvt Ltd, idle for 35 minutes, then clicks "Submit Form".

**System Behavior:**
```
┌────────────────────────────────────────────────────────┐
│ ⚠️  Confirm Entity Context                             │
│                                                         │
│ You have been idle for 35 minutes.                     │
│                                                         │
│ Before proceeding, please confirm you are still        │
│ working on:                                            │
│                                                         │
│ ABC PRIVATE LIMITED                                    │
│ CIN: U12345MH2020PTC123456                            │
│                                                         │
│ Your role: Director                                    │
│                                                         │
│ Action: Submit MGT-7 Annual Return                     │
│                                                         │
│ [Switch Entity] [Confirm & Continue]                   │
│                                                         │
└────────────────────────────────────────────────────────┘
```

**User Actions:**
- **Confirm & Continue:** Proceed with original entity context, continue to submission confirmation
- **Switch Entity:** Abort current transaction, switch to different entity

**Rationale:** User may have forgotten which entity they were working on during long idle period. Re-confirmation prevents wrong-entity submission.

**Applies Rule:** EC-09 (authority reevaluated after idle session)

---

#### 2.4.2 Idle Threshold Does NOT Apply to Low-Risk Actions

**Scenario:** User idle for 40 minutes, then clicks "View Documents".

**System Behavior:**
- No re-confirmation required
- Documents page loads immediately
- Entity context persists (still ABC Pvt Ltd)

**Rationale:** Viewing documents is low-risk. Re-confirmation would create unnecessary friction.

---

### 2.5 Wrong-Entity Prevention Strategies

#### 2.5.1 Visual Differentiation (Multi-Entity Users)

**Problem:** Professional managing 20 entities, working on ABC Pvt Ltd, accidentally switches to XYZ LLP and continues working, thinking it's still ABC.

**Solution: Visual Entity Identifier**

Assign each entity a unique color or visual identifier (within authenticated session).

**Example:**
```
┌────────────────────────────────────────────────────────┐
│ MCA    [🔵 ABC PRIVATE LIMITED ▾]    Workspace  Docs   │
└────────────────────────────────────────────────────────┘
        └─ Blue color indicator for ABC Pvt Ltd

User switches to:

┌────────────────────────────────────────────────────────┐
│ MCA    [🟢 XYZ TECHNOLOGIES LLP ▾]    Workspace  Docs  │
└────────────────────────────────────────────────────────┘
        └─ Green color indicator for XYZ LLP
```

**Color Coding:**
- Each entity assigned a color from palette (blue, green, orange, purple, etc.)
- Color persists within session (ABC Pvt Ltd always blue this session)
- Color may change across sessions (not permanent association)
- Color displayed in header, confirmation dialogs, transaction cards

**Purpose:**
- User develops muscle memory: "Blue = ABC, Green = XYZ"
- Color mismatch catches attention if user accidentally switched entity

**Accessibility Consideration:**
- Color must NOT be sole differentiator (use icon/pattern in addition for color-blind users)
- Example: Blue + Circle icon, Green + Square icon

---

#### 2.5.2 Entity Name Repetition in Confirmation Dialogs

**Strategy:** Display entity name multiple times in high-risk confirmation dialogs.

**Example (Bad — Entity Name Mentioned Once):**
```
┌────────────────────────────────────────────────────────┐
│ Submit MGT-7 for ABC PRIVATE LIMITED?                  │
│                                                         │
│ [Cancel] [Submit]                                      │
└────────────────────────────────────────────────────────┘
```
**Problem:** User may skim past entity name, miss wrong entity.

**Example (Good — Entity Name Repeated):**
```
┌────────────────────────────────────────────────────────┐
│ ⚠️  Confirm Form Submission                            │
│                                                         │
│ You are submitting MGT-7 for:                          │
│                                                         │
│ ┌────────────────────────────────────────────────────┐ │
│ │ ABC PRIVATE LIMITED                                │ │ ← First mention
│ │ CIN: U12345MH2020PTC123456                        │ │
│ └────────────────────────────────────────────────────┘ │
│                                                         │
│ This action will file MGT-7 for ABC PRIVATE LIMITED   │ ← Second mention
│ with MCA immediately.                                  │
│                                                         │
│ [✓] I confirm this is the correct entity for ABC      │ ← Third mention
│     PRIVATE LIMITED                                    │
│                                                         │
│ [Cancel] [Submit Form]                                 │
│                                                         │
└────────────────────────────────────────────────────────┘
```

**Purpose:**
- Entity name appears 3 times (boxed, in consequence text, in checkbox label)
- User must read entity name multiple times, reducing risk of missing wrong entity

---

#### 2.5.3 Entity Identifier (CIN/LLPIN) Display

**Strategy:** Always display entity identifier (CIN/LLPIN) alongside entity name in confirmations.

**Rationale:**
- Entity names may be similar: "ABC Private Limited" vs "ABC Technologies Private Limited"
- CIN is unique, unambiguous
- Professional who memorizes client CINs can spot wrong entity immediately

**Example:**
```
Weak: "Submit MGT-7 for ABC Private Limited?"
Strong: "Submit MGT-7 for ABC PRIVATE LIMITED (CIN: U12345MH2020PTC123456)?"
```

---

#### 2.5.4 Recent Entity Highlight

**Strategy:** If user switches entity during session, highlight recently switched entity in confirmation dialog.

**Example:**
```
User working on ABC Pvt Ltd for 20 minutes.
User switches to XYZ LLP (1 minute ago).
User attempts to submit form.

┌────────────────────────────────────────────────────────┐
│ ⚠️  Confirm Form Submission                            │
│                                                         │
│ ⚠️  You recently switched to this entity (1 minute ago)│
│                                                         │
│ You are submitting MGT-7 for:                          │
│ XYZ TECHNOLOGIES LLP                                   │
│ CIN: U11111KA2021PTC222222                            │
│                                                         │
│ [Cancel] [Confirm Entity & Continue]                   │
│                                                         │
└────────────────────────────────────────────────────────┘
```

**Purpose:**
- Warns user if they just switched entities (may have switched accidentally)
- Additional confirmation step for recently switched entity

---

### 2.6 Multi-Party Signature Coordination

#### 2.6.1 Co-Signature Requirement Scenario

**Context:** Certain forms require multiple directors to sign (e.g., both directors of a 2-director company must sign MGT-7).

**First Director Signs:**
```
┌────────────────────────────────────────────────────────┐
│ Sign MGT-7 as Director                                 │
│                                                         │
│ Entity: ABC PRIVATE LIMITED                            │
│ Your capacity: Director (Priya Sharma)                 │
│                                                         │
│ This form requires 2 director signatures.              │
│ Your signature: 1 of 2                                 │
│                                                         │
│ After you sign, the form will be sent to:              │
│ Rajesh Kumar (Director) for co-signature               │
│                                                         │
│ [Cancel] [Sign & Send for Co-Signature]                │
│                                                         │
└────────────────────────────────────────────────────────┘
```

**Second Director Notified:**
```
Email to Rajesh Kumar:

Subject: Co-Signature Required — MGT-7 for ABC Private Limited

Priya Sharma (Director) has signed MGT-7 Annual Return for
ABC PRIVATE LIMITED (CIN: U12345MH2020PTC123456).

Your co-signature is required to submit this form.

[Review & Sign Form]
```

**Second Director Signs:**
```
┌────────────────────────────────────────────────────────┐
│ Co-Sign MGT-7 as Director                              │
│                                                         │
│ Entity: ABC PRIVATE LIMITED                            │
│ Your capacity: Director (Rajesh Kumar)                 │
│                                                         │
│ Already signed by:                                     │
│  ✅ Priya Sharma (Director) — Signed 28 Aug 2026      │
│                                                         │
│ Your signature: 2 of 2 (final signature)               │
│                                                         │
│ After you sign, the form will be submitted to MCA      │
│ immediately.                                            │
│                                                         │
│ [Cancel] [Sign & Submit Form]                          │
│                                                         │
└────────────────────────────────────────────────────────┘
```

**Entity Context Safety:**
- Each director sees entity name and CIN at signature point
- Each director confirms their capacity (both are directors of ABC Pvt Ltd)
- Second director sees first director's signature (transparency)

**Prevents Accidental Wrong-Entity Signature:**
- If Rajesh receives co-signature request for WRONG entity, entity name and CIN displayed clearly
- Rajesh can reject signature if entity is incorrect

---

## 3. Architecture Traceability

### 3.1 Rules Applied in This Part

| Rule | Implementation in Part 3 |
|---|---|
| **EC-02** | Entity context visibility at consequential points (confirmation dialogs) |
| **EC-04** | Authority evaluation displayed in UI (permission indicators, service availability) |
| **EC-05** | High-risk actions require explicit confirmation (Level 2/3 confirmation dialogs) |
| **EC-09** | Authority reevaluated after idle (re-confirmation dialog after 30-min idle) |
| **EC-13** | Multi-role selection explicit (capacity selection page for multi-role users) |
| **EC-14** | Entity context queryable for audit (audit trail displays identity, capacity, authority source) |

---

### 3.2 Phase 2 Concepts Implemented

| Phase 2 Concept | Part 3 Implementation |
|---|---|
| **Identity** | Identity indicators in UI (name, DIN, verification status) |
| **Role** | Role/capacity display in entity switcher, confirmation dialogs, capacity selection |
| **Authority** | Permission indicators (authorized/not authorized), authority source display, expiration warnings |
| **Entity** | Entity context prominent in confirmations, entity name repetition, CIN display |
| **Delegation** | Authority source indicators (delegated via INC-28, authorized by Director) |

---

## 4. Document Status

**Completion Status:** ✅ PART 3 COMPLETE

**What This Part Established:**
1. ✅ Authority Model in UI (The Four Questions: Who/Which Entity/What Capacity/What Authorized)
2. ✅ Authority Source & Expiration Indicators (transparency for delegated authority)
3. ✅ Risk Classification Model (Low/Medium/High/Extreme risk actions)
4. ✅ Confirmation Levels (0 through 3: No confirmation to Multi-factor confirmation)
5. ✅ Entity/Capacity/Action Confirmation Chain (Three-part confirmation for high-risk actions)
6. ✅ Context Re-Confirmation After Idle (30-minute threshold)
7. ✅ Wrong-Entity Prevention Strategies (visual differentiation, entity name repetition, CIN display)
8. ✅ Multi-Party Signature Coordination (co-signature flows with entity context safety)

**What This Part Did NOT Cover:**
- ⏳ Professional multi-entity dashboard design (detailed in PART 4)
- ⏳ Entity profile structure (detailed in PART 4)
- ⏳ Relationship management UI (detailed in PART 4)
- ⏳ Scale testing (100+ entities, bulk actions) (detailed in PART 4)
- ⏳ Edge case stress testing (detailed in PART 5)

---

## 5. Next Steps

**Proceed to:**  
**PART 4: Scale & Complexity**

**Part 4 Will Define:**
- Professional/multi-entity experience (5, 20, 100+ entity scenarios)
- Entity queues, bulk actions, saved views, filters
- Obligation dashboards (cross-entity compliance tracking)
- Delegated staff model
- Entity profile structure (canonical entity view)
- Relationship management (Person ↔ Entity model with authority scope)

**Dependency:** Part 4 inherits all rules (EC-01 through EC-15), interaction patterns (Parts 1-2), and safety mechanisms (Part 3).

---

**END OF PART 3**
