
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import axios from "axios";
import { Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";

function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = () => {
    const data = {
      email,
      password,
    };

    setLoading(true);

    axios
      .post("http://localhost:5555/users", data)
      .then((response) => {
        setLoading(false);

        if (response.status === 200) {
          console.log("User registered successfully");
          message.success("Registration successful");
          navigate("/login");
        } else {
          console.error("Registration failed with status:", response.status);
          message.error("Registration failed");
        }
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error during registration:", error);
        message.error("Error during registration");
      });
  };

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      style={{
        minHeight: "100vh",
        backgroundImage: `url('https://www.shutterstock.com/shutterstock/photos/491127931/display_1500/stock-photo-parking-491127931.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white", // Set text color to white for better visibility
        textShadow: "1px 1px 3px rgba(0,0,0,0.6)", // Add text shadow for better contrast
        padding: "20px", // Increase padding for better readability
      }}
    >
      <Form
        layout="vertical"
        className="login-form p-5"
        onFinish={handleRegister}
      >
        <Form.Item name="email" label="Email" rules={[{ required: true }]}>
          <Input
            value={email}
            type="text"
            style={{ marginBottom: "16px", color: "black" }} // Adjust input text color
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true }]}
        >
          <Input.Password
            value={password}
            style={{ marginBottom: "16px", color: "black" }} // Adjust input text color
            required
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          name="cpassword"
          label="Confirm Password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords do not match")
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          {loading ? "Registering..." : "Register"}
        </Button>

        <br />

        <Link to="/login" style={{ color: "red", fontWeight: "bold", fontSize: "1.2rem" }}>
          If you already have an account, Click Here to Login
        </Link>
      </Form>
    </Grid>
  );
}

export default SignUpPage;