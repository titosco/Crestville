import React from "react";
import ListingItem from "./ListingItem";

const listings = () => {
  return <div>
    <h1 className="text-2xl font-semibold font-header text-center mt-28 sm:mt-36 sm:text-4xl">Our Apartments</h1>
    <div className="flex flex-col mx-auto p-2 max-x-6xl gap-8 my-5">
        <ListingItem />
    </div>
  </div>;
};

export default listings;
