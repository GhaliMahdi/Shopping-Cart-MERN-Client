import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { ShoppingCartContext, UserContext } from '../App';
import { useIsLoggedIn } from '../hooks/IsLoggedInHook';

export const Header = () => {
    const [cart] = useContext(ShoppingCartContext);
    const [user] = useContext(UserContext);
    const isLoggedIn = useIsLoggedIn();

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link to="/"><Navbar.Brand>Shopping Cart {user.user?.username}</Navbar.Brand></Link>
        {isLoggedIn && <Link to="/cart">Cart {cart.length}</Link>}
        {isLoggedIn && <Link to="/logout">Logout</Link>}
        {!isLoggedIn && <Link to="/login">Login</Link>}
      </Container>
    </Navbar>
  )
}