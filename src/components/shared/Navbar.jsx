import { NavLink } from "react-router";
import NavLogo from '../../assets/images/logo.png';
import { ChartLine, Clock3, House } from "lucide-react";


const Navbar = () => {
    return (
        <div className="bg-base-100 shadow-sm">
            <div className="navbar px-20">
                <div className="navbar-start">
                    <a className="btn btn-ghost text-xl">
                        <img src={NavLogo} alt="Kin Keeper Logo" />
                    </a>
                </div>
                <div className="navbar-end lg:hidden">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to='/timeline'>TimeLine</NavLink></li>
                            <li><NavLink to='/stats'>Stats</NavLink></li>

                        </ul>
                    </div>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to='/' className={({ isActive }) => `btn font-semibold p-4 ${isActive ? 'bg-[#244D3F] text-white' : 'text-[#244D3F] bg-white btn-ghost'}`}><House/>Home</NavLink></li>
                        <li><NavLink to='/timeline' className={({ isActive }) => `btn font-semibold p-4 ${isActive ? 'bg-[#244D3F] text-white' : 'text-[#244D3F] bg-white btn-ghost'}`}> <Clock3/>TimeLine</NavLink></li>
                        <li><NavLink to='/stats' className={({ isActive }) => `btn font-semibold p-4 ${isActive ? 'bg-[#244D3F] text-white' : 'text-[#244D3F] bg-white btn-ghost'}`}><ChartLine/>Stats</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;