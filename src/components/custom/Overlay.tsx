'use client'

import { useEffect, useState } from "react"

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 20,
    hours: 2,
    minutes: 1,
    seconds: 3
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime.days === 0 && prevTime.hours === 0 && prevTime.minutes === 0 && prevTime.seconds === 0) {
          clearInterval(timer)
          return prevTime
        }

        let newTime = { ...prevTime }

        if (newTime.seconds > 0) {
          newTime.seconds--
        } else {
          newTime.seconds = 59
          if (newTime.minutes > 0) {
            newTime.minutes--
          } else {
            newTime.minutes = 59
            if (newTime.hours > 0) {
              newTime.hours--
            } else {
              newTime.hours = 23
              if (newTime.days > 0) {
                newTime.days--
              }
            }
          }
        }

        return newTime
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex gap-2 text-center">
      {Object.entries(timeLeft).map(([key, value]) => (
        <div key={key} className="bg-green-light rounded-lg px-2 py-4 w-full">
          <div className="text-3xl font-extrabold text-green-quaternary">{String(value).padStart(2, '0')}</div>
          <div className="text-xs uppercase text-[#1E3A1E]">{key}</div>
        </div>
      ))}
    </div>
  )
}

export default function Overlay({ handleClose }: { handleClose: () => void }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className={`rounded-lg w-full max-w-7xl bg-[#7ED321] relative overflow-hidden transition-all duration-500 ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}>
        <button
          onClick={handleClose}
          className="absolute z-30 right-6 top-6 p-2 hover:bg-white/10 rounded-full transition-colors"
          aria-label="Close"
        >
          <img src="/icons/cross.svg" alt="Close" className="w-6 h-6" />
        </button>
        
        <div className="bg-white flex flex-col lg:flex-row gap-8 ">
          <div className="flex-1">

            <div>
              <p className="text-4xl my-1">⏳</p>
            </div>
            <div className="m-2 p-2">
              <h1 className="text-5xl font-Antonio text-red-primary font-bold tracking-tighter mb-4">HURRY NOW!</h1>
              <CountdownTimer />
            </div>
            
            <div className="bg-[#FF3B30] mx-4  text-white px-4 py-2 rounded-full inline-block mb-4">
              Offer ends
            </div>
            
            <h1 className="m-2 mx-4 text-3xl font-Antonio transform scale-y-150 ">02 DEC 2024 💡 08:00PM</h1>
            <p className=" m-2  mx-4 text-2xl tracking-tighter transform scale-y-110 font-Antonio">UNLOCK GUARANTEED CAREER SUCCESS</p>
          </div>
          
          <div className="w-[66%] relative overflow-hidden">
            <img src="/images/overlay.png" alt="Students" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>
    </div>
  )
}