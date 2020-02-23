import React from 'react';
import { connect } from 'react-redux';

import './shop-header.css';
import { Link } from 'react-router-dom';

const ShopHeader = (props) => {
  const { numItems, total } = props;

  return (
    <header className="shop-header row">
      <Link to="/">
        <div className="logo text-dark">ReStore</div>
      </Link>
      <Link to="/cart">
        <div className="shopping-cart">
          <i className="cart-icon fa fa-shopping-cart" />
          {numItems} items (${total})
        </div>
      </Link>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    // item (I think it is book kind) not number of same books
    numItems: state.shoppingCart.cartItems.length,
    total: state.shoppingCart.orderTotal,
  };
};

export default connect(mapStateToProps)(ShopHeader);
