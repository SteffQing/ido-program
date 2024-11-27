import { Button } from "@/components/ui/button";
import Image from "next/image";
import GreenDot from "@/assets/images/green_dot.png";
import Link from "next/link";

function Hero() {
  return (
    <section className="flex min-h-screen justify-center flex-col gap-5 py-12 md:pt-20 px-5 md:px-10 bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat">
      <figure className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
        <aside className="flex flex-col gap-6">
          {" "}
          <div className="flex w-full items-start gap-2 flex-wrap">
            <Points text="On SOON Network" />
            <Points text="No-Loss IDO Rounds" />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="uppercase text-3xl md:text-5xl lg:text-6xl font-medium font-inter">
              discover and invest in the best web3 projects
            </h1>
            <h2 className="text-xl md:text-3xl font-normal font-inter">
              Be an early investor in the next generation of blockchain projects on SOON with GreenDot
            </h2>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2 md:gap-10">
            <Button>Explore Projects</Button>
            <Button variant="outline">
              <Link href="#how-to">How to get started</Link>
            </Button>
          </div>
          {/* <div>
            <h4 className="text-base md:text-xl uppercase font-inter font-bold">backed by</h4>
          </div> */}
        </aside>
        <aside className="flex items-center justify-center">
          <Image src={GreenDot} alt="greendot" className="max-lg:max-w-[400px] max-sm:w-full" />
        </aside>
      </figure>
    </section>
  );
}

function Points({ text = "" }) {
  return (
    <div className="bg-secondary py-3 px-4 rounded-[60px]">
      <p className="text-[10px] sm:text-sm md:text-base lg:text-lg font-inter font-normal text-primary-foreground">{text}</p>
    </div>
  );
}

export default Hero;
