import northwindAdapter from './northwind-adapter';
import connectToDatabase from './connect-to-database';
import { insertProduct, insertOrder } from './test-utils/test-utils';

const filename = `packages/northwind-data/northwind-db.sqlite`;
let db;

beforeAll(async () => {
  db = await connectToDatabase({ filename });
});

afterEach(async () => {
  await db.exec(`DELETE FROM Product`);
  await db.exec(`DELETE FROM "Order"`);
});

afterAll(async () => {
  await db.close();
});

it('can get a product by id', async () => {
  // Arrange
  const productId = 1;
  await insertProduct(db, productId);

  // Act
  const [product] = await northwindAdapter.getProductById(db, 1);

  // Assert
  expect(product).toBeDefined();
  expect(product.Id).toBe(productId);
});

it('can get all orders for a customer', async () => {
  // Arrange
  const customerId = '1';
  await insertOrder(db, customerId);

  // Act
  const [order] = await northwindAdapter.getOrdersByCustomerId(db, 1);

  // Assert
  expect(order).toBeDefined();
  expect(order.CustomerId).toBe(customerId);
});
