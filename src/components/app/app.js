import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ShopHeader from '../shop-header';
import { HomePage, CartPage } from '../pages';
import BookListItemDetales from '../book-list-item-detales';

import './app.css';

const App = (props) => {
  return (
    <main role="main" className="container">
      <ShopHeader />
      <Switch>
        <Route
          path="/"
          component={HomePage}
          exact
         />

        <Route
          path="/book-info"
          render={() => {
            return <BookListItemDetales />
          }}
        />

        <Route
          path="/cart"
          component={CartPage}
        />
      </Switch>
    </main>
  );
};

export default App;
