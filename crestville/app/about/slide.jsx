"use client"
import React from "react";
import Image from "next/image";
import Slider from "react-slick";


import slide_image_1 from '../image_slider/IMG_1785.jpg';
import slide_image_2 from '../image_slider/IMG_1797.jpg';
import slide_image_3 from '../image_slider/IMG_1810.jpg';
import slide_image_4 from '../image_slider/IMG_1811.jpg';
import slide_image_5 from '../image_slider/IMG_1859.jpg';
import slide_image_6 from '../image_slider/IMG_1928.jpg';
import slide_image_7 from '../image_slider/IMG_1932.jpg';
import slide_image_8 from '../image_slider/IMG_1958.jpg';
import slide_image_9 from '../image_slider/IMG_1968.jpg';
import slide_image_10 from '../image_slider/IMG_1775.jpg';
import { ArrowLeft, ArrowRight } from "lucide-react";


const slide = () => {
        const settings = {
          dots: false,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          speed: 4000,
          autoplaySpeed: 4000,
          cssEase: "linear",
          arrows: false,
          responsive: [
            {
                breakpoint: 1540,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 4,
                  infinite: true,
                  dots: true
                }
              },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 870,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        };
  return (
    <Slider {...settings}
    >
        <div className="slide-cover">
            <div className="slides">
            <Image src={slide_image_1}
                    alt="slide_image"
                    className="slide-img"
             />
            </div>
        </div>
        <div className="slide-cover">
            <div className="slides">
            <Image src={slide_image_2}
                    alt="slide_image"
                    className="slide-img"
             />
            </div>
        </div>
        <div className="slide-cover">
            <div className="slides">
            <Image src={slide_image_3}
                    alt="slide_image"
                    className="slide-img"
             />
            </div>
        </div>
        <div className="slide-cover">
            <div className="slides">
            <Image src={slide_image_4}
                    alt="slide_image"
                    className="slide-img"
             />
            </div>
        </div>
        <div className="slide-cover">
            <div className="slides">
            <Image src={slide_image_5}
                    alt="slide_image"
                    className="slide-img"
             />
            </div>
        </div>
        <div className="slide-cover">
            <div className="slides">
            <Image src={slide_image_6}
                    alt="slide_image"
                    className="slide-img"
             />
            </div>
        </div>
        <div className="slide-cover">
            <div className="slides">
            <Image src={slide_image_7}
                    alt="slide_image"
                    className="slide-img"
             />
            </div>
        </div>
        <div className="slide-cover">
            <div className="slides">
            <Image src={slide_image_8}
                    alt="slide_image"
                    className="slide-img"
             />
            </div>
        </div>
        <div className="slide-cover">
            <div className="slides">
            <Image src={slide_image_9}
                    alt="slide_image"
                    className="slide-img"
             />
            </div>
        </div>
        <div className="slide-cover">
            <div className="slides">
            <Image src={slide_image_10}
                    alt="slide_image"
                    className="slide-img"
             />
            </div>
        </div>
    </Slider>
  );
};

export default slide;
