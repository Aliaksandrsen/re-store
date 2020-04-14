import React, { Component } from 'react';
import { connect } from 'react-redux';
import './book-list-item-detales.css';

import { Link } from 'react-router-dom';

import {
  bookAddedToCart,
} from '../../actions';

import { fetchBooks } from '../../actions';
import { withBookstoreService } from '../hoc';
import { compose } from '../../utils';
import ErrorIndicator from '../error-indicator';

class BookListItemDetalesConteiner extends Component {

  componentDidMount() {
    const { fetchBooks } = this.props;
    fetchBooks();
  }

  render() {
    const { books, loading, error, onAddedToCart, bookGetInfo, itemId } = this.props;

    if (error) { return <ErrorIndicator /> }

    if (loading) { return null }

    return (
      <BookListItemDetales books={books} onAddedToCart={onAddedToCart} bookGetInfo={bookGetInfo} itemId={itemId} />
    );
  }
}


const BookListItemDetales = (props) => {
  const { books, onAddedToCart, itemId } = props;
  const book = books[itemId - 1];

  const { title, author, price, coverImage, description } = book;
  return (
    <>
      <div className="backGround"></div>
      <div className="book-list-item_detales modal">

        <Link to={`/`}>
          <i className="fa fa-times close-icon" aria-hidden="true"></i>
        </Link>

        {/* <div className="book-cover_detales"> */}
          <img className="img_style" src={coverImage} alt="cover" />
        {/* </div> */}
        <div className="book-details_detales">
          <span className="book-title_detales">{title}</span>
          <div className="book-author_detales">{author}</div>
          <div className="book-price_detales">${price}</div>
          <div className="book-description_detales">${description}</div>
          <button
            className="btn btn-info add-to-cart"
            onClick={() => onAddedToCart(+itemId)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = ({ booklist: { books, loading, error } }) => {
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
)(BookListItemDetalesConteiner);
