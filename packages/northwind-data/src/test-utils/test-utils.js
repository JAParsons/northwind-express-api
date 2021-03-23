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

const insertOrder = async (db, customerId) => {
  return await db.run(
    `INSERT INTO 'Order' (
          CustomerId, EmployeeId, OrderDate, RequiredDate, ShippedDate, ShipVia,
          Freight, ShipName, ShipAddress, ShipCity, ShipRegion, ShipPostalCode,
          ShipCountry
          )
        VALUES (
          ${customerId}, 1, DATETIME('now'), DATETIME('now'), DATETIME('now'), 1,
          1, '', '', '', '', '', ''
          );`
  );
};

export { insertProduct, insertOrder };
