import React from "react";

const About = () => {
  const [header] = React.useState({
    subHeader: "About Me",
    
  });
  const [state] = React.useState([
    { id: 1, title: "Username:", text: "vill_arrica" },
    { id: 2, title: "Email:", text: "sugam.bkuber2021@vitstudent.ac.in" },
    { id: 3, title: "Phone:", text: "8971442342" },
    { id: 4, title: "Linkedin", text: "SUGAMKUBER" },
  ]);
  return (
    <div className="about">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{header.subHeader}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row  h-650 alignCenter">
          <div className="col-6">
            <div className="about__img">
              <img src="/images/me2.png" alt="man" />
            </div>
          </div>
          <div className="col-6">
            <div className="about__info">
              <h1>Hello..!</h1>
              <div className="about__info-p1">
                I am sugam Kuber a native kannadiga</div>
              <div className="about__info-p2">
                studing CSE-blockchain(sepc) at VIT,Vellore </div>
                <div className="about__info-p2">
                A 18y/o hustling hard for his dreams </div>
              
              <div className="info__contacts">
                <div className="row">
                  {state.map((info) => (
                    <div className="col-6">
                      <strong>{info.title}</strong>
                      <p>{info.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
