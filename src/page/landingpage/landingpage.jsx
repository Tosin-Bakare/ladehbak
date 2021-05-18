import React from "react";
import LandingpageImage from "../../assets/Ladehbak-Hero-Img.png";

import "./landingpage.css";


const LandingPage = () => (
<div className="herodiv">
    <div className="leftdiv">
        <h1>Your new digital <br/> experience with <br/> Ladehbak</h1>
        <p className="smalltext">We are team of talented designers<br/> websites with </p>
    </div>
    <div className="rightdiv">
        <img src={LandingpageImage} alt="Logo" width="480px" height="550px" />
    </div>
</div>
);

export default LandingPage;