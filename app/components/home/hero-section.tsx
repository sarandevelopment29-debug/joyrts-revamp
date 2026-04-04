import { motion, type MotionValue } from "framer-motion";
import type { RefObject } from "react";

import { sectionMotion } from "./constants";

type HeroSectionProps = {
  heroParallaxY: MotionValue<number>;
  flowCanvasRef: RefObject<HTMLDivElement | null>;
  flowWireSvgRef: RefObject<SVGSVGElement | null>;
};

export default function HeroSection({
  heroParallaxY,
  flowCanvasRef,
  flowWireSvgRef,
}: HeroSectionProps) {
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

        <div className="hero-workflow reveal">
          <div className="hero-tech">
            <div className="flow-header">
              <span>Lead Qualification Automation</span>
              <span>live - 7 nodes</span>
            </div>
            <div className="flow-canvas" ref={flowCanvasRef}>
              <svg className="flow-wires" ref={flowWireSvgRef} viewBox="0 0 760 340" aria-hidden>
                <path data-edge="webhook-ai" />
                <path data-edge="ai-crm" />
                <path data-edge="ai-slack" />
                <path data-edge="ai-gmail" />
                <path data-edge="slack-ticket" />
                <path data-edge="gmail-ticket" />
                <path data-edge="ticket-end" />
              </svg>

              <span className="flow-packet p1" />
              <span className="flow-packet p2" />
              <span className="flow-packet p3" />

              <div className="flow-node webhook" data-node="webhook">
                <b>Webhook</b>
                <small>New lead submitted</small>
              </div>

              <div className="flow-node ai" data-node="ai">
                <b>AI Agent</b>
                <small>Score + summarize lead</small>
              </div>

              <div className="flow-node crm" data-node="crm">
                <b>CRM</b>
                <small>Create / update contact</small>
              </div>

              <div className="flow-node slack" data-node="slack">
                <b>Slack</b>
                <small>Notify sales channel</small>
              </div>

              <div className="flow-node gmail" data-node="gmail">
                <b>Gmail</b>
                <small>Send follow-up sequence</small>
              </div>

              <div className="flow-node ticket" data-node="ticket">
                <b>Deal Ticket</b>
                <small>Open pipeline task</small>
              </div>

              <div className="flow-node end" data-node="end">
                <b>Workflow Complete</b>
                <small>Handoff to sales rep</small>
              </div>

              <div className="flow-legend">
                <span>
                  <i className="ok" /> AI score: 92/100
                </span>
                <span>
                  <i className="mid" /> Segment: enterprise
                </span>
                <span>
                  <i className="ok" /> SLA: 2m response
                </span>
              </div>
            </div>
          </div>
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
