import React from 'react'
import {
  Row,
  Col,
  Card,
} from 'react-bootstrap'

export default function Experience(){
  return (
    <div className="w-100 content-style-1">
      <div className="header">
        <span className="sub-title">Experience</span>
        <h2 className="title">Experience</h2>
      </div>
      <div className="body">
        <Row className="g-4">
          <Col sm={12} md={6} lg={4}>
            <Card>
              <Card.Body>
                <h4 className="mb-3">Cv Girisa Teknologi</h4>
                <p className="pb-0 mb-0">as Web Developer</p>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Card>
              <Card.Body>
                <h4 className="mb-3">PT Eluon</h4>
                <p className="pb-0 mb-0">as Software Developer</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  )
}