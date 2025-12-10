import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';

function Help() {
  return (
    <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh', paddingTop: '60px' }}>
      <Container className="py-5">
        <Card className="p-4 shadow-lg">
          <h2 className="mb-4 text-center">Help & Support</h2>
          <p className="text-center" style={{ fontSize: '1.1rem' }}>
            Welcome to the Food Bridge help center. Whether you're donating food or receiving it,
            we're here to guide you every step of the way. Find answers to common questions and get the
            support you need.
          </p>

          <Row className="mt-4">
            <Col md={6} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body>
                  <Card.Title>👤 Signing Up</Card.Title>
                  <Card.Text>
                    When signing up, select whether you’re a <strong>Donor</strong> or a <strong>Recipient</strong>.
                    Your role determines how you'll interact with the platform. Donors can share food, while recipients
                    can browse and claim it.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body>
                  <Card.Title>🍽️ For Donors</Card.Title>
                  <Card.Text>
                    Click the <strong>"Add Dish"</strong> button to provide food details such as dish name, photo,
                    location, price, and quantity. Once submitted, recipients in your area can view your listing.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body>
                  <Card.Title>🔍 For Recipients</Card.Title>
                  <Card.Text>
                    Use the search bar to find food available near your place. Add dishes to your cart, then
                    proceed to verify your request using a QR code. Once verified, you can collect the food.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body>
                  <Card.Title>💳 Payment & Verification</Card.Title>
                  <Card.Text>
                    Though the meals are free or very affordable, recipients are asked to scan a QR code
                    to verify the request. This ensures fairness and accountability in the distribution process.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <hr />

          <div className="text-center mt-4">
            <h5>📧 Still need help?</h5>
            <p>
              If you're experiencing any issues or have questions not covered here, feel free to reach out to our team at:
            </p>
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:support@foodbridge.org">support@foodbridge.org</a>
            </p>
            <p className="text-muted">We usually respond within 24 hours.</p>
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

export default Help;
