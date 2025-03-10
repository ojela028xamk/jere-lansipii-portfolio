export type Skill = {
  category: string;
  icon: SkillIcon;
  list: string[];
};

export enum SkillIcon {
  CODE = "code",
  GRAPHIC = "graphic",
  OTHER = "other",
}

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
    icon: SkillIcon.CODE,
    list: ["HTML/CSS/JS", "Sass", "React", "Next.js", "TypeScript", "Cypress"],
  },
  {
    category: "Design",
    icon: SkillIcon.GRAPHIC,
    list: ["Graphics Design", "UI/UX", "Responsive Design", "Figma"],
  },
];

const projects: Project[] = [
  {
    name: "Movie Quiz",
    image: "/movie_quiz.png",
    description:
      "Movie Quiz is a web application that allows users to test their knowledge of movies.",
    link: "https://ojela028xamk.github.io/movie-quiz/",
  },
  {
    name: "Guitar Dictionary",
    image: "/guitar_dictionary.png",
    description:
      "On this website user can read and learn english and finnish guitar terminology.",
    link: "https://guitar-dictionary.vercel.app/",
  },
  {
    name: "Band Template",
    image: "/band_template.png",
    description: "Website template for a metal/rock/punk band.",
    link: "https://metal-band-template.vercel.app/",
  },
  {
    name: "Finnish Map Quiz",
    image: "/finnish_map_quiz.PNG",
    description: "Website that tests finnish geography knowledge.",
    link: "https://finland-map-quiz.vercel.app/",
  },
];

const contact: Contact = {
  email: "jerelans91@gmail.com",
  phone: "+358407729448",
  linkedin: "linkedin.com",
};

export { aboutMe, skills, projects, contact };
