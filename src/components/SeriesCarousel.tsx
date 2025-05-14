
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SeriesCard, { SeriesCardProps } from "@/components/SeriesCard";

interface SeriesCarouselProps {
  title: string;
  series: SeriesCardProps[];
}

const SeriesCarousel = ({ title, series }: SeriesCarouselProps) => {
  return (
    <div className="py-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold font-montserrat">{title}</h2>
        <a href="#" className="text-sm text-primary hover:underline">
          Смотреть все
        </a>
      </div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="relative mx-auto w-full"
      >
        <CarouselContent className="-ml-4">
          {series.map((series) => (
            <CarouselItem
              key={series.id}
              className="pl-4 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
            >
              <SeriesCard {...series} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0" />
        <CarouselNext className="right-0" />
      </Carousel>
    </div>
  );
};

export default SeriesCarousel;
