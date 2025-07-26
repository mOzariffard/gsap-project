import React from 'react'
import ab1 from `${import.meta.env.BASE_URL}/images/abt1.png`;
import ab2 from `${import.meta.env.BASE_URL}/images/abt2.png`;
import ab3 from `${import.meta.env.BASE_URL}/images/abt3.png`;
import ab4 from `${import.meta.env.BASE_URL}/images/abt4.png`;
import ab5 from `${import.meta.env.BASE_URL}/images/abt5.png`;
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';

const AboutSection = () => {
    useGSAP(()=>{
        const titleSplit = SplitText.create('#about h2', {type: 'words'});

        const scrollTimeline= gsap.timeline({
            scrollTrigger: {
                trigger: '#about',
                start: 'top center',
            }
        })

        scrollTimeline.from(titleSplit.words,{
            opacity:0 , duration:1 , yPercent:100 , ease:'expo.inOut', stagger: 0.02
        })
        .from('.top-grid div , .bottom-grid div',{
            opacity:0 , duration: 1 , ease:'power1.inOut', stagger:0.04}, '-=0.5')
    },[]);

  return (
    <section id='about'>
        <div className='mb-16 md:px-0 px-5'>
            <div className='content'>
                <div className='md:col-span-8 '>
                    {/* ---- HEAD OF ABOUT US ---- */}
                    <p className='badge'>Best Cocktails</p>
                    <h2> 
                    Where every details matters <span className='text-white font-semibold'>-</span>
                    from muddle to garnish 
                    </h2>
                </div>

                {/*  */}
                <div className='sub-content'>
                    <p>
                        Every Cocktail we serve is reflection of our passion for mixology.
                        Our team of skilled bartenders meticulously crafts each drink, 
                        ensuring that every ingredient is perfectly balanced to create a harmonious flavor profile. 
                    </p>

                    <div>
                        <p className='md:text-3xl text-xl font-bold s'>
                            <span>4.5</span>/5
                        </p>
                        <p className='text-sm text-white-100'>
                            More than 1000+ reviews from our happy customers
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className='top-grid'>
            <div className='md:col-span-3 '>
                <div className='noisy'/>
                    <img src={ab1} alt="ab1" />
            </div>


            <div className='md:col-span-6 '>
                <div className='noisy'/>
                    <img src={ab2} alt="ab2" />
            </div>


            <div className='md:col-span-3 '>
                <div className='noisy'/>
                    <img src={ab5} alt="ab5" />
            </div>
        </div>

        <div className='bottom-grid'>
            <div className='md:col-span-8'> 
                <div className='noisy' />
                <img src={ab3} alt="ab3" />
            </div>


            <div className='md:col-span-4'> 
                <div className='noisy' />
                <img src={ab4} alt="ab4" />
            </div>
        </div>
    </section>
  )
}

export default AboutSection