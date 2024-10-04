import React from "react";
import Image from 'next/image';
import home from '../../images/ilupeju_3.jpeg'
import { BedDouble, BedSingle, MapPin, SmilePlus, UserPen,  } from "lucide-react";
import { Button } from "@/components/ui/button";

const ilupeju = () => {
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
            <span><strong>Crestville illupeju</strong> - #45,000 / Day</span>
            <span className="address"><MapPin />    14 Arikewuyo St, Ilupeju, Lagos 100253, Lagos</span>
            <Button className="btn" ><UserPen/>Book Now</Button>
          </p>
          <p  className="text-slate-800">
            <span className="desc">
              <strong>Description - </strong>Our 1-bedroom and 2-bedroom at ilupeju comes with a comfortable bed, complete with high-quality duvets that gaurantees your night to be good and restful. We offer 24-hours Uninterupted Light, a full Equipped Kitchens, Smart TV, DSTV, and so much more, our Facility staffs are at your service for anything you may need. We offer a prefect blend of  tranqility and luxury you cozy and relaxed in an environment built for your everyday living experience
            </span>
          </p>
            <ul className="features-header">
              <li className="features"><BedSingle/>1-Bed</li>
              <li className="features"><BedDouble/>2-Bed</li>
              <li className="features"><SmilePlus/>Spa</li>
            </ul>
            <div>
              <span>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3963.902952421224!2d3.3617645!3d6.5339396!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d60e112afdf%3A0x75ebca085fea5b98!2sCrestville%20Apartments%20Lagos%20-%20Best%20Shortlet%20in%20Lagos%20Mainland!5e0!3m2!1sen!2sng!4v1727159959810!5m2!1sen!2sng" width="100%" height="450" className="border:0 mt-5" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </span>
            </div>
        </div>
        </div>
    </main>
  );
};

export default ilupeju;
