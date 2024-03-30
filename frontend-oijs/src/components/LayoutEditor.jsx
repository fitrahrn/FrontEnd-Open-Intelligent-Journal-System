import React from 'react';
import NavbarEditor from './NavbarEditor';
const LayoutEditor = ({children}) => {
    return (
        <React.Fragment>
            <NavbarEditor/>
            <div className="columns mt-6">
                <div className="column has-background-light">
                    <main>{children}</main>
                </div>
            </div>
        </React.Fragment>
    );
}

export default LayoutEditor;