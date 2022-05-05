/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($id: String) {
    onCreateUser(id: $id) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($id: String) {
    onUpdateUser(id: $id) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($id: String) {
    onDeleteUser(id: $id) {
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
export const onCreateSyncScoreSensor = /* GraphQL */ `
  subscription OnCreateSyncScoreSensor {
    onCreateSyncScoreSensor {
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
export const onUpdateSyncScoreSensor = /* GraphQL */ `
  subscription OnUpdateSyncScoreSensor {
    onUpdateSyncScoreSensor {
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
export const onDeleteSyncScoreSensor = /* GraphQL */ `
  subscription OnDeleteSyncScoreSensor {
    onDeleteSyncScoreSensor {
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
