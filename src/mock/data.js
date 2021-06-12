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
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Deep Learning License Plate Recognition System using MATLAB',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },

  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Inventory Management System using Java',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Full Stack To-Do List Web app Using Java Spring Boot',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'MERN - Cinema Web Application',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
