import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
      return (
            <Container>
                  <h2>Terms and Conditions</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus ratione velit reprehenderit iste eius assumenda unde accusantium autem error, sapiente magnam dolore, mollitia libero, cumque perferendis necessitatibus vero veritatis minima!</p>
                  <p>Go back to <Link to="/register">Register</Link></p>
            </Container>
      );
};

export default Terms;