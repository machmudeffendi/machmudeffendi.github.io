import React from 'react'
import {
  Container,
  Button
} from 'react-bootstrap'
import { Helmet } from "react-helmet"

export default function IndexPage() {
  return (
    <div>
      <Helmet>
        <title>Home - machmudfends</title>
      </Helmet>
      <Container>
        <h2 className="title-home">I am <br/>a <span className="tint-b">Software Developer</span></h2>
        <span className="desc-home d-block">Experience building web and mobile applications, by implementing tests, <br className="d-none d-lg-block"/>including performance, functionality, integration, systems, and user acceptance.</span>
        <div className="mt-2">
          <Button className="smooth-primary btn-sm">Download CV</Button>&nbsp;
          <Button className="smooth-primary btn-sm">View Portofolio</Button>
        </div>
      </Container>
    </div>
  )
}
