import { Navigate, Outlet } from 'react-router'

export default function PrivateRoute() {

    let token = localStorage.getItem("accessToken")

    return !token? <Navigate to={"/login"} /> : <Outlet />
}
