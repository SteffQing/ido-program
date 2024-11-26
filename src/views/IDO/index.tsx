"use client";

import Hero from "./Hero";
import Info from "./Info";

export default function IDO_Client(params: IDOType) {
  const info = { ...params.pool_info, ...params.token_info };
  return (
    <main className="pt-14">
      <section className="flex flex-col gap-8 md:gap-16 py-12 md:pt-20 px-5 md:px-10 bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat">
        <Hero {...params} />
        <Info {...info} />
      </section>
    </main>
  );
}
