import React, {useState, useRef} from 'react'
import {useAuth} from '../context/AuthContext'
import { Alert, Form, Button } from 'react-bootstrap'
import Header from '../Shared/Header';
import Sidebar from '../Nav/Sidebar';
import { AuthProvider } from '../context/AuthContext'
import { Link } from 'react-router-dom';
import {database} from "../firebase"

export default function Profile() {
    const [error, setError] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const [multiSelections, setMultiSelections] = useState([]);
    const [message, setMessage] = useState('')
    const homeValueRef = useRef()
    const downPaymentRef = useRef()
    const ageRef = useRef()

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  function getProfile(){
    setLoading(true)
    database.users.doc(currentUser.uid).get().then(
    doc => {
        let data = (doc.data());
        console.log(data);
        // if(data === undefined){
        //     console.log('first timer')
        // }else{
        //     const dataArray = Object.entries(data);
        // setMultiSelections(dataArray.[0].[1])
        // }
    }
    )
    setLoading(false)
    console.log('success')
}
function handleSubmit(e){
  e.preventDefault();
  database.users.doc(currentUser.uid).set({
    homeValue: homeValueRef.current.value,
    yearBuilt: ageRef.current.value,
    downPayment: downPaymentRef.current.value
});
}
function deleteHouse(){
  database.users.doc(currentUser.uid).delete().then(()=>{
    setMessage('House Profile Deleted')
  })
}
    const { currentUser } = useAuth()
    return (
        <div>
            <Header name="Home Profile" toggle={toggle} back="/home"/>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <div style={{padding:'20px'}}>
            {error && <Alert variant="danger">{error}</Alert>}
            <strong>Email: </strong>{currentUser.email}
            {/* <Link to="/update" className="btn btn-primary w-100">Update Profile</Link> */}
            </div>
            <Form onSubmit={handleSubmit} style={{padding:'20px'}}>
                        <Form.Group id="hv">
                            <Form.Label>
                              Home Value
                            </Form.Label>
                            <Form.Control type="number" required ref={homeValueRef}/>
                        </Form.Group>
                        <Form.Group id="dp">
                            <Form.Label>
                             Down Payment
                            </Form.Label>
                            <Form.Control type="number" required ref={downPaymentRef}/>
                        </Form.Group>
                        <Form.Group id="age">
                            <Form.Label>
                              Year Built
                            </Form.Label>
                            <Form.Control type="number" required ref={ageRef}/>
                        </Form.Group>
                        <Button disabled={loading} type="submit" className="w-100 mt-2">Update House</Button>
                        <Button disabled={loading} onClick={deleteHouse} className="w-100 mt-2">Delete House</Button>
                        {message && <Alert variant="success" className="mt-2">{message}</Alert>}
                    </Form>
        </div>
    )
}
