import React from "react";
import "./HeaderComponent.css";
const HeaderComponent = () => {
  return (
    <div>
      <section className="header">
        <nav className="navbar navbar-expand-lg bg-white cus-padding-0 fixed-top">
          <div className="container-md">
            <a className="navbar-brand p-0 m-0" href="index.html">
              <img src="img/about us/logo.png" alt="" width="80" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse nav-header"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mb-2 mb-lg-0 cus-margin-auto">
                <li className="nav-item">
                  <a className="nav-link" href="index.html">
                    Trang chủ
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="products.html">
                    Sản phẩm
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about-us.html">
                    Chúng tôi
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">
                    Liên hệ
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <div className="nav-search">
                      <img src="img/icon/search.png" alt="" />
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <div className="nav-user">
                      <img src="img/icon/user.png" alt="" />
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <div className="nav-link">
                    <div className="nav-cart">
                      <img src="img/icon/cart.png" alt="" />
                      <span>2</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>

      <div className="modal-cart">
        <div className="modal-cart-content">
          <span className="close">
            <i className="fa-solid fa-xmark"></i>
          </span>
          <div className="wrap-cart-content">
            <div className="list-items"></div>
            <div className="cart-content-bot">
              <div className="sub-total">
                <p>
                  Tạm tính: <span>30$</span>
                </p>
              </div>
              <div className="gr-button"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
