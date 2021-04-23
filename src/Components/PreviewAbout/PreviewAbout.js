import React from "react";
import MyButton from "../MyButton";
import { Link } from "react-router-dom";
import "./preview-about.css";

class PreviewAbout extends React.Component {
  render() {
    return (
      <section className="preview-about">
        <div className="inner-section inner-about wrapper">
          <article className="profile-description-container">
            <h1 className="profile-title">My name is Seth Klusmire</h1>
            <h2 className="profile-subtitle">I make web applications</h2>
            <p className="profile-text">
              I've always found myself around computers much like many
              millennials. I built my first computer freshmen year of highschool
              and have been tinkering with the hardware ever since. I attended
              Colorado State University and received a Bachelor's of Art in
              History and Theater. The last five years I've bartended and served
              in the French Quarter of New Orleans and Michelin Star restaurants
              in Chicago. Web Development is new in my life but so far I've been
              enjoying the knowledge I've gained.
              <br />
              <br />
              If you'd like to know where the best Po Boy is in New Orleans or
              want to talk anything code, reach out through my Github, LinkedIn
              or email!
            </p>
            <div className="profile-buttons">
              <Link to="/projects">
                <MyButton
                  title="Projects"
                  theme="blue"
                  className="project-view"
                />
              </Link>
              <Link to="/public/NewResume.pdf" target="_blank" download>
                <MyButton title="Resumé" theme="blue" />
              </Link>
            </div>
          </article>
          <div className="profile-image-container">
            <br />
            <div className="body">
              <div className="screen">
                <img src="./profilepic.JPG" alt="" className="profile-image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default PreviewAbout;
