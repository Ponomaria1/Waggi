import './empty__fav.scss'
import decor from '../../assets/img/decor.svg'
import decorflip from '../../assets/img/decor-flip.svg'
import heart from '../../assets/img/heart.svg'
import { Link } from 'react-router-dom'

function EmptyFav(){
    return(
        <section className="empty-fav"> 
            <div className="empty-fav__back">  
                <img src={decor} alt="decor" />    
                <img src={heart} alt="heart" className='heart'/>      
                <img src={decorflip} alt="decor" className='decorflip'/>   
            </div>
            
            <div className="empty-fav__content">  
                <h1 className="empty-fav__title">The favourites is empty for now</h1> 
                <h2 className="empty-fav__subtitle">Check out the main page — we've collected some products that you might like</h2>  {/* ← changed */}
            </div>
            
            <Link to="/" className="empty-fav__button"> 
                Go to Shopping
            </Link>
        </section>
    )
}

export default EmptyFav