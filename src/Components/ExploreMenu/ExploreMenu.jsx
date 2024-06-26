import React, { useContext } from 'react'
import "./ExploreMenu.css"
import { menu_list } from '../../Assets/assets'

const ExploreMenu = ({category , setCategory}) => {
 
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our Menu</h1>
      <p>Choose from diverse menu featuring a detachable array of dishes crafted with the finest ingreadient to satisfy your craving and elevate your dining experience, one delicious meal at a time.</p>
      <div className="explore-menu-list">
        {menu_list.map((item,index) => {
            return(
                <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)}  key={index} className="explore-menu-item">
                    <img className={category ==  item.menu_name ? "explore-active" : ""} src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
