import React from 'react'

function Footer() {
  return (
    <footer className='h-72  ' >

        <div>

          <ul className='h-20 pt-8 mx-10 flex gap-10'>
            <li className='mr-auto'>&copy; 2023 Hakr.mp3 - All rights reserved</li>
            <li>
              <a href = "#">
                Terms
              </a>
            </li>
            <li>
              <a href = "#">
                Privacy
              </a>
            </li>
            <li>
              <a href = "#">
                Cookies
              </a>
            </li>
          </ul>

        </div>

        <div className='h-48 flex mx-10'>

          <section className='w-40 mr-auto flex flex-col '>
            <h4 className='underline'>Site Map</h4>

            <ul className='flex flex-col self-end gap-2'>
              <li>
                <a href='#'>
                  Home
                </a>
              </li>
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
                <a href='#'>
                  Download
                </a>
              </li>
            </ul>
          </section>

          <section className='w-40 ml-auto flex flex-col '>

            <h4 className='underline'>Follow Us</h4>

            <ul className='flex flex-col self-end gap-2'>
              <li>
                <a href='#'>
                  Instagram
                </a>
              </li>
              <li>
                <a href='#'>
                  Twitter
                </a>
              </li>
              <li>
                <a href='#'>
                  Threads
                </a>
              </li>
              <li>
                <a href='#'>
                  Tiktok
                </a>
              </li>
            </ul>
          </section>
        </div>

    </footer>
  )
}

export default Footer