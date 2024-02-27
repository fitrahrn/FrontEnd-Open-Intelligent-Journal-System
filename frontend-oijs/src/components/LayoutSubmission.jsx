import React from 'react';
import NavbarSubmission from './NavbarSubmission';
const LayoutSubmission = ({children}) => {
    return (
        <React.Fragment>
            <NavbarSubmission/>
            <div className="columns mt-6">
                <div className="column has-background-light">
                    <main>{children}</main>
                </div>
            </div>
        </React.Fragment>
    );
}

export default LayoutSubmission;