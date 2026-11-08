
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-white shadow-md">

            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-2xl"
                >
                    ☰
                </button>

                {/* Logo */}
                <div>
                    <img src="/logo-text.png" alt="logo image" />
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex gap-10">

                    <NavLink to="/" className={({ isActive }) => isActive ? "text-red-500" : "text-black hover:text-gray-500"}>
                        Home
                    </NavLink>

                    <NavLink to="/technologies" className={({ isActive }) => isActive ? "text-red-500" : "text-black hover:text-gray-500"}>
                        Technologies
                    </NavLink>

                    <NavLink to="/projects" className={({ isActive }) => isActive ? "text-red-500" : "text-black hover:text-gray-500"}>
                        Projects
                    </NavLink>

                    <NavLink to="/about" className={({ isActive }) => isActive ? "text-red-500" : "text-black hover:text-gray-500"}>
                        About
                    </NavLink>

                    <NavLink to="/contact" className={({ isActive }) => isActive ? "text-red-500" : "text-black hover:text-gray-500"}>
                        Contact
                    </NavLink>

                </div>

                {/* Buttons */}
                <div className="flex gap-2 md:gap-6">

                    <button className="bg-purple-600 hover:bg-purple-700 px-3 md:px-5 py-2 rounded-[20px] text-white transition-colors duration-200">
                        Sign in
                    </button>

                    <button className="bg-[#D91B7E] hover:bg-[#B81669] px-3 md:px-5 py-2 rounded-[20px] text-white transition-colors duration-200">
                        Sign up
                    </button>

                </div>

            </div>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="md:hidden flex flex-col gap-5 px-6 py-5 bg-white shadow-md">

                    <NavLink onClick={() => setMenuOpen(false)} to="/" className={({ isActive }) => isActive ? "text-red-500" : "text-black"}>
                        Home
                    </NavLink>

                    <NavLink onClick={() => setMenuOpen(false)} to="/technologies" className={({ isActive }) => isActive ? "text-red-500" : "text-black"}>
                        Technologies
                    </NavLink>

                    <NavLink onClick={() => setMenuOpen(false)} to="/projects" className={({ isActive }) => isActive ? "text-red-500" : "text-black"}>
                        Projects
                    </NavLink>

                    <NavLink onClick={() => setMenuOpen(false)} to="/about" className={({ isActive }) => isActive ? "text-red-500" : "text-black"}>
                        About
                    </NavLink>

                    <NavLink onClick={() => setMenuOpen(false)} to="/contact" className={({ isActive }) => isActive ? "text-red-500" : "text-black"}>
                        Contact
                    </NavLink>

                </div>
            )}

        </nav>
    );
}

export default Navbar;
