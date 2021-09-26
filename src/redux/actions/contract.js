export const UPDATE_CAR_DETAILS = "UPDATE_CAR_DETAILS";
export const UPDATE_CUSTOMER_DETAILS = "UPDATE_CUSTOMER_DETAILS";
export const UPDATE_CUSTOMER_DOCUMENTS = "UPDATE_CUSTOMER_DOCUMENTS";

export const updateCarDetails = (data) => ({
  type: UPDATE_CAR_DETAILS,
  payload: data,
});

export const updateCustomerDetails = (data) => ({
  type: UPDATE_CUSTOMER_DETAILS,
  payload: data,
});

export const updateCustomerDocuments = (data) => ({
  type: UPDATE_CUSTOMER_DOCUMENTS,
  payload: data,
});
