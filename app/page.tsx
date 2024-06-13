import dynamic from "next/dynamic";

const PhoenixScene = dynamic(() => import("@/components/scenes/PhoenixScene"), {
  ssr: false,
});

const CubeScene = dynamic(() => import("@/components/scenes/CubeScene"), {
  ssr: false,
});

const TextAnimationScene = dynamic(
  () => import("@/components/scenes/TextAnimationScene"),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <main className="relative h-screen z-10">
      <div className="container bg-transparent">
        <h2>Testing</h2>
        <p className="text-center">
          I need to practice with a new tuto that simultaneously creates 3d
          animation over static content
        </p>
      </div>
      <TextAnimationScene />
    </main>
  );
}
