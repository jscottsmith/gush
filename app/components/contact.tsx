import React from "react";
import { getWelcomeHeadline } from "../contact/helpers";
import { content } from "../content";

export default function Contact() {
  return (
    <section className="flex min-h-screen items-center justify-center">
      <div className="flex items-center  gap-lg mb-lg">
        <h1 className="text-6xl font-futura max-w-[340px] text-balance">
          {getWelcomeHeadline()}
        </h1>
        <div className="flex flex-col gap-lg">
          <h2 className="text-4xl">{content.contact.headline}</h2>
          <p className="max-w-screen-sm text-lg">{content.contact.copy}</p>
          <p className="text-lg">
            <span>Reach us directly at</span>{" "}
            <a href={content.contact.email}>{content.contact.email}</a>
          </p>
          {/* <p>
          phone: <a href="tel:9996265050">999 626 5050</a>
        </p> */}
        </div>
      </div>
    </section>
  );
}
