import React, { use, useState } from 'react'
import rightSlider from "/images/slider-right-leaf.png";
import leftSlider from "/images/slider-left-leaf.png";
import { cocktailsSilderList } from '../../constants/index.js';
import rArrow from '/images/right-arrow.png';
import lArrow from '/images/left-arrow.png';


const MenuSection = () => {
  const [currentIndex, setCurrentIndex]= useState(0);

  const totalCocktails =cocktailsSilderList.length;

  const goToSlider=(index)=>{
    const newIndex= (index + totalCocktails)% totalCocktails;

    setCurrentIndex(newIndex);
  }
  return (
    <section id='menu' aria-labelledby='menu-heading'>
        <img src={leftSlider} alt='Left leaf' id='m-left-leaf'/>
        <img src={rightSlider} alt="Right leaf" id='m-right-leaf' />

        <h2 id='menu-heading' className='sr-only'>
            Cocktail Menu 
        </h2>

        <nav className='cocktail-tabs' aria-labelledby='Cocktail Navigation'>
            {cocktailsSilderList.map((cocktail, index)=>{
                const isActive = index === currentIndex;

                return(
                  <button key={cocktail.id} 
                  className=
                  {`${isActive 
                    ? 'text-white border-white' 
                     : 'text-white/50 border-white/50'}`}
                     onClick={()=>goToSlider(index)}
                     >
                    {cocktail.name}
                  </button>
                )
              })}
        </nav>

        <div className='content'>
          <div className='arrows'>
            <button className='text-left' onClick={()=>goToSlider(currentIndex - 1)}>
              <span> Prev Cocktailname</span>
              <img src={rArrow} alt="right-Arrow"  aria-hidden="true" />
            </button>

            <button className='text-left' onClick={()=>goToSlider(currentIndex + 1)}>
              <span> Prev Cocktailname</span>
              <img src={lArrow} alt="left-Arrow"  aria-hidden="true" />
            </button>
          </div>
        </div>
    </section>
  )
}

export default MenuSection