import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Soy <b className="purple">desarrollador full-stack</b> enfocado en crear aplicaciones web funcionales, escalables y bien diseñadas. Me apasiona convertir ideas en soluciones digitales sólidas, cuidando tanto la experiencia del usuario como la calidad del código.
              <br />
              <br />
              Tengo experiencia en{" "}
              <i>
                <b className="purple">
                  HTML, CSS, Bootstrap y JavaScript
                </b>{" "}
                para el desarrollo frontend, así como en{" "}
                <b className="purple">
                  Node.js, Java
                </b>{" "}
                para la lógica backend. Además, tengo experiencia en la integración y gestión de{" "}
                <b className="purple">
                  bases de datos MySQL
                </b>
                , lo que me permite desarrollar aplicaciones completas de principio a fin.
              </i>
              <br />
              <br />
              Me gusta construir
              <i>
                <b className="purple">
                  {" "}
                  interfaces claras e intuitivas,{" "}
                </b>
              </i>
              optimizar el rendimiento de las aplicaciones y aplicar buenas prácticas de desarrollo para asegurar proyectos mantenibles y eficientes.
              <br />
              <br />
              Siempre estoy en constante{" "}
              <b className="purple">aprendizaje</b>, explorando nuevas{" "}
              <b className="purple">tecnologías</b> y{" "}
              <i>
                mejorando mis <b className="purple">habilidades</b> para{" "}
                <b className="purple">ofrecer soluciones que aporten valor real</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
