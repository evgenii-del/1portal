import { UPDATE_CAR_DETAILS } from "../actions/contract";

const initialState = {};

initialState.carDetails = JSON.parse(localStorage.getItem('carDetails')) ?? {
  stateNumber: "",
  selectedYear: 0,
  make: 0,
  model: 0,
  bodyNumber: "",
  startDate: "",
}

const contractReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CAR_DETAILS: {
      localStorage.setItem('carDetails', JSON.stringify(action.payload));
      console.log(JSON.parse(localStorage.getItem('carDetails')));
      return {
        carDetails: action.payload,
      };
    }
    default:
      return state;
  }
};

export default contractReducer;
