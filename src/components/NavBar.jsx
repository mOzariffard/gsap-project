import React from 'react'
import { navLinks } from '../../constants'
import logo from '/images/logo.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const NavBar = () => {
    useGSAP(()=>{
        const navTeen=gsap.timeline({
            scrollTrigger:{
                trigger: 'nav',
                start: 'bottom top'
            }
        });

        navTeen.fromTo('nav',{backgroundColor: 'transparent'},{
            backgroundColor: '#00000050',
            backgroundFilter: 'blur(10px)',
            duration:1 , 
            ease: 'power2.inOut',
        })
    },[])
  return (
    <nav>
        {/* ---- LOGO ---- */}
        <div>
            <a href="#home" className='flex items-center gap-2'>
                <img src={logo} alt="Logo" />
                <p> Vivolet </p>
            </a>
        

        {/* ---- NAVIGATION LINKS ---- */}
        <ul>
            {navLinks.map((link)=>(
                <li key={link.id}>
                    <a href={`#${link.id}`} className='font-semibold hover:text-gray-500 transition duration-500 '>{link.title} </a>
                </li>
            ))}
        </ul>
        </div>
    </nav>
  )
}

export default NavBar