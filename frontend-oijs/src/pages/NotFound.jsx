import React from 'react';
import Layout from '../components/Layout';
import { Link,useParams  } from "react-router-dom";
const NotFound = () => {
    return (
        <Layout>
            <div className="App">
                <div className="content-container">
                    <div class="card m-3 mx-auto">
                        <div class="card-body p-3  w-25 m-auto">
                            <h3 class="card-title text-danger">404</h3>
                            <h3 class="card-title">Page Not Found</h3>
                            <Link to={`/`} class="card-title"> Back to Home Page </Link>
                        </div>
                        
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default NotFound;