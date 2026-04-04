import { motion } from "framer-motion";

import { sectionMotion, TECH_STACKS } from "./constants";

export default function TechstackSection() {
  return (
    <motion.section className="section-techstack" id="tech-stack" {...sectionMotion}>
      <div className="section-sweep" aria-hidden />
      <div className="section-label reveal">Tech Stacks</div>
      <div className="techstack-head reveal">
        <h2>Built On Modern AI Infrastructure</h2>
        <p>
          Production-grade stack for orchestration, agentic intelligence, observability, and
          high-speed execution.
        </p>
      </div>
      <div className="techstack-marquee">
        <div className="tech-track">
          {[...TECH_STACKS, ...TECH_STACKS].map((stack, index) => (
            <div className="tech-card" key={`${stack.name}-${index}`}>
              <span className="tech-mark">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://cdn.simpleicons.org/${stack.icon}/f0ece4`}
                  alt={`${stack.name} logo`}
                  loading="lazy"
                  onError={(event) => {
                    const target = event.currentTarget;
                    target.style.display = "none";
                    const fallback = target.nextElementSibling as HTMLElement | null;
                    if (fallback) {
                      fallback.style.display = "inline-flex";
                    }
                  }}
                />
                <span className="tech-mark-fallback">{stack.mark}</span>
              </span>
              <span className="tech-name">{stack.name}</span>
            </div>
          ))}
        </div>
        <div className="tech-track reverse">
          {[...TECH_STACKS.slice(8), ...TECH_STACKS.slice(0, 8), ...TECH_STACKS].map(
            (stack, index) => (
              <div className="tech-card" key={`rev-${stack.name}-${index}`}>
                <span className="tech-mark">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://cdn.simpleicons.org/${stack.icon}/f0ece4`}
                    alt={`${stack.name} logo`}
                    loading="lazy"
                    onError={(event) => {
                      const target = event.currentTarget;
                      target.style.display = "none";
                      const fallback = target.nextElementSibling as HTMLElement | null;
                      if (fallback) {
                        fallback.style.display = "inline-flex";
                      }
                    }}
                  />
                  <span className="tech-mark-fallback">{stack.mark}</span>
                </span>
                <span className="tech-name">{stack.name}</span>
              </div>
            ),
          )}
        </div>
      </div>
    </motion.section>
  );
}
