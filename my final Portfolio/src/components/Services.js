import React from "react";
import {

  FaCamera,
  FaCircleNotch,

  FaSearchDollar,
} from "react-icons/fa";
const Services = () => {
  const [header] = React.useState({
    mainHeader: "SKILLS",

  });
  const [state] = React.useState([

    {
      id: 2,
      icon: <FaCamera className="commonIcons" />,
      heading: "Photography",
      text:
        "I am a passionate photographer",
    },
    {
      id: 3,
      icon: <FaCircleNotch className="commonIcons" />,
      heading: "Web Desing",
      text:
        "Recently Started with web dev getting familar with reactjs, css, html",
    },
    {
      id: 6,
      icon: <FaSearchDollar className="commonIcons" />,
      heading: "BLOCKCHAIN",
      text:
        "Dreaming to be a blockchain dev, with web3 and decentrlization booming up i am learning these new skills",
    },
  ]);
  return (
    <div className="services">
      <div className="container">
        <div className="services__header">
          <div className="common">
            <h3 className="heading">{header.mainHeader}</h3>
            <h1 className="mainHeader">{header.subHeading}</h1>
            <p className="mainContent">{header.text}</p>
            <div className="commonBorder"></div>
          </div>

          <div className="row bgMain">
            {state.map((info) => (
              <div className="col-4 bgMain">
                <div className="services__box">
                  {info.icon}
                  <div className="services__box-header">{info.heading}</div>
                  <div className="services__box-p">{info.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
