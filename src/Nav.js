import React from 'react';
import './main.css';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav className={'nav-header'}>
            <h3>Logo</h3>
            <ul className={'nav-link'}>
                <Link to={'/reports'} className={'link'}>
                    <li>Reports</li>
                </Link>
                <Link to={'/about'} className={'link'}>
                    <li>About</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;
