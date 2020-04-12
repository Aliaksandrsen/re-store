import React, { Component } from 'react';
import { connect } from 'react-redux';

import BookListItem from '../book-list-item';
import { withBookstoreService } from '../hoc';
import {
  fetchBooks,
  bookAddedToCart,
} from '../../actions';

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

class BookListConteiner extends Component {
  componentDidMount() {
    const { fetchBooks } = this.props;

    fetchBooks();
  }

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
  const { booklist: { books, loading, error } } = state;
  return {
    books,
    loading,
    error,
  };
};

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return {
    fetchBooks: () => dispatch(fetchBooks(bookstoreService)), // this function will prossess by THUNK
    onAddedToCart: (id) => dispatch(bookAddedToCart(id)),
  };
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps),
)(BookListConteiner);
