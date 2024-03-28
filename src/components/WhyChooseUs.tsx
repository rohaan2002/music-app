"use client";
import { StickyScroll } from "../components/ui/sticky_scroll_reveal";
import Image from "next/image";
 

const musicSchoolContent = [
   
      {
        title: "Expert Music Instruction",
        description:
          "Receive expert music instruction from seasoned professionals who have years of experience in the industry. Whether you're a beginner or an advanced musician, our instructors will provide personalized guidance to help you develop your skills and reach your musical goals.",
        content: (
          <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
            Expert Music Instruction
          </div>
        ),
      },
      {
        title: "Cutting-Edge Production Techniques",
        description:
          "Learn cutting-edge production techniques using state-of-the-art equipment and software. Our curriculum is designed to teach you the latest trends and technologies in music production, giving you the tools you need to create professional-quality tracks.",
        content: (
          <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--pink-600),var(--yellow-400))] flex items-center justify-center text-white">
            Cutting-Edge Production Techniques
          </div>
        ),
      },
      {
        title: "Collaborative Music Projects",
        description:
          "Engage in collaborative music projects with fellow students and instructors. Our school fosters a creative and supportive environment where you can collaborate with others, share ideas, and gain valuable experience working in teams.",
        content: (
          <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
            Collaborative Music Projects
          </div>
        ),
      },
      {
        title: "Customized Learning Paths",
        description:
          "We offer customized learning paths tailored to your musical interests and aspirations. Whether you're interested in music production, composition, or performance, our flexible programs allow you to focus on the areas that matter most to you.",
        content: (
          <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--pink-600),var(--yellow-400))] flex items-center justify-center text-white">
            Customized Learning Paths
          </div>
        ),
      },
      {
        title: "High-Quality Facilities",
        description:
          "Train in our high-quality facilities equipped with top-of-the-line instruments, recording studios, and production suites. Our state-of-the-art equipment ensures that you have access to the tools you need to hone your craft and produce professional-grade music.",
        content: (
          <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
            High-Quality Facilities
          </div>
        ),
      },
      {
        title: "Industry-Relevant Curriculum",
        description:
          "Our curriculum is designed by industry professionals to ensure that you receive relevant training that prepares you for success in the music industry. From music theory to audio engineering, our courses cover a wide range of topics essential for today's music professionals.",
        content: (
          <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--pink-600),var(--yellow-400))] flex items-center justify-center text-white">
            Industry-Relevant Curriculum
          </div>
        ),
      },
      {
        title: "Supportive Learning Community",
        description:
          "Join our supportive learning community and connect with fellow musicians who share your passion for music. Whether you're attending classes in person or online, you'll be part of a supportive network that encourages growth, creativity, and collaboration.",
        content: (
          <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
            Supportive Learning Community
          </div>
        ),
      },
    ];
    
    



const WhyChooseUs = () => {
  return (
    <div>
        <StickyScroll content={musicSchoolContent} />
            
       
    </div>
  )
}

export default WhyChooseUs
