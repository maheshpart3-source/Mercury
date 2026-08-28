# MCA Phase 1 - Current User Flows

**Document Purpose:** Document major current-state user journeys through the MCA portal.

**Last Updated:** 27 August 2026

---

## Note on Evidence

**These are reconstructed journeys** based on:
- Service catalogue
- Form catalogue
- Transaction model
- Statutory requirements
- Third-party user guides

**All flows require validation** against live portal before treating as fact.

**Evidence Level:** INFERRED unless otherwise noted

---

## FLOW 1: New Company Incorporation

**User:** Promoter / Professional  
**Entry Point:** Homepage → "Register Company" card  
**Form:** SPICe+ (integrated incorporation)  
**Outcome:** CIN issued, Company incorporated  

### Prerequisites
- Proposed directors have or will obtain DINs
- Proposed company name decided
- Registered office address identified
- Capital structure defined
- MOA/AOA prepared (or will use model AOA)
- Promoters have DSC

### Detailed Flow

#### Step 1: Name Availability Check (Part of SPICe+ or separate RUN)
1. User logs in (or creates registered user account)
2. Navigate to "Register Company" or "Name Reservation"
3. Enter proposed company name variations (up to 6 options)
4. Select significance/meaning of name
5. Submit name application
6. **System:** Automated name availability check
7. **Outcome:** Name approved (valid 20 days) or rejection with reason

#### Step 2: DIN Obtainment (if directors don't have DIN)
1. Directors complete DIR-3 form individually
2. Provide personal details, PAN, address proof, identity proof
3. Self-attest or notarize
4. Pay DIN fee
5. Submit
6. **System:** Verify and issue DIN (8-digit number)

#### Step 3: Obtain DSC (if not already obtained)
1. Directors approach licensed Certifying Authority
2. Submit identity/address proofs, photograph
3. Physical verification
4. CA issues Class 2/3 DSC
5. **Duration:** 1-3 days

#### Step 4: SPICe+ Filling
1. User (promoter/professional) logs into MCA portal
2. Navigate to "Register Company"
3. Select SPICe+ form
4. **Section: Company Name and Type**
   - Enter approved name
   - Select company type (Private/Public/OPC)
   - Select company category/sub-category
5. **Section: Registered Office**
   - Enter complete address
   - Upload address proof
   - Confirm ROC jurisdiction
6. **Section: Capital**
   - Enter authorized capital
   - Enter paid-up capital
   - Define share structure (face value, number of shares)
7. **Section: Directors**
   - Add directors (minimum based on company type)
   - Enter DIN for each director
   - Provide director details (prefilled from DIN master)
   - Director addresses
   - Director DSC details
   - Director consent
8. **Section: Subscribers/Shareholders**
   - Add subscribers (minimum based on company type)
   - Enter shareholding details
   - PAN, address for each subscriber
9. **Section: MOA/AOA**
   - Upload MOA
   - Upload AOA or adopt model AOA
10. **Section: Business Activities**
    - Select main object and other objects
    - Select business activity codes (NIC codes)
11. **Section: Integrated Services (AGILE-PRO)**
    - Opt for PAN/TAN automatic issuance
    - Opt for EPFO registration
    - Opt for ESIC registration
    - Provide required additional information for each
12. **Section: Declarations**
    - Professional certificate (if filed by professional)
    - Subscriber declarations
    - Director declarations

#### Step 5: Validation
1. **System:** Real-time field validations throughout
2. **System:** Cross-field validations
3. **System:** Check prerequisites (DINs exist, name valid, etc.)
4. **User:** Review all sections
5. Click "Validate" or "Proceed to Sign"
6. **System:** Final comprehensive validation
7. **Outcome:** Validation pass or error messages

#### Step 6: DSC Signing
1. Each director signs with their DSC (in sequence or all together)
2. Subscribers sign (if different from directors)
3. Professional signs (if filing on behalf)
4. **System:** Verify each DSC signature
5. **Outcome:** Form digitally signed

#### Step 7: Fee Payment
1. **System:** Calculate incorporation fee (based on authorized capital per Fee Rules)
2. Display fee breakdown
3. User proceeds to payment
4. **Payment Gateway:** User selects mode (net banking/card/UPI)
5. Complete payment on gateway
6. **System:** Receive payment confirmation
7. **System:** Link payment to SPICe+ application
8. Generate receipt

#### Step 8: Submission
1. User clicks "Submit"
2. **System:** Generate SRN
3. **System:** Create immutable transaction record
4. Display SRN to user
5. Send acknowledgment email/SMS
6. Update My Workspace with submission

#### Step 9: Processing
1. **System:** Queue for processing
2. **STP Processing:** (Most cases)
   - Automated validation against company law rules
   - Check for duplicates, compliance
   - **Outcome:** Auto-approval (minutes to hours)
3. **OR ROC Review:** (If flagged)
   - ROC officer reviews application
   - Verifies documents
   - Checks compliance
   - **Outcome:** Approval or Query (days to weeks)

#### Step 10: Approval and Certificate
1. **System:** Update company registry
2. **System:** Generate CIN (Corporate Identity Number)
3. **System:** Generate Incorporation Certificate (PDF with digital seal)
4. **If AGILE-PRO opted:**
   - Forward to Income Tax for PAN/TAN
   - Forward to EPFO for registration
   - Forward to ESIC for registration
5. **System:** Send approval notification (email/SMS)
6. User downloads Incorporation Certificate from My Workspace
7. Company now Active in Master Data

#### Step 11: Post-Incorporation
1. Promoters/Directors can log in with company context
2. View company master data publicly
3. Receive PAN/TAN (separate communication from Income Tax)
4. Receive EPFO/ESIC registrations (if opted)
5. Company can now file other forms (director changes, compliance, etc.)
6. Commence business (INC-20A required within 180 days)

### Success Criteria
- CIN issued
- Incorporation Certificate obtained
- Company visible in MCA Master Data with "Active" status
- Directors recorded
- Initial shareholders recorded

### Typical Duration
- STP Path: 2-5 days (name reservation + DIN obtainment + SPICe+ processing)
- Manual Review Path: 7-15 days

### Common Failures
- Name rejection (similar existing name)
- DIN issues (duplicate, incorrect details)
- Validation errors (incomplete data, incorrect format)
- Payment failures
- Document issues (unclear scans, format issues)
- ROC query (compliance questions)

**Validation Required:** Actual SPICe+ form structure, integrated services opt-in process, exact processing path

---

## FLOW 2: Annual Compliance (AOC-4 and MGT-7)

**User:** Director / Professional / Company Secretary  
**Trigger:** Annual obligation post-AGM  
**Forms:** AOC-4 (Financial Statements), MGT-7 (Annual Return)  
**Outcome:** Annual compliance recorded  

### Prerequisites
- Company conducted AGM (or entitled not to hold AGM)
- Financial statements prepared and audited
- Board's report prepared
- Annual return data compiled
- Authorized filer has DSC

### Detailed Flow

#### Step 1: AGM and Approvals
1. Company holds AGM
2. AGM approves financial statements
3. AGM approves annual return
4. Record AGM date (important for filing timelines)

#### Step 2: AOC-4 Filing (Within 30 Days of AGM)

**2A. Access Form**
1. User (Director/CS/Professional) logs in
2. Navigate to My Workspace or E-Filing
3. Select "File Annual Return / Financial Statements"
4. Select AOC-4 (or variant: AOC-4 CFS, AOC-4 XBRL, AOC-4 NBFC)

**2B. Fill Financial Statements**
1. **Company Details:** CIN (prefilled), Company name, Financial year
2. **AGM Details:** AGM date, due date for filing
3. **Financial Attachments:**
   - Upload Balance Sheet (PDF)
   - Upload Profit & Loss Statement (PDF)
   - Upload Cash Flow Statement (if applicable)
   - Upload Notes to Accounts (PDF)
   - Upload Auditor's Report (PDF)
   - Upload Board's Report (PDF)
   - Upload XBRL file (if applicable)
4. **Auditor Details:** Name, registration number, firm details
5. **Certifications:** CS/CFO certificates (if required)
6. **Declarations**

**2C. Validation, Signing, Payment, Submission**
1. Validate form
2. Sign with DSC (Director + CS/CA if required)
3. Calculate fee (based on authorized capital)
4. Pay fee
5. Submit → Receive SRN
6. **Processing:** STP or ROC review
7. **Outcome:** Approved, Financial statements recorded

#### Step 3: MGT-7 Filing (Within 60 Days of AGM)

**3A. Access Form**
1. Navigate to E-Filing
2. Select MGT-7 (or MGT-7A if eligible)

**3B. Fill Annual Return**
1. **Company Details:** CIN (prefilled), ROC, Company name, type, etc.
2. **Registered Office:** Current address
3. **Principal Business Activities**
4. **Promoters and Directors:**
   - List all promoters
   - List all directors (with DIN, appointment dates)
   - Changes during the year
5. **Members and Shareholding:**
   - Total members
   - Shareholding pattern (category-wise, shareholder-wise)
   - Top 10 shareholders
   - Changes during the year
6. **Share Capital:**
   - Authorized capital
   - Issued capital
   - Subscribed capital
   - Paid-up capital
7. **Indebtedness:**
   - Secured loans
   - Unsecured loans
   - Debentures
8. **Turnover and Net Worth**
9. **Board Meetings:**
   - Number of meetings
   - Dates of meetings
   - Attendance
10. **Committees:** Audit Committee, Nomination & Remuneration, etc.
11. **Related Party Transactions:** Disclosure
12. **Penalties and Compounding:** If any
13. **Certifications:** CS certificate (for most companies)
14. **Attachments:**
    - Revised balance sheet/statements (if any)
    - Certificates

**3C. Validation, Signing, Payment, Submission**
1. Validate
2. Sign with DSC (Director + CS)
3. Calculate fee
4. Pay fee
5. Submit → Receive SRN
6. **Processing:** STP or ROC review
7. **Outcome:** Approved, Annual return recorded

### Success Criteria
- Both AOC-4 and MGT-7 filed within statutory timelines
- No additional fees (filed on time)
- Approved by ROC
- Company compliance status updated in master data

### Typical Duration
- AOC-4: 1-3 days (if STP)
- MGT-7: 1-3 days (if STP)

### Common Failures
- Late filing (additional fees apply, penalties possible)
- Data inconsistencies between AOC-4 and MGT-7
- Missing certifications
- Incorrect financial data
- Document upload issues

**Validation Required:** Actual AOC-4 and MGT-7 form structures, XBRL requirements, certification requirements

---

## FLOW 3: Director KYC Compliance (DIR-3 KYC)

**User:** Director (individual)  
**Trigger:** Annual KYC requirement  
**Form:** DIR-3 KYC  
**Outcome:** DIN remains active  

### Prerequisites
- Director has DIN
- Director has mobile number and email linked to DIN
- Director has or can obtain DSC or use OTP

### Detailed Flow

#### Step 1: Awareness
1. MCA announces DIR-3 KYC window (typically once per year)
2. Directors receive notification (email/SMS) about due date
3. Deadline communicated (e.g., 30th April, 30th September - varies by notification)

#### Step 2: Access DIR-3 KYC
1. Director logs into MCA portal (registered user account sufficient)
2. Navigate to "DIN Services" or "DIR-3 KYC"
3. Select DIR-3 KYC form

#### Step 3: Enter DIN and Verify
1. Enter DIN
2. **System:** Retrieve director details from master data
3. Display current information on record

#### Step 4: Verify and Update Details
1. **Current Address:**
   - Verify current residential address
   - Update if changed
   - Upload address proof (if address changed)
2. **Mobile and Email:**
   - Verify current mobile number
   - Verify current email
   - Update if changed
   - OTP verification for new mobile/email
3. **Current Directorships:**
   - **System:** Display all companies where DIN is recorded as director
   - Director confirms or flags discrepancies
4. **PAN Linkage:**
   - Verify PAN linked to DIN
   - Link PAN if not linked

#### Step 5: Declarations
1. Declare that all information is true and correct
2. Declare that all directorships are reflected (or notify discrepancies)

#### Step 6: Authentication
**Option A: DSC**
1. Sign form with DSC
2. **System:** Verify DSC

**Option B: OTP**
1. Request OTP to registered mobile
2. Enter OTP
3. **System:** Verify OTP

#### Step 7: Submission
1. Submit DIR-3 KYC
2. **No fee** if filed within due date
3. **System:** Generate acknowledgment
4. Display confirmation

#### Step 8: Processing
1. **System:** Automated processing
2. Verify information consistency
3. **Outcome:** Approval (typically automatic if no issues)

#### Step 9: Confirmation
1. DIN status remains "Active"
2. Confirmation email/SMS sent
3. Next KYC due date noted

### Failure Scenario: Non-Filing
1. If DIR-3 KYC not filed by deadline:
   - DIN marked "Inactive"
   - Director cannot be appointed to new companies
   - Cannot file forms on behalf of existing companies (may be blocked)
2. **Recovery:**
   - File DIR-3 KYC with late fee
   - DIN reactivated upon approval

### Success Criteria
- DIR-3 KYC filed within deadline
- DIN remains active
- All current information updated

### Typical Duration
- 5-10 minutes (form filling)
- Immediate processing

### Common Failures
- Missing deadline (DIN deactivation)
- Incorrect mobile/email (OTP not received)
- Address proof issues (if address changed)
- DSC issues

**Validation Required:** Current DIR-3 KYC due date, OTP vs DSC options, late fee amount, reactivation process

---

## FLOW 4: Charge Registration

**User:** Company + Charge Holder (Bank/Lender)  
**Trigger:** Company creates charge (takes loan with security)  
**Form:** CHG-1  
**Outcome:** Charge registered, publicly visible  
**Timeline:** Must file within 30 days of charge creation or charge is void  

### Prerequisites
- Company has entered into loan/credit agreement with lender
- Security documents executed (mortgage deed, hypothecation agreement, etc.)
- Company has obtained charge holder's consent for registration
- Authorized company representative has DSC

### Detailed Flow

#### Step 1: Charge Creation
1. Company and lender execute loan agreement
2. Company creates charge on assets (mortgage, pledge, hypothecation)
3. Security documents executed and stamped
4. **Note creation date** (30-day clock starts)

#### Step 2: Obtain Charge Holder Consent
1. Company requests lender to provide consent for MCA registration
2. Lender provides consent letter/email
3. Company collects lender details (name, address, email, contact)

#### Step 3: Access CHG-1 Form
1. Company representative logs into MCA portal
2. Navigate to "Charge-Related Services" or "File CHG-1"
3. Select CHG-1 form

#### Step 4: Fill CHG-1 Form
1. **Company Details:** CIN (prefilled), Company name
2. **Charge Details:**
   - Date of charge creation (crucial - within 30 days)
   - Type of charge (Mortgage, Pledge, Hypothecation, Lien, etc.)
   - Description of property/assets covered (detailed)
   - Amount secured (loan amount or facility limit)
   - Terms of charge (interest rate, tenure - summary)
3. **Charge Holder Details:**
   - Charge holder name (Bank/Financial Institution/Creditor)
   - Address
   - Email, contact
4. **Documents:**
   - Upload charge instrument (mortgage deed, hypothecation agreement, etc.)
   - Upload charge holder consent letter
   - Upload board resolution authorizing charge creation
   - Upload list of assets charged (if voluminous)
5. **Declarations:**
   - Declare charge creation date
   - Declare charge holder consent obtained
   - Declare assets unencumbered or details of prior charges

#### Step 5: Validation and Signing
1. Validate form
2. **Charge holder verification** (if integrated) or consent letter suffices
3. Sign with company representative DSC
4. **Optional:** Charge holder digital confirmation (if implemented)

#### Step 6: Fee Payment
1. Calculate fee (prescribed)
2. Pay fee
3. Receive receipt

#### Step 7: Submission
1. Submit CHG-1
2. **System:** Check if within 30 days of creation date
3. If late, system may require condonation application or additional process
4. **System:** Generate SRN
5. Acknowledgment email/SMS

#### Step 8: Processing
1. **System:** Route to ROC (charges typically reviewed by officer)
2. ROC officer reviews:
   - Charge creation date vs filing date (within 30 days?)
   - Charge details and assets
   - Charge holder consent
   - Documents adequacy
3. **Outcome:** Approval or Query

#### Step 9: Registration and Public Visibility
1. **System:** Register charge in charges register
2. Assign Charge ID
3. Make charge publicly visible (searchable by CIN)
4. Update company master data (charges count)
5. Notification to company and charge holder

### Success Criteria
- Charge registered within 30 days of creation
- Charge ID issued
- Charge visible in public charges register
- Lender's interest protected (charge enforceable)

### Typical Duration
- 3-7 days (ROC review)

### Common Failures
- **Late filing** (beyond 30 days): Charge void, requires condonation/court order
- Inadequate asset description
- Missing charge holder consent
- Document quality issues
- Charge creation date unclear

### Modification and Satisfaction
- **CHG-9 (Modification):** File if charge terms modified (with charge holder consent)
- **CHG-4 (Satisfaction):** File when loan repaid and charge satisfied (with charge holder intimation)

**Validation Required:** Exact CHG-1 structure, condonation process for late filing, charge holder verification mechanism

---

## FLOW 5: Public Company/LLP Search and Document Access

**User:** Anyone (public, researcher, investor, professional)  
**Trigger:** Need information about a company/LLP  
**Entry Point:** Master Data Services / View Public Documents  
**Outcome:** Information obtained  

### Flow A: Master Data Search (Free)

#### Step 1: Access Portal
1. User opens MCA portal (no login required for basic search)
2. Navigate to "Master Data" or "Search Company/LLP"

#### Step 2: Search
**Option 1: Company Search**
1. Enter CIN or Company Name
2. Submit search
3. **System:** Search company master database
4. Display list of matching companies (if name search)
5. User selects company from list

**Option 2: LLP Search**
1. Enter LLPIN or LLP Name
2. Submit search
3. Display matching LLPs
4. User selects LLP

**Option 3: Director Search**
1. Enter DIN
2. Submit search
3. Display director name and current directorships

#### Step 3: View Master Data
**Company Master Data Displayed:**
- CIN
- Company Name
- Registration Number and Date
- Company Type, Category, Sub-category
- Status (Active/Dormant/Struck Off/Dissolved/etc.)
- Registered Office Address
- Email (if available)
- Authorized Capital
- Paid-up Capital
- Number of Members
- Date of Last AGM
- Date of Balance Sheet
- ROC Jurisdiction

**LLP Master Data Displayed:**
- LLPIN
- LLP Name
- Date of Incorporation
- Status
- Registered Office
- Number of Partners / Designated Partners
- Total Obligation

**Director Master Data Displayed:**
- DIN
- Name
- DIN Status (Active/Inactive)
- List of Current Directorships (Company Names + CINs)

#### Step 4: Additional Free Services (if available)
- View charges register (for company)
- View index of charges
- View director list (for company)
- View signatory details

### Flow B: View Public Documents (Paid)

#### Step 1: Login Requirement
1. User must have registered user account (if not already logged in)
2. Login to MCA portal

#### Step 2: Navigate to Public Documents
1. Navigate to "View Public Documents" or "Document Services"
2. Search for company/LLP (by CIN/LLPIN or name)

#### Step 3: Select Entity
1. Search results displayed
2. User selects company/LLP

#### Step 4: View Available Documents
**System displays list of available public documents:**
- Incorporation documents (MOA, AOA, Incorporation Certificate)
- Annual Returns (MGT-7, by year)
- Financial Statements (AOC-4, by year)
- Charge documents (CHG-1, CHG-4)
- Resolutions filed (MGT-14)
- Other filed forms (by SRN)

#### Step 5: Select Documents
1. User selects documents to view/download
2. **System:** Display document price (per document or package)
3. User adds to cart or proceeds to payment

#### Step 6: Payment
1. User proceeds to payment
2. Select payment mode (net banking/card/UPI)
3. Complete payment
4. Receive payment confirmation and receipt

#### Step 7: Document Access
1. **System:** Unlock documents for user
2. User can view documents online
3. User can download documents (PDF)
4. Documents accessible from "My Documents" or similar section
5. Access validity: Immediate download, may have time-limited access (to be validated)

### Flow C: Request Certified Copies

#### Step 1: Navigate to Certified Copy Request
1. Login to MCA portal
2. Navigate to "Request Certified Copies" or "Document Services"
3. Select "Certified Copy Request"

#### Step 2: Select Entity and Documents
1. Search for company/LLP
2. Select specific documents requiring certification
3. Specify number of copies (if physical)

#### Step 3: Payment
1. **System:** Calculate fee (higher than uncertified)
2. User pays fee

#### Step 4: Request Submission
1. Submit request
2. **System:** Generate request reference number

#### Step 5: Fulfillment
1. ROC processes request
2. **Digital Certified Copy:** Generated with ROC digital seal, available for download
3. **Physical Certified Copy:** Dispatched to user address (if applicable)
4. User receives notification when ready

### Success Criteria
- User obtains required company/LLP information
- Documents accessed/downloaded successfully
- Certified copies obtained (if requested)

### Typical Duration
- Master Data Search: Immediate
- Public Document Access: Immediate (post-payment)
- Certified Copy: 2-7 days

**Validation Required:** Document pricing structure, certified copy process, access duration

---

## FLOW 6: Company Closure (Strike-Off)

**User:** Directors / Professional  
**Trigger:** Decision to close company  
**Form:** STK-2  
**Outcome:** Company struck off  

### Prerequisites
- Company has been inactive (no business) for at least 1-2 years (varies by route)
- All assets disposed of or distributed
- All liabilities settled
- All dues to ROC, government paid
- No pending litigation
- Directors in agreement

### Detailed Flow

#### Step 1: Determine Eligibility
1. Company checks eligibility for strike-off:
   - Inactive for prescribed period
   - No outstanding returns/filings (or file them now)
   - No liabilities
   - No assets (or assets distributed)
2. Company files all pending returns (if any) before applying for strike-off

#### Step 2: Board Resolution
1. Board of Directors meets
2. Passes resolution for voluntary strike-off
3. Documents resolution

#### Step 3: Stakeholder Consent
1. Obtain consent of all members (shareholders)
2. Obtain consent of all creditors (if any, though ideally none for strike-off)
3. Document consents

#### Step 4: Access STK-2 Form
1. Director logs into MCA portal
2. Navigate to "Close Company" or "Strike-Off Application"
3. Select STK-2 form

#### Step 5: Fill STK-2 Form
1. **Company Details:** CIN, name, type, incorporation date, etc.
2. **Reason for Strike-Off:** Business ceased, company inactive
3. **Assets and Liabilities Statement:**
   - Declare no assets (or assets distributed)
   - Declare no liabilities
   - Provide balance sheet or statement
4. **Compliance Statement:**
   - Declare all statutory returns filed
   - Declare all dues paid
   - Declare no pending litigation
5. **Board Resolution:** Upload
6. **Member Consent:** Upload consents
7. **Indemnity Bond:** Directors indemnify against future claims
8. **Declarations:** Director declarations

#### Step 6: Validation, Signing, Payment, Submission
1. Validate form
2. Sign with all directors' DSC
3. Pay fee (prescribed)
4. Submit → Receive SRN

#### Step 7: Public Notice
1. **System:** ROC publishes public notice (in Official Gazette and on MCA website)
2. **Notice Period:** Typically 30 days
3. **Purpose:** Allow objections from stakeholders (creditors, members, public)

#### Step 8: Objection Period
1. If objections received:
   - ROC reviews objections
   - ROC may reject strike-off application
   - Company may need to address objections
2. If no objections:
   - ROC proceeds with strike-off

#### Step 9: ROC Decision
1. ROC reviews application post-notice period
2. Checks compliance
3. Verifies no objections or objections addressed
4. **Outcome:** Approve Strike-Off or Reject

#### Step 10: Strike-Off and Dissolution
1. **If Approved:**
   - ROC issues strike-off order
   - Company name removed from register
   - Company status changes to "Struck Off"
   - Company ceases to exist (dissolved)
   - Notification published
2. **If Rejected:**
   - Reasons provided
   - Company remains active
   - May need to continue compliance or address issues

### Success Criteria
- Company struck off from register
- Company dissolved
- Directors discharged (subject to indemnity)

### Typical Duration
- 3-6 months (including notice period)

### Common Failures
- Outstanding filings/dues
- Assets not disposed/distributed
- Liabilities exist
- Objections from stakeholders
- Non-compliance issues

### Alternative: Fast Track Exit
- For eligible companies (specific criteria)
- Different form/process
- May be faster

**Validation Required:** STK-2 current eligibility criteria, public notice publication process, objection handling

---

## FLOW 7: IEPF Claim (Investor Reclaiming Amount)

**User:** Investor/Shareholder  
**Trigger:** Investor discovers unclaimed amount transferred to IEPF  
**Form:** IEPF-5  
**Outcome:** Refund from IEPF  

### Prerequisites
- Investor has unclaimed dividend/amount that was transferred to IEPF by company
- Investor has proof of entitlement (share certificates, bank statements, etc.)
- Investor has identity/address proofs
- Investor has or can create registered user account

### Detailed Flow

#### Step 1: Discover Unclaimed Amount
1. Investor hears about unclaimed amounts or IEPF
2. Investor searches IEPF portal/MCA portal for unclaimed amounts
3. **Search by:**
   - Name
   - Company name
   - Folio number
   - PAN
4. **System:** Display unclaimed amounts transferred to IEPF matching search
5. Investor verifies entitlement

#### Step 2: Gather Documents
Investor collects:
- Identity proof (PAN, Aadhaar, Passport, etc.)
- Address proof
- Bank account details (with cancelled cheque or bank statement)
- Original entitlement proof (share certificate, dividend warrant, etc.)
- Indemnity bond (format available on portal)

#### Step 3: Login to MCA Portal
1. Investor creates registered user account (if not existing)
2. Login to MCA portal

#### Step 4: Access IEPF-5 Form
1. Navigate to "Investor Services" or "IEPF Services"
2. Select "Claim Refund from IEPF"
3. Select IEPF-5 form

#### Step 5: Fill IEPF-5 Form
1. **Claimant Details:**
   - Name
   - Father's/Husband's name
   - Address
   - PAN
   - Email
   - Mobile
   - Nationality
2. **Original Entitlement Details:**
   - Company name and CIN
   - Folio number / DP ID-Client ID
   - Number of shares
   - Dividend year/warrant number
   - Amount claimed
3. **IEPF Transfer Details:**
   - Date of transfer to IEPF
   - Amount transferred
   - Verification that amount appears in IEPF records
4. **Bank Details:**
   - Account holder name
   - Bank name, branch
   - Account number
   - IFSC code
5. **Documents Upload:**
   - Identity proof (PAN card)
   - Address proof
   - Cancelled cheque / bank statement
   - Share certificate / demat holding statement
   - Indemnity bond (signed and notarized)
   - Any other supporting documents
6. **Declarations:**
   - Declare entitlement
   - Declare details are true
   - Undertake to return amount if found not entitled

#### Step 6: Verification by Company
1. Submit IEPF-5
2. **System:** Send claim to company for verification
3. Company verifies:
   - Claimant's entitlement
   - Transfer to IEPF
   - Details accuracy
4. Company submits verification report to MCA/IEPF Authority

#### Step 7: IEPF Authority Review
1. IEPF Authority receives claim + company verification
2. Reviews documents and verification
3. Checks IEPF records
4. May seek additional information from claimant or company

#### Step 8: Approval and Refund
1. **If Approved:**
   - IEPF Authority issues refund order
   - Amount transferred to claimant's bank account (via NEFT/RTGS)
   - Notification sent to claimant
2. **If Rejected:**
   - Reasons provided
   - Claimant may appeal or provide additional information

### Success Criteria
- Claim approved
- Amount refunded to investor's bank account

### Typical Duration
- 3-6 months (includes company verification)

### Common Failures
- Inadequate proof of entitlement
- Company unable to verify
- Incorrect bank details (refund fails)
- Claim already processed
- Statutory bar (time limit if applicable)

**Validation Required:** Current IEPF-5 process, company verification mechanism, processing timeline

---

## FLOW 8: Filing Service Complaint / Helpdesk Request

**User:** Any user facing portal or service issue  
**Trigger:** Technical issue, process query, filing problem  
**Entry Point:** Help/Contact Us/Complaints  
**Outcome:** Issue resolution  

### Detailed Flow

#### Step 1: Identify Issue
User encounters problem:
- **Technical:** Portal not loading, form not submitting, payment failure, DSC error
- **Awareness:** Don't know how to file form, unclear instructions
- **Processing:** Filing stuck, unexpected rejection, delay

#### Step 2: Access Help/Complaint System
1. User navigates to "Help" or "Contact Us" or "File Complaint"
2. **Options:**
   - Search FAQs (self-service)
   - View manuals/guides
   - Watch tutorial videos
   - Submit helpdesk ticket/complaint

#### Step 3: Search Self-Service First (Encouraged)
1. User searches FAQs by keyword or browses categories
2. System displays relevant FAQs
3. If FAQ resolves issue → Done
4. If not → Proceed to ticket submission

#### Step 4: Submit Helpdesk Ticket/Complaint
1. User selects "Submit Query" or "File Complaint"
2. **Login:** May require login (or provide email/mobile for tracking)
3. **Complaint Form:**
   - Category (Technical/Process/Filing/Payment/Other)
   - Sub-category (Portal Error/Form Issue/Status Query/etc.)
   - Subject (brief description)
   - Description (detailed issue, steps, error messages)
   - SRN (if related to specific filing)
   - CIN/LLPIN (if related to entity)
   - Screenshot upload (if applicable)
   - Contact details (email, mobile)
4. Submit complaint

#### Step 5: Ticket Creation
1. **System:** Generate ticket number
2. Display ticket number to user
3. Send acknowledgment email/SMS with ticket number
4. User can track ticket status via ticket number

#### Step 6: Ticket Routing and Assignment
1. **System:** Categorize ticket (automated or manual)
2. Route to appropriate team:
   - Technical team (for portal issues)
   - Helpdesk team (for awareness/how-to)
   - Processing team (for filing status issues)
   - ROC (for compliance matters)
3. Assign to agent

#### Step 7: Ticket Processing
**7A. Technical Issues:**
1. Agent reproduces issue
2. Escalates to technical team if needed
3. Fix applied (portal patch, configuration)
4. User notified of resolution
5. User confirms issue resolved

**7B. Awareness/How-To:**
1. Agent provides guidance (email or call)
2. Shares relevant FAQ/manual/tutorial link
3. Walks user through process if needed
4. User confirms understanding

**7C. Processing Issues:**
1. Agent checks filing status in system
2. Investigates delay/stuck status
3. Coordinates with ROC/processing team if needed
4. Updates user on status
5. May escalate to ROC for review
6. Resolution: Filing processed or query answered

**7D. Payment Issues:**
1. Agent checks payment status
2. Verifies payment gateway records
3. Reconciles payment to filing if needed
4. Resolves payment failure (refund, re-attempt)
5. User confirms resolution

#### Step 8: Resolution and Closure
1. Agent provides resolution
2. Updates ticket with resolution details
3. Sends resolution email/SMS to user
4. **User Confirmation:** User may confirm resolution (survey/reply)
5. Ticket marked "Resolved" and closed
6. **Escalation:** If unresolved, ticket escalated to higher level or ROC

#### Step 9: Feedback (Optional)
1. User receives feedback survey
2. User rates helpdesk service (satisfaction score)
3. Feedback used for service improvement

### Success Criteria
- Issue resolved
- User can proceed with intended action
- Ticket closed

### Typical Duration
- Technical issues: 1-3 days
- Awareness queries: Same day to 1 day
- Processing issues: 3-7 days (may require ROC coordination)

### Escalation Path
1. Helpdesk → Senior Helpdesk → ROC → Regional Director → Higher Authority

**Evidence:** 316,877 helpdesk tickets in FY 2025-26 (to 31 Jan), ~98% resolution rate (VERIFIED)

**Validation Required:** Actual complaint submission interface, ticket categories, resolution SLAs, escalation process

---

## Summary: Key User Journey Characteristics

### Common Patterns Across Flows
1. **Login/Authentication:** Most transactional flows require business user login
2. **Form Access:** Navigate to service, select form
3. **Prefill:** System prefills data from master data
4. **Real-Time Validation:** Immediate feedback on errors
5. **DSC Signing:** Required for submission
6. **Fee Payment:** Integrated payment gateway
7. **SRN Generation:** Upon submission
8. **Status Tracking:** Via My Workspace or SRN tracking
9. **Notifications:** Email/SMS at key events
10. **Outcome:** Certificate/registry update or rejection with reasons

### Critical User Experience Elements
- **My Workspace:** Central hub for drafts, filings, status, payments
- **Master Data Search:** Quick access to public information
- **Helpdesk:** Support for issues
- **Notifications:** Keep users informed
- **Certificates:** Easy download of outcomes

### Pain Points (INFERRED, require user research validation)
- Complexity of forms (many fields, statutory language)
- Document requirements (gathering, scanning, uploading)
- DSC issues (expiration, driver installation, technical errors)
- Payment failures and reconciliation
- Status ambiguity (processing stage unclear)
- Query/rejection handling (understanding reasons, corrections)
- Helpdesk response time (for complex issues)

---

## VALIDATION REQUIREMENTS

### P0 - Essential
1. **Validate all flows** against live portal (step-by-step)
2. **My Workspace structure** and functionality
3. **Notification triggers** and content
4. **Payment gateway** provider and UX
5. **Status visibility** in user interface

### P1 - Important
6. **Prefill behavior** by form
7. **Query and resubmission** detailed process
8. **Helpdesk ticket** submission and tracking
9. **Certified copy** request process
10. **e-Scrutiny** user visibility (if any)

### P2 - User Experience
11. **Form instructions** and help text
12. **Error messages** and recovery guidance
13. **Mobile experience** (responsive or app)
14. **Accessibility** compliance
15. **Multi-language** support (if any)

---

**Document Status:** RECONSTRUCTED JOURNEYS - REQUIRE VALIDATION  
**Evidence Base:** Service/form catalogues + transaction model + statutory requirements  
**Confidence:** MEDIUM on major steps, LOW on detailed UX  
**Next Steps:** Validate against live portal, conduct user interviews, observe actual user sessions
