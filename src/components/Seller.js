import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
function Seller() {

    return (
    <div className="container-fluid" style={{marginTop:"1rem"}}>
    <div className="row no-gutter">
        <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image1"></div>
        <div className="col-md-8 col-lg-6">
        <div className="login d-flex align-items-center py-5">
            <div className="container">
            <div className="row">
                <div className="col-md-9 col-lg-8 mx-auto">
                <h3 className="login-heading mb-4">Register as Seller!</h3>
                <form>
                <div className="form-label-group">
                    <input type="email" id="inputEmail" className="form-control" placeholder="Enter your name" required autofocus/>
                    <label for="inputEmail">Name</label>
                    </div>
                    <div className="form-label-group">
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus/>
                    <label for="inputEmail">Email address</label>
                    </div>

                    <div className="form-label-group">
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
                    <label for="inputPassword">Password</label>
                    </div>
                    <div className="form-label-group">
                    <input type="email" id="inputEmail" className="form-control" placeholder="Enter your phone no" required autofocus/>
                    <label for="inputEmail">Phone No.</label>
                    </div>
                    <div className="form-label-group">
                    <input type="email" id="inputEmail" className="form-control" placeholder="Enter your Address" required autofocus/>
                    <label for="inputEmail">Address</label>
                    </div>
                    <div className="form-label-group">
                    <input type="email" id="inputEmail" className="form-control" placeholder="Enter your GST-ID" required autofocus/>
                    <label for="inputEmail">GST-TD</label>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" type="submit">Register</button>

                </form>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>
        
        
    );
}
export default Seller;
