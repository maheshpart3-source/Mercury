# MCA Digital Platform — Prototype Overview

## Vision

Reimagine the Ministry of Corporate Affairs (MCA) digital platform from first principles, placing **entities** (companies, LLPs) at the centre of every interaction rather than forms.

## Architecture Principles

1. **Identity ≠ Authority** — Authentication (who you are) is separate from authorization (what you can do for an entity). A person's identity is established via eKYC/DSC; their authority comes from their relationship to a specific entity.

2. **Role ≠ Authority** — A Director title doesn't automatically grant all powers. Authority is derived from the combination of role type, entity relationship, and specific delegated actions.

3. **Entity ≠ User** — Companies and LLPs are first-class domain objects, not just labels on a user's account. Users act *on behalf of* entities.

4. **Service ≠ Form** — Services are discovered by intent ("I want to incorporate a company"), not by form number. The platform maps intent → eligibility → requirements → form.

5. **Transaction ≠ Case** — Every filing becomes a trackable transaction with an SRN (Service Request Number), lifecycle stages, and status timeline.

6. **Registry ≠ Workspace** — Public registry (read-only, no auth required) is separated from the authenticated entity workspace.

7. **Obligation ≠ Filing** — Compliance obligations exist independently of their fulfillment. The platform tracks what's due, not just what's been filed.

8. **Entity Context First-Class** — Every authenticated page knows which entity the user is acting for, displayed persistently via the Authority Banner.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + TypeScript |
| Build | Vite 6 with @tailwindcss/vite |
| Styling | Tailwind CSS v4 with design tokens |
| Routing | React Router v6 |
| State | React Context (AuthContext + EntityContext) |
| Persistence | sessionStorage for auth/entity state |
| Typography | Inter (Google Fonts) |
| Icons | Lucide React |

## Project Structure

```
app/
├── src/
│   ├── components/
│   │   ├── ui/          # Button, Card, Modal, Badge, Alert, StatusIndicator, EmptyState
│   │   ├── layout/      # AppShell, Header, Sidebar
│   │   └── entity/      # EntitySwitcher, AuthorityBanner
│   ├── contexts/        # AuthContext, EntityContext
│   ├── pages/           # All page components
│   ├── routes/          # AuthGuard
│   ├── data/            # Mock data (mock.ts)
│   ├── types/           # TypeScript type definitions
│   └── index.css        # Design tokens (@theme)
```

## Key Personas

| Persona | Role | Entities |
|---------|------|----------|
| Priya Sharma | Director | Acme Technologies Pvt Ltd, Zenith Labs Pvt Ltd, ABC Industries LLP |
| Rajesh Kumar | CA (Authorised Signatory) | Bharat Manufacturing Ltd, Desi Foods Pvt Ltd |

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Login | `/login` | Persona selection (prototype mode) |
| Home | `/home` | Dashboard with attention items, entity list, quick actions |
| Select Entity | `/select-entity` | Full entity selection with search |
| Workspace | `/workspace` | Entity dashboard — obligations, stats, activity, info, authority |
| Compliance | `/workspace/compliance` | Pending/completed obligations for active entity |
| Services | `/services` | Intent-based service discovery |
| Incorporation | `/services/incorporate` | 9-step SPICe+ incorporation wizard |
| Transaction Status | `/services/incorporate/status` | Filing lifecycle timeline |
| Public Registry | `/registry` | Public company/LLP search |
| Entity Profile | `/registry/:id` | Public entity detail view |
| Placeholder | `/workspace/{filings,documents,people,charges,notices}` | Coming soon pages |
