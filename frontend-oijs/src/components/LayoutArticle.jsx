import React from 'react';
import NavbarArticle from './NavbarArticle';
const LayoutArticle = ({children}) => {
    return (
        <React.Fragment>
            <NavbarArticle/>
            <div className="columns mt-6">
                <div className="column has-background-light">
                    <main>{children}</main>
                </div>
            </div>
        </React.Fragment>
    );
}

export default LayoutArticle;