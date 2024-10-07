import React from "react";
import Img1 from '../images/ilupeju_3.jpeg'
import Img2 from '../images/prime_2.jpeg'
import Img3 from '../images/oakville_1.png'
import Img4 from '../images/aster_1.jpeg'
import Img5 from '../images/Altura_1.jpeg'
import Image from "next/image";
import { ArrowUpDown, BedDouble, BedSingle, Dam, Dumbbell, EthernetPort, MapPin, SmilePlus } from "lucide-react";

import Link from "next/link";

const ListingItem = () => {
  return <div>
    {/* comtainer for each card */}
    <div className=" mt-4 grid relative md:grid-cols-2 md:gap-20 lg:grid-cols-3 lg:gap-10">
        {/* cards for the first 3 listings */}
        {/* card 1 */}
        <Link href={`../listing/ilupeju`}>
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
                                A classical apartment that brings comfort and gives you home away from home feeling
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
        </Link>
        {/* card 2 */}
        <Link href={`../listing/prime`}>
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
                                A luxury apartment made for the privacy of you and your guests!!
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
        </Link>
        {/* card 3 */}
        <div className="card">
            <div className="card-inner">
                <div className="card-face">
                    <Image 
                    alt=""
                    src={Img3}
                    className="img-front"
                    />
                    <div className="m-4">
                        <span className="card-title">
                        Oakville
                        </span>
                        <span className="card-address"><MapPin className="w-5 h-5"/>28 Abayomi St, Ikate, Lagos 101241</span>
                        <span className="card-desc">
                            A comfort apartment that comes with a gym and swimming pool just for you!!!
                        </span>
                        <span className="flex
                        mt-2 font-semibold">
                            <strong>#35,000 / Day</strong>
                        </span>
                        <ul className="features-header">
                        <li className="features"><BedSingle/>1-Bed</li>
                        <li className="features"><Dumbbell/>Gym</li>
                        <li className="features"><Dam/>Pool</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        {/* card 4 */}
        <div className="card">
            <div className="card-inner">
                <div className="card-face">
                    <Image 
                    alt=""
                    src={Img4}
                    className="img-front"
                    />
                    <div className="m-4">
                        <span className="card-title">
                        Aster
                        </span>
                        <span className="card-address"><MapPin className="w-5 h-5"/>Radiyalla Olusesi Street Lekki II Lagos</span>
                        <span className="card-desc">
                            The biggest 1-Bedroom and 2-Bedroom apartmnet on the island just for you and ur guests!!!
                        </span>
                        <span className="flex
                        mt-2 font-semibold">
                            <strong>#50,000 / Day</strong>
                        </span>
                        <ul className="features-header">
                        <li className="features"><BedSingle/>1-Bed</li>
                        <li className="features"><BedDouble/>2-Bedroom</li>
                        <li className="features"><ArrowUpDown/>Lift</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        {/* card 5 */}
        <div className="card">
            <div className="card-inner">
                <div className="card-face">
                    <Image 
                    alt=""
                    src={Img5}
                    className="img-front"
                    />
                    <div className="m-4">
                        <span className="card-title">
                        Altura
                        </span>
                        <span className="card-address"><MapPin className="w-5 h-5"/>Olufunk Atitebi Street, Julie Estate Ikeja</span>
                        <span className="card-desc">
                            A comfort apartment that comes with a gym and swimming pool just for you!!!
                        </span>
                        <span className="flex
                        mt-2 font-semibold">
                            <strong>#60,000 / Day</strong>
                        </span>
                        <ul className="features-header">
                        <li className="features"><BedSingle/>1-Bed</li>
                        <li className="features"><Dumbbell/>Gym</li>
                        <li className="features"><Dam/>Pool</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        {/* card 6 */}
        <div className="card">
            <div className="card-inner">
                <div className="card-face">
                    <Image 
                    alt=""
                    src={Img3}
                    className="img-front"
                    />
                    <div className="m-4">
                        <span className="card-title">
                        Anothny
                        </span>
                        <span className="card-address"><MapPin className="w-5 h-5"/>28 Abayomi St, Ikate, Lagos 101241</span>
                        <span className="card-desc">
                            A comfort apartment that comes with a gym and swimming pool just for you!!!
                        </span>
                        <span className="flex
                        mt-2 font-semibold">
                            <strong>#65,000 / Day</strong>
                        </span>
                        <ul className="features-header">
                        <li className="features"><BedSingle/>1-Bed</li>
                        <li className="features"><Dumbbell/>Gym</li>
                        <li className="features"><Dam/>Pool</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>;
};

export default ListingItem;
