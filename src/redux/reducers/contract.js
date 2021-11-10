import { UPDATE_CAR_DETAILS, UPDATE_CUSTOMER_DETAILS, UPDATE_CUSTOMER_DOCUMENTS } from "../actions/contract";

const initialState = {};

initialState.carDetails = JSON.parse(localStorage.getItem("carDetails")) ?? {
  stateNumber: "",
  selectedYear: 0,
  make: 0,
  model: 0,
  bodyNumber: "",
  startDate: "",
};

initialState.customerDetails = JSON.parse(localStorage.getItem("customerDetails")) ?? {
  firstName: "",
  lastName: "",
  parentName: "",
  birthdayDate: "",
  individualNumber: "",
  city: 0,
  street: "",
  house: "",
  apartment: "",
  phone: "",
  email: "",
};

initialState.customerDetails.customerDocuments = JSON.parse(localStorage.getItem("customerDocuments")) ?? {
  passport: {
    seriesAndNumber: "",
    issueDate: "",
    issuedBy: "",
  },
  card: {
    number: "",
    record: "",
    issuedBy: "",
    issueDate: "",
  },
  driver: {
    seriesAndNumber: "",
    issueDate: "",
    issuedBy: "",
    validUntil: "",
  }
};

const contractReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CAR_DETAILS: {
      localStorage.setItem("carDetails", JSON.stringify(action.payload));
      return {
        ...state,
        carDetails: action.payload,
      };
    }
    case UPDATE_CUSTOMER_DETAILS: {
      localStorage.setItem("customerDetails", JSON.stringify(action.payload));
      return {
        ...state,
        customerDetails: action.payload,
      };
    }
    case UPDATE_CUSTOMER_DOCUMENTS: {
      localStorage.setItem("customerDocuments", JSON.stringify(action.payload));
      return {
        ...state,
        customerDetails: {
          ...state.customerDetails,
          customerDocuments: action.payload
        }
      }
    }
    default:
      return state;
  }
};

export default contractReducer;
