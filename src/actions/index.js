export function selectBook(book) {
  // selectBook is an action creator
  // it needs to return our action
  // an object with a type property (type: BOOK_SELECTED)
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
