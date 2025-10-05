import { projects } from "@/lib/projects";
export default function sitemap() {
  const base = "https://laumannfilm.no";
  const now = new Date().toISOString().split("T")[0];
  const routes = ["", "/work", "/about", "/contact"].map((r) => ({
    url: `${base}${r}`, lastModified: now,
  }));
  const projectRoutes = projects.map(p => ({
    url: `${base}/work/${p.slug}`, lastModified: now,
  }));
  return [...routes, ...projectRoutes];
}
