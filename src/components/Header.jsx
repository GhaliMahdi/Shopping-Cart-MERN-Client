import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { ShoppingCartContext, UserContext } from '../App';

export const Header = () => {
    const [cart] = useContext(ShoppingCartContext);
    const [user] = useContext(UserContext);

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link to="/"><Navbar.Brand>Shopping Cart {user.user?.username}</Navbar.Brand></Link>
        {user.token && <Link to="/cart">Cart {cart.length}</Link>}
        {user.token && <Link to="/logout">Logout</Link>}
        {!user.token && <Link to="/login">Login</Link>}
      </Container>
    </Navbar>
  )
}