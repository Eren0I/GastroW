import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./auth.css"
import { AiFillGoogleCircle } from 'react-icons/ai';
import { Link, useNavigate} from 'react-router-dom';
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from '../../firebase/config';
import Loader from '../../components/loader/Loader';
import { ToastContainer, toast } from 'react-toastify';
import { GoogleAuthProvider } from "firebase/auth";


const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)

 const navigate= useNavigate()   
    const loginUser=(e)=>{
e.preventDefault()
setIsLoading(true)

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    toast.success("LogIn Successful...")
    setIsLoading(false)
    navigate("/gastroW/")
    //logindensonra çalışanları entry adlı sayfaya yönlendir iş alınan yere
  })
  .catch((error) => {
    setIsLoading(false)
    toast.error(error.message)
  });
    }
    //loginwithgoogle
    const provider = new GoogleAuthProvider();
    const signInWithGoogle=()=>{
        signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    toast.success("LogIn Successfull")
    navigate("/")
  }).catch((error) => {
    toast.error(error.message)
  });
    }
  return (
    <>
    <ToastContainer/>
    {isLoading && <Loader/>}
    <Container className='cont'>
    <Row >
        <Col><img className='authpng' src="images/login.jpg" /></Col>
        <Col  className="row">
<>
<div className="form-body">
<div className="row">
  <div className="form-holder">
      <div className="form-content">
          <div className="form-items">
              <h3>Login</h3>
              <p>Fill in the data below.</p>
              <form onSubmit={loginUser} className="requires-validation" noValidate>
                  <div className="col-md-6">
                      <input className="form-control" value={email} type="email" name="email" onChange={(e)=>setEmail(e.target.value)} placeholder="E-mail Address" required/>
                       <div className="valid-feedback">Email field is valid!</div>
                       <div className="invalid-feedback">Email field cannot be blank!</div>
                  </div>
                 <div className="col-md-6">
                    <input className="form-control" value={password} type="password" onChange={(e)=>setPassword(e.target.value)} name="password" placeholder="Password" required/>
                     <div className="valid-feedback">Password field is valid!</div>
                     <div className="invalid-feedback">Password field cannot be blank!</div>
                 </div>
    
                  <div className="form-button mt-3">
                      <button id="submit" type="submit"  className="btn btn-warning lg">Log In</button>
                  </div>
                  <Link to="/gastroW/register">
                  <p>Dont Have an account?</p>
                  </Link>
              </form>
              <div className="form-button mt-3">
                      <button onClick={signInWithGoogle} id="submit" type="submit"  className="btn btn-outline-danger lg">Log In with Google <AiFillGoogleCircle size={"30px"}/></button>
                  </div>
          </div>
      </div>
  </div>
</div>
</div>
</>
</Col>
    </Row>
</Container>
</>
  )
  
}

export default Login
