
// frontend/src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Form, Input, Button, message } from 'antd';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setLoading(true);
    axios.post('http://localhost:5555/users/g', { email, password })
      .then(response => {
        setLoading(false);
        message.success('Login successful');
        navigate('/home'); // Redirect to home page or any other page
      })
      .catch(error => {
        setLoading(false);
        message.error('Login failed: ' + error.response?.data?.message || 'Internal Server Error');
      });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: `url('https://www.shutterstock.com/shutterstock/photos/491127931/display_1500/stock-photo-parking-491127931.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px", // Increased padding for better readability
      }}
    >
      <Form
        layout="vertical"
        onFinish={handleLogin}
        style={{ maxWidth: "400px", width: "100%", backgroundColor: "rgba(255, 255, 255, 0.8)", padding: "20px", borderRadius: "8px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}
      >
        <Form.Item label="Email" required>
          <Input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item label="Password" required>
          <Input.Password
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
          />
        </Form.Item>
        <Button type="primary" htmlType="submit" loading={loading} style={{ width: "100%" }}>
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;