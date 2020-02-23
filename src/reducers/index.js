import updateBookList from './book-list';
import updateShoppingCart from './sopping-cart';

const reducer = (state, action) => {
  return {
    booklist: updateBookList(state, action),
    shoppingCart: updateShoppingCart(state, action),
  }
};


export default reducer;
