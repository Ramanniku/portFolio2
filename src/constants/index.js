import {
  mobile,
  backend,
  creator,
  
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  

  
 
  

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
 
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },
  
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Weather website",
    company_name: "IIC",
    icon: web,
    iconBg: "#383E56",
    date: "June 2023 - July 2023",
    points: [
      "Developed a website where user can see the weather condition of any city or country",
      "To build this website I have used HTML, CSS, Bootstrap, JavaScript, react js, openweather API",
     

     
   ],
  },

  {
    title: "Car rental website",
    company_name: "Self",
    icon: web,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Feb 2023",
    points: [
      "Its a car rental website where client can rent a car on per day price",
      
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],

  },
  {
    title: "Netflix clone",
    company_name: "Virtual India",
    icon: web,
    iconBg: "#383E56",
    date: "Jan 2023 - Jan 2023",
    points: [
      "Its a clone of netflix website ",
      "used HTML, CSS, Bootstrap, JavaScript",
      
    ],
  },
  {
    title: "Car rental website",
    company_name: "CIC",
    icon: web,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - march 2023",
    points: [
      "Its a car rental website where client can rent a car on per day price",
      
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "weather webapp",
    description:
      "Developed a website where user can see the weather condition of any city or country",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
     
    ],
    image: mobile,
    source_code_link: "https://drive.google.com/drive/u/0/recent",
  },
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
     
    ],
    image: carrent,
    source_code_link: "https://github.com/Ramanniku/CarRentWebsite",
  },
  {
    name: "fake news",
    description:
    "Its a web site which will going to help you check the authencity of a news, it is fake or real?",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: meta,
    source_code_link: "https://github.com/Ramanniku/fakeNews/upload",
  },
];

export { services, technologies, experiences, testimonials, projects };
