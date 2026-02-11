/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title:
    "Rahil Parikh | Control Systems Software Engineer & Robotics Researcher",
  description:
    "Control systems software engineer with 3+ years building multithreaded C++/Qt control software for robotics and embedded systems. Expert in real-time control, SLAM, sensor fusion, and deep reinforcement learning for quadruped locomotion. Experienced with NVIDIA Jetson, Yocto Project, ROS, and autonomous vehicle navigation. Specialized in designing state machines that orchestrate complex mechatronic systems with real-time feedback.",
  og: {
    title: "Rahil Parikh - Robotics & Control Systems Engineer",
    type: "website",
    url: "https://rkparikh77.github.io",
  },
};

//Home Page
const greeting = {
  title: "Rahil Parikh",
  logo_name: "RahilParikh",
  nickname: "rkparikh77",
  subTitle:
    "Robotics researcher and control systems software engineer specializing in C++/Qt control software, real-time embedded systems, and autonomous robotics. Passionate about building intelligent systems that bridge software with physical hardware to create real-world impact.",
  resumeLink: "https://github.com/rkparikh77", // Update this when you host your resume
  portfolio_repository: "https://github.com/rkparikh77/rkparikh77.github.io",
  githubProfile: "https://github.com/rkparikh77",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/rkparikh77",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/rahilp7",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:parikhrahil7@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
];

const skills = {
  data: [
    {
      title: "Robotics & Control Systems",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Designing multithreaded C++/Qt control software for complex mechatronic systems with real-time feedback",
        "⚡ Implementing state machines, PID control, Kalman filtering, and sensor fusion for autonomous robotics",
        "⚡ Building SLAM-based navigation systems with path planning and collision avoidance",
      ],
      softwareSkills: [
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#00599C",
          },
        },
        {
          skillName: "Qt",
          fontAwesomeClassname: "simple-icons:qt",
          style: {
            color: "#41CD52",
          },
        },
        {
          skillName: "ROS",
          fontAwesomeClassname: "simple-icons:ros",
          style: {
            color: "#22314E",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "MATLAB",
          fontAwesomeClassname: "vscode-icons:file-type-matlab",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "OpenCV",
          fontAwesomeClassname: "simple-icons:opencv",
          style: {
            color: "#5C3EE8",
          },
        },
      ],
    },
    {
      title: "Machine Learning & AI",
      fileName: "FullStackImg",
      skills: [
        "⚡ Deep Reinforcement Learning for quadruped robot locomotion with sim-to-real transfer",
        "⚡ Computer vision pipelines for robot perception and object detection",
        "⚡ Quantum machine learning for classification and fraud detection applications",
      ],
      softwareSkills: [
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "TensorFlow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Scikit-Learn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: {
            color: "#F7931E",
          },
        },
        {
          skillName: "OpenCV",
          fontAwesomeClassname: "simple-icons:opencv",
          style: {
            color: "#5C3EE8",
          },
        },
        {
          skillName: "Jupyter",
          fontAwesomeClassname: "simple-icons:jupyter",
          style: {
            color: "#F37626",
          },
        },
      ],
    },
    {
      title: "Embedded Systems & Real-Time Control",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Custom embedded Linux distributions with Yocto Project for NVIDIA Jetson platforms",
        "⚡ High-speed data acquisition and visualization processing 100K+ data points in <75ms",
        "⚡ Serial protocols (UART, SPI, I2C), CAN bus integration, and device driver development",
      ],
      softwareSkills: [
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            color: "#FCC624",
          },
        },
        {
          skillName: "NVIDIA",
          fontAwesomeClassname: "simple-icons:nvidia",
          style: {
            color: "#76B900",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F05032",
          },
        },
        {
          skillName: "CUDA",
          fontAwesomeClassname: "simple-icons:nvidia",
          style: {
            color: "#76B900",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "DesignImg",
      skills: [
        "⚡ Building responsive web applications with React, TypeScript, and modern frameworks",
        "⚡ Backend development with Node.js, Express, and RESTful API design",
        "⚡ Database design and optimization with PostgreSQL, MySQL, and MongoDB",
      ],
      softwareSkills: [
        {
          skillName: "React",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            color: "#3178C6",
          },
        },
        {
          skillName: "Node.js",
          fontAwesomeClassname: "simple-icons:nodedotjs",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "Worcester Polytechnic Institute",
      subtitle: "B.S. in Computer Science and Robotics Engineering",
      logo_path: "wpi_logo.png",
      alt_name: "WPI",
      duration: "August 2019 - May 2023",
      descriptions: [
        "⚡ Double major in Computer Science and Robotics Engineering with focus on autonomous systems and control theory",
        "⚡ Relevant Coursework: Robot Dynamics, Feedback Control Systems, Embedded Systems, Machine Learning, Computer Vision, Linear Systems Theory, Algorithm Design, Mechatronics",
        "⚡ Dean's List | Presidential Scholarship | SWEET Fellowship | Upsilon Pi Epsilon Honor Society | Rho Beta Epsilon Robotics Society",
      ],
      website_link: "https://www.wpi.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "IBM Machine Learning with Python",
      subtitle: "Professional Certificate",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/professional-cert/",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Google Cloud Generative AI Leader",
      subtitle: "Certificate",
      logo_path: "google_logo.png",
      certificate_link: "https://www.cloudskillsboost.google/",
      alt_name: "Google Cloud",
      color_code: "#4285F499",
    },
    {
      title: "JPMorgan Chase Software Engineering",
      subtitle: "Forage Job Simulation - January 2026",
      logo_path: "jpmorgan_logo.png",
      certificate_link: "https://www.theforage.com/",
      alt_name: "JPMorgan Chase",
      color_code: "#0070BA99",
    },
    {
      title: "Walmart Advanced Software Engineering",
      subtitle: "Forage Program - January 2026",
      logo_path: "walmart_logo.png",
      certificate_link: "https://www.theforage.com/",
      alt_name: "Walmart",
      color_code: "#0071CE99",
    },
    {
      title: "Electronic Arts Software Engineering",
      subtitle: "Forage Program - January 2026",
      logo_path: "ea_logo.png",
      certificate_link: "https://www.theforage.com/",
      alt_name: "Electronic Arts",
      color_code: "#00000099",
    },
    {
      title: "Microsoft AI & ML Engineering",
      subtitle: "Professional Certificate (Expected: April 2026)",
      logo_path: "microsoft_logo.png",
      certificate_link: "https://www.coursera.org/",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "UPenn AI for Business Specialization",
      subtitle: "Wharton School (Expected: March 2026)",
      logo_path: "upenn_logo.png",
      certificate_link: "https://www.coursera.org/",
      alt_name: "University of Pennsylvania",
      color_code: "#990000",
    },
    {
      title: "IBM AI Developer Professional Certificate",
      subtitle: "Expected: May 2026",
      logo_path: "ibm_logo.png",
      certificate_link: "https://www.coursera.org/",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Professional Work & Research Experience",
  description:
    "Control systems software engineer with 3+ years building real-time robotics systems. Specialized in C++/Qt development, embedded Linux, and autonomous robotics. Led multidisciplinary teams in developing bipedal humanoid robots and autonomous navigation systems with a focus on real-world deployment and measurable performance improvements.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      work: true,
      experiences: [
        {
          title: "Control Systems Software Engineer",
          company: "Bridge12 Technologies",
          company_url: "https://www.bridge12.com/",
          logo_path: "bridge12_logo.png",
          duration: "September 2023 - Present",
          location: "Natick, MA",
          description:
            "Designing and implementing multithreaded C++/Qt control software with multi-device finite state machine architecture orchestrating 8+ physical subsystems (motors, thermal controllers, RF sources, sensors). Developed high-speed data acquisition pipelines processing 100,000+ data points in <75ms for real-time feedback display. Built custom embedded Linux distributions for NVIDIA Jetson using Yocto Project, optimizing boot sequences for deterministic real-time performance. Reduced network latency by 70% (5.0s → 1.5s) through ZeroMQ-based asynchronous communication with Kalman filtering. Led cross-functional deployment at 5+ customer research facilities.",
          color: "#0C4DA2",
        },
        {
          title: "Software Engineering Intern",
          company: "Ekotrope",
          company_url: "https://www.ekotrope.com/",
          logo_path: "ekotrope_logo.png",
          duration: "May 2022 - October 2022",
          location: "Boston, MA",
          description:
            "Developed physics-based energy modeling software applying thermodynamic first principles to building HVAC systems, improving simulation accuracy and transaction speeds by 20% through optimized database design (MariaDB/MySQL). Designed and executed comprehensive JUnit test suites validating computational models against real-world thermal behavior, reducing defects by 18% and ensuring reliability for production deployment.",
          color: "#4CAF50",
        },
      ],
    },
    {
      title: "Research & Academic Projects",
      experiences: [
        {
          title: "Deep Reinforcement Learning for Quadruped Locomotion",
          company: "Personal Research Project",
          company_url: "https://github.com/rkparikh77/DL-quadruped-locomotion",
          logo_path: "projects_image.svg",
          duration: "January 2026 - Present",
          location: "Remote",
          description:
            "Building DRL system to train quadruped robot for complex locomotion using PPO algorithm with sim-to-real transfer. Implementing modular state machine architecture with configurable reward systems, terrain curriculum, and domain randomization achieving >85% success rate across varied terrain conditions. Engineering high-performance simulation environment in Isaac Lab running >1000 FPS with 4096 parallel environments. Comprehensive test suite with 340+ tests achieving 80%+ code coverage.",
          color: "#76B900",
        },
        {
          title: "Bipedal Humanoid Robot",
          company: "WPI Major Qualifying Project",
          company_url: "https://www.wpi.edu/",
          logo_path: "wpi_logo.png",
          duration: "August 2022 - August 2024",
          location: "Worcester, MA",
          description:
            "Led 12-member cross-functional team (software, mechanical, electrical) developing bipedal humanoid robot capable of dynamic walking and balancing. Designed and implemented state machines for gait control with real-time sensor feedback achieving 95% balance maintenance and <50ms reactive response times. Integrated IMU, force sensors, and motor encoders into unified control architecture. Secured $15,000 prototype funding through weekly technical presentations to faculty advisory board.",
          color: "#AC2B37",
        },
        {
          title: "Autonomous Vehicle Navigation System",
          company: "Academic Project - WPI",
          company_url: "https://www.wpi.edu/",
          logo_path: "projects_image.svg",
          duration: "October 2021 - December 2021",
          location: "Worcester, MA",
          description:
            "Developed complete autonomy stack with SLAM (GMapping for occupancy grid mapping), localization (AMCL with particle filters), and path planning (A*, move_base) achieving 98% localization accuracy in indoor navigation. Implemented Kalman filtering for multi-sensor fusion of LiDAR and odometry data, enabling collision-free autonomous navigation through complex miniature test environment as lead software developer.",
          color: "#FF6F00",
        },
        {
          title: "Quantum Machine Learning for Fraud Detection",
          company: "Personal Research Project",
          company_url: "https://github.com/rkparikh77/quantum-fraud-detection",
          logo_path: "projects_image.svg",
          duration: "January 2026",
          location: "Remote",
          description:
            "Implemented Variational Quantum Classifier (VQC) using quantum kernel methods for binary classification on imbalanced financial transaction data. Developed hybrid quantum-classical pipeline with quantum feature mapping, circuit optimization, and classical post-processing achieving competitive accuracy with 10x dimensionality reduction in high-dimensional feature spaces using Qiskit and TensorFlow.",
          color: "#6929C4",
        },
        {
          title: "Robotic Arm Motion Planning",
          company: "Academic Project - WPI",
          company_url: "https://www.wpi.edu/",
          logo_path: "projects_image.svg",
          duration: "August 2021 - October 2021",
          location: "Worcester, MA",
          description:
            "Developed computer vision pipeline and trajectory generation system using forward and inverse kinematics for 6-DOF manipulator, achieving 100% accuracy in automated color-sorting tasks through object detection and pose estimation using OpenCV and MATLAB.",
          color: "#E8710A",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects span robotics, machine learning, and full-stack development. I specialize in building intelligent systems that integrate real-time control, computer vision, and deep learning to solve real-world problems. Each project emphasizes production-quality code, comprehensive testing, and thorough documentation.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Blog & Technical Writing",
  description:
    "Coming soon: Technical articles about robotics, control systems, and machine learning.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I'm available for opportunities in robotics, control systems, and autonomous vehicles. Feel free to reach out for collaborations, consulting, or technical discussions. I typically respond within 24 hours.",
  },
  blogSection: {
    title: "Blog",
    subtitle:
      "I'm building an automated workflow with n8n to create and publish technical articles about robotics and machine learning. Stay tuned!",
    link: "https://github.com/rkparikh77",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Location",
    subtitle: "Framingham, MA",
    locality: "Framingham",
    country: "USA",
    region: "Massachusetts",
    postalCode: "01701",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/",
  },
  phoneSection: {
    title: "Phone",
    subtitle: "+1 774-243-4073",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
