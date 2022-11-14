import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ToastContainer, toast } from 'react-toastify';
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from '../../firebase/config';



const Reset = () => {
    const [email, setEmail] = useState("")
    const resetPassword =(e)=>{
        e.preventDefault()
        sendPasswordResetEmail(auth, email)
  .then(() => {
    toast.success("Email sent. Check ur Email")
  })
  .catch((error) => {
  toast.error(error.message)
  });
    }
  return (
    <><ToastContainer/>
    <Container className='cont'>
    <Row >
        <Col><img className='authpng' src="images/reset.jpg" /></Col>
        <Col  className="row">
<>
<div className="form-body">
<div className="row">
  <div className="form-holder">
      <div className="form-content">
          <div className="form-items">
              <h3>Reset</h3>
              <p>Fill in the data below.</p>
              <form onSubmit={resetPassword} className="requires-validation" novalidate>
                  <div className="col-md-6">
                      <input className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} type="email" name="email" placeholder="E-mail Address" required/>
                       <div className="valid-feedback">Email field is valid!</div>
                       <div className="invalid-feedback">Email field cannot be blank!</div>
                  </div>

                  <div className="form-button mt-3">
                      <button id="submit" type="submit"  className="btn btn-outline-success lg">Reset</button>
                  </div>

                  <Link to="/login">
                  <p>Have an account?</p>
                  </Link>
              </form>
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

export default Reset