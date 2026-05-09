import React from "react";
import "./products.scss";
import { useState, useEffect } from "react";
import { MdOutlineStar } from "react-icons/md";
import products from "../../assets/data";
import BtnAddToCart from "../BtnAddToCart/BtnAddToCart";
import AddToFav from "../AddToFav/AddToFav";
import { useSearch } from "../../context/SearchContext";

function Products({ cart, setCart, favourites, setFavourites, searchQuery: propSearchQuery }) {
  const [showCat, setShowCat] = useState(true);
  const [showDog, setShowDog] = useState(true);
  const [showBird, setShowBird] = useState(true);
  const { clearSearch, searchQuery: contextSearchQuery } = useSearch();
  
  
  const searchTerm = propSearchQuery || contextSearchQuery || "";


  useEffect(() => {
    if (searchTerm) {
     
    }
  }, [searchTerm]);

  const filtered = products.filter((product) => {
    
    const matchCategory = 
      (showCat && product.category === "cat") ||
      (showDog && product.category === "dog") ||
      (showBird && product.category === "bird");

    
    const anyCategorySelected = showCat || showDog || showBird;
    const categoryMatch = anyCategorySelected ? matchCategory : true;

    const matchSearch = searchTerm === "" || 
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase());

    return categoryMatch && matchSearch;
  });

  
  const grouped = filtered.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});

  const handleClearSearch = () => {
    clearSearch();
  };

  
  const resetFilters = () => {
    setShowCat(true);
    setShowDog(true);
    setShowBird(true);
    handleClearSearch();
  };

  return (
    <section className="products">
      <div className="products__top">
        <h1 className="products__top-title">Products</h1>
        
        
        {searchTerm && (
          <div className="search-active">
            <span> Search results for: "<strong>{searchTerm}</strong>"</span>
            <button onClick={handleClearSearch} className="clear-search">
              ✕ Clear
            </button>
          </div>
        )}

        <div className="products__top-filter">
          <label>
            <input
              type="radio"
              name="category"
              defaultChecked
              onChange={() => {
                setShowCat(true);
                setShowDog(true);
                setShowBird(true);
              }}
            />{" "}
            All
          </label>
          <label>
            <input
              type="radio"
              name="category"
              onChange={() => {
                setShowCat(true);
                setShowDog(false);
                setShowBird(false);
              }}
            />{" "}
            CAT
          </label>
          <label>
            <input
              type="radio"
              name="category"
              onChange={() => {
                setShowCat(false);
                setShowDog(true);
                setShowBird(false);
              }}
            />{" "}
            DOG
          </label>
          <label>
            <input
              type="radio"
              name="category"
              onChange={() => {
                setShowCat(false);
                setShowDog(false);
                setShowBird(true);
              }}
            />{" "}
            BIRD
          </label>
        </div>
        
        <button onClick={resetFilters} className="products__top-btn">
          RESET ALL
        </button>
      </div>
      
      <div className="products__catalog">
        {filtered.length === 0 ? (
          <div className="no-results">
            <p>😕 No products found matching "<strong>{searchTerm}</strong>"</p>
            <button onClick={handleClearSearch} className="clear-search-btn">
              Clear Search
            </button>
          </div>
        ) : (
          Object.entries(grouped).map(([category, categoryProducts]) => (
            <React.Fragment key={category}>
              {categoryProducts.map((product, index) => (
                <div className="products__catalog-card" key={product.id || index}>
                  <img src={product.img} alt={product.title} className="card-img" />
                  <div className="card-info">
                    <h3 className="card-title">{product.title}</h3>
                    <div className="card-rating">
                      <MdOutlineStar style={{ color: '#DEAD6F' }} /> 
                      <p>{product.rating}</p>
                    </div>
                    <p className="card-price">${product.price}</p>
                    <div className="card-btns">
                      <BtnAddToCart product={product} setCart={setCart} cart={cart} />
                      <AddToFav product={product} setFavourites={setFavourites} favourites={favourites} />
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          ))
        )}
      </div>
    </section>
  );
}

export default Products;