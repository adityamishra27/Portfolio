import { motion } from "framer-motion";
import { FaPhone } from 'react-icons/fa';

const Contact = () => {
    const handleDownloadResume = () => {
        const link = document.createElement('a');
        link.href = '/path/to/Downloads'; // Replace with the actual path to the resume file
        link.download = 'resume.pdf';
        link.click();
    };

    return (
        <section className="text-center text-white">
            <motion.h2
                className="text-2xl font-bold"
                whileHover={{ scale: 1.1, transition: { duration: 0.3, ease: "easeIn" } }}
            >
                Get in Touch
            </motion.h2>
            <div className="flex items-center justify-center mt-2">
                <FaPhone className="mr-2" />
                <span>+91 9098012689</span>
            </div>
            <motion.h2
                className="text-xl mt-4"
                whileHover={{ scale: 1.1, transition: { duration: 0.3, ease: "easeIn" } }}
            >
                India
            </motion.h2>
            <button
                onClick={handleDownloadResume}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition duration-300"
            >
                Download Resume
            </button>
        </section>
    );
}

export default Contact;