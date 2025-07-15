import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";

const NavDesktop = () => {
  const { scrollY } = useScroll();
  const [scrollYValue, setScrollYvalue] = useState(scrollY.get());
  const [scrollDirection, setScrollDirection] = useState<"down" | "up">("up");

  useMotionValueEvent(scrollY, "change", (current) => {
    const diff = current - (scrollY.getPrevious() || 0);
    setScrollDirection(diff > 0 ? "down" : "up");
    setScrollYvalue(current);
  });

  return (
    <motion.nav
      className="w-full h-16"
      initial={false}
      animate={{
        backgroundColor:
          scrollDirection == "up"
            ? "var(--color-background)"
            : "rgba(0,0,0,0.1)",
        backdropFilter: scrollDirection == "up" ? "blur(0px)" : "blur(10px)",
      }}
      transition={{
        ease: "backInOut",
      }}
    >
      <motion.div
        className="absolute -bottom-[1px] h-[1px] w-full bg-linear-0 from-accent to-primary"
        animate={{
          scaleX: scrollYValue == 0 ? 0 : 1,
          originX: 0,
        }}
      />
      <motion.ul
        className="h-full flex gap-8 items-center justify-evenly text-amber-50 px-8"
        initial={false}
        animate={{
          // padding: scrollYValue == 0 ? "1.5rem 2rem" : "1rem 2rem",
          fontSize: scrollYValue == 0 ? "1rem" : "0.8rem",
        }}
      >
        <li className="mr-auto">Shubham Kalra</li>
        <li className="hover:text-accent">
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about" className="hover:text-accent">
            About
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-accent">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-accent">
            Contact
          </a>
        </li>
        <li>
          <a
            href="https://www.upwork.com/freelancers/shubhamkalra4"
            target="_blank"
            className="bg-[#108a01] filter transition-all hover:brightness-75 px-3 py-2 rounded-md shadow-sm"
          >
            Hire Me{" "}
            <svg
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
            </svg>
          </a>
        </li>
      </motion.ul>
    </motion.nav>
  );
};

export default NavDesktop;
