import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";

const NewsletterForm: React.FC = () => {
  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission

    // Collect the form data
    const formData = new FormData(e.target as HTMLFormElement);

    // Send data to Google Forms
    fetch(
      "https://docs.google.com/forms/d/1GF2tUn4kwLlBMDKIWMMtO-DJrKnh-0mwEuDoAH2f1bs/formResponse",
      {
        method: "POST",
        body: formData,
        mode: "no-cors", // Required for Google Forms
      }
    )
      .then(() => {
        // Show the snackbar after successful submission
        setShowSnackbar(true);

        // Hide the snackbar after 3 seconds
        setTimeout(() => setShowSnackbar(false), 3000);

        // Optionally reset the form
        (e.target as HTMLFormElement).reset();
      })
      .catch((error) => {
        console.error("Error submitting the form:", error);
      });
  };

  return (
    <div>
      <h3 className="font-semibold exo-font text-lg mb-2">
        Join our newsletter
      </h3>
      <p className="text-sm text-gray-700 mb-4 exo-font">
        Get the latest KAMCO updates right in your inbox, join our newsletter
        today!
      </p>
      <div className="flex justify-start items-center">
        <form
          onSubmit={handleSubmit}
          className="relative flex items-center bg-black text-gray-100 px-4 py-2 rounded-full w-96"
        >
          <input
            type="email"
            name="entry.1302336877"
            placeholder="Your email"
            required
            className="flex-grow bg-transparent outline-none text-white placeholder:text-gray-400 px-3"
          />
          <motion.button
            whileHover={{
              x: 5,
              color: "black",
            }}
            whileTap={{ scale: 0.9 }}
            type="submit"
            className="bg-[#A5F400] text-black rounded-full w-10 h-10 flex justify-center items-center"
          >
            <HiArrowRight />
          </motion.button>
        </form>
      </div>

      {showSnackbar && (
        <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded shadow">
          Form submitted successfully!
        </div>
      )}
    </div>
  );
};

export default NewsletterForm;
