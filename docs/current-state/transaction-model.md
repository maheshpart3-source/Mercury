# MCA Phase 1 - Transaction Model

**Document Purpose:** Document the current transaction lifecycle, states, and processing model.

**Last Updated:** 27 August 2026

---

## Evidence and Methodology

**Data Sources:**
- Government transaction volume data (3.84 crore filings, 3.33 crore STP, 40.8 lakh ROC/RD, 8.3 lakh rejections)
- Audit document transaction state taxonomy
- Third-party sources on filing process
- Statutory processing requirements

**Evidence Classification:**
- **VERIFIED:** Confirmed by official government statistics
- **INFERRED:** Logical deduction from volumes and standard e-governance patterns
- **ASSUMED:** Reasonable workflow inference pending validation

---

## Transaction Definition

**Transaction (Filing):**
A complete cycle from user initiating a form submission to final registry update or rejection.

**Transaction Identifier:** SRN (Service Request Number) - generated upon submission

**Transaction Scope:** All e-form submissions (company, LLP, DIN, other)

---

## Transaction State Machine

### Core States (INFERRED per Evidence Matrix and Assumptions)

```
┌─────────────────────────────────────────────────────────────┐
│                    TRANSACTION LIFECYCLE                     │
└─────────────────────────────────────────────────────────────┘

[USER INITIATES SERVICE]
          │
          ↓
    [DRAFT] ←──────────────────┐
          │                     │ (Save and continue later)
          ↓                     │
    [VALIDATING] ───────────────┘ (Field validation errors)
          │
          ↓
    [VALIDATED] (All validations pass)
          │
          ↓
    [DSC SIGNING] (Apply digital signature)
          │
          ↓
    [FEE CALCULATION]
          │
          ↓
    [PAYMENT PENDING / IN PROGRESS]
          │
          ↓
    [PAYMENT VERIFIED]
          │
          ↓
    [SUBMITTED] ──────────> SRN GENERATED
          │
          ├──> [STP PROCESSING] (Automated)
          │         │
          │         ├──> [STP APPROVED] ────┐
          │         │                       │
          │         └──> [FLAGGED FOR REVIEW]
          │                   │              │
          │                   ↓              │
          └──> [UNDER REVIEW] (Human)       │
                    │                        │
                    ├──> [CPC/CPACE QUEUE]  │
                    ├──> [ROC QUEUE]        │
                    └──> [RD QUEUE]         │
                          │                  │
                          ├──> [QUERY RAISED]
                          │         │        │
                          │         ↓        │
                          │    [RESUBMISSION REQUIRED]
                          │         │        │
                          │         ↓        │
                          │    [RESUBMITTED] │
                          │         │        │
                          │         └────────┘
                          │                  │
                          ├──> [APPROVED] ───┤
                          │                  │
                          └──> [REJECTED]    │
                                             │
                  ┌──────────────────────────┘
                  │
                  ↓
          [REGISTRY UPDATED]
          [CERTIFICATE/ORDER ISSUED]
          [NOTIFICATION SENT]
                  │
                  ↓
            [COMPLETED]
```

### State Definitions

#### 1. DRAFT
**Definition:** Form started but not yet submitted  
**Evidence:** INFERRED (Standard e-filing pattern per A08)  
**User Actions Available:**
- Continue editing
- Save progress
- Delete draft
- Validate
- Submit (if validation passes)

**System Behavior:**
- Autosave (possible)
- Session persistence
- Prefill from master data (per government confirmation)
- Real-time field validation (per government confirmation)

**Duration:** Indefinite (until user submits or deletes)

**Validation Required:** Draft management in My Workspace, autosave frequency, expiration policy

---

#### 2. VALIDATING
**Definition:** Form undergoing real-time validation checks  
**Evidence:** VERIFIED (Government confirms "real time validations" in V3)  
**Validation Types:**
- Field-level (format, mandatory, range)
- Cross-field (dependencies, calculations)
- Business rules (eligibility, prerequisites)
- Master data checks (CIN/DIN/LLPIN existence)

**User Experience:**
- Immediate feedback on errors
- Inline error messages
- Prevents submission if validation fails

**Validation Required:** Specific validation rules by form, error message catalog

---

#### 3. VALIDATED
**Definition:** All validations passed, ready for signing  
**Evidence:** INFERRED  
**User Actions Available:**
- Proceed to DSC signing
- Review and edit (returns to Draft)

---

#### 4. DSC SIGNING
**Definition:** User applying digital signature  
**Evidence:** VERIFIED (DSC mandatory per statutory requirement and A11)  
**Process:**
- DSC selection (if multiple)
- DSC password entry
- Signature application
- Signature verification

**Validation Required:** DSC signing UX, error handling for DSC issues

---

#### 5. FEE CALCULATION
**Definition:** System calculating applicable fees  
**Evidence:** INFERRED (Fee Enquiry service exists)  
**Calculation Inputs:**
- Form type
- Entity type and capital (if applicable)
- Filing timing (on-time vs late)
- Resubmission (additional fee if applicable)

**Calculation Outputs:**
- Base fee
- Additional fee (if late)
- Total payable

**Validation Required:** Fee calculation rules, display to user

---

#### 6. PAYMENT PENDING / IN PROGRESS
**Definition:** Payment required but not yet completed  
**Evidence:** INFERRED per A10, A29  
**User Actions:**
- Proceed to payment gateway
- Select payment mode (net banking, card, UPI)
- Complete payment

**System Behavior:**
- Generate payment reference/challan
- Redirect to payment gateway
- Await payment confirmation

**Duration:** Variable (until payment completed or timeout)

**Validation Required:** Payment timeout policy, failed payment handling

---

#### 7. PAYMENT VERIFIED
**Definition:** Payment confirmed and reconciled  
**Evidence:** INFERRED per A30  
**System Behavior:**
- Payment reconciliation
- Link payment to filing
- Generate receipt
- Enable submission

**Validation Required:** Payment reconciliation mechanism, timing

---

#### 8. SUBMITTED
**Definition:** Form submitted to MCA, SRN generated  
**Evidence:** VERIFIED (SRN tracking service exists, per A08)  
**System Behavior:**
- Create immutable transaction record
- Generate SRN (Service Request Number)
- Send acknowledgment to user
- Queue for processing
- Send notification (email/SMS possible)

**User Visibility:**
- SRN displayed
- Status: "Submitted" or "Under Processing"
- Estimated timeline (if provided)

**This is Point of No Return** (form data locked, corrections require resubmission)

**Validation Required:** SRN format, acknowledgment method

---

#### 9. STP PROCESSING (Straight Through Processing)
**Definition:** Automated processing without human intervention  
**Evidence:** VERIFIED (3.33 crore STP approvals out of 3.84 crore total = 86.7%)  
**Eligibility:** Form-specific (certain forms, certain scenarios)  

**STP Checks (INFERRED):**
- Automated business rule validation
- Master data consistency checks
- Cross-reference with existing filings
- Compliance history checks
- Flagging rules (for e-Scrutiny)

**Outcomes:**
- **STP APPROVED:** Automatic approval (majority case)
- **FLAGGED FOR REVIEW:** Automated system flags for human review

**Duration:** Minutes to hours (fast processing)

**Validation Required:** STP eligibility by form, STP business rules, flagging criteria

---

#### 10. FLAGGED FOR REVIEW
**Definition:** STP processing identified issue requiring human review  
**Evidence:** INFERRED (Gap between 3.33 crore STP + 40.8 lakh human approvals vs 3.84 crore total)  
**Reasons (INFERRED):**
- Business rule exception
- Unusual pattern detected
- High-risk entity/transaction
- e-Scrutiny selection
- Incomplete automated validation

**Next Step:** Routed to human review queue (CPC/ROC/RD)

**Validation Required:** Flagging criteria, user notification of review status

---

#### 11. UNDER REVIEW (Human Processing)
**Definition:** Filing under review by MCA officer  
**Evidence:** VERIFIED (40.8 lakh ROC/RD approvals confirmed)  
**Review Queues:**
- **CPC/CPACE** (Central Processing Centre for specified services)
- **ROC** (Registrar of Companies - jurisdiction-based)
- **RD** (Regional Director - for specific matters)

**Officer Actions:**
- Review filing details
- Verify documents
- Check compliance
- Apply expertise/judgment
- Decide: Approve / Query / Reject

**Duration:** Days to weeks (slower than STP)

**User Visibility:**
- Status: "Under Review" or "Processing"
- Queue type may/may not be visible

**Validation Required:** Queue assignment rules, officer workflow, user status visibility

---

#### 12. QUERY RAISED
**Definition:** Officer identified deficiency requiring user correction  
**Evidence:** INFERRED (Part of 8.3 lakh rejection/query process)  
**Query Process:**
- Officer documents deficiency
- Query notice generated
- Notice sent to user (email/portal notification)
- User views query details
- Deadline for response/resubmission

**Query Types (INFERRED):**
- Document deficiency
- Data inconsistency
- Statutory non-compliance
- Clarification needed
- Supporting evidence required

**User Actions:**
- View query details
- Correct the issue
- Upload additional documents if needed
- Resubmit

**Validation Required:** Query notification method, query detail visibility, response deadline

---

#### 13. RESUBMISSION REQUIRED
**Definition:** User must correct and resubmit  
**Evidence:** INFERRED (Queries must lead to resubmission or abandonment)  
**User Actions:**
- Access original submission
- View query/rejection reasons
- Make corrections
- Re-sign with DSC
- Pay additional fee (if applicable)
- Resubmit

**System Behavior:**
- Link to original SRN
- Preserve original submission (audit trail)
- Generate new SRN or update existing (to be validated)

**Validation Required:** Resubmission process, fee rules, SRN handling

---

#### 14. RESUBMITTED
**Definition:** Corrected filing resubmitted for processing  
**Evidence:** INFERRED  
**Process:**
- Returns to processing queue (STP or human review)
- Reviewed against original query
- Processed to approval or further query

**Validation Required:** Resubmission routing, priority handling

---

#### 15. APPROVED
**Definition:** Filing accepted and approved  
**Evidence:** VERIFIED (3.33 crore STP + 40.8 lakh manual = ~3.74 crore approvals out of 3.84 crore)  
**System Behavior:**
- Update electronic registry (master data)
- Generate certificate/order (if applicable)
- Send approval notification
- Update entity status/records
- Make public (if applicable)

**User Visibility:**
- Status: "Approved" or "Completed"
- Download certificate/order
- View updated master data
- Receipt/proof of filing

**Outcomes by Form Type:**
- **Incorporation:** CIN issued, Incorporation Certificate
- **Annual Return:** Compliance recorded
- **Director Change:** Registry updated
- **Charge:** Charge registered

**Duration:** Immediate to few days (certificate generation)

**Validation Required:** Approval notification, certificate availability, registry update timing

---

#### 16. REJECTED
**Definition:** Filing not accepted  
**Evidence:** VERIFIED (8.3 lakh officer rejections confirmed)  
**Rejection Process:**
- Officer documents rejection reasons
- Rejection order generated
- User notified
- Filing marked as rejected

**Rejection Reasons (INFERRED):**
- Fundamental non-compliance
- Incorrect form used
- Entity ineligible for service
- Fraudulent/false information
- Statutory violation

**User Options:**
- View rejection reasons
- File fresh application (if eligible)
- Appeal/compounding (if applicable)
- Rectify issue and refile

**No automatic resubmission** for rejections (unlike queries)

**Validation Required:** Rejection reasons, appeal process, refiling options

---

#### 17. REGISTRY UPDATED
**Definition:** Master data/registry updated with approved filing information  
**Evidence:** INFERRED per A22  
**Updates:**
- Company/LLP master data
- Director master data
- Charges register
- Public documents repository
- Compliance status

**Visibility:**
- Public master data reflects update
- Users can verify via master data search

**Validation Required:** Registry update timing, propagation delays

---

#### 18. CERTIFICATE/ORDER ISSUED
**Definition:** Official document generated (where applicable)  
**Evidence:** INFERRED (Incorporation certificates, orders mentioned in services)  
**Certificate Types:**
- Incorporation Certificate
- Name Change Certificate
- Certificate of Filing
- ROC Orders
- RD Orders

**Format:** Digital (PDF) with digital signature/seal

**Availability:** Download from My Workspace or via document request

**Validation Required:** Certificate types by form, download mechanism

---

#### 19. COMPLETED
**Definition:** Transaction lifecycle complete  
**Evidence:** INFERRED  
**Characteristics:**
- Final state (no further processing)
- Audit trail preserved
- Accessible for history/reference
- May trigger downstream obligations (next due dates)

**User Actions:**
- View completed transaction
- Download documents
- Track next obligation

---

## State Transition Rules

### Valid Transitions

| From State | To State(s) | Trigger |
|-----------|-------------|---------|
| Draft | Validating | User clicks Validate/Submit |
| Validating | Draft | Validation errors found |
| Validating | Validated | All validations pass |
| Validated | DSC Signing | User proceeds |
| DSC Signing | Fee Calculation | DSC applied successfully |
| Fee Calculation | Payment Pending | Fee calculated |
| Payment Pending | Payment Verified | Payment successful |
| Payment Verified | Submitted | System submits filing |
| Submitted | STP Processing | Form eligible for STP |
| Submitted | Under Review | Form requires human review |
| STP Processing | Approved | Automated approval |
| STP Processing | Flagged for Review | Automated flag raised |
| Flagged for Review | Under Review | Routed to officer queue |
| Under Review | Query Raised | Officer identifies deficiency |
| Under Review | Approved | Officer approves |
| Under Review | Rejected | Officer rejects |
| Query Raised | Resubmission Required | User receives query |
| Resubmission Required | Resubmitted | User resubmits corrected filing |
| Resubmitted | STP Processing / Under Review | Re-processing |
| Approved | Registry Updated | Automatic trigger |
| Approved | Certificate Issued | Automatic trigger (if applicable) |
| Registry Updated | Completed | Automatic trigger |
| Rejected | Completed | Automatic trigger |

---

## Processing Statistics (VERIFIED)

**Source:** Government data 2021-2025

| Metric | Volume | Percentage |
|--------|--------|------------|
| **Total Filings** | 3.84 crore | 100% |
| **STP Approvals** | 3.33 crore | 86.7% |
| **ROC/RD Approvals** | 40.8 lakh | 10.6% |
| **Officer Rejections** | 8.3 lakh | 2.2% |
| **Unaccounted** | ~2.3 lakh | 0.6% (possibly pending, withdrawn, or errors) |

**Key Insights:**
- **86.7% automation rate** - Majority processed via STP
- **10.6% require human review** - But still approved
- **2.2% rejection rate** - Relatively low, suggests good validation
- **High throughput** - 3.84 crore over 5 years = ~76.8 lakh/year = ~6.4 lakh/month

---

## Processing Paths

### Path 1: Ideal STP Path (86.7% of filings)
```
Draft → Validate → Sign → Pay → Submit → STP → Approved → Registry Updated → Completed
Duration: Minutes to hours
User Experience: Fast, automated, minimal wait
```

### Path 2: STP with e-Scrutiny (subset of STP)
```
Draft → Validate → Sign → Pay → Submit → STP → Approved → Registry Updated
  → (Later) e-Scrutiny Review → Potential Post-Approval Action
Duration: Immediate approval, later scrutiny
User Experience: Initially fast, possible later query
Note: Per A16, e-Scrutiny operates post-STP-approval
```

### Path 3: Human Review Path (10.6% of filings)
```
Draft → Validate → Sign → Pay → Submit → Under Review (ROC/RD) → Approved → Registry Updated → Completed
Duration: Days to weeks
User Experience: Longer wait, manual processing
```

### Path 4: Query and Resubmission Path
```
Draft → Validate → Sign → Pay → Submit → Under Review → Query Raised
  → Resubmission Required → User Corrects → Resubmitted → Under Review → Approved → Completed
Duration: Extended (original processing + correction time + re-processing)
User Experience: Requires user action, additional time
```

### Path 5: Rejection Path (2.2% of filings)
```
Draft → Validate → Sign → Pay → Submit → Under Review → Rejected → Completed (Failed)
Duration: Days to weeks
User Experience: Filing fails, user must refile or appeal
Note: Payment typically not refunded for rejections
```

---

## Transaction Metadata

### Data Captured per Transaction (INFERRED)

**Identification:**
- SRN (Service Request Number)
- Transaction ID (system internal)
- Form Type
- Form Version

**Entity Context:**
- Entity Type (Company/LLP/Individual)
- Entity Identifier (CIN/LLPIN/DIN)
- Entity Name

**Filer Context:**
- Filer Name
- Filer DIN/PAN
- Filer Role (Director/Professional/Company User)
- Filer Email/Mobile
- Filer DSC details

**Temporal:**
- Draft Created Date/Time
- Last Modified Date/Time
- Submission Date/Time
- Payment Date/Time
- Processing Start Date/Time
- Approval/Rejection Date/Time
- Certificate Issue Date/Time

**Financial:**
- Fee Amount
- Additional Fee (if applicable)
- Total Amount
- Payment Mode
- Payment Reference
- Payment Status
- Receipt Number

**Processing:**
- Processing Mode (STP/ROC/RD/CPC/CPACE)
- Processing Officer (if human)
- Processing Notes
- Query Details (if query raised)
- Rejection Reasons (if rejected)
- Resubmission Link (if resubmitted)

**Documents:**
- Attachments List (IDs, filenames, sizes)
- DSC Signature Details
- Certificate ID (if issued)

**Status:**
- Current Status
- Status History (state transitions with timestamps)

**Audit:**
- IP Address
- Browser/Device Info
- Actions Log

**Validation Required:** Complete transaction data model, what is stored vs computed

---

## Notification and Communication

### User Notifications (INFERRED)

| Event | Notification Method | Content |
|-------|-------------------|---------|
| Draft Saved | Dashboard indicator | "Draft saved" |
| Submission Successful | Email + SMS + Dashboard | "SRN: [number], Status: Submitted" |
| Payment Confirmation | Email + SMS | "Payment successful, Receipt: [number]" |
| Under Review | Dashboard | "Your filing is under review" |
| Query Raised | Email + SMS + Dashboard | "Query on SRN: [number], Deadline: [date]" |
| Approved | Email + SMS + Dashboard | "Filing approved, Certificate available" |
| Rejected | Email + SMS + Dashboard | "Filing rejected, Reason: [summary]" |
| Resubmission Deadline | Email + SMS | "Reminder: Resubmit by [date]" |

**Validation Required:** Actual notification triggers, channels, content templates

---

## Service Level Expectations

### Processing Timelines (INFERRED)

| Processing Path | Expected Duration | Notes |
|----------------|-------------------|-------|
| STP | Few hours to 1 day | Automated, fast |
| ROC/RD Review | 7-15 days | Manual, jurisdiction-dependent |
| Query Response Deadline | 15-30 days | User correction time |
| Certificate Generation | 1-3 days post-approval | Automated generation |

**Note:** These are inferred typical timelines. Statutory timelines and actual SLAs require validation.

**Validation Required:** Official SLAs by service, escalation triggers

---

## Exception Handling

### Common Exceptions (INFERRED)

| Exception | Handling |
|-----------|----------|
| Payment Failure | Retry payment or abandon, draft preserved |
| DSC Error | Re-sign or use different DSC |
| Timeout During Submission | Session preservation, resume submission |
| Duplicate Submission | Detect and prevent or merge |
| System Downtime | Queue and process when available |
| Document Upload Failure | Retry, size/format check |
| Validation Rule Change | Grandfather existing drafts or require update |

**Validation Required:** Actual exception handling, error recovery processes

---

## Compliance and Audit Trail

### Audit Requirements (INFERRED)

**Immutability:**
- Once submitted (SRN generated), transaction data is immutable
- Changes require new filing or resubmission
- Complete audit trail of all actions

**Traceability:**
- Who filed (user, role, DSC)
- When filed (timestamp)
- What was filed (form data, documents)
- How processed (STP/manual, approver)
- What outcome (approved/rejected, reasons)

**Retention:**
- Transaction records retained indefinitely (statutory requirement)
- Audit logs retained per policy
- Documents retained per retention schedule

**Access:**
- User can view own transactions
- Entity-authorized users can view entity transactions
- MCA officers can view for regulatory purposes
- Public can view approved public filings (via documents service)

**Validation Required:** Audit trail scope, retention policies, access controls

---

## Integration Points

### Master Data Integration
- **Prefill:** Forms prefill from master data (company/LLP/director details)
- **Validation:** Forms validate against master data (CIN/DIN/LLPIN exist)
- **Update:** Approved filings update master data

### Payment Integration
- **Fee Calculation:** Integrated with fee rules engine
- **Payment Gateway:** Redirect to gateway, callback for confirmation
- **Reconciliation:** Payment linked to SRN, receipt generated

### Document Repository Integration
- **Attachments:** Documents uploaded and stored
- **Certificates:** Generated certificates stored and accessible
- **Public Documents:** Approved filings added to public documents

### Notification Integration
- **Email Gateway:** Send email notifications
- **SMS Gateway:** Send SMS notifications (OTP, status updates)
- **Dashboard:** Update My Workspace status

### Registry Integration
- **Electronic Registry:** Master data repository
- **Charges Register:** Charge-specific registry
- **Public Search:** Master data search service

**Validation Required:** Integration architecture, API contracts, data flow

---

## CRITICAL VALIDATION REQUIREMENTS

### P0 - Essential for Phase 2
1. **Exact state labels** shown to users (verify terminology)
2. **Complete state machine** with all possible transitions
3. **STP eligibility** rules by form
4. **Query and resubmission** process details
5. **Payment timing and reconciliation** process

### P1 - Important for Design
6. **Processing timelines** (SLA by path)
7. **Notification triggers** and content
8. **Exception handling** procedures
9. **e-Scrutiny** operational model
10. **CPC/CPACE vs ROC/RD** routing rules

### P2 - Detailed Design
11. **Transaction metadata** complete schema
12. **Audit trail** requirements
13. **Status history** visibility to users
14. **Resubmission fee** rules
15. **Withdrawal/cancellation** process (if exists)

---

## NEXT STEPS

1. **Access My Workspace** to observe actual transaction statuses
2. **Submit test filing** (if possible) to observe state transitions
3. **Interview users** about query/resubmission experience
4. **Document STP eligibility** rules from MCA
5. **Map officer workflows** for human review path
6. **Validate notification** triggers and channels
7. **Understand e-Scrutiny** selection and timing
8. **Document exception** scenarios and handling
9. **Verify SLA commitments** (if any)
10. **Map transaction to user journey** for each major service

---

**Document Status:** COMPREHENSIVE MODEL WITH VERIFICATION GAPS  
**Evidence Base:** Government statistics + logical workflow modeling  
**Confidence:** HIGH on processing volumes/paths, MEDIUM on state labels, LOW on detailed rules  
**Risk:** State terminology may differ from actual portal; detailed transition rules not known  
**Recommendation:** Validate state machine against live portal transactions before Phase 2 design
