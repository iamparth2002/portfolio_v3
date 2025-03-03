

const work = [
  {
    company: 'Intellemo.ai',
    href: 'https://brihatinfotech.com/',
    badges: [],
    type: 'On-site',
    location: 'New Delhi, India',
    title: 'Frontend Engineer',
    logoUrl: '/bi.png',
    start: 'Sept 2024',
    end: 'Dec 2024',
    list: [
      'Designed, developed, and deployed scalable web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js)',
      'Shipdart: Built a shipping management system integrating multi-courier APIs, reducing shipment tracking issues by 40%',
      'Adigo: Developed an e-commerce platform for agriculture equipment with real-time inventory tracking, leading to an increase in vendor adoption.',
      'Edural: Engineered an LMS with student, admin, and teacher dashboards, onboarding 100+ users and improving education workflow efficiency.',
      ,
    ],
    description: `Developed The Colorants, a full stack web application, handling both frontend (Next.js, Zod, React Hook Form, Tailwind CSS, ShadCN) and backend (Node.js, Express, MongoDB, Mongoose, Cloudinary for image storage), including deployment on AWS.`,
    technologies: [
      'Next.js',
      'Next Auth',
      'TailwindCSS',
      'MongoDB',
      'NodeJS',
      'ExpressJS',
      'MongoDB',
      'AWS',
      'ReactJS',
    ],
  },
  {
    company: 'Yatiken Software Solutions',
    href: 'https://brihatinfotech.com/',
    badges: [],
    type: 'On-site',
    location: 'New Delhi, India',
    title: 'Full Stack Developer',
    logoUrl: '/bi.png',
    start: 'Sept 2024',
    end: 'Dec 2024',
    list: [
      'Designed, developed, and deployed scalable web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).',
      'Shipdart: Built a shipping management system integrating multi-courier APIs, reducing shipment tracking issues by 40%',
      'Adigo: Developed an e-commerce platform for agriculture equipment with real-time inventory tracking, leading to an increase in vendor adoption.',
      'Edural: Engineered an LMS with student, admin, and teacher dashboards, onboarding 100+ users and improving education workflow efficiency.',
      'Optimized application performance by reducing API response times by 35% and enhancing database query efficiency using Mongoose and Postman.',
      'Utilized Agile methodologies, participating in sprint planning, daily standups, and code reviews, resulting in a reduction in project bugs.',
      'Leveraged tools like Git, Jira, and Docker for version control, project management, and streamlined deployment processes.',
    ],
    description: `Developed The Colorants, a full stack web application, handling both frontend (Next.js, Zod, React Hook Form, Tailwind CSS, ShadCN) and backend (Node.js, Express, MongoDB, Mongoose, Cloudinary for image storage), including deployment on AWS.`,
    technologies: [
      'Next.js',
      'Next Auth',
      'TailwindCSS',
      'MongoDB',
      'NodeJS',
      'ExpressJS',
      'MongoDB',
      'AWS',
      'ReactJS',
    ],
  },
  {
    company: 'Brihat Infotech',
    type: 'Hybrid',
    href: 'https://brihatinfotech.com/',
    badges: [],
    location: 'New Delhi, India',
    title: 'Full Stack Developer',
    logoUrl: '/bi.png',
    start: 'Jan 2024',
    end: 'Jun 2024',
    list: [
      'Designed and deployed The Colorants, a full-stack web app using Next.js, Node.js, and MongoDB, achieving 100% uptime during client onboarding.',
      'Onboarded 50+ salons and 500+ users, providing a seamless and intuitive interface using Tailwind CSS, Zod, and ShadCN for UI consistency.',
      'Reduced backend response times by 30% through query optimization and efficient API handling.',
      'Fixed 50+ UI/UX issues by optimizing React components and reducing unnecessary re-renders, leading to a 1.5-second reduction in page load times.',
      'Integrated Cloudinary for optimized image storage and enhanced scalability on AWS infrastructure.',
    ],
    description: `Developed The Colorants, a full stack web application, handling both frontend (Next.js, Zod, React Hook Form, Tailwind CSS, ShadCN) and backend (Node.js, Express, MongoDB, Mongoose, Cloudinary for image storage), including deployment on AWS.`,
    technologies: [
      'Next.js',
      'Next Auth',
      'TailwindCSS',
      'MongoDB',
      'NodeJS',
      'ExpressJS',
      'MongoDB',
      'AWS',
      'ReactJS',
    ],
  },
  {
    company: 'Accent Technosoft',
    href: 'https://www.accenttechnosoft.com/',
    badges: [],
    type: 'Remote',
    location: 'Coimbatore, India',
    title: 'Frontend Developer',
    logoUrl: '/accent-technosoft.png',
    start: 'Dec 2022',
    end: 'Jan 2023',
    list: [
      'Developed responsive landing pages using React.js, Material-UI, and Bootstrap, achieving a 98% Lighthouse score for performance and accessibility.',
      'Created reusable components to streamline development and improve design consistency.',
      'Collaborated with designers to implement pixel-perfect, responsive UI components, ensuring cross-browser compatibility and improving page load performance.',
    ],
    technologies: [
      'React.js',
      'BootStrap',
      'Material-ui',
      'TailwindCSS',
      'HTML',
      'CSS',
      'Javascript',
    ],
  },
]

export function CareerSection() {
  return (
    <section className="py-16 max-w-7xl mx-auto max-md:px-6">
      <h2 className="text-2xl font-bold mb-16 text-center">Career</h2>
      <ol className="relative border-s border-gray-200 dark:border-gray-500">
        {work?.map((work, index) => (
          <li className="mb-10 ms-4" key={index}>

            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {work?.start} - {work?.end}
            </time>
            <h3 className="text-lg font-medium ">{work?.title}</h3>
            <p className="pb-4">{work?.company} • {work?.type}</p>
            <ul className="list-disc list-outside ml-4 mb-4 text-sm font-normal text-pretty text-darkfg">
              {work?.list?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <ul className="flex flex-wrap gap-1 mb-2">
              {work?.technologies?.map((item, index) => (
                <li key={index}>
                  <div className="relative max-w-fit inline-flex items-center justify-between box-border whitespace-nowrap h-7 rounded-small text-xs bg-[#A855F7] text-white p-0">
                    <span className="flex-1 text-inherit font-normal px-2">
                      {item}
                    </span>
                  </div>
                </li>
              ))}

            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}


