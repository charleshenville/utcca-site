import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.css';

function NavBar(prams) {

    const [sidebar, setSidebar] = useState(false);

    function toggleSidebarState() {
        setSidebar(!sidebar);
    }

    if (!prams.report) return (
        <div className={styles.master}>
            <div className={sidebar ? styles.allshown : styles.all}>
                <div className={sidebar ? styles.sidebarshown : styles.sidebar}>
                    <div className={sidebar ? styles.sidebartransshown : styles.sidebartrans}>
                        <Link to='/' className={styles.nofancy}>Home</Link>
                        <div>About</div>
                        <Link to='/gallery' className={styles.nofancy}>Gallery</Link>
                        <div>Contact</div>
                    </div>
                    
                </div>
            </div>
            <div className={styles.main}/>
            <div className={styles.mainbelow}/>
            <div className={styles.mainhidden}>
                <svg onClick={toggleSidebarState} className={styles.burger} width="96" height="72" viewBox="0 0 96 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {
                    sidebar ? 
                    <>
                        <rect x="3.7373" y="0.0219421" width="96.9746" height="4.84873" transform="rotate(45 3.7373 0.0219421)" fill="var(--text)"/>
                        <rect x="0.308838" y="68.5933" width="96.9746" height="4.84873" transform="rotate(-45 0.308838 68.5933)" fill="var(--text)"/>
                    </>
                    :
                    <>
                        <rect width="96" height="4.8" fill="var(--text)" />
                        <rect y="33.6" width="96" height="4.8" fill="var(--text)" />
                        <rect y="67.2" width="96" height="4.8" fill="var(--text)" />
                    </>
                    }
                </svg>
            </div>
        </div>
        
    );
    return sidebar;

};


export default NavBar;
