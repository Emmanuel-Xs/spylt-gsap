import type { Route } from "./+types/_landing._index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "SPYLT Clone | Home" },
    { name: "description", content: "Freaking delicious drinks" },
  ];
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-primary-300 ring pbs-24">
      <h1 className="font-antonio text-8xl font-bold text-secondary-800 underline">
        FREAKING DELICIOUS
      </h1>
    </main>
  );
}
