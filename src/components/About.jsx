import { motion } from "framer-motion";
import aboutImg from "../assets/about.jpg";

const About = () => (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="my-20 text-center text-4xl"
        >
            About Me
        </motion.h2>
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center">
                    <motion.img
                        src={aboutImg}
                        alt="About Me"
                        className="rounded-2xl"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    />
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                <div className="flex justify-center lg:justify-start">
                    <motion.p
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1, duration: 1 }}
                    >
                        I am a dedicated and versatile web developer with a passion for creating efficient and user-friendly web applications. As a fresher of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.
                    </motion.p>
                </div>
            </div>
        </div>
    </div>
);

export default About;