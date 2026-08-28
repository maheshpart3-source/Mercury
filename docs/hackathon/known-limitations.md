# MCA Digital Platform — Known Limitations

## Functional Limitations

1. **Single session only** — sessionStorage is tab-scoped. Opening a new tab requires re-login. localStorage would persist across tabs but was intentionally avoided to prevent stale state.

2. **No real form submission** — The incorporation wizard collects data and validates it but does not submit to any backend. The SRN is randomly generated client-side.

3. **Static obligation dates** — Compliance dates are hardcoded. In production, these would be computed from the Companies Act calendar and the entity's incorporation date, financial year, and event history.

4. **No document upload** — The document checklist uses toggle buttons instead of actual file upload. Production would need a document management system with type validation, virus scanning, and size limits.

5. **No DSC integration** — Digital signature is simulated with a checkbox. Real implementation requires browser plugin or cloud-based DSC providers (eMudhra, Sify, etc.).

6. **No payment gateway** — Payment step shows fee breakdown but processes nothing. Would integrate with NTRP or MCA's eBilling system.

7. **Limited personas** — Only 2 personas (Priya, Rajesh) with pre-configured entity relationships. Production would have millions of users with dynamic relationships.

8. **Workspace sub-pages** — Filings, Documents, People, Charges, and Notices tabs show placeholder "Coming Soon" pages.

9. **No real-time updates** — Transaction status is static. Production would use WebSocket or polling for live status updates.

10. **Registry data** — Public registry search only queries the mock dataset (~4 entities). Production indexes millions of entities.

## UI/UX Limitations

1. **No mobile navigation** — Sidebar doesn't have a hamburger menu toggle on mobile viewports. Content is responsive but navigation requires scrolling.

2. **No keyboard shortcuts** — No keyboard navigation beyond default browser tab behavior.

3. **No loading states** — Page transitions are instant (client-side data). Production API calls would need skeleton loaders.

4. **No error boundaries** — React error boundaries are not implemented. A component crash would white-screen the app.

5. **No toast notifications** — Success/error feedback uses inline alerts only. Production would use toast notifications for transient messages.

## Security Notes (Prototype Only)

- No actual authentication — persona selection is a development convenience
- No CSRF protection (no backend)
- No input sanitization beyond React's built-in XSS protection
- Session data stored in plaintext sessionStorage
- No rate limiting, CAPTCHA, or bot protection

## What Would Change for Production

| Area | Prototype | Production |
|------|-----------|-----------|
| Auth | Persona cards | Aadhaar eKYC + DSC + MFA |
| Backend | None (client-only) | Node.js/Java microservices |
| Database | In-memory mock | PostgreSQL + Redis cache |
| API | Direct imports | REST/GraphQL with API gateway |
| State | React Context | Redux/Zustand + React Query |
| Hosting | Vite dev server | AWS/Azure with CDN |
| Monitoring | Console.log | Datadog/New Relic APM |
| Testing | Manual | Jest + Cypress + Playwright |
