import {
    GithubFilled,
    InstagramFilled,
    LinkedinFilled,
    TwitterCircleFilled,
    MailFilled
} from "@ant-design/icons";
import boardify_home from "@/public/projects/boardify/boardify_home.png"
import boardify_editor from "@/public/projects/boardify/boardify_editor.png"
import texting_screens from "@/public/projects/texting/texting-screens.png"
import netflix_home from "@/public/projects/netflix/Netflix_home.png";
export const skills = [
    {
        id: 1,
        name: "ReactJS",
        image: "react.svg",
    },
    {
        id: 2,
        name: "NextJS",
        image: "nextjs.svg",
    },
    {
        id: 3,
        name: "TailwindCSS",
        image: "tailwind.svg",
    },
    {
        id: 4,
        name: "NodeJS",
        image: "node.svg",
    },
    {
        id: 5,
        name: "TypeScript",
        image: "typescript.svg",
    },
    {
        id: 6,
        name: "JavaScript",
        image: "javascript.svg",
    },
    {
        id: 7,
        name: "MongoDB",
        image: "mongodb.svg",
    },
    {
        id: 8,
        name: "Redis",
        image: "redis.svg",
    },
];

export const social_links = [
    {
        id: 1,
        name: "GitHub",
        description: "@ashukumar2001",
        icon: GithubFilled,
        url: "https://github.com/ashukumar2001",
    },
    {
        id: 2,
        name: "LinkedIn",
        description: "Ashu .",
        icon: LinkedinFilled,
        url: "https://www.linkedin.com/in/ashukumar2001",
    },
    {
        id: 3,
        name: "Instagram",
        description: "@ashukumar.js",
        icon: InstagramFilled,
        url: "https://www.instagram.com/ashukumar.js/",
    },
    {
        id: 4,
        name: "Twitter",
        description: "@its_ashuk",
        icon: TwitterCircleFilled,
        url: "https://twitter.com/its_ashuk",
    },
    {
        id: 5,
        name: "Mail",
        description: "work.ashu@icloud.com",
        icon: MailFilled,
        url: "mailto:work.ashu@icloud.com",
    },
];

export const details = {
    fullName: "Ashu",
    profile: "Front-End Developer",
};

export const projects = [
    {
        id: 1,
        name: "Texting",
        description: "A real-time chat application for one to one chat.",
        imageDir: "/projects/texting/",
        images: [texting_screens],
        liveURL: "https://texting-azure.vercel.app",
        sourceCodeURL: "https://github.com/ashukumar2001/texting",
    },
    {
        id: 2,
        name: "Boardify",
        description:
            "The online whiteboard for your team's best work. From brainstorming with digital sticky notes to planning and managing agile workflows, Boardify has everything you need to move work forward.",
        imageDir: "/projects/boardify/",
        images: [boardify_home, boardify_editor],
        liveURL: "https://boardify-kappa.vercel.app",
        sourceCodeURL: "https://github.com/ashukumar2001/boardify",
    },
    {
        id: 3,
        name: "Netflix front-end clone",
        description:
            "Netflix's front-end clone created with ReactJS. It uses TMDB api to fetch trending movies and tv shows. User can watch trailers which is embedded from youtube using movie-trailers library.",
        imageDir: "/projects/netflix/",
        images: [netflix_home],
        liveURL: "https://netflix-clone-2db66.web.app",
        sourceCodeURL: "https://github.com/ashukumar2001/netflix-clone-frontend",
    },
];
export const experience = [
    {
        designation: "Front-End Developer",
        companyName: "Secmark Consultancy Limited",
        from: "October 2023",
        to: "Present",
        description: `I am contributing to development of core modules for a compliance management system used by financial institutions, created a form builder feature, and participating in feature planning and technical discussions`,
    },
    {
        designation: "React Developer",
        companyName: "TrakIot Solutions Private Limited",
        from: "July 2021",
        to: "September 2023",
        description: `In my role as a React Developer, I Worked with the design team to turn wireframes and visual designs into interactive components. Increased project efficiency via agile methodologies, and improved web performance, achieving faster load times`,
    },
];
