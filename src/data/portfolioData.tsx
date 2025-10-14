interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  email: string;
  github: string;
  linkedin: string;
  location: string;
}

interface AboutInfo {
  title: string;
  description: string;
  highlights: string[];
}

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  live: string;
  featured: boolean;
}

interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface PortfolioType {
  personal: PersonalInfo;
  about: AboutInfo;
  skills: Skill[];
  projects: Project[];
  experience: Experience[];
  education: Education[];
}

export const portfolioData : PortfolioType= {
    personal: {
        name: "Sumit Joshi",
        title: "Full-Stack Developer",
        tagline: "Building scalable web applications with modern technologies",
        bio: "Passionate Full-Stack Developer with expertise in React, Node.js, and cloud technologies. I love creating elegant solutions to complex problems and building products that make a difference.",
        email: "sumitjoshi9987@gmail.com",
        github: "https://github.com/sumit5213",
        linkedin: "https://www.linkedin.com/in/sumitjoshi52/",
        location: "India"
    },

    
    about: {
        title: "About Me",
        description: "I'm a passionate Full-Stack Developer and recent graduate eager to turn ideas into reality through code. With a strong foundation in both frontend and backend technologies, I create seamless, user-friendly applications. My journey in software development has been driven by curiosity, constant learning, and building projects that solve real-world problems.",
        highlights: [
            "Proficient in React.js, Node.js, and modern JavaScript",
            "Experience with MongoDB, PostgreSQL, and REST APIs",
            "Passionate about clean code and best practices",
            "Quick learner with strong problem-solving skills"
        ]
    },

    skills: [
        { name: "React.js", level: 90, category: "Frontend" },
        { name: "JavaScript/TypeScript", level: 88, category: "Languages" },
        { name: "Node.js", level: 85, category: "Backend" },
        { name: "Express.js", level: 82, category: "Backend" },
        { name: "MongoDB", level: 80, category: "Database" },
        { name: "PostgreSQL", level: 75, category: "Database" },
        { name: "HTML/CSS", level: 92, category: "Frontend" },
        { name: "Tailwind CSS", level: 88, category: "Frontend" },
        { name: "Git/GitHub", level: 85, category: "Tools" },
        { name: "REST APIs", level: 87, category: "Backend" },
        { name: "AWS/Cloud", level: 70, category: "DevOps" },
        { name: "Docker", level: 68, category: "DevOps" }
    ],

    projects: [
        {
            id: 1,
            title: "E-Commerce Platform",
            description: "A full-featured e-commerce platform with shopping cart, payment integration, and admin dashboard. Built with React, Node.js, and MongoDB.",
            technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
            github: "https://github.com/sumit5213/ecommerce-platform",
            live: "https://demo-ecommerce.example.com",
            featured: true
        },
        {
            id: 2,
            title: "Task Management App",
            description: "Collaborative task management application with real-time updates, team collaboration features, and progress tracking.",
            technologies: ["React", "Express", "Socket.io", "PostgreSQL", "Redux"],
            github: "https://github.com/sumit5213/task-manager",
            live: "https://taskmanager.example.com",
            featured: true
        },
        {
            id: 3,
            title: "Weather Dashboard",
            description: "Real-time weather dashboard with location-based forecasts, interactive maps, and weather alerts using OpenWeather API.",
            technologies: ["React", "OpenWeather API", "Chart.js", "Material-UI"],
            github: "https://github.com/sumit5213/weather-dashboard",
            live: "https://weather.example.com",
            featured: false
        },
        {
            id: 4,
            title: "Blog Platform",
            description: "A modern blogging platform with markdown support, syntax highlighting for code snippets, and SEO optimization.",
            technologies: ["Next.js", "Node.js", "MongoDB", "MDX", "Vercel"],
            github: "https://github.com/sumit5213/blog-platform",
            live: "https://blog.example.com",
            featured: false
        },
        {
            id: 5,
            title: "Portfolio Generator",
            description: "An automated portfolio generator that creates beautiful portfolio websites from JSON data with multiple themes.",
            technologies: ["React", "Gatsby", "GraphQL", "Styled Components"],
            github: "https://github.com/sumit5213/portfolio-generator",
            live: "https://portfolio-gen.example.com",
            featured: false
        },
        {
            id: 6,
            title: "Chat Application",
            description: "Real-time chat application with private messaging, group chats, and media sharing capabilities.",
            technologies: ["React", "Node.js", "Socket.io", "Redis", "AWS S3"],
            github: "https://github.com/sumit5213/chat-app",
            live: "https://chat.example.com",
            featured: true
        },
        {
            id: 6,
            title: "Chat Application",
            description: "Real-time chat application with private messaging, group chats, and media sharing capabilities.",
            technologies: ["React", "Node.js", "Socket.io", "Redis", "AWS S3"],
            github: "https://github.com/sumit5213/chat-app",
            live: "https://chat.example.com",
            featured: true
        },

    ],

    experience: [
        {
            id: 1,
            title: "Full-Stack Developer",
            company: "Tech Innovations Ltd.",
            location: "Remote",
            period: "2022 - Present",
            description: [
                "Developed and maintained multiple web applications using React and Node.js",
                "Implemented RESTful APIs and integrated third-party services",
                "Collaborated with cross-functional teams to deliver projects on time",
                "Optimized application performance, reducing load times by 40%"
            ]
        },
        {
            id: 2,
            title: "Frontend Developer",
            company: "Digital Solutions Inc.",
            location: "Hybrid",
            period: "2021 - 2022",
            description: [
                "Built responsive and accessible user interfaces with React",
                "Converted design mockups into pixel-perfect implementations",
                "Improved website performance and SEO rankings",
                "Mentored junior developers and conducted code reviews"
            ]
        },
        {
            id: 3,
            title: "Junior Developer",
            company: "StartUp Ventures",
            location: "On-site",
            period: "2020 - 2021",
            description: [
                "Assisted in developing web applications using JavaScript frameworks",
                "Fixed bugs and implemented new features based on user feedback",
                "Participated in daily standups and agile development processes",
                "Learned best practices for code quality and version control"
            ]
        }
    ],

    education: [
        {
            degree: "Bachelor of Technology in Computer Science",
            institution: "University of Technology",
            period: "2016 - 2020",
            description: "Focused on software development, data structures, algorithms, and web technologies"
        }
    ]
};