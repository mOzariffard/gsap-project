import React from 'react'
import rightSlider from "/images/slider-right-leaf.png";
import leftSlider from "/images/slider-left-leaf.png";
import { cocktailsSilderList } from '../../constants/index.js';

const MenuSection = () => {
  return (
    <section id='menu' aria-labelledby='menu-heading'>
        <img src={leftSlider} alt='Left leaf' id='m-left-leaf'/>
        <img src={rightSlider} alt="Right leaf" id='m-right-leaf' />

        <h2 id='menu-heading' className='sr-only'>
            Cocktail Menu 
        </h2>

        <nav className='cocktail-tabs' aria-labelledby='Cocktail Navigation'>
            {cocktailsSilderList.map((cocktail, index)=>(
                
            ))}
        </nav>
    </section>
  )
}

export default MenuSection