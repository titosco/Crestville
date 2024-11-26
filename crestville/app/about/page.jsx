import Link from "next/link";
import React from "react";
import Slide from './slide';
import Divide from './divide'

const About = () => {
  return (
    <main className="mt-28 sm:mt-36">
      <div className="flex flex-col gap-6 p-8 px-3 max-w-6xl mx-auto font-header md:p-14 md:mx-16 lg:mx-8 lg:p-28 ">
        <h1 className=" font-bold text-3xl lg:text-6xl">Find you the <span className="text-primary">Perfect</span>
        <br />
        shortlet with ease
        </h1>
        <div className="text-gray-400 text-xs sm:text-sm">Crestville Apartment is the perfect apartment for you to live.
          <br />
          We have a wide range of properties for you to choose from.
        </div>
        <Link href={`/listings`}
              className="text-xs sm:text-sm text-primary font-bold hover:underline">
          Let&apos;s get started....
        </Link>
      </div>
      <Slide />
      <Divide/>
    </main>
  );
};

export default About;
