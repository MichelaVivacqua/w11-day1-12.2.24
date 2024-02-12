const initialState = { preferiti: { content: [] } };

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAV":
      return {
        ...state,
        cart: {
          ...state.preferiti,

          content: [...state.preferiti.content, action.payload],
        },
      };
    default:
      return state;
  }
};
export default mainReducer;
