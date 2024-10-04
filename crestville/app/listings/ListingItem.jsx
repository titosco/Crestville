import React from "react";
import Img1 from '../images/ilupeju_3.jpeg'
import Img2 from '../images/prime_1.jpeg'
import Image from "next/image";
import { BedDouble, BedSingle, EthernetPort, MapPin, SmilePlus } from "lucide-react";

const ListingItem = () => {
  return <div>
    {/* comtainer for each card */}
    <div className=" mt-4 grid relative lg:grid-cols-3 gap-10">
        {/* cards for the first 3 listings */}
        {/* card 1 */}
        <div className="card">
            <div className="card-inner">
                <div className="card-face">
                    <Image 
                    alt=""
                    src={Img1}
                    className="img-front"
                    />
                    <div className="m-4">
                        <span className="card-title">
                        Crestville Illupeju
                        </span>
                        <span className="card-address"><MapPin className="w-5 h-5"/>    14 Arikewuyo St, Ilupeju, Lagos 100253</span>
                        <span className="card-desc">
                            A classical apartment that brings comfort that gives you home away from home feeling
                        </span>
                        <span className="flex
                        mt-2 font-semibold">
                            <strong>#40,000 / Day</strong>
                        </span>
                        <ul className="features-header">
                        <li className="features"><BedSingle/>1-Bed</li>
                        <li className="features"><BedDouble/>2-Bed</li>
                        <li className="features"><SmilePlus/>Spa</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        {/* card 2 */}
        <div className="card">
            <div className="card-inner">
                <div className="card-face">
                    <Image 
                    alt=""
                    src={Img2}
                    className="img-front"
                    />
                    <div className="m-4">
                        <span className="card-title">
                        Crestville Prime
                        </span>
                        <span className="card-address"><MapPin className="w-5 h-5"/>18 Memudu Aremu St, Ikate, Lagos 101283</span>
                        <span className="card-desc">
                            A luxury apartment made for the privancy of you and your guests!!
                        </span>
                        <span className="flex
                        mt-2 font-semibold">
                            <strong>#45,000 / Day</strong>
                        </span>
                        <ul className="features-header">
                        <li className="features"><BedSingle/>1-Bed</li>
                        <li className="features"><BedDouble/>2-Bed</li>
                        <li className="features"><EthernetPort/>Internet</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>;
};

export default ListingItem;
