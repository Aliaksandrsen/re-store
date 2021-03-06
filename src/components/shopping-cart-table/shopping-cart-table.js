import React from 'react';
import './shopping-cart-table.css';
import { connect } from 'react-redux';
import {
  bookAddedToCart,
  bookRemoveFromCart,
  allBooksRemoveFromCart,
  sortCart,
} from '../../actions'

const ShoppingCartTable = ({ items, total, onIncrice, onDecrease, onDelete, onSortCart }) => {

  const renderRow = (item, index) => {
    let { id, title, count, total } = item;

    return (
      <tr key={id}>
        <td>{index + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>{total}</td>
        <td>
          <button
            onClick={() => onDecrease(id)}
            className="btn btn-outline-success btn-sm ">
            <i className="fa fa-plus-circle" />
          </button>
          <button
            onClick={() => onIncrice(id)}
            className="btn btn-outline-warning btn-sm ">
            <i className="fa fa-minus-circle" />
          </button>
          <button
            onClick={() => onDelete(id)}
            className="btn btn-outline-danger btn-sm ">
            <i className="fa fa-trash-o" />
          </button>
        </td>
      </tr>
    );
  };

  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>№</th>
            <th>
              <span className="sortable" onClick={() => onSortCart('title')}>Item</span>
            </th>
            <th>
              <span className="sortable" onClick={() => onSortCart('count')}>Count</span>
            </th>
            <th className="sortable">
              <span className="sortable" onClick={() => onSortCart('total')}>Price</span>
            </th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {items.map(renderRow)}
        </tbody>
      </table>

      <div className="total">
        Total: {total}
      </div>
    </div>
  );
};

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal, onAlfabet } }) => {
  return {
    items: cartItems,
    total: orderTotal,
    sortingFlag: onAlfabet,
  };
};


const mapDispatchToProps = {
  onIncrice: bookRemoveFromCart,
  onDecrease: bookAddedToCart,
  onDelete: allBooksRemoveFromCart,
  onSortCart: sortCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
