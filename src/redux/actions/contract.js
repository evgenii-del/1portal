export const UPDATE_CAR_DETAILS = "UPDATE_CAR_DETAILS";
export const UPDATE_CUSTOMER_DETAILS = "UPDATE_CUSTOMER_DETAILS";

export const updateCarDetails = (data) => ({
  type: UPDATE_CAR_DETAILS,
  payload: data,
});

export const updateCustomerDetails = (data) => ({
  type: UPDATE_CUSTOMER_DETAILS,
  payload: data,
});
