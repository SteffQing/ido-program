
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Props extends Omit<IDOType, "token_info" | "pool_info"> {}
function Hero(props: Props) {
  const progress = Math.round((props.raised / props.target) * 100);
  return (
    <aside className="flex flex-col gap-4 md:flex-row">
      <div className="w-full flex-1">
        <Button variant="outline" className="rounded-none bg-secondary border-primary-foreground border-b-0 uppercase p-4 h-fit">
          <img src={props.image} alt={props.project_name} width={40} height={40} />
          <h1 className="text-xl md:text-3xl font-semibold font-inter">{props.project_name}</h1>
        </Button>
        <h4 className="font-inter font-normal text-base md:text-xl border border-primary-foreground p-5">
          {props.description}
        </h4>
        <div className="border border-primary-foreground border-t-0 w-[98%] p-1" />
      </div>
      <div className="w-full flex-1 p-5 border border-primary-foreground">
        <div className="flex justify-between mb-5 md:mb-7">
          <div className="flex flex-col gap-2 p-2 border border-primary-foreground">
            <p className="text-sm md:text-lg font-normal font-inter">Targeted Raise</p>
            <span className="text-base md:text-xl font-semibold text-primary-foreground font-inter">
              {props.target} USDT
            </span>
          </div>
          <div className="flex flex-col gap-2 p-2 border border-primary-foreground">
            <p className="text-sm md:text-lg font-normal font-inter text-right">Price</p>
            <span className="text-base md:text-xl font-semibold text-primary-foreground font-inter">
              {props.price} USDT
            </span>
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center">
            <p className="text-sm md:text-lg font-normal font-inter text-right">Progress</p>
            <Button variant="outline" className="rounded-none bg-secondary border-primary-foreground border-b-0">
              <span className="text-xs md:text-base font-normal font-inter">
                Participants: <b>1287</b>
              </span>
            </Button>
          </div>
          <div className="w-full h-10 border border-primary-foreground bg-transparent">
            <div className="flex justify-center items-center h-full bg-primary-foreground" style={{ width: `${progress}%` }}>
              <p className="text-black text-sm md:text-base font-inter font-normal">{progress}%</p>
            </div>
          </div>
          <div className="w-full h-10 border border-primary-foreground flex justify-between items-center p-2 text-primary-foreground mb-4">
            <p className="uppercase text-sm md:text-base font-normal font-inter">total raised</p>
            <b className="uppercase text-sm md:text-base font-normal font-inter">
              {props.raised} / {props.target} USDT
            </b>
          </div>
          <div className="flex flex-col gap-3 mb-5">
            <div className="flex justify-between">
              <p className="text-sm md:text-lg font-normal font-inter text-right">Total Allocation</p>
            </div>
            <div className="flex justify-between">
              <p className="text-sm md:text-lg font-normal font-inter text-right">Remaining Allocation</p>
            </div>
          </div>
        </div>
        <div>
            <div className="w-full p-5 bg-[#0C1F11] flex justify-center items-center uppercase border border-primary-foreground text-base md:text-xl font-normal font-inter text-primary-foreground">
            Connect Wallet
            </div>
            <div className="w-[85%] mx-auto border border-primary-foreground border-t-0 flex justify-between items-center p-[10px] text-primary-foreground">
            <p className="uppercase text-sm md:text-base font-normal font-inter">countdown</p>
            <b className="uppercase text-sm md:text-base font-normal font-inter">
              3D 17H 2M 15S
            </b>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Hero;
