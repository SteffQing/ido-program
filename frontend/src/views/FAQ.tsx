import { Button } from "@/components/ui/button";
import QA from "@/static/FAQ";
import React from "react";

function FAQ() {
  return (
    <section className="py-6 md:py-12 px-5 md:px-10">
      <div className="flex justify-center">
        <Button variant="outline" className="rounded-none bg-secondary border-primary-foreground border-b-0 uppercase">
          frequently asked questions
        </Button>
      </div>
      <h4 className="font-inter font-semibold text-2xl md:text-4xl border-t border-b border-primary-foreground py-2 md:py-4 capitalize text-center">
        everything you need to know about greenDot
      </h4>
      <aside className="flex flex-col gap-3 items-center py-8">
        {QA.map((qa, index) => (
          <React.Fragment key={index}>
            <Points {...qa} />
            {index !== QA.length - 1 && <div className="w-full h-[1px] bg-primary-foreground max-w-[600px]" />}
          </React.Fragment>
        ))}
      </aside>
    </section>
  );
}

interface Props {
  q: string;
  a: string;
}

function Points({ q, a }: Props) {
  return (
    <div className="flex flex-col gap-4 p-6 border-primary-foreground border max-w-[600px]">
      <h5 className="text-xl font-semibold text-primary-foreground">{q}</h5>
      <p className="text-sm text-foreground/80">{a}</p>
    </div>
  );
}

export default FAQ;
