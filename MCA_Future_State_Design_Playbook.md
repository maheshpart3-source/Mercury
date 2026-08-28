# MCA Future-State Design Playbook

## Hackathon Prototype --- Visual, UX & Interaction Standards

**Status:** Implementation reference\
**Primary use:** Claude Code / frontend implementation\
**Scope:** Future-state MCA digital platform prototype\
**Design north star:** Premium enterprise software translated for Indian
public regulatory infrastructure

------------------------------------------------------------------------

## 1. Purpose

This playbook defines the visual and interaction language for the
future-state MCA platform.

It is not a generic government design guide and it is not a
pixel-by-pixel recreation of another product.

The target is:

> **The restraint, hierarchy, clarity and operational quality of modern
> premium business software, applied to a national Indian regulatory
> platform.**

The prototype should feel:

-   authoritative
-   trustworthy
-   calm
-   modern
-   precise
-   highly usable
-   business-oriented
-   institutionally credible

It should **not** feel:

-   bureaucratic
-   form-heavy
-   visually dated
-   like a government template
-   like a consumer fintech app
-   like a generic SaaS dashboard
-   like a startup landing page

------------------------------------------------------------------------

## 2. Reference Design Language

Use three private-sector references as inspiration, not templates.

### Primary --- Mercury

Use Mercury as the primary benchmark for:

-   authenticated workspace design
-   information hierarchy
-   navigation
-   account/entity context
-   dashboard density
-   tables and operational data
-   typography
-   whitespace
-   restrained visual language
-   professional workflows

### Secondary --- Stripe Atlas

Use Stripe Atlas as the benchmark for:

-   onboarding
-   guided company setup
-   progressive disclosure
-   checklist-driven lifecycle
-   task completion
-   simple explanations
-   polished first-time-user experience

### Secondary --- Clerky

Use Clerky as the benchmark for:

-   legal workflow seriousness
-   documents
-   corporate actions
-   task progression
-   regulatory/legal information density
-   professional trust

### Translation rule

Do **not** make MCA look like Mercury, Atlas or Clerky.

Extract the design principles and translate them into:

> **Indian national regulatory infrastructure + modern enterprise
> software.**

------------------------------------------------------------------------

## 3. Core Design Principle

The platform must hide complexity without removing capability.

A first-time founder should experience:

> "MCA understands what I am trying to do and guides me."

A professional should be able to access:

> "The full regulatory depth, identifiers, filings, documents, deadlines
> and transaction information."

Therefore:

## Simple by default. Powerful on demand.

------------------------------------------------------------------------

## 4. Product Mental Model

The visual system must reinforce the future product model:

``` text
USER
  ↓
INTENT
  ↓
IDENTITY
  ↓
ROLE / CAPACITY
  ↓
AUTHORITY
  ↓
ENTITY
  ↓
SERVICE
  ↓
REQUIREMENTS
  ↓
DATA / DOCUMENTS
  ↓
VALIDATION
  ↓
SUBMISSION
  ↓
PROCESSING
  ↓
OUTCOME
  ↓
NEXT OBLIGATION
```

The interface should never make the user mentally reconstruct this
architecture.

The platform should do that work for them.

------------------------------------------------------------------------

## 5. Visual Personality

### Overall

The visual language should be:

**Quietly premium.**

Use:

-   strong typography
-   restrained colour
-   precise spacing
-   thin borders
-   subtle depth
-   clear hierarchy
-   high-quality interaction states
-   consistent component geometry

Avoid visual noise.

### Emotional qualities

  Quality        How to express it
  -------------- --------------------------------------
  Trust          stability, consistency, clear states
  Authority      typography, precision, restraint
  Modernity      clean components, excellent spacing
  Competence     useful defaults, contextual guidance
  Transparency   explicit status and next steps
  Simplicity     progressive disclosure
  Seriousness    avoid gimmicks and decorative UI

------------------------------------------------------------------------

## 6. Colour System

The palette should be predominantly neutral.

### Base

Use:

-   white
-   warm/off-white where appropriate
-   very light neutral surfaces
-   charcoal / near-black text
-   neutral grey borders
-   muted secondary text

### Primary accent

Use a restrained **deep blue / indigo family** associated with MCA's
institutional identity.

Do not make the interface overwhelmingly blue.

The accent should identify:

-   primary actions
-   active navigation
-   links
-   selected states
-   progress
-   important system information

### Semantic colours

Use colour primarily for meaning:

-   green --- complete / successful
-   amber --- attention / upcoming / warning
-   red --- blocking / failed / urgent
-   blue --- informational / active / processing

Semantic colour should never be the only indicator. Pair it with text,
icons or status labels.

### Indian identity

Do **not** use saffron + white + green throughout the interface.

Indian identity should emerge through:

-   MCA branding
-   Indian regulatory terminology
-   Indian entity structures
-   CIN / DIN / PAN / GSTIN where relevant
-   INR formatting
-   Indian address conventions
-   appropriate language/accessibility considerations
-   institutional confidence

------------------------------------------------------------------------

## 7. Typography

Typography is one of the primary design tools.

Use a modern, highly legible sans-serif.

Priorities:

1.  readability
2.  hierarchy
3.  consistency
4.  restrained weight
5.  strong numeric legibility

Recommended hierarchy:

-   **Display** --- major page propositions, used sparingly
-   **H1** --- page-level heading
-   **H2** --- major section
-   **H3** --- subsection / card group
-   **Body** --- primary explanatory text
-   **Metadata** --- identifiers, timestamps, legal references
-   **Numeric emphasis** --- deadlines, counts, amounts and status

Avoid excessive bold text.

------------------------------------------------------------------------

## 8. Spacing & Layout

Use a disciplined spacing scale throughout the product.

Prefer generous whitespace over excessive containers.

Avoid:

-   dense walls of cards
-   arbitrary spacing
-   oversized hero sections
-   inconsistent padding
-   cramped forms

Pages should have a strong visual rhythm:

``` text
PAGE TITLE
Supporting context

PRIMARY ACTION / STATUS

Major content

Secondary content

Supporting information
```

------------------------------------------------------------------------

## 9. Navigation

The authenticated experience should not reproduce the legacy MCA
mega-navigation.

Preferred conceptual navigation:

``` text
Home
Entities
Tasks
Compliance
Search
```

Secondary:

``` text
Notifications
Help
Profile
```

Exact labels may change if the Phase 3 IA specifies a better model.

The rule is:

> Navigation should reflect what the user needs to accomplish, not MCA's
> internal organisational structure.

------------------------------------------------------------------------

## 10. Entity Context

This is the defining interaction pattern of the future platform.

Every authenticated transactional experience should make clear:

``` text
WHO AM I?
WHAT CAPACITY AM I ACTING IN?
WHICH ENTITY AM I ACTING FOR?
WHAT AM I AUTHORISED TO DO?
```

Example:

**Acme Technologies Private Limited**\
Director

or:

**Acme Technologies Private Limited**\
Company Secretary

Entity context should be persistent and visually obvious.

------------------------------------------------------------------------

## 11. Entity Switcher

The entity switcher should feel like switching an operating context, not
changing a dropdown value.

It should support:

-   active entity
-   entity search
-   recent entities
-   role/capacity
-   attention indicators
-   safe switching

Example:

``` text
YOUR ENTITIES

Search entities...

Acme Technologies
Director
3 actions

Zenith Labs
Professional
1 action

ABC Industries
Authorised Representative
4 actions
```

When an unfinished task exists, switching should require appropriate
protection.

Never silently move a transaction from one entity to another.

------------------------------------------------------------------------

## 12. Entity Workspace

The entity workspace is the primary authenticated surface.

Example:

``` text
ACME TECHNOLOGIES PRIVATE LIMITED
CIN XXXXXXXX
Active
Director
```

Then:

### Needs your attention

Annual return\
Due in 18 days

Financial statements\
Due in 32 days

Director KYC\
Action required

Then:

### Recent activity

Filing submitted\
Director change approved\
Certificate issued

The workspace should feel operational, not decorative.

------------------------------------------------------------------------

## 13. Dashboard Rules

Do not create dashboards made entirely from generic cards.

Every element should answer one of:

-   What is happening?
-   What needs attention?
-   What can I do?
-   What happened?
-   What happens next?
-   What is this entity?
-   What am I authorised to do?

Prefer:

**task + status + deadline + action**

over:

**decorative KPI card + number**

------------------------------------------------------------------------

## 14. Intent-First Discovery

The primary service entry should be:

> **What do you want to do?**

Examples:

-   Start a company
-   Change a director
-   File annual compliance
-   Register a charge
-   Close a company
-   Respond to a notice
-   Obtain a public document

Do not force users to understand form numbers before they understand the
task.

Expert search can still expose:

-   form numbers
-   service codes
-   legal provisions
-   identifiers

But these should not dominate first-time journeys.

------------------------------------------------------------------------

## 15. Forms

Forms should feel like modern guided workflows.

Never visually imitate paper forms unless legally necessary.

Use:

-   progressive disclosure
-   logical sections
-   clear question labels
-   contextual explanation
-   inline validation
-   prefilled verified information
-   conditional fields
-   completion indicators
-   review before submission
-   save/resume

Example:

### Registered office

MCA already has:

`12 Example Street...`

**Is this information still correct?**

\[Yes, continue\]\
\[No, update information\]

This expresses:

> Ask once. Reuse verified data.

------------------------------------------------------------------------

## 16. Regulatory Explanations

Regulatory requirements should be understandable.

Instead of:

> Section 12 read with Rule 25...

as the primary message:

### Why do we need this?

This information is required because your company's registered office is
part of its statutory record.

Then optionally:

**Legal basis**

Section X, Companies Act, 2013\
Rule Y, Companies Rules

The legal basis should remain available without becoming the primary
interface language.

------------------------------------------------------------------------

## 17. Documents

Documents should behave as first-class objects.

Preferred:

``` text
DOCUMENTS

Required

Certificate of incorporation       ✓
Board resolution                   ✓
Registered office proof            ○
```

Where appropriate:

> MCA already has this document.

Avoid:

> Attachment 1\
> Attachment 2\
> Attachment 3

unless the underlying service genuinely requires that terminology.

------------------------------------------------------------------------

## 18. Compliance Experience

Compliance should feel proactive.

Preferred:

# Your compliance

**3 actions need attention**

  Obligation                   Due Action
  ---------------------- --------- ----------
  Annual return            18 days Prepare
  Financial statements     32 days View
  Director KYC             45 days Complete

The system should communicate:

``` text
ENTITY
 ↓
OBLIGATIONS
 ↓
DEADLINES
 ↓
ACTIONS
 ↓
OUTCOMES
```

The user should not have to know which form creates the obligation.

------------------------------------------------------------------------

## 19. Transaction Status

Never make SRNs and technical processing codes the primary status
experience.

Instead:

### Incorporation application

**Processing**

``` text
Received                    ✓
Identity verified           ✓
Documents validated         ✓
MCA processing              ●
Registry update             ○
Certificate issued          ○
```

Then:

### What happens next?

MCA is reviewing your application. No action is currently required.

Technical information can be available under:

**View transaction details**

------------------------------------------------------------------------

## 20. Error Design

Errors must explain:

1.  What happened
2.  Why it happened
3.  What the user can do

Avoid:

> Invalid input.

Prefer:

### This information doesn't match MCA records

The registered office information differs from the information currently
on record.

**You can:**

\[Update the existing record\]

or

\[Review current information\]

For regulatory errors, provide:

**Why does this matter?**

where useful.

------------------------------------------------------------------------

## 21. Confirmation & High-Risk Actions

High-risk actions require explicit context.

Before:

-   filing
-   payment
-   signature
-   director/partner changes
-   closure
-   irreversible submissions

show:

``` text
YOU ARE SUBMITTING FOR

Acme Technologies Private Limited

ACTING AS

Director

ACTION

Appointment of Director
```

Then:

**Confirm & submit**

This is a core safety feature, not a decorative confirmation modal.

------------------------------------------------------------------------

## 22. Professional Mode

MCA serves users who manage many entities.

The interface must support professional density without making the
default interface intimidating.

Professionals may need:

-   tables
-   filters
-   bulk actions
-   saved views
-   entity groups
-   deadlines
-   SRNs
-   transaction identifiers
-   document history
-   task queues

Principle:

> **Simple by default, powerful on demand.**

------------------------------------------------------------------------

## 23. Multi-Entity Professional Experience

Example:

# My entities

**27 entities**

Filters:

All\
Needs attention\
Active work\
Completed

Each row should communicate:

``` text
ENTITY
ROLE
CURRENT WORK
ATTENTION
```

Avoid forcing professionals to open each entity individually to
understand what requires attention.

------------------------------------------------------------------------

## 24. Public Registry

The public registry should be a distinct experience from the
authenticated workspace.

Think:

**search engine + authoritative company profile**

rather than:

**government dashboard**

Search:

> Search companies, LLPs, directors, filings or documents

Result:

### Acme Technologies Private Limited

Active\
Maharashtra

Sections may include:

-   Overview
-   Directors
-   Filings
-   Charges
-   Documents

Public information should be dense, authoritative and easy to scan.

------------------------------------------------------------------------

## 25. Component Language

Use a small set of highly polished primitives.

Core components:

-   AppShell
-   Header
-   Navigation
-   EntityContext
-   EntitySwitcher
-   Search
-   Button
-   Input
-   Select
-   Card
-   Table
-   Status
-   Badge
-   Alert
-   Timeline
-   Task
-   Obligation
-   DocumentChecklist
-   ConfirmationDialog
-   Modal
-   EmptyState
-   LoadingState
-   ErrorState
-   Toast/Notification

Components should be:

-   consistent
-   accessible
-   composable
-   responsive
-   state-aware

Avoid creating a component for every visual variation.

------------------------------------------------------------------------

## 26. Cards

Cards should not become the default container for everything.

Use cards when content represents a distinct object or decision.

Good:

-   obligation
-   transaction
-   entity
-   document
-   action

Bad:

-   putting every paragraph in a card
-   stacking 15 identical cards
-   using cards purely to create visual decoration

Prefer structured sections when hierarchy is enough.

------------------------------------------------------------------------

## 27. Tables

Tables are important for professional MCA workflows.

They should support:

-   clear column hierarchy
-   sortable data where appropriate
-   filters
-   status
-   entity
-   dates
-   actions

Avoid turning every list into a table.

Use cards or list views when users need simple scanning.

------------------------------------------------------------------------

## 28. Search

Search should eventually support multiple information types:

``` text
Services
Entities
People
Documents
Filings
Forms
Legal provisions
Rules
Help
```

The visual interaction should allow the user to understand what type of
result they are seeing.

Intent search should be possible:

> "How do I change my director?"

while expert search should remain possible:

> "DIR-12"

------------------------------------------------------------------------

## 29. Motion

Motion should be subtle and purposeful.

Use animation for:

-   navigation transitions
-   context switching
-   state changes
-   completion
-   loading
-   modal appearance

Do not use:

-   animated hero graphics
-   excessive parallax
-   decorative floating objects
-   constant movement

The interface should feel stable and dependable.

------------------------------------------------------------------------

## 30. Accessibility

Accessibility is a product requirement.

At minimum:

-   sufficient colour contrast
-   visible focus states
-   keyboard navigation
-   semantic HTML
-   accessible labels
-   meaningful error messages
-   status not communicated by colour alone
-   touch-friendly controls
-   responsive layouts
-   readable typography
-   reduced-motion support

Accessibility should be designed into components rather than added
later.

------------------------------------------------------------------------

## 31. Responsive Behaviour

Desktop is the primary hackathon presentation target.

But the experience must degrade intelligently.

### Desktop

Prioritise:

-   workspace density
-   entity context
-   navigation
-   tables
-   multi-column layouts

### Tablet

Reduce density and simplify navigation.

### Mobile

Prioritise:

-   current entity
-   urgent tasks
-   primary actions
-   status
-   simple navigation

Do not simply shrink desktop layouts.

------------------------------------------------------------------------

## 32. Content & Microcopy

Copy should be:

-   direct
-   human
-   precise
-   non-bureaucratic
-   legally accurate
-   action-oriented

Prefer:

**What do you want to do?**

over:

**Select the applicable service from the list below.**

Prefer:

**3 actions need your attention**

over:

**Pending Compliance Items: 3**

Prefer:

**No action required**

over:

**Nil user action required at this point.**

Do not make the interface childish or overly conversational.

------------------------------------------------------------------------

## 33. Status Vocabulary

Use human-readable statuses at the primary layer.

Examples:

-   Ready
-   Upcoming
-   Action required
-   In progress
-   Processing
-   Waiting for you
-   Completed
-   Needs correction
-   Rejected
-   Approved

Expose technical status identifiers where professionals need them.

------------------------------------------------------------------------

## 34. Indian Regulatory Detail

The interface must retain the precision expected from MCA.

Use appropriate domain identifiers where relevant:

-   CIN
-   DIN
-   LLPIN
-   SRN
-   PAN
-   GSTIN
-   filing identifiers
-   dates
-   statutory references
-   legal entity names

But distinguish:

### Human layer

What the user needs to understand.

### Professional layer

What the user needs to operate precisely.

Do not remove regulatory depth merely to make the interface look clean.

------------------------------------------------------------------------

## 35. What NOT to Do

Never:

-   recreate the current MCA portal's information architecture visually
-   make form numbers the primary navigation
-   create a wall of government links
-   use excessive blue
-   use the Indian tricolour as decoration
-   use giant government-style banners
-   use dated gradients
-   use generic Bootstrap-looking layouts
-   use excessive drop shadows
-   create dozens of KPI cards
-   make every section a card
-   hide the active entity
-   allow ambiguous authority
-   make every workflow look identical
-   build static screens with dead controls
-   fake real MCA integrations
-   use fake regulatory claims as if they are real
-   sacrifice functionality for aesthetics

------------------------------------------------------------------------

## 36. What TO Do

Always:

-   establish context
-   show the active entity
-   show acting capacity where relevant
-   explain the next action
-   reuse known information
-   expose complexity progressively
-   make status persistent
-   make deadlines actionable
-   make errors recoverable
-   make consequential actions explicit
-   preserve professional depth
-   use consistent components
-   prefer real interaction over static mockups
-   use visual hierarchy instead of decoration

------------------------------------------------------------------------

## 37. Page-Level Design Formula

For most authenticated pages, use:

``` text
ENTITY CONTEXT
        ↓
PAGE TITLE
        ↓
SHORT EXPLANATION
        ↓
PRIMARY ACTION / STATUS
        ↓
MAIN CONTENT
        ↓
SECONDARY INFORMATION
        ↓
LEGAL / TECHNICAL DETAIL
```

Do not force this formula when the task genuinely needs a different
structure.

------------------------------------------------------------------------

## 38. Service-Page Formula

A service should communicate:

``` text
WHAT ARE YOU TRYING TO DO?
        ↓
IS IT APPLICABLE?
        ↓
WHAT WILL YOU NEED?
        ↓
WHAT INFORMATION DO WE ALREADY HAVE?
        ↓
WHAT DO WE NEED FROM YOU?
        ↓
WHAT WILL HAPPEN?
        ↓
REVIEW
        ↓
SUBMIT
```

The user should understand the process before committing to it.

------------------------------------------------------------------------

## 39. Design Hierarchy

When deciding what deserves visual emphasis, use this order:

### Tier 1 --- Immediate action

What does the user need to do?

### Tier 2 --- Context

Which entity? Which role? What state?

### Tier 3 --- Consequence

What happens next?

### Tier 4 --- Explanation

Why is this required?

### Tier 5 --- Technical/legal detail

What is the exact statutory or transaction reference?

This prevents the interface from becoming legally dense while retaining
regulatory precision.

------------------------------------------------------------------------

## 40. Hackathon Presentation Standard

The prototype should be understandable in approximately 2--3 minutes.

Recommended demonstration:

``` text
HOME
 ↓
“I want to start a company”
 ↓
SERVICE
 ↓
ENTITY / AUTHORITY CONTEXT
 ↓
REQUIREMENTS
 ↓
GUIDED INFORMATION
 ↓
DOCUMENTS
 ↓
REVIEW
 ↓
SUBMIT
 ↓
TRANSACTION STATUS
 ↓
ENTITY WORKSPACE
 ↓
COMPLIANCE
 ↓
ENTITY SWITCH
 ↓
PUBLIC SEARCH
```

The visual narrative should make the transformation obvious.

### Legacy mental model

``` text
Find page
→ find service
→ find form
→ fill form
→ submit
→ find out what happened
```

### Future mental model

``` text
Tell MCA what you want
→ MCA understands who you are
→ MCA understands your authority
→ MCA knows your entity
→ MCA knows what it already has
→ MCA determines what is required
→ MCA guides you
→ MCA tracks the process
→ MCA tells you what happens next
```

------------------------------------------------------------------------

## 41. Prototype Data Rules

Use realistic but fictional data.

Mock data should be:

-   internally consistent
-   plausible
-   centralised
-   easy to replace with APIs later

Do not scatter fictional values across components.

Maintain separation between:

``` text
MOCK DATA
↓
APPLICATION LOGIC
↓
UI
```

so future MCA integrations can replace the mock layer.

------------------------------------------------------------------------

## 42. Design QA Checklist

### Visual

-   [ ] Typography is consistent
-   [ ] Spacing is deliberate
-   [ ] Hierarchy is obvious
-   [ ] Colour is restrained
-   [ ] Borders/shadows are subtle
-   [ ] No unnecessary decoration
-   [ ] Alignment is consistent

### UX

-   [ ] User knows what page they are on
-   [ ] User knows what they can do
-   [ ] User knows which entity is active
-   [ ] User knows their role/capacity where relevant
-   [ ] Primary action is obvious
-   [ ] Status is understandable
-   [ ] Errors are actionable
-   [ ] Next step is clear

### Architecture expression

-   [ ] Entity context is first-class
-   [ ] Identity is not confused with authority
-   [ ] Intent precedes form selection
-   [ ] Services are treated as compositions
-   [ ] Compliance appears as obligations
-   [ ] Transactions have persistent status
-   [ ] Public registry is distinct from workspace

### Accessibility

-   [ ] Keyboard navigation works
-   [ ] Focus is visible
-   [ ] Contrast is adequate
-   [ ] Colour is not the sole status indicator
-   [ ] Controls have meaningful labels
-   [ ] Layout works on smaller screens

### Hackathon readiness

-   [ ] Main journey works end-to-end
-   [ ] No dead primary buttons
-   [ ] No obvious placeholder UI
-   [ ] No broken routes
-   [ ] No major console/runtime errors
-   [ ] Mock integrations are not falsely represented as real
-   [ ] 2--3 minute demo can be completed smoothly

------------------------------------------------------------------------

## 43. Final Design North Star

When in doubt, apply this test:

> **Would a founder understand this immediately?**
>
> **Would a professional trust this with a real compliance task?**
>
> **Would an MCA officer recognise the seriousness and regulatory
> precision?**
>
> **Would a judge immediately see that this is fundamentally different
> from the existing MCA portal?**

If the answer is yes to all four, the design is moving in the right
direction.

The target is not:

> "A prettier MCA website."

The target is:

> **"A modern Indian regulatory operating platform that makes the
> complexity of MCA feel manageable."**
