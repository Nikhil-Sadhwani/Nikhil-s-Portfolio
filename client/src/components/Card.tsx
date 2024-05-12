type Props = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
};

export default function Card(props: Props) {
  const getColorByTag = (tag: string): string => {
    switch (tag) {
      case "ReactJS":
        return "border-[#61dafb] hover:bg-[#61dafb]";
      case "python":
        return "border-[#bd93f9] hover:bg-[#bd93f9] ";
      case "JavaScript":
        return "border-[#f5f600] hover:bg-[#f5f600] ";
      case "Bootstrap":
        return "border-[#ff4154] hover:bg-[#ff4154] ";
      case "NodeJS":
        return "border-[#fcbe61] hover:bg-[#fcbe61] ";
      case "ExpressJS":
        return "border-[#83cd29] hover:bg-[#83cd29]  ";
      case "NestJS":
        return "border-[#83cd29] hover:bg-[#83cd29]  ";
      case "MongoDB":
        return "border-[#439934] hover:bg-[#439934] ";
      case "TailwindCSS":
        return "border-[#00d1b2] hover:bg-[#00d1b2]";
      case "Typescript":
        return "border-[#0070f3] hover:bg-[#0070f3] ";
      case "PHP":
        return "border-[#e200f6] hover:bg-[#e200f6] ";
      case "HTML":
        return "border-[#ff4154] hover:bg-[#ff4154] ";
      case "CSS":
        return "border-[#61dafb] hover:bg-[#61dafb] ";
      case "MySQL":
        return "border-[#f67800] hover:bg-[#f67800] ";
      case "React Native":
        return "border-[#f67800] hover:bg-[#f67800] ";
      default:
        return "border-gray-200 hover:bg-gray-200 ";
    }
  };

  return (
    <div className="bg-zinc-900 rounded-lg p-4">
      <img src={props.image} alt={props.title} className="rounded-lg mb-4" />
      <h2 className="text-xl font-semibold mb-2 text-left">{props.title}</h2>
      <p className="text-zinc-400 mb-4 text-left">{props.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {props.tags.map((tag, index) => {
          return (
            <span
              key={index}
              className={`border-2  ${getColorByTag(
                tag
              )} hover:bg-opacity-[0.25] px-2 py-1 rounded-full`}
            >
              {tag}
            </span>
          );
        })}
      </div>
      <div className="text-left">
        <button
          className=" border-b-2 border-[#bd93f9]"
          onClick={() => {
            window.open(props.link, "_blank");
          }}
        >
          Source Code
        </button>
        {/* <a href="/" className=" border-b-2 border-[#bd93f9]  ml-4 ">
          Live Demo
        </a> */}
      </div>
    </div>
  );
}
