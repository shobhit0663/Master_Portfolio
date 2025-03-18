import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiBootstrap, SiSpringboot, SiGithub, SiHtml5, SiMysql } from "react-icons/si";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiJava,
  DiCss3,
  DiGit,
} from "react-icons/di";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiSpringboot />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap />
      </Col>
    </Row>
  );
}

export default Techstack;
