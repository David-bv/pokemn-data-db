import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavbarPk = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>
                        <img
                            alt=""
                            src="https://i.postimg.cc/LXxCwrvQ/pokeball.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Pok/mon Data
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Link to="/formpk" className="nav-link">Ingresar Pkmon</Link>
                        <Link to="/" className="nav-link">Ver Pkmon</Link>
                    </Nav>
                </Container>

            </Navbar>
        </div>
    )
}

export default NavbarPk