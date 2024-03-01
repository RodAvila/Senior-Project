import Navbar from "./navbar";

export default function Layout({children}) {
    return (
        <>
        <Navbar></Navbar>
        <main>{children}</main>
        </>
    )
}