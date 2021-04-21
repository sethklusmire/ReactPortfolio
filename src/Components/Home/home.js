import React from "react";
import "./Home.css";

const Home = () => {
  const onClick = (link) => {
    let url;
    if (link === "github") {
      url = "https://github.com/sethklusmire";
    } else if (link === "linkedin") {
      url = "https://www.linkedin.com/in/sethklusmire/";
    }
    window.open(url);
  };

  return (
    <div className="home">
      <section className="preview-about">
        <article className="profile-description-container">
          <div className="titlePosition">
            <h1 className="firstLine">My name is Seth Klusmire</h1>
            <h2 className="secondLine">I make web applications</h2>
            <p className="profileText">
              I am working toward learning to be a web developer so that I dont
              have to work in the service industry anymore. I write plays in my
              free time but wish it were a full time gig, I just lack the
              motivation to work if money isn't involved. The covid pandemic has
              put everyone in a funk, I tried my best to make my funk into a
              positive.
            </p>
            <br />
            <br />
          </div>
        </article>
      </section>
      <section className="preview-project">
        <article className="preview-project-container">
          <div className="projectTitlePosition">
            <h1 className="projectFirstLine">Feed your Bean</h1>
            <p className="projectText">
              Feed your Bean is an application that helps users learn more about
              the wide wide world of web development. At signup a user is
              prompted to choose what path of knowledge they would like to go
              down. Then once signed in a list of YouTube videos on that subject
              is presented.
            </p>
            <br />
            <br />
          </div>
        </article>
      </section>
      <section className="home-contact">
        <article className="contact-container">
            <div className="homeContactPosition">
                <h1 className="contactTitle"> Contact Me</h1>
                {/* <Link to="/contact" className="contact-button"></Link> */}
                {/* add button here to link to contact page */}
                <br/>
                <br/>
                <br/>

            </div>

        </article>
      </section>
    </div>
  );
};

export default Home;
