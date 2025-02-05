import Image from "next/image";
import Link from "next/link";
import { forwardRef } from "react";

export const ProjectCard = forwardRef<
  HTMLDivElement,
  {
    id: string;
    title: string;
    description: string;
    url: string;
    logoUrl: string;
    imageUrl: string;
    bg: string;
    from: string;
    to: string;
  }
>(({ id, title, description, url, logoUrl, imageUrl, bg, from, to }, ref) => (
  <div
    ref={ref}
    id={id}
    className="min-h-[720px] h-[calc(100vh-120px)] flex flex-col justify-between gap-5 scroll-m-[100px]"
  >
    <hgroup>
      <h2 className="text-2xl md:text-5xl font-bold opacity-80 break-keep">{title}</h2>
      <h3 className="text-base md:text-xl font-medium opacity-70 break-keep">{description}</h3>
    </hgroup>
    <div className="h-full flex flex-col md:flex-row gap-10">
      <div id={`pattern-${id}`} className={`p-5 h-full w-full md:w-1/3 flex2 rounded ${bg}`}>
        <Image
          src={logoUrl}
          alt={title}
          height={256}
          width={256}
          className="h-20 md:h-auto w-auto"
        />
      </div>
      <div
        id={`bg-${id}`}
        className={`p-5 h-full w-full md:w-2/3 flex2 rounded bg-gradient-to-tr ${from} ${to}`}
      >
        <Image
          src={imageUrl}
          alt={title}
          height={512}
          width={512}
          className="rounded-xl bg-secondary shadow-lg object-contain"
        />
      </div>
    </div>
    <Link
      href={url}
      className="ml-auto py-4 px-12 w-fit rounded bg-secondary text-secondary-foreground group hover:bg-secondary/80"
    >
      <span className="font-medium group-hover:font-bold duration-150 opacity-80">자세히</span>
    </Link>
  </div>
));

ProjectCard.displayName = "ProjectCard";
