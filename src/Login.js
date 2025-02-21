import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import { FaUser, FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const OnForgotPassword = () => {
    window.location.href = '/resetpassword';
  };

  const OnSignup = () => {
    window.location.href = '/Signup';
  };
  const OnLogin=()=>{

  }

  return (
    <div className="auth-wrapper">
      <Container
         className="d-flex justify-content-center align-items-center"
         style={{ minHeight: "100vh", overflowY: "auto" }}
      >
        <Row className="justify-content-center w-100">
          <Col md={6} lg={5}>
            <Card className="shadow-lg border-0 rounded">
              <CardBody>
                <h3 className="text-center mb-4">Signin</h3>
                <hr />
                <Form>
                  <FormGroup>
                    <Label>Username</Label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <FaUser />
                      </span>
                      <Input
                        type="text"
                        placeholder="email/phone"
                        className="password-input"
                      />
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <Label>Password</Label>
                    <div className="input-group">
                      <Input
                        type={passwordVisible ? "text" : "password"}
                        placeholder="******"
                        className="password-input"
                      />
                      <span
                        className="input-group-text"
                        onClick={() => setPasswordVisible(!passwordVisible)}
                        style={{ cursor: "pointer" }}
                      >
                        {passwordVisible ? <FaEye /> : <FaEyeSlash />}
                      </span>
                    </div>
                  </FormGroup>
                  <FormGroup check className="mb-3">
                    <Input
                      type="checkbox"
                      id="saveCredentials"
                      label="Save credentials."
                      className="password-input"
                    />
                    Save credentials.
                  </FormGroup>
                  <Button className="btn-success mb-4" color="success" block 
                  onClick={() => OnLogin()}
                  >
                    Signin
                  </Button>
                </Form>
                <div className="text-center mt-3">
                  <span>
                    Forgot password?{" "}
                    <strong
                      onClick={() => OnForgotPassword()}
                      style={{ cursor: "pointer" }}
                    >
                      Reset
                    </strong>
                  </span>
                </div>
                <div className="text-center mt-2">
                  <span>Don't have an account? </span>
                  <strong
                    onClick={() => OnSignup()}
                    style={{ cursor: "pointer" }}
                  >
                    Signup
                  </strong>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
