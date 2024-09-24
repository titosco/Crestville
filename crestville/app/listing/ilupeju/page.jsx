import React from "react";
import Image from 'next/image';
import home from '../../images/ilupeju.jpeg'
import { BedDouble, BedSingle, MapPin, SmilePlus, UserPen,  } from "lucide-react";
import { Button } from "@/components/ui/button";

const ilupeju = () => {
  return (
    <main className="mb-28">
        <div>
          <Image
          alt=""
          src={home}
          className="w-full h-[250px] sm:h-[350px]  md:h-[350px] lg:h-[550px] object-cover"
        />
        <div className="flex flex-col max-w-4xl mx-auto p-3 my-7 gap-4">
          <p className="text-xl md:text-2xl font-semibold">
            <span><strong>Crestville illupeju</strong> - # 45,000 / Day</span>
            <span className="flex text-sm items-center mt-5 md:mt-10 md:text-xl gap-2 font-light"><MapPin />    14 Arikewuyo St, Ilupeju, Lagos 100253, Lagos</span>
            <Button className="flex px-2 text-xs gap-2 items-center mt-4 md:mt-5 md:text-lg lg:text-xl" ><UserPen/>Book Now</Button>
          </p>
          <p  className="text-slate-800">
            <span className="text-base mt-5 md:mt-10 md:text-xl font-light">
              <strong>Description - </strong>Our 1-bedroom and 2-bedroom at ilupeju comes with a comfortable bed, complete with high-quality duvets that gaurantees your night to be good and restful. We offer 24-hours Uninterupted Light, a full Equipped Kitchens, Smart TV, DSTV, and so much more, our Facility staffs are at your service for anything you may need. We offer a prefect blend of  tranqility and luxury you cozy and relaxed in an environment built for your everyday living experience
            </span>
            <ul className="flex mt-3 md:mt-5 gap-3 text-primary">
              <li className="features"><BedSingle/>1-Bed</li>
              <li className="features"><BedDouble/>2-Bed</li>
              <li className="features"><SmilePlus/>Spa</li>
              
            </ul>
          </p>
        </div>
        </div>
    </main>
  );
};

export default ilupeju;
