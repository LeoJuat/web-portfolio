import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import styles from "./Contact.module.css";

const Contact = ({ contactRef, contactIsIntersecting }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { ref: line1Ref, inView: line1IsIntersecting } = useInView();
  const { ref: line2Ref, inView: line2IsIntersecting } = useInView();
  const { ref: formRef, inView: formIsIntersecting } = useInView();
  const { ref: lineRef, inView: lineIsIntersecting } = useInView();
  const { ref: linksRef, inView: linksIsIntersecting } = useInView();
  const { ref: footerRef, inView: footerIsIntersecting } = useInView();

  const submitHandler = async (e) => {
    e.preventDefault();

    const contactData = {
      name: name,
      email: email,
      message: message,
    };

    const res = await fetch(
      `https://leo-juat-portfolio-website-default-rtdb.firebaseio.com/contactData.json`,
      {
        method: "POST",
        body: JSON.stringify(contactData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await res.json();

    setSubmitted(true);
    return data;
  };

  return (
    <>
      <section className="pt-24 sm:pt-16 justify-center text-[#f1f3f5] w-3/4 mx-auto h-full mt-10">
        <h3
          ref={contactRef}
          className={`text-base text-[#868e96] tracking-[0.2em] pt-5 ${
            contactIsIntersecting && styles.animateContact
          }`}
        >
          <span className="text-[#fcc419] font-Inconsolata text-base">04.</span>{" "}
          CONTACT
        </h3>
        <hr
          ref={line1Ref}
          className={`h-[1px] border-t border-[#fcc419] w-20 mt-1 ${
            line1IsIntersecting && styles.animateLine1
          }`}
        ></hr>
        <hr
          ref={line2Ref}
          className={`h-[1px] border-t border-[#fcc419] w-12 mt-2 ${
            line2IsIntersecting && styles.animateLine2
          }`}
        ></hr>
        {submitted && (
          <div className="w-full mx-auto mt-24 mb-20 sm:w-3/4 sm:mt-40 sm:mb-40">
            <h1 className={`text-3xl sm:text-6xl mt-0 w-4/6 font-PT sm:mt-7`}>
              Thanks for reaching out, <br /> I will get <br />
              <span className="text-[#fcc419] underline">
                back to you ASAP!
              </span>
            </h1>
            <div
              className={`absolute flex flex-col gap-20 right-5 pt-7 transition-all`}
            ></div>
          </div>
        )}
        {!submitted && (
          <form
            onSubmit={submitHandler}
            ref={formRef}
            className={`mt-24 sm:mt-28 mx-auto ${
              formIsIntersecting && styles.animateForm
            }`}
          >
            <div className="mx-auto lg:w-5/6 md:w-2/3">
              <div className="flex flex-wrap -m-2">
                <div className="w-1/2 p-2">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-sm text-[#868e96] tracking-widest"
                    >
                      Name
                    </label>
                    <input
                      placeholder="example: Leo Juat"
                      onChange={(e) => {
                        return setName(e.target.value);
                      }}
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-gray-100 rounded border border-gray-300 focus:border-[#fcc419] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="w-1/2 p-2">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-[#868e96] tracking-widest"
                    >
                      Email
                    </label>
                    <input
                      placeholder="example: test@test.com"
                      onChange={(e) => {
                        return setEmail(e.target.value);
                      }}
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-gray-100 rounded border border-gray-300 focus:border-[#fcc419] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="w-full p-2">
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="leading-7 text-sm text-[#868e96] tracking-widest"
                    >
                      Message
                    </label>
                    <textarea
                      placeholder="Get in touch with me."
                      onChange={(e) => {
                        return setMessage(e.target.value);
                      }}
                      id="message"
                      name="message"
                      className="w-full bg-gray-100 rounded border border-gray-300 focus:border-[#fcc419] h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </div>
                <div className="w-full p-2">
                  <button
                    type="submit"
                    className="w-full text-white shadow-md bg-[#fcc419] border-0 py-2 px-8 focus:outline-none hover:bg-[#dcae22] rounded text-lg duration-300 ease-in-out"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        )}
      </section>
      <footer>
        <hr
          ref={lineRef}
          className={`h-[1px] border-t border-[#868e96] w-3/4 mx-auto mt-24 sm:mt-36 ${
            lineIsIntersecting && styles.animateLine
          }`}
        ></hr>
        <div
          ref={linksRef}
          className={`flex justify-center gap-5 sm:gap-10 pt-14 transition-all pb-7 ${
            linksIsIntersecting && styles.animateLinks
          }`}
        >
          <a
            href={"https://www.linkedin.com/in/leo-juat/"}
            target="_blank"
            rel="noreferrer"
            className="font-medium tracking-[0.2em] text-xs text-[#868e96] hover:text-[#f1f3f5] duration-300 ease-in-out hover:scale-110"
          >
            LINKEDIN
          </a>
          <a
            href={"https://github.com/LeoJuat"}
            target="_blank"
            rel="noreferrer"
            className="font-medium tracking-[0.2em] text-xs text-[#868e96] hover:text-[#f1f3f5] duration-300 ease-in-out hover:scale-110 border-r border-l px-10 border-[#fcc419]"
          >
            GITHUB
          </a>
          <a
            href={
              "https://drive.google.com/file/d/1Sj9AqCPn143l5Iys1gehYlJSsazwGLvm/view?usp=sharing"
            }
            target="_blank"
            rel="noreferrer"
            className="font-medium tracking-[0.2em] text-xs -mb-3 text-[#868e96] hover:text-[#f1f3f5] duration-300 ease-in-out hover:scale-110"
          >
            RESUME
          </a>
        </div>
        <p
          ref={footerRef}
          className={`text-[#636a71ce] text-center mb-5 ${
            footerIsIntersecting && styles.animateFooter
          }`}
        >
          Designed and Developed by{" "}
          <span
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className={`underline cursor-pointer underline-offset-4`}
          >
            Leo Juat
          </span>
        </p>
      </footer>
    </>
  );
};

export default Contact;
