const updateOrder = (bookId, state, quantity) => {

  const { booklist: { books }, shoppingCart: { cartItems } } = state;

  const book = books.find((book) => book.id === bookId);
  const itemIndex = cartItems.findIndex(({ id }) => id === bookId);
  const item = cartItems[itemIndex];

  const newItem = updateCartItem(book, item, quantity);

  const newcartItems = updateCartItems(cartItems, newItem, itemIndex);
  return {
    orderTotal: updateOrderTotal(newcartItems),
    cartItems: newcartItems,
    onAlfabet: true, //!
  };
}

const updateOrderTotal = (array) => {
  return array.reduce((acc, item) => {
    return acc + item.total;
  }, 0);
};

// update array
const updateCartItems = (cartItems, item, idx) => {

  // ! удалять элементы из массива
  if (item.count === 0) {
    return [
      ...cartItems.slice(0, idx),
      ...cartItems.slice(idx + 1)
    ];
  }

  // ! добавлять новые элементы к массиву
  if (idx === -1) {
    return [
      ...cartItems,
      item
    ];
  }

  // ! обновлять существующий массив
  return [
    ...cartItems.slice(0, idx),
    item,
    ...cartItems.slice(idx + 1)
  ];
};

// update one item
const updateCartItem = (book, item = {}, quantity) => {

  const {
    id = book.id,
    count = 0,
    title = book.title,
    total = 0 } = item;

  return {
    id,
    title,
    count: count + quantity,
    total: total + quantity * book.price
  };
};

const sortingCart = (sortingLabel, cartItems, onAlfabet) => {
  const newCartItems = [...cartItems];

  function compare(a, b) {
    if (a[sortingLabel] > b[sortingLabel]) return onAlfabet ? 1 : -1;
    if (a[sortingLabel] === b[sortingLabel]) return 0;
    if (a[sortingLabel] < b[sortingLabel]) return onAlfabet ? -1 : 1;
  }

  return newCartItems.sort(compare);
};



const updateShoppingCart = (state, action) => {
  if (state === undefined) {
    return {
      cartItems: [],
      orderTotal: 0,
    };
  }

  switch (action.type) {
    case 'BOOK_ADDED_TO_CART':
      const addQuantity = 1;
      return updateOrder(action.payload, state, addQuantity);


    case 'BOOK_REMOVED_FROM_CART':
      const remQuantity = -1;
      return updateOrder(action.payload, state, remQuantity);


    case 'ALL_BOOK_REMOVED_FROM_CART':
      const itemIndex = state.shoppingCart.cartItems.findIndex(({ id }) => id === action.payload);
      const item = state.shoppingCart.cartItems[itemIndex];
      return updateOrder(action.payload, state, -item.count);

    case 'SORT_BOOKS':
      const newSortCart = sortingCart(action.payload, state.shoppingCart.cartItems, state.shoppingCart.onAlfabet);

      const newShoppingCart = {
        ...state.shoppingCart,
        cartItems: newSortCart,
        onAlfabet: !state.shoppingCart.onAlfabet,
      };

      return newShoppingCart;


    default:
      return state.shoppingCart;
  }
};

export default updateShoppingCart;
