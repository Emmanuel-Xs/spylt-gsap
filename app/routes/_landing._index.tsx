import type { Route } from "./+types/_landing._index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "SPYLT Clone | Home" },
    { name: "description", content: "Freaking delicious drinks" },
  ];
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pbs-24 ring bg-primary-300">
      <h1 className="text-8xl font-bold underline font-antonio text-secondary-800">
        FREAKING DELICIOUS
      </h1>
    </main>
  );
}
