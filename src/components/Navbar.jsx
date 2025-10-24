import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { toast } from 'react-toastify';
import { FiLogOut, FiMenu, FiX } from 'react-icons/fi';
import { AuthContext } from "../context/AuthContext";
import Spinner from '../components/Spinner';

const Navbar = () => {
    const { user, logOut, loading } = useContext(AuthContext);
    const [menuOpen, setMenuOpen] = useState(false);

    if (loading) return <Spinner></Spinner>;

    const handleLogout = () => {
        logOut()
            .then(() => toast.success("Logged out successfully"))
            .catch((err) => toast.error(err.message));
    };

    const fallbackPhoto = "https://i.ibb.co/ZYW3VTp/brown-brim.png";

    const navItems = (
        <>
            <NavLink to="/" className="hover:text-blue-600 text-base font-medium">Home</NavLink>
            <NavLink to="/all-groups" className="hover:text-blue-600 text-base font-medium">All Groups</NavLink>
            <NavLink to="/create-group" className="hover:text-blue-600 text-base font-medium">Create Group</NavLink>
            <NavLink to="/my-groups" className="hover:text-blue-600 text-base font-medium">My Groups</NavLink>
        </>
    );

    return (
        <nav className="bg-base-100 shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-2 md:gap-3">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold text-indigo-600">HobbyHub</Link>

                {/* Desktop Menu */}
                <div className="hidden ml-auto md:flex gap-6 items-center">
                    {navItems}
                </div>
                <div className='hidden md:block'>
                    <input type="checkbox" value="dim" className="toggle theme-controller" />
                </div>
                

                {/* Right Side */}
                <div className="flex items-center gap-3">
                    {!user ? (
                        <div className="flex gap-2 md:gap-3">
                            <NavLink
                                to="/login"
                                className="bg-indigo-600 text-white px-3 py-1 md:px-4 md:py-2 rounded-md text-sm md:text-base hover:bg-indigo-700"
                            >
                                Login
                            </NavLink>
                            <NavLink
                                to="/register"
                                className="border border-indigo-600 text-indigo-600 px-3 py-1 md:px-4 md:py-2 rounded-md text-sm md:text-base hover:bg-indigo-50"
                            >
                                Register
                            </NavLink>
                        </div>
                    ) : (
                        <div className="flex items-center gap-2 md:gap-3">
                            <div className="relative group cursor-pointer">
                                <img
                                    src={user?.photoURL || fallbackPhoto}
                                    alt="User"
                                    className="w-9 h-9 md:w-10 md:h-10 rounded-full border-2 border-indigo-500"
                                    onError={(e) => { e.target.src = fallbackPhoto; }}
                                    title={user?.displayName || "Anonymous User"}
                                />
                                <div className="absolute top-12 left-0 bg-gray-800 text-white text-xs px-2 py-1 rounded-md hidden group-hover:block z-10">
                                    {user.displayName || "Anonymous User"}
                                </div>
                            </div>
                            <button
                                onClick={handleLogout}
                                className="bg-indigo-600 text-white px-3 py-2 md:px-4 sm:py-2 rounded-md text-sm md:text-base hover:bg-indigo-700 flex items-center gap-1"
                            >
                                Logout
                            </button>
                        </div>
                    )}

                   
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setMenuOpen(!menuOpen)}>
                            {menuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden px-4 pb-4 flex flex-col gap-4 bg-base-100 text-base font-medium">
                    <input type="checkbox" value="dim" className="toggle theme-controller" />
                    {navItems}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
