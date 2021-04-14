import React from "react";
import "./style.css";


const home = () => {

    const onClick = (link) => {
        let url;
        if (link === "github") {
          url = "https://github.com/sethklusmire";
        } else if (link === "linkedin") {
          url = "https://www.linkedin.com/in/sethklusmire/";
        }
        window.open(url);
      }

return (
    <div className= "home">
        <section className="preview-about">
         <div className="titlePosition">
            <h1 className="firstLine">Hello, my name is Seth Klusmire</h1>
            <h1 className="lastName">Klusmire</h1>

        </div>   
        </section>
        




    </div>


)



}

export default home;