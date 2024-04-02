import { authenticateToken } from './lib'

export default async function handler(req, res) {
    const jwtKey = new TextEncoder().encode(process.env.REACT_APP_JWT_KEY)
    try {
        const token = req.body
        if (!token) {
            throw new Error ("no token?")
        }

        const authentic = await authenticateToken(token).catch((err) => {
            res.status(400).json({ error: "Authentication failed" })
        })

        if (authentic) {
            res.status(200).json({ message: "Authentication successful" })
        }
        res.status(400).json({ error: "Authentication failed" })

    } catch (error) {
        //console.log(error)
        res.status(401).json({ error: "Invalid request"})
    }
}