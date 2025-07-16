import { MotionProps, motion } from "motion/react";
import Card, { CardProps } from "./card";

import ImageNB from "../../assets/thumb_nb.webp";
import ImageBB from "../../assets/thumb_bb.webp";
import ImageNBDash from "../../assets/thumb_nb_dash.webp";
import ImageSV from "../../assets/thumb_sv.webp";
import ImageAdminPanelDemo  from "../../assets/thumb_admin_panel.png"
import ImageYummi  from "../../assets/thumb_restaurant.png"

const projectData: CardProps["data"][] = [
  {
    title: "Nested Block",
    imageUrl: ImageNB,
    description:
      "A modern blog website built with Next.js, featuring Server-Side Rendering (SSR) for improved SEO, full authentication support for secure access, and a clean, fully customizable UI powered by shadcn.",
    liveUrl: "https://nestedblock.com",
  },
  {
    title: "Admin Panel - Ecommerce",
    imageUrl: ImageAdminPanelDemo,
    description:
      "Demo admin panel for an ecommerce website, designed to help admins manage products, view and process orders, track customer activity, and monitor store performance through a clean interface.",
    liveUrl: "https://next-js-admin-panel-demo.vercel.app/",
    githubUrl:"https://github.com/Beginnerds/NextJS-Admin-Panel-Demo"
  },
  {
    title: "Yummi - Food & More",
    imageUrl: ImageYummi,
    description:
      "A restaurant website built with Next.js and Payload CMS, allowing admins to easily update menu items, images, text, and more through a flexible and user-friendly admin panel.",
    liveUrl: "https://restaurant-website-six-phi.vercel.app/",
    githubUrl:"https://github.com/Beginnerds/restaurant-website"
  },
  {
    title: "Byte Bloom",
    imageUrl: ImageBB,
    description:
      "A React-based software agency site with modern animations, showcasing services and projects through interactive, dynamic elements for a clean, professional look.",
    liveUrl: "https://bytebloom.netlify.app/",
    githubUrl: "https://github.com/Beginnerds/Showcase-Software-Agency-Vite",
  },
  {
    title: "Admin Panel - Nested Block",
    imageUrl: ImageNBDash,
    description:
      "A React-based admin panel for a blog, featuring role-based access, a custom Markdown editor, and all core admin tools. Sign-up is required to access the dashboard and manage content securely.",
    liveUrl: "https://dashboard.nestedblock.com",
  },
  {
    title: "SeattleVista",
    imageUrl: ImageSV,
    description:
      "A showcase website turning travel dreams into unforgettable experiences with personalized, seamless service. It inspires exploration through curated journeys and meaningful connections.",
    liveUrl: "https://showcase-advertising-agency.pages.dev/",
    githubUrl:
      "https://github.com/Beginnerds/showcase-advertising-agency/tree/main",
  },
];

const Projects = () => {
  const containerVariants: MotionProps["variants"] = {
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

  const headingVariants: MotionProps["variants"] = {
    initial: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const cardContainerVariants: MotionProps["variants"] = {
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
  const cardVariants: MotionProps["variants"] = {
    initial: {
      opacity: 0,
      x: -30,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        ease: "easeIn",
        mass: 0.8,
      },
    },
  };
  return (
    <motion.section
      id="projects"
      className="mt-20 w-full text-amber-50 max-md:text-center"
      variants={containerVariants}
      initial={"initial"}
      whileInView={"visible"}
      viewport={{
        amount: 'some',
      }}
    >
      <motion.h3
        id="skills"
        className="block mx-auto text-3xl font-bold tracking-wide leading-14"
        variants={headingVariants}
      >
        My Projects
      </motion.h3>
      <motion.div
        variants={cardContainerVariants}
        className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch"
      >
        {projectData.map((item, ind) => (
          <motion.div
            className=""
            variants={cardVariants}
            initial={"initial"}
            whileInView={"visible"}
            viewport={{
              amount: 0.15,
              once: true,
            }}
            key={ind}
          >
            <Card data={item} />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects;
