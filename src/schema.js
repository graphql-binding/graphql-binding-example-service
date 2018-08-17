const fetch = require("node-fetch");
const { HttpLink } = require("apollo-link-http");
const { makeRemoteExecutableSchema } = require("graphql-tools");

const typeDefs = `
  type Query {
    user(id: ID!): User
    users: [User!]!
  }

  type Mutation {
    createUser(name: String!): User!
    updateUser(id: ID!, name: String!): User
    deleteUser(id: ID!): User
  }

  type Subscription {
    userCreated: User!
  }

  type User {
    id: ID!
    name: String!
  }
`;

// Create the `HttpLink` required for the remote executable schema
const endpoint = `https://graphql-binding-example-service-kcbreqbsbh.now.sh`;
const link = new HttpLink({ uri: endpoint, fetch });

// Create the remote schema
module.exports = makeRemoteExecutableSchema({ link, schema: typeDefs });
