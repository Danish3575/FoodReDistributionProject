import React, { useState } from 'react';
import { Carousel, Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [isSignup, setIsSignup] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('donor');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsSignup(!isSignup);
    setError('');
    setSuccess('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const hashedPassword = btoa(password); // Simulate password hashing
    const storageKey = role === 'donor' ? 'donorUsers' : 'recipientUsers';
    const storedUsers = JSON.parse(localStorage.getItem(storageKey)) || [];

    if (isSignup) {
      const userExists = storedUsers.some((user) => user.email === email);
      if (userExists) {
        setError('User already exists. Please log in.');
        return;
      }

      const newUser = {
        name: fullName,
        email,
        password: hashedPassword,
      };

      storedUsers.push(newUser);
      localStorage.setItem(storageKey, JSON.stringify(storedUsers));

      setSuccess(`Signup successful as ${role}. Please login.`);
      setIsSignup(false);
      setFullName('');
      setEmail('');
      setPassword('');
    } else {
      const user = storedUsers.find((u) => u.email === email);
      if (!user) {
        setError('No account found. Please sign up.');
        return;
      }

      if (user.password === hashedPassword) {
        if (role === 'donor') {
          navigate('/donors');
        } else {
          navigate('/needy');
        }
      } else {
        setError('Invalid credentials. Please try again.');
      }
    }
  };

  return (
    <div style={{ backgroundColor: '#e6f7ff', minHeight: '100vh', paddingTop: '20px' }}>
      <Container>
        <h1 className="text-center my-5">Welcome to Food Bridge</h1>

        <div className="marquee-container">
          <div className="marquee-text">
            Food Bridge data refreshes every 24 hours to ensure fairness and accuracy for all users.
          </div>
        </div>

        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src="/foodbridge.jpg" alt="Food Wastage" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="/food1.jpg" alt="Help Needy" />
          </Carousel.Item>
        </Carousel>

        <Row className="my-5">
          <Col md={6}>
            <Card>
              <Card.Body>
                <h4 className="mb-3 text-center">{isSignup ? 'Sign Up' : 'Login'}</h4>
                {error && <Alert variant="danger">{error}</Alert>}
                {success && <Alert variant="success">{success}</Alert>}
                <Form onSubmit={handleSubmit}>
                  {isSignup && (
                    <Form.Group className="mb-3">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your full name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                      />
                    </Form.Group>
                  )}
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Role</Form.Label>
                    <Form.Select value={role} onChange={(e) => setRole(e.target.value)}>
                      <option value="donor">Donor</option>
                      <option value="recipient">Recipient</option>
                    </Form.Select>
                  </Form.Group>
                  <Button variant="primary" type="submit" className="w-100">
                    {isSignup ? 'Sign Up' : 'Login'}
                  </Button>
                </Form>
                <div className="text-center mt-3">
                  <Button variant="link" onClick={handleToggle}>
                    {isSignup ? 'Already have an account? Login' : 'New user? Sign up'}
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <div style={{ padding: '20px', backgroundColor: '#fffce0', borderRadius: '5px' }}>
              <h5>About Food Bridge</h5>
              <p>
                Food Bridge is a humanitarian initiative focused on reducing food waste and feeding the hungry.
                It connects food donors with recipients in real-time, making food redistribution quick and efficient.
                We believe no one should go to bed hungry when surplus food exists.
                Our platform allows donors to list available dishes and recipients to find them easily.
                With Food Bridge, you can make a difference in your community.
                Whether you are an individual, restaurant, or organization, your contribution matters.
                Every dish you donate helps reduce hunger and improves sustainability.
                Food Bridge empowers the needy by providing them access to wholesome meals.
                Join our mission to combat food insecurity and foster compassion.
                Together, we can build a bridge between abundance and need.
              </p>
            </div>
          </Col>
        </Row>

        <Row className="my-5">
          <Col md={4}>
            <Card style={{ backgroundColor: '#fffbe6' }}>
              <Card.Body>
                <Card.Title>How It Works</Card.Title>
                <Card.Text>
                  The Food Redistribution System connects surplus food from donors to people in need.
                  Donors can post their available dishes, and recipients can search by location.
                  The process is quick, secure, and hassle-free.
                  Real-time updates help avoid waste and ensure timely pickups.
                  This ensures everyone gets access to fresh food.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ backgroundColor: '#fffbe6' }}>
              <Card.Body>
                <Card.Title>Get Involved</Card.Title>
                <Card.Text>
                  Anyone can make a difference—sign up as a donor or volunteer to spread awareness.
                  Organize food drives or partner with local eateries to donate excess food.
                  Even small actions lead to big changes.
                  Help us reach more people through your community networks.
                  Your support can feed a hungry soul today.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ backgroundColor: '#fffbe6' }}>
              <Card.Body>
                <Card.Title>Our Impact</Card.Title>
                <Card.Text>
                  We’ve helped redistribute thousands of meals to those in need.
                  Our efforts have significantly reduced food waste and environmental burden.
                  With the help of donors like you, we’re expanding every day.
                  Every meal served through our platform brings hope and joy.
                  Be part of a growing movement to end hunger.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

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

export default Home;
