import type { Route } from "./+types/_landing._index";
import { HeroSection } from "@/sections/hero-section";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "SPYLT Clone | Home" },
    { name: "description", content: "Freaking delicious drinks" },
  ];
}

export default function Home() {
  return (
    <main aria-label="main content">
      <HeroSection />
      <div className="h-dvh"></div>
    </main>
  );
}
