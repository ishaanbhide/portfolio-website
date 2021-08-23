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
            <h1>Projects</h1>
            <div className="cards">

                <a href="https://github.com/ishaanbhide/spelling-game" target="_blank"><Card 
                title="Spelling Game"
                image={spelling_game}
                text="Quiz application that tests users on different spelling words. Spelling words are 
                spoken by the computer using Linux commands. The game saves all statistics and
                includes reviewing incorrect answers."
                tech="Made using JavaFX, Java, CSS, Bash shell script"
                /></a>

                <a href="https://github.com/ishaanbhide/todo-list" target="_blank"><Card className="card"
                title="Todo List"
                image={todo_list}
                text="Simple To Do list that supports adding and deleting new list items"
                tech="Made using React, JavaScript, HTML, CSS"
                /></a>

                <a href="https://github.com/ishaanbhide/recipe-search" target="_blank"><Card 
                title="Recipe Search App" 
                image={recipe_search}
                text="Web app that uses Edamam Recipe API to load recipes into the web app."
                tech="Made using React, JavaScript, HTML, CSS"
                /></a>

                <Card 
                title="Facebook Clone" 
                image={facebook_clone}
                text="Web app that looks identical to Facebook. User registration using google 
                authentication and information saved using Firebase. Web app supports posting 
                text and images."
                tech="Made using React, JavaScript, HTML, CSS"
                />
            </div>
            
            <div className="goDown">
                <a href="#contact"><ExpandMoreIcon className="downIcon" fontSize="large"/></a>
            </div>
        </div>
    )
}
