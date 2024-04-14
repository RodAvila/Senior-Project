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
        //console.error(error)
        throw new Error("Failed to authenticate token");
    }
}

export async function signToken(payload) {
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("10 minutes")
        .sign(jwtKey);
}

export async function generateToken(userName) {
    const minute = 1000 * 60
    const expiration = new Date(Date.now() + minute * 10)
    const token = await signToken({ userName, expiration})
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
        const validated = await response.json()

        if (validated) {
            return true
        } else {
            console.error('Failed to validate user')
            return false
        }
    } catch (error) {
        console.error('Error validating user credentials');
        return false
    }
}

export async function loginUser({ userName, password }) {
    const isValidCredentials = await validateCredentials(userName, password)

    if (!isValidCredentials) {
        throw new Error('Invalid credentials')
    } else {
        const cookie = await generateToken(userName)
        return cookie
    }
}

