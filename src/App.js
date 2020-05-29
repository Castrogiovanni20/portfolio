import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaGitlab } from 'react-icons/fa';
import { AiOutlineMail, AiOutlineFilePdf } from "react-icons/ai";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import emoji from 'react-easy-emoji'
import profile from './descarga.png';
import cv from './CV_CastrogiovanniRamiro.pdf'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Container fluid="md">
        <Row>
          <Col md={{span: 10, offset: 1}}>
            <Image src={profile} height="200" width="200" roundedCircle className="profile"/>
            <h1> Hola, soy Ramiro Castrogiovanni</h1>
            <h2 className="puesto"> Software developer </h2>
            <br/>
            <p className="descripcion">Actualmente me encuentro cursando el último cuatrimestre de la carrera Analista de Sistemas en el Instituto Tecnológico ORT. En cuanto a lo laboral me desempeño como EDI Regional Developer, desarrollando y testeando procesos de integración con EDI (Electronic Data Interchange), en Kuehne + Nagel para América.
            </p> 
            <p className="descripcion">Este año junto a 2 socios fundamos un emprendimiento en el que realizamos desarrollo de Software (web y mobile) a medida.</p>
            
            <br/>
          </Col>
        </Row>

        <Row>
          <Col md={{span:8, offset:2}}>
            <h2>Skills</h2>
            <br/>
          </Col>
        </Row>
        
        <Row>
          <Col md="12">
            <div className="skills">
              <div style={{ width: 150, height: 150, display: "inline-block", marginLeft: "5vh" }}>
                <CircularProgressbar text={"Java"} value={80} />
              </div>    
              <div style={{ width: 150, height: 150, display: "inline-block", marginLeft: "5vh" }}>
                <CircularProgressbar text={"Android"} value={70} />
              </div> 
              <div style={{ width: 150, height: 150, display: "inline-block", marginLeft: "5vh" }}>
                <CircularProgressbar text={"Node.js"} value={85} />
              </div> 
              <div style={{ width: 150, height: 150, display: "inline-block", marginLeft: "5vh" }}>
                <CircularProgressbar text={"React.js"} value={50} />
              </div>     
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={{span:8, offset: 2}}>
          <div className="contacto">
              <ul>
                <li> 
                  <a href="https://www.linkedin.com/in/ramiro-castrogiovanni-820596156/" target="_blank" className="linkedin">
                    <FaLinkedin size={35}/> 
                  </a>
                </li>

                <li> 
                  <a href="https://github.com/Castrogiovanni20" target="blank">
                    <FaGithub size={35}/> 
                  </a>
                </li>  

                <li>
                  <a href="https://gitlab.com/Castrogiovanni" target="blank">
                   <FaGitlab size={35}/>
                  </a>
                </li>

                <li> 
                  <a href="mailto:ramirocastrogiovanni@gmail.com" target="blank">
                    <AiOutlineMail size={35} /> 
                  </a>
                </li>

                <li> 
                  <a href={cv} target="_blank">
                    <AiOutlineFilePdf size={35} /> 
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={{span: 8, offset: 2}}>
            <div className="footer">
              <p>Powered by { emoji('👨‍💻') } Ramiro Castrogiovanni </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
