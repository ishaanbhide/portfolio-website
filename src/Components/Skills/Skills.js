import React from 'react'
import "./Skills.scss"
import profilePic from "./profilepic.jpg"
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
                    A driven software engineering student who loves to tackle challenges and strive
                    for creativity and perfection in every task. A strong communicator and team
                    player with experience gained from several leadership roles. Hardworking,
                    disciplined, and adaptable to any work environment. Passionate about writing clean code,
                    following Agile methodologies, and interested in frontend development.
                    </p>
                    <div className="cvLink">
                        <a href="https://drive.google.com/file/d/1-vw11ZPydicN2T2j_pblg6oae27LYHwQ/view?usp=sharing">
                            <button type="button">
                                <h4>DOWNLOAD CV</h4>
                            </button>
                        </a>
                    </div>
                </div>

                <div className="skills-section">

                    <h1>Skills</h1>
                    
                    <div className="logos">
                        <div className="logo-and-text">
                            <img src="https://cdn.iconscout.com/icon/free/png-256/react-1543566-1306069.png" alt=""/>
                            <p>React</p>
                        </div>
                        <div className="logo-and-text">
                            <img src="https://emberjs.com/images/brand/ember-tomster-lockup-4c.svg" alt=""/>
                            <p>Ember</p>
                        </div>
                        <div className="logo-and-text">
                            <img src="https://camo.githubusercontent.com/fa78f1cf0a8057e7dde71b15370855b874b7b39de045bf053ac344bebb71047b/68747470733a2f2f63646e2e69636f6e73636f75742e636f6d2f69636f6e2f667265652f706e672d3235362f632d70726f6772616d6d696e672d3536393536342e706e67" alt=""/>
                            <p>C</p>
                        </div>
                        <div className="logo-and-text">
                            <img src="https://camo.githubusercontent.com/7b23e6c442adf9ef0714d6b52c2621b3ebef58bcc2f101b8dabab05904201e4f/68747470733a2f2f63646e2e69636f6e73636f75742e636f6d2f69636f6e2f667265652f706e672d3235362f6a6176612d34332d3536393330352e706e67" alt=""/>
                            <p>Java</p>
                        </div>
                        <div className="logo-and-text">
                            <img src="https://www.shareicon.net/data/256x256/2015/09/11/99371_javascript_512x512.png" alt=""/>
                            <p>Javascript</p>
                        </div>
                        <div className="logo-and-text">
                            <img src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png" alt=""/>
                            <p>Python</p>
                        </div>
                        <div className="logo-and-text">
                            <img src="https://iconape.com/wp-content/files/qn/195777/svg/matlab-seeklogo.com.svg" alt=""/>
                            <p>Matlab</p>
                        </div>
                        <div className="logo-and-text">
                            <img src="https://cdn.iconscout.com/icon/free/png-256/git-3215408-2673826.png" alt=""/>
                            <p>Git</p>
                        </div>
                    </div>
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