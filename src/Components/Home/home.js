import React from "react";
import "./Home.css";
import PreviewAbout from "../PreviewAbout";
import ProjectSection from "../ProjectSection";

const Home = () => {
  return (
    <div className="home">
      <PreviewAbout />
      <br/>
      <ProjectSection
        className="featured-project"
        title="Feed Your Bean"
        src="./FYB_finals5-copy.PNG"
        direction="right"
        repoLink="https://github.com/sethklusmire/BeanTeam"
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
            <p className="project-list-text">Express server hosted on Heroku</p>
          </li>
          <li className="project-list-item">
            <p className="project-list-text">Mongo database</p>
          </li>
        </ul>
      </ProjectSection>
    </div>
  );
};

export default Home;
