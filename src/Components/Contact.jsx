import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Refs for input fields
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    if (!formData.name || !formData.email || !formData.message) {
      setError("All fields are required!");
      return;
    }

    // Send email with EmailJS
    emailjs
      .send(
        "service_02qmmzv", // Service ID from EmailJS
        "template_4lcxnjo", // Template ID from EmailJS
        formData, // Form data to send
        process.env.PUBLIC_KEY // User ID from EmailJS
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          setIsSubmitted(true);
          setError(""); // Reset error message
        },
        (error) => {
          console.log("Error sending email:", error);
          setError("Failed to send the message. Please try again later.");
        }
      );
  };

  // Handle key press to move focus to the next field
  const handleKeyPress = (e, nextFieldRef) => {
    if (e.key === "Enter" && nextFieldRef.current) {
      nextFieldRef.current.focus();
    }
  };

  return (
    <div className="relative z-40 min-h-screen text-white flex items-center justify-center">
      <motion.div
        className="w-full max-w-lg p-8 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 rounded-lg shadow-lg"
        animate={{ scale: [1, 1.05, 1] }}
        exit={{ opacity: 0, y: 50 }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      >
        <h2 className="text-3xl font-semibold mb-6 text-center">Hire Me</h2>
        {isSubmitted ? (
          <div className="text-center">
            <p className="text-xl">
              Thank you for reaching out! I'll get back to you soon.
            </p>
          </div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {error && <p className="text-red-500 text-center">{error}</p>}
            <motion.div
              initial={{ opacity: 0, z: 300 }}
              whileInView={{ opacity: 1, z: 0, transition: { duration: 1.5 } }}
              className="mb-4"
            >
              <label htmlFor="name" className="block text-lg font-medium mb-2">
                Name
              </label>
              <input
                ref={nameRef} // Add ref to the Name input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 bg-gray-700 rounded-lg text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
                onKeyDown={(e) => handleKeyPress(e, emailRef)} // Move focus on Enter
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, z: 300 }}
              whileInView={{ opacity: 1, z: 0, transition: { duration: 1.5 } }}
              className="mb-4"
            >
              <label htmlFor="email" className="block text-lg font-medium mb-2">
                Email
              </label>
              <input
                ref={emailRef} // Add ref to the Email input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 bg-gray-700 rounded-lg text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
                onKeyDown={(e) => handleKeyPress(e, messageRef)} // Move focus on Enter
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, z: 300 }}
              whileInView={{ opacity: 1, z: 0, transition: { duration: 1.5 } }}
              className="mb-4"
            >
              <label
                htmlFor="message"
                className="block text-lg font-medium mb-2"
              >
                Message
              </label>
              <textarea
                ref={messageRef} // Add ref to the Message textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full p-3 bg-gray-700 rounded-lg text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              ></textarea>
            </motion.div>
            <div className="text-center">
              <motion.button
                type="submit"
                className="bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Submit
              </motion.button>
            </div>
          </motion.form>
        )}
      </motion.div>
    </div>
  );
}
