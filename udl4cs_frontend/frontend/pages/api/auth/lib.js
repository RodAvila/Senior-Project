import { SignJWT, jwtVerify } from "jose";
import {serialize} from "cookie";
import { NextRequest, NextResponse } from "next/server";

const jwtKey = new TextEncoder().encode(process.env.REACT_APP_JWT_KEY)

export async function authenticateToken(jwtToken) {
    try {
        if (!jwtKey || jwtKey.length === 0 ) {
            throw new Error("No key has been set")
        }
        const authenticated = await jwtVerify(jwtToken, jwtKey, {algorithms: ["HS256"]})
        return authenticated.payload
    } catch (error) {
        throw new Error("Failed to authenticate token");
    }
}

export async function signToken(payload) {
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("1 minute")
        .sign(jwtKey);
}

export async function generateToken(userName, id, role) {
    // Time set for 30 minutes
    const expiration = Math.floor(Date.now() / 1000) + 60 * 30
    const expjwt = new Date(Date.now() + 60 * 1000 * 30)
    const token = await signToken({ id, userName, role, expjwt})
    const cookie = serialize ("jwt-token", token, {
        maxAge: expiration,
        path: '/',
        sameSite: 'None',
        secure: true
    })
    return cookie
}

async function validateCredentials(userName, password) {
    const backendurl = 'http://localhost:8080/validate'
    try {
        const loginData = {
            username: userName,
            password: password
        }
        const response = await fetch(backendurl, {
            method: 'POST',
                headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData)
        })
        const resp = await response.json()
        if (resp.validated) {
            return resp
        } else {
            console.error('Failed to validate user')
            return resp
        }
    } catch (error) {
        console.error('Error validating user credentials');
        return false
    }
}

export async function loginUser({ userName, password }) {
    const { validated, userId, role } = await validateCredentials(userName, password)
    if (!validated) {
        throw new Error('Invalid credentials')
    } else {
        const cookie = await generateToken(userName, userId, role)
        return cookie
    }
}

