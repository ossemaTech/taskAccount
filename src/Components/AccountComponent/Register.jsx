import React from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
    return (
        <div className="register">
            <div className="modal fade" id="register" tabindex="-1" aria-labelledby="registerLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <h3 className="title-login">Sign up to Vitapeutics</h3>

                            <form className="container form-login">
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email</label>
                                    <input type="email" className="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email address" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Enter your password" />
                                </div>

                                <button type="submit" className="btn btn-success btn-block btn-lg btn-login">Sign in</button>
                                <Link to="/" title="vitapeutics" className="btn btn-white btn-block btn-forget">Sign in with social account</Link>
                            </form>
                            <div className="login-social container">
                                <div className="row row-social">
                                    <div className="col-md-6 column-fb">
                                        <button className="btn btn-white btn-social btn-block">
                                            <i className="fa fa-fecebook-square" />
                                            Sign in
                                        </button>
                                    </div>
                                    <div className="col-md-6 column-g">
                                        <button className="btn btn-white btn-social btn-block">
                                            <i className="fa fa-google" />
                                            Sign in
                                        </button>
                                    </div>
                                    <div className="col-md-12 column-a">
                                        <button className="btn btn-white btn-social btn-block">
                                            <i className="fa fa-apple" />
                                            Sign in with Apple
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <p className="desc container">By continuing you indicate that you’ve read and agree to our Terms of Service and Privacy Policy.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" data-toggle="modal" data-dismiss="modal" data-target="#login" className="btn btn-default btn-block">Already have an account?</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
