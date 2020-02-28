import React from 'react';
import BookList from '../book-list';
import ShoppingCartTable from '../shopping-cart-table/shopping-cart-table';

import { withRouter } from 'react-router-dom';

const HomePage = () => {
  // console.log(props)
  return (
    <div>
      <BookList/>

      <ShoppingCartTable />

    </div>
  );
};
//1)
//  модалка СЮДА!!!!
//  book/info в url
//2) id брать из url
export default withRouter(HomePage);
