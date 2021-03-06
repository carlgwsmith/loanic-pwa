import React, {useRef, useState} from 'react'
import {Container, Form, Button, Card, Alert} from 'react-bootstrap'
import {useAuth} from '../context/AuthContext'
import { AuthProvider } from '../context/AuthContext'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import {Header, Wordmark, Logo, Subtitle} from '../Shared/SharedElements'

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
            <Header className="wave-container">
     <Logo>
        <Wordmark>
          Loanic
        </Wordmark>
        <Subtitle>Mortgage Tools</Subtitle>
      </Logo>
     <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 350" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,500 C 0,500 0,250 0,250 C 112.85714285714286,210.10714285714286 225.71428571428572,170.21428571428572 346,193 C 466.2857142857143,215.78571428571428 594,301.25 732,327 C 870,352.75 1018.2857142857144,318.78571428571433 1138,296 C 1257.7142857142856,273.21428571428567 1348.8571428571427,261.60714285714283 1440,250 C 1440,250 1440,500 1440,500 Z" stroke="none" stroke-width="0" fill="#00d084ff" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 250)"></path></svg>
     </Header>
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
              <Link to="/">Login</Link>
            </div>
            </Container>
        </AuthProvider>
    )
}
