import React from 'react'
import Navbar from './Navbar';
import Bottom from './Bottom';
import Footer from './Footer';
import {Link,NavLink} from 'react-router-dom';
import '../AppRoutes';


function Main() {
  return (
    <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <img
                    src="./tsrtclogo.png"
                    alt="car"
                style={{marginTop: '-11%'}}/>
                <Link
                    className="navbar-item"
                    activeClassName="is-active"
                    to="/payment"
                    exact
                >
                    Payment
                </Link>
               
  {/* <Link className="navbar-brand" to='./Payment'>Navbar</Link> */}
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

</nav>
<div style={{backgroundImage: "url('https://static.abhibus.com/ap_tg/ts/oprs-web/_assets/images/new/bg-home.jpg')",
    height:"500px",
    backgroundRepeat: "no-repeat",
   
    }}>
      </div>
<div s>        <Bottom /></div>

        <Footer/>
    </div>
  )
}

export default Main