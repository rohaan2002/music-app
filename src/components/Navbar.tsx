'use client' //to use react hook, write 'use client' on top as react is client side code and nextJs needs to be specified if the following code is strictly for client
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link"; 

function Navbar({className}: {className?:string}) {
  const [active,setActive]= useState<string|null>(null);
  return (
    <div
    className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      
       <Menu setActive={setActive}>
      <Link href={"/"}>
        <MenuItem setActive={setActive} active={active} item="Home">
    {/* testt hy */}
        </MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Our Courses">
          <div className="flex flex-col gap-y-4">
        <HoveredLink href='/courses'>
      All Courses
        </HoveredLink>
        <HoveredLink href='/about'>
      Basic Music Theory
        </HoveredLink>
        <HoveredLink href='/about'>
    Advanced Composition
        </HoveredLink>
        <HoveredLink href='/about'>
      Song Writing
        </HoveredLink>
        <HoveredLink href='/about'>
      Music Production
        </HoveredLink>

        </div>
        </MenuItem >
        <Link href='/contacts'>
        Contact Us
        </Link>
        </Menu>
{/*

        <MenuItem setActive={setActive} active={active} item="Our Courses">
        <div className="flex flex-col space-y-4 text-sm">
        <HoveredLink href="/courses"> AllCourses </HoveredLink>
        <HoveredLink href="/courses"> Basic Music Theory </HoveredLink>
        <HoveredLink href="/courses"> Advanced Composition </HoveredLink>
        <HoveredLink href="/courses"> Song Writing </HoveredLink>
        <HoveredLink href="/courses"> Nusic Production </HoveredLink>
        </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contacts">
        <Link href={'/contact'}></Link> 
        </MenuItem>
      </Link>
      </Menu> */}
    </div>
  )
}

export default Navbar
