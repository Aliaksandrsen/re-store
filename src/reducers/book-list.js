const updateBookList = (state, action) => {
  if (state === undefined) {
    return {
      books: [],
      loading: true,
      error: null,
      infoId: null,
    };
  }

  switch (action.type) {
    case 'FETCH_BOOKS_REQUEST':
      return {
        // тк использует один способ доступа к данным меняем здесь
        // books: [],
        books: state.booklist.books || [],
        // loading: true,
        loading: state.booklist.loading,
        error: null,
        infoId: null,
      };

    case 'FETCH_BOOKS_SUCCESS':
      return {
        books: action.payload,
        loading: false,
        error: null,
        infoId: null,
      };

    case 'FETCH_BOOKS_FAILURE':
      return {
        books: [],
        loading: false,
        error: action.payload,
        infoId: null,
      };

    case 'BOOK_GET_INFO':
      return {
        books: state.booklist.books,
        loading: false,
        error: null,
        infoId: action.payload,
      };

    default:
      return state.booklist;
  };
};

export default updateBookList;
