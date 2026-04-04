import { motion } from "framer-motion";

import { sectionMotion } from "./constants";

export default function ProcessSection() {
  return (
    <motion.section className="section-process" id="process" {...sectionMotion}>
      <div className="section-sweep" aria-hidden />
      <div className="section-label reveal">How It Works</div>
      <h2 className="reveal">
        Four Steps.
        <br />
        Total Control.
      </h2>
      <div className="process-steps">
        <div className="process-step reveal" data-num="1">
          <div className="step-icon">
            <svg viewBox="0 0 40 40" fill="none">
              <path
                d="M20 6L23.6 14.2L32.6 15.1L25.8 20.9L27.8 29.7L20 25.2L12.2 29.7L14.2 20.9L7.4 15.1L16.4 14.2L20 6Z"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
          </div>
          <div className="step-title">Map</div>
          <div className="step-desc">
            We audit your existing workflows and extract every decision node worth automating.
          </div>
        </div>
        <div className="process-step reveal" data-num="2">
          <div className="step-icon">
            <svg viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <circle cx="20" cy="20" r="4.5" fill="currentColor" opacity="0.45" />
            </svg>
          </div>
          <div className="step-title">Model</div>
          <div className="step-desc">
            Custom AI agents trained on your data, tuned to your tolerance, ready for your
            environment.
          </div>
        </div>
        <div className="process-step reveal" data-num="3">
          <div className="step-icon">
            <svg viewBox="0 0 40 40" fill="none">
              <polygon points="20,8 32,30 8,30" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <polygon points="20,14 27,27 13,27" fill="currentColor" opacity="0.35" />
            </svg>
          </div>
          <div className="step-title">Deploy</div>
          <div className="step-desc">
            One-command deployment to cloud, edge, or hybrid infra with full observability from day
            zero.
          </div>
        </div>
        <div className="process-step reveal" data-num="4">
          <div className="step-icon">
            <svg viewBox="0 0 40 40" fill="none">
              <path d="M20 10V27" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path
                d="M10 20C10 16.3 14.5 14 20 14C25.5 14 30 16.3 30 20"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M9 20H31"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                opacity="0.45"
              />
              <path
                d="M13.5 27.5L11 31M26.5 27.5L29 31"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="step-title">Scale</div>
          <div className="step-desc">
            Horizontal autoscaling governed by your business KPIs, not generic infrastructure
            metrics.
          </div>
        </div>
      </div>
    </motion.section>
  );
}
