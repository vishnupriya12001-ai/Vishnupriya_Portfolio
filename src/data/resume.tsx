import { HomeIcon, NotebookIcon, BriefcaseBusiness } from "lucide-react";
import { Icons } from "@/components/icons";

export const DATA = {
  name: "VishnuPriya S ",
  initials: "J",
  url: "https://vishnupriya.io",
  location: "Chennai, TamilNadu",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "UI Designer passionate about crafting visually appealing, intuitive interfaces with a strong focus on UI and a solid understanding of UX, supported by frontend development and graphic design skills.",
  summary:
    "I’m a UI Designer with a strong eye for visual hierarchy, layout, typography, color, and design consistency. With an understanding of UX principles, I focus on creating intuitive user flows and seamless digital experiences that put users first. I use Figma to transform ideas into polished, modern interfaces, supported by my knowledge of frontend development and graphic design to create cohesive and engaging digital products.",
  avatarUrl: "/we.jpeg",
  Secskills: [
    { name: "HTML", img: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000" },
    { name: "CSS", img: "https://img.icons8.com/?size=100&id=21278&format=png&color=000000" },
    { name: "BootStrap", img: "https://img.icons8.com/?size=100&id=PndQWK6M1Hjo&format=png&color=000000" },
    { name: "Tailwindcss", img: "https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000" },
    { name: "JavaScript", img: "https://img.icons8.com/?size=100&id=108784&format=png&color=000000" },
    { name: "React", img: "https://img.icons8.com/?size=100&id=123603&format=png&color=000000" },
    { name: "Github", img: "https://icones.pro/wp-content/uploads/2021/06/icone-github-grise.png" },
    { name: "Netlify", img: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/netlify-icon.png" },

  ],
  skills: [
    { name: "Figma", img: "https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000" },
    { name: "AdobeXD", img: "https://img.icons8.com/?size=100&id=4VVL78edhbW9&format=png&color=000000" },
    { name: "Sketch", img: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/sketch-icon.png" },
    { name: "PhotoShop", img: "https://img.icons8.com/?size=100&id=13677&format=png&color=000000" },
    { name: "Illustrator", img: "https://img.icons8.com/?size=100&id=13631&format=png&color=000000" },
    { name: "Indesign", img: "https://img.icons8.com/?size=100&id=13675&format=png&color=000000" },
    { name: "LightRoom", img: "https://img.icons8.com/?size=100&id=19313&format=png&color=000000" },
    { name: "Canva", img: "https://img.icons8.com/?size=100&id=lAWjO4LexGga&format=png&color=000000" },
    { name: "WonderFilmora", img: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Wondershare_filmora_logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" },
    { name: "CapCut", img: "https://images.seeklogo.com/logo-png/43/1/capcut-logo-png_seeklogo-437025.png" },

  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/Work", icon: BriefcaseBusiness, label: "Work" },
  ],
  contact: {
    email: "vishnupriya12001@gmail.com",
    tel: "+919944539373",
    social: {
      Behance: {
        name: "behance",
        url: "#",
        icon: Icons.behance,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/janani-selvi-j-66a153349/",
        icon: Icons.linkedin,
        navbar: true,
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/jananiselvi",
        icon: Icons.GitHub,
        navbar: true,
      },

    },
  },

  work: [

    {
      company: "Corpswell",
      href: "https://Corpswell.com/",
      badges: [],
      location: "Chennai, TamilNadu",
      title: "UI/UX and Graphic Designer(Intership) ",
      logoUrl: "/CWLogo.jpg",
      start: "JUN 2026",
      end: "Present",
      description: "UI/UX Designer & Graphic Design Intern — Corpswell | 6 Months",

      description1: "",

      description2: "Worked on 4 UI/UX design projects, focusing on wireframing, prototyping, user-friendly interfaces, and responsive layouts. Collaborated with team members to understand project requirements and create intuitive, visually appealing digital experiences.",

      description3: "",

      description4: "Graphic Design & Video Editing",

      description5: "",

      description6: "Created 30+ posters and brand logos, along with engaging video content for digital platforms. Worked on visual branding, typography, color combinations, and creative layouts to maintain brand consistency. Also contributed to social media content creation and management, collaborating with the team to deliver creative assets on time.",

      description7: "",

      description8: "Frontend Development",

      description9: "",

      description10: "Developed responsive web interfaces using HTML, CSS, and JavaScript. Focused on creating clean layouts, implementing interactive elements, and ensuring a consistent user experience across different screen sizes. Collaborated with the team to translate design concepts into functional web pages.",
    },
  ],
  education: [
    {
      school: "Paavai Engineering College, Namakkal",
      href: "#",
      degree: "Bachelor of Engineering in Biomedical Engineering (B.E - Biomedical)",
      logoUrl: "",
      start: "2019",
      end: "2023",
    },
    {
      school: "Government Girl's Higher secondary school",
      href: "",
      degree: "Grade XII Higher Secondary Certificate (HSC)",
      logoUrl: "",
      start: "2018",
      end: "2019",
    },
    {
      school: "Government Girls' Higher secondary school",
      href: "",
      degree: "Grade X Secondary School Certificate (SSC)",
      logoUrl: "",
      start: "2016",
      end: "2017",
    },

  ],
  projects: [] as Array<{
    title: string;
    href: string;
    dates: string;
    active: boolean;
    description: string;
    technologies: readonly string[];
    links: readonly {
      type: string;
      href: string;
      icon: React.ReactNode;
    }[];
    image: string;
    video: string;
  }>,
  Codeprojects: [
    {
      title: "E-Commerce Website",
      href: "https://magicui.design",
      dates: "2026",
      active: true,
      description:
        "Designed and developed a responsive e-commerce website using HTML, CSS, and JavaScript. Created an intuitive user interface with product listings, product details, category filtering, search functionality, shopping cart management, and interactive buttons. Focused on providing a smooth shopping experience with a clean layout, responsive design, and user-friendly navigation across desktop, tablet, and mobile devices.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
      ],
      links: [
        {
          type: "Website",
          href: "https://6adcc1ea1ea2bc9f1baeb27b--courageous-tiramisu-12d136.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/vishnupriya12001-ai/ecommerce-application.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Project/Ecom.png",
      video: "",
    },
    {
      title: "Car Landing Page",
      href: "#",
      dates: "2026",
      active: true,
      description:
        "Designed and developed a modern, responsive car landing page using HTML, CSS, and JavaScript. Showcased vehicle specifications, featured models, pricing details, high-quality car images, and call-to-action buttons. Implemented interactive navigation, smooth scrolling, engaging visual elements, and responsive layouts to create an attractive and professional automotive website.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
      ],
      links: [
        {
          type: "Website",
          href: "https://landing-page-projectr.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/vishnupriya12001-ai/Car-landing-page.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Project/cardream.png",
      video: "",
    },
    {
      title: "Expense Tracker",
      href: "#",
      dates: "2026",
      active: true,
      description:
        "Built an interactive expense tracker application using HTML, CSS, and JavaScript to help users manage their personal finances. Implemented features to add, edit, and delete income and expense records, calculate the total balance, and display transaction history. Used JavaScript to dynamically update financial summaries and local storage to preserve transaction data between browser sessions.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
      ],
      links: [
        {
          type: "Website",
          href: "https://6adcbbebeeb43636d65928d3--bright-dango-27babd.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/vishnupriya12001-ai/Expense-Tracker-application.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Project/Expenses.png",
      video: "",
    },
    {
      title: "To-Do Application",
      href: "#",
      dates: "2026",
      active: true,
      description:
        " Developed a responsive to-do application using HTML, CSS, and JavaScript to help users organize and manage daily tasks efficiently. Implemented functionality to add, edit, delete, and mark tasks as completed. Included task status management, a clean user interface, and local storage to save tasks, allowing users to access their task lists even after refreshing the page.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
      ],
      links: [
        {
          type: "Website",
          href: "https://todo-management-project.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/vishnupriya12001-ai/Todo-management-application.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Project/Todo.png",
      video: "",
    },
    {
      title: "Weather Application",
      href: "#",
      dates: "2026",
      active: true,
      description:
        " Designed and developed a weather application using HTML, CSS, and JavaScript to display real-time weather information for different locations. Integrated a weather API to retrieve current weather conditions, temperature, humidity, wind speed, and weather forecasts. Implemented city-based search, dynamic weather icons, loading states, and responsive layouts to deliver a simple and user-friendly weather experience.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
      ],
      links: [
        {
          type: "Website",
          href: "https://6adcbce8575c89a26c6e14bf--animated-madeleine-74c277.netlify.app/#",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/vishnupriya12001-ai/weathering-application.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Project/weather.png",
      video: "",
    },
    {
      title: "Smart Calculator Application",
      href: "#",
      dates: "2026",
      active: true,
      description:
        " Developed a smart calculator application using HTML, CSS, and JavaScript to perform basic arithmetic calculations through an interactive interface. Implemented addition, subtraction, multiplication, division, percentage calculations, decimal operations, and clear and delete functions. Used JavaScript to handle user input, process calculations, manage errors, and update results dynamically while ensuring a responsive and easy-to-use design. ",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
      ],
      links: [
        {
          type: "Website",
          href: "https://calculator-application-project4.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/vishnupriya12001-ai/calculator-application.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Project/calculater.png",
      video: "",
    },
  ],

};