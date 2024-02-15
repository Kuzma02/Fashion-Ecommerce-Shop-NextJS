export const calculateTotals = (cartItems) => {
    let amount = 0;
    let total = 0;
    cartItems.forEach((item) => {
      amount += item.product.amount;
      total += item.product.amount * item.product.price;
    });
    return { amount, total };
  };