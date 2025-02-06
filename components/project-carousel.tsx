import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

interface Props {
  images: string[];
}

export function ProjectCarousel({ images }: Props) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="p-5 w-full"
    >
      <CarouselContent>
        {images.map((item) => (
          <CarouselItem key={item} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1 h-96 border">
              <Image src={item} alt="imgasd" height={600} width={400} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
