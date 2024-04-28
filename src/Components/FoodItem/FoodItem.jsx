import React, { useContext, useState } from "react";
import "./FoodItem.css";
import { assets } from "../../Assets/assets";
import { StoreContext } from "../../Context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
    const {cartItem,addToCart,removeFromCart} = useContext(StoreContext);
    return (
        <div className="food-item">
            <img className="food-item-img-container" src={image} alt="" />

            <div>
                <span>
                    <p>{name}</p>
                    <i>${price}</i>
                </span>
                <img src={assets.rating_starts} alt="" />
                <p>{description}</p>
            </div>
            {!cartItem[id] ? (
                <img className="add" onClick={() => addToCart(id)} src={assets.add_icon_green} />
            ) : (
                <span className="food-item-counter">
                    <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
                    <p>{cartItem[id]}</p>
                    <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                </span>
            )}
        </div>
    );
};

export default FoodItem;
