import { getEmployeeById } from '@northwind/northwind-data';

const getEmployee = async (req, res) => {
  const {
    db,
    params: { id }
  } = req;

  if (!Number(id)) {
    res.status(200).send('Invalid input');
    return;
  }
  const category = await getEmployeeById(db, id);
  category && category.length > 0
    ? res.status(200).send(category)
    : res.status(200).send('No employee found');
};

export default getEmployee;
