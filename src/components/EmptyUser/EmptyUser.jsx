import './empty__user.scss'
import decor from '../../assets/img/decor.svg'
import decorflip from '../../assets/img/decor-flip.svg'
import emoji from '../../assets/img/emoji.svg'
import { Link } from 'react-router-dom'
function EmptyCart(){
    return(
        <section className="empty">
            <div className="empty__back">
                 
                <img src={emoji} alt="emoji" className='emoji'/>      
               
            </div>
            
            <div className="empty__content">
                <h1 className="empty__title">No one's home</h1>
               
            </div>
        </section>
    )
}

export default EmptyCart