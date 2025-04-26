require('dotenv').config();
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const cors = require('cors');
const express = require('express');

const typeDefs = require('./schema/type-defs');
const resolvers = require('./schema/resolver');

async function startServer() {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();

  app.use(
    '/graphql',
    cors(),
    express.json(),
    expressMiddleware(server)
  );

  app.listen(8000, () => {
    console.log(`🚀 Server is running at ${process.env.APP_SERVER}:8000/graphql`);
  });
}

startServer();
