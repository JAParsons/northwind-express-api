import express from 'express';
import { connectToSqliteDatabase } from '@northwind/northwind-data';
// why can't I use a relative import?
// import prometheusMiddleware from './middleware/metrics-middleware';
import prometheusMiddleware from '@northwind/express-server/src/middleware/metrics-middleware.js';
import getProduct from './routes/get-product.js';
import getCategory from './routes/get-category.js';

const createServer = async () => {
  const server = express();
  const db = await connectToSqliteDatabase();

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
