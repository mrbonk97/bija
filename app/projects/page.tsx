"use client";
import { ProjectCard } from "@/components/card/project-card";
import { PROJECTS } from "@/constants";
import { useEffect, useRef, useState } from "react";

const ProjectPage = () => {
  // listRefs는 ProjectCard들에 ref를 연결할 배열
  const listRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [curItem, setCurItem] = useState("project-1");

  useEffect(() => {
    const scrollSpy = () => {
      listRefs.current.forEach((el, index) => {
        const top = window.scrollY;

        if (el) {
          const { offsetTop, offsetHeight } = el;

          if (top >= offsetTop - 256 && top < offsetTop + offsetHeight) {
            setCurItem(PROJECTS[index].id);
            return;
          }
        }
      });
    };

    window.addEventListener("scroll", scrollSpy);
    return () => window.removeEventListener("scroll", scrollSpy);
  }, []);

  return (
    <main className="pt-[6.25rem] p-5 mx-auto min-h-full max-w-screen-2xl flex gap-5">
      <ul
        role="tablist"
        className="hidden md:block sticky px-5 pb-10 top-[6.25rem] h-fit w-60 lg:w-80 xl:w-96 flex-shrink-0 text-right font-medium space-y-5 border-r"
      >
        {PROJECTS.map((item, idx) => (
          <li
            role="tab"
            key={`list-${item.id}`}
            aria-selected={item.id == curItem}
            className="group"
          >
            <a
              href={`#${item.id}`}
              className={`block p-2 hover:bg-secondary group-aria-selected:bg-secondary duration-150`}
            >
              <p className="text-xl">프로젝트{idx + 1}</p>
              <p className="text-xs opacity-70">{item.title}</p>
            </a>
          </li>
        ))}
      </ul>
      <section className="w-full space-y-60">
        {PROJECTS.map((item, idx) => (
          <ProjectCard
            key={item.id}
            //prettier-ignore
            ref={(el) => {listRefs.current[idx] = el;}}
            id={item.id}
            title={item.title}
            description={item.description}
            url={`/projects/${item.id}`}
            logoUrl={item.logoUrl}
            imageUrl={item.imageUrl}
            bg={item.bg}
            from={item.from}
            to={item.to}
          />
        ))}
      </section>
    </main>
  );
};

export default ProjectPage;
