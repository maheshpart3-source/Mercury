# Entity-Centric Experience Model
## PART 1: Foundation & Conceptual Model

**Document ID:** ECEM-PART-1  
**Version:** 1.0  
**Date:** 28 August 2026  
**Status:** DRAFT  
**Phase:** Phase 3 — Product Definition & Experience Architecture

---

## Document Purpose

This document establishes the **authenticated operating context model** for the MCA Digital Platform. It is NOT a UI specification or wireframe document. It defines the **behavioural contract** that governs how entity context, identity, authority, and role operate throughout every authenticated MCA interaction.

**What This Is:**
- The conceptual foundation for entity-centric operations
- The behavioural contract inherited by all service blueprints
- The rule system that prevents accidental actions on wrong entities
- The authority evaluation model for context-dependent authorization

**What This Is NOT:**
- A UI component library
- A wireframe or mockup document
- A visual design specification
- An isolated "entity switcher" design

**Dependencies:**
- Phase 2 Architecture Baseline (canonical concepts LOCKED)
- Phase 3: Personas & Contexts (authority scenarios defined)
- Phase 3: Future Information Architecture (workspace structure)

**Subsequent Parts:**
- PART 2: Interaction & Persistence Model
- PART 3: Authority & Safety Model
- PART 4: Scale & Complexity
- PART 5: Edge Cases & Validation

---

## 1. Entity Context Model

### 1.1 The Context Chain

Every authenticated MCA interaction operates through a multi-layered context chain:

```
Person (human)
  ↓
Account (authenticated session)
  ↓
Identity (verified individual)
  ↓
Role/Capacity (function in relation to entity)
  ↓
Authority (permission to act)
  ↓
Entity (legal entity context)
  ↓
Action (specific operation)
```

**Critical Principle:**
> Authority is NOT a property of identity.  
> Authority is a function of (Identity × Role × Entity × Action).

This means:
- The same person may have different authority for different entities
- The same person may have different roles on the same entity
- Authority must be evaluated at the point of action, not at login
- Changing entity context changes available actions

---

### 1.2 Canonical Definitions

#### 1.2.1 Person
**Definition:** A human individual who may interact with the MCA platform.

**Attributes:**
- Name, contact information (personal data)
- May or may not be registered with MCA as an officer/director
- May have relationships with zero, one, or many legal entities

**Note:** A person exists independently of any MCA account.

---

#### 1.2.2 Account
**Definition:** An authenticated credential set that grants platform access to a person.

**Attributes:**
- Username/email + authentication credentials
- Linked to exactly one verified Identity
- Session state and authentication tokens
- Account-level preferences (language, notifications)

**Note:** Account ≠ Identity. Account is the authentication mechanism. Identity is the verified legal person.

---

#### 1.2.3 Identity
**Definition:** The verified legal identity of the person associated with an account.

**Attributes:**
- Legal name (as per identity documents)
- Identity verification status (verified/unverified)
- National ID, Aadhaar, PAN, DIN (as applicable)
- Identity verification method and date

**Verification Levels:**
- **UNVERIFIED:** Email/phone verified only (limited access)
- **VERIFIED:** Identity documents validated (full access)
- **PROFESSIONAL:** Professional credential verified (CA/CS certificate number)

**Note:** Identity is stable. Identity verification unlocks certain service access.

---

#### 1.2.4 Role/Capacity
**Definition:** The function or relationship through which an identity relates to a legal entity.

**Role Types:**
1. **Self (Individual Entity Owner)**
   - Person IS the legal entity (sole proprietor, individual filer)
   - Authority is inherent
   
2. **Officer (Appointed Position)**
   - Director (Company)
   - Designated Partner (LLP)
   - Partner (LLP)
   - Recorded in MCA registry as active officer

3. **Professional (Service Provider)**
   - Chartered Accountant (identified by ICAI membership)
   - Company Secretary (identified by ICSI membership)
   - Cost Accountant
   - Authority derived from Form INC-28 or equivalent authorization

4. **Authorized Representative**
   - Explicitly authorized by entity via Form GNL-2 or equivalent
   - Limited scope of authority (may be service-specific)
   - Time-bound authorization

5. **Delegate/Staff**
   - Person working under supervision of a Professional or Officer
   - Authority derived from delegation, not direct appointment
   - Limited to preparatory actions (cannot submit/sign on behalf)

**Critical Distinction:**
> Role defines the RELATIONSHIP.  
> Authority defines the PERMISSION.

A person may be a Director (role) but have limited authority if co-signature is required (authority constraint).

---

#### 1.2.5 Authority
**Definition:** The permission to perform a specific action in relation to a specific entity, derived from role and any applicable constraints.

**Authority Dimensions:**

**Source of Authority:**
- **Inherent:** Derived from legal status (e.g., Director per Companies Act)
- **Delegated:** Granted by another authority holder (e.g., Professional authorized by entity)
- **Assigned:** Granted by platform admin (e.g., MCA Officer role)

**Scope of Authority:**
- **Entity-specific:** Authority applies to one entity only
- **Multi-entity:** Authority applies to multiple entities (Professional managing clients)
- **Service-specific:** Authority limited to specific service types (e.g., authorized for filings, not for changes)

**Temporal Constraints:**
- **Valid From:** Date authority granted
- **Valid Until:** Date authority expires (if applicable)
- **Revocable:** Can be revoked before expiration

**Action Constraints:**
- **Preparatory Actions:** Draft, save, upload documents (low authority required)
- **Consequential Actions:** Submit filing, sign, pay, appoint officer (high authority required)
- **Co-signature Required:** Some actions require multiple authority holders (e.g., two directors)

**Authority Evaluation Model:**
```
CAN_PERFORM(Identity, Role, Entity, Action, Timestamp) → Boolean

WHERE:
  - Identity must be VERIFIED
  - Role must be ACTIVE for Entity at Timestamp
  - Authority derived from Role must include Action
  - No blocking constraints (suspension, revocation, expiration)
```

**Example Authority Scenarios:**

| Identity | Role | Entity | Action | Authority? |
|---|---|---|---|---|
| Priya Sharma | Director | ABC Pvt Ltd | File MGT-7 | ✅ YES (inherent) |
| Priya Sharma | Director | XYZ Ltd | File MGT-7 | ❌ NO (not director of XYZ) |
| Rajesh Kumar (CA) | Professional | ABC Pvt Ltd | File AOC-4 | ✅ YES (if authorized via INC-28) |
| Rajesh Kumar (CA) | Professional | ABC Pvt Ltd | Remove Director | ❌ NO (not director, professional can't remove officers) |
| Amit Singh (Staff) | Delegate | ABC Pvt Ltd | Draft MGT-7 | ✅ YES (preparatory action) |
| Amit Singh (Staff) | Delegate | ABC Pvt Ltd | Submit MGT-7 | ❌ NO (consequential action requires principal) |

---

#### 1.2.6 Entity
**Definition:** The legal entity that is the subject of an MCA service or transaction.

**Entity Types:**
- Company (Public, Private)
- Limited Liability Partnership (LLP)
- Foreign Company
- Other registered entities

**Entity States:**
- **Active:** Entity is operational, can perform all services
- **Inactive:** Entity dormant or under process of closure
- **Struck Off:** Entity removed from register
- **Amalgamated/Merged:** Entity no longer independent

**Entity Context Attributes:**
- Corporate Identity Number (CIN) or LLP Identification Number (LLPIN)
- Entity legal name
- Entity type and sub-type
- Registration date and jurisdiction
- Current status
- Registered office address

**Critical Principle:**
> Entity is the PRIMARY CONTEXT for all authenticated transactional actions.

Not account. Not identity. Not role. **Entity.**

---

### 1.3 Active Entity vs Available Entities

#### 1.3.1 Active Entity
**Definition:** The entity for which the user is currently operating in the authenticated session.

**Characteristics:**
- Exactly ONE active entity at any given time (or NONE)
- Active entity is explicit and visible
- Active entity determines:
  - What obligations are shown
  - What transactions can be accessed
  - What authority is evaluated
  - What context is used for consequential actions

**Initial State:**
- On first login: NO active entity (user must select)
- On subsequent login: MAY restore last active entity (with constraints, see Persistence rules)

**Null State (No Active Entity):**
- User can access:
  - Public registry search
  - Account settings
  - Help and information
  - Entity selection interface
- User CANNOT access:
  - Entity-specific transactions
  - Entity-specific documents
  - Filing services
  - Entity management actions

---

#### 1.3.2 Available Entities
**Definition:** The set of entities for which the user has an active role and can establish entity context.

**Characteristics:**
- MAY be zero (new user with no relationships)
- MAY be one (typical company director)
- MAY be many (professional managing multiple clients)
- MAY be hundreds or thousands (large professional firm)

**Derivation:**
```
AVAILABLE_ENTITIES(Identity, Timestamp) =
  ALL entities WHERE:
    - Identity has an ACTIVE role for Entity at Timestamp
    - Role grants any authority (even preparatory)
    - Entity is not STRUCK OFF
```

**Available Entity List Includes:**
- Entity identifier (CIN/LLPIN)
- Entity legal name
- User's role(s) for that entity
- Authority level indicator (full authority / limited / preparatory only)
- Entity status (active/inactive)
- Recent activity indicator (if applicable)

**Dynamic Nature:**
- Available entities can change between sessions
- New professional authorizations add entities
- Officer resignation removes entities
- Professional authorization revocation removes entities
- Entity closure may remove entity

---

### 1.4 Individual vs Organisation Context

#### 1.4.1 Individual Context
**Definition:** The user is acting as themselves (self) for personal filings or individual-level services.

**Applicable Scenarios:**
- Individual applying for Director Identification Number (DIN)
- Individual filing personal disclosures
- Individual registering as sole proprietor (future scope)

**Context Model:**
- Active Entity: SELF (individual identity)
- Role: Self
- Authority: Inherent (individual can act for themselves)

**UI Implications:**
- Entity switcher shows "Personal / Individual" as an option
- Authority indicators show "Acting as Individual"

**Note:** Even individual context is entity context (entity = the individual).

---

#### 1.4.2 Organisation Context
**Definition:** The user is acting on behalf of a legal entity (company, LLP, etc.).

**Applicable Scenarios:**
- Director filing company annual return
- Professional filing form on behalf of client company
- Partner managing LLP compliance

**Context Model:**
- Active Entity: Organisation (specific CIN/LLPIN)
- Role: Director / Professional / Partner / Authorized Rep
- Authority: Derived from role and authorization documents

**UI Implications:**
- Entity switcher shows organisation name and identifier
- Authority indicators show role and capacity
- Co-signature requirements shown if applicable

---

### 1.5 Multiple Roles on Same Entity

**Scenario:** A person may have more than one role for the same entity.

**Examples:**

1. **Director + Professional**
   - Person is both a Director AND the authorized CA for the same company
   - May occur in small companies where director also provides professional services

2. **Director + Authorized Representative**
   - Person is both a Director AND explicitly authorized representative for specific services

3. **Partner + Professional**
   - Person is LLP Partner AND also the authorized CS

**Authority Resolution:**
- User must select WHICH capacity they are acting in
- Highest authority does NOT automatically apply
- Explicit capacity selection prevents audit ambiguity

**Example:**
```
Priya Sharma is:
  - Director of ABC Pvt Ltd (inherent authority to sign MGT-7)
  - Authorized CA for ABC Pvt Ltd (delegated authority to sign MGT-7)

When filing MGT-7, platform asks:
  "In what capacity are you acting?"
    [ ] Director
    [ ] Chartered Accountant

Reason: Form must record WHO signed in WHAT capacity.
```

**UI Implication:**
- Entity switcher shows "ABC Pvt Ltd (Director)" and "ABC Pvt Ltd (Professional)" as SEPARATE contexts
- OR: Entity selection followed by capacity selection before consequential action

---

## 2. Entity-Context Rules

### 2.1 Purpose of Rules

These rules define the **behavioural contract** that every authenticated MCA service, workflow, and transaction MUST inherit. They are NOT suggestions. They are CONSTRAINTS that ensure:
- No accidental actions on wrong entities
- Authority is always correctly evaluated
- Entity context is explicit at consequential points
- User experience is consistent across all services

**Rule Structure:**
- **Rule ID:** Unique identifier (EC-01, EC-02, etc.)
- **Rule Statement:** Explicit constraint or requirement
- **Rationale:** Why this rule exists
- **Applies To:** What components/services inherit this rule
- **Traceability:** Phase 2 architectural concept(s) it maps to

---

### 2.2 Core Entity-Context Rules

#### Rule EC-01: Mandatory Entity Context for Transactional Actions
**Statement:**  
Every authenticated transactional action MUST have an unambiguous entity context at the point of execution.

**Rationale:**  
Transactional actions create legal obligations, modify registry state, or commit resources on behalf of an entity. Without explicit entity context, the platform cannot determine:
- Which entity the action applies to
- Whether the user has authority
- What compliance obligations are affected
- Where to record the transaction

**Applies To:**
- All filing services (e-forms)
- Entity management actions (appoint/remove officers, change address)
- Payment actions
- Document submissions
- Signature actions
- Case responses

**Does NOT Apply To:**
- Public registry search (no entity context required)
- Account settings (account-level, not entity-level)
- Help/information browsing

**Implementation Constraint:**
- Service MUST verify `ACTIVE_ENTITY ≠ NULL` before allowing transactional action
- Service MUST display active entity identifier at consequential decision points
- Service MUST re-validate entity context if session has been idle

**Traceability:**  
→ Phase 2: **Entity** (canonical concept)  
→ Phase 2: **Transaction** (entity-specific)  
→ Phase 2: **Service** (operates on entity context)

---

#### Rule EC-02: Entity Context Visibility at Consequential Points
**Statement:**  
Active entity context MUST be visible and prominent at all consequential interaction points.

**Rationale:**  
Users managing multiple entities (professionals, multi-entity directors) can accidentally perform actions on the wrong entity if context is not obvious. Consequential actions (submit, pay, sign, appoint, remove) have irreversible or costly-to-reverse effects.

**Consequential Interaction Points:**
- Form submission page (before clicking "Submit")
- Payment confirmation page
- Digital signature page
- Officer appointment/removal confirmation
- Document deletion confirmation
- Case response submission

**Visibility Requirements:**
- Entity name AND identifier (CIN/LLPIN) displayed
- User's role/capacity for that entity displayed
- Visual prominence (e.g., header, confirmation dialog)
- NOT hidden in profile dropdown or navigation menu

**Example (Good):**
```
┌──────────────────────────────────────────────────┐
│ You are submitting MGT-7 for:                    │
│ ABC PRIVATE LIMITED (CIN: U12345MH2020PTC123456) │
│ Your role: Director                               │
│                                                   │
│ [Review Form] [Submit ✓]                         │
└──────────────────────────────────────────────────┘
```

**Example (Bad):**
```
┌──────────────────────────────────────────────────┐
│ MGT-7 Annual Return                              │
│                                                   │
│ [Submit ✓]                                       │
└──────────────────────────────────────────────────┘
(Entity context buried in navigation header)
```

**Traceability:**  
→ Phase 2: **Entity Context Everywhere** (architectural principle)  
→ Phase 3: **Accidental Action Prevention** (product requirement)

---

#### Rule EC-03: Entity Switching Must Not Silently Transfer Transactions
**Statement:**  
Switching active entity MUST NOT silently transfer an in-progress transaction to the newly selected entity.

**Rationale:**  
If a user is drafting MGT-7 for Entity A, switches to Entity B, and the draft silently becomes "MGT-7 for Entity B", the user may unknowingly submit incorrect data. This is a HIGH-RISK accidental action scenario.

**Required Behavior:**
When user attempts to switch entity while a transaction is in progress:

**Option 1 (Recommended): Block Switch with Warning**
```
┌──────────────────────────────────────────────────┐
│ ⚠️  You have an in-progress transaction          │
│                                                   │
│ MGT-7 Annual Return for ABC Private Limited      │
│ Draft saved: 15 minutes ago                       │
│                                                   │
│ Switching entities will leave this draft open.   │
│ You can return to it from your Transactions list.│
│                                                   │
│ [Cancel] [Switch Anyway]                         │
└──────────────────────────────────────────────────┘
```

**Option 2 (Alternative): Save & Exit Transaction**
```
┌──────────────────────────────────────────────────┐
│ ⚠️  Save your work before switching?             │
│                                                   │
│ You are working on MGT-7 for ABC Private Limited.│
│                                                   │
│ [Save Draft & Switch] [Cancel]                   │
└──────────────────────────────────────────────────┘
```

**FORBIDDEN Behavior:**
- Silent entity context change within transaction
- Transferring form data to different entity context
- Continuing transaction with new entity without explicit user confirmation

**Traceability:**  
→ Phase 2: **Transaction** (entity-specific state)  
→ Phase 3: **Accidental Action Prevention** (safety model)

---

#### Rule EC-04: Authority Must Be Evaluated Against Active Entity
**Statement:**  
Authority for any action MUST be evaluated against (Identity × Role × Active Entity × Action), not against identity alone.

**Rationale:**  
A user may have authority for Entity A but not Entity B. Authority is context-dependent. Evaluating authority only at login (against identity) is insufficient.

**Evaluation Points:**
1. **At Action Initiation:** When user attempts to start a service (e.g., clicks "File MGT-7")
2. **At Consequential Step:** When user attempts a high-risk action (e.g., clicks "Submit")
3. **At Session Restoration:** When user returns after idle session

**Evaluation Logic:**
```
EVALUATE_AUTHORITY(Identity, Active_Entity, Action):
  
  1. Verify Identity is VERIFIED
  2. Verify Active_Entity is not NULL
  3. Retrieve all Roles for (Identity, Active_Entity)
  4. For each Role:
       Derive Authority from Role
       If Authority includes Action:
          If no blocking constraints (expiration, revocation):
             RETURN AUTHORIZED
  5. RETURN NOT_AUTHORIZED
```

**Result:**
- **AUTHORIZED:** User may proceed
- **NOT_AUTHORIZED:** Display reason and suggest corrective action

**Example Messages:**
- "You are not a director of ABC Private Limited and cannot remove officers."
- "Your professional authorization for XYZ Ltd expired on 15/07/2026. Please renew your authorization."
- "This action requires Director authority. You are currently acting as Authorized Representative."

**Traceability:**  
→ Phase 2: **Authority** (canonical concept)  
→ Phase 2: **Context-Dependent Authorization** (architectural principle)  
→ Phase 2: **Role** (relationship to entity)

---

#### Rule EC-05: High-Risk Actions Require Explicit Entity/Context Confirmation
**Statement:**  
Actions classified as HIGH-RISK MUST require explicit entity and capacity confirmation before execution.

**High-Risk Action Categories:**
1. **Filing/Submission:** Submitting any e-form to MCA registry
2. **Officer Changes:** Appointing or removing directors, partners, auditors
3. **Payment Actions:** Authorizing fee payment, penalty payment
4. **Signature Actions:** Digitally signing documents or forms
5. **Closure/Termination:** Initiating entity closure, striking-off
6. **Registered Office Change:** Changing registered address (triggers jurisdiction change)
7. **Share Capital Changes:** Altering share structure (companies)
8. **Document Deletion:** Deleting filed documents (if permitted)

**Confirmation Requirements:**
Before executing high-risk action, platform MUST display:
1. Entity name and identifier
2. User's capacity (role)
3. Action being performed
4. Irreversible consequences (if applicable)
5. Explicit confirmation control (checkbox + button, NOT just button)

**Example Confirmation Dialog:**
```
┌────────────────────────────────────────────────────────┐
│ ⚠️  Confirm Officer Removal                            │
│                                                         │
│ You are about to remove:                               │
│   Rajesh Kumar (DIN: 12345678)                         │
│   Position: Director                                   │
│                                                         │
│ From:                                                  │
│   ABC PRIVATE LIMITED (CIN: U12345MH2020PTC123456)    │
│                                                         │
│ Your capacity: Director                                │
│                                                         │
│ This action will:                                      │
│  • File DIR-12 with MCA immediately                    │
│  • Remove director from entity registry                │
│  • Cannot be undone without filing new appointment     │
│                                                         │
│ [✓] I confirm this action                              │
│                                                         │
│ [Cancel] [Proceed with Removal]                        │
└────────────────────────────────────────────────────────┘
```

**Traceability:**  
→ Phase 2: **Transaction** (irreversible state change)  
→ Phase 3: **Accidental Action Prevention** (safety model)  
→ Phase 3: **Multi-Entity Professional Experience** (prevents wrong-entity actions)

---

#### Rule EC-06: No Entity Context Inheritance Across Services
**Statement:**  
Entity context from one completed service MUST NOT automatically transfer to a different service without user confirmation.

**Rationale:**  
If a user completes MGT-7 for Entity A and immediately clicks "File AOC-4", the platform should NOT assume AOC-4 is also for Entity A. User may intend to file AOC-4 for Entity B.

**Exception:**  
If services are part of a DECLARED MULTI-STEP WORKFLOW (e.g., "Incorporate Company" workflow containing INC-32, INC-33, INC-34), entity context MAY persist within that workflow scope.

**Recommended Behavior:**
When user initiates a new service after completing another:
- Retain active entity context in session
- Display active entity prominently at service entry
- Allow user to switch entity before proceeding

**Example:**
```
User completes MGT-7 for ABC Pvt Ltd.
User clicks "File New Form" from navigation.
System displays:

┌──────────────────────────────────────────────────┐
│ Start New Filing                                 │
│                                                   │
│ Current entity: ABC PRIVATE LIMITED              │
│ [Change Entity]                                  │
│                                                   │
│ Which form do you want to file?                  │
│ [Form Search] [Browse by Category]               │
└──────────────────────────────────────────────────┘
```

**Traceability:**  
→ Phase 2: **Service** (discrete unit of business capability)  
→ Phase 3: **Accidental Action Prevention** (prevents assumptions)

---

#### Rule EC-07: Entity Context Must Persist Within Service Lifecycle
**Statement:**  
Once a service transaction is initiated for an entity, that entity context MUST NOT change within the service lifecycle.

**Service Lifecycle:**
1. Service Initiation (user selects form/service)
2. Data Entry (user fills form fields)
3. Document Upload (user attaches documents)
4. Review (user reviews completed form)
5. Submission (user submits form)
6. Acknowledgment (system confirms receipt)

**Constraint:**
Entity context is LOCKED from Step 1 through Step 6.

**Rationale:**
Allowing entity context to change mid-service would:
- Invalidate entered data (e.g., officer names only valid for original entity)
- Create ambiguous transaction state
- Risk submitting form with data from multiple entities

**Exception:**
User may ABANDON transaction and start over with different entity (this is explicit exit, not context change).

**Traceability:**  
→ Phase 2: **Transaction** (entity-specific state machine)  
→ Phase 2: **Service** (operates on entity context)

---

#### Rule EC-08: Null Entity Context for Non-Transactional Browsing
**Statement:**  
Users MUST be able to access non-transactional platform areas with NULL entity context (no active entity selected).

**Non-Transactional Areas:**
- Public registry search
- Public entity information pages
- Account settings (password, email, notifications)
- Help center, FAQs, legal information
- Service catalog (browsing available forms, not starting them)

**Rationale:**
Requiring entity selection for public or account-level actions creates unnecessary friction. A new user with no entity relationships should be able to browse public registry and account settings.

**Constraint:**
Platform MUST distinguish between:
- **Areas that require entity context** (transactional)
- **Areas that operate without entity context** (informational)

Navigation should make this distinction clear.

**Traceability:**  
→ Phase 2: **Public Registry ≠ Transactional Platform** (architectural principle)  
→ Phase 3: **Information Architecture** (public vs authenticated workspace)

---

#### Rule EC-09: Authority Must Be Reevaluated After Prolonged Idle Session
**Statement:**  
If a user's session has been idle beyond a threshold, authority MUST be reevaluated before allowing consequential actions.

**Idle Threshold (Recommendation):** 30 minutes

**Rationale:**
During a long idle period:
- User's authority may have been revoked (e.g., professional authorization withdrawn)
- Officer may have resigned
- Entity may have been struck off
- Regulatory constraints may have changed

**Reevaluation Trigger:**
When user returns after idle period and attempts a CONSEQUENTIAL action (submit, pay, sign):
1. Verify Identity authentication is still valid (may require re-authentication)
2. Re-fetch user's roles for active entity
3. Re-evaluate authority for intended action
4. If authority no longer valid, display reason and block action

**Non-Consequential Actions:**
- Viewing entity information
- Browsing documents
- Reading help content

These do NOT require immediate reevaluation (can rely on cached authority).

**Traceability:**  
→ Phase 2: **Authority** (temporal validity)  
→ Phase 2: **Context-Dependent Authorization** (evaluated at action point)

---

#### Rule EC-10: Explicit Entity Context for Deep Links and Bookmarks
**Statement:**  
When a user accesses a transaction or entity-specific page via deep link or bookmark, entity context MUST be explicitly established before allowing consequential actions.

**Scenario:**
User bookmarks "MGT-7 for ABC Pvt Ltd (draft)".  
User returns 2 weeks later, clicks bookmark.  
Platform displays MGT-7 draft.

**Required Behavior:**
1. Platform restores entity context (ABC Pvt Ltd) from URL/transaction metadata
2. Platform displays entity context prominently: "You are viewing MGT-7 for ABC PRIVATE LIMITED"
3. Platform re-validates user's authority for that entity
4. If authority is still valid, allow user to continue
5. If authority is no longer valid, display reason and block consequential actions (but allow viewing draft)

**Forbidden Behavior:**
- Silently loading transaction without displaying entity context
- Allowing user to submit transaction without confirming entity context
- Assuming entity context is same as last session's active entity

**Traceability:**  
→ Phase 2: **Transaction** (entity-specific state)  
→ Phase 3: **Context Persistence** (deep link handling)

---

#### Rule EC-11: Entity Context Must Not Span Authentication Boundaries
**Statement:**  
Entity context MUST NOT persist after user logs out and logs back in, unless explicitly restored with user confirmation.

**Rationale:**
User may log out, different user may log in on same device (shared workstation). Silently restoring entity context creates security risk.

**Required Behavior:**
On fresh login:
1. Entity context = NULL
2. User must explicitly select entity
3. Platform MAY offer "Recently Used Entities" for convenience
4. User MUST click/confirm to activate entity context

**Exception:**
On session timeout with automatic re-authentication (user never logged out), platform MAY restore entity context IF:
- Re-authentication is immediate (no logout occurred)
- No more than 1 hour elapsed
- User is returned to same page/transaction

**Traceability:**  
→ Phase 2: **Identity** (authenticated individual)  
→ Phase 3: **Context Persistence** (session boundaries)

---

#### Rule EC-12: Entity Context Must Be Invalidated When Entity State Changes
**Statement:**  
If an entity's status changes to INACTIVE, STRUCK OFF, or AMALGAMATED while user has that entity as active context, entity context MUST be invalidated.

**Trigger Events:**
- Entity struck off by ROC
- Entity marked inactive/dormant
- Entity amalgamated/merged into another entity
- Entity dissolved

**Required Behavior:**
1. Platform detects entity state change (via background sync or at action point)
2. If entity is currently active context for any user session, invalidate context
3. Display notification to user:
   ```
   ⚠️  ABC Private Limited has been struck off.
   You can no longer perform transactional actions for this entity.
   You may still view historical filings and documents.
   ```
4. Remove entity from Available Entities list
5. User must select a different entity to continue transactional work

**Non-Transactional Access:**
- User MAY still search for entity in public registry
- User MAY view historical filings (read-only)

**Traceability:**  
→ Phase 2: **Entity** (lifecycle states)  
→ Phase 2: **Transaction** (requires active entity)

---

#### Rule EC-13: Multi-Role Selection Must Be Explicit for Consequential Actions
**Statement:**  
If a user has multiple roles for the same entity, the platform MUST require explicit role/capacity selection before executing consequential actions.

**Scenario:**
Priya Sharma is both:
- Director of ABC Pvt Ltd
- Authorized CA for ABC Pvt Ltd

When Priya attempts to sign MGT-7, platform MUST ask:
```
┌──────────────────────────────────────────────────┐
│ In what capacity are you signing MGT-7?          │
│                                                   │
│ [ ] Director                                     │
│ [ ] Chartered Accountant (ICAI: 123456)         │
│                                                   │
│ [Continue]                                       │
└──────────────────────────────────────────────────┘
```

**Rationale:**
- Signature capacity must be recorded in submitted form
- Audit trail requires explicit capacity
- User may intentionally want to act in specific capacity (e.g., professional capacity for statutory audit signature)

**Applies To:**
- Signature actions
- Form submission (if capacity must be declared)
- Officer appointment/removal (if user can act in multiple capacities)

**Traceability:**  
→ Phase 2: **Role** (relationship type)  
→ Phase 2: **Authority** (derived from role)  
→ Phase 3: **Multiple Roles on Same Entity** (persona scenario)

---

#### Rule EC-14: Entity Context Must Be Queryable for Audit and Debugging
**Statement:**  
Every transactional action MUST record the entity context (entity, role, authority source) at the time of action for audit and debugging purposes.

**Required Metadata:**
For every transaction/action, record:
- Entity CIN/LLPIN
- User Identity (account ID, verified identity)
- Role/Capacity user was acting in
- Authority source (inherent, delegated, assigned)
- Timestamp of action
- User's IP address and session ID (for security audit)

**Use Cases:**
- Regulatory audit: "Who filed this form and in what capacity?"
- User dispute: "I didn't submit this form" → verify entity context at submission time
- Security investigation: "Was this user authorized to perform this action at this time?"
- Debugging: "Why did this action fail?" → check entity context validity

**Traceability:**  
→ Phase 2: **Transaction** (audit trail)  
→ Phase 2: **Authority** (evaluation must be traceable)

---

#### Rule EC-15: Entity Context Must Be Recoverable After System Error
**Statement:**  
If a system error or session interruption occurs during a transaction, the platform MUST allow the user to recover the transaction with original entity context intact.

**Scenario:**
User is filling MGT-7 for ABC Pvt Ltd.  
Browser crashes or server times out.  
User returns and re-authenticates.

**Required Behavior:**
1. Platform identifies incomplete transaction associated with user identity
2. Platform displays: "You have an incomplete transaction: MGT-7 for ABC PRIVATE LIMITED"
3. User clicks "Resume"
4. Platform restores:
   - Entity context (ABC Pvt Ltd)
   - Entered form data (from autosave)
   - Uploaded documents
   - User's role/capacity
5. User continues from point of interruption

**Data Integrity:**
- Autosave MUST include entity context metadata
- Transaction recovery MUST verify entity context is still valid (entity active, user still has authority)

**Traceability:**  
→ Phase 2: **Transaction** (state machine with resume capability)  
→ Phase 3: **Context Persistence** (recovery after interruption)

---

## 3. Architecture Traceability

### 3.1 Phase 2 Canonical Concepts Mapping

This section maps the Entity-Centric Experience Model to Phase 2 Architecture Baseline canonical concepts, demonstrating that the product-layer entity context model is a direct implementation of architectural invariants.

---

#### 3.1.1 Identity (Phase 2 Concept)

**Phase 2 Definition:**  
"Identity" represents the verified legal person (individual or organization) interacting with the platform.

**Phase 3 Implementation:**
- **Account** (authentication mechanism) → linked to → **Identity** (verified person)
- Identity verification levels: UNVERIFIED, VERIFIED, PROFESSIONAL
- Identity is stable; authority is context-dependent

**Product Rules Derived:**
- Rule EC-04: Authority evaluated against Identity × Entity × Role, not Identity alone
- Rule EC-09: Authority reevaluated after idle session (identity validity may change)

**Consistency Check:** ✅ CONSISTENT  
Product model does NOT treat identity as authority source. Identity is input to authority evaluation function.

---

#### 3.1.2 Role (Phase 2 Concept)

**Phase 2 Definition:**  
"Role" defines the relationship between an identity and an entity (Director, Professional, Partner, etc.).

**Phase 3 Implementation:**
- Role types: Self, Officer, Professional, Authorized Representative, Delegate/Staff
- Role is entity-specific (person may have different roles for different entities)
- Role is the relationship; authority is derived from role

**Product Rules Derived:**
- Rule EC-13: Multi-role selection required for consequential actions
- Rule EC-04: Authority evaluation requires Role as input

**Consistency Check:** ✅ CONSISTENT  
Product model treats role as relationship type, not permission set.

---

#### 3.1.3 Authority (Phase 2 Concept)

**Phase 2 Definition:**  
"Authority" is context-dependent permission to perform an action, derived from role and any applicable constraints.

**Phase 3 Implementation:**
- Authority = f(Identity × Role × Entity × Action × Timestamp)
- Authority dimensions: Source (inherent/delegated/assigned), Scope (entity-specific/multi-entity), Temporal (valid from/until), Action Constraints (preparatory/consequential)
- Authority evaluation at action initiation, consequential step, session restoration

**Product Rules Derived:**
- Rule EC-04: Authority evaluated against active entity
- Rule EC-09: Authority reevaluated after idle session
- Rule EC-12: Authority invalidated when entity state changes

**Consistency Check:** ✅ CONSISTENT  
Product model implements context-dependent authorization as specified in Phase 2.

---

#### 3.1.4 Entity (Phase 2 Concept)

**Phase 2 Definition:**  
"Entity" is the primary context for all transactional MCA services. Services operate on entities, not on user accounts.

**Phase 3 Implementation:**
- Active Entity: exactly one entity selected at any time (or none)
- Available Entities: set of entities user has roles for
- Entity context required for all transactional actions
- Entity context visible at consequential points

**Product Rules Derived:**
- Rule EC-01: Mandatory entity context for transactional actions
- Rule EC-02: Entity context visibility at consequential points
- Rule EC-07: Entity context locked within service lifecycle
- Rule EC-08: Null entity context allowed for non-transactional browsing

**Consistency Check:** ✅ CONSISTENT  
Product model makes entity the PRIMARY CONTEXT, not account or identity.

---

#### 3.1.5 Delegation (Phase 2 Concept)

**Phase 2 Definition:**  
"Delegation" allows an authority holder to grant limited authority to another person (e.g., Professional delegates preparatory work to Staff).

**Phase 3 Implementation:**
- Role type: Delegate/Staff
- Authority scope: Preparatory actions only (draft, save, upload)
- Consequential actions (submit, sign, pay) require principal, not delegate

**Product Rules Derived:**
- Rule EC-04: Authority evaluation distinguishes preparatory vs consequential actions
- Role model includes Delegate/Staff as distinct from Professional/Officer

**Consistency Check:** ✅ CONSISTENT  
Product model implements delegation constraints as specified in Phase 2.

---

#### 3.1.6 Service (Phase 2 Concept)

**Phase 2 Definition:**  
"Service" is a discrete unit of business capability (e.g., "File MGT-7", "Appoint Director"). Services operate on entity context.

**Phase 3 Implementation:**
- Service initiation requires entity context (or prompts for entity selection)
- Service lifecycle locks entity context (cannot change mid-service)
- Service completion does not auto-transfer context to next service

**Product Rules Derived:**
- Rule EC-06: No entity context inheritance across services
- Rule EC-07: Entity context persists within service lifecycle

**Consistency Check:** ✅ CONSISTENT  
Product model treats services as entity-scoped operations.

---

#### 3.1.7 Transaction (Phase 2 Concept)

**Phase 2 Definition:**  
"Transaction" is an instance of a service being executed for a specific entity. Transaction state is entity-specific.

**Phase 3 Implementation:**
- Transaction includes entity context metadata
- Transaction cannot be transferred to different entity
- Transaction recovery restores original entity context

**Product Rules Derived:**
- Rule EC-03: Entity switching does not silently transfer transactions
- Rule EC-15: Entity context recoverable after system error

**Consistency Check:** ✅ CONSISTENT  
Product model treats transactions as entity-bound state machines.

---

#### 3.1.8 Registry (Phase 2 Concept)

**Phase 2 Definition:**  
"Public Registry" is distinct from transactional platform. Public registry does not require authentication or entity context.

**Phase 3 Implementation:**
- Public registry search: NULL entity context allowed
- Public entity information pages: NULL entity context allowed
- Transactional actions: entity context REQUIRED

**Product Rules Derived:**
- Rule EC-08: Null entity context for non-transactional browsing

**Consistency Check:** ✅ CONSISTENT  
Product model distinguishes public registry (no entity context) from authenticated workspace (entity context required).

---

#### 3.1.9 Obligation (Phase 2 Concept)

**Phase 2 Definition:**  
"Obligation" is a compliance requirement that an entity must satisfy (e.g., file annual return by due date).

**Phase 3 Implementation:**
- Obligations are calculated per entity
- Workspace displays obligations for active entity
- Professional dashboard shows obligations across all client entities

**Product Rules Derived:**
- (Not covered in Part 1; detailed in Part 2: Interaction Model)

**Consistency Check:** ✅ CONSISTENT  
Obligations are entity-specific, consistent with Phase 2 model.

---

#### 3.1.10 Case (Phase 2 Concept)

**Phase 2 Definition:**  
"Case" represents an adjudication or dispute lifecycle (e.g., appeal against penalty).

**Phase 3 Implementation:**
- Cases are entity-specific
- User access to case requires authority for that entity
- Case responses require entity context

**Product Rules Derived:**
- Rule EC-01: Transactional actions (case responses) require entity context

**Consistency Check:** ✅ CONSISTENT  
Cases are entity-scoped, consistent with Phase 2 model.

---

### 3.2 Architectural Principles Inherited

| Phase 2 Principle | Phase 3 Implementation |
|---|---|
| **Entity Context Everywhere** | Rule EC-01, EC-02 (mandatory entity context, visibility at consequential points) |
| **Identity ≠ Authority** | Rule EC-04 (authority = f(identity × role × entity × action)) |
| **Context-Dependent Authorization** | Rule EC-04, EC-09 (authority evaluated at action point, reevaluated after idle) |
| **Intent Over Form Numbers** | (Detailed in Intent Model document; entity context supports intent-driven workflows) |
| **Public Registry ≠ Transactional Platform** | Rule EC-08 (null entity context for public browsing) |
| **Services = Compositions** | Rule EC-06 (services are discrete; entity context does not auto-transfer) |
| **Transaction ≠ Filing ≠ Case** | Rule EC-07 (entity context locked within transaction lifecycle) |

**Conclusion:** ✅ All Phase 2 architectural principles are preserved and implemented in the entity-centric experience model. No contradictions or deviations.

---

## 4. Document Status

**Completion Status:** ✅ PART 1 COMPLETE

**What This Part Established:**
1. ✅ Entity Context Model (Person → Account → Identity → Role → Authority → Entity chain)
2. ✅ Canonical definitions (Identity, Role, Authority, Entity, Active/Available Entities)
3. ✅ Individual vs Organisation context
4. ✅ Multiple roles on same entity
5. ✅ Entity-Context Rules (EC-01 through EC-15)
6. ✅ Architecture Traceability (Phase 2 canonical concepts mapping)

**What This Part Did NOT Cover:**
- ⏳ Entity selection and switching UX (detailed in PART 2)
- ⏳ Context persistence across pages/sessions (detailed in PART 2)
- ⏳ Authority visibility in UI (detailed in PART 3)
- ⏳ Accidental-action prevention mechanisms (detailed in PART 3)
- ⏳ Professional multi-entity experience (detailed in PART 4)
- ⏳ Entity profile structure (detailed in PART 4)
- ⏳ Edge case handling (detailed in PART 5)
- ⏳ Model stress test (detailed in PART 5)

---

## 5. Next Steps

**Proceed to:**  
**PART 2: Interaction & Persistence Model**

**Part 2 Will Define:**
- Entity selection mechanisms (first login, entity search, favourites)
- Entity switching rules and workflows
- Context persistence (cross-page, cross-session, deep links)
- Session timeout and re-authentication handling
- Unfinished transaction handling during entity switch

**Dependency:** Part 2 inherits all rules (EC-01 through EC-15) defined in Part 1.

---

**END OF PART 1**
