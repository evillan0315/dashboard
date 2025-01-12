// Adjust the path as necessary
import * as React from "react";

import { Data } from "../types/models";

export const JobTech = {
  Dashboard: ["React", "NodeJS", "Kubernetes", "Docker"],
  Meetlily: ["Docker", "NodeJS", "Kubernetes", "AWS"],
  Freelance: ["Kubernetes", "NodeJS", "React", "Python"],
  Welligent: ["Angular", "NodeJS", "Codova", "Linux"],
};
export const heroText = [
  {
    header: "Creative and resourceful Frontend Developer",
    subheader:
      "Specialized in crafting dynamic user interfaces using React, Angular, and Tailwind CSS",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3",
    link: "#",
    buttonLink: "#",
  },
  {
    header:
      "Dedicated Backend Developer with a knack for performance optimization",
    subheader:
      "Experienced in Node.js, Django, and SQL for building efficient server-side applications",
    image:
      "https://images.unsplash.com/photo-1508385082359-f23dff8379be?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3",
    link: "#",
    buttonLink: "#",
  },
  {
    header: "Versatile Full Stack Developer",
    subheader:
      "Adept at integrating React, Flask, and PostgreSQL for end-to-end application development",
    image:
      "https://images.unsplash.com/photo-1531497865147-a369e6d4d3a6?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3",
    link: "#",
    buttonLink: "#",
  },
  {
    header: "Cloud-savvy Software Engineer",
    subheader:
      "Skilled in deploying scalable applications on AWS, Azure, and Google Cloud",
    image:
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3",
    link: "#",
    buttonLink: "#",
  },
  {
    header: "UI/UX Designer passionate about user-centric design",
    subheader:
      "Expertise in Figma, Sketch, and Adobe XD to create intuitive and engaging user experiences",
    image:
      "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3",
    link: "#",
    buttonLink: "#",
  },
  {
    header: "Security-focused DevOps Engineer",
    subheader:
      "Proficient in CI/CD pipelines, Kubernetes, and securing cloud infrastructures",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3",
    link: "#",
    buttonLink: "#",
  },
  {
    header: "AI and Machine Learning Specialist",
    subheader:
      "Experienced in TensorFlow, PyTorch, and creating intelligent models for real-world applications",
    image:
      "https://images.unsplash.com/photo-1581091012184-09a868ebd7b4?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3",
    link: "#",
    buttonLink: "#",
  },
  {
    header: "Mobile App Developer with a passion for innovation",
    subheader:
      "Building cross-platform applications using Flutter, React Native, and Swift",
    image:
      "https://images.unsplash.com/photo-1581291519195-ef11498d1cfb?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3",
    link: "#",
    buttonLink: "#",
  },
  {
    header: "Data Engineer transforming raw data into valuable insights",
    subheader: "Expert in ETL pipelines, Apache Spark, and big data solutions",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3",
    link: "#",
    buttonLink: "#",
  },
  {
    header: "Passionate Game Developer",
    subheader:
      "Creating immersive gaming experiences using Unity, Unreal Engine, and C#",
    image:
      "https://images.unsplash.com/photo-1517430816045-df4b7de18d9d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3",
    link: "#",
    buttonLink: "#",
  },
];
// Example ResumeData (ensure this is correctly imported and follows the Data structure)
const ResumeData: Data = {
  basics: {
    name: "Eddie R. Villanueva",
    firstname: "Eddie Boy",
    middle: "Robles",
    lastname: "Villanueva",
    label: "Software Engineer | Technology Consultant",
    image:
      "https://avatars.githubusercontent.com/u/192534455?s=400&u=aa6ec2ad9c99a81dc6fa7be0dcd0f5f143ba2413&v=4",
    email: "evillan0315@gmail.com",
    phone: "+639627642283",
    url: "https://linkedin.com/in/evillanueva0315",
    summary:
      "Experienced software engineer and DevOps specialist with over 12 years in software development and consulting. Adept in full-stack development, cloud engineering, real-time communication solutions, and implementing CI/CD pipelines. Passionate about mentoring, optimizing workflows, and staying updated with industry trends.",
    locations: [
      {
        city: "Quezon City",
        countryCode: "PH",
        region: "Metro Manila",
      },
    ],
    profiles: [
      {
        network: "LinkedIn",
        username: "evillanueva0315",
        url: "https://linkedin.com/in/evillanueva0315",
      },
    ],
    subheading:
      "My name is Eddie, I am passionate about crafting seamless user experiences, clean code, and scalable applications.",
    quotes: [
      "Building Innovative Solutions, One Line of Code at a Time",
      "Transforming Challenges into Opportunities with Leadership and Expertise.",
    ],
  },
  work: [
    {
      name: "Freelance",
      position: "Technology Consultant",
      startDate: "2023-05-01",
      endDate: "Present",
      summary:
        "Designed and deployed scalable cloud infrastructures on AWS, Google Cloud, and Azure for various clients. Developed custom full-stack applications with Node.js, React, Docker, and Kubernetes for seamless deployments and high availability.",
      highlights: [
        "Designed and deployed scalable cloud infrastructures on AWS, Google Cloud, and Azure for various clients.",
        "Developed custom full-stack applications with Node.js, React, Docker, and Kubernetes for seamless deployments and high availability.",
        "Automated DevOps workflows, including CI/CD pipelines using GitHub Actions to streamline deployments and reduce manual intervention.",
        "Developed real-time communication features with WebRTC and WebSocket for live messaging and video conferencing.",
      ],
    },
    {
      name: "Dashboard",
      position: "Software Engineer Consultant",
      startDate: "2020-12-01",
      endDate: "2023-03-01",

      summary:
        "Designed and deployed a real-time chat and video streaming platform handling large user bases with high availability and fault tolerance.",
      highlights: [
        "Designed and deployed a real-time chat and video streaming platform handling large user bases with high availability and fault tolerance.",
        "Managed Kubernetes clusters and Docker containers to ensure system scalability and resilience.",
        "Integrated WebRTC, WebSockets, OpenVidu, and CoTURN to enable secure and efficient real-time communication.",
        "Automated deployment and monitoring using Prometheus and custom shell scripts, improving system reliability and observability.",
      ],
    },
    {
      name: "Meetlily",
      position: "Founder & Lead Engineer",
      startDate: "2019-01-01",
      endDate: "2023-03-01",

      summary:
        "Created full-stack applications, focusing on both front-end (React, TypeScript) and back-end (Node.js) development.",
      highlights: [
        "Created full-stack applications, focusing on both front-end (React, TypeScript) and back-end (Node.js) development.",
        "Established and maintained CI/CD pipelines using GitHub Actions to automate build, test, and deployment processes.",
        "Integrated OAuth and JWT for secure authentication, ensuring user data protection and system integrity.",
      ],
    },
    {
      name: "Welligent",
      position: "Software Engineer/Mobile App Developer",
      startDate: "2015-03-01",
      endDate: "2020-08-01",
      summary:
        "Developed mobile applications with integrated WebRTC-based messaging and video conferencing systems, enhancing communication features.",
      highlights: [
        "Developed mobile applications with integrated WebRTC-based messaging and video conferencing systems, enhancing communication features.",
        "Implemented DevOps best practices by optimizing CI/CD workflows, ensuring reliable releases and minimal downtime for enterprise SaaS applications.",
        "Worked closely with cross-functional teams to design and deliver new features, ensuring scalability and performance.",
      ],
    },
    {
      name: "Easton Advertising",
      position: "Web Developer",
      startDate: "2014-03-01",
      endDate: "2017-07-01",
      summary:
        "Developed and maintained websites using WordPress, PHP, and MySQL, focusing on performance and security optimizations.",
      highlights: [
        "Developed and maintained websites using WordPress, PHP, and MySQL, focusing on performance and security optimizations.",
        "Led UI/UX enhancements for improved user experience and web performance.",
      ],
    },
    {
      name: "Resite Online",
      position: "Developer/Programmer",
      startDate: "2013-10-01",
      endDate: "2014-01-01",
      summary:
        "Built responsive websites using AngularJS and PHP, contributing to a modular approach for maintainability and scalability.",
      highlights: [
        "Built responsive websites using AngularJS and PHP, contributing to a modular approach for maintainability and scalability.",
        "Assisted in the transition to Agile methodology, improving team productivity and project efficiency.",
      ],
    },
    {
      name: "Inmotion Hosting",
      position: "Web Designer/Coder II",
      startDate: "2017-08-01",
      endDate: "2018-12-01",
      summary:
        "Developed custom web hosting solutions using WordPress, cPanel, and custom CMS platforms.",
      highlights: [
        "Developed custom web hosting solutions using WordPress, cPanel, and custom CMS platforms.",
        "Optimized server-side scripting and database configurations, ensuring high availability and performance.",
        "Provided client troubleshooting and support, ensuring minimal downtime and optimal service delivery.",
      ],
    },
  ],
  skills: [
    {
      name: "Cloud & DevOps",
      level: "Expert",
      keywords: [],
      icon: "FaCloud",
    },
    {
      name: "Monitoring & Logging",
      level: "Advanced",
      keywords: [],
      icon: "FaChartLine",
    },
    {
      name: "Automation & Scripting",
      level: "Advanced",
      keywords: [],
      icon: "FaTerminal",
    },
    {
      name: "Back-End Development",
      level: "Advanced",
      keywords: [],
      icon: "FaServer",
    },
    {
      name: "Front-End Development",
      level: "Advanced",
      keywords: [],
      icon: "FaCode",
    },
    {
      name: "Databases & API",
      level: "Advanced",
      keywords: [],
      icon: "FaServicestack",
    },
    {
      name: "Application Developmet",
      level: "Intermediate",
      keywords: [],
      icon: "FaToolbox",
    },
  ],
  projects: [
    {
      name: "E-Commerce Dashboard",
      startDate: "2022-05-01",
      endDate: "2022-08-01",
      description:
        "Built a comprehensive e-commerce management tool with Angular, allowing businesses to manage products, inventory, and orders in real-time. Integrated PayPal and Stripe for secure and flexible payment options.",
      url: "https://github.com/eddiev/e-commerce-dashboard",
      frontend: {
        technologies: ["Angular", "TypeScript", "CSS"],
        features: [
          "Real-time product and order management interface.",
          "Payment integration with PayPal and Stripe for secure transactions.",
          "Inventory management system with product categorization and search functionality.",
        ],
      },
      backend: {
        technologies: ["Node.js", "Express.js"],
        features: [
          "RESTful API endpoints for product and order management.",
          "Real-time updates for inventory and order status.",
          "JWT authentication and authorization for secure access to admin features.",
        ],
      },
      database: {
        technologies: ["MongoDB"],
        features: [
          "Real-time database synchronization for product and order management.",
          "Secure storage of user data and transaction histories.",
        ],
      },
      api: {
        technologies: ["REST APIs", "JWT"],
        features: [
          "API endpoints for managing products, orders, and customers.",
          "Secure JWT-based authentication for admin operations.",
        ],
      },
      deployment: {
        tools: ["Docker", "Heroku"],
        features: [
          "Dockerized backend and frontend for portability.",
          "Deployed to Heroku for scalable, cloud-based hosting.",
        ],
      },
    },
    {
      name: "Portfolio Website",
      startDate: "2021-06-01",
      endDate: "2021-08-01",
      description:
        "Designed a personal portfolio using ReactJS and TailwindCSS, featuring a custom theme to highlight work and skills. Integrated a contact form with dynamic form submission handling.",
      url: "https://github.com/eddiev/portfolio-website",
      frontend: {
        technologies: ["ReactJS", "TailwindCSS"],
        features: [
          "Custom theme and layout designed for a professional portfolio.",
          "Contact form integrated with form submission handling for inquiries.",
          "Mobile-responsive design for seamless user experience across devices.",
        ],
      },
      backend: {
        technologies: ["Node.js", "Express.js"],
        features: [
          "API to handle form submissions and send email notifications.",
          "Simple database to store form submissions for follow-up.",
        ],
      },
      database: {
        technologies: ["MongoDB"],
        features: ["Storing contact form submissions for potential follow-up."],
      },
      api: {
        technologies: ["REST APIs", "NodeMailer"],
        features: [
          "REST API to handle form submissions and email notifications.",
          "NodeMailer integration for sending email responses to users.",
        ],
      },
      deployment: {
        tools: ["Netlify", "GitHub Actions"],
        features: [
          "Deployed the site to Netlify for fast, serverless hosting.",
          "Integrated GitHub Actions for continuous deployment of updates.",
        ],
      },
    },
    {
      name: "Interactive Landing Pages",
      startDate: "2020-03-01",
      endDate: "2020-05-01",
      description:
        "Created responsive, engaging landing pages for marketing campaigns using Bootstrap and Vanilla JavaScript, with interactive elements and dynamic content to increase conversion rates.",
      url: "https://github.com/eddiev/landing-pages",
      frontend: {
        technologies: ["Bootstrap", "Vanilla JavaScript"],
        features: [
          "Responsive design for optimal performance on all devices.",
          "Dynamic content rendering for increased user engagement.",
          "Interactive elements such as animations and scroll effects to boost conversions.",
        ],
      },
      backend: {
        technologies: ["Node.js", "Express.js"],
        features: [
          "Lightweight API to handle form submissions and track interactions.",
        ],
      },
      database: {
        technologies: ["MongoDB"],
        features: [
          "Storing user interaction data for analysis and optimization.",
        ],
      },
      api: {
        technologies: ["REST APIs"],
        features: ["API to track user interactions and form submissions."],
      },
      deployment: {
        tools: ["GitHub Pages", "GitHub Actions"],
        features: [
          "Deployed landing pages on GitHub Pages for fast, static site hosting.",
          "GitHub Actions for automated updates and continuous deployment.",
        ],
      },
    },
    {
      name: "Real-Time Video Streaming Chat Platform",
      startDate: "2021-01-01",
      endDate: "2021-12-01",
      description:
        "Developed a scalable and feature-rich real-time video streaming chat platform designed for seamless video conferencing and instant messaging. Optimized for high-traffic environments with minimal latency and robust connection stability.",
      url: "https://github.com/eddiev/real-time-video",
      frontend: {
        technologies: ["ReactJS", "TailwindCSS", "WebRTC API", "WebSocket API"],
        features: [
          "Intuitive User Interface with ReactJS and TailwindCSS for cross-device compatibility.",
          "Real-Time Video Calls using WebRTC API for adaptive HD video quality.",
          "Instant Messaging with WebSocket API for live chat functionality.",
          "Dynamic Components like ChatBox, VideoPlayer, and UserList for better user interaction.",
          "Error Handling and Notifications for connection drops and new participant joins.",
        ],
      },
      backend: {
        technologies: ["Node.js", "Express.js", "OpenVidu", "Coturn"],
        features: [
          "WebRTC Signaling Server built with Node.js and Express.js.",
          "Real-Time Messaging Server using WebSocket for bi-directional communication.",
          "Session Management with OpenVidu and Coturn for WebRTC session handling and NAT traversal.",
          "Scalability and Fault Tolerance with Kubernetes and Docker deployments.",
        ],
      },
      database: {
        technologies: ["PostgreSQL"],
        features: [
          "User Management for authentication and session history.",
          "Chat History storage with search functionality.",
          "Session Logs for analytics, including participant details and call metrics.",
        ],
      },
      api: {
        technologies: ["REST APIs", "JWT", "Third-Party APIs"],
        features: [
          "Authentication and Authorization with JWT for secure login and RBAC.",
          "Video Session Management APIs for session creation and tracking.",
          "Third-Party API integration for push notifications and email alerts.",
        ],
      },
      deployment: {
        tools: ["Kubernetes", "Docker", "GitHub Actions"],
        features: [
          "Automated CI/CD pipelines for continuous deployment.",
          "Load Balancing with Kubernetes to distribute traffic efficiently.",
          "Monitoring with Prometheus and Grafana for performance insights.",
        ],
      },
    },
  ],
};
export default ResumeData;
