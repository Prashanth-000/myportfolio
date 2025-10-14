const portfolioData = {
    name: "Prashantha",
    contact: {
        email: "prashanthkulal2589@gmail.com",
        phone: "+91 9108769245",
        linkedin: "https://www.linkedin.com/in/prash-x",
        github: "https://github.com/prashanth-000",
    },
    summary: "Final-year Computer Science Engineering student with a 9.47 CGPA. Passionate about software development, machine learning, and building cool things with web technologies.",
    skills: [
        { name: 'Java', level: 90 },
        { name: 'Python', level: 95 },
        { name: 'JavaScript', level: 85 },
        { name: 'React JS', level: 85 },
        { name: 'Node JS', level: 80 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'SQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'Machine Learning', level: 90 },
    ],
    education: [
        {
            degree: "BE in Computer Science Engineering",
            institution: "Sahyadri College of Engineering and Management",
            year: "2026",
            score: "CGPA: 9.47/10",
        },
        {
            degree: "Pre-University (PCMC)",
            institution: "S.V.P.U.C Kundapura",
            year: "2022",
            score: "Score: 95.1%",
        },
    ],
    projects: [
        {
            title: "MindSync - Intelligent Journaling",
            description: "A journaling app leveraging NLP and machine learning to analyze user emotions, mood, and behavior trends. Features secure multi-user architecture and automatic emotion detection.",
            technologies: ["NLP", "Flask", "Pandas", "MongoDB", "NLTK", "Scikit-learn", "Bootstrap"],
            link: "https://github.com/prashanth-000/MindSync",
        },
        {
            title: "Crop Recommendation System",
            description: "A web app that recommends the most suitable crops using soil and environmental data. Implemented a Random Forest model for accurate predictions.",
            technologies: ["Machine Learning", "Flask", "Scikit-learn", "Random Forest", "Linear Regression"],
            link: "https://github.com/prashanth-000/crop-recommendation-system",
        },
        {
            title: "Industrial Machine Maintenance Tracker",
            description: "A system for managing machine maintenance and employee scheduling to reduce operational downtime. Extended from SQL to a NoSQL database.",
            technologies: ["MySQL", "MongoDB", "Flask", "JavaScript", "HTML/CSS"],
            link: "https://github.com/prashanth-000/Industrial-Machine-Maintenance-Tracker",
        },
        {
            title: "NoteNest: MERN App",
            description: "A full-stack note-taking application built with the MERN stack.",
            technologies: ["MongoDB", "Express", "React", "Node.js"],
            link: "https://github.com/prashanth-000/NoteNest",
        },
        {
            title: "Spam Email Detection",
            description: "A machine learning model to classify emails as spam or not.",
            technologies: ["Machine Learning", "NLP", "Scikit-learn"],
            link: "https://github.com/prashanth-000/Spam-Email-Detection",
        },
        {
            title: "ChatNow: Real-time Chat",
            description: "A real-time chat application built using Node.js and WebSockets.",
            technologies: ["Node.js", "Express", "Socket.io"],
            link: "https://github.com/prashanth-000/ChatNow",
        },
    ],
    courses: [
        {
            title: "Oracle Cloud Infrastructure AI Foundations",
            issuer: "Oracle",
        },
        {
            title: "Microsoft Azure Learning Challenge",
            issuer: "Microsoft",
        }
    ]
};

export default portfolioData;
