# MCA Phase 1 - Entity Model

**Document Purpose:** Detailed entity relationship and data model for MCA ecosystem.

**Last Updated:** 27 August 2026

---

## Entity Relationship Diagram (Conceptual)

```
┌─────────────────────────────────────────────────────────────────┐
│                        MCA ECOSYSTEM                             │
└─────────────────────────────────────────────────────────────────┘

PERSON (Individual)
  │
  ├──[has]──> DIN (Director Identification Number)
  │             │
  │             └──[requires annual]──> DIR-3 KYC Filing
  │
  ├──[has]──> Professional Registration (CS/CA/CMA)
  │             │
  │             └──[issues]──> Professional DSC
  │
  ├──[has]──> DSC (Digital Signature Certificate)
  │
  ├──[has]──> Portal Account (Registered/Business User)
  │
  ├──[is DIRECTOR of]──> COMPANY (1:N)
  │
  ├──[is DESIGNATED PARTNER of]──> LLP (1:N)
  │
  ├──[is PARTNER of]──> LLP (1:N)
  │
  ├──[is SHAREHOLDER in]──> COMPANY (1:N)
  │
  ├──[is PROFESSIONAL for]──> COMPANY/LLP (1:N)
  │
  └──[is AUTHORIZED USER for]──> COMPANY/LLP (1:N)


COMPANY
  │
  ├──[has unique]──> CIN (Corporate Identity Number)
  │
  ├──[has]──> Company Name
  │
  ├──[has]──> Registered Office Address
  │             │
  │             └──[determines]──> ROC Jurisdiction
  │
  ├──[has]──> Company Type (Private/Public/OPC/Section 8/etc.)
  │
  ├──[has]──> Company Status (Active/Dormant/Struck off/etc.)
  │
  ├──[has]──> Board of Directors (1:N PERSON)
  │             │
  │             └──[includes]──> Key Managerial Personnel (MD/CS/CFO)
  │
  ├──[has]──> Shareholders (1:N PERSON/ENTITY)
  │             │
  │             └──[holds]──> Shares (quantity, class, rights)
  │
  ├──[has]──> Share Capital
  │             ├──> Authorized Capital
  │             └──> Paid-up Capital
  │
  ├──[has]──> Auditor (PERSON with CA qualification)
  │
  ├──[may have]──> Charges (1:N CHARGE)
  │
  ├──[files]──> Forms/Filings (1:N FILING)
  │
  ├──[relationship]──> Other Companies (Holding/Subsidiary/Associate)
  │
  └──[regulated by]──> ROC/Regional Director


LLP (Limited Liability Partnership)
  │
  ├──[has unique]──> LLPIN (LLP Identification Number)
  │
  ├──[has]──> LLP Name
  │
  ├──[has]──> Registered Office Address
  │             │
  │             └──[determines]──> ROC Jurisdiction
  │
  ├──[has]──> LLP Status (Active/Dissolved/etc.)
  │
  ├──[has]──> Partners (2:N PERSON)
  │             │
  │             └──[includes minimum 2]──> Designated Partners (with DIN)
  │
  ├──[has]──> LLP Agreement
  │
  ├──[has]──> Contribution Details (by partner)
  │
  ├──[files]──> Forms/Filings (1:N FILING)
  │
  └──[regulated by]──> ROC/Regional Director


FILING (Transaction)
  │
  ├──[has unique]──> SRN (Service Request Number)
  │
  ├──[uses]──> Form (e.g., SPICe+, AOC-4, MGT-7, FiLLiP, etc.)
  │
  ├──[filed by]──> PERSON (with specific role)
  │
  ├──[filed for]──> COMPANY or LLP
  │
  ├──[signed with]──> DSC
  │
  ├──[has]──> Filing Date/Time
  │
  ├──[has]──> Status (Draft/Submitted/Processing/Approved/Rejected)
  │
  ├──[includes]──> Attachments (Documents)
  │
  ├──[requires]──> Fee Payment
  │             │
  │             └──[has]──> Payment Status
  │
  ├──[processed by]──> STP or ROC/RD
  │
  └──[results in]──> Registry Update or Certificate or Order


CHARGE (Security Interest)
  │
  ├──[has unique]──> Charge ID
  │
  ├──[created by]──> COMPANY
  │
  ├──[held by]──> Charge Holder (Bank/Financial Institution/Creditor)
  │
  ├──[secured on]──> Assets (description)
  │
  ├──[has]──> Amount Secured
  │
  ├──[has]──> Creation Date
  │
  ├──[registered via]──> CHG-1 Form (within 30 days)
  │
  ├──[has]──> Status (Active/Satisfied/Modified)
  │
  └──[satisfied via]──> CHG-4 Form


ROC (Registrar of Companies)
  │
  ├──[has]──> Jurisdiction (State/UT)
  │
  ├──[regulates]──> Companies (within jurisdiction)
  │
  ├──[regulates]──> LLPs (within jurisdiction)
  │
  ├──[processes]──> Filings
  │
  ├──[issues]──> Certificates (Incorporation, Name Change, etc.)
  │
  ├──[issues]──> Notices (Queries, Compliance, etc.)
  │
  └──[maintains]──> Master Registry Data
```

---

## Core Entities

### 1. PERSON (Individual)
**Primary Key:** PAN (Permanent Account Number) or DIN (Director Identification Number)  
**Nature:** Natural person  

**Attributes:**
- Full Name
- Father's Name / Mother's Name
- Date of Birth
- Gender
- Nationality
- Residential Address
- Email Address
- Mobile Number
- PAN
- Aadhaar (for verification, not stored publicly)
- Passport (for foreign nationals)

**Relationships:**
- Has 0 or 1 DIN
- Has 0 or 1 Professional Registration
- Has 0 to N DSCs
- Has 0 to 1 Portal Account
- Is Director of 0 to N Companies
- Is Designated Partner of 0 to N LLPs
- Is Partner of 0 to N LLPs
- Is Shareholder in 0 to N Companies
- Is Professional for 0 to N Companies/LLPs
- Is Authorized User for 0 to N Companies/LLPs

---

### 2. DIN (Director Identification Number)
**Primary Key:** DIN (8-digit unique number)  
**Nature:** Identification credential  

**Attributes:**
- DIN Number (8 digits)
- Allocation Date
- Person Details (name, DOB, PAN)
- Current Status (Active/Inactive/Disqualified)
- KYC Status (Compliant/Pending/Defaulted)
- Last KYC Filing Date

**Relationships:**
- Belongs to 1 Person
- Required for 0 to N Company Directorships
- Required for 0 to N LLP Designated Partnerships
- Requires Annual DIR-3 KYC Filing

**Business Rules:**
- One person can have only one DIN
- DIN is mandatory for directors and designated partners
- Annual KYC required to maintain active status
- Inactive DIN cannot be used for new appointments

---

### 3. DSC (Digital Signature Certificate)
**Primary Key:** DSC Serial Number  
**Nature:** Authentication credential  

**Attributes:**
- Serial Number
- Holder Name
- Holder DIN/PAN
- Issuing Certifying Authority
- Issue Date
- Expiry Date
- Certificate Class (Class 2 / Class 3)
- Status (Active/Expired/Revoked)

**Relationships:**
- Issued to 1 Person
- Associated with 1 Portal Account
- Used to Sign 0 to N Filings

**Business Rules:**
- Multiple DSCs can belong to one person (renewal, backup)
- DSC must be associated with portal account before use
- Only active, unexpired DSC can be used for signing
- Class 2 or Class 3 required for MCA filings

---

### 4. PORTAL ACCOUNT
**Primary Key:** User ID / Email  
**Nature:** System access credential  

**Attributes:**
- User ID
- Email (unique)
- Mobile Number (unique)
- Password (hashed)
- Account Type (Registered User / Business User)
- User Role (Director / Professional / Company User / Professional Staff)
- Registration Date
- Last Login Date
- Account Status (Active/Suspended/Locked)

**Relationships:**
- Belongs to 1 Person
- Has 0 to N Associated DSCs
- Linked to 0 to N Companies (via role)
- Linked to 0 to N LLPs (via role)
- Has 0 to N Filings (as filer)

**Business Rules:**
- Email and mobile must be unique
- Business users must have entity association
- Business users must have DSC for filing
- Account type determines accessible services

---

### 5. COMPANY
**Primary Key:** CIN (Corporate Identity Number)  
**Nature:** Legal entity  

**Attributes:**
- CIN (21 characters: State+Year+Type+ROC+Sequential+Check)
- Company Name
- Company Type (Private/Public/OPC/Section 8/Government/Foreign)
- Incorporation Date
- Registered Office Address
  - Address Line 1, 2
  - City
  - State
  - PIN Code
  - Country
- Company Status (Active/Dormant/Struck Off/Dissolved/Amalgamated/Under Liquidation)
- ROC Jurisdiction
- Email Address
- Website
- Principal Business Activity (Code + Description)
- Authorized Capital
- Paid-up Capital
- Number of Members
- Date of Last AGM
- Date of Balance Sheet
- Company Category (Public/Private, Listed/Unlisted, etc.)
- Listing Status (if applicable)

**Relationships:**
- Has 1 to N Directors
- Has 1 to N Shareholders
- Has 0 to 1 Auditor (mandatory for most companies)
- Has 0 to N Key Managerial Personnel
- May Have 0 to N Charges
- Has 1 to N Filings
- May Be Subsidiary of 0 to 1 Holding Company
- May Have 0 to N Subsidiary Companies
- May Have 0 to N Associate Companies
- Regulated by 1 ROC

**Business Rules:**
- CIN is unique and permanent (even if company dissolved)
- Company name must be unique and approved
- Minimum 1 director (minimum 2 for most companies, 1 for OPC)
- Minimum 1 shareholder (minimum 2 for private, 7 for public, 1 for OPC)
- Registered office must be in India
- Active companies must file annual returns and financial statements

---

### 6. LLP (Limited Liability Partnership)
**Primary Key:** LLPIN (LLP Identification Number)  
**Nature:** Legal entity  

**Attributes:**
- LLPIN
- LLP Name
- Incorporation Date
- Registered Office Address
  - Address Line 1, 2
  - City
  - State
  - PIN Code
- LLP Status (Active/Dissolved)
- ROC Jurisdiction
- Email Address
- Website (optional)
- Principal Business Activity
- Total Obligation of Contribution
- Number of Partners
- Number of Designated Partners
- Date of Last Filing

**Relationships:**
- Has 2 to N Partners
- Has 2 to N Designated Partners (minimum 2, at least 1 resident in India)
- Has 1 LLP Agreement
- Has 1 to N Filings
- Regulated by 1 ROC

**Business Rules:**
- LLPIN is unique and permanent
- LLP name must be unique and approved
- Minimum 2 partners, minimum 2 designated partners
- All designated partners must have DIN
- LLP agreement mandatory
- Active LLPs must file Form 8 and Form 11 annually

---

### 7. DIRECTOR-COMPANY RELATIONSHIP
**Primary Key:** DIN + CIN + Appointment Date  
**Nature:** Association/Relationship  

**Attributes:**
- DIN (Foreign Key to Person's DIN)
- CIN (Foreign Key to Company)
- Appointment Date
- Cessation Date (if applicable)
- Director Type (Managing/Whole-time/Independent/Non-Executive/Additional/Alternate)
- Current Status (Active/Ceased)
- Cessation Reason (if applicable: Resignation/Removal/Disqualification/Death)

**Relationships:**
- Links 1 Person (with DIN) to 1 Company
- Reported via DIR-12 Form

**Business Rules:**
- Person must have DIN before appointment
- Appointment must be filed within 30 days (DIR-12)
- Cessation must be filed within 30 days (DIR-12)
- Director can hold directorships in multiple companies

---

### 8. PARTNER-LLP RELATIONSHIP
**Primary Key:** Partner ID + LLPIN  
**Nature:** Association/Relationship  

**Attributes:**
- Partner Identifier (Person PAN or DIN if designated)
- LLPIN (Foreign Key to LLP)
- Partner Type (Partner / Designated Partner)
- Admission Date
- Cessation Date (if applicable)
- Contribution Amount
- Profit Sharing Ratio
- Current Status (Active/Ceased)

**Relationships:**
- Links 1 Person to 1 LLP
- Reported via Form 4 (Designated Partner) or Form 4A (Partner)

**Business Rules:**
- Designated partners must have DIN
- Minimum 2 designated partners required
- Changes must be filed within 30 days

---

### 9. SHAREHOLDER-COMPANY RELATIONSHIP
**Primary Key:** Shareholder ID + CIN + Folio/DP ID  
**Nature:** Ownership  

**Attributes:**
- Shareholder Details (Name, PAN, Address)
- CIN (Foreign Key to Company)
- Folio Number / DP ID-Client ID
- Number of Shares Held
- Class of Shares (Equity/Preference)
- Nominal Value
- Paid-up Value
- Acquisition Date
- Beneficial Owner (if different)

**Relationships:**
- Links 1 Person (or another Company) to 1 Company as Shareholder
- Reported in PAS-3 (Allotment)

**Business Rules:**
- Shareholding tracked in company's register
- Changes via allotment/transfer reported to MCA
- Annual return (MGT-7) includes complete shareholding pattern

---

### 10. FILING (Transaction)
**Primary Key:** SRN (Service Request Number)  
**Nature:** Transaction record  

**Attributes:**
- SRN (Unique transaction identifier)
- Form Type (e.g., SPICe+, AOC-4, MGT-7, DIR-3 KYC)
- Entity Type (Company / LLP / Individual)
- Entity Identifier (CIN / LLPIN / DIN)
- Filer Details
  - Filer Name
  - Filer DIN/PAN
  - Filer Role (Director/Professional/Authorized User)
- DSC Details (Serial Number, Holder Name)
- Submission Date/Time
- Status (Draft/Payment Pending/Submitted/Under Processing/Query Raised/Approved/Rejected)
- Processing Mode (STP / ROC / RD / CPC / CPACE)
- Processing Date
- Approval/Rejection Date
- Query Details (if query raised)
- Resubmission Link (if resubmitted)
- Fee Amount
- Payment Status
- Payment Reference
- Attachments (list of document IDs)
- Certificate/Order (if issued)

**Relationships:**
- Filed for 1 Company or LLP (or standalone for DIR-3)
- Filed by 1 Person (via Portal Account)
- Uses 1 Form Template
- Signed with 1 DSC
- Has 0 to N Attachments (Documents)
- Has 1 Fee Payment
- Processed by ROC/RD/CPC
- May Generate Certificate or Order

**Business Rules:**
- SRN generated upon submission
- DSC signature required for submission
- Fee payment required before/immediately after submission
- Status progresses through defined state machine
- Approved filings update master registry
- Rejected filings can be resubmitted (with corrections)

---

### 11. CHARGE
**Primary Key:** Charge ID  
**Nature:** Security interest  

**Attributes:**
- Charge ID (System-generated)
- CIN (Foreign Key to Company)
- Charge Holder Name
- Charge Holder Address
- Type of Charge (Mortgage/Pledge/Hypothecation/etc.)
- Description of Property/Assets
- Amount Secured
- Date of Creation
- Date of Registration (CHG-1 filing)
- Date of Modification (if applicable, CHG-9)
- Date of Satisfaction (if satisfied, CHG-4)
- Status (Registered/Modified/Satisfied/Pending)

**Relationships:**
- Created by 1 Company
- Held by 1 Charge Holder (Bank/FI/Creditor)
- Registered via CHG-1 Filing
- Modified via CHG-9 Filing (if applicable)
- Satisfied via CHG-4 Filing (if applicable)

**Business Rules:**
- Must be registered within 30 days of creation (else void)
- Charge holder consent required for registration
- Modification requires charge holder consent
- Satisfaction requires charge holder intimation
- Registered charges are publicly visible

---

### 12. ROC (Registrar of Companies)
**Primary Key:** ROC Code  
**Nature:** Regulatory office  

**Attributes:**
- ROC Code
- ROC Name (e.g., ROC Mumbai, ROC Delhi)
- Jurisdiction (States/UTs covered)
- Address
- Contact Details (Phone, Email)
- Office Hours

**Relationships:**
- Regulates N Companies (within jurisdiction)
- Regulates N LLPs (within jurisdiction)
- Processes N Filings
- Issues N Certificates

**Business Rules:**
- Company/LLP ROC determined by registered office location
- ROC jurisdiction change requires tribunal/RD approval

---

## Data Flows

### 1. Company Incorporation Flow
```
PROMOTERS (Persons)
  └─> Obtain DINs (DIR-3)
       └─> Obtain DSCs
            └─> File SPICe+ (with MOA/AOA)
                 └─> ROC Processes
                      └─> CIN Issued + Incorporation Certificate
                           └─> COMPANY Created in Registry
                                └─> Directors Recorded
                                     └─> Shares Allotted to Subscribers
```

### 2. Annual Compliance Flow
```
COMPANY (Active)
  └─> Holds AGM
       ├─> Approves Financial Statements
       │    └─> Files AOC-4 (within 30 days)
       │         └─> ROC Processes → Registry Updated
       │
       └─> Approves Annual Return
            └─> Files MGT-7 (within 60 days)
                 └─> ROC Processes → Registry Updated
```

### 3. Director Change Flow
```
COMPANY Board
  └─> Appoints New Director (Board Resolution)
       └─> New Director Obtains DIN (if not existing)
            └─> Company Files DIR-12 (within 30 days)
                 └─> ROC Processes
                      └─> Director-Company Relationship Created in Registry
                           └─> Director Visible in Master Data
```

### 4. Charge Registration Flow
```
COMPANY
  └─> Creates Charge with Bank (Loan Agreement)
       └─> Within 30 Days:
            Company Files CHG-1 (with Bank Consent)
                 └─> ROC Processes
                      └─> CHARGE Registered in Registry
                           └─> Charge Visible Publicly
```

---

## Master Data Structure

### Company Master Data
**Publicly Visible Fields:**
- CIN
- Company Name
- Registration Number
- Company Category/Sub-category
- Class of Company
- Date of Incorporation
- Company Status
- Authorized Capital
- Paid-up Capital
- Number of Members
- Date of Last AGM
- Date of Balance Sheet
- Registered Office Address
- Email
- Whether Listed
- ROC
- Active Compliance Status

**Not Publicly Visible (or Partially Masked):**
- Detailed Shareholding (available via paid documents)
- Director personal addresses (partially masked)
- Financial details beyond paid-up capital
- Internal processing notes

---

### LLP Master Data
**Publicly Visible Fields:**
- LLPIN
- LLP Name
- Date of Incorporation
- LLP Status
- Registered Office Address
- Email
- Number of Partners
- Number of Designated Partners
- Total Obligation of Contribution
- ROC
- Date of Last Filing

---

### Director Master Data
**Publicly Visible Fields:**
- DIN
- Name
- Current Directorships (CIN + Company Name)
- DIN Status (Active/Inactive)

**Not Publicly Visible:**
- Full address
- Email/mobile
- Date of birth
- PAN

---

## Data Validation and Integrity Rules

### 1. Referential Integrity
- All CINs referenced in filings must exist in Company master
- All DINs referenced must exist in DIN master
- All LLPINs referenced must exist in LLP master
- Filer must be authorized for the entity

### 2. Business Rule Validations
- Company name uniqueness (before approval)
- DIN uniqueness (one per person)
- Minimum directors/partners requirements
- Capital structure validations (paid-up ≤ authorized)
- Filing deadline validations (with late fee calculation)
- Form applicability (form valid for entity type/status)

### 3. Data Consistency
- Director appointments must have corresponding company record
- Charges must link to valid company
- Filings must link to valid entity
- DSC must belong to authorized filer

---

## VALIDATION REQUIREMENTS

**P0 - Critical:**
1. Complete entity attribute lists (what fields exist in actual master data)
2. Entity relationship cardinalities (1:1, 1:N, M:N)
3. Business rules and constraints
4. Data visibility rules (public vs private)
5. Unique identifiers and key structures

**P1 - Important:**
6. Entity lifecycle state machines
7. Data validation rules by field
8. Data update triggers (what updates what)
9. Historical data retention rules
10. Data quality rules and duplicate handling

---

**Document Status:** CONCEPTUAL MODEL - REQUIRES VALIDATION  
**Evidence Base:** Statutory provisions + logical data modeling  
**Confidence:** HIGH on entity types, MEDIUM on attributes, LOW on technical schema  
**Next Steps:** Validate against actual MCA data dictionary and API schemas
