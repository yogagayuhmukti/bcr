import {Navbar, Container, Nav, Offcanvas} from "react-bootstrap"
import "./index.css";

function Header() {
    return (
      <div id="navvbarr" className="navnav"> 
        <Navbar key="md" bg="#F1F3FF" expand="md" className="mb-3">
          <Container fluid style={{padding:"0px"}}>
          <div className="navbar-brand">
            <Navbar.Brand href="#navvbarr"></Navbar.Brand>
          </div>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-md`}
              aria-labelledby={`offcanvasNavbarLabel-expand-md`}
              placement="end"
              style={{ width: "50%" }}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                  <div className="brand-toggle">
                  <p>BCR</p>
                  <Navbar.Brand href="#navvbarr"/>
                  </div>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <div to="/" className="bnav">
                  <Nav.Link href="#banner">
                    <p className="buttonNavi">Banner</p>
                  </Nav.Link>
                </div>
                <div to="/" className="bnav">
                  <Nav.Link href="#ours">
                    <p className="buttonNavi">Our Services</p>
                  </Nav.Link>
                </div>
                <div className="bnav">
                  <Nav.Link href="#whyus">
                    <p className="buttonNavi">Why Us</p>
                  </Nav.Link>
                </div>
                <div className="bnav">
                  <Nav.Link href="#testimonial">
                    <p className="buttonNavi">Testimonial</p>
                  </Nav.Link>
                </div>
                <div className="bnav">
                  <Nav.Link href="#faq">
                    <p className="buttonNavi">FAQ</p>
                  </Nav.Link>
                </div>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </div>
    );
}

export default Header;