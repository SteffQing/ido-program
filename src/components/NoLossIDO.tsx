"use client";

import { idoExample, Statuses } from "@/static/IDO";
import Projects from "@/views/Projects";
import { useEffect, useState } from "react";

function NoLossIDOsProjects() {
  const [projects, setProjects] = useState<IDOType[]>([]);
  const [type, setType] = useState<(typeof Statuses)[number]>(Statuses[0]);
  useEffect(() => {
    if (type === "All") {
      setProjects([idoExample,idoExample,idoExample]);
    } else {
      const filteredProjects = [idoExample].filter((project) => project.status === type);
      setProjects(filteredProjects);
    }
  }, [type]);

  return <Projects type={type} setType={setType} projects={projects} />;
}

export default NoLossIDOsProjects;
