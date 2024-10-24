import logo from "../assets/logo.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaSquareInstagram } from "react-icons/fa6";
import { useEffect, useState } from "react";

const Navbar = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <nav className="mb-20 flex items-center justify-between">
            <div className={`flex flex-shrink-0 items-center object-contain h-12 w-12 py-10 ${isLoaded ? 'logo-animation' : ''}`}>
                <img src={logo} alt="logo" />
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com" target="_blank" rel="nooperner noreferrer" className="transition duration-300 ease-in-out hover:text-blue-700">
                    <FaLinkedin />
                </a>
                <a href="https://github.com" target="_blank" rel="nooperner noreferrer" className="transition duration-300 ease-in-out hover:text-gray-700">
                    <FaGithub />
                </a>
                <a href="https://twitter.com" target="_blank" rel="nooperner noreferrer" className="transition duration-300 ease-in-out hover:text-blue-400">
                    <BsTwitterX />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="nooperner noreferrer" className="transition duration-300 ease-in-out hover:text-pink-500">
                    <FaSquareInstagram />
                </a>
            </div>
        </nav>
    );
}

export default Navbar;