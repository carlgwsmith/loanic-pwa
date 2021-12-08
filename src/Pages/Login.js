import { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";
import { Header, Logo, Wordmark, Subtitle, WelcomeText, SectionBtn, NavMenu } from '../Shared/SharedElements';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false)
  const [loggingIn, setLoggingIn] = useState(true)
  const [registering, setRegistering] = useState(false)

  let navigate = useNavigate()
  const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    useEffect(() => {
      if (user?.email){
        setLoggedIn(true)
        setLoggingIn(false)
        setRegistering(false)
      }
    }, [user]);
  const register = async () => {
    try {
      setRegistering(false)
      setLoggingIn(false)
      setLoggedIn(true)
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      // setRegistering(false)
      // setLoggingIn(false)
      // setLoggedIn(true)
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      setLoggingIn(false)
      setRegistering(false)
      setLoggedIn(true)
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    setLoggingIn(true)
    setRegistering(false)
    setLoggedIn(false)
    await signOut(auth);
  };
  function handleSignUp () {
    setLoggingIn(false)
    setRegistering(true)
  }
  function handleLoggingIn (){
    setRegistering(false)
    setLoggingIn(true)
  }
  function handleDash (){
    navigate('/home')
  }
  if(registering && !loggingIn && !loggedIn){
    return(
      <div>
      <Header className="wave-container">
     <Logo>
        <Wordmark>
          Loanic
        </Wordmark>
        <Subtitle>Mortgage Tools</Subtitle>
      </Logo>
     <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 350" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,500 C 0,500 0,250 0,250 C 112.85714285714286,210.10714285714286 225.71428571428572,170.21428571428572 346,193 C 466.2857142857143,215.78571428571428 594,301.25 732,327 C 870,352.75 1018.2857142857144,318.78571428571433 1138,296 C 1257.7142857142856,273.21428571428567 1348.8571428571427,261.60714285714283 1440,250 C 1440,250 1440,500 1440,500 Z" stroke="none" stroke-width="0" fill="#00d084ff" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 250)"></path></svg>
     </Header>
      <div>
        <h3> Register User </h3>
        <input
          placeholder="Email..."
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <input
          placeholder="Password..."
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />

        <button onClick={register}> Create User</button>
      </div>
      <div style={{marginTop:'20px'}}>
       <button onClick={handleLoggingIn}>Already have an account? Login.</button>
     </div>
      </div>
    )
  }

  if (loggingIn && !registering && !loggedIn) {
  return (
    <div>
      <Header className="wave-container">
     <Logo>
        <Wordmark>
          Loanic
        </Wordmark>
        <Subtitle>Mortgage Tools</Subtitle>
      </Logo>
     <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 350" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,500 C 0,500 0,250 0,250 C 112.85714285714286,210.10714285714286 225.71428571428572,170.21428571428572 346,193 C 466.2857142857143,215.78571428571428 594,301.25 732,327 C 870,352.75 1018.2857142857144,318.78571428571433 1138,296 C 1257.7142857142856,273.21428571428567 1348.8571428571427,261.60714285714283 1440,250 C 1440,250 1440,500 1440,500 Z" stroke="none" stroke-width="0" fill="#00d084ff" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 250)"></path></svg>
     </Header>
      <div>
        <h3> Login </h3>
        <input
          placeholder="Email..."
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        <input
          placeholder="Password..."
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />

        <button onClick={login}> Login</button>
      </div>
      <p>{user?.email}</p>
      <div style={{marginTop:'20px'}}>
       <button onClick={handleSignUp}>Need an account? Sign Up</button>
     </div>
    </div>
  );
}
if (loggedIn && !loggingIn && !registering) {
  return (
    <div>
      <Header className="wave-container">
     <Logo>
        <Wordmark>
          Loanic
        </Wordmark>
        <Subtitle>Mortgage Tools</Subtitle>
      </Logo>
     <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 350" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,500 C 0,500 0,250 0,250 C 112.85714285714286,210.10714285714286 225.71428571428572,170.21428571428572 346,193 C 466.2857142857143,215.78571428571428 594,301.25 732,327 C 870,352.75 1018.2857142857144,318.78571428571433 1138,296 C 1257.7142857142856,273.21428571428567 1348.8571428571427,261.60714285714283 1440,250 C 1440,250 1440,500 1440,500 Z" stroke="none" stroke-width="0" fill="#00d084ff" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 250)"></path></svg>
     </Header>

      <h4> User Logged In: </h4>
      {user?.email}

      <button onClick={logout}> Sign Out </button>
      <button onClick={handleDash}>Go To Dashboard</button>
    </div>
  );
}
}
export default Login;