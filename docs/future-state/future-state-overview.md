# MCA Future-State Architecture Overview

**Status:** PHASE 2 COMPLETE - Ready for Development Handover

**Purpose:** Executive summary of future MCA digital platform architecture for Phase 3 implementation.

---

## Executive Summary

The future MCA platform is designed as a **regulatory service platform** organized around user intent, legal obligations, and entity context—NOT as a collection of forms.

### Core Transformation

**FROM:** Form-centric website with 70+ independent forms  
**TO:** Intent-driven regulatory platform with composable capabilities

**FROM:** Navigation-based IA (Home, Services, About, Help)  
**TO:** Entity-centric workspace with obligation intelligence

**FROM:** Login = Access  
**TO:** Context-dependent authorization (Identity → Role → Entity → Authority → Action)

**FROM:** Episodic filing  
**TO:** Continuous compliance with "what's next" intelligence

---

## Architecture at a Glance

### 12 Bounded Domains

**CORE REGULATORY:**
1. **Identity & Access** - Who, what role, for which entity, with what authority
2. **Entity & Registry** - Canonical entity records (companies, LLPs, relationships, charges)
3. **Regulatory Compliance** - Obligations, deadlines, compliance state, "what's next"
4. **Service & Transaction** - Service orchestration, transaction lifecycle, state management
5. **Regulatory Oversight** - Manual review, cases, scrutiny, adjudication, orders

**PLATFORM CAPABILITIES:**
6. **Payment & Fees** - Fee calculation, payment processing, challan
7. **Document Management** - Document lifecycle, templates, certified copies
8. **Workflow & Orchestration** - State machines, routing, STP/manual
9. **Notification & Events** - Event-driven notifications, multi-channel
10. **Search & Discovery** - Intent-based, entity-contextual search
11. **Audit & Provenance** - Comprehensive audit trail, traceability
12. **Content & Help** - Knowledge base, regulatory content, help

### Layered Architecture

```
┌─────────────────────────────────────────────────────────────┐
│  PRESENTATION LAYER                                          │
│  - Information Architecture (intent-driven)                  │
│  - My Workspace (entity control center)                      │
│  - Forms (interfaces over services/data/rules)               │
│  - Search & Discovery                                        │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│  SERVICE LAYER                                               │
│  - Entity Formation (incorporation)                          │
│  - Entity Management (changes)                               │
│  - Periodic Compliance (annual filings)                      │
│  - Event-Based Compliance (triggered filings)                │
│  - Entity Closure                                            │
│  - Public Registry Access                                    │
│  - Regulatory Cases                                          │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│  PLATFORM CAPABILITIES LAYER                                 │
│  - Identity/Authority   - Obligation/Compliance              │
│  - Entity/Registry      - Regulatory Rules                   │
│  - Document Management  - Signature/DSC                      │
│  - Fee Calculation      - Payment                            │
│  - Workflow/Case        - Notification/Events                │
│  - Search              - Audit/Provenance                    │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│  DATA LAYER                                                  │
│  - Canonical Domain Objects (~25 entities)                   │
│  - Transactional Data / Registry Data / Audit Data           │
│  - Versioning, History, Effective Dates                      │
└─────────────────────────────────────────────────────────────┘
```

---

## Critical Architectural Principles (Top 10)

1. **Intent Over Form** - Users start with what they want to accomplish, not form numbers
2. **Entity Context Everywhere** - Platform knows which entity, which role, what authority
3. **Identity ≠ Authority** - Authorization is context-dependent evaluation
4. **Ask Once, Reuse Verified Data** - Canonical data, not duplicated across forms
5. **Regulation as Structured Data** - Versioned rules linked to legal sources
6. **Services Compose Capabilities** - Common platform + service-specific logic
7. **Continuous Compliance** - Platform knows "what entity needs to do next"
8. **Persistent Transaction State** - Durable, discoverable state with history
9. **Explicit Human Intervention** - Visible routing and review workflow
10. **Registry ≠ Transactional** - Clear architectural boundary

---

## Key Entities (~25 Canonical Objects)

**Identity & Access Domain:**
- Person, Portal Account, DIN, Credential (DSC), Role, Entity Relationship, Authority, Delegation

**Entity & Registry Domain:**
- Company, LLP, Director-Company Relationship, Partner-LLP Relationship, Shareholder-Company Relationship, Charge, ROC

**Regulatory Compliance Domain:**
- Regulatory Profile, Obligation, Obligation Instance, Compliance Trigger Event, Exemption

**Service & Transaction Domain:**
- Service Definition, Transaction, Transaction Data, Transaction Signature, Transaction Document, Transaction Payment, Transaction Routing

**Regulatory Oversight Domain:**
- Review Case, Query/Deficiency, Order, Complaint, Adjudication Case

**Platform Capabilities:**
- Document, Payment, Fee Rule, Notification, Audit Event, Regulatory Rule

---

## Service Architecture

### Service Object Model

Every service has:
- **Intent:** What user wants to accomplish
- **Eligibility:** Who can use this service
- **Legal Basis:** Act, Rule, Section
- **Entity Applicability:** Which entity types
- **Requirements:** Data, documents, signatures
- **Rules:** Validation, eligibility, business rules
- **Fee:** Calculation rules
- **Workflow:** Processing path (STP/manual)
- **Outcomes:** Registry update, obligation completion
- **Next Obligations:** What happens after

### Service Patterns (8 Clusters)

1. **Entity Creation:** SPICe+, FiLLiP - name → form → payment → review → registration
2. **Person/Role Maintenance:** DIR series, LLP partner forms - identity → relationship → registry
3. **Periodic Compliance:** AOC-4, MGT-7, LLP 8/11, DIR-3 KYC - recurring obligations
4. **Event-Based Change:** Director, office, capital, charge, partner - event → filing → registry
5. **Registry Disclosure:** Master data, public docs, certified copies - search → access
6. **Regulatory Cases:** Complaint, adjudication, scrutiny - case → investigation → order
7. **Closure:** STK-2, LLP closure - eligibility → application → notice → dissolution
8. **Investor Services:** IEPF - claim → verification → outcome

### Platform Capabilities (Reusable)

- Identity/Authority evaluation
- Canonical entity data access
- Regulatory rules application
- Document attachment/validation
- Signature orchestration (multi-signer, signing order)
- Fee calculation (versioned rules)
- Payment processing
- Workflow routing (STP eligibility)
- Notification triggering
- Audit logging

**Service-Specific Logic:**
- Legal event orchestration
- Entity-specific requirements
- Service-specific validations
- Outcome-specific registry updates

---

## Form Architecture

### Core Principle: Forms Are Interfaces, Not Products

**70+ forms ≠ 70+ products**

Forms are **interface layer** over service/data/rules model.

### Form Capabilities

- **Schema-Driven:** Field types, dependencies, conditional visibility
- **Prefill from Canonical Data:** Don't ask what system knows
- **Validation Layers:**
  - Field validation (type, format, range)
  - Cross-field validation (consistency)
  - Business rule validation (regulatory rules engine)
  - Entity validation (authority, eligibility)
- **Multi-Form Composition:** Services may require multiple forms (SPICe+ Part A+B)
- **Document Orchestration:** Attach required documents per form requirements
- **Signature Orchestration:** Multi-signer with order enforcement
- **Versioning:** Form versions linked to rule versions
- **Accessibility:** WCAG-compliant by design

### Form Architecture Pattern

```
User Intent
  ↓
Service Resolution
  ↓
Form(s) Determination (may be multiple)
  ↓
Data Schema (from service definition)
  ↓
Prefill (from Entity & Registry + prior transactions)
  ↓
User Input
  ↓
Validation (rules engine)
  ↓
Document Attachment (per requirements)
  ↓
Signature (per signing authority rules)
  ↓
Fee Calculation
  ↓
Payment
  ↓
Submission (SRN generated)
```

---

## Workflow Architecture

### Separate State Machines (Not One 19-State Model)

**Draft/Edit State:**
- Draft → Validating → Validated

**Signing State:**
- Unsigned → Partially Signed → Fully Signed → Signing Failed

**Payment State:**
- Fee Calculated → Payment Pending → Payment In Progress → Payment Confirmed → Payment Failed

**Submission State:**
- Ready → Submitted (SRN generated)

**Processing State:**
- Queued → STP Processing → Manual Review Queued → Under Review

**Review State:**
- Pending Decision → Query Raised → Response Received → Approved → Rejected

**Registry State:**
- Pending Registry Update → Registry Updated → Registry Update Failed

**Transaction State (Overall):**
- In Progress → Completed → Abandoned

### Routing Logic

**STP Eligibility Evaluation:**
```
Transaction Submitted
  ↓
Evaluate STP Rules (service-specific)
  ↓
├─ STP Eligible → Automated Processing → Auto-Approve (86.7%)
│                                      → Escalate to Human (exceptions)
└─ Manual Required → Route to ROC/RD/Specialized
                        ↓
                  Assign to Officer
                        ↓
                  Review → Query / Approve / Reject
```

**Transparency:** User always knows:
- Whether submission is STP or manual
- If manual, why manual review is required
- Who is reviewing (ROC/RD)
- Current review status
- Estimated timeline

---

## Compliance Engine Architecture

### Continuous Compliance Model

```
Entity Created/Changed
  ↓
Calculate Regulatory Profile
  (entity type, capital, turnover, jurisdiction, special flags)
  ↓
Apply Applicability Rules
  ↓
Generate Obligation Instances
  (with due dates, recurrence, triggers)
  ↓
Monitor Obligations
  ↓
├─ Upcoming (30/15/7 days) → Notify
├─ Due (today) → Notify
├─ Overdue → Notify + Flag
└─ Completed (via transaction) → Mark complete, generate next

Event Detected (director change, capital change, etc.)
  ↓
Identify Triggered Obligations
  ↓
Create Obligation Instances
  ↓
Notify Entity
```

### Obligation Object

- Entity identifier
- Obligation type (Annual Filing, Event-Based, KYC, etc.)
- Legal basis (Act, Rule, Section)
- Trigger (incorporation, FY end, event)
- Applicable form(s)
- Recurrence pattern
- Due date (calculated)
- Grace period
- Additional fee trigger date
- Status (Upcoming, Due, Overdue, In Progress, Completed, Not Applicable)
- Priority (Critical, High, Medium, Low)
- Next action

---

## My Workspace Architecture

### Entity Control Center (Not Generic Dashboard)

**Core Capabilities:**

1. **Entity Context Switcher**
   - Select active entity (for multi-entity users)
   - Select active role (director vs professional vs staff)
   - View current authority

2. **Obligation Timeline**
   - What's complete
   - What's upcoming (30/15/7 days)
   - What's due today
   - What's overdue
   - What requires my action vs others' action

3. **Transaction Status**
   - Drafts in progress
   - Submitted transactions (SRN)
   - Transactions under review
   - Queries requiring response
   - Completed transactions

4. **Notices & Decisions**
   - Queries/deficiencies received
   - Orders issued
   - Hearing notices
   - Approvals/rejections

5. **Documents & Certificates**
   - Incorporation certificate
   - Filing receipts
   - Public documents
   - Certified copies

6. **Payments**
   - Pending payments
   - Payment history
   - Challans

7. **Compliance Intelligence**
   - "What do I need to do next?"
   - "What's my compliance status?"
   - "What deadlines are approaching?"
   - Compliance score (if calculated)

8. **Notifications**
   - Unread notifications
   - Action required items
   - Status updates

### User Experience Principles

- **Entity-first:** Always show which entity I'm acting for
- **Role-explicit:** Always show my current capacity
- **Action-oriented:** Focus on "what to do next" not "browse all forms"
- **Timeline-based:** Show obligations and transactions in chronological order
- **Status-transparent:** Transaction state always clear
- **Notification-driven:** Alert before deadlines, not just after

---

## Information Architecture (Future)

### NOT Current 8-Section Navigation

**DO NOT REPLICATE:**
- Home / About MCA / Acts & Rules / Services / Data & Reports / Help / Contact

### Derive from Domain Model + Intent

**Proposed Top-Level IA (Illustrative):**

**For Authenticated Entity Users:**

1. **My Entities**
   - Switch entity context
   - View entity profile
   - Entity compliance status

2. **My Obligations**
   - What's due / upcoming / overdue
   - Start obligation (resolves to service)

3. **My Transactions**
   - Drafts
   - Submitted (track status)
   - Queries (respond)
   - Completed

4. **Services** (Intent-driven)
   - "I want to..." (intent search)
   - Recent/frequent services
   - Browse by category (if needed)

5. **Documents & Certificates**
   - My entity documents
   - Certified copies request

6. **Notices & Orders**
   - Queries/deficiencies
   - Orders
   - Hearing notices

7. **Help & Support**
   - Search knowledge base
   - File complaint
   - Contact support

**For Public Users:**

1. **Search Companies/LLPs**
   - By name, CIN, LLPIN, director

2. **Public Documents**
   - View filings
   - Request certified copies

3. **Data & Reports**
   - Statistics
   - Registry reports

4. **Learn**
   - About companies/LLPs
   - How to incorporate
   - Compliance requirements

5. **Help**
   - FAQs
   - Contact

**For MCA Officers:**

1. **Review Queues**
   - My assigned cases
   - Queue management

2. **Cases**
   - Review cases
   - Scrutiny cases
   - Adjudication cases

3. **Orders**
   - Draft/issue orders

4. **Search & Lookup**
   - Entity lookup
   - Transaction lookup

5. **Reports**
   - Analytics
   - Compliance trends

### IA Design Principles

1. **Intent-driven, not form-driven**
2. **Entity-contextual** (authenticated users see "my entity" context)
3. **Obligation-forward** (show what's due, not just "all services")
4. **Role-appropriate** (director sees different view than professional)
5. **Mobile-first** (compact, action-oriented)
6. **Accessible** (WCAG 2.1 AA minimum)
7. **Search-prominent** (find by intent, not browse forms)

---

## Technical Architecture Recommendation

### Architecture Style: **Domain-Oriented Modular Monolith** (with Service-Oriented Future)

**Rationale:**
- Start with modular monolith organized by domain (12 bounded domains)
- Clear domain boundaries enable future service extraction if needed
- Avoid microservices complexity for initial build
- Government context: operational simplicity, transaction integrity, easier deployment

**Structure:**
```
MCA Platform (Monolith)
├─ Identity & Access Module
├─ Entity & Registry Module
├─ Regulatory Compliance Module
├─ Service & Transaction Module
├─ Regulatory Oversight Module
├─ Payment & Fees Module
├─ Document Management Module
├─ Workflow & Orchestration Module
├─ Notification & Events Module
├─ Search & Discovery Module
├─ Audit & Provenance Module
└─ Content & Help Module

Shared Infrastructure:
├─ Database (with domain schema separation)
├─ Event Bus (internal domain events)
├─ API Gateway
├─ Authentication/Authorization
└─ Observability (logging, monitoring, tracing)
```

**Key Patterns:**
- **Domain events** for inter-domain communication
- **Shared kernel** for common types (identifiers, value objects)
- **Anti-corruption layers** between domains
- **Repository pattern** for data access
- **Command/Query separation** (CQRS-lite for complex queries)
- **Saga pattern** for distributed transactions (if needed across domains)

**Data:**
- Single database with schema-per-domain
- Transactional consistency within domain
- Eventual consistency across domains (via events)
- Separate read models for complex queries (My Workspace, Search)

**APIs:**
- REST for synchronous operations
- Event-driven for asynchronous workflows
- GraphQL consideration for My Workspace (flexible client queries)

**Technology Considerations (Illustrative):**
- Backend: Java/Spring Boot or .NET Core (government comfort)
- Database: PostgreSQL (relational with JSONB for flexibility)
- Event Bus: RabbitMQ or Kafka (based on volume)
- Search: Elasticsearch (for full-text and entity search)
- Cache: Redis (for sessions, frequently-accessed data)
- Frontend: React (component-based, accessibility-friendly)
- Document Storage: S3-compatible object storage

### Deployment

- Containerized (Docker)
- Orchestrated (Kubernetes for scale, or simpler VM-based initially)
- Blue-green deployment for zero-downtime updates
- Database migrations with versioning (Flyway/Liquibase)

### Scalability

- Horizontal scaling of application tier
- Read replicas for reporting/search
- CDN for static assets
- Caching layers for frequently-accessed data

### Observability

- Structured logging (ELK stack or similar)
- Distributed tracing (Jaeger/Zipkin)
- Metrics (Prometheus/Grafana)
- APM (Application Performance Monitoring)
- User analytics (for UX improvement)

---

## Security Architecture

### Authentication

- Multi-factor authentication (password + OTP/SMS)
- Session management (secure, httpOnly cookies)
- DSC integration with CAs (for signing)
- Remember device (for trusted devices)

### Authorization

- Context-dependent (identity + role + entity + action)
- Policy-based access control (PBAC/ABAC)
- Entity relationship verification
- Delegation validation
- Transaction-scoped permissions

### Data Security

- Encryption at rest (database encryption)
- Encryption in transit (TLS 1.3)
- Sensitive data masking (logs, audit trails)
- PII protection (GDPR-style controls)

### API Security

- OAuth 2.0 / OpenID Connect (for external integrations, if any)
- API rate limiting
- Request validation
- CORS policies

### Audit

- Every consequential action logged
- Immutable audit trail
- Actor, action, object, timestamp, context
- Regulatory compliance reporting

### Threat Protection

- SQL injection prevention (parameterized queries)
- XSS prevention (input validation, output encoding)
- CSRF protection (tokens)
- DDoS mitigation (rate limiting, CDN)
- Fraud detection (anomaly detection on patterns)

---

## Migration & Cutover Strategy

### Assumptions

- Current MCA V3 portal exists (unverified - access blocked)
- V2 portal status unknown
- User migration required (accounts, DINs, entities, filings)

### Migration Approach

**Phase 3A: Parallel Build**
- Build future platform alongside current
- No cutover yet
- Use current MCA as reference

**Phase 3B: Pilot**
- Limited user group (new incorporations only?)
- Dual-entry period (submit to both systems?)
- Validate platform with real users

**Phase 3C: Phased Rollout**
- Service-by-service migration
  - Start: Public search (read-only, low risk)
  - Then: DIR-3 KYC (simple, high volume, STP)
  - Then: Incorporation (complex, high value)
  - Then: Annual compliance
  - Finally: Remaining services
- Entity migration: Migrate entity master data + relationships + filing history
- User migration: Migrate accounts + DINs + credentials (DSC re-registration may be required)
- Transaction migration: In-flight transactions may need manual handling

**Phase 3D: Full Cutover**
- Old platform read-only for historical data
- All new transactions on new platform
- Gradual decommissioning of old platform

### Data Migration

**Critical:**
- Company master data (CIN, name, address, status, directors, capital, charges)
- LLP master data (LLPIN, name, address, status, partners)
- Director master data (DIN, person, relationships)
- Filing history (SRN, form, date, status)
- Documents (if accessible)
- User accounts (email, mobile, account type)

**Validation:**
- Data quality checks
- Reconciliation reports
- User acceptance testing

---

## Development Handover: Priority Build Order

### Phase 3A: Foundation (Months 1-3)

**Infrastructure:**
- Development environment setup
- CI/CD pipeline
- Database setup (schema-per-domain)
- Authentication/authorization framework
- Logging/monitoring/tracing

**Core Domains (MVP):**
1. **Identity & Access** (foundational)
   - Person, Portal Account, DIN
   - Authentication (password + OTP)
   - Authorization framework
   - Entity relationship (director-company)

2. **Entity & Registry** (foundational)
   - Company master data
   - Director-company relationship
   - Registry read operations

3. **Search & Discovery** (public value, low risk)
   - Company search by name/CIN
   - Public master data display
   - Read-only initially

### Phase 3B: First Service (Months 4-6)

**Target:** DIR-3 KYC (Annual Director KYC)

**Why:**
- Simple service (single form, pre-fill, STP)
- High volume (validates platform scale)
- Low regulatory risk (annual update)
- Tests core capabilities

**Build:**
4. **Regulatory Compliance** (obligation calculation)
   - Regulatory profile for directors
   - DIR-3 KYC obligation (annual trigger)
   - Due date calculation

5. **Service & Transaction** (transaction orchestration)
   - Service definition (DIR-3 KYC)
   - Transaction lifecycle
   - Prefill from registry
   - Validation

6. **Document Management** (document attachment)
   - Document upload
   - Document validation
   - Document storage

7. **Workflow & Orchestration** (STP processing)
   - STP eligibility (DIR-3 KYC is 100% STP)
   - Auto-approval workflow
   - Registry update

8. **Notification & Events** (user communication)
   - Email/SMS notifications
   - Obligation due notification
   - Transaction status notification

9. **My Workspace** (user dashboard - basic)
   - View obligations
   - View transactions
   - Transaction status

### Phase 3C: Complex Service (Months 7-12)

**Target:** Company Incorporation (SPICe+)

**Why:**
- High value (critical service)
- Complex (multi-form, multi-signer, payment, STP + manual)
- Tests full platform capabilities

**Build:**
10. **Payment & Fees** (fee calculation and payment)
    - Fee rules engine
    - Payment gateway integration
    - Challan generation

11. **Signature/DSC** (multi-signer orchestration)
    - DSC verification with CAs
    - Multi-signer workflow
    - Signing order enforcement

12. **Regulatory Oversight** (manual review)
    - Review queue
    - Review case
    - Query/deficiency workflow
    - Approval/rejection

13. **Entity Creation** (incorporation workflow)
    - Name reservation
    - SPICe+ Part A + Part B
    - Multi-form composition
    - Entity creation on approval

14. **Regulatory Rules Engine** (validation and eligibility)
    - Load Companies Act rules
    - Validation rules
    - STP eligibility rules
    - Fee rules

### Phase 3D: Scaling (Months 13-18)

**Expand Services:**
- Annual compliance (AOC-4, MGT-7)
- Director changes
- Registered office change
- Capital changes
- Charge registration
- LLP services

**Expand Capabilities:**
- Advanced My Workspace (compliance intelligence)
- Public documents and certified copies
- Complaints and grievances
- Adjudication and orders
- Advanced search (director search, document search)
- Mobile application

**Operational Maturity:**
- Performance optimization
- Scalability testing (target: 3.84 crore filings/year = ~10K filings/day avg, ~50K peak)
- Security hardening
- Disaster recovery
- User training
- Help content and knowledge base

---

## Critical Success Factors

1. **Portal Access for Validation** - Must resolve Phase 1 portal access issue to validate assumptions
2. **Stakeholder Engagement** - MCA business owners, ROC, RD, officers must validate domain model and workflows
3. **Incremental Delivery** - Start with simple service (DIR-3 KYC), prove platform, then scale
4. **User Testing** - Real users (directors, professionals) must validate UX before full rollout
5. **Data Migration Quality** - Entity master data migration must be 100% accurate
6. **DSC Integration** - Critical path dependency on CA integration for signing
7. **Change Management** - Users accustomed to current portal need training and transition support
8. **STP Validation** - 86.7% STP rate assumption must be validated; STP rules must be accurate
9. **Regulatory Rules Accuracy** - Every validation rule must trace to legal source and be verified
10. **Performance at Scale** - 3.84 crore filings/year requires robust architecture

---

## What Phase 2 Delivered

✅ **Critical evaluation** of Phase 1 (what to retain/discard)  
✅ **Reconciled** 4 Phase 2 input documents into coherent model  
✅ **Defined** 12 bounded domains with clear responsibilities  
✅ **Locked** 10 architectural decisions  
✅ **Designed** domain model with ~25 canonical entities  
✅ **Specified** service architecture (intent-driven, composable)  
✅ **Architected** form interface layer (not independent products)  
✅ **Designed** workflow architecture (separate state machines)  
✅ **Architected** compliance engine (continuous, not episodic)  
✅ **Redesigned** My Workspace (entity control center)  
✅ **Proposed** information architecture (intent-driven, entity-centric)  
✅ **Recommended** technical architecture (domain-oriented modular monolith)  
✅ **Specified** security architecture  
✅ **Proposed** migration and build strategy  

---

## What Phase 2 Did NOT Do (Out of Scope)

❌ **Build anything** - No code, no screens, no database, no deployment  
❌ **Design detailed UI/UX** - No wireframes, mockups, design system  
❌ **Specify exact technology stack** - No vendor selection, no framework choice  
❌ **Write detailed technical specifications** - No API contracts, database schemas, class diagrams  
❌ **Validate with MCA stakeholders** - Architecture is proposed, not approved  
❌ **Access live portal** - Could not verify current implementation  
❌ **Create test plans** - No test cases, test data, test scripts  
❌ **Estimate effort/cost** - No story points, timelines, resource plans  

---

## Phase 3: Development & Implementation

**Phase 3 should:**
1. Validate Phase 2 architecture with MCA stakeholders
2. Resolve remaining unknowns (P0: 45 items from Phase 1)
3. Detail technical specifications per domain
4. Design UI/UX with accessibility compliance
5. Build incrementally (Foundation → DIR-3 KYC → SPICe+ → Expand)
6. Test continuously (unit, integration, E2E, performance, security, accessibility)
7. Migrate data carefully
8. Train users
9. Deploy with rollback plan
10. Monitor and optimize

**Phase 3 should NOT:**
- Build all 70 forms as independent products
- Recreate current website page-for-page
- Ignore Phase 2 architectural decisions
- Skip user testing
- Deploy without migration strategy
- Proceed without MCA stakeholder validation

---

## Questions for MCA Stakeholders (Validation Required)

Before Phase 3 development begins, MCA must confirm:

1. Is this architecture aligned with MCA's vision?
2. Are the 12 domains and their responsibilities correct?
3. Is the entity model (Person, Company, LLP, relationships) accurate?
4. Is the obligation model (continuous compliance) acceptable?
5. Are the service patterns (8 clusters) representative?
6. Is My Workspace redesign (entity control center) acceptable?
7. Is the IA direction (intent-driven, entity-centric) aligned?
8. Is the technical architecture (modular monolith) acceptable?
9. What is the actual V2/V3 migration status and legacy system status?
10. What are the actual STP eligibility rules?
11. What is the actual role-permission matrix?
12. What is the actual review workflow (ROC/RD assignment logic)?
13. Are there constraints not captured (budget, timeline, technology, vendor, compliance)?
14. What is the expected launch timeline?
15. What is the acceptable risk posture (big bang vs phased rollout)?

---

**END OF PHASE 2 FUTURE-STATE ARCHITECTURE OVERVIEW**

**Status:** READY FOR STAKEHOLDER REVIEW AND PHASE 3 PLANNING

**Next Step:** Stakeholder validation workshop → Phase 3 kickoff
