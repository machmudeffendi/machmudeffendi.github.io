import { Card, Col, Row } from "react-bootstrap";

export default function Services(){
  return (
    <div className="w-100 services t-0">
      <div className="header">
        <span className="sub-title">What I do?</span>
        <h2 className="title">Below are some of my <span className="tint-b">expertise</span></h2>
      </div>
      <div className="body">
        <Row>
          <Col sm={12} md={6} lg={4}>
            <Card className="align-items-center">
              <div className="icon">
                Icon
              </div>
              <Card.Body>
                <h4 className="mb-3">Website & Web Apps</h4>
                <p className="pb-0 mb-0">Expertise in building a website using Java, Javascript, and PHP. And the frameworks are Springboot, Vert.x, Laravel, Codeigniter, Node.js, React.js. Keep <span className="tint mx-0 p-0">growing and learning</span> the latest technology</p>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Card className="align-items-center">
              <div className="icon">
                Icon
              </div>
              <Card.Body>
                <h4 className="mb-3">Mobile Application</h4>
                <p className="pb-0 mb-0">Expertise in building a website using Java, Javascript, and PHP. And the frameworks are Springboot, Vert.x, Laravel, Codeigniter, Node.js, React.js. Keep <span className="tint mx-0 p-0">growing and learning</span> the latest technology</p>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Card className="align-items-center">
              <div className="icon">
                Icon
              </div>
              <Card.Body>
                <h4 className="mb-3">Graphic Design</h4>
                <p className="pb-0 mb-0">Expertise in building a website using Java, Javascript, and PHP. And the frameworks are Springboot, Vert.x, Laravel, Codeigniter, Node.js, React.js. Keep <span className="tint mx-0 p-0">growing and learning</span> the latest technology</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  )
}