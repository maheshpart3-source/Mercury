export type EntityType = 'COMPANY' | 'LLP';
export type EntityStatus = 'ACTIVE' | 'INACTIVE' | 'STRUCK_OFF';
export type CompanyType = 'PRIVATE' | 'PUBLIC' | 'OPC';
export type RoleType = 'DIRECTOR' | 'PARTNER' | 'PROFESSIONAL' | 'AUTHORIZED_REPRESENTATIVE' | 'DELEGATE';
export type AuthoritySource = 'INHERENT' | 'DELEGATED' | 'ASSIGNED';
export type ActionLevel = 'PREPARATORY' | 'CONSEQUENTIAL';
export type ObligationStatus = 'PENDING' | 'OVERDUE' | 'COMPLETED' | 'UPCOMING';
export type TransactionState = 'DRAFT' | 'SUBMITTED' | 'PROCESSING' | 'APPROVED' | 'REJECTED' | 'COMPLETED';
export type VerificationLevel = 'UNVERIFIED' | 'VERIFIED' | 'PROFESSIONAL';

export interface Person {
  id: string;
  name: string;
  email: string;
  phone: string;
  pan: string;
  din?: string;
  verificationLevel: VerificationLevel;
  professionalMembership?: {
    type: 'ICAI' | 'ICSI' | 'ICMAI';
    number: string;
  };
}

export interface Entity {
  id: string;
  type: EntityType;
  companyType?: CompanyType;
  name: string;
  cin?: string;
  llpin?: string;
  status: EntityStatus;
  registeredOffice: {
    address: string;
    city: string;
    state: string;
    pincode: string;
  };
  incorporationDate: string;
  rocCode: string;
  authorizedCapital?: string;
  paidUpCapital?: string;
}

export interface EntityRelationship {
  id: string;
  personId: string;
  entityId: string;
  roleType: RoleType;
  effectiveFrom: string;
  effectiveTo?: string;
  status: 'ACTIVE' | 'RESIGNED' | 'REVOKED';
}

export interface Authority {
  id: string;
  relationshipId: string;
  actions: string[];
  level: ActionLevel;
  source: AuthoritySource;
  validFrom: string;
  validTo?: string;
}

export interface Obligation {
  id: string;
  entityId: string;
  type: string;
  formNumber: string;
  description: string;
  legalBasis: string;
  dueDate: string;
  status: ObligationStatus;
  filingPeriod?: string;
}

export interface Transaction {
  id: string;
  srn?: string;
  entityId: string;
  serviceType: string;
  formNumber: string;
  description: string;
  state: TransactionState;
  createdAt: string;
  updatedAt: string;
  submittedAt?: string;
}

export interface Notification {
  id: string;
  entityId?: string;
  type: 'OBLIGATION_DUE' | 'TRANSACTION_UPDATE' | 'COMPLIANCE_ALERT' | 'SYSTEM';
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
}

export interface EntityContextState {
  activeEntity: Entity | null;
  activeRelationship: EntityRelationship | null;
  activeAuthorities: Authority[];
  availableEntities: Array<{
    entity: Entity;
    relationship: EntityRelationship;
    authorities: Authority[];
  }>;
}
