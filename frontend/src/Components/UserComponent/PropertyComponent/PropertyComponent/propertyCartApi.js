import React, { useEffect, useState } from "react";
import './propertyCartApi.css';

const PropertyCart = () => {

    const [showCart, setShowCart] = useState([]);

    // Show Property Cart
    const propertyCart = () => {
        return (
            <>
                <div className="row">
                    {
                        showCart.map((item, index) => (
                            <div key={index} className='carts'>
                                <div className="cart col-3">
                                    <h3>{item.city} </h3>
                                    {
                                        item.image.map((img, index) => (
                                            <div key={index}>
                                                <img src={img} alt={item} className='image' ></img>
                                                <button className="btn bg-info w-50 my-3">Per sqft : {item.rate} </button>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </>
        )
    }

    const cartImage = (API) => {
        fetch('http://localhost:3333/realestate/cartimage')
            .then(async (res) => {
                const cart = await res.json();
                return cart;
            })
            .then((cart) => {
                console.log("Image data : ", cart.data);
                setShowCart(cart.data);
            })
            .catch((err) => {
                console.log("Cart image: ", err.message);
            })
    }

    useEffect((e) => {
        cartImage();
    }, [])

    return (
        <React.Fragment>
            {propertyCart()}
        </React.Fragment>
    )
}

export default PropertyCart;