import React from 'react';
import headshot from '../../assets/Portfolio photo.jpg'


function About() {
    return (
      <section>
        <h1 id="about">About Me</h1>
        <div class="flex-row">
            <p>
                Hello, my name is Mohamed Abdullahi. I am a Full-stack web developer. Currently just finishing up my bootcamp at the University of Oregon.
                I hope to now increase my skills and hopefully get a job as a developer. 
            </p>
        </div>
        <div>
            < img className='headshot'
            src={headshot}
            alt= 'portrait'
            />
        </div>
      </section>
    );
  }
  
  export default About;