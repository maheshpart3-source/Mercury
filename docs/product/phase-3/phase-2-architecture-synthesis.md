# PHASE 2 ARCHITECTURE SYNTHESIS

**MCA Digital Platform Transformation**  
**Phase 3 Product Definition — Foundation Document**  
**Date:** 28 August 2026  
**Status:** LOCKED — Architecture baseline internalized for Phase 3

---

## Purpose

This document synthesizes the Phase 2 Architecture Baseline into a working model for Phase 3 product design. It serves as the authoritative reference for architectural invariants, constraints, and decisions that Phase 3 must respect.

---

## 1. Canonical Vocabulary (23 Concepts — LOCKED)

### 1.1 Identity & Authorization (9 concepts)

| **Concept** | **Definition** | **Why Separate** |
|---|---|---|
| **PERSON** | Natural person with identity attributes | Person exists independent of digital account |
| **PORTAL ACCOUNT** | Digital access construct for authentication | Account ≠ legal identity |
| **IDENTITY** | Verified representation of who is acting | Authentication + verification + person |
| **ROLE / CAPACITY** | Acting capacity (Director, Partner, Professional, Staff, Officer) | Role ≠ authority (same role, different entities = different authority) |
| **ENTITY RELATIONSHIP** | Person ↔ Entity link with effective dates | Relationships have lifecycle (appointment → resignation) |
| **AUTHORITY** | Context-dependent permission to act | [Identity + Role + Entity + Action + Conditions] → Permit/Deny |
| **DELEGATION** | Granted authority with scope and lifecycle | Professionals delegate to staff with limited scope |
| **SIGNATURE** | DSC signing act with timestamp and signer | Signature ≠ identity; it's a cryptographic act |
| **CREDENTIAL** | DSC, Aadhaar, PAN | Credentials prove identity, not authority |

**Non-Negotiable Distinctions:**
- Identity ≠ Authority
- Account ≠ Identity
- Role ≠ Authority
- Entity ≠ Account

**Phase 3 Implication:** Product must make entity context, acting role, and authority explicit at consequential points. Never assume logged-in user = authorized actor.

---

### 1.2 Domain Core (7 concepts)

| **Concept** | **Definition** | **Why Separate** |
|---|---|---|
| **ENTITY** | Company, LLP, Person (as regulatory subject) | Core subject of regulation |
| **SERVICE** | Orchestrated capability producing outcome | Service ≠ form (SPICe+ orchestrates 11 forms) |
| **TRANSACTION** | User interaction lifecycle (Draft → Complete) | Transaction ≠ filing (rejected transactions don't produce filings) |
| **FILING** | Legal submission record (immutable) | Filing is authoritative legal record |
| **CASE** | Regulatory/grievance matter (Notice → Order) | Case ≠ transaction (complaints use case workflow, not transactional) |
| **OBLIGATION** | Regulatory duty with lifecycle (Applicable → Completed) | Obligations are first-class, not UI reminders |
| **REGISTRY RECORD** | Authoritative record with bi-temporal history | Registry ≠ transaction (different consistency models) |

**Non-Negotiable Distinctions:**
- Form ≠ Service
- Service ≠ Transaction
- Transaction ≠ Filing
- Transaction ≠ Case
- Registry Record ≠ Transaction
- Public Registry ≠ Transactional System

**Phase 3 Implication:** Product must distinguish transactional work (filing, changing) from case work (complaints, scrutiny) from public registry access (search, research).

---

### 1.3 Supporting Concepts (7)

| **Concept** | **Definition** | **Key Attribute** |
|---|---|---|
| **FORM** | Legal submission interface or artifact | Forms are interfaces over service + data + rules |
| **DOCUMENT REQUIREMENT** | Evidence rule (what documents are required) | Requirement ≠ instance (can require resubmission) |
| **DOCUMENT INSTANCE** | Actual uploaded/generated document | Each submission is unique instance |
| **PAYMENT** | Fee payment with state and gateway reference | Payment state independent of transaction state |
| **WORKFLOW** | Process orchestration (routing, state transitions) | STP vs manual routing, officer assignment |
| **RULE** | Versioned regulatory condition with provenance | Rules versioned, legal source tracked |
| **OUTCOME** | Result of service/case (registry effect, decision, certificate) | Outcomes are explicit, not implicit |

**Phase 3 Implication:** Forms emerge from service requirements. Documents have requirements vs instances. Workflow includes both STP and manual routing.

---

## 2. Architectural Invariants (LOCKED)

These architectural decisions are **LOCKED** and must NOT be changed in Phase 3 without explicit Architecture Decision Record.

### 2.1 Intent Over Form Numbers

**Invariant:** Users can start with intent ("I want to start a company") rather than form number.

**Rationale:** Form numbers are technical artifacts. First-time users don't know "INC-22" or "DIR-12."

**Phase 3 Constraint:** 
- ✅ Primary navigation supports intent-based discovery
- ✅ Form numbers remain searchable for expert users
- ✅ Both paths resolve to same underlying service

---

### 2.2 Entity Context Everywhere

**Invariant:** Active entity and acting role/capacity are explicit at consequential points.

**Rationale:** 
- Multi-entity professionals manage multiple companies/LLPs
- Same person, different entities = different authority
- Accidental action on wrong entity is high-risk error

**Phase 3 Constraint:**
- ✅ Entity switcher/selector present
- ✅ Active entity visible during transactions
- ✅ Role/capacity indicator shown
- ✅ Authority verification before consequential actions
- ✅ Cannot accidentally act on wrong entity

---

### 2.3 Identity ≠ Authority

**Invariant:** Authorization is context-dependent: [Identity + Role + Entity + Action + Conditions] → Permit/Deny

**Rationale:**
- Director of Company A ≠ can sign for Company B
- Professional represents multiple entities with different authorities
- Staff work under delegated authority

**Phase 3 Constraint:**
- ✅ Login does NOT imply full authority
- ✅ Explicit authority checks before submission
- ✅ Delegation model designed
- ✅ "You cannot do this" explained (missing authority, not generic error)

---

### 2.4 Services Are Compositions

**Invariant:** Services compose platform capabilities (Identity, Document, Payment, Signature, Workflow) + service-specific legal logic.

**Rationale:** Proven via stress test: 10 different services share common primitives.

**Phase 3 Constraint:**
- ✅ Identify reusable interaction patterns (platform primitives)
- ✅ Identify service-specific patterns
- ✅ Do NOT force all services into identical UX
- ✅ Do NOT create 70 bespoke applications

---

### 2.5 Forms Are Interfaces

**Invariant:** Forms are interface layer over service orchestration, not independent products.

**Rationale:** SPICe+ orchestrates 11 forms. Annual compliance coordinates multiple forms.

**Phase 3 Constraint:**
- ✅ Form experience emerges from service requirements
- ✅ Users experience services, not form collections
- ✅ Forms share platform patterns (prefill, validation, documents, signature, payment)

---

### 2.6 Obligations Are First-Class

**Invariant:** Obligations have lifecycle (Applicable → Due → Completed). Platform calculates obligations based on entity profile + regulatory rules.

**Rationale:** Continuous compliance. "What's due next?" must be systematically answerable.

**Phase 3 Constraint:**
- ✅ Workspace shows obligations (upcoming, overdue, completed)
- ✅ Services can satisfy obligations
- ✅ Obligations generated by events (incorporation triggers obligations)
- ✅ Deadlines explicit
- ✅ Obligation explanation includes legal basis

**Note:** Exact applicability rules are PROVISIONAL (requires legal validation).

---

### 2.7 Orthogonal State Machines

**Invariant:** Separate state machines for: Draft, Signing, Payment, Submission, Processing, Review, Registry, Transaction overall.

**Rationale:** Payment can fail while transaction is draft. Registry can lag behind processing.

**Phase 3 Constraint:**
- ✅ User-facing status composes multiple internal states
- ✅ Payment state shown separately from submission state
- ✅ Signing state independent of payment
- ✅ Registry update timing explicit ("Registry updates within 24 hours")

---

### 2.8 Transaction ≠ Filing ≠ Case

**Invariant:** Three distinct domain models with different lifecycles and workflows.

**Rationale:**
- Not all transactions produce filings (rejections, abandoned drafts)
- Cases (complaints, scrutiny) use notice/response/order workflow, not SRN-based filing

**Phase 3 Constraint:**
- ✅ Complaint experience distinct from filing experience
- ✅ Case status (Notice → Response → Hearing → Order) distinct from transaction status
- ✅ Filing record is immutable outcome, not mutable transaction

---

### 2.9 Public Registry ≠ Transactional Platform

**Invariant:** Public Registry (authoritative, immutable, query-optimized, public access) architecturally distinct from Transactional Platform (mutable, workflow-heavy, authenticated).

**Rationale:**
- Different consistency models (registry eventual consistency acceptable)
- Different access patterns (registry: read-heavy, public; transaction: write-heavy, private)

**Phase 3 Constraint:**
- ✅ Public search/research experience distinct from authenticated workspace
- ✅ Public entity profiles show registry data only
- ✅ Private workspace shows transactions, drafts, obligations
- ✅ No accidental exposure of private transactional data in public views

---

### 2.10 Regulatory Traceability

**Invariant:** Requirements and legal basis remain explainable and version-aware.

**Rationale:** Users need to understand "Why is this required?" Legal requirements change → system updates rules (data), not code.

**Phase 3 Constraint:**
- ✅ Requirement explanations link to legal basis (Act, Section, Rule)
- ✅ Explainability: "This document is required because..." with statutory reference
- ✅ Validation errors reference rule source
- ✅ Fee calculation shows formula and basis

**Note:** Complete rule extraction is PROVISIONAL (Phase 3 parallel work).

---

## 3. Domain Architecture (12 Domains — LOCKED)

### 3.1 Core Regulatory Domains (5)

**1. Identity & Access**
- Who is acting, in what role, for which entity, with what authority
- Entities: Person, Portal Account, DIN, Credential, Role, Entity Relationship, Authority, Delegation
- Services: Authentication, Authorization, DSC verification, Multi-entity switching, Delegation

**2. Entity & Registry**
- Canonical, authoritative corporate entity records
- Entities: Company, LLP, Director-Company Relationship, Partner-LLP Relationship, Shareholder, Charge, ROC
- Services: Entity master data, Entity search, Relationship management, Registry updates, Public access

**3. Regulatory Compliance**
- Continuous compliance tracking, obligation management
- Entities: Regulatory Profile, Obligation, Obligation Instance, Compliance Trigger, Exemption
- Services: Obligation calculation, Due date tracking, Compliance dashboard, Next actions

**4. Service & Transaction**
- Service orchestration, transaction lifecycle
- Entities: Service Definition, Transaction, Transaction Data/Signature/Document/Payment, Transaction Routing
- Services: Service intent resolution, Transaction creation, State management, SRN management

**5. Regulatory Oversight**
- Manual review, cases, scrutiny, adjudication, orders
- Entities: Review Case, Query/Deficiency, Order, Complaint, Adjudication Case, Scrutiny Case
- Services: Case creation, Notice issuance, Response collection, Hearing, Order issuance, Appeals

### 3.2 Platform Capability Domains (7)

**6. Payment & Fees**
- Fee calculation, payment processing
- Services: Fee calculation (versioned rules), Payment initiation/confirmation, Refund, Reconciliation

**7. Document Management**
- Document lifecycle, templates, certified copies
- Services: Upload, Validation, Storage, Retrieval, Certified copy generation, Retention

**8. Workflow & Orchestration**
- State machines, routing (STP/manual), saga patterns
- Services: STP eligibility evaluation, Manual queue routing, Officer assignment, State transitions

**9. Notification & Events**
- Event-driven notifications, multi-channel delivery
- Services: Event publishing/subscription, Notification generation, Multi-channel delivery (email/SMS/in-app)

**10. Search & Discovery**
- Intent-based, entity-contextual search
- Services: Entity search, Document search, Intent search, Service discovery, Faceted search

**11. Audit & Provenance**
- Comprehensive audit trail, regulatory reporting
- Services: Action logging, Audit query, Compliance reporting, Provenance tracking

**12. Content & Help**
- Knowledge base, regulatory content, help system
- Services: Help search, Content management, User guidance

**Phase 3 Implication:** Product capabilities map to these domains. Reusable patterns correspond to platform capability domains.

---

## 4. Service Model (LOCKED)

### 4.1 Service Composition Principles

1. **Intent-Driven:** Users start with "I want to..." not "Form INC-22"
2. **Composable:** Services = Platform Capabilities + Service-Specific Legal Logic
3. **Entity-Contextual:** Services operate on explicit entity
4. **Obligation-Linked:** Services satisfy regulatory obligations (where applicable)
5. **Outcome-Oriented:** Services produce registry outcomes, not just submissions

### 4.2 Proven Service Patterns (10 — Stress Tested)

| **Pattern** | **Service Example** | **Why Different** | **Shared Primitives** |
|---|---|---|---|
| Entity Creation | SPICe+ | Multi-form, complex orchestration | Identity, Document, Signature, Payment, Workflow, Registry |
| Person Compliance | DIR-3 KYC | 100% STP, person-centric, annual | Identity, DIN, Prefill, Rules, Signature, Filing |
| Periodic Entity Compliance | Annual Return, Financial Statements | Multi-party signing, deadline-driven | Entity, Period, Data, Docs, Signature, Payment, Filing |
| Event-Based Relationship Change | Director/Partner change | Relationship lifecycle, registry update | Person, Entity Relationship, Authority, Effective date, Registry |
| Persistent Object Lifecycle | Charge | Object spans multiple transactions | Charge, Holder, Instrument, Filing, Fee, Registry |
| Entity Termination | Strike-off/Closure | Complex preconditions, always manual | Eligibility, Preconditions, Evidence, Case, Workflow, Registry |
| Public Read Services | Public documents, Entity search | Read-only, entitlement-based | Search, Entitlement, Fee, Document, Provenance |
| User-Initiated Case | Complaint | Case workflow, not filing | Identity, Issue, Evidence, Routing, Response, Closure |
| Regulatory Case | Scrutiny, Adjudication | Regulatory-initiated, formal proceedings | Case, Authority, Notice, Evidence, Order, Payment, Appeal |
| Investor Services | IEPF claims | Specialized workflow, claim verification | Search, Claim, Evidence, Workflow, Payment, Registry |

**Key Learning:** NOT "one workflow fits all" BUT "composable capabilities with service orchestration."

**Phase 3 Implication:**
- Identify shared interaction patterns (platform primitives)
- Respect genuine service differences (don't force uniformity)
- Design for composition, not duplication

---

## 5. Architecture Decisions Summary

### 5.1 LOCKED Decisions (15)

**These are stable for Phase 3 implementation:**

| **ID** | **Decision** | **Phase 3 Constraint** |
|---|---|---|
| ADR-001 | Twelve Bounded Domains | Product capabilities map cleanly to domains |
| ADR-002 | Forms Are Interfaces | Form experience emerges from services |
| ADR-003 | Services Compose Capabilities | Identify reusable vs service-specific patterns |
| ADR-004 | Identity ≠ Authority | Context-dependent authorization UX |
| ADR-005 | Obligations First-Class | Workspace shows obligations, deadlines |
| ADR-006 | Orthogonal State Machines | User-facing status composes internal states |
| ADR-007 | Transaction ≠ Filing ≠ Case | Distinct UX for transactions vs cases |
| ADR-008 | Bi-Temporal Data | Historical queries, effective dates UX |
| ADR-009 | Registry ≠ Transaction | Public registry experience distinct from workspace |
| ADR-010 | Regulation as Data | Explainability: show legal basis for requirements |
| ADR-011 | Continuous Compliance | Proactive obligation tracking and notifications |
| ADR-016 | Intent-First Discovery | Users start with intent; form numbers searchable |
| ADR-017 | Entity-Centric Workspace | Workspace organized around entities |
| ADR-018 | Future Independent of Legacy | Don't copy current portal structure |
| ADR-019 | Parallel Validation | Document unknowns, don't block design |

---

### 5.2 PROVISIONAL Decisions (8)

**Architecturally sound, but require validation or POC:**

| **ID** | **Decision** | **Validation Needed** | **Phase 3 Treatment** |
|---|---|---|---|
| ADR-005 (partial) | Obligation Applicability | Legal validation of exact rules | Design obligation UX, mark rules PROVISIONAL |
| ADR-008 (partial) | Bi-Temporal Implementation | Technical POC | Design for bi-temporal, defer DB choice |
| ADR-010 (partial) | Complete Rule Extraction | Phase 3 parallel work | Start with high-confidence rules, expand |
| ADR-011 (partial) | Exact Applicability Logic | Regulatory Profile validation | Design compliance UX, validate profile attributes |
| ADR-012 | Modular Monolith | Technical POC, scale validation | Architecture direction, not locked stack |
| ADR-013 | Shared DB, Schema-per-Domain | Database choice, migration | Logical separation principle, defer technology |
| ADR-014 | Domain Events | Event bus choice, idempotency POC | Design for events, defer technology |
| ADR-015 | Technology Stack | Government constraints, team skills | Illustrative, not prescriptive |

**Phase 3 Action:** Design product assuming PROVISIONAL decisions are correct; document what requires validation.

---

### 5.3 VALIDATION REQUIRED (2 — P0)

**Blocking for detailed design if not validated:**

| **ID** | **Item** | **Why P0** | **Phase 3 Mitigation** |
|---|---|---|---|
| VR-001 | Complete Service & Form Catalogue | Affects service decomposition | Use Phase 1 catalogue as working hypothesis |
| VR-002 | Role-Permission Matrix | Affects authorization UX | Design future model per ADR-004, map current later |

---

### 5.4 OPEN Decisions (3)

**To be decided in Phase 3 or later:**

| **ID** | **Decision** | **Phase 3 Scope** |
|---|---|---|
| OPEN-001 | Exact UX Patterns | YES — Phase 3 designs navigation, forms, interactions |
| OPEN-002 | Technology Stack | Partial — Identify constraints, defer selection |
| OPEN-003 | Rollout Strategy | NO — Phase 4+ concern |

---

## 6. Entity Model (~25 Core Entities)

**Phase 3 needs to understand what objects exist, their relationships, and lifecycles.**

### 6.1 Identity Domain
- Person, Portal Account, DIN, Credential, Role, Entity Relationship, Authority, Delegation

### 6.2 Entity Domain
- Company, LLP, Director-Company Relationship, Partner-LLP Relationship, Shareholder, Charge, ROC

### 6.3 Compliance Domain
- Regulatory Profile, Obligation, Obligation Instance, Compliance Trigger, Exemption

### 6.4 Transaction Domain
- Service Definition, Transaction, Transaction Data/Signature/Document/Payment, Transaction Routing

### 6.5 Oversight Domain
- Review Case, Query/Deficiency, Order, Complaint, Adjudication Case, Scrutiny Case

### 6.6 Platform Domain
- Document, Payment, Fee Rule, Notification, Audit Event, Regulatory Rule

**Phase 3 Implication:** Product screens and workflows manipulate these entities. UX must make entity states and relationships understandable.

---

## 7. Phase 3 Operating Constraints

### 7.1 What Phase 3 MUST Do

1. ✅ **Inherit Phase 2 invariants** — Use vocabulary, respect locked decisions
2. ✅ **Design intent-first IA** — Don't copy current portal navigation
3. ✅ **Design entity-centric workspace** — Make entity context explicit
4. ✅ **Design for composition** — Identify platform vs service-specific patterns
5. ✅ **Respect evidence discipline** — Mark VERIFIED / INFERRED / PROPOSED / UNKNOWN
6. ✅ **Map product to architecture** — Maintain traceability (user need → capability → domain)
7. ✅ **Test product model** — Stress test against 10 service patterns
8. ✅ **Document decisions** — Explicit ADRs for Phase 2 changes

---

### 7.2 What Phase 3 MUST NOT Do

1. ❌ **Silently change Phase 2 architecture** — No hidden modifications
2. ❌ **Copy current portal structure** — Future independent of legacy
3. ❌ **Invent MCA internal details** — Mark as PROPOSED, not VERIFIED
4. ❌ **Force uniformity** — Respect genuine service differences
5. ❌ **Assume login = authority** — Context-dependent authorization required
6. ❌ **Merge registry + transactional** — Keep distinct
7. ❌ **Start production code** — Phase 3 is product definition, not implementation

---

### 7.3 When Phase 3 Can Change Architecture

**If Phase 3 discovers genuine architectural contradiction:**

1. **Document:** Problem, Evidence, Conflict with Phase 2
2. **Analyze:** Options, Tradeoffs, Recommendation
3. **Impact:** What Phase 2 decisions affected
4. **Record:** Explicit Architecture Decision Record
5. **Approve:** Not silently changed

**Example valid reasons:**
- User research shows intent-first doesn't work (unlikely but possible)
- Service patterns don't compose as expected (unlikely given stress test)
- Legal constraint prevents bi-temporal data (possible)

**Invalid reasons:**
- "It's easier to copy current portal" (that's precisely what we're NOT doing)
- "Users are used to form numbers" (support both, don't revert to form-only)

---

## 8. Phase 2 → Phase 3 Handoff Summary

**Phase 2 delivered:**
- ✅ Canonical vocabulary (23 concepts LOCKED)
- ✅ Domain architecture (12 domains LOCKED)
- ✅ Entity model (~25 entities)
- ✅ Service model (10 patterns proven)
- ✅ Regulatory traceability (10 statutory examples)
- ✅ Architecture decisions (15 LOCKED, 8 PROVISIONAL, 3 OPEN, 2 VALIDATION REQUIRED)
- ✅ GO/NO-GO assessment (CONDITIONAL GO — 85% confidence in core architecture)

**Phase 3 must deliver:**
- Future MCA product model & taxonomy
- Personas and user contexts
- Intent-first information architecture
- Entity-centric workspace design
- Priority user journeys (P0: 5, P1: 5)
- Service blueprints for each journey
- Interaction model & design system direction
- Representative prototype plan
- Validation strategy
- Phase 3 exit assessment

**Success criteria:**
- Product model maps to Phase 2 architecture (traceability maintained)
- Product survives stress test (10 service patterns work)
- Users can discover services via intent
- Entity context explicit
- Authority model clear
- Forms emerge from services
- Obligations shown proactively
- Status transparent
- Public registry distinct from workspace

---

## 9. Quick Reference: Key Architectural Questions

**When designing any product feature, ask:**

1. **Identity & Authority:** Who can do this? In what role? For which entity? With what authority?
2. **Entity Context:** Is active entity clear? Can user accidentally act on wrong entity?
3. **Service vs Form:** Is this a service (intent → outcome) or a form (interface)?
4. **Transaction vs Filing vs Case:** Is this transactional work, case work, or registry access?
5. **Reusable vs Specific:** Is this pattern reusable (platform primitive) or service-specific?
6. **State Composition:** What internal states compose the user-facing status?
7. **Obligation:** Does this service satisfy an obligation? Generate new obligations?
8. **Explainability:** Can user understand why something is required? What legal basis?
9. **Public vs Private:** Is this public registry data or private transactional data?
10. **Evidence:** Is this current VERIFIED, INFERRED, future PROPOSED, or UNKNOWN?

---

## 10. Status: Ready for Phase 3 Product Design

**Phase 2 Architecture:** ✅ **LOCKED and internalized**

**Phase 3 can now proceed with:**
- Product model definition
- Personas and contexts
- Information architecture design
- User journey mapping
- Service blueprint creation
- Interaction model design
- Prototype planning

**Architecture foundation:** SOLID ✓

---

**END OF PHASE 2 ARCHITECTURE SYNTHESIS**
