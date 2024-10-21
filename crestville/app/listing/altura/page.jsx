import Image from "next/image";
import React from "react";
import home from "../../images/Altura.jpeg"
import { BedDouble, BedSingle, Dam, Dumbbell, MapPin, UserPen } from "lucide-react";
import { Button } from "@/components/ui/button";

const altura = () => {
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
        <span><strong>Altura Residence</strong> - #60,000 / Day</span>
        <span className="address"><MapPin /> Olufunk Atitebi Street, Julie Estate Ikeja, Lagos</span>
        <Button className="btn" ><UserPen/>Book Now</Button>
      </p>
      <p  className="text-slate-800">
        <span className="desc">
          <strong>Description - </strong>This time we bring to you bigger room, bigger gym, and bigger swimming pool. We also bring to you a luxury kitchen. The proximity of our aparment to the airport is 30mins!!!.  
        </span>
      </p>
        <ul className="features-header">
          <li className="features"><BedDouble/>2-Bed</li>
          <li className="features"><Dumbbell/>Gym</li>
          <li className="features"><Dam/>Pool</li>
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

export default altura;
