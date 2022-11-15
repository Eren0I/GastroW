import React, {useState}  from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./auth.css"
import { Link, useNavigate } from 'react-router-dom';
import Loader from '../../components/loader/Loader';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase/config';
import { ToastContainer, toast } from 'react-toastify';





const Register = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cPassword, setCPassword] = useState("")
    const [gender, setGender] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [job, setJob] = useState("")
    
    const navigate = useNavigate()

    const registerUser =(e)=>{
        e.preventDefault()
        if(password !== cPassword){
toast.error("Passwords not matching", {
    icon: "👩‍🍳"
  })}
  setIsLoading(true)

  createUserWithEmailAndPassword(auth, email, password,gender,job,username)
  .then((userCredential) => {
    const user = userCredential.user;
    setIsLoading(false)
    toast.success("Registration successful..", {
        icon: "👨‍🍳"
      })
      navigate("/gastroW/login")
  })
  .catch((error) => {
    toast.error(error.message)
    setIsLoading(false)
  });
    }
  return (
    <>
    <ToastContainer/>
    {isLoading && <Loader/>}
    <Container className='cont'>
    <Row >
        <Col lg={6}><img className='authpng' src="images/register.jpg" /></Col>
        <Col lg={6}>
<>
<div className="form-body">

  <Col sm={8} lg={8} className="form-holder">
  <Col sm={8} lg={12} className="form-content">
  <Col sm={8}  lg={8} className="form-items">

              <h3>Register Today</h3>
              <p>Fill in the data below.</p>
              <form onSubmit={registerUser}  className="requires-validation w-30" noValidate>
<Col md={12} lg={12} sm={12} >
                  <div className="">
                     <input className="form-control" value={username} onChange={(e)=>setUsername(e.target.value)} type="text" name="username" placeholder="Full Name" required/>

                  </div>
</Col>
<Col md={12} lg={12} sm={12} >
                  <div className="">
                      <input className="form-control" value={email} type="email" onChange={(e)=>setEmail(e.target.value)} name="email" placeholder="E-mail Address" required/>

                  </div>
                  </Col>
                  <Col md={12} lg={12} sm={12} >
                 <div className="">
                      <select name='job' id="job" value={job} onChange={(e)=>setJob(e.target.value)} className="form-select mt-3" required>
                            <option disabled value="">Position</option>
                            <option value="stu">Öğrenci</option>
                            <option value="gradstu">Mezun Öğrenci</option>
                            <option value="recruiter">İş Veren</option>
                     </select>

                 </div>
</Col>
                 <Col md={12} lg={12} sm={12} >
                 <div className="">
                    <input className="form-control" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} name="password" placeholder="Password" required/>

                 </div>
                 </Col>
                 <Col md={12} lg={12} sm={12} >
                 <div className="">
                    <input className="form-control" type="password" value={cPassword} onChange={(e)=>setCPassword(e.target.value)} name="cpassword" placeholder="ConfirmPassword" required/>

                 </div>
                 </Col>
                 <Col md={12} lg={12} sm={12} >
                 <div className=" ">
                      <select name='gender' id="gender" value={gender} onChange={(e)=>setGender(e.target.value)} className="form-select mt-3" required>
                            <option disabled value="">Gender</option>
                            <option value="kadın">Female</option>
                            <option value="erkek">Male</option>
                            <option value="Eşcinsel Karı">Diğer</option>
                     </select>

                 </div>
</Col>


              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="invalidCheck" />
                <label className="form-check-label">I confirm that all data are correct</label>
               <div className="invalid-feedback">Please confirm that the entered data are all correct!</div>
              </div>
        

                  <div className="form-button mt-3">
                      <button id="submit" type="submit" className="btn btn-warning">Register</button>
                  </div>
              </form>
              </Col>
              </Col>
              </Col>
</div>

</>
</Col>
    </Row>
</Container>
</>
  )
}

export default Register
