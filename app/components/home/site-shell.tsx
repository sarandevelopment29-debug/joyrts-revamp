import { motion, type MotionValue } from "framer-motion";
import type { Dispatch, RefObject, SetStateAction } from "react";

type SiteShellProps = {
  setTheme: Dispatch<SetStateAction<"dark" | "light">>;
  navScrolled: boolean;
  scrollYProgress: MotionValue<number>;
  isMobile: boolean;
  drawerOpen: boolean;
  setDrawerOpen: Dispatch<SetStateAction<boolean>>;
  triWrapRef: RefObject<HTMLDivElement | null>;
  tri3dRef: RefObject<HTMLDivElement | null>;
  cursorRef: RefObject<HTMLDivElement | null>;
  cursorRingRef: RefObject<HTMLDivElement | null>;
};

export default function SiteShell({
  setTheme,
  navScrolled,
  scrollYProgress,
  isMobile,
  drawerOpen,
  setDrawerOpen,
  triWrapRef,
  tri3dRef,
  cursorRef,
  cursorRingRef,
}: SiteShellProps) {
  return (
    <>
      <div id="cursor" ref={cursorRef} />
      <div id="cursor-ring" ref={cursorRingRef} />

      <motion.button
        id="theme-toggle"
        aria-label="Toggle theme"
        onClick={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
        type="button"
        whileHover={{ scale: 1.03, x: -2 }}
        whileTap={{ scale: 0.97 }}
      >
        THEME
      </motion.button>

      <nav className={navScrolled ? "scrolled" : ""}>
        <motion.div className="nav-progress" style={{ scaleX: scrollYProgress }} />
        <a href="#hero" className="nav-logo">
          JOYRTS<span>.</span>
        </a>
        <ul>
          <li>
            <motion.a href="#what" whileHover={{ opacity: 1, y: -2 }}>
              What
            </motion.a>
          </li>
          <li>
            <motion.a href="#process" whileHover={{ opacity: 1, y: -2 }}>
              Process
            </motion.a>
          </li>
          <li>
            <motion.a href="#contact" whileHover={{ opacity: 1, y: -2 }}>
              Contact
            </motion.a>
          </li>
        </ul>
        <button
          className={`nav-hamburger${drawerOpen ? " open" : ""}`}
          id="hamburger"
          aria-label="Menu"
          type="button"
          style={{ display: isMobile ? "flex" : "none" }}
          onClick={() => setDrawerOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div
        className={`mobile-drawer${drawerOpen ? " open" : ""}`}
        id="mobileDrawer"
        style={{ display: isMobile ? "flex" : "none" }}
      >
        <a href="#what" className="drawer-link" onClick={() => setDrawerOpen(false)}>
          What
        </a>
        <a href="#process" className="drawer-link" onClick={() => setDrawerOpen(false)}>
          Process
        </a>
        <a href="#contact" className="drawer-link" onClick={() => setDrawerOpen(false)}>
          Contact
        </a>
      </div>

      <div id="tri-track">
        <div className="tri-wrap" id="triWrap" ref={triWrapRef}>
          <div className="tri-3d" ref={tri3dRef}>
            <div className="tri-face f1" />
            <div className="tri-face f2" />
            <div className="tri-face f3" />
          </div>
          <div className="tri-shadow" />
        </div>
      </div>
    </>
  );
}
