import { Placeholder } from "@/components/ui/placeholder";
import { Gush } from "./components/gush";
import { Hero } from "./components/hero";
import { SiteWrapper } from "./components/site-wrapper";
import { content } from "./content";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <main>
      <Hero>
        <Placeholder className="absolute inset-0" />
        {/* <Gush /> */}
      </Hero>
      <SiteWrapper
        className="w-full min-h-screen relative flex flex-col my-lg gap-lg"
        maxWidth
      >
        <Card>
          <section className="h-[70vh] w-full gap-lg p-xl grid items-center">
            <h1 className="text-8xl font-futura font-bold italic text-balance">
              {content.home.headline}
            </h1>
          </section>
        </Card>

        <section className="h-[70vh] w-full gap-lg p-xl grid md:grid-cols-2 items-center">
          <div>
            <h2 className="text-5xl text-balance">{content.home.subhead}</h2>
          </div>

          <Placeholder className="h-full" />
        </section>
      </SiteWrapper>

      <section className="">
        <Placeholder>
          <SiteWrapper
            className="w-full min-h-screen relative flex items-center justify-center"
            maxWidth
          >
            <p className="text-4xl my-6xl text-balance text-center max-w-screen-lg">
              {content.home.copy}
            </p>
          </SiteWrapper>
        </Placeholder>
      </section>
      {/* <h1 className="font-futura font-black uppercase text-[30vmin]">Gush</h1> */}
    </main>
  );
}
