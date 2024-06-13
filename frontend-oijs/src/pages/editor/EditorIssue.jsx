import axios from "axios";
import React, { useState, useEffect } from 'react';
import {Link,useParams} from "react-router-dom";
import LayoutEditor from '../../components/LayoutEditor';
import NavbarCardIssue from "../../components/NavbarCardIssue";
import EditorFutureIssue from './EditorFutureIssue';
import EditorBackIssue from './EditorBackIssue';
const EditorIssue = () => {
    
    return (
        <LayoutEditor>
            <div class="container-fluid">
                <div class="content-container">
                    <div class="card m-3 ">
                        <NavbarCardIssue/>
                        <div class="tab-content" id="myTabContent">
                            <EditorFutureIssue  />
                            <EditorBackIssue />
                        </div>
                            
                        
                    </div>
                </div>
            </div>
        </LayoutEditor>
    );
}

export default EditorIssue;