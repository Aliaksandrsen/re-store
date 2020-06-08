import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import BookListItem from '../book-list-item';
import { withBookstoreService } from '../hoc';
import { fetchBooks, bookAddedToCart } from '../../actions';
import { compose } from '../../utils';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './book-list.css';


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
                onAddedToCart={() => onAddedToCart(book.id)}
              />
            </li>
          )
        })
      }
    </ul>
  );
};

const BookListConteiner = (props) => {
  const { books, loading, error, onAddedToCart, fetchForBooks } = props;

  useEffect(() => {
    fetchForBooks();
  }, [fetchForBooks])

  if (error) {
    return <ErrorIndicator />;
  }

  if (loading) {
    return <Spinner />;
  }

  return (
    <BookList books={books} onAddedToCart={onAddedToCart} />
  );
};

const mapStateToProps = (state) => {
  const { booklist: { books, loading, error } } = state;
  return {
    books,
    loading,
    error,
  };
};

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return {
    fetchForBooks: () => dispatch(fetchBooks(bookstoreService)), // this function will prossess by THUNK
    onAddedToCart: (id) => dispatch(bookAddedToCart(id)),
  };
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps),
)(BookListConteiner);
