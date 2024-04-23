export type Skill = {
  category: string
  list: string[]
  icon: string
}

export type Project = {
  name: string
  image: string
  description: string
  link: string
}

export type Contact = {
  email: string
  phone: string
  linkedin: string
}

const aboutMe =
  'Hello, I am a Bachelor of Business Administration specializing in information technology and I live in Helsinki. ' +
  'I have expertise in frontend, UI/UX and graphic design through my education and work experience. ' +
  'I have over 1.5 years of work experience in software development.'

const skills: Skill[] = [
  {
    category: 'Frontend',
    list: [
      'HTML / CSS / JS',
      'SASS',
      'React',
      'React Bootstrap',
      'TypeScript',
      'React Router',
      'Cypress',
    ],
    icon: 'bi bi-display',
  },
  {
    category: 'Graphics Design',
    list: [
      'UI / UX',
      'Graphic Design',
      'Responsive Design',
      'Adobe Illustrator',
      'Figma',
    ],
    icon: 'bi bi-brush',
  },
  {
    category: 'Other',
    list: ['Microsoft Office Programs', 'Touch Typing', 'Adobe Premiere Pro'],
    icon: 'bi bi-gear',
  },
]

const projects: Project[] = [
  {
    name: 'Create&Save Recipe',
    image: '',
    description:
      'Create&Save Recipe is a web application that allows users to create and save their own recipes. ',
    link: 'https://ojela028xamk.github.io/create-save-recipe/',
  },
  {
    name: 'Movie Quiz',
    image: '',
    description:
      'Movie Quiz is a web application that allows users to test their knowledge of movies.',
    link: 'https://ojela028xamk.github.io/movie-quiz/',
  },
]

const contact: Contact = {
  email: 'jerelans91@gmail.com',
  phone: '+358407729448',
  linkedin: 'linkedin.com',
}

export { aboutMe, skills, projects, contact }
