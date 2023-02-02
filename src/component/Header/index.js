import {Navbar, Container, Nav, Offcanvas} from "react-bootstrap"
import { Link } from "react-router-dom";
import "./index.css";

function Header() {
    return (
      <div className="navnav"> 
        <Navbar key="md" bg="#F1F3FF" expand="md" className="mb-3">
          <Container fluid style={{padding:"0px"}}>
          <Link to="/" className="navbar-brand">
            <Navbar.Brand href="#"></Navbar.Brand>
          </Link>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-md`}
              aria-labelledby={`offcanvasNavbarLabel-expand-md`}
              placement="end"
              style={{ width: "50%" }}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                  <Link to="/" className="brand-toggle">
                  <p>BCR</p>
                  <Navbar.Brand href="#" />
                  </Link>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <Link to="/services" className="bnav">
                  <Nav.Link href="#ourservices">
                    <p className="buttonNavi">Our Services</p>
                  </Nav.Link>
                </Link>
                <Link to="/products" className="bnav">
                  <Nav.Link href="#whyus">
                    <p className="buttonNavi">Why Us</p>
                  </Nav.Link>
                </Link>
                <Link to="/testi" className="bnav">
                  <Nav.Link href="#testimonial">
                    <p className="buttonNavi">Testimonial</p>
                  </Nav.Link>
                </Link>
                <Link to="/faq" className="bnav">
                  <Nav.Link href="#faq">
                    <p className="buttonNavi">FAQ</p>
                  </Nav.Link>
                </Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </div>
    );
}

export default Header;