import React, { Component } from 'react'
import FooterUp from "../components/FooterUp";
import { Link } from 'react-router-dom';


export default class Cart extends Component {
  render() {
    return (
      <div>
       
  <div
    className="it-breadcrumb-area it-breadcrumb-bg"
    data-background="assets/img/breadcrumb/breadcrumb.jpg"
  >
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="it-breadcrumb-content z-index-3 text-center">
            <div className="it-breadcrumb-title-box">
              <h3 className="it-breadcrumb-title">Cart</h3>
            </div>
            <div className="it-breadcrumb-list-wrap">
              <div className="it-breadcrumb-list">
                <span>
                  <a href="index.html">home</a>
                </span>
                <span className="dvdr">//</span>
                <span>Cart</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section className="cart-area pt-120 pb-120">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <form action="#">
            <div
              className="table-content table-responsive wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".3s"
              style={{
                visibility: "visible",
                animationDuration: "0.9s",
                animationDelay: "0.3s",
                animationName: "tpfadeUp"
              }}
            >
              <table className="table">
                <thead>
                  <tr>
                    <th className="product-thumbnail">Images</th>
                    <th className="cart-product-name">Product</th>
                    <th className="product-price">Unit Price</th>
                    <th className="product-quantity">Quantity</th>
                    <th className="product-subtotal">Total</th>
                    <th className="product-remove">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="product-thumbnail">
                      <a href="https://ordainit.com/">
                        <img src="assets/img/cart/cart-1.png" alt="" />
                      </a>
                    </td>
                    <td className="product-name">
                      <a href="https://ordainit.com/">specialone 4 Inch 820W</a>
                    </td>
                    <td className="product-price">
                      <span className="amount">$180.00</span>
                    </td>
                    <td className="product-quantity">
                      <span className="cart-minus">-</span>
                      <input
                        className="cart-input"
                        type="text"
                        defaultValue={1}
                      />
                      <span className="cart-plus">+</span>
                    </td>
                    <td className="product-subtotal">
                      <span className="amount">$760.00</span>
                    </td>
                    <td className="product-remove">
                      <a href="#">
                        <i className="fa fa-times" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="product-thumbnail">
                      <a href="https://ordainit.com/">
                        <img src="assets/img/cart/cart-2.png" alt="" />
                      </a>
                    </td>
                    <td className="product-name">
                      <a href="https://ordainit.com/">specialone 4 Inch 820W</a>
                    </td>
                    <td className="product-price">
                      <span className="amount">$1260.50</span>
                    </td>
                    <td className="product-quantity">
                      <span className="cart-minus">-</span>
                      <input
                        className="cart-input"
                        type="text"
                        defaultValue={1}
                      />
                      <span className="cart-plus">+</span>
                    </td>
                    <td className="product-subtotal">
                      <span className="amount">$90.50</span>
                    </td>
                    <td className="product-remove">
                      <a href="#">
                        <i className="fa fa-times" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="product-thumbnail">
                      <a href="https://ordainit.com/">
                        <img src="assets/img/cart/cart-3.png" alt="" />
                      </a>
                    </td>
                    <td className="product-name">
                      <a href="https://ordainit.com/">specialone 4 Inch 820W</a>
                    </td>
                    <td className="product-price">
                      <span className="amount">$180.00</span>
                    </td>
                    <td className="product-quantity">
                      <span className="cart-minus">-</span>
                      <input
                        className="cart-input"
                        type="text"
                        defaultValue={1}
                      />
                      <span className="cart-plus">+</span>
                    </td>
                    <td className="product-subtotal">
                      <span className="amount">$760.00</span>
                    </td>
                    <td className="product-remove">
                      <a href="#">
                        <i className="fa fa-times" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="product-thumbnail">
                      <a href="https://ordainit.com/">
                        <img src="assets/img/cart/cart-4.png" alt="" />
                      </a>
                    </td>
                    <td className="product-name">
                      <a href="https://ordainit.com/">specialone 4 Inch 820W</a>
                    </td>
                    <td className="product-price">
                      <span className="amount">$1260.50</span>
                    </td>
                    <td className="product-quantity">
                      <span className="cart-minus">-</span>
                      <input
                        className="cart-input"
                        type="text"
                        defaultValue={1}
                      />
                      <span className="cart-plus">+</span>
                    </td>
                    <td className="product-subtotal">
                      <span className="amount">$90.50</span>
                    </td>
                    <td className="product-remove">
                      <a href="#">
                        <i className="fa fa-times" />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="coupon-all">
                  <div className="coupon">
                    <input
                      id="coupon_code"
                      className="input-text"
                      name="coupon_code"
                      defaultValue=""
                      placeholder="Coupon code"
                      type="text"
                    />
                    <button
                      className="it-btn"
                      name="apply_coupon"
                      type="submit"
                    >
                      <span>Apply coupon</span>
                    </button>
                  </div>
                  <div className="coupon2">
                    <button className="it-btn" name="update_cart" type="submit">
                      <span>Update cart</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-end">
              <div className="col-md-5">
                <div className="cart-page-total">
                  <h2>Cart totals</h2>
                  <ul className="mb-20">
                    <li>
                      Subtotal <span>$250.00</span>
                    </li>
                    <li>
                      Total <span>$250.00</span>
                    </li>
                  </ul>
                  <Link className="it-btn" to="/checkout">
                    <span>Proceed to checkout</span>
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

<FooterUp/>



      </div>
    )
  }
}
