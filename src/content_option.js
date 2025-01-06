import img1 from './assets/images/profile.jpg'
import img2 from './assets/images/dive.jpg'
import img3 from './assets/images/dive2.jpg'
import img4 from './assets/images/snow.JPG'
import img5 from './assets/images/taipeidaytrip.png'
import img6 from './assets/images/guessanddraw.png'
import img7 from './assets/images/GemsCrush.png'
import img8 from './assets/images/personalwebsite.PNG'

const logotext = "CINDY";
const meta = {
    title: "Cindy Lam",
    description: "I’m Cindy Lam software engineer,currently working in Hong Kong",
};

const introdata = {
    title: "Cindy Lam",
    animated: {
        first: "Backend Development",
        second: "Large-scale Distributed System",
        third: "Web Technology",
        fourth: "Cloud Service",
    },
    description: "I'm a Software Engineer",
    your_img_url: img1,
};

const dataabout = {
    title: "About Myself",
    aboutme: "With a Bachelor's in Information Engineering from City University of Hong Kong and over 3 years of experience in web and software development, I bring a robust foundation in web application design, development, and maintenance.",
};

const worktimeline = [
    {
        company: "Nexify Limited",
        position: "Part Time Programmer",
        date: "2022.12 - 2023.11",
        language: "Java | JavaScript | HTML | CSS | IBM BAW | IBM FileNet | Spring Boot | Bootstrap | Dojo Toolkit | PostgreSQL | IBM DB2",
        description: [
            {
                des:"Led system migrations and maintained document management systems."
            },
            {
                des:"Design, develop and test Application Plugin"
            }
        ]
    },
    {
        company: "Wehelp",
        position: "Web Traninee",
        date: "2022.09 - 2023.03",
        language: "Python | JavaScript | HTML | CSS | Amazon EC2 | Linux | Socket.IO | Node.js | Express.js | Flask | Bootstrap | SQLAlchemy | JWT | AWS RDS | AWS ElastiCache for Redis | MySQL",
        description: [
            {
                des:"Built e-commerce websites and multiplayer online games using AWS and backend technologies like Python Flask and Node.js."
            },
            {
                des:"Developed RESTful APIs and integrated secure payment systems for tourism e-commerce platforms."
            },
            {
                des:"Created innovative gaming solutions within six weeks with minimal supervision."
            }
    ]},
    {
        company: "Nexify Limited",
        position: "Programmer",
        date: "2020.04 - 2022.06",
        language: "Java | JavaScript | HTML | CSS | IBM BAW | IBM FileNet | Spring Boot | Bootstrap | Dojo Toolkit | PostgreSQL | IBM DB2",
        description: [
            {
                des:"Developed and enhanced web-based solutions, including an Incident Reporting System and Common Spatial Data Infrastructure Portal to improve workflow efficiency."
            },
            {
                des:"Designed and tested RESTful APIs, focusing on user-centric solutions for business needs."
            },
            {
                des:"Provided technical support for troubleshooting hardware/software issues."
            }
        ]
    }
];

const skills = [{
        name: "JAVA",
        value: 90,
    },
    {
        name: "Python",
        value: 80,
    },
    {
        name: "JavaScript (ES6)",
        value: 80,
    },
    {
        name: "HTML",
        value: 70,
    },
    {
        name: "CSS",
        value: 70,
    },
    {
        name: "Oracle SQL",
        value: 75,
    },
    {
        name: "Swift",
        value: 65,
    },    
    {
        name: "KIVY",
        value: 60,
    },    
    {
        name: "Tkinter",
        value: 60,
    }, 
    {
        name: "React",
        value: 45,
    },
    {
        name: "PHP",
        value: 30,
    }, 
    {
        name: "C++",
        value: 50,
    }, 
];

const certifications = [{
        title: "Japan Snowboard Association (JSBA) LEVEL 3",
        date: "2024.03",
        location: "JAPAN",
    },
    {
        title: "Japanese-Language Proficiency Test (JLPT) N2",
        date: "2022.12",
        location: "HONGKONG",
    },
    {
        title: "Japanese-Language Proficiency Test (JLPT) N3",
        date: "2022.07",
        location: "HONGKONG",
    },
    {
        title: "IBM FileNet Content Manager - Tech Jam",
        date: "2021.09",
        location: "HONGKONG",
    },    {
        title: "IBM Business Automation Workflow - Tech Jam",
        date: "2021.09",
        location: "HONGKONG",
    },
    
    {
        title: "PADI® Advanced Open Water Diver",
        date: "2020.11",
        location: "HONGKONG",
    },
    {
        title: "PADI® Open Water Diver",
        date: "2018.08",
        location: "SABAH",
    },
];

const dataproject = [{
        title:"Taipei-Day-Trip",
        img: img5,
        description: "Taipei-day-trip is an E-Commerce website that provides information on tourist attractions in Taipei.",
        demosource:"https://yanl517.pythonanywhere.com/",
        stack:"[Python, Flask, MySQL, Amazon EC2, SQLAlchemy, JWT]",
        isAvailable: false,
        link: "https://github.com/yan517/taipei-day-trip?tab=readme-ov-file",
    },
    {
        title:"Guess-And-Draw",
        img: img6,
        description: "Guess and Draw is an exciting online multiplayer game that combines the fun of drawing with the thrill of guessing.",
        demosource:"",
        stack:"[Node.js, Express.js, Socket.IO,Redis,Amazon EC2, Amazon RDS, Amazon Elastic Load Balancer,Amazon ElastiCache for Redis,Nginx]",
        isAvailable: false,
        link: "https://github.com/yan517/guess-and-draw",
    },
    {
        title:"GemsCrush",
        img: img7,
        description: "Gems Crush is a simplified version of the classic tile-matching puzzle video game, Bejeweled.",
        demosource:"",
        stack:"[Java]",
        isAvailable: false,
        link: "https://github.com/yan517/GemsCrush",
    },
    {
        title:"Personal Website",
        img: img8,
        description: "Stay tuned for my latest updates on career and personal projects",
        demosource:"https://yan517.github.io/personal_website",
        stack:"[React,JavaScript]",
        isAvailable: false,
        link: "https://github.com/yan517/personal_website",
    },
];

const contactConfig = {
    YOUR_EMAIL: "name@domain.com",
    YOUR_FONE: "(555)123-4567",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra. ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/yan517",
    linkedin: "https://www.linkedin.com/in/yan-l-a323501b0/",
};

const images = [
    {
      imgURL: img1,
      imgAlt: "img-1"
    },
    {
      imgURL:img3,
      imgAlt: "img-2"
    },
    {
      imgURL:img4,
      imgAlt: "img-3"
    }
  ];

  const education = [{
    school: "City University of Hong Kong",
    degree: "Information Engineering | Bachelor of Engineering",
    date: "2016.09 - 2020.02",
    description: [
        {
            des:"Member of EE Cyber Security Interest Group"
        },
        {
            des:"Internship: The University of Tennessee, USA"
        },
        {
            des:"Served as Student Mentor (1 year)"
        },
        {
            des:"Worked as Audit IT Assistant in the Office of Internal Audit (~ 2 years)"
        },
    ],
    }];

export {
    meta,
    dataabout,
    dataproject,
    worktimeline,
    skills,
    certifications,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
    images,
    education,
};