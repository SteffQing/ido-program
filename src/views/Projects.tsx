import { Button } from "@/components/ui/button";
import { Statuses } from "@/static/IDO";
import { type Dispatch, type SetStateAction } from "react";
import Card from "./Cards/NoLoss";

interface Props {
  setType: Dispatch<SetStateAction<(typeof Statuses)[number]>>;
  type: (typeof Statuses)[number];
  projects: IDOType[];
}
function Projects({ setType, type, projects }: Props) {
  return (
    <section className="py-6 md:py-12 px-5 md:px-10">
      <Button variant="outline" className="rounded-none bg-secondary border-primary-foreground border-b-0 uppercase">
        projects
      </Button>
      <h4 className="font-inter font-semibold text-2xl md:text-4xl border-t border-b border-primary-foreground py-2 md:py-4 capitalize">
        invest in the best WEB3 IDOs With Greendot
      </h4>
      <aside className="border-b border-primary-foreground py-4 mb-6">
        <div className="flex gap-4 overflow-auto">
          {Statuses.map((status, index) => (
            <Button
              key={index}
              variant="outline"
              className={`rounded-none !px-4 !py-2 h-fit ${status === type ? "bg-primary-foreground text-black" : ""}`}
              onClick={() => setType(status)}
            >
              {status}
            </Button>
          ))}
        </div>
      </aside>
      <aside className="relative grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {projects.length > 0 ? projects.map((project, index) => (
          <Card key={index} {...project} />
        )) : (
          <p className="col-span-full text-2xl font-semibold font-inter text-primary-foreground">No projects found</p>
        )}
      </aside>
    </section>
  );
}

export default Projects;
