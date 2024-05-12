import { useState } from "react";
import Card from "../components/Card";
import "../CSS/scrollbar.css";

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

const projectData: Project[] = [
  {
    title: "Telegram Bot",
    description:
      "I built a full-stack application consisting of a Telegram weather bot and a React.js admin panel. This project demonstrates my proficiency in both backend and frontend development using the MERN stack (MongoDB, Express.js, React.js, Node.js) with TypeScript.Integrated with a weather API ( OpenWeather )",
    tags: ["ReactJS", "NestJS", "MySQL", "NodeJS", "Typescript", "TailwindCSS"],
    image: "telegrambot.png",
    link: "https://github.com/Nikhil-Sadhwani/TelegramBot_NestJS",
  },
  {
    title: "Shop Vibe",
    description:
      "ShopVibe is a full-fledged e-commerce website I built using the MySQL and PHP on the backend and React.js on the frontend. This project showcases my ability to develop a comprehensive e-commerce solution with functionalities like product search, category browsing, and a shopping cart implemented using Redux for state management. Facilitating user-specific roles including User, Seller, and Admin. Implemented different levels of permissions and access for each role.",
    tags: ["ReactJS", "HTML", "CSS", "Bootstrap", "PHP", "MySQL"],
    image: "shopvibe.png",
    link: "https://github.com/Nikhil-Sadhwani/ShopVibe",
  },
  {
    title: "Green Bus",
    description:
      "GreenBus is a web application prototype I designed to streamline city bus tracking and management. This project demonstrates my ability to build user-centric applications that address real-world problems. Led the back-end development and contributed to front-end design.",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    image: "greenbus.png",
    link: "https://github.com/Nikhil-Sadhwani/GreenBus",
  },
  {
    title: "Cyber-Shield",
    description:
      "Cyber-Shield is a collaborative project I participated in during a hackathon. This website aims to empower users with knowledge about cybercrime and self-protection strategies. Developed the Hate Speech Detection (HSD) module to filter out content violating Internet policies. Implemented a user-centric Reporting section for cyber incidents.",
    tags: ["ReactJS", "ExpressJS", "TailwindCSS", "NodeJS", "MongoDB"],
    image: "cybershield.png",
    link: "https://github.com/Nikhil-Sadhwani/Cyber-Shield",
  },
  {
    title: "ToDoList",
    description:
      "This mobile application allows users to manage their daily tasks and schedules, enhancing productivity and reducing time wasted on task planning. I built this app using React Native for the user interface, Express.js for the backend API, and MongoDB for the database.",
    tags: ["React Native", "ExpressJS", "NodeJS", "MongoDB"],
    image: "todolist.png",
    link: "https://github.com/Nikhil-Sadhwani/ToDoList",
  },
];

export default function Home() {
  const [open, setOpen] = useState<boolean>(true);

  const [activeFileIndex, setActiveFileIndex] = useState(0);
  const [content, setContent] = useState("Home.tsx");

  const tabs = [
    {
      label: "Document",
      path: "M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2",
      link: "Home.tsx",
    },
    {
      label: "Code",
      path: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
      link: "Projects.js",
    },
    {
      label: "Edit",
      path: "M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z",
      link: "skill.json",
    },
    // {
    //   label: "Github",
    //   path: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22",
    //   link: "",
    // },
    {
      label: "Contact",
      path: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
      link: "contact.css",
    },
  ];

  const files = [
    { label: "Home.tsx", logo: "react_icon.svg" },
    { label: "Projects.js", logo: "js_icon.svg" },
    { label: "skill.json", logo: "json_icon.svg" },
    { label: "contact.css", logo: "css_icon.svg" },
    { label: "about.html", logo: "html_icon.svg" },
  ];

  const numbers = Array.from({ length: 28 }, (_, i) => i + 1);

  return (
    <div className="flex min-h-[96vh] bg-zinc-900 text-white font-sans">
      <div className="w-[60px] bg-zinc-800 flex flex-col justify-between">
        <div>
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`p-3 h-12 content-center hover:bg-zinc-950 ${
                index === activeFileIndex ? "border-l-2 border-blue-500" : ""
              }`}
              onClick={() => {
                setContent(tab.link);
                setActiveFileIndex(index);
              }}
            >
              <svg
                className="h-10 w-[80%] text-zinc-400 hover:text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d={`${tab.path}`}
                />
              </svg>
            </div>
          ))}
        </div>
        <div className="m-0">
          <div className="p-3 h-12 content-center">
            <svg
              className={`h-10 w-[80%]  hover:text-white  ${
                activeFileIndex === 4 ? "text-white" : "text-zinc-400"
              }`}
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => {
                setContent("about.html");
                setActiveFileIndex(4);
              }}
            >
              <path
                d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.271 18.3457C4.271 18.3457 6.50002 15.5 12 15.5C17.5 15.5 19.7291 18.3457 19.7291 18.3457"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="p-3 h-12 content-center">
            <svg
              className="h-10 w-[80%] text-zinc-400 hover:text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <circle cx="12" cy="12" r="3" />{" "}
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="w-[195px] hidden lg:inline">
        <h1 className="text-left p-1">EXPLORER</h1>
        <div className="bg-zinc-800 mt-1">
          <button
            onClick={() => {
              setOpen(!open);
            }}
            className="flex items-center w-full focus:outline-none"
          >
            {!open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                fill="white"
                className="w-[10px] mx-1"
              >
                <path d="M3.4 81.7c-7.9 15.8-1.5 35 14.3 42.9L280.5 256 17.7 387.4C1.9 395.3-4.5 414.5 3.4 430.3s27.1 22.2 42.9 14.3l320-160c10.8-5.4 17.7-16.5 17.7-28.6s-6.8-23.2-17.7-28.6l-320-160c-15.8-7.9-35-1.5-42.9 14.3z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                fill="white"
                className="w-[10px] h-[9px] mx-1"
              >
                <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
              </svg>
            )}
            <span className="text-[13px] font-bold">PORTFOLIO</span>
          </button>
        </div>
        {open && (
          <div className="flex flex-col">
            {files.map((file, index) => (
              <a
                key={index}
                href="/"
                className={`flex items-center  pl-4 py-1  hover:bg-zinc-600 ${
                  index === activeFileIndex ? "bg-zinc-600" : ""
                }`}
                onClick={() => {
                  setContent(file.label);
                  setActiveFileIndex(index);
                }}
              >
                <img src={file.logo} alt="File Icon" className="w-[10%]" />
                <span className="ml-2">{file.label}</span>
              </a>
            ))}
          </div>
        )}
      </div>

      <div className="flex-1 bg-zinc-800 overflow-x-hidden ">
        <div className="overflow-x-auto w-screen">
          <div className="flex items-center bg-zinc-900 w-[135%] mr-[63px] sm:w-auto">
            {files.map((file, index) => (
              <button
                key={index}
                className={`flex items-center justify-center w-[175px] h-[40px] p-1 hover:bg-zinc-700  ${
                  index === activeFileIndex
                    ? "text-white bg-zinc-500 border-b-2 border-white "
                    : "text-zinc-500"
                }`}
                onClick={() => {
                  setContent(file.label);
                  setActiveFileIndex(index);
                }}
              >
                <img
                  src={file.logo}
                  alt="File Icon"
                  className="w-[14%] hidden sm:block"
                />
                <span className="ml-2">{file.label}</span>
              </button>
            ))}
          </div>
        </div>

        {content === "Home.tsx" ? (
          <div className="overflow-y-auto ">
            <div className="flex flex-col justify-center relative mt-[100px]">
              <div
                className="absolute z-[1] text-zinc-600 left-[20px] opacity-[0.25] text-[1.5rem] md:text-[2.5rem] lg:text-[5rem]"
                style={{ lineHeight: "1.1" }}
              >
                <h1 className="block text-[2em] font-bold text-left">
                  I BUILD
                </h1>
                <h1 className="block text-[2em] font-bold text-left">
                  SOFTWARE
                </h1>
              </div>

              <div className="z-[2] flex justify-between items-center">
                <div className="flex justify-center flex-col relative items-center z-[5] left-14 w-[80%] md:w-full  xl:w-[45%]">
                  <img
                    src="IMG_20240312_2148201.jpg"
                    alt="Profile"
                    className="rounded-full border-4 border-white w-[35%] md:w-[25%] lg:w-[30%] xl:w-[40%]"
                  />
                  <h1 className="text-[3.5rem] font-[500] mb-[0.5rem]">
                    Nikhil Sadhwani
                  </h1>
                  <h6 className="text-[1.5rem] ">
                    Software Engineer
                    <br />
                    MERN Stack
                  </h6>
                  <div className={`mt-4`}>
                    <button
                      className={`bg-purple-500  hover:bg-purple-600 text-white font-bold py-2 px-4 rounded`}
                      onClick={() => {
                        setContent("Projects.js");
                        setActiveFileIndex(1);
                      }}
                    >
                      My Work
                    </button>
                    <button
                      className={`border-2 border-purple-500 hover:bg-purple-600 text-purple-500 hover:text-white font-bold py-2 px-4 rounded ml-2`}
                      onClick={() => {
                        setContent("contact.css");
                        setActiveFileIndex(3);
                      }}
                    >
                      Contact Me
                    </button>
                    <button
                      className={`border-2 border-purple-500 hover:bg-purple-600 text-purple-500 hover:text-white font-bold py-2 px-4 rounded ml-2`}
                      onClick={() => {
                        window.open(
                          "https://drive.google.com/file/d/18iin6hkD7aww_KsI_XYfO643-x67t2mo/view?usp=drive_link",
                          "_blank"
                        );
                      }}
                    >
                      Resume
                    </button>
                  </div>
                </div>
                <svg
                  width="486"
                  height="534"
                  viewBox="0 0 486 534"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[500px] w-[450px] relative top-[10%] r-0 hidden md:inline"
                >
                  <circle cx="167" cy="60" r="60" fill="#D7F484"></circle>
                  <circle cx="37.5" cy="215.5" r="37.5" fill="#bd93f9"></circle>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M486 144.469c-38.145-31.86-87.255-51.033-140.842-51.033-121.415 0-219.842 98.427-219.842 219.842 0 14.167 1.34 28.02 3.9 41.441 47.414-86.154 91.678-142.17 146.717-170.767 56.069-29.132 121.816-29.08 210.067-6.68v-32.803zm0 48.288v289.33c-38.145 31.86-87.255 51.033-140.842 51.033-100.321 0-184.947-67.197-211.325-159.037l1.502.805c49.937-93.22 94.046-149.844 147.514-177.625 52.014-27.025 114.411-27.498 203.151-4.506z"
                    fill="#bd93f9"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}

        {content === "Projects.js" ? (
          <div className="custom-scrollbar bg-zinc-800 text-white p-8 overflow-y-auto h-[91vh]">
            <h1 className="text-2xl mb-6 text-left">Stuff I've Built So Far</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
              {projectData.map((project, index) => (
                <Card key={index} {...project} />
              ))}
            </div>
          </div>
        ) : (
          <></>
        )}

        {content === "skill.json" ? (
          <div className="custom-scrollbar bg-zinc-800 text-white p-8 font-mono text-lg overflow-y-auto h-[91vh]">
            <h2 className="text-xl mb-4 text-left">Skills</h2>
            <div className="flex">
              <div>
                {numbers.map((num) => (
                  <span className="text-gray-500">
                    {num} <br />
                  </span>
                ))}
              </div>

              <div className="w-[100%] text-left">
                <p className="ml-[2%] text-[#f6c165]">{`[`}</p>
                <p className="ml-[5%] text-[#69c8fb]">{` {`}</p>
                <p className="ml-[10%] text-[#bd93f9]">"Languages": {`[`}</p>
                <p className="ml-[15%]"> C / C++,</p>
                <p className="ml-[15%]"> Java,</p>
                <p className="ml-[15%]"> Python,</p>
                <p className="ml-[15%]"> SQL,</p>
                <p className="ml-[15%]"> PHP,</p>
                <p className="ml-[15%]"> HTML,</p>
                <p className="ml-[15%]"> CSS,</p>
                <p className="ml-[15%]"> MongoDB,</p>
                <p className="ml-[15%]"> Typescript,</p>
                <p className="ml-[10%] text-[#bd93f9]"> {`]`},</p>
                <p className="ml-[10%] text-[#bd93f9]">
                  {" "}
                  "Developer Tools": {`[`}
                </p>
                <p className="ml-[15%]"> Git & GitHub,</p>
                <p className="ml-[15%]"> VS Code,</p>
                <p className="ml-[10%] text-[#bd93f9]"> {`]`},</p>
                <p className="ml-[10%] text-[#bd93f9]"> "Frameworks": {`[`}</p>
                <p className="ml-[15%]"> ReactJs,</p>
                <p className="ml-[15%]"> ExpressJS,</p>
                <p className="ml-[15%]"> NestJS,</p>
                <p className="ml-[15%]"> Tailwind CSS,</p>
                <p className="ml-[15%]"> Bootstrap,</p>
                <p className="ml-[15%]"> MUI,</p>
                <p className="ml-[15%]"> React Native</p>
                <p className="ml-[10%] text-[#bd93f9]"> {`]`}</p>
                <p className="ml-[5%] text-[#69c8fb]"> {`}`}</p>
                <p className="ml-[2%] text-[#f6c165]">{`]`}</p>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}

        {content === "about.html" ? (
          <div className="text-left p-8 overflow-y-auto h-[91vh]">
            <h1 className="text-2xl font-bold mb-4">
              A Little Bit About Me...
            </h1>
            <ul className="text-xl font-semibold list-disc pl-4 mb-4 mt-6">
              <li className="mb-6">
                My name is Nikhil Sadhwani, and I graduated recently with a BCA.
                I'm very eager to do some full-stack development, mostly in MERN
                Stack technology, with TypeScript and Tailwind CSS. I'm
                conversant with quite a number of languages, including Python,
                PHP, MySQL, Java, and many others.
              </li>
              <li className="mb-6">
                I have completed my 3-month internship as a full-stack
                developer, where i worked on Nest.js at the back end and
                React.js at the front end. With it, I also worked on TypeScript
                and MUI components, which has extended my knowledge of the
                development field.
              </li>
              <li className="mb-6">
                I feel excited to learn and explore new things. With some
                experience in both mobile application development and desktop
                development, this has imbued me with new, more meaningfully
                profound insight that I may now use to dive deep into the field
                that I have chosen.
              </li>
              <li className="mb-6">
                Driven by a passion for technology and a commitment to
                excellence, I am eager to contribute my skills and dedication to
                innovative projects.
              </li>
            </ul>
          </div>
        ) : (
          <></>
        )}

        {content === "contact.css" ? (
          <div className="custom-scrollbar bg-zinc-800 text-white p-8 font-mono text-lg overflow-y-auto h-[91vh] flex justify-between">
            <div className="w-full lg:w-[49%] ">
              {/* <div className="w-[49%] border-r-2 border-[#bd93f9]"> */}
              <h2 className="text-2xl font-bold mb-4 text-left">
                {" "}
                Reach Out Via Socials
              </h2>
              <div className="flex">
                <div>
                  {numbers.map((num) => {
                    if (num >= 7) {
                      return;
                    }
                    return (
                      <span className="text-gray-500">
                        {num} <br />
                      </span>
                    );
                  })}
                </div>

                <div className="w-[100%] text-left">
                  <p className="ml-[5%] text-[#bd93f9]">.socials {`[`}</p>
                  <p className="ml-[10%]">
                    {" "}
                    Email:{" "}
                    <a
                      className="text-[#bd93f9] hover:border-b-2 hover:border-[#bd93f9]"
                      href="mailto:nikhilsadhwani42@gmail.com"
                      target="_blank"
                    >
                      nikhilsadhwani42@gmail.com
                    </a>
                    ;
                  </p>
                  <p className="ml-[10%]">
                    {" "}
                    Github:{" "}
                    <a
                      className="text-[#bd93f9] hover:border-b-2 hover:border-[#bd93f9]"
                      href="https://github.com/Nikhil-Sadhwani"
                      target="_blank"
                    >
                      Nikhil-Sadhwani
                    </a>
                    ;
                  </p>
                  <p className="ml-[10%]">
                    {" "}
                    Linkedin:{" "}
                    <a
                      className="text-[#bd93f9] hover:border-b-2 hover:border-[#bd93f9]"
                      href="http://linkedin.com/in/nikhil-sadhwani-863872261"
                      target="_blank"
                    >
                      Nikhl Sadhwani
                    </a>
                    ;
                  </p>
                  <p className="ml-[10%]">
                    {" "}
                    Website:{" "}
                    <a
                      className="text-[#bd93f9] hover:border-b-2 hover:border-[#bd93f9]"
                      href="https://nikhilsadhwani.vercel.app/"
                      target="_blank"
                    >
                      nikhilsadhwani
                    </a>
                    ;
                  </p>
                  <p className="ml-[5%] text-[#bd93f9]"> {`]`},</p>
                </div>
              </div>
            </div>

            {/* <div className="w-[49%]">
              <h2 className="text-2xl font-bold mb-4 text-left">
                Or Fill Out This Form
              </h2>

              <form className="space-y-4">
                <div className={`flex gap-4`}>
                  <input
                    type="text"
                    placeholder="Name"
                    className={`bg-zinc-900 p-2 flex-1`}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className={`bg-zinc-900 p-2 flex-1`}
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className={`bg-zinc-900 p-2 w-full`}
                />
                <textarea
                  placeholder="Message"
                  className={`bg-zinc-900 p-2 w-full h-32`}
                />
                <button
                  type="submit"
                  className={`bg-purple-600 px-4 py-2 rounded-lg w-full`}
                >
                  Submit
                </button>
              </form>
            </div> */}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
