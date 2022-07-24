import React from 'react';


function Cards(props) {
    return (
        <div id="card" className='container' key={props.projectArray.name.toString()}>
        <div className="card">
            <div className="card-body">
                <h2 className="card-title">{props.projectArray.name}</h2>
                <a href={props.projectArray.link} target='_blank' rel='noreferrer noopener'><img className="project-img" src={props.projectArray.image} alt={props.projectArray.name}/></a>
                <a href={props.projectArray.github} target='_blank' rel='noreferrer noopener'>{props.projectArray.github}</a>
            </div>
        </div>
    </div>
    )
  }

export default Cards;  