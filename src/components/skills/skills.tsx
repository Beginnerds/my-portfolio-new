import HTMLIcon from "../../assets/icon_html.svg";
import CSSIcon from "../../assets/icon_css.svg";
import JSIcon from "../../assets/icon_javascript.svg";
import TSIcon from "../../assets/icon_typescript.svg";
import ReactIcon from "../../assets/icon_react.svg";
import TailwindIcon from "../../assets/icon_tailwind.svg";
import NextJSIcon from "../../assets/icon_nextjs.svg";
import NodeJSIcon from "../../assets/icon_nodejs.svg";
import ExpressIcon from "../../assets/icon_express.svg";
import MongoDbIcon from "../../assets/icon_mongodb.svg";
import MongooseIcon from "../../assets/icon_mongoose.svg";
import GithubIcon from "../../assets/icon_github.svg";
import VSCodeIcon from "../../assets/icon_vscode.svg";
import DockerIcon from "../../assets/icon_docker.svg";

import "./skills.css";
import { AnimationProps, motion } from "motion/react";

type Icon = {
  title: string;
  icon: string;
};

const icons1: Icon[] = [
  {
    title: "HTML",
    icon: HTMLIcon,
  },
  {
    title: "CSS",
    icon: CSSIcon,
  },
  {
    title: "Javascript",
    icon: JSIcon,
  },
  {
    title: "Typescript",
    icon: TSIcon,
  },
  {
    title: "Typescript",
    icon: TSIcon,
  },
  {
    title: "React",
    icon: ReactIcon,
  },
  {
    title: "Tailwind CSS",
    icon: TailwindIcon,
  },
  {
    title: "NextJS",
    icon: NextJSIcon,
  },
  {
    title: "NodeJS",
    icon: NodeJSIcon,
  },
  {
    title: "ExpressJS",
    icon: ExpressIcon,
  },
  {
    title: "MongoDB",
    icon: MongoDbIcon,
  },
  {
    title: "Mongoose ORM",
    icon: MongooseIcon,
  },
];

const icons2: Icon[] = [
  {
    title: "Github",
    icon: GithubIcon,
  },
  {
    title: "VS Code",
    icon: VSCodeIcon,
  },
  {
    title: "Docker",
    icon: DockerIcon,
  },
];

const Skills = () => {
  const containerVariants: AnimationProps["variants"] = {
    initial: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const headingVariants: AnimationProps["variants"] = {
    initial: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const iconContainerOneVariants: AnimationProps["variants"] = {
    initial: {
      opacity: 0,
      z: 50,
      scale: 1.2,
      x: -100,
    },
    visible: {
      opacity: 1,
      z: 0,
      scale: 1,
      x: 0,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };
  const iconContainerTwoVariants: AnimationProps["variants"] = {
    initial: {
      opacity: 0,
      z: 50,
      scale: 1.2,
      x: 100,
    },
    visible: {
      opacity: 1,
      z: 0,
      scale: 1,
      x: 0,
    },
  };

  const iconsVariants: AnimationProps["variants"] = {
    initial: {
      opacity: 0,
      x: -10,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <motion.section
      className="w-full text-amber-50 max-md:text-center"
      variants={containerVariants}
      initial={"initial"}
      whileInView={"visible"}
      viewport={{
        amount:0.3
      }}
    >
      <motion.h3
        id="skills"
        className="block mx-auto text-3xl font-bold tracking-wide leading-14"
        variants={headingVariants}
      >
        Skills & Tools
      </motion.h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          variants={iconContainerOneVariants}
          className="gradient-border mt-8 bg-primary/5 py-16 px-2 md:px-8 drop-shadow-2xl shadow-2xl shadow-primary/25"
        >
          <h4 className="block text-center text-xl font-semibold tracking-wide leading-8">
            Programming Languages
          </h4>
          <motion.div
            variants={containerVariants}
            className="mt-8 w-full flex justify-center items-center flex-wrap gap-8"
          >
            {icons1.map((item) => (
              <motion.div
                variants={iconsVariants}
                className="flex flex-col justify-center gap-1 items-center "
                title={item.title}
              >
                <img
                  className="size-16 pointer-events-none"
                  src={item.icon}
                  alt={`${item.title}_icon`}
                />
                <span className="text-center text-sm text-cyan-50 ">
                  {item.title}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <motion.div
          variants={iconContainerTwoVariants}
          className="gradient-border mt-8 bg-primary/5 py-16 px-2 md:px-8 drop-shadow-2xl shadow-2xl shadow-primary/25"
        >
          <h4 className="block text-center text-xl font-semibold tracking-wide leading-8">
            Tools & Technologies
          </h4>
          <motion.div
            variants={containerVariants}
            className="mt-8 w-full flex justify-center items-center flex-wrap gap-8"
          >
            {icons2.map((item, i) => (
              <motion.span
                variants={iconsVariants}
                title={item.title}
                className=" flex flex-col justify-center items-center flex-wrap gap-1"
                style={{
                  width:
                    i == icons2.length - 1 && icons2.length % 2 != 0
                      ? "100%"
                      : "",
                }}
              >
                <img
                  className="size-16"
                  src={item.icon}
                  alt={`${item.title}_icon`}
                />
                <span className="text-center text-sm text-cyan-50 ">
                  {item.title}
                </span>
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
