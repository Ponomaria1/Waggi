import './empty__cart.scss'
import decor from '../../assets/img/decor.svg'
import decorflip from '../../assets/img/decor-flip.svg'
import bag from '../../assets/img/bag.svg'
import { Link } from 'react-router-dom'
function EmptyCart(){
    return(
        <section className="empty">
            <div className="empty__back">
                <img src={decor} alt="decor" />    
                <img src={bag} alt="bag" />      
                <img src={decorflip} alt="decor" className='decorflip'/>   
            </div>
            
            <div className="empty__content">
                <h1 className="empty__title">The shopping cart is empty for now</h1>
                <h2 className="empty__subtitle">Check out the main page — we've collected some products that you might like</h2>
            </div>
            
            <Link to="/" className="empty__button">
                Go to Shopping
            </Link>
        </section>
    )
}

export default EmptyCart