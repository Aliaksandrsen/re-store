import React from 'react';
import BookList from '../book-list';
import ShoppingCartTable from '../shopping-cart-table/shopping-cart-table';

import { withRouter } from 'react-router-dom';

const HomePage = ({ history }) => {
  return (
    <div>
      <BookList
        onItemSelected={(itemId) => {
          const newPath = `books/${itemId}`
          history.push(newPath);
        }} />
      <ShoppingCartTable />
    </div>
  );
};

export default withRouter(HomePage);
