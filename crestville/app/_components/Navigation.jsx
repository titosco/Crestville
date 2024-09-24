"use client"
import { Button } from "@/components/ui/button";
import { UserPen } from "lucide-react";
import Image from "next/image";
import Crestville from "../images/crestville-logo-white-1.png"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { UserButton, useUser } from "@clerk/nextjs";

const Navigation = () => {
    const path =usePathname();
    const {user, isSignedIn} = useUser();
    useEffect(()=>{

    }, [])

  return <div className="p-6 px-3 flex justify-between shadow-sm fixed  top-0 w-full z-20 items-center bg-white md:px-10">
    <div className="flex gap-5 items-center md:gap-10">
        <Image src={Crestville} width={60} height={60} alt="logo" className=" md:w-28 lg:w-36"/>
        <ul className="hidden md:flex gap-3 text-xs md:text-lg md:gap-10 lg:text-xl">
        <Link href={'/'}><li className={`hover:text-primary font-medium text-sm cursor-pointer ${path === '/' && 'text-primary'}`}>About</li></Link>
            <Link href={'/listings'}><li className={`hover:text-primary font-medium text-sm cursor-pointer ${path === '/listings' && 'text-primary'}`}>Service</li>
          </Link>
        </ul>
    </div>
    <div className="flex gap-2 items-center">
        <Button className="flex px-2 gap-2 text-xs md:text-lg lg:text-xl"><UserPen/> Book Now</Button>
        {isSignedIn?
          <UserButton />
          :
          <Link href={'/sign-in'}>
          <Button variant="outline"  className="text-xs md:text-lg lg:text-xl">Login</Button></Link>
        }
        
    </div>
  </div>;
};

export default Navigation;
