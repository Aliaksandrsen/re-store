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


// оборачиваемый компонент без логики
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
      bookstoreService,
      booksLoaded,
      booksRequested,
      booksError } = this.props;

  
console.log(this.props.books[0])
    // if (!this.props.books[0]) {


      booksRequested();
      // console.log(this.props)

      // if(this.props.books[0]){return}

      bookstoreService.getBooks()
        .then((data) => booksLoaded(data))
        .catch((err) => booksError(err));
    // }


  }

  componentDidUpdate() {
    // console.log(this.props)
  }


  render() {
    // console.log(this.props)
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


const mapStateToProps = (state) => {
  return {
    books: state.booklist.books,
    loading: state.booklist.loading,
    error: state.booklist.error,

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
