import React from 'react'
import leftLaef from `${import.meta.env.BASE_URL}/images/cocktail-left-leaf.png`;
import rightLaef from `${import.meta.env.BASE_URL}/images/cocktail-right-leaf.png`;
import { cocktailLists, mockTailLists } from '../../constants/index.js';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
const CocktailSection = () => {
    useGSAP(()=>{
        const prallaxTimeline = gsap.timeline({
            scrollTrigger:{
                trigger: '#cocktails',
                start: 'top 30%',
                end: 'bottom 80%',
                scrub: true,
            }
        });
        prallaxTimeline
        .from('#c-left-leaf',{
            x:-100 , y:100 
        })
        .from('#c-right-leaf',{
            x:100 , y:100
        })

        
    },[]);
  return (
    <section id='cocktails' className='noisy'>
        <img src={leftLaef} alt="L-leaf" id='c-left-leaf' />
        <img src={rightLaef} alt="r-leaf" id='c-right-leaf' />

        <div className='list'>
            {/* ---- POPULAR LIST  ----*/}
            <div className='popular'>
                <h2> Most Popular Cocktails </h2>

                <ul>
                    {cocktailLists.map((drink)=>(
                        <li key={drink.name} >
                        <div className='md:me-28'>
                            <h3>{drink.name}</h3>
                            <p>{drink.country} | {drink.detail} </p>
                        </div>
                        <span>- {drink.price} </span>
                        </li>
                    ))}
                </ul>
            </div>
            {/* ---- MOST LOVED ---- */}

            <div className='loved'>
                <h2> Most Loved Mocktails </h2>

                <ul>
                    {mockTailLists.map((mokDrink)=>(
                        <li key={mokDrink.name} >
                        <div className='me-28'>
                            <h3>{mokDrink.name}</h3>
                            <p>{mokDrink.country} | {mokDrink.detail} </p>
                        </div>
                        <span>- {mokDrink.price} </span>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    </section>
  )
}

export default CocktailSection