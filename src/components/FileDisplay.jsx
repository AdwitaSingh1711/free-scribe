import React from 'react'
/*mx-auto: for self-centering */
export default function FileDisplay(props){
    const {handleAudioReset, file, audioStream} = props
    return(
        <main className='flex-1 p-4 flex flex-col gap-3 text-center
        sm:gap-4 md:gap-5 justify-center pb-20 w-fit max-w-full mx-auto'>
            <h1 className='font-semibold text-5xl sm:text-6xl md:text-6xl'>
                Your <span className='text-blue-400 bold'>Notes hehe</span>
            </h1>

            <div className='mx-auto flex flex-col text-left'>
                <h3 className='font-semibold'>Name</h3>
                <p>{file.name}</p>
            </div>
            <div className='flex items-center justify-between gap-4'>
                <button onClick={handleAudioReset} className='text-slate-400 hover:text-blue-600 duration-200 '> Reset

                </button>
                <button className='specialBtn px-3 p-2 rounded-lg text-blue-400
                flex items-center gap-2 font-medium'>
                Transcribe
                <i className="fa-solid fa-pen-to-square"></i>
                </button>
            </div>
        </main>
    )
}