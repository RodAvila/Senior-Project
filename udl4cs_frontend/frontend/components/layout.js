import Navbar from "./Navbar";
import { Figtree } from 'next/font/google'

const figtree = Figtree({ subsets: ['latin'], variable: '--font-figtree' })

export default function Layout({ children }) {
    return (
        <>
            <main className={figtree.className}>{children}</main>
        </>
    )
}