import { useContext } from "react";
import { FiMenu } from "react-icons/fi";

const Navbar = () =>{
 
    return <>
    <div className="bg-gray-600 flex justify-between px-6 py-3 text-white items-center">
        <div className="font-bold text-3xl">Logo</div>
        <div className="flex gap-5 items-center">
            <ul className="hidden md:flex gap-5">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="text-2xl md:hidden">
                <FiMenu />
            </div>
        </div>
    </div>
    </>
}

export default Navbar