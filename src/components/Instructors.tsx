'use client'
import { WavyBackground } from "./ui/wavy-background"
import { AnimatedTooltip } from "./ui/animated-tooltip"
const Instructors = () => {
  
const people= [
  
  {
    id: 2,
    name: "Vikram Singh",
    designation: "Tabla Artist",
    image: "https://images.unsplash.com/photo-1524392749318-209b690c93c6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGluZGlhbiUyMG11c2ljfGVufDB8fDB8fHww", // Indian tabla artist
  },
  {
    id: 3, 
    name: "Priya Kapoor",
    designation: "Teacher",
    image: "https://images.unsplash.com/photo-1586977729127-ed6854c9e72b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmVtYWxlJTIwbXVzaWNpYW58ZW58MHx8MHx8fDA%3D", // Indian female teacher
  },
  {
    id: 4,
    name: "Jairam Bhadoria",
    designation: "Flute Artist",
    image: "https://images.unsplash.com/photo-1530547253710-9bdf4c648014?q=80&w=819&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Indian flute artist
  },
  {
    id: 5,
    name: "Aisha Khan",
    designation: "Singer",
    image: "https://images.unsplash.com/photo-1517230878791-4d28214057c2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVtYWxlJTIwbXVzaWNpYW58ZW58MHx8MHx8fDA%3D", // Indian female musician
  },
  {
    id: 6,
    name: "Dev Anand",
    designation: "Guitarist",
    image: "https://images.unsplash.com/photo-1556088764-56e2dd8ec8b5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Indian male guitarist
  },
  {
    id: 7,
    name: "Ritik Rao",
    designation: "Producer",
    image: "https://plus.unsplash.com/premium_photo-1661637776556-b2aa45f53472?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGluZGlhbiUyMG11c2ljfGVufDB8fDB8fHww", // Indian producer
  },
];

  return (
    <div className="relative h-[40rem] flex  items-center justify-center overflow-hidden">
        <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
          <div className="mt-2  leading-8 font-extrabold  tracking-[-0.025em] text-white text-4xl sm:text-7xl text-center">
            Meet Our Instructors
          </div>
          <div className="flex flex-row mt-6 justify-center text-center text-xl">
            Discover these professional gems who will guide you in your musical journey 
          </div>
          <div className="flex flex-row justify-center items-center mt-6">
          <AnimatedTooltip items={people}/>
          </div>
        </WavyBackground>
    </div>
  )
}

export default Instructors
