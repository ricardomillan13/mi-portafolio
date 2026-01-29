import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/PlantasMedicinales.png";
import emotion from "../../Assets/Projects/Munay.png";
import editor from "../../Assets/Projects/Weather.png";
import chatify from "../../Assets/Projects/FenixLaser.png";
import suicide from "../../Assets/Projects/TierraBendita.png";
import bitsOfCode from "../../Assets/Projects/Hackaton.png";

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
              isBlog={true}
              title="Fénix Láser"
              description="Diseñe y desarrolle el e-commerce de Fénix Láser utilizando JavaScript, HTML5 y CSS3, apoyando la integración con funcionalidades de backend.
               El proyecto se enfocó en ofrecer una experiencia de usuario clara y funcional, orientada a la personalización de productos, la correcta gestión del catálogo y la optimización del proceso de compra en línea."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Hackaton"
              description="Trabajo bajo presión: desarrollo de una landing page deportiva creada durante un hackathon, enfocada en comercio deportivo y experiencia de usuario. El proyecto se construyó contra reloj, priorizando estructura, diseño responsive y funcionalidad para presentar una propuesta clara y atractiva."
              ghLink="https://github.com/ricardomillan13/Hackaton"
              demoLink="https://sportcommerce.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Weather App"
              description="Diseñe y desarrolle una aplicación web funcional que consume una API pública de clima para mostrar información en tiempo real a partir de las coordenadas ingresadas por el usuario, ofreciendo una interfaz clara y fácil de usar."
              ghLink="https://github.com/ricardomillan13/tifc-laboratorio_weather"
              demoLink="https://ricardomillan13.github.io/tifc-laboratorio_weather/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plantas Medicinales"
              description="Diseñe y desarrolle la interfaz de usuario (Frontend) utilizando JavaScript, HTML5 y CSS3, enfocándonos en la creación de un blog de plantas medicinales con una estructura clara, navegación intuitiva y una experiencia de usuario pensada para facilitar la lectura y el acceso al contenido."
              ghLink="https://github.com/ricardomillan13/plantas_medicinales"
              demoLink="https://ricardomillan13.github.io/plantas_medicinales/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={true}
              title="Tierra Bendita Cafe"
              description="Diseñe y desarrolle una solución digital funcional para Tierra Bendita Café, que integra un menú digital, un sistema de punto de venta (POS) y un display de ofertas, orientada a optimizar la gestión de productos, pedidos y promociones dentro de la cafetería."
            // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
            // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={true}
              title="Clinica Dental Munay"
              description="Diseñe y desarrolle una solución digital funcional para la Clínica Dental Munay, basada en un formulario para la generación de recetas, que permite llevar un control organizado de las recetas emitidas y facilitar su emisión en formato digital, optimizando los procesos administrativos de la clínica."
            // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
