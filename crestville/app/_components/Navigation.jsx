"use client"
import { Button } from "@/components/ui/button";
import { LucideMenu, UserPen, X } from "lucide-react";
import Image from "next/image";
import Crestville from "../images/crestville-logo-white-1.png"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { UserButton, useUser } from "@clerk/nextjs";

const Navigation = () => {

  const [menuBar, setMenuBar] = useState(false);

  const handleClick =()=>{
    setMenuBar(!menuBar);
  }

    const path =usePathname();
    const {user, isSignedIn} = useUser();
    useEffect(()=>{

    }, [])

  return <div className="p-6 px-3 flex justify-between shadow-sm fixed  top-0 w-full z-20 items-center bg-white md:px-10">
    <div className="flex gap-5 items-center md:gap-10">
        <Image src={Crestville} width={50} height={50} alt="logo" className=" md:w-24 lg:w-28 mt-3"/>
    </div>
    <div className=" md:flex">
    <ul className="hidden  items-center md:flex text-xs md:text-lg md:gap-28 lg:text-xl">
        <Link href={'/about'}><li className={`hover:text-primary font-medium text-sm cursor-pointer ${path === '/about' && 'text-primary'}`}>About</li></Link>
            <Link href={'/listings'}><li className={`hover:text-primary font-medium text-sm cursor-pointer ${path === '/listings' && 'text-primary'}`}>Service</li>
          </Link>
        </ul>
        <div>
          <LucideMenu onClick={handleClick} className="cursor-pointer hover:bg-primary md:hidden" />
        </div>
    </div>
    <div className="hidden gap-2 items-center md:flex">
        <Button className="flex px-2 gap-2 text-xs md:text-lg lg:text-xl"><UserPen/> Book Now</Button>
    </div>
    {/* side bar */}
    <div className= {`${menuBar ? "translate-x-0 flex": "translate-x-full"} gap-6 fixed top-0 right-0 h-full w-[350px] z-30 backdrop-blur shadow-md flex-col items-start justify-start pt-4 pl-8 transition-transform duration-500 ease-in-out md:hidden`}>
      <X onClick={handleClick} className="cursor-pointer hover:bg-primary"/>
      <ul className=" grid items-center md:flex gap-6 text-xs md:text-lg md:gap-10 lg:text-xl">
          <Link href={'/'}><li className={`hover:text-primary font-medium text-sm cursor-pointer ${path === '/' && 'text-primary'}`}>About</li></Link>
              <Link href={'/listings'}><li className={`hover:text-primary font-medium text-sm cursor-pointer ${path === '/listings' && 'text-primary'}`}>Service</li>
            </Link>
          </ul>
          <div className="flex gap-2 items-center">
          <Button className="flex px-2 gap-2 text-xs md:text-lg lg:text-xl"><UserPen/> Book Now</Button>
         </div>
    </div>
  </div>;
};

export default Navigation;
