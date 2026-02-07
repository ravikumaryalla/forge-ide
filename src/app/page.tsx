"use client";

import { api } from "@/convex/_generated/api";
import { create, get } from "@/convex/projects";
import { useQuery, useMutation } from "convex/react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { useState } from "react";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  const [projectName, setProjectName] = useState("");

  const createProject = useMutation(api.projects.create);
  const projects = useQuery(api.projects.get) || [];

  const handleCreateProject = () => {
    createProject({ name: projectName });
    setProjectName("");
  };
  return (
    <div className="flex  flex-col justify-center items-center py-4 ">
      <div className="flex justify-center items-center gap-2 w-2xl">
        <UserButton />
        <Input
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
        <Button onClick={handleCreateProject}>Add Project</Button>
      </div>

      {projects.length > 0 ? (
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Projects</h2>
          <ul className="list-disc pl-5 mt-2">
            {projects.map((project) => (
              <li key={project._id}>{project.name}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="mt-4 text-gray-500">No projects yet.</p>
      )}
    </div>
  );
}
