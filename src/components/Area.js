import React from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Area() {
  const navigate = useNavigate();

  const descriptionPart1 = `Food insecurity is a major challenge in various regions, especially in urban
  and semi-urban areas where economic disparity is significant. Identifying and focusing on areas
  with a high concentration of needy individuals helps streamline the process of food redistribution,
  ensuring that surplus food reaches the people who need it the most. Targeting these zones allows
  organizations to efficiently allocate resources and minimize food waste.`;
  
  const descriptionPart2 = `These high-need areas often include vulnerable populations such as low-income
  families, elderly people, daily wage workers, and children facing food scarcity regularly.
  By understanding the unique socio-economic challenges of these regions, food redistribution
  platforms like Food Bridge can customize their approach to maximize impact and foster sustainable
  community support systems. The goal is to create a network that effectively bridges the gap
  between surplus food and those experiencing hunger.`;

  const handleAboutClick = () => {
    navigate('/about');
  };

  return (
    <div style={{ backgroundColor: '#fff7e6', minHeight: '100vh', paddingTop: '60px', paddingBottom: '40px' }}>
      <Container>
        <h2 className="text-center my-5" style={{ color: '#6b4f1d' }}>
          Areas with High Needy Probability
        </h2>

        {/* Two-column Description above the card */}
        <Row className="mb-4">
          <Col md={6} style={{ color: '#6b4f1d', lineHeight: '1.6' }}>
            {descriptionPart1}
          </Col>
          <Col md={6} style={{ color: '#6b4f1d', lineHeight: '1.6' }}>
            {descriptionPart2}
          </Col>
        </Row>

        {/* Information Section with detailed description */}
        <Row className="my-5">
          <Col>
            <Card style={{ backgroundColor: '#fff3cd', border: '1px solid #ffeeba' }} className="shadow-sm">
              <Card.Body>
                <Card.Title style={{ color: '#856404' }}>Understanding High-Need Areas</Card.Title>
                <Card.Text style={{ color: '#6b4f1d', lineHeight: '1.6' }}>
                  Identifying regions with a high concentration of needy individuals is vital to maximize the
                  impact of food redistribution efforts. Areas like Miyapur, Dundigal, and Nizampet have
                  consistently shown significant demand for food assistance due to socio-economic factors,
                  population density, and limited access to affordable nutritious meals. Targeting these
                  locations allows organizations and volunteers to allocate resources efficiently, ensuring
                  that surplus food reaches those who genuinely need it.  
                  <br /><br />
                  These areas often have a mix of vulnerable populations, including low-income families,
                  elderly individuals, daily wage workers, and children who face food insecurity regularly.
                  The economic challenges faced in these communities often result in undernutrition and
                  health issues that can be mitigated by timely food support. Food Bridge prioritizes these
                  zones to reduce hunger and improve the overall well-being of residents.
                  <br /><br />
                  By understanding the unique needs and challenges of each high-need area, we can customize
                  our approach—from the type of food donated to the timing of distribution—to ensure optimal
                  benefit. Moreover, community engagement and awareness campaigns in these regions help
                  foster collaboration among donors, volunteers, and recipients, making food redistribution
                  a collective effort.
                  <br /><br />
                  Continuous monitoring and data collection further enable us to identify emerging areas of
                  need and adapt our strategies accordingly. This proactive approach helps prevent food
                  shortages before they escalate into crises. With the support of donors and volunteers,
                  Food Bridge strives to create a sustainable network that bridges the gap between surplus
                  food and those who need it most.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* About Button */}
        <div className="text-center mb-4">
          <Button variant="warning" onClick={handleAboutClick}>
            About Food Bridge
          </Button>
        </div>

        {/* Footer Section */}
        <footer className="bg-dark text-white text-center py-4 mt-5">
          <p>&copy; 2025 Food Redistribution System. All Rights Reserved.</p>
          <p>
            <a href="/privacy-policy" className="text-white">Privacy Policy</a> |{' '}
            <a href="/terms-of-service" className="text-white">Terms of Service</a>
          </p>
          <p>
            Follow us on:
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white ml-2">Facebook</a> |
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white ml-2">Twitter</a> |
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white ml-2">Instagram</a>
          </p>
        </footer>
      </Container>
    </div>
  );
}

export default Area;
