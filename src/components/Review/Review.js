import React, { useEffect, useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import happy from '../../images/giphy.gif';

const Review = () => {
    const [cart,setCart] = useState([]);
    const [orderPlaced,setOrderPlaced] =useState(false);

    const handelPlaceOrder = ()=>{
        setCart([]);
        processOrder();

    }
    const removeProduct = (productKey)=>{
        // console.log('Remove clicked');
        const newCart = cart.filter(pd =>pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }
    useEffect(()=>{
        //cart
        const savedCart = getDatabaseCart();
        const productKey = Object.keys(savedCart);
        const cartProducts = productKey.map(key=>{
            const product = fakeData.find(pd=>pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        setCart(cartProducts);
    },[]);

    let thanks;
    if(orderPlaced){
        thanks = <img src={happy} alt=""/>
    } 
    return (
        <div className="twin-container">
            <div className="product-container">
            {
            cart.map(pd=> <ReviewItem 
                product ={pd}
                removeProduct = {removeProduct}
            
            ></ReviewItem>)
            }
            {thanks}
            </div>
        
        <div className="cart-container">
            <Cart cart={cart}>
                <button onClick={handelPlaceOrder} className="main-btn">Place Order</button>
            </Cart>
        </div>
        </div>
    );
};

export default Review;