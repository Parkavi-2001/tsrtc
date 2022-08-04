import React from 'react';
import Bottom from './Bottom';
import Navbar from './Navbar';
import Payment from './Payment';
import Footer from './Footer';

function Home(){
    return (
        <div>
            
        <Navbar/>
        <Payment/>
        <Bottom/>
        <Footer/>
         </div>
    );
}

export default Home;