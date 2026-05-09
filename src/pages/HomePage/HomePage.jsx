import Gallery from '../../components/Gallery/Gallery';
import Hero from '../../components/Hero/Hero'
import Offer from '../../components/Offer/Offer';
import Products from '../../components/Products/Products';
import { useSearch } from '../../context/SearchContext';

function HomePage({cart, setCart, favourites, setFavourites}) {
    const { searchQuery } = useSearch();
    
    return (
        <>
            <Hero />
            <Products 
                cart={cart} 
                setCart={setCart}
                favourites={favourites}
                setFavourites={setFavourites}
                searchQuery={searchQuery}
            />
            <Offer />
            <Gallery />
        </>
    )
}

export default HomePage;