import { useEffect,useState} from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

export default function SearchBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    console.log("search",searchQuery)
    e.preventDefault();
    onSearch(searchQuery);
  };
  return (
    <Row>
      <h3 style= {{fontFamily: "'Poppins', sans-serif",marginTop: 12}}><strong>Ask community</strong></h3>
      <Col className='d-flex justify-content-center' style={{ width: 1000, height: 50, marginTop: 10 }}>
      <Form className="d-flex" onSubmit={handleSearch}>
          <Form.Control
            type="search"
            placeholder="  Need help ? "
            className="me-2 rounded-pill"
            aria-label="Search"
            style={{ width: 700, height: 50 }}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button className="rounded-pill" variant="outline-warning" type="submit">
            <FaSearch style={{ width: 25, height: 25 }} />
          </Button>
        </Form>
      </Col>
    </Row>
  );
}