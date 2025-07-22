import React from 'react'
import { goodLists } from '../../constants/index.js'
import checkImg from "/images/check.png";
import underImg from "/images/under-img.jpg";


const ArtSection = () => {
  return (
    <section id='art'>
        <div className='container mx-auto h-full pt-20 '>
            <h2 className='wiil-fade'> The Art  </h2>

            <div className='content '>
                <ul className='space-y-4 will-fade'>
                    {goodLists.map((feature , index)=>(
                        <li key={index} className='flex items-center gap-2'>
                            <img src={checkImg} alt="Check" />
                            <p>{feature}</p>
                        </li>
                    ))}
                </ul>
                
                <div className='cocktail-img'>
                    <img src={underImg} alt="cocktail" className='abs-center masked-img size-full object-contain'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ArtSection