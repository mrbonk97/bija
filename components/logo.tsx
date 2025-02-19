import { kleeOne } from "@/lib/font";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export function Logo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Link
            href={"/"}
            className={`inline-block w-16 text-4xl text-custom-3 ${kleeOne.className}`}
          >
            榧
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-center">榧</p>
          <p className="mt-2 text-center">비자나무 비</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
