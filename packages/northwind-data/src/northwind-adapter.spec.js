import northwindAdapter from './northwind-adapter';
import connectToDatabase from './connect-to-database';

const filename = `packages/northwind-data/northwind-db.sqlite`;
let db;

beforeAll(async () => {
  db = await connectToDatabase({ filename });
});

afterEach(async () => {
  await db.exec(`DELETE FROM Product`);
});

it('can get a product by id', async () => {
  // Arrange
  const productId = 1;
  await db.run(
    `INSERT INTO Product (
      Id, ProductName, SupplierId, CategoryId, QuantityPerUnit, UnitPrice, UnitsInStock,
      UnitsOnOrder, ReorderLevel, Discontinued
      )
      VALUES (
        ${productId},'Burger Sauce', 1, 1, '1 boxes x 20 bottles', 40, 1, 0, 1, 0
        );`
  );

  // Act
  const [product] = await northwindAdapter.getProductById(db, 1);

  // Assert
  expect(product).toBeDefined();
  expect(product.Id).toBe(productId);
});
