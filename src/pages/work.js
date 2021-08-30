import React from 'react'
import {
  Row,
  Col,
  Card,
} from 'react-bootstrap'

export default function Work(){
  return (
    <div className="w-100 content-style-1">
      <div className="header">
        <span className="sub-title">My Work</span>
        <h2 className="title">Recent Work</h2>
      </div>
      <div className="body">
        <Row className="g-4">
          <Col sm={12} md={6} lg={4}>
            <Card>
              <Card.Body>
                <h4 className="mb-3">Saaget Website</h4>
                <p className="pb-0 mb-0">Web Developement</p>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Card>
              <Card.Body>
                <h4 className="mb-3">Blog Page</h4>
                <p className="pb-0 mb-0">Web Developement</p>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Card>
              <Card.Body>
                <h4 className="mb-3">Counter Application</h4>
                <p className="pb-0 mb-0">Mobile Developement</p>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Card>
              <Card.Body>
                <h4 className="mb-3">Client personal website</h4>
                <p className="pb-0 mb-0">Web Developement</p>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Card>
              <Card.Body>
                <h4 className="mb-3">My Personal Website</h4>
                <p className="pb-0 mb-0">Web Developement</p>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Card>
              <Card.Body>
                <h4 className="mb-3">Rala Hills</h4>
                <p className="pb-0 mb-0">Game Developement</p>
              </Card.Body>
            </Card> 
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Card>
              <Card.Body>
                <h4 className="mb-3">Al-Quran Online</h4>
                <p className="pb-0 mb-0">Web Developement</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  )
}