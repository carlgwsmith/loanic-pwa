import React, {useState, useEffect} from 'react';
import {db} from '../firebase'
import   {onAuthStateChanged} from "firebase/auth";
import { auth } from "../firebase";
import { doc, setDoc, getDoc, collection, getDocs } from "firebase/firestore";
import Header from '../Shared/Header';
import Sidebar from '../Nav/Sidebar';
 
const Userinfo = () => {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState([])
  const [editUser, setEditUser] = useState(false)
  const usersCollectionsRef = collection(db, 'users')
  const docRef = doc(db, "users", 'FSDADSFSDF@GMAIL.Cd');
  const [age, setAge] = useState(0);
  const [dp, setDP] = useState(0);
  const [hp, setHP] = useState(0);
  const [newAge, setNewAge] = useState(0);
  const [newDp, setNewDP] = useState(0);
  const [newHp, setNewHP] = useState(0);
  const [name, setName] = useState('');
  const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
      setIsOpen(!isOpen)
    }

  const inputStyle = {
    marginBottom:'5px',
    display:'block',
    marginLeft:'auto',
    marginRight:'auto',
    height:'45px',
    width:'300px',
    borderRadius:'5px'
  }


useEffect(() => {
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser.email);
  });
}, [])

  useEffect(() => {
    const getUsers = async () => {
      // const data = await getDocs(usersCollectionsRef)
      // setUsers(data.docs.map((doc)=>({...doc.data(), id: doc.id})))
      const docSnap = await getDoc(docRef)
      setAge(docSnap.data().age)
      setHP(docSnap.data().homeprice)
      setDP(docSnap.data().downPayment)
    }
    getUsers()
    console.log(users)

  }, [user]);

  const sendInfo = async () => {

    await setDoc(doc(db, "users", user), {
      name: name,
      age: age,
      homeprice: hp,
      downPayment: dp
    });
  }

  // const updateUser = async () =>{
  //   await 
  // }

  return (
    <div>
      <Header name="User Info" toggle={toggle} back="/home"/>
      <div style={{marginTop:'15px'}}>
      {user}'s Profile
          <div>
          <h1>Age: {age}</h1>
          <h1>Home Value: ${hp}</h1>
          <h1>Down payment: ${dp}</h1>
          </div>
      
      <button onClick={()=>setEditUser(!editUser)}> Edit User Info</button>
      </div>
      {editUser &&
      <div style={{marginTop:'15px', borderTop:'1px solid', paddingTop:'15px'}}>
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
            setNewAge(event.target.value);
          }}
          style={inputStyle}
          />
        <input
          placeholder="Home Price..."
          onChange={(event) => {
            setNewHP(event.target.value);
          }}
          style={inputStyle}
        />
        <input
          placeholder="Downpayment..."
          onChange={(event) => {
            setNewDP(event.target.value);
          }}
          style={inputStyle}
        />
        <button onClick={sendInfo}> Update Info</button>
        </div>
        }
        <Sidebar isOpen={isOpen} toggle={toggle}/>
    </div>
  );
}

export default Userinfo;
