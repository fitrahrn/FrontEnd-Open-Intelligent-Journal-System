import React from 'react';
import SidebarAdmin from './SidebarAdmin';
const LayoutAdmin = ({children}) => {
    return (
        <React.Fragment>
            <SidebarAdmin/>
            <div>
                <div >
                    <main>{children}</main>
                </div>
            </div>
        </React.Fragment>
    );
}

export default LayoutAdmin;