import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Animatedbutton from "@/components/new_ui/animatedbutton";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [showSnackbar, setShowSnackbar] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    // Start the animation when the component mounts
    controls.start("visible");
  }, [controls]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission

    // Collect form data
    const formDataToSubmit = new FormData(e.target as HTMLFormElement);

    // Send data to Google Forms
    fetch(
      "https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse", // Replace with your Google Form URL
      {
        method: "POST",
        body: formDataToSubmit,
        mode: "no-cors", // Required for Google Forms
      }
    )
      .then(() => {
        // Show the snackbar after successful submission
        setShowSnackbar(true);

        // Hide the snackbar after 3 seconds
        setTimeout(() => setShowSnackbar(false), 3000);

        // Optionally reset the form
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Error submitting the form:", error);
      });
  };

  return (
    <div id="connect" className="flex-1">
      <motion.div
        animate={controls}
        initial="hidden"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="space-y-6 flex flex-col justify-start items-center w-full"
      >
        {/* <h1
               style={{
                  textWrap: 'nowrap',
               }}
               className='text-3xl md:text-5xl text-center font-bold mb-1 urbanist-font'
            >
               Connect With Us
            </h1> */}

        <h2 className="mb-4 text-2xl !text-left font-bold tracking-tight text-[#274321] sm:text-3xl lg:text-4xl">
          Connect With Us
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 w-full md:flex md:flex-col justify-center items-center"
        >
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-200"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-200"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-200"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-200"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />
          {/* <button className="bg-[#c0eba6] py-3 md:py-5 px-8 md:px-16 rounded-2xl text-xl md:text-2xl urbanist-font">
            Submit
          </button> */}

          <motion.button
            type="submit"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, scale: 0.5 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.5, delay: 0.1 }, // Adjust delay as needed
              },
            }}
            className="w-40 bg-[#d7ffbf] hover:bg-green-200 text-green-800 font-medium py-3 px-6 rounded-lg transition-colors"
          >
            Submit
          </motion.button>
        </form>
      </motion.div>

      {/* Snackbar Notification */}
      {showSnackbar && (
        <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded shadow">
          Form submitted successfully!
        </div>
      )}
    </div>
  );
};

export default ContactForm;
