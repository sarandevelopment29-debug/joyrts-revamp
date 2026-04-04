import { motion } from "framer-motion";

import { sectionMotion } from "./constants";

export default function ContactSection() {
  return (
    <motion.section className="section-contact" id="contact" {...sectionMotion}>
      <div className="section-sweep" aria-hidden />
      <div className="contact-grid">
        <div className="contact-left reveal">
          <h2>
            Let&apos;s
            <br />
            Automate
            <br />
            Your World.
          </h2>
          <p>
            From a single workflow to full enterprise orchestration - JOYRTS gets you there without
            the guesswork.
          </p>
        </div>
        <div className="contact-right reveal">
          <div className="input-row">
            <label htmlFor="full-name">Full Name</label>
            <input id="full-name" type="text" placeholder="Jane Doe" />
          </div>
          <div className="input-row">
            <label htmlFor="work-email">Work Email</label>
            <input id="work-email" type="email" placeholder="jane@company.com" />
          </div>
          <div className="input-row">
            <label htmlFor="automation-goal">Tell us what to automate</label>
            <textarea id="automation-goal" rows={3} placeholder="We want to automate..." />
          </div>
          <motion.button
            className="contact-btn"
            type="button"
            whileHover={{ x: 6, scale: 1.01, skewX: -3 }}
            whileTap={{ scale: 0.985 }}
            transition={{ type: "spring", stiffness: 360, damping: 24 }}
          >
            Send Request -&gt;
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
}
