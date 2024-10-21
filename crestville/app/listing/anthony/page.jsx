import { Button } from "@/components/ui/button";
import {Gamepad2, MapPin, Martini, Store, UserPen } from "lucide-react";
import Image from "next/image";
import React from "react";
import home from '../../images/Altura.jpeg';

const anthony = () => {
  return (
    <main className="mb-28">
      <div>
        <div className="img-box">
            <Image
            alt=""
            src={home}
            className="img"
          />
          <span className="title">Crestville <span className="title-span">Apartments</span></span>
      </div>
      <div className="container">
        <p className="text-xl md:text-2xl font-semibold">
          <span><strong>Anthony Residence</strong> - #65,000 / Day</span>
          <span className="address"><MapPin /> Radiyalla Olusesi Street Lekki II Lagos, Lagos</span>
          <Button className="btn" ><UserPen/>Book Now</Button>
        </p>
        <p  className="text-slate-800">
          <span className="desc">
            <strong>Description - </strong>We bring to you the biggest crestville apartment!!. Which is both residential and commercial. With a much bigger swimming pool and gym than then our previous aparments. we are also having a mini-mart in this location. We have an open bar on the last floor. Our other features include a drycleaning service, an arcade room all at your service.  
          </span>
        </p>
          <ul className="features-header">
            <li className="features"><Store/>Mart</li>
            <li className="features"><Martini/>Bar</li>
            <li className="features"><Gamepad2/>Arcade</li>
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

export default anthony;
