import { executeSql } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

const sql = `
SELECT 
    article_id 
  , title 
  , thumbnail 
  , TO_CHAR(created_at, 'YYYY.MM.DD') AS created_at 
from bija_article 
WHERE title LIKE '%' || :q || '%'
ORDER BY created_at desc`;

export const GET = async (req: NextRequest) => {
  const q = req.nextUrl.searchParams.get("q")?.trimEnd();

  const data = await executeSql(sql, [q!]);
  return NextResponse.json({
    code: "success",
    data: {
      list: data.rows,
    },
  });
};
