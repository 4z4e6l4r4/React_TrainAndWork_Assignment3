import React, { useState } from "react";
import { Tabs, Tab, Form, Button } from "react-bootstrap";
import "./LoginRegister.css";

const LoginRegister = () => {
  const [loginFormData, setLoginFormData] = useState({
    loginEmail: "",
    loginPassword: "",
  });

  const [registerFormData, setRegisterFormData] = useState({
    registerName: "",
    registerEmail: "",
    registerPassword: "",
  });

  const handleLoginChange = (e) => {
    const { id, value } = e.target;
    setLoginFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleRegisterChange = (e) => {
    const { id, value } = e.target;
    setRegisterFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:7201/api/Auth/LoginUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: loginFormData.loginEmail,
          password: loginFormData.loginPassword,
        }),
      });

      if (response.ok) {
        console.log("Login successful");
        // Handle the success scenario as needed
      } else {
        console.error("Login failed");
        // Handle the failure scenario as needed
      }
    } catch (error) {
      console.error("Error during login API request", error);
      // Handle the error scenario as needed
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:7201/api/Auth/Register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: registerFormData.registerName,
          email: registerFormData.registerEmail,
          password: registerFormData.registerPassword,
        }),
      });

      if (response.ok) {
        console.log("Registration successful");
        // Handle the success scenario as needed
      } else {
        console.error("Registration failed");
        // Handle the failure scenario as needed
      }
    } catch (error) {
      console.error("Error during registration API request", error);
      // Handle the error scenario as needed
    }
  };

  return (
    <div className="container loginRegisterCss">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6">
          <Tabs defaultActiveKey="login" id="login-register-tabs">
            <Tab eventKey="login" title="Giriş">
              <Form onSubmit={handleLoginSubmit}>
                <Form.Group controlId="loginEmail">
                  <Form.Label style={{ marginTop: "10px" }}>Email</Form.Label>
                  <Form.Control
                    className="bodersSquare"
                    type="email"
                    placeholder="Email adresinizi girin"
                    value={loginFormData.loginEmail}
                    onChange={handleLoginChange}
                  />
                </Form.Group>

                <Form.Group controlId="loginPassword">
                  <Form.Label>Şifre</Form.Label>
                  <Form.Control
                    className="bodersSquare"
                    type="password"
                    placeholder="Şifrenizi girin"
                    value={loginFormData.loginPassword}
                    onChange={handleLoginChange}
                  />
                </Form.Group>

                <Button
                  className="buttonSquare"
                  style={{
                    backgroundColor: "#1ABEA3",
                    borderColor: "#1ABEA3",
                  }}
                  variant="success"
                  type="submit"
                >
                  Giriş Yap
                </Button>
              </Form>
            </Tab>

            <Tab eventKey="register" title="Kayıt">
              <Form onSubmit={handleRegisterSubmit}>
                <Form.Group controlId="registerName">
                  <Form.Label style={{ marginTop: "10px" }}>
                    Ad - Soyad
                  </Form.Label>
                  <Form.Control
                    className="bodersSquare"
                    type="text"
                    placeholder="Adınız Soyadınızı girin"
                    value={registerFormData.registerName}
                    onChange={handleRegisterChange}
                  />
                </Form.Group>

                <Form.Group controlId="registerEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    className="bodersSquare"
                    type="email"
                    placeholder="Email adresinizi girin"
                    value={registerFormData.registerEmail}
                    onChange={handleRegisterChange}
                  />
                </Form.Group>

                <Form.Group controlId="registerPassword">
                  <Form.Label>Şifre</Form.Label>
                  <Form.Control
                    className="bodersSquare"
                    type="password"
                    placeholder="Şifrenizi girin"
                    value={registerFormData.registerPassword}
                    onChange={handleRegisterChange}
                  />
                </Form.Group>

                <Button
                  className="buttonSquare"
                  style={{
                    backgroundColor: "#1ABEA3",
                    borderColor: "#1ABEA3",
                  }}
                  variant="success"
                  type="submit"
                >
                  Kayıt Ol
                </Button>
              </Form>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
