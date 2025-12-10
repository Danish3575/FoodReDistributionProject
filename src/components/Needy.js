import React, { useState } from 'react';
import {
  Card,
  Button,
  Row,
  Col,
  Container,
  Form,
  Modal,
  ListGroup,
} from 'react-bootstrap';
import backgroundImage from '../assets/background1.jpg';
import '../styles/Needy.css';
import paneerImg from '../assets/paneer1.jpg';
import biryaniImg from '../assets/biryani1.jpg';
import saladImg from '../assets/salad.jpg';
import dosaImg from '../assets/dosa.jpg';
import samosaImg from '../assets/samosa.jpg';
import friedriceImg from '../assets/friedrice.jpg';
import scannerImg from '../assets/scanner.png';

function Needy() {
  const donorDishes = [
    {
      id: 1,
      place: 'Miyapur',
      restaurant: 'Mehfil',
      price: 120,
      quantity: '10 meals',
      photo: paneerImg,
      dishName: 'Paneer Butter Masala',
    },
    {
      id: 2,
      place: 'Nizampet',
      restaurant: 'Pista House',
      price: 150,
      quantity: '15 meals',
      photo: biryaniImg,
      dishName: 'Chicken Biryani',
    },
    {
      id: 3,
      place: 'Kukatpally',
      restaurant: 'Green Leaf',
      price: 70,
      quantity: '12 meals',
      photo: saladImg,
      dishName: 'Veg Salad',
    },
    {
      id: 4,
      place: 'Bachupally',
      restaurant: 'Sunrise',
      price: 20,
      quantity: '8 meals',
      photo: dosaImg,
      dishName: 'Masala Dosa',
    },
    {
      id: 5,
      place: 'Pragathinagar',
      restaurant: 'Taste Buds',
      price: 15,
      quantity: '25 snacks',
      photo: samosaImg,
      dishName: 'Samosa',
    },
    {
      id: 6,
      place: 'Ameerpet',
      restaurant: 'City Bites',
      price: 90,
      quantity: '10 meals',
      photo: friedriceImg,
      dishName: 'Veg Fried Rice',
    },
    {
      id: 7,
      place: 'Madhapu',
      restaurantName: 'Mehfil',
      restaurantCode: 'MEH123',
      price: '65',
      quantity: '4 meals',
      imageUrl: paneerImg,
      dishName: 'Paneer Butter Masala',
      image: null, // no file object for static images
    },
    {
      id: 8,
      place: 'Kukatpally',
      restaurantName: 'Pista House',
      restaurantCode: 'PIS456',
      price: '190',
      quantity: '5 meals',
      imageUrl: biryaniImg,
      dishName: 'Chicken Biryani',
      image: null,
    },
    {
      id: 9,
      place: 'Ameerpet',
      restaurantName: 'Green Leaf',
      restaurantCode: 'GLC789',
      price: '190',
      quantity: '8 meals',
      imageUrl: saladImg,
      dishName: 'Veg Salad',
      image: null,
    },
    {
      id: 10,
      place: 'Pragathinagar',
      restaurantName: 'Sunrise',
      restaurantCode: 'SUN321',
      price: '25',
      quantity: '2 meals',
      imageUrl: dosaImg,
      dishName: 'Masala Dosa',
      image: null,
    },
    {
      id: 11,
      place: 'Bachupally',
      restaurantName: 'Taste Buds',
      restaurantCode: 'TB654',
      price: '20',
      quantity: '10 snacks',
      imageUrl: samosaImg,
      dishName: 'Samosa',
      image: null,
    },
    {
      id: 12,
      place: 'Dundigal',
      restaurantName: 'City Bites',
      restaurantCode: 'CB987',
      price: '180',
      quantity: '20 meals',
      imageUrl: friedriceImg,
      dishName: 'Veg Fried Rice',
      image: null,
    },
  ];

  const [searchPlace, setSearchPlace] = useState('');
  const [filteredDishes, setFilteredDishes] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCartModal, setShowCartModal] = useState(false);
  const [showScanner, setShowScanner] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    const trimmedPlace = searchPlace.trim().toLowerCase();
    if (!trimmedPlace) {
      setFilteredDishes([]);
      return;
    }
    const filtered = donorDishes.filter(
      (dish) => dish.place.toLowerCase() === trimmedPlace
    );
    setFilteredDishes(filtered);
  };

  const handleAddToCart = (dish) => {
    if (!cart.find((item) => item.id === dish.id)) {
      setCart([...cart, dish]);
    }
  };

  const handleRemoveFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  const handlePayNow = () => {
    setShowCartModal(false);
    setShowScanner(true);
  };

  const handleScannerCancel = () => {
    setShowScanner(false);
    setShowCartModal(true);
  };

  const onPaymentCompleteClick = () => {
    setShowScanner(false);
    setCart([]);
    setFilteredDishes([]);
    setSearchPlace('');
    alert('Payment successful! You can collect your food !!');
  };

  return (
    <div
      className="needy-background"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        paddingTop: '60px',
      }}
    >
      <Container>
        <h2 className="text-black mb-4">Find Donor Dishes by Place</h2>

        <Form
          onSubmit={handleSearch}
          className="mb-4 d-flex align-items-center gap-2"
        >
          <Form.Group controlId="placeInput" className="flex-grow-1 mb-0">
            <Form.Control
              type="text"
              placeholder="Enter your place (e.g., Miyapur)"
              value={searchPlace}
              onChange={(e) => setSearchPlace(e.target.value)}
              required
            />
          </Form.Group>
          <Button type="submit" variant="primary">
            Search
          </Button>
          <Button
            variant="warning"
            onClick={() => setShowCartModal(true)}
            title={`Cart (${cart.length})`}
          >
            🛒 Cart ({cart.length})
          </Button>
        </Form>

        <Row>
          {filteredDishes.length > 0 ? (
            filteredDishes.map((dish) => (
              <Col key={dish.id} md={4} className="mb-3">
                <Card>
                  {dish.photo && (
                    <Card.Img
                      variant="top"
                      src={dish.photo}
                      alt={dish.dishName}
                      style={{ maxHeight: '200px', objectFit: 'cover' }}
                    />
                  )}
                  <Card.Body>
                    <Card.Title>{dish.dishName}</Card.Title>
                    <Card.Text>
                      <strong>Restaurant:</strong> {dish.restaurant} <br />
                      <strong>Place:</strong> {dish.place} <br />
                      <strong>Price:</strong> ₹{dish.price} <br />
                      <strong>Quantity:</strong> {dish.quantity}
                    </Card.Text>
                    <Button
                      variant="success"
                      onClick={() => handleAddToCart(dish)}
                      disabled={cart.some((item) => item.id === dish.id)}
                    >
                      {cart.some((item) => item.id === dish.id)
                        ? 'Added'
                        : 'Add to Cart'}
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : searchPlace ? (
            <p className="text-white">No dishes found for "{searchPlace}".</p>
          ) : null}
        </Row>

        {/* Cart Modal */}
        <Modal show={showCartModal && !showScanner} onHide={() => setShowCartModal(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>Your Cart ({cart.length})</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <>
                <ListGroup>
                  {cart.map((item) => (
                    <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center">
                      <div>
                        <strong>{item.dishName}</strong> <br />
                        Restaurant: {item.restaurant} <br />
                        Place: {item.place} <br />
                        Price: ₹{item.price} <br />
                        Quantity: {item.quantity}
                      </div>
                      <Button variant="danger" size="sm" onClick={() => handleRemoveFromCart(item.id)}>
                        Remove
                      </Button>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
                <hr />
                <h5>Total Price: ₹{totalPrice}</h5>
                <Button variant="success" className="mt-3" onClick={handlePayNow} disabled={cart.length === 0}>
                  Pay Now
                </Button>
              </>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowCartModal(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Scanner Modal */}
        <Modal show={showScanner} onHide={handleScannerCancel} centered>
          <Modal.Header closeButton>
            <Modal.Title>Scan QR Code to Pay</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center">
            <img
              src={scannerImg}
              alt="QR Scanner"
              style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
            />
            <Button className="mt-3" variant="primary" onClick={onPaymentCompleteClick}>
              Done Payment
            </Button>
          </Modal.Body>
        </Modal>

        <Container className="mb-4">
          <div
            className="text-white text-center p-3"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              borderRadius: '8px',
              fontSize: '1.2rem',
              fontWeight: '500',
            }}
          >
            Don't be with an empty stomach — we are here to help you out!
          </div>
        </Container>

        {/* Footer */}
        <footer className="bg-dark text-white text-center py-4 mt-5">
          <p>&copy; 2025 Food Redistribution System. All Rights Reserved.</p>
          <p>
            <a href="/privacy-policy" className="text-white">Privacy Policy</a> |
            <a href="/terms-of-service" className="text-white"> Terms of Service</a>
          </p>
          <p>
            Follow us on:
            <a href="https://facebook.com" className="text-white mx-2">Facebook</a>|
            <a href="https://twitter.com" className="text-white mx-2">Twitter</a>|
            <a href="https://instagram.com" className="text-white mx-2">Instagram</a>
          </p>
        </footer>
      </Container>
    </div>
  );
}

export default Needy;
