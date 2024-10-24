import { motion } from "framer-motion";
import { useState } from "react";
import profilePic from "../assets/kevinRushProfile.jpg";

const Hero = () => {
    const [isClicked, setIsClicked] = useState(false);

    const handleHeadingClick = () => {
        setIsClicked(!isClicked);
    };

    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isClicked ? { opacity: 1, scale: 1.2 } : { opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, ease: [0.68, -0.55, 0.27, 1.55] }}
                            whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                            onClick={handleHeadingClick}
                            className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl text-white cursor-pointer"
                        >
                            Aditya Mishra
                        </motion.h1>
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 1 }}
                            className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-4xl tracking-tight-transparent text-white"
                        >
                            FrontEnd Developer
                        </motion.span>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 1 }}
                            className="my-2 max-w-xl py-6 font-light tracking-tighter text-white"
                        >
                            I am a passionate Frontend developer with a knack for crafting robust and scalable web applications.
                            As a fresher, I have honed my skills in front-end technologies like React and [Next.js](https://nextjs.org/), as well as back-end technologies like [Node.js](https://nodejs.org/), MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.
                        </motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <motion.img
                            src={profilePic}
                            alt="Profile"
                            className="rounded-lg" // Make the image less rounded
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.5, duration: 1 }}
                            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }} // Add hover animation
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;