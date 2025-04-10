import { AnimationProps, motion } from "motion/react";
import MyPicture from "../../assets/me.png";
import "./hero.css";

const Hero = () => {
  const sectionOneVariants: AnimationProps["variants"] = {
    hidden: {
      x: -50,
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
    visible: {
      x: 0,
      opacity: 1,

      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3, // Stagger children by .3 seconds
      },
    },
  };

  const labelVariants: AnimationProps["variants"] = {
    hidden: {
      x: -10,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };
  const nameVariants: AnimationProps["variants"] = {
    hidden: {
      y: 10,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  const roleVariants: AnimationProps["variants"] = {
    hidden: {
      y: -10,
      opacity: 0,
      backgroundPosition: "0%, 50%",
    },
    visible: {
      y: 0,
      opacity: 1,
      backgroundPosition: "100%, 50%",
      transition: {
        default: {
          duration: 0.3,
        },
        backgroundPosition: {
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        },
      },
    },
  };
  const descriptionVariants: AnimationProps["variants"] = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  const ctaVariants: AnimationProps["variants"] = {
    hidden: {
      opacity: 0,
      scale: 5,
    },
    visible: {
      opacity: 1,
      scale: 1,
    },
  };

  return (
    <div className=" w-full min-h-[calc(100vh-4rem)]  pb-16 grid grid-cols-1 md:grid-cols-2 gap-8  text-amber-50 justify-items-center md:items-center md:justify-items-start">
      <motion.div
        variants={sectionOneVariants}
        initial="hidden"
        animate="visible"
        className="max-md:text-center max-md:order-1"
      >
        <motion.p variants={labelVariants} className="text-sm font-medium">
          Hello, I am
        </motion.p>
        <motion.h1
          variants={nameVariants}
          className="text-4xl font-bold leading-14 tracking-wide"
        >
          Shubham Kalra
        </motion.h1>
        <motion.p
          variants={roleVariants}
          style={{
            backgroundSize: "150%",
          }}
          className="text-4xl font-bold leading-14 tracking-wide text-transparent bg-clip-text bg-linear-90 from-primary to-accent"
        >
          Full Stack Developer
        </motion.p>
        <motion.p
          variants={descriptionVariants}
          className="mt-8 text-amber-50/70 leading-7 tracking-wide font-light text-base"
        >
          I'm a passionate and skilled full-stack developer with a strong grip
          on modern web technologies like ReactJS, NextJS, MongoDB, Express,
          Node, Docker, and sleek UI solutions with Tailwind & ShadCN. I build
          efficient, scalable, and user-friendly web applications that give
          businesses a competitive edge.
        </motion.p>

        <motion.a
          variants={ctaVariants}
          whileHover={{
            y: -5,
            scale: 1.2,
          }}
          href="#hireme"
          target="_blank"
          className="mt-8 inline-block bg-linear-120 from-[#108a01] to-accent    p-5 rounded-full shadow-lg shadow-primary/25 bg-animation"
        >
          Get In Touch
        </motion.a>
      </motion.div>

      {/* image column  */}

      <div className="max-md:order-none md:justify-self-end h-[240px] md:h-[320px] w-[240px] md:w-[320px] image-border-out">
        <div className="image-border shadow-lg shadow-primary/25 rounded-full">
          <img
            src={MyPicture}
            alt="shubham_kalra_picture"
            className=" h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
