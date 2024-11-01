export default function Home() {
    const boardsMembers = [
        {
            img: 'EmNajeeb.svg',
            name: 'Mr. E Najeeb',
            position: 'Chairman, ATE Group of Companies',
            socials: {
                instagram: '',
                linkedin: '',
                x: '',
            }
        },
        {
            img: 'MAyyapan.svg',
            name: 'Dr. M Ayyappan',
            position: 'Former Chairman, HLL Ltd.',
            socials: {
                instagram: '',
                linkedin: '',
                x: '',
            }
        },
        {
            img: '',
            name: 'Mr. Varghese Daniel',
            position: 'Co-Founder and CEO, Wrench Solutions',
            socials: {
                instagram: '',
                linkedin: '',
                x: '',
            }
        },
        {
            img: 'Kuncheriya.svg',
            name: 'Dr. Kuncheria P Isaac',
            position: 'Director general, XIME Bangalore',
            socials: {
                instagram: '',
                linkedin: '',
                x: '',
            }
        },
        {
            img: 'Nelloli.svg',
            name: 'Mr. Nellooli P Rajasekharan',
            position: 'CEO, Guru Management Consultants',
            socials: {
                instagram: '',
                linkedin: '',
                x: '',
            }
        },
        {
            img: 'john.svg',
            name: 'Mr. John M. Hurt',
            position: 'Owner and Chief Executive Officer, Zip Tie Domess',
            socials: {
                instagram: '',
                linkedin: '',
                x: '',
            }
        },
        {
            img: '',
            name: 'Mr. Ramesh Ramanathan',
            position: 'Managing Director, Sterling Holiday Resorts',
            socials: {
                instagram: '',
                linkedin: '',
                x: '',
            }
        },
        {
            img: '',
            name: 'Shri. Subramanian Krishnan',
            position: 'Founder, Bonds Forever / DBA Shastha Foods',
            socials: {
                instagram: '',
                linkedin: '',
                x: '',
            }
        },
    ]
    return (
        <div className="md:px-4">
            <div className="mt-0 md:mt-4 flex flex-col justify-center items-center gap-4 px-6 md:px-8 h-[50vh] md:relative">
                {/* Image Card */}
                <div className="mt-4 rounded-[20px] shadow-md h-full w-full md:w-[88%] md:relative">
                    <img src="eco-luxury5.svg" alt="Next-Gen Green Innovation" className="w-full h-full object-cover rounded-[20px]" />
                    {/* Positioned About Ekotel */}
                    <span className="md:absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[50%] bg-white text-black py-2 px-10 rounded-[20px] mb-40 md:my-0">
                        <span className="font-semibold text-xl md:text-4xl">
                            About Ekotel
                        </span>
                    </span>
                </div>
            </div>
            <div>
                <div className="md:my-20 mx-1 md:mx-20 my-8 text-[0.8rem] md:text-[1.3rem] font-[500] text-gray-600">
                    Welcome to Ekotel Resorts, where nature and luxury exist in perfect harmony. Our eco-friendly retreats are thoughtfully designed to blend sustainability with modern comforts, offering you a unique escape. Enjoy luxurious accommodations that offer comfort without compromise, all while being immersed in pristine natural beauty. Whether you seek a peaceful getaway or an adventure in eco-conscious travel, Ekotel Resorts provides a mindful experience for all. Join us in celebrating a lifestyle that honors both the environment and your well-being.
                </div>
                <h5 className="text-[1.1rem] md:text-[3rem] font-[700] mb-8">
                    Our <span className="bg-green-100 p-2 rounded-xl">Resort</span> Locations
                </h5>
                <div className="flex md:flex-row flex-col w-full mt-20">
                    {/* Image Card 1 */}
                    <div className="flip-card flex-1 px-4 md:px-20 h-full my-10 md:mb-20">
                        <div className="flip-card-inner w-full h-[500px] relative">
                            {/* Front of the Card */}
                            <div className="flip-card-front absolute w-full h-full rounded-[20px] overflow-hidden">
                                <img src="eco-luxury6.svg" alt="Next-Gen Green Innovation" className="w-full h-full object-cover" />
                            </div>
                            {/* Back of the Card */}
                            <div className="flip-card-back absolute w-full h-full flex flex-col items-center justify-center bg-[#B7AD9C] rounded-[20px]">
                                <p className="text-black font-semibold text-4xl my-6">Ramakkalmedu</p>
                                <p className="text-black text-xl px-6">Immerse yourself in eco-friendly comfort at the scenic heights of Ramakkalmedu. Enjoy sustainable living with stunning views, organic dining, and nature-inspired experiences.</p>
                            </div>
                        </div>
                    </div>

                    {/* Image Card 2 */}
                    <div className="flip-card flex-1 px-4 md:px-20 h-full my-10 md:mb-20">
                        <div className="flip-card-inner w-full h-[500px] relative">
                            {/* Front of the Card */}
                            <div className="flip-card-front absolute w-full h-full rounded-[20px] overflow-hidden">
                                <img src="eco-luxury7.svg" alt="Next-Gen Green Innovation" className="w-full h-full object-cover" />
                            </div>
                            {/* Back of the Card */}
                            <div className="flip-card-back absolute w-full h-full flex flex-col items-center justify-center bg-[#B7AD9C] rounded-[20px]">
                                <p className="text-black font-semibold text-4xl my-6">Ooty</p>
                                <p className="text-black text-xl px-6">Escape to the lush landscapes of Ooty at Ekotel Resorts. Our eco-conscious retreat offers serene stays, blending nature with luxury and sustainable practices for an unforgettable experience.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-4 md:mb-4 px-20">
                    <h5 className="text-[1rem] md:text-[3rem] font-[700] mb-4">
                        Meet our <span className="bg-[#B7AD9C] p-2 rounded-xl">Advisory</span> board
                    </h5>
                    <p className="text-[1rem] font-[500]">
                        Dedicated members behind the success of Ekotel
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8">
                    {
                        boardsMembers.map((member, index) => (
                            <div key={index} className={`w-80 mx-auto py-10 ${index >= 8 ? 'md:col-span-2' : ''}`}>
                                <div className="bg-[#DAEEBC] w-80 rounded-xl h-80">
                                    <img src={member.img} alt="" className="w-full h-full object-cover rounded-[20px] w-80" />
                                </div>
                                <div>
                                    <p className="text-2xl font-[700] mt-2">{member.name}</p>
                                    <p>{member.position}</p>
                                    <div className="flex justify-between px-20 mt-2">
                                        <span className="p-[10px] rounded-[50%] bg-[#B7AD9C] mx-1">
                                            <img src="instagram.svg" alt="" className="w-[20px] h-full object-cover" />
                                        </span>
                                        <span className="p-[10px] rounded-[50%] bg-[#B7AD9C] mx-1">
                                            <img src="linkedin.svg" alt="" className="w-[20px] h-full object-cover" />
                                        </span>
                                        <span className="p-[10px] rounded-[50%] bg-[#B7AD9C] mx-1">
                                            <img src="twitter.svg" alt="" className="w-[20px] h-full object-cover" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}
