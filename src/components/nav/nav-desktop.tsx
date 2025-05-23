import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";

const NavDesktop = () => {
  const { scrollY } = useScroll();
  const [scrollYValue,setScrollYvalue] = useState(scrollY.get())
  const [scrollDirection, setScrollDirection] = useState<"down" | "up">("up");

  useMotionValueEvent(scrollY, "change", (current) => {
    const diff = current - (scrollY.getPrevious() || 0);
    setScrollDirection(diff > 0 ? "down" : "up");
    setScrollYvalue(current)
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
          <a
            href="https://www.upwork.com/freelancers/shubhamkalra4"
            target="_blank"
            className="bg-[#108a01] filter transition-all hover:brightness-75 px-3 py-2 rounded-md shadow"
          >
            Hire Me
          </a>
        </li>
      </motion.ul>
    </motion.nav>
  );
};

export default NavDesktop;
