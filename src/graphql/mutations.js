/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      email
      imageUri
      wins
      losses
      score
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      email
      imageUri
      wins
      losses
      score
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      email
      imageUri
      wins
      losses
      score
      createdAt
      updatedAt
    }
  }
`;
export const createSyncScoreSensor = /* GraphQL */ `
  mutation CreateSyncScoreSensor(
    $input: CreateSyncScoreSensorInput!
    $condition: ModelSyncScoreSensorConditionInput
  ) {
    createSyncScoreSensor(input: $input, condition: $condition) {
      id
      sensorId
      redScore
      blueScore
      date
      timestamp
      createdAt
      updatedAt
    }
  }
`;
export const updateSyncScoreSensor = /* GraphQL */ `
  mutation UpdateSyncScoreSensor(
    $input: UpdateSyncScoreSensorInput!
    $condition: ModelSyncScoreSensorConditionInput
  ) {
    updateSyncScoreSensor(input: $input, condition: $condition) {
      id
      sensorId
      redScore
      blueScore
      date
      timestamp
      createdAt
      updatedAt
    }
  }
`;
export const deleteSyncScoreSensor = /* GraphQL */ `
  mutation DeleteSyncScoreSensor(
    $input: DeleteSyncScoreSensorInput!
    $condition: ModelSyncScoreSensorConditionInput
  ) {
    deleteSyncScoreSensor(input: $input, condition: $condition) {
      id
      sensorId
      redScore
      blueScore
      date
      timestamp
      createdAt
      updatedAt
    }
  }
`;
