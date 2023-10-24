import React from 'react'

export default function Transcribing(props){
    const{downloading}=props
    return (
        <div className='flex items-center flex-col justify-center gap-10
        md:gap-14 py-24'>
            <div>
            <h1 className='font-semibold text-5xl sm:text-6xl md:text-6xl'>
                <span className='text-blue-400 bold'>Transcribing</span>
            </h1>
            <p>{!downloading ? 'warming up' : 'core cylinders engaged'}</p>
            </div>

            <div className='flex flex-col gap-2 sm:gap-4 max-w-[500px] mx-auto w-full'>

            </div>
        </div>
    )
}