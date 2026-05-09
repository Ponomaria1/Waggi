import { FaHeart } from "react-icons/fa";

function AddToFav({product, setFavourites, favourites}) {
      const addToFavourites = (productId) =>{
     setFavourites(prev => {
            if (prev.includes(productId)) {
                return prev.filter(id => id !== productId)
            }
            else {
              console.log('new fav')
                return [...prev, productId];

            }
        });
  }
    return (
        <button className="btn-like"
            onClick={() => {
                addToFavourites(product.id)
            }}>
            <FaHeart />
        </button>
    )
}

export default AddToFav;