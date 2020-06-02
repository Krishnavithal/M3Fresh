export const goToHomePage = (history) => {
  history.push("/");
};

export const goToProductsPage = (history) => {
  history.push("/products");
};

export const goToCartSummaryPage = (history) => {
  history.push("/cart");
};

export const goToDeliveryDetailsPage = (history) => {
  history.push("/delivery-details");
};

export const goToInvoiceDetailsPage = (history, orderId) => {
  history.push(`/invoice-details/${orderId}`);
};
