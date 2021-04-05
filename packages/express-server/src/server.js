import express from 'express';
import { connectToSqliteDatabase } from '@northwind/northwind-data';

const createServer = async () => {
  const server = express();
  const db = await connectToSqliteDatabase();

  // Enable JSON parsing of request body content
  server.use(express.json());

  server.get('/', (_req, res) => {
    res.send('Hello World');
  });

  return server;
};

const startServer = ({ server, port }) => {
  server.listen(port, () =>
    console.log(`Server now running on port ${port} 🚀`)
  );
};

export { createServer, startServer };
