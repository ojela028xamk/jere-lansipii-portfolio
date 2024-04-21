export type Skill = {
  category: string
  list: string[]
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
  'I have expertise in both frontend and some backend development through my education and work experience. ' +
  'I have over 1.5 years of work experience in software development.'

const skills: Skill[] = [
  {
    category: 'Frontend',
    list: [
      'HTML',
      'CSS',
      'JavaScript',
      'SASS',
      'React',
      'React Bootstrap',
      'TypeScript',
      'React Router',
      'Cypress',
    ],
  },
  {
    category: 'Graphics Design',
    list: [
      'UI/UX',
      'Graphic Design',
      'Responsive Design',
      'Adobe Illustrator',
      'Figma',
    ],
  },
  {
    category: 'Other',
    list: ['Microsoft Office Programs', 'Touch Typing', 'Adobe Premiere Pro'],
  },
]

const projects: Project[] = [
  {
    name: 'Create&Save Recipe',
    image: '',
    description: '',
    link: '',
  },
  {
    name: 'Movie Quiz',
    image: '',
    description: '',
    link: '',
  },
  {
    name: 'Breaking News',
    image: '',
    description: '',
    link: '',
  },
]

const contact: Contact = {
  email: 'jerelans91@gmail.com',
  phone: '+358407729448',
  linkedin: '',
}

export { aboutMe, skills, projects, contact }
