import Head from 'next/head'
import {
  Container,
  Button
} from 'react-bootstrap'

import Wrapper from '../components/contents/wrapper'

export default function Home() {
  return (
    <Wrapper>
      <div>
        <Head>
          <title>Home - machmudfends</title>
        </Head>
        <Container>
          <h2 className="title-home">I am <br/>a <span className="tint-b">Software Developer</span></h2>
          <span className="desc-home d-block">Experience building web and mobile applications, by implementing tests, <br className="d-none d-lg-block"/>including performance, functionality, integration, systems, and user acceptance.</span>
          <div className="mt-2">
            <Button className="smooth-primary btn-sm">Download CV</Button>&nbsp;
            <Button className="smooth-primary btn-sm">View Portofolio</Button>
          </div>
        </Container>
      </div>
    </Wrapper>
  )
}
