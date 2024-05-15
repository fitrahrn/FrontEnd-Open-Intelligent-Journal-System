import React from 'react';
import Sidebar from './Sidebar';
const LayoutAdmin = ({children}) => {
    return (
        <React.Fragment>
            <Sidebar/>
            <div className="columns mt-6">
                <div className="column has-background-light">
                    <main>{children}</main>
                </div>
            </div>
        </React.Fragment>
    );
}

export default LayoutAdmin;