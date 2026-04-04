"use client";

import Lenis from "lenis";
import { animate, stagger, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import SplitType from "split-type";
import { useEffect, useRef, useState } from "react";

import ContactSection from "./components/home/contact-section";
import GlobalMapSection from "./components/home/global-map-section";
import HeroSection from "./components/home/hero-section";
import IndustriesSection from "./components/home/industries-section";
import ManifestoSection from "./components/home/manifesto-section";
import ProcessSection from "./components/home/process-section";
import SiteFooter from "./components/home/site-footer";
import SiteShell from "./components/home/site-shell";
import TechstackSection from "./components/home/techstack-section";
import TestimonialsSection from "./components/home/testimonials-section";
import { getTrianglePosition } from "./components/home/triangle";
import WhatSection from "./components/home/what-section";

export default function Home() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [isMobile, setIsMobile] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);

  const triWrapRef = useRef<HTMLDivElement | null>(null);
  const tri3dRef = useRef<HTMLDivElement | null>(null);
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const cursorRingRef = useRef<HTMLDivElement | null>(null);
  const flowCanvasRef = useRef<HTMLDivElement | null>(null);
  const flowWireSvgRef = useRef<SVGSVGElement | null>(null);

  const { scrollY, scrollYProgress } = useScroll();
  const heroParallaxY = useTransform(scrollY, [0, 900], [0, 130]);

  useMotionValueEvent(scrollY, "change", (value) => {
    setNavScrolled(value > 24);
  });

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      smoothWheel: true,
      syncTouch: false,
      lerp: 0.07,
      wheelMultiplier: 1.05,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const splitTargets = Array.from(document.querySelectorAll<HTMLElement>("[data-split]"));
    if (splitTargets.length === 0) {
      return;
    }

    const splits = splitTargets.map(
      (target) =>
        new SplitType(target, {
          types: "chars",
          tagName: "span",
        }),
    );

    splitTargets.forEach((target) => {
      const chars = target.querySelectorAll<HTMLElement>(".char");
      chars.forEach((char) => {
        char.style.opacity = "0";
        char.style.transform = "translateY(34px)";
        char.style.filter = "blur(7px)";
      });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          if (!entry.isIntersecting || target.dataset.animated === "true") {
            return;
          }

          target.dataset.animated = "true";
          const chars = Array.from(target.querySelectorAll<HTMLElement>(".char"));

          animate(
            chars,
            {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            },
            {
              duration: 0.78,
              delay: stagger(0.018),
              ease: [0.22, 1, 0.36, 1],
            },
          );
        });
      },
      { threshold: 0.42 },
    );

    splitTargets.forEach((target) => observer.observe(target));

    return () => {
      observer.disconnect();
      splits.forEach((instance) => instance.revert());
    };
  }, []);

  useEffect(() => {
    const updateMobile = () => {
      const mobile = window.innerWidth <= 600;
      setIsMobile(mobile);
      if (!mobile) {
        setDrawerOpen(false);
      }
    };

    updateMobile();
    window.addEventListener("resize", updateMobile);

    return () => {
      window.removeEventListener("resize", updateMobile);
    };
  }, []);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = cursorRingRef.current;

    if (!cursor || !ring) {
      return;
    }

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let animationFrameId = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      animationFrameId = window.requestAnimationFrame(animateRing);
    };

    document.addEventListener("mousemove", handleMouseMove);
    animationFrameId = window.requestAnimationFrame(animateRing);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  useEffect(() => {
    const reveals = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.12 },
    );

    reveals.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const triWrap = triWrapRef.current;
    const tri3d = tri3dRef.current;

    if (!triWrap || !tri3d) {
      return;
    }

    const getTotalHeight = () => document.documentElement.scrollHeight - window.innerHeight;

    let triangleX = 0;
    let triangleY = window.innerHeight * 0.7;
    let velocityX = 0;
    let velocityY = 0;
    let animationFrameId = 0;

    const initial = getTrianglePosition(0, window.innerWidth, window.innerHeight);
    triangleX = initial.x;
    triangleY = initial.y;

    triWrap.style.left = `${triangleX}px`;
    triWrap.style.top = `${triangleY}px`;

    const animateTriangle = () => {
      const total = getTotalHeight();
      const progress = total <= 0 ? 0 : Math.min(Math.max(window.scrollY / total, 0), 1);
      const target = getTrianglePosition(progress, window.innerWidth, window.innerHeight);

      const spring = window.innerWidth <= 600 ? 0.13 : 0.085;
      const damping = window.innerWidth <= 600 ? 0.72 : 0.79;

      velocityX += (target.x - triangleX) * spring;
      velocityY += (target.y - triangleY) * spring;
      velocityX *= damping;
      velocityY *= damping;
      triangleX += velocityX;
      triangleY += velocityY;

      const tiltX = velocityY * 1.2;
      const tiltY = velocityX * 1.2;
      const tiltZ = velocityX * 0.5;

      triWrap.style.left = `${triangleX}px`;
      triWrap.style.top = `${triangleY}px`;
      triWrap.style.transform = `translate(-50%, -50%) perspective(400px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) rotateZ(${tiltZ}deg)`;

      const speed = Math.abs(velocityX) + Math.abs(velocityY);
      const scale = 1 + Math.min(speed * 0.012, 0.5);
      tri3d.style.transform = `scale(${scale})`;

      animationFrameId = window.requestAnimationFrame(animateTriangle);
    };

    animationFrameId = window.requestAnimationFrame(animateTriangle);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  useEffect(() => {
    const canvas = flowCanvasRef.current;
    const svg = flowWireSvgRef.current;

    if (!canvas || !svg) {
      return;
    }

    const getAnchor = (nodeName: string, side: "left" | "right" | "top" | "bottom") => {
      const node = canvas.querySelector<HTMLElement>(`[data-node="${nodeName}"]`);
      if (!node) {
        return null;
      }

      const canvasRect = canvas.getBoundingClientRect();
      const rect = node.getBoundingClientRect();

      const centerX = rect.left - canvasRect.left + rect.width / 2;
      const centerY = rect.top - canvasRect.top + rect.height / 2;

      if (side === "left") {
        return { x: rect.left - canvasRect.left, y: centerY };
      }
      if (side === "right") {
        return { x: rect.right - canvasRect.left, y: centerY };
      }
      if (side === "top") {
        return { x: centerX, y: rect.top - canvasRect.top };
      }
      return { x: centerX, y: rect.bottom - canvasRect.top };
    };

    const drawEdge = (
      edgeName: string,
      fromNode: string,
      fromSide: "left" | "right" | "top" | "bottom",
      toNode: string,
      toSide: "left" | "right" | "top" | "bottom",
    ) => {
      const path = svg.querySelector<SVGPathElement>(`[data-edge="${edgeName}"]`);
      const from = getAnchor(fromNode, fromSide);
      const to = getAnchor(toNode, toSide);

      if (!path || !from || !to) {
        return;
      }

      const dx = to.x - from.x;
      const curve = Math.max(Math.abs(dx) * 0.45, 44);
      const cp1x = from.x + (dx >= 0 ? curve : -curve);
      const cp2x = to.x - (dx >= 0 ? curve : -curve);
      path.setAttribute("d", `M${from.x} ${from.y} C${cp1x} ${from.y} ${cp2x} ${to.y} ${to.x} ${to.y}`);
    };

    const redraw = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      svg.setAttribute("viewBox", `0 0 ${width} ${height}`);

      drawEdge("webhook-ai", "webhook", "right", "ai", "left");
      drawEdge("ai-crm", "ai", "right", "crm", "left");
      drawEdge("ai-slack", "ai", "right", "slack", "left");
      drawEdge("ai-gmail", "ai", "right", "gmail", "left");
      drawEdge("slack-ticket", "slack", "right", "ticket", "left");
      drawEdge("gmail-ticket", "gmail", "right", "ticket", "left");
      drawEdge("ticket-end", "ticket", "top", "end", "bottom");
    };

    redraw();
    requestAnimationFrame(redraw);
    requestAnimationFrame(redraw);

    const resizeObserver = new ResizeObserver(() => {
      redraw();
    });

    resizeObserver.observe(canvas);
    const nodes = canvas.querySelectorAll<HTMLElement>("[data-node]");
    nodes.forEach((node) => resizeObserver.observe(node));

    window.addEventListener("resize", redraw);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", redraw);
    };
  }, []);

  return (
    <>
      <SiteShell
        setTheme={setTheme}
        navScrolled={navScrolled}
        scrollYProgress={scrollYProgress}
        isMobile={isMobile}
        drawerOpen={drawerOpen}
        setDrawerOpen={setDrawerOpen}
        triWrapRef={triWrapRef}
        tri3dRef={tri3dRef}
        cursorRef={cursorRef}
        cursorRingRef={cursorRingRef}
      />

      <HeroSection
        heroParallaxY={heroParallaxY}
        flowCanvasRef={flowCanvasRef}
        flowWireSvgRef={flowWireSvgRef}
      />
      <WhatSection />
      <IndustriesSection />
      <GlobalMapSection />
      <ProcessSection />
      <TestimonialsSection />
      <ManifestoSection />
      <TechstackSection />
      <ContactSection />
      <SiteFooter />
    </>
  );
}
