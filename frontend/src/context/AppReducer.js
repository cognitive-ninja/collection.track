export default (state, action) => {
  switch (action.type) {
    case "ADD_ITEM_TO_READLIST":
      return {
        ...state,
        readlist: [action.payload, ...state.readlist],
      };
    case "REMOVE_ITEM_FROM_READLIST":
      return {
        ...state,
        readlist: state.readlist.filter(
          (book) => book.id !== action.payload
        ),
      };
    case "ADD_ITEM_TO_COMPLETED":
      return {
        ...state,
        readlist: state.readlist.filter(
          (book) => book.id !== action.payload.id
        ),
        completed: [action.payload, ...state.completed],
      };
    case "MOVE_TO_READLIST":
      return {
        ...state,
        completed: state.completed.filter(
          (book) => book.id !== action.payload.id
        ),
        readlist: [action.payload, ...state.readlist],
      };
    case "REMOVE_FROM_COMPLETED":
      return {
        ...state,
        completed: state.completed.filter((book) => book.id !== action.payload),
      };
    default:
      return state;
  }
};
