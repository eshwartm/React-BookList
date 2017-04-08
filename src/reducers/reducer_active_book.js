// State argument is not the whole state
// it is only the piece of state this reducer is responsible for
export default function(state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
        return action.payload;
      break;
    default:
      return state;
  }
}
