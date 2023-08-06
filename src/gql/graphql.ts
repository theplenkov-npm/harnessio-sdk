/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** DateTime Scalar */
  DateTime: { input: any; output: any; }
  /** Long Scalar */
  Long: { input: any; output: any; }
  /** This represents either an int or a long or a double. Will be tried to map to one of these in the same order */
  Number: { input: any; output: any; }
};

export type AcrArtifactSource = ArtifactSource & {
  __typename?: 'ACRArtifactSource';
  artifacts?: Maybe<ArtifactConnection>;
  azureCloudProviderId?: Maybe<Scalars['String']['output']>;
  collectionEnabled?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Artifact Source Id */
  id?: Maybe<Scalars['String']['output']>;
  /**  Artifact source display name */
  name?: Maybe<Scalars['String']['output']>;
  registryName?: Maybe<Scalars['String']['output']>;
  repositoryName?: Maybe<Scalars['String']['output']>;
  subscriptionId?: Maybe<Scalars['String']['output']>;
};


export type AcrArtifactSourceArtifactsArgs = {
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type AmiArtifactSource = ArtifactSource & {
  __typename?: 'AMIArtifactSource';
  amiResourceFilters?: Maybe<Array<Maybe<KeyValuePair>>>;
  artifacts?: Maybe<ArtifactConnection>;
  awsCloudProviderId?: Maybe<Scalars['String']['output']>;
  awsTags?: Maybe<Array<Maybe<KeyValuePair>>>;
  collectionEnabled?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Artifact Source Id */
  id?: Maybe<Scalars['String']['output']>;
  /**  Artifact source display name */
  name?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Scalars['String']['output']>;
};


export type AmiArtifactSourceArtifactsArgs = {
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type ApiKey = {
  __typename?: 'APIKey';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type AccountPermissionInput = {
  accountPermissionTypes?: InputMaybe<Array<InputMaybe<AccountPermissionType>>>;
};

export enum AccountPermissionType {
  AdministerCe = 'ADMINISTER_CE',
  AdministerOtherAccountFunctions = 'ADMINISTER_OTHER_ACCOUNT_FUNCTIONS',
  /**  Beta: This permission will be used to deploy during deployment freezes */
  AllowDeploymentsDuringFreeze = 'ALLOW_DEPLOYMENTS_DURING_FREEZE',
  /** This corresponds to MANAGE_APPLICATIONS permission on UI */
  CreateAndDeleteApplication = 'CREATE_AND_DELETE_APPLICATION',
  CreateCustomDashboards = 'CREATE_CUSTOM_DASHBOARDS',
  HideNextgenButton = 'HIDE_NEXTGEN_BUTTON',
  ManageAccountDefaults = 'MANAGE_ACCOUNT_DEFAULTS',
  ManageAlertNotificationRules = 'MANAGE_ALERT_NOTIFICATION_RULES',
  ManageApiKeys = 'MANAGE_API_KEYS',
  ManageApplicationStacks = 'MANAGE_APPLICATION_STACKS',
  ManageAuthenticationSettings = 'MANAGE_AUTHENTICATION_SETTINGS',
  ManageCloudProviders = 'MANAGE_CLOUD_PROVIDERS',
  ManageConfigAsCode = 'MANAGE_CONFIG_AS_CODE',
  ManageConnectors = 'MANAGE_CONNECTORS',
  ManageCustomDashboards = 'MANAGE_CUSTOM_DASHBOARDS',
  ManageDelegates = 'MANAGE_DELEGATES',
  ManageDelegateProfiles = 'MANAGE_DELEGATE_PROFILES',
  ManageDeploymentFreezes = 'MANAGE_DEPLOYMENT_FREEZES',
  ManageIpWhitelist = 'MANAGE_IP_WHITELIST',
  ManagePipelineGovernanceStandards = 'MANAGE_PIPELINE_GOVERNANCE_STANDARDS',
  ManageRestrictedAccess = 'MANAGE_RESTRICTED_ACCESS',
  ManageSecrets = 'MANAGE_SECRETS',
  ManageSecretManagers = 'MANAGE_SECRET_MANAGERS',
  ManageSshAndWinrm = 'MANAGE_SSH_AND_WINRM',
  ManageTags = 'MANAGE_TAGS',
  ManageTemplateLibrary = 'MANAGE_TEMPLATE_LIBRARY',
  ManageUsersAndGroups = 'MANAGE_USERS_AND_GROUPS',
  ManageUserAndUserGroupsAndApiKeys = 'MANAGE_USER_AND_USER_GROUPS_AND_API_KEYS',
  ReadUsersAndGroups = 'READ_USERS_AND_GROUPS',
  ViewAudits = 'VIEW_AUDITS',
  ViewCe = 'VIEW_CE',
  ViewUserAndUserGroupsAndApiKeys = 'VIEW_USER_AND_USER_GROUPS_AND_API_KEYS'
}

export type AccountPermissions = {
  __typename?: 'AccountPermissions';
  accountPermissionTypes?: Maybe<Array<Maybe<AccountPermissionType>>>;
};

export enum Action {
  Approve = 'APPROVE',
  Reject = 'REJECT'
}

export enum Actions {
  /**  Beta: This action will be used to govern workflow abort */
  AbortWorkflow = 'ABORT_WORKFLOW',
  Create = 'CREATE',
  Delete = 'DELETE',
  Execute = 'EXECUTE',
  ExecutePipeline = 'EXECUTE_PIPELINE',
  ExecuteWorkflow = 'EXECUTE_WORKFLOW',
  Read = 'READ',
  /**  Beta: This action will be used to govern workflow rollback */
  RollbackWorkflow = 'ROLLBACK_WORKFLOW',
  Update = 'UPDATE'
}

export type AddAccountPermissionInput = {
  accountPermission?: InputMaybe<AccountPermissionType>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  userGroupId: Scalars['String']['input'];
};

export type AddAccountPermissionPayload = {
  __typename?: 'AddAccountPermissionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  userGroup?: Maybe<UserGroup>;
};

export type AddAppPermissionInput = {
  appPermission?: InputMaybe<ApplicationPermissionInput>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  userGroupId: Scalars['String']['input'];
};

export type AddAppPermissionPayload = {
  __typename?: 'AddAppPermissionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  userGroup?: Maybe<UserGroup>;
};

export type AddDelegateScopeInput = {
  accountId: Scalars['String']['input'];
  application?: InputMaybe<IdFilter>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  environment?: InputMaybe<IdFilter>;
  environmentTypes?: InputMaybe<Array<InputMaybe<EnvironmentType>>>;
  infrastructureDefinition?: InputMaybe<IdFilter>;
  name: Scalars['String']['input'];
  service?: InputMaybe<IdFilter>;
  taskGroup?: InputMaybe<TaskGroup>;
};

export type AddDelegateScopePayload = {
  __typename?: 'AddDelegateScopePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  delegateScope?: Maybe<DelegateScope>;
  message?: Maybe<Scalars['String']['output']>;
};

export type AddUserToUserGroupInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  userGroupId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type AddUserToUserGroupPayload = {
  __typename?: 'AddUserToUserGroupPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  userGroup?: Maybe<UserGroup>;
};

export enum AggregateOperation {
  Average = 'AVERAGE',
  Max = 'MAX',
  Min = 'MIN',
  Sum = 'SUM'
}

/** This structure will serve pie charts / donut charts */
export type AggregatedData = {
  __typename?: 'AggregatedData';
  dataPoints?: Maybe<Array<Maybe<DataPoint>>>;
};

export type AmazonS3ArtifactSource = ArtifactSource & {
  __typename?: 'AmazonS3ArtifactSource';
  artifactPaths?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  artifacts?: Maybe<ArtifactConnection>;
  awsCloudProviderId?: Maybe<Scalars['String']['output']>;
  bucket?: Maybe<Scalars['String']['output']>;
  collectionEnabled?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Artifact Source Id */
  id?: Maybe<Scalars['String']['output']>;
  /**  Artifact source display name */
  name?: Maybe<Scalars['String']['output']>;
};


export type AmazonS3ArtifactSourceArtifactsArgs = {
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type AmazonS3Connector = Connector & {
  __typename?: 'AmazonS3Connector';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type AmazonS3HelmRepoConnector = Connector & {
  __typename?: 'AmazonS3HelmRepoConnector';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type AmazonS3PlatformInput = {
  awsCloudProvider: Scalars['String']['input'];
  bucketName: Scalars['String']['input'];
  region: Scalars['String']['input'];
};

/** If changeSet got triggered by GraphQL mutation(through API key) */
export type ApiKeyChangeSet = ChangeSet & {
  __typename?: 'ApiKeyChangeSet';
  /** API key id */
  apiKeyId?: Maybe<Scalars['String']['output']>;
  /** List of all changeDetails */
  changes?: Maybe<Array<Maybe<ChangeDetails>>>;
  /** Failure message */
  failureStatusMsg?: Maybe<Scalars['String']['output']>;
  /** Unique ID of a changeSet */
  id?: Maybe<Scalars['String']['output']>;
  /** HTTP request that triggered the changeSet */
  request?: Maybe<RequestInfo>;
  /** Timestamp when changeSet was triggered */
  triggeredAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ApmVerificationConnector = Connector & {
  __typename?: 'ApmVerificationConnector';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type AppDynamicsConnector = Connector & {
  __typename?: 'AppDynamicsConnector';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type AppEnvScope = {
  __typename?: 'AppEnvScope';
  application?: Maybe<AppScopeFilter>;
  environment?: Maybe<EnvScopeFilter>;
};

export type AppEnvScopeInput = {
  application: AppScopeFilterInput;
  environment: EnvScopeFilterInput;
};

export type AppFilter = {
  __typename?: 'AppFilter';
  appIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  filterType?: Maybe<FilterAppType>;
};

export type AppFilterInput = {
  appIds?: InputMaybe<Array<Scalars['String']['input']>>;
  filterType?: InputMaybe<FilterAppType>;
};

export enum AppFilterType {
  All = 'ALL',
  Custom = 'CUSTOM'
}

export enum AppPermissionType {
  All = 'ALL',
  Deployment = 'DEPLOYMENT',
  Env = 'ENV',
  Pipeline = 'PIPELINE',
  Provisioner = 'PROVISIONER',
  Service = 'SERVICE',
  Template = 'TEMPLATE',
  Workflow = 'WORKFLOW'
}

export type AppScopeFilter = {
  __typename?: 'AppScopeFilter';
  appId?: Maybe<Scalars['String']['output']>;
  filterType?: Maybe<FilterType>;
};

export type AppScopeFilterInput = {
  appId?: InputMaybe<Scalars['String']['input']>;
  filterType?: InputMaybe<FilterType>;
};

export type Application = {
  __typename?: 'Application';
  areWebHookSecretsMandated?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  disableTriggers?: Maybe<Scalars['Boolean']['output']>;
  environments?: Maybe<EnvironmentConnection>;
  gitSyncConfig?: Maybe<GitSyncConfig>;
  id?: Maybe<Scalars['String']['output']>;
  /**
   *  Beta: When this is set to true, all manual triggers will require API Key authorization.
   *  Doc link: https://docs.harness.io/article/mc2lxsas4c-trigger-a-deployment-using-c-url#option_enforce_api_keys_for_manual_triggers
   */
  isManualTriggerAuthorized?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  pipelines?: Maybe<PipelineConnection>;
  services?: Maybe<ServiceConnection>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  workflows?: Maybe<WorkflowConnection>;
};


export type ApplicationEnvironmentsArgs = {
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type ApplicationPipelinesArgs = {
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type ApplicationServicesArgs = {
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type ApplicationWorkflowsArgs = {
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
};

/**  Set application aggregation criteria */
export type ApplicationAggregation = {
  /**  Aggregate by entity */
  entityAggregation?: InputMaybe<ApplicationEntityAggregation>;
  /**  Aggregate by tag */
  tagAggregation?: InputMaybe<ApplicationTagAggregation>;
};

export type ApplicationConnection = {
  __typename?: 'ApplicationConnection';
  nodes?: Maybe<Array<Maybe<Application>>>;
  pageInfo?: Maybe<PageInfo>;
};

/**
 *  Copyright 2021 Harness Inc. All rights reserved.
 *  Use of this source code is governed by the PolyForm Shield 1.0.0 license
 *  that can be found in the licenses directory at the root of this repository, also available at
 *  https://polyformproject.org/wp-content/uploads/2020/06/PolyForm-Shield-1.0.0.txt.
 *  Possible values for application entity aggregation
 */
export enum ApplicationEntityAggregation {
  Application = 'Application'
}

export type ApplicationFilter = {
  application?: InputMaybe<IdFilter>;
  tag?: InputMaybe<ApplicationTagFilter>;
};

export enum ApplicationFilterType {
  Application = 'Application'
}

export type ApplicationPermission = {
  __typename?: 'ApplicationPermission';
  actions?: Maybe<Array<Maybe<Actions>>>;
  applications?: Maybe<AppFilter>;
  deployments?: Maybe<DeploymentPermissionFilter>;
  environments?: Maybe<EnvPermissionFilter>;
  permissionType?: Maybe<AppPermissionType>;
  pipelines?: Maybe<PipelinePermissionFilter>;
  provisioners?: Maybe<ProvisionerPermissionFilter>;
  services?: Maybe<ServicePermissionFilter>;
  templates?: Maybe<TemplatePermissionFilter>;
  workflows?: Maybe<WorkflowPermissionFilter>;
};

/**
 *  Copyright 2022 Harness Inc. All rights reserved.
 *  Use of this source code is governed by the PolyForm Shield 1.0.0 license
 *  that can be found in the licenses directory at the root of this repository, also available at
 *  https://polyformproject.org/wp-content/uploads/2020/06/PolyForm-Shield-1.0.0.txt.
 */
export type ApplicationPermissionInput = {
  actions: Array<InputMaybe<Actions>>;
  applications: AppFilterInput;
  deployments?: InputMaybe<DeploymentPermissionFilterInput>;
  environments?: InputMaybe<EnvPermissionFilterInput>;
  permissionType: AppPermissionType;
  pipelines?: InputMaybe<PipelinePermissionFilterInput>;
  provisioners?: InputMaybe<ProvisionerPermissionFilterInput>;
  services?: InputMaybe<ServicePermissionFilterInput>;
  templates?: InputMaybe<TemplatePermissionFilterInput>;
  workflows?: InputMaybe<WorkflowPermissionFilterInput>;
};

/**  Set Application Tag aggregation criteria */
export type ApplicationTagAggregation = {
  /**  Aggregate by entity type */
  entityType?: InputMaybe<ApplicationTagType>;
  /**  Aggregate by tag name */
  tagName?: InputMaybe<Scalars['String']['input']>;
};

export type ApplicationTagFilter = {
  entityType?: InputMaybe<ApplicationTagType>;
  tags?: InputMaybe<Array<InputMaybe<TagInput>>>;
};

export enum ApplicationTagType {
  Application = 'APPLICATION'
}

export type ApprovalDetails = {
  approvalId?: Maybe<Scalars['String']['output']>;
  approvalType?: Maybe<ApprovalStateType>;
  stageName?: Maybe<Scalars['String']['output']>;
  startedAt?: Maybe<Scalars['Long']['output']>;
  stepName?: Maybe<Scalars['String']['output']>;
  triggeredBy?: Maybe<EmbeddedUser>;
  willExpireAt?: Maybe<Scalars['Long']['output']>;
};

export type ApprovalDetailsInput = {
  applicationId: Scalars['String']['input'];
  executionId: Scalars['String']['input'];
};

export type ApprovalDetailsPayload = {
  __typename?: 'ApprovalDetailsPayload';
  approvalDetails?: Maybe<Array<Maybe<ApprovalDetails>>>;
};

export type ApprovalStageExecution = PipelineStageExecution & {
  __typename?: 'ApprovalStageExecution';
  /**  Approval method type */
  approvalStepType?: Maybe<ApprovalStepType>;
  /**  Pipeline stage element ID */
  pipelineStageElementId?: Maybe<Scalars['String']['output']>;
  /**  Pipeline stage name */
  pipelineStageName?: Maybe<Scalars['String']['output']>;
  /**  Pipeline step name */
  pipelineStepName?: Maybe<Scalars['String']['output']>;
  /**  Execution status of the stage */
  status?: Maybe<ExecutionStatus>;
};

export enum ApprovalStateType {
  Jira = 'JIRA',
  Servicenow = 'SERVICENOW',
  ShellScript = 'SHELL_SCRIPT',
  UserGroup = 'USER_GROUP'
}

export enum ApprovalStepType {
  Jira = 'JIRA',
  Servicenow = 'SERVICENOW',
  ShellScript = 'SHELL_SCRIPT',
  UserGroup = 'USER_GROUP'
}

export type ApproveOrRejectApprovalsInput = {
  action: Action;
  applicationId: Scalars['String']['input'];
  approvalId: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  comments?: InputMaybe<Scalars['String']['input']>;
  executionId: Scalars['String']['input'];
  userEmail?: InputMaybe<Scalars['String']['input']>;
  variableInputs?: InputMaybe<Array<InputMaybe<UserInput>>>;
};

export type ApproveOrRejectApprovalsInputPayload = {
  __typename?: 'ApproveOrRejectApprovalsInputPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type Artifact = {
  __typename?: 'Artifact';
  artifactSource?: Maybe<ArtifactSource>;
  /**  Build No */
  buildNo?: Maybe<Scalars['String']['output']>;
  /**  Collected At */
  collectedAt?: Maybe<Scalars['DateTime']['output']>;
  /**  Artifact ID */
  id?: Maybe<Scalars['String']['output']>;
};

export type ArtifactCleanUpPayload = {
  __typename?: 'ArtifactCleanUpPayload';
  message?: Maybe<Scalars['String']['output']>;
};

export type ArtifactCleanupInput = {
  /** Unique ID of the artifact stream */
  artifactStreamId: Scalars['String']['input'];
};

export type ArtifactConditionInput = {
  /** Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be Exact match or Regex */
  artifactFilter?: InputMaybe<Scalars['String']['input']>;
  /** Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter will execute the Trigger. */
  artifactSourceId: Scalars['String']['input'];
  /** Regex, True if the Artifact Filter String is provided as regex. */
  regex?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ArtifactConnection = {
  __typename?: 'ArtifactConnection';
  nodes?: Maybe<Array<Maybe<Artifact>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type ArtifactFilter = {
  artifact?: InputMaybe<IdFilter>;
  artifactSource?: InputMaybe<IdFilter>;
  artifactStreamType?: InputMaybe<IdFilter>;
};

export type ArtifactIdInput = {
  /** artifactId */
  artifactId: Scalars['String']['input'];
};

export enum ArtifactInputType {
  ArtifactId = 'ARTIFACT_ID',
  BuildNumber = 'BUILD_NUMBER',
  ParameterizedArtifactSource = 'PARAMETERIZED_ARTIFACT_SOURCE'
}

export type ArtifactSelection = {
  serviceId?: Maybe<Scalars['String']['output']>;
  serviceName?: Maybe<Scalars['String']['output']>;
};

export type ArtifactSelectionInput = {
  /** Artifact Build/Tag to filter artifacts when using LAST_COLLECTED */
  artifactFilter?: InputMaybe<Scalars['String']['input']>;
  /** Artifact Selection type */
  artifactSelectionType: ArtifactSelectionType;
  /**  Artifact source Id to select artifact from. Required for LAST_COLLECTED,FROM_PAYLOAD_SOURCE */
  artifactSourceId?: InputMaybe<Scalars['String']['input']>;
  /** Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE */
  pipelineId?: InputMaybe<Scalars['String']['input']>;
  /**  If Artifact Build/Tag Filter is regex match or not */
  regex?: InputMaybe<Scalars['Boolean']['input']>;
  /** Id of the service providing artifact selection for */
  serviceId: Scalars['String']['input'];
  /** Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW */
  workflowId?: InputMaybe<Scalars['String']['input']>;
};

export enum ArtifactSelectionType {
  FromPayloadSource = 'FROM_PAYLOAD_SOURCE',
  FromTriggeringArtifact = 'FROM_TRIGGERING_ARTIFACT',
  FromTriggeringPipeline = 'FROM_TRIGGERING_PIPELINE',
  LastCollected = 'LAST_COLLECTED',
  LastDeployedPipeline = 'LAST_DEPLOYED_PIPELINE',
  LastDeployedWorkflow = 'LAST_DEPLOYED_WORKFLOW'
}

/**
 *  Copyright 2020 Harness Inc. All rights reserved.
 *  Use of this source code is governed by the PolyForm Shield 1.0.0 license
 *  that can be found in the licenses directory at the root of this repository, also available at
 *  https://polyformproject.org/wp-content/uploads/2020/06/PolyForm-Shield-1.0.0.txt.
 */
export type ArtifactSource = {
  artifacts?: Maybe<ArtifactConnection>;
  collectionEnabled?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Artifact Source Id */
  id?: Maybe<Scalars['String']['output']>;
  /**  Artifact source display name */
  name?: Maybe<Scalars['String']['output']>;
};


/**
 *  Copyright 2020 Harness Inc. All rights reserved.
 *  Use of this source code is governed by the PolyForm Shield 1.0.0 license
 *  that can be found in the licenses directory at the root of this repository, also available at
 *  https://polyformproject.org/wp-content/uploads/2020/06/PolyForm-Shield-1.0.0.txt.
 */
export type ArtifactSourceArtifactsArgs = {
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type ArtifactValueInput = {
  /** artifact Id input if value type is ARTIFACT_ID */
  artifactId?: InputMaybe<ArtifactIdInput>;
  /** Build number input if value type is BUILD_NUMBER */
  buildNumber?: InputMaybe<BuildNumberInput>;
  /** Parameterized artifact source input if value type is PARAMETERIZED_ARTIFACT_SOURCE */
  parameterizedArtifactSource?: InputMaybe<ParameterizedArtifactSourceInput>;
  /** type of the artifactValue: Build number, artifactId or parameterized artifact source */
  valueType: ArtifactInputType;
};

export type ArtifactoryArtifactSource = ArtifactSource & {
  __typename?: 'ArtifactoryArtifactSource';
  artifacts?: Maybe<ArtifactConnection>;
  collectionEnabled?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Artifact Source Id */
  id?: Maybe<Scalars['String']['output']>;
  /**  Artifact source display name */
  name?: Maybe<Scalars['String']['output']>;
  properties?: Maybe<ArtifactoryProps>;
};


export type ArtifactoryArtifactSourceArtifactsArgs = {
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type ArtifactoryConnector = Connector & {
  __typename?: 'ArtifactoryConnector';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  delegateSelectors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** Properties for docker artifact types */
export type ArtifactoryDockerProps = ArtifactoryProps & {
  __typename?: 'ArtifactoryDockerProps';
  artifactoryConnectorId?: Maybe<Scalars['String']['output']>;
  dockerImageName?: Maybe<Scalars['String']['output']>;
  dockerRepositoryServer?: Maybe<Scalars['String']['output']>;
  repository?: Maybe<Scalars['String']['output']>;
};

/** Properties for all non-docker artifact types */
export type ArtifactoryFileProps = ArtifactoryProps & {
  __typename?: 'ArtifactoryFileProps';
  artifactPath?: Maybe<Scalars['String']['output']>;
  artifactoryConnectorId?: Maybe<Scalars['String']['output']>;
  repository?: Maybe<Scalars['String']['output']>;
};

export type ArtifactoryProps = {
  artifactoryConnectorId?: Maybe<Scalars['String']['output']>;
  repository?: Maybe<Scalars['String']['output']>;
};

export type AttachAllScopesToDelegateInput = {
  accountId: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  delegateId: Scalars['String']['input'];
};

export type AttachScopeToDelegateInput = {
  accountId: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  delegateId: Scalars['String']['input'];
  excludeScopes?: InputMaybe<IdFilter>;
  includeScopes?: InputMaybe<IdFilter>;
};

export type AttachScopeToDelegatePayload = {
  __typename?: 'AttachScopeToDelegatePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export type AttachTagInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /**  Unique ID of the harness entity */
  entityId: Scalars['String']['input'];
  /**  Type of entity the tag is to be attached to */
  entityType: TagEntityType;
  /**  Name of the tag */
  name: Scalars['String']['input'];
  /**  Value of the tag */
  value?: InputMaybe<Scalars['String']['input']>;
};

export type AttachTagPayload = {
  __typename?: 'AttachTagPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /**  Attached tag details */
  tagLink?: Maybe<TagLink>;
};

export type AutoScalingGroupInstance = Instance & PhysicalInstance & {
  __typename?: 'AutoScalingGroupInstance';
  application?: Maybe<Application>;
  artifact?: Maybe<Artifact>;
  autoScalingGroupName?: Maybe<Scalars['String']['output']>;
  environment?: Maybe<Environment>;
  hostId?: Maybe<Scalars['String']['output']>;
  hostName?: Maybe<Scalars['String']['output']>;
  hostPublicDns?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  service?: Maybe<Service>;
};

export type AwsCloudProvider = CloudProvider & {
  __typename?: 'AwsCloudProvider';
  ceHealthStatus?: Maybe<CeHealthStatus>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isContinuousEfficiencyEnabled?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

/**
 *  Copyright 2021 Harness Inc. All rights reserved.
 *  Use of this source code is governed by the PolyForm Shield 1.0.0 license
 *  that can be found in the licenses directory at the root of this repository, also available at
 *  https://polyformproject.org/wp-content/uploads/2020/06/PolyForm-Shield-1.0.0.txt.
 */
export type AwsCloudProviderInput = {
  credentialsType?: InputMaybe<AwsCredentialsType>;
  crossAccountAttributes?: InputMaybe<AwsCrossAccountAttributes>;
  defaultRegion?: InputMaybe<Scalars['String']['input']>;
  ec2IamCredentials?: InputMaybe<Ec2IamCredentials>;
  irsaCredentials?: InputMaybe<IrsaCredentials>;
  manualCredentials?: InputMaybe<AwsManualCredentials>;
  name: Scalars['String']['input'];
};

export enum AwsCredentialsType {
  Ec2Iam = 'EC2_IAM',
  Irsa = 'IRSA',
  Manual = 'MANUAL'
}

export type AwsCrossAccountAttributes = {
  assumeCrossAccountRole?: InputMaybe<Scalars['Boolean']['input']>;
  crossAccountRoleArn: Scalars['String']['input'];
  externalId?: InputMaybe<Scalars['String']['input']>;
};

export type AwsManualCredentials = {
  accessKey?: InputMaybe<Scalars['String']['input']>;
  accessKeySecretId?: InputMaybe<Scalars['String']['input']>;
  secretKeySecretId: Scalars['String']['input'];
};

export type AzureArtifactsArtifactSource = ArtifactSource & {
  __typename?: 'AzureArtifactsArtifactSource';
  artifacts?: Maybe<ArtifactConnection>;
  azureConnectorId?: Maybe<Scalars['String']['output']>;
  collectionEnabled?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  feedName?: Maybe<Scalars['String']['output']>;
  /** Artifact Source Id */
  id?: Maybe<Scalars['String']['output']>;
  /**  Artifact source display name */
  name?: Maybe<Scalars['String']['output']>;
  packageName?: Maybe<Scalars['String']['output']>;
  packageType?: Maybe<Scalars['String']['output']>;
  project?: Maybe<Scalars['String']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
};


export type AzureArtifactsArtifactSourceArtifactsArgs = {
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type AzureCloudProvider = CloudProvider & {
  __typename?: 'AzureCloudProvider';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isContinuousEfficiencyEnabled?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type AzureCloudProviderInput = {
  clientId: Scalars['String']['input'];
  keySecretId: Scalars['String']['input'];
  name: Scalars['String']['input'];
  tenantId: Scalars['String']['input'];
};

export type AzureImageDefinitionProps = {
  __typename?: 'AzureImageDefinitionProps';
  /**  image definition name */
  imageDefinitionName?: Maybe<Scalars['String']['output']>;
  /**  image gallery name */
  imageGalleryName?: Maybe<Scalars['String']['output']>;
  /**  Resource group name */
  resourceGroup?: Maybe<Scalars['String']['output']>;
};

export enum AzureImageType {
  ImageGallery = 'IMAGE_GALLERY'
}

export type AzureMachineImageArtifactSource = ArtifactSource & {
  __typename?: 'AzureMachineImageArtifactSource';
  artifacts?: Maybe<ArtifactConnection>;
  /**  Azure Cloud Provider ID */
  azureCloudProviderId?: Maybe<Scalars['String']['output']>;
  collectionEnabled?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Artifact Source Id */
  id?: Maybe<Scalars['String']['output']>;
  /**  Requires resource group, image gallery & image definition names */
  imageDefinition?: Maybe<AzureImageDefinitionProps>;
  /**  Valid azure image type */
  imageType?: Maybe<AzureImageType>;
  /**  Artifact source display name */
  name?: Maybe<Scalars['String']['output']>;
  /**  Azure subscription ID */
  subscriptionId?: Maybe<Scalars['String']['output']>;
};


export type AzureMachineImageArtifactSourceArtifactsArgs = {
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type BambooArtifactSource = ArtifactSource & {
  __typename?: 'BambooArtifactSource';
  artifactPaths?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  artifacts?: Maybe<ArtifactConnection>;
  bambooConnectorId?: Maybe<Scalars['String']['output']>;
  collectionEnabled?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Artifact Source Id */
  id?: Maybe<Scalars['String']['output']>;
  /**  Artifact source display name */
  name?: Maybe<Scalars['String']['output']>;
  planKey?: Maybe<Scalars['String']['output']>;
};


export type BambooArtifactSourceArtifactsArgs = {
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type BambooConnector = Connector & {
  __typename?: 'BambooConnector';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type BillingDataEntry = {
  __typename?: 'BillingDataEntry';
  avgCpuUtilization?: Maybe<Scalars['Number']['output']>;
  avgMemoryUtilization?: Maybe<Scalars['Number']['output']>;
  cluster?: Maybe<Scalars['String']['output']>;
  clusterId?: Maybe<Scalars['String']['output']>;
  clusterType?: Maybe<Scalars['String']['output']>;
  cpuLimit?: Maybe<Scalars['Number']['output']>;
  cpuRequest?: Maybe<Scalars['Number']['output']>;
  ecs?: Maybe<CeEcsEntity>;
  harness?: Maybe<CeHarnessEntity>;
  idleCost?: Maybe<Scalars['Number']['output']>;
  instanceType?: Maybe<Scalars['String']['output']>;
  k8s?: Maybe<CeK8sEntity>;
  labelName?: Maybe<Scalars['String']['output']>;
  labelValue?: Maybe<Scalars['String']['output']>;
  memoryLimit?: Maybe<Scalars['Number']['output']>;
  memoryRequest?: Maybe<Scalars['Number']['output']>;
  region?: Maybe<Scalars['String']['output']>;
  startTime?: Maybe<Scalars['DateTime']['output']>;
  systemCost?: Maybe<Scalars['Number']['output']>;
  tagName?: Maybe<Scalars['String']['output']>;
  tagValue?: Maybe<Scalars['String']['output']>;
  totalCost?: Maybe<Scalars['Number']['output']>;
  unallocatedCost?: Maybe<Scalars['Number']['output']>;
};

export enum BitbucketEvent {
  Any = 'ANY',
  BuildStatusCreated = 'BUILD_STATUS_CREATED',
  BuildStatusUpdated = 'BUILD_STATUS_UPDATED',
  CommitCommentCreated = 'COMMIT_COMMENT_CREATED',
  DiagnosticsPing = 'DIAGNOSTICS_PING',
  Fork = 'FORK',
  IssueAny = 'ISSUE_ANY',
  IssueCommentCreated = 'ISSUE_COMMENT_CREATED',
  IssueCreated = 'ISSUE_CREATED',
  IssueUpdated = 'ISSUE_UPDATED',
  PullRequestAny = 'PULL_REQUEST_ANY',
  PullRequestApprovalRemoved = 'PULL_REQUEST_APPROVAL_REMOVED',
  PullRequestApproved = 'PULL_REQUEST_APPROVED',
  PullRequestCommentCreated = 'PULL_REQUEST_COMMENT_CREATED',
  PullRequestCommentDeleted = 'PULL_REQUEST_COMMENT_DELETED',
  PullRequestCommentUpdated = 'PULL_REQUEST_COMMENT_UPDATED',
  PullRequestCreated = 'PULL_REQUEST_CREATED',
  PullRequestDeclined = 'PULL_REQUEST_DECLINED',
  PullRequestMerged = 'PULL_REQUEST_MERGED',
  PullRequestUpdated = 'PULL_REQUEST_UPDATED',
  Push = 'PUSH',
  RefsChanged = 'REFS_CHANGED',
  Updated = 'UPDATED'
}

export enum BooleanOperator {
  Equals = 'EQUALS',
  NotEquals = 'NOT_EQUALS'
}

export type BugSnagConnector = Connector & {
  __typename?: 'BugSnagConnector';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type BuildNumberInput = {
  /** name of the artifact source to which the specified build number comes from */
  artifactSourceName: Scalars['String']['input'];
  /** build number to deploy */
  buildNumber: Scalars['String']['input'];
};

export type CeClusterHealth = {
  __typename?: 'CEClusterHealth';
  clusterId?: Maybe<Scalars['String']['output']>;
  clusterName?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  lastEventTimestamp?: Maybe<Scalars['Number']['output']>;
  messages?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type CeEnabledFilter = {
  operator?: InputMaybe<EnumOperator>;
  values?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
};

export type CeHealthStatus = {
  __typename?: 'CEHealthStatus';
  clusterHealthStatusList?: Maybe<Array<Maybe<CeClusterHealth>>>;
  isCEConnector?: Maybe<Scalars['Boolean']['output']>;
  isHealthy?: Maybe<Scalars['Boolean']['output']>;
  messages?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export enum CvEntityAggregation {
  Application = 'Application',
  Service = 'Service'
}

export type CvTagAggregation = {
  entityType?: InputMaybe<CvWorkflowTagType>;
  tagName?: InputMaybe<Scalars['String']['input']>;
};

export enum CvVerificationProviders {
  ApmVerification = 'APM_VERIFICATION',
  AppDynamics = 'APP_DYNAMICS',
  BugSnag = 'BUG_SNAG',
  CloudWatch = 'CLOUD_WATCH',
  DataDog = 'DATA_DOG',
  DataDogLog = 'DATA_DOG_LOG',
  DynaTrace = 'DYNA_TRACE',
  Elk = 'ELK',
  LogVerification = 'LOG_VERIFICATION',
  NewRelic = 'NEW_RELIC',
  Prometheus = 'PROMETHEUS',
  Splunk = 'SPLUNK',
  Stackdriver = 'STACKDRIVER',
  StackdriverLog = 'STACKDRIVER_LOG',
  Sumo = 'SUMO'
}

export type CvWorkflowTagFilter = {
  entityType?: InputMaybe<CvWorkflowTagType>;
  tags?: InputMaybe<Array<InputMaybe<TagInput>>>;
};

export enum CvWorkflowTagType {
  Application = 'APPLICATION',
  Environment = 'ENVIRONMENT',
  Service = 'SERVICE'
}

export type Cause = ExecutedAlongPipeline | ExecutedByApiKey | ExecutedByTrigger | ExecutedByUser;

export type ChangeContent = {
  __typename?: 'ChangeContent';
  /** Unique ID of a changeSet */
  changeSetId?: Maybe<Scalars['String']['output']>;
  /** New YAML content after the changeSet got triggered */
  newYaml?: Maybe<Scalars['String']['output']>;
  /** New YAML path after the changeSet got triggered */
  newYamlPath?: Maybe<Scalars['String']['output']>;
  /** Old YAML content before the changeSet got triggered */
  oldYaml?: Maybe<Scalars['String']['output']>;
  /** Old YAML path before the changeSet got triggered */
  oldYamlPath?: Maybe<Scalars['String']['output']>;
  /** Unique ID of a resource, e.g.Application, Environment */
  resourceId?: Maybe<Scalars['String']['output']>;
};

export type ChangeContentConnection = {
  __typename?: 'ChangeContentConnection';
  nodes?: Maybe<Array<Maybe<ChangeContent>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type ChangeContentFilter = {
  /** Unique ID of a changeSet */
  changeSetId: Scalars['String']['input'];
  /** Unique ID of dependent or child resource, e.g.Environment, Services, etc. */
  resourceId?: InputMaybe<Scalars['String']['input']>;
};

export type ChangeContentList = {
  __typename?: 'ChangeContentList';
  data?: Maybe<Array<Maybe<ChangeContent>>>;
};

/**
 * Trigger of changeSet may have several changes in child or dependent resources,
 * each of them is captured as changeDetails instance.
 */
export type ChangeDetails = {
  __typename?: 'ChangeDetails';
  /** Application ID */
  appId?: Maybe<Scalars['String']['output']>;
  /** Application name */
  appName?: Maybe<Scalars['String']['output']>;
  /** Timestamp of changeDetails creation */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Indicator of successful processing of the event that caused this changeSet */
  failure?: Maybe<Scalars['Boolean']['output']>;
  /** Create / Update / Delete operation */
  operationType?: Maybe<Scalars['String']['output']>;
  /** Unique ID of parent resource, e.g., Application */
  parentResourceId?: Maybe<Scalars['String']['output']>;
  /** Parent resource name */
  parentResourceName?: Maybe<Scalars['String']['output']>;
  /** Create / Update / Delete operation on parent resource */
  parentResourceOperation?: Maybe<Scalars['String']['output']>;
  /** Parent resource type */
  parentResourceType?: Maybe<Scalars['String']['output']>;
  /** Unique ID of dependent or child resource, e.g., Environment, Services, etc. */
  resourceId?: Maybe<Scalars['String']['output']>;
  /** Resource name */
  resourceName?: Maybe<Scalars['String']['output']>;
  /** Resource type */
  resourceType?: Maybe<Scalars['String']['output']>;
};

export type ChangeSet = {
  /** List of all changeDetails */
  changes?: Maybe<Array<Maybe<ChangeDetails>>>;
  /** Failure message */
  failureStatusMsg?: Maybe<Scalars['String']['output']>;
  /** Unique ID of a changeSet */
  id?: Maybe<Scalars['String']['output']>;
  /** HTTP request that triggered the changeSet */
  request?: Maybe<RequestInfo>;
  /** Timestamp when changeSet was triggered */
  triggeredAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ChangeSetConnection = {
  __typename?: 'ChangeSetConnection';
  nodes?: Maybe<Array<Maybe<ChangeSet>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type ChangeSetFilter = {
  time?: InputMaybe<TimeRangeFilter>;
};

export type CloudProvider = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isContinuousEfficiencyEnabled?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

/**  Set cloud provider aggregation criteria */
export type CloudProviderAggregation = {
  /**  Aggregate by Cloud Provider type */
  typeAggregation?: InputMaybe<CloudProviderTypeAggregation>;
};

export type CloudProviderConnection = {
  __typename?: 'CloudProviderConnection';
  nodes?: Maybe<Array<Maybe<CloudProvider>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type CloudProviderFilter = {
  cloudProvider?: InputMaybe<IdFilter>;
  cloudProviderType?: InputMaybe<CloudProviderTypeFilter>;
  createdAt?: InputMaybe<TimeFilter>;
  isCEEnabled?: InputMaybe<CeEnabledFilter>;
};

export enum CloudProviderType {
  Aws = 'AWS',
  Azure = 'AZURE',
  Gcp = 'GCP',
  KubernetesCluster = 'KUBERNETES_CLUSTER',
  Pcf = 'PCF',
  PhysicalDataCenter = 'PHYSICAL_DATA_CENTER',
  Rancher = 'RANCHER',
  SpotInst = 'SPOT_INST'
}

/**
 *  Copyright 2021 Harness Inc. All rights reserved.
 *  Use of this source code is governed by the PolyForm Shield 1.0.0 license
 *  that can be found in the licenses directory at the root of this repository, also available at
 *  https://polyformproject.org/wp-content/uploads/2020/06/PolyForm-Shield-1.0.0.txt.
 *  Possible type values for Cloud Provider aggregation
 */
export enum CloudProviderTypeAggregation {
  Type = 'Type'
}

export type CloudProviderTypeFilter = {
  operator?: InputMaybe<EnumOperator>;
  values?: InputMaybe<Array<InputMaybe<CloudProviderType>>>;
};

export enum ClusterDetailsType {
  InheritClusterDetails = 'INHERIT_CLUSTER_DETAILS',
  ManualClusterDetails = 'MANUAL_CLUSTER_DETAILS'
}

export type ClusterError = {
  __typename?: 'ClusterError';
  clusterErrors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  clusterId?: Maybe<Scalars['String']['output']>;
};

export type CodeDeployInstance = Instance & PhysicalInstance & {
  __typename?: 'CodeDeployInstance';
  application?: Maybe<Application>;
  artifact?: Maybe<Artifact>;
  deploymentId?: Maybe<Scalars['String']['output']>;
  environment?: Maybe<Environment>;
  hostId?: Maybe<Scalars['String']['output']>;
  hostName?: Maybe<Scalars['String']['output']>;
  hostPublicDns?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  service?: Maybe<Service>;
};

export enum ConditionType {
  OnNewArtifact = 'ON_NEW_ARTIFACT',
  OnNewManifest = 'ON_NEW_MANIFEST',
  OnPipelineCompletion = 'ON_PIPELINE_COMPLETION',
  OnSchedule = 'ON_SCHEDULE',
  OnWebhook = 'ON_WEBHOOK'
}

export type Connector = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type ConnectorAggregation = {
  /**  Aggregate by Connector type */
  typeAggregation?: InputMaybe<ConnectorTypeAggregation>;
};

export type ConnectorConnection = {
  __typename?: 'ConnectorConnection';
  nodes?: Maybe<Array<Maybe<Connector>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type ConnectorFilter = {
  connector?: InputMaybe<IdFilter>;
  connectorType?: InputMaybe<ConnectorTypeFilter>;
  createdAt?: InputMaybe<TimeFilter>;
};

export enum ConnectorType {
  AmazonS3 = 'AMAZON_S3',
  AmazonS3HelmRepo = 'AMAZON_S3_HELM_REPO',
  ApmVerification = 'APM_VERIFICATION',
  AppDynamics = 'APP_DYNAMICS',
  Artifactory = 'ARTIFACTORY',
  Bamboo = 'BAMBOO',
  BugSnag = 'BUG_SNAG',
  DataDog = 'DATA_DOG',
  Docker = 'DOCKER',
  DynaTrace = 'DYNA_TRACE',
  Ecr = 'ECR',
  Elb = 'ELB',
  Elk = 'ELK',
  Gcr = 'GCR',
  Gcs = 'GCS',
  GcsHelmRepo = 'GCS_HELM_REPO',
  Git = 'GIT',
  HttpHelmRepo = 'HTTP_HELM_REPO',
  Jenkins = 'JENKINS',
  Jira = 'JIRA',
  Logz = 'LOGZ',
  NewRelic = 'NEW_RELIC',
  Nexus = 'NEXUS',
  OciHelmRepo = 'OCI_HELM_REPO',
  Prometheus = 'PROMETHEUS',
  Servicenow = 'SERVICENOW',
  Sftp = 'SFTP',
  Slack = 'SLACK',
  Smb = 'SMB',
  Smtp = 'SMTP',
  Splunk = 'SPLUNK',
  Sumo = 'SUMO'
}

/**
 *  Copyright 2021 Harness Inc. All rights reserved.
 *  Use of this source code is governed by the PolyForm Shield 1.0.0 license
 *  that can be found in the licenses directory at the root of this repository, also available at
 *  https://polyformproject.org/wp-content/uploads/2020/06/PolyForm-Shield-1.0.0.txt.
 *  Possible type values for Connector type aggregation
 */
export enum ConnectorTypeAggregation {
  Type = 'Type'
}

export type ConnectorTypeFilter = {
  operator?: InputMaybe<EnumOperator>;
  values?: InputMaybe<Array<InputMaybe<ConnectorType>>>;
};

export type ContainerRecommendation = {
  __typename?: 'ContainerRecommendation';
  /** @deprecated Will be removed in few days. */
  burstable?: Maybe<ResourceRequirements>;
  containerName?: Maybe<Scalars['String']['output']>;
  current?: Maybe<ResourceRequirements>;
  /** @deprecated Will be removed in few days. */
  guaranteed?: Maybe<ResourceRequirements>;
  numDays?: Maybe<Scalars['Int']['output']>;
  p50?: Maybe<ResourceRequirements>;
  p80?: Maybe<ResourceRequirements>;
  p90?: Maybe<ResourceRequirements>;
  p95?: Maybe<ResourceRequirements>;
  p99?: Maybe<ResourceRequirements>;
  recommended?: Maybe<ResourceRequirements>;
  totalSamplesCount?: Maybe<Scalars['Int']['output']>;
};

export type ContinueExecutionPayload = {
  __typename?: 'ContinueExecutionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export enum CountAggregateOperation {
  Sum = 'SUM'
}

export type CreateApiKeyInput = {
  accountId: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  userGroupIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CreateApiKeyPayload = {
  __typename?: 'CreateApiKeyPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type CreateApplicationInput = {
  /**  Beta: When this WebhookSecrets flag is set to true for an application, webhook secrets are mandated for github triggers. */
  areWebHookSecretsMandated?: InputMaybe<Scalars['Boolean']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  disableTriggers?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   *  Beta: When this is set to true, all manual triggers will require API Key authorization.
   *  Doc link: https://docs.harness.io/article/mc2lxsas4c-trigger-a-deployment-using-c-url#option_enforce_api_keys_for_manual_triggers
   */
  isManualTriggerAuthorized?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
};

export type CreateApplicationPayload = {
  __typename?: 'CreateApplicationPayload';
  application?: Maybe<Application>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type CreateCloudProviderInput = {
  awsCloudProvider?: InputMaybe<AwsCloudProviderInput>;
  azureCloudProvider?: InputMaybe<AzureCloudProviderInput>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  cloudProviderType: CloudProviderType;
  gcpCloudProvider?: InputMaybe<GcpCloudProviderInput>;
  k8sCloudProvider?: InputMaybe<K8sCloudProviderInput>;
  pcfCloudProvider?: InputMaybe<PcfCloudProviderInput>;
  physicalDataCenterCloudProvider?: InputMaybe<PhysicalDataCenterCloudProviderInput>;
  rancherCloudProvider?: InputMaybe<RancherCloudProviderInput>;
  spotInstCloudProvider?: InputMaybe<SpotInstCloudProviderInput>;
};

export type CreateCloudProviderPayload = {
  __typename?: 'CreateCloudProviderPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  cloudProvider?: Maybe<CloudProvider>;
};

export type CreateConnectorInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  connectorType: ConnectorType;
  dockerConnector?: InputMaybe<DockerConnectorInput>;
  gitConnector?: InputMaybe<GitConnectorInput>;
  helmConnector?: InputMaybe<HelmConnectorInput>;
  nexusConnector?: InputMaybe<NexusConnectorInput>;
};

export type CreateConnectorPayload = {
  __typename?: 'CreateConnectorPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  connector?: Maybe<Connector>;
};

export type CreateDeploymentFreezeWindowInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  excludeFreezeWindows?: InputMaybe<Array<InputMaybe<FreezeWindowInput>>>;
  /** Select appropriate Application(s), Environment(s), and Service(s) as applicable to the deployment freeze window. */
  freezeWindows: Array<InputMaybe<FreezeWindowInput>>;
  name: Scalars['String']['input'];
  notifyTo?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Input the time-based entities for the deployment freeze window. */
  setup: SetupInput;
  userGroupSelection?: InputMaybe<UserGroupFilterInput>;
};

export type CreateDeploymentFreezeWindowPayload = {
  __typename?: 'CreateDeploymentFreezeWindowPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deploymentFreezeWindow?: Maybe<DeploymentFreezeWindow>;
};

export type CreateEventsConfigInput = {
  appId: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  delegateSelectors?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  enabled: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  /**  The Event Rule containing the configuration of Pipelines and Events */
  rule: EventRuleInput;
  /** Details of the HTTP endpoint along with any custom headers */
  webhookConfig: WebhookConfigInput;
};

export type CreateEventsConfigPayload = {
  __typename?: 'CreateEventsConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eventsConfig?: Maybe<EventsConfig>;
};

export type CreateSecretInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  encryptedFile?: InputMaybe<EncryptedFileInput>;
  encryptedText?: InputMaybe<EncryptedTextInput>;
  secretType: SecretType;
  sshCredential?: InputMaybe<SshCredentialInput>;
  winRMCredential?: InputMaybe<WinRmCredentialInput>;
};

export type CreateSecretManagerInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  customSecretManagerInput?: InputMaybe<CustomSecretManagerInput>;
  hashicorpVaultConfigInput?: InputMaybe<HashicorpVaultSecretManagerInput>;
  secretManagerType: SecretManagerType;
};

export type CreateSecretPayload = {
  __typename?: 'CreateSecretPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  secret?: Maybe<Secret>;
};

export type CreateTriggerInput = {
  /** Action performed on trigger execute: Workflow/Pipeline execution */
  action: TriggerActionInput;
  /** Application Id In which Trigger will be created */
  applicationId: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** Condition of which Trigger will execute */
  condition: TriggerConditionInput;
  /** Description of the Trigger */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Name of the Trigger */
  name: Scalars['String']['input'];
};

export type CreateUserGroupInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  notificationSettings?: InputMaybe<NotificationSettingsInput>;
  permissions?: InputMaybe<Permissions>;
  ssoSetting?: InputMaybe<SsoSettingInput>;
  userIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CreateUserGroupPayload = {
  __typename?: 'CreateUserGroupPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  userGroup?: Maybe<UserGroup>;
};

export type CreateUserInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  externalUserId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  userGroupIds?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type CreateUserPayload = {
  __typename?: 'CreateUserPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type CustomArtifactSource = ArtifactSource & {
  __typename?: 'CustomArtifactSource';
  artifacts?: Maybe<ArtifactConnection>;
  collectionEnabled?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Artifact Source Id */
  id?: Maybe<Scalars['String']['output']>;
  /**  Artifact source display name */
  name?: Maybe<Scalars['String']['output']>;
};


export type CustomArtifactSourceArtifactsArgs = {
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type CustomCommitDetails = {
  __typename?: 'CustomCommitDetails';
  authorEmailId?: Maybe<Scalars['String']['output']>;
  authorName?: Maybe<Scalars['String']['output']>;
  commitMessage?: Maybe<Scalars['String']['output']>;
};

export type CustomCommitDetailsInput = {
  authorEmailId?: InputMaybe<Scalars['String']['input']>;
  authorName?: InputMaybe<Scalars['String']['input']>;
  commitMessage?: InputMaybe<Scalars['String']['input']>;
};

export type CustomSecretManagerConfig = {
  __typename?: 'CustomSecretManagerConfig';
  commandPath?: Maybe<Scalars['String']['output']>;
  connectorId?: Maybe<Scalars['String']['output']>;
  delegateSelectors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  executeOnDelegate?: Maybe<Scalars['Boolean']['output']>;
  host?: Maybe<Scalars['String']['output']>;
  isConnectorTemplatized?: Maybe<Scalars['Boolean']['output']>;
  isDefault?: Maybe<Scalars['Boolean']['output']>;
  templateId?: Maybe<Scalars['String']['output']>;
  testVariables?: Maybe<Array<Maybe<EncryptedDataParamsOutput>>>;
};

export type CustomSecretManagerInput = {
  commandPath?: InputMaybe<Scalars['String']['input']>;
  connectorId?: InputMaybe<Scalars['String']['input']>;
  delegateSelectors?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  executeOnDelegate?: InputMaybe<Scalars['Boolean']['input']>;
  host?: InputMaybe<Scalars['String']['input']>;
  isConnectorTemplatized?: InputMaybe<Scalars['Boolean']['input']>;
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  templateId?: InputMaybe<Scalars['String']['input']>;
  testVariables?: InputMaybe<Array<InputMaybe<EncryptedDataParams>>>;
  usageScope?: InputMaybe<UsageScopeInput>;
};

export type Data = AggregatedData | SinglePointData | StackedData | StackedTimeSeriesData | TimeSeriesData;

export type DataDogConnector = Connector & {
  __typename?: 'DataDogConnector';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/**
 *  Copyright 2021 Harness Inc. All rights reserved.
 *  Use of this source code is governed by the PolyForm Shield 1.0.0 license
 *  that can be found in the licenses directory at the root of this repository, also available at
 *  https://polyformproject.org/wp-content/uploads/2020/06/PolyForm-Shield-1.0.0.txt.
 */
export enum DataFetcherEnum {
  AddAccountPermission = 'addAccountPermission',
  AddAppPermission = 'addAppPermission',
  AddDelegateScope = 'addDelegateScope',
  AddUserToUserGroup = 'addUserToUserGroup',
  Application = 'application',
  ApplicationConnection = 'applicationConnection',
  ApplicationGitSyncConfig = 'applicationGitSyncConfig',
  ApplicationStats = 'applicationStats',
  ApprovalDetails = 'approvalDetails',
  ApproveOrRejectApprovals = 'approveOrRejectApprovals',
  Artifact = 'artifact',
  ArtifactCleanup = 'artifactCleanup',
  ArtifactConnection = 'artifactConnection',
  ArtifactSource = 'artifactSource',
  AttachAllScopesToDelegate = 'attachAllScopesToDelegate',
  AttachScopeToDelegate = 'attachScopeToDelegate',
  AttachTag = 'attachTag',
  BillingForecastCost = 'billingForecastCost',
  BillingJobProcessed = 'billingJobProcessed',
  BillingStatsEntity = 'billingStatsEntity',
  BillingStatsFilterValues = 'billingStatsFilterValues',
  BillingStatsTimeSeries = 'billingStatsTimeSeries',
  BillingTrendStats = 'billingTrendStats',
  Budget = 'budget',
  BudgetList = 'budgetList',
  BudgetNotifications = 'budgetNotifications',
  BudgetTrendStats = 'budgetTrendStats',
  CeActivePodCount = 'ceActivePodCount',
  CeClusterBillingData = 'ceClusterBillingData',
  CeConnector = 'ceConnector',
  CeHealthStatus = 'ceHealthStatus',
  ChangeContentConnection = 'changeContentConnection',
  ChangeSetConnection = 'changeSetConnection',
  CloudAnomalies = 'cloudAnomalies',
  CloudEntityStats = 'cloudEntityStats',
  CloudFilterValues = 'cloudFilterValues',
  CloudOverview = 'cloudOverview',
  CloudProvider = 'cloudProvider',
  CloudProviderConnection = 'cloudProviderConnection',
  CloudProviderStats = 'cloudProviderStats',
  CloudTimeSeriesStats = 'cloudTimeSeriesStats',
  CloudTrendStats = 'cloudTrendStats',
  Cluster = 'cluster',
  ClusterConnection = 'clusterConnection',
  Connector = 'connector',
  ConnectorConnection = 'connectorConnection',
  ConnectorStats = 'connectorStats',
  CreateApiKey = 'createApiKey',
  CreateApplication = 'createApplication',
  CreateCloudProvider = 'createCloudProvider',
  CreateConnector = 'createConnector',
  CreateDeploymentFreezeWindow = 'createDeploymentFreezeWindow',
  CreateEventsConfig = 'createEventsConfig',
  CreateSecret = 'createSecret',
  CreateSecretManager = 'createSecretManager',
  CreateTrigger = 'createTrigger',
  CreateUser = 'createUser',
  CreateUserGroup = 'createUserGroup',
  DelegateApproval = 'delegateApproval',
  DelegateList = 'delegateList',
  DelegateScopeList = 'delegateScopeList',
  DeleteApiKey = 'deleteApiKey',
  DeleteApplication = 'deleteApplication',
  DeleteCloudProvider = 'deleteCloudProvider',
  DeleteConnector = 'deleteConnector',
  DeleteDelegate = 'deleteDelegate',
  DeleteDeploymentFreezeWindow = 'deleteDeploymentFreezeWindow',
  DeleteEventsConfig = 'deleteEventsConfig',
  DeleteSecret = 'deleteSecret',
  DeleteSecretManager = 'deleteSecretManager',
  DeleteTrigger = 'deleteTrigger',
  DeleteUser = 'deleteUser',
  DeleteUserGroup = 'deleteUserGroup',
  DeploymentFreezeWindow = 'deploymentFreezeWindow',
  DeploymentFreezeWindowConnection = 'deploymentFreezeWindowConnection',
  DeploymentStats = 'deploymentStats',
  DetachTag = 'detachTag',
  EfficiencyStats = 'efficiencyStats',
  EksClusterStats = 'eksClusterStats',
  Environment = 'environment',
  EnvironmentConnection = 'environmentConnection',
  EnvironmentStats = 'environmentStats',
  EventsConfig = 'eventsConfig',
  EventsConfigByName = 'eventsConfigByName',
  EventsConfigConnection = 'eventsConfigConnection',
  EventsStats = 'eventsStats',
  Execution = 'execution',
  ExecutionConnection = 'executionConnection',
  ExecutionInputs = 'executionInputs',
  ExportExecutions = 'exportExecutions',
  FrozenExecutionConnection = 'frozenExecutionConnection',
  GcpBillingAccount = 'gcpBillingAccount',
  GcpBillingEntityStats = 'gcpBillingEntityStats',
  GcpBillingTimeSeriesStats = 'gcpBillingTimeSeriesStats',
  GcpBillingTrendStats = 'gcpBillingTrendStats',
  GcpOrganization = 'gcpOrganization',
  GcpServiceAccount = 'gcpServiceAccount',
  GetSecret = 'getSecret',
  IdleCostTrendStats = 'idleCostTrendStats',
  InfraAccountConnection = 'infraAccountConnection',
  InfrastructureDefinition = 'infrastructureDefinition',
  InfrastructureDefinitionConnection = 'infrastructureDefinitionConnection',
  InstanceConnection = 'instanceConnection',
  InstanceCount = 'instanceCount',
  InstanceStats = 'instanceStats',
  K8sAnomalies = 'k8sAnomalies',
  K8sEventYamlDiff = 'k8sEventYamlDiff',
  K8sLabelConnection = 'k8sLabelConnection',
  K8sWorkloadHistogram = 'k8sWorkloadHistogram',
  K8sWorkloadRecommendations = 'k8sWorkloadRecommendations',
  LinkedAccountStats = 'linkedAccountStats',
  NodeAndPodDetails = 'nodeAndPodDetails',
  OutcomeConnection = 'outcomeConnection',
  OverviewAnomalies = 'overviewAnomalies',
  OverviewPageStats = 'overviewPageStats',
  Pipeline = 'pipeline',
  PipelineConnection = 'pipelineConnection',
  PipelineResumeRuntime = 'pipelineResumeRuntime',
  PipelineStats = 'pipelineStats',
  PipelineVariableConnection = 'pipelineVariableConnection',
  RemoveApplicationGitSyncConfig = 'removeApplicationGitSyncConfig',
  RemoveUserFromUserGroup = 'removeUserFromUserGroup',
  ResumeExecution = 'resumeExecution',
  RuntimeExecutionInputsToResumePipeline = 'runtimeExecutionInputsToResumePipeline',
  SecretManager = 'secretManager',
  SecretManagers = 'secretManagers',
  Service = 'service',
  ServiceArtifactSourceConnection = 'serviceArtifactSourceConnection',
  ServiceConnection = 'serviceConnection',
  ServiceStats = 'serviceStats',
  SetArtifactCollectionEnabled = 'setArtifactCollectionEnabled',
  SsoProvider = 'ssoProvider',
  SsoProviderConnection = 'ssoProviderConnection',
  StartExecution = 'startExecution',
  SunburstChartStats = 'sunburstChartStats',
  Tag = 'tag',
  TagConnection = 'tagConnection',
  TagUsageConnection = 'tagUsageConnection',
  Tags = 'tags',
  TagsInUseConnection = 'tagsInUseConnection',
  TemplateList = 'templateList',
  ToggleDeploymentFreezeWindow = 'toggleDeploymentFreezeWindow',
  Trigger = 'trigger',
  TriggerConnection = 'triggerConnection',
  TriggerStats = 'triggerStats',
  UpdateAnomaly = 'updateAnomaly',
  UpdateApiKey = 'updateApiKey',
  UpdateApplication = 'updateApplication',
  UpdateApplicationGitSyncConfig = 'updateApplicationGitSyncConfig',
  UpdateApplicationGitSyncConfigStatus = 'updateApplicationGitSyncConfigStatus',
  UpdateCloudProvider = 'updateCloudProvider',
  UpdateConnector = 'updateConnector',
  UpdateDeploymentFreezeWindow = 'updateDeploymentFreezeWindow',
  UpdateEventsConfig = 'updateEventsConfig',
  UpdateSecret = 'updateSecret',
  UpdateSecretManager = 'updateSecretManager',
  UpdateServiceMetadata = 'updateServiceMetadata',
  UpdateTrigger = 'updateTrigger',
  UpdateUser = 'updateUser',
  UpdateUserGroup = 'updateUserGroup',
  UpdateUserGroupPermissions = 'updateUserGroupPermissions',
  User = 'user',
  UserConnection = 'userConnection',
  UserGroup = 'userGroup',
  UserGroupConnection = 'userGroupConnection',
  VerificationResultConnection = 'verificationResultConnection',
  VerificationStats = 'verificationStats',
  ViewEntityStats = 'viewEntityStats',
  ViewFields = 'viewFields',
  ViewFilterStats = 'viewFilterStats',
  ViewOverviewStats = 'viewOverviewStats',
  ViewTimeSeriesStats = 'viewTimeSeriesStats',
  ViewTrendStats = 'viewTrendStats',
  Views = 'views',
  Workflow = 'workflow',
  WorkflowConnection = 'workflowConnection',
  WorkflowStats = 'workflowStats',
  WorkflowVariableConnection = 'workflowVariableConnection'
}

export type DataPoint = {
  __typename?: 'DataPoint';
  key?: Maybe<Reference>;
  /**  Key refers to the label */
  value?: Maybe<Scalars['Number']['output']>;
};

export enum DataType {
  Number = 'NUMBER',
  String = 'STRING'
}

export type Delegate = {
  __typename?: 'Delegate';
  accountId?: Maybe<Scalars['String']['output']>;
  connections?: Maybe<Array<Maybe<DelegateConnection>>>;
  delegateName?: Maybe<Scalars['String']['output']>;
  delegateProfileId?: Maybe<Scalars['String']['output']>;
  delegateType?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  disconnected?: Maybe<Scalars['Boolean']['output']>;
  excludeScopes?: Maybe<Array<Maybe<DelegateScope>>>;
  hostName?: Maybe<Scalars['String']['output']>;
  includeScopes?: Maybe<Array<Maybe<DelegateScope>>>;
  ip?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use lastHeartbeat. */
  lastHeartBeat?: Maybe<Scalars['Long']['output']>;
  lastHeartbeat?: Maybe<Scalars['DateTime']['output']>;
  polllingModeEnabled?: Maybe<Scalars['Boolean']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  supportedTasks?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  uuid?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export enum DelegateApproval {
  Activate = 'ACTIVATE',
  Reject = 'REJECT'
}

export type DelegateApproveRejectInput = {
  accountId: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  delegateApproval: DelegateApproval;
  delegateId: Scalars['String']['input'];
};

export type DelegateApproveRejectPayload = {
  __typename?: 'DelegateApproveRejectPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  delegate?: Maybe<Delegate>;
};

export type DelegateConnection = {
  __typename?: 'DelegateConnection';
  disconnected?: Maybe<Scalars['Boolean']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export type DelegateFilter = {
  accountId: Scalars['String']['input'];
  delegateName?: InputMaybe<Scalars['String']['input']>;
  delegateStatus?: InputMaybe<DelegateStatus>;
  delegateType?: InputMaybe<DelegateType>;
};

export type DelegateList = {
  __typename?: 'DelegateList';
  nodes?: Maybe<Array<Maybe<Delegate>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type DelegateScope = {
  __typename?: 'DelegateScope';
  applications?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  environmentTypes?: Maybe<Array<Maybe<EnvironmentType>>>;
  environments?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  infrastructureDefinitions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  name?: Maybe<Scalars['String']['output']>;
  services?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  taskTypes?: Maybe<Array<Maybe<TaskGroup>>>;
  /** @deprecated Use scope name. */
  uuid?: Maybe<Scalars['String']['output']>;
};

export type DelegateScopeFilter = {
  accountId: Scalars['String']['input'];
  scopeName?: InputMaybe<Scalars['String']['input']>;
};

export type DelegateScopeList = {
  __typename?: 'DelegateScopeList';
  nodes?: Maybe<Array<Maybe<DelegateScope>>>;
  pageInfo?: Maybe<PageInfo>;
};

export enum DelegateStatus {
  Deleted = 'DELETED',
  Enabled = 'ENABLED',
  WaitingForApproval = 'WAITING_FOR_APPROVAL'
}

export enum DelegateType {
  Docker = 'DOCKER',
  Ecs = 'ECS',
  HelmDelegate = 'HELM_DELEGATE',
  Kubernetes = 'KUBERNETES',
  ShellScript = 'SHELL_SCRIPT'
}

export type DeleteApiKeyInput = {
  accountId: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  uuid: Scalars['String']['input'];
};

export type DeleteApiKeyPayload = {
  __typename?: 'DeleteApiKeyPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type DeleteApplicationInput = {
  applicationId: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type DeleteApplicationPayload = {
  __typename?: 'DeleteApplicationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type DeleteCloudProviderInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  cloudProviderId: Scalars['String']['input'];
};

export type DeleteCloudProviderPayload = {
  __typename?: 'DeleteCloudProviderPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type DeleteConnectorInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  connectorId: Scalars['String']['input'];
};

export type DeleteConnectorPayload = {
  __typename?: 'DeleteConnectorPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type DeleteDelegateInput = {
  accountId: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  delegateId: Scalars['String']['input'];
};

export type DeleteDelegatePayload = {
  __typename?: 'DeleteDelegatePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export type DeleteDeploymentFreezeWindowInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** Deployment freeze window id. */
  id: Scalars['String']['input'];
};

export type DeleteDeploymentFreezeWindowPayload = {
  __typename?: 'DeleteDeploymentFreezeWindowPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type DeleteEventsConfigInput = {
  appId: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  eventsConfigId: Scalars['String']['input'];
};

export type DeleteEventsConfigPayload = {
  __typename?: 'DeleteEventsConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type DeleteSecretInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  secretId: Scalars['String']['input'];
  secretType: SecretType;
};

export type DeleteSecretManagerInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  secretManagerId: Scalars['String']['input'];
};

export type DeleteSecretManagerPayload = {
  __typename?: 'DeleteSecretManagerPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type DeleteSecretPayload = {
  __typename?: 'DeleteSecretPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type DeleteTriggerInput = {
  /** Application Id */
  applicationId: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** Id of Trigger to be deleted */
  triggerId: Scalars['String']['input'];
};

export type DeleteTriggerPayload = {
  __typename?: 'DeleteTriggerPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type DeleteUserGroupInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  userGroupId: Scalars['String']['input'];
};

export type DeleteUserGroupPayload = {
  __typename?: 'DeleteUserGroupPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type DeleteUserInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
};

export type DeleteUserPayload = {
  __typename?: 'DeleteUserPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

/**  Set Deployment aggregation criteria */
export type DeploymentAggregation = {
  /**  Aggregate by entity */
  entityAggregation?: InputMaybe<DeploymentEntityAggregation>;
  /**  Aggregate by tag */
  tagAggregation?: InputMaybe<DeploymentTagAggregation>;
  /**  Aggregate by time aggregators */
  timeAggregation?: InputMaybe<TimeSeriesAggregation>;
};

/**  Set Deployment aggregation function */
export type DeploymentAggregationFunction = {
  /**  Set count */
  count?: InputMaybe<CountAggregateOperation>;
  /**  Set duration */
  duration?: InputMaybe<DurationAggregateOperation>;
  /**  Set instances deployed */
  instancesDeployed?: InputMaybe<CountAggregateOperation>;
  /**  Set rollback count */
  rollbackCount?: InputMaybe<CountAggregateOperation>;
  /**  Set rollback duration */
  rollbackDuration?: InputMaybe<DurationAggregateOperation>;
};

/**
 *  Copyright 2021 Harness Inc. All rights reserved.
 *  Use of this source code is governed by the PolyForm Shield 1.0.0 license
 *  that can be found in the licenses directory at the root of this repository, also available at
 *  https://polyformproject.org/wp-content/uploads/2020/06/PolyForm-Shield-1.0.0.txt.
 *  Possible entity values for Deployment aggregation
 */
export enum DeploymentEntityAggregation {
  Application = 'Application',
  CloudProvider = 'CloudProvider',
  Environment = 'Environment',
  EnvironmentType = 'EnvironmentType',
  Pipeline = 'Pipeline',
  Service = 'Service',
  Status = 'Status',
  Trigger = 'Trigger',
  TriggeredBy = 'TriggeredBy',
  Workflow = 'Workflow'
}

/**  Set Deployment filter criteria */
export type DeploymentFilter = {
  /**  Filter by Application id */
  application?: InputMaybe<IdFilter>;
  /**  Filter by Cloud Provider id */
  cloudProvider?: InputMaybe<IdFilter>;
  /**  Filter by Deployment Type filter */
  deploymentType?: InputMaybe<DeploymentTypeFilter>;
  /**  Filter by Deployment duration */
  duration?: InputMaybe<NumberFilter>;
  /**  Filter by Deployment end time */
  endTime?: InputMaybe<TimeFilter>;
  /**  Filter by Environment id */
  environment?: InputMaybe<IdFilter>;
  /**  Filter by Environment Type id */
  environmentType?: InputMaybe<EnvironmentTypeFilter>;
  /**  Filter by Orchestration Workflow Type filter */
  orchestrationWorkflowType?: InputMaybe<OrchestrationWorkflowTypeFilter>;
  /**  Filter by Pipeline id */
  pipeline?: InputMaybe<IdFilter>;
  /**  Filter by Rollback Duration */
  rollbackDuration?: InputMaybe<NumberFilter>;
  /**  Filter by Service id */
  service?: InputMaybe<IdFilter>;
  /**  Filter by Deployment start time */
  startTime?: InputMaybe<TimeFilter>;
  /**  Filter by Status id */
  status?: InputMaybe<IdFilter>;
  /**  Filter by Deployment Tag */
  tag?: InputMaybe<DeploymentTagFilter>;
  /**  Filter by Trigger id */
  trigger?: InputMaybe<IdFilter>;
  /**  Filter by Triggered-by id */
  triggeredBy?: InputMaybe<IdFilter>;
  /**  Filter by Workflow id */
  workflow?: InputMaybe<IdFilter>;
};

export type DeploymentFreezeWindow = {
  __typename?: 'DeploymentFreezeWindow';
  applicable?: Maybe<Scalars['Boolean']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  excludeFreezeWindows?: Maybe<Array<Maybe<FreezeWindow>>>;
  freezeWindows?: Maybe<Array<Maybe<FreezeWindow>>>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  notifyTo?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  setup?: Maybe<Setup>;
  userGroupSelection?: Maybe<UserGroupFilter>;
};

export type DeploymentFreezeWindowConnection = {
  __typename?: 'DeploymentFreezeWindowConnection';
  nodes?: Maybe<Array<Maybe<DeploymentFreezeWindow>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type DeploymentFreezeWindowFilter = {
  /** Input 'true' to get all the enabled deployment freeze windows else 'false' to get all the disabled deployment freeze windows. If this input is not given, all the deployment freeze windows will be listed. */
  listEnabled?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DeploymentOutcome = Outcome & {
  __typename?: 'DeploymentOutcome';
  environment?: Maybe<Environment>;
  execution?: Maybe<Execution>;
  /**  Infra definition is behind feature flag OUTCOME_GRAPHQL_WITH_INFRA_DEF */
  infrastructureDefinition?: Maybe<InfrastructureDefinition>;
  service?: Maybe<Service>;
};

export type DeploymentPermissionFilter = {
  __typename?: 'DeploymentPermissionFilter';
  envIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /**  To give permission of pipeline per env. This is behind FF PIPELINE_PER_ENV_DEPLOYMENT_PERMISSION */
  executableElementFilter?: Maybe<ExecutableElementFilter>;
  filterTypes?: Maybe<Array<Maybe<DeploymentPermissionFilterType>>>;
};

export type DeploymentPermissionFilterInput = {
  envIds?: InputMaybe<Array<Scalars['String']['input']>>;
  /**  To give permission of pipeline per env. This is behind FF PIPELINE_PER_ENV_DEPLOYMENT_PERMISSION */
  executableElementFilter?: InputMaybe<ExecutableElementFilterInput>;
  filterTypes?: InputMaybe<Array<InputMaybe<DeploymentPermissionFilterType>>>;
};

export enum DeploymentPermissionFilterType {
  NonProductionEnvironments = 'NON_PRODUCTION_ENVIRONMENTS',
  ProductionEnvironments = 'PRODUCTION_ENVIRONMENTS'
}

/**  Set sort criteria */
export type DeploymentSortCriteria = {
  /**  Set sort order */
  sortOrder?: InputMaybe<SortOrder>;
  /**  Set sort type */
  sortType?: InputMaybe<DeploymentSortType>;
};

/**  Possible types of sort */
export enum DeploymentSortType {
  Count = 'Count',
  Duration = 'Duration'
}

export type DeploymentTag = {
  __typename?: 'DeploymentTag';
  name?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/**  Aggregate by Deployment tag */
export type DeploymentTagAggregation = {
  /**  Set entity type */
  entityType?: InputMaybe<DeploymentTagType>;
  /**  Set tag name */
  tagName?: InputMaybe<Scalars['String']['input']>;
};

export type DeploymentTagFilter = {
  entityType?: InputMaybe<DeploymentTagType>;
  tags?: InputMaybe<Array<InputMaybe<TagInput>>>;
};

export enum DeploymentTagType {
  Application = 'APPLICATION',
  Deployment = 'DEPLOYMENT',
  Environment = 'ENVIRONMENT',
  Service = 'SERVICE'
}

export enum DeploymentType {
  Ami = 'AMI',
  AwsCodedeploy = 'AWS_CODEDEPLOY',
  AwsLambda = 'AWS_LAMBDA',
  AzureVmss = 'AZURE_VMSS',
  AzureWebapp = 'AZURE_WEBAPP',
  Custom = 'CUSTOM',
  Ecs = 'ECS',
  Helm = 'HELM',
  Kubernetes = 'KUBERNETES',
  Pcf = 'PCF',
  Spotinst = 'SPOTINST',
  Ssh = 'SSH',
  Winrm = 'WINRM'
}

export type DeploymentTypeFilter = {
  operator?: InputMaybe<EnumOperator>;
  values?: InputMaybe<Array<InputMaybe<DeploymentType>>>;
};

export type DetachTagInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /**  Unique ID of the harness entity */
  entityId: Scalars['String']['input'];
  /**  Type of entity the tag is to be detached from */
  entityType: TagEntityType;
  /**  Name of the tag */
  name: Scalars['String']['input'];
};

export type DetachTagPayload = {
  __typename?: 'DetachTagPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type DockerArtifactSource = ArtifactSource & {
  __typename?: 'DockerArtifactSource';
  artifacts?: Maybe<ArtifactConnection>;
  collectionEnabled?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  dockerConnectorId?: Maybe<Scalars['String']['output']>;
  /** Artifact Source Id */
  id?: Maybe<Scalars['String']['output']>;
  imageName?: Maybe<Scalars['String']['output']>;
  /**  Artifact source display name */
  name?: Maybe<Scalars['String']['output']>;
};


export type DockerArtifactSourceArtifactsArgs = {
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type DockerConnector = Connector & {
  __typename?: 'DockerConnector';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  delegateSelectors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type DockerConnectorInput = {
  URL: Scalars['String']['input'];
  delegateSelectors?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name: Scalars['String']['input'];
  passwordSecretId?: InputMaybe<Scalars['String']['input']>;
  userName?: InputMaybe<Scalars['String']['input']>;
};

/**  Possible Duration aggregation values */
export enum DurationAggregateOperation {
  Average = 'AVERAGE',
  Max = 'MAX',
  Min = 'MIN'
}

export type DynaTraceConnector = Connector & {
  __typename?: 'DynaTraceConnector';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type EcrArtifactSource = ArtifactSource & {
  __typename?: 'ECRArtifactSource';
  artifacts?: Maybe<ArtifactConnection>;
  awsCloudProviderId?: Maybe<Scalars['String']['output']>;
  collectionEnabled?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Artifact Source Id */
  id?: Maybe<Scalars['String']['output']>;
  imageName?: Maybe<Scalars['String']['output']>;
  /**  Artifact source display name */
  name?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Scalars['String']['output']>;
};


export type EcrArtifactSourceArtifactsArgs = {
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type EcrConnector = Connector & {
  __typename?: 'ECRConnector';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Ec2IamCredentials = {
  delegateSelector: Scalars['String']['input'];
  usageScope?: InputMaybe<UsageScopeInput>;
};

export type Ec2Instance = Instance & PhysicalInstance & {
  __typename?: 'Ec2Instance';
  application?: Maybe<Application>;
  artifact?: Maybe<Artifact>;
  environment?: Maybe<Environment>;
  hostId?: Maybe<Scalars['String']['output']>;
  hostName?: Maybe<Scalars['String']['output']>;
  hostPublicDns?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  service?: Maybe<Service>;
};

export type EcsContainerInstance = Instance & {
  __typename?: 'EcsContainerInstance';
  application?: Maybe<Application>;
  artifact?: Maybe<Artifact>;
  clusterName?: Maybe<Scalars['String']['output']>;
  environment?: Maybe<Environment>;
  id?: Maybe<Scalars['String']['output']>;
  service?: Maybe<Service>;
  serviceName?: Maybe<Scalars['String']['output']>;
  startedAt?: Maybe<Scalars['DateTime']['output']>;
  taskArn?: Maybe<Scalars['String']['output']>;
  taskDefinitionArn?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export type ElbConnector = Connector & {
  __typename?: 'ElbConnector';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type ElkConnector = Connector & {
  __typename?: 'ElkConnector';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type EmbeddedUser = {
  __typename?: 'EmbeddedUser';
  email?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type EncryptedDataParams = {
  name?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type EncryptedDataParamsOutput = {
  __typename?: 'EncryptedDataParamsOutput';
  name?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/**
 *  Copyright 2021 Harness Inc. All rights reserved.
 *  Use of this source code is governed by the PolyForm Shield 1.0.0 license
 *  that can be found in the licenses directory at the root of this repository, also available at
 *  https://polyformproject.org/wp-content/uploads/2020/06/PolyForm-Shield-1.0.0.txt.
 */
export type EncryptedFile = Secret & {
  __typename?: 'EncryptedFile';
  id?: Maybe<Scalars['String']['output']>;
  inheritScopesFromSM?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  scopedToAccount?: Maybe<Scalars['Boolean']['output']>;
  secretManagerId?: Maybe<Scalars['String']['output']>;
  secretReference?: Maybe<Scalars['String']['output']>;
  secretType?: Maybe<SecretType>;
  usageScope?: Maybe<UsageScope>;
};

export type EncryptedFileInput = {
  inheritScopesFromSM?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  scopedToAccount?: InputMaybe<Scalars['Boolean']['input']>;
  secretManagerId?: InputMaybe<Scalars['String']['input']>;
  usageScope?: InputMaybe<UsageScopeInput>;
};

export type EncryptedText = Secret & {
  __typename?: 'EncryptedText';
  id?: Maybe<Scalars['String']['output']>;
  inheritScopesFromSM?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  scopedToAccount?: Maybe<Scalars['Boolean']['output']>;
  secretManagerId?: Maybe<Scalars['String']['output']>;
  secretReference?: Maybe<Scalars['String']['output']>;
  secretType?: Maybe<SecretType>;
  usageScope?: Maybe<UsageScope>;
};

/**
 *  Copyright 2021 Harness Inc. All rights reserved.
 *  Use of this source code is governed by the PolyForm Shield 1.0.0 license
 *  that can be found in the licenses directory at the root of this repository, also available at
 *  https://polyformproject.org/wp-content/uploads/2020/06/PolyForm-Shield-1.0.0.txt.
 */
export type EncryptedTextInput = {
  inheritScopesFromSM?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  parameters?: InputMaybe<Array<InputMaybe<EncryptedDataParams>>>;
  scopedToAccount?: InputMaybe<Scalars['Boolean']['input']>;
  secretManagerId?: InputMaybe<Scalars['String']['input']>;
  secretReference?: InputMaybe<Scalars['String']['input']>;
  usageScope?: InputMaybe<UsageScopeInput>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export enum EntityType {
  Application = 'APPLICATION',
  Artifact = 'ARTIFACT',
  CloudProvider = 'CLOUD_PROVIDER',
  CollaborationProvider = 'COLLABORATION_PROVIDER',
  Connector = 'CONNECTOR',
  Deployment = 'DEPLOYMENT',
  Environment = 'ENVIRONMENT',
  Instance = 'INSTANCE',
  Pipeline = 'PIPELINE',
  Provisioner = 'PROVISIONER',
  Service = 'SERVICE',
  Trigger = 'TRIGGER',
  Workflow = 'WORKFLOW'
}

export type EntityTypeFilter = {
  operator?: InputMaybe<EnumOperator>;
  values?: InputMaybe<Array<InputMaybe<EntityType>>>;
};

export enum EnumOperator {
  Equals = 'EQUALS',
  In = 'IN'
}

export type EnvFilter = {
  __typename?: 'EnvFilter';
  envIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  filterTypes?: Maybe<Array<Maybe<EnvFilterType>>>;
};

export type EnvFilterInput = {
  envIds?: InputMaybe<Scalars['String']['input']>;
  filterTypes?: InputMaybe<EnvFilterType>;
};

export enum EnvFilterType {
  NonProductionEnvironments = 'NON_PRODUCTION_ENVIRONMENTS',
  ProductionEnvironments = 'PRODUCTION_ENVIRONMENTS'
}

export type EnvPermissionFilter = {
  __typename?: 'EnvPermissionFilter';
  envIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  filterTypes?: Maybe<Array<Maybe<EnvFilterType>>>;
};

export type EnvPermissionFilterInput = {
  envIds?: InputMaybe<Array<Scalars['String']['input']>>;
  filterTypes?: InputMaybe<Array<InputMaybe<EnvFilterType>>>;
};

export type EnvScopeFilter = {
  __typename?: 'EnvScopeFilter';
  envId?: Maybe<Scalars['String']['output']>;
  filterType?: Maybe<EnvFilterType>;
};

export type EnvScopeFilterInput = {
  envId?: InputMaybe<Scalars['String']['input']>;
  filterType?: InputMaybe<EnvFilterType>;
};

export type EnvSummary = {
  __typename?: 'EnvSummary';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<EnvironmentType>;
};

export type Environment = {
  __typename?: 'Environment';
  application?: Maybe<Application>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  infrastructureDefinitions?: Maybe<InfrastructureDefinitionConnection>;
  name?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  type?: Maybe<EnvironmentType>;
};


export type EnvironmentInfrastructureDefinitionsArgs = {
  filters?: InputMaybe<Array<InputMaybe<InfrastructureDefinitionFilter>>>;
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
};

/**  Set Environment aggregation criteria */
export type EnvironmentAggregation = {
  /**  Aggregate by entity */
  entityAggregation?: InputMaybe<EnvironmentEntityAggregation>;
  /**  Aggregate by tag */
  tagAggregation?: InputMaybe<EnvironmentTagAggregation>;
};

export type EnvironmentConnection = {
  __typename?: 'EnvironmentConnection';
  nodes?: Maybe<Array<Maybe<Environment>>>;
  pageInfo?: Maybe<PageInfo>;
};

/**
 *  Copyright 2021 Harness Inc. All rights reserved.
 *  Use of this source code is governed by the PolyForm Shield 1.0.0 license
 *  that can be found in the licenses directory at the root of this repository, also available at
 *  https://polyformproject.org/wp-content/uploads/2020/06/PolyForm-Shield-1.0.0.txt.
 *  Possible entity values for Environment aggregation
 */
export enum EnvironmentEntityAggregation {
  Application = 'Application',
  EnvironmentType = 'EnvironmentType'
}

export type EnvironmentFilter = {
  application?: InputMaybe<IdFilter>;
  environment?: InputMaybe<IdFilter>;
  environmentType?: InputMaybe<EnvironmentTypeFilter>;
  tag?: InputMaybe<EnvironmentTagFilter>;
};

export enum EnvironmentFilterType {
  All = 'ALL',
  AllNonProd = 'ALL_NON_PROD',
  AllProd = 'ALL_PROD',
  Custom = 'CUSTOM'
}

/**  Aggregate by Environment tag */
export type EnvironmentTagAggregation = {
  /**  Set entity type */
  entityType?: InputMaybe<EnvironmentTagType>;
  /**  Set tag name */
  tagName?: InputMaybe<Scalars['String']['input']>;
};

export type EnvironmentTagFilter = {
  entityType?: InputMaybe<EnvironmentTagType>;
  tags?: InputMaybe<Array<InputMaybe<TagInput>>>;
};

export enum EnvironmentTagType {
  Application = 'APPLICATION'
}

export enum EnvironmentType {
  NonProd = 'NON_PROD',
  Prod = 'PROD'
}

export type EnvironmentTypeFilter = {
  operator?: InputMaybe<EnumOperator>;
  values?: InputMaybe<Array<InputMaybe<EnvironmentType>>>;
};

export enum EnvironmentTypeFilterInput {
  All = 'ALL',
  AllNonProd = 'ALL_NON_PROD',
  AllProd = 'ALL_PROD',
  Custom = 'CUSTOM'
}

export type EventRule = {
  __typename?: 'EventRule';
  /** The Pipeline and Event details */
  pipelineRule?: Maybe<PipelineRule>;
  /** Allowed values are ALL, PIPELINE */
  type: RuleType;
  /** The Workflow and Event details */
  workflowRule?: Maybe<WorkflowRule>;
};

export type EventRuleInput = {
  /** The Pipeline and Event details. Only applicable when the type is PIPELINE */
  pipelineRule?: InputMaybe<PipelineRuleInput>;
  /** Allowed values are ALL, PIPELINE and WORKFLOW */
  type: RuleType;
  /** The Workflow and Event details. Only applicable when the type is WORKFLOW */
  workflowRule?: InputMaybe<WorkflowRuleInput>;
};

export enum EventType {
  PipelineContinue = 'pipeline_continue',
  PipelineEnd = 'pipeline_end',
  PipelinePause = 'pipeline_pause',
  PipelineStart = 'pipeline_start',
  WorkflowContinue = 'workflow_continue',
  WorkflowEnd = 'workflow_end',
  WorkflowPause = 'workflow_pause',
  WorkflowStart = 'workflow_start'
}

export type EventsConfig = {
  __typename?: 'EventsConfig';
  appId?: Maybe<Scalars['String']['output']>;
  /**  The Delegate Selectors */
  delegateSelectors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  /**  The Event Rule containing the configuration of Pipelines and Events */
  rule?: Maybe<EventRule>;
  /**  Details of the HTTP endpoint along with any custom headers */
  webhookConfig?: Maybe<WebhookConfig>;
};

export type ExecutableElementFilter = {
  __typename?: 'ExecutableElementFilter';
  executableElementFilterType?: Maybe<ExecutableElementFilterType>;
  executableElementType: ExecutableElementType;
  ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type ExecutableElementFilterInput = {
  executableElementFilterType?: InputMaybe<ExecutableElementFilterType>;
  executableElementType: ExecutableElementType;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export enum ExecutableElementFilterType {
  All = 'ALL'
}

export enum ExecutableElementType {
  Pipeline = 'PIPELINE',
  /**  Coming soon */
  Workflow = 'WORKFLOW'
}

export enum ExecuteOptions {
  GraphqlApi = 'GRAPHQL_API',
  WebUi = 'WEB_UI'
}

export type ExecutedAlongPipeline = {
  __typename?: 'ExecutedAlongPipeline';
  execution?: Maybe<PipelineExecution>;
};

export type ExecutedByApiKey = {
  __typename?: 'ExecutedByAPIKey';
  apiKey?: Maybe<ApiKey>;
  using?: Maybe<ExecuteOptions>;
};

export type ExecutedByTrigger = {
  __typename?: 'ExecutedByTrigger';
  trigger?: Maybe<Trigger>;
};

export type ExecutedByUser = {
  __typename?: 'ExecutedByUser';
  user?: Maybe<User>;
  using?: Maybe<ExecuteOptions>;
};

export type Execution = {
  application?: Maybe<Application>;
  cause?: Maybe<Cause>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  endedAt?: Maybe<Scalars['DateTime']['output']>;
  executionUrl?: Maybe<Scalars['String']['output']>;
  failureDetails?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  startedAt?: Maybe<Scalars['DateTime']['output']>;
  status?: Maybe<ExecutionStatus>;
  tags?: Maybe<Array<Maybe<DeploymentTag>>>;
};

export type ExecutionConnection = {
  __typename?: 'ExecutionConnection';
  nodes?: Maybe<Array<Maybe<Execution>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type ExecutionFilter = {
  /**  application: IdFilter is deprecated please use applicationId: String instead. */
  application?: InputMaybe<IdFilter>;
  applicationId?: InputMaybe<Scalars['String']['input']>;
  artifactBuildNo?: InputMaybe<IdFilter>;
  cloudProvider?: InputMaybe<IdFilter>;
  creationTime?: InputMaybe<TimeFilter>;
  duration?: InputMaybe<NumberFilter>;
  endTime?: InputMaybe<TimeFilter>;
  environment?: InputMaybe<IdFilter>;
  environmentType?: InputMaybe<EnvironmentTypeFilter>;
  execution?: InputMaybe<IdFilter>;
  helmChartVersion?: InputMaybe<IdFilter>;
  pipeline?: InputMaybe<IdFilter>;
  pipelineExecutionId?: InputMaybe<IdFilter>;
  service?: InputMaybe<IdFilter>;
  startTime?: InputMaybe<TimeFilter>;
  status?: InputMaybe<IdFilter>;
  tag?: InputMaybe<DeploymentTagFilter>;
  trigger?: InputMaybe<IdFilter>;
  triggeredBy?: InputMaybe<IdFilter>;
  workflow?: InputMaybe<IdFilter>;
};

export type ExecutionInputs = {
  __typename?: 'ExecutionInputs';
  /** List of Services that need artifact input */
  serviceInputs?: Maybe<Array<Maybe<Service>>>;
  /** Beta: List of Services that need manifest input */
  serviceManifestInputs?: Maybe<Array<Maybe<Service>>>;
};

export enum ExecutionStatus {
  Aborted = 'ABORTED',
  Error = 'ERROR',
  Expired = 'EXPIRED',
  Failed = 'FAILED',
  Paused = 'PAUSED',
  Queued = 'QUEUED',
  Rejected = 'REJECTED',
  Resumed = 'RESUMED',
  Running = 'RUNNING',
  Skipped = 'SKIPPED',
  Success = 'SUCCESS',
  Waiting = 'WAITING'
}

export type ExecutionStatusFilter = {
  operator?: InputMaybe<EnumOperator>;
  values?: InputMaybe<Array<InputMaybe<ExecutionStatusType>>>;
};

export enum ExecutionStatusType {
  Aborted = 'ABORTED',
  Error = 'ERROR',
  Expired = 'EXPIRED',
  Failed = 'FAILED',
  Running = 'RUNNING',
  Skipped = 'SKIPPED',
  Success = 'SUCCESS'
}

export enum ExecutionType {
  Pipeline = 'PIPELINE',
  Workflow = 'WORKFLOW'
}

export type ExportExecutionFilter = {
  application?: InputMaybe<IdFilter>;
  artifactBuildNo?: InputMaybe<IdFilter>;
  cloudProvider?: InputMaybe<IdFilter>;
  creationTime?: InputMaybe<TimeFilter>;
  duration?: InputMaybe<NumberFilter>;
  endTime?: InputMaybe<TimeFilter>;
  environment?: InputMaybe<IdFilter>;
  execution?: InputMaybe<IdFilter>;
  helmChartVersion?: InputMaybe<IdFilter>;
  pipeline?: InputMaybe<IdFilter>;
  service?: InputMaybe<IdFilter>;
  startTime?: InputMaybe<TimeFilter>;
  status?: InputMaybe<IdFilter>;
  tag?: InputMaybe<DeploymentTagFilter>;
  trigger?: InputMaybe<IdFilter>;
  triggeredBy?: InputMaybe<IdFilter>;
  workflow?: InputMaybe<IdFilter>;
};

export type ExportExecutionsInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** Execution filters */
  filters?: InputMaybe<Array<ExportExecutionFilter>>;
  /** Notify only the triggering user */
  notifyOnlyTriggeringUser?: InputMaybe<Scalars['Boolean']['input']>;
  /** User group ids */
  userGroupIds?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type ExportExecutionsPayload = {
  __typename?: 'ExportExecutionsPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  downloadLink?: Maybe<Scalars['String']['output']>;
  errorMessage?: Maybe<Scalars['String']['output']>;
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  requestId?: Maybe<Scalars['String']['output']>;
  status?: Maybe<ExportExecutionsStatus>;
  statusLink?: Maybe<Scalars['String']['output']>;
  totalExecutions?: Maybe<Scalars['Number']['output']>;
  triggeredAt?: Maybe<Scalars['DateTime']['output']>;
};

export enum ExportExecutionsStatus {
  Expired = 'EXPIRED',
  Failed = 'FAILED',
  Queued = 'QUEUED',
  Ready = 'READY'
}

export type Filter = {
  __typename?: 'Filter';
  key?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export enum FilterAppType {
  All = 'ALL',
  ExcludeSelected = 'EXCLUDE_SELECTED',
  Selected = 'SELECTED'
}

export enum FilterType {
  All = 'ALL'
}

export enum FreezeOccurrenceType {
  Annual = 'ANNUAL',
  Daily = 'DAILY',
  Monthly = 'MONTHLY',
  Weekly = 'WEEKLY'
}

export type FreezeWindow = {
  __typename?: 'FreezeWindow';
  appFilter?: Maybe<AppFilterType>;
  appIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  envFilterType?: Maybe<EnvironmentFilterType>;
  envIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  servFilterType?: Maybe<ServiceFilterType>;
  servIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type FreezeWindowInput = {
  /** Select 'ALL' if you want to freeze for all applications else select 'CUSTOM'. */
  appFilter?: InputMaybe<AppFilterType>;
  /** Input Application ids when 'appFilter' is selected as 'CUSTOM'. */
  appIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Input Environment Ids when 'envTypeFilter' is selected as 'CUSTOM'. */
  envIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Select the Environment Type to which the freeze window is to be applied. CUSTOM 'envTypeFilter' is applicable only when 'appFilter' is selected as 'CUSTOM' with a single application. */
  envTypeFilter: EnvironmentTypeFilterInput;
  freezeForAllServices?: InputMaybe<Scalars['Boolean']['input']>;
  servIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Select the Service Type to which the freeze window is to be applied. CUSTOM 'serviceTypeFilter' is applicable only when 'appFilter' is selected as 'CUSTOM' with a single application. */
  serviceTypeFilter: ServiceTypeFilterInput;
};

/** Beta: Manifest selection details when ManifestSelectionType is FROM_APP_MANIFEST */
export type FromTriggeringAppManifest = ManifestSelection & {
  __typename?: 'FromTriggeringAppManifest';
  manifestSelectionType?: Maybe<ManifestSelectionType>;
  serviceId?: Maybe<Scalars['String']['output']>;
  serviceName?: Maybe<Scalars['String']['output']>;
};

export type FromTriggeringArtifactSource = ArtifactSelection & {
  __typename?: 'FromTriggeringArtifactSource';
  serviceId?: Maybe<Scalars['String']['output']>;
  serviceName?: Maybe<Scalars['String']['output']>;
};

export type FromTriggeringPipeline = ArtifactSelection & {
  __typename?: 'FromTriggeringPipeline';
  serviceId?: Maybe<Scalars['String']['output']>;
  serviceName?: Maybe<Scalars['String']['output']>;
};

export type FromWebhookPayload = ArtifactSelection & {
  __typename?: 'FromWebhookPayload';
  artifactSourceId?: Maybe<Scalars['String']['output']>;
  artifactSourceName?: Maybe<Scalars['String']['output']>;
  serviceId?: Maybe<Scalars['String']['output']>;
  serviceName?: Maybe<Scalars['String']['output']>;
};

export type FrozenExecution = {
  __typename?: 'FrozenExecution';
  environments?: Maybe<Array<Maybe<EnvSummary>>>;
  execution?: Maybe<Execution>;
  pipelineExecutionId?: Maybe<Scalars['String']['output']>;
  rejectedByFreezeWindowIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  rejectedByFreezeWindowNames?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  serviceIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type FrozenExecutionConnection = {
  __typename?: 'FrozenExecutionConnection';
  nodes?: Maybe<Array<Maybe<FrozenExecution>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type FrozenExecutionFilter = {
  creationTime?: InputMaybe<TimeFilter>;
  environment?: InputMaybe<IdFilter>;
  rejectedByFreezeWindow: IdFilter;
  service?: InputMaybe<IdFilter>;
};

export type GcrArtifactSource = ArtifactSource & {
  __typename?: 'GCRArtifactSource';
  artifacts?: Maybe<ArtifactConnection>;
  collectionEnabled?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  dockerImageName?: Maybe<Scalars['String']['output']>;
  gcpCloudProviderId?: Maybe<Scalars['String']['output']>;
  /** Artifact Source Id */
  id?: Maybe<Scalars['String']['output']>;
  /**  Artifact source display name */
  name?: Maybe<Scalars['String']['output']>;
  registryHostName?: Maybe<Scalars['String']['output']>;
};


export type GcrArtifactSourceArtifactsArgs = {
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type GcrConnector = Connector & {
  __typename?: 'GCRConnector';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type GcsArtifactSource = ArtifactSource & {
  __typename?: 'GCSArtifactSource';
  artifactPaths?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  artifacts?: Maybe<ArtifactConnection>;
  bucket?: Maybe<Scalars['String']['output']>;
  collectionEnabled?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  gcpCloudProviderId?: Maybe<Scalars['String']['output']>;
  /** Artifact Source Id */
  id?: Maybe<Scalars['String']['output']>;
  /**  Artifact source display name */
  name?: Maybe<Scalars['String']['output']>;
  projectId?: Maybe<Scalars['String']['output']>;
};


export type GcsArtifactSourceArtifactsArgs = {
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type GcsConnector = Connector & {
  __typename?: 'GCSConnector';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type GcsHelmRepoConnector = Connector & {
  __typename?: 'GCSHelmRepoConnector';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type GcsPlatformInput = {
  bucketName: Scalars['String']['input'];
  googleCloudProvider: Scalars['String']['input'];
};

export type GcpCloudProvider = CloudProvider & {
  __typename?: 'GcpCloudProvider';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  delegateSelectors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isContinuousEfficiencyEnabled?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type GcpCloudProviderInput = {
  delegateSelector?: InputMaybe<Scalars['String']['input']>;
  delegateSelectors?: InputMaybe<Array<Scalars['String']['input']>>;
  name: Scalars['String']['input'];
  serviceAccountKeySecretId?: InputMaybe<Scalars['String']['input']>;
  skipValidation?: InputMaybe<Scalars['Boolean']['input']>;
  useDelegate?: InputMaybe<Scalars['Boolean']['input']>;
  useDelegateSelectors?: InputMaybe<Scalars['Boolean']['input']>;
};

/**
 * If changeSet got triggered by any other source than GraphQL mutation(through API key)
 * or Git action or User action
 */
export type GenericChangeSet = ChangeSet & {
  __typename?: 'GenericChangeSet';
  /** List of all changeDetails */
  changes?: Maybe<Array<Maybe<ChangeDetails>>>;
  /** Failure message */
  failureStatusMsg?: Maybe<Scalars['String']['output']>;
  /** Unique ID of a changeSet */
  id?: Maybe<Scalars['String']['output']>;
  /** HTTP request that triggered the changeSet */
  request?: Maybe<RequestInfo>;
  /** Timestamp when changeSet was triggered */
  triggeredAt?: Maybe<Scalars['DateTime']['output']>;
};

/** If changeSet got triggered by Git action */
export type GitChangeSet = ChangeSet & {
  __typename?: 'GitChangeSet';
  /** Git author who triggered the changeSet */
  author?: Maybe<Scalars['String']['output']>;
  /** List of all changeDetails */
  changes?: Maybe<Array<Maybe<ChangeDetails>>>;
  /** Failure message */
  failureStatusMsg?: Maybe<Scalars['String']['output']>;
  /** Git commit ID that triggered the changeSet */
  gitCommitId?: Maybe<Scalars['String']['output']>;
  /** Unique ID of a changeSet */
  id?: Maybe<Scalars['String']['output']>;
  /** Git repository URL that triggered the changeSet */
  repoUrl?: Maybe<Scalars['String']['output']>;
  /** HTTP request that triggered the changeSet */
  request?: Maybe<RequestInfo>;
  /** Timestamp when changeSet was triggered */
  triggeredAt?: Maybe<Scalars['DateTime']['output']>;
};

export type GitConnector = Connector & {
  __typename?: 'GitConnector';
  URL?: Maybe<Scalars['String']['output']>;
  branch?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  customCommitDetails?: Maybe<CustomCommitDetails>;
  delegateSelectors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  description?: Maybe<Scalars['String']['output']>;
  disableUserGitConfig?: Maybe<Scalars['Boolean']['output']>;
  generateWebhookUrl?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  passwordSecretId?: Maybe<Scalars['String']['output']>;
  providerType?: Maybe<ProviderType>;
  sshSettingId?: Maybe<Scalars['String']['output']>;
  urlType?: Maybe<UrlType>;
  usageScope?: Maybe<UsageScope>;
  userName?: Maybe<Scalars['String']['output']>;
  webhookUrl?: Maybe<Scalars['String']['output']>;
};

export type GitConnectorInput = {
  URL: Scalars['String']['input'];
  branch?: InputMaybe<Scalars['String']['input']>;
  customCommitDetails?: InputMaybe<CustomCommitDetailsInput>;
  delegateSelectors?: InputMaybe<Array<Scalars['String']['input']>>;
  disableUserGitConfig?: InputMaybe<Scalars['Boolean']['input']>;
  generateWebhookUrl?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  passwordSecretId?: InputMaybe<Scalars['String']['input']>;
  providerType?: InputMaybe<ProviderType>;
  sshSettingId?: InputMaybe<Scalars['String']['input']>;
  urlType: UrlType;
  usageScope?: InputMaybe<UsageScopeInput>;
  userName?: InputMaybe<Scalars['String']['input']>;
};

export enum GitHubAction {
  Assigned = 'ASSIGNED',
  Closed = 'CLOSED',
  Created = 'CREATED',
  Deleted = 'DELETED',
  Edited = 'EDITED',
  Labeled = 'LABELED',
  Opened = 'OPENED',
  PackagePublished = 'PACKAGE_PUBLISHED',
  PreReleased = 'PRE_RELEASED',
  Published = 'PUBLISHED',
  Released = 'RELEASED',
  Reopened = 'REOPENED',
  ReviewRequested = 'REVIEW_REQUESTED',
  ReviewRequestedRemoved = 'REVIEW_REQUESTED_REMOVED',
  Synchronized = 'SYNCHRONIZED',
  Unassigned = 'UNASSIGNED',
  Unlabeled = 'UNLABELED',
  Unpublished = 'UNPUBLISHED'
}

export type GitHubEvent = {
  /** Github Action for the event type. */
  action?: InputMaybe<GitHubAction>;
  /** Github event type like PUSH, PULL_REQUEST, etc */
  event?: InputMaybe<GitHubEventType>;
};

export enum GitHubEventType {
  Any = 'ANY',
  Delete = 'DELETE',
  Package = 'PACKAGE',
  PullRequest = 'PULL_REQUEST',
  Push = 'PUSH',
  Release = 'RELEASE'
}

export type GitSyncConfig = {
  __typename?: 'GitSyncConfig';
  branch?: Maybe<Scalars['String']['output']>;
  gitConnector?: Maybe<GitConnector>;
  repositoryName?: Maybe<Scalars['String']['output']>;
  syncEnabled?: Maybe<Scalars['Boolean']['output']>;
};

export enum GitlabEvent {
  Any = 'ANY',
  PullRequest = 'PULL_REQUEST',
  Push = 'PUSH'
}

export type GroupBy = {
  __typename?: 'GroupBy';
  entityType?: Maybe<Scalars['String']['output']>;
};

export type HashicorpVaultAuthDetails = {
  appRoleId?: InputMaybe<Scalars['String']['input']>;
  authToken?: InputMaybe<Scalars['String']['input']>;
  secretId?: InputMaybe<Scalars['String']['input']>;
};

export type HashicorpVaultSecretManagerInput = {
  authDetails: HashicorpVaultAuthDetails;
  basePath?: InputMaybe<Scalars['String']['input']>;
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  isReadOnly?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  namespace?: InputMaybe<Scalars['String']['input']>;
  secretEngineName: Scalars['String']['input'];
  secretEngineRenewalInterval: Scalars['Long']['input'];
  secretEngineVersion: Scalars['Int']['input'];
  usageScope?: InputMaybe<UsageScopeInput>;
  vaultUrl: Scalars['String']['input'];
};

export type HelmConnectorInput = {
  amazonS3PlatformDetails?: InputMaybe<AmazonS3PlatformInput>;
  gcsPlatformDetails?: InputMaybe<GcsPlatformInput>;
  httpServerPlatformDetails?: InputMaybe<HttpServerPlatformInput>;
  name: Scalars['String']['input'];
  ociPlatformDetails?: InputMaybe<OciPlatformInput>;
};

export type HttpHelmRepoConnector = Connector & {
  __typename?: 'HttpHelmRepoConnector';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type HttpServerPlatformInput = {
  URL: Scalars['String']['input'];
  passwordSecretId?: InputMaybe<Scalars['String']['input']>;
  userName?: InputMaybe<Scalars['String']['input']>;
};

export type IdFilter = {
  operator: IdOperator;
  values: Array<InputMaybe<Scalars['String']['input']>>;
};

export enum IdOperator {
  Equals = 'EQUALS',
  In = 'IN',
  Like = 'LIKE',
  NotIn = 'NOT_IN',
  NotNull = 'NOT_NULL'
}

export type InfrastructureDefinition = {
  __typename?: 'InfrastructureDefinition';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deploymentType?: Maybe<Scalars['String']['output']>;
  environment?: Maybe<Environment>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  scopedToServices?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type InfrastructureDefinitionConnection = {
  __typename?: 'InfrastructureDefinitionConnection';
  nodes?: Maybe<Array<Maybe<InfrastructureDefinition>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type InfrastructureDefinitionFilter = {
  deploymentType?: InputMaybe<StringFilter>;
  environment?: InputMaybe<IdFilter>;
  infrastructureDefinition?: InputMaybe<IdFilter>;
  tag?: InputMaybe<InfrastructureDefinitionTagFilter>;
};

export type InfrastructureDefinitionTagFilter = {
  entityType?: InputMaybe<InfrastructureDefinitionTagType>;
  tags?: InputMaybe<Array<InputMaybe<TagInput>>>;
};

export enum InfrastructureDefinitionTagType {
  Environment = 'ENVIRONMENT'
}

export type InheritClusterDetails = {
  delegateName?: InputMaybe<Scalars['String']['input']>;
  delegateSelectors?: InputMaybe<Array<Scalars['String']['input']>>;
  usageScope?: InputMaybe<UsageScopeInput>;
};

export type InlineSshKey = {
  passphraseSecretId?: InputMaybe<Scalars['String']['input']>;
  sshKeySecretFileId: Scalars['String']['input'];
};

export type InlineSshKeyOutput = {
  __typename?: 'InlineSSHKeyOutput';
  passphraseSecretId?: Maybe<Scalars['String']['output']>;
  sshKeySecretFileId?: Maybe<Scalars['String']['output']>;
};

export type InputVariable = {
  __typename?: 'InputVariable';
  name?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type Instance = {
  application?: Maybe<Application>;
  artifact?: Maybe<Artifact>;
  environment?: Maybe<Environment>;
  id?: Maybe<Scalars['String']['output']>;
  service?: Maybe<Service>;
};

/**  Set Instance aggregation criteria */
export type InstanceAggregation = {
  /**  Aggregate by entity */
  entityAggregation?: InputMaybe<InstanceEntityAggregation>;
  /**  Aggregate by tag */
  tagAggregation?: InputMaybe<InstanceTagAggregation>;
  /**  Aggregate by time aggregators */
  timeAggregation?: InputMaybe<TimeSeriesAggregation>;
};

export type InstanceConnection = {
  __typename?: 'InstanceConnection';
  nodes?: Maybe<Array<Maybe<Instance>>>;
  pageInfo?: Maybe<PageInfo>;
};

/**
 *  Copyright 2021 Harness Inc. All rights reserved.
 *  Use of this source code is governed by the PolyForm Shield 1.0.0 license
 *  that can be found in the licenses directory at the root of this repository, also available at
 *  https://polyformproject.org/wp-content/uploads/2020/06/PolyForm-Shield-1.0.0.txt.
 *  Possible entity values for Instance aggregation
 */
export enum InstanceEntityAggregation {
  Application = 'Application',
  CloudProvider = 'CloudProvider',
  Environment = 'Environment',
  InstanceType = 'InstanceType',
  Service = 'Service'
}

export type InstanceFilter = {
  application?: InputMaybe<IdFilter>;
  cloudProvider?: InputMaybe<IdFilter>;
  createdAt?: InputMaybe<TimeFilter>;
  deploymentType?: InputMaybe<DeploymentTypeFilter>;
  environment?: InputMaybe<IdFilter>;
  environmentType?: InputMaybe<EnvironmentTypeFilter>;
  instanceType?: InputMaybe<InstanceType>;
  orchestrationWorkflowType?: InputMaybe<OrchestrationWorkflowTypeFilter>;
  service?: InputMaybe<IdFilter>;
  tag?: InputMaybe<InstanceTagFilter>;
  workflow?: InputMaybe<IdFilter>;
};

/**  Aggregate by Instance tag */
export type InstanceTagAggregation = {
  /**  Set entity type */
  entityType?: InputMaybe<InstanceTagType>;
  /**  Set tag name */
  tagName?: InputMaybe<Scalars['String']['input']>;
};

export type InstanceTagFilter = {
  entityType?: InputMaybe<InstanceTagType>;
  tags?: InputMaybe<Array<InputMaybe<TagInput>>>;
};

export enum InstanceTagType {
  Application = 'APPLICATION',
  Environment = 'ENVIRONMENT',
  Service = 'SERVICE'
}

export enum InstanceType {
  AutoscalingGroupInstance = 'AUTOSCALING_GROUP_INSTANCE',
  CodeDeployInstance = 'CODE_DEPLOY_INSTANCE',
  Ec2Instance = 'EC2_INSTANCE',
  EcsContainerInstance = 'ECS_CONTAINER_INSTANCE',
  KubernetesContainerInstance = 'KUBERNETES_CONTAINER_INSTANCE',
  PcfInstance = 'PCF_INSTANCE',
  PhysicalHostInstance = 'PHYSICAL_HOST_INSTANCE'
}

export type IrsaCredentials = {
  delegateSelector: Scalars['String']['input'];
  usageScope?: InputMaybe<UsageScopeInput>;
};

export type JenkinsArtifactSource = ArtifactSource & {
  __typename?: 'JenkinsArtifactSource';
  artifactPaths?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  artifacts?: Maybe<ArtifactConnection>;
  collectionEnabled?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Artifact Source Id */
  id?: Maybe<Scalars['String']['output']>;
  jenkinsConnectorId?: Maybe<Scalars['String']['output']>;
  jobName?: Maybe<Scalars['String']['output']>;
  /**  Artifact source display name */
  name?: Maybe<Scalars['String']['output']>;
};


export type JenkinsArtifactSourceArtifactsArgs = {
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type JenkinsConnector = Connector & {
  __typename?: 'JenkinsConnector';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type JiraApprovalDetails = ApprovalDetails & {
  __typename?: 'JiraApprovalDetails';
  approvalCondition?: Maybe<Scalars['String']['output']>;
  approvalId?: Maybe<Scalars['String']['output']>;
  approvalType?: Maybe<ApprovalStateType>;
  currentStatus?: Maybe<Scalars['String']['output']>;
  issueKey?: Maybe<Scalars['String']['output']>;
  issueUrl?: Maybe<Scalars['String']['output']>;
  rejectionCondition?: Maybe<Scalars['String']['output']>;
  stageName?: Maybe<Scalars['String']['output']>;
  startedAt?: Maybe<Scalars['Long']['output']>;
  stepName?: Maybe<Scalars['String']['output']>;
  triggeredBy?: Maybe<EmbeddedUser>;
  willExpireAt?: Maybe<Scalars['Long']['output']>;
};

export type JiraConnector = Connector & {
  __typename?: 'JiraConnector';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  delegateSelectors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/**
 *  Copyright 2021 Harness Inc. All rights reserved.
 *  Use of this source code is governed by the PolyForm Shield 1.0.0 license
 *  that can be found in the licenses directory at the root of this repository, also available at
 *  https://polyformproject.org/wp-content/uploads/2020/06/PolyForm-Shield-1.0.0.txt.
 */
export type K8sCloudProviderInput = {
  clusterDetailsType: ClusterDetailsType;
  inheritClusterDetails?: InputMaybe<InheritClusterDetails>;
  manualClusterDetails?: InputMaybe<ManualClusterDetails>;
  name: Scalars['String']['input'];
  skipValidation?: InputMaybe<Scalars['Boolean']['input']>;
};

export type K8sContainerInfo = {
  __typename?: 'K8sContainerInfo';
  containerId?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type K8sLabel = {
  __typename?: 'K8sLabel';
  name?: Maybe<Scalars['String']['output']>;
  values?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type K8sLabelConnection = {
  __typename?: 'K8sLabelConnection';
  nodes?: Maybe<Array<Maybe<K8sLabel>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type K8sLabelFilter = {
  cluster?: InputMaybe<IdFilter>;
  endTime?: InputMaybe<TimeFilter>;
  namespace?: InputMaybe<IdFilter>;
  startTime?: InputMaybe<TimeFilter>;
  workloadName?: InputMaybe<IdFilter>;
};

export type K8sLabelInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  values?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type K8sPodInstance = Instance & {
  __typename?: 'K8sPodInstance';
  application?: Maybe<Application>;
  artifact?: Maybe<Artifact>;
  containers?: Maybe<Array<Maybe<K8sContainerInfo>>>;
  environment?: Maybe<Environment>;
  id?: Maybe<Scalars['String']['output']>;
  ip?: Maybe<Scalars['String']['output']>;
  namespace?: Maybe<Scalars['String']['output']>;
  podName?: Maybe<Scalars['String']['output']>;
  releaseName?: Maybe<Scalars['String']['output']>;
  service?: Maybe<Service>;
};

export type K8sWorkloadRecommendationPreset = {
  __typename?: 'K8sWorkloadRecommendationPreset';
  cpuLimit?: Maybe<Scalars['Number']['output']>;
  cpuRequest?: Maybe<Scalars['Number']['output']>;
  memoryLimit?: Maybe<Scalars['Number']['output']>;
  memoryRequest?: Maybe<Scalars['Number']['output']>;
  minCpuMilliCores?: Maybe<Scalars['Long']['output']>;
  minMemoryBytes?: Maybe<Scalars['Long']['output']>;
  safetyMargin?: Maybe<Scalars['Number']['output']>;
};

export type KerberosAuthentication = {
  __typename?: 'KerberosAuthentication';
  port?: Maybe<Scalars['Int']['output']>;
  principal?: Maybe<Scalars['String']['output']>;
  realm?: Maybe<Scalars['String']['output']>;
};

export type KerberosAuthenticationInput = {
  port: Scalars['Int']['input'];
  principal: Scalars['String']['input'];
  realm: Scalars['String']['input'];
  tgtGenerationMethod?: InputMaybe<TgtGenerationMethod>;
};

export type KerberosPassword = {
  passwordSecretId: Scalars['String']['input'];
};

export type KeyTabFile = {
  filePath: Scalars['String']['input'];
};

export type KeyValuePair = {
  __typename?: 'KeyValuePair';
  key?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type KubernetesCloudProvider = CloudProvider & {
  __typename?: 'KubernetesCloudProvider';
  ceHealthStatus?: Maybe<CeHealthStatus>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isContinuousEfficiencyEnabled?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  skipK8sEventCollection?: Maybe<Scalars['Boolean']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type LdapSettings = LinkedSsoSetting & {
  __typename?: 'LDAPSettings';
  groupDN?: Maybe<Scalars['String']['output']>;
  groupName?: Maybe<Scalars['String']['output']>;
  ssoProviderId?: Maybe<Scalars['String']['output']>;
};

export type LdapSettingsInput = {
  groupDN: Scalars['String']['input'];
  groupName: Scalars['String']['input'];
  ssoProviderId: Scalars['String']['input'];
};

export type LastCollected = ArtifactSelection & {
  __typename?: 'LastCollected';
  artifactFilter?: Maybe<Scalars['String']['output']>;
  artifactSourceId?: Maybe<Scalars['String']['output']>;
  artifactSourceName?: Maybe<Scalars['String']['output']>;
  regex?: Maybe<Scalars['Boolean']['output']>;
  serviceId?: Maybe<Scalars['String']['output']>;
  serviceName?: Maybe<Scalars['String']['output']>;
};

/** Beta: Manifest selection details when ManifestSelectionType is LAST_COLLECTED */
export type LastCollectedManifest = ManifestSelection & {
  __typename?: 'LastCollectedManifest';
  appManifestId?: Maybe<Scalars['String']['output']>;
  appManifestName?: Maybe<Scalars['String']['output']>;
  manifestSelectionType?: Maybe<ManifestSelectionType>;
  serviceId?: Maybe<Scalars['String']['output']>;
  serviceName?: Maybe<Scalars['String']['output']>;
  versionRegex?: Maybe<Scalars['String']['output']>;
};

export type LastDayCost = {
  __typename?: 'LastDayCost';
  cpu?: Maybe<Scalars['Number']['output']>;
  info?: Maybe<Scalars['String']['output']>;
  memory?: Maybe<Scalars['Number']['output']>;
};

export type LastDeployedFromPipeline = ArtifactSelection & {
  __typename?: 'LastDeployedFromPipeline';
  pipelineId?: Maybe<Scalars['String']['output']>;
  pipelineName?: Maybe<Scalars['String']['output']>;
  serviceId?: Maybe<Scalars['String']['output']>;
  serviceName?: Maybe<Scalars['String']['output']>;
};

export type LastDeployedFromWorkflow = ArtifactSelection & {
  __typename?: 'LastDeployedFromWorkflow';
  serviceId?: Maybe<Scalars['String']['output']>;
  serviceName?: Maybe<Scalars['String']['output']>;
  workflowId?: Maybe<Scalars['String']['output']>;
  workflowName?: Maybe<Scalars['String']['output']>;
};

/** Beta: Manifest selection details when ManifestSelectionType is LAST_DEPLOYED pipeline */
export type LastDeployedManifestFromPipeline = ManifestSelection & {
  __typename?: 'LastDeployedManifestFromPipeline';
  manifestSelectionType?: Maybe<ManifestSelectionType>;
  pipelineId?: Maybe<Scalars['String']['output']>;
  pipelineName?: Maybe<Scalars['String']['output']>;
  serviceId?: Maybe<Scalars['String']['output']>;
  serviceName?: Maybe<Scalars['String']['output']>;
};

/** Beta: Manifest selection details when ManifestSelectionType is LAST_DEPLOYED workflow */
export type LastDeployedManifestFromWorkflow = ManifestSelection & {
  __typename?: 'LastDeployedManifestFromWorkflow';
  manifestSelectionType?: Maybe<ManifestSelectionType>;
  serviceId?: Maybe<Scalars['String']['output']>;
  serviceName?: Maybe<Scalars['String']['output']>;
  workflowId?: Maybe<Scalars['String']['output']>;
  workflowName?: Maybe<Scalars['String']['output']>;
};

export type LinkedSsoSetting = {
  ssoProviderId?: Maybe<Scalars['String']['output']>;
};

export type LogzConnector = Connector & {
  __typename?: 'LogzConnector';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Manifest = {
  __typename?: 'Manifest';
  /**  Manifest Source Id */
  applicationManifestId?: Maybe<Scalars['String']['output']>;
  /** Date Time when manifest was created */
  createdAt?: Maybe<Scalars['Long']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  /** manifest UUID */
  id?: Maybe<Scalars['String']['output']>;
  /** manifest name */
  name?: Maybe<Scalars['String']['output']>;
  /** Versioon */
  version?: Maybe<Scalars['String']['output']>;
};

/** Beta: Should be provided when conditionType is ON_NEW_MANIFEST. */
export type ManifestConditionInput = {
  appManifestId: Scalars['String']['input'];
  versionRegex?: InputMaybe<Scalars['String']['input']>;
};

/** Beta: Manifest selection details when ManifestSelectionType is PIPELINE_SOURCE */
export type ManifestFromTriggeringPipeline = ManifestSelection & {
  __typename?: 'ManifestFromTriggeringPipeline';
  manifestSelectionType?: Maybe<ManifestSelectionType>;
  serviceId?: Maybe<Scalars['String']['output']>;
  serviceName?: Maybe<Scalars['String']['output']>;
};

/** Beta: Manifest selection details when ManifestSelectionType is WEBHOOK_VARIABLE */
export type ManifestFromWebhookPayload = ManifestSelection & {
  __typename?: 'ManifestFromWebhookPayload';
  appManifestId?: Maybe<Scalars['String']['output']>;
  appManifestName?: Maybe<Scalars['String']['output']>;
  manifestSelectionType?: Maybe<ManifestSelectionType>;
  serviceId?: Maybe<Scalars['String']['output']>;
  serviceName?: Maybe<Scalars['String']['output']>;
};

export enum ManifestInputType {
  HelmChartId = 'HELM_CHART_ID',
  VersionNumber = 'VERSION_NUMBER'
}

/** Beta: Helm chart selections needed to trigger the execution */
export type ManifestSelection = {
  manifestSelectionType?: Maybe<ManifestSelectionType>;
  serviceId?: Maybe<Scalars['String']['output']>;
  serviceName?: Maybe<Scalars['String']['output']>;
};

/** Beta: Manifest Selections required for the execution */
export type ManifestSelectionInput = {
  /**  Application Manifest Id to select helm chart from. Required for LAST_COLLECTED,WEBHOOK_VARIABLE */
  appManifestId?: InputMaybe<Scalars['String']['input']>;
  manifestSelectionType: ManifestSelectionType;
  /** Pipeline Id to select artifact from, Required when using LAST_DEPLOYED PIPELINE */
  pipelineId?: InputMaybe<Scalars['String']['input']>;
  /** Id of the service providing manifest selection for */
  serviceId: Scalars['String']['input'];
  /** Version regex to filter artifacts when using LAST_COLLECTED */
  versionRegex?: InputMaybe<Scalars['String']['input']>;
  /** Workflow Id to select helm chart from, Required when using LAST_DEPLOYED WORKFLOW */
  workflowId?: InputMaybe<Scalars['String']['input']>;
};

export enum ManifestSelectionType {
  /** Beta: Manifest will be selected from the triggering application manifest */
  FromAppManifest = 'FROM_APP_MANIFEST',
  /** Beta: Last collected Manifest for the service will be selected */
  LastCollected = 'LAST_COLLECTED',
  /** Beta: Last succesfully deployed Manifest from the workflow/pipeline for the service will be selected */
  LastDeployed = 'LAST_DEPLOYED',
  /** Beta: Manifest will be selected from the triggering pipeline */
  PipelineSource = 'PIPELINE_SOURCE',
  /** Beta: Manifest for the service will be selected from the webhook payload */
  WebhookVariable = 'WEBHOOK_VARIABLE'
}

export type ManifestValueInput = {
  /** Beta: helm chart id if value type is HELM_CHART_ID */
  helmChartId?: InputMaybe<Scalars['String']['input']>;
  valueType: ManifestInputType;
  /** Beta: Build number input if value type is BUILD_NUMBER */
  versionNumber?: InputMaybe<VersionNumberInput>;
};

export type ManualClusterDetails = {
  masterUrl: Scalars['String']['input'];
  none?: InputMaybe<None>;
  oidcToken?: InputMaybe<OidcToken>;
  serviceAccountToken?: InputMaybe<ServiceAccountToken>;
  type: ManualClusterDetailsAuthenticationType;
  usageScope?: InputMaybe<UsageScopeInput>;
  usernameAndPassword?: InputMaybe<UsernameAndPasswordAuthentication>;
};

export enum ManualClusterDetailsAuthenticationType {
  ClientKeyAndCertificate = 'CLIENT_KEY_AND_CERTIFICATE',
  Custom = 'CUSTOM',
  OidcToken = 'OIDC_TOKEN',
  ServiceAccountToken = 'SERVICE_ACCOUNT_TOKEN',
  UsernameAndPassword = 'USERNAME_AND_PASSWORD'
}

export type Mutation = {
  __typename?: 'Mutation';
  addAccountPermission?: Maybe<AddAccountPermissionPayload>;
  addAppPermission?: Maybe<AddAppPermissionPayload>;
  /**  Add delegate scope */
  addDelegegateScope?: Maybe<AddDelegateScopePayload>;
  addUserToUserGroup?: Maybe<AddUserToUserGroupPayload>;
  /**
   *  Approve or Reject the Approvals
   *
   */
  approveOrRejectApprovals?: Maybe<ApproveOrRejectApprovalsInputPayload>;
  /** Clean an artifact stream */
  artifactCleanup?: Maybe<ArtifactCleanUpPayload>;
  /**  attach all scope to delegate */
  attachAllScopesToDelegate?: Maybe<AttachScopeToDelegatePayload>;
  /**  attach scope to delegate */
  attachScopeToDelegate?: Maybe<AttachScopeToDelegatePayload>;
  /**  Attach a tag to an entity */
  attachTag?: Maybe<AttachTagPayload>;
  /** Create an ApiKey */
  createApiKey?: Maybe<CreateApiKeyPayload>;
  /** Creates a new Application and returns it */
  createApplication?: Maybe<CreateApplicationPayload>;
  /**  Beta */
  createCloudProvider?: Maybe<CreateCloudProviderPayload>;
  /**  Creates a new Connector and returns it */
  createConnector?: Maybe<CreateConnectorPayload>;
  /** Creates a new Deployment Freeze Window and returns it. */
  createDeploymentFreezeWindow?: Maybe<CreateDeploymentFreezeWindowPayload>;
  /** Creates a new events config and returns it */
  createEventsConfig?: Maybe<CreateEventsConfigPayload>;
  /**  Beta: Create a secret. */
  createSecret?: Maybe<CreateSecretPayload>;
  /**  Create secret manager */
  createSecretManager?: Maybe<UpsertSecretManagerPayload>;
  /** Creates a new Trigger and returns it */
  createTrigger?: Maybe<TriggerPayload>;
  createUser?: Maybe<CreateUserPayload>;
  createUserGroup?: Maybe<CreateUserGroupPayload>;
  /**  Approve or reject delegate */
  delegateApproveReject?: Maybe<DelegateApproveRejectPayload>;
  /** Delete an ApiKey */
  deleteApiKey?: Maybe<DeleteApiKeyPayload>;
  /** Deletes an application. */
  deleteApplication?: Maybe<DeleteApplicationPayload>;
  /**  Beta */
  deleteCloudProvider?: Maybe<DeleteCloudProviderPayload>;
  /**  Deletes a Connector. */
  deleteConnector?: Maybe<DeleteConnectorPayload>;
  /**  Deletes delegate. */
  deleteDelegate?: Maybe<DeleteDelegatePayload>;
  /** Deletes an existing Deployment Freeze Window. */
  deleteDeploymentFreezeWindow?: Maybe<DeleteDeploymentFreezeWindowPayload>;
  /** Deletes an events config. */
  deleteEventsConfig?: Maybe<DeleteEventsConfigPayload>;
  /**  Beta: Delete a secret. */
  deleteSecret?: Maybe<DeleteSecretPayload>;
  /**  Delete secret manager */
  deleteSecretManager?: Maybe<DeleteSecretManagerPayload>;
  /** Deletes a Trigger. */
  deleteTrigger?: Maybe<DeleteTriggerPayload>;
  deleteUser?: Maybe<DeleteUserPayload>;
  deleteUserGroup?: Maybe<DeleteUserGroupPayload>;
  /**  Detach a tag from an entity */
  detachTag?: Maybe<DetachTagPayload>;
  /**  Beta: Start an export of executions/deployments. */
  exportExecutions?: Maybe<ExportExecutionsPayload>;
  /**  Beta: Resume a pipeline with Runtime Inputs */
  pipelineResumeRuntime?: Maybe<ContinueExecutionPayload>;
  /** Removes Git Sync Configuration associated with an application. Returns updated application. */
  removeApplicationGitSyncConfig?: Maybe<RemoveApplicationGitSyncConfigPayload>;
  removeUserFromUserGroup?: Maybe<RemoveUserFromUserGroupPayload>;
  /**
   *  Resume a unsuccessful pipeline. Any stage which was started (both successful/unseccessful) can be given
   *  to resume. Pipeline is resumed in block of parallel groups. i.e if given stage has parallel stages all will be
   *  restarted.
   */
  resumeExecution?: Maybe<ResumeExecutionPayload>;
  /** Disable artifact collection for artifact source */
  setArtifactCollectionEnabled?: Maybe<SetArtifactCollectionEnabledPayload>;
  /**  Beta: Trigger a Workflow/Pipeline Execution. */
  startExecution?: Maybe<StartExecutionPayload>;
  /**  Get details about all templates for account */
  templateList?: Maybe<TemplateListPayload>;
  toggleDeploymentFreezeWindow?: Maybe<ToggleDeploymentFreezeWindowPayload>;
  /** Update an ApiKey */
  updateApiKey?: Maybe<UpdateApiKeyPayload>;
  /** Updates an application and returns it. */
  updateApplication?: Maybe<UpdateApplicationPayload>;
  /** Updates  Application Git Sync Configuration. Creates the configuration, in case it does not exist. Returns updated git sync configuration. */
  updateApplicationGitSyncConfig?: Maybe<UpdateApplicationGitSyncConfigPayload>;
  /** Enable/disable Git Sync for an application. Returns updated application. */
  updateApplicationGitSyncConfigStatus?: Maybe<UpdateApplicationGitSyncConfigStatusPayload>;
  /**  Beta */
  updateCloudProvider?: Maybe<UpdateCloudProviderPayload>;
  /**  Updates a Connector and returns it. */
  updateConnector?: Maybe<UpdateConnectorPayload>;
  /** Updates an existing Deployment Freeze Window and returns it. */
  updateDeploymentFreezeWindow?: Maybe<UpdateDeploymentFreezeWindowPayload>;
  /** Updates an events config and returns it. */
  updateEventsConfig?: Maybe<UpdateEventsConfigPayload>;
  /**  Beta: Update a secret. */
  updateSecret?: Maybe<UpdateSecretPayload>;
  /**  Update secret manager */
  updateSecretManager?: Maybe<UpsertSecretManagerPayload>;
  /** Updates an Service and returns it. */
  updateServiceMetadata?: Maybe<UpdateServiceMetadataPayload>;
  /** Updates a Trigger and returns it. */
  updateTrigger?: Maybe<UpdateTriggerPayload>;
  updateUser?: Maybe<UpdateUserPayload>;
  updateUserGroup?: Maybe<UpdateUserGroupPayload>;
  updateUserGroupPermissions?: Maybe<UpdateUserGroupPermissionsPayload>;
};


export type MutationAddAccountPermissionArgs = {
  input: AddAccountPermissionInput;
};


export type MutationAddAppPermissionArgs = {
  input: AddAppPermissionInput;
};


export type MutationAddDelegegateScopeArgs = {
  input: AddDelegateScopeInput;
};


export type MutationAddUserToUserGroupArgs = {
  input: AddUserToUserGroupInput;
};


export type MutationApproveOrRejectApprovalsArgs = {
  input: ApproveOrRejectApprovalsInput;
};


export type MutationArtifactCleanupArgs = {
  input: ArtifactCleanupInput;
};


export type MutationAttachAllScopesToDelegateArgs = {
  input: AttachAllScopesToDelegateInput;
};


export type MutationAttachScopeToDelegateArgs = {
  input: AttachScopeToDelegateInput;
};


export type MutationAttachTagArgs = {
  input: AttachTagInput;
};


export type MutationCreateApiKeyArgs = {
  input: CreateApiKeyInput;
};


export type MutationCreateApplicationArgs = {
  input: CreateApplicationInput;
};


export type MutationCreateCloudProviderArgs = {
  input: CreateCloudProviderInput;
};


export type MutationCreateConnectorArgs = {
  input: CreateConnectorInput;
};


export type MutationCreateDeploymentFreezeWindowArgs = {
  input: CreateDeploymentFreezeWindowInput;
};


export type MutationCreateEventsConfigArgs = {
  input: CreateEventsConfigInput;
};


export type MutationCreateSecretArgs = {
  input: CreateSecretInput;
};


export type MutationCreateSecretManagerArgs = {
  input: CreateSecretManagerInput;
};


export type MutationCreateTriggerArgs = {
  input: CreateTriggerInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationCreateUserGroupArgs = {
  input: CreateUserGroupInput;
};


export type MutationDelegateApproveRejectArgs = {
  input: DelegateApproveRejectInput;
};


export type MutationDeleteApiKeyArgs = {
  input: DeleteApiKeyInput;
};


export type MutationDeleteApplicationArgs = {
  input: DeleteApplicationInput;
};


export type MutationDeleteCloudProviderArgs = {
  input: DeleteCloudProviderInput;
};


export type MutationDeleteConnectorArgs = {
  input: DeleteConnectorInput;
};


export type MutationDeleteDelegateArgs = {
  input: DeleteDelegateInput;
};


export type MutationDeleteDeploymentFreezeWindowArgs = {
  input: DeleteDeploymentFreezeWindowInput;
};


export type MutationDeleteEventsConfigArgs = {
  input: DeleteEventsConfigInput;
};


export type MutationDeleteSecretArgs = {
  input: DeleteSecretInput;
};


export type MutationDeleteSecretManagerArgs = {
  input: DeleteSecretManagerInput;
};


export type MutationDeleteTriggerArgs = {
  input: DeleteTriggerInput;
};


export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
};


export type MutationDeleteUserGroupArgs = {
  input: DeleteUserGroupInput;
};


export type MutationDetachTagArgs = {
  input: DetachTagInput;
};


export type MutationExportExecutionsArgs = {
  input: ExportExecutionsInput;
};


export type MutationPipelineResumeRuntimeArgs = {
  input: RuntimeExecutionInputsToResumePipeline;
};


export type MutationRemoveApplicationGitSyncConfigArgs = {
  input: RemoveApplicationGitSyncConfigInput;
};


export type MutationRemoveUserFromUserGroupArgs = {
  input: RemoveUserFromUserGroupInput;
};


export type MutationResumeExecutionArgs = {
  input?: InputMaybe<ResumeExecutionInput>;
};


export type MutationSetArtifactCollectionEnabledArgs = {
  input: SetArtifactCollectionEnabledInput;
};


export type MutationStartExecutionArgs = {
  input: StartExecutionInput;
};


export type MutationTemplateListArgs = {
  input: TemplateListInput;
};


export type MutationToggleDeploymentFreezeWindowArgs = {
  input: ToggleDeploymentFreezeWindowInput;
};


export type MutationUpdateApiKeyArgs = {
  input: UpdateApiKeyInput;
};


export type MutationUpdateApplicationArgs = {
  input: UpdateApplicationInput;
};


export type MutationUpdateApplicationGitSyncConfigArgs = {
  input: UpdateApplicationGitSyncConfigInput;
};


export type MutationUpdateApplicationGitSyncConfigStatusArgs = {
  input: UpdateApplicationGitSyncConfigStatusInput;
};


export type MutationUpdateCloudProviderArgs = {
  input: UpdateCloudProviderInput;
};


export type MutationUpdateConnectorArgs = {
  input: UpdateConnectorInput;
};


export type MutationUpdateDeploymentFreezeWindowArgs = {
  input: UpdateDeploymentFreezeWindowInput;
};


export type MutationUpdateEventsConfigArgs = {
  input: UpdateEventsConfigInput;
};


export type MutationUpdateSecretArgs = {
  input: UpdateSecretInput;
};


export type MutationUpdateSecretManagerArgs = {
  input: UpdateSecretManagerInput;
};


export type MutationUpdateServiceMetadataArgs = {
  input: UpdateServiceMetadataInput;
};


export type MutationUpdateTriggerArgs = {
  input: UpdateTriggerInput;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};


export type MutationUpdateUserGroupArgs = {
  input: UpdateUserGroupInput;
};


export type MutationUpdateUserGroupPermissionsArgs = {
  input?: InputMaybe<UpdateUserGroupPermissionsInput>;
};

export type NameValuePair = {
  __typename?: 'NameValuePair';
  name?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type NewRelicConnector = Connector & {
  __typename?: 'NewRelicConnector';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type NexusArtifactSource = ArtifactSource & {
  __typename?: 'NexusArtifactSource';
  artifacts?: Maybe<ArtifactConnection>;
  collectionEnabled?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Artifact Source Id */
  id?: Maybe<Scalars['String']['output']>;
  /**  Artifact source display name */
  name?: Maybe<Scalars['String']['output']>;
  parameters?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  properties?: Maybe<NexusProps>;
};


export type NexusArtifactSourceArtifactsArgs = {
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type NexusConnector = Connector & {
  __typename?: 'NexusConnector';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  delegateSelectors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type NexusConnectorInput = {
  URL: Scalars['String']['input'];
  delegateSelectors?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name: Scalars['String']['input'];
  passwordSecretId?: InputMaybe<Scalars['String']['input']>;
  userName?: InputMaybe<Scalars['String']['input']>;
  version: NexusVersion;
};

export type NexusDockerProps = NexusProps & {
  __typename?: 'NexusDockerProps';
  dockerImageName?: Maybe<Scalars['String']['output']>;
  dockerRegistryUrl?: Maybe<Scalars['String']['output']>;
  nexusConnectorId?: Maybe<Scalars['String']['output']>;
  repository?: Maybe<Scalars['String']['output']>;
  repositoryFormat?: Maybe<NexusRepositoryFormat>;
};

export type NexusMavenProps = NexusProps & {
  __typename?: 'NexusMavenProps';
  artifactId?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  classifier?: Maybe<Scalars['String']['output']>;
  extension?: Maybe<Scalars['String']['output']>;
  groupId?: Maybe<Scalars['String']['output']>;
  nexusConnectorId?: Maybe<Scalars['String']['output']>;
  repository?: Maybe<Scalars['String']['output']>;
  repositoryFormat?: Maybe<NexusRepositoryFormat>;
};

export type NexusNpmProps = NexusProps & {
  __typename?: 'NexusNpmProps';
  nexusConnectorId?: Maybe<Scalars['String']['output']>;
  packageName?: Maybe<Scalars['String']['output']>;
  repository?: Maybe<Scalars['String']['output']>;
  repositoryFormat?: Maybe<NexusRepositoryFormat>;
};

export type NexusNugetProps = NexusProps & {
  __typename?: 'NexusNugetProps';
  nexusConnectorId?: Maybe<Scalars['String']['output']>;
  packageName?: Maybe<Scalars['String']['output']>;
  repository?: Maybe<Scalars['String']['output']>;
  repositoryFormat?: Maybe<NexusRepositoryFormat>;
};

export type NexusProps = {
  nexusConnectorId?: Maybe<Scalars['String']['output']>;
  repository?: Maybe<Scalars['String']['output']>;
  repositoryFormat?: Maybe<NexusRepositoryFormat>;
};

export type NexusRawProps = NexusProps & {
  __typename?: 'NexusRawProps';
  nexusConnectorId?: Maybe<Scalars['String']['output']>;
  packageName?: Maybe<Scalars['String']['output']>;
  repository?: Maybe<Scalars['String']['output']>;
  repositoryFormat?: Maybe<NexusRepositoryFormat>;
};

export enum NexusRepositoryFormat {
  Docker = 'DOCKER',
  Maven = 'MAVEN',
  Npm = 'NPM',
  Nuget = 'NUGET',
  Raw = 'RAW'
}

export enum NexusVersion {
  V2 = 'V2',
  V3 = 'V3'
}

export type None = {
  caCertificateSecretId: Scalars['String']['input'];
  clientCertificateSecretId: Scalars['String']['input'];
  clientKeyAlgorithm: Scalars['String']['input'];
  clientKeyPassphraseSecretId: Scalars['String']['input'];
  clientKeySecretId: Scalars['String']['input'];
  passwordSecretId: Scalars['String']['input'];
  serviceAccountTokenSecretId: Scalars['String']['input'];
  usageScope?: InputMaybe<UsageScopeInput>;
  userName: Scalars['String']['input'];
};

export type NotificationSettings = {
  __typename?: 'NotificationSettings';
  groupEmailAddresses?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  microsoftTeamsWebhookUrl?: Maybe<Scalars['String']['output']>;
  pagerDutyIntegrationKey?: Maybe<Scalars['String']['output']>;
  sendMailToNewMembers?: Maybe<Scalars['Boolean']['output']>;
  sendNotificationToMembers?: Maybe<Scalars['Boolean']['output']>;
  slackNotificationSetting?: Maybe<SlackNotificationSetting>;
};

export type NotificationSettingsInput = {
  groupEmailAddresses?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  microsoftTeamsWebhookUrl?: InputMaybe<Scalars['String']['input']>;
  pagerDutyIntegrationKey?: InputMaybe<Scalars['String']['input']>;
  sendMailToNewMembers?: InputMaybe<Scalars['Boolean']['input']>;
  sendNotificationToMembers?: InputMaybe<Scalars['Boolean']['input']>;
  slackNotificationSetting?: InputMaybe<SlackNotificationSettingInput>;
};

export type NumberFilter = {
  operator: NumericOperator;
  values: Array<InputMaybe<Scalars['Number']['input']>>;
};

export enum NumericOperator {
  Equals = 'EQUALS',
  GreaterThan = 'GREATER_THAN',
  GreaterThanOrEquals = 'GREATER_THAN_OR_EQUALS',
  In = 'IN',
  LessThan = 'LESS_THAN',
  LessThanOrEquals = 'LESS_THAN_OR_EQUALS',
  NotEquals = 'NOT_EQUALS'
}

export type OciPlatformInput = {
  URL: Scalars['String']['input'];
  passwordSecretId?: InputMaybe<Scalars['String']['input']>;
  userName?: InputMaybe<Scalars['String']['input']>;
};

export type OidcToken = {
  clientIdSecretId: Scalars['String']['input'];
  clientSecretSecretId: Scalars['String']['input'];
  identityProviderUrl: Scalars['String']['input'];
  passwordSecretId: Scalars['String']['input'];
  scopes: Scalars['String']['input'];
  userName: Scalars['String']['input'];
};

export type OciHelmRepoConnector = Connector & {
  __typename?: 'OciHelmRepoConnector';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type OnNewArtifact = TriggerCondition & {
  __typename?: 'OnNewArtifact';
  artifactFilter?: Maybe<Scalars['String']['output']>;
  artifactSourceId?: Maybe<Scalars['String']['output']>;
  artifactSourceName?: Maybe<Scalars['String']['output']>;
  regex?: Maybe<Scalars['Boolean']['output']>;
  triggerConditionType?: Maybe<TriggerConditionType>;
};

/** Beta: details for trigger with condition 'On Manifest changes' */
export type OnNewManifest = TriggerCondition & {
  __typename?: 'OnNewManifest';
  appManifestId?: Maybe<Scalars['String']['output']>;
  appManifestName?: Maybe<Scalars['String']['output']>;
  serviceId?: Maybe<Scalars['String']['output']>;
  triggerConditionType?: Maybe<TriggerConditionType>;
  versionRegex?: Maybe<Scalars['String']['output']>;
};

export type OnPipelineCompletion = TriggerCondition & {
  __typename?: 'OnPipelineCompletion';
  pipelineId?: Maybe<Scalars['String']['output']>;
  pipelineName?: Maybe<Scalars['String']['output']>;
  triggerConditionType?: Maybe<TriggerConditionType>;
};

export type OnSchedule = TriggerCondition & {
  __typename?: 'OnSchedule';
  cronDescription: Scalars['String']['output'];
  cronExpression: Scalars['String']['output'];
  onNewArtifactOnly?: Maybe<Scalars['Boolean']['output']>;
  triggerConditionType?: Maybe<TriggerConditionType>;
};

export type OnWebhook = TriggerCondition & {
  __typename?: 'OnWebhook';
  branchName?: Maybe<Scalars['String']['output']>;
  branchRegex?: Maybe<Scalars['String']['output']>;
  deployOnlyIfFilesChanged?: Maybe<Scalars['Boolean']['output']>;
  filePaths?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  gitConnectorId?: Maybe<Scalars['String']['output']>;
  gitConnectorName?: Maybe<Scalars['String']['output']>;
  repoName?: Maybe<Scalars['String']['output']>;
  triggerConditionType?: Maybe<TriggerConditionType>;
  webhookDetails?: Maybe<WebhoookDetails>;
  webhookEvent?: Maybe<WebhookEvent>;
  /** Beta: Webhook secret to authorize Github webhooks */
  webhookSecret?: Maybe<Scalars['String']['output']>;
  webhookSource?: Maybe<WebhookSource>;
};

export enum OrchestrationWorkflowType {
  Basic = 'BASIC',
  BlueGreen = 'BLUE_GREEN',
  Build = 'BUILD',
  Canary = 'CANARY',
  Custom = 'CUSTOM',
  MultiService = 'MULTI_SERVICE',
  Rolling = 'ROLLING'
}

export type OrchestrationWorkflowTypeFilter = {
  operator?: InputMaybe<EnumOperator>;
  values?: InputMaybe<Array<InputMaybe<OrchestrationWorkflowType>>>;
};

/**
 *  Copyright 2020 Harness Inc. All rights reserved.
 *  Use of this source code is governed by the PolyForm Shield 1.0.0 license
 *  that can be found in the licenses directory at the root of this repository, also available at
 *  https://polyformproject.org/wp-content/uploads/2020/06/PolyForm-Shield-1.0.0.txt.
 */
export type Outcome = {
  execution?: Maybe<Execution>;
};

export type OutcomeConnection = {
  __typename?: 'OutcomeConnection';
  nodes?: Maybe<Array<Maybe<Outcome>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasMore?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type ParameterValueInput = {
  /** parameter name */
  name: Scalars['String']['input'];
  /** runtime value for parameter */
  value: Scalars['String']['input'];
};

export type ParameterizedArtifactSourceInput = {
  /** name of the artifact source to which the specified build number comes from */
  artifactSourceName: Scalars['String']['input'];
  /** build number to deploy */
  buildNumber: Scalars['String']['input'];
  /** parameters and their runtime values */
  parameterValueInputs?: InputMaybe<Array<InputMaybe<ParameterValueInput>>>;
};

export type PcfCloudProvider = CloudProvider & {
  __typename?: 'PcfCloudProvider';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isContinuousEfficiencyEnabled?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type PcfCloudProviderInput = {
  endpointUrl: Scalars['String']['input'];
  name: Scalars['String']['input'];
  passwordSecretId: Scalars['String']['input'];
  skipValidation?: InputMaybe<Scalars['Boolean']['input']>;
  userName?: InputMaybe<Scalars['String']['input']>;
  userNameSecretId?: InputMaybe<Scalars['String']['input']>;
};

export type PcfInstance = Instance & {
  __typename?: 'PcfInstance';
  application?: Maybe<Application>;
  artifact?: Maybe<Artifact>;
  environment?: Maybe<Environment>;
  id?: Maybe<Scalars['String']['output']>;
  instanceIndex?: Maybe<Scalars['String']['output']>;
  organization?: Maybe<Scalars['String']['output']>;
  pcfApplicationGuid?: Maybe<Scalars['String']['output']>;
  pcfApplicationName?: Maybe<Scalars['String']['output']>;
  pcfId?: Maybe<Scalars['String']['output']>;
  service?: Maybe<Service>;
  space?: Maybe<Scalars['String']['output']>;
};

/**
 *  Copyright 2021 Harness Inc. All rights reserved.
 *  Use of this source code is governed by the PolyForm Shield 1.0.0 license
 *  that can be found in the licenses directory at the root of this repository, also available at
 *  https://polyformproject.org/wp-content/uploads/2020/06/PolyForm-Shield-1.0.0.txt.
 */
export type Permissions = {
  accountPermissions?: InputMaybe<AccountPermissionInput>;
  appPermissions?: InputMaybe<Array<InputMaybe<ApplicationPermissionInput>>>;
};

export type PhysicalDataCenterCloudProvider = CloudProvider & {
  __typename?: 'PhysicalDataCenterCloudProvider';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isContinuousEfficiencyEnabled?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type PhysicalDataCenterCloudProviderInput = {
  name: Scalars['String']['input'];
  usageScope?: InputMaybe<UsageScopeInput>;
};

export type PhysicalHostInstance = Instance & PhysicalInstance & {
  __typename?: 'PhysicalHostInstance';
  application?: Maybe<Application>;
  artifact?: Maybe<Artifact>;
  environment?: Maybe<Environment>;
  hostId?: Maybe<Scalars['String']['output']>;
  hostName?: Maybe<Scalars['String']['output']>;
  hostPublicDns?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  service?: Maybe<Service>;
};

export type PhysicalInstance = {
  hostId?: Maybe<Scalars['String']['output']>;
  hostName?: Maybe<Scalars['String']['output']>;
  hostPublicDns?: Maybe<Scalars['String']['output']>;
};

/**  Type for pipeline */
export type Pipeline = {
  __typename?: 'Pipeline';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  /**  Description of the Pipeline */
  description?: Maybe<Scalars['String']['output']>;
  /**  Pipeline identifier */
  id?: Maybe<Scalars['String']['output']>;
  /**  Name of the Pipeline */
  name?: Maybe<Scalars['String']['output']>;
  /** Variables in the Pipeline */
  pipelineVariables?: Maybe<Array<Maybe<Variable>>>;
  tags?: Maybe<Array<Maybe<Tag>>>;
};

export type PipelineAction = TriggerAction & {
  __typename?: 'PipelineAction';
  artifactSelections?: Maybe<Array<Maybe<ArtifactSelection>>>;
  /**  Beta: Coninue with default values as defined in pipeline */
  continueWithDefaultValues?: Maybe<Scalars['Boolean']['output']>;
  /** Beta: Helm chart selections needed to trigger the execution */
  manifestSelections?: Maybe<Array<Maybe<ManifestSelection>>>;
  pipelineId?: Maybe<Scalars['String']['output']>;
  pipelineName?: Maybe<Scalars['String']['output']>;
  variables?: Maybe<Array<Maybe<TriggerVariableValue>>>;
};

/**  Set Pipeline aggregation criteria */
export type PipelineAggregation = {
  /**  Aggregate by entity */
  entityAggregation?: InputMaybe<PipelineEntityAggregation>;
  /**  Aggregate by tag */
  tagAggregation?: InputMaybe<PipelineTagAggregation>;
};

export type PipelineConditionInput = {
  /** PipelineId: The trigger will be executed on success of this pipeline. */
  pipelineId: Scalars['String']['input'];
};

export type PipelineConnection = {
  __typename?: 'PipelineConnection';
  nodes?: Maybe<Array<Maybe<Pipeline>>>;
  pageInfo?: Maybe<PageInfo>;
};

/**
 *  Copyright 2021 Harness Inc. All rights reserved.
 *  Use of this source code is governed by the PolyForm Shield 1.0.0 license
 *  that can be found in the licenses directory at the root of this repository, also available at
 *  https://polyformproject.org/wp-content/uploads/2020/06/PolyForm-Shield-1.0.0.txt.
 *  Possible entity values for Pipeline aggregation
 */
export enum PipelineEntityAggregation {
  Application = 'Application',
  Pipeline = 'Pipeline'
}

/**  Type for pipeline execution */
export type PipelineExecution = Execution & {
  __typename?: 'PipelineExecution';
  application?: Maybe<Application>;
  cause?: Maybe<Cause>;
  /**  DateTime when execution started */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /**  DateTime when execution ended */
  endedAt?: Maybe<Scalars['DateTime']['output']>;
  executionUrl?: Maybe<Scalars['String']['output']>;
  failureDetails?: Maybe<Scalars['String']['output']>;
  /**  Workflow Execution Id */
  id?: Maybe<Scalars['String']['output']>;
  memberExecutions?: Maybe<ExecutionConnection>;
  notes?: Maybe<Scalars['String']['output']>;
  pipeline?: Maybe<Pipeline>;
  /**  Execution details of every stage */
  pipelineStageExecutions?: Maybe<Array<Maybe<PipelineStageExecution>>>;
  /**  DateTime when execution started */
  startedAt?: Maybe<Scalars['DateTime']['output']>;
  /**  Status of the workflow */
  status?: Maybe<ExecutionStatus>;
  tags?: Maybe<Array<Maybe<DeploymentTag>>>;
};

export type PipelineFilter = {
  application?: InputMaybe<IdFilter>;
  pipeline?: InputMaybe<IdFilter>;
  tag?: InputMaybe<PipelineTagFilter>;
};

export enum PipelineFilterType {
  Application = 'Application',
  Pipeline = 'Pipeline'
}

export type PipelinePermissionFilter = {
  __typename?: 'PipelinePermissionFilter';
  envIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  filterTypes?: Maybe<Array<Maybe<PipelinePermissionFilterType>>>;
  pipelineIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type PipelinePermissionFilterInput = {
  envIds?: InputMaybe<Array<Scalars['String']['input']>>;
  filterTypes?: InputMaybe<Array<InputMaybe<PipelinePermissionFilterType>>>;
  pipelineIds?: InputMaybe<Array<Scalars['String']['input']>>;
};

export enum PipelinePermissionFilterType {
  AllPipelines = 'ALL_PIPELINES',
  NonProductionPipelines = 'NON_PRODUCTION_PIPELINES',
  ProductionPipelines = 'PRODUCTION_PIPELINES'
}

export type PipelineRule = {
  __typename?: 'PipelineRule';
  /** Receive all current and future Pipeline events */
  allEvents: Scalars['Boolean']['output'];
  /** Receive the Events for all the Pipelines in the application */
  allPipelines: Scalars['Boolean']['output'];
  /** The specific events which are configured. Only applicable if allEvents is false */
  events?: Maybe<Array<Maybe<EventType>>>;
  /** Pipeline IDs to receive the events for. Only applicable when allPipelines is false */
  pipelineIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type PipelineRuleInput = {
  /** Receive all current and future Pipeline events */
  allEvents: Scalars['Boolean']['input'];
  /** Receive the events for all the Pipelines in the application */
  allPipelines: Scalars['Boolean']['input'];
  /** The specific events which are configured. Only applicable if allEvents is false */
  events?: InputMaybe<Array<InputMaybe<EventType>>>;
  /** Pipeline IDs to receive the events for. Only applicable when allPipelines is false */
  pipelineIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PipelineStageExecution = {
  /**  Pipeline stage element ID */
  pipelineStageElementId?: Maybe<Scalars['String']['output']>;
  /**  Pipeline stage name */
  pipelineStageName?: Maybe<Scalars['String']['output']>;
  /**  Pipeline step name */
  pipelineStepName?: Maybe<Scalars['String']['output']>;
};

/**  Aggregate by Pipeline tag */
export type PipelineTagAggregation = {
  /**  Set entity type */
  entityType?: InputMaybe<PipelineTagType>;
  /**  Set tag name */
  tagName?: InputMaybe<Scalars['String']['input']>;
};

export type PipelineTagFilter = {
  entityType?: InputMaybe<PipelineTagType>;
  tags?: InputMaybe<Array<InputMaybe<TagInput>>>;
};

export enum PipelineTagType {
  Application = 'APPLICATION',
  Pipeline = 'PIPELINE'
}

export type PrometheusConnector = Connector & {
  __typename?: 'PrometheusConnector';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export enum ProviderType {
  Bitbucket = 'BITBUCKET',
  Git = 'GIT',
  Github = 'GITHUB',
  Gitlab = 'GITLAB'
}

export type ProvisionerPermissionFilter = {
  __typename?: 'ProvisionerPermissionFilter';
  filterType?: Maybe<FilterType>;
  provisionerIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type ProvisionerPermissionFilterInput = {
  filterType?: InputMaybe<FilterType>;
  provisionerIds?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type Query = {
  __typename?: 'Query';
  /**  Get details about a Harness Application */
  application?: Maybe<Application>;
  /**  Fetch details about a Harness Application by it's name */
  applicationByName?: Maybe<Application>;
  /** Get statistics of a Harness application. */
  applicationStats?: Maybe<Data>;
  /**  Get details about Harness Applications. */
  applications?: Maybe<ApplicationConnection>;
  /**
   *  Fetch given approval Details for the given approvalId, executionId and workflowId
   *
   */
  approvalDetails?: Maybe<ApprovalDetailsPayload>;
  /**  Get details about an artifact. */
  artifact?: Maybe<Artifact>;
  /**  Get details about one or multiple Artifacts. */
  artifacts?: Maybe<ArtifactConnection>;
  /**
   * Get difference in terms of YAML for a changeSet
   * (and a specific resource within the changeSet).This returns paginated data.
   */
  auditChangeContent?: Maybe<ChangeContentConnection>;
  /** Get a list of changeSets.This returns paginated data. */
  audits?: Maybe<ChangeSetConnection>;
  ceClusterBillingData?: Maybe<CeClusterBillingData>;
  /**  Get details about a Cloud Provider. */
  cloudProvider?: Maybe<CloudProvider>;
  /**  Beta */
  cloudProviderByName?: Maybe<CloudProvider>;
  /**  Get statistics for a Cloud Provider. */
  cloudProviderStats?: Maybe<Data>;
  /**  Get details about Cloud Providers. */
  cloudProviders?: Maybe<CloudProviderConnection>;
  /**  Get details about a Connector. */
  connector?: Maybe<Connector>;
  /**  Get statistics for a Connector. */
  connectorStats?: Maybe<Data>;
  /**  Get details about Connectors. */
  connectors?: Maybe<ConnectorConnection>;
  /**  Get details about all delegates for account */
  delegateList?: Maybe<DelegateList>;
  /**  Get details about all delegates for account */
  delegateScopeList?: Maybe<DelegateScopeList>;
  /** Fetch details of a Deployment Freeze Window by id. */
  deploymentFreezeWindow?: Maybe<DeploymentFreezeWindow>;
  /** Fetch details of a Deployment Freeze Window by name. */
  deploymentFreezeWindowByName?: Maybe<DeploymentFreezeWindow>;
  /** Get statistics of one or multiple deployments. */
  deploymentStats?: Maybe<Data>;
  /**  Get details about a Harness Environment. */
  environment?: Maybe<Environment>;
  /**  Get statistics of Harness Environments */
  environmentStats?: Maybe<Data>;
  /**  Get details about one or multiple Harness Environments. */
  environments?: Maybe<EnvironmentConnection>;
  /**  Get details about a Events Config */
  eventsConfig?: Maybe<EventsConfig>;
  /**  Get details about Events Configs. */
  eventsConfigs?: Maybe<Array<Maybe<EventsConfig>>>;
  /**  Fetch details about a Events Config by it's name */
  eventsConfigsByName?: Maybe<EventsConfig>;
  /**  Get the execution status of a Workflow. */
  execution?: Maybe<Execution>;
  /** Beta: Get required inputs to start an execution of a Workflow or Pipeline */
  executionInputs?: Maybe<ExecutionInputs>;
  /**  Get a list of executions, with filtering options. */
  executions?: Maybe<ExecutionConnection>;
  /**  Get a list of frozen executions, with filtering options. */
  frozenExecutions?: Maybe<FrozenExecutionConnection>;
  /** Get details about an infrastructure using Id */
  infrastructureDefinition?: Maybe<InfrastructureDefinition>;
  /** Get details about an infrastructure using name */
  infrastructureDefinitionByName?: Maybe<InfrastructureDefinition>;
  /** Get infrastructures using filters */
  infrastructureDefinitions?: Maybe<InfrastructureDefinitionConnection>;
  /**  Get statistics about instances. */
  instanceStats?: Maybe<Data>;
  /**  Get details about instances. */
  instances?: Maybe<InstanceConnection>;
  /**  Get details about K8s labels. */
  k8sLabels?: Maybe<K8sLabelConnection>;
  k8sWorkloadRecommendations?: Maybe<WorkloadRecommendationConnection>;
  /** Lists enabled/disabled Deployment Freeze Windows. */
  listDeploymentFreezeWindows?: Maybe<DeploymentFreezeWindowConnection>;
  /**  Get a Pipeline object by ID. */
  pipeline?: Maybe<Pipeline>;
  /**  Get a Pipeline object by ID. */
  pipelineByName?: Maybe<Pipeline>;
  /**  Get statistics of Pipelines */
  pipelineStats?: Maybe<Data>;
  /**  Get details about one or multiple Pipelines. */
  pipelines?: Maybe<PipelineConnection>;
  /** Beta: Get required inputs to start an execution of a Workflow or Pipeline */
  runtimeExecutionInputsToResumePipeline?: Maybe<ExecutionInputs>;
  /**  Beta: Get details about secret. */
  secret?: Maybe<Secret>;
  /**  Beta: Get details about secret by name. */
  secretByName?: Maybe<Secret>;
  /**  Beta: Get details about a Secret Manager. */
  secretManager?: Maybe<SecretManager>;
  /**  Beta: Get Secret Manager by name. */
  secretManagerByName?: Maybe<SecretManager>;
  /**  Beta: List Secret Manager. */
  secretManagers?: Maybe<SecretManagerConnection>;
  /**  Get details about a Harness Service. */
  service?: Maybe<Service>;
  /**  Get statistics of Harness Services. */
  serviceStats?: Maybe<Data>;
  /**  Get a list of Harness Services, by applicationId. This returns paginated data. */
  services?: Maybe<ServiceConnection>;
  ssoProvider?: Maybe<SsoProvider>;
  ssoProviders?: Maybe<SsoProviderConnection>;
  /**  Get tag details using tag uuid */
  tag?: Maybe<TagEntity>;
  /**  Get tag details using tag name */
  tagByName?: Maybe<TagEntity>;
  /**  Get the list of tags. This returns paginated data. */
  tags?: Maybe<TagConnection>;
  /**  Get details about a Trigger. */
  trigger?: Maybe<Trigger>;
  /**  Get details about a Trigger  by it's name */
  triggerByName?: Maybe<Trigger>;
  /**  Get statistics of Triggers. */
  triggerStats?: Maybe<Data>;
  /**  Get a list of Harness Triggers, This returns paginated data. */
  triggers?: Maybe<TriggerConnection>;
  /** fetch a user by id */
  user?: Maybe<User>;
  /** fetch a user by email */
  userByEmail?: Maybe<User>;
  /** fetch a user by name */
  userByName?: Maybe<User>;
  userGroup?: Maybe<UserGroup>;
  userGroupByName?: Maybe<UserGroup>;
  userGroups?: Maybe<UserGroupConnection>;
  /** fetch a list of users */
  users?: Maybe<UserConnection>;
  verificationResult?: Maybe<VerificationResultConnection>;
  /**  Get statistics about continuous verification. */
  verificationStats?: Maybe<Data>;
  /**  Get a Workflow object by ID. */
  workflow?: Maybe<Workflow>;
  /**  Fetch details about a  Workflow by it's name */
  workflowByName?: Maybe<Workflow>;
  /**  Get statistics of Workflows. */
  workflowStats?: Maybe<Data>;
  /**  Get a list of Workflows, by applicationId. This returns paginated data. */
  workflows?: Maybe<WorkflowConnection>;
};


export type QueryApplicationArgs = {
  applicationId: Scalars['String']['input'];
};


export type QueryApplicationByNameArgs = {
  name: Scalars['String']['input'];
};


export type QueryApplicationStatsArgs = {
  filters?: InputMaybe<Array<InputMaybe<ApplicationFilter>>>;
  groupBy?: InputMaybe<Array<InputMaybe<ApplicationAggregation>>>;
};


export type QueryApplicationsArgs = {
  filters?: InputMaybe<Array<InputMaybe<ApplicationFilter>>>;
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryApprovalDetailsArgs = {
  applicationId: Scalars['String']['input'];
  executionId: Scalars['String']['input'];
};


export type QueryArtifactArgs = {
  artifactId: Scalars['String']['input'];
};


export type QueryArtifactsArgs = {
  filters?: InputMaybe<Array<InputMaybe<ArtifactFilter>>>;
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryAuditChangeContentArgs = {
  filters?: InputMaybe<Array<InputMaybe<ChangeContentFilter>>>;
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryAuditsArgs = {
  filters?: InputMaybe<Array<InputMaybe<ChangeSetFilter>>>;
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCeClusterBillingDataArgs = {
  aggregateFunction?: InputMaybe<Array<InputMaybe<CeAggregation>>>;
  filters?: InputMaybe<Array<InputMaybe<CeFilter>>>;
  groupBy?: InputMaybe<Array<InputMaybe<CeGroupBy>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  select?: InputMaybe<Array<InputMaybe<CeSelect>>>;
  skipRoundOff?: InputMaybe<Scalars['Boolean']['input']>;
  sortCriteria?: InputMaybe<Array<InputMaybe<CeSort>>>;
};


export type QueryCloudProviderArgs = {
  cloudProviderId: Scalars['String']['input'];
};


export type QueryCloudProviderByNameArgs = {
  name: Scalars['String']['input'];
};


export type QueryCloudProviderStatsArgs = {
  filters?: InputMaybe<Array<InputMaybe<CloudProviderFilter>>>;
  groupBy?: InputMaybe<Array<InputMaybe<CloudProviderAggregation>>>;
};


export type QueryCloudProvidersArgs = {
  filters?: InputMaybe<Array<InputMaybe<CloudProviderFilter>>>;
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryConnectorArgs = {
  connectorId: Scalars['String']['input'];
};


export type QueryConnectorStatsArgs = {
  filters?: InputMaybe<Array<InputMaybe<ConnectorFilter>>>;
  groupBy?: InputMaybe<Array<InputMaybe<ConnectorAggregation>>>;
};


export type QueryConnectorsArgs = {
  filters?: InputMaybe<Array<InputMaybe<ConnectorFilter>>>;
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryDelegateListArgs = {
  filters?: InputMaybe<Array<InputMaybe<DelegateFilter>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryDelegateScopeListArgs = {
  filters?: InputMaybe<Array<InputMaybe<DelegateScopeFilter>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryDeploymentFreezeWindowArgs = {
  id: Scalars['String']['input'];
};


export type QueryDeploymentFreezeWindowByNameArgs = {
  name: Scalars['String']['input'];
};


export type QueryDeploymentStatsArgs = {
  aggregateFunction?: InputMaybe<DeploymentAggregationFunction>;
  filters?: InputMaybe<Array<InputMaybe<DeploymentFilter>>>;
  groupBy?: InputMaybe<Array<InputMaybe<DeploymentAggregation>>>;
  includeIndirectExecutions?: InputMaybe<Scalars['Boolean']['input']>;
  sortCriteria?: InputMaybe<Array<InputMaybe<DeploymentSortCriteria>>>;
};


export type QueryEnvironmentArgs = {
  environmentId: Scalars['String']['input'];
};


export type QueryEnvironmentStatsArgs = {
  filters?: InputMaybe<Array<InputMaybe<EnvironmentFilter>>>;
  groupBy?: InputMaybe<Array<InputMaybe<EnvironmentAggregation>>>;
};


export type QueryEnvironmentsArgs = {
  filters?: InputMaybe<Array<InputMaybe<EnvironmentFilter>>>;
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryEventsConfigArgs = {
  appId: Scalars['String']['input'];
  eventsConfigId: Scalars['String']['input'];
};


export type QueryEventsConfigsArgs = {
  appId: Scalars['String']['input'];
};


export type QueryEventsConfigsByNameArgs = {
  appId: Scalars['String']['input'];
  name: Scalars['String']['input'];
};


export type QueryExecutionArgs = {
  executionId: Scalars['String']['input'];
};


export type QueryExecutionInputsArgs = {
  applicationId: Scalars['String']['input'];
  entityId: Scalars['String']['input'];
  executionType: ExecutionType;
  variableInputs?: InputMaybe<Array<InputMaybe<VariableInput>>>;
};


export type QueryExecutionsArgs = {
  filters?: InputMaybe<Array<InputMaybe<ExecutionFilter>>>;
  includeIndirectExecutions?: InputMaybe<Scalars['Boolean']['input']>;
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFrozenExecutionsArgs = {
  filters?: InputMaybe<Array<InputMaybe<FrozenExecutionFilter>>>;
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryInfrastructureDefinitionArgs = {
  infrastructureId: Scalars['String']['input'];
};


export type QueryInfrastructureDefinitionByNameArgs = {
  environmentId: Scalars['String']['input'];
  infrastructureName: Scalars['String']['input'];
};


export type QueryInfrastructureDefinitionsArgs = {
  filters?: InputMaybe<Array<InputMaybe<InfrastructureDefinitionFilter>>>;
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryInstanceStatsArgs = {
  filters?: InputMaybe<Array<InputMaybe<InstanceFilter>>>;
  groupBy?: InputMaybe<Array<InputMaybe<InstanceAggregation>>>;
};


export type QueryInstancesArgs = {
  filters?: InputMaybe<Array<InputMaybe<InstanceFilter>>>;
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryK8sLabelsArgs = {
  filters?: InputMaybe<Array<InputMaybe<K8sLabelFilter>>>;
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryK8sWorkloadRecommendationsArgs = {
  filters?: InputMaybe<Array<InputMaybe<WorkloadFilter>>>;
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryListDeploymentFreezeWindowsArgs = {
  limit: Scalars['Int']['input'];
  listEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPipelineArgs = {
  pipelineId: Scalars['String']['input'];
};


export type QueryPipelineByNameArgs = {
  applicationId: Scalars['String']['input'];
  pipelineName: Scalars['String']['input'];
};


export type QueryPipelineStatsArgs = {
  filters?: InputMaybe<Array<InputMaybe<PipelineFilter>>>;
  groupBy?: InputMaybe<Array<InputMaybe<PipelineAggregation>>>;
};


export type QueryPipelinesArgs = {
  filters?: InputMaybe<Array<InputMaybe<PipelineFilter>>>;
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryRuntimeExecutionInputsToResumePipelineArgs = {
  applicationId: Scalars['String']['input'];
  pipelineExecutionId: Scalars['String']['input'];
  pipelineStageElementId: Scalars['String']['input'];
  variableInputs?: InputMaybe<Array<InputMaybe<VariableInput>>>;
};


export type QuerySecretArgs = {
  secretId: Scalars['String']['input'];
  secretType: SecretType;
};


export type QuerySecretByNameArgs = {
  name: Scalars['String']['input'];
  secretType: SecretType;
};


export type QuerySecretManagerArgs = {
  secretManagerId: Scalars['String']['input'];
};


export type QuerySecretManagerByNameArgs = {
  name: Scalars['String']['input'];
};


export type QuerySecretManagersArgs = {
  filters?: InputMaybe<Array<InputMaybe<SecretManagerFilter>>>;
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryServiceArgs = {
  serviceId: Scalars['String']['input'];
};


export type QueryServiceStatsArgs = {
  filters?: InputMaybe<Array<InputMaybe<ServiceFilter>>>;
  groupBy?: InputMaybe<Array<InputMaybe<ServiceAggregation>>>;
};


export type QueryServicesArgs = {
  filters?: InputMaybe<Array<InputMaybe<ServiceFilter>>>;
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySsoProviderArgs = {
  ssoProviderId: Scalars['String']['input'];
};


export type QuerySsoProvidersArgs = {
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTagArgs = {
  tagId: Scalars['String']['input'];
};


export type QueryTagByNameArgs = {
  name: Scalars['String']['input'];
};


export type QueryTagsArgs = {
  filters?: InputMaybe<Array<InputMaybe<TagEntityFilter>>>;
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTriggerArgs = {
  triggerId: Scalars['String']['input'];
};


export type QueryTriggerByNameArgs = {
  applicationId: Scalars['String']['input'];
  triggerName: Scalars['String']['input'];
};


export type QueryTriggerStatsArgs = {
  filters?: InputMaybe<Array<InputMaybe<TriggerFilter>>>;
  groupBy?: InputMaybe<Array<InputMaybe<TriggerAggregation>>>;
};


export type QueryTriggersArgs = {
  filters?: InputMaybe<Array<InputMaybe<TriggerFilter>>>;
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUserArgs = {
  id: Scalars['String']['input'];
};


export type QueryUserByEmailArgs = {
  email: Scalars['String']['input'];
};


export type QueryUserByNameArgs = {
  name: Scalars['String']['input'];
};


export type QueryUserGroupArgs = {
  userGroupId: Scalars['String']['input'];
};


export type QueryUserGroupByNameArgs = {
  name: Scalars['String']['input'];
};


export type QueryUserGroupsArgs = {
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUsersArgs = {
  filters?: InputMaybe<Array<InputMaybe<UserFilter>>>;
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryVerificationResultArgs = {
  filters?: InputMaybe<Array<InputMaybe<VerificationResultFilter>>>;
  groupBy?: InputMaybe<Array<InputMaybe<VerificationAggregation>>>;
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryVerificationStatsArgs = {
  filters?: InputMaybe<Array<InputMaybe<VerificationResultFilter>>>;
  groupBy?: InputMaybe<Array<InputMaybe<VerificationAggregation>>>;
};


export type QueryWorkflowArgs = {
  workflowId: Scalars['String']['input'];
};


export type QueryWorkflowByNameArgs = {
  applicationId: Scalars['String']['input'];
  workflowName: Scalars['String']['input'];
};


export type QueryWorkflowStatsArgs = {
  filters?: InputMaybe<Array<InputMaybe<WorkflowFilter>>>;
  groupBy?: InputMaybe<Array<InputMaybe<WorkflowAggregation>>>;
};


export type QueryWorkflowsArgs = {
  filters?: InputMaybe<Array<InputMaybe<WorkflowFilter>>>;
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type RancherCloudProvider = CloudProvider & {
  __typename?: 'RancherCloudProvider';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isContinuousEfficiencyEnabled?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type RancherCloudProviderInput = {
  bearerTokenSecretId: Scalars['String']['input'];
  name: Scalars['String']['input'];
  rancherUrl: Scalars['String']['input'];
};

/**
 *  Copyright 2021 Harness Inc. All rights reserved.
 *  Use of this source code is governed by the PolyForm Shield 1.0.0 license
 *  that can be found in the licenses directory at the root of this repository, also available at
 *  https://polyformproject.org/wp-content/uploads/2020/06/PolyForm-Shield-1.0.0.txt.
 */
export type Reference = {
  __typename?: 'Reference';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type RelativeTimeRange = {
  noOfUnits: Scalars['Number']['input'];
  timeUnit: TimeUnit;
};

export type RemoveApplicationGitSyncConfigInput = {
  applicationId: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type RemoveApplicationGitSyncConfigPayload = {
  __typename?: 'RemoveApplicationGitSyncConfigPayload';
  application?: Maybe<Application>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type RemoveUserFromUserGroupInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  userGroupId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type RemoveUserFromUserGroupPayload = {
  __typename?: 'RemoveUserFromUserGroupPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  userGroup?: Maybe<UserGroup>;
};

export type RequestInfo = {
  __typename?: 'RequestInfo';
  /** IP Address of request source */
  remoteIpAddress?: Maybe<Scalars['String']['output']>;
  /** HTTP Request method */
  requestMethod?: Maybe<Scalars['String']['output']>;
  /** Resource endpoint */
  resourcePath?: Maybe<Scalars['String']['output']>;
  /** Response status code */
  responseStatusCode?: Maybe<Scalars['Number']['output']>;
  /** Request URL */
  url?: Maybe<Scalars['String']['output']>;
};

export enum RequestStatus {
  Failed = 'FAILED',
  Success = 'SUCCESS'
}

export type ResourceEntry = {
  __typename?: 'ResourceEntry';
  name?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['String']['output']>;
};

export type ResourceRequirements = {
  __typename?: 'ResourceRequirements';
  limits?: Maybe<Array<Maybe<ResourceEntry>>>;
  requests?: Maybe<Array<Maybe<ResourceEntry>>>;
  yaml?: Maybe<Scalars['String']['output']>;
};

export type ResumeExecutionInput = {
  applicationId: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  pipelineExecutionId: Scalars['String']['input'];
  /**  Name of the stage to be resumed. i.e "Stage 1" */
  pipelineStageName: Scalars['String']['input'];
};

export type ResumeExecutionPayload = {
  __typename?: 'ResumeExecutionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  execution?: Maybe<Execution>;
};

export enum RuleType {
  /** Receive all current and future Events that get added */
  All = 'ALL',
  /** Send for specific Pipelines */
  Pipeline = 'PIPELINE',
  /** Send for specific Workflows */
  Workflow = 'WORKFLOW'
}

export type RuntimeExecutionInputsToResumePipeline = {
  /**  Application ID */
  applicationId: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /**  Workflow Execution Id */
  pipelineExecutionId: Scalars['String']['input'];
  /**  Pipeline stage element ID */
  pipelineStageElementId: Scalars['String']['input'];
  /** Service inputs required for the execution */
  serviceInputs?: InputMaybe<Array<InputMaybe<ServiceInput>>>;
  /** Variable inputs required for the execution */
  variableInputs?: InputMaybe<Array<InputMaybe<VariableInput>>>;
};

export type SamlSettings = LinkedSsoSetting & {
  __typename?: 'SAMLSettings';
  groupName?: Maybe<Scalars['String']['output']>;
  ssoProviderId?: Maybe<Scalars['String']['output']>;
};

export type SamlSettingsInput = {
  groupName: Scalars['String']['input'];
  ssoProviderId: Scalars['String']['input'];
};

export type SftpArtifactSource = ArtifactSource & {
  __typename?: 'SFTPArtifactSource';
  artifactPaths?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  artifacts?: Maybe<ArtifactConnection>;
  collectionEnabled?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Artifact Source Id */
  id?: Maybe<Scalars['String']['output']>;
  /**  Artifact source display name */
  name?: Maybe<Scalars['String']['output']>;
  sftpConnectorId?: Maybe<Scalars['String']['output']>;
};


export type SftpArtifactSourceArtifactsArgs = {
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type SmbArtifactSource = ArtifactSource & {
  __typename?: 'SMBArtifactSource';
  artifactPaths?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  artifacts?: Maybe<ArtifactConnection>;
  collectionEnabled?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Artifact Source Id */
  id?: Maybe<Scalars['String']['output']>;
  /**  Artifact source display name */
  name?: Maybe<Scalars['String']['output']>;
  smbConnectorId?: Maybe<Scalars['String']['output']>;
};


export type SmbArtifactSourceArtifactsArgs = {
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type SmbConnector = Connector & {
  __typename?: 'SMBConnector';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type SnowApprovalDetails = ApprovalDetails & {
  __typename?: 'SNOWApprovalDetails';
  approvalCondition?: Maybe<Scalars['String']['output']>;
  approvalId?: Maybe<Scalars['String']['output']>;
  approvalType?: Maybe<ApprovalStateType>;
  currentStatus?: Maybe<Scalars['String']['output']>;
  rejectionCondition?: Maybe<Scalars['String']['output']>;
  stageName?: Maybe<Scalars['String']['output']>;
  startedAt?: Maybe<Scalars['Long']['output']>;
  stepName?: Maybe<Scalars['String']['output']>;
  ticketType?: Maybe<ServiceNowTicketType>;
  ticketUrl?: Maybe<Scalars['String']['output']>;
  triggeredBy?: Maybe<EmbeddedUser>;
  willExpireAt?: Maybe<Scalars['Long']['output']>;
};

export type SshAuthentication = {
  __typename?: 'SSHAuthentication';
  port?: Maybe<Scalars['Int']['output']>;
  sshAuthenticationMethod?: Maybe<SshAuthenticationMethodOutput>;
  userName?: Maybe<Scalars['String']['output']>;
};

export type SshAuthenticationInput = {
  port: Scalars['Int']['input'];
  sshAuthenticationMethod: SshAuthenticationMethod;
  userName: Scalars['String']['input'];
};

export type SshAuthenticationMethod = {
  inlineSSHKey?: InputMaybe<InlineSshKey>;
  serverPassword?: InputMaybe<SshPassword>;
  sshCredentialType: SshCredentialType;
  sshKeyFile?: InputMaybe<SshKeyFile>;
};

export type SshAuthenticationMethodOutput = {
  __typename?: 'SSHAuthenticationMethodOutput';
  inlineSSHKey?: Maybe<InlineSshKeyOutput>;
  serverPassword?: Maybe<SshPasswordOutput>;
  sshCredentialType?: Maybe<Scalars['String']['output']>;
  sshKeyFile?: Maybe<SshKeyFileOutput>;
};

export enum SshAuthenticationScheme {
  Kerberos = 'KERBEROS',
  Ssh = 'SSH'
}

export type SshAuthenticationType = KerberosAuthentication | SshAuthentication;

export type SshCredential = Secret & {
  __typename?: 'SSHCredential';
  authenticationType?: Maybe<SshAuthenticationType>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  secretReference?: Maybe<Scalars['String']['output']>;
  secretType?: Maybe<SecretType>;
  usageScope?: Maybe<UsageScope>;
};

/**
 *  Copyright 2021 Harness Inc. All rights reserved.
 *  Use of this source code is governed by the PolyForm Shield 1.0.0 license
 *  that can be found in the licenses directory at the root of this repository, also available at
 *  https://polyformproject.org/wp-content/uploads/2020/06/PolyForm-Shield-1.0.0.txt.
 */
export type SshCredentialInput = {
  authenticationScheme: SshAuthenticationScheme;
  kerberosAuthentication?: InputMaybe<KerberosAuthenticationInput>;
  name: Scalars['String']['input'];
  sshAuthentication?: InputMaybe<SshAuthenticationInput>;
  usageScope?: InputMaybe<UsageScopeInput>;
};

export enum SshCredentialType {
  Password = 'PASSWORD',
  SshKey = 'SSH_KEY',
  SshKeyFilePath = 'SSH_KEY_FILE_PATH'
}

export enum SshCredentialTypeOutput {
  Password = 'PASSWORD',
  SshKey = 'SSH_KEY',
  SshKeyFilePath = 'SSH_KEY_FILE_PATH'
}

export type SshKeyFile = {
  passphraseSecretId?: InputMaybe<Scalars['String']['input']>;
  path: Scalars['String']['input'];
};

export type SshKeyFileOutput = {
  __typename?: 'SSHKeyFileOutput';
  passphraseSecretId?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Scalars['String']['output']>;
};

export type SshPassword = {
  passwordSecretId: Scalars['String']['input'];
};

export type SshPasswordOutput = {
  __typename?: 'SSHPasswordOutput';
  passwordSecretId?: Maybe<Scalars['String']['output']>;
};

export type SsoProvider = {
  __typename?: 'SSOProvider';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  ssoType?: Maybe<SsoType>;
};

export type SsoProviderConnection = {
  __typename?: 'SSOProviderConnection';
  nodes?: Maybe<Array<Maybe<SsoProvider>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type SsoSettingInput = {
  ldapSettings?: InputMaybe<LdapSettingsInput>;
  samlSettings?: InputMaybe<SamlSettingsInput>;
};

export enum SsoType {
  Ldap = 'LDAP',
  Saml = 'SAML'
}

export type ScheduleConditionInput = {
  /** Cron Expression: The time format must be a cron quartz expression. */
  cronExpression: Scalars['String']['input'];
  onNewArtifactOnly?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Secret = {
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  secretReference?: Maybe<Scalars['String']['output']>;
  secretType?: Maybe<SecretType>;
  usageScope?: Maybe<UsageScope>;
};

export type SecretManager = {
  __typename?: 'SecretManager';
  config?: Maybe<SecretManagerConfig>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  usageScope?: Maybe<UsageScope>;
};

export type SecretManagerConfig = CustomSecretManagerConfig;

export type SecretManagerConnection = {
  __typename?: 'SecretManagerConnection';
  nodes?: Maybe<Array<Maybe<SecretManager>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type SecretManagerFilter = {
  secretManager?: InputMaybe<IdFilter>;
  type?: InputMaybe<SecretManagerTypeFilter>;
};

export enum SecretManagerType {
  AwsKms = 'AWS_KMS',
  AwsSecretManager = 'AWS_SECRET_MANAGER',
  AzureKeyVault = 'AZURE_KEY_VAULT',
  Custom = 'CUSTOM',
  GoogleKms = 'GOOGLE_KMS',
  HashicorpVault = 'HASHICORP_VAULT'
}

export type SecretManagerTypeFilter = {
  operator?: InputMaybe<EnumOperator>;
  values?: InputMaybe<Array<InputMaybe<SecretManagerType>>>;
};

export enum SecretType {
  EncryptedFile = 'ENCRYPTED_FILE',
  EncryptedText = 'ENCRYPTED_TEXT',
  SshCredential = 'SSH_CREDENTIAL',
  WinrmCredential = 'WINRM_CREDENTIAL'
}

/**  Service Type */
export type Service = {
  __typename?: 'Service';
  artifactSources?: Maybe<Array<Maybe<ArtifactSource>>>;
  /**  Artifact type deployed by this Service */
  artifactType?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  /**  Deployment Type: SSH, Helm, or Kubernetes */
  deploymentType?: Maybe<Scalars['String']['output']>;
  /**  Description of the Service */
  description?: Maybe<Scalars['String']['output']>;
  /**  Service ID */
  id?: Maybe<Scalars['String']['output']>;
  /**  Name of the Service */
  name?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Maybe<Tag>>>;
};

export type ServiceAccountToken = {
  serviceAccountTokenSecretId: Scalars['String']['input'];
};

/**  Set Service aggregation criteria */
export type ServiceAggregation = {
  /**  Aggregate by entity */
  entityAggregation?: InputMaybe<ServiceEntityAggregation>;
  /**  Aggregate by tag */
  tagAggregation?: InputMaybe<ServiceTagAggregation>;
};

export type ServiceConnection = {
  __typename?: 'ServiceConnection';
  nodes?: Maybe<Array<Maybe<Service>>>;
  pageInfo?: Maybe<PageInfo>;
};

/**
 *  Copyright 2021 Harness Inc. All rights reserved.
 *  Use of this source code is governed by the PolyForm Shield 1.0.0 license
 *  that can be found in the licenses directory at the root of this repository, also available at
 *  https://polyformproject.org/wp-content/uploads/2020/06/PolyForm-Shield-1.0.0.txt.
 *  Possible entity values for Service aggregation
 */
export enum ServiceEntityAggregation {
  Application = 'Application',
  ArtifactType = 'ArtifactType',
  DeploymentType = 'DeploymentType',
  Service = 'Service'
}

export type ServiceFilter = {
  application?: InputMaybe<IdFilter>;
  deploymentType?: InputMaybe<DeploymentTypeFilter>;
  service?: InputMaybe<IdFilter>;
  tag?: InputMaybe<ServiceTagFilter>;
};

export enum ServiceFilterType {
  All = 'ALL',
  Custom = 'CUSTOM'
}

export type ServiceInput = {
  /** artifact inputs for the service */
  artifactValueInput?: InputMaybe<ArtifactValueInput>;
  /** Beta: Manifest inputs for the service */
  manifestValueInput?: InputMaybe<ManifestValueInput>;
  /** name of the service providing input for */
  name: Scalars['String']['input'];
};

export type ServiceNowConnector = Connector & {
  __typename?: 'ServiceNowConnector';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  delegateSelectors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export enum ServiceNowTicketType {
  ChangeRequest = 'CHANGE_REQUEST',
  ChangeTask = 'CHANGE_TASK',
  Incident = 'INCIDENT',
  Problem = 'PROBLEM'
}

export type ServicePermissionFilter = {
  __typename?: 'ServicePermissionFilter';
  filterType?: Maybe<FilterType>;
  serviceIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type ServicePermissionFilterInput = {
  filterType?: InputMaybe<FilterType>;
  serviceIds?: InputMaybe<Array<Scalars['String']['input']>>;
};

/**  Aggregate by Service tag */
export type ServiceTagAggregation = {
  /**  Set entity type */
  entityType?: InputMaybe<ServiceTagType>;
  /**  Set tag name */
  tagName?: InputMaybe<Scalars['String']['input']>;
};

export type ServiceTagFilter = {
  entityType?: InputMaybe<ServiceTagType>;
  tags?: InputMaybe<Array<InputMaybe<TagInput>>>;
};

export enum ServiceTagType {
  Application = 'APPLICATION',
  Service = 'SERVICE'
}

export enum ServiceTypeFilterInput {
  All = 'ALL',
  Custom = 'CUSTOM'
}

export type SetArtifactCollectionEnabledInput = {
  /** Unique ID of the artifact stream */
  appId: Scalars['String']['input'];
  artifactCollectionEnabled: Scalars['Boolean']['input'];
  artifactStreamId: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type Setup = {
  __typename?: 'Setup';
  duration?: Maybe<Scalars['Long']['output']>;
  endTime?: Maybe<Scalars['Long']['output']>;
  freezeOccurrence?: Maybe<FreezeOccurrenceType>;
  from?: Maybe<Scalars['Long']['output']>;
  isDurationBased?: Maybe<Scalars['Boolean']['output']>;
  timeZone?: Maybe<Scalars['String']['output']>;
  to?: Maybe<Scalars['Long']['output']>;
  untilForever?: Maybe<Scalars['Boolean']['output']>;
};

export type SetupInput = {
  /** Input the duration in milliseconds only when 'isDurationBased' is 'true'. */
  duration?: InputMaybe<Scalars['Long']['input']>;
  /** Input expiry time of the deployment freeze window if 'untilForever' is selected as 'false'. */
  expiryTime?: InputMaybe<Scalars['Long']['input']>;
  /** Input the frequency for a recurring deployment freeze window. If not recurring leave it be null. */
  freezeOccurrence?: InputMaybe<FreezeOccurrenceType>;
  /** Input the start time of the freeze only when 'isDurationBased' is 'false'. */
  from?: InputMaybe<Scalars['Long']['input']>;
  /** Input 'true' for Duration-Based deployment freeze windows else 'false' for Schedule-Based deployment freeze windows. */
  isDurationBased: Scalars['Boolean']['input'];
  /** Input a valid region based ID for time zone. Eg. Asia/Calcutta */
  timeZone: Scalars['String']['input'];
  /** Input the end time of the freeze only when 'isDurationBased' is 'false'. */
  to?: InputMaybe<Scalars['Long']['input']>;
  /** Input 'true' for running this Scheduled-Based freeze window forever(max 5 Years from now) else input 'false' and enter the expiry time for the window. */
  untilForever?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SftpConnector = Connector & {
  __typename?: 'SftpConnector';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type ShellScriptDetails = ApprovalDetails & {
  __typename?: 'ShellScriptDetails';
  approvalId?: Maybe<Scalars['String']['output']>;
  approvalType?: Maybe<ApprovalStateType>;
  retryInterval?: Maybe<Scalars['Long']['output']>;
  stageName?: Maybe<Scalars['String']['output']>;
  startedAt?: Maybe<Scalars['Long']['output']>;
  stepName?: Maybe<Scalars['String']['output']>;
  triggeredBy?: Maybe<EmbeddedUser>;
  willExpireAt?: Maybe<Scalars['Long']['output']>;
};

export type SinglePointData = {
  __typename?: 'SinglePointData';
  dataPoint?: Maybe<DataPoint>;
};

export type SlackConnector = Connector & {
  __typename?: 'SlackConnector';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type SlackNotificationSetting = {
  __typename?: 'SlackNotificationSetting';
  slackChannelName?: Maybe<Scalars['String']['output']>;
  slackWebhookURL?: Maybe<Scalars['String']['output']>;
};

export type SlackNotificationSettingInput = {
  slackChannelName?: InputMaybe<Scalars['String']['input']>;
  slackWebhookURL?: InputMaybe<Scalars['String']['input']>;
};

export type SmtpConnector = Connector & {
  __typename?: 'SmtpConnector';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** This data structure will be useful for bar charts which are aggregated over a period of time */
export enum SortOrder {
  Ascending = 'ASCENDING',
  Descending = 'DESCENDING'
}

export type SplunkConnector = Connector & {
  __typename?: 'SplunkConnector';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type SpotInstCloudProvider = CloudProvider & {
  __typename?: 'SpotInstCloudProvider';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isContinuousEfficiencyEnabled?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type SpotInstCloudProviderInput = {
  accountId: Scalars['String']['input'];
  name: Scalars['String']['input'];
  tokenSecretId: Scalars['String']['input'];
};

export type StackedData = {
  __typename?: 'StackedData';
  dataPoints?: Maybe<Array<Maybe<StackedDataPoint>>>;
};

export type StackedDataPoint = {
  __typename?: 'StackedDataPoint';
  key?: Maybe<Reference>;
  values?: Maybe<Array<Maybe<DataPoint>>>;
};

export type StackedTimeSeriesData = {
  __typename?: 'StackedTimeSeriesData';
  data?: Maybe<Array<Maybe<StackedTimeSeriesDataPoint>>>;
  label?: Maybe<Scalars['String']['output']>;
};

export type StackedTimeSeriesDataPoint = {
  __typename?: 'StackedTimeSeriesDataPoint';
  time?: Maybe<Scalars['DateTime']['output']>;
  values?: Maybe<Array<Maybe<DataPoint>>>;
};

export type StartExecutionInput = {
  /** Application identifier of a Workflow or Pipeline */
  applicationId: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** Beta: Continue with default values in case of pipelines with runtime variables */
  continueWithDefaultValues?: InputMaybe<Scalars['Boolean']['input']>;
  /** Entity identifier of a Workflow or Pipeline */
  entityId: Scalars['String']['input'];
  /** Skip deployment on the host, if the same artifact is already deployed */
  excludeHostsWithSameArtifact?: InputMaybe<Scalars['Boolean']['input']>;
  /** Workflow or Pipeline */
  executionType: ExecutionType;
  /** Execution notes */
  notes?: InputMaybe<Scalars['String']['input']>;
  /** Service inputs required for the execution */
  serviceInputs?: InputMaybe<Array<InputMaybe<ServiceInput>>>;
  /** List of hostnames, if targeted to a specific host */
  specificHosts?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Set to true if the deployment target is specific hosts. Provide specificHosts field along with this. */
  targetToSpecificHosts?: InputMaybe<Scalars['Boolean']['input']>;
  /** Variable inputs required for the executio */
  variableInputs?: InputMaybe<Array<InputMaybe<VariableInput>>>;
};

export type StartExecutionPayload = {
  __typename?: 'StartExecutionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  execution?: Maybe<Execution>;
  /** Get This field to know if there are any Warnings/Messages but the execution can be started successfully. For Example in case of user providing extra inputs. */
  warningMessage?: Maybe<Scalars['String']['output']>;
};

export type StringFilter = {
  operator: StringOperator;
  values: Array<InputMaybe<Scalars['String']['input']>>;
};

export enum StringOperator {
  Equals = 'EQUALS',
  In = 'IN'
}

export type SumoConnector = Connector & {
  __typename?: 'SumoConnector';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type TgtGenerationMethod = {
  kerberosPassword?: InputMaybe<KerberosPassword>;
  keyTabFile?: InputMaybe<KeyTabFile>;
  tgtGenerationUsing: TgtGenerationUsing;
};

export enum TgtGenerationUsing {
  KeyTabFile = 'KEY_TAB_FILE',
  Password = 'PASSWORD'
}

export type Tag = {
  __typename?: 'Tag';
  name?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type TagAggregation = {
  entityType?: InputMaybe<EntityType>;
  tagName?: InputMaybe<Scalars['String']['input']>;
};

export type TagConnection = {
  __typename?: 'TagConnection';
  nodes?: Maybe<Array<Maybe<TagEntity>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type TagEntity = {
  __typename?: 'TagEntity';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  usages?: Maybe<TagUsageConnection>;
};


export type TagEntityUsagesArgs = {
  filters?: InputMaybe<Array<InputMaybe<TagUsageFilter>>>;
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type TagEntityFilter = {
  tagId?: InputMaybe<IdFilter>;
  tagName?: InputMaybe<IdFilter>;
};

export enum TagEntityType {
  Application = 'APPLICATION',
  Environment = 'ENVIRONMENT',
  Pipeline = 'PIPELINE',
  Provisioner = 'PROVISIONER',
  Service = 'SERVICE',
  Workflow = 'WORKFLOW'
}

/**
 *  Copyright 2021 Harness Inc. All rights reserved.
 *  Use of this source code is governed by the PolyForm Shield 1.0.0 license
 *  that can be found in the licenses directory at the root of this repository, also available at
 *  https://polyformproject.org/wp-content/uploads/2020/06/PolyForm-Shield-1.0.0.txt.
 */
export type TagFilter = {
  entityType?: InputMaybe<EntityType>;
  tags?: InputMaybe<Array<InputMaybe<TagInput>>>;
};

export type TagInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type TagLink = {
  __typename?: 'TagLink';
  appId?: Maybe<Scalars['String']['output']>;
  entityId?: Maybe<Scalars['String']['output']>;
  entityType?: Maybe<TagEntityType>;
  name?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type TagUsageConnection = {
  __typename?: 'TagUsageConnection';
  nodes?: Maybe<Array<Maybe<TagLink>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type TagUsageFilter = {
  entityType?: InputMaybe<EntityTypeFilter>;
  tagName?: InputMaybe<IdFilter>;
  tagValue?: InputMaybe<IdFilter>;
};

export enum TaskGroup {
  Acr = 'ACR',
  Ami = 'AMI',
  Apm = 'APM',
  Appdynamics = 'APPDYNAMICS',
  Artifactory = 'ARTIFACTORY',
  ArtifactCollectNg = 'ARTIFACT_COLLECT_NG',
  Aws = 'AWS',
  AzureAppService = 'AZURE_APP_SERVICE',
  AzureArm = 'AZURE_ARM',
  AzureArtifacts = 'AZURE_ARTIFACTS',
  AzureVmss = 'AZURE_VMSS',
  Bamboo = 'BAMBOO',
  BatchCapabilityCheck = 'BATCH_CAPABILITY_CHECK',
  BuildSource = 'BUILD_SOURCE',
  CapabilityValidation = 'CAPABILITY_VALIDATION',
  Ce = 'CE',
  Ci = 'CI',
  CloudFormation = 'CLOUD_FORMATION',
  CloudWatch = 'CLOUD_WATCH',
  CollaborationProvider = 'COLLABORATION_PROVIDER',
  Command = 'COMMAND',
  ConnectivityValidation = 'CONNECTIVITY_VALIDATION',
  Container = 'CONTAINER',
  Custom = 'CUSTOM',
  CustomManifestFetchTask = 'CUSTOM_MANIFEST_FETCH_TASK',
  CustomManifestValuesFetchTask = 'CUSTOM_MANIFEST_VALUES_FETCH_TASK',
  Cvng = 'CVNG',
  Docker = 'DOCKER',
  DynaTrace = 'DYNA_TRACE',
  Ecr = 'ECR',
  Elk = 'ELK',
  Gcb = 'GCB',
  Gcp = 'GCP',
  Gcr = 'GCR',
  Gcs = 'GCS',
  Git = 'GIT',
  GitNg = 'GIT_NG',
  Guard_24x7 = 'GUARD_24x7',
  Helm = 'HELM',
  HelmRepoConfigValidation = 'HELM_REPO_CONFIG_VALIDATION',
  HelmValuesFetchTask = 'HELM_VALUES_FETCH_TASK',
  HostValidation = 'HOST_VALIDATION',
  Http = 'HTTP',
  HttpNg = 'HTTP_NG',
  Instana = 'INSTANA',
  Jenkins = 'JENKINS',
  Jira = 'JIRA',
  JiraNg = 'JIRA_NG',
  K8S = 'K8S',
  K8SNg = 'K8S_NG',
  Kms = 'KMS',
  Ldap = 'LDAP',
  Log = 'LOG',
  Logz = 'LOGZ',
  Newrelic = 'NEWRELIC',
  Nexus = 'NEXUS',
  Notification = 'NOTIFICATION',
  Pcf = 'PCF',
  Prometheus = 'PROMETHEUS',
  S3 = 'S3',
  Script = 'SCRIPT',
  Servicenow = 'SERVICENOW',
  Sftp = 'SFTP',
  ShellScriptNg = 'SHELL_SCRIPT_NG',
  ShellScriptProvision = 'SHELL_SCRIPT_PROVISION',
  Slack = 'SLACK',
  Smb = 'SMB',
  Splunk = 'SPLUNK',
  Spotinst = 'SPOTINST',
  Stackdriver = 'STACKDRIVER',
  Sumo = 'SUMO',
  Terraform = 'TERRAFORM',
  TerraformNg = 'TERRAFORM_NG',
  Terragrunt = 'TERRAGRUNT',
  Trigger = 'TRIGGER'
}

export type Template = {
  __typename?: 'Template';
  folderId?: Maybe<Scalars['String']['output']>;
  folderPathId?: Maybe<Scalars['String']['output']>;
  galleryId?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<TemplateType>;
  uuid?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['Long']['output']>;
};

export type TemplateListInput = {
  accountId: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['String']['input']>;
};

export type TemplateListPayload = {
  __typename?: 'TemplateListPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  nodes?: Maybe<Array<Maybe<Template>>>;
};

export type TemplatePermissionFilter = {
  __typename?: 'TemplatePermissionFilter';
  filterType?: Maybe<FilterType>;
  templateIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type TemplatePermissionFilterInput = {
  filterType?: InputMaybe<FilterType>;
  templateIds?: InputMaybe<Array<Scalars['String']['input']>>;
};

export enum TemplateType {
  ArtifactSource = 'ARTIFACT_SOURCE',
  CfCommand = 'CF_COMMAND',
  DeploymentTemplate = 'DEPLOYMENT_TEMPLATE',
  Http = 'HTTP',
  ServiceCommand = 'SERVICE_COMMAND',
  ShellScript = 'SHELL_SCRIPT',
  Ssh = 'SSH'
}

export enum TimeAggregationType {
  Day = 'DAY',
  Hour = 'HOUR',
  Month = 'MONTH',
  Week = 'WEEK'
}

export type TimeFilter = {
  operator: TimeOperator;
  value: Scalars['DateTime']['input'];
};

export enum TimeGroupType {
  Day = 'DAY',
  Hour = 'HOUR',
  Month = 'MONTH',
  Week = 'WEEK'
}

export enum TimeOperator {
  After = 'AFTER',
  Before = 'BEFORE',
  Equals = 'EQUALS'
}

export type TimeRange = {
  from: Scalars['DateTime']['input'];
  to?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Filter by time */
export type TimeRangeFilter = {
  /** Filter for a relative time period */
  relative?: InputMaybe<RelativeTimeRange>;
  /** Filter within a specific time range */
  specific?: InputMaybe<TimeRange>;
};

export type TimeSeriesAggregation = {
  timeAggregationType?: InputMaybe<TimeAggregationType>;
  timeAggregationValue?: InputMaybe<Scalars['Int']['input']>;
};

/** This data structure will serve timeseries graphs */
export type TimeSeriesData = {
  __typename?: 'TimeSeriesData';
  dataPoints?: Maybe<Array<Maybe<TimeSeriesDataPoint>>>;
  label?: Maybe<Scalars['String']['output']>;
};

export type TimeSeriesDataPoint = {
  __typename?: 'TimeSeriesDataPoint';
  time?: Maybe<Scalars['DateTime']['output']>;
  value?: Maybe<Scalars['Number']['output']>;
};

export enum TimeUnit {
  Days = 'DAYS',
  Hours = 'HOURS',
  Minutes = 'MINUTES',
  Weeks = 'WEEKS'
}

export type ToggleDeploymentFreezeWindowInput = {
  applicable: Scalars['Boolean']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
};

export type ToggleDeploymentFreezeWindowPayload = {
  __typename?: 'ToggleDeploymentFreezeWindowPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deploymentFreezeWindow?: Maybe<DeploymentFreezeWindow>;
};

export type Trigger = {
  __typename?: 'Trigger';
  /**  Action performed by the trigger: Execute workflow/pipeline */
  action?: Maybe<TriggerAction>;
  /**  The condition that will execute the Trigger: On new artifact, On pipeline completion, On Cron schedule, On webhook, On New Manifest */
  condition?: Maybe<TriggerCondition>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  /**  Description of the Trigger */
  description?: Maybe<Scalars['String']['output']>;
  excludeHostsWithSameArtifact?: Maybe<Scalars['Boolean']['output']>;
  /**  Trigger ID */
  id?: Maybe<Scalars['String']['output']>;
  /**  Name of the trigger */
  name?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Maybe<Tag>>>;
};

export type TriggerAction = {
  artifactSelections?: Maybe<Array<Maybe<ArtifactSelection>>>;
  /** Beta: Helm chart selections needed to trigger the execution */
  manifestSelections?: Maybe<Array<Maybe<ManifestSelection>>>;
  variables?: Maybe<Array<Maybe<TriggerVariableValue>>>;
};

export type TriggerActionInput = {
  /** Artifact Selections required for the execution */
  artifactSelections?: InputMaybe<Array<InputMaybe<ArtifactSelectionInput>>>;
  /**  Beta: Coninue with default values as defined in pipeline */
  continueWithDefaultValues?: InputMaybe<Scalars['Boolean']['input']>;
  /** Entity identifier of the Workflow or Pipeline */
  entityId: Scalars['String']['input'];
  /** Skip deployment on the host, if the same artifact is already deployed */
  excludeHostsWithSameArtifact?: InputMaybe<Scalars['Boolean']['input']>;
  /** Execution type: Workflow/Pipeline */
  executionType: ExecutionType;
  /** Beta: Manifest Selections required for the execution */
  manifestSelections?: InputMaybe<Array<InputMaybe<ManifestSelectionInput>>>;
  /** Variable inputs required for the execution */
  variables?: InputMaybe<Array<InputMaybe<VariableInput>>>;
};

/**  Set Trigger aggregation criteria */
export type TriggerAggregation = {
  /**  Aggregate by entity */
  entityAggregation?: InputMaybe<TriggerEntityAggregation>;
  /**  Aggregate by tag */
  tagAggregation?: InputMaybe<TriggerTagAggregation>;
};

export type TriggerCondition = {
  triggerConditionType?: Maybe<TriggerConditionType>;
};

export type TriggerConditionInput = {
  /** Should be provided when conditionType is ON_NEW_ARTIFACT. */
  artifactConditionInput?: InputMaybe<ArtifactConditionInput>;
  /** Condition to execute Trigger: ON_NEW_ARTIFACT, ON_PIPELINE_COMPLETION, ON_SCHEDULE, ON_WEBHOOK, ON_NEW_MANIFEST */
  conditionType: ConditionType;
  /** Beta: Should be provided when conditionType is ON_NEW_MANIFEST. */
  manifestConditionInput?: InputMaybe<ManifestConditionInput>;
  /** Should be provided when conditionType is ON_PIPELINE_COMPLETION. */
  pipelineConditionInput?: InputMaybe<PipelineConditionInput>;
  /** Should be provided when conditionType is ON_SCHEDULE. */
  scheduleConditionInput?: InputMaybe<ScheduleConditionInput>;
  /** Should be provided when conditionType is ON_WEBHOOK. */
  webhookConditionInput?: InputMaybe<WebhookConditionInput>;
};

export enum TriggerConditionType {
  NewArtifact = 'NEW_ARTIFACT',
  NewManifest = 'NEW_MANIFEST',
  PipelineCompletion = 'PIPELINE_COMPLETION',
  Scheduled = 'SCHEDULED',
  Webhook = 'WEBHOOK'
}

export type TriggerConnection = {
  __typename?: 'TriggerConnection';
  nodes?: Maybe<Array<Maybe<Trigger>>>;
  pageInfo?: Maybe<PageInfo>;
};

/**
 *  Copyright 2021 Harness Inc. All rights reserved.
 *  Use of this source code is governed by the PolyForm Shield 1.0.0 license
 *  that can be found in the licenses directory at the root of this repository, also available at
 *  https://polyformproject.org/wp-content/uploads/2020/06/PolyForm-Shield-1.0.0.txt.
 *  Possible entity values for Trigger aggregation
 */
export enum TriggerEntityAggregation {
  Application = 'Application'
}

export type TriggerFilter = {
  application?: InputMaybe<IdFilter>;
  tag?: InputMaybe<TriggerTagFilter>;
  trigger?: InputMaybe<IdFilter>;
};

export type TriggerPayload = {
  __typename?: 'TriggerPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  trigger?: Maybe<Trigger>;
};

/**  Aggregate by Trigger tag */
export type TriggerTagAggregation = {
  /**  Set entity type */
  entityType?: InputMaybe<TriggerTagType>;
  /**  Set tag name */
  tagName?: InputMaybe<Scalars['String']['input']>;
};

export type TriggerTagFilter = {
  entityType?: InputMaybe<TriggerTagType>;
  tags?: InputMaybe<Array<InputMaybe<TagInput>>>;
};

export enum TriggerTagType {
  Application = 'APPLICATION'
}

export type TriggerVariableValue = {
  __typename?: 'TriggerVariableValue';
  name?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type UpdateApiKeyInput = {
  accountId: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  userGroupIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uuid: Scalars['String']['input'];
};

export type UpdateApiKeyPayload = {
  __typename?: 'UpdateApiKeyPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type UpdateApplicationGitSyncConfigInput = {
  applicationId: Scalars['String']['input'];
  branch: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  gitConnectorId: Scalars['String']['input'];
  /** Specify the repository name. If your Harness Source Repo Provider uses the Git Account type, provide the Repo Name to use from that account. */
  repositoryName?: InputMaybe<Scalars['String']['input']>;
  syncEnabled: Scalars['Boolean']['input'];
};

export type UpdateApplicationGitSyncConfigPayload = {
  __typename?: 'UpdateApplicationGitSyncConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  gitSyncConfig?: Maybe<GitSyncConfig>;
};

export type UpdateApplicationGitSyncConfigStatusInput = {
  applicationId: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  syncEnabled: Scalars['Boolean']['input'];
};

export type UpdateApplicationGitSyncConfigStatusPayload = {
  __typename?: 'UpdateApplicationGitSyncConfigStatusPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  gitSyncConfig?: Maybe<GitSyncConfig>;
};

export type UpdateApplicationInput = {
  applicationId: Scalars['String']['input'];
  /**  Beta: When this WebhookSecrets flag is set to true for an application, webhook secrets are mandated for github triggers. */
  areWebHookSecretsMandated?: InputMaybe<Scalars['Boolean']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  disableTriggers?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   *  Beta: When this is set to true, all manual triggers will require API Key authorization.
   *  Doc link: https://docs.harness.io/article/mc2lxsas4c-trigger-a-deployment-using-c-url#option_enforce_api_keys_for_manual_triggers
   */
  isManualTriggerAuthorized?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateApplicationPayload = {
  __typename?: 'UpdateApplicationPayload';
  application?: Maybe<Application>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type UpdateAwsCloudProviderInput = {
  credentialsType?: InputMaybe<AwsCredentialsType>;
  crossAccountAttributes?: InputMaybe<UpdateAwsCrossAccountAttributes>;
  defaultRegion?: InputMaybe<Scalars['String']['input']>;
  ec2IamCredentials?: InputMaybe<UpdateEc2IamCredentials>;
  irsaCredentials?: InputMaybe<UpdateIrsaCredentials>;
  manualCredentials?: InputMaybe<UpdateAwsManualCredentials>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateAwsCrossAccountAttributes = {
  assumeCrossAccountRole?: InputMaybe<Scalars['Boolean']['input']>;
  crossAccountRoleArn?: InputMaybe<Scalars['String']['input']>;
  externalId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateAwsManualCredentials = {
  accessKey?: InputMaybe<Scalars['String']['input']>;
  accessKeySecretId?: InputMaybe<Scalars['String']['input']>;
  secretKeySecretId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateAzureCloudProviderInput = {
  clientId?: InputMaybe<Scalars['String']['input']>;
  keySecretId?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  tenantId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCloudProviderInput = {
  awsCloudProvider?: InputMaybe<UpdateAwsCloudProviderInput>;
  azureCloudProvider?: InputMaybe<UpdateAzureCloudProviderInput>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  cloudProviderId: Scalars['String']['input'];
  cloudProviderType: CloudProviderType;
  gcpCloudProvider?: InputMaybe<UpdateGcpCloudProviderInput>;
  k8sCloudProvider?: InputMaybe<UpdateK8sCloudProviderInput>;
  pcfCloudProvider?: InputMaybe<UpdatePcfCloudProviderInput>;
  physicalDataCenterCloudProvider?: InputMaybe<UpdatePhysicalDataCenterCloudProviderInput>;
  rancherCloudProvider?: InputMaybe<UpdateRancherCloudProviderInput>;
  spotInstCloudProvider?: InputMaybe<UpdateSpotInstCloudProviderInput>;
};

export type UpdateCloudProviderPayload = {
  __typename?: 'UpdateCloudProviderPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  cloudProvider?: Maybe<CloudProvider>;
};

export type UpdateConnectorInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  connectorId: Scalars['String']['input'];
  connectorType: ConnectorType;
  dockerConnector?: InputMaybe<DockerConnectorInput>;
  gitConnector?: InputMaybe<UpdateGitConnectorInput>;
  helmConnector?: InputMaybe<HelmConnectorInput>;
  nexusConnector?: InputMaybe<NexusConnectorInput>;
};

export type UpdateConnectorPayload = {
  __typename?: 'UpdateConnectorPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  connector?: Maybe<Connector>;
};

export type UpdateCustomSecretManagerInput = {
  commandPath?: InputMaybe<Scalars['String']['input']>;
  connectorId?: InputMaybe<Scalars['String']['input']>;
  delegateSelectors?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  executeOnDelegate?: InputMaybe<Scalars['Boolean']['input']>;
  host?: InputMaybe<Scalars['String']['input']>;
  isConnectorTemplatized?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  templateId?: InputMaybe<Scalars['String']['input']>;
  testVariables?: InputMaybe<Array<InputMaybe<EncryptedDataParams>>>;
  usageScope?: InputMaybe<UsageScopeInput>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateDeploymentFreezeWindowInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  excludeFreezeWindows?: InputMaybe<Array<InputMaybe<FreezeWindowInput>>>;
  freezeWindows: Array<InputMaybe<FreezeWindowInput>>;
  /** Deployment freeze window id. */
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  notifyTo?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  setup: SetupInput;
  userGroupSelection?: InputMaybe<UserGroupFilterInput>;
};

export type UpdateDeploymentFreezeWindowPayload = {
  __typename?: 'UpdateDeploymentFreezeWindowPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deploymentFreezeWindow?: Maybe<DeploymentFreezeWindow>;
};

export type UpdateEc2IamCredentials = {
  delegateSelector?: InputMaybe<Scalars['String']['input']>;
  usageScope?: InputMaybe<UsageScopeInput>;
};

export type UpdateEncryptedText = {
  inheritScopesFromSM?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parameters?: InputMaybe<Array<InputMaybe<EncryptedDataParams>>>;
  scopedToAccount?: InputMaybe<Scalars['Boolean']['input']>;
  secretReference?: InputMaybe<Scalars['String']['input']>;
  usageScope?: InputMaybe<UsageScopeInput>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateEventsConfigInput = {
  appId: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  delegateSelectors?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  enabled: Scalars['Boolean']['input'];
  eventsConfigId: Scalars['String']['input'];
  name: Scalars['String']['input'];
  /**  The Event Rule containing the configuration of Pipelines and Events */
  rule: EventRuleInput;
  /** Details of the HTTP endpoint along with any custom headers */
  webhookConfig: WebhookConfigInput;
};

export type UpdateEventsConfigPayload = {
  __typename?: 'UpdateEventsConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eventsConfig?: Maybe<EventsConfig>;
};

export type UpdateGcpCloudProviderInput = {
  delegateSelector?: InputMaybe<Scalars['String']['input']>;
  delegateSelectors?: InputMaybe<Array<Scalars['String']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  serviceAccountKeySecretId?: InputMaybe<Scalars['String']['input']>;
  skipValidation?: InputMaybe<Scalars['Boolean']['input']>;
  useDelegate?: InputMaybe<Scalars['Boolean']['input']>;
  useDelegateSelectors?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateGitConnectorInput = {
  URL?: InputMaybe<Scalars['String']['input']>;
  branch?: InputMaybe<Scalars['String']['input']>;
  customCommitDetails?: InputMaybe<CustomCommitDetailsInput>;
  delegateSelectors?: InputMaybe<Array<Scalars['String']['input']>>;
  disableUserGitConfig?: InputMaybe<Scalars['Boolean']['input']>;
  generateWebhookUrl?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  passwordSecretId?: InputMaybe<Scalars['String']['input']>;
  sshSettingId?: InputMaybe<Scalars['String']['input']>;
  usageScope?: InputMaybe<UsageScopeInput>;
  userName?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateHashicorpVaultInput = {
  authDetails?: InputMaybe<HashicorpVaultAuthDetails>;
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  isReadOnly?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  namespace?: InputMaybe<Scalars['String']['input']>;
  secretEngineRenewalInterval?: InputMaybe<Scalars['Long']['input']>;
  usageScope?: InputMaybe<UsageScopeInput>;
};

export type UpdateInheritClusterDetails = {
  delegateName?: InputMaybe<Scalars['String']['input']>;
  delegateSelectors?: InputMaybe<Array<Scalars['String']['input']>>;
  usageScope?: InputMaybe<UsageScopeInput>;
};

export type UpdateIrsaCredentials = {
  delegateSelector?: InputMaybe<Scalars['String']['input']>;
  usageScope?: InputMaybe<UsageScopeInput>;
};

export type UpdateK8sCloudProviderInput = {
  clusterDetailsType?: InputMaybe<ClusterDetailsType>;
  inheritClusterDetails?: InputMaybe<UpdateInheritClusterDetails>;
  manualClusterDetails?: InputMaybe<UpdateManualClusterDetails>;
  name?: InputMaybe<Scalars['String']['input']>;
  skipValidation?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateManualClusterDetails = {
  masterUrl?: InputMaybe<Scalars['String']['input']>;
  none?: InputMaybe<UpdateNone>;
  oidcToken?: InputMaybe<UpdateOidcToken>;
  serviceAccountToken?: InputMaybe<UpdateServiceAccountToken>;
  type?: InputMaybe<ManualClusterDetailsAuthenticationType>;
  usageScope?: InputMaybe<UsageScopeInput>;
  usernameAndPassword?: InputMaybe<UpdateUsernameAndPasswordAuthentication>;
};

export type UpdateNone = {
  caCertificateSecretId?: InputMaybe<Scalars['String']['input']>;
  clientCertificateSecretId?: InputMaybe<Scalars['String']['input']>;
  clientKeyAlgorithm?: InputMaybe<Scalars['String']['input']>;
  clientKeyPassphraseSecretId?: InputMaybe<Scalars['String']['input']>;
  clientKeySecretId?: InputMaybe<Scalars['String']['input']>;
  passwordSecretId?: InputMaybe<Scalars['String']['input']>;
  serviceAccountTokenSecretId?: InputMaybe<Scalars['String']['input']>;
  usageScope?: InputMaybe<UsageScopeInput>;
  userName?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateOidcToken = {
  clientIdSecretId?: InputMaybe<Scalars['String']['input']>;
  clientSecretSecretId?: InputMaybe<Scalars['String']['input']>;
  identityProviderUrl?: InputMaybe<Scalars['String']['input']>;
  passwordSecretId?: InputMaybe<Scalars['String']['input']>;
  scopes?: InputMaybe<Scalars['String']['input']>;
  userName?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePcfCloudProviderInput = {
  endpointUrl?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  passwordSecretId?: InputMaybe<Scalars['String']['input']>;
  skipValidation?: InputMaybe<Scalars['Boolean']['input']>;
  userName?: InputMaybe<Scalars['String']['input']>;
  userNameSecretId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePhysicalDataCenterCloudProviderInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  usageScope?: InputMaybe<UsageScopeInput>;
};

export type UpdateRancherCloudProviderInput = {
  bearerTokenSecretId?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  rancherUrl?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateSshCredential = {
  authenticationScheme?: InputMaybe<SshAuthenticationScheme>;
  kerberosAuthentication?: InputMaybe<KerberosAuthenticationInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  sshAuthentication?: InputMaybe<SshAuthenticationInput>;
  usageScope?: InputMaybe<UsageScopeInput>;
};

export type UpdateSecretInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  encryptedFile?: InputMaybe<EncryptedFileInput>;
  encryptedText?: InputMaybe<UpdateEncryptedText>;
  secretId: Scalars['String']['input'];
  secretType: SecretType;
  sshCredential?: InputMaybe<UpdateSshCredential>;
  winRMCredential?: InputMaybe<UpdateWinRmCredential>;
};

export type UpdateSecretManagerInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  customSecretManagerInput?: InputMaybe<UpdateCustomSecretManagerInput>;
  hashicorpVaultConfigInput?: InputMaybe<UpdateHashicorpVaultInput>;
  secretManagerId: Scalars['String']['input'];
  secretManagerType: SecretManagerType;
};

export type UpdateSecretPayload = {
  __typename?: 'UpdateSecretPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  secret?: Maybe<Secret>;
};

export type UpdateServiceAccountToken = {
  serviceAccountTokenSecretId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateServiceMetadataInput = {
  applicationId: Array<InputMaybe<Scalars['String']['input']>>;
  cfCliVersion: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  excludeServices?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UpdateServiceMetadataPayload = {
  __typename?: 'UpdateServiceMetadataPayload';
  application?: Maybe<Array<Maybe<Application>>>;
  cfCliVersion?: Maybe<Scalars['String']['output']>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
  updatedService?: Maybe<Array<Maybe<Service>>>;
};

export type UpdateSpotInstCloudProviderInput = {
  accountId?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  tokenSecretId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTriggerInput = {
  /** Action performed on trigger execute: Workflow/Pipeline execution */
  action: TriggerActionInput;
  /** Application Id */
  applicationId: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** Condition of which Trigger will execute */
  condition: TriggerConditionInput;
  /** Description of the Trigger */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Name of the Trigger */
  name: Scalars['String']['input'];
  /** Id of Trigger to be updated */
  triggerId: Scalars['String']['input'];
};

export type UpdateTriggerPayload = {
  __typename?: 'UpdateTriggerPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  trigger?: Maybe<Trigger>;
};

export type UpdateUserGroupInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  notificationSettings?: InputMaybe<NotificationSettingsInput>;
  permissions?: InputMaybe<Permissions>;
  ssoSetting?: InputMaybe<SsoSettingInput>;
  userGroupId: Scalars['String']['input'];
  userIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UpdateUserGroupPayload = {
  __typename?: 'UpdateUserGroupPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  userGroup?: Maybe<UserGroup>;
};

export type UpdateUserGroupPermissionsInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  permissions: Permissions;
  userGroupId: Scalars['String']['input'];
};

export type UpdateUserGroupPermissionsPayload = {
  __typename?: 'UpdateUserGroupPermissionsPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  permissions?: Maybe<UserGroupPermissions>;
};

export type UpdateUserInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  externalUserId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  userGroupIds?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type UpdateUserPayload = {
  __typename?: 'UpdateUserPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type UpdateUsernameAndPasswordAuthentication = {
  passwordSecretId?: InputMaybe<Scalars['String']['input']>;
  userName?: InputMaybe<Scalars['String']['input']>;
  userNameSecretId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateWinRmCredential = {
  authenticationScheme?: InputMaybe<WinRmAuthenticationScheme>;
  domain?: InputMaybe<Scalars['String']['input']>;
  keyTabFilePath?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parameters?: InputMaybe<Array<InputMaybe<WinRmCommandParameterInput>>>;
  passwordSecretId?: InputMaybe<Scalars['String']['input']>;
  port?: InputMaybe<Scalars['Int']['input']>;
  skipCertCheck?: InputMaybe<Scalars['Boolean']['input']>;
  usageScope?: InputMaybe<UsageScopeInput>;
  useSSL?: InputMaybe<Scalars['Boolean']['input']>;
  userName?: InputMaybe<Scalars['String']['input']>;
};

export type UpsertSecretManagerPayload = {
  __typename?: 'UpsertSecretManagerPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  secretManager?: Maybe<SecretManager>;
};

export enum UrlType {
  Account = 'ACCOUNT',
  Repo = 'REPO'
}

export type UsageScope = {
  __typename?: 'UsageScope';
  appEnvScopes?: Maybe<Array<Maybe<AppEnvScope>>>;
};

/**
 *  Copyright 2020 Harness Inc. All rights reserved.
 *  Use of this source code is governed by the PolyForm Shield 1.0.0 license
 *  that can be found in the licenses directory at the root of this repository, also available at
 *  https://polyformproject.org/wp-content/uploads/2020/06/PolyForm-Shield-1.0.0.txt.
 */
export type UsageScopeInput = {
  appEnvScopes?: InputMaybe<Array<AppEnvScopeInput>>;
};

/**
 *  Copyright 2020 Harness Inc. All rights reserved.
 *  Use of this source code is governed by the PolyForm Shield 1.0.0 license
 *  that can be found in the licenses directory at the root of this repository, also available at
 *  https://polyformproject.org/wp-content/uploads/2020/06/PolyForm-Shield-1.0.0.txt.
 */
export type User = {
  __typename?: 'User';
  email?: Maybe<Scalars['String']['output']>;
  externalUserId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isDisabled?: Maybe<Scalars['Boolean']['output']>;
  isEmailVerified?: Maybe<Scalars['Boolean']['output']>;
  isImportedFromIdentityProvider?: Maybe<Scalars['Boolean']['output']>;
  isPasswordExpired?: Maybe<Scalars['Boolean']['output']>;
  isTwoFactorAuthenticationEnabled?: Maybe<Scalars['Boolean']['output']>;
  isUserLocked?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  userGroups?: Maybe<UserGroupConnection>;
};


/**
 *  Copyright 2020 Harness Inc. All rights reserved.
 *  Use of this source code is governed by the PolyForm Shield 1.0.0 license
 *  that can be found in the licenses directory at the root of this repository, also available at
 *  https://polyformproject.org/wp-content/uploads/2020/06/PolyForm-Shield-1.0.0.txt.
 */
export type UserUserGroupsArgs = {
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
};

/** If changeSet got triggered by User action */
export type UserChangeSet = ChangeSet & {
  __typename?: 'UserChangeSet';
  /** List of all changeDetails */
  changes?: Maybe<Array<Maybe<ChangeDetails>>>;
  /** Failure message */
  failureStatusMsg?: Maybe<Scalars['String']['output']>;
  /** Unique ID of a changeSet */
  id?: Maybe<Scalars['String']['output']>;
  /** HTTP request that triggered the changeSet */
  request?: Maybe<RequestInfo>;
  /** Timestamp when changeSet was triggered */
  triggeredAt?: Maybe<Scalars['DateTime']['output']>;
  /** User who triggered the changeSet */
  triggeredBy?: Maybe<User>;
};

export type UserConnection = {
  __typename?: 'UserConnection';
  nodes?: Maybe<Array<Maybe<User>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type UserFilter = {
  includeDisabled: Scalars['Boolean']['input'];
};

export type UserGroup = {
  __typename?: 'UserGroup';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  importedByScim?: Maybe<Scalars['Boolean']['output']>;
  isSSOLinked?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  notificationSettings?: Maybe<NotificationSettings>;
  permissions?: Maybe<UserGroupPermissions>;
  ssoSetting?: Maybe<LinkedSsoSetting>;
  users?: Maybe<UserConnection>;
};


export type UserGroupUsersArgs = {
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type UserGroupApprovalDetails = ApprovalDetails & {
  __typename?: 'UserGroupApprovalDetails';
  approvalId?: Maybe<Scalars['String']['output']>;
  approvalType?: Maybe<ApprovalStateType>;
  approvers?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** approverInputs */
  executionId?: Maybe<Scalars['String']['output']>;
  stageName?: Maybe<Scalars['String']['output']>;
  startedAt?: Maybe<Scalars['Long']['output']>;
  stepName?: Maybe<Scalars['String']['output']>;
  triggeredBy?: Maybe<EmbeddedUser>;
  variables?: Maybe<Array<Maybe<NameValuePair>>>;
  willExpireAt?: Maybe<Scalars['Long']['output']>;
};

export type UserGroupConnection = {
  __typename?: 'UserGroupConnection';
  nodes?: Maybe<Array<Maybe<UserGroup>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type UserGroupFilter = {
  __typename?: 'UserGroupFilter';
  userGroupFilterType: UserGroupFilterType;
  userGroupIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type UserGroupFilterInput = {
  userGroupFilterType: UserGroupFilterType;
  userGroupIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export enum UserGroupFilterType {
  All = 'ALL',
  Custom = 'CUSTOM'
}

export type UserGroupPermissions = {
  __typename?: 'UserGroupPermissions';
  accountPermissions?: Maybe<AccountPermissions>;
  appPermissions?: Maybe<Array<Maybe<ApplicationPermission>>>;
};

export type UserInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type UsernameAndPasswordAuthentication = {
  passwordSecretId: Scalars['String']['input'];
  userName?: InputMaybe<Scalars['String']['input']>;
  userNameSecretId?: InputMaybe<Scalars['String']['input']>;
};

export type Variable = {
  __typename?: 'Variable';
  /** True if a variable allows multiple values. You need to provide , separated list of values. */
  allowMultipleValues?: Maybe<Scalars['Boolean']['output']>;
  /** allowed values. Only for text variables. */
  allowedValues?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Default value, Only for text variables */
  defaultValue?: Maybe<Scalars['String']['output']>;
  /** If a variable id fixed variable. */
  fixed?: Maybe<Scalars['Boolean']['output']>;
  /** name of the variable */
  name?: Maybe<Scalars['String']['output']>;
  /** If the variable is a required variable */
  required?: Maybe<Scalars['Boolean']['output']>;
  /** Type of the variable */
  type?: Maybe<Scalars['String']['output']>;
};

export type VariableInput = {
  /** name of the variable */
  name: Scalars['String']['input'];
  /** value of the variable */
  variableValue: VariableValue;
};

export type VariableValue = {
  /** type of the value: name or if */
  type: VariableValueType;
  /** value */
  value: Scalars['String']['input'];
};

export enum VariableValueType {
  Expression = 'EXPRESSION',
  Id = 'ID',
  Name = 'NAME'
}

export type VerificationAggregation = {
  entityAggregation?: InputMaybe<CvEntityAggregation>;
  tagAggregation?: InputMaybe<CvTagAggregation>;
  timeAggregation?: InputMaybe<TimeSeriesAggregation>;
};

export type VerificationResult = {
  __typename?: 'VerificationResult';
  analyzed?: Maybe<Scalars['Boolean']['output']>;
  appName?: Maybe<Scalars['String']['output']>;
  envName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  rollback?: Maybe<Scalars['Boolean']['output']>;
  serviceName?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type VerificationResultConnection = {
  __typename?: 'VerificationResultConnection';
  nodes?: Maybe<Array<Maybe<VerificationResult>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type VerificationResultFilter = {
  analyzed?: InputMaybe<Scalars['Boolean']['input']>;
  application?: InputMaybe<IdFilter>;
  endTime?: InputMaybe<TimeFilter>;
  environment?: InputMaybe<IdFilter>;
  rollback?: InputMaybe<Scalars['Boolean']['input']>;
  service?: InputMaybe<IdFilter>;
  startTime?: InputMaybe<TimeFilter>;
  tag?: InputMaybe<CvWorkflowTagFilter>;
  type?: InputMaybe<VerificationTypeFilter>;
};

export type VerificationTypeFilter = {
  operator?: InputMaybe<EnumOperator>;
  values?: InputMaybe<Array<InputMaybe<CvVerificationProviders>>>;
};

export type VersionNumberInput = {
  /** Beta: Name of the application manifest */
  appManifestName: Scalars['String']['input'];
  /** Beta: helm chart version number to be deployed */
  versionNumber: Scalars['String']['input'];
};

export type WebhookConditionInput = {
  /** Bitbucket  event, Required if webhookSourceType = BITBUCKET */
  bitbucketEvent?: InputMaybe<BitbucketEvent>;
  /** Branch in which the filePaths exist. */
  branchName?: InputMaybe<Scalars['String']['input']>;
  /** Branch filter, can be used if using PullRequest or Push events. */
  branchRegex?: InputMaybe<Scalars['String']['input']>;
  /**  Only for Native Helm and Helm-based Kubernetes deployments. Event type should be PUSH. */
  deployOnlyIfFilesChanged?: InputMaybe<Scalars['Boolean']['input']>;
  /** The file names/paths when changed and Pushed, will execute this Trigger. */
  filePaths?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Source Repo Provider setup in Harness */
  gitConnectorId?: InputMaybe<Scalars['String']['input']>;
  /** Github event, Required if webhookSourceType = GITHUB */
  githubEvent?: InputMaybe<GitHubEvent>;
  /** Gitlab  event, Required if webhookSourceType = GITLAB */
  gitlabEvent?: InputMaybe<GitlabEvent>;
  /** Git repository name in case when Account level Git connector is provided */
  repoName?: InputMaybe<Scalars['String']['input']>;
  /** Beta: Webhook secret to authorize Github webhooks */
  webhookSecret?: InputMaybe<Scalars['String']['input']>;
  /** Source of the webhook: GITHUB/GITLAB/BITBUCKET/CUSTOM(curl based) */
  webhookSourceType: WebhookSource;
};

export type WebhookConfig = {
  __typename?: 'WebhookConfig';
  /**  Custom headers */
  headers?: Maybe<Array<Maybe<WebhookHeader>>>;
  /**  HTTP Endpoint */
  url: Scalars['String']['output'];
};

export type WebhookConfigInput = {
  /**  Custom headers */
  headers?: InputMaybe<Array<InputMaybe<WebhookHeaderInput>>>;
  /**  HTTP Endpoint */
  url: Scalars['String']['input'];
};

export type WebhookEvent = {
  __typename?: 'WebhookEvent';
  action?: Maybe<Scalars['String']['output']>;
  event?: Maybe<Scalars['String']['output']>;
};

export type WebhookHeader = {
  __typename?: 'WebhookHeader';
  key: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type WebhookHeaderInput = {
  key: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export enum WebhookSource {
  Bitbucket = 'BITBUCKET',
  Custom = 'CUSTOM',
  Github = 'GITHUB',
  Gitlab = 'GITLAB'
}

export type WebhoookDetails = {
  __typename?: 'WebhoookDetails';
  header?: Maybe<Scalars['String']['output']>;
  method?: Maybe<Scalars['String']['output']>;
  payload?: Maybe<Scalars['String']['output']>;
  webhookURL?: Maybe<Scalars['String']['output']>;
};

export enum WinRmAuthenticationScheme {
  Basic = 'BASIC',
  Kerberos = 'KERBEROS',
  Ntlm = 'NTLM'
}

export type WinRmCredential = Secret & {
  __typename?: 'WinRMCredential';
  authenticationScheme?: Maybe<WinRmAuthenticationScheme>;
  domain?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  keyTabFilePath?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  parameters?: Maybe<Array<Maybe<WinRmCommandParameter>>>;
  port?: Maybe<Scalars['Int']['output']>;
  secretReference?: Maybe<Scalars['String']['output']>;
  secretType?: Maybe<SecretType>;
  skipCertCheck?: Maybe<Scalars['Boolean']['output']>;
  usageScope?: Maybe<UsageScope>;
  useSSL?: Maybe<Scalars['Boolean']['output']>;
  userName?: Maybe<Scalars['String']['output']>;
};

/**
 *  Copyright 2021 Harness Inc. All rights reserved.
 *  Use of this source code is governed by the PolyForm Shield 1.0.0 license
 *  that can be found in the licenses directory at the root of this repository, also available at
 *  https://polyformproject.org/wp-content/uploads/2020/06/PolyForm-Shield-1.0.0.txt.
 */
export type WinRmCredentialInput = {
  authenticationScheme?: InputMaybe<WinRmAuthenticationScheme>;
  domain?: InputMaybe<Scalars['String']['input']>;
  keyTabFilePath?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  parameters?: InputMaybe<Array<InputMaybe<WinRmCommandParameterInput>>>;
  passwordSecretId: Scalars['String']['input'];
  port?: InputMaybe<Scalars['Int']['input']>;
  skipCertCheck?: InputMaybe<Scalars['Boolean']['input']>;
  usageScope?: InputMaybe<UsageScopeInput>;
  useSSL?: InputMaybe<Scalars['Boolean']['input']>;
  userName: Scalars['String']['input'];
};

export type WinRmCommandParameter = {
  __typename?: 'WinRmCommandParameter';
  parameter?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/**
 *  Copyright 2021 Harness Inc. All rights reserved.
 *  Use of this source code is governed by the PolyForm Shield 1.0.0 license
 *  that can be found in the licenses directory at the root of this repository, also available at
 *  https://polyformproject.org/wp-content/uploads/2020/06/PolyForm-Shield-1.0.0.txt.
 */
export type WinRmCommandParameterInput = {
  parameter?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/**  Type Workflow */
export type Workflow = {
  __typename?: 'Workflow';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  /**  Description of the Workflow */
  description?: Maybe<Scalars['String']['output']>;
  /**  Workflow ID */
  id?: Maybe<Scalars['String']['output']>;
  /**  Name of the Workflow */
  name?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  /** Available variables in the Workflow */
  workflowVariables?: Maybe<Array<Maybe<Variable>>>;
};

export type WorkflowAction = TriggerAction & {
  __typename?: 'WorkflowAction';
  artifactSelections?: Maybe<Array<Maybe<ArtifactSelection>>>;
  /** Beta: Helm chart selections needed to trigger the execution */
  manifestSelections?: Maybe<Array<Maybe<ManifestSelection>>>;
  variables?: Maybe<Array<Maybe<TriggerVariableValue>>>;
  workflowId?: Maybe<Scalars['String']['output']>;
  workflowName?: Maybe<Scalars['String']['output']>;
};

/**  Set Workflow aggregation criteria */
export type WorkflowAggregation = {
  /**  Aggregate by entity */
  entityAggregation?: InputMaybe<WorkflowEntityAggregation>;
  /**  Aggregate by tag */
  tagAggregation?: InputMaybe<WorkflowTagAggregation>;
};

export type WorkflowConnection = {
  __typename?: 'WorkflowConnection';
  nodes?: Maybe<Array<Maybe<Workflow>>>;
  pageInfo?: Maybe<PageInfo>;
};

/**
 *  Copyright 2021 Harness Inc. All rights reserved.
 *  Use of this source code is governed by the PolyForm Shield 1.0.0 license
 *  that can be found in the licenses directory at the root of this repository, also available at
 *  https://polyformproject.org/wp-content/uploads/2020/06/PolyForm-Shield-1.0.0.txt.
 *  Possible entity values for Workflow aggregation
 */
export enum WorkflowEntityAggregation {
  Application = 'Application',
  OrchestrationWorkflowType = 'OrchestrationWorkflowType',
  Workflow = 'Workflow'
}

/**  Type for workflow execution */
export type WorkflowExecution = Execution & {
  __typename?: 'WorkflowExecution';
  application?: Maybe<Application>;
  /**  Artifact used during deployment */
  artifacts?: Maybe<Array<Maybe<Artifact>>>;
  cause?: Maybe<Cause>;
  /**  DateTime when execution started */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /**  DateTime when execution ended */
  endedAt?: Maybe<Scalars['DateTime']['output']>;
  executionUrl?: Maybe<Scalars['String']['output']>;
  failureDetails?: Maybe<Scalars['String']['output']>;
  /**  Workflow Execution Id */
  id?: Maybe<Scalars['String']['output']>;
  inputVariables?: Maybe<Array<Maybe<InputVariable>>>;
  manifests?: Maybe<Array<Maybe<Manifest>>>;
  notes?: Maybe<Scalars['String']['output']>;
  outcomes?: Maybe<OutcomeConnection>;
  /**  Artifact used during rollback deployment */
  rollbackArtifacts?: Maybe<Array<Maybe<Artifact>>>;
  /**  DateTime when execution started */
  startedAt?: Maybe<Scalars['DateTime']['output']>;
  /**  Status of the workflow */
  status?: Maybe<ExecutionStatus>;
  tags?: Maybe<Array<Maybe<DeploymentTag>>>;
  workflow?: Maybe<Workflow>;
};

export type WorkflowFilter = {
  application?: InputMaybe<IdFilter>;
  orchestrationWorkflowType?: InputMaybe<OrchestrationWorkflowTypeFilter>;
  tag?: InputMaybe<WorkflowTagFilter>;
  workflow?: InputMaybe<IdFilter>;
};

export enum WorkflowFilterType {
  Application = 'Application',
  Workflow = 'Workflow'
}

export type WorkflowPermissionFilter = {
  __typename?: 'WorkflowPermissionFilter';
  envIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  filterTypes?: Maybe<Array<Maybe<WorkflowPermissionFilterType>>>;
  workflowIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type WorkflowPermissionFilterInput = {
  envIds?: InputMaybe<Array<Scalars['String']['input']>>;
  filterTypes?: InputMaybe<Array<InputMaybe<WorkflowPermissionFilterType>>>;
  workflowIds?: InputMaybe<Array<Scalars['String']['input']>>;
};

export enum WorkflowPermissionFilterType {
  AllWorkflows = 'ALL_WORKFLOWS',
  NonProductionWorkflows = 'NON_PRODUCTION_WORKFLOWS',
  ProductionWorkflows = 'PRODUCTION_WORKFLOWS',
  WorkflowTemplates = 'WORKFLOW_TEMPLATES'
}

export type WorkflowRule = {
  __typename?: 'WorkflowRule';
  /** Receive all current and future Workflow events */
  allEvents: Scalars['Boolean']['output'];
  /** Receive the Events for all the Workflows in the application */
  allWorkflows: Scalars['Boolean']['output'];
  /** The specific events which are configured. Only applicable if allEvents is false */
  events?: Maybe<Array<Maybe<EventType>>>;
  /** Workflow IDs to receive the events for. Only applicable when allWorkflows is false */
  workflowIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type WorkflowRuleInput = {
  /** Receive all current and future Workflow events */
  allEvents: Scalars['Boolean']['input'];
  /** Receive the Events for all the Workflows in the application */
  allWorkflows: Scalars['Boolean']['input'];
  /** The specific events which are configured. Only applicable if allEvents is false */
  events?: InputMaybe<Array<InputMaybe<EventType>>>;
  /** Workflow IDs to receive the events for. Only applicable when allWorkflows is false */
  workflowIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type WorkflowStageExecution = PipelineStageExecution & {
  __typename?: 'WorkflowStageExecution';
  inputVariables?: Maybe<Array<Maybe<InputVariable>>>;
  /**  Pipeline stage element ID */
  pipelineStageElementId?: Maybe<Scalars['String']['output']>;
  /**  Pipeline stage name */
  pipelineStageName?: Maybe<Scalars['String']['output']>;
  /**  Pipeline step name */
  pipelineStepName?: Maybe<Scalars['String']['output']>;
  /**  List of runtime variables */
  runtimeInputVariables?: Maybe<Array<Maybe<Variable>>>;
  /**  Stage execution status */
  status?: Maybe<ExecutionStatus>;
  /**  Workflow execution ID */
  workflowExecutionId?: Maybe<Scalars['String']['output']>;
};

/**  Aggregate by Workflow tag */
export type WorkflowTagAggregation = {
  /**  Set entity type */
  entityType?: InputMaybe<WorkflowTagType>;
  /**  Set tag name */
  tagName?: InputMaybe<Scalars['String']['input']>;
};

export type WorkflowTagFilter = {
  entityType?: InputMaybe<WorkflowTagType>;
  tags?: InputMaybe<Array<InputMaybe<TagInput>>>;
};

export enum WorkflowTagType {
  Application = 'APPLICATION',
  Workflow = 'WORKFLOW'
}

export type WorkloadFilter = {
  cluster?: InputMaybe<IdFilter>;
  namespace?: InputMaybe<IdFilter>;
  workloadName?: InputMaybe<IdFilter>;
  workloadType?: InputMaybe<IdFilter>;
};

export type WorkloadRecommendation = {
  __typename?: 'WorkloadRecommendation';
  clusterId?: Maybe<Scalars['String']['output']>;
  clusterName?: Maybe<Scalars['String']['output']>;
  containerRecommendations?: Maybe<Array<Maybe<ContainerRecommendation>>>;
  estimatedSavings?: Maybe<Scalars['Number']['output']>;
  /** @deprecated Will be removed in few days. */
  lastDayCost?: Maybe<LastDayCost>;
  namespace?: Maybe<Scalars['String']['output']>;
  numDays?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Will be removed in few days. */
  preset?: Maybe<K8sWorkloadRecommendationPreset>;
  workloadName?: Maybe<Scalars['String']['output']>;
  workloadType?: Maybe<Scalars['String']['output']>;
};

export type WorkloadRecommendationConnection = {
  __typename?: 'WorkloadRecommendationConnection';
  nodes?: Maybe<Array<Maybe<WorkloadRecommendation>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type CeAggregation = {
  cost?: InputMaybe<CeCost>;
  function?: InputMaybe<CeAggregationFunction>;
  utilization?: InputMaybe<CeUtilization>;
};

export enum CeAggregationFunction {
  Avg = 'AVG',
  Max = 'MAX',
  Min = 'MIN',
  Sum = 'SUM'
}

export type CeClusterBillingData = {
  __typename?: 'ceClusterBillingData';
  data?: Maybe<Array<Maybe<BillingDataEntry>>>;
};

export enum CeCost {
  Cpucost = 'CPUCOST',
  Cpuidlecost = 'CPUIDLECOST',
  Cpuunallocatedcost = 'CPUUNALLOCATEDCOST',
  Idlecost = 'IDLECOST',
  Memorycost = 'MEMORYCOST',
  Memoryidlecost = 'MEMORYIDLECOST',
  Memoryunallocatedcost = 'MEMORYUNALLOCATEDCOST',
  Networkcost = 'NETWORKCOST',
  Storagecost = 'STORAGECOST',
  Storageidlecost = 'STORAGEIDLECOST',
  Storageunallocatedcost = 'STORAGEUNALLOCATEDCOST',
  Systemcost = 'SYSTEMCOST',
  Totalcost = 'TOTALCOST',
  Unallocatedcost = 'UNALLOCATEDCOST'
}

export type CeEcsEntity = {
  __typename?: 'ceEcsEntity';
  launchType?: Maybe<Scalars['String']['output']>;
  service?: Maybe<Scalars['String']['output']>;
  taskId?: Maybe<Scalars['String']['output']>;
};

export enum CeEntityGroupBy {
  Application = 'Application',
  Cluster = 'Cluster',
  EcsService = 'EcsService',
  Environment = 'Environment',
  LaunchType = 'LaunchType',
  Namespace = 'Namespace',
  Node = 'Node',
  Pod = 'Pod',
  Region = 'Region',
  Service = 'Service',
  Task = 'Task',
  Workload = 'Workload',
  WorkloadType = 'WorkloadType'
}

export type CeFilter = {
  application?: InputMaybe<IdFilter>;
  cluster?: InputMaybe<IdFilter>;
  ecsService?: InputMaybe<IdFilter>;
  endTime?: InputMaybe<TimeFilter>;
  environment?: InputMaybe<IdFilter>;
  instanceType?: InputMaybe<IdFilter>;
  label?: InputMaybe<CeLabelFilter>;
  launchType?: InputMaybe<IdFilter>;
  namespace?: InputMaybe<IdFilter>;
  node?: InputMaybe<IdFilter>;
  pod?: InputMaybe<IdFilter>;
  service?: InputMaybe<IdFilter>;
  startTime?: InputMaybe<TimeFilter>;
  tag?: InputMaybe<CeTagFilter>;
  task?: InputMaybe<IdFilter>;
  workload?: InputMaybe<IdFilter>;
};

export type CeGroupBy = {
  entity?: InputMaybe<CeEntityGroupBy>;
  labelAggregation?: InputMaybe<CeLabelAggregation>;
  tagAggregation?: InputMaybe<CeTagAggregation>;
  time?: InputMaybe<CeTimeAggregation>;
};

export type CeHarnessEntity = {
  __typename?: 'ceHarnessEntity';
  application?: Maybe<Scalars['String']['output']>;
  environment?: Maybe<Scalars['String']['output']>;
  service?: Maybe<Scalars['String']['output']>;
};

export type CeK8sEntity = {
  __typename?: 'ceK8sEntity';
  entityDetails?: Maybe<CeK8sEntityDetails>;
  namespace?: Maybe<Scalars['String']['output']>;
  node?: Maybe<Scalars['String']['output']>;
  pod?: Maybe<Scalars['String']['output']>;
  selectedLabels?: Maybe<Array<Maybe<CeK8sLabels>>>;
  workload?: Maybe<Scalars['String']['output']>;
  workloadType?: Maybe<Scalars['String']['output']>;
};

export type CeK8sEntityDetails = {
  __typename?: 'ceK8sEntityDetails';
  cpuAllocatable?: Maybe<Scalars['Number']['output']>;
  cpuIdleCost?: Maybe<Scalars['Number']['output']>;
  cpuRequested?: Maybe<Scalars['Number']['output']>;
  cpuTotalCost?: Maybe<Scalars['Number']['output']>;
  cpuUnallocatedCost?: Maybe<Scalars['Number']['output']>;
  createTime?: Maybe<Scalars['Number']['output']>;
  deleteTime?: Maybe<Scalars['Number']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  idleCost?: Maybe<Scalars['Number']['output']>;
  instanceCategory?: Maybe<Scalars['String']['output']>;
  machineType?: Maybe<Scalars['String']['output']>;
  memoryAllocatable?: Maybe<Scalars['Number']['output']>;
  memoryIdleCost?: Maybe<Scalars['Number']['output']>;
  memoryRequested?: Maybe<Scalars['Number']['output']>;
  memoryTotalCost?: Maybe<Scalars['Number']['output']>;
  memoryUnallocatedCost?: Maybe<Scalars['Number']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  networkCost?: Maybe<Scalars['Number']['output']>;
  nodePoolName?: Maybe<Scalars['String']['output']>;
  podCapacity?: Maybe<Scalars['String']['output']>;
  qosClass?: Maybe<Scalars['String']['output']>;
  storageIdleCost?: Maybe<Scalars['Number']['output']>;
  storageRequest?: Maybe<Scalars['Number']['output']>;
  storageTotalCost?: Maybe<Scalars['Number']['output']>;
  storageUnallocatedCost?: Maybe<Scalars['Number']['output']>;
  storageUtilizationValue?: Maybe<Scalars['Number']['output']>;
  systemCost?: Maybe<Scalars['Number']['output']>;
  totalCost?: Maybe<Scalars['Number']['output']>;
  unallocatedCost?: Maybe<Scalars['Number']['output']>;
};

export type CeK8sLabels = {
  __typename?: 'ceK8sLabels';
  name?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type CeLabelAggregation = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CeLabelFilter = {
  labels?: InputMaybe<Array<InputMaybe<K8sLabelInput>>>;
};

export type CeSelect = {
  labels?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CeSort = {
  order?: InputMaybe<SortOrder>;
  sortType?: InputMaybe<CeSortType>;
};

export enum CeSortType {
  Idlecost = 'IDLECOST',
  Time = 'TIME',
  Totalcost = 'TOTALCOST',
  Unallocatedcost = 'UNALLOCATEDCOST'
}

export type CeTagAggregation = {
  entityType?: InputMaybe<CeTagType>;
  tagName?: InputMaybe<Scalars['String']['input']>;
};

export type CeTagFilter = {
  entityType?: InputMaybe<CeTagType>;
  tags?: InputMaybe<Array<InputMaybe<TagInput>>>;
};

export enum CeTagType {
  Application = 'APPLICATION',
  Environment = 'ENVIRONMENT',
  Service = 'SERVICE'
}

export type CeTimeAggregation = {
  timePeriod?: InputMaybe<TimeGroupType>;
};

export enum CeUtilization {
  CpuLimit = 'CPU_LIMIT',
  CpuRequest = 'CPU_REQUEST',
  CpuUtilizationValue = 'CPU_UTILIZATION_VALUE',
  MemoryLimit = 'MEMORY_LIMIT',
  MemoryRequest = 'MEMORY_REQUEST',
  MemoryUtilizationValue = 'MEMORY_UTILIZATION_VALUE',
  StorageRequest = 'STORAGE_REQUEST',
  StorageUtilizationValue = 'STORAGE_UTILIZATION_VALUE'
}

export type InfraDefConnectionData = {
  EnvironmentId?: InputMaybe<Scalars['String']['input']>;
  InfrastructureId?: InputMaybe<Scalars['String']['input']>;
};

export type InfrastructureDefinitionData = {
  EnvId?: InputMaybe<Scalars['String']['input']>;
  InfrastructureId?: InputMaybe<Scalars['String']['input']>;
  InfrastructureName?: InputMaybe<Scalars['String']['input']>;
};

export type SetArtifactCollectionEnabledPayload = {
  __typename?: 'setArtifactCollectionEnabledPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};
