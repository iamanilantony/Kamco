import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"

export default function Home() {
    return (
        <div className="px-4 py-10 flex flex-col justify-center items-center ">
            <h6 className="text-[1.4rem] md:text-[3rem] font-[700] md:px-10 mb-10"><span className="bg-[#DAEEBC] p-2 rounded-xl">Ekotel</span> Coming Soon!</h6>
            <p className="w-[60%] text-center md:text-xl font-semibold text-gray-500">Our eco-friendly resorts in Ramakkalmedu and Ooty are currently under development. Stay tuned for sustainable luxury amidst nature’s beauty, coming your way soon!</p>
        </div>
    )
}
