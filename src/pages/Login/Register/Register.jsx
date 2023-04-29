import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <Container className=" mx-auto w-25">
        <h3>Please Register</h3>

        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="fw-bold ">Your Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="fw-bold ">Photo URL</Form.Label>
            <Form.Control
              type="text"
              name="photo"
              placeholder="Select your photo"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="fw-bold ">Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="fw-bold ">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              className="fw-semibold "
              type="checkbox"
              name="accept"
              label="Accept Terms & Conditions."
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Register
          </Button>
          <br />

          <Form.Text className="text-secondary">
            Already Have an Account? <Link to="/login">Login</Link>
          </Form.Text>

          <Form.Text className="text-success"></Form.Text>

          <Form.Text className="text-danger"></Form.Text>
        </Form>
      </Container>
    </div>
  );
};

export default Register;
