import React from 'react';
import BookList from '../book-list';
import ShoppingCartTable from '../shopping-cart-table/shopping-cart-table';

import { withRouter } from 'react-router-dom';

const HomePage = (props) => {
  return (
    <div>
      <BookList {...props}/>

      <ShoppingCartTable />

    </div>
  );
};

export default withRouter(HomePage);
