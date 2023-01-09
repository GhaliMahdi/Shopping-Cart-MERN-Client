import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { ShoppingCartContext } from '../App';

export const Header = () => {
    const [cart] = useContext(ShoppingCartContext);
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link to="/"><Navbar.Brand>Shopping Cart</Navbar.Brand></Link>
        <Link to="/cart">Cart {cart.length}</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
    </Navbar>
  )
}