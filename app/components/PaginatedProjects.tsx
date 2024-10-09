"use client";
import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { useRouter, useSearchParams } from "next/navigation";
import ProjectDescription from "./ProjectDescription";
import Button from "./ButtonColorful";
import { ProjectProps } from "../types";
import ModalCustom from "./ModalCustom";

const PaginatedProjects = ({
  projects,
  currentPage,
  setCurrentPage,
}: {
  projects: any;
  currentPage: any;
  setCurrentPage: any;
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedProject, setSelectedProject] = useState("");
  useEffect(
    function () {
      const id = searchParams.get("project");
      if (id) setSelectedProject(projects.find((project: ProjectProps) => project.id === +id));
      else setSelectedProject("");
    },
    [searchParams, projects]
  );
  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    router.push(`/?project=${project.id}`, { scroll: false });
  };
  const handleBackClick = () => {
    setSelectedProject("");
    router.push("/", { scroll: false });
  };

  const itemsPerPage = 3;
  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProjects = projects.slice(startIndex, startIndex + itemsPerPage);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div
        className={`md:grid auto-rows-fr flex flex-wrap md:grid-cols-2 xl:grid-cols-3 items-stretch  justify-center md:gap-10`}
      >
        {currentProjects.map((project: any) => (
          <ModalCustom
            content={<ProjectDescription moveback={handleBackClick} project={selectedProject} />}
            btn={<ProjectCard onClick={() => handleProjectClick(project)} key={project.id} project={project} />}
          />
        ))}
      </div>
      {
        <div className="flex relative z-10 justify-center mt-4 gap-10">
          <Button
            className=" left-32 "
            text={"Previous"}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          />
          <Button
            className=" -right-32"
            text={"Next"}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          />
        </div>
      }
    </>
  );
};

export default PaginatedProjects;
