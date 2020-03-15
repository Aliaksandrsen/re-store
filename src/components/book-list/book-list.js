import React, { Component } from 'react';
import { connect } from 'react-redux';


import BookListItem from '../book-list-item';
import { withBookstoreService } from '../hoc';
import {
  booksRequested,
  booksLoaded,
  booksError,
  bookAddedToCart,
  bookGetInfo,
} from '../../actions';

import { compose } from '../../utils';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import './book-list.css';


const BookList = (props) => {
  const { books, onAddedToCart, bookGetInfo } = props;
  return (
    <ul className="book-list">
      {
        books.map((book) => {
          return (
            <li key={book.id}>
              <BookListItem
                book={book}
                onAddedToCart={() => onAddedToCart(book.id)}
                bookGetInfo={() => bookGetInfo(book.id)}
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
    const {
      booksRequested,
    } = this.props;

      booksRequested();
  }

  render() {
    const { books, loading, error, onAddedToCart, bookGetInfo } = this.props;

    if (error) {
      return <ErrorIndicator />;
    }

    if (loading) {
      return <Spinner />;
    }

    return (
      <BookList books={books} onAddedToCart={onAddedToCart} bookGetInfo={bookGetInfo} />
    );
  }
}


const mapStateToProps = ({booklist: {books, loading, error}}) => {
  return {
    books,
    loading,
    error,
  };
};


const mapDispatchToProps = {
  booksLoaded,
  booksRequested,
  booksError,
  onAddedToCart: bookAddedToCart,
  bookGetInfo: bookGetInfo,
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps),
)(BookListConteiner); // ! use BookListConteiner not BookList
