import React, { useState } from "react";
import "./FoodItem.css";
import { assets } from "../../Assets/assets";

const FoodItem = ({ id, name, price, description, image }) => {
    const [itemCount, setItemCount] = useState(0);
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
            {itemCount == 0 ? (
                <img className="add" onClick={() => setItemCount((prev) => prev + 1)} src={assets.add_icon_green} />
            ) : (
                <span className="food-item-counter">
                    <img onClick={() => setItemCount((prev) => prev + 1)} src={assets.add_icon_green} alt="" />
                    <p>{itemCount}</p>
                    <img onClick={() => setItemCount((prev) => prev - 1)} src={assets.remove_icon_red} alt="" />
                </span>
            )}
        </div>
    );
};

export default FoodItem;
