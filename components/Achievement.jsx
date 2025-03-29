"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const achievementsList = [
  {
    metric: "Projects",
    value: 100,
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Users",
    value: 50,
  },
  {
    metric: "Publications",
    value: 2,
  },
  {
    metric: "Years",
    value: 3,
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          return <CountingAchievement key={index} achievement={achievement} index={index} />;
        })}
      </div>
    </div>
  );
};

const CountingAchievement = ({ achievement, index }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let isMounted = true;
    const duration = 2; // Duration for the counting animation in seconds
    const targetValue = achievement.value;

    // Animate the counter
    const increment = targetValue / (duration * 60); // Increment value for each frame (60 FPS)
    let currentValue = 0;

    const countInterval = setInterval(() => {
      if (isMounted && currentValue < targetValue) {
        currentValue += increment;
        if (currentValue > targetValue) currentValue = targetValue;
        setCount(Math.floor(currentValue)); // Update the count with rounded value
      } else {
        clearInterval(countInterval);
      }
    }, 1000 / 60); // Set interval to match 60 FPS

    // Clean up the interval if the component is unmounted
    return () => {
      isMounted = false;
      clearInterval(countInterval);
    };
  }, [achievement.value]);

  return (
    <motion.div
      className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.1 }}
      transition={{
        duration: 0.6,
        delay: index * 0.2,
        type: "spring",
        stiffness: 300,
        damping: 25,
      }}
    >
      <h2 className="text-white text-4xl font-bold flex flex-row">
        {achievement.prefix}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            delay: index * 0.3,
          }}
        >
          <span className="text-white text-4xl font-bold">
            {count}
          </span>
        </motion.div>
        {achievement.postfix}
      </h2>
      <motion.p
        className="text-[#ADB7BE] text-base"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5, delay: index * 0.4 }}
      >
        {achievement.metric}
      </motion.p>
    </motion.div>
  );
};

export default AchievementsSection;
