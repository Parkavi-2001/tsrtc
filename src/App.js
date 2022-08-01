
//import { Layout } from 'antd';
import './App.css';
import Footer from './Component/Footer';
import Navbar from './Component/Navbar';
import Payment from './Component/Payment';




function App() {
  return (
    <div className="page-container">
      <div className='content-wrap'>
      
      <Navbar/>
      <Payment/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
