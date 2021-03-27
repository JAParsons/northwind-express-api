const insertProduct = async (db, productId) => {
  return await db.run(
    `INSERT INTO Product (
      Id, ProductName, SupplierId, CategoryId, QuantityPerUnit, UnitPrice, UnitsInStock,
      UnitsOnOrder, ReorderLevel, Discontinued
      )
      VALUES (
        ${productId},'Burger Sauce', 1, 1, '1 boxes x 20 bottles', 40, 1, 0, 1, 0
        );`
  );
};

const insertOrder = async (db, { orderId, customerId }) => {
  return await db.run(
    `INSERT INTO 'Order' (
          Id, CustomerId, EmployeeId, OrderDate, RequiredDate, ShippedDate, ShipVia,
          Freight, ShipName, ShipAddress, ShipCity, ShipRegion, ShipPostalCode,
          ShipCountry
          )
        VALUES (
          ${orderId}, ${customerId}, 1, DATETIME('now'), DATETIME('now'), DATETIME('now'), 1,
          1, '', '', '', '', '', ''
          );`
  );
};

const insertOrderDetail = async (db, { orderDetailId, orderId }) => {
  return await db.run(
    `INSERT INTO OrderDetail (
      Id, OrderId, ProductId, UnitPrice, Quantity, Discount
      )
        VALUES (${orderDetailId}, ${orderId}, 1, 1, 1, 0);`
  );
};

export { insertProduct, insertOrder, insertOrderDetail };
