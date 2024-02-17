import { Gush } from "./components/gush";

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <section>
        <Gush />
        <h1>Squeezing juicy design from fresh technology</h1>
        <h2>
          We build expressive human experiences for digital products and brands
        </h2>
        <p>
          GUSH was co-founded to merge the creative and engineering processes
          required to build digital experiences, products and brands. With over
          a decade of combined expertise in software development and design,
          GUSH partners aim to extend their industry tested expertise to service
          big and small clients alike.
        </p>
      </section>
      {/* <h1 className="font-futura font-black uppercase text-[30vmin]">Gush</h1> */}
    </main>
  );
}
