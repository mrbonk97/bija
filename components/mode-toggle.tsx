"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Props {
  isHome: boolean;
}

export function ModeToggle({ isHome }: Props) {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className={
            isHome
              ? "bg-custom-3 hover:bg-custom-3/90 text-custom-2 border-none shadow-none"
              : "border-none text-custom-3 shadow-none"
          }
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className={isHome ? "font-medium bg-custom-3 text-custom-2 border-none" : "font-medium"}
      >
        <DropdownMenuItem
          className={isHome ? "cursor-pointer focus:bg-custom-2 focus:text-custom-3" : ""}
          onClick={() => setTheme("light")}
        >
          라이트
        </DropdownMenuItem>
        <DropdownMenuItem
          className={isHome ? "cursor-pointer focus:bg-custom-2 focus:text-custom-3" : ""}
          onClick={() => setTheme("dark")}
        >
          다크
        </DropdownMenuItem>
        <DropdownMenuItem
          className={isHome ? "cursor-pointer focus:bg-custom-2 focus:text-custom-3" : ""}
          onClick={() => setTheme("system")}
        >
          시스템
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
