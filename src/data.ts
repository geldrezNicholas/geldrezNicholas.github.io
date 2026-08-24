// Everything on the page comes from here.

export type Entry = {
  title: string
  name?: string // bold lead-in, used for project names
  note?: string | string[] // sub-line, or a few of them
  tag?: string
  href?: string
}

export type Section = {
  label: string
  entries: Entry[]
}

export type Social = {
  label: string
  href: string
  icon: 'github' | 'linkedin' | 'mail' | 'resume'
}

export const profile = {
  name: 'Nicholas Geldrez',
  tagline: 'CS @ Carleton · Ottawa, ON',
}

export const socials: Social[] = [
  { label: 'GitHub', href: 'https://github.com/geldrezNicholas', icon: 'github' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/nicholasgeldrez', icon: 'linkedin' },
  { label: 'Email', href: 'mailto:geldrez.nicholas@gmail.com', icon: 'mail' },
  { label: 'Resume', href: '/resume.pdf', icon: 'resume' },
]

export const sections: Section[] = [
  {
    label: 'School',
    entries: [
      {
        title: 'CS at Carleton University',
        note: [
          'Honours B.S., AI & Machine Learning stream',
          'Involved with ColorStack-CU & the Carleton Computer Science Society',
          "Dean's Honour List · Henry M. Tory Scholarship",
        ],
      },
    ],
  },
  {
    label: 'Experience',
    entries: [
      { title: 'Software Engineer Intern at Nokia', tag: 'Most recent' },
      { title: 'Software Engineer Intern at HTG Sports Services' },
      { title: 'Software Developer Intern at Carleton Computer Science Society' },
    ],
  },
  {
    label: 'Projects',
    entries: [
      {
        name: 'RavenRoom',
        title: 'Java, Spring Boot, PostgreSQL, Redis, Docker',
        note: 'Emails Carleton students the moment a library study room frees up.',
        href: 'https://ravenroom.ca',
      },
      {
        name: 'Deadline',
        title: 'Python, Flask, Gemini, Google Calendar API',
        note: 'Turns a course syllabus PDF into calendar events.',
        href: 'https://deadline-9ixk.onrender.com',
      },
    ],
  },
  {
    label: 'Skills',
    entries: [
      { name: 'Languages', title: 'Java, Python, C, C++, TypeScript, JavaScript' },
      { name: 'Backend', title: 'Spring Boot, Flask, Express, PostgreSQL, MySQL, MongoDB, Redis' },
      { name: 'Tools', title: 'Docker, Git, Linux, PyTorch, TensorFlow' },
    ],
  },
]
