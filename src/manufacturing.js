import { useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import "./Manufacturing.css"

export default function Manufacturing() {

    let [current, setCurrent] = useState(0);

    let previousSlide = () => {
        if (current === 0) setCurrent(posts.length - 1);
        else setCurrent(current - 1);
    };

    let nextSlide = () => {
        if (current === posts.length - 1) setCurrent(0);
        else setCurrent(current + 1);
    };

    const posts = [
        {
            id: 1,
            title: 'Plain Cotton Crafted from the finest materials with precision.',
            description: 'We source the highest quality raw materials and utilize state-of-the-art machinery to ensure precise cutting, laying the foundation for exceptional shirts.',
            imageUrl: 'bg-step_1',
            step: 'Process-1'
        },
        {
            id: 2,
            title: 'Expertly stitched for impeccable craftsmanship.',
            description: 'Our skilled artisans meticulously stitch each shirt using modern stitching machines, ensuring impeccable craftsmanship and attention to detail in every seam.',
            imageUrl: 'bg-step_2',
            step: 'Process-2'
        },
        {
            id: 3,
            title: 'Carefully washed, cleaned, and dried for perfection.',
            description: "After stitching, each shirt undergoes a meticulous process of washing, cleaning, and drying, ensuring it's pristine and ready to wear when it reaches you.",
            imageUrl: 'bg-step_3',
            step: 'Process-3'
        },
        {
            id: 4,
            title: 'Finishing touches for a flawless finish.',
            description: 'Before packing, each shirt undergoes final tag fittings and meticulous inspection to ensure it meets our standards of perfection, then expertly packed into boxes for delivery.',
            imageUrl: 'bg-step_4',
            step: 'Process-4'
        }
    ]    

    return (
        <div className={`${posts[current].imageUrl} min-h-screen min-w-full bg-no-repeat bg-cover slide-card`}>
            <div className="bg-black w-full min-h-screen bg-opacity-90 flex flex-col items-center py-5">
                <text className='text-3xl bg-gradient-to-l from-teal-500 to-orange-500 text-transparent bg-clip-text font-semibold sm:text-5xl'>
                    Manufacturing Process
                </text>
                <text className='text-white text-md pt-2 px-4 text-center sm:text-lg sm:pt-4'>
                    Our state-of-the-art manufacturing process ensures precision, quality, and attention to detail in every garment we produce.
                </text>
            
                <div class="max-w-sm flex-1 mt-8 flex flex-row overflow-x-auto sm:max-w-7xl">
                    <button onClick={()=> previousSlide()} className="hidden text-white text-5xl sm:block">
                        <FaAngleLeft />
                    </button>

                    <div class={`${posts[current].imageUrl} flex-1 w-80 sm:w-[1000px] shadow-2xl sm:mx-8 rounded-3xl bg-no-repeat bg-cover bg-center relative`}>
                        <div className="bg-gradient-to-b from-black/20 to-black/90 rounded-3xl px-8 pb-4 h-full w-full flex flex-col justify-end items-left absolute">
                            <h3 class="text-lg sm:text-3xl text-white font-bold mb-2">{posts[current].title}</h3>
                            <p class="text-gray-200 text-sm sm:text-md mb-1">{posts[current].description}</p>
                        </div>
                    </div>

                    <button onClick={()=> nextSlide()} className="hidden text-white text-5xl sm:block">
                        <FaAngleRight />
                    </button>
                </div>

                <div className="text-white text-3xl flex flex-row justify-between items-center w-80 pt-4 sm:w-40 sm:pt-10">
                    <button onClick={()=> previousSlide()} className="block text-white text-2xl sm:hidden">
                        <FaAngleLeft />
                    </button>
                    
                    <div className="flex flex-row justify-between w-40 items-center">
                        {posts.map((post, index) => (
                            <div key={index} className={`progress-indicator ${current === index ? 'active' : ''}`}></div>
                        ))}
                    </div>
                    
                    <button onClick={()=> nextSlide()} className="block text-white text-2xl sm:hidden">
                        <FaAngleRight />
                    </button>
                </div>

            </div>
        </div>
    )
}
