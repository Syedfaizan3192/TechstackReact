import React, { useEffect } from "react"
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    useNavigate,
    Navigate,
    Outlet,
} from "react-router-dom";
import AuthLayout from "../Layouts/Authlayout/Authlayout";
import Login from "../components/Login";
import SignUp from "../components/SIgnUp";
import DashboardTable from "../pages/Dashboard";
import { GetAuthUserLocalStorage, GetTokenLocalStorage } from "../services/localstorage";

const RouteConfig = () => {

    const ProtectedRoute = () => {
        const user = GetAuthUserLocalStorage()

        return (
            user?.token ? <Outlet /> : <Navigate to="/" />
        )
    }

    // Private Route for Authentication
    const AuthRoute = () => {
        const user = GetAuthUserLocalStorage()
        return (
            user?.token ? <Navigate to="/dashboard" /> : <Outlet />
        )
    }
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AuthRoute />}>
                    <Route element={<AuthLayout />}>
                        <Route exact path="/" element={<Login />} />
                        <Route exact path="/sign-up" element={<SignUp />} />
                    </Route>
                </Route>
                <Route element={<ProtectedRoute />}>
                    <Route exact path="/dashboard" element={<DashboardTable />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RouteConfig