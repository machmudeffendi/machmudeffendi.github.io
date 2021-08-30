import React from 'react'
import {
  Row,
  Col,
  Card,
} from 'react-bootstrap'

export default function Education(){
  return (
    <div className="w-100 content-style-1">
      <div className="header">
        <span className="sub-title">Education</span>
        <h2 className="title">Education</h2>
      </div>
      <div className="body">
        <Row className="g-4">
          <Col sm={12} md={6} lg={4}>
            <Card>
              <Card.Body>
                <h4 className="mb-3">State Vocational High School 6 Malang</h4>
                <p className="pb-0 mb-0">Software engineering</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  )
}