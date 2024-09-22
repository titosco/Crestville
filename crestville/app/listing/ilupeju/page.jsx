import React from "react";
import Image from 'next/image';
import home from '../../images/ilupeju.jpeg'
import { MapPin } from "lucide-react";

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
            <span className="flex text-sm items-center mt-5 md:mt-10 md:text-xl"><MapPin />    14 Arikewuyo St, Ilupeju, Lagos 100253, Lagos</span>
          </p>
        </div>
        </div>
    </main>
  );
};

export default ilupeju;
