'use client'

import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";
const UpcomingWebinars = () => {
    const featuredWebinar = [
        {
          title: "Mastering Guitar Techniques",
          description: "Join us for an exclusive webinar where renowned guitarists will share their insights and tips on mastering advanced guitar techniques.",
          slug: "mastering-guitar-techniques",
          isFeatured: true
        },
        {
          title: "Exploring Indian Classical Music",
          description: "Discover the rich heritage of Indian classical music in this webinar led by expert musicians. Learn about ragas, talas, and the cultural significance of this timeless art form.",
          slug: "exploring-indian-classical-music",
          isFeatured: true
        },
        {
          title: "Introduction to Music Production",
          description: "Interested in music production? This webinar will provide you with a comprehensive introduction to the fundamentals of music production, from recording techniques to mixing and mastering.",
          slug: "introduction-to-music-production",
          isFeatured: true
        },
        {
          title: "The Art of Songwriting",
          description: "Unlock your creativity and learn the art of songwriting in this insightful webinar. Explore lyric writing, melody composition, and song structure with industry experts.",
          slug: "the-art-of-songwriting",
          isFeatured: true
        },
        {
          title: "Jazz Improvisation Workshop",
          description: "Join us for an interactive jazz improvisation workshop led by acclaimed jazz musicians. Enhance your improvisational skills and learn new techniques to express yourself through music.",
          slug: "jazz-improvisation-workshop",
          isFeatured: true
        },
        {
          title: "Music Marketing Strategies",
          description: "Learn effective music marketing strategies to promote your music and build your brand. Discover social media tactics, email marketing tips, and strategies for engaging with your audience.",
          slug: "music-marketing-strategies",
          isFeatured: true
        },
        {
          title: "The Business of Music Licensing",
          description: "Explore the world of music licensing and discover how to monetize your music through film, television, advertising, and more. Learn about licensing agreements, royalties, and copyright laws.",
          slug: "the-business-of-music-licensing",
          isFeatured: true
        }
      ];
      
    
      

  return (
    <div className="p-12 bg-gray-900"> 
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center">
                <h2 className="text-teal-600 font-bold tracking-wide text-base"> FEATURED WEBINARS</h2>
                <p className=" mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance your Musical Journey</p>
            </div>
            <div className="my-10 text-center">
                <HoverEffect
                items={featuredWebinar.map((webinar)=>(
                    {
                        title: webinar.title,
                        description: webinar.description,
                        link: `/${webinar.slug}`
                    }
                ))}
                />
            </div>
            <div className="mt-10 text-center">
                <Link href={'/'}
              className=" px-4 py-2 rounded border border-neutral-600 text-neutral-600 bg-white hover:bg-gray-100 transition duration-200"
              >
                   View All Webinars
                </Link>
            </div>
        </div>
    </div>
  )
}

export default UpcomingWebinars
