import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "My Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "cv",
    title: "Download CV",
    type: "download",
    url: "/CV.pdf"
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    icon: reactjs,
    iconBg: "green",
    date: "March 2020 - April 2021",
    points: [
      "Build and maintain web apps using React.js.",
      "Work with designers, product managers, and developers to create quality products.",
      "Developed car rental and bike rental projects using React.js.",
      "Built portfolio websites and Jeeve, an eCommerce site."
    ],
  },
  {
    title: "React Native Developer",
    icon: mobile,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Develop and maintain web applications using React.js and related technologies.",
      "Work with designers, product managers, and developers to build high-quality products.",
      "Ensure responsive design and cross-browser compatibility.",
      "Review code and provide helpful feedback to team members."
    ]
  },
  {
    title: "WordPress Developer",
    icon: web,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Build and maintain websites using WordPress.",
      "Work with designers, product managers, and developers.",
      "Developed eCommerce sites using WordPress.",
      "Built land and house rental websites."
    ],
  },
  {
    title: "Full Stack Developer",
    icon: nodejs,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Develop and maintain web applications with React.js and related technologies.",
      "Work with designers, product managers, and developers.",
      "Built Jeeve, a full eCommerce site using React and Node.js, deployed in collaboration.",
      "Developed a complete car and bike rental system using React and Node.js.",
      "Created a multi-vendor eCommerce site using Next.js and Node.js for the backend."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Working with this developer was an amazing experience. Their attention to detail and creative approach to web development exceeded our expectations.",
    name: "Zaseem Neupane",
    designation: "Software Engineer",
    company: "Tech Innovators",
    image: "https://zasim.com.np/assets/my_profile.png",
  },
  {
    testimonial:
      "The dedication and technical expertise shown in our project was exceptional. They delivered a robust and user-friendly solution that perfectly matched our requirements.",
    name: "Binay Rijal",
    designation: "Project Manager",
    company: "Digital Solutions",
    image: "https://scontent.fjkr1-1.fna.fbcdn.net/v/t39.30808-1/464933078_1060333579214846_6629039991884438740_n.jpg?stp=c0.0.1536.1536a_dst-jpg_s200x200_tt6&_nc_cat=103&ccb=1-7&_nc_sid=e99d92&_nc_ohc=4Z_kd0DmJFkQ7kNvgHxaFb5&_nc_oc=AdhqfI0pbEz1NsTu7ByNEtLuMup-nlDCeUfB11p44XJi8J5DfX62gHNMYMZLWSbxK_M&_nc_zt=24&_nc_ht=scontent.fjkr1-1.fna&_nc_gid=A-fqxAeNILqBer_M_PAUMm5&oh=00_AYCIyFtwLLBOf7qtc_rjSTdhAQ71SZafwEsOWm8JlMnQ8A&oe=67AEA78E",
  },
  {
    testimonial:
      "Their full-stack development skills and problem-solving abilities are impressive. They transformed our concept into a powerful and scalable web application.",
    name: "Bhesraj Budathoki",
    designation: "Technical Lead",
    company: "NextGen Systems",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

// Add a new style for glowing effect
const cardStyle = {
  border: '2px solid #E6DEDD',
  boxShadow: '0 0 10px #E6DEDD', // Glowing effect
  transition: '0.3s',
};

// Modify the vertical line style specifically for the experience section
const experienceVerticalLineStyle = {
  borderLeft: '2px solid green', // Change the line color to green
  height: '100%', // Adjust height as needed
};

export { services, technologies, experiences, testimonials, projects };
