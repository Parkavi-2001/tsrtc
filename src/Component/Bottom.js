import React from "react";
import "./Footer.css";

const Bottom = () => {
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
              <li>AL : RGIA to JBS (Via – LB Nagar, Uppal,Sangeeth)</li>
              <li>AM : RGIA to JBS (Via - Mehdipatnam,Banjara Hills,Begumpet)</li>
              <li>AC : RGIA to JBS (Via - Mehdipatnam,Secretariat,Paradise)</li>
              <li>AJ : RGIA MYP X Road (Via - Gachibowli,Hitech City, JNTU)</li>
              <li>AB : RGIA TO BHEL (Via - Kondapur, Allwyn X Road,Lingampally)</li>
              <li>AN : RGIA TO NAMPALLY (Via - Aramgarh, MGBS,KOTI)</li>
           
            </ul>
          
          </div>
          {/* column2 */}
          <div className="col">
            <h4 style={{color: "red",textAlign:'center', marginTop:'20%'}}>Book your tickets<h2>30 Days</h2>in advance!</h4>
          </div>
          {/* column3 */}
          <div className="col">
            <h4 style={{textAlign:'center'}}>News & Updates</h4>
            <div className="move">
            <h6 style={{color:'green',textAlign:'center',animationDuration:'3s'}}>30 DAYS BOOKING </h6>
            <p>Now you can book tickets for 30 days in advance.</p>
            <hr/>
            <h6 style={{color:'green',textAlign:'center'}}>IMPROVISED ONLINE BOOKING </h6>
               <li>Revamped Online booking page.</li>
               <li>Login is not mandatory, you can book now as Guest user! </li>
               <li>More options available for choosing service</li>
            </div>
          </div>
        </div>
        <hr/>
      
      </div>
      
    </div>
  )
}
export default Bottom;
