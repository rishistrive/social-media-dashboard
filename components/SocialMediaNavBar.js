import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const SocialMediaNavBar = () => {
  const platforms = [
    {
      name: "Instagram",
      icon: <FaInstagram />,
      color: "text-pink-500",
      count: 12500,
    },
    {
      name: "Facebook",
      icon: <FaFacebookF />,
      color: "text-blue-600",
      count: 20200,
    },
    {
      name: "Twitter",
      icon: <FaXTwitter />,
      color: "text-black",
      count: 9700,
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      color: "text-blue-700",
      count: 14300,
    },
  ];

  return (
    <motion.div
      className="bg-gray-500 text-white p-4 rounded-xl shadow-md mb-8"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
        <span className="font-medium text-sm whitespace-nowrap">
          Followers:
        </span>

        {platforms.map((platform, index) => (
          <div
            key={index}
            className="flex items-center gap-2 hover:scale-110 transition-transform duration-200"
          >
            <span className={`text-xl ${platform.color}`}>{platform.icon}</span>
            <span className="font-medium text-sm">
              <CountUp
                end={platform.count}
                duration={2}
                separator=","
                redraw={true}
              />
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SocialMediaNavBar;
