import React from 'react'
import "./Footer.scss"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

export default function Footer() {
  
  return (
    <div className="footer" id="footer">
        
        <div className="leftIcons">
            <a href="https://www.linkedin.com/in/ishaan-bhide-022a23201/"><LinkedInIcon className="linkedin" fontSize="large"/></a>
            <a href="https://github.com/ishaanbhide"><GitHubIcon className="github" fontSize="large"/></a>
        </div>

        <div className="rightText">
            <p>Website design by Ishaan Bhide</p>
        </div>
    </div>
  );
}