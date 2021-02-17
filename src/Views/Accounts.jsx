import React from 'react'
import Login from "../Components/AccountComponent/Login";
import Register from "../Components/AccountComponent/Register";
import "./Accounts.scss";
export default function Accounts() {
    return (
        <div className="account">
            <Login />
            <Register />
        </div>
    )
}
