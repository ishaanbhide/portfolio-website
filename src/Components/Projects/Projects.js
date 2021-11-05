import React from 'react'
import "./Projects.scss"
import Card from './Card'
import facebook_clone from "./facebook-clone.jpg"
import spelling_game from "./spelling-game.jpg"
import recipe_search from "./recipe-search.jpg"
import todo_list from "./todo-list.jpg"
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
                tech="JavaFX, Java, CSS, Bash shell script"
                />

                <Card
                title="Todo List"
                image={todo_list}
                text="Simple To Do list that supports adding and deleting new list items"
                tech="React, JavaScript, HTML, CSS"
                />

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
