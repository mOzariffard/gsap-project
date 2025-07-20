import React from 'react'
import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap'
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {

  return (
    <main>
     <NavBar/>
     <HeroSection/>
     <div className=' h-dvh bg-black'/>
    </main>
  )
}

export default App
