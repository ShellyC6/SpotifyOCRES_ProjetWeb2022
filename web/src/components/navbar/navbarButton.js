import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./navbar.css";

export default function NavbarButton(att) {
    const location = useLocation();
    const isActive = location.pathname === att.to;
    const btnClass = isActive ? "text-center button active py-2" : "text-center py-2 button";

    return (
        <Link to={att.to}>
            <div className={btnClass}>
                <p className='mb-0'>{att.icon}</p>
                <p className='mb-0 d-inline-block text-decoration-none'>{att.title}</p>
            </div>
        </Link>
    );
}
