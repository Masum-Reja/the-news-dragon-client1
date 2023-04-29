import React from "react";
import Button from "react-bootstrap/Button";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import QZone from "../QZone/QZone";
import "./bg.css";

const RightNav = () => {
  return (
    <div>
      <h4 className="my-4">Login with</h4>
      <Button className="mb-2 w-100" variant="outline-primary">
        <FaGoogle /> Login with Google
      </Button>
      <Button
        className=" w-100
          "
        variant="outline-secondary"
      >
        <FaGithub /> Login with Github
      </Button>

      <div>
        <h4 className="my-4">Find Us On</h4>

        <ListGroup>
          <ListGroup.Item>
            <FaFacebook className="text-info m-2"></FaFacebook> Facebook
          </ListGroup.Item>

          <ListGroup.Item>
            <FaTwitter className="text-info m-2"></FaTwitter> Twitter
          </ListGroup.Item>

          <ListGroup.Item>
            <FaInstagram className="text-danger m-2"></FaInstagram> Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>

      <div className=" R-bg text-white text-center">
        <h1 className="my-4">Create an Amazing Newspaper</h1>
        <h5 className="mb-4">
          Discover thousands of options, easy to customize layouts, one-click to
          import demo and much more.
        </h5>
        <button className="bg-danger text-white p-3 fw-bold">
          {" "}
          Learn More
        </button>
      </div>
    </div>
  );
};

export default RightNav;
