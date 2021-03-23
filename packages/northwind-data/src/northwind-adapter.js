const northwindAdapter = {
  getProductById: async (db, id) => await getProductById(db, id),
  getOrdersByCustomerId: async (db, customerId) =>
    await getOrdersByCustomerId(db, customerId)
};

const getProductById = async (db, id) => {
  return await db.all(`SELECT * FROM Product WHERE Id = ${id}`);
};
const getOrdersByCustomerId = async (db, customerId) => {
  return await db.all(`SELECT * FROM "Order" WHERE CustomerId = ${customerId}`);
};

export default northwindAdapter;
