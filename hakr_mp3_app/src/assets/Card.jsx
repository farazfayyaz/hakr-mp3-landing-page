import React from 'react'

function Card(props) {
  return (
    <div className='rounded-xl ring-2 ring-white hover:scale-105 duration-500'>
        <div className='h-80 w-80 p-6 flex flex-col justify-between bg-zinc-800 rounded-xl'>

            <div className=''>
                <img src={props.icon} className='h-24 w-24' />
            </div>

            <h3 className='text-2xl font-bold'>
                {props.title}
            </h3>

            <p className=''>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Soluta illum quos dignissimos nulla saepe, eligendi eum odio quide
            </p>

            </div>

    </div>
    
  )
}

export default Card