import { motion } from "framer-motion";

import { sectionMotion } from "./constants";

const CLIENT_REGIONS = [
  {
    label: "North America",
    city: "Canada",
    note: "Enterprise automation rollouts for property and logistics teams.",
  },
  {
    label: "United States Hub",
    city: "New York",
    note: "Customer support intelligence and revenue workflows at scale.",
  },
  {
    label: "Engineering Core",
    city: "India",
    note: "AI model operations, orchestration pipelines, and platform delivery.",
  },
];

export default function GlobalMapSection() {
  return (
    <motion.section className="section-global-map" id="global-presence" {...sectionMotion}>
      <div className="section-sweep" aria-hidden />
      <div className="global-map-head reveal">
        <div className="section-label">Global Presence</div>
        <h2>
          Where ideas ship
          <span> across continents</span>
        </h2>
        <p>
          Our client network is active across North America and Asia, connected by one delivery
          engine and one automation standard.
        </p>
      </div>

      <div className="global-map-stage reveal">
        <div className="global-map-cards">
          {CLIENT_REGIONS.map((region) => (
            <article className="global-map-card reveal" key={region.city}>
              <small>{region.label}</small>
              <h3>{region.city}</h3>
              <p>{region.note}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="global-map-stats reveal">
        <div>
          <strong>03</strong>
          <span>Active Regions</span>
        </div>
        <div>
          <strong>120+</strong>
          <span>Automation Programs</span>
        </div>
        <div>
          <strong>24/7</strong>
          <span>Delivery Continuity</span>
        </div>
      </div>
    </motion.section>
  );
}
