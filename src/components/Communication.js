// src/components/Communication.js
import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Card } from 'react-bootstrap';

function Communication() {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);
  const [location, setLocation] = useState('Downtown'); // Default location of the sender

  const donors = [
    { name: 'Mehfil Restaurant', location: 'Suraram', foodType: 'Fruits' },
    { name: 'Pooja Grocery Store', location: 'Dundigal', foodType: 'Vegetables' },
    { name: 'Pista House', location: 'Miyapur', foodType: 'Cooked Meals' },
  ];

  const needyMembers = [
    { name: 'Ramesh', location: 'Miyapur', need: 'Lunch' },
    { name: 'Suresh', location: 'Dundigal', need: 'Dinner' },
    { name: 'Raju', location: 'Nizampet', need: 'Breakfast' },
  ];

  const nearbyDonors = donors.filter((donor) => donor.location === location);
  const nearbyNeedy = needyMembers.filter((needy) => needy.location === location);

  const handleSend = () => {
    if (message.trim()) {
      setChat([...chat, { sender: 'You', text: message }]);
      setMessage('');
    }
  };

  return (
    <Container>
      <h2>Communication</h2>
      <Form>
        <Form.Group>
          <Form.Label>Your Location</Form.Label>
          <Form.Control
            as="select"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="Miyapur">Miyapur</option>
            <option value="Dundigal">Dundigal</option>
            <option value="Nizampet">Nizampet</option>
          </Form.Control>
        </Form.Group>
        <div
          style={{
            border: '1px solid #ccc',
            borderRadius: '5px',
            padding: '10px',
            height: '300px',
            overflowY: 'auto',
            marginBottom: '20px',
          }}
        >
          {chat.map((msg, index) => (
            <p key={index}>
              <strong>{msg.sender}:</strong> {msg.text}
            </p>
          ))}
        </div>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleSend} className="mt-2">
          Send
        </Button>
      </Form>

      <h3 className="mt-5">Nearby Donors</h3>
      <Row>
        {nearbyDonors.map((donor, index) => (
          <Col key={index} md={4} className="my-3">
            <Card>
              <Card.Body>
                <Card.Title>{donor.name}</Card.Title>
                <Card.Text>
                  Location: {donor.location}<br />
                  Food Type: {donor.foodType}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <h3 className="mt-5">Nearby Needy Members</h3>
      <Row>
        {nearbyNeedy.map((needy, index) => (
          <Col key={index} md={4} className="my-3">
            <Card>
              <Card.Body>
                <Card.Title>{needy.name}</Card.Title>
                <Card.Text>
                  Location: {needy.location}<br />
                  Need: {needy.need}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <footer className="bg-dark text-white text-center py-4">
        <p>&copy; 2025 Food Redistribution System. All Rights Reserved.</p>
        <p>
          <a href="/privacy-policy" className="text-white">Privacy Policy</a> | 
          <a href="/terms-of-service" className="text-white"> Terms of Service</a>
        </p>
        <p>Follow us on:
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white ml-2">Facebook</a> |
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white ml-2">Twitter</a> |
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white ml-2">Instagram</a>
        </p>
      </footer>
    </Container>
  );
}

export default Communication;
