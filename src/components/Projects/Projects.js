import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/blog.jpg";
import emotion from "../../Assets/Projects/logistic.webp";
import editor from "../../Assets/Projects/society360.png";
import chatify from "../../Assets/Projects/logistic.webp";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/ecom.png";

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
              imgPath={chatify}
              isBlog={false}
              title="BookNest-Backend "
              description= "Developed RESTful APIs using Spring Boot to support seamless CRUD operations for book management, orders, and customer interactions. Designed and managed a MySQL database to efficiently store book inventory, user details, and transaction records, ensuring data integrity and optimized performance."
              ghLink="https://github.com/shobhit0663/BookNest-Backend"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="BookNest-Frontend"
              description ="Developed a dynamic and responsive user interface using React.js, HTML, CSS, and JavaScript for seamless book browsing, order management, and customer interactions. Integrated RESTful APIs to enable real-time data updates and enhance user experience. Designed an intuitive UI/UX to ensure smooth navigation and optimized performance across devices."
              ghLink="https://github.com/shobhit0663/BookNest-Frontend"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="PetStore-REST-API-"
              description="Developed a RESTful API for a Pet Store management system using Spring Boot, enabling seamless CRUD operations for managing pets, customers, and orders. Designed a well-structured MySQL database to store pet details, user information, and transactions efficiently. Ensured smooth API communication with robust exception handling and optimized query performance for a scalable and high-performing backend solution."              
              ghLink = "https://github.com/shobhit0663/PetStore-REST-API-"
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="SpringBoot-Core"
              description="Developed a Spring Boot-based backend for a Mobile Management System, enabling seamless CRUD operations for managing mobile devices, customer records, and orders. Designed a structured MySQL database to store device details, user information, and transactions efficiently. Ensured robust API communication with optimized query performance and exception handling, delivering a scalable and high-performing backend solution."
              ghLink="https://github.com/shobhit0663/SpringBoot-Core"
              demoLink=""
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
