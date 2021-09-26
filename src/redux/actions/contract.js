export const GET_BOOKS_STARTED = "GET_BOOKS_STARTED";

export const getBooksFailure = (error) => ({
  type: GET_BOOKS_STARTED,
  payload: error,
});
