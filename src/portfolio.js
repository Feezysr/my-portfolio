/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/new/splashAnimation"; // Data science themed animation

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
  username: "Hafiz Salisu",
  title: "Hi, I'm Hafiz",
  subTitle: emoji(
    "A passionate Data Scientist & ML Engineer 🚀 with experience in building Machine Learning models, Data Analytics solutions, and AI applications using Python, TensorFlow, and other cutting-edge technologies."
  ),
  resumeLink: "Hafiz, Ds.pdf", // Path to your resume file
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Feezysr",
  linkedin: "https://www.linkedin.com/in/hafiz-salisu-64539920a/",
  gmail: "hafiz4salisu@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "DATA SCIENTIST & ML ENGINEER WITH EXPERTISE IN AI APPLICATIONS",
  skills: [
    emoji(
      "⚡ Develop and deploy machine learning models to solve complex business problems"
    ),
    emoji(
      "⚡ Create data visualization dashboards and interactive analytics tools using Power BI and Tableau"
    ),
    emoji(
      "⚡ Build AI applications with Computer Vision and Natural Language Processing capabilities"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "R",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "TensorFlow",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "Keras",
      fontAwesomeClassname: "fas fa-cube"
    },
    {
      skillName: "Streamlit",
      fontAwesomeClassname: "fas fa-window-maximize"
    },
    {
      skillName: "FastAPI",
      fontAwesomeClassname: "fas fa-bolt"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Machine Learning",
      fontAwesomeClassname: "fas fa-cogs"
    },
    {
      skillName: "Deep Learning",
      fontAwesomeClassname: "fas fa-network-wired"
    },
    {
      skillName: "Computer Vision",
      fontAwesomeClassname: "fas fa-eye"
    },
    {
      skillName: "NLP",
      fontAwesomeClassname: "fas fa-comments"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "Spark",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Google Cloud",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Azure ML",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "Data Visualization",
      fontAwesomeClassname: "fas fa-chart-bar"
    },
    {
      skillName: "Power BI",
      fontAwesomeClassname: "fas fa-chart-pie"
    },
    {
      skillName: "Tableau",
      fontAwesomeClassname: "fas fa-chart-line"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Crescent University Abeokuta",
      logo: require("./assets/images/crescent university.jpg"), // Local image path
      subHeader: "Bachelor of Business Administration",
      duration: "2020 - 2024",
      desc: "Studied Business Administration with a focus on data-driven decision making.",
      descBullets: [
        "Developed strong analytical and problem-solving skills",
        "Gained experience in business data analysis"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data Analysis & Visualization", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Machine Learning",
      progressPercentage: "85%"
    },
    {
      Stack: "Deep Learning & AI",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Scientist Intern",
      company: "GomyCode",
      companylogo: require("./assets/images/Gomycode.jpg"), // Local image path
      date: "November 2023 – Present",
      desc: "Working as a Data Scientist Intern, developing and implementing machine learning models and data analysis solutions.",
      descBullets: [
        "Developing and deploying machine learning models",
        "Creating data visualization dashboards",
        "Working on real-world data science projects"
      ]
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
  title: "Projects",
  subtitle: "SHOWCASE OF MY LATEST DATA SCIENCE AND MACHINE LEARNING WORK",
  projects: [
    {
      image: require("./assets/images/earthquake_new.png"), // Local image path
      projectName: "Nepal Earthquake Project",
      projectDesc:
        "Machine learning project focused on predicting building damage from earthquake data using decision trees and logistic regression",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/Feezysr/Nepal-earthquake-project"
        }
      ]
    },
    {
      image: require("./assets/images/chatbot.jpg"), // Local image path
      projectName: "Customer Service Chatbot",
      projectDesc:
        "A transformer-based chatbot API built using DistilBERT, trained to classify customer service intents",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/Feezysr/customer-service-chatbot"
        }
      ]
    },
    {
      image: require("./assets/images/speech.jpg"), // Local image path
      projectName: "Speech Recognition App",
      projectDesc:
        "A real-time speech recognition application with sentiment analysis capabilities",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/Feezysr/speech-recognition-app"
        }
      ]
    },
    {
      image: require("./assets/images/face.jpg"), // Local image path
      projectName: "Face Recognition App",
      projectDesc:
        "A facial recognition application using computer vision techniques",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/Feezysr/Face_Recognition_App"
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
    "Professional certifications and accomplishments in the field of Data Science and AI",

  achievementsCards: [
    {
      title: "Data Science Certification",
      subtitle:
        "Add your data science or machine learning certification details here.",
      image: "https://i.imgur.com/ZmdLZwI.webp", // Direct URL to certification logo
      imageAlt: "Certification Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "#"
        }
      ]
    },
    {
      title: "AI/ML Project Achievement",
      subtitle:
        "Highlight a significant machine learning project or achievement here.",
      image: "https://i.imgur.com/Ht7JnL6.webp", // Direct URL to project logo
      imageAlt: "Project Logo",
      footerLink: [
        {
          name: "View Project",
          url: "#"
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
    "Sharing insights and knowledge about Data Science, Machine Learning, and AI applications.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "#",
      title: "Add your blog title here",
      description: "Add your blog description here"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "Sharing knowledge and insights about data science and machine learning"
  ),

  talks: [
    {
      title: "Add your talk title here",
      subtitle: "Add talk venue and date here",
      slides_url: "#",
      event_url: "#"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "DISCUSSING DATA SCIENCE AND MACHINE LEARNING TOPICS",

  // Please Provide with Your Podcast embeded Link
  podcast: [""],
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
  subtitle: "Interested in working together? Feel free to reach out.",
  number: "",
  email_address: "hafiz4salisu@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

// Footer Section

const footerSection = {
  title: "Hafiz Salisu",
  subtitle: "Data Scientist & ML Engineer",
  display: true // Set false to hide this section, defaults to true
};

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
  resumeSection,
  footerSection
};
