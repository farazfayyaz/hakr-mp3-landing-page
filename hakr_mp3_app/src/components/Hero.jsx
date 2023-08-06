import React from 'react'

function Hero() {
  return (
    <section className='h-96 py-72 text-center flex justify-evenly'>
        
        <div className='h-72 w-1/2 self-center flex flex-col justify-evenly items-center'>

          <h1 className='text-4xl font-bold h-28 w-2/3 content-center'>
            Enjoy The Best Music Collection For Any Techie
          </h1>

          <p className='h-24 w-1/2 text-lg mb-8'>
            Specially curated playlists for any programmer. Whether you 
            are creating, analyzing, or debugging, there is something for you.
          </p>

          <div className='flex gap-10'>
            <a 
              href='#'
              className='bg-blue-600 h-10 w-24 rounded-lg flex justify-evenly'
            >
              <p className='self-center'>
                Download
              </p>  
            </a>

            <a 
              href='#'
              className='ring-2 ring-slate-50 h-10 w-24 rounded-lg flex justify-evenly hover:bg-zinc-800 duration-150'
            >
              <p className='self-center'>
                Learn More
              </p>  
            </a>
          </div>
          

        </div>
        

    </section>
  )
}

export default Hero