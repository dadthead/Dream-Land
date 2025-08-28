import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { X, Menu } from "lucide-react";
import assets from "../../assets/assets";
import { motion } from "framer-motion";

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="absolute w-full  text-white  bg-transparent top-0 left-0 z-50">

            <div className="flex justify-between items-center px-6  py-4">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-5  md:px-8">
                    <motion.img
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 1 }}
                        transition={{ duration: 1.5 }}
                    src={assets.DlLogo} alt="logo" className="w-full h-8  md:w-full md:h-14 sm:w-full sm:h-12" />
                </Link>


                {/* Menu Open */}
                <motion.button
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5 }}

                    onClick={() => setOpen(true)}
                    className="flex items-center gap-5 uppercase font-bold text-lg cursor-pointer" >
                    <span className="text-gray-300 hover:text-amamber-800 poppins">Menu</span>
                    
                    <div className="flex flex-col gap-1">

                        <span className="w-7  h-1 bg-white hover:bg-amber-900"></span>
                        <span className="w-5  h-1 bg-white hover:bg-amber-900"></span>
                        <span className="w-7  h-1 bg-white hover:bg-amber-900"></span>
                    </div>
                </motion.button>
            </div>

            {/* Side  Menu */}
            <div
                className={`fixed top-0 right-0 h-full w-60 bg-img text-white transform ${open ? "translate-x-0" : "translate-x-full"
                    } transition-transform duration-500 ease-in-out z-50 shadow-lg`}
            >
                {/* Close Button */}
                <div className="flex justify-end p-4">
                    <button onClick={() => setOpen(false)}>
                        <X className="w-7 h-7 text-white" />
                    </button>
                </div>

                {/* Nav Links */}
                <ul className="flex flex-col gap-6 text-[#a01d23]/70 px-8 mt-8 uppercase font-semibold text-lg">
                    <NavLink to="/" onClick={() => setOpen(false)}>
                        <li className="hover:text-[#a01d23] cursor-pointer">Home</li>
                    </NavLink>
                    <NavLink to="/about" onClick={() => setOpen(false)}>
                        <li className="hover:text-[#a01d23] cursor-pointer">About</li>
                    </NavLink>
                    <NavLink to="/careers" onClick={() => setOpen(false)}>
                        <li className="hover:text-[#a01d23] cursor-pointer">Careers</li>
                    </NavLink>
                    <NavLink to="/ourprojects" onClick={() => setOpen(false)}>
                        <li className="hover:text-[#a01d23] cursor-pointer">Our Projects</li>
                    </NavLink>
                    <NavLink to="/contact" onClick={() => setOpen(false)}>
                        <li className="hover:text-[#a01d23] cursor-pointer">Contact</li>
                    </NavLink>
                    <NavLink to="/clients" onClick={() => setOpen(false)}>
                        <li className="hover:text-[#a01d23] cursor-pointer">Clients</li>
                    </NavLink>
                    <NavLink to="/gallery" onClick={() => setOpen(false)}>
                        <li className="hover:text-[#a01d23] cursor-pointer">Gallery</li>
                    </NavLink>
                </ul>
            </div>
        </header>
    );
};

export default Header;
