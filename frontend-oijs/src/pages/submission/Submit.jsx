import React, {useState , useEffect } from 'react';
import {useNavigate,Link,useParams } from "react-router-dom";
import api from "../../interceptor/axios"
import axios from "axios"
import Layout from '../../components/Layout';
const Submit = () => {
    const [listJournal,setListJournal] = useState([]);
    const [listUser,setListUser] = useState([]);
    const [journal,setJournal] = useState("");
    const [msg, setMsg] = useState("");
    const [prefix, setPrefix] = useState("");
    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [abstract, setAbstract] = useState("");
    const [keywords, setKeywords] = useState("");
    const [contributors, setContributors] = useState("0");
    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    const [check3, setCheck3] = useState(false);
    const [check4, setCheck4] = useState(false);
    const [check5, setCheck5] = useState(false);
    const [check6, setCheck6] = useState(false);
    const [preview,setPreview] = useState("");
    const [documentName,setDocumentName] = useState("No Document Selected");
    const [file,setFile] = useState("");
    const navigate = useNavigate();


    useEffect(() => {
        getJournals();
        getUsers();
      }, []);
    const getJournals = async () => {
        const response = await api.get(`http://localhost:3001/journal`)
        console.log(response.data)
        setListJournal(response.data);
        setJournal(response.data[0].journal.path)
    };
    const getUsers = async () => {
        const response = await api.get(`http://localhost:3001/get/contributors`)
        setListUser(response.data);
    };

    const Submit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("prefix",prefix);
        formData.append("title",title);
        formData.append("subtitle",subtitle);
        formData.append("abstract",abstract);
        formData.append("keywords",keywords);
        formData.append("contributors",contributors);
        formData.append("date_published",new Date())
        formData.append("file",file)
        try {
            await api.post(`http://localhost:3001/article/${journal}`,formData, {
                "Content-type" : "multipart/form-data"
            });
            navigate("/submission");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }
    const loadDocument = (event) => {
        const document = event.target.files[0];
        if (document) {
            setDocumentName(document.name);
            setFile(document);
            setPreview(URL.createObjectURL(document));
        } else {
            setDocumentName("No File Selected");
            setFile("");
        }
      };
    return (
        <Layout>
            <div className="container-fluid">
                <div className="content-container">
                    <h1 className="h1 mb-3 fw-normal text-center mt-3">Submit an Article</h1>
                    <form className="content-container" onSubmit={Submit}>
                        <div className="card m-3 p-3 ps-4">
                            <p className="error" style={{color: "red"}}>{msg}</p>
                            
                            <h2 className="h2 card-title col">1. Section Policy</h2>
                            <h3 className="h3 card-title col my-2">Submission Requirement</h3>
                            <div className="form-check text-start my-1">
                                <input id="check1" class="form-check-input" type="checkbox" value={check1} onChange={(e) => setCheck1(e.target.value)} required />
                                <label htmlFor="check1" class="form-check-label">The submission has not been previously published, nor is it before another journal for consideration or an explanation has been provided in Comments to the Editor. </label>
                            </div>
                            <div className="form-check text-start my-1">
                                <input id="check2" class="form-check-input" type="checkbox" value={check2} onChange={(e) => setCheck2(e.target.value)} required/>
                                <label htmlFor="check2" class="form-check-label">The submission file is in OpenOffice, Microsoft Word, or RTF document file format.  </label>
                            </div>
                            <div className="form-check text-start my-1">
                                <input id="check3" class="form-check-input" type="checkbox" value={check3} onChange={(e) => setCheck3(e.target.value)} required/>
                                <label htmlFor="check3" class="form-check-label">Where available, URLs for the references have been provided. </label>
                            </div>
                            <div className="form-check text-start my-1">
                                <input id="check4" class="form-check-input" type="checkbox" value={check4} onChange={(e) => setCheck4(e.target.value)} required/>
                                <label htmlFor="check4" class="form-check-label">The text is single-spaced; uses a 12-point font; employs italics, rather than underlining (except with URL addresses) and all illustrations, figures, and tables are placed within the text at the appropriate points, rather than at the end.  </label>
                            </div>
                            <div className="form-check text-start my-1">
                                <input id="check5" class="form-check-input" type="checkbox" value={check5} onChange={(e) => setCheck5(e.target.value)} required/>
                                <label htmlFor="check5" class="form-check-label">	The text adheres to the stylistic and bibliographic requirements outlined in the Author Guidelines. </label>
                            </div>
                            <div className="form-check text-start my-1">
                                <input id="check6" class="form-check-input" type="checkbox" value={check6} onChange={(e) => setCheck6(e.target.value)} required/>
                                <label htmlFor="check6" class="form-check-label"> Yes, I agree to have my data collected and stored according to the privacy statement. </label>

                            </div>
                        </div>
                        <div className="card m-3 p-3">
                            <h2 className="h2 card-title col">2. Upload Submission</h2>
                            
                            <label for="document" class="form-label">Upload Submission* </label>
                            <input class="form-control" type="file" id="document" name="document" accept=".pdf,.doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"  onChange={loadDocument} onClick={() =>setPreview("")}/>
                        </div>
                        <div className="card m-3 p-3">
                            <h2>3. Enter Metadata</h2>
                            <div className="result">
                                <div className="mb-3">
                                    <label class="form-select-label">Which journals on this site would you like to submit your submission with? </label>
                                        <select class="form-select mb-3" onChange={(e) => setJournal(e.target.value)} value={journal} required>
                                        {listJournal.map((option) => (
                                            <option key={option.journal.path} value={option.journal.path}>
                                            {option.journal.title}
                                            </option>
                                        ))}
                                        </select>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Prefix</label>
                                        <div className="control">
                                            <input type="text" className="form-control" placeholder='Prefix' value={prefix} onChange={(e) => setPrefix(e.target.value)}/>
                                        </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Title*</label>
                                        <div className="control">
                                            <input type="text" className="form-control" placeholder='Title'value={title} onChange={(e) => setTitle(e.target.value)} required/>
                                        </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Subtitle</label>
                                        <div className="control">
                                            <input type="text" className="form-control" placeholder='Subtitle' value={subtitle} onChange={(e) => setSubtitle(e.target.value)}/>
                                        </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Abstract*</label>
                                        <div className="control">
                                            <textarea type="text" className="form-control" placeholder='Abstract' value={abstract} onChange={(e) => setAbstract(e.target.value)} required/>
                                        </div>
                                </div>
                                <div className="mb-3">
                                    <label class="form-select-label">Add a Contributors</label>
                                        <select class="form-select mb-3" onChange={(e) => setContributors(e.target.value)}>
                                            <option key= "0" value="0">
                                                Select...
                                            </option>
                                        {listUser.map((option) => (
                                            <option key={option.user_id} value={option.user_id}>
                                            {option.name}
                                            </option>
                                        ))}
                                        </select>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Additional Keywords</label>
                                        <div className="control">
                                            <input type="text" className="form-control" placeholder='Keywords' value={keywords} onChange={(e) => setKeywords(e.target.value)}/>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="card border-light m-3 p-3">
                            <div className="row justify-content-end" >
                                <button type="cancel" onClick={() => navigate(-1)} class="col-2 mx-2 btn btn-lg btn-danger">Cancel</button>
                                <button type="submit" class="col-2 mx-2 btn btn-lg btn-primary">Finish Submission</button>
                            </div>

                        </div>    
                    </form>
                </div>
            </div>
        </Layout>
    );
}

export default Submit;