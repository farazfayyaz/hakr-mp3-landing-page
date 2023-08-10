import React from 'react'
import Card from '../assets/Card'
import Code from '../images/code.png'
import Language from '../images/Language.png'
import Streaming from '../images/streaming.png'

function Features() {
  return (
    <section className='lg:max-h-96 py-12 flex justify-around '>

        <div className='lg:max-h-80 lg:w-3/4 py-10 flex lg:flex-row place-items-center self-center justify-around md:w-full md:flex-col md:gap-5 sm:flex-col sm:gap-5'>

            <Card icon = {Language} title = 'Language Specific Soundtracks' phrase = '' />
            <Card icon = {Code} title = 'Coding Environment Integration' phrase = '' />
            <Card icon = {Streaming} title = 'Developer Podcasts and Audio Content' phrase = '' />

        </div>

    </section>
    
  )
}

export default Features