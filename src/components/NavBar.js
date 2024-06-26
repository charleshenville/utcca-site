import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.css';

function NavBar(prams) {

    // TODO: make top bar like glass with blur
    const [sidebar, setSidebar] = useState(false);
    const [isLight, setIsLight] = useState(true);

    function handleScrollHome() {
        const docelem = document.getElementById("homeh");
        if (docelem !== null) docelem.scrollIntoView({ behavior: 'smooth' });
        setSidebar(!sidebar);
    }
    function handleScrollAbout() {
        const docelem = document.getElementById("about");
        if (docelem !== null) docelem.scrollIntoView({ behavior: 'smooth' });
        setSidebar(!sidebar);
    }
    function handleScrollTeams() {
        const docelem = document.getElementById("teams");
        if (docelem !== null) docelem.scrollIntoView({ behavior: 'smooth' });
        setSidebar(!sidebar);
    }
    function handleScrollContact() {
        const docelem = document.getElementById("contact");
        if (docelem !== null) docelem.scrollIntoView({ behavior: 'smooth' });
        setSidebar(!sidebar);
    }
    function toggleSidebarState() {
        setSidebar(!sidebar);
    }
    const changeCSSVars = () => {
        if (isLight) {
            document.documentElement.style.setProperty('--text', 'var(--light-text)');
            document.documentElement.style.setProperty('--bkg', 'var(--light-bkg)');
            document.documentElement.style.setProperty('--tbkg', 'var(--light-tbkg)');
        } else {
            document.documentElement.style.setProperty('--text', 'var(--dark-text)');
            document.documentElement.style.setProperty('--bkg', 'var(--dark-bkg)');
            document.documentElement.style.setProperty('--tbkg', 'var(--dark-tbkg)');
        }
    };

    const toggleColourTheme = () => {
        setIsLight((prevIsLight) => !prevIsLight);
    };

    useEffect(() => {
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

        setIsLight(!prefersDarkScheme.matches); // Set the initial theme
        changeCSSVars(); // Apply initial theme

        const themeChangeListener = (event) => {
            setIsLight(!event.matches);
        };
        prefersDarkScheme.addEventListener('change', themeChangeListener);

        return () => {
            prefersDarkScheme.removeEventListener('change', themeChangeListener);
        };
    }, []);

    useEffect(() => {
        changeCSSVars();
    }, [isLight]);

    if (!prams.report) return (
        <div className={styles.master}>
            <div className={sidebar ? styles.allshown : styles.all}>
                <div className={sidebar ? styles.sidebarshown : styles.sidebar}>
                    <div className={sidebar ? styles.sidebartransshown : styles.sidebartrans}>
                        <Link to='/' className={styles.nofancy} onClick={handleScrollHome}>Home</Link>
                        <Link to='/' className={styles.nofancy} onClick={handleScrollAbout}>About</Link>
                        <Link to='/' className={styles.nofancy} onClick={handleScrollTeams}>Teams</Link>
                        <Link to='/gallery' className={styles.nofancy} onClick={toggleSidebarState}>Gallery</Link>
                        <Link to='/' className={styles.nofancy} onClick={handleScrollContact}>Contact</Link>
                    </div>

                </div>
                <div onClick={toggleSidebarState} className={sidebar ? styles.clickOff : styles.clickOffhidden} />
            </div>
            <div className={styles.main} />
            <div className={styles.mainbelow} />
            <div className={styles.mainhidden}>
                <svg onClick={toggleSidebarState} className={styles.burger} width="96" height="72" viewBox="0 0 96 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {
                        sidebar ?
                            <>
                                <rect x="3.7373" y="0.0219421" width="96.9746" height="4.84873" transform="rotate(45 3.7373 0.0219421)" fill="var(--text)" />
                                <rect x="0.308838" y="68.5933" width="96.9746" height="4.84873" transform="rotate(-45 0.308838 68.5933)" fill="var(--text)" />
                            </>
                            :
                            <>
                                <rect width="96" height="4.8" fill="var(--text)" />
                                <rect y="33.6" width="96" height="4.8" fill="var(--text)" />
                                <rect y="67.2" width="96" height="4.8" fill="var(--text)" />
                            </>
                    }
                </svg>
                <svg onClick={toggleColourTheme} className={styles.switch} viewBox="0 0 260 132" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="2" width="256" height="127.502" rx="63.751" fill="var(--bkg)" stroke="var(--text)" stroke-width="4" />
                    <circle cx="194" cy="66" r="25" fill="var(--bkg)" stroke="var(--text)" stroke-width="4" />
                    <line x1="64" y1="91" x2="64" y2="41" stroke="var(--text)" stroke-width="4" />
                    <circle className={isLight ? styles.switchBallLight : styles.switchBallDark} cx="64.5" cy="65.5" r="50.5" fill="var(--text)" />
                </svg>

            </div>
        </div>

    );
    return sidebar;

};


export default NavBar;
