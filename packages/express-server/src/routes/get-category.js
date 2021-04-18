import { getCategoryById } from '@northwind/northwind-data';

const getCategory = async (req, res) => {
  const { id } = req.params;
  const { db } = req;

  if (!Number(id)) {
    res.status(200).send('Invalid input');
    return;
  }
  const category = await getCategoryById(db, id);
  category && category.length > 0
    ? res.status(200).send(category)
    : res.status(200).send('No category found');
};

export default getCategory;
