# MCA Digital Platform — Demo Flow

## Recommended Demo Sequence (5-7 minutes)

### 1. Login (30s)
- Open `http://localhost:5173`
- Observe **Prototype Mode** disclaimer and persona cards
- Select **Priya Sharma** (Director) — demonstrates the Identity ≠ Authority principle

### 2. Entity Selection (30s)
- Arrive at entity selection page
- Note: Priya has 3 entities with different roles (Director, Authorised Representative)
- Select **Acme Technologies Private Limited**
- Point out: the relationship determines authority, not just the identity

### 3. Home Dashboard (30s)
- Welcome message with person's name
- **Attention panel** showing overdue/pending obligations across all entities
- Entity cards with compliance status
- Quick actions: Start Something, My Entities, Compliance, Search MCA

### 4. Entity Workspace (45s)
- Navigate to Workspace (sidebar → Overview)
- **Authority Banner** shows: "Acting as Priya Sharma, Director, for Acme Technologies"
- Attention panel: 3 obligations needing action (MGT-7, AOC-4, DIR-3 KYC)
- Stats row: Pending Obligations, Completed (FY), Active Transactions, Compliance Score
- Recent Activity feed with SRNs
- Entity Information card and Authority card

### 5. Compliance Centre (30s)
- Navigate to Compliance (sidebar)
- Shows obligations specific to the active entity
- Pending section with due dates and days remaining
- Completed section showing filed obligations

### 6. Incorporation Flow (2-3 min)
- Navigate to Services → "Incorporate a Company"
- **Step 1 — Intent**: Select "Private Limited Company"
- **Step 2 — Eligibility**: Auto-check against 4 criteria
- **Step 3 — Requirements**: Document checklist, timeline, fee estimate
- **Step 4 — Information**: Pre-filled company details, directors, subscribers
- **Step 5 — Documents**: Toggle 8 document confirmations (MoA, AoA, DIR-2, etc.)
- **Step 6 — Review**: Full application summary
- **Step 7 — Signature**: DSC confirmation (prototype simulation)
- **Step 8 — Payment**: Fee breakdown (₹3,300), payment method selection
- **Step 9 — Submitted**: SRN generated, status shown

### 7. Transaction Status (30s)
- Click "Track Status" from submission page
- 6-step processing timeline (3 completed, 1 in-progress, 2 pending)
- "What Happens Next?" guidance
- Download Receipt / Raise a Query actions

### 8. Entity Switch (30s)
- Click entity switcher in header
- Switch to **Zenith Labs Private Limited**
- Observe: entire workspace context updates — different obligations, different data
- Demonstrates Entity ≠ User principle

### 9. Public Registry Search (30s)
- Navigate to Public Registry (sidebar)
- Search for "Acme"
- Results show company with CIN, status, location
- Note: this is a public view, separate from authenticated workspace

## Key Talking Points

- **Entity-centric**: Every interaction is scoped to an entity. You don't "file a form" — you act on behalf of a specific company.
- **Intent-based discovery**: Services page maps what you want to do to what form is needed.
- **Obligation tracking**: The system knows what's due, not just what's been filed.
- **Authority model**: Your role + relationship + delegated actions determine what you can do.
- **Session persistence**: Auth and entity state survive page refreshes.
- **Mock boundary**: Every page that shows simulated data has a visible prototype disclaimer.
