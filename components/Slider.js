import React from "react";


export default function Slider() {
  return (
    <>
      
        <div className="text-left">
          <img src="images/esta.png" alt="Logoo-akia" style={{width: "100%", height: "450px", padding: "20px"}} />
          
        </div>
        <div className="slides-navigation">
        <a href="#" className="next">
          <i className="fa fa-angle-right" aria-hidden="true"></i>
        </a>
        <a href="#" className="prev">
          <i className="fa fa-angle-left" aria-hidden="true"></i>
        </a>
      </div>
      <CentroComer/>
       
      
      
    </>
  );
}
