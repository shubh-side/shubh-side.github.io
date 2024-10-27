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
  username: "Shubham Chaudhary",
  title: "Hi all, I'm Shubham",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with .NET / Java spring boot/ JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1t4gMpDdLDKP-c0UsHGYZGvjUPcySKj_z/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/shubh-side",
  linkedin: "https://www.linkedin.com/in/shubh-amchaudhary/",
  gmail: "chaudharyshubham1000@gmail.com",
  gitlab: "https://leetcode.com/shubh_side",
  leetcode: "https://leetcode.com/shubh_side",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};
// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Design and develop full-stack microservice web applications"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean/ Azure"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"

    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
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
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
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
      schoolName: "Delhi Technological University",
      logo: require("./assets/images/dtu_logo.jpeg"),
      subHeader: "Bachelor of technology in Information Technology",
      duration: "August 2017 - May 2021",
      desc: "Took courses about Software Engineering, Web Security, Operating Systems, ...  published 2 papers.",
      descBullets: [
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Dev Engineer II",
      company: "Yahoo",
      companylogo: require("./assets/images/yahoo.png"),
      date: "October 2024 - Present",
      descBullets: [
        "Working on Governance, Risk and Compliance",
        "Collaborated with cross-functional teams to understand business requirements and translated them into technical solutions",
      ]
    },
    {
      role: "Software Development Engineer - 2",
      company: "Mystifly",
      companylogo: require("./assets/images/mystifly.png"),
      date: "April 2024 – October 2024",
      descBullets: [
        "Developed and launched a new seat selection feature during the booking process, improving booking flexibility and increasing upsell opportunities by 15%",
        "Spearheaded the implementation of a nearby airports feature in the airline pre-booking system, enhancing user experience and driving a 20% increase in customer engagement by offering travelers more convenient airport options.",
        "Optimized database queries, reducing response time by 30% and enhancing overall system performance."
      ]
    },
    {
      role: "Software Development Engineer - I",
      company: "Exxat Systems",
      companylogo: require("./assets/images/exxat_logo.png"),
      date: "June 2021 – March 2024",
      descBullets: [
        "Led the design and development of a full-stack microservice web application utility tool using Java Springboot REST APIs, AngularJS, NoSQL integrated with OAuth, RBAC simplified as part of the framework team, which increased performance efficiency for backend support team by 50%.",
        "Led the development of Event Scheduler Service, which is used across all products of Exxat for Sending/Scheduling/Cancelling/Updating more than 10,000 email events and reminders per day using event handlers, event command bus service, NoSQL, SendGrid and Hangifre.",
        "Enriched experience working with docker and Kubernetes, DevOps /Agile operations process and tools area (Code review, unit test automation, Build Release automation Environment) including various tools."
      ]
    },
    {
      role: "SDE - Inern",
      company: "Exxat Systems",
      companylogo: require("./assets/images/exxat_logo.png"),
      date: "Jan 2021 – May 2021",
      descBullets: [
        "Worked in a SCRUM team environment for SaaS offerings.",
        "Led the design and development of Exxat’s orphan Sites and Student/Preceptors integration application which helped increased the operation of integration by 80%.",
        "Developed and tested REST APIs in Java spring boot for managing user data (CRUD operations) and bulk email sending.",
        "Contributed 30K+ lines of code in existing code base via git."
      ]
    },
    {
      role: "Computer Science Q&A Expert",
      company: "Chegg",
      companylogo: require("./assets/images/chegg.png"),
      date: "Jan 2020 – Dec 2020",
      descBullets: [
        "Solved over 500 Computer science questions on the platform having variations in Java, Python, C++, C, DBMS, OOP, OS, ML to help students worldwide resolve their doubts following quality parameters defined by Chegg while maintaining academic integrity"
      ]
    },
    {
      role: "Product Intern",
      company: "Delhi Metro Rail Corporation",
      companylogo: require("./assets/images/Delhi_Metro_logo.svg.png"),
      date: "June 2019 – July 2019",
      descBullets: [
        "Contributed towards improving DMRC navigation mapping system.",
        "Collaborated with a team at weekly meetings and actively contributed new ideas on improving current technology.",
        "Organised brainstorming sessions to improve the understanding of latest technology and ways to implement them."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),

  achievementsCards: [
    {
      title: "Machine Learning",
      image: require("./assets/images/stanford.png"),
      imageAlt: "machine-learning",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/verify/3KC7AJQUGHEX"
        }
      ]
    },
    {
      title: "AI for Everyone",
      image: require("./assets/images/ai.png"),
      imageAlt: "ai-for-everyone",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/verify/7SC3K8TMNUP2"
        }
      ]
    },
    {
      title: "Python Data Structure",
      image: require("./assets/images/michigan.png"),
      imageAlt: "python-data-structure",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/verify/2DLDT7937H5Z"
        }
      ]
    },
    {
      title: "Cryptography",
      image: require("./assets/images/stanford.png"),
      imageAlt: "cryptography",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/verify/GRSGVN5QEN29"
        }
      ]
    },
    {
      title: "Game Theory",
      image: require("./assets/images/ubc.png"),
      imageAlt: "game-theory",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/verify/MTWP7FPA6XAG"
        }
      ]
    },
    {
      title: "Front End Web UI Frameworks and Tools: Bootstrap",
      image: require("./assets/images/frontend.png"),
      imageAlt: "game-theory",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/verify/BR8XVJNXX3YH"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
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
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9711255938",
  email_address: "chaudharyshubham1000@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
