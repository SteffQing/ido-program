import { Button } from "@/components/ui/button";
import Image from "next/image";
import LaunchIllustration from "@/assets/images/launch.png";
import _Rocket from "@/assets/svg/rocket.svg";
import Rocket from "@/assets/svg/rocket";

function Launch() {
  return (
    <section className="py-6 md:py-12 px-5 md:px-14">
      <aside className="flex flex-col sm:flex-row items-center justify-between gap-12 border border-primary-foreground p-8 md:p-20 relative">
        <div className="flex items-center justify-center">
          <Image
            src={LaunchIllustration}
            alt="Launch illustration"
            className="max-w-[300px] max-sm:w-full"
            objectFit="cover"
          />
        </div>
        <div className="flex flex-col gap-4 w-full items-end">
          <h6 className="uppercase text-2xl md:text-3xl font-semibold font-inter text-right">Are You a Web3 Project Looking to get Launched on Greendot?</h6>
          <Button>
            <Rocket />
           Apply Here
          </Button>
        </div>
        <Rocket className="absolute top-2 right-1/2" />
        <Rocket className="absolute bottom-0 left-0"/>
        <Rocket className="absolute bottom-2 right-10 rotate-180"/>
        <Rocket className="absolute top-5 right-4 rotate-45"/>
        <Rocket className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] scale-50"/>
      </aside>
    </section>
  );
}

export default Launch;
