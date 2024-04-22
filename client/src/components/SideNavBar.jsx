import React from 'react';
import {Link} from "react-router-dom";

const SideNavBar = () => {
    return (
        <div className="side-nav-height">
            <p className="text-center mt-2 fw-bold">Menu</p>
            <div className="d-flex justify-content-center">
                <Link to="/create" className="btn btn-sm btn-secondary mb-2">
                    <i className="bi bi-cart-dash me-2"></i>
                    Create Food</Link>
            </div>
            <div className="d-flex justify-content-center">
                <Link to="/" className="btn btn-sm btn-secondary">
                    <i className="bi bi-menu-button-wide me-2"></i>
                    All Foods</Link>
            </div>


        </div>
    );
};

export default SideNavBar;