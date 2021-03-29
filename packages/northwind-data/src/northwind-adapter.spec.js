import northwindAdapter from './northwind-adapter';
import connectToDatabase from './connect-to-database';
import {
  insertProduct,
  insertOrder,
  insertOrderDetail
} from './test-utils/test-utils';

const filename = `packages/northwind-data/northwind-db.sqlite`;
let db;

beforeAll(async () => {
  db = await connectToDatabase({ filename });
});

afterEach(async () => {
  await db.exec(`DELETE FROM Product`);
  await db.exec(`DELETE FROM "Order"`);
  await db.exec(`DELETE FROM OrderDetail`);
});

afterAll(async () => {
  await db.close();
});

it('gets a product by id', async () => {
  // Arrange
  const productId = 1;
  await insertProduct(db, productId);

  // Act
  const [product] = await northwindAdapter.getProductById(db, 1);

  // Assert
  expect(product).toBeDefined();
  expect(product).toHaveProperty('Id');
  expect(product.Id).toBe(productId);
  expect(product).toHaveProperty('ProductName');
  expect(product).toHaveProperty('SupplierId');
  expect(product).toHaveProperty('CategoryId');
  expect(product).toHaveProperty('QuantityPerUnit');
  expect(product).toHaveProperty('UnitPrice');
  expect(product).toHaveProperty('UnitsInStock');
  expect(product).toHaveProperty('UnitsOnOrder');
  expect(product).toHaveProperty('ReorderLevel');
  expect(product).toHaveProperty('Discontinued');
});

it('gets an order by customerId', async () => {
  // Arrange
  const customerId = '1';
  await insertOrder(db, { orderId: 1, customerId });

  // Act
  const [order] = await northwindAdapter.getOrdersByCustomerId(db, customerId);

  // Assert
  expect(order).toBeDefined();
  expect(order).toHaveProperty('CustomerId');
  expect(order.CustomerId).toBe(customerId);
  expect(order).toHaveProperty('EmployeeId');
  expect(order).toHaveProperty('Freight');
  expect(order).toHaveProperty('OrderDate');
  expect(order).toHaveProperty('RequiredDate');
  expect(order).toHaveProperty('ShipAddress');
  expect(order).toHaveProperty('ShipCity');
  expect(order).toHaveProperty('ShipCountry');
  expect(order).toHaveProperty('ShipName');
  expect(order).toHaveProperty('ShipPostalCode');
  expect(order).toHaveProperty('ShipRegion');
  expect(order).toHaveProperty('ShipVia');
  expect(order).toHaveProperty('ShippedDate');
});

it('gets all orders for a customer', async () => {
  // Arrange
  const customerId = '1';
  await insertOrder(db, { orderId: 1, customerId });
  await insertOrder(db, { orderId: 2, customerId });
  await insertOrder(db, { orderId: 3, customerId });

  // Act
  const orders = await northwindAdapter.getOrdersByCustomerId(db, customerId);

  // Assert
  expect(orders).toBeDefined();
  expect(orders).toHaveLength(3);
  expect(orders[0].CustomerId).toBe(customerId);
  expect(orders[1].CustomerId).toBe(customerId);
  expect(orders[2].CustomerId).toBe(customerId);
});

it('only gets orders for the specified customer', async () => {
  // Arrange
  const customerId1 = '1';
  const customerId2 = '2';
  await insertOrder(db, { orderId: 1, customerId: customerId1 });
  await insertOrder(db, { orderId: 2, customerId: customerId2 });

  // Act
  const orders = await northwindAdapter.getOrdersByCustomerId(db, customerId1);

  // Assert
  expect(orders).toBeDefined();
  expect(orders).toHaveLength(1);
  expect(orders[0].CustomerId).toBe(customerId1);
});

it('gets the orderDetails for an order', async () => {
  // Arrange
  const orderId = 1;
  const customerId = '1';
  const orderDetailId1 = '1';
  const orderDetailId2 = '2';

  await insertOrder(db, { orderId, customerId });
  await insertOrderDetail(db, { orderDetailId: orderDetailId1, orderId });

  // Act
  const [orderDetail] = await northwindAdapter.getOrderDetailsByOrderId(
    db,
    orderId
  );

  // Assert
  expect(orderDetail).toBeDefined();
  expect(orderDetail).toHaveProperty('OrderId');
  expect(orderDetail.OrderId).toBe(orderId);
  expect(orderDetail).toHaveProperty('ProductId');
  expect(orderDetail).toHaveProperty('UnitPrice');
  expect(orderDetail).toHaveProperty('Quantity');
  expect(orderDetail).toHaveProperty('Discount');
});

it('gets all the orderDetails for an order', async () => {
  // Arrange
  const orderId = 1;
  const customerId = '1';
  const orderDetailId1 = '1';
  const orderDetailId2 = '2';

  await insertOrder(db, { orderId, customerId });
  await insertOrderDetail(db, { orderDetailId: orderDetailId1, orderId });
  await insertOrderDetail(db, { orderDetailId: orderDetailId2, orderId });

  // Act
  const orderDetails = await northwindAdapter.getOrderDetailsByOrderId(
    db,
    orderId
  );

  // Assert
  expect(orderDetails).toBeDefined();
  expect(orderDetails).toHaveLength(2);
  expect(orderDetails[0].OrderId).toBe(orderId);
  expect(orderDetails[1].OrderId).toBe(orderId);
});

it('only gets orderDetails for the specified order', async () => {
  // Arrange
  const orderId1 = 1;
  const orderId2 = 2;
  const customerId = '1';
  const orderDetailId1 = '1';
  const orderDetailId2 = '2';

  await insertOrder(db, { orderId: orderId1, customerId });
  await insertOrderDetail(db, {
    orderDetailId: orderDetailId1,
    orderId: orderId1
  });
  await insertOrderDetail(db, {
    orderDetailId: orderDetailId2,
    orderId: orderId2
  });

  // Act
  const orderDetails = await northwindAdapter.getOrderDetailsByOrderId(
    db,
    orderId1
  );

  // Assert
  expect(orderDetails).toBeDefined();
  expect(orderDetails).toHaveLength(1);
  expect(orderDetails[0].OrderId).toBe(orderId1);
});
