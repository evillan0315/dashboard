import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const projects = [
  {
    name: "E-Commerce Dashboard",
    startDate: new Date("2022-05-14"),
    endDate: new Date("2022-08-02"),
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
      technologies: ["Docker", "Heroku"],
      features: [
        "Dockerized backend and frontend for portability.",
        "Deployed to Heroku for scalable, cloud-based hosting.",
      ],
    },
  },
  {
    name: "Portfolio Website",
    startDate: new Date("2021-06-01"),
    endDate: new Date("2021-08-01"),
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
      technologies: ["Netlify", "GitHub Actions"],
      features: [
        "Deployed the site to Netlify for fast, serverless hosting.",
        "Integrated GitHub Actions for continuous deployment of updates.",
      ],
    },
  },
  {
    name: "Interactive Landing Pages",
    startDate: new Date("2020-03-01"),
    endDate: new Date("2020-05-01"),
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
      technologies: ["GitHub Pages", "GitHub Actions"],
      features: [
        "Deployed landing pages on GitHub Pages for fast, static site hosting.",
        "GitHub Actions for automated updates and continuous deployment.",
      ],
    },
  },
  {
    name: "Real-Time Video Streaming Chat Platform",
    startDate: new Date("2021-01-01"),
    endDate: new Date("2021-12-01"),
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
      technologies: ["Kubernetes", "Docker", "GitHub Actions"],
      features: [
        "Automated CI/CD pipelines for continuous deployment.",
        "Load Balancing with Kubernetes to distribute traffic efficiently.",
        "Monitoring with Prometheus and Grafana for performance insights.",
      ],
    },
  },
];

async function main() {
  for (const project of projects) {
    const { frontend, backend, database, api, deployment, ...projectData } =
      project;

    const createdFrontend = await prisma.technologySet.create({
      data: {
        technologies: frontend.technologies,
        features: frontend.features,
      },
    });

    const createdBackend = await prisma.technologySet.create({
      data: {
        technologies: backend.technologies,
        features: backend.features,
      },
    });

    const createdDatabase = await prisma.technologySet.create({
      data: {
        technologies: database.technologies,
        features: database.features,
      },
    });

    const createdApi = await prisma.technologySet.create({
      data: {
        technologies: api.technologies,
        features: api.features,
      },
    });

    const createdDeployment = await prisma.technologySet.create({
      data: {
        technologies: deployment.technologies,
        features: deployment.features,
      },
    });

    await prisma.project.create({
      data: {
        ...projectData,
        frontendId: createdFrontend.id,
        backendId: createdBackend.id,
        databaseId: createdDatabase.id,
        apiId: createdApi.id,
        deploymentId: createdDeployment.id,
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
