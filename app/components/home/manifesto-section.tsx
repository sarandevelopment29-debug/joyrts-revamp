import { motion } from "framer-motion";

import { sectionMotion } from "./constants";

export default function ManifestoSection() {
  return (
    <motion.section className="section-manifesto" {...sectionMotion}>
      <div className="section-sweep" aria-hidden />
      <div className="manifesto-text reveal" data-split>
        THE FUTURE DOESN&apos;T
        <br />
        WAIT - NEITHER
        <br />
        SHOULD YOUR
        <br />
        OPERATIONS.
      </div>
    </motion.section>
  );
}
