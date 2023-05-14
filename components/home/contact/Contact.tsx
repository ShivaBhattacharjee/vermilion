
import { useState, useRef } from "react";
import { Reveal } from "@/components/utils/Reveal";
import styles from "./contact.module.scss";
import { AiFillMail } from "react-icons/ai";
import Link from "next/link";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const Contact = () => {
  const [message, setMessage] = useState('');
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_PUBLIC_KEY)

      .then((result) => {
        toast.success('Message sent!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      }, (error) => {
        toast.error('Something went wrong', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      });
  };
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <>
    <ToastContainer/>
    <section className="section-wrapper" id="contact">
      <div className={styles.contactWrapper}>
        <Reveal width="100%">
          <h4 className={styles.contactTitle}>
            Contact<span>.</span>
          </h4>
        </Reveal>
        <Reveal width="100%">
          <p className={styles.contactCopy}>
            Shoot me an email if you want to connect! You can also find me on{" "}
            <Link
              href="https://www.instagram.com/immashiva_/"
              target="_blank"
              rel="nofollow"
            >
              Instagram
            </Link>{" "}
            or{" "}
            <Link href="https://www.twitter.com/sh17va" target="_blank" rel="nofollow">
              Twitter
            </Link>{" "}
            if that's more your speed.
          </p>
        </Reveal>
        <Reveal width="100%">
          <Link href="mailto:heyitsshiva@protonmain.me">
            <div className={styles.contactEmail}>
              <AiFillMail size="2.4rem" />
              <span>heyitsshiva@protonmail.me</span>
            </div>
          </Link>
        </Reveal>
        <Reveal width="100%">
          <form autoComplete="false" className={styles.contantForm} ref={form} onSubmit={sendEmail}>
            <div className={styles.inputBox}>
              <input type="text" placeholder="Full Name" autoComplete="off" name="to_name" />
              <input type="email" placeholder="Email Address" autoComplete="false" name="from_name" />
            </div>
            <textarea placeholder="Your Message"
              autoComplete="false"
              name="message"
              value={message}
              onChange={handleMessageChange}></textarea>
            <button type="submit">
              Send
            </button>
          </form>

        </Reveal>
      </div>
    </section>
    </>
  );
};
