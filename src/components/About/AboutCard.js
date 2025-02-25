import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Judá Matheo </span>
            from <span className="purple"> Manaus, Brazil.</span>
            <br />
            I am currently searching for good opportunities to show my talent as developer.
            <br />
            I have completed Information Systems course at FAMETRO, Metropolitain university of Manaus.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Drawing
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning new tech
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "What is the best in life?"{" "}
          </p>
          <footer className="blockquote-footer"></footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
