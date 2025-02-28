import { PostType } from "@/app/blog/blogType";

export const NAV_ITEM = [
  {href: "/", label: "_home"},
  {href: "/about-me", label: "_about-me"},
  {href: "/blog", label: "_blog"},
  {href: "/projects", label: "_projects"},
]

export const EXPEREINCE = [
  {
    image: "/about-me/sekawan.svg",
    title: "PT Sekawan Media Informatika",
    date: "Sep 2021 - Dec 2024",
    role: "Backend & Fullstack Developer",
    description: [
      "Develop and maintain front-end web and mobile applications using HTML, CSS, JavaScript, and frameworks like React Js, React Native, Flutter, and AngularJs.",
      "Build and optimize back-end systems and APIs using server-side languages and frameworks such as Codeigniter, Laravel, Node.js, Adonis.js, .NET Core and Springboot.",
      "Design, implement, and manage databases using SQL (MySQL, PostgreSQL, DuckDB, SQLite, MS SQL Server) and NoSQL (Realm MongoDB, Redis) technologies.",
      "Optimize web and desktop applications for maximum speed and scalability.",
      "Leading a team of developers as an Engineering Lead for several projects.",
      "Collaborating with an APAC teams to maintain their products."
    ],
    tag: "Javascript, Java, C#, PHP"
  },
  {
    image: "/about-me/eluon.svg",
    title: "PT Eluon",
    date: "May 2019 - May 2021",
    role: "Software Developer",
    description: [
      "Design, code, and implement software applications using languages such as Java, and JavaScript.",
      "Develop and maintain front-end web and mobile applications using HTML, CSS, JavaScript, and frameworks React Js.",
      "Build and optimize back-end systems and APIs using server-side languages and frameworks such as Springboot, Node.js, ExpressJs, and Symfony.",
      "Design, implement, and manage databases using SQL (MySQL, and PostgreSQL) and NoSQL (Redis) technologies.",
    ],
    tag: "Javascript, Java, C#, PHP"
  },
  {
    image: "/about-me/girisa.svg",
    title: "CV Girisa Teknologi",
    date: "Jan 2017 - May 2017",
    role: "Web Developer",
    description: [
      "Develop server-side logic and functionality using PHP.",
      "Create and manage databases using SQL (MySQL) technologies.",
      "Design and implement user interfaces using template HTML, CSS, and JavaScript",
    ],
    tag: "Javascript, Java, C#, PHP"
  }
]

export const EDUCATION = [
  {
    image: "/about-me/unsia.svg",
    title: "Universitas Siber Asia",
    date: "2021 - Now",
    role: "Bachelor of Science in Information Technology. 3.62/4.00",
    description: "Relevant Coursework: Data Science, Statistics and Probability, Software Engineering, Programming Languages, Machine Learning, Data Mining, Principles of Database Systems, Big Data, Data Visualization, Internet Of Things. Expected to graduate in Fall 2025."
  },
  {
    image: "/about-me/smk6.svg",
    title: "SMKN 6 Malang",
    date: "Jul 2016 - May 2019",
    role: "Rekayasa Perangkat Lunak, 3.36/4.00",
    description: "Relevant Coursework: Pemrograman Dasar, Pemrograman Web, Pemrograman Bergerak, Relational Database, Struktur dan Algoritma, Design Visual. Participate in the Student Competency Competition, Web Design. 2018"
  }
]

export const BLOGLIST : Array<PostType> = [
  {
    slug: {current:'the-standard-lorem-ipsum-passage-used-since-the-1500s'},
    publishedAt: 'Feb 25, 2025',
    title: 'The standard Lorem Ipsum passage, used since the 1500s',
    image: 'https://picsum.photos/id/1/720',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    slug: {current:'Section-1.10.32-of-de-Finibus-Bonorum-et-Malorum-written-by-Cicero-in-45-BC'},
    publishedAt: 'Feb 24, 2025',
    title: 'Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC',
    image: 'https://picsum.photos/id/2/720',
    excerpt: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo',
  },
  {
    slug: {current:'Section-1.10.32-of-de-Finibus-Bonorum-et-Malorum-written-by-Cicero-in-45-BC'},
    publishedAt: 'Feb 24, 2025',
    title: 'Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC',
    image: 'https://picsum.photos/id/3/720',
    excerpt: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo',
  },
  {
    slug: {current:'Section-1.10.32-of-de-Finibus-Bonorum-et-Malorum-written-by-Cicero-in-45-BC'},
    publishedAt: 'Feb 24, 2025',
    title: 'Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC',
    image: 'https://picsum.photos/id/4/720',
    excerpt: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo',
  }
]

export const POST_PER_PAGE = 10;