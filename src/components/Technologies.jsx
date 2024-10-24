import { RiReactjsLine } from "react-icons/ri";
import { SiNextdotjs, SiMongodb, SiTailwindcss, SiJavascript, SiHtml5, SiCss3, SiNodedotjs } from "react-icons/si";

const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <h1 className="my-20 text-center text-2xl">Technologies</h1>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer transition-transform transform hover:scale-110">
                    <RiReactjsLine className="text-6xl text-cyan-400"/>
                </a>
                <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer transition-transform transform hover:scale-110">
                    <SiNextdotjs className="text-6xl text-black"/>
                </a>
                <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer" className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer transition-transform transform hover:scale-110">
                    <SiMongodb className="text-6xl text-green-500"/>
                </a>
                <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer transition-transform transform hover:scale-110">
                    <SiTailwindcss className="text-6xl text-blue-400"/>
                </a>
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer" className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer transition-transform transform hover:scale-110">
                    <SiJavascript className="text-6xl text-yellow-400"/>
                </a>
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer" className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer transition-transform transform hover:scale-110">
                    <SiHtml5 className="text-6xl text-orange-500"/>
                </a>
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer" className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer transition-transform transform hover:scale-110">
                    <SiCss3 className="text-6xl text-blue-500"/>
                </a>
                <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer" className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer transition-transform transform hover:scale-110">
                    <SiNodedotjs className="text-6xl text-green-600"/>
                </a>
            </div>
        </div>
    );
}

export default Technologies;