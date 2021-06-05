import Link from 'next/link'
import { useRouter } from 'next/router'
import { Image, Nav } from 'react-bootstrap'

export default function Sidebar(){
  const router = useRouter()
  return (
    <div className="sidebar">
      <div className="top-profile text-center">
          <Image src="/images/20210417_101415.jpg" width="150px" roundedCircle/>
        <span className="name">Machmud Effendi</span>
        <span className="profesion">Software Developer</span>
      </div>
      <Nav
        className="c-nav"
        activeKey={router.pathname}
      >
        <Nav.Item>
          <Link href="/" passHref>
            <Nav.Link>
              Home
            </Nav.Link>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link href="/services" passHref>
            <Nav.Link>
              Services
            </Nav.Link>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link href="/education" passHref>
            <Nav.Link>
              Education
            </Nav.Link>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link href="/experience" passHref>
            <Nav.Link>
              Experience
            </Nav.Link>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link href="/work" passHref>
            <Nav.Link>
              Work
            </Nav.Link>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link href="/blog" passHref>
            <Nav.Link>
              Blog
            </Nav.Link>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link href="/contact" passHref>
            <Nav.Link>
              Contact
            </Nav.Link>
          </Link>
        </Nav.Item>
      </Nav>
      <div className="footer">
        <span>Copyright &copy; 2021 - <a href="https://www.instagram.com/machmudfends" target="_blank">@machmudfends</a></span>
      </div>
    </div>
  )
}