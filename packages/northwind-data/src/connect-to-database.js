import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

const connectToSqliteDatabase = async ({
  filename,
  driver = sqlite3.Database
}) => {
  let db;
  try {
    db = await open({
      filename,
      driver
    });
  } catch (error) {
    console.error(error);
  }
  return db;
};

export default connectToSqliteDatabase;
