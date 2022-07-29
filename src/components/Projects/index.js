import React from "react";
import Perfect from '../../assets/perfect.jpg';
import StudyBuddy from '../../assets/studybuddy.png';
import RunBuddy from '../../assets/runbuddy.jpg';
import Griller from '../../assets/Griller.png';

import Cards from "../Card";

const project = [
    {
        name: 'Griller',
        image: Griller,
        link: 'https://github.com/mo9399/Griller',
        github: 'https://github.com/mo9399/Griller'
    },
    {
        name: 'Study Buddy',
        image: StudyBuddy,
        link: 'https://afternoon-refuge-77491.herokuapp.com/',
        github: 'https://github.com/mo9399/GroupProject2-StudyBuddy'
    },
    {
        name: 'Perfect Night OUt',
        image: Perfect,
        link: 'https://mo9399.github.io/perfect-night-out/',
        github: 'https://github.com/mo9399/perfect-night-out'
    },
    {
        name: 'Run Buddy',
        image: RunBuddy,
        link: 'https://mo9399.github.io/run-buddy/',
        github: 'https://github.com/mo9399/run-buddy'
    },
]

function Projects() {
    return (
        <section>
            <div>
                <h2 className='project'>My Projects</h2>
            </div>
            <div className='container'>
                <div className="row">
                    {project.map(projectArray => {
                        return (project.indexOf(projectArray),
                        <Cards key={projectArray.name.toString()} projectArray={projectArray} />
                    )})}
                </div>
            </div>
        </section>
    )
}

export default Projects;