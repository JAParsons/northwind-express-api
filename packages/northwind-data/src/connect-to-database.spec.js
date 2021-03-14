// CHECK IF BABEL ACTUALLY WORKS
import sqlite3 from 'sqlite3';
import connectToSqliteDatabase from './connect-to-database';

it('connects to a sqlite database', () => {
  // Arrange
  const filename = './northwind-db';
  const driver = sqlite3.Database;

  // Act
  const connection = connectToSqliteDatabase({ filename, driver });

  // Assert
  expect(typeof connection).toBe(Object);
});
