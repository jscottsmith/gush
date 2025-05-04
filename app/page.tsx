import { Placeholder } from "@/components/ui/placeholder";
import { Gush } from "./components/gush";
import { Hero } from "./components/hero";
import { SiteWrapper } from "./components/site-wrapper";
import { content } from "./content";

export default function Home() {
  return (
    <main>
      <Hero>
        <Placeholder className="absolute inset-0" />
        {/* <Gush /> */}
      </Hero>
      <SiteWrapper className="w-full min-h-screen">
        <section className="w-full gap-lg">
          <h1 className="text-6xl">{content.home.headline}</h1>
          <h2 className="text-2xl">{content.home.subhead}</h2>
          <p>{content.home.copy}</p>
        </section>
      </SiteWrapper>
      {/* <h1 className="font-futura font-black uppercase text-[30vmin]">Gush</h1> */}
    </main>
  );
}
