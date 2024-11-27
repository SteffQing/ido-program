import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Points } from "../IDO/Info";
import { formatDate } from "@/utils/formatDate";
import { formatMoney } from "@/lib/utils";
import Link from "next/link";

function Card({ status, ...props }: IDOType) {
  const progress = Math.round((props.raised / props.target) * 100);
  const isLive = status === "Live";
  return (
    <aside>
      <div className="rounded-none p-3 border-primary-foreground border-b-0 border-4 w-fit">
        {isLive && (
          <span className="w-3 h-3 rounded-full bg-primary-foreground border-2 border-primary-foreground p-1"> </span>
        )}
        <p className="text-sm md:text-lg font-medium font-inter text-primary-foreground">{status.toUpperCase()}</p>
      </div>
      <div className="border-4 border-primary-foreground relative">
        <div className="p-6 flex items-center justify-center gap-4">
          <div className="border border-primary-foreground p-1">
            <div className="border border-primary-foreground">
              <Image src={"/image.svg"} alt={props.project_name} width={40} height={40} />
            </div>
          </div>
          <h3 className="text-xl md:text-3xl font-semibold font-inter">{props.project_name}</h3>
        </div>
        <BoxRect />
      </div>
      <div className="border-2 border-primary-foreground border-t-0 p-6 pt-3 flex flex-col gap-4">
        <aside className="flex gap-4 overflow-auto">
          {props.tags.map((tag, index) => (
            <Tag key={index} tag={tag} />
          ))}
        </aside>
        <div className="border border-primary-foreground p-4 shadow-sm">
          <p className="line-clamp-3 text-base md:text-lg font-inter font-normal">{props.description}</p>
        </div>
        <aside className="border border-primary-foreground flex flex-col gap-3 p-4">
          <Points point="Token Price" data={`$${props.price}`} />
          <Points point="Launched on" data={formatDate(props.start_date)} />
          <Points point="Ends on" data={formatDate(props.end_date)} />
        </aside>
        <aside>
          <div className="w-full h-10 border border-primary-foreground flex justify-between items-center p-2 px-4 text-primary-foreground">
            <p className="uppercase text-sm md:text-base font-normal font-inter">targeted raised</p>
            <b className="uppercase text-sm md:text-base font-normal font-inter">${formatMoney(props.target)}</b>
          </div>
          <div className="w-full h-10 border border-primary-foreground bg-transparent">
            <div
              className="flex justify-center items-center h-full bg-primary-foreground"
              style={{ width: `${progress}%` }}
            >
              <p className="text-black text-sm md:text-base font-inter font-normal">{progress}%</p>
            </div>
          </div>
        </aside>
        <aside>
          <Link
            href={`/ido/${props.id}`}
            className="w-full p-5 bg-[#0C1F11] cursor-pointer flex justify-center items-center uppercase border border-primary-foreground text-base md:text-xl font-normal font-inter text-primary-foreground"
          >
            {isLive ? "Participate" : status === "Upcoming" ? "coming soon" : "claim"}
          </Link>
          {isLive ? (
            <div className="border border-primary-foreground border-t-0 flex justify-between items-center p-[10px] text-primary-foreground">
              <p className="uppercase text-sm md:text-base font-normal font-inter">countdown</p>
              <b className="uppercase text-sm md:text-base font-normal font-inter">3D 17H 2M 15S</b>
            </div>
          ) : <div className="h-10" />}
        </aside>
      </div>
    </aside>
  );
}

function BoxRect() {
  return (
    <>
      <div className="absolute top-0 left-0 w-8 h-4 bg-primary-foreground" />
      <div className="absolute top-4 left-0 w-4 h-4 bg-primary-foreground" />
      <div className="absolute top-0 right-0 w-8 h-4 bg-primary-foreground" />
      <div className="absolute top-4 right-0 w-4 h-4 bg-primary-foreground" />
      <div className="absolute bottom-4 right-0 w-4 h-4 bg-primary-foreground" />
      <div className="absolute bottom-0 right-0 w-8 h-4 bg-primary-foreground" />
      <div className="absolute bottom-4 left-0 w-4 h-4 bg-primary-foreground" />
      <div className="absolute bottom-0 left-0 w-8 h-4 bg-primary-foreground" />
    </>
  );
}

function Tag({ tag = "" }) {
  return (
    <Button variant="outline" className="rounded-none bg-secondary border-primary-foreground !py-2 !px-4 capitalize flex-1 h-fit">
      <p className="text-sm md:text-lg font-medium font-inter text-primary-foreground">{tag}</p>
    </Button>
  );
}


export default Card;