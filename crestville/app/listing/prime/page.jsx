import Image from "next/image";
import React from "react";
import home from '../../images/prime_1.jpeg'
import { BedDouble, BedSingle, EthernetPort, MapPin, UserPen } from "lucide-react";

const prime = () => {
  return(
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
            <span><strong>Crestville Prime</strong> - #45,000 / Day</span>
            <span className="address"><MapPin />    14 Arikewuyo St, Ilupeju, Lagos 100253, Lagos</span>
            <Button className="btn" ><UserPen/>Book Now</Button>
          </p>
          <p  className="text-slate-800">
            <span className="desc">
              <strong>Description - </strong>Our 1-bedroom and 2-bedroom at prime comes with an open Kitchen, complete with high-quality duvets and bed softners that gaurantees your night to be good and restful. We offer 24-hours Uninterupted Light, a full Equipped Kitchens, Smart TV, DSTV, free Starlink and so much more, our Facility staffs are at your service for anything you may need. We provide a geneorously sized fridge, microwave and a wardrobe of cooking ingredients and untensils to accomodate all your culinary needs.
            </span>
          </p>
            <ul className="features-header">
              <li className="features"><BedSingle/>1-Bed</li>
              <li className="features"><BedDouble/>2-Bed</li>
              <li className="features"><EthernetPort/>Internet</li>
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

export default prime;
