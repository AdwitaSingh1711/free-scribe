import React, {useState, useEffect, useRef} from 'react'
/* onChnage function in input tag = for handling input with jsx (look into that a bit more) */

export default function HomePage(props){
    const {setAudioStream,setFile} = props

    const [recordingStatus, setRecordingStatus] = useState('inactive') /** recordingStatus is a state variable
    setRecordingStatus is a function. recordingStatus is initialized to the initial value ''inactive */
    const [audioChunks, setAudioChunks] = useState([]) /*empty array */
    const [duration,setDuration] = useState(0)

    const mediaRecorder = useRef(null) //variable using useRef hook

    const mimeType = 'audio/webm'//audio will be recorded in the webm format

    //function to start recording audio using the WebAudio API
    //You only use async when you need to work with asynchronous tasks like making API requests, reading/writing files, 
    //or handling events.
    async function startRecording(){
        let tempStream //variable

        console.log('Start Recording') 

        //getting access to the user's microphone
        try{
            const streamData = await navigator.mediaDevices.getUserMedia({
                    audio:true,
                    video:false
                })
                tempStream = streamData //if audio is received, it is stored in tempStream
        } catch(err){
            console.log(err.message) //if no audio received
            return
        }

        setRecordingStatus('recording')
        //create new Media recorder instance using the stream
        const media = new MediaRecorder(tempStream,{type : mimeType})
        //new recording instance for recording the stream
        //to start the recording
        mediaRecorder.current = media // Assigns the MediaRecorder instance to the mediaRecorder.current reference,
        mediaRecorder.current.start()

        let localAudioChunks = [] //for storing audio data
        mediaRecorder.current.ondataavailable=(event)=>{ //Sets an event listener on the MediaRecorder instance to capture audio data when it becomes available.
            if(typeof event.data ==='undefined') {return}
            if(event.data.size===0){return}
            localAudioChunks.push(event.data)
        }
        setAudioChunks(localAudioChunks)
    }


    //upon stopping recording, we're creating Blobs from those audioChunks
    async function stopRecording(){
        setRecordingStatus('inactive')
        console.log('Stop recording')

        mediaRecorder.current.stop()
        mediaRecorder.current.onstop = ()=>{
            const audioBlob = new Blob(audioChunks,{type:mimeType})
            setAudioStream(audioBlob)//reads audioBlob?
            setAudioChunks([])
            setDuration(0)//when you stop recording
        }
    }

    //for letting people know the duration they have recorded for with a clock?
    useEffect(()=>{
        if(recordingStatus==='inactive'){return}

        const interval = setInterval(()=>{
            setDuration(curr=>curr+1)
        },1000)

        return ()=>clearInterval(interval)
    })

    return (
        <main className='flex-1 p-4 flex flex-col gap-3 text-center
        sm:gap-4 justify-center pb-10'>
            <h1 className='font-semibold text-5xl sm:text-6xl md:text-7xl'>
                Free <span className='text-blue-400 bold'>Scribe</span>
            </h1>
            <h3 className='font-medium md:text-lg'>Record
                <span className='text-blue-400'>&rarr;</span>Transcribe
                <span className='text-blue-400'>&rarr;</span>Translate
            </h3>
            <button onClick={recordingStatus==='recording'?stopRecording:startRecording} className='flex specialBtn px-4 py-2 rounded-xl
            items-center text-base justify-between hap-4 mx-auto w-72 max-w-full my-4'>
                <p className='text-blue-400'>{recordingStatus==='inactive'? 'Record':'Stop recording'}</p>
                <div className='flex items-center gap-2'>
                    {duration && (
                        <p className='text-sm'>{duration}s</p>
                    )}
                </div>
                <i className={"fa-solid duration-200 fa-microphone" +
            (recordingStatus==='recording'?'text-rose-300':"")}></i>
            </button>
            <p className='text-base'>Or <label className='text-blue-400 cursor-pointer hover:text-blue-600 duration-200'>Upload
            <input onChange={(e)=>{
                const tempFile = e.target.files[0]
                setFile(tempFile)
            }} className='hidden' type='file' accept='.mp3,.wave'></input></label> an mp3 file</p>
            <p className='italic text-slate-400'>Go crazy on your assignments</p>
        </main>
    )
}
/* pb-padding bottom */