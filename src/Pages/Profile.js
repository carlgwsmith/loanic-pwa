import React, {useState} from 'react'
import {useAuth} from '../context/AuthContext'
import { Alert } from 'react-bootstrap'
import Header from '../Shared/Header';
import Sidebar from '../Nav/Sidebar';
import { Link } from 'react-router-dom';

export default function Profile() {
    const [error, setError] = useState('')
    const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
    const { currentUser } = useAuth()
    return (
        <div>
            <Header name="Profile" toggle={toggle} back="/home"/>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <div style={{padding:'20px'}}>
            {error && <Alert variant="danger">{error}</Alert>}
            <strong>Email: </strong>{currentUser.email}
            <Link to="/update" className="btn btn-primary w-100">Update Profile</Link>
            </div>
        </div>
    )
}
