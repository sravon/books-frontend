import Item from './item';
import { useEffect, useState } from 'react';
import Header from '../Layouts/header';
import { Container, Row } from 'react-bootstrap';

const API_BASE = process.env.REACT_APP_API_BASE; // Update for deployed backend

function Home() {

  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const res = await fetch(`${API_BASE}/books`);
    const data = await res.json();
    setBooks(data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <Container>
      <Header/>
      <Row>
      {books.map((book) => (
        <Item name={book.name} id={book.id}/>
      ))}
      </Row>
    </Container>
  );
}

export default Home;