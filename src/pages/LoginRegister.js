import React, { Component } from "react";
import { Tabs, Tab, Form, Button } from "react-bootstrap";
import "./LoginRegister.css";

export default class LoginRegister extends Component {
  render() {
    return (
      <div className="container loginRegisterCss">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6">
            <Tabs defaultActiveKey="login" id="login-register-tabs">
              <Tab eventKey="login" title="Giriş">
                <Form>
                  <Form.Group controlId="loginEmail">
                    <Form.Label
                    style={{marginTop: "10px"}}
                    >Email</Form.Label>
                    <Form.Control
                      className="bodersSquare"
                      type="email"
                      placeholder="Email adresinizi girin"
                    />
                  </Form.Group>

                  <Form.Group controlId="loginPassword">
                    <Form.Label>Şifre</Form.Label>
                    <Form.Control
                      className="bodersSquare"
                      type="password"
                      placeholder="Şifrenizi girin"
                    />
                  </Form.Group>

                  <Button
                    className="buttonSquare"
                    style={{ backgroundColor: '#1ABEA3', borderColor: '#1ABEA3' }}
                    variant="success"
                    type="submit"
                  >
                    Giriş Yap
                  </Button>
                </Form>
              </Tab>

              <Tab eventKey="register" title="Kayıt">
                <Form>
                  <Form.Group controlId="registerName">
                    <Form.Label style={{ marginTop: "10px" }}>
                      Ad - Soyad
                    </Form.Label>
                    <Form.Control
                      className="bodersSquare"
                      type="text"
                      placeholder="Adınız Soyadınızı girin"
                    />
                  </Form.Group>

                  <Form.Group controlId="registerEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      className="bodersSquare"
                      type="email"
                      placeholder="Email adresinizi girin"
                    />
                  </Form.Group>

                  <Form.Group controlId="registerPassword">
                    <Form.Label>Şifre</Form.Label>
                    <Form.Control
                      className="bodersSquare"
                      type="password"
                      placeholder="Şifrenizi girin"
                    />
                  </Form.Group>

                  <Button
                    className="buttonSquare"
                    style={{ backgroundColor: '#1ABEA3', borderColor: '#1ABEA3' }}
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
  }
}
