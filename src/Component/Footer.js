import React from 'react'
import "./Footer.css";

export default function Bottom() {
  return (
    <div>
          <div className="row1">
          <p className="col-sm" >
            &copy;{new Date().getFullYear()}FAQs | Privacy Policy | Terms & Conditions | Contact Us | About Us
            Version 5.2.3 | Copyright © 2011 tsrtconline.in | All rights reserved
          </p>
          <p>Our Official website - www.tsrtc.telangana.gov.in
             Our Parcel & Cargo website - www.tsrtcparcel.in
             Our Buspass website - online.tsrtcpass.in</p>

        </div>
    </div>
  )
}
