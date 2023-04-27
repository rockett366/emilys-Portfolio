import Random from "./RandomWord";

function About() {
  return (
    <div className="aboutWhole" id="about">
      <div className="bubbleBox">
        <div className="imgFloat"></div>
        <div className="imgFloat_Two"></div>
      </div>
      <div className="aboutText">
        <h2>
          Hello, <Random />!
        </h2>
        <p>This website is a portfolio </p>
      </div>
    </div>
  );
}

export default About;
