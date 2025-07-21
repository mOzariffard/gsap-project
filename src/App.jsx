import React from 'react'
import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap'
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import CocktailSection from './components/CocktailSection';

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {

  return (
    <main>
     <NavBar/>
     <HeroSection/>
     <CocktailSection/>
    </main>
  )
}

export default App
