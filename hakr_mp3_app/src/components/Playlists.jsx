import React from 'react'
import ChillBeats from '../images/ChillBeats.png'
import MinimalBeats from '../images/MinimalBeats.png'
import Sundown from '../images/Sundown.png'

function Playlists() {
  return (
    <section className='h-96 py-72 flex flex-col gap-10 justify-center '>

        <div className='h-60 w-1/2 py-5 flex justify-around self-center '>

            <h2 className=' w-60 self-center '>
              Playlists For Any Task
            </h2>

            <p className='w-80 '>
                Our special playlists offer an array of musical experiences tailored 
                to cater to the unique needs and preferences for programmers, ensuring a 
                seamless integration of music and coding to elevate your productivity and enjoyment.
            </p>

        </div>

        <div className='h-60 w-2/3 py-10 flex place-items-center self-center justify-evenly '>

            <img src={MinimalBeats} className='p-1 h-60 w-60 rounded-xl hover:scale-105 hover:ring-2 ring-white duration-500'/>
            <img src={ChillBeats} className='p-1 h-60 w-60 rounded-xl hover:scale-105 hover:ring-2 ring-white duration-500'/>
            <img src={Sundown} className='p-1 h-60 w-60 rounded-xl hover:scale-105 hover:ring-2 ring-white duration-500'/>

        </div>

    </section>
  )
}

export default Playlists