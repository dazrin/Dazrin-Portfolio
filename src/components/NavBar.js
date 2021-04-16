import React from "react"
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";


export default function NavBar() {
    return (
        <header className="bg-purple-800">
            <div className="container mx-auto px-1 flex justify-between">
                <nav>
                    <NavLink to="/"
                     exact
                     activeClassName="text-white"
                     className="inflex-flex item-center py-6 px-3 mr-4 text-blue-50 hover:text-blue-300 text-4xl font-bold cursive tracking-widest">
                        Dazrin
                    </NavLink>
                    <NavLink to="/Post"
                        className="inline-flex items-center py3 px-3 my-6 rounded text-blue-50 hover:text-blue-300"
                        activeClassName="text-blue-100 bg-blue-500">
                        Blog Posts
                    </NavLink>
                    <NavLink to="/Project"
                    className="inline-flex items-center py3 px-3 my-6 rounded text-blue-50 hover:text-blue-300"
                    activeClassName="text-blue-100 bg-blue-500">
                        Projects
                    </NavLink>
                    <NavLink to="/About"
                    className="inline-flex items-center py3 px-3 my-6 rounded text-blue-50 hover:text-blue-300"
                    activeClassName="text-blue-100 bg-blue-500">
                        About Me
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-1">
                    <SocialIcon url="https://twitter.com/dazrinDev" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
                    <SocialIcon url="https://github.com/dazrin" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
                    <SocialIcon url="https://www.linkedin.com/in/dazrin-tioseco/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
                </div>
            </div>
        </header>
    )
}