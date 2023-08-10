import React from 'react'

function Nav() {
  return (
    <header className='bg-black text-white h-20 my-4'>

        <nav className='mx-8 flex  h-20 items-center max-sm:min-w-full max-sm:mx-8'>

            <h4 className='mr-auto'>
                Hakr.mp3
            </h4>

            <ul className='flex gap-10 ml-auto max-sm:hidden'>

                <li>
                    <a href='#'>
                        Discover
                    </a>
                </li>
                <li>
                    <a href='#'>
                        Trending
                    </a>
                </li>
                <li>
                    <a href='#'>
                        Playlists
                    </a>
                </li>
                <li>
                    
                </li>
            </ul>

            <a 
            href='#'
            className='bg-blue-600 h-10 w-24 rounded-lg flex justify-evenly sm:min-w-24 max-sm:ml-auto'
            >
                <p className='self-center'>
                    Download
                </p>
            </a>

        </nav>

    </header>
  )
}

export default Nav
