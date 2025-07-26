import React from 'react'
import fRight from `${import.meta.env.BASE_URL}/images/footer-right-leaf.png`;
import fLeft from `${import.meta.env.BASE_URL}/images/footer-left-leaf.png`;
import { openingHours, socials } from '../../constants/index.js';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';
import gsap from 'gsap';

const ContactSection = () => {
    useGSAP(()=>{
        const titleSplit = SplitText.create('#contact h2',{type: 'words'});

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#contact',
                start: "top center", 
            },
            ease: "power1.inOut"
        });

        timeline.from(titleSplit.words, { opacity:0,yPercent: 100 , stagger: 0.03 })
                .from('#contact h3 , #contact p ', {opacity:0,yPercent: 100 , stagger: 0.03} )
                .to('#f-right-leaf' ,{y:-50 ,duration: 1, ease: "power1.inOut"} , '<')
                .to('#f-left-leaf' ,{y:-50 ,duration: 1, ease: "power1.inOut"}, '<')
    },[]);
return (
    <footer id='contact'>
            <img src={fRight} alt="footer-right-leaf" id='f-right-leaf'/>
            <img src={fLeft} alt="footer-left-leaf" id='f-left-leaf'/>

            <div className='content'>
                    <h2> Where to FIND US!</h2>

                    <div>
                            <h3>Visit Our Bar</h3>
                            <p>
                                    123 Cocktail Lane, Mixology City, CA 90210
                            </p>
                    </div>

                    <div>
                            <h3>Contact Us</h3>
                            <p>Phone: (123) 456-7890</p>
                            <p>cocktailBar@gmail.com</p>
                    </div>

                    <div>
                        <h3>Opent Every Day</h3>
                        {openingHours.map((time)=>(
                            <p key={time.day}>
                                {time.day} : {time.time}    
                            </p>
                        ))}
                    </div>

                    <div>
                        <h3> Socials</h3>
                        
                        <div className='flex-center gap-5'>
                            {socials.map((icon ,index)=>(
                                <a key={icon.name}
                                    href={icon.link}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    aria-label={icon.name}
                                    >
                                    <img src={icon.icon} alt={icon.name} />
                                </a>
                            ))}
                        </div>
                    </div>
            </div>
            
    </footer>
)
}

export default ContactSection