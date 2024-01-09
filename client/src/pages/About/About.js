import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                I am a Full Stack Software Engineer currently pursuing my
                Master's degree at Downtown School. I am actively seeking an
                internship opportunity within a dynamic company. My goal is to
                enhance my skills and contribute to innovative projects while
                benefiting from the guidance of experienced professionals. My
                skills encompass proficiency in various programming languages
                such as Java, C#, Python, and JavaScript, along with expertise
                in numerous frameworks including Django, React, Vue.js, and
                Express.js. I also have a strong background in managing
                databases such as MongoDB, MySQL, Oracle Database, and Neo4J, as
                well as utilizing operational technologies like Linux, Git,
                Docker, Vagrant, Ansible, and Jenkins. I am enthusiastic about
                connecting with professionals who share similar interests and
                exploring new opportunities in the technology industry..
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
