import store from '../store'; // for thunk example only

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

const bookGetInfo = (bookId) => {
  return {
    type: 'BOOK_GET_INFO',
    payload: bookId,
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

const sortCart = (sortingItem) => {
  return {
    type: 'SORT_BOOKS',
    payload: sortingItem,
  }
};


const fetchBooks = (bookstoreService) => (dispatch) => {
  dispatch(booksRequested());
  bookstoreService.getBooks()
    .then(data => dispatch(booksLoaded(data)))
    .catch(err => dispatch(booksError(err)));
};


// ================================
// example how thunk work 
// return not object (return function)
const myAction = (dispatch) => {
  setTimeout(() => dispatch({
    type: 'DELAYED_ACTION',
  }), 3000);
};

store.dispatch(myAction);
//TODO смотреть работу в redux devtools
// ================================

// 1) refactor to actionCreator
const myActionCreator = () => (dispatch) => {
  setTimeout(() => dispatch({
    type: 'DELAYED_ACTION_CREATOR_1',
  }), 4000);
};
store.dispatch(myActionCreator());

// 2) refactor to actionCreator (получаем возможность передавать параметры внутрь)
const delayedActionCreator = (timeout) => (dispatch) => {
  setTimeout(() => dispatch({
    type: 'DELAYED_ACTION_CREATOR_2',
  }), timeout);
};
store.dispatch(delayedActionCreator(5000));


export {
  booksRequested,
  booksLoaded,
  booksError,
  fetchBooks,

  bookGetInfo,
  bookAddedToCart,
  bookRemoveFromCart,
  allBooksRemoveFromCart,

  sortCart,
};
