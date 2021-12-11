import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


import pic1 from "../../Assets/Projects/pic1.png";
import pic2 from "../../Assets/Projects/pic2.png";
import pic3 from "../../Assets/Projects/pic3.png";

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
              imgPath={pic1}
              isBlog={false}
              title="Traveller"
              description="This is a website for travellers.Users can sign in.Users can search their destination ,Hotels,Restaurent .They can Book Orders ,See their orders if they want they can also remove their booking.Here is some pages where everyone can not go with out log in. "
              link="https://travell-assignment.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pic2}
              isBlog={false}
              title="National Health Care"
              description="This is a website for health care service. users .Here users can register. They can find various kind of services related to health for example they can find cancer ,heart ,lunge related doctore and take their appointment.In this website users can also gain information about some health events."
              link="https://healthcare-b5d6c.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pic3}
              isBlog={false}
              title="Language Club"
              description="This is a website for language club.Built with html,css bootstrap,js and react .Here users can find different type of languages lesson packages  and there is a contact option ."
              link="https://fervent-boyd-de460a.netlify.app"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
