import React from 'react';
import Head from 'next/head';
import Header from '../components/Header'; 

// This component represents the "Projects" page.
const Projects = () => {
  return (
    <div className='container'>
      <Head>
        <title>My Projects</title>
      </Head>
      
      <Header />

      <div className="content">
        {/* Page title */}
        <h1>My Projects</h1>

        {/* Project 1 */}
        <div className="project">
          <img src="/static/images/termo.jpg" alt="Temperature Conversion Tool" />
          <h2 className="project-title">Temperature Conversion Tool</h2>
          <p className="project-description">A versatile web application for converting temperatures between Celsius, Fahrenheit, and Kelvin, featuring an intuitive user interface and real-time calculations.</p>
        </div>

        {/* Project 2 */}
        <div className="project">
          <img src="/static/images/tictac.jpg" alt="Interactive Tic-Tac-Toe" />
          <h2 className="project-title">Interactive Tic-Tac-Toe</h2>
          <p className="project-description">A dynamic web version of the classic Tic-Tac-Toe game, offering single and multiplayer modes with an engaging user experience.</p>
        </div>

        {/* Project 3 */}
        <div className="project">
          <img src="/static/images/hangman.jpg" alt="Hangman Adventure" />
          <h2 className="project-title">Hangman Adventure</h2>
          <p className="project-description">A digital twist on the traditional Hangman game, enhanced with interactive graphics and multiple difficulty levels for a challenging experience.</p>
        </div>

        {/* Project 4 */}
        <div className="project">
          <img src="/static/images/to-do-list.png" alt="Smart Task Manager" />
          <h2 className="project-title">Smart Task Manager</h2>
          <p className="project-description">A comprehensive task management tool that allows users to organize, prioritize, and track their daily tasks with ease and efficiency.</p>
        </div>

        {/* Project 5 */}
        <div className="project">
          <img src="/static/images/vintage.jpeg" alt="Vintage Fashion E-Store" />
          <h2 className="project-title">Vintage Fashion E-Store</h2>
          <p className="project-description">An elegantly designed e-commerce platform for a vintage fashion store, featuring a seamless shopping experience with a retro aesthetic appeal.</p>
        </div>

        <style jsx>{`
          .container {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: #242424; 
            color: #ffffff;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          }

          .content {
            max-width: 800px;
            margin: 20px auto;
            padding: 40px;
            background: linear-gradient(145deg, #1e1e1e, #292929); 
            border-radius: 12px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5); 
          }

          h1 {
            font-size: 2.5rem;
            margin-bottom: 30px;
            color: #4d4dff; 
          }

          // Styling for individual projects
          .project {
            margin-bottom: 20px;
            padding: 20px;
            border-radius: 8px;
            background-color: #333333;
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
            transition: transform 0.3s ease;
          }

          .project:hover {
            transform: scale(1.05); 
          }

          .project img {
            max-width: 100%;
            height: auto;
            border-radius: 5px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
            margin-bottom: 10px;
          }

          .project-title {
            font-size: 2rem;
            color: #ff4d4d;
            margin-bottom: 10px;
          }

          .project-description {
            font-size: 1.1rem;
            line-height: 1.8;
            color: #cccccc; 
          }
        `}</style>
      </div>
    </div>
  );
}

export default Projects;
