import {
  Accordion,
  Button,
  Card,
} from 'react-bootstrap'

export default function Education(){
  return (
    <div className="w-100">
      <div className="header">
        <span className="sub-title">Education</span>
        <h2 className="title">Education</h2>
      </div>
      <div className="body">
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            State Vocational High School 6 of Malang
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            Click me!
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      </div>
    </div>
  )
}