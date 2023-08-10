import React from 'react'

function Hero() {
  return (
    <section className='lg:max-h-96 py-72 text-center flex justify-evenly md:py-20 sm:py-10'>
        
        <div className='lg:h-72 w-1/2 self-center flex flex-col justify-evenly items-center md:gap-5 sm:gap-5 sm:min-w-1/2'>

          <h1 className='text-4xl font-bold lg:h-28 lg:w-2/3 content-center md:w-full sm:w-full'>
            Enjoy The Best Music Collection For Any Techie
          </h1>

          <p className='lg:h-24 lg:w-1/2 text-lg mb-8 md:w-full sm:w-full'>
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