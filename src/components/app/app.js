import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ShopHeader from '../shop-header';
import { HomePage, CartPage } from '../pages';
import BookListItemDetales from '../book-list-item-detales';



import { connect } from 'react-redux';


import './app.css';

const App = (props) => {
  // console.log(props)
  return (
    <main role="main" className="container">
      <ShopHeader />
      <Switch>
        <Route
          path="/"
          render={() => {
            return <HomePage {...props}/>
          }}
          exact
        />


        <Route
          path="/book-info/:id"
          render={({ match }) => {
            // console.log(match)
            const { id } = match.params
            return (
              <>
                <HomePage/>
                < BookListItemDetales itemId={id} />
              </>
            )
          }}
          exact
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

// export default App;


const mapStateToProps = (state) => {
  return {
    books: state.booklist.books,
    loading: state.booklist.loading,
    error: state.booklist.error,
    infoId: state.booklist.infoId,
  };
};


// const mapDispatchToProps = {
//   onAddedToCart: bookAddedToCart,



//   booksLoaded,
//   booksRequested,
//   booksError,
//   bookGetInfo: bookGetInfo,
// };

export default connect(mapStateToProps)(App);
