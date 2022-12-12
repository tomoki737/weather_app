import React from "react";
// import axios from "axios";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// function App() {
//   const [data, setData] = React.useState();
// const url = "http://localhost:8080";
function BasicExample() {
  return (
    <Container fluid className="w-50 mt-5">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>地域</Form.Label>
          <Form.Control type="text" placeholder="地域を検索" />
          <Form.Text className="text-muted">地域を検索</Form.Text>
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
}
// }

export default BasicExample;
