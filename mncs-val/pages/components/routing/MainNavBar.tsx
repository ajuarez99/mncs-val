import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function MainNavBar() {
  return (
  //   <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="justify-content-left">
  //   <Container  >
  //     <Navbar.Brand href="#home">MNCS VALORANT</Navbar.Brand>
  //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
  //     <Navbar.Collapse id="basic-navbar-nav">
  //       <Nav className="justify-content-left">
  //         <Nav.Link href="#home">Home</Nav.Link>
  //         <Nav.Link href="#link">Link</Nav.Link>
  //         <NavDropdown title="Dropdown" id="basic-nav-dropdown">
  //           <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
  //           <NavDropdown.Item href="#action/3.2">
  //             Another action
  //           </NavDropdown.Item>
  //           <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
  //           <NavDropdown.Divider />
  //           <NavDropdown.Item href="#action/3.4">
  //             Separated link
  //           </NavDropdown.Item>
  //         </NavDropdown>
  //       </Nav>
  //     </Navbar.Collapse>
  //   </Container>
  // </Navbar>
  
 <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="justify-content-left">
 <Navbar.Brand href="#home" style={{marginLeft:"10px"}}>MNCS VALORANT</Navbar.Brand>
  <Nav defaultActiveKey="/home" >
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Nav.Item>
        <Nav.Link href="/matches"style={{color:"white"}}>Match History</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/players">Players</Nav.Link>
      </Nav.Item>
    </Nav>
   </Navbar>
  )
}
