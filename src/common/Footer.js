import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    const handleLinkClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-12 mb-4">
                            < img alt='footerimg' src="images/logo1.png" style={{height:'250px' , width:'100%'} }  />
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 mb-4">
                            <h5 className="site-footer-title mb-3">Quick Links</h5>
                            <ul className="footer-menu">
                                <li className="footer-menu-item"><Link to="/" className="footer-menu-link" onClick={handleLinkClick}>Home</Link></li>
                                <li className="footer-menu-item"><Link to="/business" className="footer-menu-link" onClick={handleLinkClick}>Business</Link></li>
                                <li className="footer-menu-item"><Link to="/sports" className="footer-menu-link" onClick={handleLinkClick}>Sports</Link></li>
                                <li className="footer-menu-item"><Link to="/Entertainment" className="footer-menu-link" onClick={handleLinkClick}>Entertainment</Link></li>
                                <li className="footer-menu-item"><Link to="/world" className="footer-menu-link" onClick={handleLinkClick}>Politics</Link></li>
                                <li className="footer-menu-item"><Link to="/politics" className="footer-menu-link" onClick={handleLinkClick}>Entertainment</Link></li>
                                <li className="footer-menu-item"><Link to="/technology" className="footer-menu-link" onClick={handleLinkClick}>Technology</Link></li>
                                <li className="footer-menu-item"><Link to="/startup" className="footer-menu-link" onClick={handleLinkClick}>Startup</Link></li>
                                <li className="footer-menu-item"><Link to="/miscellaneous" className="footer-menu-link" onClick={handleLinkClick}>Miscellaneous</Link></li>
                                <li className="footer-menu-item"><Link to="/unconventional" className="footer-menu-link" onClick={handleLinkClick}>Unconventional</Link></li>
                                <li className="footer-menu-item"><Link to="/science" className="footer-menu-link" onClick={handleLinkClick}>Science</Link></li>
                                <li className="footer-menu-item"><Link to="/automobile" className="footer-menu-link" onClick={handleLinkClick}>Automobile</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 mx-auto">
                            <h5 className="site-footer-title mb-3">Contact Infomation</h5>
                            <p className="text-white d-flex mb-2">
                                <i className="bi-telephone me-2" />
                                <Link to="tel: 7487841902" className="site-footer-link">
                                   +91 7487841902
                                </Link>
                            </p>
                            <p className="text-white d-flex">
                                <i className="bi-envelope me-2" />
                                <Link to="mailto:hadiyamukund16@gmail.com" className="site-footer-link">
                                    hadiyamukund16@gmail.com
                                </Link>
                            </p>
                            <p className="text-white d-flex mt-3">
                                <i className="bi-geo-alt me-2" />
                                Ahmedabad, Gujarat , 382330
                            </p>
                        </div>
                    </div>
                </div>
                <div className="site-footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-7 col-12">
                                <p className="copyright-text mb-0">Copyright © by Mukund Hadiya</p>
                            </div>
                            <div className="col-lg-6 col-md-5 col-12 d-flex justify-content-center align-items-center mx-auto">
                                <ul className="social-icon">
                                    {/* Social icons */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
