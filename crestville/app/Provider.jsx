import React from "react";
import Navigation from "./_components/Navigation";

const Provider = ({children}) => {
  return <div> 
    <Navigation/>
    {children}
    </div>;
};

export default Provider;
