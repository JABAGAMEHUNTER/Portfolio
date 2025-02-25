import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVim,
  SiPostman,
  SiDiscord,
  SiVercel,
  SiArchlinux,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiArchlinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVim />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDiscord />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
    </Row>
  );
}

export default Toolstack;
