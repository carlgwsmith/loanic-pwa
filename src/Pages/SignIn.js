import React, {useRef, useState} from 'react'
import {Container, Form, Button, Card, Alert} from 'react-bootstrap'
import {useAuth} from '../context/AuthContext'
import { AuthProvider } from '../context/AuthContext'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
    let navigate = useNavigate()
    const emailRef = useRef()
    const passwordRef = useRef()
    const [error, setError]= useState('')
    const [loading, setLoading] = useState(false)

    const {login} = useAuth()

    async function handleSubmit(e){
        e.preventDefault();
        try{
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            navigate("/home", { replace: true });
        }
        catch{
            setError('Failed to login')
            setLoading(false)
        }
    }
    return (
        <AuthProvider>
            <Container>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Login</h2>
                    {error && <Alert variant="danger">{error}</Alert> }
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>
                                Email
                            </Form.Label>
                            <Form.Control type="email" required ref={emailRef}/>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>
                               Password
                            </Form.Label>
                            <Form.Control type="password" required ref={passwordRef}/>
                        </Form.Group>
                        <Button disabled={loading} type="submit" className="w-100">Login</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Need an account? <Link to="/signup">Signup</Link>
                <p><Link to="/passwordreset">Forgot Password?</Link></p>
            </div>
            </Container>
        </AuthProvider>
    )
}
