import React, {useRef, useState} from 'react'
import {Container, Form, Button, Card, Alert} from 'react-bootstrap'
import {useAuth} from '../context/AuthContext'
import { AuthProvider } from '../context/AuthContext'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
    let navigate = useNavigate()
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const [error, setError]= useState('')
    const [loading, setLoading] = useState(false)

    const {signup} = useAuth()

    async function handleSubmit(e){
        e.preventDefault();
        if(passwordConfirmRef.current.value !== passwordRef.current.value){
            return setError('Passwords do not match')
        }
        try{
            setError('')
            setLoading(true)
            signup(emailRef.current.value, passwordRef.current.value)
            navigate("/home", { replace: true });
        }
        catch{
            setError('Failed')
            setLoading(false)
        }
    }
    return (
        <AuthProvider>
            <Container>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Sign Up</h2>
                    {/* {currentUser && currentUser.email} */}
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
                        <Form.Group id="passwordConfirm">
                            <Form.Label>
                               Password Confirmation
                            </Form.Label>
                            <Form.Control type="password" required ref={passwordConfirmRef}/>
                        </Form.Group>
                        <Button disabled={loading} type="submit" className="w-100">Sign Up</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Have an account? <Link to="/signin">Log In</Link>
            </div>
            </Container>
        </AuthProvider>
    )
}
