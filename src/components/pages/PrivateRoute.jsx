import { useEffect } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router'
import {useDispatch} from 'react-redux'
import { setUser, clearUser } from '../../redux/userSlice.js'

export default function PrivateRoute() {
    const token = localStorage.getItem("userAccessToken")
    const dispatch = useDispatch()
    const location = useLocation()

    async function getUser (){
        let res = await fetch("http://localhost:3000/api/user/auth/getUser", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        
        let data = await res.json()

        if(data.success){
            localStorage.setItem("user", JSON.stringify(data.user))
            if(!data.user.isActive) {
                localStorage.removeItem("userAccessToken")
                localStorage.setItem("user", JSON.stringify({}))
            }
            return
        }



    }

    useEffect(() => {
        getUser()
    }, [location.pathname])


    return !token ? <Navigate to={"/login"} /> : <Outlet />
}
