function calculateTotalSalesWithTax(products, taxRate) {
  const total = products.reduce((total, product) => {
    total += product.price * product.quantity;
    return total;
  }, 0);

  return total + total * (taxRate / 100);
}

module.exports = calculateTotalSalesWithTax;
