import React from 'react';
import SidebarEditor from './SidebarEditor';
const LayoutEditor = ({children}) => {
    return (
        <React.Fragment>
            <SidebarEditor/>
            <div>
                <div >
                    <main>{children}</main>
                </div>
            </div>
        </React.Fragment>
    );
}

export default LayoutEditor;