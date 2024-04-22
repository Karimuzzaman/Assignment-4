import React from 'react';
import SideNavBar from "./SideNavBar.jsx";

const MasterLayout = (props) => {
    return (
        <div className="container">
            <div className="row border-bottom">
                <div className="col-lg-2 mt-3 border-end bg-color">
                    <p className="fw-bold text-center mt-3"><span
                        className="me-2 rounded-circle px-1 bg-dark">G</span>
                        CRUD FOOD</p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-2 border-end bg-color">
                    <SideNavBar/>
                </div>
                <div className="col-lg-10">
                    {props.children}
                </div>
            </div>
        </div>

    );
};

export default MasterLayout;