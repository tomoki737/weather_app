import React from "react";
// import axios from "axios";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Menu from "./Menu";
// function App() {
//   const [data, setData] = React.useState();
// const url = "http://localhost:8080";
function App() {
  const style = {
    width: "50%",
    margin: "0 auto",
    marginTop: 150,
  };

  return (
    <Container fluid className="w-50 mt-5">
      <div style={style}>
        <Menu />
      </div>
      <Button type="submit">Submit</Button>
    </Container>
  );
}
// }

export default App;
