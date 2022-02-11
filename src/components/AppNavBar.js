import { Navbar, Container, Nav } from "react-bootstrap"



export default function AppNavBar() {
    return (
        <Navbar expand="lg" className="navbar">
            <Container>
                <Navbar.Brand href="/" className="navText">Technical Section</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" >
                        <Nav.Link href="/" className="navText">Home</Nav.Link>
                        <Nav.Link href="counter" className="navText">Counter</Nav.Link>
                        <Nav.Link href="calculator" className="navText">Calculator</Nav.Link>
                        <Nav.Link href="stopbutton" className="navText">Button</Nav.Link>
                        <Nav.Link href="todo" className="navText">Todo</Nav.Link>
                        <Nav.Link href="cardlist" className="navText">CardList</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

