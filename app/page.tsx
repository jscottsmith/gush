import { Gush } from "./components/gush";
import { content } from "./content";

export default function Home() {
  return (
    <main>
      <Gush />
      <div className="flex min-h-screen items-center justify-center">
        <section className="max-w-lg flex flex-col gap-lg">
          <h1 className="text-6xl">{content.home.headline}</h1>
          <h2 className="text-2xl">{content.home.subhead}</h2>
          <p>{content.home.copy}</p>
        </section>
      </div>
      {/* <h1 className="font-futura font-black uppercase text-[30vmin]">Gush</h1> */}
    </main>
  );
}
