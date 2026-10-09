// Contact.js
import React, { useState } from "react";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const emailValidation = (email) =>
    String(email).toLocaleLowerCase().match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);

  const handleSend = (e) => {
    e.preventDefault();
    setErrMsg("");
    setSuccessMsg("");

    if (username === "") return setErrMsg("Username is required!");
    if (phoneNumber === "") return setErrMsg("Phone number is required!");
    if (email === "") return setErrMsg("Please give your Email!");
    if (!emailValidation(email)) return setErrMsg("Give a valid Email!");
    if (subject === "") return setErrMsg("Please give your Subject!");
    if (message === "") return setErrMsg("Message is required!");

    const templateParams = {
      from_name: username,
      from_email: email,
      phone: phoneNumber,
      subject: subject,
      message: message,
    };

    // 🔹 Replace these IDs with your EmailJS credentials
    const SERVICE_ID = "service_jx9h5tq";
    const TEMPLATE_ID = "template_1uv824k";
    const PUBLIC_KEY = "P5JxexiyC0_2DB9t9";

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSuccessMsg(`Thank you ${username}, your message has been sent successfully!`);
          setUsername("");
          setPhoneNumber("");
          setEmail("");
          setSubject("");
          setMessage("");
        },
        (err) => {
          console.error("FAILED...", err);
          setErrMsg("Failed to send message. Please try again later.");
        }
      );
  };

  const baseInputStyle =
    "w-full rounded-lg bg-transparent px-4 text-lg text-gray-200 outline-none transition-all duration-300 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400";
  const baseLabelStyle =
    "text-sm text-gray-300 uppercase tracking-wide h-6 leading-6";

  return (
    <section id="contact" className="w-full py-20 border-b border-b-gray-800 bg-gray-900 text-white">
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact With Me" />
      </div>

      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between gap-6">
          <ContactLeft />

          <div className="w-full lgl:w-[60%] py-10 bg-gradient-to-r from-[#212428] to-[#141518] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-2xl">
            <form className="w-full flex flex-col py-2 lgl:py-5" onSubmit={handleSend}>
              {(errMsg || successMsg) && (
                <p
                  className={`py-3 text-center text-base tracking-wide rounded-md mb-6 ${
                    errMsg
                      ? "bg-red-900/50 text-red-400 shadow-md"
                      : "bg-green-900/50 text-green-400 shadow-md"
                  }`}
                >
                  {errMsg || successMsg}
                </p>
              )}

              {/* Name & Phone */}
              <div className="w-full flex flex-col lgl:flex-row gap-6 mb-6">
                <div className="w-full lgl:w-1/2 flex flex-col">
                  <label className={baseLabelStyle} htmlFor="username">Your name</label>
                  <input
                    id="username"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    className={`${baseInputStyle} h-12 border-b border-b-gray-600 mt-1 ${
                      errMsg === "Username is required!" ? "border-red-500 ring-1 ring-red-500" : ""
                    }`}
                    type="text"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="w-full lgl:w-1/2 flex flex-col">
                  <label className={baseLabelStyle} htmlFor="phone">Phone Number</label>
                  <input
                    id="phone"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                    className={`${baseInputStyle} h-12 border-b border-b-gray-600 mt-1 ${
                      errMsg === "Phone number is required!" ? "border-red-500 ring-1 ring-red-500" : ""
                    }`}
                    type="text"
                    placeholder="e.g., +92 300 0000000"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col mb-6">
                <label className={baseLabelStyle} htmlFor="email">Email</label>
                <input
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className={`${baseInputStyle} h-12 border-b border-b-gray-600 mt-1 ${
                    (errMsg === "Please give your Email!" || errMsg === "Give a valid Email!") &&
                    "border-red-500 ring-1 ring-red-500"
                  }`}
                  type="email"
                  placeholder="your@email.com"
                />
              </div>

              {/* Subject */}
              <div className="flex flex-col mb-6">
                <label className={baseLabelStyle} htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  className={`${baseInputStyle} h-12 border-b border-b-gray-600 mt-1 ${
                    errMsg === "Please give your Subject!" && "border-red-500 ring-1 ring-red-500"
                  }`}
                  type="text"
                  placeholder="Subject of message"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col mb-6">
                <label className={baseLabelStyle} htmlFor="message">Message</label>
                <textarea
                  id="message"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  className={`${baseInputStyle} h-36 resize-none border-b border-b-gray-600 py-3 mt-1 ${
                    errMsg === "Message is required!" && "border-red-500 ring-1 ring-red-500"
                  }`}
                  placeholder="Write your message..."
                ></textarea>
              </div>

              <div className="w-full">
                <button
                  type="submit"
                  className="w-full h-12 bg-indigo-600/20 text-indigo-400 rounded-lg text-base tracking-wider uppercase hover:bg-indigo-600 hover:text-white duration-300 font-semibold shadow-xl"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
