import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";

function ColorSchemesExample() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"
      ></link>
      <Navbar variant="white" className="square border-bottom border-5">
        <Container>
          <Navbar.Brand href="http://localhost:3000/">
            <img
              alt=""
              src="https://www.axi.nl/themes/custom/novsubtheme/img/logos/logo-axi-white.svg"
              width="77"
              height="34"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="Products">Producten</Nav.Link>
            <Nav.Link href="Order">Orders</Nav.Link>
            <Nav.Link href="Levering">Levering</Nav.Link>
            <Nav.Link href="Locaties">Locaties</Nav.Link>
          </Nav>
          <Nav className="me-right">
            <Nav.Link href="Gebruiker">Gebruiker</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
