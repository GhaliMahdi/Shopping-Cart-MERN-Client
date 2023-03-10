import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import axios from "axios";
import { useContext } from 'react';
import { UserContext } from '../App';
import { useNavigate } from 'react-router-dom';



const DEFAULT_FORM_OBJECT = {
    username: "",
    password: ""
};

export const  RegisterPage = () => {
    const [form, setForm] = useState(DEFAULT_FORM_OBJECT)
    const [userr, setUser] = useContext(UserContext);
    const navigate = useNavigate()

    const updateFormValue = (key, value) => {
        setForm({
            ...form,
            [key]: value
        })
    };

    const addUser = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:3000/register', form);
        const response = await axios.post('http://localhost:3000/login', form);
        const {token, user} = response.data;
        setUser({
            token,
            user
        });
        setForm(DEFAULT_FORM_OBJECT);
        {userr && (
            navigate('/view-products')
        )}

    }
  return (
    <Container>
        <Row>
            <Col></Col>
            <Col xs={8}>
            <h2>Register</h2>
            <Form onSubmit={addUser}>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Username : </Form.Label>
                <Form.Control 
                    onChange={(e) => {
                        updateFormValue('username', e.currentTarget.value)
                    }} 
                    type="username" 
                    value={form.username} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCost">
                <Form.Label>Password : </Form.Label>
                <Form.Control 
                    onChange={(e) => {
                        updateFormValue('password', e.currentTarget.value)
                    }} 
                    type="password" 
                    value={form.password} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Register
            </Button>
            </Form>
            </Col>
            <Col></Col>
        </Row>
    </Container>
  )
}
