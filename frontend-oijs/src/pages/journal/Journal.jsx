import React from 'react';
import LayoutJournal from '../../components/LayoutJournal';
import { Link,useParams  } from "react-router-dom";
const Journal = () => {
    const {journal} = useParams();
    console.log(journal);
    return (
        <LayoutJournal>
            <div className="App">
            <div id="content">
                <article class="card">
                    <Link to={`/`} className="button is-success">
                    <h2 > Improving the Performance of Low-resourced Speaker Identification with Data Preprocessing </h2>
                    </Link>
                    <p >Win Lai Lai Phyu, Hay Mar Soe Naing, Win Pa Pa</p>
                    <p >Year: 2023 | Volume: 13 | Issue: 3</p> 
                    <p >Abstract <button id='pdf'>PDF</button></p>  
                    <p >DOI: <a href= "https://doi.org/10.5614/itbj.ict.res.appl.2023.17.3.1">https://doi.org/10.5614/itbj.ict.res.appl.2023.17.3.1</a> </p>
                </article>
        </div>
            </div>
        </LayoutJournal>
    );
}

export default Journal;