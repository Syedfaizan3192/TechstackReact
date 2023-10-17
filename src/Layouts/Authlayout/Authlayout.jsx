import React from "react"
import { ToastContainer } from "react-bootstrap"
import { Outlet } from "react-router-dom"
import SignInImage from '../../assets/images/login-bg.png'

const AuthLayout = () => {
    return (
        <>
            <div className={"AuthLayout"}>
                <div className="authenticationLayout">
                    <div className={"left"}>
                        <Outlet />
                    </div>
                    <div className={"right"}>
                        <img className={"img-cover"} src={SignInImage} alt={""} title={""} />
                    </div>
                </div>
                <ToastContainer />
            </div>
        </>
    )
}

export default AuthLayout