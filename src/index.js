import fetch from "node-fetch";
import { Binding } from "graphql-binding";
import { HttpLink } from "apollo-link-http";
import { makeRemoteExecutableSchema } from "graphql-tools";

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

export default class ExampleServiceBinding extends Binding {
  constructor() {
    // Create the `HttpLink` required for the remote executable schema
    const endpoint = `https://graphql-binding-example-service-kcbreqbsbh.now.sh`;
    const link = new HttpLink({ uri: endpoint, fetch });

    // Create the remote schema
    const schema = makeRemoteExecutableSchema({ link, schema: typeDefs });

    // Invoke the constructor of `Binding` with the remote schema
    super({
      schema: schema
    });
  }
}
