import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <div className="login">

            <div className="modal fade" id="login" tabindex="-1" aria-labelledby="loginLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <h3 className="title-login">Login to Vitapeutics</h3>
                            <div className="login-social container">
                                <div className="row row-social">
                                    <div className="col-md-6 column-fb">
                                        <button className="btn btn-white btn-social btn-block">
                                            <i className="fa fa-fecebook-square" />
                                            Login
                                        </button>
                                    </div>
                                    <div className="col-md-6 column-g">
                                        <button className="btn btn-white btn-social btn-block">
                                            <i className="fa fa-google" />
                                            Login
                                        </button>
                                    </div>
                                    <div className="col-md-12 column-a">
                                        <button className="btn btn-white btn-social btn-block">
                                            <i className="fa fa-apple" />
                                            Continue with Apple
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <p className="line-or"><span>Or</span></p>
                            <form className="container form-login">
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email</label>
                                    <input type="email" className="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email address" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Enter your password" />
                                </div>

                                <button type="submit" className="btn btn-success btn-block btn-lg btn-login">Login</button>
                                <Link to="/" title="vitapeutics" className="btn btn-white btn-block btn-forget">Forgot your password?</Link>
                                <p className="desc">By continuing you indicate that you’ve read and agree to our Terms of Service and Privacy Policy.</p>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" data-toggle="modal" data-target="#register" data-dismiss="modal" className="btn btn-default btn-block">Don’t have an account?</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
