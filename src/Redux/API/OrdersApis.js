import axios from 'axios';

// ************ PRIVATE APIs ************

// get all orders
const getAllOrders = async (token) => {
  const { data } = await axios.get(`https://uzumserver.vercel.app/api/orders`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

// get order by id
const getOrderById = async (id, token) => {
  const { data } = await axios.get(`https://uzumserver.vercel.app/api/orders/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

// create order
const createOrder = async (order, token) => {
  const { data } = await axios.post(`https://uzumserver.vercel.app/api/orders`, order, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

// delete order
const deleteOrder = async (id, token) => {
  const { data } = await axios.delete(`https://uzumserver.vercel.app/api/orders/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

// delete all orders
const deleteAllOrders = async (token) => {
  const { data } = await axios.delete(`https://uzumserver.vercel.app/api/orders`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

// checkout from stripe
const stripePayment = async (datas, token) => {
  const { data } = await axios.post(`https://uzumserver.vercel.app/api/orders/checkout`, datas, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

// export
export {
  getAllOrders,
  getOrderById,
  createOrder,
  deleteOrder,
  deleteAllOrders,
  stripePayment,
};
