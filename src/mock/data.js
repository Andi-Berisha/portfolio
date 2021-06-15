import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Andi Berisha | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is ',
  name: 'Andi Berisha',
  subtitle: "I'm a Junior Full-Stack Developer.",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'andi.jpeg',
  paragraphOne:
    "Hi, my name's Andi and I'm a full-stack developer who's passionate about design!. I've just finished an intensive 3+ months programming course and I'm now looking for my first dev role. In those three months, I created various real work projects using Java, JS and MERN Stack.",
  paragraphTwo:
    "I'm a developer, because I'm inspired by the idea of being a better me today than I was yesterday. Put simply, I love to learn and this project is a great example of that! I picked up Gatsby and GraphQl so I could implement a Contentful CMS and I also worked in some snazzy GSAP animations",
  paragraphThree:
    "When I'm not busy building apps, you can find me going on long walks while listening to my favorite podcasts, playing basketball or investing and learning about cryptocurrency",
  resume: 'https://drive.google.com/file/d/16c93siwa9atxxRQiT_zcci6cTB9tLltR/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'ims.png',
    title: 'Inventory Management System using Java',
    info: 'This project involved the design and creation of an Inventory Management System within which order, product and customer information could be aggregated, manipulated and stored into a database. Java was used to design a system with full CRUD functionality which interacted with a MySql database (with both local and remote database functionality possible). The development process for this project included a CI pipeline which utilized Git and a testing approach which used Junit and Mockito for unit and integration testing, whilst SonarQube was used to improve the code base quality.',
    info2: 'Technologies Used: Java, GCP, MySQL, Junit, Mockito and SonarQube',
    url: 'https://www.youtube.com/watch?v=YlYmYx-xmwI',
    repo: 'https://github.com/Andi-Berisha/Inventory-Management-System-Project',
  },
  {
    id: nanoid(),
    img: 'todo.jpg',
    title: 'Full Stack To-Do List Web app Using Java Spring Boot',
    info: 'This project involved the creation of a Spring Boot web application which allowed users to create and organise tasks on a To-do List web app. The application involved a sophisticated back end created on spring boot which encompassed full CRUD functionality and connection to a H2 database instance. Additionally, this application also involved the design of a fully interactive front end using HTML, CSS and also JS to set up the API calls and retrieve data stored in the H2 database. Moreover, Junit, Mockito and Selenium were utilized to conduct and perform rigorous Unit, Integration and User Acceptance testing achieving an impressive test coverage of 96.2%. Finally, the application is capable of generating To-Do lists for multiple users and boasts full CRUD functionality for both User and Task Entities.',
    info2: 'Technologies Used: Springboot, Javascript, HTML, CSS, Junit, Mockito and Selenium',
    url: 'https://github.com/Andi-Berisha/To-do-List-Project',
    repo: 'https://github.com/Andi-Berisha/To-do-List-Project',
  },
  {
    id: nanoid(),
    img: 'qac.JPG',
    title: 'MERN - Cinema Web Application',
    info: 'I was part of a group project to produce a fully functioning Cinema website against specific user requirements. This project was a great experience for us to successfully incorporate an agile methodology and understand its benefits for application development. My main role was in building the front-end where I employed React JS, HMTL and CSS to create an attractive cinema website aesthetic with an intuitive and easy to use design. The application allows users to book tickets, rate and discuss movies and also research how to navigate to the cinema locations and the local attractions surrounding each cinema. Moreover, for this project I utilized mocha, chai and selenium to carry out unit, integration and user acceptance testing. A comprehensive test coverage of 81% was achieved.',
    info2: 'Technologies Used: React, Express, MongoDB, Node.js, HTML, CSS and Javascript',
    url: 'https://github.com/Andi-Berisha/QAC-TE',
    repo: 'https://github.com/Andi-Berisha/QAC-TE',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'mailto:andiberisha@hotmail.co.uk',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/andi-berisha-16a0b8118/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Andi-Berisha',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
