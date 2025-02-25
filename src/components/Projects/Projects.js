import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import barb from "../../Assets/Projects/leaf.png";
import memory from "../../Assets/Projects/emotion.png";
import taxes from "../../Assets/Projects/codeEditor.png";
import store from "../../Assets/Projects/chatify.png";
import ecom from "../../Assets/Projects/suicide.png";
import aspoblog from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={store}
              isBlog={false}
              title="Agro Store"
              description="Agricultural Amazon-like e-commerce, for buying groceries direct from the best sources of Manaus. Made with Php and LAMP stack. It is my first project and my conclusion thesis project."
              ghLink="https://github.com/JABAGAMEHUNTER/tcc"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aspoblog}
              isBlog={false}
              title="Aspo Blog"
              description="A blog made with Python Flask and Sqlite for posting cozy things."
              ghLink="https://github.com/JABAGAMEHUNTER/FLASKABC-"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={taxes}
              isBlog={false}
              title="Taxes Calculator"
              description="Taxes Calculator system for calculation of Brazilian Taxes. Made with Typescript, Vite React and PostgreSQL. My second big project."
              ghLink="https://github.com/JABAGAMEHUNTER/desafio_fullstack"
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={barb}
              isBlog={false}
              title="Barbecueometer"
              description="A Barbecueometer, for calculating how much food do you need to make a good Barbecue. Made with Typescript, React and Vite"
              ghLink="https://github.com/JABAGAMEHUNTER/churrascometro"
              demoLink="https://churrascometro-swart.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecom}
              isBlog={false}
              title="E-commerce Cart"
              description="E-commerce cart app, made with Typescript, React and Vite."
              ghLink="https://github.com/JABAGAMEHUNTER/ecommerce-react"
              demoLink="https://ecommerce-react-zeta-five.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={memory}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Memory card game, flip the cards and try to find out. Made with Typescript, React and Vite."
              ghLink="https://github.com/JABAGAMEHUNTER/memory_game"
              demoLink="https://memory-game-ten-psi.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
