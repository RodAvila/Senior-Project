import React, { createContext, useContext, useState, useEffect } from 'react';
import {authenticateToken} from "@/pages/api/auth/lib.js"
const AuthContext = createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider(props){
    const AUTH_API_URL = "http://localhost:3000/api/auth/auth";
    const [authUser, setAuthUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        checkAuthentication();
    }, []);

    const checkAuthentication = async () => {
        try {
            console.log('context')
            const token = getTokenFromClient()
            if (token) {
                const response = await fetch(AUTH_API_URL, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(token),
                });
                if (response.ok) {
                    setIsAuthenticated(true)
                } else {
                    setIsAuthenticated(false)
                }
            }
        } catch (error) {
            console.error(error)
        }
    }

    const getTokenFromClient = () => {
        const cookies = document.cookie.split(';')
        for (const cookie of cookies) {
            const [name, value] = cookie.split('=')
            if (name === 'jwt-token') {
                return value
            }
        }
        return null
    }

    const value = {
        authUser,
        setAuthUser,
        isAuthenticated,
        setIsAuthenticated
    }

    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    )
}