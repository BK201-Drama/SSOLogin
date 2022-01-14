import React from 'react'
import { Form, Input, Button } from 'antd';
import api from './api/login'

// 我们打算使用AES加密算法
const App = () => {
  const onFinish = async (value) => {
    if (value.username && value.idCardNumber) {
      const res = await api.Login(value)
      console.log("一个token凭证:", res.token)
      // cookie.save('username', value.username, { path: "/" })
      // cookie.save('idCardNumber', value.idCardNumber, { path: "/" })
      const url = window.location.href

      const arr = url.split('?callbackURL=')
      window.location.href = `${arr[1]}?${res.token}`
    }
  };

  const onFinishFailed = (errorInfo) => {
    alert('Failed: 请输入完整');
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
        initialValue={"郎岩"}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="idCardNumber"
        name="idCardNumber"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        initialValue={"235407195106112745"}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default App;
