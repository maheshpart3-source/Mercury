# MCA Digital Platform — Implemented vs Mocked

## Fully Implemented (Functional)

| Feature | Details |
|---------|---------|
| Authentication flow | Persona selection → login → session persistence via sessionStorage |
| Entity selection | Full entity list, search, switching with in-progress work warning |
| Entity context | AuthContext (identity) + EntityContext (entity + authority) — persists across refresh |
| Authority Banner | Shows person, role, entity, authority level on every authenticated page |
| Entity Switcher | Header dropdown with search, shows all entities with roles and types |
| Home Dashboard | Attention items, entity cards, quick actions, obligation aggregation |
| Entity Workspace | Attention panel, stats, recent activity, entity info, authority card |
| Compliance Centre | Pending/overdue/completed obligations per entity with legal references |
| Services Discovery | Intent-based service listing with categories |
| Incorporation Wizard | Full 9-step flow: intent → eligibility → requirements → info → documents → review → signature → payment → submission |
| Form Validation | Required field checks at each wizard step, error messages |
| Transaction Status | 6-step processing timeline with timestamps and status indicators |
| Public Registry | Search by name/CIN/LLPIN, entity profile with sections (overview, directors, filings, charges) |
| Routing | React Router with auth guard, sidebar navigation, back navigation |
| Session Persistence | Auth state + entity state survive page refresh via sessionStorage |
| Design System | Consistent tokens, rounded-lg, primary-600, animate-fade-in, Inter font |
| Responsive Layout | Sidebar collapses, grid adjusts, mobile-friendly |

## Mocked / Simulated

| Feature | What's Mocked | What Would Be Real |
|---------|--------------|-------------------|
| Authentication | Persona card click (no password/OTP) | Aadhaar eKYC + DSC-based authentication |
| Identity Verification | All personas pre-verified | MCA21 identity verification service |
| Entity Data | Hardcoded in `mock.ts` | MCA registry database API |
| Obligations | Static dates and statuses | Real-time obligation engine based on Companies Act timelines |
| Transactions | Pre-built transaction records | Actual SRN generation via MCA backend |
| Incorporation Filing | No actual submission | SPICe+ API integration with RoC |
| DSC Signing | Checkbox confirmation | USB token / cloud DSC integration |
| Payment | No payment processing | MCA payment gateway (NTRP/eBilling) |
| Name Availability | Always approved | RUN (Reserve Unique Name) service |
| Document Upload | Toggle confirmation only | Document management system with virus scan |
| Registry Search | Filtered mock data | MCA21 public data API |
| Notifications | Static data | Real-time notification service |
| Director DIN Lookup | Hardcoded | DIN verification against MCA records |
| Stamp Duty | Fixed amount | State-specific calculation via SHCIL API |
| PAN/TAN Allotment | Mentioned in timeline | Automatic allotment via NSDL/UTI integration |

## Boundary Safeguards

Every page that displays simulated data includes a visible prototype disclaimer:
- Login: "Prototype Mode" banner
- Incorporation (DSC step): "In the production platform, this step would invoke the Digital Signature Certificate..."
- Incorporation (Payment): "This is a prototype. No actual payment will be processed."
- Incorporation (Submitted): "No actual filing has been made with the Ministry of Corporate Affairs."
- Transaction Status: "Transaction status shown is simulated."
- All other pages: Subtle footer disclaimer ("Prototype demonstration — data shown is simulated.")
- Placeholder pages: "This section will be available in a future iteration of the prototype."
