import React, { useState, useEffect } from "react";
import api from "../../interceptor/axios"
import { useNavigate, useParams } from "react-router-dom";
const ChangeJournal = () => {
    const [msg, setMsg] = useState("");
    const [title,setTitle] = useState("");
    const [initials,setInitials] = useState("");
    const [abbreviation, setAbbreviation] = useState("");
    const [imagePath,setImagePath] = useState("");
    const [description,setDescription] = useState("");
    const [language,setLanguage] = useState("Indonesia");
    const [publisher,setPublisher] = useState("");
    const [issn,setIssn] = useState("")
    const [eissn,setEissn] = useState("")
    const [regNumber,setRegNumber] = useState("")
    const [appear,setAppear] = useState(false)
    const [newPath, setNewPath] = useState("");
    const { journal } = useParams();
    const [id,setId] = useState("");
    const [imageName,setImageName] = useState("No Image Selected");
    const [file,setFile] = useState("");
    const [preview,setPreview] = useState("");
    const navigate = useNavigate();

  useEffect(() => {
    getJournalById();
    // eslint-disable-next-line
  }, []);

  const getJournalById = async () => {
    const journalData = await api.get(`https://backend-dot-oijs-429910.et.r.appspot.com/journal/${journal}`);
    
    setId(journalData.data.id);
    setTitle(journalData.data.title);
    setInitials(journalData.data.initials);
    setAbbreviation(journalData.data.abbreviation);
    setImagePath(journalData.data.imagePath);
    setDescription(journalData.data.description);
    setLanguage(journalData.data.languages);
    setPublisher(journalData.data.publisher);
    setIssn(journalData.data.issn);
    setEissn(journalData.data.e_issn);
    setRegNumber(journalData.data.reg_number);
    setAppear(journalData.data.appear);
    setFile(journalData.data.journalData);
    setPreview(journalData.data.image_path)
    setNewPath(journalData.data.path)
  };

  const updateJournal = async (event) => {
    event.preventDefault(); // ketika disubmit, page tidak reload
    const formData = new FormData();
    formData.append("journal_id",id);
    formData.append("title",title);
    formData.append("initials",initials);
    formData.append("abbreviation",abbreviation);
    formData.append("description",description);
    formData.append("path", newPath);
    formData.append("image_path", imagePath);
    formData.append("languages",language);
    formData.append("appear",appear);
    formData.append("publisher",publisher);
    formData.append("issn",issn);
    formData.append("e_issn",eissn);
    formData.append("reg_number",regNumber);
    formData.append("file",file)

    try {
      await api.patch(`https://backend-dot-oijs-429910.et.r.appspot.com/journal/${journal}`, formData, {
        "Content-type": "multipart/form-data",
      });
      navigate(`/admin/journal`);
    } catch (error) {

    }
  };
    const loadImage = (event) => {
        const image = event.target.files[0];
        if (image) {
            setImageName(image.name);
            setFile(image);
            setPreview(URL.createObjectURL(image));
        } else {
            setImageName("No File Selected");
            setFile("");
        }
    };

  return (
            <div class="form-signin container w-75 m-auto">
                    <main>
                        <form onSubmit={updateJournal} class="box">
                            <p class="has-text-centered">{msg}</p>
                            <h2 class='h2 mb-3 fw-normal text-center'>Update Journal</h2>
                            <div class= "mb-3">
                                <label class="form-label">Journal Title*</label>
                                <div class="controls">
                                    <input type="text" class="form-control" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                                </div>
                            </div>
                            <div class= "mb-3">
                                <label class="form-label">Journal Initials*</label>
                                <div class="controls">
                                    <input type="text" class="form-control" placeholder="Initials" value={initials} onChange={(e) => setInitials(e.target.value)}/>
                                </div>
                            </div>
                            <div class= "mb-3">
                                <label class="form-label">Journal Abbreviation*</label>
                                <div class="controls">
                                    <input type="text" class="form-control" placeholder="Abbreviation" value={abbreviation} onChange={(e) => setAbbreviation(e.target.value)}/>
                                </div>
                            </div>
                            <div class= "mb-3">
                                <label class="form-label">Journal Path*</label>
                                <div class="controls">
                                    <input type="text" class="form-control" placeholder="Path" value={newPath} onChange={(e) => setNewPath(e.target.value)}/>
                                </div>
                            </div>

                            <label for="image" class="form-label">Upload Cover Image</label>
                            <input class="form-control" type="file" id="image" name="image" accept="image/png, image/jpeg"  onChange={loadImage} onClick={() =>setPreview("")}/>

                            {preview ? (
                                    <img id="image"class="m-4 img-fluid rounded-start" src={preview} alt="" />
                            ) : (
                                ""
                            )}
                            <div class= "mb-3">
                                <label class="form-label">Journal Description</label>
                                <div class="controls">
                                    <textarea type="text" class="form-control" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}/>
                                </div>
                            </div>
                            
                            <label class="form-select-label">Language </label>
                                <select class="form-select mb-3" defaultValue={language} onChange={(e) => setLanguage(e.target.value)}>
                                    <option value="Indonesia">Indonesia</option>
                                    <option value="English">English</option>
                                    <option value="Chinese">Chinese</option>
                                    <option value="Japanese">Japanese</option>
                                    <option value="German">German</option>
                                    <option value="French">French</option>
                                </select>
                            <div class= "mb-3">
                                <label class="form-label">Journal Publisher</label>
                                <div class="controls">
                                    <input type="text" class="form-control" placeholder="Publisher" value={publisher} onChange={(e) => setPublisher(e.target.value)}/>
                                </div>
                            </div>
                            <div class= "mb-3">
                                <label class="form-label">Journal Issn</label>
                                <div class="controls">
                                    <input type="text" class="form-control" placeholder="Issn" value={issn} onChange={(e) => setIssn(e.target.value)}/>
                                </div>
                            </div>
                            <div class= "mb-3">
                                <label class="form-label">Journal E-Issn</label>
                                <div class="controls">
                                    <input type="text" class="form-control" placeholder="E-Issn" value={eissn} onChange={(e) => setEissn(e.target.value)}/>
                                </div>
                            </div>
                            <div class= "mb-3">
                                <label class="form-label">Journal Registration Number</label>
                                <div class="controls">
                                    <input type="text" class="form-control" placeholder="Registration Number" value={regNumber} onChange={(e) => setRegNumber(e.target.value)}/>
                                </div>
                            </div>
                            <div class="form-check text-start my-3">
                                <input id="appear" class="form-check-input" type="checkbox" value={appear} checked={appear} onChange={(e) => setAppear(e.target.checked)} />
                                <label for="appear" class="form-check-label">Enable this journal to appear publicly on the site</label>
                            </div>
                            <div >
                                <button class="w-100 btn btn-primary btn-lg">Update</button>
                            </div>
                        </form>
                        <br/>
                    </main>
                </div>
  );
};

export default ChangeJournal;
