import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import ShopHeader from '../shop-header';
import { HomePage, CartPage } from '../pages';
import BookListItemDetales from '../book-list-item-detales';

import './app.css';


const App = () => {
  return (
    <main role="main" className="container">
      <ShopHeader />
      <Switch>

        <Route path="/" exact >
          <HomePage />
        </Route>

        <Route path="/book-info/:id" exact>
          <HomePage />
          <BookListItemDetales />
        </Route>

        <Route path="/cart" >
          <CartPage />
        </Route>

        <Redirect to='/' />

      </Switch>
    </main >
  );
};

export default App;
