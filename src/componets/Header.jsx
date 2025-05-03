'use client';

import React from 'react';
import Link from 'next/link';


const Header = () => {
    return (
        <>
            {/* Navbar Start */}
            <nav className="navbar navbar-expand-lg navbar_bg">
                <div className="container">
                    {/* Logo */}
                    <Link className="navbar-brand fw-bold" href="/">
                        {/* Uncomment and update path when image is ready */}
                        <img src="img/logo/logo.webp" alt="Logo"      />
                    </Link>

                    {/* Mobile Toggle Button */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Navbar Menu */}
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" href="/">Home</Link>
                            </li>

                            {/* About Us Dropdown */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="solutionsDropdown" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    About Us
                                    <svg className="ms-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                                        <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"></path>
                                    </svg>
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="solutionsDropdown">
                                    <li><Link className="dropdown-item" href="/aboutus">About Company</Link></li>
                                    <li><Link className="dropdown-item" href="/leadership">Leadership</Link></li>
                                    <li><Link className="dropdown-item" href="/client">Clients</Link></li>
                                </ul>
                            </li>

                            {/* Our Product Dropdown */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="ourProduct" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Our Product
                                    <svg className="ms-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                                        <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"></path>
                                    </svg>
                                </a>
                                <ul className="dropdown-menu product" aria-labelledby="ourProduct">
                                    <li><a className="dropdown-item" href="#">Mobile Computers</a> <span></span></li>
                                    <li><a className="dropdown-item" href="#">Barcode Scanners</a> <span></span></li>
                                    <li><a className="dropdown-item" href="#">Aviation Printers</a> <span></span></li>
                                    <li><a className="dropdown-item" href="#">Barcode Printers</a> <span></span></li>
                                    <li><a className="dropdown-item" href="#">Document Readers</a> <span></span></li>
                                </ul>
                            </li>

                            {/* Solutions Dropdown */}
                            <li className="nav-item dropdown">
                                <a className="nav-link" href="#">
                                    Solutions
                                    <svg className="ms-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                                        <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"></path>
                                    </svg>
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="solutionsDropdown">
                                    <li><a className="dropdown-item" href="#">Infrastructure</a></li>
                                    <li><a className="dropdown-item" href="#">Retail</a></li>
                                    <li><a className="dropdown-item" href="#">Aviation</a></li>
                                    <li><a className="dropdown-item" href="#">E-Governance</a></li>
                                    <li><a className="dropdown-item" href="#">Field Mobility</a></li>
                                    <li><a className="dropdown-item" href="#">Warehousing</a></li>
                                    <li><a className="dropdown-item" href="#">Automotive</a></li>
                                </ul>
                            </li>

                            {/* AMC/Support Dropdown */}
                            <li className="nav-item dropdown">
                                <a className="nav-link" href="#contact">
                                    AMC/Support Services
                                    <svg className="ms-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                                        <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"></path>
                                    </svg>
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="solutionsDropdown">
                                    <li><a className="dropdown-item" href="#">Hardware</a></li>
                                    <li><a className="dropdown-item" href="#">Software</a></li>
                                    <li><a className="dropdown-item" href="#">Support</a></li>
                                </ul>
                            </li>

                            {/* Enquire Button */}
                            <li className="nav-item">
                                <button>
                                    <a className="nav-link" href="#contact">Enquire</a>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;
