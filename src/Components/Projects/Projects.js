import React from 'react'
import "./Projects.scss"
import Card from './Card'
import facebook_clone from "./facebook-clone.jpg"
import spelling_game from "./spelling-game.jpg"
import recipe_search from "./recipe-search.jpg"
import memo from "./memo.jpg"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function Projects() {
    return (
        <div className="projects" id="projects">
            <div className="projects-title">
                <h1>Projects</h1>
            </div>
            
            <div className="cards">
                <Card 
                title="Spelling Game"
                image={spelling_game}
                text="Quiz application that tests users on the spelling of Māori words. Words are
                spoken by the computer using Linux commands. Game allows users to
                choose different topics, input macron letters, slow down/speed up speech
                synthesis, show hints, and skip words."
                tech="JavaFX, CSS, Bash shell script"
                />

                <a href="https://github.com/ishaanbhide/memo"><Card
                title="Memo"
                image={memo}
                text="Advanced note application that uses Firebase for database and user authentication.
                Once logged in, a user can view their own notes, and have the option of creating, deleting and editing their notes.
                App also supports filtering notes by category and bulk delete functionality."
                tech="React, JavaScript, Firebase, HTML, CSS"
                /></a>

                <Card 
                title="Recipe Search App"
                image={recipe_search}
                text="Web app that uses Edamam Recipe API to load recipes into the web app."
                tech="React, JavaScript, HTML, CSS"
                />

                <Card 
                title="Facebook Clone" 
                image={facebook_clone}
                text="Web app that looks identical to Facebook. User registration using google 
                authentication and information saved using Firebase. Web app supports posting 
                text and images."
                tech="React, JavaScript, HTML, CSS"
                />
            </div>
            
            <div className="goDown">
                <a href="#contact"><ExpandMoreIcon className="downIcon" fontSize="large"/></a>
            </div>
        </div>
    )
}
