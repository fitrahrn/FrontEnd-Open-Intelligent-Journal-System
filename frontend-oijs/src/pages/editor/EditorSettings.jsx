import React, { useState, useEffect } from "react";
import api from "../../interceptor/axios"
import { useNavigate, useParams } from "react-router-dom";
import ChangeJournal from "../../components/editor/ChangeJournal";
import LayoutEditor from "../../components/LayoutEditor";
const EditorSetting = () => {

  return (
    <LayoutEditor>
        <ChangeJournal/>
    </LayoutEditor>
  );
};

export default EditorSetting;
