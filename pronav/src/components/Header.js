import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant='dark' expand="lg">
                <Container>
                    <Navbar.Brand href="/">ProNav</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="/Navigation"><i className='fas fa-map'></i> Navigate</Nav.Link>
                            <Nav.Link href="/Authenticate"><i className='fas fa-user'></i> Sign Up / Log In</Nav.Link>

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
