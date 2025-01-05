'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Countdown } from './components/countdown'

export default function Home() {
  const [email, setEmail] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Add your waitlist submission logic here
    console.log('Submitted:', email)
  }

  return (
    <main className="min-h-screen bg-black relative overflow-hidden">
      {/* Logo */}
      <div className="absolute top-8 left-8 z-50">
        <div className="bg-[#4A4A8F] px-4 py-2 rounded">
          <h1 className="text-white text-2xl font-bold">WhereToFind</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-40 min-h-screen flex flex-col items-center justify-center">
        {/* Main Text */}
        <div className="text-white text-center w-full px-0 absolute top-10">
          <div className="flex justify-between items-center max-w-7xl mx-auto animate-scroll-reverse">
            <h2 className="text-8xl md:text-[12rem] font-light tracking-wider font-custom">
              COMING
            </h2>
            <span className="text-8xl md:text-[12rem] mx-4">•</span>
            <h2 className="text-8xl md:text-[12rem] font-light tracking-wider font-custom">
              SOON
            </h2>
          </div>
        </div>

        {/* Launch Box */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/60 backdrop-blur-xl rounded-[2rem] p-8 w-full max-w-md">
          <Countdown />
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-zinc-800/50 text-white px-4 py-3 rounded-full placeholder:text-gray-400 focus:outline-none pr-24"
                required
              />
              <button 
                type="submit"
                className="absolute right-1 top-1/2 -translate-y-1/2 bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
              >
                Submit
              </button>
            </div>
          </form>

          <div className="mt-4 flex items-center justify-center gap-1">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-6 h-6 rounded-full overflow-hidden border-2 border-black"
                >
                  <Image
                    src="/placeholder.svg"
                    alt="Avatar"
                    width={24}
                    height={24}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <span className="text-gray-400 text-sm ml-2">2k+ Peoples Joined</span>
          </div>
        </div>
      </div>

      {/* Background Images */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="flex animate-scroll absolute bottom-0 left-0">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[300px] h-[400px] mx-4 rounded-[150px] overflow-hidden"
            >
              <Image
                src="https://images.ctfassets.net/bjhrajhd7nqm/6yFRxygPiofGL8fSpgCCG3/91e1eaba701a6b96c116b3d8785f0ad0/ec2-miista-Kamila-Dark-Grey-Dress-02.jpg?fm=webp"
                alt="Portrait"
                width={300}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scroll-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
          display: flex;
          width: fit-content;
        }
        .animate-scroll-reverse {
          animation: scroll-reverse 20s linear infinite;
          display: flex;
          width: fit-content;
        }
      `}</style>
    </main>
  )
}

