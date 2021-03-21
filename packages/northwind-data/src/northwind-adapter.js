const northwindAdapter = {
  getProductById: async (db, id) => await getProductById(db, id)
};

const getProductById = async (db, id) => {
  return await db.all(`SELECT * FROM Product WHERE Id = ${id}`);
};

export default northwindAdapter;
