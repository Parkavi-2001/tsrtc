import { EnvironmentOutlined,PhoneOutlined, DollarOutlined, CheckCircleOutlined, MailOutlined} from '@ant-design/icons';
import { Button, Card, Form, Input } from 'antd';
import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css'; 
import './Payment.css';
// import {bus} from './bus.jpeg';
import {
  AutoComplete,
  Cascader,
  Checkbox,
  Col,
  InputNumber,
  Row,
  Select,
} from 'antd';
const { Option } = Select;


const Payment = () => {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({}); // To disable submit button at the beginning.

  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = (values) => {
    console.log('Finish:', values);
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

  return (
    <div style={{backgroundImage: "url('https://static.abhibus.com/ap_tg/ts/oprs-web/_assets/images/new/bg-home.jpg')",
    height:"500px",
    backgroundRepeat: "no-repeat",
   
    }}>
      
      <div className="search">
      
      <h2 style={{marginLeft:"20%",color:'#19bc9c'}}>Search for bus tickets!</h2><br/>
    <Form form={form} className="body" name="horizontal_login"  onFinish={onFinish}>
      
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
        name="Order ID"
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
            disabled={
              !form.isFieldsTouched(true) ||
              !!form.getFieldsError().filter(({ errors }) => errors.length).length
            }
          >
            Search for availability
          </Button>
        )}
      </Form.Item>
    </Form>
   
    </div>
    </div>
   
  );
};
export default Payment;

        