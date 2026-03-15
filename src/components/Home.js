import React from 'react'
import { NavLink } from 'react-router-dom';

export const Home = () => {
  return (
    <section className="hero">
      
      <h1>
        Hi, I'm Fredy Rodriguez
        Software Developer
      </h1>
      <br></br>      
      <p>
      I am a passionate software developer focused on building modern and responsive web applications. 
      I enjoy working with technologies such as <strong>React, JavaScript, HTML, and CSS</strong> to create clean, functional, and user-friendly interfaces.
      </p>
      <br></br>
      <p>
      Through continuous learning and hands-on projects, I have been developing my skills in <strong> frontend development, 
      component-based architecture, and responsive design</strong>. I also use tools such as <strong>Git and GitHub</strong> to manage my projects and 
      improve my development workflow.
      <br></br>
      This portfolio showcases some of the projects I have been building while improving my skills as a developer. Here you can explore my work, learn more about my experience, and see the technologies I use to create web applications.
      </p>
      <br></br>
      <p>
      I am always motivated to learn new technologies, solve problems, and grow as a developer while contributing to meaningful and 
      innovative projects.

      Feel free to explore my portfolio and get in touch if you'd like to collaborate or learn more about my work.
      </p>

      <nav>
        <ul> 
          <li>
            <NavLink to="/Portfolio">View My Work</NavLink>
          </li>
        
        
          <li>
            <NavLink to="/contact">Contact Me</NavLink>
          </li>
        </ul>
      </nav>
        
      
      
      </section>
  );
}
