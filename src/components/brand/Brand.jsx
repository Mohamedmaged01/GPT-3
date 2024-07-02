import React from "react";
import "./Brand.css";
import dropbox from "../../assets/dropbox.png";
import atlassian from "../../assets/atlassian.png";
import shopify from "../../assets/shopify.png";
import slack from "../../assets/slack.png";
import google from "../../assets/google.png";
function Brand() {
  return (
    <div className="gpt3__brand section">
      <div>
        <img src={dropbox} alt="" />
      </div>
      <div>
        <img src={atlassian} alt="" />
      </div>
      <div>
        <img src={shopify} alt="" />
      </div>
      <div>
        <img src={slack} alt="" />
      </div>
      <div>
        <img src={google} alt="" />
      </div>
    </div>
  );
}

export default Brand;
