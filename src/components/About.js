// src/components/About.js
import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();

  const handleHelpClick = () => {
    navigate('/help');
  };

  return (
    <div style={{ backgroundColor: '#fffde7', minHeight: '100vh', paddingTop: '60px' }}>
      <Container className="py-5">

        {/* Two-column introductory text */}
        <Row className="mb-5">
          <Col md={6}>
            <p>
              <strong>Food Bridge</strong> is a socially-driven digital platform created to reduce food
              waste and support food-insecure communities. Every day, restaurants, hotels, canteens, and
              households end up with surplus food that is still safe and healthy for consumption. Rather than
              letting this excess food go to waste, Food Bridge enables these donors to upload and share
              meal details with nearby people in need. This not only prevents waste but helps ensure that
              nutritious meals reach those who need them most.
            </p>
            <p>
              The platform is designed with ease-of-use in mind, allowing both tech-savvy users and those
              less familiar with digital tools to participate. Donors simply enter information such as dish
              name, quantity, location, and optionally add a photo. On the other side, recipients can search
              meals based on their locality, review available options, and select items they would like to
              collect. The platform handles everything from listing meals to confirmation of pickup.
            </p>
          </Col>

          <Col md={6}>
            <p>
              Food Bridge works in real-time, meaning as soon as a meal is added by a donor, it becomes
              visible to potential recipients in nearby areas. This minimizes the time window during which
              food might spoil, making the entire process both efficient and impactful. A small verification
              step, such as scanning a QR code, helps authenticate pickups and ensures a respectful
              exchange between donors and recipients. Over time, this builds trust and reliability within
              the system.
            </p>
            <p>
              We believe in the power of community. By using Food Bridge, you're not just reducing food
              waste — you're contributing to a more sustainable and caring society. Whether you’re an
              individual wanting to help, a restaurant with regular surplus, or someone in need of a
              wholesome meal, Food Bridge is here to connect you. Together, we can close the gap between
              abundance and need.
            </p>
          </Col>
        </Row>

        {/* Card with summary and help button */}
        <Card className="p-4 shadow-lg">
          <h2 className="mb-4 text-center">About Food Bridge</h2>
          <p>
            <strong>Food Bridge</strong> is a real-time food redistribution platform that connects
            food donors—such as restaurants, canteens, and individuals—with people in need. Our goal is
            to minimize food waste and help feed the hungry in local communities.
          </p>
          <p>
            Donors can easily upload surplus meals, providing details like the dish name, location,
            quantity, and a photo. Recipients can search for available food near them and request it
            through a simple and respectful process.
          </p>
          <p>
            Whether you're a <strong>donor</strong> or a <strong>recipient</strong>, Food Bridge makes
            the process seamless, transparent, and impactful. After selecting food, recipients go
            through a verification step (such as QR code scanning) to complete the process.
          </p>
          <p>
            If you need assistance or have questions about using Food Bridge, please visit our help
            section by clicking the button below.
          </p>

          <div className="text-center mt-4">
            <Button variant="info" onClick={handleHelpClick}>
              Go to Help Page
            </Button>
          </div>
        </Card>
        <footer className="bg-dark text-white text-center py-4">
          <p>&copy; 2025 Food Redistribution System. All Rights Reserved.</p>
          <p>
            <a href="/privacy-policy" className="text-white">Privacy Policy</a> |
            <a href="/terms-of-service" className="text-white"> Terms of Service</a>
          </p>
          <p>Follow us on:
            <a href="https://facebook.com" className="text-white mx-2">Facebook</a>|
            <a href="https://twitter.com" className="text-white mx-2">Twitter</a>|
            <a href="https://instagram.com" className="text-white mx-2">Instagram</a>
          </p>
        </footer>
      </Container>
    </div>
  );
}

export default About;
