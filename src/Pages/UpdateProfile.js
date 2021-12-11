import React, {useRef, useState} from 'react'
import {Container, Form, Button, Card, Alert} from 'react-bootstrap'
import {useAuth} from '../context/AuthContext'
import { AuthProvider } from '../context/AuthContext'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function UpdateProfile() {
    let navigate = useNavigate()
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const [error, setError]= useState('')
    const [loading, setLoading] = useState(false)


    const {currentUser, updateEmail, updatePassword} = useAuth()

    console.log(currentUser)

    function handleSubmit(e){
        e.preventDefault();
        if(passwordConfirmRef.current.value !== passwordRef.current.value){
            return setError('Passwords do not match')
        }
        const promises = []
        if (emailRef.current.value !== currentUser.email){
            promises.push(updateEmail(emailRef.current.value))
        }
        if (passwordRef.current.value !== currentUser.password){
            promises.push(updatePassword(passwordRef.current.value))
        }
        Promise.all(promises).then(()=>{
            navigate("/home", { replace: true });
        }).catch(()=>{
            setError('failed to update')
        }).finally(()=>{
            setLoading(false)
        })
    }
    return (
        <AuthProvider>
            <Container>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Update Profile</h2>
                    {/* {currentUser && currentUser.email} */}
                    {error && <Alert variant="danger">{error}</Alert> }
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>
                                Current Email
                            </Form.Label>
                            <Form.Control type="email" required ref={emailRef} defaultValue={currentUser.email}/>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>
                               Current Password
                            </Form.Label>
                            <Form.Control type="password" required ref={passwordRef} placeholder="leave blank to keep the same"/>
                        </Form.Group>
                        <Form.Group id="passwordConfirm">
                            <Form.Label>
                               Password Confirmation
                            </Form.Label>
                            <Form.Control type="password" required ref={passwordConfirmRef} placeholder="leave blank to keep the same"/>
                        </Form.Group>
                        <Button disabled={loading} type="submit" className="w-100 mt-2">Update</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
            <Link to="/profile">Cancel</Link>
            </div>
            </Container>
        </AuthProvider>
    )
}
