import React, { useState, useEffect } from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-scroll';

function Navbar() {
    const [nav, setNav] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setNav(true);
        } else {
            setNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeBackground);
        return () => {
            window.removeEventListener('scroll', changeBackground);
        };
    }, []);

    return (
        <nav className={nav ? "nav active" : "nav"}>
            <Link to='/' className='logo'>
                <img src={logo} alt='' />
            </Link>
            <input className='menu-btn' type='checkbox' id='menu-btn' />
            <label className='menu-icon' htmlFor='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                <li><Link to='main' smooth={true} duration={500}>Anasayfa</Link></li>
                <li><Link to='egitim' smooth={true} duration={500}>Faaliyetlerimiz</Link></li>
                <li><Link to='/' smooth={true} duration={500}>Eğitimlerimiz</Link></li>
                <li><Link to='/' smooth={true} duration={500}>Bize Ulaşın</Link></li>
                {/* Gereksiz tekrarları kaldırdım */}
            </ul>
        </nav>
    );
}

export default Navbar;
