import { PhoneOutlined, DollarOutlined, CheckCircleOutlined, MailOutlined} from '@ant-design/icons';
import { Button,Form, Input } from 'antd';
import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import 'antd/dist/antd.css'; 
import './Payment.css';
import axios from 'axios';


// import {bus} from './bus.jpeg';
import {
  Select,
} from 'antd';

const { Option } = Select;


const Payment = () => {

  const [form] = Form.useForm();
  const [, forceUpdate] = useState({}); // To disable submit button at the beginning.
 
  const navigate = useNavigate();
  useEffect(() => {
    forceUpdate({});
  }, []);
  
  const handleSubmit = event => {
    event.preventDefault();

    // 👇️ redirect to /contacts
    navigate('/page');
  };
  const onFinish = (values) => {
    //console.log('Finish:', values);
    navigate('/Page',{state:{values}});
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
        <Option value="91">+91</Option>
      </Select>
    </Form.Item>
  );

  const InitPayment = async () => {

    
    const result = await axios.post("http://localhost:9091/paymentinterface/v1/initatePayment",{

      "amount":"1.00",
      
      "orderId":"Test-232345678093",
      
      "merchantReferenceId":"Test0134567891",
      
      "customerPhoneNo":"9900308631",
      
      "customerEmail":"dd1@dd.com"
      
      })
    .then((response)=>console.log(response));

    console.log(result)};

    
  
  
  return (
    <div style={{backgroundImage: "url('https://static.abhibus.com/ap_tg/ts/oprs-web/_assets/images/new/bg-home.jpg')",
    height:"500px",
    backgroundRepeat: "no-repeat",
   
    }}>
      
      <div className="search">
      
      <h2 style={{marginLeft:"20%",color:'#19bc9c'}}>Search for bus tickets!</h2><br/>
    <Form form={form} className="body" name="horizontal_login"  onFinish={onFinish} onSubmit={handleSubmit} >
    
      <Form.Item 
        name="Amount"
        label="Amount"
        style={{marginLeft:"20%",width:"30%"}}
        rules={[
          {
            required: true,
            message: 'Enter the amount',
          },
        ]}
      >
        <Input  prefix={<DollarOutlined className="site-form-item-icon" />} placeholder="Amount" 
         style={{width: "310%"}}/>
      </Form.Item>
      
      <Form.Item className='form'
        name="OrderID"
        label="Order ID"
        style={{marginLeft:"20%",width:"30%"}}
        rules={[
          {
            required: true,
            
          },
        ]}
      >
        <Input
          prefix={<CheckCircleOutlined  className="site-form-item-icon" />}
          placeholder="Order ID"
          style={{width: "320%"}}
        />
      </Form.Item>
      
      <Form.Item className='form'
        name="email"
        label="E-mail"
        style={{marginLeft:"20%",width:"30%"}}
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input prefix={<MailOutlined />}
        style={{width: "290%"}}/>
      </Form.Item>
      
      <Form.Item className='form'
        name="phone"
        label="Phone Number"
        style={{marginLeft:"20%",width:"30%"}}
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
        ]}
      >
     
        <Input
        prefix={<PhoneOutlined />}
          addonBefore={prefixSelector}
          style={{width: "560%"}}
        />
      </Form.Item>

      
      <Form.Item shouldUpdate>
        {() => (
          <Button
            type="primary"
            htmlType="submit"
            style={{marginLeft:"35%",width:"30%"}}
            
          >
            Submit
          </Button>
        )}
      </Form.Item>
    </Form>
   
    </div>
    </div>
   
  );
};
export default Payment;

        