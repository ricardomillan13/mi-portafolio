import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            ¡Hola a todos! Soy <span className="purple">Soy Ricardo Millán</span>{" "}
            de <span className="purple">Ciudad de México</span>.
            <br />
            Actualmente trabajo como{" "}
            <span className="purple">Software Developer</span>{" "}
            <span className="purple">freelance</span>.
            <br />
            <br />
            Además de programar, me encanta participar en actividades que me mantienen creativo e inspirado:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Jugar Videojuegos 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Explorar nuevas tecnologías 🧠
            </li>
            <li className="about-activity">
              <ImPointRight /> Viajar y explorar nuevos lugares 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "¡Esfuérzate por crear cosas que marquen la diferencia!"{" "}
          </p>
          <footer className="blockquote-footer">Ricardo M.</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
