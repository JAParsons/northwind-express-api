import { getOrderDetailsByOrderId } from '@northwind/northwind-data';

const getOrderDetails = async (req, res) => {
  const {
    db,
    params: { id }
  } = req;

  if (!Number(id)) {
    res.status(200).send('Invalid input');
    return;
  }
  const orderDetails = await getOrderDetailsByOrderId(db, id);
  orderDetails && orderDetails.length > 0
    ? res.status(200).send(orderDetails)
    : res.status(200).send('No order details found');
};

export default getOrderDetails;
