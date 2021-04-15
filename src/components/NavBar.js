import React from "react"
import { NavLink } from "react-router-dom";


export default function NavBar() {
    return (
        <header className="bg-purple-900">
            <div className="container mx-auto flex justify-between">
                <nav>
                    <NavLink to="/"
                     exact
                     activeClassName="text-white"
                     className="inflex-flex item-center py-6 px-3 mr-4 text-blue-50 hover:text-blue-300 text-4xl font-bold cursive tracking-widest">
                        Dazrin
                    </NavLink>
                    <NavLink to="/Post"
                    className="inline-flex items-center py3 px-3 my-6 rounded text-blue-50 hover:text-blue-300">
                        Blog Posts
                    </NavLink>
                    <NavLink to="/Project"
                    className="inline-flex items-center py3 px-3 my-6 rounded text-blue-50 hover:text-blue-300">
                        Projects
                    </NavLink>
                    <NavLink to="/About"
                    className="inline-flex items-center py3 px-3 my-6 rounded text-blue-50 hover:text-blue-300">
                        About Me
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}