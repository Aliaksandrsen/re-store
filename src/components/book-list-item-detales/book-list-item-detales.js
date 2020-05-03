import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './book-list-item-detales.css';

import { Link, useParams } from 'react-router-dom';

import {
  bookAddedToCart,
} from '../../actions';

import { fetchBooks } from '../../actions';
import { withBookstoreService } from '../hoc';
import { compose } from '../../utils';
import ErrorIndicator from '../error-indicator';


const BookListItemDetalesConteiner = (props) => {
  const { books, loading, error, onAddedToCart, fetchForBooks } = props;
  // useEffect(() => {
  //   fetchForBooks();
  // }, []);

  if (error) { return <ErrorIndicator /> }

  if (loading) { return null }

  return (
    <BookListItemDetales books={books} onAddedToCart={onAddedToCart} />
  );
}


const BookListItemDetales = (props) => {
  const { id } = useParams(); // получаем из URL
  const { books, onAddedToCart } = props;
  const book = books[id - 1];
  const { title, author, price, coverImage, description } = book;
  
  return (
    <>
      <div className="backGround"></div>
      <div className="book-list-item_detales modal">

        <Link to={`/`}>
          <i className="fa fa-times close-icon" aria-hidden="true"></i>
        </Link>

        <img className="img_style" src={coverImage} alt="cover" />

        <div className="book-details_detales">
          <span className="book-title_detales">{title}</span>

          <div className="book-author_detales">{author}</div>

          <div className="book-price_detales">${price}</div>

          <div className="book-description_detales">${description}</div>

          <button className="btn btn-info add-to-cart" onClick={() => onAddedToCart(+id)}>
            Add to cart
          </button>
        </div>
      </div>
    </>
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
)(BookListItemDetalesConteiner);
