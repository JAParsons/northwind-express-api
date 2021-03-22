import sqlite3 from 'sqlite3';
import connectToSqliteDatabase from './connect-to-database';

it('can connect to a sqlite database', async () => {
  // Arrange
  const filename = `packages/northwind-data/northwind-db.sqlite`;
  const driver = sqlite3.Database;

  // Act
  const northwindDb = await connectToSqliteDatabase({ filename, driver });

  // Assert
  expect(northwindDb).toHaveProperty('config');
  expect(northwindDb.config).toHaveProperty('filename');
  expect(northwindDb.config).toHaveProperty('driver');
  expect(northwindDb).toHaveProperty('db');
});
