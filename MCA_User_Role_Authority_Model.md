**MCA USER / ROLE / AUTHORITY MODEL**

_Phase 2 Identity, Access & Authorisation Architecture Bridge_

Purpose: turn Phase 1's account-type and role findings into an architecture-oriented authorisation model without pretending that MCA's internal permission matrix has been verified.

**AUTHENTICATION ≠ AUTHORISATION**

A successful login establishes an identity. It does not, by itself, establish that the person may act for a particular company/LLP, in a particular capacity, on a particular transaction, with a particular signing or submission authority.

# 1\. Conceptual Actor Model

**PUBLIC USER  
↓  
REGISTERED USER  
↓  
ENTITY-ASSOCIATED USER  
↓  
DIRECTOR / PARTNER  
↓  
PROFESSIONAL  
↓  
AUTHORISED REPRESENTATIVE  
↓  
COMPANY STAFF  
↓  
MCA OFFICER  
↓  
SPECIALISED OFFICER / AUTHORITY**

Important: this is an architectural modelling hierarchy, not a claim that MCA implements these as a literal inheritance chain. Phase 1 verifies Registered User and four Business User subtypes—Director, Professional, Company/LLP User and Professional Staff—but explicitly says the complete role-permission matrix and RBAC implementation remain unverified. fileciteturn6file0L11-L18 fileciteturn6file2L278-L299

# 2\. The Six Separate Access Questions

| **Concept**           | **Question**                                 | **Architectural object / decision**           |
| --------------------- | -------------------------------------------- | --------------------------------------------- |
| Identity              | Who are you?                                 | Person + account + authentication credentials |
| Role                  | In what capacity are you acting?             | Active role / role context                    |
| Authority             | What are you legally permitted to do?        | Permission + legal/business policy            |
| Entity relationship   | Which company/LLP/person are you acting for? | EntityRelationship + effective dates          |
| Delegation            | Who authorised you to act?                   | Delegation / mandate / authority record       |
| Transaction authority | What can you submit, sign, pay or view?      | Transaction-scoped authorisation decision     |

# 3\. Evidence-Based Current-State Actor Catalogue

| **Actor / account type**        | **What Phase 1 supports**                                           | **Confidence**                      | **What remains unresolved**                            |
| ------------------------------- | ------------------------------------------------------------------- | ----------------------------------- | ------------------------------------------------------ |
| Public / citizen user           | Public services and public master-data/document access exist        | VERIFIED core capability            | Exact anonymous access boundary                        |
| Registered User                 | Registered User is an MCA portal account type                       | VERIFIED                            | Exact permission set                                   |
| Director                        | Business User subtype; DIN holder                                   | VERIFIED account subtype            | Exact authority/permissions by company and transaction |
| Professional                    | Business User subtype; CS/CA/Advocate category described            | VERIFIED account subtype            | Exact practitioner eligibility and service permissions |
| Company / LLP User              | Business User subtype; authorised signatory concept                 | VERIFIED account subtype            | Exact entity association and delegation mechanics      |
| Professional Staff              | Business User subtype working under professionals                   | VERIFIED account subtype            | Delegation, supervision and transaction limits         |
| KMP / statutory role            | Directors/KMP identified as statutory roles                         | INFERRED from statutory logic       | Portal account/permission mapping                      |
| Partner / Designated Partner    | Identified as statutory LLP roles                                   | INFERRED from statutory logic       | Portal role mapping and permission set                 |
| Auditor / Company Secretary     | Identified as statutory/professional actors                         | INFERRED                            | Exact portal authorisation model                       |
| Shareholder / Member            | Identified as statutory actor                                       | INFERRED                            | Exact access and transaction permissions               |
| MCA Officer                     | Required by review/adjudication logic; ROC/RD processing referenced | INFERRED                            | Internal role hierarchy and permission codes           |
| Specialised Officer / Authority | Needed for specialised regulatory/case functions                    | UNKNOWN / architectural placeholder | Actual role taxonomy and responsibilities              |

# 4\. Identity Model

The identity layer should distinguish the natural person from the portal account and from statutory identifiers/credentials. Phase 1 identifies Person, DIN, DSC and Portal Account as separate entities, while implementation details are inferred. fileciteturn6file2L301-L319

| **Object**          | **Purpose**                               | **Key attributes / relationships**                            |
| ------------------- | ----------------------------------------- | ------------------------------------------------------------- |
| Person              | Canonical human identity                  | Name, identifiers, contact, status; may hold many roles       |
| Portal Account      | Digital access identity                   | Login/contact, authentication state, account type             |
| DIN                 | Statutory director identifier             | DIN, status; linked to Person                                 |
| DSC / Credential    | Transaction signing credential            | Certificate metadata, signer binding, validity/status         |
| Role                | Capacity of the person/account            | Role type, scope, effective dates                             |
| Entity Relationship | Association with company/LLP/person       | Person/account ↔ entity, relationship type, start/end         |
| Authority           | Permission basis                          | Capability, scope, legal/business condition, effective period |
| Delegation          | Authority granted by another actor/entity | Grantor, grantee, scope, dates, status                        |
| Transaction         | Specific act being attempted              | Service, entity, actor, state, signing/payment requirements   |

# 5\. Entity-Relationship Context

A future access decision should always resolve the acting context. A single person may be associated with multiple entities and may hold different roles in each. Phase 1 specifically flags multi-entity access and entity switching as unresolved. fileciteturn6file3L384-L388

| **Relationship**                                  | **Example context**               | **Authority question**                                                     |
| ------------------------------------------------- | --------------------------------- | -------------------------------------------------------------------------- |
| Person → Company → Director                       | Person is director of Company A   | May this person perform director-only action for A?                        |
| Person → Company → Director + Professional        | Same person has two capacities    | Which capacity is active for this transaction?                             |
| Professional → Company → Mandate                  | Professional acts for Company B   | Is the professional authorised for this service?                           |
| Professional Staff → Professional → Client Entity | Staff operates under professional | What may staff draft/edit/submit, and what requires professional sign-off? |
| Person → LLP → Partner / Designated Partner       | Person is partner of LLP C        | Does role permit the requested LLP action?                                 |
| Public User → Entity → Public Access              | Anonymous/registered researcher   | Is requested record publicly accessible, and is payment required?          |

# 6\. Role → Authority → Action Matrix

| **Actor**                 | **View public data**          | **View entity data**             | **Draft**             | **Edit**              | **Submit**             | **Sign**                                          | **Pay**                     | **Respond / resubmit** | **Manage people / roles**       | **Cases**                   | **Admin**                  |
| ------------------------- | ----------------------------- | -------------------------------- | --------------------- | --------------------- | ---------------------- | ------------------------------------------------- | --------------------------- | ---------------------- | ------------------------------- | --------------------------- | -------------------------- |
| Public user               | Yes / subject to access rules | Public only                      | No / service-specific | No                    | No                     | No                                                | If service requires payment | No                     | No                              | Public enquiry only         | No                         |
| Registered user           | Yes                           | Limited / service-specific       | Service-specific      | Service-specific      | Service-specific       | No statutory signing implied                      | Yes                         | Service-specific       | No                              | Complaint service           | No                         |
| Director / partner        | Yes                           | Authorised entities              | Yes                   | Yes / scope           | Yes / scope            | Yes where legally required                        | Yes / scope                 | Yes / scope            | Potentially / scope             | Case response if authorised | No                         |
| Professional              | Yes                           | Authorised client entities       | Yes                   | Yes                   | Yes / scope            | Yes where authorised                              | Yes / scope                 | Yes / scope            | No unless separately authorised | Case/service-specific       | No                         |
| Professional staff        | Yes                           | Delegated client entities        | Yes                   | Yes / delegated       | Restricted / delegated | Restricted; professional sign-off may be required | Restricted                  | Restricted             | No                              | Restricted                  | No                         |
| Authorised representative | Yes                           | Represented entities             | Yes                   | Yes                   | Yes / mandate          | Yes only if authorised                            | Yes / mandate               | Yes / mandate          | No unless authority includes it | Case response if mandated   | No                         |
| Company staff             | Yes                           | Employer entity / assigned scope | Yes                   | Yes                   | Restricted / mandate   | Restricted / authorised signer                    | Yes / scope                 | Yes / scope            | Potentially / delegated         | Restricted                  | No                         |
| MCA officer               | Yes                           | Assigned regulatory scope        | Yes / case work       | Yes / case work       | Regulatory action      | Authority-specific                                | Authority-specific          | Yes / case workflow    | Authority-specific              | Yes                         | No system-admin assumption |
| Specialised authority     | Yes                           | Assigned regulatory scope        | Case/service-specific | Case/service-specific | Authority-specific     | Authority-specific                                | Authority-specific          | Authority-specific     | Authority-specific              | Yes                         | No system-admin assumption |

This table is a target-state policy model, not a verified MCA permission matrix. The exact current permissions were explicitly identified as a P0 validation requirement in Phase 1. fileciteturn6file1L142-L146

# 7\. Transaction Authority Model

Every transaction should evaluate authority at the point of action—not only at login.

| **Action**                | **Minimum decision inputs**                                        | **Possible controls**                          |
| ------------------------- | ------------------------------------------------------------------ | ---------------------------------------------- |
| View                      | Identity (if required) + object + access policy                    | Public/authenticated/entity-scoped entitlement |
| Create draft              | Identity + service eligibility + entity context                    | Role/service eligibility                       |
| Edit                      | Identity + ownership/association + draft state                     | Object-level permission                        |
| Submit                    | Identity + active role + entity relationship + service eligibility | Submission authority                           |
| Sign                      | Signer identity + role + statutory signing rule + credential       | DSC/signature validation                       |
| Pay                       | Identity + transaction + amount + payment authority                | Payment authorisation                          |
| Respond to query          | Identity + transaction + authority + deadline                      | Case/transaction scope                         |
| Resubmit                  | Identity + original transaction + authority + state                | State + role + deadline                        |
| Manage people             | Identity + entity relationship + authority + legal event           | Relationship management policy                 |
| Access restricted records | Identity + entitlement + object sensitivity                        | Attribute-based access policy                  |
| Regulatory decision       | Officer identity + assigned case + authority                       | Authority/case scope + audit                   |

# 8\. Delegation Model

Delegation should be modelled as a first-class object rather than inferred from account type.

| **Delegation element** | **Question to resolve**            | **Target-state representation**        |
| ---------------------- | ---------------------------------- | -------------------------------------- |
| Grantor                | Who is giving authority?           | Person/entity authorised to delegate   |
| Grantee                | Who receives authority?            | Person/account                         |
| Scope                  | What may they do?                  | Permission/capability list             |
| Entity scope           | For which entity/entities?         | Entity IDs / relationship scope        |
| Service scope          | For which services?                | Service/form/capability scope          |
| Transaction scope      | For which transaction(s)?          | Transaction/case IDs where applicable  |
| Signing scope          | May they sign?                     | Explicit signing authority             |
| Payment scope          | May they initiate/approve payment? | Payment authority                      |
| Validity               | When is delegation active?         | Start/end/revocation                   |
| Evidence               | What proves authority?             | Mandate/declaration/document/reference |
| Revocation             | Can authority be withdrawn?        | Revocation event + audit trail         |

# 9\. Candidate RBAC + ABAC Architecture

Phase 1 infers RBAC, but the exact implementation is unknown. A future platform should avoid a purely role-only model because authority depends on context. fileciteturn6file0L111-L114

**RBAC answers: "What can this role generally do?"  
ABAC / POLICY answers: "Can this actor do it HERE, for THIS ENTITY, on THIS OBJECT, under THESE CONDITIONS?"**

| **Policy dimension** | **Example attribute**                                     |
| -------------------- | --------------------------------------------------------- |
| Subject              | Person/account, role, credential status                   |
| Entity               | Company/LLP ID, relationship, relationship status         |
| Action               | View, draft, edit, submit, sign, pay, respond, administer |
| Resource             | Filing, document, company record, case, payment           |
| Service              | Service intent/form/capability                            |
| Legal condition      | Applicability/eligibility                                 |
| Delegation           | Grantor, grantee, scope, validity                         |
| Transaction state    | Draft, signing, submitted, query, completed               |
| Time                 | Effective dates, deadlines, role validity                 |
| Risk / sensitivity   | Public, authenticated, entity-restricted, regulatory      |

# 10\. Access Decision Flow

**AUTHENTICATE IDENTITY  
↓  
RESOLVE ACTIVE ROLE / CAPACITY  
↓  
RESOLVE ENTITY RELATIONSHIP  
↓  
CHECK AUTHORITY / DELEGATION  
↓  
EVALUATE TRANSACTION-SPECIFIC PERMISSION  
↓  
EVALUATE LEGAL + BUSINESS RULES  
↓  
CHECK SIGNING / PAYMENT REQUIREMENTS  
↓  
ALLOW / DENY / REQUEST ADDITIONAL AUTHORITY  
↓  
CREATE AUDIT EVENT**

This flow is a proposed architecture pattern. It is intentionally more precise than simply "login → permission," because Phase 1 identifies multi-entity access, role-permission uncertainty and statutory signing as unresolved areas.

# 11\. Role Lifecycle

| **State**    | **Meaning**                           | **Authority effect**                                |
| ------------ | ------------------------------------- | --------------------------------------------------- |
| Unregistered | No portal account                     | Public access only                                  |
| Registered   | Account exists                        | Registered-user permissions only                    |
| Associated   | Linked to entity/role                 | Entity-scoped actions become possible if authorised |
| Delegated    | Authority granted by another actor    | Delegated capabilities become available             |
| Credentialed | Required signing credential active    | Signing actions may become possible                 |
| Suspended    | Account/role/credential inactive      | Sensitive actions blocked                           |
| Revoked      | Authority explicitly removed          | Delegated/role permissions terminate                |
| Expired      | Time-bounded authority ended          | Access recalculated                                 |
| Closed       | Account/relationship no longer active | Historical audit retained; action blocked           |

# 12\. Separation of Duties

- Do not assume the person who prepares a transaction must be the person who signs it.
- Do not assume the person who signs must be the person who pays.
- Do not assume an entity association automatically grants every entity-level permission.
- Do not allow professional staff authority to be inferred solely from employment/association.
- Do not let public access expose authenticated/entity-restricted records merely because the object is searchable.
- Do not let a role change silently rewrite historical transaction authority; preserve effective dates and audit events.
- Officer decisions should be scoped to assigned regulatory work; system-administration privileges should be separately controlled.

# 13\. Audit & Provenance Requirements

| **Event**              | **Record at minimum**                                           |
| ---------------------- | --------------------------------------------------------------- |
| Login / authentication | Account, identity, time, authentication method, outcome         |
| Role activation        | Actor, role, entity context, effective period                   |
| Delegation             | Grantor, grantee, scope, evidence, validity                     |
| Permission decision    | Actor, action, resource, policy/rule version, decision          |
| Draft/edit             | Actor, object, timestamp, material change                       |
| Submission             | Actor, entity, service, transaction ID, authority context       |
| Signature              | Signer, credential, transaction, timestamp, verification result |
| Payment                | Payer, transaction, amount, payment authority, result           |
| Query/resubmission     | Actor, case/transaction, response, authority, timestamp         |
| Regulatory decision    | Officer, case, authority, decision, rule/legal basis            |
| Revocation             | Actor/authority, affected scope, effective time, reason         |

# 14\. Critical Unknowns & Validation Plan

- Exact current role-permission matrix: UNKNOWN; Phase 1 explicitly lists it as a P0 validation item.
- Exact RBAC implementation: UNKNOWN.
- Exact account-type definitions and transitions: partially verified, details require validation.
- Entity switching mechanism for multi-entity users: UNKNOWN.
- Exact delegation mechanism for professional staff and representatives: UNKNOWN.
- Exact signing authority rules and DSC integration: partially known at the requirement level; technical mechanism UNKNOWN.
- Public vs authenticated vs entity-restricted boundaries: UNKNOWN.
- Exact officer role hierarchy and internal permissions: UNKNOWN.
- Whether permissions are role-only or context/attribute-based: UNKNOWN.
- Whether transaction authority is persisted, recalculated, or both: UNKNOWN.
- Exact audit-event schema and retention: UNKNOWN.
- Phase 1 recommends stakeholder validation, technical discovery and a specific user role/permission review before design. fileciteturn6file3L444-L463

# 15\. Required Stakeholder Validation Matrix

| **Question**                                                  | **Evidence required**                | **Priority** |
| ------------------------------------------------------------- | ------------------------------------ | ------------ |
| What account types exist today?                               | Official account/role definitions    | P0           |
| Which roles can access each service?                          | Role × service matrix                | P0           |
| Which roles can perform each action?                          | Role × action matrix                 | P0           |
| How is entity association established?                        | Association workflow + data model    | P0           |
| How is delegation granted/revoked?                            | SOP + portal workflow + legal basis  | P0           |
| Who can sign each filing/service?                             | Signing authority matrix             | P0           |
| Who can pay?                                                  | Payment authority rules              | P1           |
| How does multi-entity context work?                           | Live portal walkthrough              | P0           |
| What can professional staff do without professional sign-off? | Delegation/permission rules          | P0           |
| How are officer permissions assigned?                         | Internal authority model             | P1           |
| How are permissions audited?                                  | Security architecture + audit schema | P1           |
| What happens when a role/DSC/association expires?             | Lifecycle rules                      | P1           |

# 16\. Architectural Principle

**Authentication answers "Who are you?"  
Authorisation answers "What may you do, here, for whom, on what object, under what legal/operational basis?"**

The future MCA platform should therefore model identity, role, authority, entity relationship, delegation and transaction authority as separate but composable layers. A logged-in user is only the starting point of an access decision—not the conclusion.

# 17\. Source Basis & Evidence Boundary

This document is grounded primarily in the Phase 1 Summary Report. Phase 1 verifies MCA V3 account types, portal login/DSC requirements and core user categories, but explicitly states that the exact role-permission matrix, RBAC implementation, authorisation rules, multi-entity context and public/authenticated boundary require validation. It also states that internal SOPs, technical architecture, APIs and security implementation were not accessible. fileciteturn6file0L31-L44 fileciteturn6file1L142-L158 fileciteturn6file8L972-L996

Accordingly, all detailed permission tables and RBAC/ABAC recommendations above are target-state architectural hypotheses. They must not be represented to Kiro or stakeholders as confirmed descriptions of MCA's current internal access-control implementation.