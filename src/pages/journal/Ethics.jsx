import React,{ useState, useEffect }  from 'react';
import { Link,useParams  } from "react-router-dom";
import api from "../../interceptor/axios"
import Layout from '../../components/Layout';
import NavbarJournal from '../../components/NavbarJournal';
const Ethics = () => {
    const [journalData,setJournalData] = useState([]);
    const {journal} = useParams();
    useEffect(() => {
        getJournal();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
    const getJournal= async () => {
        const response = await api.get(`https://backend-oijs-77pyv5kz2q-et.a.run.app/journal/${journal}`)
        setJournalData(response.data);
    };
    return (
        <Layout>
            <div className="container-fluid">
                <div class="card m-3 mx-auto">
                    <div className='card-header'>
                        <h3 className='card-title'>{journalData.title}</h3>
                        <NavbarJournal/>
                    </div>
                    
                    <div className='card-body p-3'> 
                        <h3 className='card-title fw-bold'>Publication Ethics</h3>
                        <h5 className='card-title fw-semibold'>Publication Ethics and Malpractice Statement</h5>
                        <p className='card-text' align="justify">{journalData.title} is a peer-reviewed electronic international journal. This statement clarifies ethical behaviour of all parties involved in the act of publishing an article in this journal, including the author, the chief editor, the Editorial Board, the peer-reviewer­­­­­ and the publisher (Institut Teknologi Bandung). This statement is based on COPE’s Best Practice Guidelines for Journal Editors.</p>
                        <h5 className='card-title fw-semibold'>Ethical Guideline for Journal Publication</h5>
                        <p className='card-text' align="justify">The publication of an article in a peer-reviewed Journal of of ICT Research and Applications is an essential building block in the development of a coherent and respected network of knowledge. It is a direct reflection of the quality of the work of the authors and the institutions that support them. Peer-reviewed articles support and embody the scientific method. It is therefore important to agree upon standards of expected ethical behavior for all parties involved in the act of publishing: the author, the journal editor, the peer reviewer, the publisher and the society.
                        <br/>Institut Teknologi Bandung as publisher of Journal of ICT Research and Applications takes its duties of guardianship over all stages of publishing extremely seriously and we recognize our ethical and other responsibilities. We are committed to ensuring that advertising, reprint or other commercial revenue has no impact or influence on editorial decisions. In addition, the Institute for Research and Community Services of Institut Teknologi Bandung and Editorial Board will assist in communications with other journals and/or publishers where this is useful and necessary.</p>
                        <h5 className='card-title fw-semibold'>Publication decisions</h5>
                        <p className='card-text' align="justify">The editor of the Journal of ICT Research and Applications is responsible for deciding which of the articles submitted to the journal should be published. The validation of the work in question and its importance to researchers and readers must always drive such decisions. The editors may be guided by the policies of the journal's editorial board and constrained by such legal requirements as shall then be in force regarding libel, copyright infringement and plagiarism. The editors may confer with other editors or reviewers in making this decision.</p>
                        <h5 className='card-title fw-semibold'>Fair play</h5>
                        <p className='card-text' align="justify">An editor at any time evaluate manuscripts for their intellectual content without regard to race, gender, sexual orientation, religious belief, ethnic origin, citizenship, or political philosophy of the authors.</p>
                        <h5 className='card-title fw-semibold'>Confidentiality</h5>
                        <p className='card-text' align="justify">The editor and any editorial staff must not disclose any information about a submitted manuscript to anyone other than the corresponding author, reviewers, potential reviewers, other editorial advisers, and the publisher, as appropriate.</p>
                        <h5 className='card-title fw-semibold'>Disclosure and conflicts of interest</h5>
                        <p className='card-text' align="justify">Unpublished materials disclosed in a submitted manuscript must not be used in an editor's own research without the express written consent of the author.</p>
                        <h5 className='card-title fw-semibold'>Duties of Reviewers</h5>
                        <p className='card-text' align="justify">Contribution to Editorial Decisions<br/><br/>
                            Peer review assists the editor in making editorial decisions and through the editorial communications with the author may also assist the author in improving the paper.
                            <br/><br/>
                            Promptness<br/><br/>
                            Any selected referee who feels unqualified to review the research reported in a manuscript or knows that its prompt review will be impossible should notify the editor and excuse himself from the review process.
                            <br/><br/>
                            Confidentiality<br/><br/>
                            Any manuscripts received for review must be treated as confidential documents. They must not be shown to or discussed with others except as authorized by the editor.
                            <br/><br/>
                            Standards of Objectivity<br/><br/>
                            Reviews should be conducted objectively. Personal criticism of the author is inappropriate. Referees should express their views clearly with supporting arguments.
                            <br/><br/>
                            Acknowledgement of Sources<br/><br/>
                            Reviewers should identify relevant published work that has not been cited by the authors. Any statement that an observation, derivation, or argument had been previously reported should be accompanied by the relevant citation. A reviewer should also call to the editor's attention any substantial similarity or overlap between the manuscript under consideration and any other published paper of which they have personal knowledge.
                            <br/><br/>
                            Disclosure and Conflict of Interest<br/><br/>
                            Privileged information or ideas obtained through peer review must be kept confidential and not used for personal advantage. Reviewers should not consider manuscripts in which they have conflicts of interest resulting from competitive, collaborative, or other relationships or connections with any of the authors, companies, or institutions connected to the papers.</p>
                        <h5 className='card-title fw-semibold'>Duties of Authors</h5>
                        <p className='card-text' align="justify">Reporting standards<br/><br/>
                        Authors of reports of original research should present an accurate account of the work performed as well as an objective discussion of its significance. Underlying data should be represented accurately in the paper. A paper should contain sufficient detail and references to permit others to replicate the work. Fraudulent or knowingly inaccurate statements constitute unethical behaviour and are unacceptable.
                        Data Access and Retention<br/><br/>
                        Authors are asked to provide the raw data in connection with a paper for editorial review, and should be prepared to provide public access to such data (consistent with the ALPSP-STM Statement on Data and Databases), if practicable, and should in any event be prepared to retain such data for a reasonable time after publication.
                        <br/><br/>
                        Originality and Plagiarism<br/><br/>
                        The authors should ensure that they have written entirely original works, and if the authors have used the work and/or words of others that this has been appropriately cited or quoted.
                        Multiple, Redundant or Concurrent Publication<br/><br/>
                        An author should not in general publish manuscripts describing essentially the same research in more than one journal or primary publication. Submitting the same manuscript to more than one journal concurrently constitutes unethical publishing behaviour and is unacceptable.
                        <br/><br/>
                        Acknowledgement of Sources<br/><br/>
                        Proper acknowledgment of the work of others must always be given. Authors should cite publications that have been influential in determining the nature of the reported work.
                        <br/><br/>
                        Authorship of the Paper<br/><br/>
                        Authorship should be limited to those who have made a significant contribution to the conception, design, execution, or interpretation of the reported study. All those who have made significant contributions should be listed as co-authors. Where there are others who have participated in certain substantive aspects of the research project, they should be acknowledged or listed as contributors. The corresponding author should ensure that all appropriate co-authors and no inappropriate co-authors are included on the paper, and that all co-authors have seen and approved the final version of the paper and have agreed to its submission for publication.
                        <br/><br/>
                        Hazards and Human or Animal Subjects<br/><br/>
                        If the work involves chemicals, procedures or equipment that have any unusual hazards inherent in their use, the author must clearly identify these in the manuscript.
                        <br/><br/>
                        Disclosure and Conflicts of Interest<br/><br/>
                        All authors should disclose in their manuscript any financial or other substantive conflict of interest that might be construed to influence the results or interpretation of their manuscript. All sources of financial support for the project should be disclosed.
                        <br/><br/>
                        Fundamental errors in published works<br/><br/>
                        When an author discovers a significant error or inaccuracy in his/her own published work, it is the author’s obligation to promptly notify the journal editor or publisher and cooperate with the editor to retract or correct the paper.</p>
                    </div>
                    
                </div>
                
            </div>
        </Layout>
    );
}

export default Ethics;