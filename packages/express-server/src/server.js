import express from 'express';

const PORT = process.env.PORT || 3100;

const createServer = () => {
  const server = express();

  // Enable JSON parsing of request body content
  server.use(express.json());

  server.get('/', (_req, res) => {
    res.send('Hello World');
  });

  return server;
};

const startServer = ({ server }) => {
  server.listen(PORT, () =>
    console.log(`Server now running on port ${PORT} 🚀`)
  );
};

export { createServer, startServer };
