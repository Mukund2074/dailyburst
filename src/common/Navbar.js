import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light shadow-lg sticky-top">
                <div className="container">
                    <img src="images/logo1.png" className="logo img-fluid" alt="Daily Burst" />
                    <Link className="navbar-brand" to="/">
                        <span>
                            Daily Burst 
                            <small>Daily News Dash</small>
                        </span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link click-scroll" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link click-scroll" to="/business">Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link click-scroll" to="/sports">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link click-scroll" to="/entertainment">Entertainment</Link>
                            </li>
                            <li className={`nav-item dropdown ${isDropdownOpen ? 'show' : ''}`}>
                                <label className="nav-link click-scroll dropdown-toggle" to="" id="navbarLightDropdownMenuLink" onClick={handleDropdownToggle} aria-expanded={isDropdownOpen ? 'true' : 'false'}>More</label>
                                <ul className={`dropdown-menu dropdown-menu-light ${isDropdownOpen ? 'show' : ''}`} aria-labelledby="navbarLightDropdownMenuLink">
                                    <li><Link className="dropdown-item" to="/world">World</Link></li>
                                    <li><Link className="dropdown-item" to="/politics">Politics</Link></li>
                                    <li><Link className="dropdown-item" to="/technology">Technology</Link></li>
                                    <li><Link className="dropdown-item" to="/startup">Startup</Link></li>
                                    <li><Link className="dropdown-item" to="/miscellaneous">Miscellaneous</Link></li>
                                    <li><Link className="dropdown-item" to="/unconventional">Unconventional</Link></li>
                                    <li><Link className="dropdown-item" to="/science">Science</Link></li>
                                    <li><Link className="dropdown-item" to="/automobile">Automobile</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
