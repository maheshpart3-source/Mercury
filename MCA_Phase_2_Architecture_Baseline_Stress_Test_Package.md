**MCA DIGITAL PLATFORM TRANSFORMATION**

**PHASE 2 ARCHITECTURE BASELINE & STRESS-TEST PACKAGE**

Canonical Vocabulary • Service Stress Tests • Regulatory Traceability • Architecture Decision Baseline  
27 August 2026  
**Status: Ready for Phase 3 Product Design, with parallel validation**

# 1\. Executive Baseline

This package is the formal baseline between Phase 2 future-state architecture and Phase 3 product design. It tests whether the architecture is internally coherent, reusable across materially different MCA service patterns, and traceable from regulatory source to digital outcome.

Phase 2 established a future MCA model organized around user intent, legal obligations and entity context rather than a collection of forms. It proposed 12 bounded domains, approximately 25 canonical entities, an intent-driven service model, continuous compliance, an entity-centric workspace, and a domain-oriented modular-monolith direction.

| **Question**                                                     | **Conclusion**                                                         | **Status**     |
| ---------------------------------------------------------------- | ---------------------------------------------------------------------- | -------------- |
| Domain model coherent?                                           | Yes, subject to terminology frozen below.                              | LOCKED         |
| Services more fundamental than forms?                            | Yes; forms are interfaces over service/data/rules.                     | LOCKED         |
| Identity distinct from authority?                                | Yes; authorization is contextual.                                      | LOCKED         |
| One universal state machine?                                     | No; orthogonal state machines are required.                            | LOCKED         |
| Can radically different service patterns share the architecture? | Yes, using shared primitives plus service/case-specific logic.         | PASS           |
| Exact current MCA implementation known?                          | No; live portal/internal implementation remains incompletely verified. | UNKNOWN        |
| Technical stack final?                                           | No; architecture direction is stronger than technology choice.         | PROVISIONAL    |
| Ready for Phase 3?                                               | Yes, with evidence recovery continuing in parallel.                    | CONDITIONAL GO |

# 2\. Evidence Boundary

Phase 1 reported that all attempted MCA seed URLs returned HTTP 403 and that zero live portal URLs were verified. It therefore treated navigation, My Workspace, internal systems, APIs, databases and internal SOPs as unverified or inferred. This baseline preserves that discipline.

- CURRENT VERIFIED — supported by official/project evidence classified as verified.
- CURRENT INFERRED — logical reconstruction from verified services, legal requirements or secondary evidence.
- FUTURE PROPOSED — architecture/product design for the replacement platform.
- UNKNOWN / VALIDATION REQUIRED — current implementation facts not safely established.
- A future-state decision may be locked even when the corresponding current-state implementation remains unknown.

# 3\. Canonical Vocabulary

| **Term**             | **Canonical definition**                                                                               | **Status**          |
| -------------------- | ------------------------------------------------------------------------------------------------------ | ------------------- |
| Person               | Natural person represented by identity data; may have multiple roles/capacities.                       | LOCKED              |
| Portal Account       | Digital access construct; not proof of legal authority.                                                | LOCKED              |
| Identity             | Verified representation of who is acting.                                                              | LOCKED              |
| Role / Capacity      | Capacity in which the person acts: director, partner, professional, staff, etc.                        | LOCKED              |
| Entity               | Legal/registry subject such as company or LLP.                                                         | LOCKED              |
| Entity Relationship  | Connection between actor and entity, such as director or professional representative.                  | LOCKED              |
| Authority            | Legally/operationally permitted scope of action for actor + entity + transaction + conditions.         | LOCKED              |
| Delegation           | Authority granted to another actor, with scope and lifecycle.                                          | LOCKED              |
| Intent               | Outcome the user wants, independent of form number.                                                    | LOCKED              |
| Service              | Business capability orchestrating requirements, data, documents, rules, payment, workflow and outcome. | LOCKED              |
| Form                 | Legal/digital submission interface or artifact used by a service.                                      | LOCKED              |
| Obligation           | Regulatory duty applicable under defined conditions.                                                   | LOCKED              |
| Transaction          | Persistent user/system interaction attempting a service.                                               | LOCKED              |
| Filing               | Legal submission/record produced through a service.                                                    | LOCKED              |
| Case                 | Regulatory/grievance matter with its own evidence, actors, decisions and lifecycle.                    | LOCKED              |
| Document Requirement | Rule stating what evidence is needed.                                                                  | LOCKED              |
| Document Instance    | Specific uploaded/generated/signed document.                                                           | LOCKED              |
| Registry Record      | Authoritative record of an entity, relationship, charge, filing outcome or other registrable fact.     | LOCKED              |
| Outcome              | Legally/business-relevant result of a service or case.                                                 | LOCKED              |
| Rule                 | Versioned, traceable expression of a regulatory/business condition.                                    | LOCKED IN PRINCIPLE |
| Workflow             | Orchestration of processing, routing, review, decision and state transitions.                          | LOCKED              |

## 3.1 Non-negotiable distinctions

- Identity ≠ Authority
- Account ≠ Identity
- Identity ≠ Role
- Role ≠ Authority
- Entity ≠ Account
- Form ≠ Service
- Service ≠ Transaction
- Transaction ≠ Filing
- Transaction ≠ Case
- Document Requirement ≠ Document Instance
- Payment State ≠ Transaction State
- Case State ≠ Transaction State
- Registry Record ≠ Transaction
- Public Registry ≠ Transactional System
- Legal Rule ≠ UI Logic
- Current MCA implementation ≠ Future MCA architecture

# 4\. Service Architecture Stress Test

The architecture passes only if materially different MCA interactions can use the same core primitives without forcing every service into the same workflow or UI.

- Intent does not require a form number as the starting point.
- Identity, role, authority and entity context remain explicit.
- Regulatory applicability is separable from UI.
- Canonical data can be reused/prefilled.
- Documents, signatures and payment are reusable capabilities.
- Service-specific legal logic remains isolated.
- STP, manual review, public access and case workflows can coexist.
- Outcome and registry effects are explicit.
- Next obligations can be generated where legally applicable.

| **Pattern**                   | **Representative service**             | **Type**                        | **Why different**                               | **Core primitives**                                           | **Result** |
| ----------------------------- | -------------------------------------- | ------------------------------- | ----------------------------------------------- | ------------------------------------------------------------- | ---------- |
| Company incorporation         | SPICe+                                 | Entity creation                 | Complex multi-party transaction                 | Identity/entity/documents/signature/payment/workflow/registry | PASS       |
| Director annual KYC           | DIR-3 KYC                              | Periodic person/role compliance | Recurring, data-heavy, STP-oriented             | Identity/DIN/prefill/rules/signature/filing                   | PASS       |
| Annual financial filing       | AOC-4 family                           | Periodic entity compliance      | Structured data + documents                     | Entity/period/data/docs/signature/payment/filing              | PASS       |
| Director/partner change       | DIR / LLP partner-change family        | Event-based relationship change | Legal event changes registry relationship       | Person/entity relationship/authority/effective date/registry  | PASS       |
| Charge lifecycle              | CHG family                             | Persistent registry object      | Object lifecycle extends beyond one transaction | Charge/holder/instrument/filing/fee/registry                  | PASS       |
| Strike-off / closure          | STK-2 / closure                        | Entity termination              | Preconditions + notice/review + terminal state  | Eligibility/preconditions/evidence/case/workflow/registry     | PASS       |
| Public documents / inspection | Public documents / certified copies    | Public registry access          | Read/search/entitlement oriented                | Search/entitlement/fee/document/provenance                    | PASS       |
| Complaint / grievance         | Complaint service                      | Case creation                   | Case lifecycle, not filing lifecycle            | Identity/issue/evidence/routing/response/closure              | PASS       |
| Scrutiny / adjudication       | Regulatory oversight                   | Case management                 | Notice/evidence/hearing/decision/order/appeal   | Case/authority/notice/evidence/order/payment/appeal           | PASS       |
| Investor/public research      | Master data, filings, charges, reports | Public information              | Read-heavy and provenance-sensitive             | Search/entity profile/filings/documents/relationships         | PASS       |

## 4.1 Stress-test findings

- The reusable core is not one universal workflow; it is a set of shared capabilities plus multiple service/case patterns.
- Filing services can share transaction primitives without sharing identical processing states.
- Registry objects such as companies, relationships and charges need independent lifecycles.
- Public information services need entitlement/search/document capabilities without transactional authority.
- Regulatory cases require a Case model rather than filing-centric transaction states.
- Closure exposes the need for cross-entity precondition evaluation.
- The conceptual architecture survives all ten tests; exact legal/current implementation details remain validation work.

# 5\. Regulatory-to-Digital Traceability Proof

The Regulatory Framework Pack defines: LEGAL PROVISION → EVENT → OBLIGATION → ELIGIBLE ACTOR/ENTITY → DATA → DOCUMENT → SERVICE/FORM → VALIDATION → FEE → WORKFLOW → DECISION/OUTCOME → REGISTRY → NEXT OBLIGATION. The examples below use real statutory anchors and official MCA instruction material; they are representative architecture proofs, not a complete legal implementation.

| **Example**          | **Legal anchor**                                                                          | **Event / intent**                | **Actor**                             | **Data**                                                                          | **Service / form**      | **Digital rules**                                       | **Outcome**                   | **Next obligation**                                |
| -------------------- | ----------------------------------------------------------------------------------------- | --------------------------------- | ------------------------------------- | --------------------------------------------------------------------------------- | ----------------------- | ------------------------------------------------------- | ----------------------------- | -------------------------------------------------- |
| Incorporation        | Companies Act §7; §12; Incorporation Rules                                                | Start company                     | Promoter / proposed directors         | Identity, proposed entity, name, office, constitution, capital, declarations      | SPICe+                  | Eligibility, naming, identity, document, signature, fee | Registration/CIN              | Post-incorporation compliance                      |
| Registered office    | Companies Act §12                                                                         | Establish/change office           | Company / authorised actor            | Entity, address, effective date, evidence                                         | Office service/form     | Address/evidence/jurisdiction/timing                    | Registry address record       | Future office/compliance events                    |
| Director appointment | Companies Act §152; director rules                                                        | Appoint/change director           | Company + proposed director           | DIN, identity, role, consent, declarations                                        | Director-change service | DIN/eligibility/role/consent/timing                     | Director-company relationship | KYC/subsequent compliance                          |
| Director KYC         | Rule 12A, Companies (Appointment and Qualification of Directors) Rules; MCA DIR-3-KYC kit | Maintain KYC                      | DIN holder                            | KYC identity/contact data + evidence                                              | DIR-3 KYC               | KYC/identity/duplicate-data/DSC checks                  | DIN/KYC status                | Next annual cycle                                  |
| Annual return        | Companies Act §92                                                                         | File annual return                | Company + authorised filer            | Office, activities, capital, members, directors/KMP, meetings and prescribed data | MGT-7 family            | Period/entity/applicability/deadline/fee                | Annual return record          | Next annual obligation                             |
| Financial statements | Companies Act §137                                                                        | File adopted financial statements | Company + authorised filer            | Financial statements + prescribed attachments                                     | AOC-4 family            | Period/adoption/entity/attachment validation            | Filing record                 | Next annual cycle                                  |
| Charge registration  | Companies Act §§77–79; Charges Rules                                                      | Create/modify charge              | Company + charge holder               | Charge/security data, holder, instrument, dates                                   | CHG-1                   | Timing/instrument/identity/DSC/registry checks          | Charge registry record        | Modification/satisfaction                          |
| Strike-off           | Companies Act §§248–252; Removal of Names Rules                                           | Close/remove company              | Company / authorised actor / ROC      | Eligibility, declarations, outstanding state, evidence                            | STK-2                   | Preconditions/open-work/charge/default/notice checks    | Removed/dissolved state       | Historical access; revival/appeal where applicable |
| LLP incorporation    | LLP Act §§11–14; LLP Rules                                                                | Start LLP                         | Proposed partners/designated partners | Partner identity, contribution, office, incorporation data                        | FiLLiP                  | Eligibility/name/partner/document rules                 | LLPIN/registry                | LLP annual compliance                              |
| LLP annual return    | LLP Act §35; LLP Rules                                                                    | File annual return                | LLP + partners/designated partners    | Partner + prescribed annual data                                                  | LLP Form 11 / service   | Applicability/period/partner/fee rules                  | LLP filing record             | Next annual cycle                                  |

## 5.1 Architecture implications proved by the examples

- The same traceability chain spans creation, maintenance, recurring compliance, event-driven changes, persistent registry objects and closure.
- A legal source can drive applicability, requirements, validation, workflow and outcome metadata instead of being merely a citation attached to a form.
- Not every legal provision should become executable code; some require human legal interpretation or case handling.
- Official MCA instruction kits are especially valuable evidence for field-level, DSC, document, status and submission logic. Current versions must be revalidated before implementation.

# 6\. Architecture Decision Register

| **ID** | **Decision**                                              | **Status**                  | **Basis**                                                                            | **Alternative**                                | **Tradeoff / risk**                                |
| ------ | --------------------------------------------------------- | --------------------------- | ------------------------------------------------------------------------------------ | ---------------------------------------------- | -------------------------------------------------- |
| ADR-01 | Forms are interfaces, not products                        | LOCKED                      | Service/Form Matrix + Phase 2 report                                                 | Independent form products; generic builder     | More upfront modelling; less duplication.          |
| ADR-02 | Identity ≠ Authority                                      | LOCKED                      | User/Role/Authority model                                                            | Login permissions; simple RBAC                 | Requires contextual policy evaluation.             |
| ADR-03 | Services are compositions                                 | LOCKED                      | All four Phase 2 inputs reinforce it                                                 | Bespoke application per service                | Platform capabilities must mature first.           |
| ADR-04 | Obligations are first-class                               | LOCKED IN PRINCIPLE         | Regulatory Framework + Principles                                                    | Passive forms list                             | Legal-rule accuracy is high risk.                  |
| ADR-05 | Orthogonal state machines                                 | LOCKED                      | Phase 1 single 19-state model was conflated                                          | One universal state machine                    | Requires status composition in UX.                 |
| ADR-06 | Case ≠ Transaction                                        | LOCKED                      | Complaint/adjudication stress tests                                                  | Force cases through filing states              | Separate permissions/audit needed.                 |
| ADR-07 | Public Registry ≠ Transactional Platform                  | LOCKED                      | Principles + service stress tests                                                    | One undifferentiated system                    | Consistency/provenance boundary required.          |
| ADR-08 | Regulation as versioned structured data where appropriate | LOCKED IN PRINCIPLE         | Regulatory Framework Pack                                                            | Rules buried in UI/code                        | Some legal logic remains human.                    |
| ADR-09 | Domain-oriented modular monolith                          | PROVISIONAL / RECOMMENDED   | Phase 2 technical tradeoff analysis                                                  | Microservices; undisciplined monolith          | Validate with scale/operations/POCs.               |
| ADR-10 | Schema-per-domain shared database                         | PROVISIONAL                 | Phase 2 technical proposal                                                           | DB-per-service; shared undifferentiated schema | Migration/ops constraints unknown.                 |
| ADR-11 | Domain events for cross-domain communication              | PROVISIONAL                 | Compliance/notification/registry use cases                                           | Synchronous coupling everywhere                | Idempotency/order semantics need proof.            |
| ADR-12 | Specific technologies                                     | OPEN / PROVISIONAL          | Java/.NET, PostgreSQL, Kafka/RabbitMQ, Elasticsearch, Redis, React were illustrative | Treating a stack as architecture               | Requires technical POC and government constraints. |
| ADR-13 | Entity-centric workspace                                  | LOCKED AS PRODUCT DIRECTION | Future-State Principles + Phase 2                                                    | Generic link dashboard                         | Exact UX belongs to Phase 3.                       |
| ADR-14 | Intent-first discovery                                    | LOCKED AS PRODUCT PRINCIPLE | Future-State Principles + service model                                              | Form-number-first navigation                   | Needs usability validation.                        |
| ADR-15 | Continuous compliance                                     | LOCKED AS PRINCIPLE         | Regulatory Framework + Phase 2                                                       | Passive/manual compliance tracking             | Incorrect obligation calculation is high-risk.     |

# 7\. Locked vs Provisional

## 7.1 Locked

- Intent-first service model
- Entity context everywhere
- Identity/role/authority/delegation separation
- Forms as interfaces over service/data/rules
- Shared platform primitives + service-specific legal logic
- Obligations as first-class objects
- Separate transaction/payment/signing/processing/review/registry states
- Case distinct from filing transaction
- Public registry distinct from transactional platform
- Regulatory provenance and traceability
- Entity-centric workspace

## 7.2 Provisional

- Domain-oriented modular monolith as initial technical direction
- Shared database/schema-per-domain
- Event-driven cross-domain communication
- CQRS-lite/read models
- Specific backend/frontend/search/cache/document technologies
- Exact domain boundaries where POC may reveal better splits
- Exact STP/manual routing architecture
- Legacy migration architecture

# 8\. Failure Modes the Stress Test Guards Against

| **Failure**                               | **Consequence**                                                      | **Baseline response**                                  |
| ----------------------------------------- | -------------------------------------------------------------------- | ------------------------------------------------------ |
| Every service treated as a filing         | Complaints, adjudication, public access and closure become distorted | Keep Service, Transaction, Case and Registry distinct. |
| Every form treated as a generic schema    | Service-specific legal logic cannot be expressed cleanly             | Composable forms + service-specific rules/workflows.   |
| Obligations treated as UI reminders       | Compliance is a dashboard feature, not a regulatory model            | Obligation and Obligation Instance as domain objects.  |
| One state machine                         | Payment/signing/review/registry statuses become ambiguous            | Orthogonal state machines.                             |
| Login implies authority                   | Delegation/multi-entity professional flows become unsafe             | Context-dependent authorization.                       |
| Registry and transactions tightly coupled | Public access and transactional integrity/scaling conflict           | Separate domains with explicit consistency.            |
| Regulation hard-coded in UI               | Legal changes require broad rewrites; traceability lost              | Versioned rules with source provenance.                |
| Unknown internal routing assumed as fact  | Future system accidentally copies unverified internals               | Mark routing as proposed until evidence is obtained.   |

# 9\. Phase 2 Exit Gate

| **Gate**                                   | **Result**           | **Basis**                                                   |
| ------------------------------------------ | -------------------- | ----------------------------------------------------------- |
| Canonical vocabulary frozen                | YES                  | This document establishes project terminology.              |
| Service composition tested                 | YES — conceptual     | Ten materially different patterns pass.                     |
| Regulatory traceability demonstrated       | YES — representative | Real statutory anchors + official MCA instruction examples. |
| Major decisions classified                 | YES                  | Locked/provisional/open status recorded.                    |
| Current MCA implementation fully validated | NO                   | Live portal/internal evidence gaps remain.                  |
| Exact STP/routing rules validated          | NO                   | P0 validation item.                                         |
| Exact service/form catalogue validated     | NO                   | P0 validation item.                                         |
| Technical stack proven                     | NO                   | Requires POC.                                               |
| Ready for Phase 3 product model            | YES — conditional    | Evidence recovery continues in parallel.                    |

# 10\. Phase 3 Validation Priorities

| **Priority** | **Item**                                   | **Why it matters**                                    | **Phase 3 treatment**                                     |
| ------------ | ------------------------------------------ | ----------------------------------------------------- | --------------------------------------------------------- |
| P0           | Portal + My Workspace behaviour            | Prevents UX design based on false current assumptions | Validate in parallel; future IA remains first-principles. |
| P0           | Complete service/form catalogue + mappings | Maps architecture to full scope                       | Treat existing matrix as provisional inventory.           |
| P0           | Role/permission + multi-entity behaviour   | Directly affects authority UX                         | Design conceptual model; validate current behaviour.      |
| P0           | STP eligibility + routing                  | Determines workflow and transparency                  | Keep routing generic; do not hard-code assumptions.       |
| P0           | Transaction/resubmission mechanics         | Needed for status and migration mapping               | Use future orthogonal model; map legacy later.            |
| P0           | Payment + DSC integration                  | Core transaction capabilities                         | Design interfaces/contracts; validate vendors/protocols.  |
| P0           | Current technical/legacy architecture      | Needed for migration                                  | Keep future architecture decoupled until evidence exists. |
| P1           | Exact fees/deadlines                       | Needed for executable regulatory rules                | Populate only from validated current sources.             |
| P1           | Public/authenticated boundaries            | Controls registry UX/authorization                    | Use proposed separation; verify legal access rules.       |
| P1           | Notifications/triggers                     | Needed for compliance + transaction UX                | Model events now; finalize content later.                 |

# 11\. Phase 3 Handoff

Phase 3 should now translate this baseline into a future-state product model and experience. It should not begin by reproducing the current MCA website or by building production code.

- Define future user and contextual entry points.
- Define entity switching, active role/capacity and authority visibility.
- Define intent-first service initiation and requirement discovery.
- Define workspace, obligations, transactions, notices and documents.
- Define product behaviour for the tested service patterns.
- Derive future IA and interaction patterns from the domain/service model.
- Use incorporation, DIR-3 KYC, annual filing, charge, closure, public documents and regulatory cases as design anchors.
- Continue current-state evidence recovery as a parallel workstream.

**Do not start:** production frontend, production backend, full form recreation, or hundreds of screens.

# 12\. Source Register

- PHASE_2_ARCHITECTURE_REPORT.md — Phase 2 future-state architecture decision report.
- MCA_Regulatory_Framework_and_Digital_Rules_Research.docx — architecture-oriented legal/regulatory map.
- MCA_Service_Form_Process_Matrix.docx — service/form/process decomposition.
- MCA_User_Role_Authority_Model.docx — identity, role, authority, entity relationship and delegation model.
- MCA_Future_State_Architecture_Principles.md — future-state guardrails.
- PHASE_1_SUMMARY_REPORT.md — current-state reconstruction and evidence gaps.

## 12.1 Official sources used for representative regulatory proof

| **Source**                       | **URL**                                                                                                               |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| India Code — Companies Act, 2013 | <https://www.indiacode.nic.in/handle/123456789/2114?locale=en>                                                        |
| India Code — Companies Act §92   | <https://www.indiacode.nic.in/show-data?actid=AC_CEN_22_29_00008_201318_1517807327856&orderno=95§ionId=1283§ionno=92> |
| India Code — Companies Act §78   | <https://www.indiacode.nic.in/show-data?actid=AC_CEN_22_29_00008_201318_1517807327856&orderno=81§ionId=1269§ionno=78> |
| India Code — LLP Act, 2008       | <https://www.indiacode.nic.in/handle/123456789/2023?locale=en>                                                        |
| MCA — SPICe+ Instruction Kit     | <https://www.mca.gov.in/Ministry/pdf/SPICe%2B_help.pdf>                                                               |
| MCA — DIR-3-KYC Instruction Kit  | <https://www.mca.gov.in/content/dam/mca/mca-forms-instruction-kit/Instruction%20Kit_Form%20No.%20DIR%203%20KYC.pdf>   |
| MCA — CHG-1 Instruction Kit      | <https://www.mca.gov.in/content/dam/mca/mca-forms-instruction-kit/Instruction%20Kit_CHG-1.pdf>                        |
| MCA — STK-2 Instruction Kit      | <https://www.mca.gov.in/content/dam/mca-aem-forms/instructionkits/Instruction%20Kit_STK-2.pdf>                        |

# 13\. Final Baseline Decision

**PHASE 2 STATUS:** ARCHITECTURE BASELINE ESTABLISHED — READY FOR PHASE 3 PRODUCT DESIGN, WITH PARALLEL VALIDATION.

The architecture should now be treated as the working project baseline. Any change to foundational terminology or architectural invariants should be made through an explicit Architecture Decision Record rather than silently changing the model.

The principal unresolved risk is not conceptual architecture; it is evidence about the current MCA implementation and the accuracy of legal-to-digital rules at implementation time. Those risks are documented rather than allowed to block future-state product design.