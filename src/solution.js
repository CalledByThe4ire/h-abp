import Order from './Order';

export const init = items => new Order(items);

// BEGIN (write your solution here)
export const tryCancel = (order) => {
  if (order.is('init') || order.is('pending')) {
    order.cancel();
    return order.state;
  }
  return order.state;
};
// END
