const booksRequested = () => {
  return {
    type: 'FETCH_BOOKS_REQUEST',
  }
};

const booksLoaded = (newBooks) => {
  return {
    type: 'FETCH_BOOKS_SUCCESS',
    payload: newBooks
  };
};

const booksError = (error) => {
  return {
    type: 'FETCH_BOOKS_FAILURE',
    payload: error,
  }
};

const bookAddedToCart = (bookId) => {
  return {
    type: 'BOOK_ADDED_TO_CART',
    payload: bookId
  };
};

const bookRemoveFromCart = (bookId) => {
  return {
    type: 'BOOK_REMOVED_FROM_CART',
    payload: bookId,
  }
};

const allBooksRemoveFromCart = (bookId) => {
  return {
    type: 'ALL_BOOK_REMOVED_FROM_CART',
    payload: bookId,
  }
};


// ! использование одной функции вместо нескольких
// const fetchBooks = (bookstoreService, dispatch) => () => {
//   dispatch(booksRequested());
//   bookstoreService.getBooks()
//     .then((data) => dispatch(booksLoaded(data)))
//     .catch((err) => dispatch(booksError(err)));
// };



export {
  // fetchBooks,

  booksRequested,
  booksLoaded,
  booksError,

  bookAddedToCart,
  bookRemoveFromCart,
  allBooksRemoveFromCart,
};
