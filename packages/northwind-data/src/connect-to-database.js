import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

const connectToSqliteDatabase = async ({
  filename,
  driver = sqlite3.Database
}) => {
  return await open({
    filename,
    driver
  });
};

export default connectToSqliteDatabase;
