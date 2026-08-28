# PERSONAS AND ACTOR CONTEXTS

**MCA Digital Platform Transformation**  
**Phase 3 Product Definition — Part 3**  
**Date:** 28 August 2026  
**Status:** DRAFT — User actor models and context scenarios

---

## Executive Summary

This document defines WHO uses the future MCA platform, in WHAT CONTEXTS, with WHAT AUTHORITY, for WHAT GOALS.

**Critical Distinction:**
```
PERSON ≠ ACCOUNT ≠ IDENTITY ≠ ROLE ≠ AUTHORITY
```

A single person may:
- Hold multiple roles (director, professional, partner)
- Operate across multiple entities (Company A, Company B, LLP C)
- Have different authority per entity (signatory for A, not for B)
- Delegate authority to staff (with limited scope)
- Act in different capacities (self as director vs professional for client)

**These are NOT demographic personas.**  
These are **actor context models** focused on: goal, authority, entity relationship, frequency, expertise, workflow needs, failure points.

---

## 1. Persona Framework

### 1.1 Persona Dimensions

**Every persona includes:**
- **Actor Type:** Who they are
- **Primary Goal:** What they come to MCA to accomplish
- **Authority Context:** How authority is established
- **Entity Relationship:** Single entity, multi-entity, no entity, public only
- **Frequency of Use:** Daily, weekly, monthly, annual, event-driven, one-time
- **Expertise Level:** Novice, intermediate, expert
- **Information Needs:** What they need to know to act
- **Common Failure Points:** Where things typically go wrong
- **Workflow Needs:** How they work (linear, iterative, coordination, bulk)
- **Accessibility Needs:** Any specific accessibility requirements
- **Trust & Risk:** What they're worried about

---

## 2. Primary Personas (12)

### PERSONA 1: Public User / Researcher

**Actor Type:** Unauthenticated or registered user with no entity affiliation

**Primary Goals:**
- Research entity information (company, LLP, director)
- Verify entity status and compliance
- Check director/partner information
- Access public filings
- Download public documents
- Obtain certified copies
- Verify charges registered
- Research sector/industry data

**Authority Context:**
- No statutory authority required
- Public access entitlement only
- May require payment for documents

**Entity Relationship:** None (public access)

**Frequency:** Event-driven (due diligence, research, verification)

**Expertise:** Novice to intermediate (varies: general public, investors, journalists, academics)

**Information Needs:**
- "Is this entity legitimate?"
- "Who are the directors?"
- "What's the entity's compliance status?"
- "Are there any charges registered?"
- "What documents are available?"
- "How much does a certified copy cost?"

**Common Failure Points:**
- Cannot find entity (spelling, CIN/LLPIN unknown)
- Unclear what's public vs restricted
- Unclear how to obtain certified copy
- Payment process unclear
- Document provenance unclear (is this official?)

**Workflow Needs:**
- Fast search
- Clear entity profile
- One-click document access
- Simple payment for paid services
- Clear indication of document authenticity

**Accessibility Needs:**
- Screen reader compatible search and results
- Clear navigation
- Keyboard accessible

**Trust & Risk:**
- "Is this official government data?"
- "Is this document authentic?"
- "Am I seeing current or outdated information?"

**Product Implications:**
- Public search must be fast and intuitive
- Entity profiles must be clear and authoritative
- Provenance must be explicit (registry timestamp, source)
- Payment for documents must be seamless
- No accidental exposure of private transactional data

---

### PERSONA 2: First-Time Founder

**Actor Type:** Promoter starting first company, no prior MCA experience

**Primary Goals:**
- Understand what's required to start a company
- Complete incorporation (SPICe+)
- Obtain DIN for self and co-founders
- Understand post-incorporation obligations

**Authority Context:**
- Acts as promoter (pre-incorporation)
- Becomes director (post-incorporation)
- No prior entity relationship

**Entity Relationship:** Will create first entity

**Frequency:** One-time (incorporation), then periodic (compliance)

**Expertise:** Novice

**Information Needs:**
- "How do I start a company?"
- "What documents do I need?"
- "How much does it cost?"
- "What's a DIN?"
- "What's a DSC?"
- "How long does it take?"
- "What do I need to do after incorporation?"
- "Why is this required?" (for every field)

**Common Failure Points:**
- Overwhelmed by complexity (11 forms in SPICe+)
- Don't understand DIN vs DSC vs PAN vs Aadhaar
- Missing required documents
- Don't know what MOA/AOA means
- Incorrect capital structure
- Don't understand post-incorporation obligations
- Payment failure
- DSC issues (don't have one, technical problems)

**Workflow Needs:**
- Step-by-step guided process
- Progressive disclosure (don't show everything at once)
- Contextual help at every step
- Clear explanations (avoid jargon)
- Examples of correct values
- Ability to save and resume (won't complete in one session)
- Clear checklist of requirements

**Accessibility Needs:**
- Simple language
- Clear visual hierarchy
- Keyboard navigation
- Screen reader compatible

**Trust & Risk:**
- "Am I doing this correctly?"
- "Will my application be rejected?"
- "What if I make a mistake?"
- "Is my payment secure?"
- "What happens if I miss something?"

**Product Implications:**
- Intent-first entry ("I want to start a company")
- Guided requirements explanation with legal basis
- Progressive disclosure (wizard-style)
- Contextual help at every step
- Save/resume functionality
- Clear error messages with recovery guidance
- Post-incorporation obligation generation

---

### PERSONA 3: Existing Company Director

**Actor Type:** Director of established company, periodic MCA interaction

**Primary Goals:**
- File annual return (MGT-7)
- File financial statements (AOC-4)
- Complete annual director KYC (DIR-3 KYC)
- Change directors when needed
- Change registered office
- Update capital structure
- Track compliance status
- Respond to notices

**Authority Context:**
- Director of specific company
- May be authorized signatory or not
- Authority checked per transaction

**Entity Relationship:** Single entity (or few entities if serial entrepreneur)

**Frequency:** 
- Annual (MGT-7, AOC-4, DIR-3 KYC)
- Event-driven (director change, office change, capital change)
- As-needed (notices, queries)

**Expertise:** Intermediate (knows regulatory basics, recurring work)

**Information Needs:**
- "What's due for my company?"
- "What's the deadline?"
- "What happened to my last submission?"
- "What documents are required?"
- "Who needs to sign?"
- "What if I miss the deadline?"
- "Do I need to update anything after a change?"

**Common Failure Points:**
- Forget annual obligations (miss deadlines)
- Incorrect financial year period
- Missing auditor signature
- Payment failure
- Don't realize obligation is due until after deadline
- Don't understand what triggered a notice
- Can't find previous year's data
- Multi-party coordination (getting auditor/other director to sign)

**Workflow Needs:**
- Entity-centric workspace ("What's due for my company?")
- Proactive obligation reminders
- Prefill from previous year
- Multi-party signature coordination
- Transaction status visibility
- Deadline tracking with warnings
- Ability to delegate to CA/CS/staff

**Accessibility Needs:**
- Standard accessibility (keyboard, screen reader)
- Clear status indicators
- Actionable notifications

**Trust & Risk:**
- "Will I miss a deadline?"
- "Is my company compliant?"
- "What if there's an error in the filing?"
- "Can I trust staff/professional to file correctly?"

**Product Implications:**
- Entity-centric workspace showing obligations
- Obligation engine calculates due dates
- Prefill from previous transactions
- Multi-party signature orchestration
- Clear transaction status
- Delegation mechanism
- Proactive deadline notifications

---

### PERSONA 4: Company Compliance Staff

**Actor Type:** In-house compliance officer or company secretary working for employer entity

**Primary Goals:**
- Manage all entity compliance
- Track deadlines
- Prepare filings
- Coordinate with directors/auditors for signatures
- Respond to queries
- Maintain filing history

**Authority Context:**
- Acts under company's authority
- May have draft/edit permissions
- May not have signing authority (requires director DSC)
- May have payment authority

**Entity Relationship:** Single employer entity (company context)

**Frequency:** Daily (monitoring, preparing, tracking)

**Expertise:** Expert (knows regulations, forms, deadlines)

**Information Needs:**
- "What's overdue?"
- "What's coming up?"
- "Who hasn't signed yet?"
- "Where's the transaction stuck?"
- "What did the officer query?"
- "What's the filing history?"
- "Have all post-event obligations been satisfied?"

**Common Failure Points:**
- Directors don't sign on time
- Auditor delayed
- Payment approval delayed
- Query response requires director input (director unavailable)
- System doesn't show which signatures are pending
- Can't track multiple transactions simultaneously
- Can't bulk-download certificates

**Workflow Needs:**
- Dashboard showing all obligations across entity
- Multi-transaction visibility
- Signature status per transaction ("Who still needs to sign?")
- Query/deficiency visibility
- Bulk operations where appropriate
- Reporting/export for internal tracking
- Handoff to director for signing

**Accessibility Needs:**
- Efficient keyboard navigation (power user)
- Clear visual indicators of status
- Accessible tables/dashboards

**Trust & Risk:**
- "Did I miss anything?"
- "Will director sign on time?"
- "Is submission correct?"
- "What if there's a penalty?"

**Product Implications:**
- Compliance dashboard (entity-level)
- Multi-transaction visibility
- Signature tracking ("pending signatures" view)
- Draft/edit without signing authority
- Notification to signers
- Query response workflow
- Reporting capabilities

---

### PERSONA 5: LLP Partner / Designated Partner

**Actor Type:** Partner or designated partner of LLP, regulatory role

**Primary Goals:**
- File LLP annual return (Form 11)
- File LLP financial disclosures (Form 8)
- Change partners (Form 3, 4)
- Change LLP details
- Track LLP compliance

**Authority Context:**
- Partner: May have signing authority
- Designated Partner: Statutory compliance responsibility

**Entity Relationship:** Single LLP (or multiple if portfolio)

**Frequency:** 
- Annual (Forms 8, 11)
- Event-driven (partner changes)

**Expertise:** Intermediate

**Information Needs:**
- "What's due for my LLP?"
- "What's different from company compliance?"
- "Who needs to sign?"
- "What are designated partner obligations vs partner obligations?"

**Common Failure Points:**
- Confuse company rules with LLP rules
- Unclear which partner must sign
- Contribution details unclear
- Partnership deed requirements
- Designated partner-specific obligations

**Workflow Needs:**
- LLP-specific workspace (don't assume company workflow)
- Partner coordination for signatures
- LLP-specific obligation tracking
- Clear distinction between partner and designated partner obligations

**Accessibility Needs:**
- Standard accessibility

**Trust & Risk:**
- "Is my LLP compliant?"
- "Am I fulfilling designated partner obligations?"

**Product Implications:**
- LLP context distinct from company context
- LLP-specific obligations calculated
- Partner vs designated partner authority
- LLP-specific forms and workflows

---

### PERSONA 6: Chartered Accountant (Professional)

**Actor Type:** Professional (CA) representing multiple client entities

**Primary Goals:**
- File annual returns for clients (MGT-7)
- File financial statements for clients (AOC-4)
- Provide auditor signature
- Manage multiple client entities
- Track obligations across client portfolio
- Respond to queries on behalf of clients

**Authority Context:**
- Acts as professional representative
- Authority granted by client entity
- Professional DSC for auditor signatures
- Authority scope varies per client

**Entity Relationship:** Multi-entity (10-100+ client companies/LLPs)

**Frequency:** Daily (across portfolio)

**Expertise:** Expert

**Information Needs:**
- "What's due across all my clients?"
- "Which client has overdue obligations?"
- "Where are transactions stuck?"
- "Which client needs my signature?"
- "What queries need response?"
- "Which client needs what service?"

**Common Failure Points:**
- Entity switching cumbersome (100 clients = 100 switches)
- Can't see cross-client dashboard
- Authority unclear (can I sign for this client?)
- Can't bulk-track transactions across clients
- Client doesn't provide timely data
- Multi-party signature coordination (client director + me)

**Workflow Needs:**
- **Multi-entity workspace** (all clients at once)
- Cross-client obligation dashboard
- Entity filter/search within workspace
- Authority indicator per entity
- Bulk transaction visibility
- Quick entity switching
- Signature queue ("What needs my signature?")

**Accessibility Needs:**
- Efficient navigation (power user)
- Keyboard shortcuts for entity switching
- Clear visual grouping by entity

**Trust & Risk:**
- "Did I miss a client deadline?"
- "Do I have authority for this client?"
- "Is client data correct?"

**Product Implications:**
- **Multi-entity workspace is CRITICAL**
- Cross-entity obligation dashboard
- Authority indicator per entity per service
- Fast entity switching
- Signature queue view
- Professional-specific notification preferences

---

### PERSONA 7: Company Secretary (Professional)

**Actor Type:** Professional (CS) representing client entities

**Primary Goals:**
- Manage statutory compliance for clients
- File board resolutions
- Manage director changes for clients
- File secretarial audit
- Track compliance across clients

**Authority Context:**
- Professional representative
- Authority scope per client
- CS-specific services

**Entity Relationship:** Multi-entity (client portfolio)

**Frequency:** Daily (across portfolio)

**Expertise:** Expert

**Information Needs:**
- Same as CA (multi-entity professional)
- "Which client needs director change filing?"
- "Which client has pending board resolution filing?"

**Common Failure Points:**
- Same as CA (multi-entity coordination)
- Service-specific: secretarial audit, director change coordination

**Workflow Needs:**
- Multi-entity workspace (same as CA)
- CS-specific service access

**Accessibility Needs:**
- Same as CA

**Trust & Risk:**
- Same as CA

**Product Implications:**
- Multi-entity workspace (shared need with CA)
- CS-specific service permissions
- Authority scope per client

---

### PERSONA 8: Professional Staff / Delegate

**Actor Type:** Junior staff working under CA/CS professional

**Primary Goals:**
- Draft filings for professional review
- Prepare documents
- Upload data
- Track transaction status
- Flag issues for professional attention

**Authority Context:**
- Delegated authority from professional
- Can draft/edit, CANNOT sign
- Professional must approve/sign
- Limited scope (specific clients, specific services)

**Entity Relationship:** Multi-entity (delegated clients only)

**Frequency:** Daily

**Expertise:** Intermediate

**Information Needs:**
- "What can I do vs what requires professional?"
- "Which transactions need professional sign-off?"
- "Is professional aware of this query?"
- "What's the status of my drafts?"

**Common Failure Points:**
- Unclear delegation scope (can I do this for this client?)
- Professional doesn't sign in time
- No visibility into what's awaiting professional action
- Accidentally try to submit without professional approval

**Workflow Needs:**
- Clear delegation scope indicator
- Draft/edit mode with handoff to professional
- "Awaiting professional approval" status
- Notification to professional when draft ready
- Cannot accidentally submit without authority

**Accessibility Needs:**
- Standard accessibility

**Trust & Risk:**
- "Am I authorized for this?"
- "Will professional approve my work?"

**Product Implications:**
- Delegation model with scope (entities, services, actions)
- Draft state with professional approval required
- Handoff workflow (staff → professional)
- Authority indicator ("you can draft, not sign")
- Professional notification when ready for review

---

### PERSONA 9: Authorized Representative (Non-Professional)

**Actor Type:** Authorized individual acting for entity (not CA/CS, not director)

**Primary Goals:**
- File on behalf of entity under mandate/authorization
- Limited scope services

**Authority Context:**
- Explicit authorization/mandate from entity
- Scope defined by authorization
- Time-limited authorization

**Entity Relationship:** Specific entity (single or few)

**Frequency:** Event-driven

**Expertise:** Intermediate

**Information Needs:**
- "Am I authorized for this service?"
- "What's the scope of my authority?"
- "Is my authorization still valid?"

**Common Failure Points:**
- Authority validation fails
- Authorization expired
- Unclear scope

**Workflow Needs:**
- Authority verification at service entry
- Clear scope indicator
- Authorization expiry warning

**Accessibility Needs:**
- Standard accessibility

**Trust & Risk:**
- "Is my authorization valid?"
- "Can I legally act for this entity?"

**Product Implications:**
- Authorization verification
- Scope and validity display
- Reject if authority invalid with explanation

---

### PERSONA 10: MCA Officer (Internal)

**Actor Type:** MCA staff (ROC, RD, officer) reviewing/processing transactions

**Primary Goals:**
- Review assigned transactions
- Evaluate STP eligibility
- Validate documents
- Issue queries/deficiencies
- Approve/reject transactions
- Update registry
- Issue notices
- Manage cases (scrutiny, adjudication)

**Authority Context:**
- Regulatory authority
- Assigned jurisdiction
- Assigned queue/case

**Entity Relationship:** No entity relationship (acts on behalf of MCA)

**Frequency:** Daily

**Expertise:** Expert

**Information Needs:**
- "What's in my queue?"
- "What's the transaction history?"
- "Are all documents present?"
- "What's the entity's compliance history?"
- "What queries are outstanding?"
- "What's the legal basis for this requirement?"
- "What's the rule version?"

**Common Failure Points:**
- Incomplete transaction data
- Missing documents
- Entity has compliance issues (not visible)
- Rule version unclear
- No audit trail of previous officer actions

**Workflow Needs:**
- Review queue (assigned transactions)
- Transaction details with full context
- Entity compliance profile
- Document viewer
- Query issuance workflow
- Approval/rejection with rationale
- Audit trail of actions
- Rule reference (why is this required?)

**Accessibility Needs:**
- Efficient navigation (power user)
- Keyboard accessible
- Clear visual indicators

**Trust & Risk:**
- "Is my decision correct?"
- "Is there precedent?"
- "Am I following the correct rule version?"

**Product Implications:**
- Officer workbench (review queue)
- Transaction context with entity compliance history
- Document viewer integrated
- Query issuance workflow
- Decision rationale capture (audit trail)
- Rule reference display (version, source)
- Case management capabilities

---

### PERSONA 11: Adjudication Participant (Entity/Person Under Proceeding)

**Actor Type:** Entity or person subject to adjudication/enforcement proceedings

**Primary Goals:**
- Understand notice received
- Gather evidence
- Respond to notice within deadline
- Attend hearing
- View order issued
- Request clarification
- Appeal if needed

**Authority Context:**
- Respondent in case
- May engage professional for representation

**Entity Relationship:** Entity or person (self) is subject of case

**Frequency:** Event-driven (if proceedings initiated)

**Expertise:** Novice to intermediate (legal complexity)

**Information Needs:**
- "What am I accused of?"
- "What's the deadline to respond?"
- "What evidence do I need?"
- "Who's the adjudicating authority?"
- "When's the hearing?"
- "What was the order?"
- "Can I appeal?"

**Common Failure Points:**
- Miss response deadline
- Don't understand legal terminology
- Don't know what evidence is required
- Miss hearing notification
- Don't understand order implications

**Workflow Needs:**
- Clear notice display with deadline
- Evidence upload
- Response submission with confirmation
- Hearing date/details visibility
- Order download
- Case timeline visibility

**Accessibility Needs:**
- Clear language (legal but understandable)
- Accessible documents
- Clear deadline warnings

**Trust & Risk:**
- "What happens if I don't respond?"
- "Will there be penalties?"
- "Can I get professional help?"

**Product Implications:**
- Case management (entity-side)
- Notice display with deadline
- Response workflow
- Evidence upload
- Hearing details
- Order access
- Appeal mechanism

---

### PERSONA 12: Investor / Claimant (IEPF)

**Actor Type:** Investor claiming IEPF amounts or securities

**Primary Goals:**
- Search for claimable amounts
- Submit claim (IEPF-5)
- Track claim status
- Receive payment/securities

**Authority Context:**
- Claimant identity verification
- Entitlement verification

**Entity Relationship:** Investor in specific entity

**Frequency:** Event-driven (one-time claim)

**Expertise:** Novice

**Information Needs:**
- "Do I have unclaimed amounts?"
- "How do I claim?"
- "What documents do I need?"
- "How long does it take?"
- "Where's my claim?"

**Common Failure Points:**
- Can't find claimable amounts
- Don't have required documents (old share certificates, bank proofs)
- Identity verification issues
- Claim status unclear

**Workflow Needs:**
- IEPF amount search
- Claim submission workflow
- Document upload
- Claim status tracking
- Clear timeline expectations

**Accessibility Needs:**
- Simple language
- Clear instructions
- Accessible forms

**Trust & Risk:**
- "Will I get my money?"
- "Is this legitimate?"
- "What if my documents are rejected?"

**Product Implications:**
- IEPF search capability
- Claim submission workflow (IEPF-5)
- Document validation
- Claim status visibility
- Clear processing timeline

---

## 3. Authority Context Scenarios

### 3.1 Scenario Matrix

| **Scenario** | **Person** | **Role** | **Entity** | **Authority** | **Outcome** |
|---|---|---|---|---|---|
| **Simple Director, Single Entity** | Rajesh | Director | ABC Pvt Ltd | Authorized signatory | ✓ Can sign for ABC |
| **Director, Multiple Entities** | Rajesh | Director | ABC Pvt Ltd, XYZ Ltd | Signatory for ABC only | ✓ Can sign for ABC, ✗ Cannot sign for XYZ |
| **Professional, Client Entity** | Meera (CA) | Professional | Client Co Ltd | Engagement letter authority | ✓ Can file AOC-4 for Client Co |
| **Professional Staff** | Amit (works under Meera) | Delegated staff | Client Co Ltd | Draft only, Meera must sign | ✓ Can draft, ✗ Cannot sign |
| **Director + Professional** | Rajesh | Director (ABC) + CA (Client Co) | ABC + Client Co | Different capacity per entity | Must choose role: acting as director of ABC or CA for Client Co |
| **Unauthorized User** | Priya | No role | ABC Pvt Ltd | No relationship | ✗ Cannot act for ABC |
| **Expired Authority** | Suresh | Former director | ABC Pvt Ltd | Resigned 01-Jan-2025 | ✗ No longer authorized (effective date) |
| **Public User** | Anyone | None | None | Public access | ✓ Can search, ✗ Cannot file |
| **Partner, LLP** | Neha | Designated Partner | PQR LLP | Statutory role | ✓ Can file for PQR LLP |

---

### 3.2 Multi-Entity Authority Challenge

**Problem:** Meera (CA) represents 50 client companies. She's also director of her own firm (Meera & Associates Pvt Ltd).

**Challenge:**
- When she logs in, which entity is active?
- If she starts "File Annual Return," is it for a client or her own firm?
- How does she switch between 50 clients efficiently?
- How does she know her authority scope per client?

**Product Solution:**
1. **Entity Selection Required:** No default entity. Must explicitly select active entity before starting transaction.
2. **Multi-Entity Dashboard:** Shows all entities (her firm + 50 clients) with obligations visible per entity.
3. **Entity Filter/Search:** Can search "Client Name" to filter dashboard.
4. **Authority Indicator:** Each entity shows: "Professional Representative" or "Director" with scope.
5. **Fast Entity Switching:** Dropdown or quick-switch in header (with search).
6. **Context Persistence:** Active entity persists through transaction (can't accidentally switch mid-flow).

---

### 3.3 Delegation Scope Challenge

**Problem:** Meera (CA) delegates work to Amit (junior staff). Amit can draft filings but Meera must sign.

**Challenge:**
- How does Amit know what he can do?
- How does Meera know what's waiting for her approval?
- What if Amit tries to submit without Meera's signature?

**Product Solution:**
1. **Explicit Delegation Record:** Meera creates delegation: Amit → Clients A, B, C → Services: AOC-4, MGT-7 → Actions: Draft, Edit → Cannot: Sign, Submit
2. **Authority Indicator for Amit:** When Amit selects Client A, system shows: "You can: Draft, Edit. You cannot: Sign, Submit. Requires: Meera's approval."
3. **Draft State:** Amit's work saved as "Draft - Awaiting Professional Approval."
4. **Notification to Meera:** "Amit has prepared draft for Client A AOC-4."
5. **Meera's Approval Queue:** Meera sees "Pending Your Approval" dashboard with drafts from Amit.
6. **Signature Enforcement:** System prevents Amit from submitting (button disabled, clear message).

---

### 3.4 Signing Authority Challenge

**Problem:** ABC Pvt Ltd has 3 directors: Rajesh (MD), Sunita, and Vikram. Only Rajesh and Sunita are authorized signatories per board resolution. MGT-7 requires 2 director signatures.

**Challenge:**
- How does system know who can sign?
- How does Vikram know he cannot sign?
- How does system collect 2 signatures?

**Product Solution:**
1. **Authorized Signatory Registry:** ABC Pvt Ltd entity record includes: Authorized Signatories: Rajesh, Sunita (effective 15-Jan-2024, per board resolution BR-2024-01).
2. **Signature Rules:** MGT-7 service rules: "Requires 2 director signatures from authorized signatories."
3. **Authority Check:** When Vikram tries to sign: "You are a director of ABC Pvt Ltd, but you are not an authorized signatory per board resolution BR-2024-01. Only Rajesh or Sunita can sign."
4. **Signature Orchestration:** System requests signatures from Rajesh and Sunita. Shows status: "Rajesh: Signed. Sunita: Pending."
5. **Notification:** Sunita receives: "MGT-7 for ABC Pvt Ltd requires your signature. Rajesh has already signed."

---

## 4. Persona → Product Capability Mapping

| **Persona** | **Primary Capabilities Used** |
|---|---|
| **Public User** | Search & Discovery, Registry Access, Document Access, Payment (for certified copies) |
| **First-Time Founder** | Service Discovery (intent), Requirements Explanation, Data Collection (guided), Document Handling, Signature, Payment, Workflow, Obligation Tracking, Help |
| **Existing Director** | Entity Context, Workspace, Obligation Tracking, Data Collection (prefill), Signature, Payment, Status, Notifications |
| **Compliance Staff** | Workspace, Obligation Tracking, Multi-Transaction Visibility, Signature Tracking, Query Response, Reporting |
| **LLP Partner** | Entity Context (LLP), Workspace, Obligation Tracking (LLP-specific), Signature |
| **CA Professional** | **Multi-Entity Workspace**, Cross-Client Dashboard, Authority Indicator, Signature Queue, Fast Entity Switching |
| **CS Professional** | **Multi-Entity Workspace**, Cross-Client Dashboard, Authority Indicator |
| **Professional Staff** | Delegation Scope Indicator, Draft/Edit (no sign), Handoff Workflow, Notification to Professional |
| **Authorized Rep** | Authorization Verification, Scope Indicator, Limited Services |
| **MCA Officer** | Review Queue, Transaction Context, Entity Compliance History, Document Viewer, Query Issuance, Decision Rationale, Rule Reference, Case Management |
| **Adjudication Participant** | Case Management (entity-side), Notice Display, Response Workflow, Evidence Upload, Hearing Details, Order Access |
| **Investor/Claimant** | IEPF Search, Claim Submission, Document Upload, Claim Status Tracking |

---

## 5. Critical Product Requirements from Personas

### 5.1 Multi-Entity Workspace (Critical for Professionals)

**Required for:** CA, CS, Professional Staff  
**Why Critical:** Professionals manage 10-100+ client entities. Single-entity workspace is unusable.

**Requirements:**
- Cross-entity obligation dashboard
- Entity filter/search
- Fast entity switching (< 2 clicks)
- Authority indicator per entity
- Signature queue across all entities ("What needs my signature?")
- Entity-scoped transaction history

---

### 5.2 Delegation & Authority Model (Critical for Professionals + Staff)

**Required for:** CA/CS (delegators), Professional Staff (delegates), Authorized Representatives  
**Why Critical:** Professionals delegate to staff; staff must know their scope.

**Requirements:**
- Explicit delegation record (grantor, grantee, scope)
- Authority indicator ("You can: X, Y. You cannot: Z. Requires: Professional approval.")
- Draft state with professional approval workflow
- Notification to professional when ready
- Enforcement (cannot submit without authority)

---

### 5.3 Obligation Tracking & Proactive Compliance (Critical for All Filers)

**Required for:** Directors, Compliance Staff, LLP Partners, Professionals  
**Why Critical:** Missing deadlines results in penalties; users need proactive tracking.

**Requirements:**
- Obligation calculation (entity profile + rules)
- Upcoming obligations (30 days, 60 days)
- Overdue obligations (with penalty risk)
- Completed obligations (history)
- Legal basis for obligation ("Why is this due?")
- Next actions ("What should I do?")

---

### 5.4 Signature Orchestration (Critical for Multi-Party Filings)

**Required for:** Directors (coordinating), Professionals (auditor signature), Compliance Staff  
**Why Critical:** Many filings require 2+ signatures (directors, auditors).

**Requirements:**
- Multi-party signature collection (sequential or parallel)
- Signature status per transaction ("Who hasn't signed?")
- Notification to pending signers
- Authorized signatory validation (only authorized signers can sign)
- Handoff workflow (staff prepares → director signs → professional signs)

---

### 5.5 Public Search & Entity Profile (Critical for Public Users)

**Required for:** Public Users, Investors  
**Why Critical:** Primary use case for public access.

**Requirements:**
- Fast entity search (name, CIN, LLPIN, DIN)
- Clear entity profile (public data only)
- Filing history visibility
- Charge visibility
- Director/partner visibility (public data)
- Document access (public documents)
- Certified copy request

---

### 5.6 Officer Workbench (Critical for Internal Processing)

**Required for:** MCA Officers  
**Why Critical:** Officers need efficient review tools.

**Requirements:**
- Review queue (assigned transactions)
- Transaction context (full history, entity compliance profile)
- Document viewer (integrated)
- Query issuance workflow
- Decision rationale capture
- Rule reference (version, source)
- Audit trail visibility

---

## 6. Accessibility Personas

### 6.1 Screen Reader User (Visually Impaired)

**Needs:**
- Semantic HTML (headings, landmarks, labels)
- Keyboard navigation (no mouse required)
- Clear focus indicators
- Alt text for images
- ARIA labels for dynamic content
- Skip links (skip to main content)
- Form field labels and error messages read correctly
- Status messages announced

**Critical Journeys:** All core journeys must be screen-reader accessible

---

### 6.2 Keyboard-Only User (Motor Disability)

**Needs:**
- All functionality accessible via keyboard
- Logical tab order
- Visible focus indicators
- No keyboard traps
- Shortcuts for common actions (entity switching, save, submit)

**Critical Journeys:** All core journeys must be keyboard-accessible

---

### 6.3 Low-Literacy User (Language Barrier, Low Education)

**Needs:**
- Simple language (avoid jargon)
- Clear explanations
- Examples of correct values
- Visual aids (icons, illustrations)
- Error messages in plain language

**Critical Journeys:** Incorporation, Annual Return, Public Search

---

## 7. Persona Validation Plan

**Phase 3 Validation:**
1. Validate persona goals with user interviews (MCA stakeholders + sample users)
2. Validate authority scenarios with MCA legal/operations
3. Validate multi-entity professional needs with CA/CS associations
4. Validate first-time founder needs with startup ecosystem
5. Validate officer needs with MCA internal staff

**Phase 3 Output:**
- Validated persona refinements
- Authority scenario corrections
- Capability priority ranking

---

## 8. Persona Status

**Personas:** ✅ **COMPLETE (DRAFT)**

**Next Steps:**
1. Design intent model (how personas discover services)
2. Design information architecture (how personas navigate)
3. Design user journeys (how personas accomplish goals)
4. Design service blueprints (detailed service flows per persona)

**Critical Insights:**
- Multi-entity workspace is CRITICAL (professionals)
- Delegation model is CRITICAL (professional staff)
- Obligation tracking is CRITICAL (all filers)
- Signature orchestration is CRITICAL (multi-party filings)
- Public search is CRITICAL (public users)
- Officer workbench is CRITICAL (internal)

---

**END OF PERSONAS AND ACTOR CONTEXTS**

**Status:** READY FOR INTENT MODEL AND INFORMATION ARCHITECTURE DESIGN

