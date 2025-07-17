import type { Route } from "./+types/_landing._index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "SPYLT Clone | Home" },
    { name: "description", content: "Freaking delicious drinks" },
  ];
}

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">FREAKING DELICIOUS!</h1>
    </>
  );
}
