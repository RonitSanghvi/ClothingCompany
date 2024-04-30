const posts = [
    {
        id: 1,
        title: 'Plain Cotton',
        description: 'Crafted from premium 100% cotton fabric, this shirt exudes sophistication with its understated design and features a single pocket for added convenience.',
        imageUrl: 'bg-shirt_1',
        tags: ["Cotton", "Full-Sleeves", "Formal", "Plain"]
    },
    {
        id: 2,
        title: 'Chex Cotton',
        description: 'Elevate your wardrobe with our meticulously tailored shirts, crafted from luxurious 100% cotton fabric, adorned with a timeless square design.',
        imageUrl: 'bg-shirt_2',
        tags: ["Cotton", "Full-Sleeves", "Formal", "Squares"]
    },
    {
        id: 3,
        title: 'Tiny Prints',
        description: 'Discover effortless style with our synthetic half-sleeve shirt, boasting subtle print designs ideal for casual occasions, ensuring both comfort and trendiness.',
        imageUrl: 'bg-shirt_4',
        tags: ["Cotton", "Half-Sleeves", "Casual", "Printed"]
    },
    {
        id: 4,
        title: 'Tiny Prints',
        description: 'Discover effortless style with our synthetic half-sleeve shirt, boasting subtle print designs ideal for casual occasions, ensuring both comfort and trendiness.',
        imageUrl: 'bg-shirt_4',
        tags: ["Cotton", "Half-Sleeves", "Casual", "Printed"]
    },
    {
        id: 5,
        title: 'Tiny Prints',
        description: 'Discover effortless style with our synthetic half-sleeve shirt, boasting subtle print designs ideal for casual occasions, ensuring both comfort and trendiness.',
        imageUrl: 'bg-shirt_4',
        tags: ["Cotton", "Half-Sleeves", "Casual", "Printed"]
    },
]
  
export default function Collections() {
    return (
        <div className='w-full h-screen flex flex-col items-center pt-4 sm:pt-10'>
            <text className='text-3xl text-orange-500 font-semibold sm:text-5xl'>
                Explore Our Collections
            </text>
            <text className='text-white text-center text-md pt-2 px-8 sm:text-lg sm:pt-4 sm:px-0'>
                Partner with us for high-quality, stylish, and custom shirts manufacturing.
            </text>
        
            <div class="max-w-sm flex-1 my-4 flex flex-row overflow-x-auto sm:my-8 sm:max-w-7xl">
            <style>
                {`
                .max-w-7xl::-webkit-scrollbar {
                    display: none !important;
                }
                `}
            </style>
                {posts.map(post => (
                    <div key={post.id} class={`${post.imageUrl} min-w-80 flex-1 mx-8 shadow rounded-lg bg-no-repeat bg-cover bg-center`}>
                        
                        <div className="bg-gradient-to-b from-black/20 to-black/90 rounded-lg p-4 h-full w-full flex flex-col justify-end items-left">
                            <h3 class="text-xl text-white font-bold mb-2">{post.title}</h3>
                            <p class="text-gray-200 text-sm mb-1 text-justify">{post.description}</p>
                            <div className="flex flex-wrap mt-2">{post.tags.map((tag, index)=>(
                                <div key={index} className=" text-orange-500 text-sm font-semibold mr-2 rounded" >
                                    #{tag}
                                </div>
                            ))}</div>
                        </div>
                    
                    </div>
                ))}
            </div>
        </div>
    )
}
