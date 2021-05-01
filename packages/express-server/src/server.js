import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import { connectToSqliteDatabase } from '@northwind/northwind-data';
import prometheusMiddleware from './middleware/metrics-middleware';
import { getProduct, getCategory } from './routes';

const createServer = async () => {
  const server = express();
  const db = await connectToSqliteDatabase();

  const apolloServer = new ApolloServer({
    typeDefs: gql`
      type Query {
        hello: String
      }
    `,
    resolvers: {
      Query: {
        hello: () => 'Hello world!'
      }
    }
  });

  // Set up a graphql endpoint on the express server
  apolloServer.applyMiddleware({ app: server });

  // Enable JSON parsing of request body content
  server.use(express.json());

  server.use(prometheusMiddleware);
  // Make the db connection available on every request
  server.use((req, _res, next) => {
    req.db = db;
    next();
  });

  server.get('/', (_req, res) => {
    res.send('Hello World');
  });

  server.get('/product/:id', getProduct);
  server.get('/category/:id', getCategory);

  return server;
};

const startServer = ({ server, port }) => {
  server.listen(port, () =>
    console.log(`Server now running on port ${port} 🚀`)
  );
};

export { createServer, startServer };
