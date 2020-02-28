import React, {Component} from 'react';
import { connect } from 'react-redux';
import './book-list-item-detales.css';

import { Link } from 'react-router-dom';

import {
    bookAddedToCart,
} from '../../actions';


import {
    booksRequested,
    booksLoaded,
    booksError,
    // bookAddedToCart,
    bookGetInfo,
  } from '../../actions';
import { withBookstoreService } from '../hoc';
import { compose } from '../../utils';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

class BookListItemDetalesConteiner extends Component {

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
  
  
    render() {

      const { books, loading, error, onAddedToCart, bookGetInfo, infoId, itemId, } = this.props;
  
      if (error) {
        return <ErrorIndicator />;
      }
  
      if (loading) {
        return <Spinner />;
      }
  
      return (
        <BookListItemDetales books={books} onAddedToCart={onAddedToCart} bookGetInfo={bookGetInfo} infoId={infoId} itemId={itemId} />
      );
    }
  }


const BookListItemDetales = (props) => {
    console.log(props)
    const { books, onAddedToCart, itemId, infoId } = props;

    // const book = books[infoId-1];
    const book = books[itemId - 1];

    const { title, author, price, coverImage, description } = book;
    return (
        <>
            <div className="backGround"></div>
            <div className="book-list-item_detales modal">

                <Link to={`/`}>
                    <i className="fa fa-times close-icon" aria-hidden="true"></i>
                </Link>

                <div className="book-cover_detales">
                    <img src={coverImage} alt="cover" />
                </div>
                <div className="book-details_detales">
                    <span className="book-title_detales">{title}</span>
                    <div className="book-author_detales">{author}</div>
                    <div className="book-price_detales">${price}</div>
                    <div className="book-description_detales">${description}</div>
                    <button
                        className="btn btn-info add-to-cart"
                        // onClick={() => onAddedToCart(infoId)}
                        onClick={() => onAddedToCart(+itemId)}
                        >
                        Add to cart
                    </button>
                </div>
            </div>
        </>
    );
};



const mapStateToProps = (state) => {
    return {
        books: state.booklist.books,
        loading: state.booklist.loading,
        error: state.booklist.error,
        infoId: state.booklist.infoId,
    };
};


const mapDispatchToProps = {
    onAddedToCart: bookAddedToCart,



    booksLoaded,
    booksRequested,
    booksError,
    bookGetInfo: bookGetInfo,
};

// export default connect(mapStateToProps, mapDispatchToProps)(BookListItemDetalesConteiner);



export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps),
  )(BookListItemDetalesConteiner); // ! use BookListItemDetalesConteiner not BookListItemDetales