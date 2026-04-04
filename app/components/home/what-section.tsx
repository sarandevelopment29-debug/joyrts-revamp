import { motion } from "framer-motion";

import { sectionMotion } from "./constants";

const FEATURES = [
  {
    title: "Adaptive Intelligence",
    description:
      "Models that evolve with your business logic, learning patterns from real workflows and self-correcting in production.",
  },
  {
    title: "Autonomous Pipelines",
    description:
      "Zero-touch orchestration from data ingestion to decision output. Build it once. Let it run forever.",
  },
  {
    title: "Edge Deployment",
    description:
      "Ship AI to the edge, not the cloud. Sub-millisecond inference at every node, every time.",
  },
  {
    title: "Real-Time Signals",
    description:
      "Monitor, react, and reroute - our platform reads operational telemetry and acts before humans notice.",
  },
];

export default function WhatSection() {
  return (
    <motion.section className="section-what" id="what" {...sectionMotion}>
      <div className="section-sweep" aria-hidden />
      <div className="section-label reveal">What We Build</div>
      <div className="what-grid">
        <div className="what-left reveal">
          <h2>
            Machines That
            <br />
            Actually
            <br />
            Think
          </h2>
        </div>
        <div className="what-right">
          {FEATURES.map((feature, index) => (
            <div className="feature-item reveal" key={feature.title}>
              <div className={`feature-index${index === FEATURES.length - 1 ? " end" : ""}`}>
                <span className="feature-num">{(index + 1).toString().padStart(2, "0")}</span>
                <span className="feature-connector" aria-hidden />
              </div>
              <div className="feature-text">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
