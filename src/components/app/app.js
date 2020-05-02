import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import ShopHeader from '../shop-header';
import { HomePage, CartPage } from '../pages';
import BookListItemDetales from '../book-list-item-detales';



import './app.css';

const App = (props) => {
  return (
    <main role="main" className="container">
      <ShopHeader />
      <Switch>

        <Route path="/" exact >
          <HomePage {...props} />
        </Route>

        <Route path="/book-info/:id" exact>
            <HomePage />
            <BookListItemDetales />
        </Route>

        <Route path="/cart" ß>
          <CartPage />
        </Route>

        <Redirect to='/' />

      </Switch>
    </main >
  );
};


const mapStateToProps = (state) => {
  return {
    books: state.booklist.books,
    loading: state.booklist.loading,
    error: state.booklist.error,
  };
};


export default connect(mapStateToProps)(App);
