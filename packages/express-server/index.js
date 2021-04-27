import { createServer, startServer } from './src/server';

const port = process.env.PORT || 3100;

const server = await createServer();
startServer({ server, port });
