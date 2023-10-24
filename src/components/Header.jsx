import React from 'react'

export default function Header(){
    return (
        <header className='flex items-center justify-between gap-4 p-4'>
        <h1 className='font-medium'> Free 
          <span className='text-blue-400'>Scribe</span>
        </h1>
        <button className='flex-item-center gap-2 specialBtn px-3 text-sm py-2 rounded-lg 
        text-blue-400'>
          <p> New <i className="fa-solid fa-plus"></i></p> 
        </button>
      </header>
    )
}