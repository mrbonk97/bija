import { BlogArticle } from "@/components/card/blog-article";
import { articleType } from "@/type/type";
import { SearchIcon } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "비자 | 블로그 홈",
  description: "보안팀 직원의 개발 블로그",
};

interface Props {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const BlogPage = async ({ searchParams }: Props) => {
  const { q } = await searchParams;
  const url = new URL(`http://localhost:3000/api/articles?q=${q || ""}`);
  const data = await fetch(url.href).then((res) => res.json());

  return (
    <main className="p-5 pt-[6.25rem] mx-auto min-h-full max-w-screen-2xl">
      <header className="p-5 flex items-center gap-10 border-b">
        <Image src={"/images/space-suit.png"} alt="alien" height={64} width={64} />
        <h1 className="text-3xl font-bold opacity-80">대충 개발 블로그</h1>
      </header>
      <div className="mt-10 flex gap-5 justify-between">
        <div className="w-full">
          <form className="relative" action={"/blog"}>
            <button className="absolute top-1/2 left-0 -translate-y-1/2 h-full aspect-square flex2 hover:opacity-50 duration-150">
              <SearchIcon />
            </button>
            <input name="q" className="py-3 pr-5 px-14 w-full border rounded-lg" />
          </form>
          <div className="mt-5 grid grid-cols-3 gap-10">
            {data.data.list.map((item: articleType) => (
              <BlogArticle
                key={`article-${item.ARTICLE_ID}`}
                id={item.ARTICLE_ID}
                title={item.TITLE}
                createdAt={item.CREATED_AT}
              />
            ))}
          </div>
        </div>
        <aside className="px-5 py-2 border-l border-custom-pink w-80">
          <header>
            <h2 className="text-lg font-medium opacity-80">인기있는 글</h2>
          </header>
          <p className="mt-2 font-medium opacity-70">인기있는 글은 없습니다...</p>
        </aside>
      </div>
    </main>
  );
};

export default BlogPage;
