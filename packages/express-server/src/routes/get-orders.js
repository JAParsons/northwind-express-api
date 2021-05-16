import { getOrdersByCustomerId } from '@northwind/northwind-data';

const getOrders = async (req, res) => {
  const {
    db,
    params: { id }
  } = req;

  if (!Number(id)) {
    res.status(200).send('Invalid input');
    return;
  }
  const orders = await getOrdersByCustomerId(db, id);
  orders && orders.length > 0
    ? res.status(200).send(orders)
    : res.status(200).send('No orders found');
};

export default getOrders;
