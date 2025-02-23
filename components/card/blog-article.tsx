import Image from "next/image";
import Link from "next/link";

interface Props {
  id: string;
  title: string;
  thumbnail: string;
  createdAt: string;
}

export const BlogArticle = ({ id, title, thumbnail, createdAt }: Props) => {
  return (
    <article className="col-span-1">
      <Link
        href={`/blog/${id}`}
        className="p-5 block rounded-lg border hover:bg-secondary duration-150"
      >
        <header>
          <h3 className="font-medium opacity-80 w-full text-ellipsis overflow-hidden whitespace-nowrap">
            {title}
          </h3>
          <div className="mt-2 flex gap-2">
            <Image
              src={"/images/man.png"}
              alt="man"
              height={48}
              width={48}
              className="p-1 rounded-full bg-secondary"
            />
            <div className="font-medium">
              <p className="opacity-80">김현석</p>
              <p className="opacity-70">{createdAt}</p>
            </div>
          </div>
        </header>
        <Image
          src={thumbnail}
          alt="thumbnail"
          height={256}
          width={1000}
          className="mt-5 h-40 object-cover rounded-xl"
        />
      </Link>
    </article>
  );
};
