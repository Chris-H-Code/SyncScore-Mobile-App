/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        imageUri
        wins
        losses
        score
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSyncScoreSensor = /* GraphQL */ `
  query GetSyncScoreSensor($id: ID!) {
    getSyncScoreSensor(id: $id) {
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
export const listSyncScoreSensors = /* GraphQL */ `
  query ListSyncScoreSensors(
    $filter: ModelSyncScoreSensorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSyncScoreSensors(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        sensorId
        redScore
        blueScore
        date
        timestamp
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
