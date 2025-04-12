import { AnimationProps, motion } from "motion/react";

const About = () => {
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

  const descriptionVariants: AnimationProps["variants"] = {
    initial: {
      opacity: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
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
  const ctaVariants: AnimationProps["variants"] = {
    initial: {
      opacity: 0,
      scale: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
    },
  };
  return (
    <motion.section
      id="about"
      className="mt-20 w-full text-amber-50 max-md:text-center"
      variants={containerVariants}
      initial={"initial"}
      whileInView={"visible"}
      viewport={{
        amount: 0.15,
        once:true
      }}
    >
      <motion.h3
        id="skills"
        className="block mx-auto text-3xl font-bold tracking-wide leading-14"
        variants={headingVariants}
      >
        About Me
      </motion.h3>
      <motion.p
        variants={descriptionVariants}
        className="mt-5 text-amber-50/70 leading-7 tracking-wide font-light text-base"
      >
        Hey! I'm a full stack developer who’s especially into frontend work — I
        love bringing ideas to life in the browser. I'm always learning
        something new and finding ways to level up my skills. Whether it’s
        building slick user interfaces or diving into backend logic, I’m all
        about making things work and look great.
      </motion.p>
      <motion.a
        variants={ctaVariants}
        whileHover={{
          y: -5,
          scale: 1.2,
        }}
        href="https://www.upwork.com/freelancers/shubhamkalra4"
        target="_blank"
        className="mt-8 inline-block bg-linear-120 from-[#108a01] to-accent  p-5 rounded-full shadow-lg shadow-primary/25 bg-animation"
      >
        Contact Me
      </motion.a>
    </motion.section>
  );
};

export default About;
