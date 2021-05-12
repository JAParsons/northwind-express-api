import {
  getProductById,
  getOrdersByCustomerId
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
      console.log(orders);
      return orders;
    }
  }
};
