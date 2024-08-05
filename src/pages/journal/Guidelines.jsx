import React,{ useState, useEffect }  from 'react';
import { Link,useParams  } from "react-router-dom";
import api from "../../interceptor/axios"
import Layout from '../../components/Layout';
import NavbarJournal from '../../components/NavbarJournal';
const Guidelines = () => {
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
                        <h3 className='card-title fw-bold'>Author Guidelines</h3>
                        <h5 className='card-title fw-semibold'>1. Standard of reporting</h5>
                        <p className='card-text' align="justify">Authors should present an accurate account of the work performed as well as an objective discussion of its significance. Underlying data should be represented accurately in the paper. A paper should contain sufficient detail and references to permit others to replicate the work. Fraudulent or knowingly inaccurate statements constitute unethical behavior are unacceptable. Professional publication articles should also be accurate and objective, and editorial ‘opinion’ works should be clearly identified.</p>
                        <h5 className='card-title fw-semibold'>2. Exclusivity of work</h5>
                        <p className='card-text' align="justify">The authors should ensure that they have written entirely original works, and if the authors have used the work and/or words of others this should be appropriately cited or quoted. Plagiarism takes many forms, from ‘passing off’ another’s paper as the author’s own paper to copying or paraphrasing substantial parts of another’s paper (without attribution), to claiming results from research conducted by others. Plagiarism in all its forms constitutes unethical publishing behavior and is unacceptable. An author should not in general publish manuscripts describing essentially the same research in more than one journal or primary publication. Submitting the same manuscript to more than one journal concurrently constitutes unethical publishing behaviour and is unacceptable. In general, an author should not submit for consideration in another journal a previously published paper. We consider for publication from conference paper if it is only an extended version of conference paper with at least 30% of new material.</p>
                        <h5 className='card-title fw-semibold'>3. Hazards and Human or Animal Subjects</h5>
                        <p className='card-text' align="justify">If the work involves chemicals, procedures or equipment that have any unusual hazards inherent in their use, the author must clearly identify these in the manuscript. If the work involves the use of animal or human subjects, the author should ensure that the manuscript contains a statement that all procedures were performed in compliance with relevant laws and institutional guidelines and that the appropriate institutional committee(s) has approved them. Authors should include a statement in the manuscript that the informed consent was obtained for experimentation with human subjects. The privacy rights of human subjects must always be observed.</p>
                        <h5 className='card-title fw-semibold'>4. Authorship of the Paper and Copyright</h5>
                        <p className='card-text' align="justify">Authorship should be limited to those who have made a significant contribution to the conception, design, execution, or interpretation of the reported work. All those who have made significant contributions should be listed as co-authors. Whilst those who have participated in certain substantive aspects of the research project, they should be acknowledged or listed as contributors. The corresponding author should ensure that all appropriate and inappropriate co-authors are included on the paper, and that all co-authors have seen and approved the final version of the paper and have agreed to its submission for publication. No manuscript can be published unless accompanied by a signed publication agreement, which serves as a transfer of copyright from author to publisher. A copy of that agreement is required after the paper is accepted.</p>
                        <h5 className='card-title fw-semibold'>5. Acknowledgement</h5>
                        <p className='card-text' align="justify">Proper acknowledgment of the work of others must always be given. Authors should cite publications that have been influential in determining the nature of the reported work. Information obtained privately, as in conversation, correspondence or discussion with third parties, must not be used or reported without explicit, written permission from the source. Information obtained in the course of confidential services, such as refereeing manuscripts or grant applications, must not be used without the explicit written permission of the author of the work involved in these services.</p>
                        <h5 className='card-title fw-semibold'>6. Disclosure Requirements</h5>
                        <p className='card-text' align="justify">Author when submitting a manuscript, must disclose any meaningful affiliation or involvement, either direct or indirect, with any organization or entity with a direct financial interest in the subject matter or materials discussed (for example, employment, consultancies, stock ownership, grants, patents received or pending, royalties, honoraria, expert testimony). These kinds of financial involvement are fairly common, unavoidable, and generally do not constitute a basis for rejecting a manuscript. Specifics of the disclosure will remain confidential. If deemed appropriate by the Scientific Editor, a general statement regarding disclosure will be included in the Acknowledgment section of the manuscript.</p>
                        <h5 className='card-title fw-semibold'>7. Errors in Published Works</h5>
                        <p className='card-text' align="justify">When an author discovers a significant error or inaccuracy in his/her own published work, it is the author’s obligation to promptly notify the journal editor or publisher and cooperate with the editor to retract or correct the paper. If the editor or the publisher learns from a third party that a published work contains a significant error, it is the obligation of the author to promptly retract or correct the paper or provide evidence to the editor of the correctness of the original paper.</p>
                        <h5 className='card-title fw-semibold'>8. Disclaimer</h5>
                        <p className='card-text' align="justify">Opinions expressed in articles published in the ITB Journal are those of the author(s) and do not necessarily represent opinions of the Bandung Institute of Technology (ITB). The ITB Journal does not guarantee the appropriateness for any purpose of any method, product, process, or device described or identified in an article. Trade names, when used, are only for identification and do not constitute endorsement by ITB Journal.</p>
                        <h5 className='card-title fw-semibold'>9. Manuscript preparation</h5>
                        <p className='card-text' align="justify">Use the English language and the SI system (Système International d'Unités, often referred as "International Units") for measurements and units. Manuscript in MS Word or PDF format (generated from MS Word) is to be submitted online through http://journals.itb.ac.id/index.php/jictra. The length of manuscript is expected not to exceed 20 printed pages (single space) including abstract, figures, tables and references. An abstract between 100 and 200 words describes the significance of manuscript should be included. The authors should supply 5-10 keyword or phrases that characterizes their manuscript. Use 11 pt Times New Roman fonts for body of the text with 1.0 line spacing between lines. The references should be numbered consecutively in the order of their appearance and should be complete, including authors’ initials, the title of the paper, the date, page numbers, and the name of the sponsoring society. Please compiles references as shown in the examples below. Figures are printed in black & white, while color figures are only available online. Adjust the size of figures and tables as they will be appeared. All figure captions should be legible, minimum 8 point type. For all equations, use either Microsoft Equation Editor or MathType add-on. Equations are numbered consecutively in parenthesis, e.g. (1), and set at the right margin.</p>
                        <h5 className='card-title fw-semibold'>10. Author Fee</h5>
                        <p className='card-text' align="justify">Author whose paper is accepted for publication in Journal of ICT Research and Applications is subjected to pay 150 USD per article up to 15 pages. For some reasonable cases, we can waive the publication fee of an author. Subscription per issue: IDR 100.000,- (domestic) and USD $50 (overseas). Order form for subscription should be sent to the editorial office by our email journal[at]lppm.itb.ac.id.</p>
                        <h5 className='card-title fw-semibold'>11. References</h5>
                        <p className='card-text' align="justify">Examples:<br/>
                        <br/>
                        [1] Sutasurya, L.A. & Riyanto, B., Title of Paper, Name of Journal, 8(1), pp. 20-25, Dec. 2005. (Journal)
                        <br/>
                        [2] Sutasurya, L.A., Handojo, A. & Riyanto, B., Title of book, ed. 2, Publisher, 2007. (Book)
                        <br/>
                        [3] Williams, J., Name of Paper, Name of Book, Name of the editor(s), eds., Publisher, pp. 67-69, 2006. (Book with paper title and editor)
                        <br/>
                        [4] Suharto (ed), Title of Paper, Name of Proc., pp. 5-10, 2008. (Conference Proceedings)
                        <br/>
                        [5] Name of the author(s), Title of paper (if available), Organization, URL Link, (1 April 2011). (URL Link)
                        <br/>
                        [6] Nicole, R., Title of Paper, Name of Journal, submitted for publication. (Pending publication)
                        <br/>
                        [7] John, K., Title of Paper, unpublished. (Unpublished manuscript)
                        <br/>
                        [8] Rashid, L., Title of Dissertation, PhD dissertation, Name of Dept., Name of Univ., City, 2010. (Thesis or Dissertation)
                        <br/>
                        [9] Jenny, P., Name of Institution, City, personal communication, 2010. (Personal communication)
                        <br/>
                        [10] Name of the author(s), Title of Technical Report, Technical Report TR-0334 (34-56), Name of Institution, City, Dec. 2009. (Technical report with report number)</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Guidelines;