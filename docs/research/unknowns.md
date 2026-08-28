# MCA Phase 1 - Unknowns Register

**Document Purpose:** Comprehensive catalog of information that cannot be determined from public sources.

**Last Updated:** 27 August 2026

---

## Critical Unknowns (P0) - Blocking Phase 2

### 1. Live Portal Structure
**What we don't know:**
- Current actual navigation hierarchy
- Page-level URLs (all seed URLs unverified)
- Page titles and content organization
- Homepage current state (cards, links, layout)
- Footer navigation
- Cross-linking patterns between sections

**Why it matters:** Cannot build accurate information architecture without knowing current structure  
**Blocker for:** URL inventory, page inventory, IA map  
**Required action:** Establish portal access or obtain official sitemap export  

### 2. Complete Service Catalog
**What we don't know:**
- Definitive list of all current active services
- Exact service names as shown to users
- Service entry point URLs
- Service availability by user role
- Services added/deprecated since 2021 V3 launch

**Why it matters:** Service catalog is foundation for all journey mapping and process documentation  
**Blocker for:** Service blueprints, user journeys, service-to-form mapping  
**Required action:** Portal crawl or official service catalog export  

### 3. Complete Active Forms List
**What we don't know:**
- All currently active e-forms with versions
- Form retirement/deprecation status (V2 vs V3)
- Form availability by entity type and role
- Exact form structure (fields, sections, validation rules)
- Form dependencies and sequences

**Why it matters:** Forms are the transaction interface; incomplete form catalog means incomplete process understanding  
**Blocker for:** Form-to-service mapping, data model, validation rules  
**Required action:** Official forms catalog + form metadata export  

### 4. Transaction State Machine
**What we don't know:**
- Exact user-visible state labels
- Complete state transitions
- Conditions that trigger each transition
- States specific to different service types
- Timeout/expiration rules
- Cancellation/withdrawal states

**Why it matters:** Transaction states define user experience and process logic  
**Blocker for:** User journey accuracy, status page design, notification triggers  
**Required action:** Portal observation + transaction logs + process documentation  

### 5. My Workspace Structure
**What we don't know:**
- Complete feature set in authenticated area
- Dashboard organization
- Draft management
- Pending action visibility
- Transaction history view
- Notification/alert interface
- Profile management functions

**Why it matters:** Authenticated experience is core user workflow area  
**Blocker for:** Authenticated user journey mapping  
**Required action:** Authenticated portal access  

---

## Important Unknowns (P1) - Detailed Process Understanding

### 6. e-Governance Module Implementation Details
**What we don't know:**
- e-Scrutiny: Selection criteria, process, user visibility, timeline
- CMS: Detection rules, notice types, alert distribution, response workflow
- e-Enforcement: Case types, trigger conditions, user interface, resolution paths
- e-Adjudication: Case initiation, notice delivery, response mechanism, hearing process, order delivery
- e-Consultation: Posting process, comment workflow, categorization, policy integration
- MCA Lab: Operational status, processes, outputs
- Learning Management System: Content, access, structure

**Why it matters:** These modules represent significant regulatory platform capabilities  
**Blocker for:** Regulatory journey mapping, compliance workflow understanding  
**Required action:** Official module documentation + stakeholder interviews  

### 7. STP vs Human Processing Rules
**What we don't know:**
- Which forms qualify for STP
- STP business rule details
- What triggers human review
- CPC/CPACE assignment rules
- ROC vs RD routing logic
- Review criteria and checklists
- Processing timelines (actual vs SLA)

**Why it matters:** Processing path affects user experience and timeline expectations  
**Blocker for:** Workflow accuracy, timeline estimation, exception handling  
**Required action:** Internal SOP documentation + officer workflow observation  

### 8. Role-Based Authorization Matrix
**What we don't know:**
- Complete list of system roles
- Service-by-service permission requirements
- Entity-role-action authorization rules
- Professional vs director vs company user distinctions
- Delegation/proxy authorization rules
- Role verification/proof requirements

**Why it matters:** Authorization governs who can do what; affects user experience and security model  
**Blocker for:** Role-based access control design, user management  
**Required action:** Official authorization documentation  

### 9. Prefill and Master Data Sources
**What we don't know:**
- Which fields are prefilled in which forms
- Master data tables and relationships
- Update propagation rules
- Conflict resolution when data changes
- External data sources (if any)
- Data refresh frequency

**Why it matters:** Data reuse is efficiency driver; understanding sources enables future optimization  
**Blocker for:** Data architecture, integration design  
**Required action:** Technical data dictionary + system architecture docs  

### 10. Payment and Fee Calculation
**What we don't know:**
- Detailed fee calculation rules by service/form/entity
- Additional fee/late fee/penalty calculation
- Payment gateway provider(s)
- Payment reconciliation process
- Failed payment recovery workflow
- Refund process and timelines

**Why it matters:** Payment is critical transaction step; failures block completion  
**Blocker for:** Payment flow design, reconciliation logic  
**Required action:** Fee schedule documentation + payment integration specs  

---

## Technical Unknowns (P1) - System Architecture

### 11. Technical Architecture Details
**What we don't know:**
- Microservice boundaries and responsibilities
- Internal API specifications
- Service orchestration patterns
- Data flow between services
- Event/message architecture
- Caching strategy
- Session management

**Why it matters:** Technical architecture affects scalability, reliability, future extensibility  
**Blocker for:** Phase 4 technical architecture design  
**Required action:** Technical architecture documentation  

### 12. Database and Data Model
**What we don't know:**
- Database technologies in use
- Schema design
- Entity-relationship models
- Data partitioning/sharding
- Backup and recovery
- Data retention and archival
- Master data management approach

**Why it matters:** Data model is foundation of all services  
**Blocker for:** Data architecture design, migration planning  
**Required action:** Database schema documentation  

### 13. Integration and Interoperability
**What we don't know:**
- API catalog (public and internal)
- Authentication mechanisms for APIs
- Rate limits and quotas
- Data exchange formats
- Integration with GST, Income Tax, EPFO, ESIC, banks
- Third-party dependencies
- Webhook/callback mechanisms

**Why it matters:** Ecosystem integration is stated V3 goal; need to understand current state  
**Blocker for:** Integration architecture, ecosystem design  
**Required action:** API documentation + integration specifications  

### 14. Security and Authentication
**What we don't know:**
- Authentication implementation (beyond "MFA exists")
- DSC integration technical details
- OTP delivery mechanism
- Session timeout rules
- Password policies
- Account recovery process
- Audit logging scope and retention

**Why it matters:** Security is critical for regulatory platform  
**Blocker for:** Security architecture, compliance verification  
**Required action:** Security architecture documentation  

### 15. Document Management
**What we don't know:**
- Document storage technology
- Document indexing and search
- Certification/digitization workflow
- Access control by document type
- Retention and disposal rules
- Format support and conversion
- Document versioning

**Why it matters:** Document repository is substantial system component  
**Blocker for:** Document architecture design  
**Required action:** Document management system documentation  

---

## Process Unknowns (P2) - Detailed Workflows

### 16. Form Validation Rules
**What we don't know:**
- Field-level validation rules by form
- Cross-field validations
- External validation (dependency checks against registry)
- Validation error messages and codes
- Validation rule versioning

**Why it matters:** Validation affects user experience and error handling  
**Blocker for:** Form design, validation logic implementation  
**Required action:** Form rule specifications  

### 17. Resubmission and Query Handling
**What we don't know:**
- Query initiation process (officer side)
- Query notification to user
- Query response mechanism
- Resubmission scope (full vs partial)
- Resubmission fee rules
- Query resolution verification

**Why it matters:** Resubmission is significant workflow path (8.3 lakh rejections)  
**Blocker for:** Exception handling design  
**Required action:** Resubmission process documentation  

### 18. Notification and Communication
**What we don't know:**
- Notification triggers by event type
- Notification channels (email, SMS, dashboard, etc.)
- Notification content and templates
- Notification delivery guarantees
- Communication preferences/opt-out
- Notification audit trail

**Why it matters:** Communication keeps users informed of transaction status  
**Blocker for:** Notification architecture  
**Required action:** Notification system documentation  

### 19. Helpdesk and Support
**What we don't know:**
- Helpdesk ticket categories (beyond high-level: technical, awareness, processing)
- Ticket routing rules
- Escalation triggers and paths
- Knowledge base structure
- Self-service capabilities
- Support staff interfaces
- Case management workflow
- Resolution SLAs

**Why it matters:** Helpdesk handles 316K+ tickets annually  
**Blocker for:** Support system design  
**Required action:** Helpdesk system documentation + case taxonomy  

### 20. Compliance and Enforcement Workflows
**What we don't know:**
- Default detection rules
- Notice generation and delivery
- Response deadlines
- Penalty calculation
- Appeal process
- Settlement/compounding process
- Prosecution initiation criteria

**Why it matters:** Enforcement is regulatory function  
**Blocker for:** Compliance workflow design  
**Required action:** Enforcement SOP documentation  

---

## Data and Reporting Unknowns (P2)

### 21. Public Data Dissemination
**What we don't know:**
- Complete list of public data products
- Data update frequency
- Data formats and schemas
- Download/API access mechanisms
- Data masking/privacy rules
- Historical data availability

**Why it matters:** Public data transparency is platform objective  
**Blocker for:** Data & Reports design  
**Required action:** Data product catalog  

### 22. Analytics and Monitoring
**What we don't know:**
- Analytics instrumentation
- Metrics tracked
- Dashboard users and use cases
- Real-time vs batch reporting
- Anomaly detection
- Performance monitoring

**Why it matters:** Analytics drive improvement  
**Blocker for:** Instrumentation design  
**Required action:** Analytics architecture documentation  

---

## Legal and Regulatory Unknowns (P2)

### 23. Legal-to-Service Traceability
**What we don't know:**
- Complete mapping of Act section → Rule → Form → Service
- Notification implementation timeline
- Circular/clarification propagation to service/form
- Amendment impact analysis process
- Backward compatibility rules

**Why it matters:** Legal compliance is platform purpose  
**Blocker for:** Compliance verification, change management  
**Required action:** Legal mapping documentation  

### 24. Internal SOP Catalog
**What we don't know:**
- Complete list of internal processes
- SOP ownership and approval
- SOP versioning and updates
- Officer training materials
- Process exception handling

**Why it matters:** SOPs define actual operational processes  
**Blocker for:** Process accuracy  
**Required action:** SOP library access  

---

## User and Entity Unknowns (P2)

### 25. Entity Master Data Quality
**What we don't know:**
- Data completeness by field
- Data quality metrics
- Duplicate detection and resolution
- Entity linking across systems
- Historical data cleanup status

**Why it matters:** Master data quality affects all downstream processes  
**Blocker for:** Data quality design  
**Required action:** Data quality assessment  

### 26. User Behavior and Patterns
**What we don't know:**
- Actual user journeys (beyond designed flows)
- Drop-off points and abandonment
- Error frequency and types
- Search patterns and zero-result queries
- Time-to-complete by service
- Return user patterns

**Why it matters:** Real user behavior reveals actual friction points  
**Blocker for:** User experience optimization  
**Required action:** Analytics data + user research  

---

## Change Management Unknowns (P2)

### 27. Release and Deployment
**What we don't know:**
- Release frequency and process
- Testing procedures
- Rollback capabilities
- Downtime maintenance windows
- Change communication to users
- Feature flagging/gradual rollout

**Why it matters:** Change management affects stability  
**Blocker for:** Future deployment planning  
**Required action:** DevOps documentation  

### 28. Regulatory Change to System Change Pipeline
**What we don't know:**
- How legal changes become system changes
- Change request and approval process
- Development and testing timeline
- Stakeholder notification
- Training and help content updates
- Retrospective validation

**Why it matters:** Regulatory agility is critical capability  
**Blocker for:** Change pipeline design  
**Required action:** Change management process documentation  

---

## Mitigation Strategy by Unknown Type

| Unknown Type | Immediate Action | Near-term Action | Long-term Action |
|--------------|------------------|------------------|------------------|
| **Portal Structure** | Use historical docs + third-party | Establish portal access | Automated crawl/monitoring |
| **Service/Form Catalogs** | Use statutory requirements + third-party | Official catalog export | Registry integration |
| **Process Workflows** | Infer from public behavior | Stakeholder interviews | Transaction log analysis |
| **Technical Architecture** | Document as black box | Request architecture docs | Reverse engineering if needed |
| **Legal Mapping** | Use Act/Rules text | Request mapping docs | Build traceability tool |
| **User Behavior** | Use helpdesk evidence | Request analytics | User research program |

---

## Impact Assessment

### High Impact Unknowns (affect core design)
1. Service catalog completeness
2. Transaction state machine
3. Role-based authorization
4. STP vs human processing rules
5. My Workspace structure

### Medium Impact Unknowns (affect detailed design)
6. e-Governance module details
7. Prefill/master data sources
8. Payment flows
9. Form validation rules
10. Resubmission process

### Low Impact Unknowns (affect optimization, not initial design)
11. Technical implementation details
12. Analytics and monitoring
13. User behavior patterns
14. Change management processes

---

## Recommendations

1. **For Phase 1 Completion:**
   - Document known structure using available evidence
   - Clearly label all UNKNOWN items
   - Provide assumptions where logical inference is necessary
   - Flag validation requirements

2. **For Phase 1 → Phase 2 Transition:**
   - Prioritize P0 unknowns for resolution
   - Plan stakeholder engagement for process unknowns
   - Plan portal access establishment for structural unknowns
   - Accept technical unknowns as future discovery items

3. **For Future Phases:**
   - Build with flexibility to accommodate unknown details
   - Design verification/validation checkpoints
   - Plan iterative refinement as unknowns are resolved

---

## Document Status

**Total Unknowns Catalogued:** 28  
**P0 Critical:** 5  
**P1 Important:** 15  
**P2 Detailed:** 8  

**Primary Causes:**
- Portal access blocked (40% of unknowns)
- Internal documentation not public (35% of unknowns)
- Technical implementation details not exposed (25% of unknowns)

**Resolution Path:**
- MCA stakeholder collaboration: ESSENTIAL
- Portal access: ESSENTIAL  
- Technical documentation: IMPORTANT
- User research: DESIRABLE
