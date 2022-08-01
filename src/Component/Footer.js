import React from "react";
import "./Footer.css";

const Footer = () => {
  return(
    <div className="main-footer">
      <hr style={{
          marginTop : '-5.5%',
          borderColor: "#19bc9c",
          border: "5px solid #19bc9c"
          
     }}/>
      <div className="container">
        <div className="row">
          {/* column1 */}
          <div className="col">
            <h4 style={{textAlign:'center'}}>Popular Routes</h4>
            <ul className="list-unstyled">
              <li>Madurai - Hyderabad</li>
              <li>Chennai - Bangalore</li>
              <li>Hyderabad - Pune</li>
              <li>Hyderabad - Bhadrachalam</li>
              <li>Hyderabad - Shiridi</li>
           
            </ul>
          
          </div>
          {/* column2 */}
          <div className="col">
            <h4 style={{color: "red",textAlign:'center'}}>Book your tickets<h2>30 Days</h2>in advance!</h4>
          </div>
          {/* column3 */}
          <div className="col">
            <h4 style={{textAlign:'center'}}>News & Updates</h4>
            <h6 style={{color:'green',textAlign:'center',animationDuration:'3s'}}>30 DAYS BOOKING </h6>
            <p>Now you can book tickets for 30 days in advance.</p>
            <hr/>
            <h6 style={{color:'green',textAlign:'center'}}>IMPROVISED ONLINE BOOKING </h6>
               <li>Revamped Online booking page.</li>
               <li>Login is not mandatory, you can book now as Guest user! </li>
               <li>More options available for choosing service</li>
          </div>
        </div>
        <hr/>
        <div className="row1">
          <p className="col-sm" >
            &copy;{new Date().getFullYear()}FAQs | Privacy Policy | Terms & Conditions | Contact Us | About Us
            Version 5.2.3 | Copyright © 2011 tsrtconline.in | All rights reserved
          </p>

        </div>
      </div>
      
    </div>
  )
}
export default Footer;
