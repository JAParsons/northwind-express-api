import fs from 'fs';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

const filename = 'northwind-db.sqlite';

// Create the database file
try {
  fs.unlinkSync(filename);
} catch (error) {
} finally {
  fs.writeFileSync(filename, '');
}

// Import the schema
try {
  const schema = fs.readFileSync('./scripts/schema.sql').toString();
  const db = await open({ filename, driver: sqlite3.Database });
  await db.exec(schema);
  db.close();
} catch (error) {
  console.error(error);
}
