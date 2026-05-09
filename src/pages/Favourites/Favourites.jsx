import { MdOutlineStar } from "react-icons/md";
import products from "../../assets/data";
import EmptyFav from "../../components/EmptyFav/EmptyFav";
import BtnAddToCart from "../../components/BtnAddToCart/BtnAddToCart";
import AddToFav from "../../components/AddToFav/AddToFav";
import "./favourites.scss";

function Favourites({ cart, setCart, favourites, setFavourites }) {
  const deleteAll = () => {
    setFavourites([]);
  };
  
  return (
    <div className="favourites">
      <div className="favourites__header">
        <h1 className="favourites__header-title">Favourites</h1>
        <div className="favourites__header-delete">
          <button
            className="favourites__header-delete-all"
            onClick={deleteAll}
          >
            delete all products
          </button>
        </div>
      </div>
      
      {favourites.length > 0 ? (
        <div className="favourites__catalog">
          {products
            .filter((product) => favourites.includes(product.id))
            .map((product) => (
              <div className="favourites__card" key={product.id}>
                <img src={product.img} alt="" className="card-img" />
                <div className="card-info">
                  <h3 className="card-title">{product.title}</h3>
                  <div className="card-rating">
                    <MdOutlineStar style={{ color: "#DEAD6F" }} />
                    <p>{product.rating}</p>
                  </div>
                  <p className="card-price">${product.price}</p>
                  <div className="card-btns">
                    <AddToFav
                      product={product}
                      setFavourites={setFavourites}
                      favourites={favourites}
                    />
                    <BtnAddToCart
                      product={product}
                      setCart={setCart}
                      cart={cart}
                    />
                  </div>
                </div>
              </div>
            ))}
        </div>
      ) : (
        <EmptyFav />
      )}
    </div>
  );
}

export default Favourites;