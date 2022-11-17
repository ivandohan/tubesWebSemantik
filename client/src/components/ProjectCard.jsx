import { Col } from "react-bootstrap";

const ProjectCard = ({ title, description, imgUrl, job }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} style={{width: "420px", height: "400px"}}/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br />
          <i><span>{job}</span></i>
        </div>
      </div>
    </Col>
  )
}

export default ProjectCard