import React from 'react'
import ChillBeats from '../images/ChillBeats.png'
import MinimalBeats from '../images/MinimalBeats.png'
import Sundown from '../images/Sundown.png'

function Playlists() {
  return (
    <section className='lg:max-h-96 lg:py-72 flex flex-col gap-10 justify-center sm:h-30 sm:py-10'>

        <div className='lg:h-60 w-1/2 lg:py-5 flex justify-around self-center sm:h-70'>

            <h2 className='w-60 self-center sm:max-w-60'>
              Playlists For Any Task
            </h2>

            <p className='w-80 sm:max-w-50'>
                Our special playlists offer an array of musical experiences tailored 
                to cater to the unique needs and preferences for programmers, ensuring a 
                seamless integration of music and coding to elevate your productivity and enjoyment.
            </p>

        </div>

        <div className='lg:h-60 w-2/3 py-10 flex place-items-center self-center justify-evenly md:flex-row sm:flex-col sm:gap-2'>

            <img src={MinimalBeats} className='p-1 h-60 w-60 rounded-xl hover:scale-105 hover:ring-2 ring-white duration-500'/>
            <img src={ChillBeats} className='p-1 h-60 w-60 rounded-xl hover:scale-105 hover:ring-2 ring-white duration-500'/>
            <img src={Sundown} className='p-1 h-60 w-60 rounded-xl hover:scale-105 hover:ring-2 ring-white duration-500'/>

        </div>

    </section>
  )
}

export default Playlists