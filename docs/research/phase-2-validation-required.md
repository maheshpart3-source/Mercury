# Phase 2 Validation Required Register

**Purpose:** Document what requires MCA stakeholder validation before Phase 3 development.

**Status:** Phase 2 architecture is a **FUTURE-STATE PROPOSAL**. This register identifies what must be validated with MCA.

---

## Validation Method

Before Phase 3 development:
1. **Stakeholder Validation Workshop** (2-3 days with MCA business owners, ROC, RD, IT)
2. **Portal Walkthrough** (once access is resolved)
3. **Technical Architecture Review** (with MCA IT)
4. **User Research** (interviews with directors, professionals, citizens, officers)

---

## P0: Blocking Phase 3 Start (45 Items from Phase 1 + 10 Phase 2)

### Portal & Current Implementation (P0)

1. **Portal access** - Resolve HTTP 403 errors on all seed URLs *(CRITICAL BLOCKER)*
2. **Current navigation and IA** - Verify actual 2026 structure (Phase 1 used 2021 FAQ)
3. **My Workspace actual implementation** - Structure, features, multi-entity support
4. **V2/V3/legacy system relationships** - Migration status, e-Scrutiny, CMS status
5. **Current technical architecture** - Stack, databases, APIs (for migration planning)

### Services & Forms (P0)

6. **Complete service catalogue** - Validate 100+ services are accurate and current
7. **Complete form catalogue** - Validate 70+ forms are accurate and current versions
8. **Service-to-form mappings** - Verify which forms satisfy which services
9. **Form field schemas** - Actual field types, dependencies, validations
10. **Multi-form composition** - How SPICe+ Part A/B works, other multi-form services

### Authorization & Workflow (P0)

11. **Role-permission matrix** - Complete RBAC: which roles can do what
12. **Multi-entity context mechanism** - How users switch between entities
13. **Entity relationship establishment** - How director appointment, partner addition works
14. **Delegation mechanism** - How professional representation and staff delegation works
15. **STP eligibility rules** - Exact criteria per service (critical for correct routing)
16. **Manual review routing logic** - ROC vs RD vs CPC assignment rules
17. **Manual review workflow** - Officer queues, case assignment, SLAs
18. **Query/resubmission mechanics** - SRN versioning? New submission? Response workflow?
19. **Transaction state names** - Actual system states (Phase 1 states were inferred)
20. **Approval/rejection process** - Decision workflow, order issuance

### Integration (P0)

21. **Payment gateway providers** - Which gateways? Integration protocol?
22. **Payment gateway integration patterns** - Redirect vs inline? Challan generation?
23. **DSC verification protocol** - Technical integration with CAs
24. **DSC verification with CAs** - Which CAs? Protocol? Certificate validation?
25. **PAN validation integration** - Does it exist? Which system? API?
26. **Aadhaar validation integration** - Does it exist? Which system? API?

### Data & Migration (P0)

27. **Entity master data quality** - Completeness, accuracy of current registry
28. **Entity master data completeness** - All companies/LLPs? All relationships?
29. **Filing history format and completeness** - Can historical filings be migrated?
30. **User account data** - Email, mobile, account types, DINs, DSCs
31. **User migration requirements** - Can accounts migrate? Do users need to re-register?
32. **Document storage** - Where are current filed documents? Can they migrate?
33. **In-flight transaction handling** - What happens to transactions submitted to old portal?

### Obligations & Compliance (P0 - Phase 2 additions)

34. **Regulatory profile calculation** - Which entity attributes determine obligations?
35. **Obligation applicability rules** - Which obligations apply to which entity types?
36. **Due date calculation rules** - How are due dates calculated (FY-based, event-based)?
37. **Exemption rules** - Which entities get exemptions? Notification process?
38. **Additional fee trigger dates** - When do additional fees apply?

### Workflow & States (P0 - Phase 2 additions)

39. **Separate state machines validation** - Is Draft/Signing/Payment/Processing/Review actually separate?
40. **SRN generation point** - When is SRN generated? On payment or submission?
41. **Signature orchestration** - Multi-signer order enforcement? Partial signing state?
42. **Payment failure handling** - What happens if payment fails after signature?
43. **Registry update timing** - When does entity master data get updated?

### Regulatory Oversight (P0 - Phase 2 additions)

44. **Review queue structure** - Actual queues? ROC/RD/CPC/Specialized?
45. **Case types** - Review vs Scrutiny vs Investigation vs Adjudication lifecycle?
46. **Order issuance workflow** - Who can issue what orders? Approval chain?
47. **Complaint handling workflow** - Triage, assignment, investigation, resolution?
48. **Hearing scheduling** - For adjudication cases, how are hearings scheduled?

### Security & Access (P0 - Phase 2 additions)

49. **Public vs authenticated boundary** - What data is public? What requires login?
50. **Entity-restricted data** - What data is visible only to entity representatives?
51. **Officer permissions** - What can ROC officers vs RD vs other authorities see/do?
52. **Audit requirements** - What must be logged? Retention period? Format?
53. **Data privacy compliance** - Any GDPR-like requirements? PII handling?
54. **Security certifications required** - Any specific compliance (ISO 27001, etc.)?

---

## P1: Important for Phase 3 Detailed Design (62 Items from Phase 1 + 15 Phase 2)

### My Workspace Details (P1)

55. **My Workspace detailed features** - Beyond basic obligations/transactions
56. **Compliance score calculation** - Is compliance score calculated? Algorithm?
57. **Multi-entity switching UX** - How do users switch context?
58. **Notification preferences** - Can users control notification channels/frequency?
59. **Dashboard widgets** - What intelligence/shortcuts are provided?

### Search & Discovery (P1)

60. **Search functionality scope** - What can be searched? (entities, people, documents, forms, regulations)
61. **Search filters** - What filters are available? (jurisdiction, status, date range)
62. **Director search** - Can public search for directors? What data is exposed?
63. **Document search** - Can users search historical filings?
64. **Advanced search** - Boolean operators? Filters? Facets?

### Notifications (P1)

65. **Notification triggers** - Complete list of events that trigger notifications
66. **Notification templates** - Email/SMS templates
67. **Notification channels** - Email, SMS, portal, mobile push?
68. **Notification delivery SLAs** - How quickly must notifications be sent?
69. **Notification acknowledgment** - Is read receipt tracking needed?

### Documents (P1)

70. **Document type taxonomy** - Complete list of document types
71. **Document upload size limits** - Per document? Per transaction?
72. **Supported document formats** - PDF, images, what else?
73. **Document validation** - Virus scan? Format check? Size check?
74. **Document retention policies** - How long are documents stored?
75. **Document access rules** - Who can access which documents?
76. **Certified copy generation process** - Technical workflow for certification?

### Forms (P1)

77. **Form versioning** - How are form versions managed? Can old versions be used?
78. **Form prefill sources** - What data sources prefill which fields?
79. **Conditional field logic** - Field visibility dependencies
80. **Cross-form data flow** - For multi-form services (SPICe+), how does data flow?
81. **Form validation timing** - Real-time vs on-submission validation?
82. **Form save/resume** - Can users save incomplete forms? For how long?

### Fee & Payment (P1)

83. **Fee calculation formulas** - Exact fee rules per service (values, thresholds)
84. **Additional fee calculation** - Late fee formulas
85. **Fee waiver process** - Can fees be waived? Workflow?
86. **Payment modes** - Credit card, debit, net banking, UPI, challan?
87. **Payment reconciliation** - How are payments matched to transactions?
88. **Refund workflow** - When are refunds issued? Process?
89. **Failed payment handling** - Retry? Manual intervention?

### Reporting & Analytics (P1)

90. **Officer reporting requirements** - What reports do officers need?
91. **Entity reporting** - What reports do entities need (filing history, compliance report)?
92. **Public reporting** - What aggregate data/statistics are published?
93. **Regulatory reporting** - Any mandatory reporting to other authorities?

### Performance & Scale (P1)

94. **Concurrent user capacity** - Expected peak concurrent users?
95. **Transaction volume projections** - 3.84cr/year = ~10K/day avg, what peak?
96. **Response time SLAs** - Page load? Transaction submission? Search?
97. **Data retention periods** - How long to keep drafts? Completed transactions? Logs?

### Accessibility & Localization (P1)

98. **Accessibility compliance level** - WCAG 2.0 AA? 2.1 AA? 2.2 AA?
99. **Screen reader support** - Which screen readers must be supported?
100. **Keyboard navigation** - Complete keyboard navigability required?
101. **Multi-language support** - English only or Hindi/regional languages?
102. **Document language** - Can documents be in regional languages?

### Help & Support (P1)

103. **Help content scope** - FAQs, tutorials, videos, manuals?
104. **Support channels** - Helpdesk phone, email, chat, ticket system?
105. **Support SLAs** - Response time for complaints/grievances?
106. **Knowledge base** - Searchable help articles?
107. **Training materials** - For users? For officers?

### Integration & APIs (P1 - Phase 2 additions)

108. **Email gateway** - Which email service? SMTP? API?
109. **SMS gateway** - Which SMS provider? API?
110. **Document storage** - Object storage? Which provider/technology?
111. **External integrations** - Any other government systems to integrate?

---

## P2: Detailed Implementation (38 Items from Phase 1 + 10 Phase 2)

### Infrastructure (P2)

112. **Hosting environment** - On-premise? Cloud? Hybrid?
113. **Cloud provider** (if cloud) - AWS, Azure, GCP, NIC cloud?
114. **Database technology** - PostgreSQL, Oracle, SQL Server, MySQL?
115. **Operating system** - Linux, Windows?
116. **Container orchestration** - Kubernetes? Docker Swarm? VMs?
117. **Load balancer** - Which technology?
118. **CDN** - Which CDN provider?

### Technology Stack (P2)

119. **Backend framework** - Java/Spring Boot, .NET Core, Node.js, Python?
120. **Frontend framework** - React, Angular, Vue?
121. **Mobile technology** (if mobile) - React Native, Flutter, native?
122. **Search technology** - Elasticsearch, Solr, database full-text?
123. **Cache technology** - Redis, Memcached?
124. **Message queue** - RabbitMQ, Kafka, AWS SQS?
125. **Workflow engine** - Camunda, custom, none?

### Development & Deployment (P2)

126. **Version control** - Git, which hosting (GitHub, GitLab, Bitbucket)?
127. **CI/CD tools** - Jenkins, GitLab CI, GitHub Actions, Azure DevOps?
128. **Code quality tools** - SonarQube, linters, code coverage?
129. **Testing frameworks** - Unit, integration, E2E testing tools?
130. **Performance testing tools** - JMeter, Gatling, Locust?
131. **Security scanning tools** - SAST, DAST, dependency scanning?

### Monitoring & Operations (P2)

132. **Logging stack** - ELK, Splunk, CloudWatch?
133. **Monitoring tools** - Prometheus/Grafana, Datadog, New Relic?
134. **APM tool** - Application Performance Monitoring?
135. **Alerting** - PagerDuty, email, Slack?
136. **Distributed tracing** - Jaeger, Zipkin?

### Disaster Recovery (P2)

137. **Backup strategy** - Frequency? Retention?
138. **DR site** - Geographic redundancy?
139. **RTO/RPO targets** - Recovery time/point objectives?
140. **Failover strategy** - Automatic? Manual?

### Compliance & Governance (P2)

141. **Data residency requirements** - Must data stay in India?
142. **Compliance certifications** - ISO 27001, SOC 2, others?
143. **Penetration testing requirements** - Frequency? Third-party?
144. **Vulnerability management** - Process? Tools?
145. **Change management process** - CAB? Approval workflow?

### Vendor & Licensing (P2 - Phase 2 additions)

146. **Open source policy** - Which licenses acceptable?
147. **Commercial software licensing** - Budget? Procurement process?
148. **Vendor selection process** - For payment gateway, DSC CAs, SMS, email?
149. **SLA requirements for vendors** - Uptime? Support response time?

### Migration & Cutover (P2 - Phase 2 additions)

150. **Cutover strategy** - Big bang? Phased? Service-by-service?
151. **Dual-operation period** - Will old and new systems run in parallel?
152. **Data migration approach** - Batch? Real-time sync? One-time?
153. **Migration validation** - Data quality checks? Reconciliation?
154. **Rollback criteria** - Under what conditions to rollback?
155. **User communication plan** - How to inform users of change?

---

## Validation Workshops

### Workshop 1: Architecture Validation (2 days)

**Participants:** MCA business owners, senior management, ROC representatives, technical architects

**Agenda:**
- Day 1: Domain model review, service architecture, entity model, user journeys
- Day 2: Technical architecture, migration strategy, build roadmap, Q&A

**Deliverable:** Approved/modified architecture, list of changes required

---

### Workshop 2: Portal Walkthrough (1 day)

**Participants:** MCA product owners, power users (professionals, company representatives)

**Agenda:**
- Portal navigation walkthrough
- Service-by-service review (SPICe+, DIR-3 KYC, AOC-4/MGT-7, etc.)
- My Workspace walkthrough
- Public search walkthrough
- Document validation of Phase 1/2 assumptions

**Deliverable:** Validated service catalogue, form catalogue, workflow documentation

---

### Workshop 3: Technical Discovery (2 days)

**Participants:** MCA IT team, infrastructure team, security team, technical architects

**Agenda:**
- Day 1: Current technical architecture review, database schemas, APIs, integrations
- Day 2: Security architecture, infrastructure, disaster recovery, migration approach

**Deliverable:** Technical specifications, integration contracts, infrastructure requirements

---

### Workshop 4: User Research (1-2 weeks)

**Participants:** 10-15 actual users (directors, professionals, staff, citizens, MCA officers)

**Agenda:**
- User interviews (1 hour each)
- Usability testing of current portal (if access available)
- Walkthrough of proposed IA and My Workspace concepts
- Pain point identification
- Feature prioritization

**Deliverable:** User research report, validated UX approach, prioritized features

---

## Validation Timeline

**Week 1-2:** Resolve portal access  
**Week 3:** Workshop 1 - Architecture Validation  
**Week 4:** Workshop 2 - Portal Walkthrough  
**Week 5:** Workshop 3 - Technical Discovery  
**Week 6-7:** Workshop 4 - User Research  
**Week 8:** Consolidate findings, update Phase 2 architecture, get final approval  
**Week 9+:** Phase 3 kickoff

---

## Success Criteria

Phase 2 validation is complete when:

✅ MCA stakeholders approve domain model and architecture  
✅ All P0 items resolved or documented as assumptions with MCA acceptance  
✅ Portal access resolved and current state verified  
✅ Service and form catalogues validated  
✅ STP eligibility rules documented  
✅ Role-permission matrix documented  
✅ Technical architecture approved by MCA IT  
✅ Migration strategy approved  
✅ User research validates UX approach  
✅ Phase 3 roadmap approved (Foundation → DIR-3 KYC → SPICe+ → Expand)  

---

**END OF PHASE 2 VALIDATION REQUIRED REGISTER**
