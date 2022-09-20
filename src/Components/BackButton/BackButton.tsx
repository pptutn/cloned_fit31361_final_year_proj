import React from "react";
import "./BackButton.css";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


function BackButton() {

    const navigate = useNavigate();

    return (
        <div className="backButton">

            <Button color = "primary" onClick={() => navigate(-1)}>
                <ArrowBackIcon fontSize="large"/>
            </Button>
        </div>
    )
    

}


export default BackButton;