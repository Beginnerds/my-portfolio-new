import { Menu, CircleX } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const NavMobile = () => {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    // content behind the nav should not scroll
    if (open) {
      document.documentElement.style.overflowY = "hidden";
    } else {
      document.documentElement.style.overflowY = "";
    }

    const onResize = () => {
      // because we are showing mobile nav at less than this width
      if (window.innerWidth > 768) {
        document.documentElement.style.overflowY = "";
      }
    };

    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  const onClickLink = (e: React.MouseEvent<HTMLUListElement>) => {
    const target = e.target as HTMLElement;
    const anchor = target.closest("a");

    // clicked on link
    if (anchor && e.currentTarget.contains(anchor)) {
      setOpen(false);
    }
  };

  return (
    <motion.nav
      className="relative  h-16  text-amber-50 bg-background"
    >
      <ul className="py-4 px-4 flex items-center justify-between text-lg">
        <li>SK</li>
        <li>
          {!open && (
            <motion.button
              className="cursor-pointer flex items-center"
              layoutId="navContent"
              onClick={() => setOpen((prev) => !prev)}
            >
              <Menu />
            </motion.button>
          )}
          {open && (
            <motion.button
              onClick={() => setOpen(false)}
              className="flex items-center"
            >
              <CircleX />
            </motion.button>
          )}
        </li>
      </ul>
      {open && (
        <motion.ul
          className="absolute top-full left-0 w-full h-[calc(100vh-4rem)] bg-background flex flex-col justify-start items-center text-lg font-medium gap-8"
          layoutId="navContent"
          onClick={onClickLink}
        >
          {" "}
          <li className="w-full text-center mt-24">
            <a href="#home" className="block w-full">
              Home
            </a>
          </li>
          <li className="w-full text-center">
            <a href="#about" className="block w-full">
              About
            </a>
          </li>
          <li className="w-full text-center">
            <a href="#projects" className="block w-full">
              Projects
            </a>
          </li>
          <li className="w-full text-center">
            <a href="#contact" className="block w-full">
              Contact
            </a>
          </li>
          <li className="w-full text-center">
          <a href="https://www.upwork.com/freelancers/shubhamkalra4" target="_blank" className="  bg-[#108a01] filter transition-all hover:brightness-75 px-3 py-2 rounded-md shadow">Hire Me             <svg
              className="inline-block ml-1 size-5 mb-[2px] fill-black/50"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Upwork"
              role="img"
              viewBox="0 0 512 512"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <rect width="512" height="512" rx="15%" ></rect>
                <path
                  fill="#ffffff"
                  d="M357.2,296.9c-17,0-33-7.2-47.4-18.9l3.5-16.6l0.1-.6c3.2-17.6,13.1-47.2,43.8-47.2c23,0,41.7,18.7,41.7,41.7S380.2,296.9,357.2,296.9L357.2,296.9z M357.2,171.4c-39.2,0-69.5,25.4-81.9,67.3c-18.8-28.3-33.1-62.2-41.4-90.8h-42.2v109.7c0,21.7-17.6,39.3-39.3,39.3s-39.3-17.6-39.3-39.3V147.8H71v109.7c0,44.9,36.5,81.8,81.4,81.8s81.4-36.9,81.4-81.8v-18.4c8.2,17.1,18.2,34.4,30.4,49.6l-25.8,121.4h43.1l18.7-88c16.4,10.5,35.2,17.1,56.8,17.1c46.2,0,83.8-37.8,83.8-84.1C440.9,209,403.4,171.4,357.2,171.4"
                ></path>
              </g>
            </svg></a>
          </li>
        </motion.ul>
      )}
    </motion.nav>
  );
};

export default NavMobile;
