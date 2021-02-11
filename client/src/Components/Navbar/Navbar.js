import React, { useState } from "react";
import { BiUser, BiLogOut, BiTachometer } from "react-icons/bi";

import RegisterModal from "../Modals/RegisterModal/RegisterModal";
import LoginModal from "../Modals/LoginModal/LoginModal";

export default function Navbar({ loggedIn, setLoggedIn }) {
  const [loginModalStatus, setLoginModalStatus] = useState(false);
  const [registerModalStatus, setRegisterModalStatus] = useState(false);

  const toggleRegisterModal = () => {
    setRegisterModalStatus(!registerModalStatus);
  };

  const toggleLoginModal = () => {
    setLoginModalStatus(!loginModalStatus);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("userName");
    setLoggedIn(false);
  };

  document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {

          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');

        });
      });
    }

  });

  return (
    <nav
      className="navbar is-white is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <p className="logo">Flant</p>
        </a>

        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        {window.location.href.indexOf("dashboard") ? (
          <p></p>
        ) : (
            <div className="navbar-item navbar-start navbar-center">
              <a className="navbar-item active" href="#home">
                Home
            </a>
              <a className="navbar-item" href="#about">
                About
            </a>
              <a className="navbar-item" href="#buy">
                Buy
            </a>
              <div className="active" />
            </div>
          )}

        <div className="navbar-end">
          {loggedIn ? (
            <p></p>
          ) : (
              <a
                href="#register"
                onClick={toggleRegisterModal}
                className="navbar-item"
              >
                <strong>Sign up</strong>
              </a>
            )}

          {loggedIn ? (
            <div className="navbar-item has-dropdown is-hoverable">
              <div className="navbar-link" href="">
                <BiUser />
              </div>

              <div className="navbar-dropdown is-right">
                <a className="navbar-item has-text-bold" href="/dashboard">
                  <p>
                    <BiTachometer /> Dashboard
                  </p>
                </a>
                <hr className="navbar-divider" />
                <a
                  href="/home"
                  onClick={logout}
                  className="navbar-item has-text-bold"
                >
                  <p>
                    <BiLogOut /> Log out
                  </p>
                </a>
              </div>
            </div>
          ) : (
              <a href="#login" onClick={toggleLoginModal} className="navbar-item">
                Log in
              </a>
            )}

          <a href="/basket" className="navbar-item cart">
            <i className="fas fa-shopping-basket"></i>
          </a>
        </div>
      </div>
      <RegisterModal
        registerModalStatus={registerModalStatus}
        setRegisterModalStatus={setRegisterModalStatus}
      />
      <LoginModal
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
        loginModalStatus={loginModalStatus}
        setLoginModalStatus={setLoginModalStatus}
        toggleLoginModal={toggleLoginModal}
      />
    </nav>
  );
}
