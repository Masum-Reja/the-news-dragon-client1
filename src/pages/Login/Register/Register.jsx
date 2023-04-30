import React, { useContext } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { useState } from "react";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [accepted, setAccepted] = useState(false);

  const handleRegister = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const accept = form.accept.value;

    console.log(name, photo, email, password, accept);

    createUser(email, password)
      .then((result) => {
        // Signed in
        const createdUser = result.user;
        console.log(createdUser);
        //..
      })

      //Error
      .catch(error => {
        console.log(error);
        //..
      });

  }
  
  const handleAccepted = event => {
  setAccepted(event.target.checked);
  }

  return (
    <div>
      <Container className=" mx-auto w-25">
        <h3>Please Register</h3>

        <Form onSubmit={handleRegister}>
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
              onClick={handleAccepted}
              className="fw-semibold "
              type="checkbox"
              name="accept"
              label={
                <>
                  Accept <Link to="/terms">Terms & Conditions.</Link>{" "}
                </>
              }
            />
          </Form.Group>

          <Button variant="primary" disabled={!accepted} type="submit">
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
