import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';

// Import Aleena's assets
import aleenaProfile from './assets/aleena_assets/aleena_picture.jpg';
import collegePic from './assets/aleena_assets/college_website_picture.png';
import dashboardPic from './assets/aleena_assets/dashboard_picture.png';
import malwarePic from './assets/aleena_assets/malware_project_pic.png';
import resultPic from './assets/aleena_assets/result_picture.png';
import capregsoftLogo from './assets/aleena_assets/capregsoft.png';
import liveClockPic from './assets/aleena_assets/live_clock.png';
import portfolioPic from './assets/aleena_assets/aleena-portfolio-website.png';
import navttcLogo from './assets/aleena_assets/navttc.png';

// New Project Assets
import loginMongoDbPic from './assets/aleena_assets/loginmondodb live clock.png';
import todoListPic from './assets/aleena_assets/todolist.png';
import weatherAppPic from './assets/aleena_assets/weatherapp.png';
import ageCalcPic from './assets/aleena_assets/age_calculator.png';
import webMusicPlayerPic from './assets/aleena_assets/musicapp.png';
import gymWebsitePic from './assets/aleena_assets/gym_website.png';
import codeAlphaTodoPic from './assets/aleena_assets/code_alpha_to_do_list.png';
import wildlifePic from './assets/aleena_assets/wild.png';

// Certificates & Logos
import hexCertificate from './assets/aleena_assets/hexsoftwareinternshipcertificate.jpeg';
import codeAlphaCertificate from './assets/aleena_assets/codealphacertificate.png';
import codeAlphaLogo from './assets/aleena_assets/codealphalogo.png';
import hexSoftwareLogo from './assets/aleena_assets/hexsoftwarelogo.png';

// Import education images
import fgPgCollegeImg from './assets/education/fg_pg_college.jpeg';
import baseCollegeImg from './assets/education/base_college.jpeg';
import fgSchoolImg from './assets/education/fg_school_no_7.jpeg';


export const SkillsInfo = [
  {
    title: 'Technical Skills',
    description: 'Technologies I use to build robust applications',
    skills: [
      { name: 'HTML', logo: htmlLogo, percentage: 95 },
      { name: 'CSS', logo: cssLogo, percentage: 91 },
      { name: 'JavaScript', logo: javascriptLogo, percentage: 85 },
      { name: 'ReactJS', logo: reactjsLogo, percentage: 80 },
      { name: 'NodeJS', logo: nodejsLogo, percentage: 75 },
      { name: 'Python', logo: pythonLogo, percentage: 88 },
      { name: 'C++', logo: cppLogo, percentage: 83 },
      { name: 'SQL', logo: mysqlLogo, percentage: 85 },
      { name: 'PowerBI', logo: htmlLogo, percentage: 90 },
    ],
  },
  {
    title: 'Professional Skills',
    description: 'Soft skills that contribute to my professional success',
    skills: [
      { name: 'Problem Solving', percentage: 90 },
      { name: 'Logical & Analytical Thinking', percentage: 85 },
      { name: 'Team Collaboration', percentage: 85 },
      { name: 'Technical Documentation', percentage: 90 },
      { name: 'Fast Learning & Adaptability', percentage: 95 },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: navttcLogo,
    role: "AI Machine Learning Course",
    company: "NAVTTC",
    date: "Certification Program",
    desc: "Completed comprehensive training in Artificial Intelligence, Machine Learning, and Business Intelligence. Gained expertise in AI algorithms, data analysis, and BI tools.",
    skills: ["AI", "Machine Learning", "PowerBI", "Python", "Data Analysis"],
  },
  {
    id: 1,
    img: capregsoftLogo,
    role: "Full Stack Web Developer Trainee",
    company: "Capregsoft",
    date: "1 Month Training",
    desc: "Completed intensive 1-month training in Full Stack Web Development, gaining hands-on experience with modern web technologies.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js", "MongoDB"],
  },
  {
    id: 2,
    img: codeAlphaLogo,
    role: "Web Development Intern",
    company: "Code Alpha",
    date: "Internship",
    desc: "Developed responsive websites and web applications. Collaborated with the team to implement new features and improve user experience.",
    skills: ["Web Development", "ReactJS", "HTML/CSS"],
  },
  {
    id: 3,
    img: hexSoftwareLogo,
    role: "Web Development Intern",
    company: "HexSoftwares",
    date: "Internship",
    desc: "Worked on various web development projects, gaining practical experience in frontend technologies and UI design.",
    skills: ["Frontend Development", "JavaScript", "UI Design"],
  },
];

export const education = [
  {
    id: 0,
    img: fgPgCollegeImg,
    school: "FG PG College (Affiliated with Punjab University)",
    date: "Present",
    grade: "CGPA 3.48",
    desc: "BS IT at FG Post Graduate College for Women, Wah Cantt — affiliated with Punjab University.",
    degree: "BS IT",
  },
  {
    id: 1,
    img: baseCollegeImg,
    school: "Base College, Wah Cantt (FBISE)",
    date: "Completed",
    grade: "858/1100",
    desc: "Higher Secondary School Certificate under FBISE board.",
    degree: "HSSC",
  },
  {
    id: 2,
    img: fgSchoolImg,
    school: "FG School No. 7 (FBISE)",
    date: "Completed",
    grade: "958/1100",
    desc: "Secondary School Certificate under FBISE board.",
    degree: "Matric",
  },
];

export const certificates = [
  {
    id: 0,
    title: "HexSoftwares Internship Certificate",
    image: hexCertificate,
  },
  {
    id: 1,
    title: "Code Alpha Internship Certificate",
    image: codeAlphaCertificate,
  },
];

export const projects = [
  {
    id: 0,
    title: "Result Management System",
    description: "A comprehensive system to manage student results.",
    image: resultPic,
    tags: ["Web Development", "Database"],
    github: "https://github.com/aleenamalik12354-bot/result-managment-system",
    webapp: "https://aleenamalik12354-bot.github.io/result-managment-system/",
    video: "newvideos/result_management.mp4",
  },
  {
    id: 1,
    title: "College Website",
    description: "Official website for FG PG College.",
    image: collegePic,
    tags: ["HTML", "CSS", "JS"],
    github: "https://github.com/aleenamalik12354-bot/college-website",
    webapp: "https://aleenamalik12354-bot.github.io/college-website/",
    video: "newvideos/college_website.mp4",
  },
  {
    id: 2,
    title: "Malware Detection",
    description: "Machine Learning project for malware detection.",
    image: malwarePic,
    tags: ["Machine Learning", "Python"],
    github: "https://github.com/aleenamalik12354-bot/malware-project",
    webapp: "https://aleenamalik12354-bot.github.io/malware-project/",
    video: "newvideos/malware_detection.mp4",
  },
  {
    id: 3,
    title: "Login MongoDB Live Clock",
    description: "A secure login system integrated with a real-time live clock using MongoDB.",
    image: loginMongoDbPic,
    tags: ["MongoDB", "Authentication", "React"],
    github: "https://github.com/aleenamalik12354-bot/login_mongodb_live-clock",
    webapp: "https://login-mongodb-live-clock.vercel.app",
  },
  {
    id: 4,
    title: "To Do List With Category",
    description: "Task management app with categorization features for better organization.",
    image: todoListPic,
    tags: ["React", "Productivity", "Web App"],
    github: "https://github.com/aleenamalik12354-bot/To_do_list_with_Category",
    webapp: "https://to-do-list-with-category.vercel.app",
  },
  {
    id: 5,
    title: "Weather App",
    description: "Real-time weather application displaying forecasts and current conditions.",
    image: weatherAppPic,
    tags: ["API Integration", "React", "CSS"],
    github: "https://github.com/aleenamalik12354-bot/weather_app",
    webapp: "https://weather-app-omega-one-36.vercel.app",
  },
  {
    id: 6,
    title: "Age Calculator",
    description: "Exact age calculation tool suitable for Code Alpha tasks.",
    image: ageCalcPic,
    tags: ["Utility", "JavaScript", "Math"],
    github: "https://github.com/aleenamalik12354-bot/age_calculator_codealpha",
    webapp: "https://age-calculator-codealpha.vercel.app",
  },
  {
    id: 7,
    title: "Web Music Player",
    description: "A dynamic web-based music player with playback controls.",
    image: webMusicPlayerPic,
    tags: ["Media", "JavaScript", "UI/UX"],
    github: "https://github.com/aleenamalik12354-bot/HexSoftwares_WebMusicPlayer",
    webapp: "https://hex-softwares-web-music-player.vercel.app",
  },
  {
    id: 8,
    title: "Gym Website",
    description: "Modern landing page for a gym with membership details and schedules.",
    image: gymWebsitePic,
    tags: ["Web Design", "HTML/CSS", "Landing Page"],
    github: "https://github.com/aleenamalik12354-bot/HexSoftware_GymWebsite",
    webapp: "https://hex-software-gym-website.vercel.app",
  },
  {
    id: 9,
    title: "Code Alpha To Do List",
    description: "Task tracking application developed for Code Alpha internship.",
    image: codeAlphaTodoPic,
    tags: ["React", "Internship", "CRUD"],
    github: "https://github.com/aleenamalik12354-bot/code_alpha_to_do_list",
    webapp: "https://code-alpha-to-do-list-beige.vercel.app",
  },
  {
    id: 10,
    title: "Wildlife Website",
    description: "Educational website exploring wildlife conservation and species.",
    image: wildlifePic,
    tags: ["Educational", "Web Design", "Nature"],
    github: "https://github.com/aleenamalik12354-bot/HexSoftwares_wildlife",
    webapp: "https://hex-softwares-wildlife.vercel.app",
  },
  {
    id: 11,
    title: "PowerBI Dashboard",
    description: "Data visualization dashboard using PowerBI.",
    image: dashboardPic,
    tags: ["PowerBI", "Data Analysis"],
    github: "https://github.com/aleenamalik12354-bot/POWER-BI-PROJECT",
    webapp: "https://aleenamalik12354-bot.github.io/POWER-BI-PROJECT/",
    video: "newvideos/dashboard.mp4",
  },
  {
    id: 12,
    title: "Live Clock",
    description: "Real-time digital and analog clock with dynamic theming.",
    image: liveClockPic,
    tags: ["ReactJS", "CSS"],
    github: "https://github.com/aleenamalik12354-bot/live-clock",
    webapp: "https://aleenamalik12354-bot.github.io/live-clock/",
    video: "newvideos/live_clock.mp4",
  },
  {
    id: 13,
    title: "Aleena Portfolio Website",
    description: "Personal portfolio website showcasing projects and skills.",
    image: portfolioPic,
    tags: ["ReactJS", "TailwindCSS"],
    github: "https://github.com/aleenamalik12354-bot/Aleena-malil-portfolio-website",
    webapp: "https://aleenamalik12354-bot.github.io/Aleena-malil-portfolio-website/",
    video: "newvideos/aleena_portfolio.mp4",
  },
];
