# MCA Platform — Implementation Architecture

**Implementation Phase — Foundation Initialisation**  
**Document Date:** 28 August 2026  
**Status:** IMPLEMENTATION BLUEPRINT  
**Purpose:** Translate Phase 2 architecture into concrete codebase structure

---

## Executive Summary

This document defines the **actual code structure** that implements the Phase 2 locked architecture. It specifies directories, modules, layers, interfaces, and patterns for the MCA Digital Platform foundation.

**Architecture Style:** Domain-Oriented Modular Monolith  
**Technology Stack:** Node.js + TypeScript + React + PostgreSQL + Prisma  
**Package Structure:** Monorepo (pnpm workspaces)  
**Deployment Target:** Single deployable application (foundation phase)

**Key Decisions:**
- 12 domain modules with explicit boundaries
- Schema-per-domain database organization
- Domain events for inter-domain communication
- Hexagonal architecture within each domain
- Shared kernel for cross-cutting concerns
- Frontend domain alignment with backend domains

---

## PART 1: PROJECT STRUCTURE

### 1.1 Root Structure

```
mca-platform/
├── .github/                          # GitHub Actions (future)
├── .vscode/                          # VS Code workspace settings
├── docker/                           # Docker configuration
│   ├── docker-compose.yml            # PostgreSQL, Redis (future)
│   └── postgres/
│       └── init.sql                  # Database initialization
├── docs/                             # KEEP — existing Phase 1/2/3 docs
│   └── implementation/               # Implementation documentation
├── packages/                         # Monorepo packages
│   ├── backend/                      # Backend application
│   ├── frontend/                     # Frontend application
│   └── shared/                       # Shared types and utilities
├── scripts/                          # Build and deployment scripts
├── .env.example                      # Environment variables template
├── .gitignore                        # Git ignore rules
├── .prettierrc                       # Prettier configuration
├── eslint.config.js                  # ESLint configuration (flat config)
├── package.json                      # Root package.json (workspace)
├── pnpm-workspace.yaml               # pnpm workspace configuration
├── README.md                         # Getting started guide
└── tsconfig.json                     # Root TypeScript configuration
```

---

### 1.2 Backend Structure (Domain-Oriented)

```
packages/backend/
├── src/
│   ├── domains/                      # 12 Domain modules
│   │   ├── identity/                 # Identity & Access domain
│   │   │   ├── domain/               # Domain layer
│   │   │   │   ├── entities/         # Domain entities
│   │   │   │   ├── value-objects/    # Value objects
│   │   │   │   ├── repositories/     # Repository interfaces
│   │   │   │   ├── services/         # Domain services
│   │   │   │   └── events/           # Domain events
│   │   │   ├── application/          # Application layer
│   │   │   │   ├── commands/         # Command handlers
│   │   │   │   ├── queries/          # Query handlers
│   │   │   │   └── dtos/             # Data transfer objects
│   │   │   ├── infrastructure/       # Infrastructure layer
│   │   │   │   ├── persistence/      # Database repositories
│   │   │   │   ├── external/         # External integrations
│   │   │   │   └── events/           # Event publishers
│   │   │   └── api/                  # API layer
│   │   │       ├── routes/           # Express routes
│   │   │       ├── controllers/      # Controllers
│   │   │       ├── middleware/       # Domain-specific middleware
│   │   │       └── validators/       # Request validators
│   │   │
│   │   ├── entity/                   # Entity & Registry domain
│   │   ├── compliance/               # Regulatory Compliance domain
│   │   ├── service/                  # Service & Transaction domain
│   │   ├── oversight/                # Regulatory Oversight domain
│   │   ├── payment/                  # Payment & Fees domain
│   │   ├── document/                 # Document Management domain
│   │   ├── workflow/                 # Workflow & Orchestration domain
│   │   ├── notification/             # Notification & Events domain
│   │   ├── search/                   # Search & Discovery domain
│   │   ├── audit/                    # Audit & Provenance domain
│   │   └── content/                  # Content & Help domain
│   │
│   ├── shared/                       # Shared kernel
│   │   ├── domain/                   # Shared domain primitives
│   │   │   ├── Entity.ts             # Base entity class
│   │   │   ├── ValueObject.ts        # Base value object
│   │   │   ├── AggregateRoot.ts      # Base aggregate root
│   │   │   ├── DomainEvent.ts        # Base domain event
│   │   │   └── Result.ts             # Result type (success/failure)
│   │   ├── application/              # Shared application concerns
│   │   │   ├── UseCase.ts            # Base use case interface
│   │   │   ├── EventBus.ts           # Event bus interface
│   │   │   └── UnitOfWork.ts         # Unit of work pattern
│   │   ├── infrastructure/           # Shared infrastructure
│   │   │   ├── database/             # Database connection
│   │   │   ├── logger/               # Logging
│   │   │   ├── config/               # Configuration
│   │   │   └── errors/               # Error types
│   │   └── utils/                    # Shared utilities
│   │
│   ├── api/                          # API composition layer
│   │   ├── routes/                   # Route aggregation
│   │   ├── middleware/               # Global middleware
│   │   │   ├── auth.middleware.ts    # Authentication
│   │   │   ├── entity-context.middleware.ts  # Entity context
│   │   │   ├── authorization.middleware.ts   # Authorization
│   │   │   ├── error.middleware.ts   # Error handling
│   │   │   ├── logging.middleware.ts # Request logging
│   │   │   └── validation.middleware.ts  # Request validation
│   │   └── server.ts                 # Express app setup
│   │
│   ├── config/                       # Configuration
│   │   ├── database.config.ts
│   │   ├── auth.config.ts
│   │   └── app.config.ts
│   │
│   └── server.ts                     # Application entry point
│
├── prisma/                           # Prisma ORM
│   ├── schema.prisma                 # Database schema (schema-per-domain)
│   ├── migrations/                   # Database migrations
│   └── seed.ts                       # Seed data
│
├── tests/                            # Tests
│   ├── unit/                         # Unit tests
│   ├── integration/                  # Integration tests
│   ├── architectural/                # Architectural invariant tests
│   │   ├── entity-context.test.ts
│   │   ├── authorization.test.ts
│   │   ├── multi-entity.test.ts
│   │   └── entity-safety.test.ts
│   └── helpers/                      # Test helpers
│
├── .env.example
├── package.json
├── tsconfig.json
└── jest.config.js
```

---

### 1.3 Frontend Structure (Domain-Aligned)

```
packages/frontend/
├── src/
│   ├── domains/                      # Domain-aligned features
│   │   ├── identity/                 # Identity features
│   │   │   ├── components/           # Domain components
│   │   │   ├── hooks/                # Domain hooks
│   │   │   ├── pages/                # Domain pages
│   │   │   └── api/                  # Domain API calls
│   │   │
│   │   ├── entity/                   # Entity features
│   │   ├── compliance/               # Compliance features
│   │   ├── service/                  # Service features
│   │   └── ...                       # Other domains
│   │
│   ├── shared/                       # Shared frontend code
│   │   ├── components/               # Shared components
│   │   │   ├── ui/                   # UI primitives
│   │   │   ├── layout/               # Layout components
│   │   │   ├── forms/                # Form components
│   │   │   └── feedback/             # Feedback components
│   │   ├── hooks/                    # Shared hooks
│   │   ├── utils/                    # Utilities
│   │   ├── types/                    # TypeScript types
│   │   └── api/                      # API client
│   │       ├── client.ts             # Axios instance
│   │       ├── interceptors.ts       # Request/response interceptors
│   │       └── types.ts              # API types
│   │
│   ├── contexts/                     # React contexts
│   │   ├── AuthContext.tsx           # Authentication context
│   │   ├── EntityContext.tsx         # Entity context (CRITICAL)
│   │   ├── NotificationContext.tsx   # Notification context
│   │   └── ThemeContext.tsx          # Theme context
│   │
│   ├── design-system/                # Design system
│   │   ├── tokens/                   # Design tokens
│   │   │   ├── colors.ts
│   │   │   ├── typography.ts
│   │   │   └── spacing.ts
│   │   ├── components/               # Design system components
│   │   │   ├── Button/
│   │   │   ├── Input/
│   │   │   ├── Card/
│   │   │   ├── Alert/
│   │   │   ├── Modal/
│   │   │   └── ...
│   │   └── patterns/                 # Design patterns
│   │       ├── EntitySelector/       # Entity selection pattern
│   │       ├── ConfirmationDialog/   # Confirmation pattern
│   │       └── StatusTimeline/       # Status timeline pattern
│   │
│   ├── layouts/                      # Page layouts
│   │   ├── PublicLayout.tsx          # Public pages layout
│   │   ├── AuthenticatedLayout.tsx   # Authenticated pages layout
│   │   └── WorkspaceLayout.tsx       # Workspace layout
│   │
│   ├── pages/                        # Page components
│   │   ├── public/
│   │   │   ├── HomePage.tsx
│   │   │   ├── SearchPage.tsx
│   │   │   └── LoginPage.tsx
│   │   ├── authenticated/
│   │   │   ├── DashboardPage.tsx
│   │   │   ├── EntitySelectorPage.tsx
│   │   │   └── WorkspacePage.tsx
│   │   └── services/
│   │       └── CompanyIncorporationPage.tsx
│   │
│   ├── routes/                       # Routing
│   │   ├── router.tsx                # React Router setup
│   │   ├── PublicRoutes.tsx
│   │   ├── AuthenticatedRoutes.tsx
│   │   └── guards/
│   │       ├── AuthGuard.tsx
│   │       └── EntityContextGuard.tsx
│   │
│   ├── App.tsx                       # Root App component
│   ├── main.tsx                      # Application entry point
│   └── vite-env.d.ts                 # Vite environment types
│
├── public/                           # Static assets
├── tests/                            # Frontend tests
│   ├── unit/
│   ├── integration/
│   └── e2e/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

---

### 1.4 Shared Package Structure

```
packages/shared/
├── src/
│   ├── types/                        # Shared TypeScript types
│   │   ├── entities/                 # Entity types
│   │   │   ├── Person.ts
│   │   │   ├── Account.ts
│   │   │   ├── Company.ts
│   │   │   ├── Transaction.ts
│   │   │   └── ...
│   │   ├── enums/                    # Enums
│   │   │   ├── RoleType.ts
│   │   │   ├── EntityStatus.ts
│   │   │   ├── TransactionState.ts
│   │   │   └── ...
│   │   ├── dtos/                     # DTOs
│   │   └── api/                      # API types
│   │
│   ├── utils/                        # Shared utilities
│   │   ├── validation.ts
│   │   ├── formatting.ts
│   │   └── date.ts
│   │
│   └── constants/                    # Shared constants
│
├── package.json
└── tsconfig.json
```

---

## PART 2: DOMAIN MODULE STRUCTURE (HEXAGONAL ARCHITECTURE)

### 2.1 Domain Layer (Core Business Logic)

**Purpose:** Contains business rules, domain entities, and domain logic. No external dependencies.

**Structure:**
```typescript
// Domain Entity Example: Person
// packages/backend/src/domains/identity/domain/entities/Person.ts

import { Entity } from '@/shared/domain/Entity';
import { PersonId } from '../value-objects/PersonId';
import { PersonName } from '../value-objects/PersonName';
import { EmailAddress } from '../value-objects/EmailAddress';
import { Result } from '@/shared/domain/Result';

interface PersonProps {
  name: PersonName;
  email: EmailAddress;
  phoneNumber?: string;
  verificationStatus: 'UNVERIFIED' | 'VERIFIED';
}

export class Person extends Entity<PersonProps> {
  private constructor(props: PersonProps, id?: PersonId) {
    super(props, id);
  }

  get personId(): PersonId {
    return this._id as PersonId;
  }

  get name(): PersonName {
    return this.props.name;
  }

  get email(): EmailAddress {
    return this.props.email;
  }

  get isVerified(): boolean {
    return this.props.verificationStatus === 'VERIFIED';
  }

  public verify(): Result<void> {
    if (this.isVerified) {
      return Result.fail('Person is already verified');
    }
    
    this.props.verificationStatus = 'VERIFIED';
    return Result.ok();
  }

  public static create(props: PersonProps, id?: PersonId): Result<Person> {
    // Domain validation logic
    if (!props.name) {
      return Result.fail('Person name is required');
    }
    
    return Result.ok(new Person(props, id));
  }
}
```

**Repository Interface (Domain Layer):**
```typescript
// packages/backend/src/domains/identity/domain/repositories/IPersonRepository.ts

import { Person } from '../entities/Person';
import { PersonId } from '../value-objects/PersonId';
import { EmailAddress } from '../value-objects/EmailAddress';

export interface IPersonRepository {
  findById(id: PersonId): Promise<Person | null>;
  findByEmail(email: EmailAddress): Promise<Person | null>;
  save(person: Person): Promise<void>;
  delete(id: PersonId): Promise<void>;
}
```

**Domain Service Example:**
```typescript
// packages/backend/src/domains/identity/domain/services/AuthorizationService.ts

import { Person } from '../entities/Person';
import { Role } from '../entities/Role';
import { Entity } from '@/domains/entity/domain/entities/Entity';
import { Result } from '@/shared/domain/Result';

export class AuthorizationService {
  public canPerform(
    person: Person,
    role: Role,
    entity: Entity,
    action: string,
    timestamp: Date
  ): Result<boolean> {
    // Authority evaluation logic
    // (Identity × Role × Entity × Action)
    
    if (!person.isVerified) {
      return Result.fail('Person must be verified');
    }
    
    if (!role.isActiveAt(timestamp)) {
      return Result.fail('Role is not active');
    }
    
    if (!role.hasPermission(action)) {
      return Result.fail('Role does not have permission for this action');
    }
    
    // Check entity relationship
    // Check delegation
    // Check action-specific constraints
    
    return Result.ok(true);
  }
}
```

---

### 2.2 Application Layer (Use Cases / Orchestration)

**Purpose:** Orchestrates domain objects to fulfill use cases. Contains application logic but no business rules.

**Structure:**
```typescript
// Command Example
// packages/backend/src/domains/identity/application/commands/AuthenticateUserCommand.ts

export interface AuthenticateUserCommand {
  email: string;
  password: string;
}

export interface AuthenticateUserResponse {
  token: string;
  personId: string;
  availableEntities: Array<{
    entityId: string;
    entityName: string;
    role: string;
  }>;
}
```

**Command Handler Example:**
```typescript
// packages/backend/src/domains/identity/application/commands/AuthenticateUserCommandHandler.ts

import { AuthenticateUserCommand, AuthenticateUserResponse } from './AuthenticateUserCommand';
import { IPersonRepository } from '../../domain/repositories/IPersonRepository';
import { IAccountRepository } from '../../domain/repositories/IAccountRepository';
import { EmailAddress } from '../../domain/value-objects/EmailAddress';
import { Result } from '@/shared/domain/Result';

export class AuthenticateUserCommandHandler {
  constructor(
    private personRepository: IPersonRepository,
    private accountRepository: IAccountRepository
  ) {}

  async execute(command: AuthenticateUserCommand): Promise<Result<AuthenticateUserResponse>> {
    // 1. Find account by email
    const emailResult = EmailAddress.create(command.email);
    if (emailResult.isFailure) {
      return Result.fail('Invalid email address');
    }
    
    const account = await this.accountRepository.findByEmail(emailResult.getValue());
    if (!account) {
      return Result.fail('Account not found');
    }
    
    // 2. Verify password (mock for foundation)
    const isPasswordValid = await account.verifyPassword(command.password);
    if (!isPasswordValid) {
      return Result.fail('Invalid password');
    }
    
    // 3. Get person
    const person = await this.personRepository.findById(account.personId);
    if (!person) {
      return Result.fail('Person not found');
    }
    
    // 4. Get available entities (cross-domain query)
    // This would involve querying the Entity domain
    const availableEntities = await this.getAvailableEntities(person.personId);
    
    // 5. Generate token (mock for foundation)
    const token = await this.generateToken(person.personId, account.accountId);
    
    return Result.ok({
      token,
      personId: person.personId.toString(),
      availableEntities
    });
  }

  private async getAvailableEntities(personId: PersonId): Promise<any[]> {
    // Cross-domain query to Entity domain
    // TODO: Implement via domain event or shared query
    return [];
  }

  private async generateToken(personId: PersonId, accountId: AccountId): Promise<string> {
    // Mock token generation
    return `mock-token-${personId}-${accountId}`;
  }
}
```

---

### 2.3 Infrastructure Layer (Technical Implementation)

**Purpose:** Implements technical concerns (database, external APIs, file system).

**Repository Implementation:**
```typescript
// packages/backend/src/domains/identity/infrastructure/persistence/PrismaPersonRepository.ts

import { IPersonRepository } from '../../domain/repositories/IPersonRepository';
import { Person } from '../../domain/entities/Person';
import { PersonId } from '../../domain/value-objects/PersonId';
import { EmailAddress } from '../../domain/value-objects/EmailAddress';
import { PrismaClient } from '@prisma/client';

export class PrismaPersonRepository implements IPersonRepository {
  constructor(private prisma: PrismaClient) {}

  async findById(id: PersonId): Promise<Person | null> {
    const personData = await this.prisma.person.findUnique({
      where: { id: id.toString() }
    });
    
    if (!personData) {
      return null;
    }
    
    return this.toDomain(personData);
  }

  async findByEmail(email: EmailAddress): Promise<Person | null> {
    const personData = await this.prisma.person.findUnique({
      where: { email: email.value }
    });
    
    if (!personData) {
      return null;
    }
    
    return this.toDomain(personData);
  }

  async save(person: Person): Promise<void> {
    const data = this.toPersistence(person);
    
    await this.prisma.person.upsert({
      where: { id: person.personId.toString() },
      update: data,
      create: data
    });
  }

  async delete(id: PersonId): Promise<void> {
    await this.prisma.person.delete({
      where: { id: id.toString() }
    });
  }

  private toDomain(data: any): Person {
    // Map database model to domain entity
    // TODO: Implement proper mapping
    return null as any;
  }

  private toPersistence(person: Person): any {
    // Map domain entity to database model
    return {
      id: person.personId.toString(),
      name: person.name.fullName,
      email: person.email.value,
      // ... other fields
    };
  }
}
```

---

### 2.4 API Layer (HTTP Interface)

**Purpose:** Exposes domain functionality via HTTP endpoints.

**Controller Example:**
```typescript
// packages/backend/src/domains/identity/api/controllers/AuthController.ts

import { Request, Response, NextFunction } from 'express';
import { AuthenticateUserCommandHandler } from '../../application/commands/AuthenticateUserCommandHandler';
import { AuthenticateUserCommand } from '../../application/commands/AuthenticateUserCommand';

export class AuthController {
  constructor(
    private authenticateUserHandler: AuthenticateUserCommandHandler
  ) {}

  async login(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const command: AuthenticateUserCommand = {
        email: req.body.email,
        password: req.body.password
      };

      const result = await this.authenticateUserHandler.execute(command);

      if (result.isFailure) {
        res.status(401).json({
          error: result.error
        });
        return;
      }

      res.status(200).json({
        data: result.getValue()
      });
    } catch (error) {
      next(error);
    }
  }
}
```

**Routes:**
```typescript
// packages/backend/src/domains/identity/api/routes/auth.routes.ts

import { Router } from 'express';
import { AuthController } from '../controllers/AuthController';
import { validateRequest } from '@/api/middleware/validation.middleware';
import { loginSchema } from '../validators/auth.validators';

export function createAuthRoutes(authController: AuthController): Router {
  const router = Router();

  router.post(
    '/login',
    validateRequest(loginSchema),
    (req, res, next) => authController.login(req, res, next)
  );

  router.post('/logout', (req, res, next) => authController.logout(req, res, next));

  return router;
}
```

---

## PART 3: CRITICAL ARCHITECTURAL PATTERNS

### 3.1 Entity Context Management (THE CRITICAL PATTERN)

**Backend Implementation:**

```typescript
// packages/backend/src/api/middleware/entity-context.middleware.ts

import { Request, Response, NextFunction } from 'express';
import { EntityContextService } from '@/domains/identity/application/services/EntityContextService';

export interface EntityContext {
  personId: string;
  accountId: string;
  activeEntityId: string | null;
  activeRole: string | null;
  availableEntities: Array<{
    entityId: string;
    entityName: string;
    role: string;
  }>;
}

declare global {
  namespace Express {
    interface Request {
      entityContext?: EntityContext;
    }
  }
}

export function entityContextMiddleware(entityContextService: EntityContextService) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      // Extract from JWT token or session
      const personId = req.user?.personId;
      const accountId = req.user?.accountId;
      
      if (!personId || !accountId) {
        return next();
      }

      // Get or restore entity context
      const activeEntityId = req.headers['x-active-entity'] as string | null;
      
      // Fetch available entities
      const availableEntities = await entityContextService.getAvailableEntities(personId);
      
      // Validate active entity is in available entities
      if (activeEntityId) {
        const isValid = availableEntities.some(e => e.entityId === activeEntityId);
        if (!isValid) {
          return res.status(403).json({
            error: 'Invalid entity context'
          });
        }
      }

      req.entityContext = {
        personId,
        accountId,
        activeEntityId,
        activeRole: null, // TODO: Determine from entity relationship
        availableEntities
      };

      next();
    } catch (error) {
      next(error);
    }
  };
}
```

**Frontend Implementation:**

```typescript
// packages/frontend/src/contexts/EntityContext.tsx

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { api } from '@/shared/api/client';

interface Entity {
  entityId: string;
  entityName: string;
  cin?: string;
  llpin?: string;
  role: string;
  status: string;
}

interface EntityContextValue {
  activeEntity: Entity | null;
  availableEntities: Entity[];
  isLoading: boolean;
  error: string | null;
  selectEntity: (entityId: string) => Promise<void>;
  clearEntity: () => void;
  refreshEntities: () => Promise<void>;
}

const EntityContext = createContext<EntityContextValue | undefined>(undefined);

export function EntityContextProvider({ children }: { children: ReactNode }) {
  const [activeEntity, setActiveEntity] = useState<Entity | null>(null);
  const [availableEntities, setAvailableEntities] = useState<Entity[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadEntities();
  }, []);

  useEffect(() => {
    // Set active entity in request headers
    if (activeEntity) {
      api.defaults.headers.common['X-Active-Entity'] = activeEntity.entityId;
    } else {
      delete api.defaults.headers.common['X-Active-Entity'];
    }
  }, [activeEntity]);

  async function loadEntities() {
    try {
      setIsLoading(true);
      const response = await api.get('/api/identity/available-entities');
      setAvailableEntities(response.data.entities);
      
      // Restore last active entity from localStorage
      const lastEntityId = localStorage.getItem('lastActiveEntityId');
      if (lastEntityId) {
        const entity = response.data.entities.find((e: Entity) => e.entityId === lastEntityId);
        if (entity) {
          setActiveEntity(entity);
        }
      }
    } catch (err) {
      setError('Failed to load entities');
    } finally {
      setIsLoading(false);
    }
  }

  async function selectEntity(entityId: string) {
    const entity = availableEntities.find(e => e.entityId === entityId);
    if (!entity) {
      throw new Error('Entity not found in available entities');
    }
    
    setActiveEntity(entity);
    localStorage.setItem('lastActiveEntityId', entityId);
  }

  function clearEntity() {
    setActiveEntity(null);
    localStorage.removeItem('lastActiveEntityId');
  }

  async function refreshEntities() {
    await loadEntities();
  }

  const value: EntityContextValue = {
    activeEntity,
    availableEntities,
    isLoading,
    error,
    selectEntity,
    clearEntity,
    refreshEntities
  };

  return (
    <EntityContext.Provider value={value}>
      {children}
    </EntityContext.Provider>
  );
}

export function useEntityContext() {
  const context = useContext(EntityContext);
  if (context === undefined) {
    throw new Error('useEntityContext must be used within EntityContextProvider');
  }
  return context;
}
```

**Entity Selector Component:**

```typescript
// packages/frontend/src/design-system/patterns/EntitySelector/EntitySelector.tsx

import React from 'react';
import { useEntityContext } from '@/contexts/EntityContext';
import { Select } from '@/design-system/components/Select';
import { Badge } from '@/design-system/components/Badge';

export function EntitySelector() {
  const { activeEntity, availableEntities, selectEntity, clearEntity } = useEntityContext();

  if (availableEntities.length === 0) {
    return (
      <div className="text-sm text-gray-600">
        No entities available
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <label className="text-sm font-medium text-gray-700">
        Acting for:
      </label>
      
      <Select
        value={activeEntity?.entityId || ''}
        onChange={(value) => value ? selectEntity(value) : clearEntity()}
        placeholder="Select entity"
        className="min-w-[250px]"
      >
        {availableEntities.map((entity) => (
          <Select.Option key={entity.entityId} value={entity.entityId}>
            <div className="flex items-center justify-between">
              <span>{entity.entityName}</span>
              <Badge variant="secondary" size="sm">
                {entity.role}
              </Badge>
            </div>
          </Select.Option>
        ))}
      </Select>
      
      {activeEntity && (
        <Badge variant="primary">
          {activeEntity.cin || activeEntity.llpin}
        </Badge>
      )}
    </div>
  );
}
```

---

### 3.2 Authorization Pattern (Context-Dependent)

**Authorization Service:**

```typescript
// packages/backend/src/api/middleware/authorization.middleware.ts

import { Request, Response, NextFunction } from 'express';
import { AuthorizationService } from '@/domains/identity/domain/services/AuthorizationService';

export interface AuthorizationRequirement {
  action: string;
  resource?: string;
  requiresActiveEntity: boolean;
}

export function requireAuthorization(requirement: AuthorizationRequirement) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { entityContext } = req;
      
      if (!entityContext) {
        return res.status(401).json({ error: 'Not authenticated' });
      }

      if (requirement.requiresActiveEntity && !entityContext.activeEntityId) {
        return res.status(403).json({ 
          error: 'Active entity required',
          code: 'NO_ACTIVE_ENTITY'
        });
      }

      // Evaluate authorization: (Identity × Role × Entity × Action)
      const authService = new AuthorizationService();
      const result = await authService.canPerform(
        entityContext.personId,
        entityContext.activeRole,
        entityContext.activeEntityId,
        requirement.action,
        new Date()
      );

      if (result.isFailure) {
        return res.status(403).json({
          error: 'Authorization denied',
          reason: result.error,
          code: 'AUTHORIZATION_DENIED'
        });
      }

      // Log authorization decision
      // TODO: Send to Audit domain

      next();
    } catch (error) {
      next(error);
    }
  };
}

// Usage in routes:
// router.post(
//   '/api/services/incorporate-company',
//   authenticate,
//   entityContextMiddleware,
//   requireAuthorization({ action: 'SERVICE.INCORPORATE', requiresActiveEntity: true }),
//   (req, res) => incorporateCompanyHandler(req, res)
// );
```

---

### 3.3 Domain Events Pattern

**Domain Event:**

```typescript
// packages/backend/src/shared/domain/DomainEvent.ts

export interface DomainEvent {
  eventId: string;
  occurredAt: Date;
  aggregateId: string;
  eventType: string;
}

export abstract class BaseDomainEvent implements DomainEvent {
  public readonly eventId: string;
  public readonly occurredAt: Date;
  public readonly aggregateId: string;
  public readonly eventType: string;

  constructor(aggregateId: string, eventType: string) {
    this.eventId = crypto.randomUUID();
    this.occurredAt = new Date();
    this.aggregateId = aggregateId;
    this.eventType = eventType;
  }
}
```

**Example Event:**

```typescript
// packages/backend/src/domains/entity/domain/events/DirectorAppointedEvent.ts

import { BaseDomainEvent } from '@/shared/domain/DomainEvent';

export class DirectorAppointedEvent extends BaseDomainEvent {
  constructor(
    public readonly companyId: string,
    public readonly personId: string,
    public readonly din: string,
    public readonly appointmentDate: Date
  ) {
    super(companyId, 'DIRECTOR_APPOINTED');
  }
}
```

**Event Bus:**

```typescript
// packages/backend/src/shared/application/EventBus.ts

import { DomainEvent } from '../domain/DomainEvent';

export interface IEventHandler<T extends DomainEvent> {
  handle(event: T): Promise<void>;
}

export class EventBus {
  private handlers: Map<string, Array<IEventHandler<any>>> = new Map();

  subscribe<T extends DomainEvent>(
    eventType: string,
    handler: IEventHandler<T>
  ): void {
    if (!this.handlers.has(eventType)) {
      this.handlers.set(eventType, []);
    }
    this.handlers.get(eventType)!.push(handler);
  }

  async publish(event: DomainEvent): Promise<void> {
    const handlers = this.handlers.get(event.eventType) || [];
    
    // Publish asynchronously
    for (const handler of handlers) {
      try {
        await handler.handle(event);
      } catch (error) {
        console.error(`Error handling event ${event.eventType}:`, error);
        // TODO: Implement retry logic or dead-letter queue
      }
    }
  }
}
```

---

### 3.4 Confirmation Dialog Pattern (Entity Safety)

**Backend Confirmation Endpoint:**

```typescript
// packages/backend/src/domains/service/api/controllers/ServiceController.ts

async prepareSubmission(req: Request, res: Response): Promise<void> {
  const { transactionId } = req.params;
  const { entityContext } = req;
  
  // Get transaction
  const transaction = await this.transactionRepository.findById(transactionId);
  
  if (!transaction) {
    res.status(404).json({ error: 'Transaction not found' });
    return;
  }
  
  // Verify entity context matches transaction
  if (transaction.entityId !== entityContext.activeEntityId) {
    res.status(403).json({
      error: 'Entity context mismatch',
      code: 'ENTITY_MISMATCH'
    });
    return;
  }
  
  // Prepare confirmation data
  const confirmationData = {
    transactionId: transaction.id,
    entity: {
      id: entityContext.activeEntityId,
      name: await this.getEntityName(entityContext.activeEntityId),
      cin: await this.getEntityCIN(entityContext.activeEntityId)
    },
    actingCapacity: entityContext.activeRole,
    action: 'Submit Company Incorporation',
    consequences: [
      'A filing will be submitted to MCA',
      'Payment will be processed',
      'An SRN will be generated'
    ],
    requiresConfirmation: true
  };
  
  res.status(200).json({ data: confirmationData });
}
```

**Frontend Confirmation Dialog:**

```typescript
// packages/frontend/src/design-system/patterns/ConfirmationDialog/ConsequentialActionDialog.tsx

import React from 'react';
import { Modal } from '@/design-system/components/Modal';
import { Button } from '@/design-system/components/Button';
import { Alert } from '@/design-system/components/Alert';
import { Badge } from '@/design-system/components/Badge';

interface ConsequentialActionDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  data: {
    entity: {
      id: string;
      name: string;
      cin: string;
    };
    actingCapacity: string;
    action: string;
    consequences: string[];
  };
}

export function ConsequentialActionDialog({
  isOpen,
  onClose,
  onConfirm,
  data
}: ConsequentialActionDialogProps) {
  const [confirmed, setConfirmed] = React.useState(false);

  function handleConfirm() {
    if (!confirmed) return;
    onConfirm();
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Confirm Action"
      size="md"
    >
      <div className="space-y-4">
        <Alert variant="warning">
          You are about to perform a consequential action. Please review carefully.
        </Alert>

        <div className="border rounded-lg p-4 bg-gray-50 space-y-3">
          <div>
            <label className="text-sm font-medium text-gray-600">Entity:</label>
            <div className="flex items-center gap-2 mt-1">
              <span className="font-semibold">{data.entity.name}</span>
              <Badge variant="secondary">{data.entity.cin}</Badge>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-600">Acting Capacity:</label>
            <div className="mt-1">
              <Badge variant="primary">{data.actingCapacity}</Badge>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-600">Action:</label>
            <p className="mt-1 font-semibold text-gray-900">{data.action}</p>
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Consequences:</label>
          <ul className="mt-2 space-y-1 list-disc list-inside text-sm text-gray-600">
            {data.consequences.map((consequence, index) => (
              <li key={index}>{consequence}</li>
            ))}
          </ul>
        </div>

        <div className="flex items-start gap-2 p-3 bg-yellow-50 border border-yellow-200 rounded">
          <input
            type="checkbox"
            id="confirm-checkbox"
            checked={confirmed}
            onChange={(e) => setConfirmed(e.target.checked)}
            className="mt-0.5"
          />
          <label htmlFor="confirm-checkbox" className="text-sm text-gray-700 cursor-pointer">
            I confirm that I am acting for <strong>{data.entity.name}</strong> in my capacity as{' '}
            <strong>{data.actingCapacity}</strong> and I understand the consequences of this action.
          </label>
        </div>

        <div className="flex justify-end gap-3 pt-4">
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={handleConfirm}
            disabled={!confirmed}
          >
            Confirm and Proceed
          </Button>
        </div>
      </div>
    </Modal>
  );
}
```

---

## PART 4: DATABASE SCHEMA (SCHEMA-PER-DOMAIN)

### 4.1 Prisma Schema Structure

```prisma
// packages/backend/prisma/schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// ========================================
// IDENTITY & ACCESS DOMAIN SCHEMA
// ========================================

model Person {
  id                 String   @id @default(uuid())
  name               String
  email              String   @unique
  phoneNumber        String?
  verificationStatus String   @default("UNVERIFIED") // UNVERIFIED, VERIFIED
  createdAt          DateTime @default(now())
  updatedAt          DateTime @updatedAt
  
  accounts           Account[]
  entityRelationships EntityRelationship[]
  
  @@map("identity_persons")
}

model Account {
  id                String   @id @default(uuid())
  personId          String
  username          String   @unique
  passwordHash      String
  accountType       String   // REGISTERED, BUSINESS
  status            String   @default("ACTIVE") // ACTIVE, SUSPENDED, CLOSED
  lastLoginAt       DateTime?
  createdAt         DateTime @default(now())
  updatedAt         DateTime @updatedAt
  
  person            Person   @relation(fields: [personId], references: [id])
  
  @@map("identity_accounts")
}

model EntityRelationship {
  id                String    @id @default(uuid())
  personId          String
  entityId          String
  entityType        String    // COMPANY, LLP
  roleType          String    // DIRECTOR, PARTNER, PROFESSIONAL, DELEGATE
  effectiveFrom     DateTime
  effectiveTo       DateTime?
  status            String    @default("ACTIVE") // ACTIVE, RESIGNED, REVOKED
  createdAt         DateTime  @default(now())
  updatedAt         DateTime  @updatedAt
  
  person            Person    @relation(fields: [personId], references: [id])
  authorities       Authority[]
  
  @@map("identity_entity_relationships")
}

model Authority {
  id                    String    @id @default(uuid())
  entityRelationshipId  String
  action                String
  scope                 Json      // { service: [], entity: [], conditions: [] }
  source                String    // INHERENT, DELEGATED, ASSIGNED
  validFrom             DateTime
  validTo               DateTime?
  status                String    @default("ACTIVE")
  createdAt             DateTime  @default(now())
  
  entityRelationship    EntityRelationship @relation(fields: [entityRelationshipId], references: [id])
  
  @@map("identity_authorities")
}

// ========================================
// ENTITY & REGISTRY DOMAIN SCHEMA
// ========================================

model Company {
  id                String    @id @default(uuid())
  cin               String    @unique
  name              String
  companyType       String    // PRIVATE, PUBLIC
  status            String    // ACTIVE, INACTIVE, STRUCK_OFF
  registeredOffice  Json      // { address, city, state, pincode }
  incorporationDate DateTime
  rocCode           String
  createdAt         DateTime  @default(now())
  updatedAt         DateTime  @updatedAt
  
  @@map("entity_companies")
}

model LLP {
  id                String    @id @default(uuid())
  llpin             String    @unique
  name              String
  status            String    // ACTIVE, INACTIVE, DISSOLVED
  registeredOffice  Json
  registrationDate  DateTime
  rocCode           String
  createdAt         DateTime  @default(now())
  updatedAt         DateTime  @updatedAt
  
  @@map("entity_llps")
}

// ========================================
// SERVICE & TRANSACTION DOMAIN SCHEMA
// ========================================

model Transaction {
  id                String    @id @default(uuid())
  srn               String?   @unique
  serviceType       String    // INCORPORATE_COMPANY, FILE_ANNUAL_RETURN, etc.
  entityId          String?
  entityType        String?   // COMPANY, LLP
  personId          String
  draftState        String    @default("DRAFT") // DRAFT, VALIDATING, VALIDATED
  signingState      String    @default("UNSIGNED") // UNSIGNED, PARTIALLY_SIGNED, FULLY_SIGNED
  paymentState      String    @default("CALCULATED") // CALCULATED, PENDING, CONFIRMED, FAILED
  submissionState   String?   // READY, SUBMITTED
  processingState   String?   // QUEUED, STP_PROCESSING, MANUAL_REVIEW
  overallState      String    @default("IN_PROGRESS") // IN_PROGRESS, COMPLETED, ABANDONED
  data              Json      // Transaction-specific data
  createdAt         DateTime  @default(now())
  updatedAt         DateTime  @updatedAt
  submittedAt       DateTime?
  completedAt       DateTime?
  
  @@map("service_transactions")
}

// ========================================
// COMPLIANCE DOMAIN SCHEMA
// ========================================

model Obligation {
  id                String    @id @default(uuid())
  entityId          String
  entityType        String
  obligationType    String    // ANNUAL_RETURN, FINANCIAL_STATEMENTS, DIR_KYC
  legalBasis        String    // Section reference
  dueDate           DateTime
  status            String    @default("PENDING") // PENDING, COMPLETED, OVERDUE
  recurrence        String?   // ANNUAL, ONE_TIME, EVENT_BASED
  completedAt       DateTime?
  createdAt         DateTime  @default(now())
  updatedAt         DateTime  @updatedAt
  
  @@map("compliance_obligations")
}

// ========================================
// AUDIT DOMAIN SCHEMA
// ========================================

model AuditEvent {
  id                String    @id @default(uuid())
  eventType         String    // LOGIN, ENTITY_SWITCH, AUTHORIZE, SUBMIT, etc.
  actorId           String    // PersonId
  entityId          String?
  action            String
  resource          String?
  outcome           String    // SUCCESS, FAILURE
  metadata          Json
  ipAddress         String?
  userAgent         String?
  occurredAt        DateTime  @default(now())
  
  @@map("audit_events")
}
```

---

## PART 5: API STRUCTURE

### 5.1 API Route Aggregation

```typescript
// packages/backend/src/api/routes/index.ts

import { Router } from 'express';
import { createAuthRoutes } from '@/domains/identity/api/routes/auth.routes';
import { createEntityRoutes } from '@/domains/entity/api/routes/entity.routes';
import { createServiceRoutes } from '@/domains/service/api/routes/service.routes';
import { createComplianceRoutes } from '@/domains/compliance/api/routes/compliance.routes';
// ... other domain routes

export function createApiRoutes(): Router {
  const router = Router();

  // Health check
  router.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok' });
  });

  // Domain routes
  router.use('/identity', createAuthRoutes(/* dependencies */));
  router.use('/entities', createEntityRoutes(/* dependencies */));
  router.use('/services', createServiceRoutes(/* dependencies */));
  router.use('/compliance', createComplianceRoutes(/* dependencies */));
  
  // ... other domains

  return router;
}
```

### 5.2 API Response Format

```typescript
// packages/backend/src/shared/api/ApiResponse.ts

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: any;
  };
  meta?: {
    timestamp: string;
    requestId: string;
  };
}

export class ApiResponseBuilder {
  static success<T>(data: T): ApiResponse<T> {
    return {
      success: true,
      data,
      meta: {
        timestamp: new Date().toISOString(),
        requestId: crypto.randomUUID()
      }
    };
  }

  static error(code: string, message: string, details?: any): ApiResponse {
    return {
      success: false,
      error: {
        code,
        message,
        details
      },
      meta: {
        timestamp: new Date().toISOString(),
        requestId: crypto.randomUUID()
      }
    };
  }
}
```

---

## PART 6: TESTING ARCHITECTURE

### 6.1 Test Structure

```
packages/backend/tests/
├── unit/                             # Unit tests (domain logic)
│   ├── domains/
│   │   ├── identity/
│   │   │   ├── Person.test.ts
│   │   │   ├── AuthorizationService.test.ts
│   │   │   └── ...
│   │   └── ...
│
├── integration/                      # Integration tests (API endpoints)
│   ├── identity/
│   │   ├── auth.integration.test.ts
│   │   └── ...
│   └── ...
│
├── architectural/                    # Architectural invariant tests
│   ├── entity-context.test.ts
│   ├── authorization.test.ts
│   ├── multi-entity.test.ts
│   ├── entity-safety.test.ts
│   └── domain-boundaries.test.ts
│
└── helpers/
    ├── test-data-builder.ts
    ├── test-database.ts
    └── api-test-client.ts
```

### 6.2 Architectural Test Example

```typescript
// packages/backend/tests/architectural/entity-context.test.ts

describe('Entity Context Architecture', () => {
  describe('Active Entity Requirement', () => {
    it('should prevent consequential actions without active entity', async () => {
      // Arrange: User with multiple entities but no active entity
      const token = await getAuthToken({ hasMultipleEntities: true });
      
      // Act: Attempt consequential action without setting active entity
      const response = await api
        .post('/api/services/incorporate-company')
        .set('Authorization', `Bearer ${token}`)
        // No X-Active-Entity header
        .send({ /* data */ });
      
      // Assert
      expect(response.status).toBe(403);
      expect(response.body.error.code).toBe('NO_ACTIVE_ENTITY');
    });

    it('should allow consequential actions with valid active entity', async () => {
      // Arrange
      const token = await getAuthToken({ hasMultipleEntities: true });
      const entityId = 'entity-123';
      
      // Act
      const response = await api
        .post('/api/services/incorporate-company')
        .set('Authorization', `Bearer ${token}`)
        .set('X-Active-Entity', entityId)
        .send({ /* data */ });
      
      // Assert
      expect(response.status).not.toBe(403);
      expect(response.body.error?.code).not.toBe('NO_ACTIVE_ENTITY');
    });
  });

  describe('Entity Context Isolation', () => {
    it('should isolate data by entity', async () => {
      // User has access to Entity A and Entity B
      const token = await getAuthToken({ entities: ['A', 'B'] });
      
      // Request Entity A context
      const responseA = await api
        .get('/api/compliance/obligations')
        .set('Authorization', `Bearer ${token}`)
        .set('X-Active-Entity', 'A');
      
      // Request Entity B context
      const responseB = await api
        .get('/api/compliance/obligations')
        .set('Authorization', `Bearer ${token}`)
        .set('X-Active-Entity', 'B');
      
      // Assert: Different data returned
      expect(responseA.body.data).not.toEqual(responseB.body.data);
    });
  });

  describe('Entity Switching Safety', () => {
    it('should preserve per-entity draft state after switching', async () => {
      // Create draft for Entity A
      // Switch to Entity B
      // Create draft for Entity B
      // Switch back to Entity A
      // Verify Entity A draft is preserved
      
      // TODO: Implement test
    });
  });
});
```

---

## PART 7: DEPLOYMENT & INFRASTRUCTURE (Foundation Phase)

### 7.1 Docker Compose (Development)

```yaml
# docker/docker-compose.yml

version: '3.8'

services:
  postgres:
    image: postgres:16-alpine
    container_name: mca-postgres
    environment:
      POSTGRES_USER: mca_user
      POSTGRES_PASSWORD: mca_password
      POSTGRES_DB: mca_platform
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data
      - ./postgres/init.sql:/docker-entrypoint-initdb.d/init.sql
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U mca_user"]
      interval: 10s
      timeout: 5s
      retries: 5

volumes:
  postgres_data:
```

### 7.2 Environment Configuration

```
# .env.example

# Application
NODE_ENV=development
PORT=3000

# Database
DATABASE_URL=postgresql://mca_user:mca_password@localhost:5432/mca_platform

# Authentication
JWT_SECRET=your-secret-key-here-change-in-production
JWT_EXPIRES_IN=7d

# CORS
CORS_ORIGIN=http://localhost:5173

# Logging
LOG_LEVEL=debug

# Feature Flags
ENABLE_MOCK_MCA_API=true
ENABLE_MOCK_DSC=true
ENABLE_MOCK_PAYMENT=true
```

---

## PART 8: IMPLEMENTATION PRIORITIES

### 8.1 Priority Order (Foundation Phase)

**P0 - Critical Path:**
1. ✅ Project structure and configuration
2. ✅ Shared kernel (Entity, ValueObject, Result, DomainEvent)
3. ✅ Identity domain (Person, Account, Authentication)
4. ✅ Entity context system (Backend + Frontend)
5. ✅ Authorization system (context-dependent)
6. ✅ Entity domain (Company, LLP basic models)
7. ✅ Service domain (Transaction basic model)
8. ✅ Frontend entity context provider
9. ✅ Design system primitives (Button, Input, Card, Modal, Alert)
10. ✅ Application shell with entity selector
11. ✅ First vertical slice (Company Incorporation - mock)
12. ✅ Architectural tests
13. ✅ Documentation

**P1 - Important but Deferrable:**
- Compliance domain (full obligation engine)
- Payment domain (full fee calculation)
- Document domain (full lifecycle)
- Workflow domain (STP routing)
- Notification domain (event-driven notifications)

**P2 - Future Phases:**
- Oversight domain (case management)
- Search domain (Elasticsearch integration)
- Content domain (CMS)
- Audit domain (full analytics)

---

## PART 9: ARCHITECTURAL DECISION RECORDS

### 9.1 ADR Template Location

```
docs/implementation/adrs/
├── ADR-001-domain-oriented-modular-monolith.md
├── ADR-002-typescript-node-backend.md
├── ADR-003-react-frontend.md
├── ADR-004-prisma-orm.md
├── ADR-005-schema-per-domain.md
├── ADR-006-entity-context-in-request-header.md
└── ADR-007-domain-events-for-cross-domain-communication.md
```

---

## CONCLUSION

**Architecture Status:** ✅ DEFINED AND READY FOR IMPLEMENTATION

**Key Architectural Decisions:**
1. Domain-Oriented Modular Monolith (12 domains)
2. Hexagonal architecture within domains
3. Schema-per-domain database organization
4. Entity context in request headers
5. Context-dependent authorization
6. Domain events for cross-domain communication
7. TypeScript for type safety
8. Prisma for database access
9. React for frontend
10. Monorepo structure

**Next Steps:**
1. Initialize project structure
2. Set up development environment
3. Create domain scaffolding
4. Implement shared kernel
5. Begin Identity domain implementation

**Critical Success Factors:**
- Maintain domain boundaries strictly
- Preserve architectural invariants
- Test entity context and authorization thoroughly
- Document deviations with ADRs
- Keep mocks clearly labeled

---

**Document Status:** COMPLETE  
**Next Document:** `domain-model.md`  
**Architecture By:** Kiro Agent  
**Review Required:** Technical lead approval before implementation
