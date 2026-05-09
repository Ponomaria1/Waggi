import products from "../../assets/data";
import './CartCount.scss'

function CartCount({ cartID, setCart, cart, cartCount}) {
    
  const increase = (id) => {
    setCart(prevCart => {
      return prevCart.map(product => {
        if (product.id === id) {
          return {
            ...product,
            count: (product.count || 1) + 1,
            
          };
        }
        return product;
      });
    });
  };

  const decrease = (id) => {
    setCart(prevCart => {
      return prevCart.map(product => {
        if (product.id === id) {
          const newCount = (product.count || 1) - 1;
          if (newCount === 0) {
            return null;
          }
          return {
            ...product,
            count: newCount,
          };
        }
        return product;
      }).filter(product => product !== null); 
    });
  };

  return (
    <>
    <div className="cart-count">
      <button 
        className="increase" 
        onClick={() => increase(cartID)}
      >
        +
      </button>
      <h1>{cartCount}</h1>
      <button 
        className="decrease" 
        onClick={() => decrease(cartID)}
      >
        -  
      </button>
      </div>
    </>
  );
}

export default CartCount;