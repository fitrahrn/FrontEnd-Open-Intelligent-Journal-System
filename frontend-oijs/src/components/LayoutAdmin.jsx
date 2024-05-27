import React from 'react';
import Sidebar from './Sidebar';
const LayoutAdmin = ({children}) => {
    return (
        <React.Fragment>
            <Sidebar/>
            <div>
                <div >
                    <main>{children}</main>
                </div>
            </div>
        </React.Fragment>
    );
}

export default LayoutAdmin;