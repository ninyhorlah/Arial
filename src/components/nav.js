import React, { useState } from 'react'
import NavLinks from './navLinks'

const Nav = () => {
    const[nav, setNav] = useState()
    const[scrollY, setScrollY] = useState( );

    let menu;

    if(nav){
        menu = <div className="mobile">
            <NavLinks closeNav={() => setNav(false)}/>
        </div>

    }

    let handleNavigation = () => {
        if( window.scrollY >= window.innerHeight){
                setScrollY(true)
        }else{
            setScrollY(false)
        }
    }

    window.addEventListener("scroll", handleNavigation)


    

    return (
        <div className={scrollY ? 'navFixed ' : 'nav'}>
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
                    <NavLinks closeNav={() => setNav(false)}/>
                </div>
            </div>
            {menu}
        </div>
    )
}

export default Nav
