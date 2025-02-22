import { ProjectSection } from "@/components/card/project-section";
import { ProjectCarousel } from "@/components/project-carousel";
import { PROJECTS } from "@/constants";
import Image from "next/image";
import { StackTabs } from "../_components/stack-tabs";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}
const ProjectDetailPage = async ({ params }: Props) => {
  const { slug } = await params;
  const project = PROJECTS.filter((e) => e.id === slug)[0];
  if (project == undefined) notFound();

  return (
    <main className="py-20 mx-auto min-h-full max-w-screen-xl">
      <hgroup className="py-10 px-5">
        <h1 className="text-4xl font-bold opacity-80">프로젝트: {project.title}</h1>
        <h2 className="font-medium opacity-70">{project.description}</h2>
      </hgroup>
      <section className="py-10 flex items-center gap-10 border-t border-custom-pink">
        <Image
          src={project.logoUrl}
          alt="img"
          height={256}
          width={256}
          className="flex-shrink-0 h-auto w-52"
        />
        <ul className="p-5 w-full space-y-5 font-medium bg-secondary rounded">
          <li>
            <div className="opacity-70">기간</div>
            <div className="text-xl opacity-80">{project.duration}</div>
          </li>
          <li>
            <div className="opacity-70">규모</div>
            <div className="text-xl opacity-80">{project.size}</div>
          </li>
        </ul>
      </section>
      <ProjectSection header="프로젝트 기획 동기">
        {project.motive.map((item, idx) => (
          <p
            key={`motive-${idx}`}
            className={`p-5 text-lg font-medium opacity-80 break-keep leading-relaxed`}
          >
            {item}
          </p>
        ))}
      </ProjectSection>
      <ProjectSection header="사용한 기술">
        <StackTabs stacks={project.stacks} />
      </ProjectSection>
      <ProjectSection header="기능 소개">
        {project.features.map((item) => (
          <article key={item.name} className="p-5">
            <h4 className="text-xl font-bold opacity-80">{item.name}</h4>
            {item.description.map((item2) => {
              if (item2.type == "IMAGE")
                return (
                  <Image
                    key={item2.id}
                    src={item2.content}
                    alt={`이미지${item2.id}`}
                    height={600}
                    width={600}
                  />
                );
              if (item2.type == "PARAGRAPH")
                return (
                  <p key={item2.id} className="p-5 font-medium break-keep opacity-80">
                    {item2.content}
                  </p>
                );
            })}
          </article>
        ))}
      </ProjectSection>
      <ProjectSection header="어려웠던 점">
        {project.hard.map((item) => (
          <article key={item.name} className="p-5">
            <h4 className="text-xl font-bold opacity-80">{item.name}</h4>
            {item.description.map((item2) => {
              if (item2.type == "IMAGE")
                return (
                  <Image
                    key={item2.id}
                    src={item2.content}
                    alt={`이미지${item2.id}`}
                    height={600}
                    width={600}
                    className="my-10 mx-auto"
                  />
                );

              if (item2.type == "PARAGRAPH")
                return (
                  <p key={item2.id} className="p-5 font-medium break-keep opacity-80">
                    {item2.content}
                  </p>
                );
            })}
          </article>
        ))}
      </ProjectSection>
      <ProjectSection header="이미지">
        <ProjectCarousel images={project.images} />
      </ProjectSection>
      <ProjectSection header="링크">
        <ul className={`p-5 text-lg font-medium opacity-80 break-keep space-y-2`}>
          {project.links.map((item) => (
            <li key={item.name}>
              <span className="inline-block w-20">{item.name}:</span>
              <a
                target="_blank"
                rel="noreferrer nofollow"
                href={item.url}
                className="hover:underline underline-offset-4"
              >
                {item.url}
              </a>
            </li>
          ))}
        </ul>
      </ProjectSection>
    </main>
  );
};

export default ProjectDetailPage;
