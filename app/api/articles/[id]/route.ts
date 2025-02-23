import { NextRequest, NextResponse } from "next/server";
import { executeSql } from "@/lib/db";
import oracledb from "oracledb";
import { articleType } from "@/type/type";

const sql = `
SELECT 
    article_id 
  , title 
  , subtitle 
  , thumbnail 
  , content as CONTENT_CLOB 
  , TO_CHAR(created_at, 'YYYY.MM.DD') AS created_at 
from bija_article 
WHERE article_id = :article_id`;

interface serverArticleType extends articleType {
  CONTENT_CLOB: oracledb.Lob;
}

export const GET = async (
  req: NextRequest,
  { params }: { params: Promise<{ [key: string]: string }> }
) => {
  const { id } = await params;
  const ip = req.headers.get("x-forwarded-for");
  console.log("게시글 조회함 IP: ", ip);

  const result = await executeSql<serverArticleType>(sql, [id]);
  if (!result.rows) throw Error("결과가없음");
  if (result.rows.length == 0) throw Error("결과가 없음");

  const article = result.rows[0];
  article.CONTENT = (await article.CONTENT_CLOB.getData()).toString();

  return NextResponse.json({
    code: "success",
    data: {
      article: {
        ARTICLE_ID: article.ARTICLE_ID,
        TITLE: article.TITLE,
        SUBTITLE: article.SUBTITLE,
        THUMBNAIL: article.THUMBNAIL,
        CONTENT: article.CONTENT,
        CREATED_AT: article.CREATED_AT,
      },
    },
  });
};
