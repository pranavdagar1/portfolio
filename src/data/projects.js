const projects = [
  {
    id: 1,
    title: "SRE Automation Pipeline",

    description:
      "Designed and deployed a complete CI/CD pipeline using Jenkins, Docker, Kubernetes, AWS, Terraform, Prometheus, and Grafana.",

    highlights: [
      "Automated CI/CD with Jenkins",
      "Containerized application using Docker",
      "Deployed on Kubernetes",
      "Infrastructure provisioned with Terraform",
      "Monitored using Prometheus & Grafana",
    ],

    technologies: [
      "AWS",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Jenkins",
      "Prometheus",
      "Grafana",
    ],

    github: "https://github.com/pranavdagar1/cloud-native-S.R.E.-pipeline",
    demo: "#",

    featured: true,
  },

  {
    id: 2,
    title: "Chaos Engineering Platform",

    description:
      "Implemented controlled failure scenarios in Kubernetes to evaluate application resilience and recovery.",

    highlights: [
      "Simulated Kubernetes pod failures",
      "Validated application recovery",
      "Collected monitoring metrics",
      "Improved system resilience",
    ],

    technologies: [
      "Kubernetes",
      "Docker",
      "Prometheus",
      "Grafana",
    ],

    github: "https://github.com/pranavdagar1/k8s-chaos-engineering-demo",
    demo: "#",

    featured: true,
  },

  {
    id: 3,
    title: "YelpCamp",

    description:
      "Full-stack campground web application with authentication, CRUD operations, and MongoDB integration.",

    highlights: [
      "User authentication",
      "CRUD operations",
      "MongoDB integration",
      "RESTful API",
    ],

    technologies: [
      "Node.js",
      "Express",
      "MongoDB",
      "JavaScript",
    ],

    github: "https://github.com/pranavdagar1/yelpCamp",
    demo: "#",

    featured: false,
  },

  {
    id: 4,
    title: "Notes Repository",

    description:
      "Educational notes platform built with Express and MongoDB for organizing PDFs and study resources.",

    highlights: [
      "Organized course materials",
      "MongoDB database integration",
      "Dynamic content rendering with EJS",
      "Structured file categorization",
    ],

    technologies: [
      "Node.js",
      "Express",
      "MongoDB",
      "EJS",
    ],

    github: "#",
    demo: "#",

    featured: false,
  },

  {
    id: 5,
    title: "Customer Churn Prediction",

    description:
      "Machine learning application for predicting customer churn using Python and Random Forest.",

    highlights: [
      "Random Forest model",
      "Data preprocessing and feature engineering",
      "Interactive Streamlit interface",
      "Customer churn prediction",
    ],

    technologies: [
      "Python",
      "Scikit-Learn",
      "Pandas",
      "Streamlit",
    ],

    github: "#",
    demo: "#",

    featured: false,
  },
];

export default projects;