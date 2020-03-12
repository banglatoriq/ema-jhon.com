import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    // console.log(props);
    const {img,name,url,seller,price,stock} = props.product;
    return (
        <div className="product">
            <div>
                <a href={url}><img src={img} alt=""/></a>
            </div>
            <div className="product-name">
                <h4>{name}</h4>
                <br/>
                <p><small>By:{seller}</small></p>
                <p>${price}</p>
                <br/>
                <p><small>Only {stock} Left in stock -Order Soon</small></p>
                <button className="main-btn"
                    onClick ={()=>props.handelAddProduct(props.product)}
                ><FontAwesomeIcon icon={faShoppingCart}/>add to cart</button>
            </div>
            
        </div>
    );
};

export default Product;