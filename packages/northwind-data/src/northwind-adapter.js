const getProductById = async (db, id) => {
  return await db.all(`SELECT * FROM Product WHERE Id = ${id}`);
};
const getOrdersByCustomerId = async (db, customerId) => {
  return await db.all(`SELECT * FROM "Order" WHERE CustomerId = ${customerId}`);
};
const getOrderDetailsByOrderId = async (db, orderId) => {
  return await db.all(`SELECT * FROM OrderDetail WHERE OrderId = ${orderId}`);
};
const getEmployeeById = async (db, employeeId) => {
  return await db.all(`SELECT * FROM Employee WHERE Id = ${employeeId}`);
};
const getCategoryById = async (db, categoryId) => {
  return await db.all(`SELECT * FROM Category WHERE Id = ${categoryId}`);
};

export {
  getProductById,
  getOrdersByCustomerId,
  getOrderDetailsByOrderId,
  getEmployeeById,
  getCategoryById
};
