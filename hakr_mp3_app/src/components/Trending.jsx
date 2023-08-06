import React from 'react'
import LunaLi from '../images/LunaLi.jpg'
import KyleDion from '../images/KyleDion.jpg'
import TwoFeet from '../images/TwoFeet.jpg'

function Trending() {
  return (
    <section className='h-96 py-72 flex flex-col gap-10 justify-center '>

        <div className='h-60 w-1/2 py-5 flex flex-row-reverse items-center justify-around self-center '>

            <h2 className='w-60 '>
              Check Out Trending Artists
            </h2>

            <p className=' w-80 '>
                Stay up-to-date with the latest musical trends, fuel your coding sessions with 
                fresh beats, and immerse yourself in the evolving soundscape of tech-savvy musicians 
                - all in one dynamic space.
            </p>

        </div>

        <div className='h-60 w-2/3 py-10 flex place-items-center self-center justify-evenly '>

            
            <img src={KyleDion} className='p-1 h-60 w-60 object-cover rounded-xl hover:scale-105 hover:ring-2 ring-white duration-500'/>
            <img src={LunaLi} className='p-1 h-60 w-60 object-cover rounded-xl hover:scale-105 hover:ring-2 ring-white duration-500'/>
            <img src={TwoFeet} className='p-1 h-60 w-60 object-cover rounded-xl hover:scale-105 hover:ring-2 ring-white duration-500'/>

        </div>

    </section>
  )
}

export default Trending