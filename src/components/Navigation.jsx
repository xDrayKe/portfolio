import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import '../styles/Navigation.css'

function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navItems = [
        { path: '/', label: 'Acceuil' },
        { path: '/about', label: 'A propos' },
        { path: '/projects', label: 'Projets' },
    ]

    const socialLinks = [
        { href: 'https://github.com', icon: 'fab fa-github', title: 'GitHub' },
        { href: 'https://linkedin.com', icon: 'fab fa-linkedin', title: 'LinkedIn' },
    ]

    return (
        <nav className="navigation">
            <div className="nav-container" style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center' }}>
                <div style={{ justifySelf: 'start' }}>
                    <ul className={`nav-links ${isMenuOpen ? 'nav-open' : ''}`}>
                        {navItems.map((item) => (
                            <li key={item.path}>
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) => isActive ? 'active' : ''}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="logo" style={{ justifySelf: 'center' }}>GDS</div>

                <div className="nav-right" style={{ justifySelf: 'end' }}>
                    <div className="social-links">
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                title={social.title}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className={social.icon}></i>
                            </a>
                        ))}
                        {/* <button className="theme-toggle" title="Dark Mode">
                                <i className="fas fa-moon"></i>
                            </button> */}
                    </div>

                    <button
                        className="mobile-menu-toggle"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navigation