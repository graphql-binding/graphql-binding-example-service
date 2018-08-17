type Mutation {
  createUser(name: String!): User!
  updateUser(id: ID!, name: String!): User
  deleteUser(id: ID!): User
}

type Query {
  user(id: ID!): User
  users: [User!]!
}

type Subscription {
  userCreated: User!
}

type User {
  id: ID!
  name: String!
}
