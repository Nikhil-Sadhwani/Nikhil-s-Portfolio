import { FC } from "react";

interface NavLink {
  text: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { text: "File", href: "#" },
  { text: "Edit", href: "#" },
  { text: "View", href: "#" },
  { text: "Go", href: "#" },
  { text: "Run", href: "#" },
  { text: "Terminal", href: "#" },
  { text: "Help", href: "#" },
];

const Navbar: FC = () => {
  return (
    <nav className="bg-zinc-800 p-1 h-[30px] flex justify-center lg:justify-between items-center">
      <div className=" flex items-center">
        <img
          src="vscode_icon.svg"
          alt="Logo"
          className="w-[6%] h-[22px] mr-4 absolute left-4 lg:static"
        />

        <ul className="text-zinc-300 hidden lg:flex space-x-4 hover:text-white font-medium">
          {NAV_LINKS.map((link, index) => (
            <li key={index}>{link.text}</li>
          ))}
        </ul>
      </div>
      <div className="w-auto lg:w-[45%] text-center sm:text-left">
        <span className=" font-semibold text-white text-center">
          Nikhil Sadhwani - VS Code
        </span>
      </div>
      <div className="flex items-center space-x-1 absolute right-5">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>
    </nav>
  );
};

export default Navbar;
