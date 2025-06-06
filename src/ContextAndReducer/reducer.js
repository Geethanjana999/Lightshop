export const initialState = {
  total: 0,
  products: [],
};

const storeReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        products: action.payload,
      };

    case "REMOVE":
      return {
        ...state,
        products: action.payload,
      };

    case "UPDATEPRICE":
      return {
        ...state,
        total: action.payload,
      };
    default:
      throw Error("Can not match case");
  }
};

export default storeReducer;
