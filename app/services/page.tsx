import { content } from "../content";

export default function Services() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <section>
        <h1 className="text-6xl">{content.services.headline}</h1>
        <section className="flex">
          <div>
            <h2 className="text-2xl">{content.services.creative.name}</h2>
            <ul>
              {content.services.creative.items.map((item, i) => {
                return (
                  <li key={i}>
                    <p>{item}</p>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl">{content.services.technology.name}</h2>
            <ul>
              {content.services.technology.items.map((item, i) => {
                return (
                  <li key={i}>
                    <p>{item}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </section>
    </main>
  );
}
