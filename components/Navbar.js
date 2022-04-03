import { useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"

function NavLink({ to, children }) {
    return <a href={to} className={`transition ease-in-out mx-4 py-2 text-white hover:scale-110`}>
        {children}
    </a>
}

function NavButton({ to, children }) {
    return <a href={to} className={`transition ease-in-out mx-4 bg-sec text-white shadow-md px-6 py-2 rounded-md  hover:scale-110`}>
        {children}
    </a>
}

function MobileNav({ open, setOpen }) {

    return (
        <div className={`text-white absolute top-0 left-0 h-screen w-screen bg-main transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className="flex items-center justify-center h-20 filter drop-shadow-md bg-sec">
                <a className="" href="/"><p className='text-spotify'>Statify</p></a>
            </div>
            <div className="flex flex-col ml-4">
                <a className="my-4 text-xl font-medium text-center transition ease-in-out hover:scale-110" href="/about" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                    About
                </a>
                <a className="my-4 text-xl font-normal text-center transition ease-in-out hover:scale-110" href="/contact" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                    Contact
                </a>
                <a className="px-6 py-2 my-4 mr-4 text-xl font-normal text-center text-white transition ease-in-out rounded-md shadow-md bg-sec hover:scale-110" href="/api/auth/signin" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                    CHECK STATS
                </a>
            </div>
        </div>
    )
}

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const { data: session } = useSession()
    if (session) {
        return (
            <>

                <nav className="flex items-center h-20 px-4 py-4 filter drop-shadow bg-main">
                    <MobileNav open={open} setOpen={setOpen} />
                    <div className="flex items-center w-3/12">
                        <a className="ml-6 text-2xl font-semibold text-white" href="/"><p className='text-spotify'>Statify</p></a>
                    </div>
                    <div className="flex items-center justify-end w-9/12">

                        <div className="relative z-50 flex flex-col items-center justify-between w-8 h-8 md:hidden " onClick={() => {
                            setOpen(!open)
                        }}>
                            {/* hamburger button */}
                            <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                            <span className={`h-1 w-full bg-white rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                            <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                        </div>

                        <div className="hidden md:flex">
                            <NavLink to="/">
                                HOME
                            </NavLink>
                            <NavLink to="/about">
                                PLAYLISTS
                            </NavLink>
                            <NavLink to="/contact">
                                TOP ARTISTS
                            </NavLink>
                            <NavLink to="/contact">
                                TOP TRACKS
                            </NavLink>
                            <button onClick={() => signOut()} className="px-6 py-2 mx-4 text-white transition ease-in-out rounded-md shadow-md bg-sec hover:scale-110">
                                SIGN OUT
                            </button>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
    return (
        <nav className="flex items-center h-20 px-4 py-4 filter drop-shadow bg-main">
            <MobileNav open={open} setOpen={setOpen} />
            <div className="flex items-center w-3/12">
                <a className="ml-6 text-2xl font-semibold text-white" href="/"><p className='text-spotify'>Statify</p></a>
            </div>
            <div className="flex items-center justify-end w-9/12">

                <div className="relative z-50 flex flex-col items-center justify-between w-8 h-8 md:hidden " onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full bg-white rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>

                <div className="hidden md:flex">
                    <NavLink to="/">
                        HOME
                    </NavLink>
                    <NavLink to="/about">
                        ABOUT
                    </NavLink>
                    <NavLink to="/contact">
                        CONTACT
                    </NavLink>
                    <NavButton to="/api/auth/signin">
                        CHECK STATS
                    </NavButton>
                </div>
            </div>
        </nav>
    )
}
