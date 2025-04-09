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
      className="relative  h-16 z-20 text-amber-50 bg-background"
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
          <a href="#hireme" target="_blank" className="  bg-[#108a01] filter transition-all hover:brightness-75 px-3 py-2 rounded-md shadow">Hire Me</a>
          </li>
        </motion.ul>
      )}
    </motion.nav>
  );
};

export default NavMobile;
