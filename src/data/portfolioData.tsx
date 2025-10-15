import type { PortfolioType } from "../types/ProjectType";


export const portfolioData : PortfolioType= {
    personal: {
        name: "Krishna Joshi",
        title: "Full-Stack Developer",
        tagline: "Building scalable web applications with modern technologies",
        bio: "Passionate Full-Stack Developer with expertise in React, Node.js, and cloud technologies. I love creating elegant solutions to complex problems and building products that make a difference.",
        email: "krishnajoshi4698@gmail.com",
        github: "https://github.com/krishna4698",
        linkedin: "",
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
            title: "Paytm inspired webapp",
            description: "Created a Full stack dummy payment application inspired by Paytm using Turborepo setup with multiple nextjs apps.",
            technologies: ["Nextjs", "Typescript", "Turborepo", "PostgreSQL"],
            github: "https://github.com/krishna4698/MonoreposPaytm",
            live: "https://paytm.com",
            featured: true
        },
        {
            id: 2,
            title: "Real Time Ai voice Agent Interview Platform",
            description: "Built a full stack interview preparation web using Nextjs enabling users to stimlte real time interviews wirh AI voice agents via Vapi.",
            technologies: ["Nextjs", "Typescript", "Vapi ai Agent", "Firebase"],
            github: "https://github.com/krishna4698/InterviewerAgent",
            live: "",
            featured: true
        },
        {
            id: 3,
            title: "Portfolio Website",
            description: "My own Portfolio website built using React, Typescript, Tailwindcss",
            technologies: ["React", "Typescript", "Tailwindcss",],
            github: "https://github.com/krishna4698/Portfolio",
            live: "/",
            featured: false
        }

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