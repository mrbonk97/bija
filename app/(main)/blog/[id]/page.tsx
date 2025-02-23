import { articleType } from "@/type/type";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "비자 | 외회를 벌어올 영웅호걸의 시간이다",
  description: "보안팀 직원의 개발 블로그",
};

interface Props {
  params: Promise<{ [key: string]: string | string[] | undefined }>;
}

const BlogDetailPage = async ({ params }: Props) => {
  const { id } = await params;
  const article: articleType = await fetch(`${process.env.API_URL}/articles/${id}`)
    .then((res) => res.json())
    .then((res) => res.data.article);

  return (
    <main className="p-5 pt-[6.25rem] mx-auto max-w-screen-lg">
      <header className="p-5 bg-secondary rounded-xl">
        <h1 className="text-lg lg:text-2xl font-semibold opacity-80">{article.TITLE}</h1>
        <h2 className="text-sm lg:text-lg font-medium opacity-70">{article.SUBTITLE}</h2>
        <div className="mt-5 flex gap-2">
          <Image
            src={"/images/man.png"}
            alt="man"
            height={48}
            width={48}
            className="p-1 rounded-full bg-background"
          />
          <div className="font-medium">
            <p className="opacity-80">김현석</p>
            <p className="opacity-70">{article.CREATED_AT}</p>
          </div>
        </div>
      </header>
      <section className="mt-5 font-medium space-y-5">
        <Image
          src={article.THUMBNAIL}
          height={1000}
          width={1000}
          alt="hogul"
          className="h-auto lg:max-h-[450px] w-full rounded-xl object-cover"
        />
        <div dangerouslySetInnerHTML={{ __html: article.CONTENT }} />
      </section>
    </main>
  );
};

export default BlogDetailPage;
