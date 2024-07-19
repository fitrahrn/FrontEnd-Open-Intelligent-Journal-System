import React, { useState, useEffect } from "react";
import api from "../../interceptor/axios"
import { useNavigate, useParams } from "react-router-dom";
import LayoutAdmin from '../../components/LayoutAdmin';
import ChangeJournal from "../../components/editor/ChangeJournal";
const EditJournal = () => {

  return (
    <LayoutAdmin>
        <ChangeJournal/>
    </LayoutAdmin>
  );
};

export default EditJournal;
