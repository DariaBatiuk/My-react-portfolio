import React from "react";
import Title from "../layouts/title";
import contactImg from "../../assets/images/contact.jpg";
const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title des="Contact me" />
      </div>
      <div className="w-full">
        <div className="w-full h-[500px] flex justify-between">
          <div className="w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 ">
						<img src={contactImg} className="w-full h-64 object-cover rounded-lg mb-2" alt="contactImg"
						/>
					</div>

          <div className="w-[60%] h-full flex flex-col justify-between"></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
