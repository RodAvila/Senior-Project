import { loginUser } from './lib'

export default async function handler(req, res) {
    try {
        let { userName, password } = req.body

        if (!userName || !password) {
            res.status(400).json({ error: 'Need both username and password' })
        } else {
            const cookie = await loginUser({ userName, password })
            res.setHeader('Set-Cookie', cookie);
            res.status(200).json({ cookie })
        }
    } catch (error) {
        console.log(error)
        res.status(401).json({ error: 'Invalid credentials'})
        return
    }
}