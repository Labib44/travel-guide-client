import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/img/logo.png'
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Header = () => {
    const {user, logOut}=useContext(AuthContext);

   const handleLogOut=()=>{
    logOut()
    .then()
    .catch();

    }

    return (
        <div className="navbar bg-neutral">
            <div className="flex-none">
                <button className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </button>
            </div>
            <div className="flex-1">
                <img className='w-20 h-16' src={logo} alt="" />
                <Link to={'/'} className="btn btn-ghost normal-case text-xl">Travel Guide</Link>
            </div>
            <div className="flex-none">
            
            {user?.email ?
            <>
            <Link to={'/myreviews'} className="btn btn-ghost normal-case text-xl">My Reviews</Link>
            <Link to={'/addservice'} className="btn btn-ghost normal-case text-xl">Add Service</Link>
            <Link onClick={handleLogOut} className="btn btn-ghost normal-case text-xl">Log Out</Link>
            </>
            :
                <Link to={'/login'} className="btn btn-ghost normal-case text-xl">Login</Link>
            }
            <Link to={'/blog'} className="btn btn-ghost normal-case text-xl">Blog</Link>
            <Link to={'/about'} className="btn btn-ghost normal-case text-xl">About</Link>
                <button className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                </button>
            </div>
        </div>
    );
};

export default Header;