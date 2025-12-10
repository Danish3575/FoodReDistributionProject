// src/components/Donors.js
import React, { useState, useEffect } from 'react';
import { Card, Button, Row, Col, Container, Form } from 'react-bootstrap';

import paneerImg from '../assets/paneer1.jpg';
import biryaniImg from '../assets/biryani1.jpg';
import saladImg from '../assets/salad.jpg';
import dosaImg from '../assets/dosa.jpg';
import samosaImg from '../assets/samosa.jpg';
import friedriceImg from '../assets/friedrice.jpg';

function Donors() {
  const defaultDishes = [
    {
      id: 1,
      place: 'Miyapur',
      restaurantName: 'Mehfil',
      restaurantCode: 'MEH123',
      price: '120',
      quantity: '10 meals',
      imageUrl: paneerImg,
      dishName: 'Paneer Butter Masala',
      image: null, // no file object for static images
    },
    {
      id: 2,
      place: 'Nizampet',
      restaurantName: 'Pista House',
      restaurantCode: 'PIS456',
      price: '150',
      quantity: '15 meals',
      imageUrl: biryaniImg,
      dishName: 'Chicken Biryani',
      image: null,
    },
    {
      id: 3,
      place: 'Kukatpally',
      restaurantName: 'Green Leaf',
      restaurantCode: 'GLC789',
      price: '70',
      quantity: '12 meals',
      imageUrl: saladImg,
      dishName: 'Veg Salad',
      image: null,
    },
    {
      id: 4,
      place: 'Bachupally',
      restaurantName: 'Sunrise',
      restaurantCode: 'SUN321',
      price: '20',
      quantity: '8 meals',
      imageUrl: dosaImg,
      dishName: 'Masala Dosa',
      image: null,
    },
    {
      id: 5,
      place: 'Pragathinagar',
      restaurantName: 'Taste Buds',
      restaurantCode: 'TB654',
      price: '15',
      quantity: '25 snacks',
      imageUrl: samosaImg,
      dishName: 'Samosa',
      image: null,
    },
    {
      id: 6,
      place: 'Miyapur',
      restaurantName: 'City Bites',
      restaurantCode: 'CB987',
      price: '90',
      quantity: '10 meals',
      imageUrl: friedriceImg,
      dishName: 'Veg Fried Rice',
      image: null,
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

  const [dishes, setDishes] = useState(defaultDishes);
  const [showForm, setShowForm] = useState(false);
  const [newDish, setNewDish] = useState({
    place: '',
    restaurantName: '',
    restaurantCode: '',
    price: '',
    quantity: '',
    image: null,
    dishName: '',
  });

  // Cleanup object URLs when component unmounts
  useEffect(() => {
    return () => {
      dishes.forEach((dish) => {
        if (dish.image && dish.imageUrl) {
          URL.revokeObjectURL(dish.imageUrl);
        }
      });
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDish((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setNewDish((prev) => ({ ...prev, image: file }));
    } else {
      alert('Please select a valid image file.');
      setNewDish((prev) => ({ ...prev, image: null }));
    }
  };

  const handleAddDish = (e) => {
    e.preventDefault();

    const { place, restaurantName, restaurantCode, price, quantity, image, dishName } = newDish;

    if (!place || !restaurantName || !restaurantCode || !price || !quantity || !image || !dishName) {
      alert('Please fill all fields and select a valid image.');
      return;
    }

    // Create object URL for the image
    const imageUrl = URL.createObjectURL(image);

    const newEntry = {
      id: Date.now(),
      place,
      restaurantName,
      restaurantCode,
      price,
      quantity,
      dishName,
      image,
      imageUrl,
    };

    setDishes((prev) => [...prev, newEntry]);

    // Reset form
    setNewDish({
      place: '',
      restaurantName: '',
      restaurantCode: '',
      price: '',
      quantity: '',
      image: null,
      dishName: '',
    });

    // Reset file input
    document.getElementById('imageInput').value = null;

    setShowForm(false);
  };

  const handleRemoveDish = (id) => {
    setDishes((prev) => {
      const dishToRemove = prev.find((d) => d.id === id);
      if (dishToRemove && dishToRemove.image && dishToRemove.imageUrl) {
        URL.revokeObjectURL(dishToRemove.imageUrl);
      }
      return prev.filter((dish) => dish.id !== id);
    });
  };

  return (
    <div
      className="donors-background"
      style={{ backgroundColor: '#e6ffe6', minHeight: '100vh' }}
    >
      <Container className="text-black py-4">
        <h2>Add Your Dishes</h2>

        <div className="my-4">
          <Button variant="success" onClick={() => setShowForm(!showForm)}>
            {showForm ? 'Cancel' : 'Add Dish'}
          </Button>

          {showForm && (
            <Form className="mt-4" onSubmit={handleAddDish}>
              <Row>
                <Col md={2}>
                  <Form.Group className="mb-3">
                    <Form.Label>Dish Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="dishName"
                      value={newDish.dishName}
                      onChange={handleInputChange}
                      placeholder="Enter dish name"
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={2}>
                  <Form.Group className="mb-3">
                    <Form.Label>Place</Form.Label>
                    <Form.Control
                      type="text"
                      name="place"
                      value={newDish.place}
                      onChange={handleInputChange}
                      placeholder="Enter place"
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={2}>
                  <Form.Group className="mb-3">
                    <Form.Label>Restaurant Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="restaurantName"
                      value={newDish.restaurantName}
                      onChange={handleInputChange}
                      placeholder="Restaurant name"
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={2}>
                  <Form.Group className="mb-3">
                    <Form.Label>Restaurant Code</Form.Label>
                    <Form.Control
                      type="text"
                      name="restaurantCode"
                      value={newDish.restaurantCode}
                      onChange={handleInputChange}
                      placeholder="Code"
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={2}>
                  <Form.Group className="mb-3">
                    <Form.Label>Price (₹)</Form.Label>
                    <Form.Control
                      type="number"
                      name="price"
                      value={newDish.price}
                      onChange={handleInputChange}
                      placeholder="Price"
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={2}>
                  <Form.Group className="mb-3">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control
                      type="text"
                      name="quantity"
                      value={newDish.quantity}
                      onChange={handleInputChange}
                      placeholder="e.g., 10 meals"
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group className="mb-3">
                    <Form.Label>Photo</Form.Label>
                    <Form.Control
                      id="imageInput"
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Button variant="primary" type="submit">
                Add Dish
              </Button>
            </Form>
          )}
        </div>

        <Row className="my-4">
  {dishes.map((dish) => (
    <Col key={dish.id} md={4} className="my-3">
      <Card className="h-100 d-flex flex-column">
        <Card.Img
          variant="top"
          src={dish.imageUrl}
          alt={dish.dishName}
          onError={(e) => {
            console.error(`Failed to load image for ${dish.dishName}: ${dish.imageUrl}`);
            e.target.onerror = null;
            e.target.src = process.env.PUBLIC_URL + '/fallback.jpg'; // fallback from public/
          }}
          style={{ objectFit: 'cover', height: '200px' }}
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title>{dish.dishName}</Card.Title>
          <Card.Text>
            Place: {dish.place} <br />
            Restaurant: {dish.restaurantName} ({dish.restaurantCode}) <br />
            Price: ₹{dish.price} <br />
            Quantity: {dish.quantity}
          </Card.Text>
          <div className="mt-auto d-flex justify-content-end">
            <Button
              variant="danger"
              size="sm"
              onClick={() => handleRemoveDish(dish.id)}
            >
              Remove
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>


        <footer className="bg-dark text-white text-center py-4">
          <p>© 2025 Food Redistribution System. All Rights Reserved.</p>
          <p>
            <a href="/privacy-policy" className="text-white">
              Privacy Policy
            </a>{' '}
            |{' '}
            <a href="/terms-of-service" className="text-white">
              Terms of Service
            </a>
          </p>
          <p>
            Follow us on:
            <a href="https://facebook.com" className="text-white mx-2">
              Facebook
            </a>
            |
            <a href="https://twitter.com" className="text-white mx-2">
              Twitter
            </a>
            |
            <a href="https://instagram.com" className="text-white mx-2">
              Instagram
            </a>
          </p>
        </footer>
      </Container>
    </div>
  );
}

export default Donors;