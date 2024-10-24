import * as indexJs from "../constants/index.js"; // assuming your data is in a separate file

const ExperienceSection = () => {
    return (
        <>
            <section className="my-8">
                <h2 className="text-3xl font-bold text-center mb-6">Experience</h2>
                <div className="space-y-6">
                    {indexJs.EXPERIENCES.map((experience, index) => (
                        <div key={index} className="p-6 transition-transform duration-500 ease-in-out transform hover:scale-105">
                            <h3 className="text-sm font-semibold text-gray-800 mb-4">{experience.role}</h3>
                            <p className="text-sm text-white-600 italic">{experience.year}</p>
                            <p className="text-sm text-gray-800 mb-4">{experience.company}</p>
                            <p className="text-sm text-white-700">{experience.description}</p>
                            <div className="mt-2">
                                <strong className="text-xs">Technologies:</strong>
                                <ul className="list-disc list-inside ml-4 text-xs text-white border-b border-white pb-2.5">
                                    {experience.technologies.map((tech, index) => (
                                        <li key={index}>{tech}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            
        </>
    );
};

export default ExperienceSection;