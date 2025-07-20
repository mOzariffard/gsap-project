import React from 'react'
import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {

  return (
    <div>
      <h1 className='text-3xl text-amber-500 text-center'> GSAP</h1>
    </div>
  )
}

export default App
