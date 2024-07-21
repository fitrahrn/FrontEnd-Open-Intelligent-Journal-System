import React from 'react';
import NavbarCardProfile from "../../components/NavbarCardProfile";
import Layout from "../../components/Layout"
import ProfileContact from "./ProfileContact";
import ProfileIdentity from "./ProfileIdentity";
import ProfileRoles from "./ProfileRoles";
import ProfilePassword from "./ProfilePassword";
import ProfilePublic from "./ProfilePublic";
const Profile = () => {
    
    return (
        <Layout>
            <div class="container-fluid">
                <div class="content-container">
                    <div class="card m-3 ">
                        <NavbarCardProfile/>
                        <div class="tab-content" id="myTabContent">
                            <ProfileIdentity />
                            <ProfileContact  />
                            <ProfileRoles  />
                            <ProfilePublic  />
                            <ProfilePassword  />
                            
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Profile;