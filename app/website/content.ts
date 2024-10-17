export type Skill = {
  category: string;
  list: string[];
};

export type Project = {
  name: string;
  image: string;
  description: string;
  link: string;
};

export type Contact = {
  email: string;
  phone: string;
  linkedin: string;
};

const aboutMe =
  "Hello, I am a Bachelor of Business Administration specializing in information technology and I live in Helsinki. \n \nI have expertise in both frontend and some backend development through my education and work experience. I have over 2 years of work experience in software development.";

const skills: Skill[] = [
  {
    category: "Coding",
    list: [
      "HTML/CSS/JS",
      "SASS",
      "React",
      "React Bootstrap",
      "Next.js",
      "TypeScript",
      "SQL",
      "Cypress",
    ],
  },
  {
    category: "Graphics Design",
    list: ["UI/UX", "Responsive Design", "Figma", "Adobe Illustrator"],
  },
  {
    category: "Other",
    list: ["MS Office Programs", "Touch Typing"],
  },
];

const projects: Project[] = [
  {
    name: "Movie Quiz",
    image: "",
    description:
      "Movie Quiz is a web application that allows users to test their knowledge of movies.",
    link: "https://ojela028xamk.github.io/movie-quiz/",
  },
  {
    name: "Guitar Dictionary",
    image: "",
    description:
      "On this website user can read and learn english and finnish guitar terminology",
    link: "https://guitar-dictionary.vercel.app/",
  },
  {
    name: "Metal Band Template",
    image: "",
    description:
      "Website template for an imaginary AI generated metal band called 'Beast Within'.",
    link: "https://www.google.fi",
  },
];

const contact: Contact = {
  email: "jerelans91@gmail.com",
  phone: "+358407729448",
  linkedin: "linkedin.com",
};

export { aboutMe, skills, projects, contact };
