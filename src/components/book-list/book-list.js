import React, { Component } from 'react';
import { connect } from 'react-redux';


import BookListItem from '../book-list-item';
import { withBookstoreService } from '../hoc';
import {
  booksRequested,
  booksLoaded,
  booksError,
  bookAddedToCart,
  // fetchBooks,
} from '../../actions';

import { compose } from '../../utils';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import './book-list.css';


// оборачиваемый компонент без логики
const BookList = (props) => {
  const { books, onAddedToCart } = props;
  return (
    <ul className="book-list">
      {
        books.map((book) => {
          return (
            <li key={book.id}>
              <BookListItem
                book={book}
                onAddedToCart={() => onAddedToCart(book.id)} />
            </li>
          )
        })
      }
    </ul>
  );
};

class BookListConteiner extends Component {

  componentDidMount() {
    const {
      bookstoreService,
      booksLoaded,
      booksRequested,
      booksError } = this.props;

    booksRequested();
    bookstoreService.getBooks()
      .then((data) => booksLoaded(data))
      .catch((err) => booksError(err));

  }

  // componentDidMount() {
  //   this.props.fetchBooks();
  // }

  render() {
    const { books, loading, error, onAddedToCart } = this.props;

    if (error) {
      return <ErrorIndicator />;
    }

    if (loading) {
      return <Spinner />;
    }

    return (
      <BookList books={books} onAddedToCart={onAddedToCart} />
    );
  }
}


const mapStateToProps = (state) => {
  return {
    books: state.booklist.books,
    loading: state.booklist.loading,
    error: state.booklist.error,
  };
};

// --------------------------------------------------------
// const mapDispatchToProps = (dispatch) => {
//   return {
//     booksLoaded: (newBooks) => {
//       dispatch(booksLoaded(newBooks));
//     },

//     booksRequested: () => {
//       dispatch(booksRequested());
//     },

//     booksError: (error) => {
//       dispatch(booksError(error));
//     },

//     onAddedToCart: (bookId) => {
//       dispatch(bookAddedToCart(bookId));
//     },
//   };
// };
// --------------------------------------------------------

const mapDispatchToProps = {
  booksLoaded,
  booksRequested,
  booksError,
  onAddedToCart: bookAddedToCart,
};

// --------------------------------------------------------
// const mapDispatchToProps = (dispatch, ownProps) => {

//   const { bookstoreService } = ownProps;

//   return {
//     fetchBooks: fetchBooks(bookstoreService, dispatch),
//     onAddedToCart: (id) => dispatch(bookAddedToCart(id)),
//   };
// };
// --------------------------------------------------------

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListConteiner); // ! use BookListConteiner not BookList
