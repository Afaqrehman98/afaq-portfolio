/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Afaq Ur Rehman Khan",
  title: "Hi all, I'm Afaq",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with Java / Kotlin / Python / JavaScript and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Afaqrehman98",
  linkedin: "https://www.linkedin.com/in/afaqrehman98/",
  gmail: "afaqrehman98@gmail.com",
  medium: "https://medium.com/@afaqrehman98",
  stackoverflow: "https://stackoverflow.com/users/13119016/afaq-khan",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle:
    "VERSATILE SOFTWARE ENGINEER WITH EXPERTISE IN ANDROID, BACKEND, AND CLOUD SOLUTIONS",
  skills: [
    emoji(
      "⚡ Develop high-performance native Android applications using Kotlin and Java with MVVM, Coroutines, and Jetpack components"
    ),
    emoji(
      "⚡ Design and implement scalable, maintainable backend systems with Spring Boot, FastAPI, and RESTful APIs"
    ),
    emoji(
      "⚡ Integrate cloud services like AWS (Lambda, S3, Glue), Firebase, and CI/CD pipelines to optimize deployment and scalability"
    ),
    emoji(
      "⚡ Leverage architecture patterns like MVVM, MVP, and MVC to improve maintainability and code reusability"
    ),
    emoji(
      "⚡ Implement unit testing, automated builds, and version control for efficient, high-quality software development"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "kotlin",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "spring boot",
      fontAwesomeClassname: "fas fa-leaf" // Use Simple Icons for Spring Boot
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "no-sql-database",
      fontAwesomeClassname: "fas fa-project-diagram"
    },
    {
      skillName: "CI/CD",
      fontAwesomeClassname: "fas fa-code-branch"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Testing",
      fontAwesomeClassname: "fas fa-vial"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },

    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Brandenburg University of Technology Cottbus-Senftenberg",
      logo: require("./assets/images/btu-logo.png"),
      subHeader: "Master of Science in Artificial Intelligence",
      duration: "October 2022 - In Progress",
      desc: "Relevant Coursework in Master's Degree - Artificial Intelligence (AI)",
      descBullets: [
        "Foundations of Data Mining",
        "Information Retrieval",
        "Deep Learning"
      ]
    },
    {
      schoolName: "IQRA University",
      logo: require("./assets/images/iulogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "August 2016 - May 2020",
      desc: "Relevant Coursework in Bachelor's Degree - Computer Science (CS)",
      descBullets: [
        "Mobile Application Development",
        "Object-Oriented Programming",
        "Data Warehouse",
        "Web Programming Languages",
        "Data Structures & Algorithms"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, // Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Android Development", // Native Android apps using Kotlin & Java, MVVM, Jetpack components, etc.
      progressPercentage: "95%"
    },
    {
      Stack: "Backend Development", // Experience with Spring Boot, FastAPI, RESTful APIs, and microservices
      progressPercentage: "90%"
    },
    {
      Stack: "Cloud & DevOps", // AWS (Lambda, S3, Glue), Docker, Kubernetes, CI/CD pipelines
      progressPercentage: "85%"
    },
    {
      Stack: "Database Management", // Experience with NoSQL (MongoDB, Redis) and SQL (PostgreSQL, MySQL)
      progressPercentage: "80%"
    },
    {
      Stack: "Programming", // Solid understanding of Java, Python, Kotlin, and TypeScript
      progressPercentage: "90%"
    },
    {
      Stack: "Version Control & Collaboration", // Proficient in Git, GitHub, GitLab, Bitbucket, and Jira
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section
};

// Work experience section

const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer (Part-Time)",
      company: "PACK",
      companylogo: require("./assets/images/packlogo.png"), // Update with your image path
      date: "October 2024 – Present",
      desc: "Developing scalable, maintainable applications with a focus on performance, security, and best practices.",
      descBullets: [
        "Designing and optimizing architecture and database solutions with thorough documentation",
        "Conducting code reviews to ensure quality and consistency across the development team"
      ]
    },
    {
      role: "Student Assistant (Research)",
      company: "BTU Cottbus-Senftenberg",
      companylogo: require("./assets/images/btu-logo.png"), // Update with BTU's logo path
      date: "April 2023 – Present",
      desc: "Assisting with research and development tasks related to Artificial Intelligence and Computer Science."
    },
    {
      role: "Software Engineer (Part-Time)",
      company: "Fraunhofer FOKUS",
      companylogo: require("./assets/images/fraunhoferlogo.png"), // Update with your image path
      date: "February 2023 – July 2024",
      desc: "Worked on Android app development and CMCD data transmission using ExoPlayer.",
      descBullets: [
        "Optimized HTTP communication with CMCD integration for better video quality",
        "Reduced app APK size by 40% and enhanced BLE data collection with Reactive Programming"
      ]
    },
    {
      role: "Applications Engineer",
      company: "Next Generation Innovations",
      companylogo: require("./assets/images/ngilogo.png"), // Update with NGI's logo path
      date: "November 2020 – September 2022",
      desc: "Led Android development for real-time video/audio calls and chat integration.",
      descBullets: [
        "Implemented WebRTC-based video and audio calls using Dagger Hilt and Coroutines",
        "Enhanced product UX with real-time tracking using Pusher SDK and Twilio integration",
        "Improved code security and architecture using MVVM and Dependency Injection"
      ]
    },
    {
      role: "UI/UX Intern",
      company: "Iqra University",
      companylogo: require("./assets/images/iulogo.png"), // Update with Iqra's logo path
      date: "January 2020 – August 2020",
      desc: "Worked on designing user-friendly interfaces for mobile and web applications."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/lumi-logo.png"),
      projectName: "Lumi by Nextcare",
      projectDesc: "Tele-Health Consultation",
      footerLink: [
        {
          name: "Visit PlayStore",
          url: "https://play.google.com/store/apps/details?id=com.nextcare.app&hl=en"
        }
      ]
    },
    {
      image: require("./assets/images/zofeur-logo.png"),
      projectName: "Zofeur",
      projectDesc: "Ride Hailing Application",
      footerLink: [
        {
          name: "Visit PlayStore",
          url: "https://play.google.com/store/apps/details?id=production.zofeur.customer&hl=en"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+49 176 46548356",
  email_address: "afaqrehman98@gmail.com"
};
// Twitter Section

const twitterDetails = {
  userName: "afaqkhan_98", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
