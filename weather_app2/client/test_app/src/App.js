import React, { useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Menu from "./Menu";
//   const [data, setData] = React.useState();
// const url = "http://localhost:8080";
function App() {
  const [value, setValue] = useState("")
  const style = {
    width: "50%",
    margin: "0 auto",
    // marginTop: 150,
  };

async function search() {
  const res = await axios.get('/')
  console.log(res.text)
}
  return (
    <Container fluid className="w-50 mt-5">
      {value}
      <div style={style}>
        <Menu setValue={setValue} />
      </div>
      <Button type="submit" onClick={() => search()}>検索</Button>
    </Container>
  );
}

export default App;
