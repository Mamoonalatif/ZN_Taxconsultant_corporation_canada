
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Import logo
import logoImg from '../assets/images/logo.png';
import logoWithoutBg from '../assets/images/logo2.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [expandedDropdown, setExpandedDropdown] = useState(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isAtBottom, setIsAtBottom] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const headerLogo = isHomePage ? logoImg : logoWithoutBg;

    const closeMenu = () => setIsMenuOpen(false);

    const toggleDropdown = (menuName) => {
        setExpandedDropdown(expandedDropdown === menuName ? null : menuName);
    };

    useEffect(() => {
        const onScroll = () => {
            setIsScrolled(window.scrollY > 24);
            
            const footer = document.getElementById('footer-wrapper');
            const footerHeight = footer ? footer.offsetHeight : 300;
            const scrollPosition = window.scrollY + window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            
            setIsAtBottom(scrollPosition >= documentHeight - footerHeight + 50);
        };

        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, [location.pathname]);

    useEffect(() => {
        document.body.classList.toggle('home-page', isHomePage);
        document.body.classList.toggle('interior-page', !isHomePage);

        return () => {
            document.body.classList.remove('home-page');
            document.body.classList.remove('interior-page');
        };
    }, [isHomePage]);

    return (
        <>
            <header
                id="header-shell"
                className={`${isHomePage ? 'home-nav-overlay home-header-split' : 'interior-nav'} ${isScrolled ? 'is-scrolled' : ''} ${isAtBottom ? 'hide-header' : ''}`.trim()}
            >
                <div className="header-grid responsive">
                    <div id="logo">
                        <Link to="/">
                            <img
                                src={headerLogo}
                                alt="ZN Tax and Accounting Services"
                                loading="eager"
                            />
                        </Link>
                    </div>

                    <div className="header-right unified-layout">
                        <button
                            className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <span style={{ backgroundColor: '#FF8C42' }}></span>
                            <span style={{ backgroundColor: '#FF8C42' }}></span>
                            <span style={{ backgroundColor: '#FF8C42' }}></span>
                        </button>
                        <div className={`menu-content ${isMenuOpen ? 'open' : ''}`}>
                            <nav className="right">
                                <div className="menu-menu-container">
                                    <ul id="menu-menu" className="menu">
                                        <li className="menu-item home-icon-item">
                                            <Link to="/" onClick={closeMenu} className={location.pathname === '/' ? 'active' : ''} aria-label="Home" title="Home">
                                                <i className="fa-solid fa-house"></i>
                                            </Link>
                                        </li>
                                        <li className="menu-item"><Link to="/bookkeeping" onClick={closeMenu} className={location.pathname === '/bookkeeping' ? 'active' : ''}>Bookkeeping</Link></li>
                                        <li className="menu-item has-children accounting-menu">
                                            <a onClick={() => toggleDropdown('accounting')} style={{ cursor: 'pointer' }} className={['/accounting', '/tax', '/acquisitions', '/consulting', '/valuations', '/business-ownership', '/boi'].includes(location.pathname) ? 'active' : ''}>Services</a>
                                            <ul className={`sub-menu ${expandedDropdown === 'accounting' ? 'expanded' : ''}`}>
                                                <li><Link to="/tax" onClick={closeMenu}>Tax Prep & Planning</Link></li>
                                               
                                                <li><Link to="/consulting" onClick={closeMenu}>Business Consulting</Link></li>
        
                                            </ul>
                                        </li>
                                        <li className="menu-item"><Link to="/quickbooks" onClick={closeMenu} className={location.pathname === '/quickbooks' ? 'active' : ''}>QuickBooks®</Link></li>
               
                                        <li className="menu-item"><Link to="/find-accountant" onClick={closeMenu} className={location.pathname === '/find-accountant' ? 'active' : ''}>Find an Accountant</Link></li>
                                        <li className="menu-item has-children">
                                            <a onClick={() => toggleDropdown('about')} style={{ cursor: 'pointer' }} className={['/why-choose-zn', '/our-people', '/our-process', '/testimonials'].includes(location.pathname) ? 'active' : ''}>About</a>
                                            <ul className={`sub-menu ${expandedDropdown === 'about' ? 'expanded' : ''}`}>
                                                <li><Link to="/why-choose-zn" onClick={closeMenu}>Why Choose ZN Tax</Link></li>
                                                <li><Link to="/our-people" onClick={closeMenu}>Our People</Link></li>
                                                <li><Link to="/our-process" onClick={closeMenu}>Our Process</Link></li>
                                                <li><Link to="/testimonials" onClick={closeMenu}>Testimonials</Link></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item"><Link to="/careers" onClick={closeMenu} className={location.pathname === '/careers' ? 'active' : ''}>Careers</Link></li>
                                        <li className="menu-item"><Link to="/contact" onClick={closeMenu} className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
                                        <li className="menu-item nav-cta-item">
                                            <Link to="/schedule" onClick={closeMenu} className={location.pathname === '/schedule' ? 'active' : ''}>Schedule A Consultation</Link>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
