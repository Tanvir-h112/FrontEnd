import { Link } from '@gatsbyjs/reach-router'
import React from 'react'
import classes from './Layout.module.css'

function Layout(props){
  const path = window.location.pathname;
    return (
        <div className={classes.app}>
            <nav className={classes.nav}>
                <div>
                    <h3>Brand Name</h3>
                </div>
                <div className={classes.menu}>
                    <ul>
                        <li>
                           <Link to='/' className={path == '/' ? classes.navItemActive : classes.navItem}>Home</Link>
                        </li>
                        <li>
                            <Link to='/about' className={path == '/about' ? classes.navItemActive : classes.navItem}>About</Link>
                        </li>
                        <li>
                            <Link to='/help' className={path == '/help' ? classes.navItemActive : classes.navItem}>Help</Link>
                        </li>
                        <li>
                            <Link to='/clock' className={path == '/clock' ? classes.navItemActive : classes.navItem}>Clock</Link>
                        </li>
                        <li>
                            <Link to='/tasks' className={path == '/tasks' ? classes.navItemActive : classes.navItem}>Tasks</Link>
                        </li>
                        <li>
                            <Link to='/contact' className={path == '/contact' ? classes.navItemActive : classes.navItem}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
           
           
           
            <main className={classes.main}>
               {props.children}
            </main>
           
           
           
            <footer className={classes.footer}>
                <div>
                    <h3>Footer</h3>
                </div>
                <div>
                    <ul>
                        <li>Link One </li>
                        <li>Link Two</li>
                        <li>Link Three</li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}

export default Layout;