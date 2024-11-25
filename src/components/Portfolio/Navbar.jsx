/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bord blur">
        <div className="container">
          <Link className=" icon-img-50" to="#">
            <h6 className="flex">WizardIT</h6>
          </Link>

          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <span className="rolling-text">Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/portfolio">
                  <span className="rolling-text">Portfolio</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/service">
                  <span className="rolling-text">Service</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  <span className="rolling-text">About Us</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">
                  <span className="rolling-text">Blog</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  <span className="rolling-text">Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="search-form">
            <div className="form-group">
              <input type="text" name="search" placeholder="Search" />
              <button>
                <span className="pe-7s-search"></span>
              </button>
            </div>
            <div className="search-icon">
              <span className="pe-7s-search open-search"></span>
              <span className="pe-7s-close close-search"></span>
            </div>
          </div>
          <div className="topnav">
            <div className="menu-icon cursor-pointer">
              <span className="icon ti-align-right"></span>
            </div>
          </div>
        </div>
      </nav>

      <div className="hamenu">
        <div className=" icon-img-100">
          <img src="/dark/assets/imgs/logo-light.png" alt="" />
        </div>
        <div className="close-menu cursor-pointer ti-close"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
              <div className="menu-text">
                <div className="text">
                  <h2>Menu</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="menu-links">
                <ul className="main-menu rest">
                  <li>
                    <div className="o-hidden">
                      <Link to="/" className="link cursor-pointer dmenu">
                        <span className="fill-text" data-text="Home">
                          Home
                        </span>{' '}
                        <i></i>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <Link to="/about" className="link cursor-pointer dmenu">
                        <span className="fill-text" data-text="About Us">
                          About Us
                        </span>{' '}
                        <i></i>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <Link to="/portfolio" className="link cursor-pointer dmenu">
                        <span className="fill-text" data-text="Portfolio">
                          Portfolio
                        </span>{' '}
                        <i></i>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <Link to="/service" className="link cursor-pointer dmenu">
                        <span className="fill-text" data-text="Service">
                          Service
                        </span>{' '}
                        <i></i>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <Link to="/blog" className="link cursor-pointer dmenu">
                        <span className="fill-text" data-text="Blog">
                          Blog
                        </span>{' '}
                        <i></i>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <Link to="/contact" className="link">
                        <span className="fill-text" data-text="Contact Us">
                          Contact Us
                        </span>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="cont-info">
                <div className="item mb-50">
                  <h6 className="sub-title mb-15 opacity-7">Address</h6>
                  <h5>
                    541 Melville Geek, <br /> Palo Alto, CA 94301
                  </h5>
                </div>
                <div className="item mb-50">
                  <h6 className="sub-title mb-15 opacity-7">Social Media</h6>
                  <ul className="rest social-text">
                    <li className="mb-10">
                      <a href="#0" className="hover-this">
                        <span className="hover-anim">Facebook</span>
                      </a>
                    </li>
                    <li className="mb-10">
                      <a href="#0" className="hover-this">
                        <span className="hover-anim">Twitter</span>
                      </a>
                    </li>
                    <li className="mb-10">
                      <a href="#0" className="hover-this">
                        <span className="hover-anim">LinkedIn</span>
                      </a>
                    </li>
                    <li>
                      <a href="#0" className="hover-this">
                        <span className="hover-anim">Instagram</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="item mb-40">
                  <h6 className="sub-title mb-15 opacity-7">Contact Us</h6>
                  <h5>
                    <a href="#0">Hello@email.com</a>
                  </h5>
                  <h5 className="underline mt-10">
                    <a href="#0">+1 840 841 25 69</a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 

export default Navbar;
