import React from 'react'
import './ItemCard.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart, faUser, faSearch,faTimes ,faTrash} from '@fortawesome/free-solid-svg-icons';
const ItemCard = (props) => {
  return (
    <div className='itemCard text-center'>
        <div className="itemCareView">
        <Link to={`/product/${props.p_id}`}><img src={props.imageurl} onClick={window.scrollTo(0,0)} alt="" className='img-fluid rounded m-2' /></Link>
        
        <div className="itemPrices" style={{background:"#630229"}}>
            <p>{props.p_name}rrrrr</p>
            <div className="itemNewPrice">
                ${props.price}
            </div>
            <div className="itemOldPrice ">
                {props.discount}%
            </div>
            <div className="d-flex justify-content-between  ">
                 <Link className="nav-link icons" style={{marginBottom:"20px",marginLeft:"20px"}} to="/favorites"><FontAwesomeIcon icon={faHeart} style={{ color: "#ffffff", fontSize: "24px" }} /></Link>
                <Link className="nav-link icons" style={{marginBottom:"20px",marginRight:"20px"}}  to="/cart"><FontAwesomeIcon icon={faShoppingCart} style={{ color: "#ffffff", fontSize: "24px" }} /></Link>
             </div>
        </div>
        </div>
    </div>
  )
}

export default ItemCard