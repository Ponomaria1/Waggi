import React, { useState } from "react";
import "./header.scss";
import { FaUser, FaHeart, FaShoppingCart, FaSearch } from "react-icons/fa";
import logo from "../../assets/img/logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { useSearch } from "../../context/SearchContext";

function Header({ cart }) {
  const { setSearchQuery, searchQuery } = useSearch();
  const [localSearch, setLocalSearch] = useState(searchQuery || "");
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(localSearch);
    if (localSearch.trim()) {
      navigate(`/?search=${encodeURIComponent(localSearch.trim())}`);
    } else {
      navigate("/");
    }
  };

  return (
    <header className="header">
      <div className="header__top">
        <div className="header__top-logo">
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
        </div>
        <div className="header__top-search">
          <form onSubmit={handleSearchSubmit} className="search-form">
            <input
              type="search"
              name="search"
              placeholder="Search for more than 10,000 products"
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
            />
            <button type="submit" className="search-button">
              <FaSearch />
            </button>
          </form>
        </div>
        <div className="header__top-contacts">
          <h2 className="contacts-title">Phone</h2>
          <p className="contacts-text">+980-340-56-56</p>
        </div>
        <div className="header__top-contacts">
          <h2 className="contacts-title">Email</h2>
          <p className="contacts-text">waggy@gmail.com</p>
        </div>
      </div>

      <div className="header__bottom">
        <nav className="header__bottom-nav">
          <NavLink
            style={({ isActive }) => ({
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "19px",
              color: isActive ? "#DEAD6F" : "#41403E",
            })}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            style={({ isActive }) => ({
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "19px",
              color: isActive ? "#DEAD6F" : "#41403E",
            })}
            to="/page"
          >
            Page
          </NavLink>
          <NavLink
            style={({ isActive }) => ({
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "19px",
              color: isActive ? "#DEAD6F" : "#41403E",
            })}
            to="/shop"
          >
            Shop
          </NavLink>
          <NavLink
            style={({ isActive }) => ({
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "19px",
              color: isActive ? "#DEAD6F" : "#41403E",
            })}
            to="/blog"
          >
            Blog
          </NavLink>
          <NavLink
            style={({ isActive }) => ({
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "19px",
              color: isActive ? "#DEAD6F" : "#41403E",
            })}
            to="/contact"
          >
            Contact
          </NavLink>
          <NavLink
            style={({ isActive }) => ({
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "19px",
              color: isActive ? "#DEAD6F" : "#41403E",
            })}
            to="/offer"
          >
            Offer
          </NavLink>
        </nav>
        <div className="header__bottom-icons">
          <NavLink
            style={({ isActive }) => ({
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "19px",
              color: isActive ? "#DEAD6F" : "#41403E",
            })}
            to="/account"
          >
            <FaUser />
          </NavLink>
          <NavLink
            style={({ isActive }) => ({
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "19px",
              color: isActive ? "#DEAD6F" : "#41403E",
            })}
            to="/favourites"
          >
            <FaHeart />
          </NavLink>
          <NavLink
            style={({ isActive }) => ({
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "19px",
              color: isActive ? "#DEAD6F" : "#41403E",
            })}
            to="/cart"
          >
            <div className="cart__wrapper">
              <FaShoppingCart className="cart"></FaShoppingCart>
              <div className="cart__wrapper-count">
                {cart ? cart.length : "0"}
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
