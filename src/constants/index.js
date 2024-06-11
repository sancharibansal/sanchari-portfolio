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
      title: "Front-End Developer",
      icon: web,
    },
    {
      title: "AI & Machine Learning Enthusiast",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Data Analyst",
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Junior Web Developer Intern",
      company_name: "Zummit Infolabs",
      icon: starbucks,
      iconBg: "#383E56",
      date: "July 2023 - Nobvember 2023",
      points: [
        "Developed and maintained web applications using HTML, CSS, JavaScript, and Bootstrap to meet project requirements and enhance user experience.",
        "Utilized server-side scripting techniques to build dynamic, interactive features, ensuring efficient and robust web application functionality.",
        "Leveraged Bootstrap to create responsive and visually appealing web designs, ensuring consistency across different devices and screen sizes.",
        "Improved web application interactivity and user experience by implementing advanced JavaScript features",
      ],
    },
    // {
    //   title: "React Native Developer",
    //   company_name: "Tesla",
    //   icon: tesla,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2021 - Feb 2022",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const highlights = [
    {
      highlight:
        "Shortlisted for prestigious software engineering internships at Google, Microsoft & The Trade Desk, successfully clearing Microsoft's OA.",
    },
    {
      highlight:
        "Competed in the ServiceNow Women Code to Win competition, demonstrating my dedication to coding and algorithmic problem-solving.",
    },
    {
      highlight:
        "Earned a 4-star rating in C++ on Hackerrank, demonstrating my advanced proficiency in the language and problem-solving skills.",
    },
  ];
  
  const projects = [
    {
      name: "E-Commerce Website",
      description:
        "Crafted a feature-rich e-commerce platform using ReactJS for dynamic frontend, NodeJS/ExpressJS for robust backend, and MongoDB for efficient database management. Integrated Stripe for secure payment processing.",
      tags: [
        {
          name: "fullstack",
          color: "blue-text-gradient",
        },
        {
          name: "mernstack",
          color: "green-text-gradient",
        },
        {
          name: "webdev",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://touchnglow4u.netlify.app",
    },
    {
      name: "House Price Prediction",
      description:
        "Collected and preprocessed data from 10,000+ houses, leveraging Python and data wrangling techniques; trained a machine learning model to predict house prices with 85% accuracy, surpassing industry benchmarks.",
      tags: [
        {
          name: "machinelearning",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "data",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/sancharibansal/house_price_prediction",
    },
    {
      name: "AI Powered Tutorials",
      description:
        "Researched, and converted solutions into an explanatory video script using AI, created MS PowerPoint slides with text, equations, and diagrams, and synchronized presentations with voice-over using AI tools. Improved learning experience.",
      tags: [
        {
          name: "ai",
          color: "blue-text-gradient",
        },
        {
          name: "scriptgeneration",
          color: "green-text-gradient",
        },
        {
          name: "msppt",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://www.youtube.com/watch?v=UyAxcA8Vxu4",
    },
  ];
  
  export { services, technologies, experiences, highlights, projects };