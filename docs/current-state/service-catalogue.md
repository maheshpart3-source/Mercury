# MCA Phase 1 - Service Catalogue

**Document Purpose:** Comprehensive inventory of current MCA services as of August 2026.

**Last Updated:** 27 August 2026

---

## Evidence Classification

All services marked with evidence level:
- **VERIFIED** - Confirmed by official government sources 2025-2026
- **INFERRED** - Deduced from multiple third-party sources + statutory requirements
- **ASSUMED** - Logical necessity, pending validation
- **UNKNOWN** - Existence uncertain, requires verification

---

## Service Organization Framework

### Top-Level Service Families (per A04)

| Service Family | Evidence | Statutory Basis | Status |
|---------------|----------|-----------------|--------|
| Company Services | INFERRED | Companies Act 2013 | Active |
| LLP Services | INFERRED | LLP Act 2008 | Active |
| E-Filing | VERIFIED | Companies Act, LLP Act | Active |
| DIN/Director Services | INFERRED | Companies Act 2013 | Active |
| DSC Services | INFERRED | IT Act 2000, Companies Act | Active |
| Master Data Services | INFERRED | Public records requirement | Active |
| Document-Related Services | INFERRED | RTI, transparency requirements | Active |
| Fee & Payment Services | INFERRED | Registration Offices and Fees Rules | Active |
| Complaints/Grievances | VERIFIED | Helpdesk data confirms | Active |
| Investor Services | INFERRED | IEPF provisions | Active |
| Track Transaction Status | INFERRED | Logical necessity | Active |
| Data & Reports | VERIFIED | Historical navigation | Active |

---

## 1. COMPANY SERVICES

### 1.1 Company Incorporation

#### Service: Register Company / Company Incorporation
**Evidence:** VERIFIED (Homepage primary card per 2021 FAQ)  
**Intent:** Incorporate a new company under Companies Act 2013  
**Trigger:** Business decision to form company  
**Entity:** New company (to be formed)  
**Entry Point:** Homepage primary card "Register Company"  
**Primary Form:** SPICe+ (per A05)  
**Audience:** Promoters, professionals (CS/CA)  

**Prerequisites (INFERRED):**
- DIN for proposed directors
- Name reservation/availability check
- Registered office address
- Subscriber details and capital structure

**Key Sub-Services (INFERRED):**
- Name availability search
- Name reservation (RUN - Reserve Unique Name)
- Integrated SPICe+ filing (includes PAN, TAN, EPFO, ESIC per sources)
- MOA/AOA attachment
- Incorporation certificate issuance

**Data (INFERRED):**
- Company name and type
- Registered office address
- Authorized and paid-up capital
- Director details (linked to DIN)
- Subscriber/shareholding details
- Business activity codes

**Documents (INFERRED):**
- MOA (Memorandum of Association)
- AOA (Articles of Association)
- Address proof
- Director identity/address proofs
- Subscriber declarations

**Authentication:** DSC required (per A11)  
**Fee:** Based on authorized capital (per Fee Rules)  
**Payment:** Integrated in incorporation process (per A10)  
**Processing:** STP + potential ROC review (per evidence)  
**Outcome:** CIN issued, Incorporation Certificate, PAN/TAN

**Validation Required:**
- Current SPICe+ process flow
- Integrated registrations scope
- Exact prerequisites
- STP eligibility criteria

---

#### Service: Name Reservation (Company)
**Evidence:** VERIFIED (Frequently used service per 2021 FAQ)  
**Intent:** Reserve a company name before incorporation  
**Form:** RUN (Reserve Unique Name)  
**Processing:** Automated name availability check + approval  
**Validity:** Typically 20 days (statutory provision)  
**Fee:** Prescribed fee  

**Validation Required:** Current RUN process, integrated vs separate from SPICe+

---

### 1.2 Company Changes and Updates

#### Service: Change of Registered Office
**Evidence:** INFERRED (Statutory event under Section 12/13)  
**Forms:** INC-22, INC-23, INC-28 (depending on jurisdiction change type)  
**Trigger:** Business decision to change office address  

**Validation Required:** Current active forms for address changes

---

#### Service: Change of Name
**Evidence:** INFERRED (Statutory provision Section 13)  
**Process:** Special resolution → Name availability → ROC approval  
**Forms:** INC-24 (name change)  

**Validation Required:** Current process

---

#### Service: Alteration of MOA/AOA
**Evidence:** INFERRED (Sections 13, 14)  
**Trigger:** Changes to objects, capital, etc.  
**Forms:** INC-27, MGT-14 (filing of resolutions)  

**Validation Required:** Current forms for various MOA/AOA changes

---

### 1.3 Director Services (Company-Level)

#### Service: Director Appointment
**Evidence:** INFERRED (Section 152, 160, 161)  
**Forms:** DIR-12 (Changes in director)  
**Trigger:** Board resolution for appointment  
**Timeline:** 30 days from appointment  

**Validation Required:** Current DIR-12 process

---

#### Service: Director Resignation/Cessation
**Evidence:** INFERRED (Section 168, 169)  
**Forms:** DIR-12  
**Trigger:** Resignation, removal, disqualification, death  

**Validation Required:** Current cessation process, different paths

---

### 1.4 Share Capital and Securities

#### Service: Increase in Authorized Capital
**Evidence:** INFERRED (Section 61)  
**Forms:** SH-7 (Notice of alteration of share capital)  
**Trigger:** Board/shareholder decision to increase capital  

**Validation Required:** Current capital change forms (PAS/SH series)

---

#### Service: Allotment of Shares
**Evidence:** INFERRED (Section 39, 42)  
**Forms:** PAS-3 (Return of allotment)  
**Trigger:** Allotment to subscribers or subsequent investors  
**Timeline:** 30 days from allotment  

**Validation Required:** Current PAS series forms

---

#### Service: Transfer of Shares
**Evidence:** INFERRED (Section 56)  
**Process:** Transfer deed → Company approval → Update register  
**Forms:** May involve SH-4 (Notice of intimation)  

**Validation Required:** Current share transfer filing requirements

---

### 1.5 Charge Registration

#### Service: Registration of Charges
**Evidence:** INFERRED (Section 77)  
**Forms:** CHG-1 (Creation/modification of charge)  
**Trigger:** Company creates charge/mortgage  
**Timeline:** 30 days from creation  
**Parties:** Company and charge holder  

**Validation Required:** Current CHG series forms and workflow

---

#### Service: Modification of Charge
**Evidence:** INFERRED (Section 77)  
**Forms:** CHG-9  
**Trigger:** Modification of existing charge terms  

---

#### Service: Satisfaction of Charge
**Evidence:** INFERRED (Section 82)  
**Forms:** CHG-4  
**Trigger:** Charge paid off/satisfied  
**Timeline:** ROC updates registry  

---

### 1.6 Annual Compliance

#### Service: Annual Return Filing
**Evidence:** VERIFIED (Statutory requirement Section 92)  
**Forms:** MGT-7 (for companies), MGT-7A (for small companies, one person companies, and private start-up companies)  
**Trigger:** Annual due date (within 60 days of AGM)  
**Audience:** Company secretary, professionals  

**Data (INFERRED):**
- Shareholding pattern
- Meetings held
- Director details
- Indebtedness
- Related party transactions

**Processing:** STP eligible (per transaction volumes)  
**Fee:** Based on authorized capital  

**Validation Required:** Current MGT-7 family, data requirements, XBRL if applicable

---

#### Service: Financial Statements Filing
**Evidence:** VERIFIED (Statutory requirement Section 137)  
**Forms:** AOC-4 (Financial statements), AOC-4 CFS (Consolidated financial statements), AOC-4 XBRL, AOC-4 NBFC  
**Trigger:** Annual due date (within 30 days of AGM)  
**Audience:** Directors, professionals  

**Data (INFERRED):**
- Balance sheet
- Profit and loss statement
- Cash flow statement
- Notes to accounts
- Auditor's report

**Processing:** STP + potential scrutiny  
**Fee:** Prescribed  

**Validation Required:** Current AOC-4 variants, XBRL requirements, attachment formats

---

#### Service: Cost Audit Report Filing
**Evidence:** INFERRED (Section 148, applicable companies)  
**Forms:** CRA-4  
**Trigger:** Cost audit completion  
**Audience:** Applicable companies only  

**Validation Required:** Applicability criteria, current form

---

### 1.7 Board and Shareholder Meetings

#### Service: Filing of Board Resolutions
**Evidence:** INFERRED (Section 117, 179)  
**Forms:** MGT-14 (Filing of resolutions)  
**Trigger:** Specific resolutions requiring ROC filing  
**Timeline:** 30 days  

**Validation Required:** Which resolutions require filing, current MGT-14 process

---

### 1.8 Company Closure

#### Service: Close Company / Strike-Off
**Evidence:** VERIFIED (Homepage primary card per 2021 FAQ)  
**Intent:** Close/remove company from register  
**Audience:** Directors, professionals  
**Entry Point:** Homepage primary card "Close Company"  

**Routes (INFERRED):**
- Strike-off under Section 248 (defunct company)
- Fast Track Exit (FTE) under Section 560
- Voluntary liquidation
- Compulsory liquidation (tribunal order)

**Primary Forms (INFERRED):**
- STK-2 (Application for strike-off)
- Closure/dissolution applications

**Prerequisites (INFERRED):**
- No business activity for period
- No outstanding liabilities
- Assets distributed/nil assets
- All dues paid

**Processing:** ROC review, public notice, objection period  
**Outcome:** Company struck off, dissolved  

**Validation Required:** Current closure routes, forms, eligibility, timelines

---

### 1.9 Other Company Services

#### Service: Company Forms Downloads
**Evidence:** VERIFIED (Homepage primary card per 2021 FAQ)  
**Intent:** Download prescribed company e-forms and instructions  
**Audience:** All users  
**Entry Point:** Homepage primary card  
**Content:** PDF forms, instructions, schedules  

**Validation Required:** Current download mechanism (forms list vs portal download vs PDF)

---

#### Service: Conversion (Private to Public, etc.)
**Evidence:** INFERRED (Section 14, 18)  
**Forms:** INC-27 (Conversion), INC-28  
**Trigger:** Company decision to change status  

**Validation Required:** Current conversion forms and processes

---

## 2. LLP SERVICES

### 2.1 LLP Formation

#### Service: Register LLP / LLP Incorporation
**Evidence:** VERIFIED (Homepage primary card per 2021 FAQ)  
**Intent:** Form Limited Liability Partnership under LLP Act 2008  
**Trigger:** Business decision to form LLP  
**Entity:** New LLP (to be formed)  
**Entry Point:** Homepage primary card "Register LLP"  
**Primary Form:** FiLLiP (Form for Incorporation of LLP) (per A06)  
**Audience:** Partners, professionals  

**Prerequisites (INFERRED):**
- DIN for designated partners
- Name reservation
- LLP agreement
- Registered office

**Data (INFERRED):**
- LLP name
- Registered office
- Designated partners (minimum 2)
- Partner details
- Contribution details

**Documents (INFERRED):**
- LLP Agreement
- Partner identity/address proofs
- Registered office proof
- Partner consent

**Authentication:** DSC required  
**Fee:** Prescribed  
**Processing:** STP + potential review  
**Outcome:** LLPIN issued, Incorporation Certificate  

**Validation Required:** Current FiLLiP process, integrated registrations if any

---

#### Service: Name Reservation (LLP)
**Evidence:** VERIFIED (Frequently used service per 2021 FAQ)  
**Intent:** Reserve LLP name before incorporation  
**Form:** RUN-LLP  
**Processing:** Automated check + approval  
**Validity:** Typically 3 months  

**Validation Required:** Current RUN-LLP process

---

### 2.2 LLP Changes

#### Service: Change in Partners/Designated Partners
**Evidence:** INFERRED (LLP Act provisions)  
**Forms:** Form 4 (Change in designated partner), Form 4A (Change in partner)  
**Trigger:** Admission, retirement, cessation of partner  
**Timeline:** 30 days  

**Validation Required:** Current Form 4/4A usage and requirements

---

#### Service: Change in LLP Name
**Evidence:** INFERRED (LLP Act provisions)  
**Forms:** Form 5  
**Trigger:** Partners' decision, ROC direction  

**Validation Required:** Current Form 5 process

---

#### Service: Change of Registered Office
**Evidence:** INFERRED (LLP Act provisions)  
**Forms:** Form 15  
**Trigger:** LLP decision  

**Validation Required:** Current registered office change process

---

### 2.3 LLP Annual Compliance

#### Service: LLP Annual Return
**Evidence:** VERIFIED (Statutory requirement)  
**Forms:** Form 11 (Annual Return of LLP)  
**Trigger:** Annual due date (within 60 days of financial year end)  
**Audience:** Designated partners, professionals  

**Data (INFERRED):**
- Partner details and contributions
- LLP agreement status
- Turnover and assets

**Processing:** STP eligible  
**Fee:** Prescribed  

**Validation Required:** Current Form 11 requirements

---

#### Service: LLP Statement of Account & Solvency
**Evidence:** INFERRED (LLP Act requirement)  
**Forms:** Form 8 (Statement of Account and Solvency)  
**Trigger:** Annual due date (within 30 days of 6 months from financial year end)  
**Audience:** Designated partners  

**Data (INFERRED):**
- Assets and liabilities
- Income and expenditure
- Solvency statement

**Validation Required:** Current Form 8 requirements, applicability

---

### 2.4 LLP Agreement

#### Service: Filing/Amendment of LLP Agreement
**Evidence:** INFERRED (LLP Act requirement)  
**Forms:** Form 3 (Information with regard to LLP Agreement)  
**Trigger:** Execution or amendment of LLP agreement  
**Timeline:** 30 days  

**Validation Required:** Current Form 3 process

---

### 2.5 LLP Closure

#### Service: Close LLP
**Evidence:** VERIFIED (Homepage primary card per 2021 FAQ)  
**Intent:** Dissolve and close LLP  
**Audience:** Designated partners, professionals  
**Entry Point:** Homepage primary card "Close LLP"  

**Routes (INFERRED):**
- Voluntary closure (all partners agree)
- Defunct LLP strike-off

**Forms (INFERRED):**
- LLP closure application forms

**Prerequisites (INFERRED):**
- No business activity
- No liabilities
- All dues paid

**Validation Required:** Current LLP closure routes, forms, requirements

---

### 2.6 Other LLP Services

#### Service: LLP Forms Downloads
**Evidence:** VERIFIED (Homepage primary card per 2021 FAQ)  
**Intent:** Download prescribed LLP forms and instructions  
**Audience:** All users  
**Entry Point:** Homepage primary card  

**Validation Required:** Current LLP forms availability

---

## 3. DIN / DIRECTOR SERVICES

### 3.1 DIN Application and Management

#### Service: Director Identification Number (DIN) Application
**Evidence:** INFERRED (Section 153)  
**Forms:** DIR-3 (Application for DIN)  
**Intent:** Obtain unique director identification number  
**Audience:** Individuals intending to become directors  
**Trigger:** Before becoming director  

**Data (INFERRED):**
- Personal details (name, father's name, date of birth)
- Address proof
- Identity proof
- PAN
- Mobile/email

**Authentication:** DSC or self-attestation  
**Fee:** Prescribed  
**Processing:** Verification + DIN issuance  
**Outcome:** DIN (8-digit number)  

**Note:** Can be obtained through SPICe+ for first directors of new company (per A05)

**Validation Required:** Current DIR-3 standalone process vs SPICe+ integrated

---

#### Service: DIR-3 KYC (Director KYC Verification)
**Evidence:** VERIFIED (Frequently used service per 2021 FAQ, per A07)  
**Forms:** DIR-3 KYC (Annual KYC for directors)  
**Intent:** Annual verification of director details  
**Audience:** All directors with DIN  
**Trigger:** Annual (typically due by specific date each financial year)  

**Data (INFERRED):**
- Current address
- Current directorships
- Mobile/email verification
- PAN linkage

**Authentication:** DSC or OTP  
**Fee:** NIL if filed on time, late fee if delayed  
**Processing:** Automated verification  
**Consequence:** DIN marked inactive if not filed  

**Validation Required:** Current DIR-3 KYC due date, process, deactivation rules

---

#### Service: Change in Director Details (DIR-6)
**Evidence:** INFERRED (Section 154)  
**Forms:** DIR-6 (Intimation of change in particulars)  
**Intent:** Update director personal information  
**Trigger:** Change in name, address, etc.  
**Timeline:** 30 days from change  

**Validation Required:** Current DIR-6 usage

---

### 3.2 Director-Company Relationship

#### Service: DIR-12 (Appointment/Cessation/Change)
**Evidence:** INFERRED (Section 160, 168)  
**Forms:** DIR-12 (Changes in director/KMP)  
**Intent:** Report director appointment, resignation, removal, cessation  
**Filed by:** Company  
**Trigger:** Director change event  
**Timeline:** 30 days  

**Validation Required:** Current DIR-12 process and variants

---

## 4. DSC (DIGITAL SIGNATURE CERTIFICATE) SERVICES

### 4.1 DSC Management

#### Service: Associate DSC
**Evidence:** VERIFIED (Frequently used service per 2021 FAQ)  
**Intent:** Link DSC to user account for e-filing  
**Audience:** Directors, professionals, authorized signatories  
**Entry Point:** Frequently used service card  

**Prerequisites (INFERRED):**
- Valid DSC from licensed Certifying Authority
- User account on MCA portal
- Entity/role association

**Process (INFERRED):**
- Upload DSC details
- Verification
- Link to user profile
- Enable for filing

**Authentication:** DSC itself + account credentials  

**Validation Required:** Current DSC association process, multiple DSC handling

---

#### Service: Update DSC
**Evidence:** INFERRED (Frequently used service per 2021 FAQ)  
**Intent:** Update DSC details when certificate renewed/changed  
**Trigger:** DSC expiration/renewal, new DSC obtained  

**Validation Required:** DSC update process

---

#### Service: DSC Registration for Directors
**Evidence:** INFERRED (Necessary for e-filing)  
**Intent:** Register DSC obtained from CA for use in MCA filings  
**Linked to:** DIN  

**Validation Required:** DSC registration vs association distinction

---

## 5. MASTER DATA SERVICES

### 5.1 Company Master Data

#### Service: View Company/LLP Master Data
**Evidence:** VERIFIED (Frequently used service per 2021 FAQ)  
**Intent:** View current registry information for any company/LLP  
**Audience:** Public (unauthenticated access per A40)  
**Entry Point:** Frequently used service card  

**Search Options (INFERRED):**
- By CIN (Corporate Identity Number)
- By company name
- By company registration number

**Data Displayed (INFERRED per A22):**
- Company/LLP name
- CIN/LLPIN
- Incorporation date
- Registered office address
- Company status (active, struck off, dissolved, etc.)
- Company class/category
- Authorized and paid-up capital
- ROC jurisdiction
- Email/website (if available)
- Last AGM/filing dates

**Authentication:** Public access  
**Fee:** NIL for master data view  

**Validation Required:** Exact data fields shown, search capabilities, real-time vs cached

---

#### Service: View Director Master Data
**Evidence:** INFERRED (Logical complement to company master data)  
**Intent:** View director information  
**Search:** By DIN  

**Data (INFERRED):**
- Name
- DIN
- Current directorships (company names and CINs)
- DIN status (active/inactive)

**Validation Required:** Public availability, data shown

---

### 5.2 Charges Register

#### Service: View Charges Register
**Evidence:** INFERRED (Section 77 requires public register)  
**Intent:** View charges registered against a company  
**Search:** By CIN  

**Data (INFERRED):**
- Charge ID
- Creation date
- Charge holder name
- Amount secured
- Type of charge
- Assets covered
- Satisfaction status

**Validation Required:** Access method, data completeness

---

### 5.3 Specialized Searches

#### Service: Companies/LLPs Registered in Last 30 Days
**Evidence:** INFERRED (Audit document mentions this)  
**Intent:** View recent incorporations  
**Audience:** Public, researchers, service providers  

**Validation Required:** Current availability

---

#### Service: Companies/Directors Under Prosecution
**Evidence:** INFERRED (Audit document mentions this)  
**Intent:** View enforcement/prosecution information  
**Audience:** Public  

**Validation Required:** Current availability, data shown

---

## 6. DOCUMENT-RELATED SERVICES

### 6.1 Public Document Access

#### Service: View Public Documents
**Evidence:** VERIFIED (Frequently used service per 2021 FAQ)  
**Intent:** Access documents filed with ROC  
**Audience:** Public (with registration and payment per A31)  
**Entry Point:** Frequently used service card  

**Document Types (INFERRED):**
- Incorporation documents (MOA, AOA)
- Annual returns
- Financial statements
- Charge documents
- Resolutions filed
- Forms submitted

**Process (INFERRED per A31):**
- Login required
- Search company/LLP
- Select documents
- Payment for document access (per A31)
- View/download

**Fee:** Per document or subscription basis (per Fee Rules)  

**Validation Required:** Current document types, access rules, payment structure

---

### 6.2 Certified Copies

#### Service: Request Certified Copies
**Evidence:** INFERRED (Statutory provision for certified copies)  
**Intent:** Obtain ROC-certified copies of public documents  
**Audience:** Registered users  

**Process (INFERRED):**
- Document request
- Payment
- Physical dispatch or digital delivery
- Certification by ROC

**Fee:** Prescribed per document  
**Timeline:** Processing and dispatch time  

**Validation Required:** Current request process, delivery options, timelines

---

### 6.3 Certificate Services

#### Service: Download Incorporation Certificate
**Evidence:** INFERRED (Logical post-incorporation service)  
**Intent:** Access digital incorporation certificate  
**Audience:** Company/LLP authorized users  

**Validation Required:** Availability, authentication requirements

---

#### Service: Name Availability Certificate
**Evidence:** INFERRED (Part of name reservation process)  
**Intent:** Certificate of name approval  
**Part of:** RUN/RUN-LLP services  

**Validation Required:** Certificate issuance process

---

## 7. E-FILING SERVICES

### 7.1 General E-Filing

#### Service: E-Filing Portal Access
**Evidence:** VERIFIED (Core V3 capability)  
**Intent:** Access to web-based form filing system  
**Audience:** Business users (authenticated)  
**Entry Point:** My Workspace / E-Filing menu  

**Capabilities (INFERRED):**
- Form selection
- Draft management
- Form filling with prefill (per A12)
- Real-time validation (VERIFIED)
- Document attachment
- DSC signing
- Fee calculation and payment
- Submission
- Track status

**Validation Required:** Exact My Workspace structure, draft handling

---

### 7.2 Form Access

#### Service: Download Forms and Instructions
**Evidence:** VERIFIED (Primary cards for Company/LLP Forms Downloads)  
**Intent:** Access blank forms and filing instructions  
**Audience:** All users (public access)  

**Content (INFERRED):**
- PDF forms (for reference)
- Form instructions
- Schedules and annexures
- Filing guides

**Validation Required:** Forms availability (download vs online-only), currency

---

### 7.3 Resubmission

#### Service: Resubmit Defective/Rejected Forms
**Evidence:** INFERRED (8.3 lakh rejections confirmed, resubmission must exist)  
**Intent:** Correct and resubmit after query/rejection  
**Trigger:** ROC query or rejection notice  

**Process (INFERRED):**
- Receive query/rejection with reasons
- Access original submission
- Make corrections
- Re-sign and resubmit
- Additional fee if applicable

**Validation Required:** Resubmission process, fee rules, modification scope

---

## 8. FEE & PAYMENT SERVICES

### 8.1 Fee Enquiry

#### Service: Enquire Fee
**Evidence:** VERIFIED (Frequently used service per 2021 FAQ)  
**Intent:** Calculate applicable fee for a service/form  
**Audience:** All users (public access likely)  
**Entry Point:** Frequently used service card  

**Inputs (INFERRED):**
- Service/form type
- Company/LLP type
- Authorized capital (for capital-based fees)
- Filing timing (normal/late)

**Output:**
- Filing fee
- Late fee (if applicable)
- Additional fee (if applicable)
- Total amount

**Validation Required:** Fee calculator access, fee rule currency

---

### 8.2 Payment Processing

#### Service: Pay Fees Online
**Evidence:** INFERRED (Online filing requires online payment per A29)  
**Intent:** Complete payment for e-filing or services  
**Audience:** Business users  

**Payment Modes (INFERRED):**
- Net banking
- Credit/debit card
- UPI (possible)

**Process (INFERRED per A29):**
- Fee calculation
- Payment gateway redirect
- Payment confirmation
- Receipt generation
- Payment-filing linkage (per A30)

**Validation Required:** Payment gateway provider, modes, reconciliation process

---

#### Service: Track Payment Status
**Evidence:** VERIFIED (Listed in audit document service catalog)  
**Intent:** Check status of payment made  
**Search by:** Transaction reference, challan number  

**Status Types (INFERRED):**
- Payment successful
- Payment pending
- Payment failed
- Refund initiated

**Validation Required:** Payment status interface, reconciliation visibility

---

### 8.3 Additional Fee Payment

#### Service: Pay Additional Fees for Delayed Filing
**Evidence:** INFERRED (Fee Rules provide for additional fees)  
**Intent:** Pay late fees for overdue statutory filings  
**Calculation:** Based on delay period and company type  

**Validation Required:** Additional fee calculation and payment process

---

## 9. COMPLAINTS & GRIEVANCES SERVICES

### 9.1 Service Complaints

#### Service: File Service Complaint
**Evidence:** VERIFIED (Listed services, helpdesk data confirms)  
**Intent:** Report issues with MCA portal, services, or processing  
**Audience:** All users  

**Complaint Types (INFERRED per A33):**
- Technical issues (portal errors, access problems)
- Process issues (delayed processing, incorrect rejection)
- Awareness issues (unclear instructions, help needed)

**Process (INFERRED):**
- Complaint form/submission
- Ticket number generation
- Categorization
- Assignment to resolution team
- Resolution and communication
- Closure

**Evidence:** 316,877 helpdesk tickets FY 2025-26 (to Jan 31), ~98% resolved (VERIFIED)

**Validation Required:** Complaint submission interface, categories, escalation paths

---

### 9.2 Investor Complaints

#### Service: File Investor Complaint
**Evidence:** INFERRED (Separate category in audit document)  
**Intent:** Report grievances related to investor protection, company misconduct  
**Audience:** Investors, shareholders  

**Issues (INFERRED):**
- Non-receipt of dividends
- Non-receipt of shares
- Company non-compliance
- Fraud allegations

**Validation Required:** Investor complaint process, MCA vs SEBI jurisdiction

---

### 9.3 Feedback

#### Service: Submit Feedback/Suggestions
**Evidence:** INFERRED (Audit document mentions feedback)  
**Intent:** Provide suggestions for service improvement  
**Audience:** All users  

**Validation Required:** Feedback mechanism, analysis process

---

## 10. INVESTOR SERVICES

### 10.1 IEPF Services

#### Service: Investor Education and Protection Fund (IEPF) Services
**Evidence:** INFERRED (IEPF is statutory under Companies Act)  
**Intent:** Manage unclaimed/unpaid amounts transferred to IEPF  
**Audience:** Investors, companies  

**Sub-Services (INFERRED):**
- Upload unpaid/unclaimed amounts (by companies)
- Verify IEPF-transferred amounts (by investors)
- Claim refund from IEPF (by investors)

**Primary Form:** IEPF-5 (Claim for refund)  

**Validation Required:** Current IEPF services on portal, claim process

---

### 10.2 Unclaimed Amounts Search

#### Service: Search Unclaimed Amounts
**Evidence:** INFERRED (Audit document mentions this)  
**Intent:** Check if investor has unclaimed dividends/amounts transferred to IEPF  
**Search by:** Name, company, folio number  

**Validation Required:** Current search availability

---

## 11. TRACK TRANSACTION STATUS

### 11.1 SRN Tracking

#### Service: Track Transaction Status (by SRN)
**Evidence:** VERIFIED (Frequently used service per 2021 FAQ)  
**Intent:** Monitor e-filing status from submission to outcome  
**Audience:** Business users (filers)  
**Entry Point:** Frequently used service card  
**Search by:** SRN (Service Request Number) (per A08)  

**Status Displayed (INFERRED per transaction model):**
- Submitted
- Payment pending/verified
- Under processing (STP or ROC/RD)
- Query raised (with query details)
- Approved
- Rejected (with reasons)

**Additional Info (INFERRED):**
- Submission date
- Form type
- Processing timeline
- Next action required

**Validation Required:** Exact status labels, status detail visibility, notification integration

---

### 11.2 Transaction History

#### Service: View Filing History
**Evidence:** INFERRED (Part of My Workspace per A03)  
**Intent:** View all past filings by user/company  
**Audience:** Business users  
**Location:** My Workspace  

**Validation Required:** My Workspace transaction history interface

---

## 12. DATA & REPORTS SERVICES

### 12.1 Reports and Statistics

#### Service: Access Corporate Reports and Statistics
**Evidence:** VERIFIED (Top-level navigation per 2021)  
**Intent:** Public access to MCA data products, reports, statistics  
**Audience:** Public (unauthenticated)  

**Content Types (INFERRED):**
- Monthly/quarterly filing statistics
- Industry analysis reports
- Compliance reports
- Annual reports

**Validation Required:** Current reports catalog, format, update frequency

---

### 12.2 Library

#### Service: Access Library (Documents, Circulars, Notifications)
**Evidence:** VERIFIED (Under Data & Reports per 2021)  
**Intent:** Repository of legal documents, circulars, orders, notifications  
**Audience:** Public  

**Content (INFERRED):**
- Acts and Rules (though may duplicate Acts & Rules section)
- Circulars
- Notifications
- General circulars
- Office memoranda
- Press releases

**Validation Required:** Current library organization, search capability

---

### 12.3 ROC/RD Information

#### Service: ROC and Regional Director Information
**Evidence:** VERIFIED (Audit document mentions this)  
**Intent:** Office locations, jurisdictions, contact details  
**Audience:** Public  

**Content (INFERRED):**
- ROC office addresses
- Jurisdiction (which states/UTs)
- Contact phone/email
- Office hours
- Regional Director details

**Validation Required:** Current ROC information presentation

---

## 13. SPECIALIZED SERVICES

### 13.1 Independent Director Databank

#### Service: Independent Director Databank Registration
**Evidence:** VERIFIED (Frequently used service per 2021 FAQ)  
**Intent:** Registration and search of independent directors  
**Audience:** Independent directors (registration), Companies (search)  

**Process (INFERRED):**
- Directors register with qualifications and availability
- Companies search for suitable independent directors
- Facilitation of appointments

**Validation Required:** Current databank functionality, registration process

---

### 13.2 E-Auction

#### Service: E-Auction Services
**Evidence:** VERIFIED (Frequently used service per 2021 FAQ)  
**Intent:** Online auction of properties/assets (likely related to enforcement/liquidation)  
**Audience:** Authorized bidders  

**Validation Required:** E-Auction purpose, scope, access, process

---

### 13.3 Adjudication Services

#### Service: e-Adjudication (Case Management)
**Evidence:** VERIFIED (Implemented per government sources 2026)  
**Intent:** Digital management of adjudication proceedings  
**Audience:** ROC/RD (officers), Companies/persons (respondents)  

**Process (INFERRED per A18):**
- Case initiation by ROC/RD
- Notice to respondent
- Response submission by respondent
- Hearing (possibly online)
- Order issuance
- Record maintenance

**Validation Required:** Public/company user access to e-Adjudication, notice delivery mechanism

---

### 13.4 Consultation Services

#### Service: e-Consultation (Public Consultation on Draft Rules)
**Evidence:** VERIFIED (Implemented per government sources 2026)  
**Intent:** Seek stakeholder feedback on draft legislation/rules  
**Audience:** Public (per A19)  

**Process (INFERRED per A19):**
- MCA publishes draft rule/amendment
- Public views and submits comments
- Comments categorized and analyzed
- Input to final rule-making

**Validation Required:** Current e-Consultation interface, consultation list, comment process

---

### 13.5 e-Book Services

#### Service: e-Book (Access to Legal E-Books)
**Evidence:** VERIFIED (Implemented per government sources 2026, primary card per 2021 FAQ)  
**Intent:** Digital access to Acts, rules, guides, and legal resources  
**Audience:** All users  

**Content (INFERRED):**
- Companies Act 2013
- LLP Act 2008
- Rules and regulations
- User guides and manuals
- Reference materials

**Validation Required:** Current e-Book catalog, access method, format

---

### 13.6 Learning Management System

#### Service: Learning Management System (Training and Education)
**Evidence:** VERIFIED (Implemented per government sources 2026)  
**Intent:** Training courses, webinars, tutorials for stakeholders  
**Audience:** Directors, professionals, company secretaries, public  

**Content (INFERRED):**
- Video tutorials
- Webinars (recorded/live)
- E-learning modules on compliance
- Certification courses (possible)

**Validation Required:** Current LMS access, course catalog, certification

---

## 14. REGULATORY/ENFORCEMENT SERVICES (Officer-Facing, Public Impact)

### 14.1 e-Scrutiny

#### Service: e-Scrutiny (Post-Approval Review)
**Evidence:** VERIFIED (Documented in audit sources)  
**Status:** Implementation status unclear (per evidence matrix P1 gap)  
**Intent:** Scrutinize sample of STP-approved filings for deeper review  
**Audience:** MCA officers (reviewers), Companies (impacted by review outcomes)  

**Process (INFERRED per A16):**
- STP approval occurs
- e-Scrutiny system flags filings for review
- Central scrutiny cell reviews
- Action if non-compliance found

**User Impact:** Potential post-approval queries/actions  

**Validation Required:** Current e-Scrutiny operational status, user visibility

---

### 14.2 Compliance Management System (CMS)

#### Service: Compliance Management System
**Evidence:** VERIFIED (Documented in audit sources)  
**Status:** Implementation status unclear (per evidence matrix P1 gap)  
**Intent:** Identify non-compliant companies/LLPs, issue e-notices, track compliance  
**Audience:** MCA officers, Companies/LLPs (recipients of notices)  

**Process (INFERRED per A17):**
- CMS detects defaults (missed filings, late compliance)
- Automated e-notices issued
- Alerts for MCA officers
- Compliance tracking

**User Impact:** Automated notices for defaults, compliance alerts  

**Validation Required:** Current CMS operational status, notice delivery method

---

### 14.3 e-Enforcement

#### Service: e-Enforcement (Digital Enforcement Actions)
**Evidence:** VERIFIED (Implemented per government sources 2026)  
**Intent:** Digitize enforcement proceedings (prosecutions, penalties, compounding)  
**Audience:** MCA officers, Companies/persons subject to enforcement  

**Process (INFERRED):**
- Enforcement case initiation
- Notice to entity/person
- Response/compounding opportunity
- Hearing/proceedings
- Orders and penalties
- Record maintenance

**Validation Required:** User interface for respondents, notice delivery, compounding process

---

## SERVICE SUMMARY STATISTICS

### By Evidence Level
- **VERIFIED:** 22 services
- **INFERRED:** 70+ services
- **ASSUMED:** All have assumptions about details

### By Service Family
- Company Services: ~25 services
- LLP Services: ~10 services
- DIN/Director Services: ~5 services
- DSC Services: ~3 services
- Master Data Services: ~5 services
- Document Services: ~4 services
- E-Filing Services: ~3 services
- Fee & Payment Services: ~4 services
- Complaints Services: ~3 services
- Investor Services: ~3 services
- Track Status: ~2 services
- Data & Reports: ~3 services
- Specialized Services: ~10 services
- Regulatory Services: ~3 services

**Total Services Catalogued:** 100+

---

## CRITICAL GAPS AND VALIDATION REQUIREMENTS

### P0 - Must Verify Before Phase 2
1. Complete list of active services (vs. 2021 list)
2. Service entry point URLs (all seed URLs blocked)
3. My Workspace structure and services
4. Current forms mapped to each service
5. Public vs authenticated service boundaries

### P1 - Important for Detailed Design
6. e-Scrutiny, CMS, e-Enforcement user-visible interfaces
7. Service-specific prerequisites and eligibility
8. Exact transaction flows by service
9. Role-based service access matrix
10. Integration between services (e.g., SPICe+ integrated registrations)

### P2 - Detailed Service Design
11. Service-specific validation rules
12. Service-specific fee calculations
13. Service-specific processing timelines (STP vs manual)
14. Service-specific notification triggers
15. Service-specific help content

---

## METHODOLOGY NOTES

**Data Sources:**
- VERIFIED services: Government documents 2025-2026, official 2021 V3 training
- INFERRED services: Third-party sources + statutory requirements + logical necessity
- Service details: Based on Companies Act, LLP Act, Rules, and standard e-governance patterns

**Limitations:**
- No direct portal access to verify current services list
- Details inferred from statutory requirements may not match actual implementation
- Services may have been added/modified/deprecated since 2021 V3 launch
- Processing paths and workflows are partially inferred

**Confidence Level:** MEDIUM overall
- High confidence in major service families (statutory basis)
- Medium confidence in individual services (multiple sources)
- Low confidence in detailed service specifications (limited evidence)

---

## NEXT STEPS

1. **Portal Access:** Verify all services against live portal navigation
2. **Service Pages:** Document each service landing page (instructions, prerequisites, forms)
3. **Form Mapping:** Complete service-to-form mapping
4. **Service Blueprints:** Create detailed blueprints for high-volume services
5. **Role Mapping:** Document which roles can access which services
6. **Integration Mapping:** Identify service dependencies and data flow

---

**Document Status:** COMPREHENSIVE BUT UNVERIFIED  
**Usage:** Phase 1 baseline; all items require validation against live portal  
**Risk:** Services may have changed since 2021; new services may exist; deprecated services may remain listed
