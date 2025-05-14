
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export interface SeriesCardProps {
  id: number;
  title: string;
  year: string;
  imageUrl: string;
  rating: number;
  genres: string[];
  episodes?: number;
  seasons?: number;
}

const SeriesCard = ({
  id,
  title,
  year,
  imageUrl,
  rating,
  genres,
  episodes,
  seasons,
}: SeriesCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg group">
      <div className="relative aspect-[2/3] overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 p-3 w-full">
            {seasons && episodes && (
              <p className="text-white text-xs mb-2">
                {seasons} {seasons === 1 ? "сезон" : seasons < 5 ? "сезона" : "сезонов"}, {episodes} {episodes === 1 ? "серия" : episodes < 5 ? "серии" : "серий"}
              </p>
            )}
            <div className="flex gap-1 flex-wrap">
              {genres.slice(0, 2).map((genre) => (
                <Badge key={genre} variant="secondary" className="text-xs">
                  {genre}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute top-2 right-2 bg-black/70 text-white text-xs font-bold rounded-md px-1.5 py-1 flex items-center gap-0.5">
          <Icon name="Star" className="h-3 w-3 text-yellow-400 fill-yellow-400" />
          <span>{rating.toFixed(1)}</span>
        </div>
      </div>
      <CardContent className="p-3">
        <h3 className="font-semibold text-sm line-clamp-1 mb-1">{title}</h3>
        <p className="text-xs text-muted-foreground">{year}</p>
      </CardContent>
    </Card>
  );
};

export default SeriesCard;
