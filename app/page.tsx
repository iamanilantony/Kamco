export default function Home() {
  return (
    <>
      <div className="px-4">
        <h1 style={{ fontWeight: '700' }} className="text-4xl my-5 md:my-0 md:text-5xl max-w-4xl leading-[3rem] md:leading-[4rem] mx-auto tracking-normal text-gray-900 text-center"> Resorts, as <span className="bg-[#DAEEBC] px-2 rounded-xl p-1">responsible</span>as you are!
        </h1>
        <p className="mt-0 md:mt-4 mb-8 text-gray-500 max-w-4xl mx-auto text-lg md:text-[1.3rem] tracking-loose md:px-20" style={{ fontWeight: '500' }}>
        Exquisitely crafted <span className="text-[#B7AD9C] font-bold rounded-md" style={{ fontWeight: '700' }}>hospitality</span> seamlessly combining engineering and Innovation for Environment Conservation 
        </p>

        <div className="mt-10 md:mt-20 flex flex-col md:flex-row justify-center items-center gap-4 px-6 md:px-8 h-auto">
          {/* Image Card 1 */}
          <div className="rounded-[8%] h-64 w-full md:w-[27%]">
            <img src="eco-luxury.svg" alt="Eco-Luxury" className="w-full h-full object-cover rounded-[8%]" />
          </div>

          {/* Text Card 1 */}
          <div className="flex bg-[#DAEEBC] p-6 rounded-[8%] text-center shadow-md h-80 items-center justify-center w-full md:w-[31%]">
            <div className="mb-8 md:mb-0 justify-center items-center text-left text-black text-base">
              <h3 className="text-3xl font-bold text-gray-800 text-left mb-5">100% Eco-friendly, Affordable Luxury</h3>
              <p className="mt-2 text-gray-600 font-semibold">
              Discover sustainable comfort without compromise, where every detail is thoughtfully designed to reduce environmental impact while offering an unparalleled luxury experience.
              </p>
            </div>
          </div>

          {/* Image Card 2 */}
          <div className="rounded-[8%] shadow-md h-full w-full md:w-[38%]">
            <img src="eco-luxury2.svg" alt="Next-Gen Green Innovation" className="w-full h-full object-cover rounded-[8%]" />
          </div>

          {/* Text Card 2 */}
          <div className="flex bg-[#B7AD9C] p-6 rounded-[8%] text-center shadow-md h-80 items-center justify-center w-full md:w-[31%]">
            <div className="justify-center items-center text-left text-black text-base">
              <h3 className="text-3xl font-bold text-gray-800 text-left mb-5">The highest sustainability standards</h3>
              <p className="mt-2 text-gray-600 font-semibold">
              Our resorts are committed to exceptional eco-conscious practices, adhering to the highest global sustainability benchmarks to ensure a positive impact on our planet and communities.
              </p>
            </div>
          </div>

          {/* Image Card 3 */}
          {/* <div className="h-full"> */}
          <div className="rounded-[8%] h-64 w-full md:w-[27%]">
            <img src="eco-luxury3.svg" alt="Eco-Luxury" className="w-full h-full object-cover rounded-[8%]" />
          </div>
          {/* </div> */}
        </div>
        <button className="mt-5 md:mt-20 bg-[#B7AD9C] text-black py-2 px-10 rounded-[20px] hover:bg-[#DAEEBC] mb-4 md:mb-0">
          <div className="flex w-full">
            <span className="font-semibold text-sm md:text-xl">
              Explore
            </span>
            <span>
              <img src="info_circle.svg" alt="Next-Gen Green Innovation" className="w-16px md:w-[24px] h-full ml-2" />
            </span>
          </div>
        </button>
      </div>
      <div className="mt-20 md:mt-40 flex flex-col md:flex-row md:px-40">
        <div className="flex-1">
          <img src="eco-luxury4.svg" alt="Next-Gen Green Innovation" className="w-full h-full ml-2 px-10" />
        </div>
        <div className="flex-1 flex flex-col align-center justify-center h-100 md:ml-20 mx-8 mt-10 md:mt-0 px-5 md:px-0">
          <h4 className="text-[1.2rem] md:text-[3rem] font-bold text-left"> <span className="bg-[#DAEEBC] md:p-2 p-1 rounded-xl">Ekotel:</span> Where Elegance Embraces Nature</h4>
          <p className="text-left text-[0.9rem] md:text-[1.35rem] max-w-xl">Our Proprietary Technology helps build in a <span className="text-[#B7AD9C] font-bold rounded-md" style={{ fontWeight: '700' }}>100% environment friendly</span> and energy efficient way. Completely Energy neutral resorts driven completely by <span className="text-[#B7AD9C] font-bold rounded-md" style={{ fontWeight: '700' }}>renewable energy sources.</span> Empowering local communities and cultures. </p>
          <button className="mt-5 w-1/3 bg-transparent border-2 border-gray-400 text-gray-500 py-2 text-[0.8rem] md:text-[1.2rem] font-[700] rounded-[20px] hover:bg-[#DAEEBC]">
            About Us
          </button>
        </div>
      </div>
      <div className="mt-10 md:mt-20 flex md:px-40 md:flex-row flex-col mb-10 md:mb-0">
        <div className="flex-1 flex flex-col align-center justify-center h-100 ml-10">
          <h4 className="md:text-[3rem] text-[1rem] font-bold text-left">  Explore the exception at <span className="bg-[#B7AD9C] p-2 rounded-[30px]">Ekotel Resorts</span></h4>
        </div>
        <div className="flex-1 flex flex-col align-center justify-center h-100 ml-10 md:ml-20 mt-5 md:mt-0">
          <p className="text-left text-[0.8rem] md:text-[1.35rem] max-w-xl text-[700]">At Ekotel Resorts, we prioritize sustainability without compromising comfort. Our innovative approach ensures that your vacation is both enjoyable and eco-friendly.</p>
        </div>
      </div>
      <div className="md:mt-20 flex flex-col md:flex-row bg-[#DAEEBC] w-full md:px-40">
        <div className="flex-1 flex flex-col align-left justify-start h-64 md:h-100 mx-2 md:ml-20 py-4 md:py-10 text-left">
          <p className="text-[2.5rem] font-[700]">01</p>
          <p className="text-[1.3rem] font-[600] mb-2">Affordable & Eco-Friendly</p>
          <p className="text-left text-[0.9rem] md:text-[1.20rem] max-w-[32] text-gray-600" style={{ fontWeight: 500 }}>Experience luxurious stays that are budget-friendly and environmentally conscious.</p>
        </div>
        <div className="flex-1 flex flex-col align-left justify-start h-64 md:h-100 mx-2 md:ml-20 py-4 md:py-10 text-left">
          <p className="text-[2.5rem] font-[700]">02</p>
          <p className="text-[1.3rem] font-[600] mb-2">Innovative Technology</p>
          <p className="text-left text-[0.9rem] md:text-[1.20rem] max-w-[32] text-gray-600" style={{ fontWeight: 500 }}>Our resorts feature cutting-edge technology for a seamless experience.</p>
        </div>
        <div className="flex-1 flex flex-col align-left justify-start h-64 md:h-100 mx-2 md:ml-20 py-4 md:py-10 text-left">
          <p className="text-[2.5rem] font-[700]">03</p>
          <p className="text-[1.3rem] font-[600] mb-2">Prime Locations</p>
          <p className="text-left text-[0.9rem] md:text-[1.20rem] max-w-[32] text-gray-600" style={{ fontWeight: 500 }}>Nestled in breathtaking landscapes, our resorts offer stunning views.</p>
        </div>
      </div>
      <div className="mt-6 md:mt-20 flex flex-col w-full md:px-60 mx-2 md:ml-0">
        <p className="mt-5 w-40 px-4 bg-transparent border-2 border-black text-gray-500 py-2 text-[0.8rem] md:text-[1.2rem] font-[700] rounded-[20px]">
          Our features
        </p>
        <h4 className="text-[1.2rem] md:text-[3rem] font-bold text-left mt-5 md:mt-0">  Sustainability meets <span className="bg-[#DAEEBC] p-2 rounded-[30px]">Luxury</span></h4>
        <div className="flex md:flex-row flex-col">
          <div className="flex-1 flex flex-col align-left justify-start h-100 mr-10 py-10 text-left">
          <img src="lux.svg" alt="Next-Gen Green Innovation" className="h-60 w-full mb-5 h-full object-cover rounded-[8%]" />
            <p className="text-[1rem] md:text-[1.3rem] font-[600] mb-2">Energy Efficient Rooms For Ultimate Comfort</p>
            <p className="text-left text-[0.9rem] md:text-[1.20rem] max-w-[32] text-gray-600" style={{ fontWeight: 500 }}>Experience luxurious stays that are budget-friendly and environmentally conscious.</p>
          </div>
          <div className="flex-1 flex flex-col align-left justify-start h-100 mr-10 py-10 text-left">
          <img src="lux2.svg" alt="Next-Gen Green Innovation" className="h-60 w-full mb-5 h-full object-cover rounded-[8%]" />
            <p className="text-[1rem] md:text-[1.3rem] font-[600] mb-2">Natural Construction Materials for Eco-Friendly Living</p>
            <p className="text-left text-[0.9rem] md:text-[1.20rem] max-w-[32] text-gray-600" style={{ fontWeight: 500 }}>Our resorts utilize bamboo and other sustainable materials.</p>
          </div>
          <div className="flex-1 flex flex-col align-left justify-start h-100 mr-10 py-10 text-left">
          <img src="lux3.svg" alt="Next-Gen Green Innovation" className="h-60 w-full mb-5 h-full object-cover rounded-[8%]" />
            <p className="text-[1rem] md:text-[1.3rem] font-[600] mb-2">Modern Amenities for a Luxurious Experience</p>
            <p className="text-left text-[0.9rem] md:text-[1.20rem] max-w-[32] text-gray-600" style={{ fontWeight: 500 }}>Indulge in spa treatments, swimming pools, and nature walks.</p>
          </div>
        </div>
      </div>
      <div className="mt-20 md:mt-40 flex md:flex-row flex-col md:px-40">
        <div className="flex-1 flex flex-col align-center justify-center h-100 md:ml-20 ml-4 pl-2">
          <h4 className="text-[1rem] md:text-[3rem] font-bold text-left"> <span className="bg-[#DAEEBC] p-2 rounded-xl">Sustainability:</span> at the Core of Ekotel</h4>
          <p className="text-left text-[0.9rem] md:text-[1.35rem] max-w-xs md:max-w-xl my-4  md:mt-0">At Ekotel, we prioritize sustainability through innovative building practices. Our use of bamboo and prefabricated materials not only reduces construction costs by 40% but also minimizes our environmental footprint.</p>
        </div>
        <div className="flex-1">
          <img src="eco-luxury4.svg" alt="Next-Gen Green Innovation" className="w-full h-full md:ml-2 md:px-10 px-6" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-start p-8 md:p-16 bg-white mt-4 md:mt-40">
            {/* Contact Info Section */}
            <div className="md:w-1/3 flex-1 mb-8 md:mb-0 text-left mx-6 md:mx-40 mt-20">
                <h2 className="text-5xl font-bold mb-4">Get in Touch</h2>
                <p className="text-lg mb-4">We’d love to hear from you!</p>
                <div className="text-gray-600 space-y-2">
                    <p>info@ekotelresorts.com</p>
                    <p>+91 94000 00000</p>
                    <p>Location, Location</p>
                </div>
            </div>

            {/* Contact Form Section */}
            <div className="w-full md:w-2/3 flex-1 mr-40 mt-20 md:mt-0">
                <form className="space-y-6 text-left">
                    {/* Name Field */}
                    <div>
                        <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full p-3 border border-gray-300 rounded"
                            placeholder="Your Name"
                        />
                    </div>

                    {/* Email Field */}
                    <div>
                        <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full p-3 border border-gray-300 rounded"
                            placeholder="Your Email"
                        />
                    </div>

                    {/* Message Field */}
                    <div>
                        <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            className="w-full p-3 border border-gray-300 rounded"
                            placeholder="Your Message"
                            // rows="4"
                        ></textarea>
                    </div>

                    {/* Checkbox and Submit Button */}
                    <div className="flex items-center space-x-4">
                        <input type="checkbox" id="terms" className="h-4 w-4" />
                        <label htmlFor="terms" className="text-gray-700">I agree to Terms</label>
                    </div>
                    <button
                        type="submit"
                        className="px-6 py-2 bg-[#B4A081] text-white rounded hover:bg-[#A69070] transition duration-200"
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    </>
  )
}
