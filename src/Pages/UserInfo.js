import React, {useState, useEffect} from 'react';
import {db} from '../firebase'
import {collection, getDocs} from 'firebase/firestore'
import   {onAuthStateChanged} from "firebase/auth";
import { auth } from "../firebase";
import { doc, setDoc } from "firebase/firestore"; 
 
const Userinfo = () => {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState([])
  const usersCollectionsRef = collection(db, 'users')
  const [age, setAge] = useState(0);
  const [dp, setDP] = useState(0);
  const [hp, setHP] = useState(0);
  const [name, setName] = useState('');

  const inputStyle = {
    marginBottom:'5px',
    display:'block',
    marginLeft:'auto',
    marginRight:'auto',
    height:'45px',
    width:'300px',
    borderRadius:'5px'
  }

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser.uid);
  });

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionsRef)
      setUsers(data.docs.map((doc)=>({...doc.data(), id: doc.id})))
    }
    getUsers()
    console.log(users)
  }, []);

  const sendInfo = async () => {

    await setDoc(doc(db, "users", user), {
      name: name,
      age: age,
      homeprice: hp,
      downPayment: dp
    });
  }

  return (
    <div>
      {user}
      {users.map((user) => {
        return (
          <div>
          <h1>Name: {user.name}</h1>
          <h1>Age: {user.age}</h1>
          <h1>Home Value: {user.homeValue}</h1>
          <h1>Down payment: {user.downPayment}</h1>
          </div>
          );
      })}
       <input
          placeholder="Name..."
          onChange={(event) => {
            setName(event.target.value);
          }}
          style={inputStyle}
        />
         <input
          placeholder="Age..."
          onChange={(event) => {
            setAge(event.target.value);
          }}
          style={inputStyle}
          />
        <input
          placeholder="Home Price..."
          onChange={(event) => {
            setHP(event.target.value);
          }}
          style={inputStyle}
        />
        <input
          placeholder="Downpayment..."
          onChange={(event) => {
            setDP(event.target.value);
          }}
          style={inputStyle}
        />
        <button onClick={sendInfo}> Update Info</button>
    </div>
  );
}

export default Userinfo;
