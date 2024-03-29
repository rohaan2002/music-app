'use client'
import Link from "next/link"
const Footer = () => {
  return (
    <div className=" bg-black ">
    <div className="w-full m-6  max-h-[40rem] max-w-7xl grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1  mx-auto">
      <div className="text-lg sm:text-xl font-semibold text-black m-4 dark:text-neutral-200">About Us
      <h2 className="text-sm text-neutral-600 dark:text-neutral-400 max-w-sm my-2 leading-6">
        Music School is an idea that younger generation needs to be instilled the core idea of music generation so that they can feel liberated in expressing themselves through this older-than-time artform.
      </h2>
      </div>
      <div className="text-lg font-semibold sm:text-xl text-black m-4 dark:text-neutral-200">Quick Links
      <div className="flex flex-col text-sm text-neutral-600 dark:text-neutral-400 flex-grow my-2 leading-6">
        <Link href={'/home'}>Home</Link>
        <Link href={'/about'}>About</Link>
        <Link href={'/courses'}>Courses</Link>
        <Link href={'/contact'}>Contact</Link>
      </div>
      </div>
      <div className="text-lg sm:text-xl font-semibold text-black m-4 dark:text-neutral-200">Follow Us
      <div className="flex flex-row text-sm text-neutral-600 dark:text-neutral-400 flex-grow my-2 gap-3">
        <Link href={'/'}>Instagram</Link>
        <Link href={'/'}>Twitter/X</Link>
        <Link href={'/'}>Reddit</Link>
      </div>
      </div>
      <div className="text-lg sm:text-xl font-semibold text-black m-4 dark:text-neutral-200">Contact Us
      <div className="flex flex-col text-sm text-neutral-600 dark:text-neutral-400 flex-grow my-2 leading-6">
        <div>
        Ghaziabad, U.P., India <br /> Uttar Pradesh 201001
        </div>
        
        <Link href={'rohan.21b0131077@abes.ac.in'}> Email: rohan.21b0131077@abes.ac.in</Link>
        <div>Phone: +91 9625004352</div>
      </div>
      </div>
      
    </div>
    <div className="text-center text-base text-gray-400 mb-6">
        © 2024 Rohan Pachauri. Music School - a NextJS vanity project
    </div>
    </div>
  )
}

export default Footer
