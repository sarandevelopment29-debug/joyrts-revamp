import { motion } from "framer-motion";

import { sectionMotion } from "./constants";

const INDUSTRIES = [
  {
    title: "Property Management",
    tag: "Sector 01",
    blurb:
      "Automate tenant communication, rent follow-ups, and maintenance routing without adding headcount.",
    points: ["Lease workflow orchestration", "Smart ticket triage + dispatch"],
  },
  {
    title: "Contact Center and Support",
    tag: "Sector 02",
    blurb:
      "Blend AI agents with human teams to resolve requests faster across voice, chat, and email channels.",
    points: ["Intent-aware case routing", "24/7 multilingual response ops"],
  },
  {
    title: "HR and People Ops",
    tag: "Sector 03",
    blurb:
      "Streamline hiring to onboarding while keeping policy, compliance, and employee journeys consistent.",
    points: ["Recruitment pipeline automation", "Employee lifecycle workflows"],
  },
  {
    title: "Logistics",
    tag: "Sector 04",
    blurb:
      "Coordinate shipments, exceptions, and ETA updates in real time to reduce delays and manual escalations.",
    points: ["Dispatch and reroute logic", "Live SLA and delay monitoring"],
  },
  {
    title: "Retail and E-commerce",
    tag: "Sector 05",
    blurb:
      "Unify storefront, warehouse, and support automations to improve fulfillment speed and customer retention.",
    points: ["Order-to-fulfillment automation", "Post-purchase engagement flows"],
  },
];

export default function IndustriesSection() {
  return (
    <motion.section className="section-industries" id="industries" {...sectionMotion}>
      <div className="section-sweep" aria-hidden />
      <div className="industries-head reveal">
        <div className="section-label">Industries We Focus</div>
        <h2>
          Five Sectors For
          <span> Intelligent Automation</span>
        </h2>
        <p>
          Purpose-built AI systems designed for operational teams that need speed, precision, and
          measurable outcomes.
        </p>
      </div>

      <div className="industries-rail reveal" aria-hidden>
        <div className="industries-line" />
        {INDUSTRIES.map((_, index) => (
          <span key={`dot-${index + 1}`} className="industries-dot">
            {(index + 1).toString().padStart(2, "0")}
          </span>
        ))}
      </div>

      <div className="industries-grid">
        {INDUSTRIES.map((industry, index) => (
          <article className="industry-card reveal" key={industry.title}>
            <span className="industry-tag">{industry.tag}</span>
            <div className="industry-index">{(index + 1).toString().padStart(2, "0")}</div>
            <h3>{industry.title}</h3>
            <p>{industry.blurb}</p>
            <ul>
              {industry.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </motion.section>
  );
}
