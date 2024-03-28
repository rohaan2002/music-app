'use client'

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonials = [
    {
      quote: "Attending this music school has been a soulful journey. The guidance I received here has not just refined my skills but also enriched my musical understanding.",
      name: "Ananya Gupta",
      title: "Classical Vocalist"
    },
    {
      quote: "Being a part of this music school has been a harmonious experience. The blend of theory and practical knowledge has helped me evolve as a versatile musician.",
      name: "Rahul Sharma",
      title: "Pianist"
    },
    {
      quote: "This music school resonates with passion and dedication. The supportive environment and expert guidance have fueled my passion for music like never before.",
      name: "Neha Patel",
      title: "Guitarist"
    },
    {
      quote: "Enrolling in this music school was like discovering a new rhythm in life. The holistic approach to music education here has broadened my horizons.",
      name: "Amit Singh",
      title: "Bass Player"
    },
    {
      quote: "This music school is more than just a learning center; it's a symphony of creativity and expression. The collaborative spirit here has amplified my musical journey.",
      name: "Priya Desai",
      title: "Songwriter"
    },
    {
      quote: "I'm grateful for the transformative experience I've had at this music school. The immersive learning environment has helped me unlock my true musical potential.",
      name: "Vikram Patel",
      title: "Tabla Artist"
    },
    {
      quote: "Choosing this music school was like finding the perfect melody. The personalized attention and hands-on training have shaped me into a confident performer.",
      name: "Sanya Kumar",
      title: "Sitarist"
    }
  ];
  
  

const TestimonialCard = () => {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-3xl text-center font-bold mb-8 z-10 ">
            Hear our Harmony:  Voices of Success
        </h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-4 lg:px-8">
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
        items={musicSchoolTestimonials}
        direction="right"
        speed="slow"
      />
            </div>
        </div>
     </div>
  )
}

export default TestimonialCard
