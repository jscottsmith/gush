import { getWelcomeHeadline } from "./helpers";

export default function Contact() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <section>
        <h1>{getWelcomeHeadline()}</h1>
        <h2>Wanna chat?</h2>
        <p>
          email: <a href="mailto:hello@gush.design">hello@gush.design</a>
        </p>
        <p>
          phone: <a href="tel:9996265050">999 626 5050</a>
        </p>
      </section>
    </main>
  );
}
