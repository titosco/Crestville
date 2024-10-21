import { Button } from "@/components/ui/button";
import { ArrowUpDown, BedDouble, BedSingle, MapPin, UserPen } from "lucide-react";
import Image from "next/image";
import React from "react";
import home from '../../images/aster_2.jpeg'

const aster = () => {
  return (
    <main className="mb-28">
      <div>
        <div className="img-box">
            <Image
            alt=""
            src={home}
            className="img"
          />
          <span className="title ">Crestville <span className="title-span">Apartments</span></span>
      </div>
      <div className="container">
        <p className="text-xl md:text-2xl font-semibold">
          <span><strong>Aster Residence</strong> - #50,000 / Day</span>
          <span className="address"><MapPin /> Radiyalla Olusesi Street Lekki II Lagos, Lagos</span>
          <Button className="btn" ><UserPen/>Book Now</Button>
        </p>
        <p  className="text-slate-800">
          <span className="desc">
            <strong>Description - </strong>We bring to you the biggest 1-Bedroom and 2-Bedroom on the island just for you!!. Fully funished with a luxurious and spacious kitchen just for you to show your culinary skills. it also comes with a fully operational elevator also for you.
          </span>
        </p>
          <ul className="features-header">
            <li className="features"><BedSingle/>1-Bed</li>
            <li className="features"><BedDouble/>2-Bed</li>
            <li className="features"><ArrowUpDown/>Lift</li>
          </ul>
          <div>
            <span>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4196.392560216896!2d3.343443775218818!3d6.506502323360179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8da52ad8052d%3A0xacc53edc13638929!2sCrestville%20Apartments%20Surulere!5e1!3m2!1sen!2sng!4v1728283215959!5m2!1sen!2sng" width="100%" height="450" className="border:0 mt-5" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </span>
          </div>
      </div>
      </div>
  </main>
  );
};

export default aster;
