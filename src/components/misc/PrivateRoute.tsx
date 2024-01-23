import React from 'react'
import { Navigate } from 'react-router-dom'

function PrivateRoute({ children }: PrivateRouteProps) {
    const { userIsAuthenticated } = useAu()
    return userIsAuthenticated() ? children : <Navigate to="/login" />
}

type PrivateRouteProps = {
    children: React.ReactNode,
}

export default PrivateRoute