import React, {useRef, useState} from 'react'
import {Container, Form, Button, Card, Alert} from 'react-bootstrap'
import {useAuth} from '../context/AuthContext'
import { AuthProvider } from '../context/AuthContext'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

export default function ForgotPassword() {
    let navigate = useNavigate()
    const emailRef = useRef()
    const [error, setError]= useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')

    const {resetPassword} = useAuth()

    async function handleSubmit(e){
        e.preventDefault();
        try{
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('Check your email for info')
        }
        catch{
            setError('Failed to reset')
            setLoading(false)
        }
    }
    return (
        <AuthProvider>
            <Container>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Password Reset</h2>
                    {error && <Alert variant="danger">{error}</Alert> }
                    {message && <Alert variant="success">{message}</Alert> }
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>
                                Email
                            </Form.Label>
                            <Form.Control type="email" required ref={emailRef}/>
                        </Form.Group>
                        <Button disabled={loading} type="submit" className="w-100 mt-2">Reset Password</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
              <Link to="/signin">Login</Link>
            </div>
            </Container>
        </AuthProvider>
    )
}
