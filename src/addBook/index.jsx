import React, { useState } from 'react'
import { Card, Container } from 'react-bootstrap';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Header from '../Layouts/header';
import { useNavigate } from 'react-router-dom';

const API_BASE = process.env.REACT_APP_API_BASE; // Change for deployed API

function AddBook() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
    name: "",
    author: "",
    published: "",
    description: "",
    image: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

     const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`${API_BASE}/books`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    navigate("/"); // Go back to book list
  };

    return (
    <Container className="py-4">
      <Header/>
      <Card className="p-4 shadow mx-auto" style={{ maxWidth: "600px" }}>
        <h2 className="mb-4 text-center">➕ Add New Book</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-2">
            <Form.Control
              placeholder="Book Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Control
              placeholder="Author"
              name="author"
              value={form.author}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Control
              placeholder="Published Year"
              name="published"
              value={form.published}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Control
              placeholder="Image URL"
              name="image"
              value={form.image}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              as="textarea"
              placeholder="Description"
              name="description"
              value={form.description}
              onChange={handleChange}
            />
          </Form.Group>
          <Button type="submit" variant="primary" className="w-100">
            Add Book
          </Button>
        </Form>
      </Card>
    </Container>
    );
}

export default AddBook;