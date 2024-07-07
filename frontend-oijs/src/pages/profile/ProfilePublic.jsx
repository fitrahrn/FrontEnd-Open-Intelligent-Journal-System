import React, { useState, useEffect } from 'react';
import api from "../../interceptor/axios"
import axios from "axios"
const ProfilePublic = () => {
    const [name, setName] = useState("");
    const [publicName, setPublicName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [orcidId, setOrcidId] = useState("");
    const [affiliation, setAffiliation] = useState("");
    const [mailingAddress, setMailingAddress] = useState("");
    const [signature, setSignature] = useState("");
    const [country, setCountry] = useState("");
    const [msg, setMsg] = useState("");
    const [imageName,setImageName] = useState("No Image Selected");
    const [file,setFile] = useState("");
    const [preview,setPreview] = useState("");
    useEffect(() => {
        getProfiles();
      }, []);
    const getProfiles = async () => {
        api.defaults.withCredentials=true;
        const response = await api.get(`http://localhost:3001/user/get/username`)
        setName(response.data.name)
        setPublicName(response.data.public_name)
        setEmail(response.data.email)
        setPhone(response.data.phone)
        setOrcidId(response.data.orcid_id)
        setAffiliation(response.data.affiliation)
        setMailingAddress(response.data.mailing_address)
        setSignature(response.data.signature)
        setCountry(response.data.country)
        
    };
    const updateJournal = async (event) => {
        event.preventDefault(); // ketika disubmit, page tidak reload
        const formData = new FormData();
        formData.append("name",name);
        formData.append("public_name",publicName);
        formData.append("email",email);
        formData.append("current_password","");
        formData.append("new_password", "");
        formData.append("confirm_password", "");
        formData.append("phone", phone);
        formData.append("orcid_id",orcidId);
        formData.append("affiliation",affiliation);
        formData.append("mailing_address",mailingAddress);
        formData.append("signature",signature);
        formData.append("country",country);
        formData.append("file",file)
        try {
            await api.patch(`http://localhost:3001/user/update`, formData, {
            "Content-type": "multipart/form-data",
            });
        } catch (error) {
            setMsg(error);
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
        <div class="tab-pane fade p-3" id="public"  role="tabpanel" aria-labelledby="public-tab" >
            
            <form onSubmit={updateJournal} class="box">
                <p class="has-text-centered">{msg}</p>
                <label for="image" class="form-label">Upload Profile Picture</label>
                <input class="form-control" type="file" id="image" name="image" accept="image/png, image/jpeg"  onChange={loadImage} onClick={() =>setPreview("")}/>

                {preview ? (
                        <img id="image"class="m-4 img-fluid rounded-start" src={preview} alt="" />
                ) : (
                    ""
                )}
                <div class= "mb-3">
                    <label class="form-label">ORCID iD</label>
                    <div class="controls">
                        <input type="text" class="form-control"  value={orcidId} onChange={(e) => setOrcidId(e.target.value)}/>
                    </div>
                </div>
                <div >
                    <button class="float-end m-2 btn btn-primary btn-lg">Update</button>
                </div>
            </form>
                
        </div> 
    );
}

export default ProfilePublic;