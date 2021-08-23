import React from 'react'
import "./Skills.scss"
import CV from "./CV.pdf"
import profilePic from "./profilepic.jpg"
import LinkIcon from '@material-ui/icons/Link';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function Skills() {
    return (
        <div className="skills" id="skills">
             <div className="leftSkills">
                
                <div className="about">
                    <h1>About Me</h1>
                    <p>
                    I am a full-time second year Bachelor of 
                    Software Engineering (Honours) student at The University of Auckland. I love to 
                    tackle challenges and strive for creativity and perfection in every task I come 
                    across. Through past experiences in leadership roles, I have become a confident 
                    public-speaker and an approachable communicator adaptable to any work 
                    environment. I am currently looking for an internship position where I can apply 
                    my knowledge on a practical application while also enhancing my software 
                    engineering skillset.
                    </p>
                    <div className="cvLink">
                        <p>CV:</p>
                        <a href={CV}><LinkIcon /></a>
                    </div>
                </div>
                
                <h1>Skills</h1>

                <div className="logos">
                    <ul>
                        <li>
                            <img src="https://cdn.iconscout.com/icon/free/png-256/react-1543566-1306069.png" alt=""/>
                            <p>React</p>
                        </li>
                        <li>
                            <img src="https://camo.githubusercontent.com/fa78f1cf0a8057e7dde71b15370855b874b7b39de045bf053ac344bebb71047b/68747470733a2f2f63646e2e69636f6e73636f75742e636f6d2f69636f6e2f667265652f706e672d3235362f632d70726f6772616d6d696e672d3536393536342e706e67" alt=""/>
                            <p>C</p>
                        </li>
                        <li>
                            <img src="https://camo.githubusercontent.com/7b23e6c442adf9ef0714d6b52c2621b3ebef58bcc2f101b8dabab05904201e4f/68747470733a2f2f63646e2e69636f6e73636f75742e636f6d2f69636f6e2f667265652f706e672d3235362f6a6176612d34332d3536393330352e706e67" alt=""/>
                            <p>Java</p>
                        </li>
                        <li>
                            <img src="https://www.shareicon.net/data/256x256/2015/09/11/99371_javascript_512x512.png" alt=""/>
                            <p>Javascript</p>
                        </li>
                        <li>
                            <img src="https://iconape.com/wp-content/files/qn/195777/svg/matlab-seeklogo.com.svg" alt=""/>
                            <p>Matlab</p>
                        </li>
                        <li>
                            <img src="https://cdn.iconscout.com/icon/free/png-256/git-3215408-2673826.png" alt=""/>
                            <p>Git</p>
                        </li>
                    </ul>
                </div>
                <div className="goDown">
                    <a href="#projects"><ExpandMoreIcon className="downIcon" fontSize="large"/></a>
                </div>
            </div>
            <div className="rightSkills">
                <div className="profileImage">
                    <img src={profilePic} alt="" />
                </div>
                <div className="socialIcons">
                    <a href="https://www.linkedin.com/in/ishaan-bhide-022a23201/"><LinkedInIcon className="linkedin" fontSize="large"/></a>
                    <a href="https://github.com/ishaanbhide"><GitHubIcon className="github" fontSize="large"/></a>
                </div>
            </div>
        </div>
    )
}
