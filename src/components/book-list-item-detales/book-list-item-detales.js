import React from 'react';
import { connect } from 'react-redux';
import './book-list-item-detales.css';

import {
    bookAddedToCart,
} from '../../actions';

const BookListItemDetales = (props) => {
    // console.log(props); //!


    const { books, onAddedToCart, infoId } = props;

    const book = books[infoId-1];
    const { title, author, price, coverImage, description } = book;
    return (
        <div className="book-list-item">
            <div className="book-cover">
                <img src={coverImage} alt="cover" />
            </div>
            <div className="book-details">
                <span className="book-title">{title}</span>
                <div className="book-author">{author}</div>
                <div className="book-price">${price}</div>
                <div className="book-description">${description}</div>
                <button
                    className="btn btn-info add-to-cart"
                    onClick={() => onAddedToCart(infoId)}>
                    Add to cart
          </button>
            </div>

        </div>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(BookListItemDetales);