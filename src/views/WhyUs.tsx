import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import POINTS from "@/static/WhyUs";
import Image, { StaticImageData } from "next/image";

function WhyUs() {
  return (
    <section className="py-6 md:py-12 px-5 md:px-14">
      <Button variant="outline" className="rounded-none bg-secondary border-primary-foreground border-b-0 uppercase">
        Why choose us
      </Button>
      <h4 className="font-inter font-semibold text-2xl md:text-4xl border-t border-b border-primary-foreground py-2 capitalize">
        Here is why we are the best launchpad for your web3 Projects
      </h4>
      <aside className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:bg-[url('/steps.png')] bg-contain bg-right-bottom bg-no-repeat">
        {POINTS.map((point, index) => (
          <Points key={index} {...point} idx={index} />
        ))}
        <div className="hidden sm:flex flex-col gap-4 py-8 border-primary-foreground border-b sm:pl-5 md:pl-14" />
      </aside>
    </section>
  );
}

interface Props {
  iconPath: StaticImageData;
  title: string;
  description: string;
  idx: number;
}

function Points({ title, description, iconPath, idx }: Props) {
  const isEven = idx % 2 === 0;
  return (
    <div
      className={cn(
        "flex flex-col gap-4 py-8 border-primary-foreground border-b",
        isEven ? "sm:border-r sm:pr-5 md:pr-14" : "lg:border-r sm:pl-5 md:pl-14",
        idx === 1 && "lg:pr-14",
        idx === 2 && "lg:border-r-0 lg:pl-1",
        idx === 3 && "lg:pl-0",
        idx === 4 && "lg:border-r lg:pl-14"
      )}
    >
      <Image
        src={iconPath}
        alt={`${title.slice(0, 10)} icon`}
        width={48}
        height={48}
        className="text-primary-foreground"
      />
      <div className="space-y-2">
        <h5 className="text-xl font-semibold text-primary-foreground">{title}</h5>
        <p className="text-sm text-foreground/80">{description}</p>
      </div>
    </div>
  );
}

export default WhyUs;
