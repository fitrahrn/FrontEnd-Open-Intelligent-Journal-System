import React from 'react';
import NavbarJournal from './NavbarJournal';
const LayoutJournal = ({children}) => {
    return (
        <React.Fragment>
            <NavbarJournal/>
            <div className="columns mt-6">
                <div className="column has-background-light">
                    <main>{children}</main>
                </div>
            </div>
        </React.Fragment>
    );
}

export default LayoutJournal;