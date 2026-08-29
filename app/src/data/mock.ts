import type {
  Person, Entity, EntityRelationship, Authority,
  Obligation, Transaction, Notification,
} from '@/types';

// ─── PERSONS ─────────────────────────────────────────────
export const persons: Person[] = [
  {
    id: 'person-001',
    name: 'Priya Sharma',
    email: 'priya.sharma@email.com',
    phone: '+91 98765 43210',
    pan: 'ABCPS1234K',
    din: '00123456',
    verificationLevel: 'VERIFIED',
  },
  {
    id: 'person-002',
    name: 'Rajesh Kumar',
    email: 'rajesh.kumar@cakumar.com',
    phone: '+91 98765 43211',
    pan: 'DEFPK5678L',
    verificationLevel: 'PROFESSIONAL',
    professionalMembership: { type: 'ICAI', number: 'FRN-045678' },
  },
];

// ─── ENTITIES ─────────────────────────────────────────────
export const entities: Entity[] = [
  {
    id: 'entity-001',
    type: 'COMPANY',
    companyType: 'PRIVATE',
    name: 'Acme Technologies Private Limited',
    cin: 'U72200MH2019PTC123456',
    status: 'ACTIVE',
    registeredOffice: {
      address: '42, Bandra Kurla Complex, Tower B, Floor 8',
      city: 'Mumbai',
      state: 'Maharashtra',
      pincode: '400051',
    },
    incorporationDate: '2019-03-15',
    rocCode: 'ROC-Mumbai',
    authorizedCapital: '50,00,000',
    paidUpCapital: '25,00,000',
  },
  {
    id: 'entity-002',
    type: 'COMPANY',
    companyType: 'PRIVATE',
    name: 'Zenith Labs Private Limited',
    cin: 'U74999KA2021PTC234567',
    status: 'ACTIVE',
    registeredOffice: {
      address: '15, Whitefield Main Road, ITPL',
      city: 'Bengaluru',
      state: 'Karnataka',
      pincode: '560066',
    },
    incorporationDate: '2021-07-22',
    rocCode: 'ROC-Bengaluru',
    authorizedCapital: '1,00,00,000',
    paidUpCapital: '75,00,000',
  },
  {
    id: 'entity-003',
    type: 'LLP',
    name: 'ABC Industries LLP',
    llpin: 'AAB-1234',
    status: 'ACTIVE',
    registeredOffice: {
      address: '8, Connaught Place',
      city: 'New Delhi',
      state: 'Delhi',
      pincode: '110001',
    },
    incorporationDate: '2020-01-10',
    rocCode: 'ROC-Delhi',
  },
  {
    id: 'entity-004',
    type: 'COMPANY',
    companyType: 'PUBLIC',
    name: 'Bharat Steel Corporation Limited',
    cin: 'L27100MH2010PLC345678',
    status: 'ACTIVE',
    registeredOffice: {
      address: '1, Nariman Point',
      city: 'Mumbai',
      state: 'Maharashtra',
      pincode: '400021',
    },
    incorporationDate: '2010-06-01',
    rocCode: 'ROC-Mumbai',
    authorizedCapital: '50,00,00,000',
    paidUpCapital: '32,00,00,000',
  },
  {
    id: 'entity-005',
    type: 'COMPANY',
    companyType: 'PRIVATE',
    name: 'NovaTech Solutions Private Limited',
    cin: 'U72300TN2022PTC456789',
    status: 'ACTIVE',
    registeredOffice: {
      address: '22, Tidel Park, Taramani',
      city: 'Chennai',
      state: 'Tamil Nadu',
      pincode: '600113',
    },
    incorporationDate: '2022-11-05',
    rocCode: 'ROC-Chennai',
    authorizedCapital: '10,00,000',
    paidUpCapital: '5,00,000',
  },
];

// ─── ENTITY RELATIONSHIPS ─────────────────────────────────
export const entityRelationships: EntityRelationship[] = [
  // Priya Sharma - Director of Acme Technologies
  {
    id: 'rel-001',
    personId: 'person-001',
    entityId: 'entity-001',
    roleType: 'DIRECTOR',
    effectiveFrom: '2019-03-15',
    status: 'ACTIVE',
  },
  // Priya Sharma - Director of Zenith Labs
  {
    id: 'rel-002',
    personId: 'person-001',
    entityId: 'entity-002',
    roleType: 'DIRECTOR',
    effectiveFrom: '2021-07-22',
    status: 'ACTIVE',
  },
  // Priya Sharma - Authorized Representative of ABC Industries
  {
    id: 'rel-003',
    personId: 'person-001',
    entityId: 'entity-003',
    roleType: 'AUTHORIZED_REPRESENTATIVE',
    effectiveFrom: '2023-01-01',
    effectiveTo: '2026-12-31',
    status: 'ACTIVE',
  },
  // Rajesh Kumar (CA) - Professional for Acme Technologies
  {
    id: 'rel-004',
    personId: 'person-002',
    entityId: 'entity-001',
    roleType: 'PROFESSIONAL',
    effectiveFrom: '2023-04-01',
    status: 'ACTIVE',
  },
  // Rajesh Kumar - Professional for Zenith Labs
  {
    id: 'rel-005',
    personId: 'person-002',
    entityId: 'entity-002',
    roleType: 'PROFESSIONAL',
    effectiveFrom: '2023-04-01',
    status: 'ACTIVE',
  },
  // Rajesh Kumar - Professional for Bharat Steel
  {
    id: 'rel-006',
    personId: 'person-002',
    entityId: 'entity-004',
    roleType: 'PROFESSIONAL',
    effectiveFrom: '2024-01-01',
    status: 'ACTIVE',
  },
  // Rajesh Kumar - Professional for NovaTech
  {
    id: 'rel-007',
    personId: 'person-002',
    entityId: 'entity-005',
    roleType: 'PROFESSIONAL',
    effectiveFrom: '2024-06-01',
    status: 'ACTIVE',
  },
];

// ─── AUTHORITIES ───────────────────────────────────────────
export const authorities: Authority[] = [
  // Priya - full authority as Director at Acme
  {
    id: 'auth-001',
    relationshipId: 'rel-001',
    actions: ['FILE_ANNUAL_RETURN', 'FILE_FINANCIAL_STATEMENTS', 'APPOINT_DIRECTOR', 'REMOVE_DIRECTOR', 'CHANGE_ADDRESS', 'INCORPORATE_COMPANY', 'SIGN', 'PAY'],
    level: 'CONSEQUENTIAL',
    source: 'INHERENT',
    validFrom: '2019-03-15',
  },
  // Priya - full authority as Director at Zenith
  {
    id: 'auth-002',
    relationshipId: 'rel-002',
    actions: ['FILE_ANNUAL_RETURN', 'FILE_FINANCIAL_STATEMENTS', 'APPOINT_DIRECTOR', 'SIGN', 'PAY'],
    level: 'CONSEQUENTIAL',
    source: 'INHERENT',
    validFrom: '2021-07-22',
  },
  // Priya - limited authority as Authorized Rep at ABC Industries
  {
    id: 'auth-003',
    relationshipId: 'rel-003',
    actions: ['FILE_ANNUAL_RETURN', 'VIEW_DOCUMENTS'],
    level: 'PREPARATORY',
    source: 'DELEGATED',
    validFrom: '2023-01-01',
    validTo: '2026-12-31',
  },
  // Rajesh - professional authority at Acme
  {
    id: 'auth-004',
    relationshipId: 'rel-004',
    actions: ['FILE_ANNUAL_RETURN', 'FILE_FINANCIAL_STATEMENTS', 'CERTIFY', 'SIGN', 'PAY'],
    level: 'CONSEQUENTIAL',
    source: 'DELEGATED',
    validFrom: '2023-04-01',
  },
  // Rajesh - professional authority at Zenith
  {
    id: 'auth-005',
    relationshipId: 'rel-005',
    actions: ['FILE_ANNUAL_RETURN', 'FILE_FINANCIAL_STATEMENTS', 'CERTIFY', 'SIGN', 'PAY'],
    level: 'CONSEQUENTIAL',
    source: 'DELEGATED',
    validFrom: '2023-04-01',
  },
  // Rajesh - professional authority at Bharat Steel
  {
    id: 'auth-006',
    relationshipId: 'rel-006',
    actions: ['FILE_ANNUAL_RETURN', 'FILE_FINANCIAL_STATEMENTS', 'CERTIFY', 'SIGN'],
    level: 'CONSEQUENTIAL',
    source: 'DELEGATED',
    validFrom: '2024-01-01',
  },
  // Rajesh - professional at NovaTech
  {
    id: 'auth-007',
    relationshipId: 'rel-007',
    actions: ['FILE_ANNUAL_RETURN', 'CERTIFY'],
    level: 'CONSEQUENTIAL',
    source: 'DELEGATED',
    validFrom: '2024-06-01',
  },
];

// ─── OBLIGATIONS ────────────────────────────────────────────
export const obligations: Obligation[] = [
  {
    id: 'obl-001',
    entityId: 'entity-001',
    type: 'ANNUAL_RETURN',
    formNumber: 'MGT-7',
    description: 'Annual Return',
    legalBasis: 'Section 92, Companies Act 2013',
    dueDate: '2026-09-15',
    status: 'PENDING',
    filingPeriod: 'FY 2025-26',
  },
  {
    id: 'obl-002',
    entityId: 'entity-001',
    type: 'FINANCIAL_STATEMENTS',
    formNumber: 'AOC-4',
    description: 'Financial Statements',
    legalBasis: 'Section 137, Companies Act 2013',
    dueDate: '2026-09-30',
    status: 'PENDING',
    filingPeriod: 'FY 2025-26',
  },
  {
    id: 'obl-003',
    entityId: 'entity-001',
    type: 'DIRECTOR_KYC',
    formNumber: 'DIR-3 KYC',
    description: 'Director KYC Verification',
    legalBasis: 'Rule 12A, Companies (Appointment & Qualification of Directors) Rules',
    dueDate: '2026-09-30',
    status: 'PENDING',
  },
  {
    id: 'obl-004',
    entityId: 'entity-001',
    type: 'ANNUAL_RETURN',
    formNumber: 'MGT-7',
    description: 'Annual Return',
    legalBasis: 'Section 92, Companies Act 2013',
    dueDate: '2025-09-15',
    status: 'COMPLETED',
    filingPeriod: 'FY 2024-25',
  },
  {
    id: 'obl-005',
    entityId: 'entity-002',
    type: 'ANNUAL_RETURN',
    formNumber: 'MGT-7',
    description: 'Annual Return',
    legalBasis: 'Section 92, Companies Act 2013',
    dueDate: '2026-09-15',
    status: 'PENDING',
    filingPeriod: 'FY 2025-26',
  },
  {
    id: 'obl-006',
    entityId: 'entity-002',
    type: 'COMMENCEMENT_OF_BUSINESS',
    formNumber: 'INC-20A',
    description: 'Declaration for Commencement of Business',
    legalBasis: 'Section 10A, Companies Act 2013',
    dueDate: '2026-08-30',
    status: 'OVERDUE',
  },
  {
    id: 'obl-007',
    entityId: 'entity-003',
    type: 'LLP_ANNUAL_RETURN',
    formNumber: 'Form 11',
    description: 'LLP Annual Return',
    legalBasis: 'Section 35, LLP Act 2008',
    dueDate: '2026-10-30',
    status: 'UPCOMING',
    filingPeriod: 'FY 2025-26',
  },
];

// ─── TRANSACTIONS ───────────────────────────────────────────
export const transactions: Transaction[] = [
  {
    id: 'txn-001',
    srn: 'SRN-2026-001234',
    entityId: 'entity-001',
    serviceType: 'FILE_ANNUAL_RETURN',
    formNumber: 'MGT-7',
    description: 'Annual Return FY 2024-25',
    state: 'COMPLETED',
    createdAt: '2025-08-20T10:00:00Z',
    updatedAt: '2025-08-25T14:30:00Z',
    submittedAt: '2025-08-25T14:30:00Z',
  },
  {
    id: 'txn-002',
    srn: 'SRN-2026-001567',
    entityId: 'entity-001',
    serviceType: 'FILE_FINANCIAL_STATEMENTS',
    formNumber: 'AOC-4',
    description: 'Financial Statements FY 2024-25',
    state: 'COMPLETED',
    createdAt: '2025-09-01T09:00:00Z',
    updatedAt: '2025-09-05T16:00:00Z',
    submittedAt: '2025-09-05T16:00:00Z',
  },
  {
    id: 'txn-003',
    entityId: 'entity-001',
    serviceType: 'CHANGE_OF_DIRECTORS',
    formNumber: 'DIR-12',
    description: 'Resignation of Director - Vikram Patel',
    state: 'DRAFT',
    createdAt: '2026-08-25T11:00:00Z',
    updatedAt: '2026-08-25T11:00:00Z',
  },
  {
    id: 'txn-004',
    srn: 'SRN-2026-002345',
    entityId: 'entity-002',
    serviceType: 'FILE_ANNUAL_RETURN',
    formNumber: 'MGT-7',
    description: 'Annual Return FY 2024-25',
    state: 'PROCESSING',
    createdAt: '2026-08-10T09:00:00Z',
    updatedAt: '2026-08-15T12:00:00Z',
    submittedAt: '2026-08-15T12:00:00Z',
  },
];

// ─── NOTIFICATIONS ──────────────────────────────────────────
export const notifications: Notification[] = [
  {
    id: 'notif-001',
    entityId: 'entity-001',
    type: 'OBLIGATION_DUE',
    title: 'Annual Return Due Soon',
    message: 'MGT-7 for Acme Technologies is due on 15 Sep 2026 (18 days remaining)',
    timestamp: '2026-08-28T08:00:00Z',
    read: false,
  },
  {
    id: 'notif-002',
    entityId: 'entity-002',
    type: 'COMPLIANCE_ALERT',
    title: 'Overdue Filing',
    message: 'INC-20A for Zenith Labs was due on 30 Aug 2026. Late fee may apply.',
    timestamp: '2026-08-28T08:00:00Z',
    read: false,
  },
  {
    id: 'notif-003',
    entityId: 'entity-001',
    type: 'TRANSACTION_UPDATE',
    title: 'Draft Saved',
    message: 'DIR-12 draft for Acme Technologies has been saved.',
    timestamp: '2026-08-25T11:00:00Z',
    read: true,
  },
  {
    id: 'notif-004',
    type: 'SYSTEM',
    title: 'Platform Maintenance',
    message: 'Scheduled maintenance on 1 Sep 2026, 2:00 AM - 4:00 AM IST.',
    timestamp: '2026-08-27T10:00:00Z',
    read: true,
  },
];

// ─── HELPER FUNCTIONS ───────────────────────────────────────
export function getPersonById(id: string): Person | undefined {
  return persons.find(p => p.id === id);
}

export function getEntityById(id: string): Entity | undefined {
  return entities.find(e => e.id === id);
}

export function getRelationshipsForPerson(personId: string): EntityRelationship[] {
  return entityRelationships.filter(r => r.personId === personId && r.status === 'ACTIVE');
}

export function getAuthoritiesForRelationship(relationshipId: string): Authority[] {
  return authorities.filter(a => a.relationshipId === relationshipId);
}

export function getObligationsForEntity(entityId: string): Obligation[] {
  return obligations.filter(o => o.entityId === entityId);
}

export function getTransactionsForEntity(entityId: string): Transaction[] {
  return transactions.filter(t => t.entityId === entityId);
}

export function getNotificationsForEntity(entityId?: string): Notification[] {
  if (!entityId) return notifications.filter(n => !n.entityId);
  return notifications.filter(n => n.entityId === entityId || !n.entityId);
}

export function getAvailableEntitiesForPerson(personId: string) {
  const rels = getRelationshipsForPerson(personId);
  return rels
    .map(rel => {
      const entity = getEntityById(rel.entityId);
      if (!entity) return null;
      return {
        entity,
        relationship: rel,
        authorities: getAuthoritiesForRelationship(rel.id),
      };
    })
    .filter((x): x is NonNullable<typeof x> => x !== null);
}

export function getRoleLabel(roleType: string): string {
  const labels: Record<string, string> = {
    DIRECTOR: 'Director',
    PARTNER: 'Designated Partner',
    PROFESSIONAL: 'Practicing Professional (CA)',
    AUTHORIZED_REPRESENTATIVE: 'Authorised Representative',
    DELEGATE: 'Delegate',
  };
  return labels[roleType] || roleType;
}

export function getEntityIdentifier(entity: Entity): string {
  return entity.cin || entity.llpin || entity.id;
}

export function getEntityTypeLabel(entity: Entity): string {
  if (entity.type === 'LLP') return 'LLP';
  if (entity.companyType === 'PUBLIC') return 'Public Limited';
  if (entity.companyType === 'OPC') return 'One Person Company';
  return 'Private Limited';
}
