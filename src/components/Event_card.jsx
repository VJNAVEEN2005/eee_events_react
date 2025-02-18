import React from "react";
import Image_Carousel from "./Image_Carousel";
import { motion } from "framer-motion";

function Event_card({ details }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    },
    hover: {
      y: -8,
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <motion.div 
      className="grid gap-8 py-6 md:mx-10 mx-5"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {details.map((data, index) => (
        <motion.div 
          key={index} 
          className="bg-white rounded-lg shadow-md overflow-hidden"
          variants={cardVariants}
          whileHover="hover"
        >
          <div className="flex flex-col md:flex-row">
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Image_Carousel images={data.images} />
            </motion.div>
            
            <motion.div 
              className="p-6 md:w-1/2 flex flex-col justify-between"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div>
                <motion.div 
                  className="text-sm text-gray-500 mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                >
                  {data.date}
                </motion.div>
                <motion.h2 
                  className="text-2xl font-bold text-gray-800 mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.3 }}
                >
                  {data.title}
                </motion.h2>
                <motion.p 
                  className="text-gray-600 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.3 }}
                >
                  {data.details}
                </motion.p>
              </div>
              
              {data.cta && (
                <motion.div 
                  className="mt-6"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.4 }}
                >
                  <motion.a 
                    href={data.cta.link} 
                    className="inline-block px-4 py-2 bg-indigo-600 text-white font-medium rounded transition duration-300"
                    whileHover={{ 
                      backgroundColor: "#4338ca", // indigo-700
                      scale: 1.05 
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {data.cta.text || "Learn More"}
                  </motion.a>
                </motion.div>
              )}
            </motion.div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default Event_card;