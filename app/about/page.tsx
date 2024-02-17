import Link from "next/link";
import { routes } from "../routes.constants";

export default function About() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <section className="max-w-lg">
        <h1>
          GUSH <em>is</em>
        </h1>
        <p>
          A design and technology studio, GUSH was <strong>officially</strong>{" "}
          founded in ‘24 by husband and wife duo J Scott Smith and Lauren Sian.
          Combine our many years (too many to count) of industry leading
          experience in design, engineering and branding together to offer our
          expert solutions to clients.
        </p>
        <p>
          We are remote first and work with anyone with an ISP but are currently
          and comfortably located in Los Angeles (72° and sunny, 3pm PT)
        </p>
        <p>
          If you have a project that fits{" "}
          <Link href={routes.services}>our services</Link>,{" "}
          <Link href={routes.contact}>reach out</Link> with any details you have
          for a proposal. Or just send us a hi-five before you switch tabs or
          put down the phone.
        </p>
      </section>
    </main>
  );
}
