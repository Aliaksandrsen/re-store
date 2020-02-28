import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
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
          path="/book-info/:id"
          render={({ match }) => {
            // console.log(match)
            const { id } = match.params
            return (
              < BookListItemDetales itemId={id} />
            )
          }}
        />

        <Route
          path="/cart"
          component={CartPage}
        />
        <Redirect to='/' />
      </Switch>
    </main>
  );
};

export default App;
