import React from "react";
import Navigation from "./_components/Navigation";
import Footer from './_components/Footer';


const Provider = ({children}) => {
  return <div> 
    <Navigation/>

    <div className="mt-14 sm:mt-20 lg:mt-24 font-body">
      {children}
    </div>
    <Footer/>
    </div>;
};

export default Provider;
