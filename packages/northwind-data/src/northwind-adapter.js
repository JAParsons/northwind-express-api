const northwindAdapter = {
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

export default northwindAdapter;
