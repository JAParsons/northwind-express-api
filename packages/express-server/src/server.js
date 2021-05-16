import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { loadSchemaSync } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { addResolversToSchema } from '@graphql-tools/schema';
import { resolvers } from './graphql/resolvers';
import path from 'path';
import { connectToSqliteDatabase } from '@northwind/northwind-data';
import prometheusMiddleware from './middleware/metrics-middleware';
import { getProduct, getCategory, getOrders } from './routes';

const createServer = async () => {
  const server = express();
  const db = await connectToSqliteDatabase();

  const schema = loadSchemaSync(
    path.join(path.resolve(), 'packages/express-server/src/graphql/*.graphql'),
    {
      loaders: [new GraphQLFileLoader()]
    }
  );

  const apolloServer = new ApolloServer({
    schema: addResolversToSchema({
      schema,
      resolvers
    }),
    context: () => ({
      db
    })
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
  server.get('/orders/:id', getOrders);

  return server;
};

const startServer = ({ server, port }) => {
  server.listen(port, () =>
    console.log(`Server now running on port ${port} 🚀`)
  );
};

export { createServer, startServer };
