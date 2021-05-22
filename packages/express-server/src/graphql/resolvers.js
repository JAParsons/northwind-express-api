import {
  getProductById,
  getOrdersByCustomerId,
  getOrderDetailsByOrderId,
  getEmployeeById
} from '@northwind/northwind-data';

export const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    product: async (_, { id }, { db }) => {
      const [product] = await getProductById(db, id);
      return product;
    },
    orders: async (_, { id }, { db }) => {
      const orders = await getOrdersByCustomerId(db, id);
      return orders;
    },
    orderDetails: async (_, { id }, { db }) => {
      const orderDetails = await getOrderDetailsByOrderId(db, id);
      return orderDetails;
    },
    employee: async (_, { id }, { db }) => {
      const [employee] = await getEmployeeById(db, id);
      return employee;
    }
  }
};
