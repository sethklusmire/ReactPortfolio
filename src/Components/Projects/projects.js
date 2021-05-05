import React from "react";
import TabHeader from "../TabHeader";
import ProjectSection from "../ProjectSection";
import "./projects.css";

class Projects extends React.Component {
  render() {
    return (
      <div className="projects">
        <TabHeader title="Projects" subtitle="Things I've been working on" />
        <ProjectSection
          title="Feed Your Bean"
          src="./FYB_finals2(2).PNG"
          direction="left"
          repoLink="https://github.com/sethklusmire/BeanTeam"
          liveLink="https://feed-your-bean.herokuapp.com/"
          mobile={true}
        >
          Feed your Bean is an application that helps users learn more about the
          wide wide world of web development. At signup a user is prompted to
          choose what path of knowledge they would like to go down. Then once
          signed in a list of YouTube videos on that subject is presented.
          <ul className="project-list-container">
            <li className="project-list-item">
              <p className="project-list-text">Built in React</p>
            </li>
            <li className="project-list-item">
              <p className="project-list-text">
                Express server hosted on Heroku
              </p>
            </li>
            <li className="project-list-item">
              <p className="project-list-text">Mongo database</p>
            </li>
          </ul>
        </ProjectSection>
        
        <ProjectSection
          title="Quiet Sands: A New Years Resolution Helper"
          direction="right"
          src="./quiet-sands.png"
          repoLink="https://github.com/sethklusmire/Quiet-Sands"
          liveLink="https://quiet-sands-70711.herokuapp.com/"
          web={true}
        >
      
          Quiet Sands helps a user find their new self through mind body and knowledge.
          <ul className="project-list-container">
            <li className="project-list-item">
              <p className="project-list-text">Built with handlebars</p>
            </li>
            <li className="project-list-item">
              <p className="project-list-text">
                Express server hosted on Heroku
              </p>
            </li>
            <li className="project-list-item">
              <p className="project-list-text">MySQL database</p>
            </li>
          </ul>
        </ProjectSection>
        <br/>
        <ProjectSection
          title="An Employee Template Generator"
          direction="left"
          src="./Screenshot (29).png"
          web={true}
          repoLink="https://github.com/sethklusmire/EmployeeTemplateGenerator"
        >
          Looking to add or subtract employees to a database? This employee template has you covered.
          <ul className="project-list-container">
            <li className="project-list-item">
              <p className="project-list-text">Built with JavaScript</p>
            </li>
            <li className="project-list-item">
              <p className="project-list-text">
                Express server
              </p>
            </li>
            <li className="project-list-item">
              <p className="project-list-text">MySQL database</p>
            </li>
          </ul>
        </ProjectSection>
      </div>
    );
  }
}

export default Projects;
