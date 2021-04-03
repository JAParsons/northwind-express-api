import connectToSqliteDatabase from './connect-to-database';

const northwindAdapter = {
  connectToDatabase: async (filename) => {
    return await connectToSqliteDatabase(filename);
  },
  getProductById: async (db, id) => {
    return await getProductById(db, id);
  },
  getOrdersByCustomerId: async (db, customerId) => {
    return await getOrdersByCustomerId(db, customerId);
  },
  getOrderDetailsByOrderId: async (db, orderId) => {
    return await getOrderDetailsByOrderId(db, orderId);
  },
  getEmployeeById: async (db, employeeId) => {
    return await getEmployeeById(db, employeeId);
  },
  getCategoryById: async (db, categoryId) => {
    return await getCategoryById(db, categoryId);
  }
};

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

export default northwindAdapter;
