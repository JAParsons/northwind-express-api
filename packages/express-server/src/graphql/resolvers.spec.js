import { resolvers } from './resolvers';

const db = { all: jest.fn() };

beforeEach(() => {
  jest.clearAllMocks();
});

it('resolves the product query', async () => {
  // Arrange
  const {
    Query: { product }
  } = resolvers;
  const id = 1;
  db.all.mockImplementation(() => []);

  // Act
  await product(undefined, { id }, { db });

  // Assert
  expect(db.all).toHaveBeenCalledWith(`SELECT * FROM Product WHERE Id = ${id}`);
});

it('resolves the category query', async () => {
  // Arrange
  const {
    Query: { category }
  } = resolvers;
  const id = 1;
  db.all.mockImplementation(() => []);

  // Act
  await category(undefined, { id }, { db });

  // Assert
  expect(db.all).toHaveBeenCalledWith(
    `SELECT * FROM Category WHERE Id = ${id}`
  );
});

it('resolves the orders query', async () => {
  // Arrange
  const {
    Query: { orders }
  } = resolvers;
  const id = 1;
  db.all.mockImplementation(() => []);

  // Act
  await orders(undefined, { id }, { db });

  // Assert
  expect(db.all).toHaveBeenCalledWith(
    `SELECT * FROM "Order" WHERE CustomerId = ${id}`
  );
});

it('resolves the orderDetails query', async () => {
  // Arrange
  const {
    Query: { orderDetails }
  } = resolvers;
  const id = 1;
  db.all.mockImplementation(() => []);

  // Act
  await orderDetails(undefined, { id }, { db });

  // Assert
  expect(db.all).toHaveBeenCalledWith(
    `SELECT * FROM OrderDetail WHERE OrderId = ${id}`
  );
});

it('resolves the employee query', async () => {
  // Arrange
  const {
    Query: { employee }
  } = resolvers;
  const id = 1;
  db.all.mockImplementation(() => []);

  // Act
  await employee(undefined, { id }, { db });

  // Assert
  expect(db.all).toHaveBeenCalledWith(
    `SELECT * FROM Employee WHERE Id = ${id}`
  );
});
