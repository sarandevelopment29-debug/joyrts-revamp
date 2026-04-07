import { motion, type MotionValue } from "framer-motion";

import { sectionMotion } from "./constants";

type HeroSectionProps = {
  heroParallaxY: MotionValue<number>;
};

export default function HeroSection({ heroParallaxY }: HeroSectionProps) {
  return (
    <motion.section className="hero" id="hero" {...sectionMotion}>
      <div className="section-sweep" aria-hidden />
      <div className="hero-main">
        <div className="hero-copy">
          <div className="hero-eyebrow reveal">AI Driven Automation Platform</div>
          <motion.h1 className="hero-title" style={{ y: heroParallaxY }}>
            <span className="split-line" data-split>
              JOY
            </span>
            <br />
            <span className="outline split-line" data-split>
              RTS
            </span>
          </motion.h1>
          <p className="hero-sub reveal">
            Autonomous systems that think faster than humans, move smarter than machines, and
            scale beyond limits.
          </p>
          <motion.a
            href="#what"
            className="hero-cta reveal"
            whileHover={{ x: 8, skewX: -4 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 380, damping: 23 }}
          >
            Explore Platform <span className="arr">-&gt;</span>
          </motion.a>
        </div>
      </div>
      <div className="hero-stat-row reveal">
        <div className="hero-stat">
          <label>Automation Rate</label>
          <strong>98.6%</strong>
        </div>
        <div className="hero-stat">
          <label>Latency</label>
          <strong>&lt;3ms</strong>
        </div>
        <div className="hero-stat">
          <label>Uptime</label>
          <strong>99.99%</strong>
        </div>
      </div>
    </motion.section>
  );
}
