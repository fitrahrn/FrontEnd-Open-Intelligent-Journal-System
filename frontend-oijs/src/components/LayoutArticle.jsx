import React from 'react';
import NavbarArticle from './NavbarArticle';
const LayoutArticle = ({children}) => {
    return (
        <React.Fragment>
            <NavbarArticle/>
            <div >
                <div >
                    <main>{children}</main>
                </div>
            </div>
        </React.Fragment>
    );
}

export default LayoutArticle;