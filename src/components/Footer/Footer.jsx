import React from 'react'
import { FaTelegramPlane } from 'react-icons/fa';
import "./footer.css"
import { Link} from 'react-router-dom';



const Footer = () => {
    const date = new Date()
const year= date.getFullYear()
  return (
    <div className="d-flex flex-column h-100 fotr">
    <footer className="w-100 py-4 flex-shrink-0">
        <div className="container py-4">
            <div className="row gy-4 gx-5">
                <div className="col-lg-4 col-md-6">
                    <h5 className="h1 text-white">GW.</h5>
                    <p className="small text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                    <p className="small text-muted mb-0">&copy; {year} Copyrights. All rights reserved. <a className="text-primary" href="#">GastroWork</a></p>
                    <p className="small text-muted mb-0">Built by<a className="text-primary" href="https://github.com/Eren0I">Eren0I</a></p>
                </div>

                <div className="col-lg-2 col-md-6">
                    <h5 className="text-white mb-3">Quick links</h5>
                    <ul className="list-unstyled text-muted">
                    <Link to="/"><li>Home</li></Link> 
                        <Link to="/contact"><li>About</li></Link>
                        <Link to="/register"><li>Get started</li></Link>
                        <Link to="/reset"><li>Reset Password</li></Link>
                    </ul>
                </div>
                <div className="col-lg-4 col-md-6">
                    <h5 className="text-white mb-3">Newsletter</h5>
                    <p className="small text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                    <form action="#">
                        <div className="input-group mb-3">
                            <input className="form-control" type="text" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                            <button className="btn btn-primary" id="button-addon2" type="button"><FaTelegramPlane/></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </footer>
</div>
  )
}

export default Footer