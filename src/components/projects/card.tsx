import React from "react";

import "./card.css";
import { motion } from "motion/react";

export type CardProps = {
  data: {
    title: string;
    imageUrl: string;
    description: string;
    liveUrl: string;
    githubUrl?: string;
    showGitHubButton?: boolean;
  };
};

const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <div className="w-full h-full gradient-border text-amber-50 px-8 py-10 group flex flex-col justify-start items-stretch">
      <div className="w-full h-[240px]">
        <img
          src={data.imageUrl}
          alt={data.title}
          className="h-full w-full object-cover "
        />
      </div>
      <p className="my-4 text-lg font-bold tracking-wide leading-7 ">
        {data.title}
      </p>
      <p className="mb-8 text-amber-50/70 leading-7 tracking-wide font-light text-base line-clamp-4">
        {data.description}
      </p>
      <div className="mt-auto flex justify-between items-center gap-4">
        <motion.a
          whileHover={{
            scale: 0.8,
          }}
          href={data.liveUrl}
          target="_blank"
          className="w-full inline-block bg-linear-120 from-[#108a01] to-accent text-sm md:text-base px-3 py-5 md:px-5 rounded-full shadow-lg shadow-primary/25 font-medium text-center cursor-pointer bg-animation"
        >
          Live Preview
        </motion.a>
        {data.githubUrl && (
          <motion.a
            whileHover={{
              scale: 0.8,
            }}
            href={data.githubUrl}
            target="_blank"
            className="w-full inline-block border border-amber-50 text-sm md:text-base px-3 py-5 md:px-5 rounded-full font-medium text-center cursor-pointer bg-animation"
          >
            Visit Github
          </motion.a>
        )}
      </div>
    </div>
  );
};

export default Card;
