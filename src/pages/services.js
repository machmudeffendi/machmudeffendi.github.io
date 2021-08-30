import React from 'react'
import { Card, Col, Row } from "react-bootstrap"

export default function Services(){
  return (
    <div className="w-100 content-style-1 t-0">
      <div className="header">
        <span className="sub-title">What I do?</span>
        <h2 className="title">Below are some of my expertise</h2>
      </div>
      <div className="body">
        <Row className="g-4">
          <Col sm={12} md={6} lg={4}>
            <Card>
              <Card.Body>
                <h4 className="mb-3">Website & Web Apps</h4>
                <p className="pb-0 mb-0">At first I liked playing games and was curious about how to make games, using C# and Unity as game engines, finally I was able to make games.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Card>
              <Card.Body>
                <h4 className="mb-3">Mobile Application</h4>
                <p className="pb-0 mb-0">Expertise in building mobile applications using Java, and kotlin. more interested in this field and have made several applications.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Card>
              <Card.Body>
                <h4 className="mb-3">Game Application</h4>
                <p className="pb-0 mb-0">At first I liked playing games and was curious how to make games and finally I was able to make game applications.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Card>
              <Card.Body>
                <h4 className="mb-3">Graphic Design</h4>
                <p className="pb-0 mb-0">just a hobby, never entered in a more professional field.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Card>
              <Card.Body>
                <h4 className="mb-3">Content Creator</h4>
                <p className="pb-0 mb-0"></p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  )
}