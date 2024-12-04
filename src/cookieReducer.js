const initialState = { value: 0 };

const cookieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "cookie/added":
      return { value: state.value + 1 };
    case "cookie/removed":
      return { value: state.value - 1 };
    default:
      return state;
  }
};

export default cookieReducer;
