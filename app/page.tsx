import dynamic from "next/dynamic";

const PhoenixScene = dynamic(() => import("@/components/scenes/PhoenixScene"), {
  ssr: false,
});

const CubeScene = dynamic(() => import("@/components/scenes/CubeScene"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="h-screen">
      <CubeScene />
    </main>
  );
}
