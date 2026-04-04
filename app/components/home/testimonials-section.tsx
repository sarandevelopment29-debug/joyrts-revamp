import { motion } from "framer-motion";

import { sectionMotion } from "./constants";

const TESTIMONIALS = [
  {
    quote:
      "Joyrts brought our TCC website and magazine to life with precision and creativity. The results are modern, user-friendly, and truly reflect our church. They transform ideas into impactful digital experiences.",
    company: "Tamil Church of Christ (TCC)",
    person: "Tamil Church of Christ (TCC)",
    role: "Tamil Church of Christ (TCC)",
  },
  {
    quote:
      "Joyrts transformed our digital marketing for Perin Supermarkets. Their tailored campaigns boosted engagement and revenue, perfectly aligned with our goals. They don't just meet expectations - they exceed them.",
    company: "Perin Supermarkets",
    person: "Alan Paul",
    role: "Owner",
  },
  {
    quote:
      "Joyrts nailed our vision for Pearlberry Cakes and delivered a beautiful, responsive website. Their marketing brought real customers, boosted sales, and made our online presence feel authentic. They truly go above and beyond.",
    company: "Pearlberry Cakes",
    person: "Jinny",
    role: "Owner",
  },
];

export default function TestimonialsSection() {
  return (
    <motion.section className="section-testimonials" id="testimonials" {...sectionMotion}>
      <div className="section-sweep" aria-hidden />
      <div className="testimonials-head reveal">
        <div className="section-label">Client Voices</div>
        <h2>
          Trusted by teams that
          <span> demand outcomes</span>
        </h2>
      </div>

      <div className="testimonials-grid">
        {TESTIMONIALS.map((item) => (
          <article className="testimonial-card reveal" key={item.company}>
            <p className="testimonial-quote">“{item.quote}”</p>
            <div className="testimonial-meta">
              <strong>{item.company}</strong>
              <span>
                {item.person} · {item.role}
              </span>
            </div>
          </article>
        ))}
      </div>
    </motion.section>
  );
}
