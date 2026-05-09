
function BtnAddToCart({product, setCart, cart}) {

    const addToCart = (product) => {
  setCart(prevCart => {
    if (prevCart.some(item => item.id === product.id)) {
    //   console.log('уже есть такое дурак');

      return prevCart.map(productItem=> productItem.id === product.id ? {...productItem, count: productItem.count + 1} : productItem
      ); 
    }
    // console.log('add');
    return [...prevCart, {id: product.id,
      title: product.title,
      price: product.price,
      rating: product.rating,
      img: product.img, count: 1}];
  });
};
    return (
        <button
            className="btn-Add"
            onClick={() => {
                addToCart(product);
            }}
        >
            ADD TO CART
        </button>
    )
}
export default BtnAddToCart