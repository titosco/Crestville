"use client"
import { Button } from "@/components/ui/button";
import { UserPen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

const Navigation = () => {
    const path =usePathname();

    useEffect(()=>{

    }, [])

  return <div className="p-6 px-3 flex justify-between shadow-sm fixed top-0 w-full z-10 items-center bg-white md:px-10">
    <div className="flex gap-5 items-center md:gap-10">
        <Image src={'/logo.svg'} width={60} height={60} alt="logo" className=" md:w-28 lg:w-36"/>
        <ul className="hidden md:flex gap-3 text-xs md:text-lg md:gap-10 lg:text-xl">
            <Link href={'/'}><li className={`"hover:text-primary font-medium text-sm cursor-pointer" ${path=='/'&&'text-primary'}`}>About Us</li></Link>
            <li className="hover:text-primary font-medium text-sm cursor-pointer">Services</li>
            <li className="hover:text-primary font-medium text-sm cursor-pointer">Socials</li>
        </ul>
    </div>
    <div className="flex gap-2">
        <Button className="flex px-2 gap-2 text-xs md:text-lg lg:text-xl"><UserPen/> Contact us</Button>
        <Button variant="outline"  className="text-xs md:text-lg lg:text-xl">Login</Button>
    </div>
  </div>;
};

export default Navigation;
