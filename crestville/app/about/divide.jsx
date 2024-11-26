import React from "react";

const divide = () => {
  return(
    <main className="py-4 flex relative lg:grid-cols-3">
      {/* grid 1 */}
     <div className="px-4 flex">
      <div className="p-3 text-center">
        <h1 className="text-primary">24</h1>
        <h5 className="font-bold font-header mt-3">Hours electricity</h5>
        <span className="text-sm leading-6">We provide 24 hours electricity, so you can work, relax all day long</span>
      </div>
      <hr className="text-primary w-px absolute h-full"/>
     </div>
     {/* grid 2 */}
     <div className="px-4 flex">
      <div className="p-3 text-center">
        <h1 className="text-primary">24</h1>
        <h5 className="font-bold font-header mt-3">Hours electricity</h5>
        <span className="text-sm leading-6">We provide 24 hours electricity, so you can work, relax all day long</span>
      </div>
      <hr className="text-primary w-px absolute h-full "/>
     </div>
     {/* grid 3 */}
     <div className="px-4 flex">
      <div className="p-3 text-center">
        <h1 className="text-primary">24</h1>
        <h5 className="font-bold font-header mt-3">Hours electricity</h5>
        <span className="text-sm leading-6">We provide 24 hours eletricity, so you can work, relax all day long</span>
      </div>
     </div>

    </main>
  );
};

export default divide;
