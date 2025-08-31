import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Card, Spinner } from "react-bootstrap";

const API_BASE = process.env.REACT_APP_API_BASE; // Change for deployed API

function View() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE}/books/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBook(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <Container className="py-5 text-center">
        <Spinner animation="border" />
      </Container>
    );
  }

  if (!book) {
    return (
      <Container className="py-5 text-center">
        <h3>❌ Book not found</h3>
        <Link to="/" className="btn btn-primary mt-3">
          Back to List
        </Link>
      </Container>
    );
  }

  return (
    <Container className="py-4">
      <Card className="shadow mx-auto" style={{ maxWidth: "600px" }}>
        {book.image && (
          <Card.Img variant="top" src={book.image} alt={book.name} />
        )}
        <Card.Body>
          <h3>{book.name}</h3>
          <p>
            <strong>Author:</strong> {book.author}
          </p>
          <p>
            <strong>Published:</strong> {book.published}
          </p>
          <p>{book.description}</p>
          <Link to="/" className="btn btn-secondary">
            ⬅ Back to List
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default View;
