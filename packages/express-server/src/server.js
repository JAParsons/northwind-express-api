import express from 'express';
import {
  connectToSqliteDatabase,
  getProductById
} from '@northwind/northwind-data';

const createServer = async () => {
  const server = express();
  const db = await connectToSqliteDatabase();

  // Enable JSON parsing of request body content
  server.use(express.json());

  server.get('/', (_req, res) => {
    res.send('Hello World');
  });

  server.get('/product/:id', async (req, res) => {
    const { id } = req.params;

    if (!Number(id)) {
      res.send('Invalid input');
      return;
    }
    const product = await getProductById(db, id);
    product && product.length > 0
      ? res.send(product)
      : res.send('No product found');
    return;
  });

  return server;
};

const startServer = ({ server, port }) => {
  server.listen(port, () =>
    console.log(`Server now running on port ${port} 🚀`)
  );
};

export { createServer, startServer };
