import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import gql from 'graphql-tag';

// GraphQL Schema
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// GraphQL Resolvers
const resolvers = {
    Query: {
        hello: () => "Hello from Apollo Server"
    }
};

const server = new ApolloServer({typeDefs, resolvers});

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});

console.info(`🚀 Server ready at ${url}`);