import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Steven Crutchfield',
  subtitle: 'Web Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'Professional Photo.jpg',
  paragraphOne:
    "I'm a gamer! I am a huge Nintendo nerd and enjoy games as Mario, Zelda, and Pokemon. I also enjoy other games like Overwatch, Sonic, and Megaman.",
  paragraphTwo:
    'Also really big into Anime and drawing. I aim to hopefully land a career where I can apply my new skills and while being part of an environment that has one of these two hobbies of mine.',
  paragraphThree: ' ',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'DelivRy.PNG',
    title: 'Delivry App',
    info: 'This was a group project website that aimed to develop a full-stack MERN application that granted the user to keep track of their packages. The goal was to implement a Shipping API that kept track of shipments, while also storing a list to a NoSQL database. ',
    info2: '',
    url: 'https://special-delivry.herokuapp.com/',
    repo: 'https://github.com/scrutch93/Project_3', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'CrutchCreations.PNG',
    title: 'CrutchCreations',
    info: 'This project is an Ecommerce web store that hosts items that display art/designs that I have personally created. I intend to add more graphics and art to the site. Thie site is mostly React frontend while utilizing a commerced based API for the backend to host my products. ',
    info2: '',
    url: 'https://github.com/scrutch93/crutch_creations',
    repo: 'https://github.com/scrutch93/crutch_creations', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Minigames.PNG',
    title: 'MiniGame Bonanza',
    info: 'This was another group project assignment. The site implements express for page routing, and has 4 different javascript games for leisure. User scores are stored in a SQL database, and apended to the frontend.',
    info2: '',
    url: 'https://olympics-game.herokuapp.com/',
    repo: 'https://github.com/TedKeim/project-2', // if no repo, the button will not show up
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
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/steven-c-799023138/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/scrutch93',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
