import React from "react";
import {Routes, Route} from 'react-router-dom';
import Home from "./Component/Home";
import Main from "./Component/Main";
import Page from "./Component/Page";
import Payment from "./Component/Payment";


function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Main />} />
            
            <Route path="/Page" element={<Page />} />
            <Route path="/payment" element={<Home />} />
            
        </Routes>
    );
}


export default AppRoutes;
