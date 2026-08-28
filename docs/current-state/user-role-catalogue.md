# MCA Phase 1 - User Role Catalogue and Entity Model

**Document Purpose:** Comprehensive documentation of user types, roles, entities, and their relationships in the MCA ecosystem.

**Last Updated:** 27 August 2026

---

## Evidence and Methodology

**Data Sources:**
- ICSI/ICAI training materials (user registration types)
- Companies Act 2013 and LLP Act 2008 (statutory roles)
- Audit document user taxonomy
- Third-party sources on MCA portal access

**Evidence Classification:**
- **VERIFIED:** Explicitly documented in official/professional training materials
- **INFERRED:** Required by statutory provisions or logical necessity
- **ASSUMED:** Reasonable inference from portal functionality

**Limitations:**
- No access to complete role-permission matrix
- Authorization rules not publicly documented
- Entity relationship details partially inferred

---

## USER MODEL OVERVIEW

The MCA portal distinguishes between:
1. **Account Types** - Registration categories
2. **User Roles** - Functional roles within account types
3. **Entity Context** - Company/LLP/person the user acts for
4. **Authorization** - What actions a user+role+entity combination can perform

---

## 1. ACCOUNT TYPES

### 1.1 Registered User
**Evidence:** VERIFIED (ICSI FAQ reference per assumptions A13)  
**Definition:** Individual with basic MCA portal access  
**Registration Requirement:** Name, email, mobile, password, OTP verification  

**Access Level:**
- Public services (unauthenticated equivalent)
- Limited e-services
- No filing capability (except specific forms)

**Services Accessible (INFERRED per assumptions A40):**
- e-Book (legal resources)
- e-Consultation (view and comment)
- Master Data search (company/LLP/director)
- View Public Documents (with payment)
- File complaints
- Limited forms: RUN, SPICe, FiLLiP, IEPF-5, Refund applications, DIR-3 KYC (own), DIR-3

**Authentication:**
- Username/password
- OTP (MFA per evidence)

**Use Cases:**
- Researcher accessing public data
- Student/professional learning
- General public seeking company information
- Investor filing complaints or IEPF claims
- Individual applying for DIN

**Validation Required:** Exact service boundaries for registered users vs business users

---

### 1.2 Business User
**Evidence:** VERIFIED (ICSI FAQ reference per assumptions A13)  
**Definition:** User authorized to perform transactional e-filing and business services  
**Registration Requirement:** Enhanced registration with entity association, role verification, DSC  

**Subtypes (per ICSI FAQ):**
1. Director User
2. Professional User
3. Company/LLP User
4. Professional Staff

**Access Level:**
- All registered user services
- Transactional e-filing
- Entity-specific services (based on linked entity and role)
- My Workspace (drafts, filings, status, payments)

**Authentication:**
- Username/password
- OTP/MFA
- DSC (for form submission)

**Validation Required:** Business user registration process, role verification requirements

---

## 2. BUSINESS USER SUBTYPES

### 2.1 Director User
**Evidence:** VERIFIED (ICSI FAQ reference per assumptions A14)  
**Definition:** Individual who is a director of one or more companies  
**Prerequisite:** Valid DIN (Director Identification Number)  

**Entity Linkage:** Linked to company(ies) where appointed as director  

**Typical Responsibilities:**
- Sign and submit forms on behalf of company
- File director-specific forms (DIR-3 KYC, DIR-6)
- Provide declarations and certifications
- Approve filings

**Filing Authority (INFERRED per statutory provisions):**
- Forms requiring director signature
- Board resolutions
- Annual returns (if authorized)
- Financial statements (if authorized managing director)

**Authentication:**
- Password + OTP/MFA
- DSC (Class 2 or Class 3) for signing filings

**Validation Required:** Director authorization process, multiple company handling, authority delegation

---

### 2.2 Professional User
**Evidence:** VERIFIED (ICSI FAQ reference, per assumptions A14)  
**Definition:** Practicing Company Secretary (CS), Chartered Accountant (CA), or Cost Accountant (CMA) filing on behalf of clients  
**Prerequisite:** Professional registration number (ICSI/ICAI/ICMAI membership)  

**Entity Linkage:** Can be authorized by multiple companies/LLPs  

**Typical Responsibilities:**
- File forms on behalf of multiple client companies/LLPs
- Provide professional certifications
- Maintain professional practice compliance
- Represent clients for statutory filings

**Filing Authority (INFERRED):**
- Most company/LLP forms (with proper authorization)
- Annual compliance forms
- Event-based filings
- Professional certification (AOC-4, MGT-7 certificates)

**Professional Types:**
1. **Company Secretary (CS)** - Chartered under ICSI
2. **Chartered Accountant (CA)** - Chartered under ICAI  
3. **Cost and Management Accountant (CMA)** - Chartered under ICMAI

**Authentication:**
- Password + OTP/MFA
- Professional DSC (linked to professional registration)

**Validation Required:** Professional authorization process, client linking mechanism, professional liability

---

### 2.3 Company/LLP User
**Evidence:** VERIFIED (ICSI FAQ reference per assumptions A14)  
**Definition:** Authorized representative of the company/LLP entity (not necessarily a director/partner)  
**Prerequisite:** Authorization from company/LLP  

**Entity Linkage:** Linked to specific company/LLP  

**Typical Responsibilities:**
- File routine forms
- Make payments
- Track filing status
- Manage entity account
- Download certificates

**Filing Authority (INFERRED):**
- Subset of forms (company-authorized scope)
- Payment and administrative functions
- Status tracking

**Examples:**
- Company Secretary (employee, not practicing)
- Compliance Manager
- Authorized Signatory

**Authentication:**
- Password + OTP/MFA
- DSC (if filing authority granted)

**Validation Required:** Company/LLP user authorization process, authority scope definition

---

### 2.4 Professional Staff
**Evidence:** VERIFIED (ICSI FAQ reference)  
**Definition:** Staff working under a professional user (CS/CA/CMA)  
**Prerequisite:** Association with professional user's account  

**Entity Linkage:** Through professional user  

**Typical Responsibilities:**
- Prepare drafts of filings
- Gather documents
- Track filing status for professional's clients
- Administrative support

**Filing Authority (INFERRED):**
- Draft preparation (no signature authority)
- Limited submission (with professional oversight)
- Status tracking

**Authentication:**
- Password + OTP/MFA
- No independent DSC authority (uses professional's DSC)

**Validation Required:** Professional staff registration and authorization process

---

## 3. STATUTORY ROLES (WITHIN ENTITIES)

These are legal roles defined by Companies Act/LLP Act, distinct from portal account types.

### 3.1 Company Roles

#### Director
**Legal Basis:** Section 2(34), Companies Act 2013  
**Definition:** Person appointed to the board of directors  
**Prerequisite:** DIN  
**Types:**
- Managing Director
- Whole-time Director
- Independent Director
- Non-Executive Director
- Nominee Director
- Alternate Director
- Additional Director

**Portal Relevance:**
- Director User account type
- DSC signing authority
- Form approval rights
- KYC compliance obligation (DIR-3 KYC annually)

---

#### Key Managerial Personnel (KMP)
**Legal Basis:** Section 2(51), Companies Act 2013  
**Includes:**
- Managing Director / CEO / Manager
- Company Secretary
- Chief Financial Officer (CFO)
- Whole-time Director

**Portal Relevance:**
- Signing authority for specific forms
- Appointment/cessation reported via DIR-12
- Responsible for compliance

---

#### Company Secretary (CS)
**Legal Basis:** Section 2(24), Section 203  
**Definition:** KMP responsible for statutory compliance  
**Mandatory For:** Prescribed class of companies  

**Portal Relevance:**
- Primary filer for most forms
- Certification authority (MGT-7, AOC-4)
- Compliance tracking responsibility
- May be employee (company user) or practicing professional (professional user)

---

#### Auditor
**Legal Basis:** Section 139, Companies Act 2013  
**Definition:** Chartered Accountant appointed to audit accounts  

**Portal Relevance:**
- Auditor appointment reported (ADT-1)
- Auditor's report attached to AOC-4
- May file auditor-related forms
- Professional user role if actively filing

---

#### Promoter
**Legal Basis:** Section 2(69)  
**Definition:** Person in control, instrumental in formation  

**Portal Relevance:**
- Initiates incorporation (SPICe+)
- Identified in prospectus and annual return
- No specific ongoing portal role post-incorporation

---

#### Subscriber
**Legal Basis:** Companies Act  
**Definition:** First shareholders subscribing to MOA  

**Portal Relevance:**
- Listed in SPICe+
- Shareholding recorded
- Becomes regular shareholder post-incorporation

---

#### Shareholder/Member
**Legal Basis:** Section 2(55)  
**Definition:** Person holding shares in company  

**Portal Relevance:**
- Receive dividends and notices (indirect)
- IEPF claims (IEPF-5)
- Generally no direct filing role
- View rights limited (unless also director/authorized)

---

### 3.2 LLP Roles

#### Partner
**Legal Basis:** Section 2(1)(q), LLP Act 2008  
**Definition:** Person who becomes partner in LLP  

**Portal Relevance:**
- Listed in FiLLiP, Form 4A
- Contribution recorded
- May have filing rights if designated partner

---

#### Designated Partner
**Legal Basis:** Section 7, LLP Act 2008  
**Definition:** Partner designated for compliance and filing responsibilities  
**Prerequisite:** DIN  
**Minimum:** 2 designated partners required, 1 must be resident in India  

**Portal Relevance:**
- Primary filers for LLP (analogous to directors for companies)
- DSC signing authority
- Filed via Form 4
- Compliance responsibility
- KYC requirements (likely similar to DIR-3 KYC)

**Validation Required:** Designated partner portal registration and KYC process

---

### 3.3 Cross-Entity Roles

#### Charge Holder
**Legal Basis:** Section 77, Companies Act 2013  
**Definition:** Secured creditor with registered charge  

**Portal Relevance:**
- Consent required for CHG-1 filing
- Intimation of satisfaction required for CHG-4
- Receives charge-related notifications
- May need portal access for charge-related services

**Validation Required:** Charge holder portal interaction

---

#### Tribunal / Regional Director / ROC
**Legal Basis:** Companies Act 2013, LLP Act 2008  
**Definition:** Regulatory authorities  

**Portal Relevance (INFERRED):**
- Officer-facing interfaces (e-Adjudication, e-Enforcement, e-Scrutiny, CMS)
- Case management and workflow systems
- Query issuance to companies/LLPs
- Approval/rejection of filings
- Order issuance

**Not covered in this document** (internal MCA officer roles require separate discovery)

---

## 4. ENTITY TYPES

### 4.1 Company
**Legal Basis:** Section 2(20), Companies Act 2013  
**Definition:** Company incorporated under Companies Act 2013 or prior Acts  
**Unique Identifier:** CIN (Corporate Identification Number) - 21 characters  

#### Company Classifications

**By Shareholding:**
- Private Company (Section 2(68))
- Public Company (Section 2(71))
- One Person Company (OPC) (Section 2(62))

**By Listing:**
- Listed Company
- Unlisted Company

**By Purpose:**
- Section 8 Company (Non-profit)
- Regular Company (for-profit)

**By Ownership:**
- Subsidiary Company (Section 2(87))
- Holding Company (Section 2(46))
- Associate Company (Section 2(6))
- Government Company (Section 2(45))
- Foreign Company (Section 2(42))

**By Size:**
- Small Company (Section 2(85))
- Medium Company
- Large Company

**Portal Relevance:**
- Company type determines applicable forms and compliance
- CIN used for all searches and filings
- Company status tracked (active, strike-off, dissolved, liquidation)
- Company master data maintained

**Validation Required:** Complete company type taxonomy and portal handling

---

### 4.2 Limited Liability Partnership (LLP)
**Legal Basis:** LLP Act 2008  
**Definition:** Body corporate registered under LLP Act  
**Unique Identifier:** LLPIN (LLP Identification Number)  

**Portal Relevance:**
- Separate form series (FiLLiP, Form 1-25)
- Partner-based governance (vs. board for companies)
- Simplified compliance (vs. companies)
- LLPIN used for searches and filings
- LLP master data maintained

---

### 4.3 Individual / Person
**Legal Basis:** General legal person  
**Unique Identifier:** 
- DIN (for directors/designated partners)
- PAN (general identity)
- Email/mobile (portal account)

**Roles an Individual Can Hold:**
- Director (with DIN)
- Designated Partner (with DIN)
- Partner (without DIN)
- Professional (CS/CA/CMA with membership)
- Shareholder
- Registered User (portal account)

**Portal Relevance:**
- DIN lifecycle (application, KYC, modification)
- Professional registration
- Investor services (IEPF claims)
- Complaints
- Public access services

---

### 4.4 Registered Office
**Legal Basis:** Section 12 (Company), Section 13 (LLP)  
**Definition:** Official address of company/LLP  

**Portal Relevance:**
- Mandatory field in incorporation
- Change of address forms (INC-22, INC-23, INC-28, Form 15)
- Address verification requirements
- Jurisdiction determination (ROC)

---

## 5. ENTITY RELATIONSHIPS

### 5.1 Person-to-Entity Relationships

```
PERSON (Individual with DIN)
  ├─> DIRECTOR OF → COMPANY (1 to many)
  ├─> DESIGNATED PARTNER OF → LLP (1 to many)
  ├─> PARTNER OF → LLP (1 to many)
  ├─> SHAREHOLDER IN → COMPANY (1 to many)
  ├─> PROFESSIONAL FOR → COMPANY/LLP (1 to many)
  └─> AUTHORIZED USER FOR → COMPANY/LLP (1 to many)
```

**Portal Implications:**
- One person can have multiple entity associations
- Each association has different filing authority
- DSC links to person, authority links to person+entity
- Role determines accessible services per entity

---

### 5.2 Company-to-Company Relationships

```
COMPANY A
  ├─> HOLDING COMPANY → COMPANY B (subsidiary)
  ├─> SUBSIDIARY OF → COMPANY C (parent)
  ├─> ASSOCIATE OF → COMPANY D
  └─> RELATED PARTY → COMPANY E
```

**Portal Implications:**
- Consolidated financial statements (AOC-4 CFS)
- Related party transaction disclosures (MGT-7)
- Group structure representation

---

### 5.3 Entity-to-Authority Relationships

```
COMPANY/LLP
  ├─> REGISTERED WITH → ROC (Registrar of Companies)
  ├─> UNDER JURISDICTION → Regional Director
  ├─> SUBJECT TO → e-Scrutiny / CMS / e-Enforcement
  ├─> AUDITED BY → Auditor (CA)
  └─> REPRESENTED BY → Professional (CS/CA/CMA)
```

---

## 6. AUTHORIZATION MODEL

### 6.1 Authorization Hierarchy

**Level 1: Account Type**
- Registered User → Public + limited services
- Business User → Transactional services

**Level 2: User Role**
- Director → Director authority
- Professional → Professional authority
- Company User → Company-delegated authority
- Professional Staff → Staff authority

**Level 3: Entity Association**
- Linked to Company A → Can file for Company A
- Linked to LLP B → Can file for LLP B
- Not linked → Cannot file

**Level 4: Action Authorization**
- Role + Entity → Specific forms/services
- DSC → Signing authority
- Entity authorization → Scope of filing

**Formula:**
```
CAN_PERFORM_ACTION = 
  HAS_ACCOUNT_TYPE(Business User) AND
  HAS_ROLE(Director | Professional | Company User) AND
  LINKED_TO_ENTITY(Company/LLP) AND
  ENTITY_AUTHORIZES_ROLE(for specific action) AND
  HAS_DSC (for submission)
```

**Validation Required:** Complete authorization matrix (role × entity type × service → allowed/denied)

---

### 6.2 DSC (Digital Signature Certificate) Authorization

**DSC Ownership:**
- Registered to individual (name, DIN/PAN)
- Class 2 or Class 3 certificate
- Issued by licensed Certifying Authority

**DSC Association:**
- Linked to portal account
- Verified and registered
- Can have multiple DSC (renewal, backup)

**DSC Usage:**
- Required for form submission
- Authenticates signatory
- Legally binding

**DSC-to-Entity Authorization:**
- Director's DSC → Authorized for company's forms
- Professional's DSC → Authorized for client companies/LLPs
- Professional staff → Uses professional's DSC (with delegation)

**Validation Required:** DSC association process, multiple DSC handling, DSC-role linkage

---

## 7. USER JOURNEYS BY ACCOUNT TYPE

### 7.1 Registered User Journey

**Registration:**
1. Provide name, email, mobile, password
2. Verify email (link)
3. Verify mobile (OTP)
4. Account created

**Service Access:**
- Search company/LLP master data
- View public documents (with payment)
- Download e-books
- Participate in e-consultation
- File IEPF-5 claim (if investor)
- File complaints
- Apply for DIN (DIR-3)

**Upgrade Path:** Convert to business user by associating with entity and obtaining DSC

---

### 7.2 Director User Journey

**Prerequisites:**
- Obtain DIN (via SPICe+ or DIR-3)
- Appointed as director of company (board resolution)
- Obtain DSC

**Registration:**
1. Registered user account
2. Upgrade to business user
3. Select "Director User" role
4. Link DIN
5. Link to company (via appointment)
6. Associate DSC
7. Business user account active

**Service Access:**
- All registered user services
- My Workspace (drafts, filings, status, payment)
- File company forms (as authorized)
- DIR-3 KYC (annual)
- Sign and submit filings
- Track company filings

**Annual Obligation:** DIR-3 KYC filing

---

### 7.3 Professional User Journey

**Prerequisites:**
- Professional qualification (CS/CA/CMA)
- Professional membership (ICSI/ICAI/ICMAI)
- Certificate of practice
- Professional DSC

**Registration:**
1. Registered user account
2. Upgrade to business user
3. Select "Professional User" role
4. Provide professional registration number
5. Verify professional status
6. Associate professional DSC
7. Professional user account active

**Client Association:**
1. Client company/LLP authorizes professional
2. Professional links to client entity
3. Professional can file for client

**Service Access:**
- All registered user services
- My Workspace (multi-client view)
- File forms for multiple clients
- Provide professional certifications
- Manage professional staff accounts

---

### 7.4 Company/LLP User Journey

**Prerequisites:**
- Authorization letter from company/LLP
- Defined filing authority
- DSC (if filing authority granted)

**Registration:**
1. Registered user account
2. Upgrade to business user
3. Select "Company/LLP User" role
4. Link to entity with authorization
5. Associate DSC (if applicable)
6. Company/LLP user account active

**Service Access:**
- All registered user services
- My Workspace (entity-specific)
- File authorized forms
- Make payments
- Track entity filings

---

## 8. AUTHENTICATION AND SECURITY

### 8.1 Authentication Factors

**Single Factor (Public Services):**
- No login required for truly public services (master data view)

**Two Factor (Registered User):**
- Username/password
- OTP to mobile/email (MFA per evidence)

**Three Factor (Business User Filing):**
- Username/password
- OTP/MFA
- DSC (for submission)

**Validation Required:** Exact MFA implementation, DSC verification process

---

### 8.2 Account Security Features (INFERRED)

- Password complexity requirements
- OTP-based MFA
- DSC as second factor for submissions
- Session timeout
- Account lockout after failed attempts
- Password reset via email/OTP

**Validation Required:** Actual security policy and implementation

---

## 9. ROLE-BASED ACCESS CONTROL (RBAC) MATRIX

### High-Level RBAC (INFERRED)

| Service Category | Public | Registered User | Director User | Professional User | Company/LLP User |
|------------------|--------|-----------------|---------------|-------------------|------------------|
| Master Data View | ✓ | ✓ | ✓ | ✓ | ✓ |
| Public Documents | Payment | Payment | Payment | Payment | Payment |
| e-Book | ✓ | ✓ | ✓ | ✓ | ✓ |
| e-Consultation | View | Comment | Comment | Comment | Comment |
| Complaints | ✗ | ✓ | ✓ | ✓ | ✓ |
| IEPF-5 Claim | ✗ | ✓ | ✓ | ✓ | ✓ |
| DIN Application | ✗ | ✓ (DIR-3) | ✓ | ✓ | ✗ |
| DIR-3 KYC | ✗ | ✓ (own DIN) | ✓ (own DIN) | ✓ (own DIN) | ✗ |
| Company Filing | ✗ | ✗ | ✓ (own company) | ✓ (client) | ✓ (authorized) |
| LLP Filing | ✗ | ✗ | ✗ | ✓ (client) | ✓ (authorized) |
| My Workspace | ✗ | Limited | ✓ | ✓ | ✓ |
| Payment | ✗ | Limited | ✓ | ✓ | ✓ |

**Note:** This is a high-level inference. Complete RBAC requires service-by-service, form-by-form authorization matrix.

**Validation Required:** Detailed role-to-service-to-action permission matrix

---

## 10. ENTITY STATUS AND LIFECYCLE

### 10.1 Company Status
- **Active** - Operating normally
- **Dormant** - No significant transactions (Section 455)
- **Strike-off in progress** - STK-2 filed, under process
- **Struck off** - Removed from register (Section 248)
- **Dissolved** - Formally dissolved
- **Amalgamated** - Merged with another company
- **Under liquidation** - Winding up process
- **Under prosecution** - Subject to enforcement action

**Portal Implications:**
- Status affects filing obligations
- Strike-off/dissolved companies may have limited services
- Status shown in master data

---

### 10.2 LLP Status
- **Active** - Operating normally
- **Dissolved** - Formally dissolved
- **Under closure** - Form 24 filed, under process

**Validation Required:** Complete LLP status taxonomy

---

### 10.3 Director Status (DIN)
- **Active** - Valid and compliant
- **Inactive** - Deactivated (typically due to non-filing of DIR-3 KYC)
- **Disqualified** - Disqualified under Section 164

**Portal Implications:**
- Inactive DIN cannot be used for new appointments
- Reactivation requires KYC filing
- Disqualified directors cannot file

---

## 11. DATA PRIVACY AND MASKING

### Public vs Private Data (INFERRED)

**Public Data (viewable by all):**
- Company/LLP name, CIN/LLPIN
- Registered office address
- Incorporation date, status
- Director names and DINs
- Authorized capital
- Charges register

**Private Data (entity/user only):**
- Shareholding details (detailed)
- Financial specifics (except filed documents)
- Personal director addresses (partial masking possible)
- Email/mobile of directors (not shown publicly)

**Validation Required:** Exact data visibility rules, masking policy

---

## 12. CRITICAL VALIDATION REQUIREMENTS

### P0 - Essential for Phase 2
1. **Complete role-permission matrix** (role × service → allowed/denied)
2. **Business user registration process** (step-by-step for each role)
3. **Entity association process** (how users link to companies/LLPs)
4. **DSC association and verification** process
5. **Authorization delegation** (how company authorizes users)

### P1 - Important for Design
6. **Professional staff management** (how professionals manage staff)
7. **Multi-entity handling** (director in multiple companies)
8. **Role switching** (user with multiple roles/entities)
9. **Account upgrade path** (registered → business user)
10. **Security policies** (password, MFA, session, lockout)

### P2 - Detailed Design
11. **Complete entity status taxonomy**
12. **Data privacy and masking rules**
13. **Audit trail** (who did what when)
14. **Notification preferences** by role
15. **Help content** personalization by role

---

## 13. UNKNOWNS AND ASSUMPTIONS

### Key Unknowns (from Unknowns Register)
- **Unknown #8:** Complete role-based authorization matrix
- **Unknown #13:** Authentication implementation beyond "MFA exists"
- **Unknown #25:** Entity master data quality and duplicate resolution
- **Unknown #26:** User behavior patterns by role

### Key Assumptions Used
- **A13:** Registered User vs Business User distinction
- **A14:** Professional User = CS/CA/CMA
- **A15:** Entity-linked authorization required for filing
- **A27:** MFA = OTP-based

---

## NEXT STEPS

1. **Access MCA portal** to verify user registration flows
2. **Document role registration** process for each business user type
3. **Map complete RBAC matrix** (role × service × action)
4. **Understand entity association** mechanism (user linking)
5. **Document DSC association** and verification process
6. **Identify delegation/authorization** workflows
7. **Map user journey** for each role with screenshots/flows
8. **Document security policies** (password, MFA, session)
9. **Understand multi-entity/multi-role** handling
10. **Map officer roles** (ROC/RD interfaces) separately

---

**Document Status:** COMPREHENSIVE MODEL WITH VERIFICATION GAPS  
**Evidence Base:** Professional training materials + statutory provisions + logical inference  
**Confidence:** MEDIUM-HIGH on role types, LOW on detailed authorization  
**Risk:** Authorization matrix is critical for design but not publicly available  
**Recommendation:** Prioritize role-permission matrix validation with MCA stakeholders before Phase 2 design
