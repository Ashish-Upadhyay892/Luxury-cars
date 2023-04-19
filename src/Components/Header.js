import React from "react";
import image1 from "../Images/image1.jpg";

function Header(props) {
  return (
    <div className="banner-box">
      <div className="video-background">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container">
            <a className="navbar-brand" href="/">
              LEMPO
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
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <a
                    className="nav-link mx-4 active"
                    aria-current="page"
                    href="/about"
                  >
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-4" href="/collection">
                    Collections
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link mx-4" href="/feature">Feature</a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <button className="btn btn-outline-shine px-4" type="submit">
                  Features
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
