import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./navbar1.css"
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { signOut } from "firebase/auth";
import { auth } from '../../firebase/config';
import { toast } from 'react-toastify';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { CgProfile, CgSlack } from 'react-icons/cg';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { useDispatch } from 'react-redux';
import { SET_ACTIVE_USER, REMOVE_ACTIVE_USER } from '../../redux/slice/authSlice';
import ShowOnLogIn  from '../hiddenlink/hiddenLink';
import ShowOnLogOut  from '../hiddenlink/conditionalLink';


const Navbar1 = () => {
  const[displayName,setDisplayName]= useState("")
 
 const dispatch= useDispatch()
  //current signed in user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {

        if (user.displayName==null) {
          const u1=user.email.substring(0, user.email.indexOf("@"))
          const uName= u1.charAt(0).toUpperCase()+u1.slice(1)
          setDisplayName(uName)
        }else{
        setDisplayName( user.displayName);
      }
        dispatch(SET_ACTIVE_USER({
          userName: user.displayName?user.displayName:displayName,
          email: user.email,
          userID: user.uid,
        }))
      } else {
        setDisplayName("")
        dispatch(REMOVE_ACTIVE_USER())
      }
    });
  

  }, [dispatch, displayName])
  

  const logoutUser=()=> {
    signOut(auth).then(() => {
 toast.success("LogOut Successfully")
 useNavigate("/")
    }).catch((error) => {
      toast.error(error.code) 
    });
  }



  return (
     <Navbar className="navshadow" collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
      <NavLink style={{textDecoration: 'none'}} to="/">
      <Navbar.Brand >
            <img
              alt=""
              src="images/translogo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{'  '}
            GastroWork
          </Navbar.Brand>
          </NavLink>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <NavLink style={{textDecoration: 'none'}} to="/contact">
          <Nav.Link as="nav" >Contact</Nav.Link>
          </NavLink>
          </Nav>
<ShowOnLogIn>
          <Nav className="me-auto">
      <Dropdown.Item className='justify-content' href="#/action-1"><CgProfile size={22}/> Hi, {displayName}</Dropdown.Item>
    </Nav>
    <Nav className="me-auto">
    <Dropdown.Item style={{paddingBottom:"5px"}} className='justify-content' href="#/action-1"><CgSlack  size={22}/>Settings</Dropdown.Item>
    </Nav></ShowOnLogIn>

          <Nav>
          <ShowOnLogOut>
          <NavLink style={{textDecoration: 'none', marginRight:"20px",marginBottom:"5px"}} to="/register">
            <Button variant="outline-dark" as="nav">
              Register
            </Button>
            </NavLink>
            </ShowOnLogOut>

            <ShowOnLogOut>
          <NavLink style={{textDecoration: 'none'}} to="/login">
            <Button as="nav">LogIn</Button>
            </NavLink>
            </ShowOnLogOut>
            

            <ShowOnLogIn>
          <NavLink onClick={logoutUser} style={{textDecoration: 'none'}} to="/">
            <Button as="nav">LogOut</Button>
            </NavLink>
            </ShowOnLogIn>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navbar1