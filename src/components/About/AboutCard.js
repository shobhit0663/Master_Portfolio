import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shobhit Gaidhane </span>
            from <span className="purple"> Pune, Maharashtra.</span>
            <br />
            Aspiring Software Developer with a strong foundation in Java, Spring Boot, React.js, and Cloud Technologies (AWS, Azure, GCP), passionate about building scalable, secure, and high-performance applications. 🚀
            <br /> <br/>
            Passionate about building scalable web applications 🌐 and committed to continuous learning 📚. Experienced in academic projects 🏗️ and proficient with Git 🖥️. Eager to contribute to innovative projects 💡 and grow in a dynamic development team 🤝!            <br />
            <br />
            Apart from coding, some other activities that I love to do! 😃✨
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> 🏋️ Fitness & Workout – Keeping an active lifestyle for a healthy mind and body.
            </li>
            <li className="about-activity">
              <ImPointRight /> 🎮 Gaming – Enjoying immersive virtual worlds and strategic challenges.
            </li>
            <li className="about-activity">
              <ImPointRight /> 📖 Reading Tech Blogs – Staying updated with the latest trends in technology.
            </li>
            <li className="about-activity">
              <ImPointRight /> 🎵 Listening to Music – Relaxing with my favorite tunes while working.
            </li>
            <li className="about-activity">
              <ImPointRight /> ✈️ Exploring New Places – Traveling and experiencing different cultures.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Shobhit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
