import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import LoginBtn from '../../hooks/LoginBtn';
import { FaBars, FaWindowClose } from 'react-icons/fa';
const Header = () => {
    const [open, setOpen] = useState(false)
    return (
        //header area
        <header className='bg-gray-800'>
            <div className='my-container'>
                <div className='flex justify-between items-center p-2 lg:h-[56px] gap-4'>
                    <h3 className='text-2xl text-white font-semibold'>Demo Project</h3>
                    <div className={`md:flex justify-between items-center gap-4 absolute md:static ${open ? 'block top-12 left-0' : 'hidden -top-40'}`} >
                        <nav className='font-medium flex flex-col md:flex-row md:gap-4 text-black md:text-white'>
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/">Demos</NavLink>
                            <NavLink to="/">Page</NavLink>
                            <NavLink to="/">About</NavLink>
                        </nav>
                        <LoginBtn><Link to="/">Login</Link></LoginBtn>
                    </div>
                    <div className='md:hidden text-white' onClick={()=> setOpen(!open)}>
                        {
                            open ? <FaBars className=''></FaBars> : <FaWindowClose></FaWindowClose>
                        }
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;