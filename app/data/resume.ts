export const profile = {
  name: "Ronald Arce Matamoros",
  title: "DevOps Engineer & Full Stack Developer",
  location: "Alajuela, Costa Rica",
  email: "ronaldarce11@gmail.com",
  phone: "+(506) 8851-6653",
  linkedin: "https://www.linkedin.com/in/ronald-arce-84293203",
  summary:
    "With over 6 years of experience in software development, I've contributed to building and maintaining responsive web applications designed to deliver a smooth experience across any device. My work has included implementing reliable backend solutions, optimizing performance, and collaborating on scalable architectures that support long-term growth. I also have hands-on experience with infrastructure and cloud technologies, which allows me to understand the full lifecycle of applications. I'm looking to continue expanding my skills while contributing to innovative, high-quality software projects.",
};

export const skills = {
  technical: [
    {
      category: "DevOps",
      items: ["Docker", "Docker Compose", "Kubernetes using MicroK8s", "Proxmox", "Grafana"],
    },
    {
      category: "Cloud",
      items: [
        "AWS: EC2, Application Load Balancer, Web ACL, monitoring",
        "Azure: VM administration, monitoring, alerts",
      ],
    },
    {
      category: "Programming Languages",
      items: ["JavaScript", "TypeScript", "Python", "SQL", ".NET"],
    },
    {
      category: "Database Technologies",
      items: ["PostgreSQL", "SQL Server", "MySQL"],
    },
    {
      category: "Frontend",
      items: ["HTML5", "CSS", "Angular", "React"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express"],
    },
    {
      category: "Operating Systems",
      items: ["Linux (administration, shell scripting, system monitoring)", "Windows"],
    },
    {
      category: "Version Control & Tools",
      items: ["Git", "GitHub", "Postman", "SQL Server Management Studio", "pgAdmin"],
    },
  ],
  languages: ["Spanish", "English"],
};

export const experience = [
  {
    role: "DevOps Engineer",
    company: "STREAMING AND MULTIMEDIA CORPORATION LIMITADA",
    location: "Alajuela, Costa Rica",
    start: "Jul 2025",
    end: "Present",
    highlights: [
      "Development and maintenance of multiple company projects in MicroK8s.",
      "Automated deployment with GitHub Actions and ArgoCD while monitoring key deployments.",
      "Administration of AWS and Azure VMs as well as local Proxmox servers across different datacenters.",
    ],
  },
  {
    role: "Full Stack Developer & Sysadmin",
    company: "STREAMING AND MULTIMEDIA CORPORATION LIMITADA",
    location: "Alajuela, Costa Rica",
    start: "Dec 2024",
    end: "Jun 2025",
    highlights: [
      "Participated as a Full Stack Developer on a streaming & billing solution handling payment, player, and dashboard modules (from Frontend & Backend).",
      "Implemented monitoring and alerting through Grafana and Prometheus.",
      "Delivered new API components for a payment processor and migrated legacy front-end modules to React.",
    ],
  },
];

export const education = [
  {
    school: "Tecnológico de Costa Rica",
    location: "Alajuela, Costa Rica",
    credential: "Computer Engineering (in progress)",
    dates: "2020 – Present",
  },
  {
    school: "Colegio Técnico Profesional Industrial de Alajuela",
    location: "Alajuela, Costa Rica",
    credential: "Cisco networking fundamentals, Computer Science basics",
    dates: "December 2019",
  },
];
