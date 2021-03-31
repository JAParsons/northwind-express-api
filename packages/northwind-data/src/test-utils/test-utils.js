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

const insertEmployee = async (db, { employeeId }) => {
  return await db.run(
    `INSERT INTO Employee (
      Id, LastName, FirstName, Title, TitleOfCourtesy, BirthDate, HireDate,
      Address, City, Region, PostalCode, Country, HomePhone, Extension, Photo,
      Notes, ReportsTo, PhotoPath
      )
    VALUES (${employeeId}, '', '', '', '', DATETIME('now'), DATETIME('now'), '', 
    '', '', '', '', '', '', '', '', '', '');`
  );
};

const insertCategory = async (db, { categoryId }) => {
  return await db.run(
    `INSERT INTO Category (
      Id, CategoryName, Description
      )
    VALUES (${categoryId}, '', '');`
  );
};

export {
  insertProduct,
  insertOrder,
  insertOrderDetail,
  insertEmployee,
  insertCategory
};
