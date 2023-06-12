import React, { useState } from "react";
import Title from "../layouts/title";
import ContactLeft from "./contactLeft";

const Contact = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMgs, setSuccessMsg] = useState("");

  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (username === "") {
      setErrMsg("Please write your name.");
    } else if (phoneNumber === "") {
      setErrMsg("Please write your phone number.");
    } else if (email === "") {
      setErrMsg("Please write your email.");
    } else if (!emailValidation(email)) {
      setErrMsg("Please write a valid email.");
    } else if (subject === "") {
      setErrMsg("Please write a subject.");
    } else if (message === "") {
      setErrMsg("Please write a message.");
    } else {
      setSuccessMsg(`Thank you, ${username}, your message has been sent successully`);
      setErrMsg("");
      setUsername("");
      setPhoneNumber("");
      setEmail("");
      setSubject("");
      setMessage("");
      console.log(username, phoneNumber, email, message, subject);
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title des="CONTACT ME" />
      </div>
      <div className="w-full ">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <ContactLeft />
          <div className="w-full lgl:w-[60%] h-full  py-10 bg-gradient-to-r from-[#1e2024] to-[#2327b9]flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne ">
            <form className="w-full px-10 flex flex-col gap-2 lgl:gap-6 py-2 ">
              {errMsg ? (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              ) : null}
              {successMgs ? (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMgs}
                </p>
              ) : null}
              <div className="w-full flex flex-col lgl:flex-row gap-4 lgl:gap-10">
                <div className="w-full lgl:w-1/2 flex flex-col gap-4 ">
                  <p className="text-sm text-gray-400 uppercase tracking-white">
                    Your Name
                  </p>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    className={`${
                      errMsg && username === "" ? "outline-red" : ""
                    } contactInput`}
                    type="text"
                  ></input>
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col gap-4 ">
                  <p className="text-sm text-gray-400 uppercase tracking-white">
                    Phone number
                  </p>
                  <input
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                    className={`${
                      errMsg && phoneNumber === "" ? "outline-red" : ""
                    } contactInput`}
                    type="text"
                  ></input>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-white">
                  Email
                </p>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className={`${
										errMsg && email === "" ? "outline-red" : ""
									} contactInput`}
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-white">
                  Subject
                </p>
                <input
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  className={`${
										errMsg && subject === "" ? "outline-red" : ""
									} contactInput`}
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-white">
                  Message
                </p>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  className={`${
										errMsg && message === "" ? "outline-red" : ""
									} contactInput`}
                  cols="30"
                  rows="8"
                ></textarea>
              </div>
              <div className="w-full">
                <button
                  onClick={handleSend}
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercaase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                >
                  Send Message
                </button>
              </div>
              {errMsg ? (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              ) : null}
              {successMgs ? (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMgs}
                </p>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
