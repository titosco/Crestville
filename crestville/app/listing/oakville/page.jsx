import Image from "next/image";
import React from "react";
import home from '../../images/OAKVILLE_DESIGN.jpg'
import { BedSingle, Dam, Dumbbell, MapPin, UserPen } from "lucide-react";
import { Button } from "@/components/ui/button";

const oakville = () => {
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
        <span><strong>Oakville Residence</strong> - #35,000 / Day</span>
        <span className="address"><MapPin /> 28 Abayomi St, Ikate, Lagos 101241, Lagos</span>
        <Button className="btn" ><UserPen/>Book Now</Button>
      </p>
      <p  className="text-slate-800">
        <span className="desc">
          <strong>Description - </strong>Our studio comes with a luxury open kicthen and 1-bedroom comes Kitchen, complete with high-quality duvets and bed softners that gaurantees your night to be good and restful. We offer 24-hours Uninterupted Light, a full Equipped Gym, a luxury swimming pool, DSTV, free Starlink and so much more, our Facility staffs are at your service for anything you may need. We provide a geneorously sized fridge, microwave and an open terrace just for you to enjoy the view .
        </span>
      </p>
        <ul className="features-header">
          <li className="features"><BedSingle/>1-Bed</li>
          <li className="features"><Dumbbell/>Gym</li>
          <li className="features"><Dam/>Pool</li>
        </ul>
        <div>
          <span>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d299.39035534653414!2d3.346789921383907!3d6.509915169470358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c248d237ebf%3A0x5b2f62823a7fef55!2s28%20Abayomi%20St%2C%20Ikate%2C%20Lagos%20101241%2C%20Lagos!5e1!3m2!1sen!2sng!4v1729532496142!5m2!1sen!2sng"  width="100%" height="450" className="border:0 mt-5" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </span>
        </div>
    </div>
    </div>
</main>
  );
};

export default oakville;
