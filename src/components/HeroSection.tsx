import Link from "next/link"; 
import {Spotlight} from "../components/ui/Spotlight"
import {Button} from "../components/ui/moving-border"
const HeroSection = () => {
  return (
 <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden py-10 md:py-0 mx-auto">
     <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
    {/* hero ki kya baat h */}
    <div className=" relative z-10 w-full text-center p-4">
        <h1
        className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
        > Master the of art of music.</h1>
        <p className=" max-w-lg mt-4 mx-auto text-neutral-300 md:text-lg text-base">

Dive into our comprehensive music courses and transform your musical journey today. Whether you're a beginner or looking to refine your skills, join us to unlock your true
potential.
        </p>
        <div className="mt-4">
            <Link href={"/courses"}>
             <Button borderRadius="1.75rem" className=" bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800">
             Explore Courses
             </Button>
            </Link>
        </div>
    </div>
    
 </div>
  )
}

export default HeroSection
