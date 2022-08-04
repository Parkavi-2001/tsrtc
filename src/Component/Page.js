//import { Col, Row } from 'antd';
import React from 'react';
import 'antd/dist/antd.css'; 
import {useLocation} from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer'



function Page(){
  const location = useLocation();
  console.log(location.state);
  return (
    <div>
    <Navbar/>
    <div style={{width: '100%',height: '75.6vh',display: 'flex',justifyContent: 'center',alignItems: 'center',marginTop: '-15%'}}>
      
      <table style={{border: '3px solid forestgreen',width: '700px',height: '70px',textAlign:'center'}}>
      <tr>
      <th style={{borderBottom: '2px solid black'}}>Amount</th>
      <th style={{borderBottom: '2px solid black'}}>Order ID</th>
      <th style={{borderBottom: '2px solid black'}}>Email</th>
      <th style={{borderBottom: '2px solid black'}}>Phone Number</th>
      </tr>
      <tr>
      <td style={{textAlign: 'center'}}>{location.state.values.Amount}</td>
      <td style={{textAlign: 'center'}}>{location.state.values.OrderID}</td>
      <td style={{textAlign: 'center'}}>{location.state.values.email}</td>
      <td style={{textAlign: 'center'}}>{location.state.values.phone}</td>
      </tr>
      
      </table>
    </div>
    <div style={{marginTop:'15%'}}>
    <Footer />
    </div>
    </div>
  );
  }

export default Page;

