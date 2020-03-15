const updateBookList = (state, action) => {
  if (state === undefined) {
    return {
      books: [],
      loading: true,
      error: null,
    };
  }

  switch (action.type) {
    case 'FETCH_BOOKS_REQUEST':
      return {
        books: state.booklist.books || [],
        loading: state.booklist.loading,
        error: null,
      };

    case 'FETCH_BOOKS_SUCCESS':
      return {
        books: action.payload,
        loading: false,
        error: null,
      };

    case 'FETCH_BOOKS_FAILURE':
      return {
        books: [],
        loading: false,
        error: action.payload,
      };

    case 'BOOK_GET_INFO':
      return {
        books: state.booklist.books,
        loading: false,
        error: null,
      };

    default:
      return state.booklist;
  };
};

export default updateBookList;
