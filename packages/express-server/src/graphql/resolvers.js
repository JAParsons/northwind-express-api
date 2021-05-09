import { getProductById } from '@northwind/northwind-data';

export const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    product: async (_, { id }, { db }) => {
      const [product] = await getProductById(db, id);
      return product;
    }
  }
};
