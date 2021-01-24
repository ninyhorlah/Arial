import React, { useEffect, useState } from 'react'
import NavLinks from './navLinks'

const Nav = () => {
    const[nav, setNav] = useState()
    // const[y, setY] = useState( );

    let menu;

    if(nav){
        menu = <div className="mobile">
            <NavLinks/>
        </div>

    }

    let handleNavigation = () => {
        if( window.scrollY > window.innerWidth){
                setNav(true)
        }else{
            setNav(false)
        }
    }

    window.addEventListener("scroll", handleNavigation)


    

    return (
        <nav className={nav ? 'navFixed' : nav}>
            <div className='nav'>
                <div className="logo">
                    Arl<span>i</span>n
                </div>
                <div className="toggle" onClick={() => setNav(!nav)}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>

                <div className="web">
                    <NavLinks/>
                </div>
            </div>
            {menu}
        </nav>
    )
}

export default Nav
