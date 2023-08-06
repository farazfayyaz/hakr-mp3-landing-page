import React from 'react'
import Card from '../assets/Card'
import Code from '../images/code.png'
import Language from '../images/Language.png'
import Streaming from '../images/streaming.png'

function Features() {
  return (
    <section className='h-96 py-12 flex justify-around'>

        <div className='h-80 w-3/4 py-10 flex place-items-center self-center justify-around '>

            <Card icon = {Language} title = 'Language Specific Soundtracks' phrase = '' />
            <Card icon = {Code} title = 'Coding Environment Integration' phrase = '' />
            <Card icon = {Streaming} title = 'Developer Podcasts and Audio Content' phrase = '' />

        </div>

    </section>
    
  )
}

export default Features