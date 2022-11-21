import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import img1 from "../assets/img/member1.jpg";
import img2 from "../assets/img/johansen.jpeg";
import img3 from "../assets/img/member3.jpg";
import img4 from "../assets/img/vita.jpeg";
import img5 from "../assets/img/triffine.jpeg";
import img6 from "../assets/img/member6.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
// import 'animate.css';
import TrackVisibility from 'react-on-screen';
import SearchBook from "./SearchBook";
import ListBook from "./ListBook";

const Projects = () => {

  const projects = [
    {
      title: "Vita Sariani",
      description: "211402073",
      job: "",
      imgUrl: img4,
    },
    {
      title: "Group 6",
      description: "Web Semantik Team",
      job: "",
      imgUrl: img6,
    },
    {
      title: "Triffine Laurensi Ginting",
      description: "211402142",
      job: "",
      imgUrl: img5,
    },
    {
      title: "Ivandohan Samuel Siregar",
      description: "211402067",
      job: "",
      imgUrl: img1,
    },
    {
      title: "Johansen Sihombing",
      description: "211402058",
      job: "",
      imgUrl: img2,
    },
    {
      title: "Andre Gozali",
      description: "211402100",
      job: "",
      imgUrl: img3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>You can search for a book by title. Detailed information for the book and the author is also there.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Search Book</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Book List</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">About Developer</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>

                    <Tab.Pane eventKey="first">
                      <Row>
                        <SearchBook /> 
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        <ListBook />
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          projects.map((project, index) => (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          )
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

export default Projects
