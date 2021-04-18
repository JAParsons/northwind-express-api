import { getProductById } from '@northwind/northwind-data';

const getProduct = async (req, res) => {
  const {
    db,
    params: { id }
  } = req;

  if (!Number(id)) {
    res.status(200).send('Invalid input');
    return;
  }
  const product = await getProductById(db, id);
  product && product.length > 0
    ? res.status(200).send(product)
    : res.status(200).send('No product found');
};

export default getProduct;
