import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';

import { withBookstoreService } from '../hoc';
// import { booksLoaded, booksRequested, booksError } from '../../actions';
import { fetchBooks, bookAddedToCart } from '../../actions';
import { compose } from '../../utils';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import './book-list.css';

// оборачиваемый компонент без логики
const BookList = (props) => {
  const { books } = props;
  return (
    <ul className="book-list">
      {
        books.map((book) => {
          return (
            <li key={book.id}><BookListItem book={book} /></li>
          )
        })
      }
    </ul>
  );
};

class BookListConteiner extends Component {

  // componentDidMount() {

  //   const {
  //     bookstoreService,
  //     booksLoaded,
  //     booksRequested,
  //     booksError } = this.props;

  //   booksRequested();
  //   bookstoreService.getBooks()
  //     .then((data) => booksLoaded(data))
  //     .catch((err) => booksError(err));

  // }

  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { books, loading, error } = this.props;

    if (error) {
      return <ErrorIndicator />;
    }

    if (loading) {
      return <Spinner />;
    }

    return (
      <BookList books={books} />
    );
  }
}



const mapStateToProps = (state) => {
  return {
    books: state.books,
    loading: state.loading,
    error: state.error,
  };
};

// --------------------------------------------------------
// const mapDispatchToProps = (dispatch) => {
//   return {
//     booksLoaded: (newBooks) => {
//       dispatch(booksLoaded(newBooks))
//     }
//   };
// };

// ! same as
// const mapDispatchToProps = {
//   booksLoaded,
//   booksRequested,
//   booksError,
// };
// --------------------------------------------------------

const mapDispatchToProps = (dispatch, { bookstoreService }) => {

  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch),
    onAddedToCart: (id) => dispatch(bookAddedToCart(id))
  };
};


export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListConteiner); // ! use BookListConteiner not BookList
