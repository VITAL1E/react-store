import React, { Component } from 'react';
import Title from '../../Title';
import CartList from './CartList';
import EmptyCart from './EmptyCart';
import CartTotals from './CartTotals';
import CartColumns from './CartColumns.js';
import { ProductConsumer } from '../../context';

export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <Title name="your" title="cart" />
                  <CartColumns />
                  <CartList value={value} />
                  <CartTotals value={value} />
                </React.Fragment>
              )
            } else {
              return <EmptyCart />
            }
          }}
        </ProductConsumer>
      </section>
    )
  }
}
