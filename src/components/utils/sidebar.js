import React from 'react'
import { Link } from 'gatsby'
import { Image, Nav } from 'react-bootstrap'

import ProfilePhoto from '../../images/20210417_101415.jpg'

export default function Sidebar(){
  return (
    <div className="sidebar">
      <div className="top-profile text-center">
          <Image src={ProfilePhoto} width="150px" roundedCircle/>
        <span className="name">Machmud Effendi</span>
        <span className="profesion">Software Developer</span>
      </div>
      <Nav
        className="c-nav"
      >
        <Nav.Item>
          <Nav.Link as={Link} to="/" activeClassName="active">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/services" activeClassName="active">
            Services
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/education" activeClassName="active">
            Education
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/experience" activeClassName="active">
            Experience
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/work" activeClassName="active">
            Work
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/blog" activeClassName="active">
            Blog
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/contact" activeClassName="active">
            Contact
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <div className="footer">
        <span>Copyright &copy; 2021 - <a href="https://www.instagram.com/machmudfends" target="_blank">@machmudfends</a></span>
      </div>
    </div>
  )
}