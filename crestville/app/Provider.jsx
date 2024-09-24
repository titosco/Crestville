import React from "react";
import Navigation from "./_components/Navigation";
import Footer from './_components/Footer';


const Provider = ({children}) => {
  return <div> 
    <Navigation/>

    <div className="mt-28 sm:mt-44 lg:mt-40">
      {children}
    </div>
    <Footer/>
    </div>;
};

export default Provider;
