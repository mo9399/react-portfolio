import React from 'react';
import headshot from '../../assets/Portfolio photo.jpg'


function About() {
    return (
      <section className='me'>
        <h1 id="about" className='section-title'>About Me</h1>
        <div>
            < img className='headshot'
            src={headshot}
            alt= 'portrait'
            style={{width: '180px', height: 'auto'}}
            />
        </div>
        <div>
            <p>
                Hello, my name is Mohamed Abdullahi. I am a Full-stack web developer. Currently finishing up my bootcamp at the University of Oregon.
                I hope to now increase my skills and hopefully get a job as a developer. 
            </p>
        </div>
      </section>
    );
  }
  
  export default About;