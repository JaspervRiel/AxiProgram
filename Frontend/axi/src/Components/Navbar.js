import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';

function ColorSchemesExample() {
  return (
    <>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
      <Navbar bg="white" variant="white" className="square border-bottom border-5">
        <Container>
          <Navbar.Brand href="/">
            <img
                alt=""
                src="https://www.partnersfontysict.nl/site/assets/files/1074/axi-logo.-logo_medium.jpg"
                width="77"
                height="34"
                className="d-inline-block align-top"
              />{' '}
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="About">About</Nav.Link>
            <Nav.Link href="pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;