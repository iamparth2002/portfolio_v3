interface Career {
  company: string;
  role: string;
  duration: string;
  responsibilities: string[];
}

interface CareerItemProps {
  company: string;
  role: string;
  duration: string;
  responsibilities: string[];
}

const careerData: Career[] = [
  {
    company: "Intellemo.ai",
    role: "Frontend Engineer",
    duration: "Dec 2022 - Now",
    responsibilities: [
      "Worked on payment, wallet, and banking systems.",
      "Worked on an e-mobility charging service providing access to over 200k charging stations across Europe, including integration with EVSE.",
      "Developed systems using event-driven, domain-driven, and hexagonal architectures, among other approaches.",
      "Worked with technologies such as TypeScript, Node.js, MongoDB, Kafka, GraphQL, and other technologies.",
    ],
  },
  {
    company: "Yatiken Software Solutions",
    role: "Full Stack Developer",
    duration: "Aug 2024 - Dec 2024",
    responsibilities: [
      'Designed, developed, and deployed scalable web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).',
      'Shipdart: Built a shipping management system integrating multi-courier APIs, reducing shipment tracking issues by 40%',
      'Adigo: Developed an e-commerce platform for agriculture equipment with real-time inventory tracking, leading to an increase in vendor adoption.',
      'Edural: Engineered an LMS with student, admin, and teacher dashboards, onboarding 100+ users and improving education workflow efficiency.',
      'Optimized application performance by reducing API response times by 35% and enhancing database query efficiency using Mongoose and Postman.',
      'Utilized Agile methodologies, participating in sprint planning, daily standups, and code reviews, resulting in a reduction in project bugs.',
      'Leveraged tools like Git, Jira, and Docker for version control, project management, and streamlined deployment processes.',
    ],
  },
  {
    company: "Brihat Infotech",
    role: "Full Stack Developer",
    duration: "Jan 2024 - Jun 2024",
    responsibilities: [
      'Designed and deployed The Colorants, a full-stack web app using Next.js, Node.js, and MongoDB, achieving 100% uptime during client onboarding.',
      'Onboarded 50+ salons and 500+ users, providing a seamless and intuitive interface using Tailwind CSS, Zod, and ShadCN for UI consistency.',
      'Reduced backend response times by 30% through query optimization and efficient API handling.',
      'Fixed 50+ UI/UX issues by optimizing React components and reducing unnecessary re-renders, leading to a 1.5-second reduction in page load times.',
      'Integrated Cloudinary for optimized image storage and enhanced scalability on AWS infrastructure.',
    ],
  },
  {
    company: "Accent Techno Soft",
    role: "Full Stack Developer",
    duration: "Dec 2023 - Jan 2024",
    responsibilities: [
      'Developed responsive landing pages using React.js, Material-UI, and Bootstrap, achieving a 98% Lighthouse score for performance and accessibility.',
      'Created reusable components to streamline development and improve design consistency.',
      'Collaborated with designers to implement pixel-perfect, responsive UI components, ensuring cross-browser compatibility and improving page load performance.',
    ],
  },
];

export function CareerSection() {
  return (
    <section className="py-16 max-w-7xl mx-auto max-md:px-6">
      <h2 className="text-2xl font-bold mb-8 text-center">Career</h2>
      <div className="gap-8">
        <div className="space-y-12">
          {careerData.map((job, index) => (
            <CareerItem key={index} {...job} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function CareerItem({ company, role, duration, responsibilities }: CareerItemProps) {
  return (
    <div className="career-item">
      <h3 className="text-3xl font-bold">{company}</h3>
      <p className="text-gray-400 text-lg">{role}</p>
      <p className="text-gray-400 text-lg mb-4">{duration}</p>
      <ul className="space-y-1 text-gray-300 list-disc pl-5">
        {responsibilities.map((item, index) => (
          <li className="relative pl-2" key={index}>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
