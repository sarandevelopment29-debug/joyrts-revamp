export const sectionMotion = {
  initial: { opacity: 0, y: 70, scale: 0.985 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
  viewport: { once: true, amount: 0.2 },
};

export const TECH_STACKS = [
  { name: "GPT-4 (OpenAI)", mark: "AI", icon: "openai" },
  { name: "LangChain", mark: "LC", icon: "langchain" },
  { name: "FastAPI", mark: "FA", icon: "fastapi" },
  { name: "OpenAI Embeddings", mark: "OE", icon: "openai" },
  { name: "Redis", mark: "RD", icon: "redis" },
  { name: "PostgreSQL", mark: "PG", icon: "postgresql" },
  { name: "Pinecone", mark: "PC", icon: "pinecone" },
  { name: "Playwright", mark: "PW", icon: "playwright" },
  { name: "Next.js", mark: "NX", icon: "nextdotjs" },
  { name: "TypeScript", mark: "TS", icon: "typescript" },
  { name: "Docker", mark: "DK", icon: "docker" },
  { name: "Vercel", mark: "VC", icon: "vercel" },
  { name: "Node.js", mark: "ND", icon: "nodedotjs" },
  { name: "Prisma", mark: "PR", icon: "prisma" },
  { name: "Nginx", mark: "NG", icon: "nginx" },
  { name: "GitHub Actions", mark: "GA", icon: "githubactions" },
];
